/**
 * Decision-path links: for a page, the questions its reader is likely to ask
 * next, each answered by another page on the site (Question Map audit, Oct 4,
 * 2026, step 4). Rendered by <NextQuestions />, which reads the current path,
 * so each page carries one tag and the links live here.
 *
 * Rules: link to the visitor's NEXT question, not to pages that merely share a
 * word; phrase the title as the question; one neutral sentence of what the
 * page answers; never link a page to itself. src/test/nextQuestions.test.ts
 * checks that every path here is a real route.
 */

export interface NextQuestion {
  title: string;
  description: string;
  href: string;
}

const Q = {
  houseForCare: {
    title: "Should we sell the house to pay for care?",
    description: "How a parent's home is sold to fund senior living in Washington, step by step, and what it means for taxes and Medicaid.",
    href: "/sell-house-fund-senior-living",
  },
  medicaid: {
    title: "Will Medicaid pay, and what happens to the house?",
    description: "Apple Health long-term care in Washington: eligibility, the home exemption, spend-down and the five-year look-back.",
    href: "/long-term-care/medicaid-and-long-term-care",
  },
  findAfh: {
    title: "Which adult family homes are near us?",
    description: "Every licensed adult family home in Washington, by city and county, with capacity, specialties and Medicaid contracts.",
    href: "/afh-club/homes",
  },
  afhCost: {
    title: "What does an adult family home cost?",
    description: "Monthly costs by region and care level, including what Medicaid pays.",
    href: "/adult-family-home-costs",
  },
  careCost: {
    title: "What will care cost?",
    description: "Washington cost-of-care calculators for in-home care, assisted living, memory care, adult family homes and nursing homes.",
    href: "/cost-of-care-calculator",
  },
  discharge: {
    title: "The hospital says Mom can't go home. What now?",
    description: "How discharge planning works, what to ask before a discharge date, and where a parent can go next.",
    href: "/long-term-care/hospital-discharge-planning",
  },
  rehab: {
    title: "What does Medicare cover after a hospital stay?",
    description: "Short-term nursing home and rehab stays: the three-day rule, what Medicare pays, and what happens when coverage ends.",
    href: "/long-term-care/short-term-nursing-home-stays",
  },
  careSettings: {
    title: "Adult family home, assisted living or nursing home?",
    description: "How Washington's care settings differ, and which fits which needs.",
    href: "/long-term-care/how-to-choose-care-settings",
  },
  chooseAfh: {
    title: "How do we choose between adult family homes?",
    description: "Building a shortlist, what to ask on a tour, and a worksheet for comparing two homes side by side.",
    href: "/afh-club/choosing-an-adult-family-home",
  },
  inspections: {
    title: "How do we check a home's inspection record?",
    description: "Finding a licensed home's DSHS inspection reports and enforcement history, and how to read them.",
    href: "/afh-club/violation-history-lookup",
  },
  poa: {
    title: "Who can sign for a parent who can't?",
    description: "What a Washington power of attorney lets an agent do, including selling real estate, and what happens without one.",
    href: "/power-of-attorney",
  },
  medicaidHome: {
    title: "Does Medicaid count the house, and can we keep it?",
    description: "The home exemption, an empty house, selling, giving it to family, the spouse at home, and estate recovery.",
    href: "/long-term-care/medicaid-and-the-family-home",
  },
  giftingRisks: {
    title: "Should we put the house in a child's name?",
    description: "Wills, trusts, transfer-on-death deeds and adding a child to title, and the tax and Medicaid risks of each.",
    href: "/articles/wills-trusts-other-options",
  },
  estateRecovery: {
    title: "Can the state claim the house after death?",
    description: "Medicaid estate recovery in Washington, when it is deferred, and hardship waivers.",
    href: "/long-term-care/medicaid-and-the-family-home",
  },
  reverseMortgage: {
    title: "Could a reverse mortgage pay for care instead?",
    description: "How reverse mortgages work for Washington seniors, and what happens when the borrower moves into care.",
    href: "/retirement-reverse-mortgage",
  },
  authority: {
    title: "Who has authority to sell the house?",
    description: "Personal representatives, letters testamentary, nonintervention powers and when court approval is needed.",
    href: "/guides/who-has-authority-sell-probate-property-washington",
  },
  deadlines: {
    title: "What are the probate deadlines?",
    description: "Washington's key probate deadlines and rules in one table, each with its statute.",
    href: "/washington-probate-guide/deadlines-and-key-rules",
  },
  heirsDisagree: {
    title: "What if the heirs disagree about the house?",
    description: "Who decides, buyouts between heirs, and what partition means.",
    href: "/guides/heirs-disagree-selling-house",
  },
  propertyTaxes: {
    title: "Who pays the property taxes now?",
    description: "Property taxes, exemptions and deadlines after a death in Washington.",
    href: "/guides/property-taxes-after-death-washington",
  },
  stayHome: {
    title: "Can Mom or Dad afford to stay home?",
    description: "A worksheet: the real monthly cost of staying home, with care hours at Washington rates, against income and savings.",
    href: "/senior-transitions/can-parent-afford-to-stay-home",
  },
  familySale: {
    title: "Can the executor or trustee buy the house?",
    description: "Selling the house to the person in charge, or to family: the price, the protections, and taking it as a share instead.",
    href: "/guides/executor-buy-or-sell-estate-house-to-family-washington",
  },
  mortgage: {
    title: "What happens to the mortgage?",
    description: "Who keeps paying, getting the servicer to talk to you, and when family can keep the existing loan.",
    href: "/guides/mortgage-after-death-washington",
  },
  outOfState: {
    title: "We live out of state. Can we handle this from here?",
    description: "Managing a Washington estate or inherited house from another state.",
    href: "/guides/out-of-state-families",
  },
  asIsOrFix: {
    title: "Repair the house or sell it as-is?",
    description: "How to compare net proceeds, time and risk before spending estate money on repairs.",
    href: "/guides/sell-inherited-house-as-is-or-fix",
  },
  trustVsProbate: {
    title: "How is a trust sale different from probate?",
    description: "Selling a house from a living trust compared with a probate sale in Washington.",
    href: "/guides/probate-vs-trust-sale-washington",
  },
  pricingTrust: {
    title: "How should a trust or estate house be priced?",
    description: "Pricing that holds up to beneficiaries and courts.",
    href: "/guides/pricing-house-trust-estate",
  },
  dateOfDeath: {
    title: "Do we need a date-of-death appraisal?",
    description: "What a date-of-death value is for, and when an appraisal is the right tool.",
    href: "/date-of-death-valuation-property-appraisals",
  },
  afhStart: { title: "Where do I start?", description: "The steps to opening an adult family home in Washington, in order.", href: "/afh-club/getting-started" },
  afhLicense: { title: "How does licensing work?", description: "The DSHS application, provider requirements and timelines.", href: "/afh-club/licensing-certification" },
  afhCosts: { title: "What will it cost to open?", description: "Licensing fees, training, inspection and start-up costs.", href: "/afh-club/costs-fees" },
  afhTraining: { title: "What training is required?", description: "Required training for providers, resident managers and caregivers.", href: "/afh-club/training-education" },
  afhInspection: { title: "Will the house pass inspection?", description: "The building and fire inspection an adult family home must pass.", href: "/afh-club/building-inspection" },
  afhFinance: { title: "How do people finance an adult family home?", description: "Conventional, SBA and seller financing for the house and the business.", href: "/afh-club/how-to-finance-an-afh" },
  afhPayment: { title: "How do Medicaid payment levels work?", description: "CARE classifications A–E, daily rates, and what changes when a home is sold.", href: "/afh-club/care-classifications-a-through-e" },
  agingInPlace: {
    title: "Can a parent stay home safely?",
    description: "What aging in place takes: safety, modifications, in-home care and when it stops working.",
    href: "/aging-in-place-staying-home-safely",
  },
  waCares: {
    title: "What does WA Cares cover?",
    description: "Washington's long-term care benefit: who qualifies, what it pays and when.",
    href: "/long-term-care/wa-cares",
  },
  legalDocs: {
    title: "Which documents should be in place first?",
    description: "Powers of attorney, health care directives and wills to put in place before a crisis.",
    href: "/planning-before-a-crisis/legal-documents",
  },
  careManagers: {
    title: "Who can help coordinate care?",
    description: "What aging life care managers do and when families bring one in.",
    href: "/aging-life-care-managers",
  },
  downsizing: {
    title: "How do we prepare the house and the move?",
    description: "Downsizing a long-time home: sorting, timing and getting the house ready.",
    href: "/downsizing-preparing-for-transition",
  },
  moveManagers: {
    title: "Who handles the packing and the move?",
    description: "What senior move managers do and what to ask before hiring one.",
    href: "/senior-move-managers",
  },
  wills: {
    title: "Is the will up to date?",
    description: "Wills in Washington: what they do, what they don't, and when they go through probate.",
    href: "/wills",
  },
  tacoma: { title: "Handling an estate in Tacoma?", description: "Probate and estate real estate in Tacoma and Pierce County.", href: "/tacoma-probate-estate-real-estate" },
  bellevue: { title: "Handling an estate in Bellevue?", description: "Probate and estate real estate in Bellevue and the Eastside.", href: "/bellevue-probate-estate-real-estate" },
} satisfies Record<string, NextQuestion>;

