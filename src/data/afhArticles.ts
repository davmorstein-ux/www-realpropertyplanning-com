/**
 * AFH CLUB ARTICLES (Oct 12, 2026): longer AFH Club articles written from primary
 * sources, for questions AFH writers logged as unanswered (the plan of Oct 11, 2026).
 * One page component renders them all: src/pages/AFHArticle.tsx.
 *
 *   /afh-club/getting-paid-providerone-billing
 *     Getting Paid: ProviderOne Billing, Client Responsibility and Specialty Contracts
 *
 * HOW THEY ARE CHECKED. Same method as the statute guides (statuteGuides.ts): a
 * writer drafts only from official pages it opened (HCA billing guides, DSHS
 * contracting pages and manuals, WAC/RCW on app.leg.wa.gov), recording a verbatim
 * quote for every claim; a second reviewer who did not write it reopens every
 * source and corrects what is wrong or overstated; the owner reads it before it is
 * built. Anything that could not be verified is left out, or the page says AFH
 * Club has asked DSHS. The quote tables are kept off the site.
 *
 * "Getting Paid" (Oct 12, 2026): 41 claims verified, 5 overstated and corrected,
 * 2 unsourced and removed. Still open with DSHS (emailed by the owner Oct 12, 2026):
 *   - ANSWERED Oct 12, 2026 (DSHS Resource Development, Debra Knutson, in writing):
 *     an owner reaches out to Resource Development or the assigned HCS residential
 *     case manager to start ECS/SBS. On the page.
 *   - whether the ECS/SBS 12-month requirement is 12 months under a Medicaid
 *     contract (DSHS specialty contracts page) or 12 months licensed (LTC Manual
 *     Ch. 7f); the page states the contract version and says so;
 *   - whether a new home can request its Medicaid contract before the license
 *     number is issued; whether the 2021 sample contract is current (its
 *     $1M/$2M insurance minimums and 12-month billing clause are quoted).
 * When DSHS answers, update the "ECS and SBS" section and the FAQ, and add a
 * dated line to the page's record in articleRecords.ts.
 *
 * WHAT TO RECHECK: HCA's payment-cycle FAQ (updated July 2026) and billing guides
 * when HCA reissues them; WAC 388-76-10617 (amended Apr 30, 2026). Rates are not
 * on this page on purpose: the payment field guide and A Through E carry them.
 *
 * Body text is the same small Markdown as the statute guides (MiniMarkdown).
 * Node-safe: imported by vite.config.ts. No React, no "@/".
 */
import DATA from "./afhArticles.json";
import { mdToText } from "./statuteGuides";

export interface AFHArticleFaq {
  question: string;
  answer: string;
  alts?: string[];
}

export interface AFHArticle {
  slug: string;
  path: string;
  /** Short label for links. */
  short: string;
  title: string;
  eyebrow: string;
  /** One sentence under the title. */
  dek: string;
  published: string;
  reviewed: string;
  /** Cover art in /public, or null until the owner supplies it. */
  cover: string | null;
  shortAnswer: string;
  sections: { heading: string; body: string }[];
  next: string | null;
  faqs: AFHArticleFaq[];
  sources: { label: string; href: string }[];
}

export const AFH_ARTICLES = DATA as AFHArticle[];

export const afhArticle = (slug: string) => AFH_ARTICLES.find((a) => a.slug === slug)!;

/** The route-metadata entry (title, quick answer, sections, FAQs) for one article. */
export function afhArticleMeta(a: AFHArticle) {
  return {
    title: `${a.title} | AFH Club`,
    description: mdToText(a.shortAnswer).slice(0, 300).replace(/\s+\S*$/, "") + "…",
    h1: a.title,
    quickAnswerQ: a.title,
    quickAnswerA: mdToText(a.shortAnswer),
    sections: [
      ...a.sections.map((s) => `${s.heading} — ${mdToText(s.body)}`),
      ...(a.next ? [`What to do next — ${mdToText(a.next)}`] : []),
    ],
    faq: a.faqs.map((f) => ({ q: f.question, a: f.answer, ...(f.alts?.length ? { alts: f.alts } : {}) })),
    article: { datePublished: a.published, dateModified: a.reviewed },
  };
}
