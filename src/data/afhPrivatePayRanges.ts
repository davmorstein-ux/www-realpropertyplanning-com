/**
 * Typical private-pay monthly rates per resident (per occupied bed, not the
 * home's total revenue) in a Washington adult family home, by market.
 *
 * There is no public dataset for these; the bands below are David Stein's
 * working ranges from brokerage and appraisal experience with operating homes,
 * and they are shown on the site only when `confirmed` is true for that band.
 *
 * Keep them honest: a band is a "most homes fall here" statement, not a quote.
 * `low`/`high` is the headline "typical private pay" range for a private room
 * with moderate care. `tiers` breaks the same market out by care level so a
 * family (or a buyer underwriting a home) can see where a situation sits. A
 * tier with `openEnded` has no practical ceiling and renders as "$X+".
 *
 * Resolution order: a city named in a submarket's `cities` wins over its
 * county; otherwise the county band; otherwise the unconfirmed "other" band,
 * which renders as "Not yet published". King County is split into submarkets
 * because its spread is wider than the spread between counties; cities not
 * named in a submarket (Seattle, Shoreline, Kenmore, ...) use the countywide
 * band. City-level rows can be added here later as call data accumulates.
 */

export type PrivatePayMarket =
  | "king"
  | "king-eastside"
  | "king-south"
  | "king-lakeside"
  | "snohomish"
  | "pierce"
  | "other";

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
  /** Primary county for DSHS purposes. */
  county: string;
  /** Counties this band covers when no submarket matches. Empty for submarkets. */
  counties: string[];
  /** Cities that route to this band ahead of their county band. */
  cities?: string[];
  /** Typical monthly private-pay rate, low end, for a private room with moderate care. */
  low: number;
  /** Typical monthly private-pay rate, high end, before heavy-care or specialty premiums. */
  high: number;
  /** Care-level breakdown, lightest to heaviest. Empty until reviewed. */
  tiers: PrivatePayTier[];
  /** One-sentence local colour, e.g. which cities sit at the top of the band. */
  note?: string;
  /** Set true once David has reviewed the numbers; nothing renders until then. */
  confirmed: boolean;
  /** ISO date the band was last reviewed. */
  reviewed: string;
}

const REVIEWED = "2026-09-15";

const T = {
  basic: { label: "Lower / basic care", note: "shared or modest private room, light assistance" },
  typical: { label: "Typical private pay", note: "private room, moderate assistance" },
  premium: { label: "Higher care / premium", note: "heavier hands-on care, dementia support, or a premium home" },
  acuity: { label: "High acuity / specialty", note: "two-person assist, advanced dementia, complex medical needs" },
  personal: { label: "Personal care", note: "private room, standard assistance with daily living" },
  memory: { label: "Memory care", note: "dementia support; heavier care sits at the top or above" },
  highEnd: { label: "Higher-end / memory care", note: "premium homes and memory-care beds in this submarket" },
} as const;

const four = (
  basic: [number, number],
  typical: [number, number],
  premium: [number, number],
  acuity: [number, number],
): PrivatePayTier[] => [
  { ...T.basic, low: basic[0], high: basic[1] },
  { ...T.typical, low: typical[0], high: typical[1] },
  { ...T.premium, low: premium[0], high: premium[1] },
  { ...T.acuity, low: acuity[0], high: acuity[1], openEnded: true },
];

