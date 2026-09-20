import { CARE_CALCULATORS } from "@/lib/careCalculators";

/**
 * Every calculator on the site, in the two groups the /calculators page shows.
 *
 * WHY THIS FILE EXISTS (Sept 2026). The homepage states how many calculators the
 * site has. That figure was hand-counted and went stale the day a new tool
 * shipped. The count is now DERIVED from this list, and a test
 * (src/test/calculatorIndex.test.ts) fails if any entry stops being a live
 * route or if the total falls below what the homepage claims. Add a calculator
 * here and the /calculators page and the homepage claim both stay true.
 *
 * What counts as a calculator: a page where the visitor enters something and
 * gets a figure or a score back. The Violation History Lookup is a search of
 * public records, not a calculator, and is deliberately not listed.
 *
 * Family calculators are not repeated here: they come from CARE_CALCULATORS in
 * src/lib/careCalculators.ts, one per care type, each with its own page.
 */

export interface CalculatorEntry {
  href: string;
  title: string;
  blurb: string;
}

/** For people buying, owning, or investing in an adult family home. */
export const AFH_CALCULATORS: CalculatorEntry[] = [
  {
    href: "/afh-club/afh-property-score",
    title: "AFH Property Score",
    blurb: "Could this house work as an adult family home? A 100-point screen of the building, a feasibility check, and a tape-measure checklist for the showing.",
  },
  {
    href: "/afh-club/afh-roi-calculator",
    title: "AFH ROI Calculator",
    blurb: "Model revenue by bed count, occupancy, and Medicaid versus private-pay mix against operating costs.",
  },
  {
    href: "/afh-club/afh-valuation-estimator",
    title: "AFH Valuation Estimator",
    blurb: "Separate what the real estate is worth from what the operating business adds.",
  },
  {
    href: "/afh-club/afh-financing-calculator",
    title: "Occupancy & Financing Calculator",
    blurb: "Whether a buyer can get the loan at a given price and number of residents, and what each empty bed does to the lender's answer.",
  },
  {
    href: "/afh-club/cost-by-location",
    title: "AFH Cost by City & County",
    blurb: "Medicaid daily rates and private-pay ranges for adult family homes anywhere in Washington.",
  },
];

/** Family-side calculators, one per care type. */
export const FAMILY_CALCULATOR_HREFS: string[] = CARE_CALCULATORS.map((c) => `/cost-of-care-calculator/${c.slug}`);

export const CALCULATOR_COUNT = AFH_CALCULATORS.length + CARE_CALCULATORS.length;

/** The homepage says "10+". This is the floor that claim depends on. */
export const HOMEPAGE_CALCULATOR_CLAIM = 10;
