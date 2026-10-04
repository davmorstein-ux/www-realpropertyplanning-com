import Header from "@/components/Header";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import AuthorByline from "@/components/AuthorByline";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import audioAsset from "@/assets/afh-regulations-compliance.mp3.asset.json";
import ArticleCover from "@/components/ArticleCover";

const ENFORCEMENT_LEVELS = [
  {
    level: "License Conditions",
    color: "#9e2c35",
    bg: "#e8f2f9",
    border: "#9e2c35",
    description:
      "Requirements the provider must correct within a set timeframe. Used for lower-level or first-time violations. The home may continue operating while corrections are made.",
  },
  {
    level: "Civil Fines",
    color: "#481216",
    bg: "#fdf3e8",
    border: "#b13a44",
    description:
      "Financial penalties, which by law become more severe for violations that are repeated, uncorrected, widespread, or a threat to residents: at least $100 per day per violation, up to $3,000 per incident, and up to $10,000 for a current or former provider operating an unlicensed home (RCW 70.128.160).",
  },
  {
    level: "Stop Placement Order",
    color: "#8b2500",
    bg: "#fdecea",
    border: "#c0392b",
    description:
      "The home cannot admit new residents until violations are corrected and stability is demonstrated. Used when there is significant risk if admissions continue.",
  },
  {
    level: "License Suspension or Revocation",
    color: "#5a0000",
    bg: "#fce8e8",
    border: "#8b0000",
    description:
      "The most serious enforcement action. Used when violations are severe, repeated, or remain uncorrected. The home must cease operations until reinstated or permanently.",
  },
];

/* DSHS "Top AFH Citations — CY 2024 Q4" (the most recent quarterly list DSHS
   has published that we could find), verified Sept 28, 2026. Counts and rule
   numbers are DSHS's; the one-line explanations are ours, checked against the
   current rule text. Replace the whole list when DSHS publishes a newer one. */
const CITATIONS_SOURCE = {
  period: "October–December 2024",
  url: "https://www.dshs.wa.gov/sites/default/files/ALTSA/rcs/documents/2024%20Q4%20--%20Top%20AFH%20Citations.pdf",
};
const TOP_CITATIONS = [
  { rank: 1, count: 179, violation: "Medication system", wac: "WAC 388-76-10430",
    detail: "How the home stores, assists with, gives, and tracks residents' medications. The single most-cited rule." },
  { rank: 2, count: 140, violation: "License annual fee", wac: "WAC 388-76-10025",
    detail: "The fee is due each year in the month the home was first licensed. If it is not paid when due, DSHS imposes remedies." },
  { rank: 3, count: 112, violation: "Notice of resident rights and services", wac: "WAC 388-76-10530",
    detail: "Residents must receive written notice of their rights and the home's services. Since September 20, 2026, the resident record must also hold a copy, with the resident's acknowledgement." },
  { rank: 4, count: 106, violation: "Medical devices", wac: "WAC 388-76-10650",
    detail: "Devices that carry a safety risk, such as bed rails, cannot be used as a restraint or for staff convenience, and need an assessment, informed consent, and a place in the care plan first." },
  { rank: 5, count: 101, violation: "Background checks", wac: "WAC 388-76-10165",
    detail: "The Washington name and date-of-birth check is valid for two years and must be kept current; the national fingerprint check is valid indefinitely." },
  { rank: 6, count: 94, violation: "Personnel records", wac: "WAC 388-76-10198",
    detail: "Each staff member's file must hold the required records, such as background checks, training, and certification." },
  { rank: 7, count: 75, violation: "Emergency evacuation drills", wac: "WAC 388-76-10895",
    detail: "Partial drills at least every two months on random staffing shifts (every sixty days before September 20, 2026), each resident in one each year, and a full drill every year, all documented." },
  { rank: 8, count: 73, violation: "Safety and maintenance", wac: "WAC 388-76-10750",
    detail: "The home must be kept safe, clean, and in good repair." },
  { rank: 9, count: 70, violation: "Resident record content", wac: "WAC 388-76-10320",
    detail: "What each resident's record must contain. Amended September 20, 2026: Social Security numbers are no longer required, and the notice of rights is now required." },
  { rank: 10, count: 69, violation: "Medication log", wac: "WAC 388-76-10475",
    detail: "A daily log for each resident of every medication, dose, time, the staff member's initials, refusals, and any change with its written verification." },
];

