/**
 * MORTGAGE RATE ADJUSTMENT for What's My Remodel Worth? (Oct 15, 2026; owner: "As interest rates
 * go up, values go down. As interest rates decline, values go up.")
 *
 * The sales models price houses at the level of their latest quarter of sales. Those buyers
 * locked rates when they went under contract, about a month or two before closing. So each
 * county's model carries the rate of that period (BASE_RATE), and the page adjusts every value
 * by how far the visitor's rate is from it.
 *
 * Freddie Mac PMMS 30-year fixed, weekly (freddiemac.com/pmms/archive, read Oct 15, 2026):
 *   King County sales Jul-Sep 2026 -> contracts Jun-Aug: weekly average about 6.57%  -> 6.6
 *   Snohomish sales Apr-May 2026   -> contracts Mar-Apr: weekly average about 6.26% -> 6.3
 *   Latest: 7.40% (Oct 8 and Oct 15, 2026).
 *
 * SENSITIVITY is a stated assumption, not a King County measurement: the sales data on hand
 * (two years, rates within about a point) cannot separate rates from the season and the rest
 * of the market. 3% of value per percentage point is deliberately modest: a one-point rise cuts
 * a buyer's loan amount at the same payment by about 11%, but prices have historically moved
 * far less than that, because sellers hold, incomes rise and inventory tightens. The owner sets
 * this number. The adjustment is capped at +/-15%.
 *
 * Update CURRENT_RATE and CURRENT_RATE_DATE weekly (Thursdays), and BASE_RATE whenever a
 * county's sales data is refreshed.
 */
export const CURRENT_RATE = 7.4;
export const CURRENT_RATE_DATE = "October 15, 2026";
export const BASE_RATE: Record<string, number> = { King: 6.6, Snohomish: 6.3 };
export const RATE_SENSITIVITY = 0.03;
export const RATE_ADJUST_CAP = 0.15;

/** Multiplier for values when the 30-year rate is `rate` instead of the base rate. */
export const rateFactor = (rate: number, base: number) =>
  Number.isFinite(rate) && rate > 0 ? Math.min(1 + RATE_ADJUST_CAP, Math.max(1 - RATE_ADJUST_CAP, 1 - RATE_SENSITIVITY * (rate - base))) : 1;
