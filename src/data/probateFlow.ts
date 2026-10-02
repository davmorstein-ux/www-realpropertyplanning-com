/**
 * The Washington probate flow chart (owner's decision, Oct 1, 2026).
 *
 * The probate guide had grown to 2,700 words and 69 links on one page ("a tidal
 * wave of text… nobody, not even me, can find it"). It is now a short start page
 * with a flow chart (/washington-probate-guide) and one short page per box:
 *
 *   How was the house owned?
 *     in a living trust ............ /washington-probate-guide/house-in-a-trust
 *     joint owner / TOD deed ....... /washington-probate-guide/no-probate-needed
 *     in their name alone .......... probate → what is your role?
 *         executor ................. /washington-probate-guide/executor
 *         heir ..................... /washington-probate-guide/heir
 *   everyone → selling .............. /washington-probate-guide/selling-the-house
 *   always one tap away ............. /washington-probate-guide/deadlines-and-key-rules, /probate-glossary
 *
 * Keep each branch page SHORT: a two-sentence summary, at most six steps, at most
 * three "watch out for" items. Detail belongs in the linked guides, not here.
 * Used by the pages and by vite.config.ts (prerender), so no React, no "@/".
 */
import { rcw } from "./probateGlossary";
import { PROBATE_PATHS } from "./probatePillar";

export const FLOW_BASE = "/washington-probate-guide";

export interface FlowStep {
  label: string;
  href: string;
  note: string;
}

export interface FlowWatch {
  lead: string;
  text: string;
  link?: { label: string; href: string };
  cite?: { label: string; href: string };
}

export interface FlowPage {
  slug: string;
  path: string;
  /** Box label on the chart. */
  box: string;
  title: string;
  description: string;
  /** Where this box sits in the chart, shown as "You are here" crumbs. */
  trail: string[];
  summary: string[];
  steps: FlowStep[];
  watch: FlowWatch[];
  next?: { label: string; href: string };
}

const path = (slug: string) => `${FLOW_BASE}/${slug}`;
const stepsOf = (id: string) => PROBATE_PATHS.find((p) => p.id === id)?.steps ?? [];

export const SELLING_PATH = path("selling-the-house");
export const DEADLINES_PATH = path("deadlines-and-key-rules");

const PROPERTY_TAX: FlowWatch = {
  lead: "Property taxes keep coming due.",
  text: "The October 31 second half arrives with no new bill, so it is the payment families miss.",
  link: { label: "Property Taxes After a Death", href: "/guides/property-taxes-after-death-washington" },
};

const ESTATE_RECOVERY: FlowWatch = {
  lead: "Medicaid can claim against the house.",
  text: "If the person received Medicaid long-term care at 55 or older, the state can seek repayment from the estate and from property that passed outside probate.",
  cite: { label: "RCW 43.20B.080", href: rcw("43.20B.080") },
};

