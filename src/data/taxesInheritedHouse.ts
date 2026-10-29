/**
 * "What Taxes Do You Pay When Selling an Inherited House in Washington State?"
 * Title, description and the short answer, shared by the page and
 * vite.config.ts (prerender), Oct 19, 2026.
 *
 * Search Console, Sept 20 – Oct 17, 2026: position 11.6, just off page one,
 * for "tax on sale of inherited property", "taxes on inherited house",
 * "inherited house tax" and "does washington state have an inheritance tax".
 * The page opened with two paragraphs about the page itself before any
 * answer. It now opens with the answer, the numbers, and a worked example.
 *
 * Figures repeat the page's own, already-sourced statements: stepped-up basis
 * and long-term treatment (federal); RCW 82.87.050 (Washington's capital gains
 * tax excludes real estate); Department of Revenue estate tax exclusion
 * ($3,000,000 for deaths from July 1, 2026; $3,076,000 January–June 2026);
 * REET is the seller's obligation (RCW 82.45.080). Recheck each January.
 * No React, no "@/": vite.config.ts imports this.
 */
export const TAXES_INHERITED_HOUSE = {
  PATH: "/guides/taxes-selling-inherited-house-washington",
  TITLE: "What Taxes Do You Pay When Selling an Inherited House in Washington State?",
  SEO_TITLE: "Taxes on Selling an Inherited House in WA (2026)",
  DESCRIPTION:
    "Often little or none: the tax basis steps up to the value at death, so only later gain is taxed. Washington State (WA) taxes no capital gains on real estate and has no inheritance tax.",
  REVIEWED: "2026-10-19",
  SHORT_ANSWER:
    "Often little or none. When you inherit a house, its tax basis resets (\"steps up\") to its fair market value on the date of death, so federal capital gains tax applies only to any gain after that date, at long-term rates. Washington's own capital gains tax does not apply to real estate, and Washington has no inheritance tax. Washington's estate tax is paid by the estate, not the heirs, and only when the whole estate is over $3,000,000 (deaths from July 1, 2026). The seller pays the real estate excise tax (REET) at closing, as on any sale.",
  POINTS: [
    { label: "Federal capital gains", text: "Only on gain above the value at the date of death, always at long-term rates. Selling within a year or so of the death often means little or no gain." },
    { label: "Washington capital gains tax", text: "Does not apply to real estate (RCW 82.87.050)." },
    { label: "Inheritance tax", text: "Washington has none." },
    { label: "Washington estate tax", text: "Paid by the estate before distribution, only if the whole estate is over $3,000,000 (deaths from July 1, 2026; $3,076,000 for January–June 2026)." },
    { label: "Real estate excise tax (REET)", text: "Paid by the seller at closing; the rate depends on the price and the county." },
  ],
  EXAMPLE: {
    heading: "A worked example",
    lines: [
      "Your parent bought the house for $80,000. It was worth $650,000 when they died.",
      "Your tax basis is $650,000, not $80,000. The $570,000 of growth during your parent's life is never taxed as a capital gain.",
      "You sell eight months later for $670,000 and pay $40,000 in commission, excise tax and closing costs.",
      "$670,000 − $40,000 − $650,000 = −$20,000. There is no taxable gain.",
    ],
    note: "The basis is only as good as the evidence for it: a date-of-death appraisal is what documents the $650,000.",
  },
};
