/**
 * "The short answer" at the top of four guides that rank near Google's first
 * page but opened with an audience line or a tagline (Oct 21, 2026; drafted
 * from each page's own text, approved by David "as written"). Search Console
 * showed the guides that open with a plain answer, like Medicaid and the
 * Family Home, are the ones that get clicked.
 *
 * One place for the wording: the page shows it (ShortAnswer.tsx), and
 * vite.config.ts puts the same text in the prerendered page and the FAQ/AI
 * data as the page's quick answer.
 *
 * Nursing home figures come from src/lib/careTypes.ts (the calculators'
 * source), so they update with the calculators each spring.
 *
 * No React and relative imports only: vite.config.ts imports this file.
 */
import { CARE_TYPES } from "../lib/careTypes";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
const care = (id: string) => CARE_TYPES.find((c) => c.id === id)!;
const nhSemi = care("nursing-semi");
const nhPrivate = care("nursing-private");

export interface ShortAnswer {
  /** The question the page answers (used as the quick-answer question). */
  q: string;
  a: string;
}

export const SHORT_ANSWERS: Record<string, ShortAnswer> = {
  "/guides/appraisal-vs-cma": {
    q: "What is the difference between an appraisal and a CMA for estate property?",
    a: "An appraisal is a certified appraiser's independent opinion of value, written to professional standards, and it carries legal weight: courts, the IRS, lenders and heirs dividing an estate rely on it. A CMA is a broker's opinion of the likely sale price, built from recent sales and listings, and it is the usual tool for setting a listing price. If the estate needs a value it can document for court, taxes or a buyout, get an appraisal. If it only needs a realistic asking price, a careful CMA is usually enough.",
  },
  "/guides/appraisal-before-selling-inherited-property": {
    q: "Do I need an appraisal before selling inherited property in Washington?",
    a: "Not always. Washington does not require a formal appraisal for every estate sale. You will likely need one if the court asks for it, if the estate needs a date-of-death value for estate tax, if heirs disagree on value or one is buying out the others, or if the estate's attorney or CPA asks for one. If everyone agrees to sell and you just need a realistic price, a careful market analysis from someone with appraisal training is often enough. Either way, don't rely on an online estimate: it assumes average condition, and inherited houses rarely are.",
  },
  "/long-term-care/nursing-homes": {
    q: "What do families need to know about nursing homes in Washington?",
    a: `A nursing home gives round-the-clock nursing care to people whose needs are more than home, assisted living or an adult family home can safely handle. In Washington the median cost is about ${usd(nhSemi.waMonthly)} a month for a semi-private room and ${usd(nhPrivate.waMonthly)} for a private room (CareScout, 2025 data), well above the national median. Apple Health (Medicaid) can pay for people who qualify, but not every home accepts it. Before choosing, check the home's Medicare star rating and DSHS inspection reports, ask about staffing, and visit at different times of day.`,
  },
  "/guides/repairs-before-selling-probate-home-washington": {
    q: "What repairs should be made before selling a probate home?",
    a: "Usually just the inexpensive basics: deep cleaning and odor removal, neutral interior paint, yard cleanup, carpet cleaning and small fixes. These tend to return more than they cost. Bigger jobs such as a roof, heating system or bathroom are worth doing only when comparable sales show buyers will pay for them. A full kitchen remodel, new flooring throughout or new windows rarely earn their cost back on an estate house. Safety problems, and anything that would stop a buyer from getting a loan, should be fixed or priced in.",
  },
};
