import { describe, expect, it } from "vitest";
import { ask, buildCards } from "@/lib/askSearch";
import { scrubQuestion } from "@/lib/siteTracking";
import type { Page, Term } from "@/lib/mcp/data";

const page = (path: string, title: string, faq: [string, string][], area: "rpp" | "afh" = "rpp", qa?: [string, string]): Page => ({
  path, url: `https://realpropertyplanning.com${path}`, title, description: title, area,
  ...(qa ? { quickAnswer: { q: qa[0], a: qa[1] } } : {}),
  faq: faq.map(([q, a]) => ({ q, a })),
});

const PAGES: Page[] = [
  page("/afh-club/costs-fees", "AFH Costs & Fees", [["What is the DSHS licensing fee for an adult family home?", "$450 per licensed bed per year."]], "afh"),
  page("/afh-club/washington-afh-data", "Washington AFH data", [["How many licensed adult family homes are there in Washington?", "6,069 homes with 35,306 licensed beds."]], "afh"),
  page("/long-term-care/medicaid-and-the-family-home", "Medicaid and the Family Home", [
    ["Will Medicaid take my parent's house in Washington?", "Not while your parent is alive and qualifies."],
    ["Can my parent give me the house to protect it from Medicaid?", "Usually not without a penalty."],
  ]),
  page("/senior-living/memory-care", "Memory care in Washington", []),
];
const TERMS: Term[] = [{ term: "CHOW", glossary: "afh", category: "Licensing", definition: "Change of ownership.", url: "https://realpropertyplanning.com/afh-club/glossary#chow", guide: { label: "Buying", url: "/afh-club/buying-selling" } }];
const cards = buildCards(PAGES, TERMS);

describe("Ask a question matching", () => {
  it("answers a question the site covers, from the site's own words", () => {
    const r = ask("What is the license fee for an adult family home?", PAGES, cards);
    expect(r.answer?.a).toBe("$450 per licensed bed per year.");
    expect(r.more[0].path).toBe("/afh-club/costs-fees");
  });
  it("prefers the FAQ worded most like the question", () => {
    expect(ask("Will Medicaid take my parent's house?", PAGES, cards).answer?.q).toBe("Will Medicaid take my parent's house in Washington?");
  });
  it("does not answer on common words alone", () => {
    // "beds" is the key word and no question about beds exists: no answer, not the home count.
    expect(ask("How many beds can an adult family home have?", PAGES, cards).answer).toBeNull();
  });
  it("says so when nothing covers the question, but still offers the closest page", () => {
    const r = ask("what is memory care", PAGES, cards);
    expect(r.answer).toBeNull();
    expect(r.more[0].path).toBe("/senior-living/memory-care");
  });
  it("answers glossary terms", () => {
    expect(ask("What is a CHOW?", PAGES, cards).answer?.a).toBe("Change of ownership.");
  });
});

describe("scrubQuestion", () => {
  it("removes emails and phone numbers and caps the length", () => {
    expect(scrubQuestion("call me at (206) 555-0142 or jane.doe@example.com about probate")).toBe("call me at [number] or [email] about probate");
    expect(scrubQuestion("x".repeat(300))).toHaveLength(100);
  });
});
