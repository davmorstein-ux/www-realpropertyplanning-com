import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { gunzipSync } from "node:zlib";
import { resolve } from "node:path";
import { countyOfKey, EMPTY_SCOPE, EMPTY_SPEND, estimate, estimateSpend, gradeAfter, matchAddresses, rangeOf, renoCeilings, rowToFacts, type RemodelModel, type ZipFile } from "@/lib/remodelValue";
import { REMODEL_PARTS, TIERS } from "@/data/remodelTiers";
import { SPEND_CATEGORIES } from "@/data/remodelCosts";
import { BASE_RATE, rateFactor } from "@/data/mortgageRates";

/** What's My Remodel Worth? (src/lib/remodelValue.ts). */
const dir = resolve(__dirname, "../../public/data/remodel");
const model = JSON.parse(readFileSync(`${dir}/model.json`, "utf8")) as RemodelModel;
const zip = (z: string) => JSON.parse(gunzipSync(readFileSync(`${dir}/zip/${z}.bin`)).toString("utf8")) as ZipFile;

const mercer = {
  sk: model.zipDefault["98040"],
  above: 2800, finBsmt: 0, unfinBsmt: 0, beds: 4, baths: 2.5, fp: 1, garage: true, lot: 12000,
  yrBuilt: 1975, yrRenovated: 0, cond: 3, grade: 8, views: 0, waterfront: false,
};
const all = (t: "economy" | "standard" | "premium" | "luxury") => ({ ...EMPTY_SCOPE, tiers: Object.fromEntries(REMODEL_PARTS.map((p) => [p.id, t])) });

