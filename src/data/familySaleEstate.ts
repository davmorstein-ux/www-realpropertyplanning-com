/**
 * "Can an Executor or Trustee Buy the House, or Sell It to Family?"
 * (Question Map step 7, Oct 4, 2026; audit questions Q002, Q003, Q004).
 *
 * Checked Oct 4, 2026 against the statute text:
 *   - RCW 11.68.090  a personal representative with nonintervention powers may
 *        sell estate real property without a court order, has a trustee's
 *        powers, privileges and limitations of liability, must act in good
 *        faith with honest judgment, and can never be relieved of that duty
 *   - RCW 11.68.070  heirs (parties) may petition when the PR breaches a
 *        fiduciary duty, exceeds or abuses authority; remedies include removal
 *        and damages
 *   - Chapter 11.56 RCW  has no section on a PR buying estate property;
 *        RCW 11.56.090 private sales in court-supervised administration
 *        generally must be at least 90% of appraised value
 *   - RCW 11.96A.220  binding written agreement among the parties
 *   - RCW 11.98.078  trustee loyalty: a sale to the trustee, or one affected by
 *        a conflict (spouse, descendants, siblings, parents and their spouses,
 *        agent or attorney), is voidable by an affected beneficiary unless the
 *        trust authorizes it, a court or binding agreement approves it, or the
 *        beneficiary consents (already on /trustees)
 *   - Inheritance exempt from real estate excise tax; a later sale is taxed
 *        (WAC 458-61A-202, already cited in the site's quick answers)
 * No Washington statute was found that flatly bars a personal representative
 * from buying; the page frames the conflict and the protections, not a rule.
 * Used by the page and by vite.config.ts (prerender): no React, no "@/".
 */
import { rcw } from "./probateGlossary";

export const FAMILY_SALE = {
  PATH: "/guides/executor-buy-or-sell-estate-house-to-family-washington",
  TITLE: "Can an Executor or Trustee Buy the House, or Sell It to Family?",
  SHORT_TITLE: "Executor or Trustee Buying the House",
  DESCRIPTION:
    "For Washington executors, trustees and heirs: when the person in charge of the estate wants to buy the house, or sell it to a relative, how to set the price, the protections that keep the sale from being undone, and taking the house as an inheritance instead of buying it.",
  PUBLISHED: "2026-10-04",
  REVIEWED: "2026-10-04",
  SHORT_ANSWER:
    "Often yes, but it is the clearest conflict of interest an executor or trustee can have, so it needs protection. Get an independent appraisal everyone relies on, disclose the terms to every heir, and get either the written agreement of all the heirs or a court order approving the sale. For a trust, Washington law lets an affected beneficiary undo a sale to the trustee or the trustee's close family unless the trust allows it, a court or binding agreement approves it, or the beneficiary consents. Often the simpler route is for the heir who wants the house to take it as part of their share and pay the others the difference.",
};

const SRC = {
  nonintervention: { label: "RCW 11.68.090", href: rcw("11.68.090") },
  petition: { label: "RCW 11.68.070", href: rcw("11.68.070") },
  agreement: { label: "RCW 11.96A.220", href: rcw("11.96A.220") },
  privateSale: { label: "RCW 11.56.090", href: rcw("11.56.090") },
  loyalty: { label: "RCW 11.98.078", href: rcw("11.98.078") },
  excise: { label: "WAC 458-61A-202", href: "https://app.leg.wa.gov/WAC/default.aspx?cite=458-61A-202" },
};

export interface FsSection {
  id: string;
  heading: string;
  paras: string[];
  cites: { label: string; href: string }[];
}

