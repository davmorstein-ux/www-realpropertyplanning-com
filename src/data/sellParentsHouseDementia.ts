/**
 * "Can You Sell a Parent's House If They Have Dementia?" (Oct 8, 2026).
 *
 * Built from the Oct 7, 2026 outside audit's example question ("My mother moved
 * into assisted living in Washington. Can we sell her house if she has
 * dementia?"): a narrow question page, the format that already ranks for
 * "who has authority to sell probate property". Short answer first, then who
 * can sign, in the order a family has to ask.
 *
 * Sources, each opened and read Oct 8, 2026:
 *   - RCW 11.125.040: a Washington power of attorney ENDS at incapacity unless
 *     the writing says it survives (not durable by default)
 *   - RCW 11.125.270: general authority over real property includes selling
 *     and conveying, "unless the power of attorney otherwise provides"
 *   - RCW 11.125.240(1): acts needing EXPRESS authority include making a gift,
 *     creating or changing rights of survivorship, and creating or changing a
 *     beneficiary designation; selling real property is not on the list
 *   - RCW 11.125.140: agent's duties: good faith, best interest, loyalty,
 *     avoid conflicts, keep records, preserve the estate plan
 *   - RCW 11.125.200: a person asked to accept a notarized power of attorney
 *     must accept it or ask for a certification within 7 business days
 *     (exceptions for good-faith doubt)
 *   - RCW 11.125.110: co-agents act jointly unless the document says otherwise
 *     (already cited on /power-of-attorney)
 *   - RCW 11.130.435(1)(b): a conservator needs specific court authorization to
 *     sell the primary dwelling of the individual subject to conservatorship
 *   - RCW 26.16.030(3): neither spouse may sell community real property
 *     without the other joining
 *   - RCW 11.98.075: certification of trust (already cited in the probate flow)
 *   - 26 U.S.C. 121(a), (b), (d)(7): home-sale exclusion, $250,000 / $500,000;
 *     time in a licensed care facility counts as use if the owner lived in the
 *     home at least one year of the five and became unable to care for themself
 *   - 26 U.S.C. 1014: basis stepped up at death
 *   - Medicaid facts repeated from /long-term-care/medicaid-and-the-family-home
 *     (WAC 182-513-1350, reviewed Oct 4, 2026): do not restate figures here
 *     that are not on that page
 * Capacity: no statute defines capacity to sign a deed; the page says only what
 * is safe (decided at signing, for that decision; a diagnosis alone does not
 * decide it) and sends the reader to an attorney.
 * Used by the page and by vite.config.ts (prerender): no React, no "@/".
 */
import { rcw } from "./probateGlossary";

const usc = (sec: string) => `https://www.law.cornell.edu/uscode/text/26/${sec}`;

export const SELL_PARENTS_HOUSE_DEMENTIA = {
  PATH: "/guides/sell-parents-house-dementia-washington",
  TITLE: "Can You Sell a Parent's House If They Have Dementia?",
  SHORT_TITLE: "Selling a Parent's House When They Have Dementia",
  DESCRIPTION:
    "For Washington families: who can sign to sell the house of a parent with dementia — the parent, an agent under a durable power of attorney, a successor trustee, or a court-appointed conservator — and what the sale means for Medicaid and taxes.",
  PUBLISHED: "2026-10-08",
  REVIEWED: "2026-10-08",
  SHORT_ANSWER:
    "Usually, yes. Who signs depends on where your parent is in the illness and what papers they signed earlier. If your parent can still understand the sale, they can sign themselves. If not, an agent under a durable power of attorney can usually sell it. If the house is in a living trust, the successor trustee may be able to act. With none of these, a court has to appoint a conservator, who needs the court's permission to sell the home. If your parent is married, the spouse usually has to sign too. Before listing, check how the sale affects Medicaid and taxes.",
};

