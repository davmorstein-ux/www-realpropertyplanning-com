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
 *   5. Oct 11, 2026 (evening): Google's list of 90 common probate questions was
 *      sorted against the site. 21 were already answered (added as phrasings of
 *      existing entries), 31 new entries were written from existing pages by the
 *      same method and fact-checked (28 unchanged, 4 corrected), and 36 the site
 *      does not cover yet were listed as pages to write. 279 entries.
 *   6. Oct 12, 2026: 70 questions ChatGPT drafted for the owner were sorted the
 *      same way (ChatGPT's own answers were not used: they are not on the site).
 *      46 were already answered (82 phrasings added to existing entries, mostly
 *      fixing wrong Ask-box matches such as "What is probate?"), 23 new entries
 *      were written from existing pages and fact-checked (8 corrected), 5 are
 *      gaps. 302 entries. The same pass corrected the administrator rule to
 *      RCW 11.28.120 as amended by 2026 c 204: 90 days (was 40) before the
 *      court may appoint any suitable person.
 *   7. Oct 12, 2026: ChatGPT's next 400 questions and Gemini's 27 were sorted by
 *      four writers and checked by two independent reviewers (21 entries
 *      corrected, 13 phrasings moved or dropped). 333 phrasings added to existing
 *      entries, 65 new entries, about 170 questions the site does not cover
 *      listed as pages to write. 367 entries.
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
import AFH_DATA from "./afhQuestionLibrary.json";

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
  slug: string;
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

/* ------------------------------------------------------------------------- */
/* AFH CLUB'S QUESTION LIBRARY (Oct 11, 2026): the same method, from the AFH   */
/* Club pages, for people who open, buy, sell, run or finance an adult family  */
/* home (never families choosing care: that is the family side). Pages that    */
/* change monthly (listings, sold prices, city for-sale pages, market report,  */
/* data) were left out so answers do not go stale. 160 written, independently  */
/* fact-checked (126 unchanged, 31 corrected, 3 dropped as duplicates), 157.   */
/* Oct 12, 2026: ChatGPT's 400 AFH questions sorted the same way (four writers,  */
/* two independent reviewers): 147 phrasings added, 98 new entries (incl. 5    */
/* page FAQs the Ask box was missing), about 180 uncovered questions listed as  */
/* pages to write. 263 entries.                                                  */
/* Oct 12, 2026: 8 "Billing & getting paid" entries added to Running from the  */
/* new Getting Paid article (afhArticles.ts), restating only that page. 165.  */
/* Journeys follow AFH Club's own paths (src/data/afhFlow.ts).                 */
/* ------------------------------------------------------------------------- */

export const AFH_QUESTIONS_PATH = "/afh-club/questions";

const AFH_FLOW = "/afh-club/washington-adult-family-home-guide";
export const AFH_JOURNEYS: Journey[] = [
  { slug: "opening", title: "Opening a New Adult Family Home", start: `${AFH_FLOW}/opening`, color: "#0a5648", blurb: "Licensing steps, qualifications, training, building requirements and WABO, startup costs and fees, and the rules that changed." },
  { slug: "buying", title: "Buying an Adult Family Home", start: `${AFH_FLOW}/buying`, color: "#25597e", blurb: "Change of ownership, what to verify, reading listings, DSHS records, buying as an individual or an LLC, and the Property Score." },
  { slug: "selling", title: "Selling Your Adult Family Home", start: `${AFH_FLOW}/selling`, color: "#8A4214", blurb: "Selling at retirement, the business or the building, what buyers need, resident notice, and valuation." },
  { slug: "running", title: "Running a Licensed Adult Family Home", start: `${AFH_FLOW}/running`, color: "#246044", blurb: "Inspections and compliance, how Medicaid pays (CARE, CBHS, ECS, SBS), staffing, records, and management companies." },
  { slug: "evaluating", title: "Evaluating an AFH Property or Investment", start: `${AFH_FLOW}/evaluating`, color: "#662D56", blurb: "Financing (residential, SBA, DSCR, commercial), how lenders count income, coverage ratios, and what the calculators show." },
];

export const AFH_LIBRARY = AFH_DATA as Record<string, LibraryEntry[]>;

/** Both libraries, for the shared page component and the tests. */
export interface Library {
  id: "family" | "afh";
  basePath: string;
  title: string;
  intro: string;
  /** Accent for the hub and the Ask box. */
  accent: string;
  journeys: Journey[];
  entries: (slug: string) => LibraryEntry[];
}

export const LIBRARIES: Record<Library["id"], Library> = {
  family: {
    id: "family",
    basePath: QUESTIONS_PATH,
    title: "Questions & Answers",
    intro: "Short answers to the questions families ask most, grouped the same way as the rest of the site. Every answer comes from one of our guides and links to it, so you can read the full explanation and its sources.",
    accent: "#1B3A6B",
    journeys: JOURNEYS,
    entries: (slug) => LIBRARY[slug as keyof typeof LIBRARY] ?? [],
  },
  afh: {
    id: "afh",
    basePath: AFH_QUESTIONS_PATH,
    title: "AFH Club Questions & Answers",
    intro: "Short answers for people who open, buy, sell, run or finance an adult family home in Washington, grouped by AFH Club's paths. Every answer comes from an AFH Club guide and links to it, with its sources.",
    accent: "#0a5648",
    journeys: AFH_JOURNEYS,
    entries: (slug) => AFH_LIBRARY[slug] ?? [],
  },
};

export const libraryJourneyPath = (lib: Library, slug: string) => `${lib.basePath}/${slug}`;

export function libraryTopics(lib: Library, slug: string): { topic: string; entries: LibraryEntry[] }[] {
  const out: { topic: string; entries: LibraryEntry[] }[] = [];
  for (const e of lib.entries(slug)) {
    let t = out.find((x) => x.topic === e.topic);
    if (!t) out.push((t = { topic: e.topic, entries: [] }));
    t.entries.push(e);
  }
  return out;
}

export const libraryEntriesAll = (lib: Library): LibraryEntry[] => lib.journeys.flatMap((j) => lib.entries(j.slug));

/** For the build: one FAQ list per journey page, carrying the source page and alternate phrasings. */
export const libraryFaqOf = (lib: Library, slug: string) => lib.entries(slug).map((e) => ({ q: e.q, a: e.a, path: e.path, alts: e.alts }));

/** Every entry in both libraries. */
export const EVERY_LIBRARY_ENTRY: LibraryEntry[] = [...libraryEntriesAll(LIBRARIES.family), ...libraryEntriesAll(LIBRARIES.afh)];
