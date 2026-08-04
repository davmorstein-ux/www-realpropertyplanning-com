import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";

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
  fontFamily: "Georgia, serif",
  fontWeight: 700,
  color: "#280a0c",
  lineHeight: 1.2,
  margin: "0 0 20px",
};

const h3 = {
  fontSize: "clamp(19px, 2.5vw, 24px)",
  fontFamily: "Georgia, serif",
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

const li = {
  fontSize: 18,
  fontFamily: "'DM Sans', sans-serif",
  color: "#302b26",
  lineHeight: 1.75,
  marginBottom: 10,
};

const sectionLight = { background: "#f7f4ef", padding: "64px 24px" };
const sectionWhite = { background: "#ffffff", padding: "64px 24px" };
const wrap = { maxWidth: 760, margin: "0 auto" };

/* Article schema. AFH guides previously emitted only BreadcrumbSchema, so
   Google had no signal that these are editorial guides rather than agent
   pages. Author/publisher is the Organization — publishing reference material
   is a hub function and makes no claim that RPP provides services. */
const afhArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Look Up AFH Violations & Inspection Reports",
  description: "A practical guide to using the DSHS Adult Family Home Locator to check violation and inspection history in Washington State — how to search, read reports, spot red flags, and know what the records actually mean.",
  url: "https://realpropertyplanning.com/afh-club/violation-history-lookup",
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  author: {
    "@type": "Organization",
    name: "Real Property Planning",
    url: "https://realpropertyplanning.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Real Property Planning",
    url: "https://realpropertyplanning.com",
    logo: {
      "@type": "ImageObject",
      url: "https://realpropertyplanning.com/logo.webp",
    },
  },
  isPartOf: {
    "@type": "WebSite",
    name: "Real Property Planning",
    url: "https://realpropertyplanning.com",
  },
};

