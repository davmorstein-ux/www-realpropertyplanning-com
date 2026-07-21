export interface CareType {
  id: string;
  label: string;
  waMonthly: number;
  nationalMonthly: number;
  unit: string;
  note: string;
}

export const CARE_TYPES: CareType[] = [
  {
    id: "independent-living",
    label: "Independent Living Community",
    waMonthly: 3145,
    nationalMonthly: 3145,
    unit: "monthly fee",
    note: "Washington-specific figures aren't available from this source — shown here is the national median. Independent living generally costs less than assisted living since it doesn't include personal care services.",
  },
  {
    id: "in-home",
    label: "In-Home Care (Non-Medical)",
    waMonthly: 8580,
    nationalMonthly: 6717,
    unit: "~44 hrs/week",
    note: "Washington averages $45/hour versus the national median of about $35/hour.",
  },
  {
    id: "adult-day",
    label: "Adult Day Care",
    waMonthly: 5395,
    nationalMonthly: 2057,
    unit: "5 days/week",
    note: "The most affordable long-term care option, providing daytime supervision and activities.",
  },
  {
    id: "adult-family-home",
    label: "Adult Family Home",
    waMonthly: 6500,
    nationalMonthly: 5500,
    unit: "monthly fee",
    note: "Often a more affordable, home-like alternative to assisted living, with 24/7 care bundled into one rate.",
  },
  {
    id: "assisted-living",
    label: "Assisted Living Community",
    waMonthly: 7600,
    nationalMonthly: 6200,
    unit: "monthly fee",
    note: "Washington runs about 23% above the national median.",
  },
  {
    id: "memory-care",
    label: "Memory Care",
    waMonthly: 9500,
    nationalMonthly: 7750,
    unit: "monthly fee",
    note: "Typically runs about 25% above standard assisted living rates.",
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
    waMonthly: 14800,
    nationalMonthly: 10798,
    unit: "monthly",
    note: "Private rooms carry a premium over semi-private accommodations.",
  },
  {
    id: "ccrc",
    label: "CCRC",
    waMonthly: 3353,
    nationalMonthly: 3353,
    unit: "monthly service fee",
    note: "CCRCs also require a separate one-time entrance fee — commonly $400,000 or more nationally.",
  },
];

export const CARE_TYPE_COLORS: Record<string, string> = {
  "independent-living": "#8a9a5b",
  "in-home": "#903f46",
  "adult-day": "#4f8268",
  "adult-family-home": "#1c9e90",
  "assisted-living": "#8c5358",
  "memory-care": "#73567a",
  "nursing-semi": "#64605c",
  "nursing-private": "#723a48",
  ccrc: "#794347",
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
