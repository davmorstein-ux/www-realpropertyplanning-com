import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { QUICK_ANSWERS, QUICK_ANSWER_COST_TABLE } from "@/data/quickAnswers";
import { CARE_TYPES } from "@/lib/careTypes";
import { PROBATE_GLOSSARY } from "@/data/probateGlossary";

const app = readFileSync(resolve(__dirname, "../App.tsx"), "utf8");
const words = (s: string) => s.trim().split(/\s+/).length;

describe("quick answers (src/data/quickAnswers.ts)", () => {
  for (const [page, items] of Object.entries(QUICK_ANSWERS)) {
    it(`${page}: real route, short direct answers, each sourced or linked`, () => {
      expect(app).toContain(`path="${page}"`);
      for (const item of items) {
        expect(item.q.trim().endsWith("?"), item.q).toBe(true);
        const n = words(item.a);
        expect(n, `${item.q} is ${n} words`).toBeGreaterThanOrEqual(30);
        expect(n, `${item.q} is ${n} words`).toBeLessThanOrEqual(90);
        expect(Boolean(item.source || item.more), `${item.q} has no source or link`).toBe(true);
        if (item.source) expect(item.source.href).toMatch(/^https:\/\//);
        if (item.more) {
          const [path, anchor] = item.more.href.split("#");
          expect(app, `${item.more.href} is not a route`).toContain(`path="${path}"`);
          if (path === "/probate-glossary" && anchor) expect(PROBATE_GLOSSARY.some((t) => t.id === anchor), anchor).toBe(true);
        }
        expect(item.a, "no unverified placeholder text").not.toMatch(/VERIFY|TBD|\[/);
      }
    });
  }

  it("cost tables only name real care types", () => {
    for (const ids of Object.values(QUICK_ANSWER_COST_TABLE)) {
      for (const id of ids) expect(CARE_TYPES.some((c) => c.id === id), id).toBe(true);
    }
  });
});
