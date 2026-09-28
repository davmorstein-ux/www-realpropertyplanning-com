/**
 * Article records: first published, last reviewed, what changed, and sources
 * (Sept 28, 2026; editorial-standards work). Rendered under the author byline
 * by src/components/ArticleRecord.tsx, keyed by the page's path.
 *
 * RULES (see /editorial-standards):
 * - A page gets a record only after it has actually been read against its
 *   sources. "reviewed" is that date, never the date of an unrelated sitewide
 *   edit. Pages without a record simply show no record; do not invent one.
 * - "published" is the first day the page went live. The repo's history before
 *   Aug 23, 2026 was imported in one commit, so older pages cannot be dated
 *   from git; leave `published` out rather than guess.
 * - "changes" lists substantive changes only (a fact, figure, requirement or
 *   conclusion a reader might act on), newest first. Wording and layout edits
 *   are not listed.
 * - Sources are primary: statute, rule, agency page or document, or the
 *   published agreement. Never another website's summary.
 */

export interface ArticleSource {
  label: string;
  href?: string;
}

export interface ArticleRecordEntry {
  published?: string; // ISO date
  reviewed: string; // ISO date
  changes: { date: string; text: string }[];
  sources: ArticleSource[];
}

const WAC = (cite: string) => `https://app.leg.wa.gov/WAC/default.aspx?cite=${cite}`;
const WSR_26_17_004 = "https://lawfilesext.leg.wa.gov/law/wsr/2026/17/26-17-004.htm";
const DSHS_RATES = "https://www.dshs.wa.gov/sites/default/files/ALTSA/msd/documents/All_HCS_Rates.pdf";
const AFH_CBA = "https://ofm.wa.gov/wp-content/uploads/sites/default/files/public/labor/agreements/25-27/nse_afhc.pdf";

const DSHS_RCS_DOOR_ANSWER: ArticleSource = {
  label: "Written answer from DSHS Residential Care Services licensing staff on the 27-inch door rule at a change of ownership (September 28, 2026)",
};

const DSHS_CHOW_ANSWERS: ArticleSource = {
  label: "Written answers from DSHS contracting and residential policy staff to AFH Club's change-of-ownership questions (September 2026)",
};

