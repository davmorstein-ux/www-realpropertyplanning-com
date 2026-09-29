/**
 * AFH Club glossary: Washington adult family home terms (Sept 29, 2026).
 *
 * One source for /afh-club/glossary (the page, its DefinedTermSet schema, and
 * its prerendered HTML in vite.config.ts). No React, relative imports only:
 * the build imports this file in Node.
 *
 * RULES
 * - Every definition must agree with the reviewed guide it links to (`guide`)
 *   and with the primary source it cites (`source`). If a guide changes a fact,
 *   change the term here the same day. src/test/afhGlossary.test.ts checks
 *   that every guide route exists and that terms are unique.
 * - Plain English, one to three sentences. No dollar figures except where a
 *   dated, sourced figure is the point of the term.
 * - A term the site does not explain gets no entry (the glossary may not be
 *   the only place a reader learns something from us).
 * - Buyers, sellers, owners and investors are the audience (AGENTS.md §8).
 */

export type GlossaryCategory =
  | "Agencies and programs"
  | "Licensing and people"
  | "Training"
  | "Building and safety"
  | "Payment and contracts"
  | "Buying and selling"
  | "Inspections and enforcement";

export interface GlossarySource {
  label: string;
  href: string;
}

export interface GlossaryTerm {
  /** Anchor id on the glossary page: /afh-club/glossary#<id> */
  id: string;
  term: string;
  /** Expansion of an acronym, or another name for the same thing. */
  aka?: string;
  category: GlossaryCategory;
  definition: string;
  /** The AFH Club page that explains it best. */
  guide: { label: string; href: string };
  source?: GlossarySource;
}

const WAC = (cite: string) => `https://app.leg.wa.gov/WAC/default.aspx?cite=${cite}`;
const RCW = (cite: string) => `https://app.leg.wa.gov/RCW/default.aspx?cite=${cite}`;
const CBA = "https://ofm.wa.gov/wp-content/uploads/sites/default/files/public/labor/agreements/25-27/nse_afhc.pdf";
const LOCATOR = "https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx";
const CHECKLIST = "https://www.dshs.wa.gov/sites/default/files/forms/pdf/15-604.pdf";

const G = {
  whatIs: { label: "What Is an Adult Family Home?", href: "/afh-club/what-is-an-adult-family-home" },
  gettingStarted: { label: "Is an Adult Family Home Right for You?", href: "/afh-club/getting-started" },
  licensing: { label: "AFH Licensing & Certification", href: "/afh-club/licensing-certification" },
  training: { label: "Training & Education Requirements", href: "/afh-club/training-education" },
  building: { label: "Building Requirements & Inspections", href: "/afh-club/building-inspection" },
  wabo: { label: "What Is WABO? A Simple Overview", href: "/afh-club/wabo-inspection-guide" },
  waboTech: { label: "WABO Checklist & Technical Requirements", href: "/afh-club/wabo-technical-guide" },
  classifications: { label: "Is It Really an Adult Family Home?", href: "/afh-club/afh-property-classifications" },
  compliance: { label: "DSHS Inspections & Compliance", href: "/afh-club/regulations-compliance" },
  violations: { label: "How to Look Up DSHS Violations", href: "/afh-club/violation-history-lookup" },
  costs: { label: "AFH Costs & Fees", href: "/afh-club/costs-fees" },
  care: { label: "A Through E: CARE Classifications", href: "/afh-club/care-classifications-a-through-e" },
  cbhs: { label: "CBHS Tiers Explained", href: "/afh-club/cbhs-tiers" },
  payment: { label: "The AFH Payment Field Guide", href: "/afh-club/afh-payment-field-guide" },
  buying: { label: "Buying or Selling an Adult Family Home", href: "/afh-club/buying-selling" },
  ownership: { label: "Buying as an Individual or Through an LLC", href: "/afh-club/ownership-structure" },
  dos: { label: "The Dos and Don'ts of Operating an AFH", href: "/afh-club/dos-and-donts-operating-adult-family-home" },
  data: { label: "Washington AFHs by the Numbers", href: "/afh-club/washington-afh-data" },
};