export const PRIVATE_PAY_BANDS: PrivatePayBand[] = [
  /* ---- King County submarkets (checked before the county band) ---- */
  {
    market: "king-eastside",
    label: "the Eastside (Bellevue, Kirkland, Redmond, Issaquah, Bothell)",
    county: "King",
    counties: [],
    cities: ["Bellevue", "Kirkland", "Redmond", "Issaquah", "Sammamish", "Woodinville", "Newcastle", "Bothell"],
    low: 6500,
    high: 9500,
    tiers: [
      { ...T.personal, low: 6500, high: 9500 },
      { ...T.memory, low: 8000, high: 12000, openEnded: true },
    ],
    note: "A well-presented private-pay home on the Eastside runs materially above the King County average.",
    confirmed: true,
    reviewed: REVIEWED,
  },
  {
    market: "king-lakeside",
    label: "Mercer Island, Medina, and Clyde Hill",
    county: "King",
    counties: [],
    cities: ["Mercer Island", "Medina", "Clyde Hill", "Hunts Point", "Yarrow Point"],
    low: 9000,
    high: 14000,
    tiers: [{ ...T.highEnd, low: 9000, high: 14000, openEnded: true }],
    note: "Few licensed homes here; the ones that exist are almost all premium private-pay.",
    confirmed: true,
    reviewed: REVIEWED,
  },
  {
    market: "king-south",
    label: "South King County (Kent, Federal Way, Renton, Auburn, Des Moines, Burien)",
    county: "King",
    counties: [],
    cities: [
      "Kent",
      "Federal Way",
      "Renton",
      "Auburn",
      "Des Moines",
      "Seatac",
      "SeaTac",
      "Burien",
      "Tukwila",
      "Covington",
      "Pacific",
      "Algona",
      "Maple Valley",
      "Enumclaw",
      "Normandy Park",
    ],
    low: 5000,
    high: 7000,
    tiers: [
      { ...T.personal, low: 5000, high: 7000 },
      { ...T.memory, low: 6500, high: 9000, openEnded: true },
    ],
    note: "South King has the most licensed homes in the state and the most price competition.",
    confirmed: true,
    reviewed: REVIEWED,
  },

  /* ---- County bands ---- */
  {
    market: "king",
    label: "King County",
    county: "King",
    counties: ["King"],
    low: 7000,
    high: 9500,
    tiers: four([5000, 7000], [7000, 9500], [9500, 12000], [12000, 15000]),
    note: "King County has the widest spread in the state: South King sits below this band and the Eastside above it. Type a city to see its submarket.",
    confirmed: true,
    reviewed: REVIEWED,
  },
  {
    market: "snohomish",
    label: "Snohomish County",
    county: "Snohomish",
    counties: ["Snohomish"],
    low: 6000,
    high: 8500,
    tiers: four([4500, 6000], [6000, 8500], [8500, 10500], [10500, 14000]),
    note: "Lynnwood, Mill Creek, and Bothell generally sit toward the top of the band; Marysville, Arlington, and Monroe toward the bottom.",
    confirmed: true,
    reviewed: REVIEWED,
  },
  {
    market: "pierce",
    label: "Pierce County",
    county: "Pierce",
    counties: ["Pierce"],
    low: 5500,
    high: 8000,
    tiers: four([4200, 6000], [5500, 8000], [8000, 10000], [10000, 13000]),
    note: "Tacoma homes cluster in the lower half of the band; Gig Harbor and specialized memory-care homes can exceed $10,000.",
    confirmed: true,
    reviewed: REVIEWED,
  },
  {
    market: "other",
    label: "All other counties",
    county: "",
    counties: [],
    low: 0,
    high: 0,
    tiers: [],
    confirmed: false,
    reviewed: "",
  },
];

const eq = (a: string, b: string) => a.trim().toLowerCase() === b.trim().toLowerCase();

/** Band for a county with no city context (county pages, calculators). */
export const privatePayBandForCounty = (county: string): PrivatePayBand =>
  PRIVATE_PAY_BANDS.find((b) => b.counties.some((x) => eq(x, county))) ??
  PRIVATE_PAY_BANDS.find((b) => b.market === "other")!;

/** Band for a city: submarket first, then the city's county. */
export const privatePayBandForPlace = (city: string | null | undefined, county: string): PrivatePayBand => {
  if (city) {
    const sub = PRIVATE_PAY_BANDS.find((b) => b.cities?.some((x) => eq(x, city)));
    if (sub) return sub;
  }
  return privatePayBandForCounty(county);
};

/** Confirmed bands in display order, for market pickers. */
export const confirmedPrivatePayBands = (): PrivatePayBand[] => PRIVATE_PAY_BANDS.filter((b) => b.confirmed);

export const privatePayBandByMarket = (market: string): PrivatePayBand | undefined =>
  PRIVATE_PAY_BANDS.find((b) => b.market === market);
