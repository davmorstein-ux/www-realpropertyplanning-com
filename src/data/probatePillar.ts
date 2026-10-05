/**
 * Words for /washington-probate-guide that the prerender also needs (Sept 30,
 * 2026). Read by src/pages/ProbatePillarGuide.tsx and vite.config.ts, so the
 * page and its static HTML cannot disagree. No React, relative imports only.
 *
 * Every fact was checked against the statute or agency page it cites on Sept
 * 30, 2026. If one changes, change it here, in src/data/probateGlossary.ts and
 * in the guide it links to, the same day.
 */
import { rcw, DOR_ESTATE_TAX } from "./probateGlossary";

export const PROBATE_PILLAR = {
  PATH: "/washington-probate-guide",
  TITLE: "Washington Probate & Estate Property: The Complete Guide",
  COVER: "/washington-probate-guide-cover.webp" as string,
  DESCRIPTION:
    "How probate works in Washington when a house is involved: who has authority to sell, nonintervention powers, the 20-day, three-month and four-month deadlines, property that skips probate, taxes, and a path for executors, heirs and trustees.",
  SHORT_ANSWER:
    "Probate is the superior court process that appoints a personal representative to settle the estate of someone who died. Most Washington estates are settled with nonintervention powers, so once appointed, the personal representative can sell the house without further court approval. A house in a living trust, held in joint tenancy with right of survivorship, or with a recorded transfer on death deed passes outside probate. Until the right person has authority, no one can sell: not the named executor, not an heir, and not the agent under the parent's power of attorney.",
  FIGURES: [
    { n: "20 days", label: "to notify heirs and beneficiaries after appointment" },
    { n: "3 months", label: "to prepare the inventory of the estate" },
    { n: "4 months", label: "for creditors to file claims after the notice is published" },
    { n: "$100,000", label: "small estate affidavit limit (not for real estate)" },
  ],
  TAKEAWAYS: [
    { lead: "Authority comes from the court.", text: "The personal representative can act for the estate only after the superior court appoints them and issues letters. A will naming someone executor is not enough." },
    { lead: "Most estates need little court supervision.", text: "With nonintervention powers, the personal representative can sell the house without a court order and without waiting for the creditor period to end." },
    { lead: "Title decides whether probate is needed.", text: "A trust, joint tenancy with right of survivorship, or a transfer on death deed recorded before the death moves the house outside probate. The small estate affidavit cannot transfer real estate." },
    { lead: "A power of attorney ends at death.", text: "The agent who managed a parent's affairs has no authority over the house once the parent has died." },
    { lead: "Value is fixed at the date of death.", text: "That value goes in the inventory and is generally the heirs' new tax basis, so a date-of-death appraisal matters even if the house sells months later." },
    { lead: "Washington's estate tax starts much lower than the federal tax.", text: "$3 million here against $15 million federally for 2026, so a paid-off house and a retirement account can be enough to require a Washington return." },
  ],
};