export const AFH_GLOSSARY: GlossaryTerm[] = [
  /* ---------------- Agencies and programs ---------------- */
  {
    id: "adult-family-home",
    term: "Adult family home",
    aka: "AFH",
    category: "Licensing and people",
    definition:
      "A regular house licensed by the state to provide room, board, personal care and special care to more than one but not more than six adults who are not related to the provider. DSHS may approve up to eight.",
    guide: G.whatIs,
    source: { label: "RCW 70.128.010", href: RCW("70.128.010") },
  },
  {
    id: "dshs",
    term: "DSHS",
    aka: "Washington State Department of Social and Health Services",
    category: "Agencies and programs",
    definition:
      "The state agency that licenses adult family home providers, inspects the homes, contracts with them for Medicaid, and enforces the licensing rules.",
    guide: G.licensing,
    source: { label: "Chapter 70.128 RCW", href: RCW("70.128") },
  },
  {
    id: "rcs",
    term: "RCS",
    aka: "Residential Care Services",
    category: "Agencies and programs",
    definition:
      "The DSHS division that licenses, inspects and investigates adult family homes under chapter 388-76 WAC.",
    guide: G.compliance,
    source: { label: "Chapter 388-76 WAC", href: WAC("388-76") },
  },
  {
    id: "altsa",
    term: "ALTSA",
    aka: "Aging and Long-Term Support Administration",
    category: "Agencies and programs",
    definition:
      "The DSHS administration that oversaw Residential Care Services and the long-term care payment programs until May 2025, when DSHS merged it into the new Home and Community Living Administration (HCLA). Many DSHS adult family home pages still use /altsa/ web addresses.",
    guide: G.whatIs,
    source: { label: "DSHS Home and Community Living Administration", href: "https://www.dshs.wa.gov/altsa" },
  },
  {
    id: "baau",
    term: "BAAU",
    aka: "Business Analysis & Applications Unit",
    category: "Agencies and programs",
    definition:
      "The DSHS unit and online portal (baau.dshs.wa.gov) where adult family home license applications, including change-of-ownership applications, are filed. DSHS posts its current processing queue rather than promising a timeline.",
    guide: G.licensing,
    source: { label: "DSHS: BAAU application processing timeline", href: "https://www.dshs.wa.gov/altsa/baau-application-processing-timeline" },
  },
  {
    id: "hca-agency",
    term: "Health Care Authority",
    aka: "HCA (the agency)",
    category: "Agencies and programs",
    definition:
      "The state Medicaid agency that runs Community Behavioral Health Support with DSHS. Not to be confused with a Home Care Aide, which is also abbreviated HCA.",
    guide: G.cbhs,
    source: { label: "Chapter 182-561 WAC", href: WAC("182-561") },
  },
  {
    id: "afh-council-cba",
    term: "AFH Council collective bargaining agreement",
    aka: "CBA",
    category: "Payment and contracts",
    definition:
      "The agreement between the state and the Adult Family Home Council, the providers' bargaining representative. The 2025–27 agreement sets Medicaid daily rates, CBHS tier rates and the ECS and SBS rates through June 30, 2027.",
    guide: G.costs,
    source: { label: "2025–27 AFH Council agreement (OFM)", href: CBA },
  },
  {
    id: "afh-locator",
    term: "AFH Locator",
    category: "Inspections and enforcement",
    definition:
      "DSHS's public search of licensed adult family homes. It shows each home's license, capacity, contracts and specialty designations, and the limits and enforcement letters issued in the previous three years. A home that is not listed is not licensed.",
    guide: G.violations,
    source: { label: "DSHS Adult Family Home Locator", href: LOCATOR },
  },

  /* ---------------- Licensing and people ---------------- */
  {
    id: "provider",
    term: "Provider",
    category: "Licensing and people",
    definition:
      "The individual or entity DSHS licenses to operate an adult family home. Each license is valid only for the provider and the address on it, and cannot be transferred.",
    guide: G.gettingStarted,
    source: { label: "WAC 388-76-10010", href: WAC("388-76-10010") },
  },
  {
    id: "entity-representative",
    term: "Entity representative",
    category: "Licensing and people",
    definition:
      "The individual an entity provider (such as an LLC or corporation) names to represent it. That person must meet every qualification an individual provider must meet, and may represent only one entity.",
    guide: G.ownership,
    source: { label: "WAC 388-76-10090", href: WAC("388-76-10090") },
  },
  {
    id: "resident-manager",
    term: "Resident manager",
    category: "Licensing and people",
    definition:
      "A qualified person the provider employs or contracts with to live in the home when the provider or entity representative does not. Not needed if the home has 24-hour staffing with a decision-maker always present.",
    guide: G.gettingStarted,
    source: { label: "WAC 388-76-10040", href: WAC("388-76-10040") },
  },
  {
    id: "caregiver",
    term: "Caregiver",
    category: "Licensing and people",
    definition:
      "Staff who provide care to residents. At least one qualified caregiver must be in the home whenever residents are there, with a narrow exception for residents assessed as safe to be left alone.",
    guide: G.dos,
    source: { label: "WAC 388-76-10200", href: WAC("388-76-10200") },
  },
  {
    id: "capacity",
    term: "Licensed capacity",
    category: "Licensing and people",
    definition:
      "The number of residents printed on the license. Six is the standard. Seven or eight requires separate DSHS approval after at least 24 months under the initial license, the last 12 at six residents, two full inspections with no enforcement action, proof of financial solvency, and a sprinkler system if the home serves residents who need help evacuating.",
    guide: G.data,
    source: { label: "WAC 388-76-10031", href: WAC("388-76-10031") },
  },
  {
    id: "direct-care-experience",
    term: "1,000 hours of direct care experience",
    category: "Licensing and people",
    definition:
      "A provider, entity representative or resident manager must have at least 1,000 hours of direct care to vulnerable adults in a licensed or contracted setting within the previous 60 months, after age 18. Physicians, physician assistants, RNs, ARNPs and LPNs are exempt. It is documented on DSHS form 10-417.",
    guide: G.gettingStarted,
    source: { label: "WAC 388-76-10130", href: WAC("388-76-10130") },
  },
  {
    id: "background-check",
    term: "Background check",
    category: "Licensing and people",
    definition:
      "A Washington name and date-of-birth check, renewed every two years, plus a national fingerprint check that does not expire, for the applicant, entity representative, resident manager and caregivers. Household members over age 11, volunteers and noncaregiving staff with unsupervised access need the name and date-of-birth check. Disqualifying crimes are listed in chapter 388-113 WAC.",
    guide: G.licensing,
    source: { label: "WAC 388-76-10161 and 10165", href: WAC("388-76-10161") },
  },
  {
    id: "specialty-designation",
    term: "Specialty designation",
    category: "Licensing and people",
    definition:
      "A note in the DSHS locator that the home can serve residents with dementia, mental illness or developmental disabilities. It means the required specialty training is complete. It is not a quality rating.",
    guide: G.data,
    source: { label: "WAC 388-112A-0490", href: WAC("388-112A-0490") },
  },
  {
    id: "zoning",
    term: "Permitted use (zoning)",
    category: "Licensing and people",
    definition:
      "State law makes adult family homes a permitted use in every area zoned residential or commercial, including single-family zones. Under RCW 64.38.060, a homeowners' association's governing documents cannot prohibit a licensed adult family home, though neutral rules that apply to every home, such as sign or landscaping standards, still apply.",
    guide: G.gettingStarted,
    source: { label: "RCW 70.128.140", href: RCW("70.128.140") },
  },

  /* ---------------- Training ---------------- */
  {
    id: "administrator-training",
    term: "AFH Administrator Training",
    category: "Training",
    definition:
      "The DSHS-developed course every new license applicant (for an LLC or corporation, its entity representative) must complete before a license is granted. The rules set a minimum of 48 hours; DSHS and the colleges that teach it describe a 54-hour course.",
    guide: G.training,
    source: { label: "WAC 388-112A-0800", href: WAC("388-112A-0800") },
  },
  {
    id: "home-care-aide",
    term: "Home Care Aide certification",
    aka: "HCA (the credential)",
    category: "Training",
    definition:
      "The Department of Health credential most caregivers need: 75 hours of training (two hours of orientation, three of safety and 70 of basic training) and then a certification exam. Some licensed professionals, including certified nursing assistants, are exempt.",
    guide: G.licensing,
    source: { label: "Chapter 388-112A WAC", href: WAC("388-112A") },
  },
  {
    id: "specialty-training",
    term: "Specialty training",
    category: "Training",
    definition:
      "Dementia, mental health and developmental disabilities training, each with a DSHS competency test. The provider, entity representative and resident manager must complete it before admitting residents with those needs, or within 120 days if a current resident develops the need.",
    guide: G.training,
    source: { label: "WAC 388-112A-0490", href: WAC("388-112A-0490") },
  },
  {
    id: "nurse-delegation",
    term: "Nurse delegation",
    category: "Training",
    definition:
      "A registered nurse's authorization for a trained caregiver to perform a specific nursing task for a specific resident. The caregiver needs core delegation training first, plus diabetes training before giving insulin.",
    guide: G.training,
    source: { label: "WAC 388-112A-0550", href: WAC("388-112A-0550") },
  },
  {
    id: "continuing-education",
    term: "Continuing education",
    aka: "CE",
    category: "Training",
    definition:
      "Twelve hours of DSHS-approved training each year, due by the person's birthday, for providers, entity representatives, resident managers and most caregivers. Licensed nurses (RNs, LPNs and ARNPs) are not covered by this rule.",
    guide: G.training,
    source: { label: "WAC 388-112A-0610", href: WAC("388-112A-0610") },
  },

  /* ---------------- Building and safety ---------------- */
  {
    id: "wabo",
    term: "WABO",
    aka: "Washington Association of Building Officials",
    category: "Building and safety",
    definition:
      "A nonprofit association of building officials that developed the adult family home building inspection checklist with DSHS. WABO itself does not inspect homes.",
    guide: G.wabo,
  },
  {
    id: "building-inspection",
    term: "Local building inspection",
    aka: "the \"WABO inspection\"",
    category: "Building and safety",
    definition:
      "The city or county building official's inspection of the house against the Adult Family Home Local Building Inspection Checklist (DSHS form 15-604). It must be passed before the home can be licensed, and it is separate from the DSHS licensing inspection.",
    guide: G.building,
    source: { label: "WAC 388-76-10700", href: WAC("388-76-10700") },
  },
  {
    id: "form-15-604",
    term: "Form 15-604",
    category: "Building and safety",
    definition:
      "The Adult Family Home Local Building Inspection Checklist, current revision April 2025. It covers bedroom exits and classifications, escape windows, alarms, doors, ramps, stairs, bathrooms and fire access.",
    guide: G.waboTech,
    source: { label: "DSHS form 15-604 (PDF)", href: CHECKLIST },
  },
  {
    id: "section-r330",
    term: "Section R330",
    category: "Building and safety",
    definition:
      "The section of Washington's residential building code written for adult family homes, which the checklist is built on. It does not apply to homes licensed before July 1, 2001.",
    guide: G.building,
    source: { label: "WAC 51-51-0330", href: WAC("51-51-0330") },
  },
  {
    id: "evacuation-type",
    term: "Bedroom evacuation type (S, NS1, NS2)",
    category: "Building and safety",
    definition:
      "How each resident bedroom is classified by its exit route. Type S needs stairs, an elevator or a lift to reach the exit; NS1 has one route to grade level or a ramp; NS2 has two. The type decides which residents may use the room.",
    guide: G.classifications,
    source: { label: "DSHS form 15-604 (PDF)", href: CHECKLIST },
  },
  {
    id: "escape-window",
    term: "Emergency escape window",
    category: "Building and safety",
    definition:
      "At least one window in each resident bedroom, with a sill no higher than 44 inches a clear opening of at least 5.7 square feet (5.0 at grade), and an opening at least 24 inches high and 20 inches wide.",
    guide: G.building,
    source: { label: "WAC 388-76-10795", href: WAC("388-76-10795") },
  },
  {
    id: "door-rule",
    term: "27-inch interior door rule",
    category: "Building and safety",
    definition:
      "Homes licensed after September 20, 2026 need interior doors at least 27 inches wide wherever residents pass through (other than the emergency exit). DSHS confirmed in writing that a continuously licensed home sold through a change of ownership is exempt; a former AFH whose license lapsed is not.",
    guide: G.building,
    source: { label: "WAC 388-76-10715", href: WAC("388-76-10715") },
  },
  {
    id: "evacuation-drills",
    term: "Evacuation drills",
    category: "Building and safety",
    definition:
      "Partial evacuation drills on random shifts at least every two months, with each resident taking part at least once a year, plus a full evacuation drill each calendar year.",
    guide: G.dos,
    source: { label: "WAC 388-76-10895", href: WAC("388-76-10895") },
  },

  /* ---------------- Payment and contracts ---------------- */
  {
    id: "care-assessment",
    term: "CARE assessment",
    category: "Payment and contracts",
    definition:
      "The DSHS case manager's assessment of a Medicaid client's cognition, clinical complexity, mood and behavior, daily living needs and exceptional care. It places the resident in one of 17 residential classifications.",
    guide: G.care,
    source: { label: "WAC 388-106-0115", href: WAC("388-106-0115") },
  },
  {
    id: "a-through-e",
    term: "A through E classifications",
    category: "Payment and contracts",
    definition:
      "The five CARE groups, split into 17 classifications from A Low to E High. With the rate region, the classification sets the Medicaid daily rate. They are groups, not a ladder: E is exceptional care, D and C are clinically complex (D with significant cognitive impairment), B is mood and behavior, A is everyone else.",
    guide: G.care,
    source: { label: "WAC 388-106-0115", href: WAC("388-106-0115") },
  },
  {
    id: "adl",
    term: "ADLs",
    aka: "Activities of daily living",
    category: "Payment and contracts",
    definition:
      "Everyday tasks such as bathing, dressing, eating, toileting and moving around. The CARE assessment's ADL score generally sets the level within a classification group.",
    guide: G.care,
    source: { label: "WAC 388-106-0115", href: WAC("388-106-0115") },
  },
  {
    id: "daily-rate",
    term: "Medicaid daily rate",
    aka: "base rate",
    category: "Payment and contracts",
    definition:
      "What DSHS pays the home per resident per day, set by the resident's classification and the rate region (King, Pierce and Snohomish counties pay more than the rest of the state). Rates change each July 1 and sometimes January 1.",
    guide: G.care,
    source: { label: "DSHS All HCS Rates (PDF)", href: "https://www.dshs.wa.gov/sites/default/files/ALTSA/msd/documents/All_HCS_Rates.pdf" },
  },
  {
    id: "private-pay",
    term: "Private pay",
    category: "Payment and contracts",
    definition:
      "Care paid by the resident or family rather than Medicaid, at rates the home sets itself, often a base rate plus level-of-care charges. No agency sets or publishes these rates.",
    guide: G.payment,
  },
  {
    id: "providerone",
    term: "ProviderOne",
    category: "Payment and contracts",
    definition:
      "Washington's Medicaid payment system and the provider number in it. After a change of ownership, each Medicaid resident's authorization is reissued under the new owner's ProviderOne number; residents do not need new assessments.",
    guide: G.care,
  },
  {
    id: "exception-to-rule",
    term: "Exception to rule",
    aka: "ETR",
    category: "Payment and contracts",
    definition:
      "A DSHS-approved exception, often a higher rate, granted for a particular resident's needs. It belongs to the resident, not the home.",
    guide: G.care,
  },
  {
    id: "cbhs",
    term: "CBHS",
    aka: "Community Behavioral Health Support",
    category: "Payment and contracts",
    definition:
      "A Medicaid benefit, run by the Health Care Authority with DSHS since July 1, 2024, that pays for supportive supervision of residents with qualifying behavioral health needs, on top of the base rate.",
    guide: G.cbhs,
    source: { label: "Chapter 182-561 WAC", href: WAC("182-561") },
  },
  {
    id: "cbhs-tier",
    term: "CBHS tier",
    category: "Payment and contracts",
    definition:
      "One of six levels of CBHS, set by the average hours per day of dedicated staff time the resident needs. The tier belongs to the resident, and the resident's eligibility is reviewed at least once every 12 months.",
    guide: G.cbhs,
    source: { label: "WAC 182-561-0300 and 0500", href: WAC("182-561-0500") },
  },
  {
    id: "supportive-supervision",
    term: "Supportive supervision",
    category: "Payment and contracts",
    definition:
      "Direct monitoring, redirection, diversion and cueing to prevent at-risk behavior that may harm the resident or others, plus help building skills for stable living. It is what CBHS pays for, on top of the base rate.",
    guide: G.cbhs,
    source: { label: "WAC 182-561-0400", href: WAC("182-561-0400") },
  },
  {
    id: "mco",
    term: "MCO",
    aka: "Managed care organization",
    category: "Payment and contracts",
    definition:
      "A health plan that pays for Medicaid services under contract with the state. For most residents CBHS is paid through their MCO, so a home generally needs contracts with the MCOs its residents belong to.",
    guide: G.cbhs,
  },
  {
    id: "ecs",
    term: "ECS",
    aka: "Expanded Community Services",
    category: "Payment and contracts",
    definition:
      "A specialty DSHS contract held by the owner for residents with complex behavioral needs. The home is paid the ECS daily rate or the resident's base rate, whichever is greater. It does not transfer when the home is sold.",
    guide: G.payment,
    source: { label: "2025–27 AFH Council agreement, Art. 7.2", href: CBA },
  },
  {
    id: "sbs",
    term: "SBS",
    aka: "Specialized Behavior Support",
    category: "Payment and contracts",
    definition:
      "A specialty DSHS contract held by the owner that pays a daily add-on on top of the base rate for six to eight extra hours of staffing a day. For assessments on or after July 1, 2025, a resident must first be found not eligible for CBHS. It does not transfer when the home is sold.",
    guide: G.payment,
    source: { label: "WAC 388-106-0336", href: WAC("388-106-0336") },
  },
  {
    id: "meaningful-day",
    term: "Meaningful Day",
    category: "Payment and contracts",
    definition:
      "An activity add-on still listed on many homes' DSHS contracts. The 2025 state budget eliminated its funding, and DSHS contracting staff confirmed in September 2026 that it has not been available since July 1, 2025. A listed contract is not proof of income.",
    guide: G.payment,
  },
  {
    id: "annual-license-fee",
    term: "Annual license fee",
    category: "Payment and contracts",
    definition:
      "$450 per licensed bed per year since July 2025, per DSHS's written answer (a six-bed home pays $2,700). DSHS mails the bill 60 days before the license anniversary month, and the fee is due that month. The amount is set in the state budget.",
    guide: G.costs,
    source: { label: "WAC 388-76-10025", href: WAC("388-76-10025") },
  },
  {
    id: "liability-insurance",
    term: "Liability insurance requirement",
    category: "Payment and contracts",
    definition:
      "Commercial general liability and professional liability coverage, each with limits of at least $500,000 per occurrence and $1,000,000 aggregate, in place before the first resident is admitted or 10 working days after the license is issued, whichever comes first.",
    guide: G.costs,
    source: { label: "WAC 388-76-10191 and 10192", href: WAC("388-76-10192") },
  },

  /* ---------------- Buying and selling ---------------- */
  {
    id: "chow",
    term: "CHOW",
    aka: "Change of ownership",
    category: "Buying and selling",
    definition:
      "Any change in the provider or in control of the provider: selling the business, forming or merging an entity, or transferring 50 percent or more of an entity's shares. It requires a new license application and a new license; the seller's license does not transfer.",
    guide: G.buying,
    source: { label: "WAC 388-76-10105", href: WAC("388-76-10105") },
  },
  {
    id: "chow-notice",
    term: "60-day notice",
    category: "Buying and selling",
    definition:
      "The current owner must give DSHS and each resident (or their representative) written notice 60 calendar days before a proposed change of ownership. The owner may also request priority processing under WAC 388-76-10107.",
    guide: G.buying,
    source: { label: "WAC 388-76-10106", href: WAC("388-76-10106") },
  },
  {
    id: "operating-afh",
    term: "Operating AFH",
    category: "Buying and selling",
    definition:
      "AFH Club's listing label for a home that is licensed and caring for residents today. The real estate, the business or both may be for sale; the buyer still needs a new license.",
    guide: G.classifications,
  },
  {
    id: "former-afh",
    term: "Former AFH",
    category: "Buying and selling",
    definition:
      "AFH Club's listing label for a home that was licensed in the past but is not now. It must meet current rules to be licensed again, including the 27-inch door rule, unlike a continuously licensed home.",
    guide: G.classifications,
  },
  {
    id: "afh-ready",
    term: "AFH-ready (WABO)",
    category: "Buying and selling",
    definition:
      "AFH Club's listing label for a house whose owner can show a signed building inspection checklist but that has never been licensed. A house built to adult family home code, not a care business.",
    guide: G.classifications,
  },
  {
    id: "afh-potential",
    term: "AFH potential — not verified",
    category: "Buying and selling",
    definition:
      "AFH Club's listing label when a listing calls a house suitable for an adult family home and nothing in the record supports more. The buyer takes on the whole conversion and licensing.",
    guide: G.classifications,
  },

  /* ---------------- Inspections and enforcement ---------------- */
  {
    id: "licensing-inspection",
    term: "Licensing inspection",
    category: "Inspections and enforcement",
    definition:
      "The DSHS licensor's on-site inspection of the home and the provider's readiness before a new license is issued. It is separate from the local building inspection, which must be passed first.",
    guide: G.licensing,
  },
  {
    id: "routine-inspection",
    term: "Routine inspection",
    category: "Inspections and enforcement",
    definition:
      "The DSHS inspection of a licensed home, at least every 18 months with an annual average of 15. DSHS may also inspect unannounced at any time. A home with no citations on its last three inspections, and no complaint violations in that period, may go up to two years.",
    guide: G.compliance,
    source: { label: "RCW 70.128.070", href: RCW("70.128.070") },
  },
  {
    id: "citation",
    term: "Citation",
    aka: "deficiency",
    category: "Inspections and enforcement",
    definition:
      "A licensing rule DSHS found was not met during an inspection or complaint investigation. A citation does not by itself mean a resident was harmed.",
    guide: G.violations,
    source: { label: "Chapter 388-76 WAC", href: WAC("388-76") },
  },
  {
    id: "attestation-of-correction",
    term: "Attestation of correction",
    category: "Inspections and enforcement",
    definition:
      "The home's signed and dated statement that each cited problem has been or will be corrected and will stay corrected, returned within 10 calendar days of receiving the report. The home also keeps its own plan of correction and shows it to DSHS on request.",
    guide: G.violations,
    source: { label: "WAC 388-76-10930", href: WAC("388-76-10930") },
  },
  {
    id: "civil-fine",
    term: "Civil fine",
    category: "Inspections and enforcement",
    definition:
      "A penalty DSHS may impose: at least $100 per day per violation, up to $3,000 per incident, and up to $10,000 for a current or former provider operating an unlicensed home.",
    guide: G.compliance,
    source: { label: "RCW 70.128.160", href: RCW("70.128.160") },
  },
  {
    id: "stop-placement",
    term: "Stop placement",
    category: "Inspections and enforcement",
    definition:
      "An enforcement action that suspends new admissions to the home until DSHS lifts it.",
    guide: G.compliance,
    source: { label: "RCW 70.128.160", href: RCW("70.128.160") },
  },
  {
    id: "license-conditions",
    term: "License conditions",
    category: "Inspections and enforcement",
    definition:
      "Requirements DSHS may place on a license, such as correcting a problem within a set time, completing training, or limiting the type of residents the home may admit.",
    guide: G.violations,
    source: { label: "RCW 70.128.160", href: RCW("70.128.160") },
  },
  {
    id: "suspension-revocation",
    term: "Suspension and revocation",
    category: "Inspections and enforcement",
    definition:
      "The most serious enforcement actions: DSHS suspends, revokes or refuses to renew the license.",
    guide: G.compliance,
    source: { label: "RCW 70.128.160", href: RCW("70.128.160") },
  },
];

export const GLOSSARY_CATEGORIES: GlossaryCategory[] = [
  "Licensing and people",
  "Agencies and programs",
  "Training",
  "Building and safety",
  "Payment and contracts",
  "Buying and selling",
  "Inspections and enforcement",
];

/** Terms A to Z, ignoring case; terms that start with a number come first. */
export const GLOSSARY_A_TO_Z: GlossaryTerm[] = [...AFH_GLOSSARY].sort((a, b) =>
  a.term.localeCompare(b.term, "en", { sensitivity: "base", numeric: true })
);
