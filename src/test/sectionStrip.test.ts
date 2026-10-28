import { describe, expect, it } from "vitest";
import { PRIMARY_NAV } from "@/lib/primaryNav";
import { CUSTOM_HEADER_ROUTES, STRIP_LABELS, STRIP_MENUS, STRIP_PHOTOS, sectionStripFor } from "@/lib/sectionStrip";

const stripItems = PRIMARY_NAV.filter((m) => STRIP_MENUS.includes(m.href)).flatMap((m) => m.items ?? []);

describe("section strip", () => {
  it("every strip menu exists in the site menu", () => {
    for (const href of STRIP_MENUS) expect(PRIMARY_NAV.some((m) => m.href === href)).toBe(true);
  });

  it("every short label belongs to a topic in a strip menu (no stale labels)", () => {
    for (const href of Object.keys(STRIP_LABELS)) expect(stripItems.some((i) => i.href === href)).toBe(true);
  });

  it("shows the Estate & Probate strip with the current page highlighted", () => {
    const s = sectionStripFor("/probate-estate-sales");
    expect(s?.heading).toBe("Estate & Probate");
    expect(s?.links.filter((l) => l.current).map((l) => l.href)).toEqual(["/probate-estate-sales"]);
    expect(s?.links.length).toBe(PRIMARY_NAV[0].items!.length);
  });

  it("puts How the Process Works in Estate & Probate, not About", () => {
    expect(sectionStripFor("/how-the-process-works")?.heading).toBe("Estate & Probate");
  });

  it("never shows on AFH Club pages (they have their own bar) or About-only pages", () => {
    expect(sectionStripFor("/afh-club/homes")).toBeNull();
    expect(sectionStripFor("/afh-club")).toBeNull();
    expect(sectionStripFor("/contact")).toBeNull();
    expect(sectionStripFor("/faq")).toBeNull();
  });

  it("still links to the AFH directory from the Senior Transitions strip", () => {
    expect(sectionStripFor("/senior-transitions")?.links.some((l) => l.href === "/afh-club/homes")).toBe(true);
  });

  it("leaves out anchor links and ignores a trailing slash", () => {
    const s = sectionStripFor("/guides-and-resources/");
    expect(s?.heading).toBe("Guides & Tools");
    expect(s?.links.some((l) => l.href.includes("#"))).toBe(false);
  });

  it("has exactly one current pill on every strip page", () => {
    for (const item of stripItems) {
      const s = sectionStripFor(item.href);
      if (!s) continue; // AFH Club pages
      expect(s.links.filter((l) => l.current).length).toBe(1);
    }
  });

  it("gives every strip menu a photo band", () => {
    for (const href of STRIP_MENUS) expect(STRIP_PHOTOS[href]).toBeTruthy();
    expect(sectionStripFor("/realtor")?.photo).toBe("professional");
  });

  it("lists only real strip pages as custom-header pages", () => {
    for (const r of CUSTOM_HEADER_ROUTES) expect(sectionStripFor(r)).not.toBeNull();
  });
});
