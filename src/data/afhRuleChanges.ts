/**
 * Washington AFH rule-change tracker (Sept 29, 2026).
 *
 * One source for /afh-club/washington-afh-rule-changes (page, prerender, and
 * the "old advice" list). No React, relative imports only: the build imports
 * this file in Node.
 *
 * RULES
 * - A change goes in ADOPTED only when the filing (WSR), session law, court
 *   opinion or DSHS notice has been opened and says what the row says. Give
 *   that document as `filing`. `verified` is the date it was last opened.
 * - PROPOSED is for CR-101 / CR-102 filings not yet adopted. Never move a row
 *   to ADOPTED until the CR-103 (filed rule) is published.
 * - Codified WAC pages can lag behind an adopted filing (WAC 388-76-10895 still
 *   showed "sixty days" after WSR 26-17-004 took effect). The WSR wins.
 * - Review the whole file at least quarterly. src/test/afhRuleChanges.test.ts
 *   fails when a row's `verified` date is more than 120 days old.
 * - Audience: buyers, sellers, owners and investors (AGENTS.md §8).
 */

export type RuleCategory = "Building" | "Licensing" | "Operations" | "Payment" | "Staffing and training" | "Who needs a license";
export type RuleKind = "Statute (RCW)" | "Rule (WAC)" | "Budget and contract" | "Court decision" | "DSHS form" | "Agency";

export interface RuleLink {
  label: string;
  href: string;
}

export interface RuleChange {
  id: string;
  topic: string;
  category: RuleCategory;
  kind: RuleKind;
  /** ISO date the change took effect (or the decision date for a court ruling). */
  effective: string;
  /** Shown instead of the formatted date when the effective date needs explaining. */
  effectiveNote?: string;
  before: string;
  after: string;
  affects: string;
  impact: string;
  citation: RuleLink;
  filing: RuleLink;
  /** ISO date the filing was last opened and checked. */
  verified: string;
  /** Set when a later change replaced or ended this one. */
  status?: "replaced" | "expired";
}

export interface PendingRule {
  id: string;
  topic: string;
  stage: string;
  filed: string;
  proposes: string[];
  filing: RuleLink;
  verified: string;
}

const WAC = (cite: string) => `https://app.leg.wa.gov/WAC/default.aspx?cite=${cite}`;
const RCW = (cite: string) => `https://app.leg.wa.gov/RCW/default.aspx?cite=${cite}`;
const WSR = (yr: string, issue: string, num: string) => `https://lawfilesext.leg.wa.gov/law/wsr/20${yr}/${issue}/${num}.htm`;
const V = "2026-09-29";

const W26_17_004 = { label: "WSR 26-17-004 (filed Aug 5, 2026)", href: WSR("26", "17", "26-17-004") };
const W23_12_075 = { label: "WSR 23-12-075 (filed June 6, 2023)", href: "https://lawfilesext.leg.wa.gov/Law/WSRPDF/2023/13/23-12-075.pdf" };

