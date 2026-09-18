/**
 * AFH financing lanes and lender directory (Sept 2026).
 *
 * Every entry is listed from the lender's own published information. `verified`
 * is the date David last confirmed by phone that the lender is currently
 * writing this kind of AFH loan; null means not yet confirmed, and the page
 * says so. Published terms (down payment, LTV) drift — they are quoted with
 * the `termsAsOf` date and never stated as current fact.
 *
 * RPP receives no compensation from any lender listed. This is not an
 * endorsement, and the list is deliberately short: lenders with public
 * evidence of actually understanding AFHs, not every mortgage company.
 */

export type LaneId = "residential" | "sba7a" | "sba504" | "portfolio";

export interface FinancingLane {
  id: LaneId;
  title: string;
  who: string;
  summary: string;
  typical: string[];
  tradeoffs: string[];
}

export const LANES: FinancingLane[] = [
  {
    id: "residential",
    title: "Owner-occupied residential AFH financing",
    who: "You will live in the home and run it yourself.",
    summary:
      "A handful of Puget Sound lenders write standard residential mortgages on licensed adult family homes when the buyer will occupy the home. It is the cheapest money available and the lowest down payment, but it is underwritten on the buyer's own qualifications, and it finances the house — not the business.",
    typical: ["Conventional or government-backed residential programs", "Down payments the lender publishes as low as 5% for qualified owner-occupants", "30-year fixed terms at residential rates", "Business portion paid in cash or on seller terms"],
    tradeoffs: ["Owner-occupancy required", "Qualifying is on the buyer's income and credit; the home's business revenue may count only partly or not at all", "Not every lender will write it — use one that says it does"],
  },
  {
    id: "sba7a",
    title: "SBA 7(a) — business acquisition financing",
    who: "You are buying the licensed operating business along with the real estate.",
    summary:
      "The workhorse for AFH purchases. A bank lends; the SBA guarantees most of it, which lets the bank accept about 10% down, a 25-year term with no balloon, and a loan that includes the business, working capital and closing costs. The price is a higher, variable rate and a slower close.",
    typical: ["About 10% down", "Up to 25 years, fully amortizing, when real estate is the majority of the loan", "House, business, goodwill, working capital and closing costs in one loan, up to $5 million", "Variable rate: Prime plus a spread (see the rate ceiling box)"],
    tradeoffs: ["Guarantee fee added to the loan", "Personal guarantee from anyone owning 20% or more", "45–90 days to close, with extensive paperwork", "Underwritten on last year's tax returns, not projections"],
  },
  {
    id: "sba504",
    title: "SBA 504 — owner-occupied real estate",
    who: "You want a lower fixed rate on the property and can handle the business separately.",
    summary:
      "A bank loan paired with a fixed-rate loan from a Certified Development Company. About 10% down, and the CDC portion is fixed for 25 years at a rate set off Treasury yields — cheaper than 7(a). It cannot finance the business portion, so that is paid in cash or on seller terms.",
    typical: ["About 10% down", "CDC portion fixed for 25 years; bank portion at market", "Real estate and eligible improvements only"],
    tradeoffs: ["Business, goodwill and working capital are excluded", "Two lenders, two closings, more time"],
  },
  {
    id: "portfolio",
    title: "Portfolio / commercial AFH financing",
    who: "You are buying as an investor, or your file does not fit residential or SBA underwriting.",
    summary:
      "Banks lending on their own balance sheet treat an AFH as commercial property: larger down payments, shorter terms, often a balloon. Useful for investors, experienced operators buying additional homes, and buyers who need speed or flexibility that SBA does not offer.",
    typical: ["25–35% down (one local lender publishes a 70% maximum loan-to-value)", "5- to 10-year terms with a balloon, amortized over 15–20 years", "Adjustable and fixed options", "Real estate only"],
    tradeoffs: ["Most cash at closing", "Refinance risk when the balloon comes due", "Business paid separately"],
  },
];

export interface Lender {
  name: string;
  lane: LaneId;
  location: string;
  contacts: { name: string; role?: string; phone?: string; nmls?: string }[];
  phone?: string;
  publishedTerms?: string;
  termsAsOf: string;
  bestFit: string;
  note?: string;
  /** ISO date David last confirmed the program by phone; null = not yet confirmed. */
  verified: string | null;
}

