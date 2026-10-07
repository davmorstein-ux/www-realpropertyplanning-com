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
import audioAsset from "@/assets/afh-building-requirements-and-inspections.mp3.asset.json";
import ArticleCover from "@/components/ArticleCover";
import NextQuestions from "@/components/NextQuestions";
import WhichGuide from "@/components/WhichGuide";

const PROPERTY_OPTIONS = [
  {
    title: "Convert an Existing Home",
    icon: "🏠",
    description:
      "The most common path. A single-family home you already own or purchase is evaluated against the AFH Local Building Inspection Checklist (DSHS 15-604). Modifications are made as needed — often ramps, bathroom changes, window changes, and alarm upgrades — and construction work usually needs its own permit from the local building department.",
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
      "A new single-family home designed specifically as an AFH can be built to code from the ground up. This gives maximum control over layout, accessibility, and bedroom classification, but comes with the full cost and timeline of new residential construction.",
    pros: [
      "Optimal layout for AFH operations",
      "No surprise renovation costs",
      "Can be laid out for 7-8 residents, though a provider must hold an initial license for 24 months before applying for more than 6 (WAC 388-76-10031)",
    ],
    cons: [
      "Most expensive option",
      "Construction costs vary widely; get local bids",
      "Long lead time before first revenue",
    ],
  },
  {
    title: "Purchase a Licensed AFH (CHOW)",
    icon: "🔑",
    description:
      "Buy an existing licensed AFH through a Change of Ownership (CHOW). The building was approved when the home was licensed, and DSHS says a continuously licensed home that changes owners is held to the rules in place when it was first licensed. The buyer still files a full DSHS license application and must meet all licensing requirements. The prior license does not transfer.",
    pros: [
      "Building was approved for AFH use when first licensed",
      "May have existing residents and revenue",
      "Established community relationships",
    ],
    cons: [
      "Must still apply for new DSHS license",
      "Specialty contracts such as ECS and SBS do not transfer at a CHOW",
      "A home whose license has lapsed must meet current rules",
      "The DSHS Locator shows only the previous three years of limits and enforcement",
    ],
  },
];

const COMMON_MODIFICATIONS = [
  {
    item: "Ramp installation",
    detail:
      "A bedroom whose exit path has stairs is classified Type S. A ramp built to code can let the room be classified Type NS1 instead. Maximum slope 1:12 (8.3%), handrails on both sides, and a landing at least 3 by 3 feet at the top and bottom where doors open onto the ramp.",
  },
  {
    item: "Bathroom modifications",
    detail:
      "Grab bars are required at toilets, bathtubs, and showers; toilet grab bars go on both sides, 33 to 36 inches high. A shower, where one is provided, must be at least 30 by 48 inches.",
  },
  {
    item: "Window modifications",
    detail:
      "Every resident bedroom needs an emergency escape window: sill no more than 44 inches above the floor (no steps or platforms), a net clear opening of at least 5.7 square feet (5.0 at grade), at least 24 inches high and 20 inches wide, and free of obstructions. In June 2026 DSHS began rulemaking to update its window rule (WAC 388-76-10795) for new homes only; nothing has been adopted yet.",
  },
  {
    item: "Fire safety upgrades",
    detail:
      "Smoke alarms on every level and in each resident bedroom, arranged so a single alarm is audible throughout the home, and carbon monoxide alarms on each level.",
  },
  {
    item: "Septic system evaluation",
    detail:
      "If the home is on a septic system, DSHS asks for a document from the local health authority showing the system was inspected and approved for use as an AFH, and how many people (not bedrooms) it can serve. Septic upgrades can be a significant unexpected cost.",
  },
  {
    item: "Interior doors",
    detail:
      "For homes licensed after September 20, 2026, interior doors residents pass through (other than the emergency exit) must be at least 27 inches wide (WAC 388-76-10715). DSHS says this does not apply to a continuously licensed home sold through a change of ownership, but a home whose license has lapsed must meet it.",
  },
  {
    item: "Floor plan submission",
    detail:
      "The building inspection checklist asks for a floor plan of every floor, with bedrooms and exit components labeled.",
  },
];

/* Article schema. AFH guides previously emitted only BreadcrumbSchema, so
   Google had no signal that these are editorial guides rather than agent
   pages. Author/publisher is the Organization — publishing reference material
   is a hub function and makes no claim that RPP provides services. */
const afhArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AFH Building & Inspection Requirements",
  description: "Complete guide to Washington State AFH building requirements — WABO inspection process, what WABO is, common modifications, new build vs remodel vs existing home, and septic requirements.",
  url: "https://realpropertyplanning.com/afh-club/building-inspection",
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

