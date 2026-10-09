/**
 * "Can You Get a DSCR Loan for an Adult Family Home?" (Oct 9, 2026).
 *
 * WHY IT EXISTS. A lender David works with (Oct 2026) said he was getting a
 * number of inquiries from people searching online for DSCR lenders, and that
 * DSCR loans are what many AFH buyers are using. "DSCR lender" on its own is a
 * national head term AFH Club will not win; the AFH-specific questions ("DSCR
 * loan for an adult family home", "can I get a DSCR loan for an AFH") are
 * uncovered. A narrow question page, the format that already ranks for this
 * site (see the Sept 2026 Search Console notes in AGENTS.md).
 *
 * WHAT IS CONFIRMED, AND HOW
 *   - One Washington AFH lender's method, as described to David in October
 *     2026: income documented by each resident's signed agreement for the bed,
 *     the average of two years of GROSS income, not qualified on beds filled
 *     today. The lender is deliberately not named on the page. Still to confirm
 *     with that lender: whose two-year history (seller's, buyer's, either), and
 *     minimum ratio / down payment / credit score. The page phrases these as
 *     questions to ask, so nothing published depends on the answers.
 *   - SBA (SOP 50 10 8.1, applications from Oct 1, 2026): earnings after
 *     expenses, at least 1.25x for an initial acquisition, last fiscal year or
 *     a two-year average, projections cannot meet the minimum. Read in two
 *     independent summaries quoting the SOP (statementsready.com,
 *     pioneercapitaladvisory.com); the SBA document itself could not be opened
 *     from the sandbox. Only points both summaries AND the prior SOP 50 10 8
 *     agree on are used here. The 10% equity / seller-standby details are NOT
 *     on this page; they belong on How to Finance once the SOP text is read.
 *   - Rate period vs amortization vs maturity: general loan mechanics. Pacific
 *     Crest's published "10-year fixed with 15-year term" does not state its
 *     amortization, so the page does not claim a balloon for it.
 *
 * WHAT IS DELIBERATELY NOT HERE: generic credit-score or minimum-DSCR ranges
 * (unverified, and they read as facts); named SBA borrowers from public loan
 * records (private businesses); any statement that a method is "wrong". The
 * page shows the difference and lets the reader judge.
 *
 * Node-safe: imported by vite.config.ts for the prerender. No React, no "@/".
 */

export const DSCR_LOANS = {
  PATH: "/afh-club/dscr-loans-adult-family-homes",
  TITLE: "Can You Get a DSCR Loan for an Adult Family Home?",
  SEO_TITLE: "DSCR Loans for Adult Family Homes in Washington: How Lenders Count the Income | AFH Club",
  DESCRIPTION:
    "Can you use a DSCR loan to buy an adult family home? How DSCR works for a Washington AFH, why gross income and net income give very different answers, how one AFH lender and SBA lenders count income, loan terms to read, and lenders that publish AFH programs.",
  SHORT_ANSWER:
    "Sometimes. A DSCR loan qualifies a purchase mainly on the income the home produces rather than the buyer's paycheck, and some lenders offer it on adult family homes. Many ordinary rental-property DSCR programs exclude care homes. Lenders that do lend also count an AFH's income in different ways: some use gross resident income averaged over two years, while SBA and commercial lenders use income after expenses. The same home can pass one test easily and only just pass the other, so ask which income a lender counts before comparing offers.",
  PUBLISHED: "2026-10-09",
  REVIEWED: "2026-10-09",
  /** Cover art (David's second version, Oct 9, 2026; no captions). 1086x1448. */
  COVER: "/afh-dscr-loans-cover-v2.webp" as string | null,
} as const;

/* ------------------------------------------------------------------------- */
/* The worked example. Every figure on the page is computed from these inputs. */

export const EXAMPLE = {
  beds: 6,
  avgMonthlyRate: 7_500,
  caregivers: 20_000,
  foodSuppliesUtilities: 4_000,
  insuranceAdminOther: 3_000,
  ownerReplacementPay: 6_000,
  price: 1_500_000,
  downPct: 0.25,
  ratePct: 7.5,
  years: 30,
  taxesInsurance: 1_300,
  /** Two-year averaging illustration (gross, annual). */
  priorYearGross: 420_000,
  recentYearGross: 540_000,
};

export function monthlyPI(principal: number, ratePct: number, years: number): number {
  const r = ratePct / 100 / 12;
  const n = years * 12;
  return (principal * r) / (1 - Math.pow(1 + r, -n));
}

export function computeExample(e = EXAMPLE) {
  const gross = e.beds * e.avgMonthlyRate;
  const noi = gross - e.caregivers - e.foodSuppliesUtilities - e.insuranceAdminOther;
  const afterOwner = noi - e.ownerReplacementPay;
  const loan = e.price * (1 - e.downPct);
  const pi = monthlyPI(loan, e.ratePct, e.years);
  const payment = Math.round(pi + e.taxesInsurance);
  const ratio = (income: number) => Math.round((income / payment) * 100) / 100;
  const twoYearAvgAnnual = (e.priorYearGross + e.recentYearGross) / 2;
  return {
    gross,
    noi,
    afterOwner,
    loan,
    down: e.price - loan,
    pi: Math.round(pi),
    payment,
    grossRatio: ratio(gross),
    noiRatio: ratio(noi),
    afterOwnerRatio: ratio(afterOwner),
    twoYearAvgAnnual,
    twoYearAvgMonthly: twoYearAvgAnnual / 12,
  };
}

export const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
export const x = (n: number) => n.toFixed(2);

/* ------------------------------------------------------------------------- */

