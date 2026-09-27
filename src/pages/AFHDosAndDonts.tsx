import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import AuthorByline from "@/components/AuthorByline";
import PageFAQ from "@/components/PageFAQ";
import { articleAuthor, articlePublisher } from "@/lib/schema";

/**
 * The Dos and Don'ts of Operating a Washington Adult Family Home (Sept 27, 2026).
 * Written by David; every "Washington requirement" checked against the WAC the
 * same day, including WSR 26-17-004 (effective Sept 20, 2026):
 *   - drills: WAC 388-76-10895 as amended says partial drills "at least every two
 *     months" (was "sixty days"). app.leg.wa.gov still showed the old text on
 *     Sept 27 2026; the filing itself is the source. Do not "correct" it back.
 *   - records: WAC 388-76-10320 as amended adds a copy of the notice of rights and
 *     services with the resident's acknowledgement.
 *   - caregiver present: WAC 388-76-10200(1), with the (2) exception.
 *   - emergency plan 388-76-10830, plan training 388-76-10855, medication log
 *     388-76-10475, succession plan 388-76-10201, Medicaid residency agreement
 *     388-76-10506 (effective Jan 1 2026, amended Apr 30 2026).
 *   - DSHS "What you need to know before becoming a licensed AFH provider" sheet
 *     for the "close after one or two years" warning, quoted from the sheet.
 */

const CANONICAL = "https://realpropertyplanning.com/afh-club/dos-and-donts-operating-adult-family-home";
const TITLE = "The Dos and Don'ts of Operating a Washington Adult Family Home";
const DESCRIPTION =
  "The essential dos and don'ts of operating a Washington adult family home: admissions, staffing, resident care, documentation, medications, emergencies, inspections, finances, and succession planning.";

type Kind = "req" | "req+bp" | "bp" | "bp+law";
const KIND_LABEL: Record<Kind, string> = {
  req: "Washington requirement",
  "req+bp": "Washington requirement + operating best practice",
  bp: "Operating best practice",
  "bp+law": "Operating best practice · other legal requirements may apply",
};

interface Point {
  heading: string;
  kind: Kind;
  body: React.ReactNode;
}
interface Topic {
  n: number;
  title: string;
  do: Point;
  dont: Point;
}

