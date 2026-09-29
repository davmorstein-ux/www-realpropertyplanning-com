import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
// @ts-ignore plain .mjs script with no type declarations (the error differs between tsconfigs)
import { computeAfhStats } from "../../scripts/build-afh-stats.mjs";
import stats from "@/data/afh/stats.json";

describe("Washington AFH statistics", () => {
  it("stats.json matches the directory data (run: node scripts/build-afh-stats.mjs)", () => {
    expect(computeAfhStats(resolve(__dirname, "../data/afh"))).toEqual(stats);
  });
  it("county rows add up to the state totals", () => {
    expect(stats.counties.reduce((s, c) => s + c.homes, 0)).toBe(stats.state.homes);
    expect(stats.counties.reduce((s, c) => s + c.beds, 0)).toBe(stats.state.beds);
  });
  it("the downloadable CSV carries the same state total", () => {
    const csv = readFileSync(resolve(__dirname, "../../public/data/washington-afh-by-county.csv"), "utf8");
    expect(csv).toContain(`Washington (total),${stats.state.homes},${stats.state.beds},`);
  });
});