const SRC = {
  durable: { label: "RCW 11.125.040", href: rcw("11.125.040") },
  realProperty: { label: "RCW 11.125.270", href: rcw("11.125.270") },
  express: { label: "RCW 11.125.240", href: rcw("11.125.240") },
  duties: { label: "RCW 11.125.140", href: rcw("11.125.140") },
  acceptance: { label: "RCW 11.125.200", href: rcw("11.125.200") },
  coAgents: { label: "RCW 11.125.110", href: rcw("11.125.110") },
  conservator: { label: "RCW 11.130.435", href: rcw("11.130.435") },
  community: { label: "RCW 26.16.030", href: rcw("26.16.030") },
  trustCert: { label: "RCW 11.98.075", href: rcw("11.98.075") },
  exclusion: { label: "26 U.S.C. § 121", href: usc("121") },
  stepUp: { label: "26 U.S.C. § 1014", href: usc("1014") },
};

export interface SphdSection {
  id: string;
  heading: string;
  paras: string[];
  cites: { label: string; href: string }[];
  link?: { label: string; href: string };
}

export const SPHD_SECTIONS: SphdSection[] = [
  {
    id: "can-they-sign",
    heading: "1. Can your parent still sign?",
    paras: [
      "A dementia diagnosis does not by itself take away the right to sell. Capacity is judged at the moment of signing, for that decision: does your parent understand that they are selling the house, roughly what it is worth, and what happens to the money? Many people in the early stages can, and if they can, the simplest path is for them to sign, ideally with you helping.",
      "If there is real doubt, settle it before listing, not at closing. An elder law attorney can meet your parent, and a letter from their doctor about their ability to make this decision is often what a title company asks for. A deed signed by someone who did not understand it can be challenged later.",
    ],
    cites: [],
  },
  {
    id: "power-of-attorney",
    heading: "2. Is there a durable power of attorney?",
    paras: [
      "In Washington, a power of attorney stops working when the person becomes incapacitated unless it says it survives incapacity. Find the document and look for wording such as \"This power of attorney shall not be affected by disability of the principal.\" Without it, the document is no help once your parent cannot sign.",
      "A durable power of attorney that gives the agent general authority over real property lets the agent sell the house, unless the document limits that. Giving the house away, adding someone to the title, or changing who inherits it are different: the agent can do those only if the document expressly says so.",
      "The title company will review the document. Under Washington law it must accept a notarized power of attorney, or ask for the agent's certification, within seven business days. If the document names two agents, both usually have to sign unless it says either one can act alone.",
    ],
    cites: [SRC.durable, SRC.realProperty, SRC.express, SRC.acceptance, SRC.coAgents],
    link: { label: "Power of Attorney and Real Estate in Washington", href: "/power-of-attorney" },
  },
  {
    id: "agent-duties",
    heading: "What the agent owes your parent",
    paras: [
      "An agent must act in good faith and in your parent's best interest, follow their known wishes, avoid conflicts of interest, and keep records of every dollar. Selling at a fair price, putting the proceeds in your parent's own account, and documenting the value with an appraisal protect both your parent and you.",
      "Buying the house yourself, or selling it to another family member, is a conflict of interest. It is not automatically forbidden, but it is the sale most likely to be questioned by siblings, by DSHS or by a court. Get an independent appraisal and legal advice first.",
    ],
    cites: [SRC.duties],
  },
  {
    id: "trust",
    heading: "If the house is in a living trust",
    paras: [
      "If your parent deeded the house into a revocable living trust, the trust document, not a power of attorney, says who manages it when your parent can no longer do so. Most name a successor trustee and say how incapacity is shown, often by one or two doctors' letters. Once in charge, the successor trustee can sell the house and prove their authority to the title company with a short certification of trust.",
      "Check the recorded deed first. If the house was never transferred into the trust, the trust does not control it.",
    ],
    cites: [SRC.trustCert],
  },
  {
    id: "no-power-of-attorney",
    heading: "3. If there is no durable power of attorney: conservatorship",
    paras: [
      "When a parent can no longer sign and no one has authority, a family member can ask the superior court to appoint a conservator to manage their property. (A guardian makes personal and care decisions; a conservator handles money and property. One person can be both.) Even then, the conservator needs the court's specific permission to sell your parent's home, with notice to the family.",
      "This takes months and costs money in court filings and attorney fees, which is why a durable power of attorney signed while a parent can still sign it matters so much. If your parent can still understand and sign one today, that is usually the first call to make, to an elder law attorney.",
    ],
    cites: [SRC.conservator],
  },
  {
    id: "spouse",
    heading: "If your parent is married",
    paras: [
      "A house a married couple owns as community property cannot be sold by one spouse alone; both have to sign the deed. If the spouse at home is well, they sign for themselves, and the parent with dementia signs through their own authority: themselves, their agent, or a conservator. If both spouses are affected, both need someone with authority to sign.",
      "A spouse at home also has protections under Medicaid that can change whether selling makes sense at all.",
    ],
    cites: [SRC.community],
    link: { label: "Medicaid and the Family Home: the spouse at home", href: "/long-term-care/medicaid-and-the-family-home#spouse-at-home" },
  },
  {
    id: "before-listing",
    heading: "Before you list: Medicaid and taxes",
    paras: [
      "Medicaid. While your parent intends to return home, Washington's Apple Health usually treats the house as exempt, so it does not have to be sold to qualify. Once it is sold, the money counts as your parent's savings and is generally spent on care before Medicaid pays. That can be the right plan; it should be a deliberate one.",
      "Taxes. A parent who lived in the home at least two of the last five years can usually exclude up to $250,000 of gain from federal income tax ($500,000 for a married couple). Time spent living in a licensed care facility counts as living in the home, as long as your parent lived there at least one of those five years and can no longer care for themself. Keeping the house until death instead gives the heirs a new tax basis at its value then, which can wipe out the gain entirely. Which is better depends on the numbers; ask a CPA before you list.",
    ],
    cites: [SRC.exclusion, SRC.stepUp],
    link: { label: "Medicaid and the Family Home in Washington", href: "/long-term-care/medicaid-and-the-family-home" },
  },
];