export const ARTICLE_RECORDS: Record<string, ArticleRecordEntry> = {
  "/afh-club/dos-and-donts-operating-adult-family-home": {
    published: "2026-09-27",
    reviewed: "2026-09-28",
    changes: [
      { date: "2026-09-28", text: "DSHS confirmed the 27-inch interior door rule does not apply to the buyer of a continuously licensed home (the home keeps the rules it was first licensed under), but does apply to a former adult family home that is no longer licensed." },],
    sources: [
      DSHS_RCS_DOOR_ANSWER,
      { label: "Chapter 388-76 WAC: Adult Family Home Minimum Licensing Requirements", href: WAC("388-76") },
      { label: "WSR 26-17-004: amendments effective September 20, 2026 (evacuation drills, resident records, interior door widths)", href: WSR_26_17_004 },
      { label: "WAC 388-76-10506: Medicaid residency agreements", href: WAC("388-76-10506") },
      { label: "DSHS: What You Need to Know Before Becoming a Licensed AFH Provider", href: "https://www.dshs.wa.gov/sites/default/files/ALTSA/rcs/documents/afh/information/AFH%20Information%20Sheet%20-%20What%20You%20Need%20to%20Understand.pdf" },
    ],
  },
  "/afh-club/afh-payment-field-guide": {
    published: "2026-09-18",
    reviewed: "2026-09-25",
    changes: [
      { date: "2026-09-25", text: "Added what happens to each income stream at a change of ownership, from DSHS's written answers: no new assessments, authorizations reissued under the new owner's ProviderOne number, and ECS/SBS contracts needing DSHS program approval." },
      { date: "2026-09-19", text: "Removed Meaningful Day as a current specialty contract (its funding ended July 1, 2025). Added ECS and SBS payment amounts from the 2025-27 collective bargaining agreement." },
    ],
    sources: [
      { label: "WAC 388-106-0115: CARE residential classification groups", href: WAC("388-106-0115") },
      { label: "WAC 182-561-0500: CBHS supportive supervision tiers", href: WAC("182-561-0500") },
      { label: "WAC 388-106-0336: specialty payment rules", href: WAC("388-106-0336") },
      { label: "2025-27 Adult Family Home Council collective bargaining agreement", href: AFH_CBA },
      DSHS_CHOW_ANSWERS,
    ],
  },
  "/afh-club/care-classifications-a-through-e": {
    published: "2026-09-18",
    reviewed: "2026-09-28",
    changes: [
      { date: "2026-09-28", text: "Added DSHS licensing staff's answer that they cannot estimate how long a change-of-ownership license takes, and that a complete application is the best way to avoid delays." },
      { date: "2026-09-28", text: "Added how DSHS delivers a new license after a change of ownership (emailed within a day of approval) and DSHS's posted licensing queue: applications received in May 2026 were being processed in late September, with up to 60 days once an application is complete." },
      { date: "2026-09-25", text: "Added \"When the home is sold\": the contract starts the day the new license is assigned, residents keep their assessments, authorizations are reissued, and exceptions to rule follow the resident." },
    ],
    sources: [
      { label: "WAC 388-106-0115: CARE residential classification groups", href: WAC("388-106-0115") },
      { label: "DSHS Home and Community Services rate tables (adult family home daily rates)", href: DSHS_RATES },
      { label: "DSHS: BAAU Application Processing Timeline", href: "https://www.dshs.wa.gov/altsa/baau-application-processing-timeline" },
      DSHS_CHOW_ANSWERS,
    ],
  },
  "/afh-club/cbhs-tiers": {
    published: "2026-09-18",
    reviewed: "2026-09-19",
    changes: [
      { date: "2026-09-19", text: "Added per-tier daily rates from Article 7.13 of the 2025-27 collective bargaining agreement, which managed care plans are required to pay." },
    ],
    sources: [
      { label: "Chapter 182-561 WAC: Community behavioral health support services", href: WAC("182-561") },
      { label: "2025-27 Adult Family Home Council collective bargaining agreement, Article 7.13", href: AFH_CBA },
      { label: "WAC 388-106-0336: CBHS is applied before SBS", href: WAC("388-106-0336") },
    ],
  },
  "/afh-club/washington-afh-data": {
    published: "2026-09-28",
    reviewed: "2026-09-28",
    changes: [],
    sources: [
      { label: "DSHS Adult Family Home Locator (all 39 counties, retrieved September 13-14, 2026)", href: "https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx" },
      { label: "WAC 388-76-10031: seven- and eight-bed capacity requires 24 months of licensed operation", href: WAC("388-76-10031") },
      { label: "Research and Data Methodology (how the records are cleaned and counted)", href: "https://realpropertyplanning.com/research-methodology" },
    ],
  },
  "/afh-club/wabo-inspection-guide": {
    reviewed: "2026-09-28",
    changes: [
      { date: "2026-09-28", text: "DSHS confirmed the 27-inch interior door rule does not apply to the buyer of a continuously licensed home (the home keeps the rules it was first licensed under), but does apply to a former adult family home that is no longer licensed." },
      { date: "2026-09-28", text: "Added that DSHS licensing rules also have physical requirements the building checklist does not show, such as 27-inch interior doors in homes licensed after September 20, 2026." },
    ],
    sources: [
      DSHS_RCS_DOOR_ANSWER,
      { label: "Adult Family Home Local Building Inspection Checklist (DSHS form 15-604, revised April 2025)", href: "https://www.dshs.wa.gov/sites/default/files/forms/pdf/15-604.pdf" },
      { label: "WAC 388-76-10715: doors, as amended by WSR 26-17-004", href: WAC("388-76-10715") },
      { label: "WSR 26-17-004: amendments effective September 20, 2026", href: WSR_26_17_004 },
    ],
  },
  "/afh-club/wabo-technical-guide": {
    reviewed: "2026-09-28",
    changes: [
      { date: "2026-09-28", text: "DSHS confirmed the 27-inch interior door rule does not apply to the buyer of a continuously licensed home (the home keeps the rules it was first licensed under), but does apply to a former adult family home that is no longer licensed." },
      { date: "2026-09-28", text: "Added the DSHS 27-inch interior door requirement for homes licensed after September 20, 2026, and that the building checklist sets widths only for exit doors." },
    ],
    sources: [
      DSHS_RCS_DOOR_ANSWER,
      { label: "Adult Family Home Local Building Inspection Checklist (DSHS form 15-604, revised April 2025)", href: "https://www.dshs.wa.gov/sites/default/files/forms/pdf/15-604.pdf" },
      { label: "Washington State Residential Code, Section R330 (adult family homes), WAC 51-51-0330", href: WAC("51-51-0330") },
      { label: "WAC 388-76-10715: doors, as amended by WSR 26-17-004", href: WAC("388-76-10715") },
    ],
  },
  "/afh-club/regulations-compliance": {
    reviewed: "2026-09-28",
    changes: [
      { date: "2026-09-28", text: "Replaced the most-cited violations list with DSHS's own most recent published list (October–December 2024), with citation counts. The earlier list cited the wrong rule for the license fee and included items not on DSHS's list." },
      { date: "2026-09-28", text: "Corrected civil fine amounts to match the statute: at least $100 per day per violation and up to $3,000 per incident (the page had said $100 to $3,000 per day)." },
      { date: "2026-09-28", text: "Stated inspection frequency as the statute does: at least every 18 months, a 15-month statewide average, up to two years for homes with three clean inspections." },
    ],
    sources: [
      { label: "RCW 70.128.070: inspection frequency", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=70.128.070" },
      { label: "RCW 70.128.160: enforcement remedies and civil penalties", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=70.128.160" },
      { label: "DSHS Top AFH Citations, October–December 2024", href: "https://www.dshs.wa.gov/sites/default/files/ALTSA/rcs/documents/2024%20Q4%20--%20Top%20AFH%20Citations.pdf" },
      { label: "Chapter 388-76 WAC, including the September 20, 2026 amendments (WSR 26-17-004)", href: WAC("388-76") },
    ],
  },
  "/afh-club/afh-property-classifications": {
    published: "2026-09-13",
    reviewed: "2026-09-28",
    changes: [
      { date: "2026-09-28", text: "DSHS confirmed the 27-inch interior door rule does not apply to the buyer of a continuously licensed home (the home keeps the rules it was first licensed under), but does apply to a former adult family home that is no longer licensed. The Former AFH label now says so." },
      { date: "2026-09-20", text: "Added the 27-inch interior door requirement for homes licensed after September 20, 2026 (WAC 388-76-10715, as amended by WSR 26-17-004)." },
    ],
    sources: [
      DSHS_RCS_DOOR_ANSWER,
      { label: "Adult Family Home Local Building Inspection Checklist (DSHS form 15-604)", href: "https://www.dshs.wa.gov/sites/default/files/forms/pdf/15-604.pdf" },
      { label: "Chapter 388-76 WAC: Adult Family Home Minimum Licensing Requirements", href: WAC("388-76") },
      { label: "WAC 388-76-10715: resident bedrooms and doors", href: WAC("388-76-10715") },
      { label: "WSR 26-17-004: amendments effective September 20, 2026", href: WSR_26_17_004 },
    ],
  },
};

export const articleRecordFor = (path: string): ArticleRecordEntry | undefined =>
  ARTICLE_RECORDS[path.replace(/\/$/, "")];
