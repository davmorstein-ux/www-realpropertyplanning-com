import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  PROBATE_GLOSSARY,
  PROBATE_GLOSSARY_A_TO_Z,
  PROBATE_GLOSSARY_CATEGORIES,
  rcw,
  rcwChapter,
} from "@/data/probateGlossary";
import { PROBATE_GLANCE, PROBATE_PATHS, PROBATE_KEY_TERM_IDS, PROBATE_FAQS, PROBATE_PILLAR_SECTIONS } from "@/data/probatePillar";

const app = readFileSync(resolve(__dirname, "../App.tsx"), "utf8");
const isRoute = (href: string) => app.includes(`path="${href}"`);

describe("probate glossary and pillar (Sept 30, 2026)", () => {
  it("has unique ids and terms", () => {
    const ids = PROBATE_GLOSSARY.map((t) => t.id);
    const terms = PROBATE_GLOSSARY.map((t) => t.term.toLowerCase());
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(terms).size).toBe(terms.length);
    for (const id of ids) expect(id).toMatch(/^[a-z0-9-]+$/);
  });

  it("links every term, path step and route to a live page", () => {
    expect(isRoute("/washington-probate-guide")).toBe(true);
    expect(isRoute("/probate-glossary")).toBe(true);
    for (const t of PROBATE_GLOSSARY) expect(isRoute(t.guide.href), `${t.id} -> ${t.guide.href}`).toBe(true);
    for (const p of PROBATE_PATHS) for (const s of p.steps) expect(isRoute(s.href), s.href).toBe(true);
  });

  it("keeps family-side content out of AFH Club", () => {
    for (const t of PROBATE_GLOSSARY) expect(t.guide.href.startsWith("/afh-club")).toBe(false);
  });

  it("cites only primary sources over https", () => {
    const ok = /^https:\/\/(app\.leg\.wa\.gov|lawfilesext\.leg\.wa\.gov|dor\.wa\.gov|www\.irs\.gov|www\.law\.cornell\.edu\/uscode)\//;
    for (const t of PROBATE_GLOSSARY) if (t.source) expect(t.source.href, t.id).toMatch(ok);
    for (const g of PROBATE_GLANCE) expect(g.src.href, g.topic).toMatch(ok);
  });

  it("builds statute file names the way the Legislature names them", () => {
    // Forms confirmed live on Sept 30, 2026.
    expect(rcw("11.40.051")).toBe("https://lawfilesext.leg.wa.gov/law/RCW/RCW%20%2011%20%20TITLE/RCW%20%2011%20.%2040%20%20CHAPTER/RCW%20%2011%20.%2040%20.051.htm");
    expect(rcw("43.20B.080")).toBe("https://lawfilesext.leg.wa.gov/law/RCW/RCW%20%2043%20%20TITLE/RCW%20%2043%20.%2020B%20CHAPTER/RCW%20%2043%20.%2020B.080.htm");
    expect(rcw("7.52.010")).toBe("https://lawfilesext.leg.wa.gov/law/RCW/RCW%20%20%207%20%20TITLE/RCW%20%20%207%20.%2052%20%20CHAPTER/RCW%20%20%207%20.%2052%20.010.htm");
    expect(rcwChapter("11.56")).toBe("https://lawfilesext.leg.wa.gov/law/RCW/RCW%20%2011%20%20TITLE/RCW%20%2011%20.%2056%20%20CHAPTER/RCW%20%2011%20.%2056%20%20CHAPTER.htm");
  });

  it("puts every term in a listed category, and sorts A to Z", () => {
    for (const t of PROBATE_GLOSSARY) expect(PROBATE_GLOSSARY_CATEGORIES).toContain(t.category);
    expect(PROBATE_GLOSSARY_A_TO_Z).toHaveLength(PROBATE_GLOSSARY.length);
  });

  it("keeps the pillar page's key terms in the glossary", () => {
    for (const id of PROBATE_KEY_TERM_IDS) expect(PROBATE_GLOSSARY.some((t) => t.id === id), id).toBe(true);
  });

  it("does not repeat the estate tax figures corrected on Sept 30, 2026", () => {
    // DOR: $3,000,000 and 10-20% for deaths from July 1, 2026; the 35% top rate
    // applied only to deaths July 1, 2025 to June 30, 2026; no inflation indexing
    // after June 2026. The pre-July-2025 $2.193 million figure is stale.
    const text = JSON.stringify([PROBATE_GLOSSARY, PROBATE_GLANCE, PROBATE_FAQS, PROBATE_PILLAR_SECTIONS]);
    expect(text).not.toMatch(/2\.193|adjusted for inflation/);
    expect(text).toMatch(/10 to 20 percent/);
  });
});
