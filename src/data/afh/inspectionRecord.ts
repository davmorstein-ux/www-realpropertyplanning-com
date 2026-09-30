/**
 * Each licensed home's DSHS inspection record (Sept 30, 2026).
 *
 * One source for the "Inspection and enforcement record" block on every
 * directory home page (src/pages/afh-club/homes/FacilityDetail.tsx) and its
 * prerendered HTML (src/data/afh/prerender.ts). No React, relative imports.
 *
 * The link: DSHS's Adult Family Home Locator has one "AFH Documents & Reports"
 * page per license, at AFHForms.aspx?lic=<license number>. Checked Sept 30,
 * 2026 against two homes (756638 #1Integratedcare, LLC; 754729 Abba Care AFH
 * LLC): the page name matched the directory record both times. It lists
 * Inspections, Investigations, Enforcement Actions and Limitations.
 * Do NOT link AFHServices.aspx?lic= (Disclosure of Services): on Sept 30, 2026
 * it returned a different home's name for the same number.
 *
 * Facts used below: routine inspections at least every 18 months with an
 * annual average of 15 (RCW 70.128.070); the Locator shows limits and
 * enforcement for the previous three years; a citation does not by itself
 * mean a resident was harmed (see /afh-club/violation-history-lookup).
 */

export const DSHS_LOCATOR_URL = "https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx";

export const dshsReportsUrl = (licenseNumber: string) =>
  `https://fortress.wa.gov/dshs/adsaapps/lookup/AFHForms.aspx?lic=${encodeURIComponent(licenseNumber)}`;

export const INSPECTION_HEADING = "Inspection and enforcement record";

export const inspectionStatus = (hasReports: boolean, retrievedLong: string) =>
  hasReports
    ? `DSHS has posted inspection, investigation or enforcement documents for this home (as of ${retrievedLong}). Read them on the state's page for this license before drawing any conclusion.`
    : `DSHS showed no posted inspection, investigation or enforcement documents for this home when AFH Club checked on ${retrievedLong}. Check the state's page for this license for anything posted since.`;

export const REPORTS_LINK_TEXT = "View this home's DSHS documents & reports";

export const DOCUMENT_TYPES: { name: string; what: string }[] = [
  { name: "Inspections", what: "routine licensing visits, at least every 18 months" },
  { name: "Investigations", what: "visits made in response to a complaint" },
  { name: "Enforcement actions", what: "letters describing fines, conditions, stop placement or other action DSHS took" },
  { name: "Limitations", what: "limits placed on the license, such as on the residents the home may admit" },
];

export const INSPECTION_NOTES: string[] = [
  "A citation means a rule was not met; it does not by itself mean a resident was harmed. Read what was cited and whether DSHS confirmed it was corrected.",
  "The state's page is organized by license number. After a change of ownership the new owner has a new license, so an earlier owner's records may sit under the earlier license.",
  "No posted documents does not guarantee quality, and posting can lag behind an inspection.",
];