export const PROBATE_GLANCE: { topic: string; answer: string; src: { label: string; href: string } }[] = [
  { topic: "Where it is filed", answer: "Superior court, in any Washington county the petitioner chooses; within four months a party can have it moved to the county where the person lived. Most estates are then handled with little court involvement.", src: { label: "RCW 11.96A.050", href: rcw("11.96A.050") } },
  { topic: "Delivering the will", answer: "Anyone holding the original will delivers it to the court or the named executor within 30 days of learning of the death; the executor files it within 40.", src: { label: "RCW 11.20.010", href: rcw("11.20.010") } },
  { topic: "Who serves", answer: "The executor named in the will; without one, the surviving spouse or registered domestic partner first, then next of kin. A nonresident may serve by appointing a local agent.", src: { label: "RCW 11.28.120, 11.36.010", href: rcw("11.28.120") } },
  { topic: "Selling the house", answer: "With nonintervention powers, no court order is needed. Without them, a sale generally needs a court order and the court's confirmation, unless the will authorizes it.", src: { label: "RCW 11.68.090; ch. 11.56", href: rcw("11.68.090") } },
  { topic: "Notice to heirs", answer: "Within 20 days of appointment, to every heir, beneficiary and nonprobate beneficiary whose address is reasonably known.", src: { label: "RCW 11.28.237", href: rcw("11.28.237") } },
  { topic: "Inventory", answer: "Within three months of appointment, valuing everything as of the date of death; a copy to any heir, beneficiary or claiming creditor who asks.", src: { label: "RCW 11.44.015", href: rcw("11.44.015") } },
  { topic: "Creditor claims", answer: "Four months after first publication of the notice to creditors; up to 24 months after the death if no notice is given. A copy goes to DSHS.", src: { label: "RCW 11.40.051, .020", href: rcw("11.40.051") } },
  { topic: "Will contests", answer: "Within four months after the will is admitted to probate or rejected.", src: { label: "RCW 11.24.010", href: rcw("11.24.010") } },
  { topic: "Small estates", answer: "If the whole probate estate, including any real estate, is worth $100,000 or less after liens, personal property can be collected by affidavit 40 days after the death. It cannot transfer real estate.", src: { label: "RCW 11.62.010", href: rcw("11.62.010") } },
  { topic: "Transfer on death deed", answer: "Passes the house without probate only if recorded with the county auditor before the owner's death.", src: { label: "RCW 64.80.060", href: rcw("64.80.060") } },
  { topic: "Closing the estate", answer: "A declaration of completion; it becomes final if no one petitions the court within 30 days.", src: { label: "RCW 11.68.110", href: rcw("11.68.110") } },
  { topic: "Washington estate tax", answer: "Exclusion $3,000,000 for deaths from July 1, 2026 ($3,076,000 for January to June 2026); rates 10 to 20 percent from July 1, 2026 (10 to 35 percent for deaths July 1, 2025 to June 30, 2026).", src: { label: "Dept. of Revenue", href: DOR_ESTATE_TAX } },
];

