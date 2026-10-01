/**
 * Monthly care costs used by every Cost of Care calculator, the hub tiles and
 * the homepage tile.
 *
 * SOURCE: CareScout (formerly Genworth) Cost of Care Survey, 2025 data,
 * published March 2026 — Washington State and national MEDIANS, annual figure
 * divided by 12:
 * https://www.businesswire.com/news/home/20260302776244/en/CareScout-Releases-2025-Cost-of-Care-Data-for-Washington
 *   in-home (non-medical) WA $102,960 / US $80,080
 *   adult day health      WA $64,740  / US $24,700
 *   assisted living       WA $90,550  / US $74,400
 *   nursing semi-private  WA $157,859 / US $114,975
 *   nursing private       WA $191,625 / US $129,575
 *
 * The survey does NOT cover memory care, adult family homes, independent
 * living or CCRCs. Those rows are the site's working estimates and carry
 * `estimate: true`, which makes the calculator say so on screen. Never
 * describe an estimate row as a survey median. Adult family homes have no
 * national equivalent (the license category is Washington's), so their
 * national figure is null and the calculator shows no national comparison.
 *
 * Checked against the source Sept 30, 2026. When CareScout publishes new
 * data, update every surveyed row, the year in COST_SOURCE_LINE, and the
 * percentages in the notes together.
 */
export interface CareType {
  id: string;
  label: string;
  waMonthly: number;
  /** National median, or null where no national equivalent exists. */
  nationalMonthly: number | null;
  unit: string;
  note: string;
  /** True when the figure is the site's estimate, not a CareScout median. */
  estimate?: boolean;
}

/** The source sentence shown under every calculator and on the hub. */
export const COST_SOURCE_LINE =
  "Washington medians from the CareScout Cost of Care Survey, 2025 data (published March 2026); memory care, adult family home, independent living and CCRC figures are estimates.";
export const COST_SOURCE_URL =
  "https://www.businesswire.com/news/home/20260302776244/en/CareScout-Releases-2025-Cost-of-Care-Data-for-Washington";

export const CARE_TYPES: CareType[] = [
  {
    id: "independent-living",
    label: "Independent Living Community",
    waMonthly: 3145,
    nationalMonthly: 3145,
    unit: "monthly fee",
    note: "Estimate. No survey publishes a Washington figure for independent living; this is a national industry estimate, and Seattle-area communities often charge more. It generally costs less than assisted living because personal care is not included.",
    estimate: true,
  },
  {
    id: "in-home",
    label: "In-Home Care (Non-Medical)",
    waMonthly: 8580,
    nationalMonthly: 6673,
    unit: "~44 hrs/week",
    note: "Washington averages $45/hour versus the national median of about $35/hour.",
  },
  {
    id: "adult-day",
    label: "Adult Day Care",
    waMonthly: 5395,
    nationalMonthly: 2058,
    unit: "5 days/week",
    note: "The most affordable long-term care option, providing daytime supervision and activities.",
  },
  {
    id: "adult-family-home",
    label: "Adult Family Home",
    waMonthly: 6500,
    nationalMonthly: null,
    unit: "monthly fee",
    note: "Estimate. No survey covers adult family home private-pay rates; each home sets its own. DSHS Medicaid rates work out to about $4,030–$8,495 a month depending on county and care level.",
    estimate: true,
  },
  {
    id: "assisted-living",
    label: "Assisted Living Community",
    waMonthly: 7546,
    nationalMonthly: 6200,
    unit: "monthly fee",
    note: "Washington runs about 22% above the national median.",
  },
  {
    id: "memory-care",
    label: "Memory Care",
    waMonthly: 9500,
    nationalMonthly: 7750,
    unit: "monthly fee",
    note: "Estimate. No survey covers memory care; it typically runs about 25% above assisted living in the same area.",
    estimate: true,
  },
  {
    id: "nursing-semi",
    label: "Nursing Home — Semi-Private",
    waMonthly: 13155,
    nationalMonthly: 9581,
    unit: "monthly",
    note: "Washington runs about 37% above the national median.",
  },
  {
    id: "nursing-private",
    label: "Nursing Home — Private Room",
    waMonthly: 15969,
    nationalMonthly: 10798,
    unit: "monthly",
    note: "Washington runs about 48% above the national median; private rooms cost more than shared ones.",
  },
  {
    id: "ccrc",
    label: "CCRC",
    waMonthly: 3353,
    nationalMonthly: 3353,
    unit: "monthly service fee",
    note: "Estimate. CCRCs also charge a separate one-time entrance fee, which can run into the hundreds of thousands of dollars.",
    estimate: true,
  },
];

export const CARE_TYPE_COLORS: Record<string, string> = {
  "independent-living": "#2E7D32",
  "in-home": "#1565C0",
  "adult-day": "#00838F",
  "adult-family-home": "#00695C",
  "assisted-living": "#AD1457",
  "memory-care": "#6A1B9A",
  "nursing-semi": "#5D4037",
  "nursing-private": "#C62828",
  ccrc: "#EF6C00",
};

export const SHORT_CARE_LABELS: Record<string, string> = {
  "independent-living": "Independent Living",
  "in-home": "In-Home Care",
  "adult-day": "Adult Day Care",
  "adult-family-home": "Adult Family Home",
  "assisted-living": "Assisted Living",
  "memory-care": "Memory Care",
  "nursing-semi": "Nursing Home Shared Room",
  "nursing-private": "Nursing Home Private Room",
  ccrc: "CCRC / Life Plan",
};

// Simple, disclosed cost-growth assumptions — no rate the visitor has to
// research or guess. "Average" is applied automatically; the other two
// are available behind an optional "Adjust this assumption" reveal.
export const INFLATION_PRESETS = [
  { id: "conservative", label: "Conservative", value: 2 },
  { id: "average", label: "Average", value: 3.5 },
  { id: "aggressive", label: "Aggressive", value: 5 },
] as const;

export const YEARS_OUT_OPTIONS = [0, 5, 10, 15, 20, 25, 30];
export const YEARS_OF_CARE_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function formatCurrency(value: number) {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export const COC_TEAL = "#0d5c63";
