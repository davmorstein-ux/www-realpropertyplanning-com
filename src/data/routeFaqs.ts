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
    { question: "How many adult family homes are there in Washington?", answer: "About 6,000: DSHS's locator listed 6,069 licensed homes in September 2026, concentrated in King, Snohomish, Pierce, Spokane, Clark, and Thurston counties. AFH Club's directory lists every one by city, in all 39 counties. About four in five are licensed for six residents, and most hold a DSHS Medicaid contract." },
    { question: "Can I buy an adult family home that is already operating?", answer: "Yes. The real estate transfers like any home sale, but the DSHS license does not \u2014 the buyer must qualify for a new license through the Change of Ownership (CHOW) process before operating. Specialty contracts also do not transfer." },
    { question: "Does AFH Club operate adult family homes?", answer: "No. Real Property Planning is an independent educational resource. It does not own, operate, or manage any adult family home. Brokerage and appraisal services are provided by " + HUB_FOUNDER_NAME + " through his own licensed practice, not by the site." },
  ],
  "/afh-club/building-inspection": [
    { question: "Does passing the WABO checklist mean the home is licensed?", answer: "No. The signed checklist proves the building meets code. DSHS separately decides whether the provider and the home qualify for a license, after its own inspection." },
    { question: "Do I need a permit before the AFH inspection?", answer: "If any construction is involved \u2014 ramps, bathroom work, window changes, electrical \u2014 the work generally needs its own permit. Ask your local building department whether that work must pass its final inspection before the AFH building inspection." },
  ],
  "/afh-club/buying-selling": [
    { question: "Can I keep operating under the seller's license while my application is pending?", answer: "No. The license is personal to the provider and does not transfer. The buyer cannot operate the home until DSHS issues a new license." },
    { question: "How long does a CHOW take?", answer: "DSHS licensing staff told AFH Club in September 2026 that they cannot estimate how long a change-of-ownership license takes, and that a complete application is the best way to avoid delays. DSHS's general guidance is up to 60 days once an application is complete, and it posts which month's applications it is working on (the month changes, so check its processing timeline page). Most applicants do not pass the first licensing inspection." },
  ],
  "/afh-club/costs-fees": [
    { question: "What is the DSHS licensing fee for an adult family home?", answer: "$450 per licensed bed per year, in place since July 2025 according to DSHS; a six-bed home pays $2,700. The amount is set in the state budget every two years and can change." },
    { question: "Is liability insurance required?", answer: "Yes, under WAC 388-76-10191 and 388-76-10192: general and professional liability of at least $500,000 per occurrence and $1,000,000 aggregate. At the 2019 and 2024 average per-bed premiums, a six-bed home paid about $1,900 to $2,840 per year." },
  ],
  "/afh-club/getting-started": [
    { question: "How much caregiving experience do I need?", answer: "At least 1,000 hours of direct caregiving experience with vulnerable adults in the previous 60 months, gained after age 18 in a licensed or contracted setting (RCW 70.128.120). A current license as a physician, physician assistant, registered nurse, advanced registered nurse practitioner or practical nurse meets the requirement instead." },
    { question: "How long does it take to open an adult family home?", answer: "DSHS says review can take up to 60 days once an application is complete, and it posts which month's applications it is working on (the month changes, so check its processing timeline page). Most applicants do not pass the first licensing inspection, and building modifications can extend the timeline." },
  ],
  "/afh-club/licensing-certification": [
    { question: "Who has to pass a background check?", answer: "The applicant and anyone affiliated with the application, all caregivers, entity representatives and resident managers, and household members over age 11, volunteers, students and noncaregiving staff who may have unsupervised access to residents (WAC 388-76-10161)." },
    { question: "Can I skip Home Care Aide training?", answer: "Only with a listed exemption, with proof (WAC 246-980-025). Exemptions include registered nurses, practical nurses and ARNPs; certified nursing assistants; home health aides who worked for a Medicare-certified home health agency in the year before being hired; and people who worked as long-term care workers between January 1, 2011 and January 6, 2012 and completed the training required then. Exempt workers may still have to complete required training." },
  ],
  "/afh-club/ownership-structure": [
    { question: "Does an LLC change the DSHS licensing process?", answer: "An LLC becomes an entity provider. It must designate an Entity Representative who personally meets all training, experience, and background-check requirements, and one person may represent only one entity." },
  ],
  "/afh-club/regulations-compliance": [
    { question: "How often are adult family homes inspected?", answer: "At least every 18 months, with an annual average of 15 months, and DSHS may make an unannounced inspection at any time. A home with no inspection citations in its last three inspections, and no violations from complaint investigations in that period, may go up to two years (RCW 70.128.070). Complaints are investigated separately whenever a concern is filed." },
    { question: "What is a stop-placement order?", answer: "A DSHS action that bars the home from admitting new residents until violations are corrected and stability is demonstrated. Existing residents may stay." },
  ],
  "/afh-club/selling-your-business-at-retirement": [
    { question: "Can I sell the business and keep the building?", answer: "Yes. Some owners lease the property to the new operator and keep the real estate as an investment. It separates the two assets and requires a written lease and a buyer able to qualify for the license." },
  ],
  "/afh-club/training-education": [
    { question: "Where do I take AFH Administrator Training?", answer: "Through community colleges contracted with DSHS. Use the DSHS training finder (Other Training, AFH Administrator Training) to find current classes." },
    { question: "Do caregivers I hire need the same training?", answer: "Non-exempt caregivers complete five hours of orientation and safety training before providing care, the 70-hour basic training within 120 days of hire, and Home Care Aide certification within 200 days of hire, and need DSHS name-and-date-of-birth and fingerprint background checks." },
  ],
  "/afh-club/violation-history-lookup": [
    { question: "What does it mean if the DSHS locator lists no documents for a home?", answer: "Only that no documents are currently displayed. It does not mean the home has a spotless history. DSHS says the Locator shows limits and enforcement from the previous three years, so older records may not appear." },
    { question: "What is a statement of deficiency?", answer: "When DSHS finds an adult family home out of compliance, it sends an inspection report citing each deficiency and the rule involved. The home returns a signed attestation of correction within 10 calendar days (WAC 388-76-10930)." },
  ],
  "/afh-club/wabo-inspection-guide": [
    { question: "Does WABO inspect adult family homes?", answer: "Generally no. WABO is a professional association of building officials. The inspection is performed by your city or county building department using the checklist WABO developed with DSHS." },
    { question: "Do I need the WABO inspection before I apply to DSHS?", answer: "Yes. The local building official completes the inspection checklist (DSHS form 15-604) before you submit your license application, and DSHS cannot license the home until it has passed (WAC 388-76-10700). That makes it the first step on the critical path." },
  ],
  "/afh-club/wabo-technical-guide": [
    { question: "What are Type S and Type NS bedroom classifications?", answer: "Washington's building code classes each resident bedroom by its exit route (R330). Type S: the route includes stairs, an elevator or a platform lift. Type NS1: one route is at grade or a code-compliant ramp. Type NS2: two routes are. Every bedroom needs a code-compliant escape window. Under DSHS rules, residents who need help evacuating cannot depend on stairs, elevators or lifts, so Type S rooms are for residents who can get out on their own (WAC 388-76-10865)." },
    { question: "What should I check before the building inspection?", answer: "Key checklist items include each bedroom's escape window (at least 5.7 square feet open, sill no higher than 44 inches, no steps under it), any ramp (slope no steeper than 1:12, handrails on both sides), bathroom grab bars and shower size, and smoke and carbon monoxide alarms that sound throughout the home when any one goes off." },
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
