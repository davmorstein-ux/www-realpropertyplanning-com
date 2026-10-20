/**
 * "People who help with this" (src/data/topicProfessionals.ts): every mapped
 * page exists, every category has people, and David's rules hold.
 */
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import agingRoutes from "@/data/agingParentRoutes.json";
import { TOPIC_PROFESSIONALS } from "@/data/topicProfessionals";
import { PROFESSIONAL_GROUPS, professionalGroup } from "@/data/familyProfessionals";

const app = readFileSync(path.resolve(__dirname, "../App.tsx"), "utf8");
const routes = new Set([...app.matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]));
for (const r of agingRoutes as { path: string }[]) routes.add(r.path);

describe("topic professionals", () => {
  it("every mapped page is a real route", () => {
    for (const p of Object.keys(TOPIC_PROFESSIONALS)) expect(routes.has(p), p).toBe(true);
  });

  it("every category key has at least one listed professional, and keys are unique", () => {
    expect(new Set(PROFESSIONAL_GROUPS.map((g) => g.key)).size).toBe(PROFESSIONAL_GROUPS.length);
    for (const keys of Object.values(TOPIC_PROFESSIONALS)) {
      expect(keys.length).toBeGreaterThan(0);
      expect(keys.length).toBeLessThanOrEqual(3);
      for (const k of keys) expect(professionalGroup(k)?.professionals.length, k).toBeGreaterThan(0);
    }
  });

  it("no attorneys on the estate pages until a probate attorney is listed", () => {
    for (const [p, keys] of Object.entries(TOPIC_PROFESSIONALS)) {
      if (p.startsWith("/estate-probate-inherited-property/")) {
        expect(keys, p).not.toContain("elderLaw");
        expect(keys, p).not.toContain("familyLaw");
        expect(keys, p).not.toContain("legalPlans");
      }
    }
  });

  it("real estate & appraisal (the founder) appears only on property topics", () => {
    for (const [p, keys] of Object.entries(TOPIC_PROFESSIONALS)) {
      if (keys.includes("realEstate")) expect(p, p).toMatch(/property|managing-the-home/);
    }
  });
});
