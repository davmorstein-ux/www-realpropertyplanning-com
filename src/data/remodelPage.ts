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
  SEO_TITLE: "What's My Remodel Worth? King, Snohomish & Pierce County Remodel Value Calculator | Real Property Planning",
  DESCRIPTION:
    "Free calculator for King, Snohomish and Pierce County homes: look up your house, choose what you would remodel and at what quality, and see two values afterward, a broker's view of what buyers pay and an appraiser's view of what a refinance appraisal is likely to support. Built from about 27,000 King County, 14,000 Snohomish County and 15,000 Pierce County home sales.",
  PUBLISHED: "2026-10-13",
  REVIEWED: "2026-10-15",
  SALES_FROM: "October 2024",
  SALES_THROUGH: "September 2026",
  SNO_N_SALES: "14,385",
  SNO_SALES_FROM: "January 2024",
  SNO_SALES_THROUGH: "May 2026",
  SNO_MARKET_MONTHS: "April and May 2026",
  /* Pierce County (Oct 15, 2026): pie_build.py on the assessor-treasurer data mart files of Oct 8, 2026. */
  PIE_N_SALES: "14,662",
  PIE_SALES_FROM: "October 2024",
  PIE_SALES_THROUGH: "September 2026",
  PIE_MEDIAN_ERR: "6%",
  PIE_WITHIN_20: "94%",
  /** The quarter today's estimates are priced at (model.json marketQuarter). */
  MARKET_MONTHS: "July to September 2026",
  N_SALES: "27,066",
  /** The one line visitors see under the title (Oct 17, 2026, David: "simpler and less wordy"). */
  TAGLINE: "See how much a remodel could add to your home's value.",
  /** Not shown on the page since Oct 17, 2026. Kept as the crawler quick answer (vite.config.ts) and matches the FAQ. */
  SHORT_ANSWER:
    // Oct 16, 2026: rewritten in plain words at David's request ("Less than most owners hope" was hard to follow).
    "In King County, a complete renovation has added up to about 30% to a house's sale price. A refinance appraisal usually credits about 20%. Money spent beyond what the best houses in your neighborhood have rarely comes back when you sell.",
};

export const REMODEL_FAQS: { question: string; answer: string; alts?: string[] }[] = [
  {
    question: "How much value does a remodel add to a King County house?",
    answer:
      "In King County sales, a complete renovation has added up to about 30% over what the same house sells for unrenovated: houses resold after a recorded renovation gained a median 25% over the market in 98034 and up to about a third countywide. Appraisers credit about 20%. A partial remodel earns part of that, depending on what it covers and the quality. The calculator on this page works it out for your house.",
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
      "From the King County Assessor's public records: every recorded sale and the building record for each house. The model uses 27,066 ordinary market sales of single-family homes from October 2024 to September 2026, each matched to its house. Family transfers, foreclosures and sales the assessor flagged as unusual are left out. Snohomish County houses are priced the same way from the Snohomish County Assessor's open data: 14,385 valid market sales of single-family homes from January 2024 to May 2026, and Pierce County houses from the Pierce County Assessor-Treasurer's data: 14,662 valid market sales from October 2024 to September 2026. Lookups show the public building record for an address; no owner names or individual sale prices are shown.",
  },
  {
    question: "How accurate is the remodel value calculator?",
    answer:
      "Tested on 5,336 King County sales it had not seen, half of its estimates were within 8% of the actual sale price and 88% were within 20%; for Snohomish County, half were within 7% and 90% within 20%; for Pierce County, half within 6% and 94% within 20%. It cannot see what the records miss, such as a remodel done without a permit, a bad layout, deferred maintenance, or a great view the assessor has not rated. Treat it as a starting point. A broker's market analysis or an appraisal looks at the house itself.",
  },
  {
    question: "Can the calculator tell me what a remodel I already did is worth today?",
    answer:
      "Yes. Choose \"Already remodeled\", enter the year the work was finished, describe the house as it was before the work, and enter what was spent on each part. It shows today's value without the remodel and with it, in an appraiser's view and a broker's view. Work more than ten years old earns a smaller premium from buyers, because King County sales show buyers pay less for an older renovation.",
    alts: ["how much did my past remodel add to my home value"],
  },
  {
    question: "Is the remodel calculator an appraisal?",
    answer:
      "No. It is an automated estimate from public records, not an appraisal, a broker price opinion, or a comparative market analysis, and it should not be used for a loan. For a value you can rely on, ask a licensed broker for a market analysis or hire a certified appraiser.",
  },
];
