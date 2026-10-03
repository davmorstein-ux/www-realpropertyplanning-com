import { describe, it, expect } from "vitest";
import { totalCareCost, monthlyIn, shade } from "@/lib/careCostMath";

describe("cost-of-care math", () => {
  it("prices each year of care at that year's cost", () => {
    // Assisted living, Washington, 3.5%, starting now, 3 years (the owner-approved mockup).
    expect(Math.round(totalCareCost(7546, 3.5, 0, 3))).toBe(281275);
    expect(Math.round(totalCareCost(6200, 3.5, 0, 3))).toBe(231103);
  });
  it("starts later years at the grown cost", () => {
    expect(Math.round(totalCareCost(1000, 3.5, 2, 1))).toBe(Math.round(monthlyIn(1000, 3.5, 2) * 12));
    expect(totalCareCost(1000, 0, 5, 2)).toBe(24000);
  });
  it("shades colours toward black and white", () => {
    expect(shade("#ffffff", 0.5)).toBe("#808080");
    expect(shade("#000000", -1)).toBe("#ffffff");
  });
});
