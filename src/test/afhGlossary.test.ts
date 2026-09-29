import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { AFH_GLOSSARY, GLOSSARY_A_TO_Z, GLOSSARY_CATEGORIES } from "@/data/afhGlossary";

const app = readFileSync(resolve(__dirname, "../App.tsx"), "utf8");
const pillar = readFileSync(resolve(__dirname, "../pages/AFHPillarGuide.tsx"), "utf8");

describe("AFH glossary", () => {
  it("has unique ids and terms", () => {
    const ids = AFH_GLOSSARY.map((t) => t.id);
    const terms = AFH_GLOSSARY.map((t) => t.term.toLowerCase());
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(terms).size).toBe(terms.length);
    for (const id of ids) expect(id).toMatch(/^[a-z0-9-]+$/);
  });

  it("links every term to a live AFH Club route", () => {
    for (const t of AFH_GLOSSARY) {
      expect(t.guide.href.startsWith("/afh-club/")).toBe(true);
      expect(app, `${t.id} -> ${t.guide.href}`).toContain(`path="${t.guide.href}"`);
    }
  });

  it("cites only primary sources over https", () => {
    for (const t of AFH_GLOSSARY) {
      if (!t.source) continue;
      expect(t.source.href).toMatch(/^https:\/\/(app\.leg\.wa\.gov|www\.dshs\.wa\.gov|fortress\.wa\.gov|ofm\.wa\.gov)\//);
    }
  });

  it("puts every term in a listed category, and sorts A to Z", () => {
    for (const t of AFH_GLOSSARY) expect(GLOSSARY_CATEGORIES).toContain(t.category);
    expect(GLOSSARY_A_TO_Z).toHaveLength(AFH_GLOSSARY.length);
  });

  it("keeps the pillar page's key terms in the glossary", () => {
    const ids = [...(pillar.match(/KEY_TERM_IDS = \[([^\]]+)\]/)?.[1] ?? "").matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1]);
    expect(ids.length).toBeGreaterThan(0);
    for (const id of ids) expect(AFH_GLOSSARY.some((t) => t.id === id), id).toBe(true);
  });
});
