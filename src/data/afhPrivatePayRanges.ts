/**
 * Typical private-pay monthly rates for a resident in an adult family home, by
 * county. There is no public dataset for these; the bands below are David
 * Stein's working ranges from transaction experience and operator P&Ls, and
 * they are shown on the site only when `confirmed` is true for that band.
 *
 * Keep them honest: a band is a "most homes fall here" statement, not a quote.
 * `low`/`high` is the headline "typical private pay" range. `tiers` breaks the
 * same market out by care level so a family can see where their situation sits.
 * The top tier is open-ended ("+"), which the card renders explicitly.
 *
 * Counties without a reviewed band fall through to the unconfirmed "other"
 * band and the card shows "Not yet published".
 */

export type PrivatePayMarket = "king" | "snohomish" | "pierce" | "other";

export interface PrivatePayTier {
  label: string;
  /** Short plain-language description of who lands in this tier. */
  note: string;
  low: number;
  high: number;
  /** True when the tier has no practical ceiling (rendered as "$X+"). */
  openEnded?: boolean;
}

export interface PrivatePayBand {
  market: PrivatePayMarket;
  label: string;
  counties: string[];
  /** Typical monthly private-pay rate, low end, for a standard-needs resident. */
  low: number;
  /** Typical monthly private-pay rate, high end, before heavy-care or specialty premiums. */
  high: number;
  /** Care-level breakdown, lightest to heaviest. Empty until reviewed. */
  tiers: PrivatePayTier[];
  /** Set true once David has reviewed the numbers; nothing renders until then. */
  confirmed: boolean;
  /** ISO date the band was last reviewed. */
  reviewed: string;
}

const TIER_META = {
  basic: { label: "Lower / basic care", note: "shared or modest private room, light assistance" },
  typical: { label: "Typical private pay", note: "private room, moderate assistance" },
  premium: { label: "Higher care / premium", note: "heavier hands-on care, dementia support, or a premium home" },
  acuity: { label: "High acuity / specialty", note: "two-person assist, advanced dementia, complex medical needs" },
} as const;

const tiers = (
  basic: [number, number],
  typical: [number, number],
  premium: [number, number],
  acuity: [number, number],
): PrivatePayTier[] => [
  { ...TIER_META.basic, low: basic[0], high: basic[1] },
  { ...TIER_META.typical, low: typical[0], high: typical[1] },
  { ...TIER_META.premium, low: premium[0], high: premium[1] },
  { ...TIER_META.acuity, low: acuity[0], high: acuity[1], openEnded: true },
];

export const PRIVATE_PAY_BANDS: PrivatePayBand[] = [
  {
    market: "king",
    label: "King County",
    counties: ["King"],
    low: 7000,
    high: 9500,
    tiers: tiers([5000, 7000], [7000, 9500], [9500, 12000], [12000, 15000]),
    confirmed: true,
    reviewed: "2026-09-15",
  },
  {
    market: "snohomish",
    label: "Snohomish County",
    counties: ["Snohomish"],
    low: 6000,
    high: 8500,
    tiers: tiers([4500, 6000], [6000, 8500], [8500, 10500], [10500, 14000]),
    confirmed: true,
    reviewed: "2026-09-15",
  },
  {
    market: "pierce",
    label: "Pierce County",
    counties: ["Pierce"],
    low: 5500,
    high: 8000,
    tiers: tiers([4200, 6000], [5500, 8000], [8000, 10000], [10000, 13000]),
    confirmed: true,
    reviewed: "2026-09-15",
  },
  { market: "other", label: "All other counties", counties: [], low: 0, high: 0, tiers: [], confirmed: false, reviewed: "" },
];

export const privatePayBandForCounty = (county: string): PrivatePayBand => {
  const c = county.trim().toLowerCase();
  return (
    PRIVATE_PAY_BANDS.find((b) => b.counties.some((x) => x.toLowerCase() === c)) ??
    PRIVATE_PAY_BANDS.find((b) => b.market === "other")!
  );
};
