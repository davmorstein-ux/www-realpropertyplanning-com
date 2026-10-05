import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { AFH_QUICK_LINKS, isAFHClubPath, isActiveQuickLink } from "@/lib/afhQuickLinks";

const app = readFileSync(resolve(__dirname, "../App.tsx"), "utf8");

describe("AFH Club quick links (Oct 1, 2026)", () => {
  it("are the owner's seven, each a live page", () => {
    expect(AFH_QUICK_LINKS.map((l) => l.label)).toEqual([
      "AFH Club Home", "Start Here", "Listings for Sale", "Home Directory", "Find a Professional", "Calculators", "Resources & Articles",
    ]);
    for (const l of AFH_QUICK_LINKS) expect(app, l.href).toContain(`path="${l.href}"`);
  });
  it("show on AFH Club pages only", () => {
    expect(isAFHClubPath("/afh-club")).toBe(true);
    expect(isAFHClubPath("/afh-club/homes/lakewood/family-love-adult-family-home-2-757823")).toBe(true);
    expect(isAFHClubPath("/afh-submit")).toBe(true);
    expect(isAFHClubPath("/afh-submit/")).toBe(true);
    expect(isAFHClubPath("/afh-club/")).toBe(true);
    expect(isAFHClubPath("/senior-living/adult-family-homes")).toBe(false);
    expect(isAFHClubPath("/probate-estate-sales")).toBe(false);
  });
  it("highlight the right section", () => {
    const by = (label: string) => AFH_QUICK_LINKS.find((l) => l.label === label)!;
    expect(isActiveQuickLink(by("Listings for Sale"), "/afh-club/listings/properties")).toBe(true);
    expect(isActiveQuickLink(by("Listings for Sale"), "/afh-club/sold")).toBe(true);
    expect(isActiveQuickLink(by("Home Directory"), "/afh-club/homes/lakewood")).toBe(true);
    expect(isActiveQuickLink(by("AFH Club Home"), "/afh-club/listings")).toBe(false);
  });
  it("are rendered once, by the site header", () => {
    expect(readFileSync(resolve(__dirname, "../components/Header.tsx"), "utf8")).toContain("<AFHClubQuickLinks />");
  });
});