export const SPHD_CHECKLIST: string[] = [
  "Find any power of attorney, trust and will, and the recorded deed. Note whether the power of attorney says it survives incapacity.",
  "If your parent may still be able to sign, talk to their doctor and an elder law attorney now, before abilities change.",
  "If your parent is married, find out whether the house is community property and who will sign for each spouse.",
  "Get a documented value: an appraisal protects the agent and answers questions from family, DSHS or the court.",
  "Ask a CPA to compare selling now with keeping the house, and ask how the sale affects Medicaid before you list.",
  "Keep the proceeds in your parent's own account and keep a record of every payment from it.",
];

export const SPHD_FAQS = [
  {
    question: "Can I sell my mother's house with a power of attorney if she has dementia?",
    answer:
      "Usually yes, if the power of attorney is durable (it says it survives incapacity) and gives you authority over real property. In Washington a power of attorney without the durable wording ends when the person becomes incapacitated. You must sell for her benefit, at a fair price, and keep the proceeds in her name.",
  },
  {
    question: "Does a dementia diagnosis mean my parent can't sign the sale papers?",
    answer:
      "No, not by itself. The question is whether your parent understands this sale when they sign. Many people in the early stages can. If there is doubt, get a doctor's letter and talk to an elder law attorney before listing, because a deed signed without capacity can be challenged.",
  },
  {
    question: "What if my parent never signed a power of attorney?",
    answer:
      "If your parent can still understand and sign one, an elder law attorney can prepare a durable power of attorney now. If they cannot, a court has to appoint a conservator, who then needs the court's specific permission to sell the home. That takes months and costs more.",
  },
  {
    question: "Can I use a power of attorney to put my parent's house in my name?",
    answer:
      "Only if the power of attorney expressly allows gifts, and even then it is risky. A gift of the house can trigger a Medicaid penalty if made within 60 months before applying, and a child who receives the house as a gift loses the stepped-up tax basis they would get by inheriting it. Get elder law advice before any deed is signed.",
  },
];

/** Plain-text version for the prerender (vite.config.ts). */
export const SPHD_PRERENDER_SECTIONS: string[] = [
  ...SPHD_SECTIONS.map((s) => `${s.heading} — ${s.paras.join(" ")}${s.cites.length ? ` (${s.cites.map((c) => c.label).join("; ")})` : ""}`),
  `Checklist — ${SPHD_CHECKLIST.join(" ")}`,
  "General information, not legal or tax advice. Real Property Planning does not refer clients to attorneys.",
];
