/**
 * How to choose an adult family home (Question Map step 7, Oct 4, 2026;
 * audit questions Q216 and Q217: the touring checklist and the side-by-side
 * comparison, built as one page).
 *
 * Facts checked Oct 4, 2026:
 *   - RCW 70.128.010   two to six residents; up to eight with DSHS approval
 *                      under RCW 70.128.066 (already stated on the site)
 *   - RCW 70.128.130   the provider or a qualified resident manager lives in
 *                      the home; a qualified caregiver is on site whenever a
 *                      resident is home
 *   - RCW 70.128.080   the license and the last three years of DSHS inspection
 *                      reports must be readily available to residents and the
 *                      public
 *   - RCW 70.128.200   the DSHS complaint number must be posted where
 *                      residents and visitors can see it
 *   - RCW 70.128.280   the home's Disclosure of Services (DSHS 10-508). Section
 *                      headings read from the form itself: about the home,
 *                      personal care, medication services, skilled nursing and
 *                      nurse delegation, specialty care designations, staffing,
 *                      cultural or language access, Medicaid, activities
 *   - RCW 70.128.125 / 70.129.110  residents' rights apply; transfer or
 *                      discharge only for the listed reasons, normally with 30
 *                      days' written notice
 *   - Private-pay care levels are set by each home (AFH payment field guide)
 *   - The Locator's three-year window and the complaint line repeat
 *     /afh-club/violation-history-lookup
 * The page endorses no home and no provider. Keep it that way.
 */
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToLongTermCare from "@/components/BackToLongTermCare";
import AuthorByline from "@/components/AuthorByline";
import NextQuestions from "@/components/NextQuestions";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import { DSHS_LOCATOR_URL } from "@/data/afh/inspectionRecord";

const URL = "https://realpropertyplanning.com/senior-living/choosing-an-adult-family-home";
const rcw = (cite: string) => `https://app.leg.wa.gov/RCW/default.aspx?cite=${cite}`;

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose an Adult Family Home in Washington",
  description:
    "A Washington family's guide to choosing an adult family home: building a shortlist, reading the DSHS record, what to ask on a tour, and a worksheet for comparing two homes side by side.",
  url: URL,
  datePublished: "2026-10-04",
  dateModified: "2026-10-04",
  author: articleAuthor,
  publisher: articlePublisher,
  isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
};

/** The tour questions, grouped. Also the rows of the comparison worksheet. */
const TOUR: { group: string; questions: string[] }[] = [
  {
    group: "Who lives here, and who cares for them",
    questions: [
      "How many residents live here now, and how many is the home licensed for?",
      "Does the provider live here, or a resident manager? Who is in charge when they are away?",
      "How many caregivers are on duty during the day, and how many overnight? Are they awake at night?",
      "Which specialty designations does the home hold: dementia, mental health, developmental disabilities?",
      "What languages do the caregivers speak?",
    ],
  },
  {
    group: "Care and health",
    questions: [
      "Can the home meet my parent's needs today, and what happens as those needs grow?",
      "Does the home work with a delegating nurse, so caregivers can help with tasks such as insulin or wound care?",
      "How are medications handled, and who manages refills?",
      "How does the home respond to a fall, and to a return from the hospital?",
      "Has the home cared for residents on hospice, and which hospice agencies has it worked with?",
    ],
  },
  {
    group: "Money",
    questions: [
      "What is the private-pay base rate, and what does each care level add? Which level would my parent start at?",
      "What raises the rate, and how much notice do you give before it changes?",
      "Is there a deposit or move-in fee, and when is it refundable?",
      "Does the home have a Medicaid contract? If my parent's savings run out, can they stay on Medicaid?",
    ],
  },
  {
    group: "Daily life",
    questions: [
      "What does a normal day look like? Can we visit at a mealtime?",
      "Can my parent bring their own furniture, keep their routines and have visitors when they like?",
      "What activities are offered, and how often do residents get outside?",
    ],
  },
  {
    group: "Paperwork to ask for",
    questions: [
      "The home's Disclosure of Services (DSHS form 10-508).",
      "The last three years of DSHS inspection reports, which the home must have available.",
      "A copy of the admission agreement to read before signing, including the rate sheet and the discharge terms.",
    ],
  },
];

