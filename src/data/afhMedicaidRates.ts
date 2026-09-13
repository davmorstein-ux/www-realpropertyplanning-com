/**
 * DSHS Medicaid daily rates paid to adult family homes, by CARE classification
 * and rate region. Source: DSHS ALTSA "All HCS Rates" workbook, Community
 * Residential Daily Rates tab, base AFH rate (service code T1020, U1).
 * https://www.dshs.wa.gov/sites/default/files/ALTSA/msd/documents/All_HCS_Rates.pdf
 *
 * Two regions: "High Cost" is King, Pierce, and Snohomish; every other county is
 * "Standard Cost". Rates change each July 1 and sometimes January 1; update
 * `effective` and the table together. Add-ons (Expanded Community Services,
 * Community Integration, Specialized Behavior Support) are not included here.
 *
 * This is what DSHS pays the home per day. A Medicaid resident also
 * contributes most of their own income toward the cost ("participation"),
 * keeping a personal needs allowance; the family's out-of-pocket is therefore
 * usually the resident's income, not this rate.
 */

export type AFHRateRegion = "highCost" | "standard";

export const AFH_RATE_REGION_LABELS: Record<AFHRateRegion, string> = {
  highCost: "King, Pierce, and Snohomish counties",
  standard: "All other Washington counties",
};

export const HIGH_COST_COUNTIES = ["King", "Pierce", "Snohomish"];

export const rateRegionForCounty = (county: string): AFHRateRegion =>
  HIGH_COST_COUNTIES.some((c) => c.toLowerCase() === county.trim().toLowerCase()) ? "highCost" : "standard";

export interface AFHCareLevelRate {
  /** DSHS CARE classification, e.g. "B Med". A = lightest needs, E = heaviest. */
  classification: string;
  highCost: number;
  standard: number;
}

export const AFH_MEDICAID_RATES = {
  effective: "2026-07-01",
  source: "https://www.dshs.wa.gov/sites/default/files/ALTSA/msd/documents/All_HCS_Rates.pdf",
  sourceLabel: "DSHS ALTSA Community Residential Daily Rates, effective July 1, 2026",
  /** Daily base AFH rate (T1020,U1) by classification. */
  levels: [
    { classification: "A Low", highCost: 144.47, standard: 132.49 },
    { classification: "A Med", highCost: 150.59, standard: 137.85 },
    { classification: "A High", highCost: 164.83, standard: 150.33 },
    { classification: "B Low", highCost: 147.63, standard: 135.26 },
    { classification: "B Med", highCost: 161.66, standard: 147.55 },
    { classification: "B Med-High", highCost: 176.53, standard: 160.58 },
    { classification: "B High", highCost: 182.02, standard: 165.39 },
    { classification: "C Low", highCost: 164.41, standard: 149.96 },
    { classification: "C Med", highCost: 191.41, standard: 173.61 },
    { classification: "C Med-High", highCost: 196.05, standard: 177.68 },
    { classification: "C High", highCost: 200.91, standard: 181.93 },
    { classification: "D Low", highCost: 176.32, standard: 160.40 },
    { classification: "D Med", highCost: 195.63, standard: 177.31 },
    { classification: "D Med-High", highCost: 225.32, standard: 203.33 },
    { classification: "D High", highCost: 239.05, standard: 215.35 },
    { classification: "E Med", highCost: 259.78, standard: 233.52 },
    { classification: "E High", highCost: 279.30, standard: 250.61 },
  ] as AFHCareLevelRate[],
};

/** Average days per month used to turn a daily rate into a monthly figure. */
export const DAYS_PER_MONTH = 365 / 12;

export const monthly = (daily: number) => daily * DAYS_PER_MONTH;

export function medicaidRange(region: AFHRateRegion) {
  const values = AFH_MEDICAID_RATES.levels.map((l) => l[region]);
  return { minDaily: Math.min(...values), maxDaily: Math.max(...values) };
}
