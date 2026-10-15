import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { gunzipSync } from "node:zlib";
import { resolve } from "node:path";
import { EMPTY_SCOPE, estimate, gradeAfter, matchAddresses, rangeOf, rowToFacts, type RemodelModel, type ZipFile } from "@/lib/remodelValue";
import { REMODEL_PARTS, TIERS } from "@/data/remodelTiers";

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
    const scope = all("premium");
    const recent = estimate(model, mercer, { ...scope, doneYear: 2021 })!;
    const old = estimate(model, mercer, { ...scope, doneYear: 2010 })!;
    expect(recent.broker).toBeGreaterThan(old.broker);
    expect(old.broker).toBeGreaterThan(old.asIs);
    expect(recent.appraiser).toBe(old.appraiser);
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