type Step = { label: string; href: string; note: string };
export const PROBATE_PATHS: { id: string; short: string; title: string; who: string; steps: Step[] }[] = [
  {
    id: "executor",
    short: "Executor",
    title: "You are the executor or personal representative",
    who: "You were named in the will, or you are asking the court to appoint you.",
    steps: [
      { label: "Your First 30 Days as Executor", href: "/executor-responsibilities-first-steps/first-30-days", note: "Securing the house, the will, the court filing and the first notices." },
      { label: "Understanding Your Legal Duties as Executor", href: "/executor-responsibilities-first-steps/legal-duties", note: "What you owe the heirs and creditors, and how to keep records." },
      { label: "Who Has Authority to Sell Probate Property?", href: "/guides/who-has-authority-sell-probate-property-washington", note: "Letters, nonintervention powers and what a title company will ask for." },
      { label: "What Should an Executor Do First With a House?", href: "/guides/executor-first-steps-house", note: "Insurance, utilities, a vacant house and the first decisions." },
      { label: "Property Taxes After a Death", href: "/guides/property-taxes-after-death-washington", note: "The October payment that comes with no new bill, and what happens to a senior exemption." },
      { label: "The Mortgage After a Death", href: "/guides/mortgage-after-death-washington", note: "Who keeps paying, the servicer's successor-in-interest process, and keeping the loan." },
      { label: "Common Executor Mistakes", href: "/executor-responsibilities-first-steps/common-mistakes", note: "The errors that cost estates time and money." },
      { label: "How Out-of-State Families Can Handle a Washington Property Sale", href: "/guides/out-of-state-families", note: "Serving from another state, and managing a house from a distance." },
    ],
  },
  {
    id: "heir",
    short: "Heir",
    title: "You have inherited a house, or a share of one",
    who: "You are a beneficiary or heir deciding whether to keep, rent or sell.",
    steps: [
      { label: "What to Do With an Inherited House in Washington", href: "/guides/inherited-house-washington", note: "Keep, rent or sell, and what each choice involves." },
      { label: "What Taxes Apply When Selling an Inherited House?", href: "/guides/taxes-selling-inherited-house-washington", note: "Stepped-up basis, estate tax and the excise tax on a sale." },
      { label: "What Happens If Heirs Disagree About Selling?", href: "/guides/heirs-disagree-selling-house", note: "Buyouts, agreements and, as a last resort, the court." },
      { label: "Sell an Inherited House As-Is or Fix It First?", href: "/guides/sell-inherited-house-as-is-or-fix", note: "When repairs pay for themselves and when they do not." },
      { label: "Understanding the Property's Value", href: "/estate-probate-inherited-property/property-value", note: "Why the date-of-death value matters to every heir." },
    ],
  },
  {
    id: "trustee",
    short: "Trustee",
    title: "The house is in a trust",
    who: "You are the successor trustee of a living trust that holds the house.",
    steps: [
      { label: "For Trustees", href: "/trustees", note: "The trustee's role with real estate, start to finish." },
      { label: "Probate vs Trust Sale in Washington", href: "/guides/probate-vs-trust-sale-washington", note: "What changes when the house is in a trust." },
      { label: "How Do You Price a House in a Trust or Estate?", href: "/guides/pricing-house-trust-estate", note: "Setting a price you can defend to the beneficiaries." },
      { label: "Date-of-Death Valuation & Estate Property Appraisals", href: "/date-of-death-valuation-property-appraisals", note: "The appraisal a trustee usually needs." },
    ],
  },
  {
    id: "selling",
    short: "Selling the house",
    title: "Selling the house",
    who: "Authority is in place, or nearly, and the house will be sold.",
    steps: [
      { label: "Probate Real Estate Sales in Washington", href: "/probate-estate-sales", note: "How an estate sale of real estate differs from an ordinary one." },
      { label: "Can You Sell a House During Probate?", href: "/guides/sell-house-during-probate-washington", note: "Timing, court approval and the creditor period." },
      { label: "Probate House Sale Timeline in Washington", href: "/guides/probate-house-sale-timeline-washington", note: "From appointment to closing, phase by phase." },
      { label: "What Repairs Should Be Made Before Selling a Probate Home?", href: "/guides/repairs-before-selling-probate-home-washington", note: "Cleanout, repairs and what buyers expect." },
      { label: "Estate Liquidation", href: "/estate-liquidation", note: "Clearing the contents before the house is listed." },
      { label: "How the Process Works", href: "/how-the-process-works", note: "The steps of an estate property sale, in order." },
    ],
  },
];

export const PROBATE_KEY_TERM_IDS = [
  "personal-representative",
  "letters-testamentary",
  "nonintervention-powers",
  "notice-to-creditors",
  "nonprobate-asset",
  "transfer-on-death-deed",
  "date-of-death-value",
  "declaration-of-completion",
];

export const PROBATE_FAQS = [
  {
    question: "Does a house always have to go through probate in Washington?",
    answer:
      "No. A house in a living trust, held in joint tenancy with right of survivorship, or with a transfer on death deed recorded before the death passes outside probate. A house titled in the person's name alone usually needs probate, because Washington's small estate affidavit ($100,000 limit) cannot transfer real estate (RCW 11.62.010).",
  },
  {
    question: "Can the executor sell the house before probate is opened?",
    answer:
      "No. The executor has no authority until the superior court appoints them and issues letters testamentary. The house can be secured, insured, cleaned out and valued in the meantime. Once appointed with nonintervention powers, the personal representative can sell without a court order (RCW 11.68.090).",
  },
  {
    question: "Can a power of attorney be used to sell a parent's house after they die?",
    answer:
      "No. A power of attorney ends at the principal's death. After that, only the personal representative (for a probate estate), the successor trustee (for a trust) or a surviving joint owner can deal with the house.",
  },
  {
    question: "How long does probate take in Washington?",
    answer:
      "There is no fixed length. Creditors have four months after the notice to creditors is first published (RCW 11.40.051), so few estates close in less than five or six months, and many take a year or more. A house can often be sold well before the estate closes.",
  },
  {
    question: "What is the Washington estate tax exemption?",
    answer:
      "Per the Department of Revenue, Washington's estate tax exclusion is $3,000,000 for deaths from July 1, 2026, with rates from 10 to 20 percent. For deaths from January 1 to June 30, 2026 it was $3,076,000, and for deaths from July 1, 2025 to June 30, 2026 the rates ran 10 to 35 percent. The federal exclusion is $15 million per person for deaths in 2026.",
  },
];