export const FS_SECTIONS: FsSection[] = [
  {
    id: "the-conflict",
    heading: "Why it needs extra care",
    paras: [
      "An executor (in Washington, the personal representative) or a trustee owes every heir a duty to act in good faith and in their interest. When that same person is the buyer, they are on both sides of the deal: their job is to get the best price for the estate, and their interest is to pay as little as possible. A family member as buyer raises the same question.",
      "Washington's probate statutes do not simply forbid an executor from buying the estate's house. But if the price or the process was unfair, the other heirs can ask the court to act, and the court can award damages or remove the executor. A sale to a trustee or a trustee's close family can be undone outright. The steps below are what keep a family sale from being challenged later.",
    ],
    cites: [SRC.nonintervention, SRC.petition, SRC.loyalty],
  },
  {
    id: "protections",
    heading: "Four steps that protect the sale",
    paras: [
      "1. An independent appraisal. Not a broker's opinion arranged by the buyer, but a written appraisal by a licensed appraiser that every heir sees before anyone agrees to a price. Settle in advance the date the value is as of, and whether repairs or selling costs the buyer avoids are shared.",
      "2. Full disclosure. Every heir gets the appraisal, the proposed price and every term: who pays closing costs, the closing date, any credit for repairs, and whether the buyer will live in the house or resell it.",
      "3. Written agreement or a court order. The strongest protection is the signed agreement of all the heirs. Washington's trust and estate dispute law (TEDRA) lets the parties sign a binding written agreement that settles a matter like this, and if not every heir will sign, the executor or trustee can ask the court to approve the sale instead.",
      "4. Terms no better than an outside buyer would get. A family discount is a gift from the other heirs, so it needs their clear agreement. Otherwise the price and terms should match the market.",
    ],
    cites: [SRC.agreement],
  },
  {
    id: "estate-or-trust",
    heading: "Estate or trust: the rules differ",
    paras: [
      "In a probate estate with nonintervention powers, which most Washington estates have, the personal representative can sign the sale without a court order. That is exactly why the heirs' written agreement matters: no judge reviews the price unless someone asks.",
      "In an estate without nonintervention powers, every sale goes through the court and must be confirmed, and a private sale generally must bring at least 90 percent of the appraised value.",
      "For a house held in a trust, Washington's trust law is explicit: a sale to the trustee, or one affected by a conflict of interest such as a sale to the trustee's spouse, children, siblings or parents, can be undone by an affected beneficiary. It stands if the trust authorizes it, if a court or a binding written agreement approves it, or if the beneficiary consents.",
    ],
    cites: [SRC.nonintervention, SRC.privateSale, SRC.loyalty],
  },
  {
    id: "take-it-as-your-share",
    heading: "Often simpler: take the house as part of your share",
    paras: [
      "An heir who wants the house does not always have to buy it from the estate. The executor can distribute the house to that heir as part of their inheritance, with the heir paying the others the difference in cash, or receiving less of the estate's other assets, so everyone ends up with the agreed share. This is a distribution in kind, and it needs the same independent value and written agreement.",
      "It can cost less. Receiving a house by inheritance is exempt from Washington's real estate excise tax, while a sale from the estate to the heir is taxed like any other sale. If the heir needs a loan to pay the others, talk to the lender early about the documents it will want from the estate.",
    ],
    cites: [SRC.excise],
  },
  {
    id: "example",
    heading: "Example: the executor who wants to keep Mom's house",
    paras: [
      "Ana is executor of her mother's estate, which the will divides equally among Ana and her two sisters. The house is the main asset and the sisters want cash. Ana orders an independent appraisal and sends it to both sisters with a proposal: she will take the house as part of her share and pay each sister a third of its net value (the appraised value minus the mortgage), under a written agreement all three sign before anything is recorded.",
      "If one sister will not sign, Ana does not go ahead on her own authority. She asks the court to approve the arrangement, or the house is sold on the open market and the proceeds divided.",
    ],
    cites: [],
  },
];

export const FS_CHECKLIST: string[] = [
  "Order an independent appraisal from a licensed appraiser, and share it with every heir before discussing price.",
  "Write down the proposed price and every term, and send them to every heir.",
  "Decide with the estate's attorney whether this is a sale from the estate or a distribution of the house as part of an heir's share.",
  "Get the signed agreement of all the heirs, or ask the court to approve the sale.",
  "Keep the appraisal, the agreement and all correspondence with the estate's records.",
];

export const FS_FAQS = [
  {
    question: "Can an executor buy the house from the estate in Washington?",
    answer:
      "Often yes, but it is self-dealing, so it needs protection: an independent appraisal, full disclosure to the heirs, and either their signed agreement or a court order approving the sale. Without that, the other heirs can challenge the sale and the executor can be held responsible for any loss.",
  },
  {
    question: "Can an executor sell estate property to a relative or one of the heirs?",
    answer:
      "Yes, if the price is fair and the other heirs know the terms. An independent appraisal is the usual way to show the price was fair. A below-market price is a gift from the other heirs, so it needs their written agreement. An heir can also take the house as part of their inheritance and pay the others the difference.",
  },
  {
    question: "Can a trustee sell the trust's house to themselves or their children?",
    answer:
      "Only with protection. Under RCW 11.98.078, a sale to the trustee or the trustee's close family can be undone by an affected beneficiary unless the trust authorizes it, a court or a binding written agreement approves it, or the beneficiary consents.",
  },
  {
    question: "Is it better to buy the house from the estate or take it as my share?",
    answer:
      "Taking it as your share, and paying the other heirs the difference, is often simpler and avoids the real estate excise tax that applies to a sale. Either way, the value should come from an independent appraisal and every heir should agree in writing.",
  },
];

/** Plain-text version for the prerender (vite.config.ts). */
export const FS_PRERENDER_SECTIONS: string[] = [
  ...FS_SECTIONS.map((s) => `${s.heading} — ${s.paras.join(" ")}`),
  `Checklist — ${FS_CHECKLIST.join(" ")}`,
  "General information, not legal advice. Real Property Planning does not refer clients to attorneys.",
];
