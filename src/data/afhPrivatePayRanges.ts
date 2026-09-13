/**
 * Typical private-pay monthly rates for a resident in an adult family home, by
 * market. There is no public dataset for these; the bands below are David
 * Stein's working ranges from transaction experience and operator P&Ls, and
 * they are shown on the site only when `confirmed` is true for that market.
 *
 * Keep them honest: a band is a "most homes fall here for a typical resident"
 * statement, not a quote. Memory care, two-person transfers, and behavioral
 * needs sit above the top of the band everywhere.
 */

export type PrivatePayMarket = "king" | "pugetSound" | "eastsideMetro" | "rural";

export interface PrivatePayBand {
  market: PrivatePayMarket;
  label: string;
  counties: string[];
  /** Typical monthly private-pay rate, low end, for a standard-needs resident. */
  low: number;
  /** Typical monthly private-pay rate, high end, before memory-care or heavy-care premiums. */
  high: number;
  /** Set true once David has reviewed the numbers; nothing renders until then. */
  confirmed: boolean;
  /** ISO date the band was last reviewed. */
  reviewed: string;
}

export const PRIVATE_PAY_BANDS: PrivatePayBand[] = [
  { market: "king", label: "King County", counties: ["King"], low: 0, high: 0, confirmed: false, reviewed: "" },
  {
    market: "pugetSound",
    label: "Pierce, Snohomish, Kitsap, and Thurston counties",
    counties: ["Pierce", "Snohomish", "Kitsap", "Thurston", "Island", "Skagit", "Whatcom"],
    low: 0,
    high: 0,
    confirmed: false,
    reviewed: "",
  },
  {
    market: "eastsideMetro",
    label: "Spokane, Clark, Benton, Franklin, and Yakima counties",
    counties: ["Spokane", "Clark", "Benton", "Franklin", "Yakima"],
    low: 0,
    high: 0,
    confirmed: false,
    reviewed: "",
  },
  { market: "rural", label: "All other counties", counties: [], low: 0, high: 0, confirmed: false, reviewed: "" },
];

export const privatePayBandForCounty = (county: string): PrivatePayBand => {
  const c = county.trim().toLowerCase();
  return (
    PRIVATE_PAY_BANDS.find((b) => b.counties.some((x) => x.toLowerCase() === c)) ??
    PRIVATE_PAY_BANDS.find((b) => b.market === "rural")!
  );
};
