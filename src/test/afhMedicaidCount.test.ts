import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

/**
 * "Accepts Medicaid" must mean the base DSHS adult family home contract, so the
 * headline Medicaid count and the contracts table always agree. Oct 2026 audit:
 * one King County home with only WA Cares Fund contracts (state LTC insurance,
 * not Medicaid) made the FAQ say 5,803 while the table said 5,802.
 */
describe("AFH Medicaid count", () => {
  const dir = join(process.cwd(), "src/data/afh");
  const files = readdirSync(dir).filter((f) => f.endsWith("-county.json"));
  it("acceptsMedicaid matches the base Medicaid contract on every home", () => {
    const mismatches: string[] = [];
    for (const f of files) {
      const raw = JSON.parse(readFileSync(join(dir, f), "utf8"));
      const homes: Array<{ licenseNumber: string; acceptsMedicaid?: boolean; contracts?: string[] }> =
        Array.isArray(raw) ? raw : raw.homes ?? raw.facilities ?? [];
      for (const h of homes) {
        const base = (h.contracts ?? []).includes("adultFamilyHome");
        if (!!h.acceptsMedicaid !== base) mismatches.push(`${f} ${h.licenseNumber}`);
      }
    }
    expect(mismatches).toEqual([]);
  });
});
