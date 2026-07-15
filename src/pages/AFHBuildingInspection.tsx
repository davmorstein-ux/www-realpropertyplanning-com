import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import audioAsset from "@/assets/afh-building-requirements-and-inspections.mp3.asset.json";

const PROPERTY_OPTIONS = [
  {
    title: "Convert an Existing Home",
    icon: "🏠",
    description:
      "The most common path. A single-family home you already own or purchase is evaluated against the WABO AFH Building Inspection Checklist. Modifications are made as needed — often ramps, bathroom reconfigurations, window changes, and fire safety upgrades — and a remodel permit is typically required.",
    pros: ["Lower total entry cost", "Faster to licensure than new build", "Established neighborhood context"],
    cons: [
      "May require costly structural changes",
      "Layout may limit resident capacity or bedroom classification",
      "Must still pass all code requirements",
    ],
  },
  {
    title: "Build a New Home",
    icon: "🏗️",
    description:
      "A new single-family home designed specifically as an AFH can be built to code from the ground up. This gives maximum control over layout, accessibility, and bedroom classification — but comes with the full cost and timeline of new residential construction in Washington.",
    pros: [
      "Optimal layout for AFH operations",
      "No surprise renovation costs",
      "Can be designed for 7-8 resident capacity from the start",
    ],
    cons: [
      "Most expensive option",
      "Washington build costs average $200–$350/sq ft in 2025",
      "Long lead time before first revenue",
    ],
  },
  {
    title: "Purchase a Licensed AFH (CHOW)",
    icon: "🔑",
    description:
      "Buy an existing licensed AFH through a Change of Ownership (CHOW). The building has already passed inspection, which simplifies the building process — but a new DSHS license application and fresh inspection are still required. The prior license does not transfer.",
    pros: [
      "Building already meets AFH code",
      "May have existing residents and revenue",
      "Established community relationships",
    ],
    cons: [
      "Must still apply for new DSHS license",
      "CHOW specialty contracts do not transfer",
      "Prior violation history may not appear in public records",
    ],
  },
];

const COMMON_MODIFICATIONS = [
  {
    item: "Ramp installation",
    detail:
      "Required when means of egress has stairs. Maximum slope 1:12 (8.3%). Must have handrails on both sides. Landings required at top and bottom.",
  },
  {
    item: "Bathroom modifications",
    detail:
      "Grab bars, turning radius clearance, and accessible fixture placement are commonly required. Bathroom access must accommodate residents using mobility aids.",
  },
  {
    item: "Window modifications",
    detail:
      "Sleeping room windows must meet egress size and height requirements for emergency exit. Type S rooms (with stairs) have different requirements than Type NS1 (grade-level) rooms.",
  },
  {
    item: "Fire safety upgrades",
    detail:
      "Interconnected smoke alarms, carbon monoxide detectors, and in some cases sprinkler systems. Requirements depend on bedroom count and room classifications.",
  },
  {
    item: "Septic system evaluation",
    detail:
      "If the home is on a septic system, it must be inspected and approved by the local health authority for the number of people — not bedrooms — it will serve. Septic upgrades can be a significant unexpected cost.",
  },
  {
    item: "Floor plan submission",
    detail:
      "A floor plan of each level of the home must be submitted with both the building inspection checklist and the DSHS license application.",
  },
];

