import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { siteSearchIndex } from "@/lib/siteSearchIndex";

/**
 * The header search (src/components/SiteSearchBar.tsx) only finds pages listed
 * in src/lib/siteSearchIndex.ts, a hand-kept list. On Oct 28, 2026 the owner
 * typed "newsletter" and got nothing: 82 live pages had never been added. This
 * test keeps the list in step with public/sitemap.xml (which
 * scripts/check-sitemap.mjs keeps in step with the routes).
 *
 * Left out on purpose: translated pages (the search is English) and the
 * thousands of generated AFH directory and listing pages (their hubs are
 * listed; the directory has its own search).
 */
const sitemap = readFileSync(resolve(__dirname, "../../public/sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>https:\/\/realpropertyplanning\.com([^<]*)<\/loc>/g)].map((m) => m[1] || "/");
const LOCALE = /^\/(es|vi|zh|zh-hant|ko|ru|so|ti|am|uk|tl)(\/|$)/;
const searchable = urls.filter(
  (u) => !LOCALE.test(u) && !u.startsWith("/afh-club/homes/") && !u.startsWith("/afh-club/listings/"),
);
const listed = new Set(siteSearchIndex.map((e) => e.path));

describe("site search index", () => {
  it("lists every English page in the sitemap", () => {
    const missing = searchable.filter((u) => !listed.has(u));
    expect(missing, `Add these pages to src/lib/siteSearchIndex.ts: ${missing.join(", ")}`).toEqual([]);
  });

  it("has no duplicate pages and no blank labels", () => {
    expect(listed.size).toBe(siteSearchIndex.length);
    for (const e of siteSearchIndex) expect(e.label.trim()).not.toBe("");
  });

  it("finds the newsletter", () => {
    expect(siteSearchIndex.some((e) => e.path === "/newsletter" && /newsletter/i.test(e.label))).toBe(true);
  });
});