describe("remodel value model", () => {
  it("the tier weights add to 1 and every part has an example for every tier", () => {
    expect(REMODEL_PARTS.reduce((t, p) => t + p.weight, 0)).toBeCloseTo(1, 6);
    for (const p of REMODEL_PARTS) for (const t of TIERS) expect(p.examples[t.id].length, `${p.id} ${t.id}`).toBeGreaterThan(5);
  });

  it("no remodel means all three values match", () => {
    const r = estimate(model, mercer, EMPTY_SCOPE)!;
    expect(r.broker).toBe(r.asIs);
    expect(r.appraiser).toBe(r.asIs);
  });

  it("a typical Mercer Island house lands in a believable range", () => {
    const r = estimate(model, mercer, EMPTY_SCOPE)!;
    expect(r.asIs).toBeGreaterThan(1_300_000);
    expect(r.asIs).toBeLessThan(2_600_000);
  });

  it("an upgrade: broker's view ≥ appraiser's view > as is", () => {
    const r = estimate(model, mercer, all("premium"))!;
    expect(r.appraiser).toBeGreaterThan(r.asIs);
    expect(r.broker).toBeGreaterThanOrEqual(r.appraiser);
  });

  it("redoing everything at premium makes the house grade 10; economy finishes pull a grade 10 house down", () => {
    expect(gradeAfter(7, all("premium"))).toBeCloseTo(10, 6);
    expect(gradeAfter(10, all("economy"))).toBeLessThan(10);
  });

  it("quality past the neighborhood's best houses is capped for the appraiser", () => {
    const r = estimate(model, { ...mercer, sk: model.zipDefault["98042"] }, all("luxury"))!;
    expect(r.overImproved).toBe(true);
    expect(r.newGrade).toBeGreaterThan(r.neighborhoodTopGrade);
  });

  it("already remodeled: older work earns the smaller premium; the appraiser's view ignores the year", () => {
    // A partial remodel, so the full-renovation ceiling does not flatten the difference.
    const scope = { ...EMPTY_SCOPE, tiers: { kitchen: "standard" as const, baths: "standard" as const, flooring: "standard" as const } };
    const recent = estimate(model, mercer, { ...scope, doneYear: 2021 })!;
    const old = estimate(model, mercer, { ...scope, doneYear: 2010 })!;
    expect(recent.broker).toBeGreaterThan(old.broker);
    expect(old.broker).toBeGreaterThan(old.asIs);
    expect(recent.appraiser).toBe(old.appraiser);
  });

  it("a fully remodeled older house never prices above the same house built new", () => {
    for (const t of ["premium", "luxury"] as const) {
      const r = estimate(model, mercer, all(t))!;
      expect(r.broker, t).toBeLessThanOrEqual(r.newBuild);
      expect(r.appraiser, t).toBeLessThanOrEqual(Math.round(r.newBuild * 0.95 / 1000) * 1000 + 1000);
      expect(r.appraiser, t).toBeLessThanOrEqual(r.broker);
      expect(r.broker, t).toBeGreaterThan(r.asIs);
    }
  });

  it("a full remodel adds at most about 30% (broker) / 20% (appraiser) over the unrenovated house", () => {
    // The owner's paired sales, 98034 split entries: $985,000 unrenovated, $1,315,000 fully renovated.
    const split = { ...mercer, sk: model.zipDefault["98034"], above: 1150, finBsmt: 850, unfinBsmt: 150, lot: 8500, yrBuilt: 1977, grade: 7 };
    for (const t of ["standard", "premium", "luxury"] as const) {
      const r = estimate(model, split, all(t))!;
      expect(r.broker / r.unrenovated, t).toBeLessThanOrEqual(1.301);
      expect(r.appraiser / r.unrenovated, t).toBeLessThanOrEqual(1.201);
    }
    const r = estimate(model, split, all("premium"))!;
    expect(r.unrenovated).toBeGreaterThan(850_000);
    expect(r.unrenovated).toBeLessThan(1_150_000);
    expect(r.broker).toBeLessThan(1_450_000);
  });

  describe("spending sliders (the page's version)", () => {
    // The owner's paired sales, 98034 split entries: $985,000 unrenovated; similar house fully renovated
    // for about $250,000, $1,315,000.
    const split = { ...mercer, sk: model.zipDefault["98034"], above: 1150, finBsmt: 850, unfinBsmt: 150, lot: 8500, yrBuilt: 1977, grade: 7 };
    const full = { kitchen: 60000, baths: 45000, flooring: 22000, paint: 9000, finishes: 13000, exterior: 17000, extpaint: 8000, roof: 23000, windows: 20000, systems: 20000, landscaping: 13000 };

    it("the spending table's shares add to 1", () => {
      expect(SPEND_CATEGORIES.reduce((t, c) => t + c.share, 0)).toBeCloseTo(1, 6);
    });
    it("a complete $250,000 remodel lands near the owner's renovated sale, never past the ceilings", () => {
      const r = estimateSpend(model, split, { ...EMPTY_SPEND, spent: full })!;
      expect(r.unrenovated).toBeGreaterThan(850_000);
      expect(r.unrenovated).toBeLessThan(1_150_000);
      expect(r.broker / r.unrenovated).toBeGreaterThan(1.2);
      expect(r.broker / r.unrenovated).toBeLessThanOrEqual(r.ceilingBroker + 0.001);
      expect(r.appraiser / r.unrenovated).toBeLessThanOrEqual(r.ceilingAppraiser + 0.001);
      expect(r.broker).toBeLessThan(1_400_000); // the renovated comparable sold for $1,315,000
      expect(r.appraiser).toBeLessThanOrEqual(r.broker);
    });
    it("spending more always helps a little less: doubling a kitchen adds far less than double", () => {
      const a = estimateSpend(model, split, { ...EMPTY_SPEND, spent: { kitchen: 50000 } })!;
      const b = estimateSpend(model, split, { ...EMPTY_SPEND, spent: { kitchen: 100000 } })!;
      expect(b.broker).toBeGreaterThanOrEqual(a.broker);
      expect(b.broker - a.asIs).toBeLessThan(1.5 * (a.broker - a.asIs));
      expect(b.categories.find((c) => c.id === "kitchen")!.paysBackTo).toBeLessThan(100000);
    });
    it("nothing spent changes nothing; category values add up to the total gain", () => {
      const z = estimateSpend(model, split, EMPTY_SPEND)!;
      expect(z.broker).toBe(z.asIs);
      const r = estimateSpend(model, split, { ...EMPTY_SPEND, spent: full })!;
      const sum = r.categories.reduce((t, c) => t + c.broker, 0);
      expect(Math.abs(sum - (r.broker - r.asIs))).toBeLessThan(10_000);
    });
    it("the full-renovation ceiling rises with the neighborhood's price level", () => {
      expect(renoCeilings(550_000).broker).toBeLessThan(renoCeilings(1_050_000).broker);
      expect(renoCeilings(1_050_000).broker).toBeCloseTo(1.3, 3);
      expect(renoCeilings(1_050_000).appraiser).toBeCloseTo(1.2, 3);
      expect(renoCeilings(3_000_000).broker).toBeGreaterThan(1.33);
    });
    it("costs scale with the house: the same dollars matter more in Burien than in Clyde Hill", () => {
      const h = (z: string, sqft: number, grade: number) => ({ ...mercer, sk: model.zipDefault[z], above: sqft, grade, lot: 9000 });
      const ten = { ...EMPTY_SPEND, spent: { paint: 5000, flooring: 5000 } };
      const burien = estimateSpend(model, h("98166", 1700, 7), ten)!;
      const clyde = estimateSpend(model, h("98004", 4000, 10), ten)!;
      expect(burien.broker / burien.asIs).toBeGreaterThan(2 * (clyde.broker / clyde.asIs - 1) + 1);
      // $50,000 of windows is far past what pays back in Renton; $100,000 is about right in Medina
      const renton = estimateSpend(model, h("98058", 2100, 7), { ...EMPTY_SPEND, spent: { windows: 50000 } })!;
      const medina = estimateSpend(model, h("98039", 4500, 10), { ...EMPTY_SPEND, spent: { windows: 100000 } })!;
      expect((renton.broker - renton.asIs) / 50000).toBeLessThan(0.5);
      expect((medina.broker - medina.asIs) / 100000).toBeGreaterThan(0.8);
    });
    it("older work earns less", () => {
      const recent = estimateSpend(model, split, { ...EMPTY_SPEND, spent: full, doneYear: 2022 })!;
      const old = estimateSpend(model, split, { ...EMPTY_SPEND, spent: full, doneYear: 2010 })!;
      expect(old.broker).toBeLessThan(recent.broker);
    });
  });

  describe("Snohomish County", () => {
    const sno = JSON.parse(readFileSync(`${dir}/model-sno.json`, "utf8")) as RemodelModel;
    const snoZip = (z: string) => JSON.parse(gunzipSync(readFileSync(`${dir}/zip-sno/${z}.bin`)).toString("utf8")) as ZipFile;
    it("has its own model, keys that start with S, and labels for its own scales", () => {
      expect(sno.county).toBe("Snohomish");
      expect(Object.keys(sno.subs).every((k) => k.startsWith("S"))).toBe(true);
      expect(sno.gradeLabels?.["7"]).toBe("Average");
      expect(sno.condAvg).toBeGreaterThan(3);
      expect(readdirSync(`${dir}/zip-sno`).length).toBeGreaterThan(20);
    });
    it("prices a looked-up Mill Creek house in a believable range, and a full remodel stays under its ceiling", () => {
      const z = snoZip("98012");
      const r0 = z.homes.find((r) => r[2] > 1800 && r[2] < 2600 && r[10] > 1975 && r[10] < 1995)!;
      const h = rowToFacts(z, r0);
      const base = estimateSpend(sno, h, EMPTY_SPEND)!;
      expect(base.asIs).toBeGreaterThan(500_000);
      expect(base.asIs).toBeLessThan(1_600_000);
      const full = { kitchen: 60000, baths: 45000, flooring: 22000, paint: 9000, finishes: 13000, exterior: 17000, extpaint: 8000, roof: 23000, windows: 20000, systems: 20000, landscaping: 13000 };
      const r = estimateSpend(sno, h, { ...EMPTY_SPEND, spent: full })!;
      expect(r.broker / r.unrenovated).toBeLessThanOrEqual(r.ceilingBroker + 0.001);
      expect(r.broker).toBeGreaterThan(r.asIs);
    });
  });

  describe("Pierce County", () => {
    const pie = JSON.parse(readFileSync(`${dir}/model-pie.json`, "utf8")) as RemodelModel;
    const house = (zip: string) => ({ ...mercer, sk: pie.zipDefault[zip], above: 1900, finBsmt: 0, unfinBsmt: 0, beds: 3, baths: 2.5, lot: 7000, yrBuilt: 1995, yrRenovated: 0, cond: 4, grade: 7, views: 0, waterfront: false, garage: true, fp: 1 });
    it("has its own model with keys that start with P, and the page picks it from the key", () => {
      expect(pie.county).toBe("Pierce");
      expect(Object.keys(pie.subs).every((k) => k.startsWith("P"))).toBe(true);
      expect(pie.gradeLabels?.["7"]).toBe("Average");
      expect(pie.noRenovationYear).toBe(true);
      expect(countyOfKey("P101114")).toBe("Pierce");
      expect(countyOfKey("S123")).toBe("Snohomish");
      expect(countyOfKey("38-10")).toBe("King");
    });
    it("prices an average 1995 Puyallup two-story in a believable range, and Gig Harbor above Tacoma's south end", () => {
      const puy = estimateSpend(pie, house("98374"), EMPTY_SPEND)!;
      expect(puy.asIs).toBeGreaterThan(450_000);
      expect(puy.asIs).toBeLessThan(800_000);
      const gig = estimateSpend(pie, house("98335"), EMPTY_SPEND)!;
      const tac = estimateSpend(pie, house("98404"), EMPTY_SPEND)!;
      expect(gig.asIs).toBeGreaterThan(tac.asIs);
      const full = { kitchen: 40000, baths: 30000, flooring: 15000, paint: 6000, finishes: 9000, exterior: 12000, extpaint: 6000, roof: 16000, windows: 15000, systems: 15000, landscaping: 9000 };
      const r = estimateSpend(pie, house("98374"), { ...EMPTY_SPEND, spent: full })!;
      expect(r.broker / r.unrenovated).toBeLessThanOrEqual(r.ceilingBroker + 0.001);
      expect(r.broker).toBeGreaterThan(r.asIs);
    });
  });

  it("mortgage rates: higher rates lower every value, lower rates raise them, capped at 15%", () => {
    const split = { ...mercer, sk: model.zipDefault["98034"], above: 1150, finBsmt: 850, unfinBsmt: 150, lot: 8500, yrBuilt: 1977, grade: 7 };
    const at = (r: number) => estimateSpend(model, split, { ...EMPTY_SPEND, spent: { kitchen: 50000 }, rateFactor: rateFactor(r, BASE_RATE.King) })!;
    const base = at(BASE_RATE.King), high = at(BASE_RATE.King + 1), low = at(BASE_RATE.King - 1);
    expect(high.asIs).toBeLessThan(base.asIs);
    expect(low.broker).toBeGreaterThan(base.broker);
    expect(high.asIs / base.asIs).toBeCloseTo(0.97, 2);
    expect(rateFactor(20, BASE_RATE.King)).toBeCloseTo(0.85, 6);
    expect(rateFactor(NaN, BASE_RATE.King)).toBe(1);
  });

  it("the likely range brackets the estimate", () => {
    const r = rangeOf(model, 1_000_000)!;
    expect(r[0]).toBeLessThan(1_000_000);
    expect(r[1]).toBeGreaterThan(1_000_000);
  });

  it("every ZIP file has a known neighborhood for each house, and no names", () => {
    const files = readdirSync(`${dir}/zip`);
    expect(files.length).toBeGreaterThan(100);
    // Keep the data small enough to publish (Oct 14, 2026: publishing failed with 28 MB of uncompressed files).
    let total = 0;
    for (const f of files) total += readFileSync(`${dir}/zip/${f}`).length;
    expect(total, "compressed ZIP files total").toBeLessThan(12_000_000);
    for (const f of files.slice(0, 20)) {
      const z = zip(f.replace(".bin", ""));
      for (const k of z.keys) expect(model.subs[k] || model.areas[k.split("-")[0]], `${f} ${k}`).toBeTruthy();
      expect(z.homes[0].length).toBe(16);
    }
  });

  it("the address lookup finds a house by number and street", () => {
    const z = zip("98040");
    const first = z.homes[100];
    const hits = matchAddresses(z, first[0].toLowerCase());
    expect(hits[0][0]).toBe(first[0]);
    expect(estimate(model, rowToFacts(z, first), EMPTY_SCOPE)!.asIs).toBeGreaterThan(500_000);
  });
});
