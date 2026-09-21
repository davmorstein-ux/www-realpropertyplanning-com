import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { GUIDE_LIBRARY, GUIDE_COUNT, HOMEPAGE_GUIDE_CLAIM } from "@/data/guideLibrary";

const app = readFileSync("src/App.tsx", "utf8");
const isRoute = (href: string) => app.includes(`path="${href}"`);
const isRedirect = (href: string) => new RegExp(`path="${href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"\\s*element=\\{<Navigate`).test(app);
const all = GUIDE_LIBRARY.flatMap((g) => g.pieces);

describe("the guides and articles the homepage counts", () => {
  it("there are at least as many as the homepage claims", () => {
    expect(GUIDE_COUNT).toBeGreaterThanOrEqual(HOMEPAGE_GUIDE_CLAIM);
  });
  it("every piece is a live page, and none is a redirect", () => {
    for (const p of all) {
      expect(isRoute(p.href), `${p.href} is not a route`).toBe(true);
      expect(isRedirect(p.href), `${p.href} is a redirect`).toBe(false);
    }
  });
  it("every group's 'start here' page is live", () => {
    for (const g of GUIDE_LIBRARY) if (g.landing) expect(isRoute(g.landing.href), g.landing.href).toBe(true);
  });
  it("no piece is listed twice, and no title is blank", () => {
    expect(new Set(all.map((p) => p.href)).size).toBe(all.length);
    for (const p of all) expect(p.title.trim().length, p.href).toBeGreaterThan(3);
  });
  it("adult family home content stays out: it belongs to AFH Club only", () => {
    for (const p of all) {
      expect(p.href.startsWith("/afh-club"), p.href).toBe(false);
      expect(p.href, "the family-side AFH explainer is excluded too").not.toBe("/senior-living/adult-family-homes");
    }
  });
  it("directory pages are not counted as guides", () => {
    for (const p of all) expect(p.href.startsWith("/resources"), p.href).toBe(false);
  });
  it("no section landing page is double-counted as a piece", () => {
    const landings = new Set(GUIDE_LIBRARY.map((g) => g.landing?.href).filter(Boolean));
    for (const p of all) expect(landings.has(p.href), p.href).toBe(false);
  });
  it("the homepage shows the claim from the data file and links it to the library", () => {
    const hub = readFileSync("src/components/AboutTheHub.tsx", "utf8");
    expect(hub).toContain("HOMEPAGE_GUIDE_CLAIM");
    expect(hub).toContain('to="/guides-and-resources"');
    expect(/<strong>\d+\+<\/strong> guides/.test(hub)).toBe(false);
  });
  it("/guides forwards to the library instead of dead-ending", () => {
    expect(isRedirect("/guides")).toBe(true);
  });
});