export const RULE_CHANGES: RuleChange[] = [
  /* ---------------- 2026 ---------------- */
  {
    id: "interior-doors-27",
    topic: "Interior doors at least 27 inches wide",
    category: "Building",
    kind: "Rule (WAC)",
    effective: "2026-09-20",
    before: "The licensing rules set no minimum width for interior doors (the building checklist covers exit doors).",
    after: "For homes licensed after September 20, 2026, every internal door residents pass through that is not an emergency exit must be at least 27 inches wide.",
    affects: "Homes licensed after September 20, 2026, including a former AFH whose license lapsed. DSHS confirmed in writing that a continuously licensed home sold through a change of ownership keeps the rules it was first licensed under.",
    impact: "Measure every door on the residents' routes before buying or converting a house that is not currently licensed. Widening a door can mean a new header and a permit.",
    citation: { label: "WAC 388-76-10715(6)", href: WAC("388-76-10715") },
    filing: W26_17_004,
    verified: V,
  },
  {
    id: "bedroom-approval",
    topic: "DSHS approval before a resident uses a new bedroom",
    category: "Building",
    kind: "Rule (WAC)",
    effective: "2026-09-20",
    before: "Changes to a resident bedroom needed the local building official's approval (WAC 388-76-10700), but the licensing rules did not require a DSHS inspection before a resident slept there.",
    after: "The home must notify DSHS and receive an approved inspection from DSHS before letting a resident sleep in a bedroom DSHS has not already inspected and approved.",
    affects: "Every licensed home.",
    impact: "Adding or converting a bedroom now needs two sign-offs, the building official's and DSHS's, before it earns income. A buyer should confirm every bedroom in use was approved by DSHS.",
    citation: { label: "WAC 388-76-10685(14)", href: WAC("388-76-10685") },
    filing: W26_17_004,
    verified: V,
  },
  {
    id: "evacuation-drills",
    topic: "Evacuation drills every two months",
    category: "Operations",
    kind: "Rule (WAC)",
    effective: "2026-09-20",
    before: "Partial evacuation drills at least every sixty days.",
    after: "Partial evacuation drills at least every two months, on random staffing shifts.",
    affects: "Every licensed home.",
    impact: "Schedule drills by calendar month rather than counting days. The online WAC page may still show the old wording; the adopted filing controls.",
    citation: { label: "WAC 388-76-10895", href: WAC("388-76-10895") },
    filing: W26_17_004,
    verified: V,
  },
  {
    id: "resident-records",
    topic: "Resident records: notice of rights acknowledgement",
    category: "Operations",
    kind: "Rule (WAC)",
    effective: "2026-09-20",
    before: "The resident record had to include the resident's Social Security number.",
    after: "The record must include a copy of the notice of rights and services, and the resident's acknowledgement that they received it, signed and dated by the resident and the home.",
    affects: "Every licensed home.",
    impact: "Check that each resident file has the signed acknowledgement. A buyer should ask to see a sample during due diligence.",
    citation: { label: "WAC 388-76-10320", href: WAC("388-76-10320") },
    filing: W26_17_004,
    verified: V,
  },
  {
    id: "plan-of-correction",
    topic: "Plan of correction: when it is required",
    category: "Operations",
    kind: "Rule (WAC)",
    effective: "2026-09-20",
    before: "\"Plan of correction (POC)—Required,\" with no exception.",
    after: "\"Plan of correction (POC)—When required.\" It does not apply when DSHS summarily suspends or revokes the license.",
    affects: "Every licensed home that receives a citation.",
    impact: "The routine process is unchanged: a signed attestation of correction within 10 calendar days of receiving the report.",
    citation: { label: "WAC 388-76-10930", href: WAC("388-76-10930") },
    filing: W26_17_004,
    verified: V,
  },
  {
    id: "multiple-homes-denial",
    topic: "Multiple-home providers: denial now mandatory",
    category: "Licensing",
    kind: "Rule (WAC)",
    effective: "2026-09-20",
    before: "DSHS \"may\" deny a license to an applicant who already operates homes and does not meet the multiple-home provider requirements.",
    after: "DSHS \"must\" deny that license. The same filing repealed the rule that barred certain state employees and their household members from licensing.",
    affects: "Anyone who already operates an AFH and applies for another, including by change of ownership.",
    impact: "An owner buying a second or third home must meet RCW 70.128.065 before applying; there is no discretion left.",
    citation: { label: "WAC 388-76-10120 and 10125", href: WAC("388-76-10120") },
    filing: W26_17_004,
    verified: V,
  },
  {
    id: "live-in-caregiver-wages",
    topic: "Live-in caregivers: minimum wage and overtime",
    category: "Staffing and training",
    kind: "Court decision",
    effective: "2026-07-09",
    effectiveNote: "Decided July 9, 2026",
    before: "State wage law exempted live-in caregivers from minimum wage and overtime.",
    after: "The Washington Supreme Court held that the exemption violates the state constitution as applied to live-in caregivers in adult family homes. Whether the ruling reaches back to earlier pay periods was sent back to the trial court.",
    affects: "Homes that employ live-in caregivers.",
    impact: "Staffing costs and projections built on the old exemption may be wrong. Review payroll with an employment attorney; a buyer should ask how the seller pays live-in staff.",
    citation: { label: "Bolina v. AssureCare Adult Home LLC, No. 103519-5", href: "https://statecourtreport.org/sites/default/files/2026-07/supreme_court_of_washington-opinion_0.pdf" },
    filing: { label: "Washington Supreme Court opinion (July 9, 2026)", href: "https://statecourtreport.org/sites/default/files/2026-07/supreme_court_of_washington-opinion_0.pdf" },
    verified: V,
  },
  {
    id: "hca-certification-deadline",
    topic: "Home Care Aide certification deadline extended",
    category: "Staffing and training",
    kind: "Rule (WAC)",
    effective: "2025-08-25",
    effectiveNote: "Aug 25, 2025 through Dec 31, 2027",
    before: "Certified within 200 days of hire, or 260 days with a provisional certificate.",
    after: "Certified within 365 days of hire, or 425 days with a provisional certificate, for applicants who apply by December 31, 2027. Training is still due within 120 days of hire.",
    affects: "Caregivers hired who must become certified Home Care Aides.",
    impact: "More time to certify new hires, but a caregiver who is not certified by day 425 must stop working. The extension ends December 31, 2027.",
    citation: { label: "WAC 246-980-040", href: WAC("246-980-040") },
    filing: { label: "WSR 26-12-065 (permanent rule, effective July 3, 2026)", href: WSR("26", "12", "26-12-065") },
    verified: V,
  },
  {
    id: "former-foster-exemption",
    topic: "Former foster parents exempt from AFH licensing",
    category: "Who needs a license",
    kind: "Statute (RCW)",
    effective: "2026-06-11",
    before: "Caring for unrelated adults in your home generally required an AFH license.",
    after: "Qualifying former foster parents who care only for former foster youth they previously served, with no abuse findings or adverse licensing actions, are exempt.",
    affects: "A narrow group of former foster care providers.",
    impact: "Little effect on the AFH market; listed so the exemption is not mistaken for a general one.",
    citation: { label: "RCW 70.128.030", href: RCW("70.128.030") },
    filing: { label: "SHB 2505, chapter 91, Laws of 2026", href: "https://lawfilesext.leg.wa.gov/biennium/2025-26/Pdf/Bills/Session%20Laws/House/2505-S.SL.pdf" },
    verified: V,
  },
  {
    id: "ombuds-contact-stop-placement",
    topic: "Resident contact list and posting a stop placement: more specific",
    category: "Operations",
    kind: "Rule (WAC)",
    effective: "2026-03-15",
    before: "State law has required both since 2021 (RCW 70.128.155 and 70.128.306), and the WAC already said to post a stop placement order, but not where or for how long.",
    after: "WAC 388-76-10231 now spells out the resident contact list and the 48-hour deadline after a long-term care ombuds's written request. WAC 388-76-10980 now says a stop placement order must be publicly posted where residents, visitors and staff can see it, and stay posted until DSHS ends it.",
    affects: "Every licensed home.",
    impact: "A buyer touring a home should look for a posted stop placement order; its absence is not proof there isn't one.",
    citation: { label: "WAC 388-76-10231 and 10980", href: WAC("388-76-10231") },
    filing: { label: "WSR 26-05-046 (filed Feb 12, 2026)", href: WSR("26", "05", "26-05-046") },
    verified: V,
  },
  {
    id: "medicaid-residency-agreement",
    topic: "Medicaid residency agreement and discharge notices",
    category: "Operations",
    kind: "Rule (WAC)",
    effective: "2026-01-01",
    before: "No specific written residency agreement was required for Medicaid residents.",
    after: "Each resident with Medicaid as a payor signs a written residency agreement at admission that commits the home to the transfer and discharge rights in chapter 70.129 RCW and gives notice that, subject to legislative appropriation, residents have the right to legal counsel at public expense. Discharge notices must include legal-services and ombuds contacts. The required contact details were corrected April 30, 2026 (WSR 26-08-074).",
    affects: "Every home with Medicaid residents.",
    impact: "A buyer should confirm each Medicaid resident has a signed agreement on file.",
    citation: { label: "WAC 388-76-10506 and 10617", href: WAC("388-76-10506") },
    filing: { label: "WSR 25-18-037 (filed Aug 25, 2025)", href: WSR("25", "18", "25-18-037") },
    verified: V,
  },

  /* ---------------- 2025 ---------------- */
  {
    id: "resident-roster",
    topic: "Resident roster and essential support person",
    category: "Operations",
    kind: "Rule (WAC)",
    effective: "2025-09-06",
    before: "State law has required a roster for the ombuds since 2021 (RCW 70.128.155), but no DSHS rule did, and nothing guaranteed an essential support person when visits were limited.",
    after: "The home keeps a roster of residents and rooms and hands a copy immediately to ombuds or DSHS staff who ask in person. During a public health emergency that limits visits, residents must still have access to an essential support person.",
    affects: "Every licensed home.",
    impact: "Keep the roster current and printable.",
    citation: { label: "WAC 388-76-10221 and 10596", href: WAC("388-76-10221") },
    filing: { label: "WSR 25-16-099 (filed Aug 6, 2025)", href: WSR("25", "16", "25-16-099") },
    verified: V,
  },
  {
    id: "sbs-cbhs-first",
    topic: "SBS requires CBHS ineligibility first",
    category: "Payment",
    kind: "Rule (WAC)",
    effective: "2025-07-01",
    effectiveNote: "Assessments on or after July 1, 2025",
    before: "A resident could be approved for Specialized Behavior Support without a CBHS determination.",
    after: "For assessments on or after July 1, 2025, a resident must first be found not eligible for Community Behavioral Health Support before receiving SBS or on-site staffing ratios under the residential support waiver.",
    affects: "Homes serving residents with behavioral needs, and buyers relying on SBS income.",
    impact: "Do not project new SBS residents the way sellers may have before 2025. Ask which residents are on CBHS and which on SBS.",
    citation: { label: "WAC 388-106-0336(11)", href: WAC("388-106-0336") },
    filing: { label: "WSR 25-15-100 (rule effective Aug 16, 2025)", href: WSR("25", "15", "25-15-100") },
    verified: V,
  },
  {
    id: "license-fee-450",
    topic: "Annual license fee: $450 per bed",
    category: "Licensing",
    kind: "Budget and contract",
    effective: "2025-07-01",
    before: "A lower per-bed fee set in the earlier state budget (the AFH Council reports $225 per bed).",
    after: "$450 per licensed bed per year for renewals on or after July 1, 2025 ($2,700 for six beds), per DSHS's written answer. The 2025–27 bargaining agreement adds $0.62 per Medicaid day to rates to offset the fee on Medicaid beds.",
    affects: "Every licensed home, at its license anniversary.",
    impact: "Update expense projections; the fee is set in each two-year budget and can change again in July 2027.",
    citation: { label: "RCW 70.128.060", href: RCW("70.128.060") },
    filing: { label: "DSHS written answer to AFH Club (Sept 29, 2026); 2025–27 AFH Council agreement, MOU E", href: "https://ofm.wa.gov/wp-content/uploads/sites/default/files/public/labor/agreements/25-27/nse_afhc.pdf" },
    verified: V,
  },
  {
    id: "meaningful-day",
    topic: "Meaningful Day add-on eliminated",
    category: "Payment",
    kind: "Budget and contract",
    effective: "2025-07-01",
    before: "A $40-a-day Meaningful Day add-on for eligible residents.",
    after: "The 2025–27 operating budget eliminated the adult family home Meaningful Day add-on.",
    affects: "Homes that billed Meaningful Day, and buyers reading older income statements.",
    impact: "Remove Meaningful Day from any income projection. A contract listed in the DSHS locator is not proof of payment.",
    citation: { label: "DSHS notice AFH #2025-024 (June 6, 2025)", href: "https://www.dshs.wa.gov/sites/default/files/ALTSA/rcs/documents/afh/025-024.pdf" },
    filing: { label: "DSHS notice AFH #2025-024", href: "https://www.dshs.wa.gov/sites/default/files/ALTSA/rcs/documents/afh/025-024.pdf" },
    verified: V,
  },
  {
    id: "cba-2025-27",
    topic: "2025–27 Medicaid rates and bargaining agreement",
    category: "Payment",
    kind: "Budget and contract",
    effective: "2025-07-01",
    before: "Rates under the 2023–25 AFH Council agreement.",
    after: "A new agreement through June 30, 2027. The Health Care Authority's notice described a weighted-average increase of 14 percent in AFH daily rates. The two rate regions are unchanged: King, Pierce and Snohomish counties are paid more than the rest of the state.",
    affects: "Every home with Medicaid residents.",
    impact: "Use current rate tables, not a seller's older ones. Rates rose again July 1, 2026 under the agreement and can change July 1, 2027.",
    citation: { label: "2025–27 AFH Council agreement", href: "https://ofm.wa.gov/wp-content/uploads/sites/default/files/public/labor/agreements/25-27/nse_afhc.pdf" },
    filing: { label: "HCA public notice WSR 25-14-047", href: WSR("25", "14", "25-14-047") },
    verified: V,
  },
  {
    id: "veterans-foster-exemption",
    topic: "VA medical foster homes exempt from AFH licensing",
    category: "Who needs a license",
    kind: "Statute (RCW)",
    effective: "2025-07-27",
    before: "A home caring for unrelated veterans needed an AFH license.",
    after: "A medical foster home overseen and reviewed each year by the U.S. Department of Veterans Affairs, caring for three or fewer veterans, is exempt.",
    affects: "VA medical foster homes only.",
    impact: "Narrow. Listed so the exemption is not mistaken for a general one.",
    citation: { label: "RCW 70.128.030", href: RCW("70.128.030") },
    filing: { label: "ESSB 5200, chapter 108, Laws of 2025", href: "https://lawfilesext.leg.wa.gov/biennium/2025-26/Pdf/Bills/Session%20Laws/Senate/5200-S.SL.pdf" },
    verified: V,
  },
  {
    id: "altsa-hcla",
    topic: "ALTSA merged into the Home and Community Living Administration",
    category: "Licensing",
    kind: "Agency",
    effective: "2025-05-01",
    effectiveNote: "May 2025",
    before: "Residential Care Services sat in the Aging and Long-Term Support Administration (ALTSA).",
    after: "DSHS combined ALTSA with the community side of the Developmental Disabilities Administration into the Home and Community Living Administration (HCLA). Many web addresses still use /altsa/.",
    affects: "No change to rules; only names and contacts.",
    impact: "Older documents that say ALTSA refer to the same programs.",
    citation: { label: "DSHS Home and Community Living Administration", href: "https://www.dshs.wa.gov/hcla" },
    filing: { label: "DSHS Home and Community Living Administration page", href: "https://www.dshs.wa.gov/hcla" },
    verified: V,
  },
  {
    id: "form-15-604-2025",
    topic: "Building inspection checklist: April 2025 revision",
    category: "Building",
    kind: "DSHS form",
    effective: "2025-04-01",
    effectiveNote: "Revision dated April 2025",
    before: "Earlier revisions of the Adult Family Home Local Building Inspection Checklist.",
    after: "The current form is DSHS 15-604, revised 04/2025. It does not yet show the 27-inch interior door rule, which is a DSHS licensing rule rather than a checklist item.",
    affects: "Any house being inspected for AFH use.",
    impact: "Throw away printed or downloaded copies with an older revision date, and check the DSHS licensing rules as well as the checklist.",
    citation: { label: "DSHS form 15-604 (04/2025)", href: "https://www.dshs.wa.gov/sites/default/files/forms/pdf/15-604.pdf" },
    filing: { label: "DSHS form 15-604 (PDF)", href: "https://www.dshs.wa.gov/sites/default/files/forms/pdf/15-604.pdf" },
    verified: V,
  },
  {
    id: "seven-eight-sprinklers",
    topic: "7–8 bed homes without sprinklers",
    category: "Building",
    kind: "Rule (WAC)",
    effective: "2025-03-04",
    before: "The 2023 rule required an automatic sprinkler system (chapter 51-54A WAC) for any 7- or 8-bed home.",
    after: "A 7- or 8-bed home without an automatic sprinkler system may operate if it serves only residents who can evacuate without assistance; its license is limited accordingly. It must report to DSHS when any resident comes to need help evacuating, and its notice of services must say such residents will be discharged.",
    affects: "Providers seeking or holding 7–8 bed capacity.",
    impact: "Expansion without sprinklers is possible but limits who the home can serve, which limits income.",
    citation: { label: "WAC 388-76-10031, 10225 and 10530", href: WAC("388-76-10031") },
    filing: { label: "WSR 25-04-035 (filed Jan 28, 2025)", href: WSR("25", "04", "25-04-035") },
    verified: V,
  },
  {
    id: "toilets-2025",
    topic: "Toilets: one per five persons, ensuite toilets count",
    category: "Building",
    kind: "Rule (WAC)",
    effective: "2025-03-04",
    before: "Homes licensed after August 1, 2023 with more than five residents needed at least two indoor toilets usable without going through another person's room.",
    after: "Homes licensed after August 1, 2023 need one accessible toilet per five persons, without going through another person's room; DSHS's explanation of the change says a toilet in a resident's own bathroom counts. Toilets residents do not use need not meet the AFH building code but must be closed to residents.",
    affects: "Homes licensed after August 1, 2023.",
    impact: "Restores flexibility for conversions; count every person in the home, not only residents.",
    citation: { label: "WAC 388-76-10780", href: WAC("388-76-10780") },
    filing: { label: "WSR 25-04-069 (filed Jan 31, 2025)", href: WSR("25", "04", "25-04-069") },
    verified: V,
  },

  /* ---------------- 2024 ---------------- */
  {
    id: "cbhs-replaces-bhpc",
    topic: "CBHS replaces Behavioral Health Personal Care",
    category: "Payment",
    kind: "Rule (WAC)",
    effective: "2024-07-01",
    before: "Behavioral Health Personal Care (BHPC), funded with state-only dollars.",
    after: "Community Behavioral Health Support (CBHS), a Medicaid benefit run by the Health Care Authority with DSHS, paid in six tiers by the staff time a resident needs.",
    affects: "Homes serving residents with significant behavioral health needs.",
    impact: "Behavioral income is now tied to each resident's CBHS tier, reviewed at least every 12 months.",
    citation: { label: "Chapter 182-561 WAC", href: WAC("182-561") },
    filing: { label: "WSR 24-10-081 (the rule) and the HCA CBHS program guide (BHPC history)", href: "https://hca.wa.gov/assets/billers-and-providers/cbhs-program-guide.pdf" },
    verified: V,
  },
  {
    id: "seven-eight-fast-inspections",
    topic: "Faster inspections for 7–8 bed applications (ended)",
    category: "Licensing",
    kind: "Statute (RCW)",
    effective: "2024-06-06",
    effectiveNote: "June 6, 2024 to Jan 1, 2026",
    before: "Standard inspection timing for capacity-increase applications.",
    after: "For capacity-increase applications, DSHS could do the first inspection on receipt of the application and the second after six months. This provision expired January 1, 2026.",
    affects: "Providers who applied for 7–8 beds before January 1, 2026.",
    impact: "No longer available; advice that promises a fast track is out of date.",
    citation: { label: "RCW 70.128.066 and 70.128.070", href: RCW("70.128.066") },
    filing: { label: "SHB 2015, chapter 147, Laws of 2024", href: "https://lawfilesext.leg.wa.gov/biennium/2023-24/Pdf/Bills/Session%20Laws/House/2015-S.SL.pdf" },
    verified: V,
    status: "expired",
  },
  {
    id: "administrator-training-48",
    topic: "Administrator training: 48 hours in the rule",
    category: "Staffing and training",
    kind: "Rule (WAC)",
    effective: "2024-04-05",
    before: "The rule required fifty-four hours of AFH administrator training.",
    after: "The rule requires 48 hours of instructional time from an approved community college, matching RCW 70.128.120. Courses as offered may still run longer.",
    affects: "New license applicants and entity representatives.",
    impact: "Ask DSHS whether an older certificate will be accepted before applying.",
    citation: { label: "WAC 388-112A-0800", href: WAC("388-112A-0800") },
    filing: { label: "WSR 24-06-073 (filed Mar 5, 2024)", href: "https://lawfilesext.leg.wa.gov/Law/WSR/2024/06/24-06-073.htm" },
    verified: V,
  },
  {
    id: "orientation-repealed",
    topic: "Prospective-provider orientation class repealed",
    category: "Staffing and training",
    kind: "Rule (WAC)",
    effective: "2024-01-01",
    before: "Applicants had to complete a DSHS orientation class before applying.",
    after: "Repealed. The content is covered in the required administrator training.",
    affects: "New license applicants.",
    impact: "Checklists that still list the orientation class are out of date.",
    citation: { label: "Former WAC 388-76-10060", href: WAC("388-76-10060") },
    filing: { label: "WSR 23-24-010 (filed Nov 27, 2023)", href: WSR("23", "24", "23-24-010") },
    verified: V,
  },

  /* ---------------- 2023 ---------------- */
  {
    id: "seven-eight-beds-2023",
    topic: "Seven- and eight-bed licensing created",
    category: "Licensing",
    kind: "Rule (WAC)",
    effective: "2023-08-01",
    before: "Six residents was the maximum.",
    after: "A provider may apply for seven or eight after at least 24 months under the initial license (the last 12 at six residents), two full inspections with no enforcement action, and proof of financial solvency. A buyer of a 7–8 bed home must already have been a licensed provider for at least 24 months.",
    affects: "Existing six-bed providers and buyers of 7–8 bed homes.",
    impact: "A new owner cannot open at seven or eight beds, and a buyer without 24 months as a licensed provider does not qualify to apply for a change of ownership of a 7–8 bed home.",
    citation: { label: "WAC 388-76-10031 and 10032", href: WAC("388-76-10032") },
    filing: W23_12_075,
    verified: V,
  },
  {
    id: "liability-insurance-2023",
    topic: "Both general and professional liability insurance",
    category: "Licensing",
    kind: "Rule (WAC)",
    effective: "2023-08-01",
    before: "Professional liability was addressed in a separate section, and not every home had to carry it.",
    after: "Every home must carry both commercial general liability and professional liability insurance, at least $500,000 per occurrence and $1,000,000 aggregate, before the first admission or within 10 working days of licensing, whichever comes first. A lapse must be reported to DSHS.",
    affects: "Every licensed home.",
    impact: "Budget for both policies; a buyer should see current certificates.",
    citation: { label: "WAC 388-76-10191 and 10192", href: WAC("388-76-10191") },
    filing: W23_12_075,
    verified: V,
  },
  {
    id: "management-agreements",
    topic: "Management agreements: attestation instead of approval",
    category: "Licensing",
    kind: "Rule (WAC)",
    effective: "2023-08-01",
    before: "DSHS had to approve a management agreement in advance.",
    after: "The provider files an attestation instead of waiting for approval. The provider remains responsible for the home.",
    affects: "Owners who hire a management company.",
    impact: "No DSHS approval step, but the agreement and signed attestation are still due 60 days before it takes effect, and residents get 60 days' notice. It does not replace the provider's own qualifications.",
    citation: { label: "WAC 388-76-11050", href: WAC("388-76-11050") },
    filing: W23_12_075,
    verified: V,
  },
  {
    id: "rule-exemptions",
    topic: "A process to ask for an exemption from a rule",
    category: "Licensing",
    kind: "Rule (WAC)",
    effective: "2023-08-01",
    before: "No written process for asking DSHS to waive a specific requirement.",
    after: "A home may ask the Residential Care Services director in writing for an exemption from a specific requirement. It must not affect any resident's health, safety, rights or quality of life. The decision is at the director's sole discretion and cannot be appealed.",
    affects: "Every licensed home.",
    impact: "Useful for unusual houses, but never something to count on when buying.",
    citation: { label: "WAC 388-76-10004", href: WAC("388-76-10004") },
    filing: W23_12_075,
    verified: V,
  },
  {
    id: "toilets-2023",
    topic: "Two toilets for more than five residents (replaced)",
    category: "Building",
    kind: "Rule (WAC)",
    effective: "2023-08-01",
    before: "One toilet per five persons.",
    after: "Homes licensed after August 1, 2023 with more than five residents needed at least two indoor toilets. Replaced March 4, 2025 (see above).",
    affects: "Homes licensed between August 1, 2023 and March 4, 2025.",
    impact: "Advice quoting the two-toilet rule is out of date.",
    citation: { label: "WAC 388-76-10780", href: WAC("388-76-10780") },
    filing: W23_12_075,
    verified: V,
    status: "replaced",
  },
];