const COMPARE_ROWS = [
  "Location and drive time for the family",
  "Residents now / licensed capacity",
  "Provider or resident manager living in the home",
  "Caregivers on duty day / night (awake at night?)",
  "Specialty designations",
  "Nurse delegation available",
  "Medicaid contract; can a private-pay resident stay on Medicaid?",
  "Private-pay base rate + care level for my parent",
  "Deposit or fees; notice before rate changes",
  "DSHS record, last three years: what was cited, how corrected",
  "What the Disclosure of Services says the home cannot do",
  "Languages spoken",
  "What we saw at the mealtime visit",
  "How my parent felt there",
];

const CSS = `
.cafh { font-family: 'DM Sans', system-ui, sans-serif; color: #1c1917; }
.cafh-hero { background: #edf0f3; padding: 56px 20px 48px; border-bottom: 3px solid #b13a44; }
.cafh-wrap { max-width: 780px; margin: 0 auto; }
.cafh-eyebrow.cafh-eyebrow { font-size: 14px !important; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: #481216 !important; margin: 0 0 14px !important; }
.cafh h1.cafh-h1 { font-size: clamp(32px, 5vw, 48px) !important; font-weight: 700; color: #292521 !important; line-height: 1.15; margin: 0 0 18px !important; text-wrap: balance; }
.cafh h2.cafh-h2 { font-size: clamp(25px, 3.4vw, 34px) !important; font-weight: 700; color: #280a0c !important; line-height: 1.2; margin: 0 0 16px !important; }
.cafh h3.cafh-h3 { font-size: 20px !important; font-weight: 700; color: #292521 !important; margin: 26px 0 10px !important; }
.cafh p { font-size: 18px; line-height: 1.75; margin: 0 0 16px; }
.cafh-sec { padding: 52px 20px; background: #ffffff; }
.cafh-sec.alt { background: #f7f4ef; }
.cafh a { color: #9e1f2b; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
.cafh-answer { background: #fff; border-left: 5px solid #b13a44; border-radius: 10px; padding: 18px 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
.cafh-answer p { margin: 0; font-size: 18px; }
.cafh-steps { list-style: none; counter-reset: s; margin: 18px 0; padding: 0; display: grid; gap: 12px; }
.cafh-steps li { counter-increment: s; position: relative; background: #fff; border: 1px solid #e3d9cc; border-radius: 10px; padding: 16px 20px 16px 58px; font-size: 17px; line-height: 1.6; }
.cafh-steps li::before { content: counter(s); position: absolute; left: 16px; top: 15px; width: 28px; height: 28px; border-radius: 999px; background: #481216; color: #fff; font-weight: 700; font-size: 15px; display: flex; align-items: center; justify-content: center; }
.cafh-group { background: #fff; border: 1px solid #e3d9cc; border-top: 4px solid #481216; border-radius: 12px; padding: 18px 22px 8px; margin: 0 0 16px; }
.cafh-group h3.cafh-h3 { margin-top: 0 !important; }
.cafh-check { list-style: none; margin: 0; padding: 0; }
.cafh-check li { position: relative; padding: 0 0 12px 32px; font-size: 17px; line-height: 1.55; }
.cafh-check li::before { content: ""; position: absolute; left: 0; top: 3px; width: 18px; height: 18px; border: 2px solid #481216; border-radius: 4px; background: #fff; }
.cafh-tablewrap { overflow-x: auto; margin: 18px 0 8px; }
.cafh-table { width: 100%; min-width: 560px; border-collapse: collapse; background: #fff; font-size: 16px; }
.cafh-table th, .cafh-table td { border: 1px solid #d9cfc1; padding: 10px 12px; text-align: left; vertical-align: top; }
.cafh-table thead th { background: #481216; color: #fff; font-weight: 700; }
.cafh-table tbody th { font-weight: 600; width: 40%; background: #faf8f4; }
.cafh-table td { height: 46px; }
.cafh-print { display: inline-flex; align-items: center; gap: 8px; background: #481216; color: #fff; border: 0; border-radius: 8px; padding: 11px 18px; font-size: 16px; font-weight: 700; cursor: pointer; font-family: inherit; }
.cafh-print:hover { background: #2e0b0e; }
.cafh-note { background: #fff; border-left: 5px solid #1f4058; border-radius: 8px; padding: 16px 20px; }
.cafh-src.cafh-src { font-size: 14px !important; color: #3d4a55 !important; line-height: 1.6 !important; }
@media print {
  #root > *:not(#main-content), header, footer, nav, .cafh-noprint { display: none !important; }
  .cafh { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .cafh-sec, .cafh-hero { padding: 16px 0 !important; background: #fff !important; border: 0 !important; }
  .cafh-group, .cafh-table tr { break-inside: avoid; }
  .cafh a { color: #000; text-decoration: none; }
}
`;