const AFHViolationHistory = () => (
  <>
    <SEOHead
      title="How to Look Up AFH Violations & Inspection Reports | AFH Club | Real Property Planning"
      description="A practical guide to using the DSHS Adult Family Home Locator to check violation and inspection history in Washington State — how to search, read reports, spot red flags, and know what the records actually mean."
      canonical="https://realpropertyplanning.com/afh-club/violation-history-lookup"
      ogType="article"
      schemaJson={afhArticleSchema}
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "AFH Violation History Lookup", url: "https://realpropertyplanning.com/afh-club/violation-history-lookup" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b13a44" }}>
        <div style={wrap}>
          <div className="mb-6">
            <ArticleAudioPlayer audioSrc="/audio/afh-violation-lookup.mp3" />
          </div>
          <p style={label}>AFH Club · Resource Guide · Last reviewed July 2026</p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 50px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#292521",
              lineHeight: 1.15,
              margin: "0 0 20px",
            }}
          >
            How to Look Up Washington Adult Family Home Violations and Inspection Reports
          </h1>
          <p style={{ ...body, margin: 0, maxWidth: 680 }}>
            Washington State provides free public access to Adult Family Home (AFH) inspection and enforcement
            records. These records help families compare care options, help residents understand a home's history,
            and support buyers performing due diligence. The challenge is not access — it's knowing where to look
            and how to interpret what you find.
          </p>
        </div>
      </section>

      {/* Cover image */}
      <section style={{ background: "#ffffff", padding: "40px 24px 0" }}>
        <div style={{ ...wrap, textAlign: "center" as const }}>
          <img
            src="/afh-violation-history-cover.webp"
            alt="How to check a Washington AFH's DSHS violation history — a practical guide to inspection reports"
            style={{ maxWidth: 340, width: "100%", height: "auto", borderRadius: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
            loading="lazy"
            decoding="async"
            width={1023}
            height={1537}
          />
        </div>
      </section>

      {/* Where to look */}
      <section style={sectionWhite}>
        <div style={wrap}>
          <p style={body}>
            There is no "violations" button on the DSHS site. Instead, records are under "Reports and Inspection
            Letters," where you will find inspections, deficiencies, complaints, enforcement actions, and compliance
            updates.
          </p>
          <div
            style={{
              background: "#f7f4ef",
              border: "1px solid #dfc9cb",
              borderLeft: "4px solid #9e2c35",
              borderRadius: 6,
              padding: "24px 28px",
              margin: "24px 0",
            }}
          >
            <p style={{ ...body, margin: 0, fontWeight: 600 }}>Quick Answer:</p>
            <ol style={{ margin: "12px 0 0", paddingLeft: 22 }}>
              <li style={li}>Go to the DSHS Adult Family Home Locator</li>
              <li style={li}>Search for the home</li>
              <li style={li}>Open the listing</li>
              <li style={li}>Click "View letters" under "Reports and Inspection Letters"</li>
              <li style={li}>Review inspections, deficiencies, corrections, and enforcement actions</li>
            </ol>
          </div>
        </div>
      </section>

      {/* What counts as a violation */}
      <section style={sectionLight}>
        <div style={wrap}>
          <h2 style={h2}>What Counts as a Violation</h2>
          <p style={body}>
            AFHs must follow rules under Chapter 388-76 WAC and Chapter 70.128 RCW covering safety, care, staffing,
            medication, and operations.
          </p>
          <p style={body}>
            A "deficiency" means a rule was not met — also called noncompliance or requirement not met. It does{" "}
            <strong>not</strong> automatically mean harm occurred.
          </p>
          <p style={{ ...body, margin: 0, fontWeight: 600 }}>
            Focus on severity, frequency, and response — not just the number of citations.
          </p>
        </div>
      </section>

      {/* What records are available */}
      <section style={sectionWhite}>
        <div style={wrap}>
          <h2 style={h2}>What Records Are Available</h2>
          <p style={body}>Most records cover roughly the past three years. You may see:</p>
          <ul style={{ margin: "0 0 20px", paddingLeft: 22 }}>
            <li style={li}>Inspection letters</li>
            <li style={li}>Statements of deficiency</li>
            <li style={li}>Complaint investigations</li>
            <li style={li}>Correction plans or attestations</li>
            <li style={li}>Return-to-compliance notices</li>
            <li style={li}>Enforcement actions or license conditions</li>
          </ul>
          <p style={{ ...body, margin: 0 }}>Not every home will have every document.</p>
        </div>
      </section>

      {/* How to look up */}
      <section style={sectionLight}>
        <div style={wrap}>
          <h2 style={h2}>How to Look Up an AFH</h2>
          <ol style={{ margin: "0 0 20px", paddingLeft: 22 }}>
            <li style={li}>Go to the DSHS Adult Family Home Locator</li>
            <li style={li}>Search by name, city, ZIP, or license number</li>
            <li style={li}>Use advanced search if needed</li>
            <li style={li}>Confirm the correct home (address, phone, license)</li>
            <li style={li}>Click "View letters" under Reports and Inspection Letters</li>
            <li style={li}>Open and read each document</li>
            <li style={li}>Match each issue to its outcome</li>
          </ol>
          <p style={{ ...body, margin: 0, fontStyle: "italic" }}>
            If it says "This facility has none," it only means no documents are currently displayed.
          </p>
        </div>
      </section>

      {/* How to read a report */}
      <section style={sectionWhite}>
        <div style={wrap}>
          <h2 style={h2}>How to Read an Inspection Report</h2>
          <p style={body}>Focus on this sequence:</p>
          <ul style={{ margin: "0 0 20px", paddingLeft: 22 }}>
            <li style={li}><strong>Facility details:</strong> name, license, dates</li>
            <li style={li}><strong>Rule cited:</strong> look up WAC or RCW if needed</li>
            <li style={li}><strong>What happened:</strong> evidence from records, interviews, or observation</li>
            <li style={li}><strong>Correction:</strong> what was fixed and how</li>
            <li style={li}><strong>Follow-up:</strong> whether DSHS confirmed compliance</li>
          </ul>

          <h3 style={h3}>What the Documents Mean</h3>
          <ul style={{ margin: "0 0 20px", paddingLeft: 22 }}>
            <li style={li}><strong>Inspection letter:</strong> routine licensing visit</li>
            <li style={li}><strong>Statement of deficiency:</strong> rule violation identified</li>
            <li style={li}><strong>Investigation report:</strong> complaint reviewed</li>
            <li style={li}><strong>Correction plan:</strong> how the issue was fixed</li>
            <li style={li}><strong>Return-to-compliance:</strong> issue resolved</li>
            <li style={li}><strong>Enforcement action:</strong> penalties or restrictions</li>
            <li style={li}><strong>License condition:</strong> limits on operations or admissions</li>
          </ul>
        </div>
      </section>

      {/* What "none" means */}
      <section style={sectionLight}>
        <div style={wrap}>
          <h2 style={h2}>What "This Facility Has None" Means</h2>
          <p style={body}>It does <strong>not</strong> mean:</p>
          <ul style={{ margin: "0 0 20px", paddingLeft: 22 }}>
            <li style={li}>No past violations</li>
            <li style={li}>No complaints</li>
            <li style={li}>A perfect history</li>
          </ul>
          <p style={{ ...body, margin: 0 }}>
            It only means no documents are currently posted. Records may be limited, delayed, or incomplete.
          </p>
        </div>
      </section>

      {/* How to evaluate + red flags */}
      <section style={sectionWhite}>
        <div style={wrap}>
          <h2 style={h2}>How to Evaluate a Home</h2>
          <p style={body}>Look beyond the count of deficiencies:</p>
          <ul style={{ margin: "0 0 20px", paddingLeft: 22 }}>
            <li style={li}>How recent is the issue</li>
            <li style={li}>Was there harm or risk</li>
            <li style={li}>Is it repeated or isolated</li>
            <li style={li}>How did the provider respond</li>
            <li style={li}>Did DSHS confirm compliance</li>
            <li style={li}>Was enforcement required</li>
          </ul>
          <p style={{ ...body, margin: 0, fontStyle: "italic" }}>
            Example: One paperwork issue is very different from repeated medication errors.
          </p>

          <h3 style={h3}>Red Flags to Watch</h3>
          <ul style={{ margin: "0 0 20px", paddingLeft: 22 }}>
            <li style={li}>Repeated citations for the same issue</li>
            <li style={li}>Harm or serious safety risks</li>
            <li style={li}>Ongoing medication or staffing problems</li>
            <li style={li}>Missed correction deadlines</li>
            <li style={li}>Enforcement actions (fines, stop placements)</li>
            <li style={li}>Missing resolution details</li>
          </ul>
          <p style={{ ...body, margin: 0 }}>These are not automatic deal-breakers, but they require follow-up.</p>
        </div>
      </section>

      {/* Questions to ask */}
      <section style={sectionLight}>
        <div style={wrap}>
          <h2 style={h2}>Questions to Ask</h2>
          <ul style={{ margin: 0, paddingLeft: 22 }}>
            <li style={li}>What caused the issue</li>
            <li style={li}>How was it corrected</li>
            <li style={li}>What prevents it from happening again</li>
            <li style={li}>Did DSHS confirm compliance</li>
            <li style={li}>Has it happened before</li>
            <li style={li}>Are any restrictions currently in place</li>
          </ul>
        </div>
      </section>

      {/* Buyers and investors */}
      <section style={sectionWhite}>
        <div style={wrap}>
          <h2 style={h2}>Guidance for Buyers and Investors</h2>
          <p style={body}>Use the DSHS search as a starting point, not full due diligence.</p>
          <ul style={{ margin: "0 0 20px", paddingLeft: 22 }}>
            <li style={li}>Search by name, address, and license number</li>
            <li style={li}>Review all reports, not just the latest</li>
            <li style={li}>Identify whether issues relate to current or prior operator</li>
            <li style={li}>Confirm active enforcement actions</li>
            <li style={li}>Request older records</li>
          </ul>
          <p style={{ ...body, margin: 0 }}>
            Also verify licensing, zoning, building compliance, and property condition.
          </p>
        </div>
      </section>

      {/* Limits of the system */}
      <section style={sectionLight}>
        <div style={wrap}>
          <h2 style={h2}>Limits of the System</h2>
          <ul style={{ margin: "0 0 20px", paddingLeft: 22 }}>
            <li style={li}>Typically shows only recent years</li>
            <li style={li}>Posting delays can occur</li>
            <li style={li}>Some data is redacted</li>
            <li style={li}>Not all complaints appear publicly</li>
            <li style={li}>No deficiencies does not guarantee quality</li>
          </ul>
          <p style={{ ...body, margin: 0 }}>
            Records do not show daily care quality, staff interaction, or fit for a specific resident.
          </p>
        </div>
      </section>

      {/* Requesting more info + reporting */}
      <section style={sectionWhite}>
        <div style={wrap}>
          <h2 style={h2}>Requesting More Information</h2>
          <p style={body}>Contact DSHS or submit a public records request. Include:</p>
          <ul style={{ margin: "0 0 20px", paddingLeft: 22 }}>
            <li style={li}>Facility name</li>
            <li style={li}>Address</li>
            <li style={li}>License number</li>
            <li style={li}>Date range</li>
            <li style={li}>Record types</li>
          </ul>

          <h3 style={h3}>Reporting a Concern</h3>
          <ul style={{ margin: 0, paddingLeft: 22 }}>
            <li style={li}><strong>Emergency:</strong> call 911</li>
            <li style={li}><strong>DSHS Complaint Resolution Unit:</strong> 1-800-562-6078</li>
            <li style={li}><strong>Long-Term Care Ombudsman:</strong> available for independent support</li>
          </ul>
        </div>
      </section>

      {/* Final takeaway */}
      <section style={sectionLight}>
        <div style={wrap}>
          <h2 style={h2}>Final Takeaway</h2>
          <p style={body}>
            Use the DSHS Locator and review "Reports and Inspection Letters." Focus on the full story: what happened,
            how it was corrected, and whether compliance was restored.
          </p>
          <p style={{ ...body, margin: 0, fontWeight: 600 }}>
            Use records to guide better questions, not as a standalone decision tool.
          </p>
          <p style={{ fontSize: 14, fontFamily: "'DM Sans', sans-serif", color: "#7a6a6c", lineHeight: 1.7, fontStyle: "italic", margin: "24px 0 0" }}>
            This article is for general educational purposes and is not legal, medical, licensing, or real estate
            advice.
          </p>
        </div>
      </section>
    </main>
    <BackToAFHClub />
    <CTASection />
    <DisclaimerSection />
    <Footer />
  </>
);

export default AFHViolationHistory;
