/**
 * STATUTE GUIDES (Oct 11, 2026): three probate guides written from the Washington
 * statutes themselves, for questions the site did not answer (from Google's list of
 * 90 common probate questions):
 *   /guides/probate-costs-washington      What Does Probate Cost in Washington?
 *   /guides/debts-after-death-washington  Who Pays a Parent's Debts After They Die?
 *   /guides/contest-will-washington       Can a Will Be Challenged in Washington?
 *
 * HOW THEY WERE CHECKED. Each draft was written from the RCW sections and official
 * pages it cites (read on app.leg.wa.gov, IRS, FTC, CFPB, Dept. of Education, King
 * County Clerk), with a verbatim quote recorded for every claim. A second reviewer,
 * who had not written it, reopened every source and corrected what the draft got
 * wrong or overstated (e.g. final-illness bills are RCW 11.76.110 class 3, not the
 * last class; RCW 11.24.050's "probable cause and good faith" shield covers only the
 * other side's attorney fees). Sentences that could not be verified were removed.
 * Caveat: app.leg.wa.gov could not be downloaded directly from the build sandbox, so
 * sections were read through a fetch tool that returns exact short quotes, not the
 * raw page. The quote tables and reviewer notes are kept off the site.
 *
 * WHAT TO RECHECK, AND WHEN
 *   - King County filing fees ($290 to open probate, $5 letters, copies $5 + $1/page):
 *     from the clerk's schedule effective Oct 1, 2026. Fees change by statute; check
 *     each January and whenever RCW 36.18.020 is amended.
 *   - RCW 11.28.185 / 11.28.120(3) bond rule for court-appointed outsiders: added by
 *     2026 c 204 (EHB 2445), effective June 11, 2026.
 *   - Student loan discharge: from the FSA Handbook and 34 CFR 685.212(a);
 *     studentaid.gov could not be loaded to confirm its wording.
 *
 * Body text is lightweight Markdown (**bold**, *italic*, [links](/path), "- " and
 * "1. " lists, | tables |), rendered by src/components/MiniMarkdown.tsx and turned
 * into plain text for the prerender by mdToText below. Sources are listed in
 * src/data/articleRecords.ts (shown under the author byline).
 *
 * Node-safe: imported by vite.config.ts. No React, no "@/".
 */
import DATA from "./statuteGuides.json";

export interface StatuteGuideFaq {
  question: string;
  answer: string;
  alts?: string[];
}

export interface StatuteGuide {
  slug: "probate-costs" | "debts-after-death" | "will-contests";
  path: string;
  /** Short label for links. */
  short: string;
  title: string;
  shortAnswer: string;
  sections: { heading: string; body: string }[];
  /** "What to do next" bullets (Markdown). */
  next: string | null;
  faqs: StatuteGuideFaq[];
  sources: { label: string; href: string }[];
}

export const STATUTE_GUIDES = DATA as StatuteGuide[];
export const STATUTE_GUIDES_PUBLISHED = "2026-10-11";
export const STATUTE_GUIDES_REVIEWED = "2026-10-11";

export const statuteGuide = (slug: StatuteGuide["slug"]) => STATUTE_GUIDES.find((g) => g.slug === slug)!;

/** Markdown to plain text (for the prerender, the AI data and the meta description). */
export const mdToText = (md: string) =>
  md
    .replace(/^\|?\s*-{3,}.*$/gm, "")
    .replace(/^\|(.*)\|$/gm, (_, row: string) => row.split("|").map((c) => c.trim()).filter(Boolean).join(": "))
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/^\s*(?:-|\d+\.)\s+/gm, "")
    .replace(/\n{2,}/g, " ")
    .replace(/\n/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();

/** The route-metadata entry (title, quick answer, sections, FAQs) for one guide. */
export function statuteGuideMeta(g: StatuteGuide) {
  return {
    title: `${g.title} | Real Property Planning`,
    description: mdToText(g.shortAnswer).slice(0, 300).replace(/\s+\S*$/, "") + "…",
    h1: g.title,
    quickAnswerQ: g.title,
    quickAnswerA: mdToText(g.shortAnswer),
    sections: [
      ...g.sections.map((s) => `${s.heading} — ${mdToText(s.body)}`),
      ...(g.next ? [`What to do next — ${mdToText(g.next)}`] : []),
    ],
    faq: g.faqs.map((f) => ({ q: f.question, a: f.answer, ...(f.alts?.length ? { alts: f.alts } : {}) })),
    article: { datePublished: STATUTE_GUIDES_PUBLISHED, dateModified: STATUTE_GUIDES_REVIEWED },
  };
}