const AFHBuildingInspection = () => (
  <>
    <SEOHead
      title="AFH Building & Inspection Requirements | AFH Club | Real Property Planning"
      description="Complete guide to Washington State AFH building requirements — WABO inspection process, what WABO is, common modifications, new build vs remodel vs existing home, and septic requirements."
      canonical="https://realpropertyplanning.com/afh-club/building-inspection"
      ogType="article"
      schemaJson={afhArticleSchema}
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
          <ArticleCover src="/afh-building-inspection-cover-v2.webp" alt="Cover art: AFH Building Requirements & Inspections" width={1086} height={1448} />
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              fontWeight: 400,
              color: "#342e28",
              lineHeight: 1.85,
              margin: "0 0 16px",
              maxWidth: 680,
            }}
          >
            Before an Adult Family Home can be licensed in Washington State, the physical structure must be inspected
            and approved by the local building official (WAC 388-76-10700). This is separate from the DSHS licensing
            inspection, and DSHS will not license the home until it is done. Understanding the building requirements early can prevent
            expensive surprises.
          </p>
        </div>
      </section>

      {/* What is WABO */}
      <WhichGuide group="wabo" />
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            WABO stands for the <strong>Washington Association of Building Officials</strong>. In collaboration with
            DSHS, WABO developed the Adult Family Home Local Building Inspection Checklist (DSHS form 15-604, current
            revision 04/2025). It is based on Section R330 of the Washington residential code (WAC 51-51-0330), which
            applies to new adult family homes and houses being converted to one, but not to homes licensed before
            July 1, 2001.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            When people refer to getting a "WABO inspection" for an AFH, they mean the building inspection performed by
            your local building official using the WABO checklist.{" "}
            <strong>WABO itself does not perform inspections</strong> — your local city or county building department
            does, and it completes the inspection section of the checklist.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 28px",
            }}
          >
            Building inspection requirements may vary slightly by jurisdiction. Always contact your local building
            department early in the process to understand their specific permitting procedures and timelines.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="https://www.dshs.wa.gov/altsa/residential-care-services/afh-building-inspections"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 16,
                fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
              href="https://www.dshs.wa.gov/sites/default/files/forms/pdf/15-604.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 16,
                fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#481216",
                textDecoration: "none",
                borderBottom: "1px solid #b13a44",
                paddingBottom: 2,
              }}
            >
              Download the Checklist (DSHS 15-604) →
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
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
                    fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
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
                    fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                    color: "#1c1917",
                    lineHeight: 1.75,
                    margin: "0 0 16px",
                  }}
                >
                  {item.description}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
                      fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                      color: "#1c1917",
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
                    fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
                      fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                      color: "#1c1917",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
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
                      fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
                      fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                      color: "#1c1917",
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
                fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
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
              body: "Download the AFH Local Building Inspection Checklist (DSHS form 15-604) from DSHS. Walk through your property against every item before contacting your local jurisdiction.",
            },
            {
              step: "2",
              title: "Contact your local building department",
              body: "Building inspection requirements vary by city and county. Contact your local building official early. The DSHS building inspections page links to WABO's directory of local building officials.",
            },
            {
              step: "3",
              title: "Obtain a remodel permit (if needed)",
              body: "If construction is proposed (ramps, bathroom work, window changes, electrical), apply for the permit the work needs first. Ask the building department whether that work must pass its final inspection before the AFH inspection is scheduled.",
            },
            {
              step: "4",
              title: "Submit for the AFH building inspection",
              body: "Once all modifications are complete (or if no construction is needed), request the AFH building inspection through your local jurisdiction. Submit the checklist and a floor plan of every floor.",
            },
            {
              step: "5",
              title: "Pass the building inspection",
              body: "The local building department completes the inspection section of the checklist. DSHS requires the building official's inspection and approval before licensing, and again after any construction that affects residents' ability to exit or changes a resident bedroom (WAC 388-76-10700).",
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
                  fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
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
                    fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
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
                    fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                    color: "#1c1917",
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
                fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
                fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                fontWeight: 600,
                color: "#9e2c35",
                textDecoration: "underline",
              }}
            >
              AFH Local Building Inspection Checklist, DSHS 15-604 (PDF) →
            </a>
            <a
              href="https://www.dshs.wa.gov/sites/default/files/ALTSA/rcs/documents/afh/AFH%20Initial%20Inspection%20Preparation%20Checklist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 17,
                fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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

      <AuthorByline context="afh" />
      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
      <NextQuestions />
    </main>
    <Footer />
  </>
);

export default AFHBuildingInspection;
