import Header from "@/components/Header";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import AuthorByline from "@/components/AuthorByline";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import PageFAQ from "@/components/PageFAQ";
import { Link } from "react-router-dom";
import { AFH_STATUS_LABELS } from "@/data/afhListings";

const label = {
  fontSize: 15,
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 600,
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "#481216",
  margin: "0 0 14px",
};
const h2 = {
  fontSize: "clamp(24px, 3.5vw, 36px)",
  fontFamily: "'DM Sans', system-ui, sans-serif",
  fontWeight: 700,
  color: "#280a0c",
  lineHeight: 1.2,
  margin: "0 0 20px",
};
const h3 = {
  fontSize: "clamp(19px, 2.5vw, 24px)",
  fontFamily: "'DM Sans', system-ui, sans-serif",
  fontWeight: 700,
  color: "#292521",
  lineHeight: 1.3,
  margin: "28px 0 12px",
};
const body = {
  fontSize: 18,
  fontFamily: "'DM Sans', sans-serif",
  color: "#302b26",
  lineHeight: 1.85,
  margin: "0 0 20px",
};
const li = { ...body, margin: "0 0 10px" };
const sectionLight = { background: "#f7f4ef", padding: "64px 24px" };
const sectionWhite = { background: "#ffffff", padding: "64px 24px" };
const wrap = { maxWidth: 760, margin: "0 auto" };
const badge = {
  display: "inline-block",
  fontSize: "13px",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  color: "#0a5648",
  border: "1px solid #0a5648",
  borderRadius: "4px",
  padding: "4px 10px",
  marginRight: "10px",
  verticalAlign: "middle",
};
const linkStyle = { color: "#1B3A6B", textDecoration: "underline", textUnderlineOffset: "4px" };

const CANONICAL = "https://realpropertyplanning.com/afh-club/afh-property-classifications";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is It Really an Adult Family Home? How to Read AFH Listings in Washington",
  description:
    "What 'adult family home', 'AFH-ready', 'WABO-approved' and 'potential AFH' actually mean in a Washington real estate listing, the five labels AFH Club uses, the building requirements behind them, and the documents to request before you buy.",
  url: CANONICAL,
  datePublished: "2026-09-13",
  dateModified: "2026-09-13",
  author: articleAuthor,
  publisher: articlePublisher,
  isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
};

const FAQS = [
  {
    question: "Does 'WABO-approved' mean the home is a licensed adult family home?",
    answer:
      "No. WABO is a professional association that co-wrote the inspection checklist with DSHS; the local building official performs the inspection. A passed checklist confirms the building met the code requirements at the time of inspection. Only DSHS issues the license, and it issues it to a specific provider at a specific address.",
  },
  {
    question: "If I buy an operating adult family home, does the license come with it?",
    answer:
      "No. The license belongs to the provider and the address together. A buyer applies for their own license through the DSHS Change of Ownership process and must be approved before operating. The seller's license ends at closing.",
  },
  {
    question: "How can I check a listing's claim myself?",
    answer:
      "Look the address up in the DSHS Adult Family Home Locator (linked on this page) or in AFH Club's licensed-home directory. If it is not there, it is not currently licensed, whatever the listing says. Then ask the listing broker for the signed building inspection checklist and the floor plan that went with it.",
  },
  {
    question: "Why does AFH Club use five labels instead of the broker's description?",
    answer:
      "Because the broker's description is marketing. Each listing on AFH Club is labelled by what the record actually supports: currently operating, licensed with no residents, formerly licensed, passed the building inspection but never licensed, or marketed as a potential AFH with nothing verified.",
  },
];