export const PENDING_RULES: PendingRule[] = [
  {
    id: "cr101-26-13-037",
    topic: "Background checks, discharge notices and bedroom windows",
    stage: "Preproposal (CR-101); negotiated rulemaking",
    filed: "2026-06-10",
    proposes: [
      "Drop background checks for spouses and domestic partners of entity representatives who have no ownership interest and do not live in the home, and clarify the age at which household members need checks.",
      "Align the transfer and discharge notice rule (WAC 388-76-10616) with the statute.",
      "Require new homes to have a 36-inch clear space in front of at least one resident bedroom window for emergency escape or rescue.",
    ],
    filing: { label: "WSR 26-13-037", href: WSR("26", "13", "26-13-037") },
    verified: V,
  },
  {
    id: "cr101-25-11-052",
    topic: "Fingerprint background check process",
    stage: "Preproposal (CR-101)",
    filed: "2025-05-15",
    proposes: [
      "Align AFH, assisted living, nursing home and enhanced services facility background check rules with the federal compact for fingerprint-based checks.",
      "Streamline checks for home care agency providers, update definitions, and clarify checks for rehired employees.",
    ],
    filing: { label: "WSR 25-11-052", href: "https://lawfilesext.leg.wa.gov/Law/WSR/2025/11/25-11-052.htm" },
    verified: V,
  },
];

