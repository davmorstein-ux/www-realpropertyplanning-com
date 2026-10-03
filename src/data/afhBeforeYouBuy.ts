/**
 * Before You Buy an Adult Family Home: What to Verify (Oct 3, 2026).
 *
 * Built from the two parts of the owner's "AFH Club Handbook" draft that the
 * site did not already cover: the seven-layer review of a purchase and the
 * list of reassuring claims to verify. Everything else in the handbook already
 * has its own page, so each layer here is two or three questions and a link,
 * not a lesson. Facts repeat the reviewed guides; change both together.
 * Used by the page and vite.config.ts, so no React and no "@/" imports.
 */

const WAC = (cite: string) => `https://app.leg.wa.gov/WAC/default.aspx?cite=${cite}`;
export const BAAU_QUEUE = "https://www.dshs.wa.gov/altsa/baau-application-processing-timeline";

export const BEFORE_YOU_BUY = {
  PATH: "/afh-club/before-you-buy-an-adult-family-home",
  TITLE: "Before You Buy an Adult Family Home: What to Verify",
  DESCRIPTION:
    "A seven-layer review for buying an operating adult family home in Washington, from the house and your license to the residents, revenue, expenses, inspection record and financing, plus the sales claims to verify before you rely on them.",
  SHORT_ANSWER:
    "Work through the purchase in seven layers: the house, your license, the residents, the revenue, the expenses, the inspection record and the financing. Verify every reassuring claim along the way. Only then does the asking price mean something.",
  PUBLISHED: "2026-10-03",
  REVIEWED: "2026-10-03",
};

export interface BybLink { label: string; href: string; external?: boolean }
export interface BybLayer { n: number; name: string; questions: string[]; link: BybLink; cite?: BybLink }

export const BYB_LAYERS: BybLayer[] = [
  {
    n: 1,
    name: "The house",
    questions: [
      "Does it work for residents, from the parking to the bedroom, the bathroom and the way out in an emergency?",
      "What will it cost to fix what doesn't? A grab bar is a small item. A resident entrance that needs structural rebuilding can decide whether the deal works at all.",
    ],
    link: { label: "AFH Property Score", href: "/afh-club/afh-property-score" },
  },
  {
    n: 2,
    name: "Your license",
    questions: [
      "Do you qualify? The provider, entity representative or resident manager needs 1,000 hours of direct care within the last 60 months, plus the required training.",
      "Which building rules apply? A home that stays licensed through the change of ownership keeps the rules it was first licensed under; a home whose license lapsed must meet today's, including 27-inch interior doors.",
      "Can the closing wait for your license? DSHS will not estimate how long it takes.",
    ],
    link: { label: "Is an Adult Family Home Right for You?", href: "/afh-club/getting-started" },
    cite: { label: "WAC 388-76-10130", href: WAC("388-76-10130"), external: true },
  },
  {
    n: 3,
    name: "The residents",
    questions: [
      "How many live there today, and who pays for each one?",
      "For each Medicaid resident: the current CARE classification and the date of the last assessment. Classifications go down as well as up.",
    ],
    link: { label: "A Through E: CARE Classifications", href: "/afh-club/care-classifications-a-through-e" },
  },
  {
    n: 4,
    name: "The revenue",
    questions: [
      "Split it into private pay, the Medicaid base rate, CBHS and any ECS or SBS contract.",
      "Which parts survive the sale? Medicaid authorizations are reissued to the new owner; ECS and SBS contracts do not transfer.",
      "Does it reconcile: resident, to classification, to authorized rate, to bank deposits?",
    ],
    link: { label: "The AFH Payment Field Guide", href: "/afh-club/afh-payment-field-guide" },
  },
  {
    n: 5,
    name: "The expenses",
    questions: [
      "What do staffing, overnight coverage and overtime really cost?",
      "How many hours do the current owners work unpaid? If you won't work them, you pay someone who will, and a lender subtracts those wages too.",
      "License fees ($450 per licensed bed a year), insurance, food, utilities and repairs.",
    ],
    link: { label: "AFH Costs & Fees", href: "/afh-club/costs-fees" },
  },
  {
    n: 6,
    name: "The inspection record",
    questions: [
      "What do the last three years of inspections, complaints and enforcement show?",
      "Is there a stop placement? It blocks new admissions, which matters if your plan is to fill empty beds.",
      "Search the address too: each new owner gets a new license number, so older history can sit under a previous license.",
    ],
    link: { label: "How to Look Up DSHS Violations", href: "/afh-club/violation-history-lookup" },
  },
  {
    n: 7,
    name: "The financing",
    questions: [
      "What income will a lender count? Last year's, after replacement wages if you won't work in the home, not the income you plan to add.",
      "Does that income cover the loan about 1.25 times, the coverage many lenders look for?",
    ],
    link: { label: "Can a Buyer Get the Loan? (calculator)", href: "/afh-club/afh-financing-calculator" },
  },
];