/** Plain-text versions for the prerender. */
export const PROBATE_PILLAR_SECTIONS: string[] = [
  `At a glance — ${PROBATE_GLANCE.map((g) => `${g.topic}: ${g.answer} (${g.src.label})`).join(" ")}`,
  "Does every estate need probate? — No. Property that passes by title or designation skips it: a house in a living trust, in joint tenancy with right of survivorship, or with a transfer on death deed recorded before the death (RCW 64.80.060), and accounts or policies with a living beneficiary. Couples often use a community property agreement (RCW 26.16.120). The small estate affidavit works only if the whole probate estate, real estate included, is worth $100,000 or less after liens; it collects personal property 40 days after the death and cannot transfer real estate (RCW 11.62.010).",
  "Who has authority to sell the house? — For a probate estate, only the personal representative, after the superior court appoints them and issues letters. Being named executor or being an heir is not enough, and a power of attorney ends at death. A house in a trust is sold by the successor trustee, usually with a certification of trust (RCW 11.98.075).",
  `Can the house be sold while probate is open? — Usually. With nonintervention powers the personal representative may sell real estate without a court order (RCW 11.68.090), and need not wait for the creditor period to end. Only a solvent estate qualifies. Without them, a sale generally needs a court order and the court's confirmation under chapter 11.56 RCW, unless the will authorizes the sale (RCW 11.56.250). A request for special notice (RCW 11.28.240) brings notice of court filings, but a sale under nonintervention powers involves none.`,
  "How long does probate take? — No fixed length. Creditors have four months after first publication (RCW 11.40.051), so few estates close in under five or six months; many take a year or more. An estate with nonintervention powers closes by declaration of completion, final if no one petitions within 30 days (RCW 11.68.110).",
  "What is the house worth for the estate? — The inventory values everything as of the date of death (RCW 11.44.015), and that value is generally the heirs' new federal tax basis (26 U.S.C. 1014). A certified appraiser can value the house as of the date of death months later.",
  "What taxes apply? — Washington estate tax (Department of Revenue): exclusion $3,000,000 for deaths from July 1, 2026, rates 10 to 20 percent; $3,076,000 for January to June 2026; rates 10 to 35 percent for deaths July 1, 2025 to June 30, 2026. Federal: $15 million per person for 2026 (IRS). Inheriting a house is exempt from real estate excise tax; selling it to a buyer is not. Washington's capital gains tax does not apply to real estate.",
  "Debts and Medicaid — Debts are paid from the estate, not by heirs personally, though a nonprobate beneficiary can be required to contribute (RCW 11.18.200). The notice to creditors is also mailed to the DSHS Office of Financial Recovery (RCW 11.40.020); the state can recover Medicaid long-term care received at 55 or older, and state-funded long-term care at any age, from the estate and from nonprobate assets such as a house passing by transfer on death deed (RCW 43.20B.080, 74.39A.170).",
  "When heirs disagree — An appraisal everyone relies on, a buyout, or a binding agreement under TEDRA (chapter 11.96A RCW). A will contest must be filed within four months of the will being admitted (RCW 11.24.010).",
  `Paths — ${PROBATE_PATHS.map((p) => `${p.title}: ${p.steps.map((s) => s.label).join(", ")}.`).join(" ")} Glossary: /probate-glossary`,
  "Not legal advice. Real Property Planning does not refer clients to attorneys; confirm any lawyer's license with the Washington State Bar Association (wsba.org).",
];