const AFHPropertyClassifications = () => (
  <>
    <SEOHead
      title="Is It Really an Adult Family Home? How to Read AFH Listings | AFH Club"
      description="What 'adult family home', 'AFH-ready', 'WABO-approved' and 'potential AFH' actually mean in a Washington listing, the five labels AFH Club uses, the building requirements behind them, and the documents to request before you buy."
      canonical={CANONICAL}
      ogType="article"
      schemaJson={schema}
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Is It Really an Adult Family Home?", url: CANONICAL },
      ]}
    />
    <Header />
    <main id="main-content">
      <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b13a44" }}>
        <div style={wrap}>
          <p style={label}>AFH Club · Buyer's Guide · Last reviewed September 2026</p>
          <h1
            style={{
              fontSize: "clamp(30px, 4.5vw, 46px)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "#1B3A6B",
              lineHeight: 1.15,
              margin: "0 0 20px",
            }}
          >
            Is It Really an Adult Family Home? How to Read AFH Listings in Washington
          </h1>
          <p style={{ ...body, fontSize: 20, margin: 0 }}>
            Brokers write "adult family home," "AFH-ready," "WABO-approved," and "potential AFH" into listings for
            houses that range from a fully licensed, occupied care home to an ordinary four-bedroom with wide hallways.
            None of those phrases is a legal status. This guide explains the two approvals that actually matter, the
            five labels AFH Club puts on every listing, and what to ask for before you rely on any of it.
          </p>
        </div>
      </section>

      <section style={sectionWhite}>
        <div style={wrap}>
          <div style={{ padding: 24, border: "1px solid #e5e5e5", borderRadius: 12, background: "#fafafa", marginBottom: 32 }}>
            <p style={{ ...label, margin: "0 0 8px" }}>Quick answer</p>
            <h2 style={{ ...h2, fontSize: "clamp(20px, 3vw, 26px)", margin: "0 0 10px" }}>
              What makes a house a licensed adult family home in Washington?
            </h2>
            <p style={{ ...body, margin: 0 }}>
              Two separate approvals. First, the local city or county building official inspects the house against the
              Adult Family Home Local Building Inspection Checklist that the Washington Association of Building Officials
              (WABO) developed with DSHS, and signs it as passed. Second, DSHS licenses a qualified provider to operate an
              adult family home at that address. A house with enough bedrooms, a ramp, or grab bars has neither approval
              until those two things have happened, and a passed inspection alone is not a license.
            </p>
          </div>

          <h2 style={h2}>Two approvals, not one</h2>
          <h3 style={h3}>1. Building approval</h3>
          <p style={body}>
            The local building department inspects the property using the WABO/DSHS checklist, which implements Section
            R330 of Washington's residential code. It covers resident bedrooms and their exit routes, emergency escape
            windows, doors and hardware, ramps, stairs, bathrooms, alarms, and fire access. The inspector signs the
            checklist "passed," and that signed form, with the floor plan it was based on, is the proof. WABO itself does
            not inspect homes.
          </p>
          <h3 style={h3}>2. Operating license</h3>
          <p style={body}>
            DSHS licenses the provider, not the house. The license names the provider, the address, and the resident
            capacity. It never transfers with the deed or with a business sale: a buyer applies through the Change of
            Ownership process and must be approved before caring for a single resident.
          </p>
          <p style={{ ...body, margin: 0 }}>
            The technical detail behind the building inspection is in the{" "}
            <Link to="/afh-club/wabo-technical-guide" style={linkStyle}>
              WABO checklist guide
            </Link>
            ; the licensing side is in{" "}
            <Link to="/afh-club/licensing-certification" style={linkStyle}>
              Licensing &amp; Certification
            </Link>
            .
          </p>
        </div>
      </section>

      <section style={sectionLight}>
        <div style={wrap}>
          <h2 style={h2}>The five labels on every AFH Club listing</h2>
          <p style={body}>
            Every property in the{" "}
            <Link to="/afh-club/listings" style={linkStyle}>
              AFH Club directory
            </Link>{" "}
            and every closed sale on the{" "}
            <Link to="/afh-club/sold" style={linkStyle}>
              sold page
            </Link>{" "}
            carries one of these labels, assigned from the listing record and the DSHS locator rather than from the
            broker's adjectives.
          </p>

          <h3 style={h3}>
            <span style={badge}>{AFH_STATUS_LABELS.operating}</span>
          </h3>
          <p style={body}>
            Licensed by DSHS and caring for residents today. The address appears in the DSHS locator. What conveys
            depends on the deal: the real estate alone, the operating business alone, or both together. The label on
            the listing says which. The buyer still relicenses through Change of Ownership.
          </p>

          <h3 style={h3}>
            <span style={badge}>{AFH_STATUS_LABELS.licensedNotOperating}</span>
          </h3>
          <p style={body}>
            Holds a current license but has no residents. The building has passed inspection and DSHS has approved the
            address, but there is no census and no income to underwrite. A buyer relicenses and starts from zero.
          </p>

          <h3 style={h3}>
            <span style={badge}>{AFH_STATUS_LABELS.former}</span>
          </h3>
          <p style={body}>
            Operated as a licensed home in the past; no license today. The inspected floor plan may have changed,
            later work may not have been permitted, and the checklist has been revised over the years. Expect a new
            inspection, and possibly new work, before relicensing.
          </p>

          <h3 style={h3}>
            <span style={badge}>{AFH_STATUS_LABELS.afhReady}</span>
          </h3>
          <p style={body}>
            The owner can produce a signed building inspection checklist, but the home has never been licensed. It is
            a house built or converted to AFH code, not a care business. Ask for the checklist and the floor plan it
            references, and confirm nothing has changed since.
          </p>

          <h3 style={h3}>
            <span style={badge}>{AFH_STATUS_LABELS.opportunity}</span>
          </h3>
          <p style={{ ...body, margin: 0 }}>
            The listing describes the house as suitable for, or convertible to, an adult family home, and nothing in
            the record supports more than that. This is a marketing description. The buyer takes on the whole
            conversion: modifications, permits, the building inspection, and DSHS licensing. On the sold page, sales
            with only this description are excluded from the price statistics.
          </p>
        </div>
      </section>

      <section style={sectionWhite}>
        <div style={wrap}>
          <h2 style={h2}>The requirements behind the labels, in numbers</h2>
          <p style={body}>
            These are the checklist and licensing items that most often decide whether a house can become an adult
            family home. They are a practical summary, not a substitute for the inspection.
          </p>

          <h3 style={h3}>Resident bedrooms</h3>
          <ul style={{ paddingLeft: 24 }}>
            <li style={li}>An outside room with natural light, and direct access to the common areas and bathrooms.</li>
            <li style={li}>At least 80 square feet of usable floor area for one resident, 120 for two; closets and vestibules don't count. No more than two residents per room.</li>
            <li style={li}>A smoke alarm in the room, a door that can be opened from outside if locked, and clothing storage.</li>
            <li style={li}>An emergency escape window: sill no higher than 44 inches, clear opening at least 5.7 square feet (5.0 at grade), at least 24 inches high and 20 inches wide, openable without a key or tool. Steps or furniture under the window don't fix a high sill.</li>
            <li style={li}>A DSHS licensor will also expect resident bedroom doorways of at least 27 inches; this is a Residential Care Services practice rather than a code line, so it does not appear on the building checklist.</li>
          </ul>

          <h3 style={h3}>Bedroom evacuation type</h3>
          <p style={body}>
            Each resident bedroom is classified by its exit route. <strong>Type S</strong>: the route includes stairs, an
            elevator, or a platform lift. <strong>Type NS1</strong>: one route is at grade or served by a compliant ramp.{" "}
            <strong>Type NS2</strong>: two routes are. The type limits which residents can safely occupy the room, so a
            large basement bedroom is not automatically a resident bedroom.
          </p>

          <h3 style={h3}>Doors, ramps, stairs</h3>
          <ul style={{ paddingLeft: 24 }}>
            <li style={li}>A side-hinged exit door with at least 32 inches of clear width and 78 inches of height.</li>
            <li style={li}>Handles, latches, and locks operable with one hand, without tight grasping, pinching, or twisting; exit and re-entry without a key or special knowledge.</li>
            <li style={li}>Ramps no steeper than 1 inch of rise per 12 inches of run, with 3-by-3-foot landings at the top, bottom, turns, and doors, handrails on both sides, and guards where there is a drop.</li>
            <li style={li}>Stairs with compliant treads and risers and handrails on both sides.</li>
          </ul>

          <h3 style={h3}>Bathrooms</h3>
          <ul style={{ paddingLeft: 24 }}>
            <li style={li}>Doors that open from outside when locked.</li>
            <li style={li}>Grab bars on both sides of the toilet and correctly placed horizontal and vertical bars at tubs and showers, mounted to carry the required load.</li>
            <li style={li}>A shower used to meet the bathing requirement at least 30 inches deep by 48 inches long.</li>
          </ul>

          <h3 style={h3}>Alarms, fire access, common areas</h3>
          <ul style={{ paddingLeft: 24 }}>
            <li style={li}>Smoke alarms on every level, in every resident bedroom, and outside sleeping areas; carbon-monoxide alarms on each required level; all audible throughout the home.</li>
            <li style={li}>Fire-apparatus access and water supply acceptable to the local fire jurisdiction. Homes outside a fire district may face extra verification.</li>
            <li style={li}>Furnished, homelike common areas large enough for all residents at once, and never counted as bedrooms.</li>
          </ul>

          <h3 style={h3}>Seven- and eight-bed homes</h3>
          <p style={{ ...body, margin: 0 }}>
            A standard license allows up to six residents. Approval for seven or eight is a separate DSHS decision that
            weighs the structure, bathroom access, staffing, and the ability to evacuate everyone, and it comes with
            additional operating-history and inspection requirements. Where residents need help evacuating, an automatic
            sprinkler system is required for the higher capacity. Seven bedrooms do not make a seven-bed home.
          </p>
        </div>
      </section>

      <section style={sectionLight}>
        <div style={wrap}>
          <h2 style={h2}>Verify it yourself in five minutes</h2>
          <ol style={{ paddingLeft: 24 }}>
            <li style={li}>
              Search the address in the{" "}
              <a href="https://fortress.wa.gov/dshs/adsaapps/lookup/AFHPubLookup.aspx" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                DSHS Adult Family Home Locator
              </a>{" "}
              or in AFH Club's{" "}
              <Link to="/afh-club/homes" style={linkStyle}>
                licensed-home directory
              </Link>
              . Not listed means not currently licensed.
            </li>
            <li style={li}>
              If it is listed, pull its{" "}
              <Link to="/afh-club/violation-history-lookup" style={linkStyle}>
                DSHS inspection and violation history
              </Link>
              .
            </li>
            <li style={li}>Ask the listing broker for the documents below. A broker for a real AFH will have most of them on hand.</li>
          </ol>

          <h3 style={h3}>Documents to request</h3>
          <ul style={{ paddingLeft: 24 }}>
            <li style={li}>The current DSHS license, showing the provider, address, and approved capacity.</li>
            <li style={li}>The signed Adult Family Home Local Building Inspection Checklist and the floor plan submitted with it.</li>
            <li style={li}>Building permits and final approvals for the AFH-related work.</li>
            <li style={li}>Documentation of any bedroom, exit, ramp, or structural changes since the inspection.</li>
            <li style={li}>The most recent DSHS inspection reports.</li>
            <li style={li}>Written confirmation of whether the real estate, the business assets, and the operating business are sold together or separately, and at what prices.</li>
          </ul>

          <h3 style={h3}>The one thing to remember</h3>
          <p style={{ ...body, margin: 0 }}>
            A Washington adult family home license is valid only for the provider and the address printed on it. It
            cannot be bought, assigned, or transferred with the house or the business. Whatever you purchase, you will
            need DSHS approval of your own before the first resident moves in. Passing the building inspection is a
            step on that path, not the end of it.
          </p>
        </div>
      </section>

      <section style={sectionWhite}>
        <div style={wrap}>
          <h2 style={h2}>Evaluating an AFH property before you buy</h2>
          <p style={body}>
            AFH Club is an educational hub and does not provide brokerage or appraisal services. David Stein, who
            publishes it, is a Washington State licensed real estate broker (eXp Realty, license #133972) and a Washington
            State certified residential appraiser (Stein Appraisal, license #1702080) with more than 20 years in both
            disciplines. If you want a property examined against the labels above, the fundamentals of the real estate
            valued, or the right licensing, building, and lending professionals brought in, contact David directly
            through the{" "}
            <Link to="/afh-club/real-estate-broker" style={linkStyle}>
              broker page
            </Link>
            .
          </p>
          <p style={{ ...body, margin: 0, fontSize: 16, color: "#555" }}>
            Sources: Adult Family Home Local Building Inspection Checklist (DSHS form 15-604, WABO/DSHS), Washington
            State Residential Code WAC 51-51-0330 (Section R330), WAC 388-76 (adult family home licensing, including
            bedroom size and inspection requirements), and the DSHS AFH Initial Inspection Preparation Checklist.
            Requirements are revised periodically; confirm the current versions with the local building department and
            DSHS.
          </p>
        </div>
      </section>

      <PageFAQ faqs={FAQS} heading="Reading AFH Listings: Common Questions" eyebrow="Frequently Asked Questions" id="afh-classifications" />
    </main>
    <AuthorByline />
    <BackToAFHClub />
    <CTASection />
    <DisclaimerSection />
    <Footer />
  </>
);

export default AFHPropertyClassifications;
