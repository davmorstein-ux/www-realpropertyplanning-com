import { describe, expect, it } from "vitest";
import { RULE_CHANGES, PENDING_RULES, OUTDATED_ADVICE, RULE_CATEGORIES } from "@/data/afhRuleChanges";

/* The tracker promises readers a "last verified" date. If nobody re-checks the
   rows for four months, this fails, which is the reminder to review them. */
const MAX_AGE_DAYS = 120;
const ageDays = (iso: string) => (Date.now() - new Date(iso + "T12:00:00").getTime()) / 86_400_000;
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const PRIMARY = /^https:\/\/(app\.leg\.wa\.gov|lawfilesext\.leg\.wa\.gov|www\.dshs\.wa\.gov|ofm\.wa\.gov|hca\.wa\.gov|statecourtreport\.org)\//;

describe("AFH rule-change tracker", () => {
  it("has unique ids and sane dates", () => {
    const ids = [...RULE_CHANGES.map((r) => r.id), ...PENDING_RULES.map((p) => p.id)];
    expect(new Set(ids).size).toBe(ids.length);
    for (const r of RULE_CHANGES) {
      expect(r.effective).toMatch(ISO);
      expect(r.verified).toMatch(ISO);
      expect(RULE_CATEGORIES).toContain(r.category);
    }
  });

  it("was re-verified within the last 120 days", () => {
    for (const r of [...RULE_CHANGES, ...PENDING_RULES]) {
      expect(ageDays(r.verified), `${r.id} last verified ${r.verified}`).toBeLessThan(MAX_AGE_DAYS);
    }
  });

  it("links only to primary sources", () => {
    for (const r of RULE_CHANGES) {
      expect(r.citation.href, r.id).toMatch(PRIMARY);
      expect(r.filing.href, r.id).toMatch(PRIMARY);
    }
    for (const p of PENDING_RULES) expect(p.filing.href, p.id).toMatch(PRIMARY);
  });

  it("points every piece of outdated advice at a real row", () => {
    for (const o of OUTDATED_ADVICE) expect(RULE_CHANGES.some((r) => r.id === o.ruleId), o.ruleId).toBe(true);
  });
});