const L = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="afhdd-link">
    {children}
  </Link>
);
const Ul = ({ items }: { items: string[] }) => (
  <ul className="afhdd-ul">
    {items.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ul>
);

const TOPICS: Topic[] = [
  {
    n: 1,
    title: "Understand what you are taking on",
    do: {
      heading: "Learn what daily AFH operations are actually like",
      kind: "req+bp",
      body: (
        <>
          <p>
            Before buying a property, paying for renovations, or submitting a license application, spend meaningful time
            with experienced AFH providers. Ask to observe the rhythm of an operating home, not just during a scheduled
            tour, but during meals, shift changes, medication times, evening routines, and busy mornings.
          </p>
          <p>Ask owners what happens when:</p>
          <Ul
            items={[
              "A caregiver calls out two hours before a shift.",
              "A resident falls during the night.",
              "Two residents need assistance at the same time.",
              "A family member is unhappy with the resident's care.",
              "A hospital wants to discharge someone back to the home with changed needs.",
              "A resident dies and the room remains vacant.",
              "The provider needs a vacation, becomes ill, or has a family emergency.",
            ]}
          />
          <p>
            DSHS tells prospective providers plainly that adult family homes are heavily regulated, and that the provider
            is responsible for residents' care and services 24 hours a day, whether on site or not. Its guidance also
            notes that a number of providers close their homes after only one or two years, usually because they did not
            realize how hard it would be to share their home, how hard the work would be, or how hard it may be to attract
            residents and run a business.
          </p>
        </>
      ),
    },
    dont: {
      heading: "Enter the business based only on projected gross revenue",
      kind: "bp",
      body: (
        <>
          <p>
            Six occupied beds multiplied by an attractive monthly rate can make an AFH look highly profitable on paper.
            Gross revenue, however, is not owner income. The calculation may leave out:
          </p>
          <Ul
            items={[
              "Caregiver wages, payroll taxes, overtime, and relief coverage",
              "Food, continence supplies, cleaning supplies, and utilities",
              "Insurance, licensing, training, professional fees, and transportation",
              "Repairs, accessibility improvements, equipment, and property maintenance",
              "Referral and marketing expenses",
              "Vacancies and delayed admissions",
              "Higher staffing needs as resident conditions change",
              "Debt service or rent",
              "Compensation for the provider's own caregiving and management time",
            ]}
          />
          <p>
            Before moving forward, prepare conservative projections that show what happens if the home opens slowly, loses
            one resident, needs additional nighttime staffing, or faces a major repair. The{" "}
            <L to="/afh-club/afh-roi-calculator">AFH ROI Calculator</L> and{" "}
            <L to="/afh-club/costs-fees">AFH Costs &amp; Fees</L> guide are a starting point.
          </p>
        </>
      ),
    },
  },
  {
    n: 2,
    title: "Investigate the property before buying it",
    do: {
      heading: "Complete property, licensing, and business due diligence",
      kind: "req+bp",
      body: (
        <>
          <p>
            A home can look perfect in photographs and still be a poor AFH candidate. Before purchasing or leasing,
            investigate whether its layout, building systems, site, and local requirements support the intended operation.
          </p>
          <Ul
            items={[
              "Is the proposed use permitted at the property?",
              "Has the local building department evaluated the property using the current AFH inspection checklist?",
              "How will each proposed resident bedroom be classified?",
              "Are required exits, escape windows, door widths, ramps, landings, and pathways feasible?",
              "Can residents reach bathrooms and common areas safely?",
              "Does the septic system, if there is one, support the proposed occupancy?",
              "Is there enough parking for caregivers, visitors, service providers, and emergency access?",
              "Can residents evacuate within the limitations of the home and its license?",
              "What renovations are required, and what will they realistically cost?",
              "Are there unpermitted additions or conversions?",
              "Will the provider or resident manager be able to meet the residency requirements?",
            ]}
          />
          <p>
            A local building inspection and a DSHS license serve different purposes. Passing the building inspection does
            not, by itself, authorize anyone to operate an adult family home. See{" "}
            <L to="/afh-club/wabo-inspection-guide">What Is WABO?</L> and the{" "}
            <L to="/afh-club/wabo-technical-guide">WABO checklist and technical requirements</L>. Homes licensed after
            September 20, 2026 also need interior doors of at least 27 inches wherever residents pass through (WAC 388-76-10715).
          </p>
        </>
      ),
    },
    dont: {
      heading: "Rely on “AFH ready,” “former AFH,” or the seller's bed count",
      kind: "req",
      body: (
        <>
          <p>
            Those phrases are not substitutes for due diligence. A license belongs to the provider and address named on
            it and cannot be transferred. A change of ownership requires a new application and a new license. A seven- or
            eight-bed home also carries additional eligibility requirements that can prevent a first-time provider from
            keeping that capacity.
          </p>
          <p>
            Verify the license, approved capacity, limits, enforcement history, bedroom use, building records, and
            change-of-ownership requirements independently (
            <L to="/afh-club/violation-history-lookup">how to check DSHS violation history</L>). Do not assume the
            business, license, residents, state contracts, specialty arrangements, or payment sources transfer with the
            real estate. <L to="/afh-club/afh-property-classifications">Is It Really an Adult Family Home?</L> explains
            what listing labels actually mean.
          </p>
        </>
      ),
    },
  },
  {
    n: 3,
    title: "Admit residents selectively",
    do: {
      heading: "Decide whether the resident is a safe and sustainable fit",
      kind: "req+bp",
      body: (
        <>
          <p>
            An empty bed creates financial pressure, but an inappropriate admission can create a much larger problem.
            Before accepting a resident, decide whether the home can meet that person's assessed needs with its current
            staffing, training, physical layout, equipment, and resident mix. Consider:
          </p>
          <Ul
            items={[
              "Mobility, transfers, and evacuation ability",
              "Fall, choking, elopement, and behavioral risks",
              "Dementia, developmental-disability, or mental-health needs",
              "Medication assistance, medication administration, and nurse-delegated tasks",
              "Nighttime behaviors and supervision needs",
              "Continence care and bathing assistance",
              "Special diets and swallowing precautions",
              "Transportation and appointment requirements",
              "Communication needs and primary language",
              "Compatibility with current residents",
              "Whether the home has the necessary specialty training or designation",
              "Whether the payment arrangement covers the actual cost of providing care",
            ]}
          />
          <p>
            The written negotiated care plan must identify the care and services to be provided, who will provide them,
            and when and how they will be delivered. Caregivers should use it as a working guide, not paperwork completed
            once and forgotten.
          </p>
        </>
      ),
    },
    dont: {
      heading: "Promise care before understanding the resident's needs",
      kind: "bp",
      body: (
        <>
          <p>
            Avoid statements such as “We can handle anything” or “The resident can stay here forever.” A resident's
            condition may change, staffing may need to increase, or the home may not be legally or practically able to
            meet future needs. Before admission:
          </p>
          <Ul
            items={[
              "Review the current assessment and available medical information.",
              "Ask what has changed recently.",
              "Speak with the resident, representative, case manager, discharge planner, and appropriate healthcare professionals.",
              "Identify equipment, training, and staffing that must be in place before arrival.",
              "Put services, rates, responsibilities, and limitations in writing.",
            ]}
          />
          <p>
            Do not let a hospital's preferred discharge date, a referral source's urgency, or an empty bed replace a careful
            admission decision.
          </p>
        </>
      ),
    },
  },
  {
    n: 4,
    title: "Staff for resident needs, not bed count",
    do: {
      heading: "Schedule enough qualified people to deliver the promised care",
      kind: "req+bp",
      body: (
        <>
          <p>
            Washington requires at least one qualified caregiver to be present in the home whenever one or more residents
            are there, with a narrow exception for residents individually assessed as safe to be left alone. It also
            requires enough staff to meet each resident's needs. Minimum presence does not mean adequate staffing.
          </p>
          <p>
            One caregiver may be unable to safely assist several residents who need transfers, toileting, meals,
            medications, supervision, or evacuation help at the same time. Staffing should reflect actual resident needs,
            the home's layout, caregiver skills, appointments, nighttime needs, and foreseeable emergencies. A dependable
            staffing system includes:
          </p>
          <Ul
            items={[
              "Verified credentials, background checks, and required training",
              "Written responsibilities for every shift",
              "Resident-specific orientation before anyone works alone",
              "Tracking of training expiration dates",
              "A reliable call-out and backup-coverage process",
              "Clear on-call authority",
              "Time for documentation, meal preparation, cleaning, and resident activities",
              "A plan for appointments and transportation",
              "Regular supervision and performance feedback",
              "Payroll practices that follow employment law",
            ]}
          />
        </>
      ),
    },
    dont: {
      heading: "Treat family members or occasional helpers as informal labor",
      kind: "req+bp",
      body: (
        <>
          <p>
            Anyone who provides care, has unsupervised access, or fills another regulated role may be subject to
            background-check, training, credential, documentation, and employment requirements. Good intentions do not
            replace qualifications.
          </p>
          <p>
            Also avoid a schedule that depends on the provider never becoming sick, tired, or unavailable. A home without
            reliable backup coverage is one unexpected event away from a serious problem.
          </p>
        </>
      ),
    },
  },
  {
    n: 5,
    title: "Make documentation part of care",
    do: {
      heading: "Keep records that tell the resident's current story",
      kind: "req",
      body: (
        <>
          <p>
            Resident records should let another qualified caregiver understand what the resident needs, what has changed,
            what care was provided, and what follow-up remains. Depending on the resident, records may include:
          </p>
          <Ul
            items={[
              "Assessments and negotiated care plans",
              "Medication records",
              "Progress notes",
              "Incident and injury documentation",
              "Changes in condition",
              "Healthcare-provider instructions",
              "Hospital visits and appointments",
              "Communications with representatives and case managers",
              "Dietary instructions",
              "Behavior-monitoring information",
              "Nurse-delegation documents",
              "Transfer and discharge records",
            ]}
          />
          <p>
            Washington requires resident records to hold enough information to provide needed care and services, to stay
            confidential, and to be available as required. Since September 20, 2026, the record must also include a copy
            of the notice of rights and services the resident received, with the resident's acknowledgement, and a Social
            Security number is no longer a required entry.
          </p>
        </>
      ),
    },
    dont: {
      heading: "Backfill, copy, or guess",
      kind: "bp+law",
      body: (
        <>
          <p>
            Never document care that was not personally completed or reliably verified. Do not copy yesterday's note when
            the resident's condition may have changed. Do not alter a record to make it look as if a task happened at a
            different time.
          </p>
          <p>
            Late entries and corrections should follow an established, transparent procedure. If something was missed,
            address the resident's immediate needs, notify the right people, document honestly, and fix the underlying
            system. An organized record is not just for an inspector: it supports continuity of care and protects
            residents, caregivers, and the provider.
          </p>
        </>
      ),
    },
  },
  {
    n: 6,
    title: "Create a dependable medication system",
    do: {
      heading: "Treat medication management as a high-risk process",
      kind: "req+bp",
      body: (
        <>
          <p>
            The home needs a consistent system for receiving, securing, assisting with, administering, documenting,
            reconciling, and disposing of medications. Each staff member's tasks must match their training and legal
            authority. Useful controls:
          </p>
          <Ul
            items={[
              "Confirm medication orders against the medication supply",
              "Keep medication logs current",
              "Separate medications appropriately",
              "Secure medications and control access",
              "Document refusals, omissions, and errors promptly",
              "Watch refill needs before medications run out",
              "Follow pharmacy and prescriber instructions",
              "Keep required nurse-delegation documentation",
              "Review medication changes after appointments and hospital returns",
            ]}
          />
          <p>
            Washington requires an up-to-date daily medication log for every resident except those assessed as
            medication-independent with self-administration. The log must record each medication change, with a logged
            call requesting written verification and a copy of that verification from the practitioner.
          </p>
        </>
      ),
    },
    dont: {
      heading: "Rely on memory or informal verbal directions",
      kind: "req+bp",
      body: (
        <>
          <p>
            Do not change a medication schedule, crush a medication, borrow medication from another resident, or act on an
            unclear instruction without proper authorization and verification.
          </p>
          <p>
            When an order, label, discharge instruction, or medication log does not match, stop and resolve it with the
            prescriber, pharmacy, nurse, or other authorized professional.
          </p>
        </>
      ),
    },
  },
  {
    n: 7,
    title: "Protect resident rights and dignity",
    do: {
      heading: "Remember that the AFH is the resident's home",
      kind: "req+bp",
      body: (
        <>
          <p>
            The property may belong to the provider, but it is also the residents' home. Convenience should not
            automatically override resident preference, privacy, or independence. Respect shows in everyday practice:
          </p>
          <Ul
            items={[
              "Knock before entering bedrooms.",
              "Speak directly to residents, not only to their representatives.",
              "Protect personal and health information.",
              "Support reasonable choices in meals, clothing, activities, schedules, and visitors.",
              "Make complaint procedures easy to use.",
              "Respect cultural, religious, language, and personal differences.",
              "Protect residents from abuse, neglect, exploitation, retaliation, and involuntary isolation.",
              "Keep resident money and provider funds separate and documented.",
            ]}
          />
        </>
      ),
    },
    dont: {
      heading: "Use house rules as a shortcut around resident rights",
      kind: "req",
      body: (
        <>
          <p>
            A policy is not automatically appropriate because it applies to everyone. Blanket restrictions on visitors,
            food, schedules, communication, or movement may conflict with individual rights and care needs.
          </p>
          <p>
            Take special care with transfer and discharge. Since January 1, 2026, every Medicaid resident must have a
            signed written residency agreement, completed at admission, that commits the home to the transfer and discharge
            requirements of chapter 70.129 RCW and tells the resident about free legal assistance. A new agreement is
            needed if a resident moves from private pay back to Medicaid. The rule was amended again on April 30, 2026;
            make sure your agreements and notices match the current version.
          </p>
        </>
      ),
    },
  },
  {
    n: 8,
    title: "Prepare for emergencies before they happen",
    do: {
      heading: "Build the emergency plan around your actual residents and risks",
      kind: "req+bp",
      body: (
        <>
          <p>
            Washington requires a written emergency and disaster plan covering emergencies that may reasonably occur at
            the home, what staff and residents do during and after one, and the fire-drill evacuation plan. Staff must be
            trained on the plan. A useful plan addresses:
          </p>
          <Ul
            items={[
              "Fire and smoke",
              "Power, heat, or water failure",
              "Extreme heat, snow, wind, wildfire smoke, and flooding where they apply",
              "Earthquake response",
              "Medical emergencies",
              "A missing or wandering resident",
              "Emergency staffing shortages",
              "Medication refrigeration",
              "Food, water, oxygen, and essential supplies",
              "Communication with representatives and emergency services",
              "Transportation and relocation if the home becomes uninhabitable",
            ]}
          />
          <p>Each resident's mobility, cognition, communication, and nighttime needs should be reflected in the plan.</p>
        </>
      ),
    },
    dont: {
      heading: "Keep a generic plan that nobody has practiced",
      kind: "req",
      body: (
        <>
          <p>
            A binder on a shelf will not help if caregivers do not know where residents should go, which exit to use, who
            needs physical help, how to call for help, or where emergency information is kept.
          </p>
          <p>
            Washington requires partial evacuation drills on random staffing shifts at least every two months (the rule
            said every sixty days until September 20, 2026), with each resident taking part in at least one each calendar
            year, and a full evacuation drill at least once each calendar year with all residents together. Drills are
            required even when no residents live in the home. Use each drill to find and fix weaknesses rather than as a
            paperwork exercise.
          </p>
        </>
      ),
    },
  },
  {
    n: 9,
    title: "Run the AFH like a real business",
    do: {
      heading: "Know the home's financial position every month",
      kind: "bp+law",
      body: (
        <>
          <p>An AFH provider needs timely financial information, not just a year-end tax return. At a minimum, know:</p>
          <Ul
            items={[
              "Revenue by resident and payer source",
              "Accounts receivable and unpaid balances",
              "Payroll and overtime",
              "Food and household expenses",
              "Insurance and professional fees",
              "Property expenses and debt service",
              "Maintenance and capital reserves",
              "Referral and marketing costs",
              "Occupancy and vacancy trends",
              "The cost of providing additional care",
              "Taxes and licensing expenses",
              "Owner compensation versus business profit",
            ]}
          />
          <p>
            Keep separate business accounts and accurate books, and work with professionals who understand payroll,
            long-term-care operations, insurance, and Washington business requirements. The{" "}
            <L to="/afh-club/afh-payment-field-guide">AFH Payment Field Guide</L> explains how each income source works.
          </p>
        </>
      ),
    },
    dont: {
      heading: "Spend as though every occupied bed is permanent",
      kind: "bp",
      body: (
        <>
          <p>
            Residents move, go to the hospital, change payer sources, need more care, or pass away. Admissions can take
            longer than expected. Medicaid enrollment, contracting, or specialty arrangements may not start on a buyer's
            preferred schedule. Keep an operating reserve and model several scenarios:
          </p>
          <Ul
            items={[
              "One vacant bed for three months",
              "A caregiver wage increase",
              "Additional awake-night coverage",
              "A major appliance, roof, plumbing, or accessibility repair",
              "A delayed reimbursement",
              "A resident whose needs increase faster than the payment rate",
            ]}
          />
          <p>
            Financial stability is part of resident protection. A home under severe financial stress has fewer options when
            staffing or property problems arise.
          </p>
        </>
      ),
    },
  },
  {
    n: 10,
    title: "Prepare for inspections every day",
    do: {
      heading: "Build self-auditing into normal operations",
      kind: "bp",
      body: (
        <>
          <p>
            The best time to find a missing document, expired credential, unsafe condition, or outdated care plan is before
            it affects a resident or appears in an inspection. Set a recurring review schedule for:
          </p>
          <Ul
            items={[
              "Resident assessments and negotiated care plans",
              "Medication records",
              "Caregiver qualifications and training",
              "Background checks",
              "Emergency drills and supplies",
              "Incident and mandatory-reporting documentation",
              "Water temperature and environmental safety",
              "Food storage and sanitation",
              "Bedrooms, exits, alarms, grab bars, and pathways",
              "Policies, agreements, postings, and required notices",
              "Insurance and business records",
            ]}
          />
          <p>
            DSHS publishes tables of the WAC and RCW provisions most often cited in AFH inspections and complaint
            investigations; reviewing them shows where homes most often go wrong. See also{" "}
            <L to="/afh-club/regulations-compliance">DSHS Inspections &amp; Compliance</L>.
          </p>
        </>
      ),
    },
    dont: {
      heading: "Hide mistakes or wait for the inspection report",
      kind: "req+bp",
      body: (
        <>
          <p>
            When a problem turns up, protect the resident first, make any required reports, begin correcting it, document
            the response, and work out why the system failed. If a citation is issued, do not treat the plan of correction
            as a writing exercise. A real correction addresses:
          </p>
          <ol className="afhdd-ol">
            <li>What happened</li>
            <li>Which residents may have been affected</li>
            <li>What was corrected immediately</li>
            <li>What system will prevent it happening again</li>
            <li>How the provider will monitor continued compliance</li>
          </ol>
        </>
      ),
    },
  },
  {
    n: 11,
    title: "Report concerns and changes promptly",
    do: {
      heading: "Know what must be reported, to whom, and by when",
      kind: "req",
      body: (
        <>
          <p>
            Providers and caregivers should know how to respond to suspected abuse, neglect, exploitation, injuries,
            missing residents, medication errors, significant changes in condition, and other reportable events.
          </p>
          <p>
            Keep current reporting instructions easy to find. Train staff to protect the resident, get emergency help when
            needed, preserve relevant information, and make required reports without waiting for permission from someone
            who is unavailable.
          </p>
        </>
      ),
    },
    dont: {
      heading: "Delay because the facts are uncomfortable or incomplete",
      kind: "req",
      body: (
        <>
          <p>
            Reporting a concern is not the same as proving exactly what happened. Delayed reporting can increase the risk
            to residents and add regulatory consequences.
          </p>
          <p>
            For an immediate emergency, call 911. Concerns involving vulnerable adults or licensed long-term-care settings
            can also be reported through DSHS (link below).
          </p>
        </>
      ),
    },
  },
  {
    n: 12,
    title: "Communicate clearly with residents and families",
    do: {
      heading: "Set expectations before admission",
      kind: "req+bp",
      body: (
        <>
          <p>Many disputes begin with assumptions nobody discussed. Before admission, explain in writing:</p>
          <Ul
            items={[
              "Services included in the base rate",
              "Charges for additional care or services",
              "Who supplies medications, continence products, equipment, transportation, and personal items",
              "The staffing approach and the provider's availability",
              "House routines and resident choices",
              "How changing needs and rates are handled",
              "How concerns and grievances should be raised",
              "Payment, notice, transfer, and discharge provisions",
            ]}
          />
          <p>
            Keep talking after admission. A short, timely conversation about a change in condition is usually better than
            letting confusion grow.
          </p>
        </>
      ),
    },
    dont: {
      heading: "Overpromise to secure an admission",
      kind: "bp+law",
      body: (
        <>
          <p>
            Marketing should accurately describe the home's current license, capacity, specialties, staffing, physical
            features, and services. Do not guarantee outcomes or imply clinical services the home is not authorized or
            prepared to deliver. Trust is easier to keep when expectations are accurate from the start.
          </p>
        </>
      ),
    },
  },
  {
    n: 13,
    title: "Build relationships with qualified professionals",
    do: {
      heading: "Recognize when outside expertise is needed",
      kind: "bp",
      body: (
        <>
          <p>An AFH provider does not have to do every business task alone. Useful independent professionals may include:</p>
          <Ul
            items={[
              "Bookkeepers, payroll specialists, and CPAs",
              "Business and long-term-care insurance professionals",
              "Attorneys familiar with employment, contracts, resident rights, and long-term care",
              "Registered nurses and nurse delegators",
              "Caregiver recruiting and placement companies",
              "Contractors and accessibility specialists",
              "Professional house cleaners and infection-control resources",
              "Real estate brokers and appraisers experienced with AFH properties",
              "Lenders familiar with licensed care homes",
              "Website developers and marketing professionals",
            ]}
          />
          <p>
            Choose on relevant experience, credentials, scope of work, communication, and fit, not only on price or a
            referral. <L to="/afh-club/find-a-professional">AFH Club Featured Professionals</L> lists people who work with
            adult family homes.
          </p>
        </>
      ),
    },
    dont: {
      heading: "Assume a professional's ordinary experience includes AFHs",
      kind: "bp",
      body: (
        <>
          <p>
            Adult family homes combine residential real estate, healthcare, employment, licensing, and small-business
            issues. A professional who is excellent in a general field may still be unfamiliar with AFH-specific concerns.
            Ask how much AFH work they have handled, verify credentials independently, get written engagement terms, and
            be clear about who is responsible for each task.
          </p>
        </>
      ),
    },
  },
  {
    n: 14,
    title: "Have a succession and exit plan",
    do: {
      heading: "Plan for incapacity, absence, sale, and closure",
      kind: "req+bp",
      body: (
        <>
          <p>
            Washington requires every AFH to keep a written plan for how the home will keep meeting the licensing rules
            and caring for residents if the provider or entity representative cannot fulfill their duties, and to make it
            available to DSHS on request. An effective plan identifies:
          </p>
          <Ul
            items={[
              "Who has temporary decision-making authority",
              "Who can reach essential records and accounts",
              "How staffing and payroll will continue",
              "How residents, representatives, DSHS, and others will be notified",
              "Where licenses, policies, insurance, contracts, and emergency contacts are kept",
              "How medications, food, utilities, and essential services will continue",
              "What happens if the provider cannot return",
            ]}
          />
          <p>Review the plan whenever personnel, ownership, banking, insurance, or contact information changes.</p>
        </>
      ),
    },
    dont: {
      heading: "Assume the license or operation can simply pass to someone else",
      kind: "req",
      body: (
        <>
          <p>
            An AFH license is not transferable. Selling the property, selling business assets, changing the controlling
            entity, or handing over management can trigger change-of-ownership requirements, and current owners must give
            the required notices to DSHS, residents, and representatives.
          </p>
          <p>
            Start planning well before the target transfer date. The real estate closing, business transfer, resident
            continuity, contracts, financing, and the buyer's licensing timeline all have to line up. See{" "}
            <L to="/afh-club/buying-selling">Buying or Selling an AFH</L> and{" "}
            <L to="/afh-club/selling-your-business-at-retirement">Selling Your AFH Business at Retirement</L>.
          </p>
        </>
      ),
    },
  },
];

const CHECKLIST: { group: string; items: string[] }[] = [
  {
    group: "Residents and care",
    items: [
      "Review every assessment and negotiated care plan.",
      "Confirm that actual care matches the written care plans.",
      "Identify changes in condition and unresolved medical instructions.",
      "Verify emergency contacts, representatives, and healthcare providers.",
      "Confirm that rates and agreements match the services being provided.",
    ],
  },
  {
    group: "Staffing",
    items: [
      "Audit personnel files, training, credentials, and background checks.",
      "Watch caregivers perform resident-specific tasks.",
      "Test the call-out and emergency-coverage process.",
      "Review overtime, scheduling gaps, and nighttime workload.",
      "Talk with each caregiver individually about recurring problems.",
    ],
  },
  {
    group: "Medications and documentation",
    items: [
      "Reconcile medication orders, supplies, and logs.",
      "Verify storage, security, disposal, and refill procedures.",
      "Review recent incident reports and their follow-up.",
      "Check that daily documentation is complete and meaningful.",
      "Confirm nurse-delegation requirements and records.",
    ],
  },
  {
    group: "Property and safety",
    items: [
      "Walk every exit and evacuation path.",
      "Test alarms and review drill records.",
      "Check water temperatures and hazards residents can reach.",
      "Review emergency food, water, lighting, and medication plans.",
      "Create a prioritized maintenance and capital-repair schedule.",
    ],
  },
  {
    group: "Business operations",
    items: [
      "Set up separate banking and bookkeeping.",
      "Review insurance coverage with an experienced professional.",
      "Calculate the actual cost of each occupied bed.",
      "Build a cash-flow forecast and an operating reserve.",
      "Review vendor contracts, referral arrangements, payroll, and tax obligations.",
    ],
  },
];

const QUESTIONS = [
  "Am I prepared to be responsible for resident care and safety at all hours, even when I am not in the home?",
  "Can I calmly handle falls, behavioral incidents, family complaints, staffing emergencies, and deaths?",
  "Do I have enough capital to survive vacancies, delays, repairs, and higher-than-expected staffing costs?",
  "Am I comfortable supervising employees and addressing poor performance promptly?",
  "Can I follow detailed rules and keep records consistently, even when the home is busy?",
  "Will my family accept the loss of privacy and the lifestyle changes of operating in a residence?",
  "Do I understand which residents the home can safely serve, and when to decline an admission?",
  "Do I have dependable backup leadership and caregiver coverage?",
  "Am I willing to ask for professional help rather than improvise outside my expertise?",
  "Would I be comfortable having someone I love receive care under the systems I plan to use?",
];

const SOURCES: { label: string; href: string }[] = [
  { label: "DSHS: Information for Adult Family Home Providers", href: "https://www.dshs.wa.gov/adult-and-aging-services/information-long-term-care-professionals-and-providers/residential-care-services/information-adult-family-home-providers" },
  { label: "DSHS: Information for Prospective AFH Providers", href: "https://www.dshs.wa.gov/information-afh-prospective-providers" },
  { label: "DSHS: What You Need to Know Before Becoming a Licensed AFH Provider", href: "https://www.dshs.wa.gov/sites/default/files/ALTSA/rcs/documents/afh/information/AFH%20Information%20Sheet%20-%20What%20You%20Need%20to%20Understand.pdf" },
  { label: "Chapter 388-76 WAC: Adult Family Home Minimum Licensing Requirements", href: "https://app.leg.wa.gov/WAC/default.aspx?cite=388-76" },
  { label: "WSR 26-17-004: amendments effective September 20, 2026 (drills, records, door widths)", href: "https://lawfilesext.leg.wa.gov/law/wsr/2026/17/26-17-004.htm" },
  { label: "DSHS: Residential Care Services Tables and Charts", href: "https://www.dshs.wa.gov/adult-and-aging-services/information-long-term-care-professionals-and-providers/residential-care-services/residential-care-services-tables-and-charts" },
  { label: "DSHS: Report Concerns Involving Vulnerable Adults", href: "https://www.dshs.wa.gov/altsa/home-and-community-services/report-concerns-involving-vulnerable-adults" },
  { label: "DSHS: Adult Family Home Locator", href: "https://fortress.wa.gov/dshs/adsaapps/lookup/AFHPubLookup.aspx" },
];

const FAQS = [
  {
    question: "How often must a Washington adult family home run evacuation drills?",
    answer:
      "Partial evacuation drills on random staffing shifts at least every two months, with each resident taking part in at least one each calendar year, and a full evacuation drill at least once each calendar year with all residents together (WAC 388-76-10895, as amended effective September 20, 2026). Drills are required even when no residents live in the home.",
  },
  {
    question: "Does an adult family home license transfer when the home is sold?",
    answer:
      "No. The license belongs to the provider and the address on it and cannot be transferred. A buyer must apply for and receive a new license through the change-of-ownership process before operating.",
  },
  {
    question: "Must a caregiver always be in the home?",
    answer:
      "Washington requires at least one qualified caregiver to be present whenever one or more residents are in the home, with a narrow exception for residents individually assessed as safe to be left alone under a care plan they consent to (WAC 388-76-10200). The home must also have enough staff to meet every resident's needs.",
  },
  {
    question: "What changed for Medicaid residents on January 1, 2026?",
    answer:
      "Every Medicaid resident must have a signed written residency agreement, completed at admission, that commits the home to the transfer and discharge requirements of chapter 70.129 RCW and gives notice of free legal assistance (WAC 388-76-10506, amended again April 30, 2026).",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  url: CANONICAL,
  image: "https://realpropertyplanning.com/afh-dos-and-donts-cover.webp",
  datePublished: "2026-09-27",
  dateModified: "2026-09-27",
  author: articleAuthor,
  publisher: articlePublisher,
  isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
};

/* Page-scoped styles: index.css overrides plain p/li/h2 rules site-wide with
   !important (AGENTS.md section 4), so every rule here is scoped and marked.
   Class names use an "afhdd-" prefix and avoid card/tile/btn/cta. */
const CSS = `
.afhdd { background: #f7f4ef; }
.afhdd .afhdd-wrap { max-width: 800px; margin: 0 auto; }
.afhdd p { font-family: 'DM Sans', sans-serif !important; font-size: 18px !important; line-height: 1.75 !important; color: #1c1917 !important; margin: 0 0 14px !important; }
.afhdd .afhdd-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.2em !important; text-transform: uppercase; color: #7f2028 !important; margin: 0 0 12px !important; }
.afhdd h1.afhdd-h1 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(30px, 4.6vw, 46px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #280a0c !important; margin: 0 0 18px !important; text-wrap: balance; }
.afhdd h2.afhdd-h2 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(24px, 3.4vw, 32px) !important; line-height: 1.2 !important; font-weight: 700 !important; color: #280a0c !important; margin: 0 0 16px !important; text-wrap: balance; }
.afhdd h3.afhdd-h3 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(19px, 2.4vw, 22px) !important; line-height: 1.3 !important; font-weight: 700 !important; color: #1c1917 !important; margin: 0 0 10px !important; }
.afhdd .afhdd-lede { font-size: 20px !important; }
.afhdd .afhdd-three { display: grid; gap: 12px; grid-template-columns: minmax(0, 1fr); margin: 8px 0 20px; }
@media (min-width: 720px) { .afhdd .afhdd-three { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
.afhdd .afhdd-three > div { background: #ffffff; border: 1px solid #ddd6cc; border-top: 4px solid #7f2028; border-radius: 10px; padding: 14px 16px; }
.afhdd .afhdd-three p { font-size: 16px !important; margin: 0 !important; }
.afhdd .afhdd-note { background: #ffffff; border: 1px solid #ddd6cc; border-left: 5px solid #1B3A6B; border-radius: 10px; padding: 16px 20px; }
.afhdd .afhdd-note p { font-size: 16px !important; margin: 0 !important; }
.afhdd .afhdd-toc { list-style: none !important; margin: 0 !important; padding: 0 !important; display: grid; gap: 6px 24px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 720px) { .afhdd .afhdd-toc { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.afhdd .afhdd-toc li { font-family: 'DM Sans', sans-serif; font-size: 17px; line-height: 1.5; margin: 0 !important; }
.afhdd .afhdd-toc a { color: #1c1917 !important; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: #c9c0b4; }
.afhdd section.afhdd-topic { scroll-margin-top: 90px; }
.afhdd .afhdd-pair { display: grid; gap: 14px; }
.afhdd .afhdd-point { background: #ffffff; border: 1px solid #ddd6cc; border-radius: 10px; padding: 18px 20px 8px; }
.afhdd .afhdd-point.is-do { border-left: 6px solid #1d6b43; }
.afhdd .afhdd-point.is-dont { border-left: 6px solid #a3262f; }
.afhdd .afhdd-verb { display: inline-block; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; padding: 3px 10px; border-radius: 4px; margin: 0 0 10px; color: #ffffff; }
.afhdd .is-do .afhdd-verb { background: #1d6b43; }
.afhdd .is-dont .afhdd-verb { background: #a3262f; }
.afhdd .afhdd-kind { font-size: 14px !important; font-weight: 600 !important; color: #4a443e !important; margin: 4px 0 14px !important; letter-spacing: 0.02em; }
.afhdd ul.afhdd-ul, .afhdd ol.afhdd-ol { margin: 0 0 14px !important; padding-left: 24px !important; }
.afhdd ul.afhdd-ul { list-style: disc !important; }
.afhdd ol.afhdd-ol { list-style: decimal !important; }
.afhdd ul.afhdd-ul li, .afhdd ol.afhdd-ol li { font-family: 'DM Sans', sans-serif !important; font-size: 17px !important; line-height: 1.6 !important; color: #1c1917 !important; margin: 0 0 6px !important; }
.afhdd a.afhdd-link { color: #1B3A6B !important; text-decoration: underline !important; text-underline-offset: 3px; }
.afhdd .afhdd-check { display: grid; gap: 14px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 720px) { .afhdd .afhdd-check { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.afhdd .afhdd-check > div { background: #ffffff; border: 1px solid #ddd6cc; border-radius: 10px; padding: 16px 18px 6px; }
.afhdd .afhdd-key { background: #280a0c; border-radius: 12px; padding: 26px 24px; }
.afhdd .afhdd-key p { color: #ffffff !important; }
.afhdd .afhdd-key .afhdd-eyebrow { color: #f0b7bc !important; }
.afhdd .afhdd-cover { width: 100%; max-width: 360px; height: auto; aspect-ratio: 3 / 4; border-radius: 8px; box-shadow: 0 12px 30px rgba(40,10,12,0.22); }
.afhdd .afhdd-hero { display: grid; gap: 28px; align-items: center; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 860px) { .afhdd .afhdd-hero { grid-template-columns: minmax(0, 1fr) 260px; } .afhdd .afhdd-cover { margin: 8px 0; } }
`;

const Section = ({ bg, children, id }: { bg: string; children: React.ReactNode; id?: string }) => (
  <section id={id} className={id ? "afhdd-topic" : undefined} style={{ background: bg, padding: "52px 16px" }}>
    <div className="afhdd-wrap">{children}</div>
  </section>
);

const PointBlock = ({ p, verb }: { p: Point; verb: "Do" | "Don't" }) => (
  <div className={`afhdd-point ${verb === "Do" ? "is-do" : "is-dont"}`}>
    <span className="afhdd-verb">{verb}</span>
    <h3 className="afhdd-h3">{p.heading}</h3>
    <p className="afhdd-kind">{KIND_LABEL[p.kind]}</p>
    {p.body}
  </div>
);

const AFHDosAndDonts = () => (
  <div className="afhdd">
    <style>{CSS}</style>
    <SEOHead title={`${TITLE} | AFH Club`} description={DESCRIPTION} canonical={CANONICAL} ogType="article" schemaJson={schema} />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "The Dos and Don'ts of Operating an AFH", url: CANONICAL },
      ]}
    />
    <Header />
    <main id="main-content">
      <section style={{ background: "#edf0f3", padding: "56px 16px 48px", borderBottom: "3px solid #b13a44" }}>
        <div className="afhdd-wrap" style={{ maxWidth: 1040 }}>
          <div className="afhdd-hero">
            <div>
              <p className="afhdd-eyebrow">AFH Club · Operator Field Guide · Reviewed September 27, 2026</p>
              <h1 className="afhdd-h1">{TITLE}</h1>
              <p className="afhdd-lede">
                Practical lessons for protecting residents, staying compliant, managing staff, and building an adult family
                home that lasts.
              </p>
            </div>
            <img
              src="/afh-dos-and-donts-cover.webp"
              alt="Operator field guide cover: The Dos and Don'ts of Operating an Adult Family Home"
              className="afhdd-cover"
              width={1024}
              height={1365}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <Section bg="#ffffff">
        <p>
          Operating an adult family home can be deeply rewarding. It can also be physically demanding, emotionally intense,
          highly regulated, and financially unforgiving when important decisions are made too quickly. An adult family
          home is three things at once:
        </p>
        <div className="afhdd-three">
          <div>
            <p>
              <strong>Someone's home.</strong> Residents are entitled to dignity, privacy, choice, safety, and respectful
              treatment.
            </p>
          </div>
          <div>
            <p>
              <strong>A licensed care setting.</strong> The provider must continuously meet Washington's licensing,
              staffing, training, documentation, safety, and resident-care requirements.
            </p>
          </div>
          <div>
            <p>
              <strong>A small business.</strong> It must earn enough to pay caregivers, cover expenses, maintain the
              property, absorb vacancies, and stay financially stable.
            </p>
          </div>
        </div>
        <p>
          A successful operator cannot focus on only one of these. Excellent care without sound finances may not be
          sustainable. A profitable home that does not protect residents or follow its care plans will not stay
          successful. A beautiful property cannot make up for inadequate staffing or poor systems.
        </p>
        <p>
          This guide is for people considering the adult family home business, newly licensed providers, prospective AFH
          buyers, and owners who want to strengthen their operations. New to the subject? Start with{" "}
          <L to="/afh-club/what-is-an-adult-family-home">What Is an Adult Family Home?</L> and{" "}
          <L to="/afh-club/getting-started">Is an Adult Family Home Right for You?</L>
        </p>
        <div className="afhdd-note">
          <p>
            <strong>How to read the labels.</strong> Items marked <strong>Washington requirement</strong> rest on current
            Washington law, rules, or DSHS guidance, checked on September 27, 2026, including the rule changes that took
            effect September 20, 2026. Items marked <strong>operating best practice</strong> are practical recommendations,
            not necessarily legal requirements. Rules change; confirm current requirements with DSHS, your local building
            department, and qualified legal, accounting, insurance, and healthcare professionals.
          </p>
        </div>
      </Section>

      <Section bg="#f7f4ef">
        <h2 className="afhdd-h2">The fourteen topics</h2>
        <ol className="afhdd-toc">
          {TOPICS.map((t) => (
            <li key={t.n}>
              <a href={`#topic-${t.n}`}>
                {t.n}. {t.title}
              </a>
            </li>
          ))}
        </ol>
      </Section>

      {TOPICS.map((t, i) => (
        <Section key={t.n} bg={i % 2 === 0 ? "#ffffff" : "#f7f4ef"} id={`topic-${t.n}`}>
          <h2 className="afhdd-h2">
            {t.n}. {t.title}
          </h2>
          <div className="afhdd-pair">
            <PointBlock p={t.do} verb="Do" />
            <PointBlock p={t.dont} verb="Don't" />
          </div>
        </Section>
      ))}

      <Section bg="#ffffff">
        <h2 className="afhdd-h2">A first-90-days checklist for a new operator</h2>
        <p>The first several months should focus on reliable systems rather than rapid expansion.</p>
        <div className="afhdd-check">
          {CHECKLIST.map((c) => (
            <div key={c.group}>
              <h3 className="afhdd-h3">{c.group}</h3>
              <Ul items={c.items} />
            </div>
          ))}
        </div>
      </Section>

      <Section bg="#f7f4ef">
        <h2 className="afhdd-h2">Ten questions to ask yourself before operating an AFH</h2>
        <ol className="afhdd-ol">
          {QUESTIONS.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ol>
        <p>
          Honest uncertainty does not necessarily mean you should abandon the idea. It means you have found the areas that
          need more experience, preparation, capital, or support before moving forward.
        </p>
      </Section>

      <Section bg="#ffffff">
        <div className="afhdd-key rpp-dark-surface">
          <p className="afhdd-eyebrow">The most important “do”</p>
          <p style={{ fontSize: 22 }}>
            <strong>Build the operation around the residents you can safely and consistently serve.</strong>
          </p>
          <p>
            A strong adult family home is not defined by filling every bed as fast as possible. It is built on careful
            admissions, supported caregivers, reliable medication and documentation systems, protected resident rights, a
            maintained property, and financially sustainable decisions.
          </p>
          <p style={{ marginBottom: 0 }}>
            The best operators do not expect perfection. They build systems that reveal problems early, respond honestly,
            protect residents first, and improve the home over time.
          </p>
        </div>
      </Section>

      <Section bg="#f7f4ef">
        <h2 className="afhdd-h2">Official Washington sources</h2>
        <ul className="afhdd-ul">
          {SOURCES.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="afhdd-link">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p style={{ fontSize: 16 }}>
          Rule citations used: WAC 388-76-10200 (caregiver present), -10195 (staffing), -10201 (succession
          plan), -10315 and -10320 (resident records), -10475 (medication log), -10506 (Medicaid residency agreement), -10715 (door widths),
          -10830 and -10855 (emergency plan and training), and -10895 (evacuation drills).
        </p>
        <p style={{ fontSize: 16, marginBottom: 0 }}>
          This article is educational and is not legal, accounting, medical, licensing, insurance, or employment advice.
          Requirements change, and every home and resident is different. Confirm current requirements with the appropriate
          agencies and qualified professionals.
        </p>
      </Section>

      <PageFAQ faqs={FAQS} heading="Operating an AFH: Common Questions" eyebrow="Frequently Asked Questions" id="afh-dos-donts" />
    </main>
    <AuthorByline />
    <BackToAFHClub />
    <CTASection />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default AFHDosAndDonts;
