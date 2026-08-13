/**
 * SEED FILE — awaiting the first successful script run.
 *
 * scripts/fetch-care-inflation.mjs overwrites this file with figures pulled
 * from the BLS Consumer Price Index. That script has NOT been run yet, so the
 * rate below is NOT BLS-sourced: it is the 3.5% the calculator has always
 * assumed, carried over so the UI has something to render.
 *
 * CARE_INFLATION_VERIFIED is the flag that keeps this honest. While it is
 * false, the calculator must NOT claim a BLS source in its caption — it should
 * describe the figure as an assumption. The generated file the script writes
 * does not define this constant at all, so `?? false` below flips to verified
 * automatically on the first real run. Do not hand-edit this file to true.
 *
 * To activate: node scripts/fetch-care-inflation.mjs --dry-run
 * Read the verification warning in that script's header first — its series ID
 * has not been confirmed against a live response.
 */

export const CARE_INFLATION_RATE = 3.5;
export const CARE_INFLATION_SERIES_ID = "";
export const CARE_INFLATION_SERIES_LABEL = "";
export const CARE_INFLATION_FIRST_YEAR = 0;
export const CARE_INFLATION_LAST_YEAR = 0;
export const CARE_INFLATION_RETRIEVED = "";

/** True once the figure came from BLS rather than this seed. */
export const CARE_INFLATION_VERIFIED = false;
