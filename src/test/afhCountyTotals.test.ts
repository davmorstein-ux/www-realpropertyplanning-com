import { describe, expect, it } from "vitest";
import { countiesChecked, getCountySummary } from "@/data/afh/directory";

/**
 * County totals must equal DSHS's own county counts (counties.json). Cities
 * that straddle a county line count toward each county only for the homes in
 * it (byCounty). Before Oct 4, 2026, King showed 1,909 against DSHS's 1,819.
 */
describe("AFH county totals", () => {
  for (const c of countiesChecked.filter((x) => x.facilityCount > 0)) {
    it(`${c.county}: homes and beds match the DSHS county count`, () => {
      const s = getCountySummary(c.county);
      expect(s, c.county).not.toBeNull();
      expect(s!.facilityCount).toBe(c.facilityCount);
      expect(s!.totalBeds).toBe(c.totalBeds);
    });
  }
});
