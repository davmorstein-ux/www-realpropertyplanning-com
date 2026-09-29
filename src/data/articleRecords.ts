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

const DSHS_FEE_ANSWER: ArticleSource = {
  label: "Written answer from DSHS on the annual license fee: $450 per bed since July 2025, set in the biennial budget, billed 60 days before the license anniversary month (September 29, 2026)",
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
  "/afh-club/washington-adult-family-home-guide": {
    published: "2026-09-29",
    reviewed: "2026-09-29",
    changes: [],
    sources: [
      { label: "RCW 70.128.010: definition of an adult family home", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=70.128.010" },
      { label: "RCW 70.128.070: inspection frequency", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=70.128.070" },
      { label: "RCW 70.128.140: zoning", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=70.128.140" },
      { label: "RCW 70.128.160: enforcement", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=70.128.160" },
      { label: "WAC 388-76-10031, 10040, 10105, 10106, 10130 and 10700: capacity, residence, change of ownership, notice, qualifications, building inspection", href: WAC("388-76") },
      { label: "WAC 388-106-0115: CARE classifications", href: WAC("388-106-0115") },
      { label: "DSHS: BAAU application processing timeline", href: "https://www.dshs.wa.gov/altsa/baau-application-processing-timeline" },
      DSHS_FEE_ANSWER,
      DSHS_RCS_DOOR_ANSWER,
      { label: "DSHS Adult Family Home Locator (counts retrieved September 13-14, 2026)", href: "https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx" },
    ],
  },
  "/afh-club/washington-afh-rule-changes": {
    published: "2026-09-29",
    reviewed: "2026-09-29",
    changes: [],
    sources: [
      { label: "WSR 26-17-004: amendments effective September 20, 2026", href: WSR_26_17_004 },
      { label: "WSR 23-12-075, 25-04-035, 25-04-069, 25-16-099, 25-18-037, 26-05-046: chapter 388-76 WAC amendments 2023-2026", href: WAC("388-76") },
      { label: "WSR 24-06-073 and 23-24-010: administrator training and repeal of the orientation class", href: WAC("388-112A-0800") },
      { label: "WAC 246-980-040 (WSR 26-12-065): Home Care Aide certification timelines", href: WAC("246-980-040") },
      { label: "WAC 388-106-0336 (WSR 25-15-100) and chapter 182-561 WAC: SBS and CBHS", href: WAC("388-106-0336") },
      { label: "DSHS notice AFH #2025-024: Meaningful Day add-on eliminated", href: "https://www.dshs.wa.gov/sites/default/files/ALTSA/rcs/documents/afh/025-024.pdf" },
      { label: "Bolina v. AssureCare Adult Home LLC, Washington Supreme Court (July 9, 2026)", href: "https://statecourtreport.org/sites/default/files/2026-07/supreme_court_of_washington-opinion_0.pdf" },
      { label: "WSR 26-13-037 and 25-11-052: pending preproposals", href: "https://lawfilesext.leg.wa.gov/law/wsr/2026/13/26-13-037.htm" },
      DSHS_FEE_ANSWER,
      DSHS_RCS_DOOR_ANSWER,
    ],
  },
  "/afh-club/glossary": {
    published: "2026-09-29",
    reviewed: "2026-09-29",
    changes: [],
    sources: [
      { label: "Chapter 70.128 RCW: Adult family homes", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=70.128" },
      { label: "Chapter 388-76 WAC: Adult family home minimum licensing requirements", href: WAC("388-76") },
      { label: "Chapter 388-112A WAC: Residential long-term care services training", href: WAC("388-112A") },
      { label: "Chapter 182-561 WAC: Community behavioral health support services", href: WAC("182-561") },
      { label: "WSR 26-17-004: amendments effective September 20, 2026", href: WSR_26_17_004 },
      { label: "2025-27 Adult Family Home Council collective bargaining agreement", href: AFH_CBA },
      { label: "Adult Family Home Local Building Inspection Checklist (DSHS form 15-604)", href: "https://www.dshs.wa.gov/sites/default/files/forms/pdf/15-604.pdf" },
      DSHS_CHOW_ANSWERS,
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
  "/afh-club/licensing-certification": {
    reviewed: "2026-09-29",
    changes: [
      { date: "2026-09-29", text: "Restored the annual license fee, $450 per licensed bed since July 2025, now sourced to a written answer from DSHS, with how DSHS bills it." },
      { date: "2026-09-28", text: "Removed the $450-per-bed fee figure, which no current primary source confirms (the fee is set in the state operating budget); corrected the Home Care Aide exemption list and removed a citation to a rule that does not exist; corrected background-check rules (household members over 11, two-year state check, fingerprint check); added DSHS's posted processing queue, the inspection limits, and DSHS's September 2026 answer on change-of-ownership building rules." },
    ],
    sources: [
      DSHS_FEE_ANSWER,
      { label: "WAC 388-112A-0050: AFH training and certification requirements", href: WAC("388-112A-0050") },
      { label: "WAC 388-112A-0090: training exemptions", href: WAC("388-112A-0090") },
      { label: "WAC 246-980-025: Home Care Aide certification exemptions", href: WAC("246-980-025") },
      { label: "WAC 388-76-10130: provider qualifications", href: WAC("388-76-10130") },
      { label: "WAC 388-76-10161 and 10165: background checks", href: WAC("388-76-10161") },
      { label: "WAC 388-76-10025 and RCW 70.128.060: annual license fee", href: WAC("388-76-10025") },
      { label: "DSHS: Information for AFH prospective providers", href: "https://www.dshs.wa.gov/altsa/residential-care-services/information-afh-prospective-providers" },
      { label: "DSHS: BAAU application processing timeline", href: "https://www.dshs.wa.gov/altsa/baau-application-processing-timeline" },
      DSHS_RCS_DOOR_ANSWER,
    ],
  },
  "/afh-club/training-education": {
    reviewed: "2026-09-28",
    changes: [
      { date: "2026-09-28", text: "Corrected rule citations for CPR, first aid, and food safety; stated Administrator Training hours (48-hour minimum in rule, 54-hour course) and that providers who completed it do not repeat it; corrected the North Seattle College phone number; renamed the nurse delegation trainings; specified 12 continuing-education hours by each birthday; replaced an unverified University of Washington certification description with the statute." },
    ],
    sources: [
      { label: "WAC 388-112A-0050: AFH training and certification requirements", href: WAC("388-112A-0050") },
      { label: "WAC 388-112A-0800 and 0820: administrator training", href: WAC("388-112A-0800") },
      { label: "WAC 388-76-10064: administrator training for applicants", href: WAC("388-76-10064") },
      { label: "WAC 388-112A-0490: specialty training", href: WAC("388-112A-0490") },
      { label: "WAC 388-112A-0550: nurse delegation training", href: WAC("388-112A-0550") },
      { label: "WAC 388-112A-0610: continuing education", href: WAC("388-112A-0610") },
      { label: "WAC 388-112A-0720: CPR and first aid", href: WAC("388-112A-0720") },
      { label: "RCW 70.128.250: food safety training", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=70.128.250" },
      { label: "DSHS: Adult Family Home Administrator Training", href: "https://www.dshs.wa.gov/altsa/training/adult-family-home-administrator-training" },
    ],
  },
  "/afh-club/getting-started": {
    reviewed: "2026-09-28",
    changes: [
      { date: "2026-09-28", text: "Corrected the 1,000-hour experience rule (only physicians, physician assistants, RNs, ARNPs and LPNs are exempt; the page had listed CNAs and home health aides), added the age-21 and financial-solvency requirements, corrected the background-check, food-safety and live-in rules, replaced unsourced 3-6 month and $20,000-$50,000 estimates with DSHS's posted processing timeline, and corrected capacity (2-6; 7-8 only under WAC 388-76-10031), zoning, and the law's 1989 origin." },
    ],
    sources: [
      { label: "RCW 70.128.010, 70.128.120, 70.128.140: definitions, qualifications, zoning", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=70.128" },
      { label: "RCW 18.88B.041: Home Care Aide certification exemptions", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=18.88B.041" },
      { label: "WAC 388-76-10130: qualifications", href: WAC("388-76-10130") },
      { label: "WAC 388-76-10040: qualified person must live in the home", href: WAC("388-76-10040") },
      { label: "WAC 388-76-10031: seven or eight beds", href: WAC("388-76-10031") },
      { label: "WAC 388-76-10161: background checks", href: WAC("388-76-10161") },
      { label: "DSHS: BAAU application processing timeline", href: "https://www.dshs.wa.gov/altsa/baau-application-processing-timeline" },
      { label: "DSHS: AFH food safety and food worker card", href: "https://www.dshs.wa.gov/altsa/residential-care-services/adult-family-homes-food-safety-food-worker-card" },
    ],
  },
  "/afh-club/what-is-an-adult-family-home": {
    reviewed: "2026-09-28",
    changes: [
      { date: "2026-09-28", text: "Washington section: counts now come from DSHS locator data (6,069 homes and 35,306 beds in 35 of 39 counties) instead of \"more than 6,000 across 39 counties\"; capacity (2-6, with 7-8 under WAC 388-76-10031) and the live-in rule (WAC 388-76-10040) corrected. The other states in the comparison table were not re-reviewed on this date." },
    ],
    sources: [
      { label: "RCW 70.128.010: definition of an adult family home", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=70.128.010" },
      { label: "WAC 388-76-10031: seven or eight beds", href: WAC("388-76-10031") },
      { label: "WAC 388-76-10040: qualified person must live in the home", href: WAC("388-76-10040") },
      { label: "DSHS Adult Family Home Locator", href: "https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx" },
    ],
  },
  "/afh-club/buying-selling": {
    reviewed: "2026-09-28",
    changes: [
      { date: "2026-09-28", text: "Added the 60-day written notice to DSHS and residents (WAC 388-76-10106), priority processing (10107), the new owner's duty to correct existing deficiencies (10105), the seven- and eight-bed change-of-ownership rule (10032), DSHS's processing queue and inspection limits, and DSHS's answer on the 27-inch door rule. Corrected that the license \"expires\" (AFH licenses do not) and that the license can change hands; noted the Medicaid contract does not transfer and HCS Meaningful Day funding ended July 1, 2025; softened pricing claims and an unsupported seller-disclosure duty." },
    ],
    sources: [
      { label: "WAC 388-76-10010: license valid and not transferable", href: WAC("388-76-10010") },
      { label: "WAC 388-76-10032: seven or eight beds at a change of ownership", href: WAC("388-76-10032") },
      { label: "WAC 388-76-10105, 10106, 10107: change of ownership application, notice, priority processing", href: WAC("388-76-10106") },
      { label: "DSHS: Buying an AFH through a change of ownership", href: "https://www.dshs.wa.gov/node/35985" },
      { label: "DSHS: BAAU application processing timeline", href: "https://www.dshs.wa.gov/altsa/baau-application-processing-timeline" },
      DSHS_CHOW_ANSWERS,
      DSHS_RCS_DOOR_ANSWER,
    ],
  },
  "/afh-club/selling-your-business-at-retirement": {
    reviewed: "2026-09-28",
    changes: [
      { date: "2026-09-28", text: "Replaced general statements about resident notice with the rule: 60 days' written notice to DSHS and each resident and what it must say (WAC 388-76-10106), and the priority-processing waiver (10107). Added the seven- and eight-bed buyer rule (10032) and DSHS's processing queue. Corrected that licensing is \"already in place\" for a buyer, replaced \"home study\" with the DSHS inspection and \"Medicaid certification\" with the Medicaid/private-pay mix, and softened \"most owners\" and \"often nets more\"." },
    ],
    sources: [
      { label: "WAC 388-76-10010: license not transferable", href: WAC("388-76-10010") },
      { label: "WAC 388-76-10032: seven or eight beds at a change of ownership", href: WAC("388-76-10032") },
      { label: "WAC 388-76-10106: change of ownership notice", href: WAC("388-76-10106") },
      { label: "WAC 388-76-10107: priority processing", href: WAC("388-76-10107") },
      { label: "DSHS: BAAU application processing timeline", href: "https://www.dshs.wa.gov/altsa/baau-application-processing-timeline" },
      { label: "IRS Publication 544: sale of a business and Form 8594 allocation", href: "https://www.irs.gov/publications/p544" },
    ],
  },
  "/afh-club/costs-fees": {
    reviewed: "2026-09-29",
    changes: [
      { date: "2026-09-29", text: "Restored the annual license fee, $450 per licensed bed since July 2025, now sourced to a written answer from DSHS, with how DSHS bills it." },
      { date: "2026-09-28", text: "Removed the $450-per-bed annual license fee, which no current primary source confirms; the page now explains the fee is set in the state budget and due each year in the month the home was first licensed." },
      { date: "2026-09-28", text: "Corrected Home Care Aide certification to the $100 DOH application fee, business registration to the $50 DOR processing fee and $180 LLC filing fee, and added the required insurance limits ($500,000 per occurrence, $1,000,000 aggregate)." },
      { date: "2026-09-28", text: "Removed unsourced tuition, permit, building-modification, total startup and private-pay dollar ranges; corrected background-check and CPR rule citations; replaced the 3-6 month timeline with DSHS's processing queue." },
    ],
    sources: [
      DSHS_FEE_ANSWER,
      { label: "RCW 70.128.060 and WAC 388-76-10025: license fees", href: WAC("388-76-10025") },
      { label: "WAC 388-76-10070 and 10073: application and processing fees", href: WAC("388-76-10073") },
      { label: "WAC 388-76-10191 and 10192: liability insurance", href: WAC("388-76-10192") },
      { label: "WAC 246-980-990: Home Care Aide fees", href: WAC("246-980-990") },
      { label: "Washington Insurance Commissioner: AFH liability insurance study (July 2025)", href: "https://www.insurance.wa.gov/about-us/news/2025/study-liability-insurance-adult-family-homes-finds-market-reasonable-shape" },
      { label: "Department of Revenue: business license processing fees", href: "https://dor.wa.gov/open-business/apply-business-license/variable-business-license-processing-fees" },
      { label: "Secretary of State: forming an LLC", href: "https://www.sos.wa.gov/corporations-charities/business-entities/online-filing-instructions/start-domestic-wa-limited-liability-company-llc-online" },
      { label: "DSHS Home and Community Services rate tables", href: DSHS_RATES },
      { label: "RCW 70.128.066: seven or eight beds", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=70.128.066" },
    ],
  },
  "/afh-club/ownership-structure": {
    reviewed: "2026-09-28",
    changes: [
      { date: "2026-09-28", text: "Added the licensing rules that depend on structure: the entity representative, background checks for affiliated owners, when forming an LLC or transferring shares is a change of ownership, and naming a separate property owner; removed an unsupported privacy claim; tax questions now referred to a CPA." },
    ],
    sources: [
      { label: "WAC 388-76-10010: license not transferable", href: WAC("388-76-10010") },
      { label: "WAC 388-76-10090: entity applicants", href: WAC("388-76-10090") },
      { label: "WAC 388-76-10095: property owner", href: WAC("388-76-10095") },
      { label: "WAC 388-76-10105: change of ownership", href: WAC("388-76-10105") },
      { label: "WAC 388-76-10161: background checks", href: WAC("388-76-10161") },
    ],
  },
  "/afh-club/violation-history-lookup": {
    reviewed: "2026-09-28",
    changes: [
      { date: "2026-09-28", text: "Corrected the record-window claim: DSHS says the Locator shows limits and enforcement from the previous three years, and the advanced search covers enforcement letters from 2011. Added the home's duty to keep three years of inspection reports (RCW 70.128.080) and inspection frequency (RCW 70.128.070); updated correction documents to the September 20, 2026 plan-of-correction rule (attestation of correction within 10 days); matched enforcement remedies to RCW 70.128.160; added the complaint TTY line and DSHS public records contacts." },
    ],
    sources: [
      { label: "DSHS Adult Family Home Locator (advanced search)", href: "https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx" },
      { label: "RCW 70.128.070, 70.128.080, 70.128.160: inspections, reports, remedies", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=70.128" },
      { label: "WAC 388-76-10930: plan of correction (amended September 20, 2026)", href: WAC("388-76-10930") },
      { label: "DSHS: Report abuse and neglect", href: "https://www.dshs.wa.gov/report-abuse-and-neglect" },
      { label: "DSHS: How to request public records", href: "https://www.dshs.wa.gov/office-of-the-secretary/how-request-public-records" },
    ],
  },
  "/afh-club/building-inspection": {
    reviewed: "2026-09-28",
    changes: [
      { date: "2026-09-28", text: "Updated to DSHS form 15-604 (revised April 2025) and current Section R330. Corrected ramps (not required by code; a code ramp can change a Type S bedroom to NS1). Removed unverified claims about sprinklers, bathroom turning radius, build costs and permit timelines. Added the 27-inch interior door rule and DSHS's change-of-ownership answer, noted DSHS window rulemaking (opened, not adopted), and cited WAC 388-76-10700 for approval before licensing." },
    ],
    sources: [
      { label: "Adult Family Home Local Building Inspection Checklist (DSHS form 15-604)", href: "https://www.dshs.wa.gov/sites/default/files/forms/pdf/15-604.pdf" },
      { label: "WAC 51-51-0330: Section R330, adult family homes", href: WAC("51-51-0330") },
      { label: "WAC 388-76-10700: building official inspection and approval", href: WAC("388-76-10700") },
      { label: "WAC 388-76-10715: doors", href: WAC("388-76-10715") },
      { label: "WAC 388-76-10795: windows", href: WAC("388-76-10795") },
      { label: "WAC 388-76-10755: sewage and liquid wastes", href: WAC("388-76-10755") },
      { label: "DSHS rulemaking: AFH discharge notice, background checks and windows", href: "https://www.dshs.wa.gov/altsa/residential-care-services/afh-discharge-notice-background-checks-and-windows" },
      DSHS_RCS_DOOR_ANSWER,
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