export interface BybClaim { claim: string; verify: string; link: BybLink }

export const BYB_CLAIMS: BybClaim[] = [
  { claim: "“It's WABO approved.”", verify: "The passed DSHS form 15-604 for this address, signed by the local building official. WABO wrote the checklist; it does not inspect houses.", link: { label: "WABO guide", href: "/afh-club/wabo-inspection-guide" } },
  { claim: "“It's AFH-ready” or “turnkey.”", verify: "Which it really is: operating, former, passed the building inspection, or only a possibility. An operating home shows on the DSHS locator.", link: { label: "Is It Really an AFH?", href: "/afh-club/afh-property-classifications" } },
  { claim: "“The license transfers.”", verify: "It never does. You apply for your own license through the change-of-ownership process.", link: { label: "Buying or selling an AFH", href: "/afh-club/buying-selling" } },
  { claim: "“It's grandfathered.”", verify: "Continuous licensing with no lapse. A home whose license lapsed must meet current rules.", link: { label: "Rule changes", href: "/afh-club/washington-afh-rule-changes" } },
  { claim: "“All six residents are high-level.”", verify: "Each resident's current classification and last assessment date, on a de-identified schedule, matched to deposits.", link: { label: "A through E", href: "/afh-club/care-classifications-a-through-e" } },
  { claim: "“The Medicaid rates stay with the home.”", verify: "Rates follow each resident, not the house, and are reissued under your ProviderOne number. A resident who moves out takes the rate along.", link: { label: "Payment Field Guide", href: "/afh-club/afh-payment-field-guide" } },
  { claim: "“The specialty contract continues.”", verify: "ECS and SBS contracts do not transfer. You need your own, approved by DSHS program staff.", link: { label: "Payment Field Guide", href: "/afh-club/afh-payment-field-guide" } },
  { claim: "“You'll be licensed in 60 days.”", verify: "DSHS will not estimate. Check its posted application queue and build the closing date around your license.", link: { label: "DSHS processing queue", href: BAAU_QUEUE, external: true } },
  { claim: "“It clears $200,000 a year.”", verify: "Tax returns, profit and loss statements and bank deposits, and who does the work that produces it.", link: { label: "Valuation Estimator", href: "/afh-club/afh-valuation-estimator" } },
  { claim: "“The lender will finance it.”", verify: "A lender's own read of last year's income and the coverage it produces, before you commit.", link: { label: "Financing calculator", href: "/afh-club/afh-financing-calculator" } },
];

export const BYB_FAQS = [
  {
    question: "What should I check before buying an adult family home in Washington?",
    answer: "Work through seven layers: whether the house works for residents and what fixing it costs; whether you qualify for your own license and which building rules apply; who the residents are and who pays for each; which revenue survives the sale; the true expenses, including the owners' unpaid hours; the DSHS inspection and enforcement record; and what income a lender will count.",
  },
  {
    question: "Does a fully occupied adult family home mean strong income?",
    answer: "Not by itself. Two full six-bed homes can earn very different amounts because each Medicaid resident's daily rate depends on their CARE classification and the county. Income that depends on one or two high-paying residents is fragile, since classifications are reassessed and can go down.",
  },
  {
    question: "Is a former adult family home a safe buy?",
    answer: "It can be a good one, but a home whose license lapsed must meet current rules to be licensed again, including 27-inch interior doors where residents pass through. Price the changes before you buy, and confirm the licensing history yourself rather than relying on “this used to be an AFH.”",
  },
];

export const BYB_PRERENDER_SECTIONS: string[] = [
  `Short answer — ${BEFORE_YOU_BUY.SHORT_ANSWER}`,
  ...BYB_LAYERS.map((l) => `Layer ${l.n}, ${l.name} — ${l.questions.join(" ")} More: ${l.link.label} (${l.link.href}).`),
  `Claims to verify — ${BYB_CLAIMS.map((c) => `${c.claim} Verify: ${c.verify}`).join(" ")}`,
];
