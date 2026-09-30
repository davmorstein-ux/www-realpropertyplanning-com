import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { PROBATE_START_HERE_ROUTES, PROBATE_START_HERE } from "@/data/probateStartHere";
import { PROBATE_GLOSSARY } from "@/data/probateGlossary";

const root = resolve(__dirname, "..");
const app = readFileSync(resolve(root, "App.tsx"), "utf8");

/** The page file a route renders, found through App.tsx's lazy imports. */
const fileFor = (route: string) => {
  const m = app.match(new RegExp(`path="${route.replace(/[/.-]/g, "\\$&")}"\\s+element=\\{\\s*(?:<LanguageRoute[^>]*>\\s*)?<(\\w+)`));
  if (!m) return null;
  const imp = app.match(new RegExp(`const ${m[1]} = lazy\\(\\s*\\(\\) => import\\("\\./([^"]+)"\\)`)) ?? app.match(new RegExp(`import ${m[1]} from "\\./([^"]+)"`));
  const p = imp && resolve(root, `${imp[1]}.tsx`);
  return p && existsSync(p) ? p : null;
};

describe("probate start-here band (Sept 30, 2026)", () => {
  it("is rendered by every listed route, directly or through its layout", () => {
    for (const r of PROBATE_START_HERE_ROUTES) {
      const f = fileFor(r);
      expect(f, `${r}: page file not found`).toBeTruthy();
      const src = readFileSync(f as string, "utf8");
      const direct = src.includes("<ProbateStartHere />");
      const viaLayout = /from "@\/components\/(Estate|Executor)SubPageLayout"/.test(src) && !src.includes("<main");
      expect(direct || viaLayout, `${r} (${f}) does not render <ProbateStartHere />`).toBe(true);
    }
  });

  it("sits first inside <main>, so the hero reset in the component applies", () => {
    for (const r of PROBATE_START_HERE_ROUTES) {
      const src = readFileSync(fileFor(r) as string, "utf8");
      if (!src.includes("<main")) continue;
      expect(/<main\b[^>]*>\s*<ProbateStartHere \/>/.test(src), r).toBe(true);
    }
  });

  it("links to live pages and real glossary terms", () => {
    expect(app).toContain(`path="${PROBATE_START_HERE.guide.href}"`);
    expect(app).toContain(`path="${PROBATE_START_HERE.glossary.href}"`);
    for (const t of PROBATE_START_HERE.terms) {
      const id = t.href.split("#")[1];
      expect(PROBATE_GLOSSARY.some((g) => g.id === id), id).toBe(true);
    }
  });
});
