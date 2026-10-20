/**
 * My Real Property Plan (src/data/myPlan.ts): every link is a live page and not
 * a redirect, every answer combination builds a sensible plan, and saving in the
 * URL fragment round-trips.
 */
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { REDIRECTS } from "@/data/redirects";
import agingRoutes from "@/data/agingParentRoutes.json";
import {
  OFFICIAL_SOURCES,
  QUESTIONS,
  SITUATIONS,
  buildPlan,
  decodePlan,
  encodePlan,
  isComplete,
  visibleQuestions,
  type Answers,
  type Situation,
} from "@/data/myPlan";

const app = readFileSync(path.resolve(__dirname, "../App.tsx"), "utf8");
const routes = new Set([...app.matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]));
for (const r of agingRoutes as { path: string }[]) routes.add(r.path);
const redirected = new Set(REDIRECTS.map((r) => r.from));

/** Every complete set of answers for a situation, following showIf. */
function allAnswerSets(s: Situation): Answers[] {
  let sets: Answers[] = [{}];
  for (const q of QUESTIONS[s]) {
    const next: Answers[] = [];
    for (const a of sets) {
      if (q.showIf && !q.showIf(a)) {
        next.push(a);
        continue;
      }
      for (const o of q.options) next.push({ ...a, [q.id]: o.value });
    }
    sets = next;
  }
  return sets;
}

describe("My Real Property Plan", () => {
  for (const { value: s } of SITUATIONS) {
    const sets = allAnswerSets(s);

    it(`${s}: every combination is complete and builds 5–12 steps with unique ids`, () => {
      expect(sets.length).toBeGreaterThan(10);
      for (const a of sets) {
        expect(isComplete(s, a)).toBe(true);
        const plan = buildPlan(s, a);
        expect(plan.length, JSON.stringify(a)).toBeGreaterThanOrEqual(5);
        expect(plan.length, JSON.stringify(a)).toBeLessThanOrEqual(12);
        expect(new Set(plan.map((p) => p.id)).size).toBe(plan.length);
        expect(plan[0].id === "authority" || plan[0].id === "start").toBe(true);
        for (const step of plan) {
          expect(step.links.length).toBeGreaterThan(0);
          expect(step.why.length).toBeGreaterThan(30);
        }
      }
    });

    it(`${s}: every link is a live page, not a redirect`, () => {
      const hrefs = new Set(sets.flatMap((a) => buildPlan(s, a).flatMap((p) => p.links.map((l) => l.href))));
      for (const h of hrefs) {
        expect(routes.has(h), `${h} is not a route`).toBe(true);
        expect(redirected.has(h), `${h} redirects`).toBe(false);
      }
    });

    it(`${s}: the saved link round-trips`, () => {
      for (const a of sets.slice(0, 50)) {
        const back = decodePlan(encodePlan(s, a));
        expect(back?.situation).toBe(s);
        expect(back?.answers).toEqual(a);
      }
    });
  }

  it("the court question is skipped when the house is in a trust or passed jointly", () => {
    expect(visibleQuestions("estate", { title: "trust" }).some((q) => q.id === "court")).toBe(false);
    expect(visibleQuestions("estate", { title: "joint" }).some((q) => q.id === "court")).toBe(false);
    expect(visibleQuestions("estate", { title: "alone" }).some((q) => q.id === "court")).toBe(true);
  });

  it("a dated house that's being sold gets the remodel calculator; a keep doesn't", () => {
    const base = { role: "executor", title: "alone", court: "opened", condition: "dated", occupied: "vacant" };
    const sell = buildPlan("estate", { ...base, goal: "sell" }).flatMap((p) => p.links.map((l) => l.href));
    const keep = buildPlan("estate", { ...base, goal: "keep" }).flatMap((p) => p.links.map((l) => l.href));
    expect(sell).toContain("/whats-my-remodel-worth");
    expect(keep).not.toContain("/whats-my-remodel-worth");
  });

  it("official sources: every situation has some, and every link is an official https site", () => {
    const official = /^https:\/\/(www\.)?(courts\.wa\.gov|app\.leg\.wa\.gov|irs\.gov|dor\.wa\.gov|dshs\.wa\.gov|hca\.wa\.gov|wacaresfund\.wa\.gov)\//;
    for (const { value: s } of SITUATIONS) {
      expect(OFFICIAL_SOURCES[s].length).toBeGreaterThanOrEqual(4);
      for (const src of OFFICIAL_SOURCES[s]) if (src.href) expect(src.href, src.title).toMatch(official);
    }
  });

  it("junk in the fragment is ignored", () => {
    expect(decodePlan("#nope")).toBeNull();
    expect(decodePlan("#estate:role=<script>,goal=sell")?.answers).toEqual({ goal: "sell" });
  });
});
