import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { ask, buildCards } from "@/lib/askSearch";
import type { Page, Term } from "@/lib/mcp/data";
import { ALL_LIBRARY_ENTRIES, EVERY_LIBRARY_ENTRY, JOURNEYS, LIBRARIES, journeyPath, libraryEntriesAll, libraryFor, libraryJourneyPath } from "@/data/questionLibrary";
import { REDIRECTS } from "@/data/redirects";

/**
 * The question library (src/data/questionLibrary.ts). Each answer restates a page on the site,
 * so the checks here are about links, wording and the Ask box; the facts were checked against
 * the pages when the entries were written (see that file's header).
 */
const app = readFileSync(resolve(__dirname, "../App.tsx"), "utf8");
const isRoute = (p: string) =>
  app.includes(`path="${p}"`) ||
  (p.startsWith("/helping-an-aging-parent/") && app.includes('path="/helping-an-aging-parent/*"')) ||
  (/^\/cost-of-care-calculator\/[a-z-]+$/.test(p) && app.includes('path="/cost-of-care-calculator/:careSlug"'));
const redirected = new Set(REDIRECTS.map((r) => r.from));
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

describe("question library: content", () => {
  it("every journey has entries and a route", () => {
    for (const j of JOURNEYS) {
      expect(libraryFor(j.slug).length, j.slug).toBeGreaterThan(20);
      expect(isRoute(journeyPath(j.slug)), journeyPath(j.slug)).toBe(true);
    }
    expect(isRoute("/questions")).toBe(true);
    for (const j of LIBRARIES.afh.journeys) {
      expect(LIBRARIES.afh.entries(j.slug).length, j.slug).toBeGreaterThan(15);
      expect(isRoute(libraryJourneyPath(LIBRARIES.afh, j.slug)), j.slug).toBe(true);
    }
    expect(isRoute("/afh-club/questions")).toBe(true);
  });

  it("AFH Club answers link only to AFH Club pages, and never to pages whose figures change monthly", () => {
    for (const e of libraryEntriesAll(LIBRARIES.afh))
      for (const p of [e.path, ...(e.also ?? [])]) {
        expect(p.startsWith("/afh-club/"), `${e.id} links to ${p}`).toBe(true);
        expect(/\/afh-club\/(listings|sold|for-sale|market-report|new-licenses|washington-afh-data)/.test(p), `${e.id} links to ${p}`).toBe(false);
      }
  });

  it("ids are unique and every link is a live page, not a redirect", () => {
    expect(new Set(EVERY_LIBRARY_ENTRY.map((e) => e.id)).size).toBe(EVERY_LIBRARY_ENTRY.length);
    for (const e of EVERY_LIBRARY_ENTRY) {
      for (const p of [e.path, ...(e.also ?? [])]) {
        expect(isRoute(p), `${e.id} links to ${p}, which is not a route`).toBe(true);
        expect(redirected.has(p), `${e.id} links to ${p}, which redirects`).toBe(false);
      }
      expect(e.pathTitle.trim().length, e.id).toBeGreaterThan(3);
    }
  });

  it("answers are short and plain; there are several ways to ask each question", () => {
    for (const e of EVERY_LIBRARY_ENTRY) {
      const w = e.a.split(/\s+/).length;
      expect(w, `${e.id} answer is ${w} words`).toBeGreaterThanOrEqual(30);
      expect(w, `${e.id} answer is ${w} words`).toBeLessThanOrEqual(95);
      expect(e.alts.length, e.id).toBeGreaterThanOrEqual(2);
      expect(e.a, e.id).not.toMatch(/https?:\/\/|\]\(|\*\*/);
    }
  });

  it("no phrasing is used twice", () => {
    const seen = new Map<string, string>();
    for (const e of EVERY_LIBRARY_ENTRY)
      for (const q of [e.q, ...e.alts]) {
        const k = norm(q);
        expect(seen.has(k), `"${q}" is in both ${seen.get(k)} and ${e.id}`).toBe(false);
        seen.set(k, e.id);
      }
  });

  it("names no one and endorses no one", () => {
    for (const e of EVERY_LIBRARY_ENTRY) {
      expect(e.a, e.id).not.toMatch(/\bDavid\b|\bStein\b|\bvetted\b|\bendorsed?\b|trusted professional|we recommend|our team/i);
      expect(e.a, e.id).not.toMatch(/\beXp\b/);
    }
  });
});

// Against the whole site, when a build has produced the data the live box loads.
const built = existsSync("dist/ai/pages.json") && existsSync("dist/ai/glossary.json");
describe.skipIf(!built)("question library: the Ask box, with every page on the site competing", () => {
  const pages = built ? ((JSON.parse(readFileSync("dist/ai/pages.json", "utf8")).data ?? []) as Page[]) : [];
  const terms = built ? ((JSON.parse(readFileSync("dist/ai/glossary.json", "utf8")).data ?? []) as Term[]) : [];
  const inBuild = pages.some((p) => p.path === "/questions/estate");
  const cards = buildCards(pages, terms);

  it.skipIf(!inBuild)("every question and every phrasing brings back its own answer", () => {
    for (const e of ALL_LIBRARY_ENTRIES)
      for (const q of [e.q, ...e.alts]) expect(ask(q, pages, cards, "rpp").answer?.q, `${e.id}: "${q}"`).toBe(e.q);
    if (pages.some((p) => p.path === "/afh-club/questions/running"))
      for (const e of libraryEntriesAll(LIBRARIES.afh))
        for (const q of [e.q, ...e.alts]) expect(ask(q, pages, cards, "afh").answer?.q, `${e.id}: "${q}"`).toBe(e.q);
  }, 600_000);

  it.skipIf(!inBuild)("answers link to the guide, never to the library page", () => {
    for (const e of ALL_LIBRARY_ENTRIES.slice(0, 40)) expect(ask(e.q, pages, cards, "rpp").answer?.path).toBe(e.path);
  }, 60_000);

  /* Questions worded differently from anything stored (Oct 11, 2026 probe). Each must reach the right page.
     These are regression guards for the matcher, not a target to tune the wording against. */
  const FRESH: [string, string][] = [
    ["my sister won't move out of mom's house after she died", "/guides/heirs-disagree-selling-house"],
    ["do we have to pay capital gains when we sell dad's house", "/guides/taxes-selling-inherited-house-washington"],
    ["is it better to sell an inherited house as is", "/guides/sell-inherited-house-as-is-or-fix"],
    ["how long do I have to file the will after someone dies", "/washington-probate-guide/deadlines-and-key-rules"],
    ["can I sell my house that is in a living trust without probate", "/washington-probate-guide/house-in-a-trust"],
    ["what is the difference between assisted living and an adult family home", "/senior-living/what-is-an-adult-family-home"],
    ["how much is memory care a month in washington", "/senior-living/memory-care"],
    ["can my brother and I split caregiving for dad", "/helping-an-aging-parent/needs-help-at-home/family-coordination"],
    ["should I put my kids on the deed to my house", "/articles/wills-trusts-other-options"],
    ["how do I make my house safer for aging", "/helping-an-aging-parent/living-independently/staying-safe-at-home"],
    ["do I need an appraiser or a realtor for an estate", "/guides/appraisal-vs-cma"],
    ["who handles the estate sale of my parents' stuff", "/professionals/estate-sale"],
    ["does it cost anything to be listed on this site", "/featured-professionals"],
  ];
  it.skipIf(!inBuild)("questions in visitors' own words reach the right page", () => {
    for (const [q, path] of FRESH) expect(ask(q, pages, cards, "rpp").answer?.path, q).toBe(path);
  });
});