const LOOKUP_TOOLS = [
  {
    title: "AFH Locator",
    description:
      "Search any licensed Adult Family Home by city, ZIP code, or county. View licensing status, enforcement actions, and inspection history for the previous three years.",
    url: "https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx",
    label: "Search the AFH Locator →",
  },
  {
    title: "DSHS Tables & Charts",
    description:
      "Annual data tables from Residential Care Services including citation summaries, enforcement actions, and provider statistics across Washington State.",
    url: "https://www.dshs.wa.gov/altsa/residential-care-services/tables-and-charts-2025",
    label: "View DSHS Tables & Charts →",
  },
  {
    title: "Top AFH Citations — Q4 2024",
    description:
      "DSHS quarterly report listing the most frequently cited violations across Washington Adult Family Homes. Essential reading for providers preparing for inspection.",
    url: "https://www.dshs.wa.gov/sites/default/files/ALTSA/rcs/documents/2024%20Q4%20--%20Top%20AFH%20Citations.pdf",
    label: "Download Q4 2024 Report →",
  },
  {
    title: "Report Abuse or Neglect",
    description:
      "File a complaint with DSHS Residential Care Services online or by calling the toll-free Complaint Resolution Unit at 1-800-562-6078.",
    url: "https://www.dshs.wa.gov/report-abuse-and-neglect",
    label: "Report to DSHS →",
  },
];

/* Article schema. AFH guides previously emitted only BreadcrumbSchema, so
   Google had no signal that these are editorial guides rather than agent
   pages. Author/publisher is the Organization — publishing reference material
   is a hub function and makes no claim that RPP provides services. */
const afhArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AFH Regulations & Compliance",
  description: "A plain-language guide to Washington State DSHS inspections, enforcement levels, top AFH violations, and public lookup tools for Adult Family Homes.",
  url: "https://realpropertyplanning.com/afh-club/regulations-compliance",
  datePublished: "2026-07-24",
  dateModified: "2026-09-28",
  author: articleAuthor,
  publisher: articlePublisher,
  isPartOf: {
    "@type": "WebSite",
    name: "Real Property Planning",
    url: "https://realpropertyplanning.com",
  },
};

