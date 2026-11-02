/**
 * FAQ questions for pages whose own layout had no FAQ section (Nov 2, 2026).
 *
 * These questions were sent to search engines as FAQPage structured data from
 * vite.config.ts but were not shown on the page, which breaks Google's rule
 * that FAQ markup must match visible content. Owner's decision: show them.
 * <RouteFAQ /> renders the list for the current page, and vite.config.ts builds
 * the FAQPage markup from the same list, so the two can no longer drift apart.
 *
 * Relative imports only: vite.config.ts imports this file.
 */
import { HUB_FOUNDER_NAME } from "./featuredProfessionals";

export interface RouteFaq {
  question: string;
  answer: string;
}

export const ROUTE_FAQS: Record<string, RouteFaq[]> = {
  "/afh-club": [
    { question: "How many adult family homes are there in Washington?", answer: "More than 6,000 statewide, according to DSHS licensing records, concentrated in King, Pierce, Snohomish, Spokane, Clark, and Thurston counties. AFH Club's directory lists every one by city, in all 39 counties. Most are licensed for six residents and most accept Medicaid." },
    { question: "Can I buy an adult family home that is already operating?", answer: "Yes. The real estate transfers like any home sale, but the DSHS license does not \u2014 the buyer must qualify for a new license through the Change of Ownership (CHOW) process before operating. Specialty contracts also do not transfer." },
    { question: "Does AFH Club operate adult family homes?", answer: "No. Real Property Planning is an independent educational resource. It does not own, operate, or manage any adult family home. Brokerage and appraisal services are provided by " + HUB_FOUNDER_NAME + " through his own licensed practice, not by the site." },
  ],
  "/afh-club/building-inspection": [
    { question: "Does passing the WABO checklist mean the home is licensed?", answer: "No. The signed checklist proves the building meets code. DSHS separately decides whether the provider and the home qualify for a license, after its own inspection." },
    { question: "Do I need a permit before the AFH inspection?", answer: "If any construction is involved \u2014 ramps, bathroom work, window changes, electrical \u2014 the work generally needs its own permit. Ask your local building department whether that work must pass its final inspection before the AFH building inspection." },
  ],
  "/afh-club/buying-selling": [
    { question: "Can I keep operating under the seller's license while my application is pending?", answer: "No. The license is personal to the provider and does not transfer. The buyer cannot operate the home until DSHS issues a new license." },
    { question: "How long does a CHOW take?", answer: "DSHS will not estimate how long a change-of-ownership license takes; a complete application avoids delays. In late September 2026 DSHS was processing applications received in May 2026, and processing can take up to 60 days once an application is complete. Most applicants do not pass the first inspection." },
  ],
  "/afh-club/costs-fees": [
    { question: "What is the DSHS licensing fee for an adult family home?", answer: "$450 per licensed bed per year, in place since July 2025 according to DSHS; a six-bed home pays $2,700. The amount is set in the state budget every two years and can change." },
    { question: "Is liability insurance required?", answer: "Yes, under WAC 388-76-10191: general and professional liability of at least $500,000 per occurrence and $1,000,000 aggregate. At the 2019 and 2024 average per-bed premiums, a six-bed home paid about $1,900 to $2,840 per year." },
  ],
  "/afh-club/getting-started": [
    { question: "How much caregiving experience do I need?", answer: "DSHS requires at least 1,000 hours of direct caregiving experience in the previous 60 months, or one of the approved professional exemptions." },
    { question: "How long does it take to open an adult family home?", answer: "DSHS posts its current processing timeline: in late September 2026 it was processing applications received in May 2026, and review can take up to 60 days once an application is complete. Most applicants do not pass the first licensing inspection, and building modifications can extend the timeline." },
  ],
  "/afh-club/licensing-certification": [
    { question: "Who has to pass a background check?", answer: "The applicant and anyone affiliated with the application, household members over age 11, all caregivers, entity representatives and resident managers, and volunteers or noncaregiving staff with unsupervised access to residents." },
    { question: "Can I skip Home Care Aide training?", answer: "Only if you hold a listed exemption \u2014 RN, LPN, CNA, Medicare-certified home health aide, or a qualifying long-term care work history \u2014 with proof." },
  ],
  "/afh-club/ownership-structure": [
    { question: "Does an LLC change the DSHS licensing process?", answer: "An LLC becomes an entity provider. It must designate an Entity Representative who personally meets all training, experience, and background-check requirements, and one person may represent only one entity." },
  ],
  "/afh-club/regulations-compliance": [
    { question: "How often are adult family homes inspected?", answer: "At least every 18 months, unannounced, with a statewide average of 15 months; homes with three clean inspections in a row may go up to two years (RCW 70.128.070). Complaints are investigated separately whenever a concern is filed." },
    { question: "What is a stop-placement order?", answer: "A DSHS action that bars the home from admitting new residents until violations are corrected and stability is demonstrated. Existing residents may stay." },
  ],
  "/afh-club/selling-your-business-at-retirement": [
    { question: "Can I sell the business and keep the building?", answer: "Yes. Some owners lease the property to the new operator and keep the real estate as an investment. It separates the two assets and requires a written lease and a buyer able to qualify for the license." },
  ],
  "/afh-club/training-education": [
    { question: "Where do I take AFH Administrator Training?", answer: "Through community colleges contracted with DSHS. Use the DSHS training finder (Other Training, AFH Administrator Training) to find current classes." },
    { question: "Do caregivers I hire need the same training?", answer: "Non-exempt caregivers complete five hours of orientation and safety training before providing care, the 70-hour basic training within 120 days of hire, and Home Care Aide certification, and need DSHS name-and-date-of-birth and fingerprint background checks." },
  ],
  "/afh-club/violation-history-lookup": [
    { question: "What does it mean if the DSHS locator lists no documents for a home?", answer: "Only that no documents are currently displayed. It does not mean the home has a spotless history. DSHS says the Locator shows limits and enforcement from the previous three years, so older records may not appear." },
    { question: "What is a statement of deficiency?", answer: "When DSHS finds an adult family home out of compliance, it sends an inspection report citing each deficiency and the rule involved. The home returns a signed attestation of correction within 10 calendar days (WAC 388-76-10930)." },
  ],
  "/afh-club/wabo-inspection-guide": [
    { question: "Does WABO inspect adult family homes?", answer: "Generally no. WABO is a professional association of building officials. The inspection is performed by your city or county building department using the checklist WABO developed with DSHS." },
    { question: "Do I need the WABO inspection before I apply to DSHS?", answer: "A passed local building inspection must be complete before DSHS can finish its own inspection and issue the license, so it is on the critical path." },
  ],
  "/afh-club/wabo-technical-guide": [
    { question: "What are Type S and Type NS bedroom classifications?", answer: "Type S rooms require stairs to exit and have stricter egress requirements; Type NS rooms exit at grade level. Classification determines which residents may occupy the room and what window and door requirements apply." },
    { question: "What most often delays a WABO inspection?", answer: "Egress window size and sill height in sleeping rooms, ramp slope and handrails, bathroom clearances, and missing or non-interconnected alarms." },
  ],
  "/senior-living/choosing-an-adult-family-home": [
    { question: "What questions should I ask when touring an adult family home?", answer: "Ask how many residents live there and how many the home is licensed for; whether the provider or a resident manager lives in the home; how many caregivers are on duty day and night; which specialty designations it holds (dementia, mental health, developmental disabilities); whether it works with a delegating nurse; how it handles falls and hospital returns; the private-pay base rate and care-level charges for your parent; whether it has a Medicaid contract; and ask for its Disclosure of Services and last three years of inspection reports." },
    { question: "How do I compare two adult family homes?", answer: "Compare the same facts for each: residents and licensed capacity, who lives in the home, staffing day and night, specialty designations, nurse delegation, Medicaid contract, the total monthly cost at your parent's care level (each home sets its own care levels), the DSHS record over three years, and what the Disclosure of Services says the home cannot do. Then visit both at a mealtime." },
    { question: "What is an adult family home's Disclosure of Services?", answer: "A DSHS form (10-508) each home completes describing what it provides: personal care, medication help, nursing and nurse delegation, specialty designations, staffing, languages, Medicaid and activities. Ask each home for it before you decide; what it says the home does not do matters as much as what it does." },
    { question: "Can an adult family home ask my parent to leave?", answer: "Only for set reasons under Washington's residents' rights law, such as needs the home can no longer meet, a danger to others, unpaid charges or the home closing, and normally with at least 30 days' written notice (RCW 70.129.110). Read the admission agreement's discharge terms before signing." },
  ],
};

/** The list for a route, in the {q, a} shape ROUTE_METADATA uses. */
export const routeFaqForMeta = (path: string) => (ROUTE_FAQS[path] ?? []).map((f) => ({ q: f.question, a: f.answer }));
