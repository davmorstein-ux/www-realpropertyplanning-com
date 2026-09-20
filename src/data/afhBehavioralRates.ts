/**
 * Washington AFH payments that sit on top of, or replace, the base CARE rate.
 * The base rates themselves live in afhMedicaidRates.ts.
 *
 * SOURCE FOR EVERYTHING HERE: the funded 2025-27 collective bargaining agreement
 * between the State of Washington and the Adult Family Home Council, read in
 * full on Sept 19, 2026:
 * https://ofm.wa.gov/wp-content/uploads/sites/default/files/public/labor/agreements/25-27/nse_afhc.pdf
 *
 *   Art. 7.13  Supportive supervision: one six-tier per diem table for BOTH
 *              CBHS and IBSS. Managed care organizations "shall pay" these
 *              rates, and single case agreements "will strictly adhere to the
 *              negotiated tiered rate structure". The rate therefore does NOT
 *              vary from home to home; what varies is which residents a home
 *              has and at what tier.
 *   Art. 7.2   ECS: a daily rate OR the base rate, whichever is GREATER.
 *              It is not an add-on. Never model it as base + ECS.
 *   Art. 7.3   SBS: an add-on paid IN ADDITION to the base rate.
 *   Art. 7.7   Community Integration: a small add-on to the base rate.
 *   MOU E      Bed license fee add-on of $0.62 per Medicaid day, applied to the
 *              base rates, the ECS rate and the HIV/AIDS house rate, through
 *              June 30, 2027.
 *
 * WHY THE SITE'S BASE RATES ARE $0.62 HIGHER THAN THE CBA'S APPENDIX A.
 * afhMedicaidRates.ts comes from the DSHS rate workbook, which is what a home
 * is actually paid: Art. 7.1 base + $1.28 training (8.2) + $3.45 health care
 * (8.3) = Appendix A, and Appendix A + $0.62 (MOU E) = the DSHS figure. All 34
 * cells were checked and differ by exactly $0.62. The DSHS figures are the
 * right ones to show. Anyone quoting Appendix A alone is 62 cents a day short.
 *
 * STACKING RULES (do not let a calculator add these blindly):
 *   - CBHS and IBSS are alternative routes to the same supportive-supervision
 *     payment. Never both for one resident.
 *   - WAC 388-106-0336(11): for care plans from eligibility assessments on or
 *     after July 1, 2025, a person must first be found NOT eligible for CBHS
 *     before receiving SBS. So CBHS and SBS do not stack either.
 *   - ECS replaces the base rate when it is higher; it does not add to it.
 *
 * NOT INCLUDED, ON PURPOSE: HCS Meaningful Day. The CBA text still carries a
 * $40/day add-on, but the 2025 state budget eliminated its funding as of
 * July 1, 2025, and the AFH Council was contesting that. Its current status is
 * unconfirmed, so it is not presented as income anywhere on the site.
 */

export const AFH_CBA_SOURCE = {
  url: "https://ofm.wa.gov/wp-content/uploads/sites/default/files/public/labor/agreements/25-27/nse_afhc.pdf",
  label: "2025-27 Collective Bargaining Agreement, State of Washington and Adult Family Home Council",
  throughDate: "2027-06-30",
};

export interface SupportiveSupervisionTier {
  tier: number;
  /** Average dedicated staff hours per day, per the CBA table and WAC 182-561-0500. */
  minHours: number;
  maxHours: number;
  /** Per diem paid to the home, in dollars. Same for CBHS and IBSS. */
  daily: number;
}

/** CBA Article 7.13. Rates unchanged across both years of the agreement. */
export const SUPPORTIVE_SUPERVISION_TIERS: SupportiveSupervisionTier[] = [
  { tier: 1, minHours: 0.5, maxHours: 2, daily: 36.3 },
  { tier: 2, minHours: 2.1, maxHours: 6, daily: 98.01 },
  { tier: 3, minHours: 6.1, maxHours: 10, daily: 194.81 },
  { tier: 4, minHours: 10.1, maxHours: 15, daily: 303.71 },
  { tier: 5, minHours: 15.1, maxHours: 20, daily: 424.71 },
  { tier: 6, minHours: 20.1, maxHours: 24, daily: 528.0 },
];

/** Bed license fee add-on, CBA MOU E. Already inside the DSHS base rates. */
export const BED_LICENSE_ADD_ON = 0.62;

export const AFH_SPECIALTY_RATES = {
  effective: "2026-07-01",
  /** Art. 7.2.C. Paid as max(this + bed license add-on, base rate). */
  ecsDailyCba: 256.25,
  /** What DSHS actually pays for ECS: the CBA figure plus the bed license add-on. */
  ecsDailyPaid: 256.25 + BED_LICENSE_ADD_ON,
  /** Art. 7.3.C. Added on top of the base rate. Was $165.00 through June 30, 2026. */
  sbsAddOn: 178.0,
  /** Art. 7.7.A.1. Added on top of the base rate. */
  communityIntegrationAddOn: 5.1,
};
