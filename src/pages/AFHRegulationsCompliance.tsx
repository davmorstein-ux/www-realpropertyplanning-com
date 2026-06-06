import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";

const ENFORCEMENT_LEVELS = [
  {
    level: "License Conditions",
    color: "#2c6e9e",
    bg: "#e8f2f9",
    border: "#2c6e9e",
    description:
      "Requirements the provider must correct within a set timeframe. Used for lower-level or first-time violations. The home may continue operating while corrections are made.",
  },
  {
    level: "Civil Fines",
    color: "#7a4e1a",
    bg: "#fdf3e8",
    border: "#b87333",
    description:
      "Financial penalties for more serious or uncorrected violations. Typically $100–$3,000 per day per violation depending on severity. Up to $10,000 for operating without a license.",
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

const TOP_CITATIONS = [
  {
    rank: 1,
    violation: "Unpaid or late license fees",
    detail: "Failure to pay the $450/bed annual fee on time triggers a stop-placement order blocking new admissions.",
    wac: "WAC 388-76-10191",
  },
  {
    rank: 2,
    violation: "Missing or expired background checks",
    detail:
      "All owners, household members, and staff must have current background checks on file. Lapses are among the most cited violations statewide.",
    wac: "WAC 388-76-10135",
  },
  {
    rank: 3,
    violation: "Incomplete negotiated care plans",
    detail:
      "Each resident must have a written, signed, and regularly updated care plan. Missing or outdated plans are frequently cited.",
    wac: "WAC 388-76-10375",
  },
  {
    rank: 4,
    violation: "Medication documentation errors",
    detail:
      "Medication Administration Records (MARs) must be complete, timestamped, and include missed, refused, or PRN doses.",
    wac: "WAC 388-76-10430",
  },
  {
    rank: 5,
    violation: "Failure to document evacuation drills",
    detail:
      "Evacuation drills must be conducted every two months and fully documented. Missing records are a common finding.",
    wac: "WAC 388-76-10895",
  },
  {
    rank: 6,
    violation: "Missing or outdated succession plans",
    detail:
      "As of 2025, DSHS actively verifies that a written succession plan exists showing how operations continue if the provider becomes unavailable.",
    wac: "WAC 388-76-10201",
  },
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

const AFHRegulationsCompliance = () => (
  <>
    <SEOHead
      title="AFH Regulations & Compliance | AFH Club | Real Property Planning"
      description="A plain-language guide to Washington State DSHS inspections, enforcement levels, top AFH violations, and public lookup tools for Adult Family Homes."
      canonical="https://realpropertyplanning.com/afh-club/regulations-compliance"
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
          borderBottom: "3px solid #b87333",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a4e1a",
              margin: "0 0 14px",
            }}
          >
            AFH Club · Regulations & Compliance
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 50px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#1a2530",
              lineHeight: 1.15,
              margin: "0 0 20px",
            }}
          >
            Understanding DSHS Inspections & Compliance
          </h1>
          <div style={{ width: 48, height: 3, background: "#b87333", marginBottom: 28, borderRadius: 1 }} />
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#1e2e3e",
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
              fontSize: 16,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#2e3e4e",
              lineHeight: 1.8,
              maxWidth: 680,
            }}
          >
            This page is written for two audiences: <strong>families</strong> researching a home for a loved one, and{" "}
            <strong>providers</strong> who need to stay inspection-ready year-round.
          </p>
        </div>
      </section>

      {/* How Inspections Work */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a4e1a",
              margin: "0 0 14px",
            }}
          >
            How It Works
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#0a1628",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            How DSHS Inspects Adult Family Homes
          </h2>
          <div style={{ width: 40, height: 3, background: "#b87333", marginBottom: 32, borderRadius: 1 }} />

          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            DSHS licensors conduct <strong>unannounced inspections</strong> approximately every 15 months. Homes with a
            clean three-inspection record may qualify for a 24-month cycle. Because visits are unpredictable, providers
            must maintain continuous compliance — not just prepare when an inspection is expected.
          </p>
          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              color: "#1e2a38",
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
                body: "Conducted every 15–24 months. Covers all aspects of care, documentation, staffing, and safety. Inspectors review records, interview staff and residents, and observe daily operations.",
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
                  border: "1px solid #ddd8cc",
                  borderTop: "3px solid #b87333",
                  borderRadius: 6,
                  padding: "24px 24px 28px",
                }}
              >
                <h3
                  style={{
                    fontSize: 17,
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    color: "#0a1628",
                    margin: "0 0 12px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#1e2a38",
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
              border: "1px solid #2c6e9e",
              borderLeft: "4px solid #2c6e9e",
              borderRadius: 6,
              padding: "20px 24px",
            }}
          >
            <p
              style={{
                fontSize: 15,
                fontFamily: "'Raleway', sans-serif",
                color: "#1a2a3a",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong>Important for families:</strong> Public inspection reports show only the most recent three years
              of records. When an AFH changes ownership, the license number often changes and prior violations may no
              longer appear in the public file — even if the building and residents remain the same. Use the DSHS
              Locator as a starting point, not the complete picture.
            </p>
          </div>
        </div>
      </section>

      {/* Enforcement Levels */}
      <section style={{ background: "#edf0f3", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a4e1a",
              margin: "0 0 14px",
            }}
          >
            Enforcement
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#0a1628",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            DSHS Enforcement Levels
          </h2>
          <div style={{ width: 40, height: 3, background: "#b87333", marginBottom: 16, borderRadius: 1 }} />
          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              color: "#1e2a38",
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
                <div
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
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontFamily: "Georgia, serif",
                      fontWeight: 700,
                      color: item.color,
                      margin: "0 0 8px",
                    }}
                  >
                    {item.level}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      fontFamily: "'Raleway', sans-serif",
                      color: "#1e2a38",
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
              fontSize: 12,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a4e1a",
              margin: "0 0 14px",
            }}
          >
            2024–2025 DSHS Data
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#0a1628",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            Top AFH Violations in Washington
          </h2>
          <div style={{ width: 40, height: 3, background: "#b87333", marginBottom: 16, borderRadius: 1 }} />
          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              color: "#1e2a38",
              lineHeight: 1.8,
              margin: "0 0 36px",
              maxWidth: 680,
            }}
          >
            Based on DSHS AFH citation data for 2024–2025, these are the six most frequently cited violations statewide.
            Most are administrative and preventable with organized record-keeping systems.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {TOP_CITATIONS.map((item, i) => (
              <div
                key={item.rank}
                style={{
                  display: "flex",
                  gap: 24,
                  padding: "24px 0",
                  borderBottom: "1px solid #ddd8cc",
                  borderTop: i === 0 ? "1px solid #ddd8cc" : "none",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "#2c3a48",
                    color: "#e8e2d9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  {item.rank}
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontFamily: "Georgia, serif",
                      fontWeight: 700,
                      color: "#0a1628",
                      margin: "0 0 8px",
                    }}
                  >
                    {item.violation}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      fontFamily: "'Raleway', sans-serif",
                      color: "#1e2a38",
                      lineHeight: 1.75,
                      margin: "0 0 8px",
                    }}
                  >
                    {item.detail}
                  </p>
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#7a4e1a",
                    }}
                  >
                    {item.wac}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 32,
              background: "#fff",
              border: "1px solid #ddd8cc",
              borderLeft: "4px solid #b87333",
              borderRadius: 6,
              padding: "20px 24px",
            }}
          >
            <p
              style={{
                fontSize: 15,
                fontFamily: "'Raleway', sans-serif",
                color: "#1e2a38",
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
                style={{ color: "#2c6e9e", textDecoration: "underline" }}
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
              fontSize: 12,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a4e1a",
              margin: "0 0 14px",
            }}
          >
            Public Resources
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#0a1628",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            Look Up Any AFH in Washington
          </h2>
          <div style={{ width: 40, height: 3, background: "#b87333", marginBottom: 16, borderRadius: 1 }} />
          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              color: "#1e2a38",
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
                  border: "1px solid #ddd8cc",
                  borderTop: "3px solid #2c3a48",
                  borderRadius: 6,
                  padding: "24px 24px 28px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: 17,
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    color: "#0a1628",
                    margin: "0 0 12px",
                  }}
                >
                  {tool.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#1e2a38",
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
                    fontSize: 12,
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#7a4e1a",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    borderBottom: "1px solid #b87333",
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
              border: "1px solid #2c6e9e",
              borderLeft: "4px solid #2c6e9e",
              borderRadius: 6,
              padding: "20px 24px",
            }}
          >
            <p
              style={{
                fontSize: 15,
                fontFamily: "'Raleway', sans-serif",
                color: "#1a2a3a",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong>Limitation to be aware of:</strong> The DSHS AFH Locator shows only the most recent three years of
              records. When a home changes ownership, the license number changes and prior violations may disappear from
              the public file. Always ask the current owner about any ongoing limits, exemptions, or outstanding
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
              fontSize: 12,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a4e1a",
              margin: "0 0 14px",
            }}
          >
            For Families
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#0a1628",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            What to Focus on When Reading Inspection Reports
          </h2>
          <div style={{ width: 40, height: 3, background: "#b87333", marginBottom: 32, borderRadius: 1 }} />

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
                body: "Visit the home in person. Speak with current residents and families. Ask about staffing levels and daily routines. Public records alone rarely tell the complete story.",
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
                <div
                  style={{
                    flexShrink: 0,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#b87333",
                    marginTop: 9,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 17,
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 700,
                      color: "#0a1628",
                      margin: "0 0 4px",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.heading}
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      fontFamily: "'Raleway', sans-serif",
                      color: "#1e2a38",
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

      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHRegulationsCompliance;