const printPage = () => {
  if (typeof window !== "undefined") window.print();
};

const ChoosingAnAdultFamilyHome = () => (
  <>
    <SEOHead
      title="How to Choose an Adult Family Home in Washington: Tour Checklist | Real Property Planning"
      description="A Washington family's guide to choosing an adult family home: building a shortlist, reading the DSHS record, what to ask on a tour, and a worksheet for comparing two homes side by side."
      canonical={URL}
      ogType="article"
      schemaJson={schema}
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Senior Placement", url: "https://realpropertyplanning.com/senior-placement" },
        { name: "Adult Family Homes", url: "https://realpropertyplanning.com/senior-living/adult-family-homes" },
        { name: "Choosing an Adult Family Home", url: URL },
      ]}
    />
    <Header />
    <main id="main-content" className="cafh">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <section className="cafh-hero">
        <div className="cafh-wrap">
          <p className="cafh-eyebrow">For families · Last reviewed October 2026</p>
          <h1 className="cafh-h1">How to Choose an Adult Family Home in Washington</h1>
          <div className="cafh-answer">
            <p>
              Build a shortlist from the state's licensing records, read each home's DSHS inspection record, then visit
              your top two or three, ideally at a mealtime. On the tour, ask who is on duty overnight, which specialty
              designations the home holds, whether it has a Medicaid contract, and exactly what your parent's care
              would cost. Ask for the home's Disclosure of Services and its last three years of inspection reports,
              and compare the homes on the same points before you decide.
            </p>
          </div>
        </div>
      </section>

      <section className="cafh-sec cafh-noprint" style={{ paddingBottom: 0 }}>
        <div className="cafh-wrap" style={{ textAlign: "center" }}>
          <img
            src="/afh-choosing-a-home-cover.webp"
            alt="How to Choose an Adult Family Home: a tour checklist for Washington families. Build a shortlist, read the record, what to ask on the tour, compare two homes."
            style={{ maxWidth: 340, width: "100%", height: "auto", borderRadius: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
            loading="lazy"
            decoding="async"
            width={1024}
            height={1365}
          />
        </div>
      </section>

      <section className="cafh-sec">
        <div className="cafh-wrap">
          <h2 className="cafh-h2" id="shortlist">1. Build a shortlist</h2>
          <p>
            An adult family home is a licensed private house caring for two to six residents, or up to eight with
            DSHS approval. Washington has thousands of them, so start by narrowing on the things that rule a home in or
            out:
          </p>
          <ol className="cafh-steps">
            <li>
              <strong>Location.</strong> Close enough that family can visit often. Visits are how you see the care.
            </li>
            <li>
              <strong>Care needs.</strong> If your parent has dementia, a mental health condition or a developmental
              disability, look for a home with that specialty designation, which means its staff completed the DSHS
              training for it.
            </li>
            <li>
              <strong>How care will be paid for.</strong> If Medicaid pays now, or may within a few years, the home
              needs a Medicaid contract.
            </li>
          </ol>
          <p>
            This site's <Link to="/afh-club/homes">directory of licensed homes</Link> lists every home by city and
            county with its capacity, specialty designations and Medicaid status from DSHS records, and the{" "}
            <a href={DSHS_LOCATOR_URL} target="_blank" rel="noopener noreferrer">
              DSHS Adult Family Home Locator
            </a>{" "}
            is the state's own search. Then call: openings change week to week, and a five-minute call tells you
            whether a visit is worth it.
          </p>
        </div>
      </section>

      <section className="cafh-sec alt">
        <div className="cafh-wrap">
          <h2 className="cafh-h2" id="record">2. Read the record before you visit</h2>
          <p>
            Every licensed home's inspections, complaint investigations and enforcement letters are public. The DSHS
            Locator shows limits and enforcement from the previous three years, and the home itself must keep its last
            three years of inspection reports available for anyone to read. A citation is not automatically a red
            flag: look at how serious it was, whether it was repeated, and how the home corrected it.{" "}
            <Link to="/afh-club/violation-history-lookup">How to look up and read a home's DSHS record</Link>.
          </p>
          <p>
            Ask each home for its <strong>Disclosure of Services</strong> (DSHS form 10-508). It is the home's own
            statement of what it does: personal care, medication help, nursing and nurse delegation, specialty
            designations, staffing, languages, Medicaid and activities. What it says the home does <em>not</em> do
            matters as much as what it does.
          </p>
        </div>
      </section>

      <section className="cafh-sec">
        <div className="cafh-wrap">
          <h2 className="cafh-h2" id="tour-questions">3. What to ask on the tour</h2>
          <p>
            Washington law requires the provider or a qualified resident manager to live in the home, and a qualified
            caregiver to be on site whenever a resident is there. Everything else varies from home to home, which is
            why these questions matter.
          </p>
          <p className="cafh-noprint">
            <button type="button" className="cafh-print" onClick={printPage}>
              Print this checklist and worksheet
            </button>
          </p>
          {TOUR.map((g) => (
            <div className="cafh-group" key={g.group}>
              <h3 className="cafh-h3">{g.group}</h3>
              <ul className="cafh-check">
                {g.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
          ))}
          <p>
            On money, get it in writing. Many homes charge private-pay residents a base rate plus a care-level
            charge, and each home defines its own levels, so "Level 3" at one home tells you nothing about Level 3 at
            another. Ask for the total monthly cost at your parent's level of care.{" "}
            <Link to="/adult-family-home-costs">What adult family homes cost</Link>.
          </p>
        </div>
      </section>

      <section className="cafh-sec alt">
        <div className="cafh-wrap">
          <h2 className="cafh-h2" id="compare">4. Compare two homes side by side</h2>
          <p>
            After the visits, homes blur together. Fill in the same facts for each one while they are fresh, then talk
            it through with your parent and whoever will share the visiting.
          </p>
          <div className="cafh-tablewrap">
            <table className="cafh-table">
              <caption className="sr-only">Worksheet for comparing two adult family homes</caption>
              <thead>
                <tr>
                  <th scope="col">What to compare</th>
                  <th scope="col">Home A</th>
                  <th scope="col">Home B</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((r) => (
                  <tr key={r}>
                    <th scope="row">{r}</th>
                    <td />
                    <td />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            A home with one old, corrected citation and an owner who explains it openly may be a better choice than a
            home with a clean page and vague answers. Trust what you saw at the mealtime visit, and how your parent
            felt there.
          </p>
        </div>
      </section>

      <section className="cafh-sec">
        <div className="cafh-wrap">
          <h2 className="cafh-h2" id="after-move-in">5. After the move: your parent's rights</h2>
          <p>
            Residents of adult family homes have the rights set out in Washington's long-term care residents' rights
            law. A home may move a resident out only for set reasons, such as needs the home can no longer meet, a
            danger to others, unpaid charges or the home closing, and normally with at least 30 days' written notice.
            Read the admission agreement's discharge terms before signing.
          </p>
          <p className="cafh-note">
            <strong>If something is wrong:</strong> call 911 in an emergency. Concerns about care go to the DSHS
            Complaint Resolution Unit at 1-800-562-6078 (TTY 1-800-737-7931); every home must post the complaint
            number where residents and visitors can see it. The Long-Term Care Ombudsman Program offers free,
            independent help to residents and families.
          </p>
          <p className="cafh-src">
            Sources: <a href={rcw("70.128.010")} target="_blank" rel="noopener noreferrer">RCW 70.128.010</a>{" "}
            (capacity); <a href={rcw("70.128.130")} target="_blank" rel="noopener noreferrer">RCW 70.128.130</a>{" "}
            (provider or resident manager in the home; caregiver on site);{" "}
            <a href={rcw("70.128.080")} target="_blank" rel="noopener noreferrer">RCW 70.128.080</a> (inspection
            reports available); <a href={rcw("70.128.200")} target="_blank" rel="noopener noreferrer">RCW 70.128.200</a>{" "}
            (complaint number posted); <a href={rcw("70.128.280")} target="_blank" rel="noopener noreferrer">RCW 70.128.280</a>{" "}
            (Disclosure of Services); <a href={rcw("70.129.110")} target="_blank" rel="noopener noreferrer">RCW 70.129.110</a>{" "}
            (transfer and discharge). This site does not rate, rank or recommend individual homes.
          </p>
        </div>
      </section>

      <div className="cafh-noprint">
        <NextQuestions />
      </div>
    </main>
    <AuthorByline context="care" />
    <BackToLongTermCare />
    <DisclaimerSection />
    <Footer />
  </>
);

export default ChoosingAnAdultFamilyHome;