export const DSCR_QUESTIONS = [
  "Do you count gross income, net operating income, or rent?",
  "Over what period, and whose history: the seller's, mine, or both?",
  "What minimum ratio, down payment, credit score and cash reserves do you require?",
  "Does the loan cover only the real estate, or the business too?",
  "How long is the rate fixed, what is the amortization, and when does the loan mature? Is there a balloon payment?",
  "Is there a prepayment penalty?",
  "Do you lend this program yourselves, or place it with another lender?",
];

export const DSCR_FAQS = [
  {
    question: "Can I use a DSCR loan to buy an adult family home in Washington?",
    answer:
      "Sometimes. Many rental-property DSCR programs exclude licensed care homes, but some lenders offer DSCR-style loans on adult family homes. Before comparing offers, ask how the lender counts the home's income: gross resident income, income after expenses, or rent. The answer decides how much the home can borrow and how much room is left after the payment.",
  },
  {
    question: "Can I buy an adult family home without showing personal income?",
    answer:
      "Possibly. DSCR loans and SBA loans both lean mainly on the home's income rather than the buyer's paycheck. Lenders still check credit and cash reserves, and SBA lenders also look at the buyer's experience running a care home or a plan for who will.",
  },
  {
    question: "Is a higher DSCR always better?",
    answer:
      "Only if you know what income it is based on. A ratio of 4 measured on gross resident income can leave less room than a ratio of 1.5 measured on income after caregivers, food, insurance and other costs.",
  },
  {
    question: "Can a lender count the beds I plan to fill?",
    answer:
      "Generally not. The Washington AFH lender we spoke with averages two years of actual gross income, and SBA rules for applications from October 1, 2026 do not allow projections to meet the minimum coverage ratio. A home that has been half empty is judged on its record, not its potential.",
  },
  {
    question: "Does a DSCR loan work for converting a house into an adult family home?",
    answer:
      "Usually not on its own. There is no income history for a lender to count until the home is licensed and has residents. Buyers converting a house generally look at owner-occupied residential loans, renovation programs, or other financing, and refinance once the home has a track record.",
  },
  {
    question: "Does Real Property Planning get paid by DSCR lenders?",
    answer:
      "No. Real Property Planning receives no compensation from any lender. Lenders are listed because their own published information shows they offer adult family home or DSCR programs, and each is marked not yet confirmed until its terms have been checked by phone.",
  },
];

/** Plain-text sections for the build-time prerender that crawlers and AI engines read. */
export function dscrPrerenderSections(): string[] {
  const c = computeExample();
  return [
    "What DSCR means — debt service coverage ratio: the income a lender counts divided by the loan payment. $15,000 of monthly income against a $10,000 payment is a ratio of 1.50.",
    "Three ways a lender can count an adult family home's income — gross income (everything residents pay, before costs; used by some DSCR programs that treat resident agreements like leases); net operating income (resident income minus caregivers, food, insurance and other costs; used by SBA and commercial lenders); and rent (market rent or an operator's lease; used by ordinary rental-property DSCR programs, many of which exclude care homes).",
    `The same home measured three ways — a full six-bed home at ${usd(EXAMPLE.avgMonthlyRate)} per resident grosses ${usd(c.gross)} a month; after caregivers, food, utilities, insurance and administration it nets ${usd(c.noi)}; after a ${usd(EXAMPLE.ownerReplacementPay)} replacement salary for the owner's own work, ${usd(c.afterOwner)}. On a ${usd(EXAMPLE.price)} purchase with 25% down at ${EXAMPLE.ratePct}% over ${EXAMPLE.years} years plus taxes and insurance (${usd(c.payment)} a month), the coverage ratio is ${x(c.grossRatio)} on gross income, ${x(c.noiRatio)} on net operating income, and ${x(c.afterOwnerRatio)} after the owner's pay. Illustrative figures, not a quote.`,
    `How one Washington AFH lender counts income (October 2026) — income documented by each resident's signed agreement for the bed, averaged over the past two years of gross income, not qualified on beds filled today. A home that grossed ${usd(EXAMPLE.priorYearGross)} one year and ${usd(EXAMPLE.recentYearGross)} the next averages ${usd(c.twoYearAvgAnnual)}, so a recent improvement only half counts.`,
    "How SBA lenders count income — under SBA procedures for applications from October 1, 2026: earnings after expenses, at least 1.25 times all debt payments for a first business purchase, measured on the last fiscal year or a two-year average; projections cannot be used to meet the minimum. See How to Finance an Adult Family Home (/afh-club/how-to-finance-an-afh).",
    "Read the terms, not just the rate — the rate period (how long the rate is fixed), the amortization (the years the payment is calculated over) and the maturity (when the balance is due) are three different numbers. A loan can be fixed for 10 years, amortized over 25 and due at 15, leaving a balloon payment to refinance; for an adult family home the new lender will judge the license, occupancy and income as they are then.",
    "Which buyers a DSCR loan fits — buying an established licensed home with two steady years: good. A home that was recently half empty: weak. Converting a house into an AFH: poor, no income history. An investor leasing the building to an operator: depends on the lender.",
    "A change of ownership — the buyer applies for a new license, and specialty contracts such as ECS and SBS do not pass to a new owner automatically, so two years of the seller's income can overstate the first months under new ownership.",
    "Never hide the plan — financing a property as an ordinary rental while planning a licensed care home can conflict with the loan terms, the insurance and the statements a borrower signs.",
    `Questions to ask any lender — ${DSCR_QUESTIONS.join(" ")}`,
    "Related — How to Finance an Adult Family Home (/afh-club/how-to-finance-an-afh), the Occupancy & Financing Calculator (/afh-club/afh-financing-calculator), the AFH ROI Calculator (/afh-club/afh-roi-calculator), and adult family homes for sale in Washington (/afh-club/listings).",
  ];
}
