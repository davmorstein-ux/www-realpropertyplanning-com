/**
 * WHAT'S MY REMODEL WORTH? — page words (Oct 13, 2026). Shared by the page
 * (src/pages/RemodelValue.tsx) and the prerender (vite.config.ts), so it stays
 * Node-safe: no React, no "@/". The math is in src/lib/remodelValue.ts and the
 * tier table, which the owner reviews, in src/data/remodelTiers.ts.
 *
 * Figures quoted here come from the Oct 13, 2026 fit on King County sales from
 * Oct 1, 2024 to Sept 30, 2026. Rebuild them with scripts/remodel-data/ and
 * update the numbers below when the data is refreshed.
 */

export const REMODEL_PAGE = {
  PATH: "/whats-my-remodel-worth",
  TITLE: "What's My Remodel Worth?",
  SEO_TITLE: "What's My Remodel Worth? King County Remodel Value Calculator | Real Property Planning",
  DESCRIPTION:
    "Free King County calculator: look up your house, choose what you would remodel and at what quality, and see two values afterward, a broker's view of what buyers pay and an appraiser's view of what a refinance appraisal is likely to support. Built from 27,000 King County home sales.",
  PUBLISHED: "2026-10-13",
  REVIEWED: "2026-10-14",
  SALES_FROM: "October 2024",
  SALES_THROUGH: "September 2026",
  /** The quarter today's estimates are priced at (model.json marketQuarter). */
  MARKET_MONTHS: "July to September 2026",
  N_SALES: "27,066",
  SHORT_ANSWER:
    "It depends on how much of the house you redo, the quality you choose, and what the best houses in your neighborhood are like. In King County sales from the last two years, each step up in the assessor's quality grade added about 10% to price, each step up in condition about 8%, and a recent renovation about 20% more in what buyers paid. Appraisers credit less: they give no premium for \"newly remodeled\" and stop crediting quality that goes past the neighborhood's best houses.",
};

export const REMODEL_FAQS: { question: string; answer: string; alts?: string[] }[] = [
  {
    question: "How much value does a remodel add to a King County house?",
    answer:
      "In King County single-family sales from October 2024 to September 2026, each step up in the assessor's building grade (the quality of construction and finishes) went with about 10% more in price, each step up in condition about 8%, and a renovation in the last ten years about 20% more. What your remodel adds depends on how much of the house it touches, the quality, and your neighborhood. The calculator on this page works it out for your house.",
    alts: ["does remodeling increase home value in King County", "how much does a kitchen remodel add to home value"],
  },
  {
    question: "Why does the remodel calculator show a broker's value and an appraiser's value?",
    answer:
      "Because they measure different things. The broker's view is what buyers have paid for freshly remodeled houses, including the premium buyers pay for move-in ready. The appraiser's view is closer to what a refinance appraisal supports: credit for measurable changes in quality, condition, size and baths, no premium for being newly remodeled, and no credit for quality beyond what the neighborhood's best houses have. When you will refinance rather than sell, plan around the appraiser's number.",
    alts: ["broker value vs appraiser value after a remodel"],
  },
  {
    question: "Will an appraiser give full credit for my remodel when I refinance?",
    answer:
      "Often not. An appraiser values the house from sales of comparable houses, so a remodel is credited for what the market shows it adds, not for what it cost. Quality well beyond the neighborhood's best houses is usually credited at little or nothing. Keep a list of the work, permits, dates and costs for the appraiser; it helps them see what changed.",
    alts: ["refinance appraisal after remodel", "does an appraisal count remodel cost"],
  },
  {
    question: "What does over-improving a house mean?",
    answer:
      "Remodeling to a quality well above the other houses in the neighborhood. Buyers in a neighborhood expect a range of quality and pay for it, but the top of that range sets a ceiling. Quality past it adds less than it costs, and appraisers give it little credit. The calculator warns you when your choices go past the quality of the top tenth of houses sold in your assessor neighborhood.",
    alts: ["over improving a house for the neighborhood"],
  },
  {
    question: "Where does the remodel calculator get its numbers?",
    answer:
      "From the King County Assessor's public records: every recorded sale and the building record for each house. The model uses 27,066 ordinary market sales of single-family homes from October 2024 to September 2026, each matched to its house. Family transfers, foreclosures and sales the assessor flagged as unusual are left out. Lookups show the public building record for an address; no owner names or individual sale prices are shown.",
  },
  {
    question: "How accurate is the remodel value calculator?",
    answer:
      "Tested on 5,336 King County sales it had not seen, half of its estimates were within 8% of the actual sale price and 88% were within 20%. It cannot see what the records miss, such as a remodel done without a permit, a bad layout, deferred maintenance, or a great view the assessor has not rated. Treat it as a starting point. A broker's market analysis or an appraisal looks at the house itself.",
  },
  {
    question: "Can the calculator tell me what a remodel I already did is worth today?",
    answer:
      "Yes. Choose \"Already remodeled\", enter the year the work was finished, describe the house as it was before the work, and pick what was redone. It shows today's value without the remodel and with it, in an appraiser's view and a broker's view. Work more than ten years old earns a smaller premium from buyers, because King County sales show buyers pay less for an older renovation.",
    alts: ["how much did my past remodel add to my home value"],
  },
  {
    question: "Is the remodel calculator an appraisal?",
    answer:
      "No. It is an automated estimate from public records, not an appraisal, a broker price opinion, or a comparative market analysis, and it should not be used for a loan. For a value you can rely on, ask a licensed broker for a market analysis or hire a certified appraiser.",
  },
];
