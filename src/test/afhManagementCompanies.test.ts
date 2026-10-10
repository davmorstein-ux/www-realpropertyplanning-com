import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { ask, buildCards } from "@/lib/askSearch";
import type { Page, Term } from "@/lib/mcp/data";
import { AFH_MGMT, AFH_MGMT_FAQS, AFH_MGMT_SOURCES, afhMgmtPrerenderSections } from "@/data/afhManagementCompanies";

/**
 * The management-company page exists so the "Ask a question" box can answer
 * these (it had no answer for any of them on Oct 10, 2026). The box answers
 * only from page FAQs, so these tests ask the real questions.
 */
const QUESTIONS: [string, string][] = [
  ["Can an AFH manager manage more than one adult family home?", "Can one AFH manager manage more than one adult family home in Washington?"],
  ["Can I hire a company to manage my adult family home?", "Can I hire a company to manage my adult family home?"],
  ["Can I own an adult family home without personally managing it?", "Can I own an adult family home without personally managing it?"],
  ["Where can I find an AFH management company?", "Where can I find an AFH management company?"],
  ["Can a resident manager work at two homes?", "Can a resident manager work at two adult family homes?"],
  ["Is it legal to run an AFH management company?", "Is it legal to run an adult family home management company in Washington?"],
];

describe("Hiring an AFH management company", () => {
  it("cites only rules it lists as sources, and every source is a WAC page or the DSHS form", () => {
    const text = JSON.stringify(AFH_MGMT_FAQS) + afhMgmtPrerenderSections().join(" ") + AFH_MGMT.SHORT_ANSWER;
    const cited = new Set([...text.matchAll(/WAC 388-76-(\d{5})/g)].map((m) => m[1]));
    const listed = new Set(AFH_MGMT_SOURCES.map((s) => s.cite.match(/388-76-(\d{5})/)?.[1]).filter(Boolean));
    for (const c of cited) expect(listed.has(c), `WAC 388-76-${c} is cited but not in the sources list`).toBe(true);
    for (const s of AFH_MGMT_SOURCES) expect(s.href).toMatch(/^https:\/\/(app\.leg\.wa\.gov\/WAC|www\.dshs\.wa\.gov)\//);
  });

  it("never claims a management company can run the home in the owner's place", () => {
    const text = (JSON.stringify(AFH_MGMT_FAQS) + afhMgmtPrerenderSections().join(" ")).toLowerCase();
    expect(text).not.toContain("without operating it");
    expect(text).not.toContain("asset stays in your name");
    expect(text).toContain("monthly");
    expect(text).toContain("quarterly");
  });

  it("does not publish management fee figures (none could be sourced, Oct 2026)", () => {
    const text = JSON.stringify(AFH_MGMT_FAQS) + afhMgmtPrerenderSections().join(" ");
    expect(/\d+\s?%|\$\s?\d/.test(text)).toBe(false);
  });

  it("the question box answers each meeting question from this page (page FAQs alone)", () => {
    const pages: Page[] = [
      {
        path: AFH_MGMT.PATH, url: `https://realpropertyplanning.com${AFH_MGMT.PATH}`, title: AFH_MGMT.TITLE, description: AFH_MGMT.DESCRIPTION, area: "afh",
        faq: AFH_MGMT_FAQS.map((f) => ({ q: f.question, a: f.answer })),
      },
    ];
    const cards = buildCards(pages, []);
    for (const [q, expected] of QUESTIONS) expect(ask(q, pages, cards, "afh").answer?.q, q).toBe(expected);
  });

  // Against the whole site, when a build has produced the data the live box loads.
  const built = existsSync("dist/ai/pages.json") && existsSync("dist/ai/glossary.json");
  it.skipIf(!built)("the live box, with every page on the site competing, still answers from this page", () => {
    const pages = (JSON.parse(readFileSync("dist/ai/pages.json", "utf8")).data ?? []) as Page[];
    if (!pages.some((p) => p.path === AFH_MGMT.PATH)) return; // a build from before this page existed
    const terms = (JSON.parse(readFileSync("dist/ai/glossary.json", "utf8")).data ?? []) as Term[];
    const cards = buildCards(pages, terms);
    for (const [q] of QUESTIONS) expect(ask(q, pages, cards, "afh").answer?.path, q).toBe(AFH_MGMT.PATH);
  });
});