const AFH_OPENING = [Q.afhStart, Q.afhLicense, Q.afhCosts, Q.afhTraining, Q.afhInspection, Q.afhFinance, Q.afhPayment];
const EXECUTOR_STEPS = [Q.authority, Q.deadlines, Q.heirsDisagree, Q.propertyTaxes];
const AGING = "/helping-an-aging-parent";

/** Path → next questions, in the order a reader would ask them. */
export const NEXT_QUESTIONS: Record<string, NextQuestion[]> = {
  /* Illness → care → paying for it → the house */
  "/long-term-care/hospital-discharge-planning": [Q.rehab, Q.careSettings, Q.findAfh, Q.houseForCare, Q.medicaid],
  "/long-term-care/short-term-nursing-home-stays": [Q.discharge, Q.careSettings, Q.medicaid, Q.houseForCare, Q.careCost],
  "/long-term-care/medicaid-and-long-term-care": [Q.medicaidHome, Q.houseForCare, Q.giftingRisks, Q.afhCost, Q.poa],
  "/long-term-care/medicaid-and-the-family-home": [Q.houseForCare, Q.poa, Q.giftingRisks, Q.afhCost],
  "/sell-house-fund-senior-living": [Q.poa, Q.medicaid, Q.reverseMortgage, Q.downsizing, Q.careCost],
  "/long-term-care/how-to-choose-care-settings": [Q.careCost, Q.findAfh, Q.chooseAfh, Q.afhCost, Q.medicaid],
  "/long-term-care/nurse-delegation": [Q.careSettings, Q.findAfh, Q.chooseAfh, Q.afhCost],
  "/afh-club/violation-history-lookup": [Q.chooseAfh, Q.findAfh, Q.afhCost, Q.medicaid],
  "/afh-club/choosing-an-adult-family-home": [Q.findAfh, Q.inspections, Q.afhCost, Q.medicaid, Q.careSettings],

  /* Death → authority → the house */
  "/trustees": [Q.familySale, Q.trustVsProbate, Q.pricingTrust, Q.dateOfDeath, Q.heirsDisagree],
  "/guides/inherited-house-washington": [Q.heirsDisagree, Q.mortgage, Q.propertyTaxes, Q.asIsOrFix, Q.dateOfDeath],
  "/guides/executor-buy-or-sell-estate-house-to-family-washington": [Q.heirsDisagree, Q.dateOfDeath, Q.authority, Q.propertyTaxes],
  "/senior-transitions/can-parent-afford-to-stay-home": [Q.careSettings, Q.careCost, Q.medicaid, Q.houseForCare],
  "/guides/mortgage-after-death-washington": [Q.authority, Q.propertyTaxes, Q.heirsDisagree, Q.dateOfDeath],
  "/executor-responsibilities-first-steps/first-30-days": EXECUTOR_STEPS,
  "/executor-responsibilities-first-steps/legal-duties": EXECUTOR_STEPS,
  "/executor-responsibilities-first-steps/property-decisions": [Q.authority, Q.heirsDisagree, Q.asIsOrFix, Q.propertyTaxes, Q.dateOfDeath],
  "/executor-responsibilities-first-steps/common-mistakes": EXECUTOR_STEPS,
  "/executor-responsibilities-first-steps/working-with-professionals": [Q.authority, Q.dateOfDeath, Q.deadlines, Q.outOfState],
  "/executor-responsibilities-first-steps/when-you-need-extra-help": [Q.authority, Q.heirsDisagree, Q.outOfState, Q.deadlines],

  /* County pages → their city estate pages (previously reachable only from the sitemap) */
  "/pierce-county": [Q.tacoma],
  "/king-county": [Q.bellevue],

  /* AFH ownership: the opening guides link to each other and onward */
  "/afh-club/getting-started": AFH_OPENING,
  "/afh-club/licensing-certification": AFH_OPENING,
  "/afh-club/costs-fees": AFH_OPENING,
  "/afh-club/training-education": AFH_OPENING,
  "/afh-club/building-inspection": AFH_OPENING,

  /* Helping an Aging Parent: each step points to the long-form guide behind it */
  [`${AGING}/exploring-care-options/comparing-costs`]: [Q.careCost, Q.afhCost, Q.careSettings, Q.houseForCare],
  [`${AGING}/exploring-care-options/eligibility`]: [Q.medicaid, Q.waCares, Q.houseForCare],
  [`${AGING}/exploring-care-options/having-the-conversation`]: [Q.careManagers, Q.agingInPlace, Q.careSettings],
  [`${AGING}/exploring-care-options/types-of-housing`]: [Q.careSettings, Q.findAfh, Q.careCost],
  [`${AGING}/finances-and-legal/paying-for-care`]: [Q.houseForCare, Q.medicaid, Q.reverseMortgage, Q.careCost],
  [`${AGING}/finances-and-legal/power-of-attorney`]: [Q.poa, Q.legalDocs],
  [`${AGING}/finances-and-legal/property-decisions`]: [Q.houseForCare, Q.giftingRisks, Q.downsizing, Q.reverseMortgage],
  [`${AGING}/finances-and-legal/wills-and-estate-plan`]: [Q.wills, Q.giftingRisks, Q.legalDocs],
  [`${AGING}/health-crisis/hospital-discharge`]: [Q.discharge, Q.rehab, Q.careSettings],
  [`${AGING}/health-crisis/legal-authority`]: [Q.poa, Q.legalDocs],
  [`${AGING}/health-crisis/managing-the-home`]: [Q.houseForCare, Q.reverseMortgage, Q.medicaid],
  [`${AGING}/health-crisis/urgent-housing`]: [Q.findAfh, Q.careSettings, Q.afhCost, Q.inspections],
  [`${AGING}/living-independently/early-planning`]: [Q.legalDocs, Q.waCares, Q.agingInPlace],
  [`${AGING}/living-independently/home-modifications`]: [Q.agingInPlace, Q.careCost],
  [`${AGING}/living-independently/long-term-financial-prep`]: [Q.waCares, Q.careCost, Q.medicaid],
  [`${AGING}/living-independently/staying-safe-at-home`]: [Q.agingInPlace, Q.careManagers],
  [`${AGING}/needs-help-at-home/family-coordination`]: [Q.careManagers, Q.outOfState, Q.poa],
  [`${AGING}/needs-help-at-home/in-home-care`]: [Q.careCost, Q.careSettings, Q.medicaid],
  [`${AGING}/needs-help-at-home/respite-options`]: [Q.rehab, Q.findAfh, Q.careSettings],
  [`${AGING}/needs-help-at-home/safety-modifications`]: [Q.agingInPlace, Q.careManagers],
};

/** The next questions for a path, without any link back to the page itself. */
export function nextQuestionsFor(pathname: string): NextQuestion[] {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return (NEXT_QUESTIONS[path] ?? []).filter((q) => q.href.split("#")[0] !== path);
}
