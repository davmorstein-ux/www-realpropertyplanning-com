import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { AFH_CALCULATORS, FAMILY_CALCULATOR_HREFS, CALCULATOR_COUNT, HOMEPAGE_CALCULATOR_CLAIM } from "@/data/calculatorIndex";

const app = readFileSync("src/App.tsx", "utf8");
const routeExists = (href: string) =>
  app.includes(`path="${href}"`) ||
  // family calculators are served by one dynamic route
  (href.startsWith("/cost-of-care-calculator/") && app.includes('path="/cost-of-care-calculator/:careSlug"'));

describe("the calculators the homepage counts", () => {
  it("every listed calculator is a live route", () => {
    for (const href of [...AFH_CALCULATORS.map((c) => c.href), ...FAMILY_CALCULATOR_HREFS]) expect(routeExists(href), href).toBe(true);
  });
  it("there are at least as many calculators as the homepage claims", () => {
    expect(CALCULATOR_COUNT).toBeGreaterThanOrEqual(HOMEPAGE_CALCULATOR_CLAIM);
  });
  it("no calculator is listed twice", () => {
    const all = [...AFH_CALCULATORS.map((c) => c.href), ...FAMILY_CALCULATOR_HREFS];
    expect(new Set(all).size).toBe(all.length);
  });
  it("the homepage shows the claim from the data file, not a typed number", () => {
    const hub = readFileSync("src/components/HomepageTrustBar.tsx", "utf8");
    expect(hub).toContain("HOMEPAGE_CALCULATOR_CLAIM");
    expect(/<strong>\d+<\/strong> calculators/.test(hub)).toBe(false);
  });
  it("the /calculators page exists and the homepage links to it and to the directory", () => {
    expect(routeExists("/calculators")).toBe(true);
    const hub = readFileSync("src/components/HomepageTrustBar.tsx", "utf8");
    expect(hub).toContain('"/calculators"'); expect(hub).toContain('"/afh-club/homes"');
  });
});
