/**
 * WHAT'S MY REMODEL WORTH? — spending table (Oct 15, 2026). DRAFT: Claude's estimates, built
 * at the owner's request ("build it first") for him to correct on the live page. Edit the
 * numbers here; nothing else needs to change.
 *
 * The page asks what was spent on each category (sliders, $0–$100,000 in $500 steps, or typed).
 * For each category:
 *   share    — part of a FULL renovation's value this category accounts for (shares add to 1).
 *              A full renovation itself is measured from sales: see FULL_RENO_BROKER /
 *              FULL_RENO_APPRAISER in src/lib/remodelValue.ts (+30% / +20% over unrenovated).
 *   fullJob  — what a complete, market-appropriate job costs for a typical 2,000 sq ft King County
 *              house in a typically priced neighborhood. Value earned follows 1 − 10^(−spent/fullJob):
 *              about 70% of the category's value at half the full-job cost, 90% at the full-job
 *              cost, 99% at twice it. Calibrated so a complete $250,000 remodel of the owner's
 *              comparable 98034 split entry lands near its $1,315,000 renovated sale (draft costs were cut
 *              about 20% on Oct 15, 2026 so a complete job there totals about the $250,000 that seller spent).
 *   scale    — what the full-job cost grows with: "sqft" (living area / 2,000), "sqrtSqft"
 *              (partly with size), "baths" (per bathroom), "lot" (partly with lot size).
 * Full-job costs also scale with the neighborhood's price level (see neighborhoodCostFactor).
 */

export type CostScale = "sqft" | "sqrtSqft" | "baths" | "lot";

export interface SpendCategory {
  id: string;
  label: string;
  share: number;
  fullJob: number;
  scale: CostScale;
  /** One line under the slider: what the money typically covers. */
  hint: string;
}

export const SPEND_CATEGORIES: SpendCategory[] = [
  { id: "kitchen", label: "Kitchen", share: 0.25, fullJob: 50000, scale: "sqrtSqft", hint: "Cabinets, counters, appliances, lighting, layout" },
  { id: "baths", label: "Bathrooms", share: 0.17, fullJob: 20000, scale: "baths", hint: "All bathrooms together: tile, vanities, fixtures, showers" },
  { id: "flooring", label: "Flooring", share: 0.1, fullJob: 20000, scale: "sqft", hint: "Hardwood, LVP, tile, carpet" },
  { id: "paint", label: "Interior paint", share: 0.06, fullJob: 8000, scale: "sqft", hint: "Walls, ceilings, trim" },
  { id: "finishes", label: "Interior finishes", share: 0.06, fullJob: 12000, scale: "sqft", hint: "Trim, doors, lighting, built-ins" },
  { id: "exterior", label: "Siding & exterior paint", share: 0.08, fullJob: 25000, scale: "sqft", hint: "New siding, exterior paint, entry" },
  { id: "roof", label: "Roof", share: 0.07, fullJob: 22000, scale: "sqft", hint: "Tear-off and new roof, gutters" },
  { id: "windows", label: "Windows & exterior doors", share: 0.08, fullJob: 20000, scale: "sqft", hint: "Replacement windows, entry and patio doors" },
  { id: "systems", label: "Heating, cooling & systems", share: 0.08, fullJob: 20000, scale: "sqft", hint: "Furnace or heat pump, A/C, electrical, plumbing, water heater" },
  { id: "landscaping", label: "Landscaping", share: 0.05, fullJob: 12000, scale: "lot", hint: "Yard, plantings, hardscape, fencing" },
];

/** Slider range, from the owner (Oct 15, 2026): $0 to $100,000 in $500 steps. Larger amounts can be typed. */
export const SLIDER_MAX = 100000;
export const SLIDER_STEP = 500;

/** King County median single-family sale in the model's data (Oct 2024–Sept 2026), the cost baseline. */
export const COUNTY_MEDIAN_PRICE = 1050000;

/** Full-job costs rise with the neighborhood's price level, less than proportionally. */
export const neighborhoodCostFactor = (neighborhoodMedian: number | undefined) =>
  neighborhoodMedian && neighborhoodMedian > 0 ? Math.min(2.5, Math.max(0.6, Math.pow(neighborhoodMedian / COUNTY_MEDIAN_PRICE, 0.6))) : 1;

/**
 * Work finished more than 10 years ago earns this share of its value today: King County sales
 * show buyers pay a renovation premium of about 19% within 10 years but about 8% after that.
 * 0.6 rather than 0.4 because quality and condition outlast the "newly renovated" premium.
 */
export const OLD_WORK_FACTOR = 0.6;