export const RULE_CATEGORIES: RuleCategory[] = ["Building", "Licensing", "Operations", "Payment", "Staffing and training", "Who needs a license"];

/** Old advice that the tracker shows is out of date. Each points at the row that replaced it. */
export const OUTDATED_ADVICE: { claim: string; now: string; ruleId: string }[] = [
  { claim: "\"Take the DSHS orientation class before you apply.\"", now: "Repealed January 1, 2024.", ruleId: "orientation-repealed" },
  { claim: "\"Administrator training is 54 hours.\"", now: "The rule has said 48 hours since April 2024; courses may run longer.", ruleId: "administrator-training-48" },
  { claim: "\"Caregivers must be certified within 200 days.\"", now: "365 days (425 with a provisional certificate) for applicants through December 31, 2027.", ruleId: "hca-certification-deadline" },
  { claim: "\"Seven- or eight-bed homes always need sprinklers.\"", now: "Not if the home serves only residents who can evacuate without help, since March 2025.", ruleId: "seven-eight-sprinklers" },
  { claim: "\"A six-bed home needs two toilets.\"", now: "Replaced in March 2025 by one accessible toilet per five persons, counting ensuite toilets.", ruleId: "toilets-2025" },
  { claim: "\"Evacuation drills every 60 days.\"", now: "Every two months since September 20, 2026.", ruleId: "evacuation-drills" },
  { claim: "\"Meaningful Day adds $40 a day.\"", now: "Eliminated in the 2025–27 budget.", ruleId: "meaningful-day" },
  { claim: "\"Any resident with behaviors can go on SBS.\"", now: "Since July 2025 a resident must first be found not eligible for CBHS.", ruleId: "sbs-cbhs-first" },
  { claim: "\"The license fee is $225 a bed.\"", now: "$450 a bed since July 2025.", ruleId: "license-fee-450" },
  { claim: "\"Live-in caregivers are exempt from minimum wage.\"", now: "The Washington Supreme Court struck that exemption for AFH live-in caregivers in July 2026.", ruleId: "live-in-caregiver-wages" },
];

export const RULES_LAST_VERIFIED = RULE_CHANGES.reduce((m, r) => (r.verified > m ? r.verified : m), "");