const AFHBuildingInspection = () => (
  <>
    <SEOHead
      title="AFH Building & Inspection Requirements | AFH Club | Real Property Planning"
      description="Complete guide to Washington State AFH building requirements — WABO inspection process, what WABO is, common modifications, new build vs remodel vs existing home, and septic requirements."
      canonical="https://realpropertyplanning.com/afh-club/building-inspection"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Building & Inspection", url: "https://realpropertyplanning.com/afh-club/building-inspection" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b13a44" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div className="mb-6">
            <ArticleAudioPlayer audioSrc={audioAsset.url} />
          </div>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            AFH Club · Building & Inspection
          </p>
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
            AFH Building Requirements & Inspections
          </h1>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#342e28",
              lineHeight: 1.85,
              margin: "0 0 16px",
              maxWidth: 680,
            }}
          >
            Before an Adult Family Home can be licensed in Washington State, the physical structure must be inspected
            and approved by your local building jurisdiction. This process is separate from the DSHS licensing
            inspection — and must often be completed first. Understanding the building requirements early can prevent
            expensive surprises.
          </p>
        </div>
      </section>

      {/* What is WABO */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            Key Term
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            What Is WABO?
          </h2>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            WABO stands for the <strong>Washington Association of Building Officials</strong>. In collaboration with
            DSHS, WABO developed the standardized Adult Family Home Building Inspection Checklist used by all local
            building jurisdictions throughout Washington State (WAC 51-51-0330, effective February 1, 2021).
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            When people refer to getting a "WABO inspection" for an AFH, they mean the building inspection performed by
            your local building official using the WABO checklist.{" "}
            <strong>WABO itself does not perform inspections</strong> — your local city or county building department
            does, using the WABO checklist as the standard.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.85,
              margin: "0 0 28px",
            }}
          >
            Building inspection requirements may vary slightly by jurisdiction. Always contact your local building
            department early in the process to understand their specific permitting procedures and timelines. Permit
            review alone can take several weeks.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="https://www.dshs.wa.gov/altsa/residential-care-services/afh-building-inspections"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 16,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#481216",
                textDecoration: "none",
                borderBottom: "1px solid #b13a44",
                paddingBottom: 2,
              }}
            >
              DSHS Building Inspection Page →
            </a>
            <a
              href="https://wabo.memberclicks.net/assets/pdfs/AFH%20Building%20Inspection%20Checklist%20(updated%20and%20finalized)%20-%20April%207%202024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 16,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#481216",
                textDecoration: "none",
                borderBottom: "1px solid #b13a44",
                paddingBottom: 2,
              }}
            >
              Download WABO AFH Checklist (2024) →
            </a>
          </div>
        </div>
      </section>

      {/* Property Options */}
      <section style={{ background: "#edf0f3", padding: "72px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            Your Options
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            New Build vs. Existing Home vs. Buy an AFH
          </h2>
          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.8,
              margin: "0 0 32px",
            }}
          >
            There are three main paths to obtaining a home suitable for AFH licensure. Each involves different costs,
            timelines, and trade-offs.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {PROPERTY_OPTIONS.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  border: "1px solid #dccdce",
                  borderTop: "4px solid #3f3a35",
                  borderRadius: 6,
                  padding: "28px 24px",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <h3
                  style={{
                    fontSize: 18,
                    fontFamily: "Georgia, serif",
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
                    fontFamily: "'Raleway', sans-serif",
                    color: "#302b26",
                    lineHeight: 1.75,
                    margin: "0 0 16px",
                  }}
                >
                  {item.description}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#9e2c35",
                    margin: "0 0 6px",
                  }}
                >
                  Advantages
                </p>
                {item.pros.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 16,
                      fontFamily: "'Raleway', sans-serif",
                      color: "#302b26",
                      margin: "0 0 3px",
                      paddingLeft: 10,
                    }}
                  >
                    · {p}
                  </p>
                ))}
                <p
                  style={{
                    fontSize: 15,
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#8b2500",
                    margin: "14px 0 6px",
                  }}
                >
                  Considerations
                </p>
                {item.cons.map((c, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 16,
                      fontFamily: "'Raleway', sans-serif",
                      color: "#302b26",
                      margin: "0 0 3px",
                      paddingLeft: 10,
                    }}
                  >
                    · {c}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Modifications */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            What to Expect
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            Common Building Modifications
          </h2>
          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.8,
              margin: "0 0 28px",
            }}
          >
            Most existing homes require at least some modifications to meet AFH building code. Each triggers its own
            permit and inspection process. Evaluate these before committing to a property.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {COMMON_MODIFICATIONS.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 0",
                  borderBottom: "1px solid #dccdce",
                  borderTop: i === 0 ? "1px solid #dccdce" : "none",
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#b13a44",
                    marginTop: 8,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 18,
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 700,
                      color: "#280a0c",
                      margin: "0 0 4px",
                    }}
                  >
                    {item.item}
                  </p>
                  <p
                    style={{
                      fontSize: 17,
                      fontFamily: "'Raleway', sans-serif",
                      color: "#302b26",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 28,
              background: "#fdf3e8",
              border: "1px solid #b13a44",
              borderLeft: "4px solid #b13a44",
              borderRadius: 6,
              padding: "18px 22px",
            }}
          >
            <p
              style={{
                fontSize: 17,
                fontFamily: "'Raleway', sans-serif",
                color: "#2f2a25",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong>Septic systems require early attention.</strong> If your home is on a septic system, begin the
              inspection and approval process before submitting your DSHS application. Septic upgrades can involve
              significant cost and delay — and cannot be resolved quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Inspection Process */}
      <section style={{ background: "#edf0f3", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            Process Overview
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            The Building Inspection Process
          </h2>
          {[
            {
              step: "1",
              title: "Review the WABO Checklist",
              body: "Download the AFH Building Inspection Checklist from DSHS or WABO. Walk through your property against every item before contacting your local jurisdiction.",
            },
            {
              step: "2",
              title: "Contact your local building department",
              body: "Building inspection requirements vary by city and county. Contact your local building official early. Use the 'Find Your Local Building Official' tool on the DSHS building inspections page.",
            },
            {
              step: "3",
              title: "Obtain a remodel permit (if needed)",
              body: "Most homes require a remodel permit if modifications are needed. If construction is proposed (ramps, bathroom work, window changes, electrical), submit plans and apply for the remodel permit first. The remodel must have a passed final inspection before the AFH inspection can proceed.",
            },
            {
              step: "4",
              title: "Submit for the AFH building inspection",
              body: "Once all modifications are complete (or if no construction is needed), apply for the AFH building inspection permit through your local jurisdiction. Submit the WABO checklist and a floor plan of each level.",
            },
            {
              step: "5",
              title: "Pass the building inspection",
              body: "The local building inspector completes the WABO checklist during the inspection. Once the home passes, the inspector signs the checklist and you have the documentation needed for your DSHS license application.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 20,
                padding: "20px 0",
                borderBottom: "1px solid #d0ccc4",
                borderTop: i === 0 ? "1px solid #d0ccc4" : "none",
                alignItems: "flex-start",
              }}
            >
              <div
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
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                {item.step}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: 17,
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    color: "#280a0c",
                    margin: "0 0 6px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 17,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#302b26",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
            <a
              href="https://www.dshs.wa.gov/altsa/residential-care-services/afh-building-inspections"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 17,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                color: "#9e2c35",
                textDecoration: "underline",
              }}
            >
              DSHS AFH Building Inspections — Find Your Local Building Official →
            </a>
            <a
              href="https://www.dshs.wa.gov/sites/default/files/forms/pdf/15-604.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 17,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                color: "#9e2c35",
                textDecoration: "underline",
              }}
            >
              WABO AFH Building Inspection Checklist (PDF) →
            </a>
            <a
              href="https://www.dshs.wa.gov/sites/default/files/ALTSA/rcs/documents/afh/AFH%20Initial%20Inspection%20Preparation%20Checklist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 17,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                color: "#9e2c35",
                textDecoration: "underline",
              }}
            >
              DSHS Initial Inspection Preparation Checklist →
            </a>
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

export default AFHBuildingInspection;
