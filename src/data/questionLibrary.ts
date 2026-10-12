/**
 * THE QUESTION LIBRARY (Oct 11, 2026): short answers to the questions families
 * actually ask, grouped by the four homepage journeys. Owner's idea: give the
 * "Ask a question" box far more to answer from, and give visitors (and search
 * and AI tools) a plain, visible page of answers for each journey.
 *
 * WHERE THE ANSWERS CAME FROM. Every answer restates what a page on this site
 * already says, and links to that page (`path`). Nothing was added from outside
 * knowledge. Method, Oct 11, 2026:
 *   1. The full visible text of all 240 family-side pages was captured from a
 *      build of the site.
 *   2. Writers drafted each entry from that text only, quoting the page passages
 *      that support it (the quotes are kept off the site, in the working notes).
 *   3. Every quote was checked word for word against its page by script.
 *   4. A separate reviewer, who had not written the entries, read every answer
 *      against its page and corrected or dropped any that went further than the
 *      page, left out a condition, or leaned toward a listed professional.
 *      Result: 212 unchanged, 36 corrected, 2 dropped, 248 published.
 *
 * THE RULE FOR EDITS. An answer may say only what its linked page says. If a
 * page changes (a figure each January, a rule), change the answer with it. A
 * new fact goes on the page first, with its source, then into an answer here.
 * The entries live in questionLibrary.json, grouped by journey.
 *
 * WHAT USES IT
 *   - /questions and /questions/<journey>: the visible library (QuestionLibrary.tsx)
 *   - vite.config.ts: each journey page's FAQ list, so the questions are in the
 *     static HTML, /ai/pages.json, llms-full.txt and the public AI tool
 *   - the Ask box (src/lib/askSearch.ts): each question and every alternate
 *     phrasing becomes something the box can match; the answer links to the
 *     source page, not to the library page
 *
 * Node-safe: imported by vite.config.ts. No React, no "@/".
 */
import DATA from "./questionLibrary.json";

export interface LibraryEntry {
  id: string;
  /** Sub-topic heading on the library page. */
  topic: string;
  /** The question, in a visitor's words. */
  q: string;
  /** Other ways people ask the same thing. Used by the Ask box only; not shown. */
  alts: string[];
  /** The short answer: only what `path` (and `also`) say. */
  a: string;
  /** The page that covers it in full. */
  path: string;
  /** That page's title, as shown in "Read more". */
  pathTitle: string;
  also?: string[];
}

export interface Journey {
  slug: "plan-ahead" | "aging-parent" | "estate" | "professional";
  /** Same words as the homepage tile. */
  title: string;
  /** The journey's own starting page (the homepage tile's link). */
  start: string;
  /** Homepage tile colour. */
  color: string;
  blurb: string;
}

export const QUESTIONS_PATH = "/questions";

export const JOURNEYS: Journey[] = [
  { slug: "plan-ahead", title: "I Want to Plan Ahead", start: "/planning-before-a-crisis", color: "#8A4214", blurb: "Wills, trusts and the house, powers of attorney, downsizing, staying home, WA Cares, and the conversations to have now." },
  { slug: "aging-parent", title: "I'm Helping an Aging Parent", start: "/helping-an-aging-parent", color: "#246044", blurb: "When a parent needs more help, care options and costs, Medicaid and the family home, hospital discharge, and selling a parent's house." },
  { slug: "estate", title: "I'm Handling an Estate", start: "/estate-probate-inherited-property", color: "#25597e", blurb: "First steps after a death, probate in Washington, authority to sell, inherited houses, heirs who disagree, taxes, and valuation." },
  { slug: "professional", title: "I Need a Professional", start: "/building-your-professional-team", color: "#662D56", blurb: "Which professional does what: attorneys, appraisers and brokers, CPAs, care managers, move managers, estate sale companies, title and escrow." },
];

export const journeyPath = (slug: Journey["slug"]) => `${QUESTIONS_PATH}/${slug}`;

export const LIBRARY = DATA as Record<Journey["slug"], LibraryEntry[]>;

export const libraryFor = (slug: Journey["slug"]): LibraryEntry[] => LIBRARY[slug] ?? [];

export const ALL_LIBRARY_ENTRIES: LibraryEntry[] = JOURNEYS.flatMap((j) => libraryFor(j.slug));

/** Topics in the order they first appear, each with its entries. */
export function topicsFor(slug: Journey["slug"]): { topic: string; entries: LibraryEntry[] }[] {
  const out: { topic: string; entries: LibraryEntry[] }[] = [];
  for (const e of libraryFor(slug)) {
    let t = out.find((x) => x.topic === e.topic);
    if (!t) out.push((t = { topic: e.topic, entries: [] }));
    t.entries.push(e);
  }
  return out;
}

/** Anchor id for a topic heading. */
export const topicAnchor = (topic: string) =>
  topic.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** For the build: one FAQ list per journey page, carrying the source page and alternate phrasings. */
export function libraryFaq(slug: Journey["slug"]) {
  return libraryFor(slug).map((e) => ({ q: e.q, a: e.a, path: e.path, alts: e.alts }));
}