export const LENDERS: Lender[] = [
  {
    name: "Evergreen Home Loans",
    lane: "residential",
    location: "Gig Harbor",
    contacts: [{ name: "Jon Hanes", role: "Senior Loan Officer", phone: "253-222-5646", nmls: "129014" }],
    publishedTerms: "Financing that may be used to purchase or refinance an owner-occupied adult family home, per the Adult Family Home Council of Washington.",
    termsAsOf: "2026-09-18",
    bestFit: "Owner-occupied AFH purchases and refinances.",
    verified: null,
  },
  {
    name: "CrossCountry Mortgage",
    lane: "residential",
    location: "Bothell",
    contacts: [{ name: "Rosa Briggs", phone: "425-268-0245", nmls: "117032" }],
    publishedTerms: "A dedicated adult family home financing program using residential mortgage programs, including strategies that combine residential and business/SBA financing.",
    termsAsOf: "2026-09-18",
    bestFit: "Owner-occupied purchases, and transactions that pair a residential loan on the house with separate financing for the business.",
    verified: null,
  },
  {
    name: "Priority Home Lending",
    lane: "residential",
    location: "Puyallup",
    contacts: [{ name: "Tina Reeder", phone: "253-230-0828", nmls: "305534" }],
    publishedTerms: "Conventional AFH financing described as starting around 5% down when owner-occupied; government-backed options owner-occupied only.",
    termsAsOf: "2026-09-18",
    bestFit: "Conventional and government-backed owner-occupied AFH purchases.",
    verified: null,
  },
  {
    name: "Tristar Finance",
    lane: "residential",
    location: "Kirkland",
    contacts: [
      { name: "Seth Raddue", role: "President / CEO", phone: "206-240-4499", nmls: "90509" },
      { name: "Blake Brown", role: "Mortgage Loan Originator", phone: "425-999-4499", nmls: "2296942" },
    ],
    publishedTerms: "An adult family home financing program alongside FHA, VA, jumbo, rehab, bank-statement, Non-QM, DSCR and bridge programs.",
    termsAsOf: "2026-09-18",
    bestFit: "Owner-occupied AFHs, unusual borrower profiles, renovation situations, and files needing alternatives to standard conventional underwriting.",
    verified: null,
  },
  {
    name: "Live Oak Bank",
    lane: "sba7a",
    location: "National (Wilmington, NC)",
    contacts: [{ name: "Shep Harris", role: "SVP, Head of Senior Care", phone: "910-550-2877" }],
    publishedTerms: "A dedicated residential assisted living lending team financing acquisitions, refinancing, working capital, construction and expansion.",
    termsAsOf: "2026-09-18",
    bestFit: "Buying an existing AFH business with its real estate; expansion; startup or construction; refinance.",
    verified: null,
  },
  {
    name: "Byline Bank",
    lane: "sba7a",
    location: "National (Chicago, IL)",
    contacts: [
      { name: "Zelimir Lalusic", phone: "847-805-7001" },
      { name: "Karl Zachmann", phone: "317-983-3368" },
    ],
    publishedTerms: "SBA Preferred Lender with an assisted-living practice: loans to $5 million, acquisitions to 90%, terms to 25 years with qualifying real estate, first-time owners eligible.",
    termsAsOf: "2026-09-18",
    bestFit: "AFH business acquisitions with real estate, including first-time owners.",
    verified: null,
  },
  {
    name: "Columbia Bank",
    lane: "sba7a",
    location: "Seattle",
    contacts: [{ name: "Gregg Ridgeway", phone: "206-223-9332" }],
    publishedTerms: "Washington SBA lender — SBA's 2026 Outstanding Lender of the Year for the Seattle District. No AFH-specific program published.",
    termsAsOf: "2026-09-18",
    bestFit: "Washington SBA 7(a) and 504 lending; AFH eligibility to be confirmed per transaction.",
    note: "Listed as a Washington SBA lender, not as an AFH specialist.",
    verified: null,
  },
  {
    name: "Ameritrust CDC",
    lane: "sba504",
    location: "Edmonds",
    contacts: [],
    publishedTerms: "Certified Development Company for SBA 504 loans; up to 90% of eligible project costs under the standard structure.",
    termsAsOf: "2026-09-18",
    bestFit: "The fixed-rate CDC portion of a 504 loan on owner-occupied AFH real estate.",
    verified: null,
  },
  {
    name: "Pacific Crest Bank",
    lane: "portfolio",
    location: "Lynnwood",
    contacts: [],
    phone: "425-670-9600",
    publishedTerms: "AFH purchase and refinance loans for investors: maximum 70% loan-to-value, adjustable-rate programs, a 10-year fixed with 15-year term, prepayment options with and without penalties.",
    termsAsOf: "2026-09-18",
    bestFit: "Investor purchases and refinances; buyers who do not fit residential owner-occupied or SBA underwriting.",
    note: "Published as an investor product; confirm any owner-occupied use with the bank.",
    verified: null,
  },
];

/** Current SBA 7(a) variable-rate ceiling, kept by hand. Update Prime and the date together. */
export const SBA_RATE_BOX = {
  primeRate: 6.75,
  primeAsOf: "2026-09-17",
  verifiedOn: "2026-09-18",
  spreads: [
    { band: "$50,000 or less", spread: 6.5 },
    { band: "$50,001 – $250,000", spread: 6.0 },
    { band: "$250,001 – $350,000", spread: 4.5 },
    { band: "Over $350,000", spread: 3.0 },
  ],
};
