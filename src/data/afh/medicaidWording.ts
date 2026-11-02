/**
 * How a home's Medicaid status is described (owner-approved, Nov 2, 2026).
 *
 * "acceptsMedicaid" means the home holds the base DSHS adult family home
 * (Medicaid) contract. That lets it bill DSHS for Medicaid residents; it does
 * not mean a Medicaid bed is open or that the home will admit a Medicaid
 * resident. The old wording, "accepts Medicaid", could be read as a promise.
 * One file so the static pages (prerender.ts) and the app say the same thing.
 */
/** Works for the app's AFHFacility and the build's plain JSON record alike. */
type MedicaidFacts = { acceptsMedicaid?: boolean; contracts: readonly string[] };

/** The owner-approved sentence for a home with the contract. */
export const MEDICAID_CONTRACT_SENTENCE =
  "It holds a DSHS Medicaid contract, so it can accept Medicaid payment. Ask the home whether it has a Medicaid opening.";

/** Short label for directory lists. */
export const medicaidListLabel = (f: MedicaidFacts): string =>
  f.acceptsMedicaid ? "Medicaid contract" : f.contracts.length ? "no Medicaid contract" : "private pay only";

/** Value for the "Medicaid" row of the licensing record table. */
export const medicaidRowValue = (f: MedicaidFacts): string =>
  f.acceptsMedicaid
    ? "DSHS Medicaid contract (ask the home about a Medicaid opening)"
    : f.contracts.length
      ? "Not accepted (no Medicaid contract)"
      : "Not accepted — private pay only";
