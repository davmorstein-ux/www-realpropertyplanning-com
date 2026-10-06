import { readFileSync, readdirSync } from "fs";
import stats from "@/data/afh/stats.json";
import { EDITIONS, LATEST_CHANGES } from "@/data/afhMarketReport";

const directory = new Map<string, { slug: string; citySlug: string }>();
for (const f of readdirSync("src/data/afh/cities")) {
  const d = JSON.parse(readFileSync(`src/data/afh/cities/${f}`, "utf8"));
  const homes = Array.isArray(d) ? d : d.homes ?? Object.values(d).find(Array.isArray);
  for (const h of homes) directory.set(h.licenseNumber, { slug: h.slug, citySlug: h.address.citySlug });
}

describe("AFH market report", () => {
  it("editions agree with the DSHS statistics they cite", () => {
    for (const e of EDITIONS) {
      if (e.dshs.asOf !== stats.retrievedTo) continue;
      expect(e.dshs.homes).toBe(stats.state.homes);
      expect(e.dshs.beds).toBe(stats.state.beds);
    }
  });
  it("licensing counts match the changes file and county rows add up", () => {
    for (const e of EDITIONS) {
      const c = JSON.parse(readFileSync(`src/data/afh/changes/${e.licensing.changesFile}.json`, "utf8"));
      expect(e.licensing.newHomes).toBe(c.newHomes.length);
      expect(e.licensing.ownershipChanges).toBe(c.ownershipChanges.length);
      expect(e.licensing.closed).toBe(c.closed.length);
      const sum = (k: "newHomes" | "ownershipChanges" | "closed") => e.licensing.byCounty.reduce((a, r) => a + r[k], 0);
      expect(sum("newHomes")).toBe(e.licensing.newHomes);
      expect(sum("closed")).toBe(e.licensing.closed);
    }
  });
  it("sales groups add up", () => {
    for (const e of EDITIONS) expect(e.sales.soldLicensed.count + e.sales.soldOther.count).toBe(e.sales.sold.count);
  });
  it("every new or changed home links to a live directory page", () => {
    for (const h of [...LATEST_CHANGES.newHomes, ...LATEST_CHANGES.ownershipChanges]) {
      const d = directory.get(h.license);
      expect(d, h.license).toBeTruthy();
      expect(d!.slug).toBe(h.slug);
      expect(d!.citySlug).toBe(h.citySlug);
    }
  });
});