const AFHRegulationsCompliance = () => (
  <>
    <SEOHead
      title="AFH Regulations & Compliance | AFH Club | Real Property Planning"
      description="A plain-language guide to Washington State DSHS inspections, enforcement levels, top AFH violations, and public lookup tools for Adult Family Homes."
      canonical="https://realpropertyplanning.com/afh-club/regulations-compliance"
      ogType="article"
      schemaJson={afhArticleSchema}
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Regulations & Compliance", url: "https://realpropertyplanning.com/afh-club/regulations-compliance" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section
        style={{
          background: "#edf0f3",
          padding: "64px 24px 56px",
          borderBottom: "3px solid #b13a44",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <ArticleCover src="/afh-regulations-compliance.webp" alt="Cover art: AFH Regulations & Compliance" width={1086} height={1448} />
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            AFH Club · Regulations & Compliance
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 50px)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "#292521",
              lineHeight: 1.15,
              margin: "0 0 20px",
            }}
          >
            Understanding DSHS Inspections & Compliance
          </h1>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: "#342e28",
              lineHeight: 1.85,
              margin: "0 0 16px",
              maxWidth: 680,
            }}
          >
            Washington Adult Family Homes are licensed and regulated by DSHS Residential Care Services under WAC 388-76
            and RCW 70.128. This guide explains how inspections work, what enforcement actions mean, which violations
            are cited most often — and how to look up any AFH in Washington's public database.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: "#1c1917",
              lineHeight: 1.8,
              maxWidth: 680,
            }}
          >
            This page is written for two audiences: <strong>buyers and investors</strong> checking a home's record before a purchase,
            and <strong>providers</strong> who need to stay inspection-ready year-round.
          </p>
        </div>
      </section>

      {/* Audio Player */}
      <section style={{ background: "#edf0f3", padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <ArticleAudioPlayer audioSrc={audioAsset.url} />
        </div>
      </section>

      {/* How Inspections Work */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            How It Works
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            How DSHS Inspects Adult Family Homes
          </h2>

          <p
            style={{
              fontSize: 17,
              fontFamily: "'DM Sans', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            DSHS licensors conduct <strong>unannounced inspections</strong> at least every 18 months, with a statewide
            average of 15 months. A home with no citations on its last three inspections, and no violations from
            complaint investigations in that time, may go up to two years (RCW 70.128.070). Because visits are unpredictable, providers
            must maintain continuous compliance — not just prepare when an inspection is expected.
          </p>
          <p
            style={{
              fontSize: 17,
              fontFamily: "'DM Sans', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 36px",
            }}
          >
            Inspections cover resident safety, medication management, staff training and documentation, care plans,
            emergency preparedness, and resident rights. Additional visits occur when complaints are filed or concerns
            about care arise.
          </p>

          {/* Two-column inspection types */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              marginBottom: 40,
            }}
          >
            {[
              {
                title: "Routine Inspections",
                body: "At least every 18 months (15 months on average), or up to two years for homes with three clean inspections in a row. Covers all aspects of care, documentation, staffing, and safety. Inspectors review records, interview staff and residents, and observe daily operations.",
              },
              {
                title: "Complaint-Based Inspections",
                body: "Triggered when someone files a concern with DSHS. Can range from minor administrative issues to serious safety incidents. Anyone can file a complaint — residents, families, or staff.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  border: "1px solid #dccdce",
                  borderTop: "3px solid #b13a44",
                  borderRadius: 6,
                  padding: "24px 24px 28px",
                }}
              >
                <h3
                  style={{
                    fontSize: 17,
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 700,
                    color: "#280a0c",
                    margin: "0 0 12px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 17,
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#1c1917",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Important note box */}
          <div
            style={{
              background: "#e8f2f9",
              border: "1px solid #9e2c35",
              borderLeft: "4px solid #9e2c35",
              borderRadius: 6,
              padding: "20px 24px",
            }}
          >
            <p
              style={{
                fontSize: 17,
                fontFamily: "'DM Sans', sans-serif",
                color: "#2f2a25",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong>Important for buyers:</strong> DSHS says the Locator shows limits and enforcement issued within the
              previous three years, and each home must keep its last three years of inspection reports available to
              anyone who asks (RCW 70.128.080). A change of ownership brings a new license, so a previous owner's record
              may not follow the address. Use the DSHS Locator as a starting point, not the complete picture.
            </p>
          </div>
        </div>
      </section>

      {/* Enforcement Levels */}
      <section style={{ background: "#edf0f3", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            Enforcement
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            DSHS Enforcement Levels
          </h2>
          <p
            style={{
              fontSize: 17,
              fontFamily: "'DM Sans', sans-serif",
              color: "#1c1917",
              lineHeight: 1.8,
              margin: "0 0 36px",
            }}
          >
            When violations are found, DSHS responds in proportion to the severity. Most citations require correction
            rather than severe penalties. Here is how the enforcement ladder works, from least to most serious:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {ENFORCEMENT_LEVELS.map((item, i) => (
              <div
                key={item.level}
                style={{
                  background: item.bg,
                  border: `1px solid ${item.border}`,
                  borderLeft: `5px solid ${item.border}`,
                  borderRadius: 6,
                  padding: "20px 24px",
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                }}
              >
                <div className="rpp-dark-surface"
                  style={{
                    flexShrink: 0,
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: item.border,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 17,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontWeight: 700,
                      color: item.color,
                      margin: "0 0 8px",
                    }}
                  >
                    {item.level}
                  </h3>
                  <p
                    style={{
                      fontSize: 17,
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#1c1917",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Citations */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            2024–2025 DSHS Data
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            The 10 Most-Cited AFH Rules in Washington
          </h2>
          <p
            style={{
              fontSize: 17,
              fontFamily: "'DM Sans', sans-serif",
              color: "#1c1917",
              lineHeight: 1.8,
              margin: "0 0 36px",
              maxWidth: 680,
            }}
          >
            These are the ten rules DSHS cited most often in adult family homes in {CITATIONS_SOURCE.period}, from the
            most recent quarterly list DSHS has published (
            <a href={CITATIONS_SOURCE.url} target="_blank" rel="noopener noreferrer" style={{ color: "#1B3A6B", textDecoration: "underline" }}>
              DSHS Top AFH Citations
            </a>
            ). Most are record-keeping problems a good system prevents.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {TOP_CITATIONS.map((item, i) => (
              <div
                key={item.rank}
                style={{
                  display: "flex",
                  gap: 24,
                  padding: "24px 0",
                  borderBottom: "1px solid #dccdce",
                  borderTop: i === 0 ? "1px solid #dccdce" : "none",
                  alignItems: "flex-start",
                }}
              >
                <div className="rpp-dark-surface"
                  style={{
                    flexShrink: 0,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "#3f3a35",
                    color: "#e8e2d9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                >
                  {item.rank}
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontWeight: 700,
                      color: "#280a0c",
                      margin: "0 0 8px",
                    }}
                  >
                    {item.violation}
                  </h3>
                  <p
                    style={{
                      fontSize: 17,
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#1c1917",
                      lineHeight: 1.75,
                      margin: "0 0 8px",
                    }}
                  >
                    {item.detail}
                  </p>
                  <span
                    style={{
                      fontSize: 15,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#481216",
                    }}
                  >
                    {item.wac} · {item.count} citations
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 32,
              background: "#fff",
              border: "1px solid #dccdce",
              borderLeft: "4px solid #b13a44",
              borderRadius: 6,
              padding: "20px 24px",
            }}
          >
            <p
              style={{
                fontSize: 17,
                fontFamily: "'DM Sans', sans-serif",
                color: "#1c1917",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong>For providers:</strong> Most of these violations are documentation issues, not care failures. A
              consistent record-keeping system eliminates the majority of common citations before an inspector ever
              arrives. Source:{" "}
              <a
                href="https://www.dshs.wa.gov/sites/default/files/ALTSA/rcs/documents/2024%20Q4%20--%20Top%20AFH%20Citations.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#9e2c35", textDecoration: "underline" }}
              >
                DSHS Q4 2024 Top AFH Citations PDF
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Lookup Tools */}
      <section style={{ background: "#edf0f3", padding: "72px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            Public Resources
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            Look Up Any AFH in Washington
          </h2>
          <p
            style={{
              fontSize: 17,
              fontFamily: "'DM Sans', sans-serif",
              color: "#1c1917",
              lineHeight: 1.8,
              margin: "0 0 36px",
              maxWidth: 680,
            }}
          >
            DSHS maintains several public tools for researching licensed Adult Family Homes. Use these to check
            licensing status, view inspection reports, and review enforcement actions from the past three years.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {LOOKUP_TOOLS.map((tool) => (
              <div
                key={tool.title}
                style={{
                  background: "#fff",
                  border: "1px solid #dccdce",
                  borderTop: "3px solid #3f3a35",
                  borderRadius: 6,
                  padding: "24px 24px 28px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: 17,
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 700,
                    color: "#280a0c",
                    margin: "0 0 12px",
                  }}
                >
                  {tool.title}
                </h3>
                <p
                  style={{
                    fontSize: 17,
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#1c1917",
                    lineHeight: 1.75,
                    margin: "0 0 20px",
                    flex: 1,
                  }}
                >
                  {tool.description}
                </p>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 15,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#481216",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    borderBottom: "1px solid #b13a44",
                    paddingBottom: 2,
                    width: "fit-content",
                  }}
                >
                  {tool.label}
                </a>
              </div>
            ))}
          </div>

          {/* Limitation note */}
          <div
            style={{
              marginTop: 32,
              background: "#e8f2f9",
              border: "1px solid #9e2c35",
              borderLeft: "4px solid #9e2c35",
              borderRadius: 6,
              padding: "20px 24px",
            }}
          >
            <p
              style={{
                fontSize: 17,
                fontFamily: "'DM Sans', sans-serif",
                color: "#2f2a25",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong>Limitation to be aware of:</strong> DSHS says the Locator shows limits and enforcement issued within
              the previous three years. A change of ownership brings a new license, so a previous owner's record may not
              follow the address. Always ask the current owner about any ongoing limits, exemptions, or outstanding
              enforcement on the existing license before making a decision.
            </p>
          </div>
        </div>
      </section>

      {/* What to look for */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            For Buyers and Investors
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            What to Focus on When Reading Inspection Reports
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                heading: "Focus on patterns, not isolated incidents.",
                body: "A single citation during a staff transition or paperwork audit is very different from the same violation appearing repeatedly across multiple inspections.",
              },
              {
                heading: "Look for timely resolution.",
                body: "Strong providers can clearly explain how an issue occurred and what steps they took to correct it. Unresolved or recurring citations are a more meaningful concern.",
              },
              {
                heading: "Context matters more than count.",
                body: "Many citations address documentation or process issues rather than direct harm to residents. Civil fines and stop-placement orders are reserved for higher-risk situations.",
              },
              {
                heading: "Consider ownership and leadership stability.",
                body: "Frequent ownership changes can reset the public record. Ask how long the current provider has operated this specific home and request disclosure of any ongoing limits or exemptions.",
              },
              {
                heading: "Use inspections as one tool among many.",
                body: "Visit the home in person. Ask the seller about staffing levels, the current census and daily routines, and request the home's own copies of recent inspection reports and plans of correction. Public records alone rarely tell the complete story.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div className="rpp-dark-surface"
                  style={{
                    flexShrink: 0,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#b13a44",
                    marginTop: 9,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 17,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700,
                      color: "#280a0c",
                      margin: "0 0 4px",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.heading}
                  </p>
                  <p
                    style={{
                      fontSize: 18,
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#1c1917",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AuthorByline context="afh" />
      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHRegulationsCompliance;