export const FLOW_PAGES: FlowPage[] = [
  {
    slug: "house-in-a-trust",
    path: path("house-in-a-trust"),
    box: "In a living trust",
    title: "The House Is in a Living Trust",
    description: "When a Washington house is in a living trust, the successor trustee handles it and no probate is needed for the house. The steps, in order.",
    trail: ["How was the house owned?", "In a living trust"],
    summary: [
      "No probate is needed for the house. The successor trustee named in the trust takes over and can sell it, usually by giving the title company a certification of trust.",
      "The trustee still owes the beneficiaries a fair price and good records, so value and timing matter as much as in probate.",
    ],
    steps: stepsOf("trustee"),
    watch: [
      { lead: "Show authority with a certification of trust.", text: "Title companies accept a short certification instead of the whole trust document.", cite: { label: "RCW 11.98.075", href: rcw("11.98.075") } },
      PROPERTY_TAX,
      ESTATE_RECOVERY,
    ],
    next: { label: "Selling the house", href: SELLING_PATH },
  },
  {
    slug: "no-probate-needed",
    path: path("no-probate-needed"),
    box: "Joint owner or transfer on death deed",
    title: "The House Passed Without Probate",
    description: "A Washington house held in joint tenancy with right of survivorship, or with a transfer on death deed recorded before the death, passes without probate. What the new owner does next.",
    trail: ["How was the house owned?", "Joint owner or transfer on death deed"],
    summary: [
      "A house held in joint tenancy with right of survivorship belongs to the surviving owner. A house with a transfer on death deed recorded before the death goes to the beneficiary named in the deed. Neither goes through probate.",
      "The new owner usually records proof of the death with the county so the title shows them as owner. A title company can say exactly what it needs before a sale or refinance.",
    ],
    steps: [
      { label: "What to Do With an Inherited House in Washington", href: "/guides/inherited-house-washington", note: "Keep, rent or sell, and what each choice involves." },
      { label: "Date-of-Death Valuation & Estate Property Appraisals", href: "/date-of-death-valuation-property-appraisals", note: "The value at the date of death is generally your new tax basis." },
      { label: "What Taxes Apply When Selling an Inherited House?", href: "/guides/taxes-selling-inherited-house-washington", note: "Stepped-up basis, estate tax and the excise tax on a sale." },
      { label: "Property Taxes After a Death", href: "/guides/property-taxes-after-death-washington", note: "Who pays, and the October payment that comes with no new bill." },
    ],
    watch: [
      { lead: "The deed must have been recorded before the death.", text: "A transfer on death deed signed but not recorded with the county auditor in time does not work.", cite: { label: "RCW 64.80.060", href: rcw("64.80.060") } },
      ESTATE_RECOVERY,
      PROPERTY_TAX,
    ],
    next: { label: "Selling the house", href: SELLING_PATH },
  },
  {
    slug: "executor",
    path: path("executor"),
    box: "I'm the executor",
    title: "You Are the Executor or Personal Representative",
    description: "For a Washington house in the person's name alone: the executor's steps, in order, from getting court authority to deciding what to do with the house.",
    trail: ["How was the house owned?", "In their name alone", "Probate", "Executor"],
    summary: [
      "A house in the person's name alone usually goes through probate, because the small estate affidavit cannot transfer real estate. You have no authority over the house until the superior court appoints you and issues letters.",
      "Most Washington estates then get nonintervention powers, which let you sell the house without a court order.",
    ],
    steps: stepsOf("executor"),
    watch: [
      { lead: "Being named in the will is not enough.", text: "Until the court issues letters, you can secure and insure the house but cannot sell it.", cite: { label: "RCW 11.68.090", href: rcw("11.68.090") } },
      PROPERTY_TAX,
      { lead: "Notify heirs and DSHS.", text: "Heirs within 20 days of appointment (RCW 11.28.237); the notice to creditors is also mailed to DSHS, which can claim for Medicaid (RCW 11.40.020).", cite: { label: "RCW 11.40.020", href: rcw("11.40.020") } },
    ],
    next: { label: "Selling the house", href: SELLING_PATH },
  },
  {
    slug: "heir",
    path: path("heir"),
    box: "I'm an heir",
    title: "You Inherited a House, or a Share of One",
    description: "For Washington heirs and beneficiaries of a house going through probate: what you can and cannot do, and the guides to read in order.",
    trail: ["How was the house owned?", "In their name alone", "Probate", "Heir or beneficiary"],
    summary: [
      "While the estate is open, the personal representative controls the house, not the heirs. Your part is to understand your choices (keep, buy out, or sell) and the value everyone will rely on.",
      "If you want to be told when the inventory and other papers are filed with the court, you can file a request for special notice.",
    ],
    steps: stepsOf("heir"),
    watch: [
      { lead: "The date-of-death value is your tax basis.", text: "It generally sets the capital gains you would owe when the house is sold, so an appraisal as of that date matters.", link: { label: "Date-of-death valuation", href: "/date-of-death-valuation-property-appraisals" } },
      { lead: "A will contest has a four-month deadline.", text: "It runs from when the will is admitted to probate.", cite: { label: "RCW 11.24.010", href: rcw("11.24.010") } },
      { lead: "Ask for notice of filings.", text: "A request for special notice brings copies of court filings; a sale under nonintervention powers needs no filing, so ask the personal representative about one.", cite: { label: "RCW 11.28.240", href: rcw("11.28.240") } },
    ],
    next: { label: "Selling the house", href: SELLING_PATH },
  },
  {
    slug: "selling-the-house",
    path: SELLING_PATH,
    box: "Selling the house",
    title: "Selling the House",
    description: "Selling a Washington house from an estate, a trust or an inheritance: timing, preparation, price and closing, in order.",
    trail: ["Selling the house"],
    summary: [
      "Once the right person has authority (the personal representative, the successor trustee or the new owner), the house can be sold much like any other, with a few differences in timing, disclosures and paperwork.",
      "With nonintervention powers, a probate sale needs no court order and does not have to wait for the creditor period to end.",
    ],
    steps: stepsOf("selling"),
    watch: [
      PROPERTY_TAX,
      { lead: "Inheriting is free of excise tax; selling is not.", text: "The real estate excise tax applies to the sale to a buyer, as with any sale. Washington's capital gains tax does not apply to real estate.", link: { label: "Taxes when selling an inherited house", href: "/guides/taxes-selling-inherited-house-washington" } },
      { lead: "Price from a value you can defend.", text: "Heirs and beneficiaries question prices. A date-of-death appraisal and a current market analysis answer most of those questions.", link: { label: "Pricing a house in a trust or estate", href: "/guides/pricing-house-trust-estate" } },
    ],
  },
];

export const FLOW_BY_SLUG = Object.fromEntries(FLOW_PAGES.map((p) => [p.slug, p])) as Record<string, FlowPage>;

/** Plain text for the prerender (vite.config.ts) and the AI data files. */
export const flowPrerenderSections = (p: FlowPage): string[] => [
  `Where this fits — ${p.trail.join(" → ")}.`,
  ...p.summary,
  `Steps, in order — ${p.steps.map((s, i) => `${i + 1}. ${s.label}: ${s.note}`).join(" ")}`,
  `Watch out for — ${p.watch.map((w) => `${w.lead} ${w.text}${w.cite ? ` (${w.cite.label})` : ""}`).join(" ")}`,
  ...(p.next ? [`Next: ${p.next.label} (${p.next.href}).`] : []),
  `Back to the flow chart: ${FLOW_BASE}. Deadlines and key rules: ${DEADLINES_PATH}.`,
];

/** The flow chart itself, in words, for the prerender. */
export const FLOW_CHART_TEXT: string[] = [
  "Start: someone died and there is a house in Washington. First question: how was the house owned?",
  `In a living trust: no probate for the house; the successor trustee handles it (${path("house-in-a-trust")}).`,
  `Joint owner with right of survivorship, or a transfer on death deed recorded before the death: no probate for the house (${path("no-probate-needed")}).`,
  `In the person's name alone, or not sure: probate is usually needed. What is your role? The executor or personal representative (${path("executor")}), or an heir or beneficiary (${path("heir")}).`,
  `Every path ends at selling the house, if it will be sold (${SELLING_PATH}).`,
  `Always available: deadlines and key rules (${DEADLINES_PATH}) and the probate glossary (/probate-glossary).`,
];
