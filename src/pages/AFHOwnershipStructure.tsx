import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import HeroBandTitle from "@/components/HeroBandTitle";
import { articleSchema } from "@/lib/schema";

const checklistItems = [
  "Entity Structure",
  "Asset Protection",
  "Tax Implications",
  "Liability & Risk",
  "Regulatory Compliance",
  "Estate & Succession Planning",
];

const topics = [
  {
    title: "Legal Structure Explained",
    description:
      "Understand the pros, cons, and protections of operating as an individual owner versus forming a Limited Liability Company for your Adult Family Home.",
  },
  {
    title: "Asset Protection",
    description:
      "Learn how to shield your personal assets and plan for the unexpected. An LLC can create a legal separation between your business and personal property.",
  },
  {
    title: "Tax Considerations",
    description:
      "Discover how entity structure impacts your taxes — from pass-through taxation to potential self-employment tax strategies and deductible business expenses.",
  },
  {
    title: "Compliance & Risk",
    description:
      "Stay aligned with Washington State regulations and minimize liability. Understand DSHS requirements, licensing implications, and ongoing compliance obligations.",
  },
  {
    title: "Expert Insights",
    description:
      "Advice from attorneys, CPAs, and experienced AFH owners who have navigated the ownership structure decision and its long-term implications.",
  },
  {
    title: "Real Owner Stories",
    description:
      "Real experiences, real strategies, real impact. Hear from AFH owners who chose individual or LLC structures and what they learned along the way.",
  },
];

const jsonLd = articleSchema({
  headline: "AFH Ownership Structure: Individual or LLC?",
  description:
    "A practical guide for Adult Family Home owners in Washington State exploring individual ownership versus LLC formation — covering legal structure, asset protection, taxes, compliance, and real owner experiences.",
  url: "/afh-club/ownership-structure",
  datePublished: "2026-06-17",
  dateModified: "2026-06-17",
  about: ["Adult Family Home", "LLC formation", "Asset protection", "Washington State AFH"],
});

const AFHOwnershipStructure = () => {
  return (
    <div className="min-h-screen" style={{ background: "#f6f5f2" }}>
      <SEOHead
        title="AFH Ownership Structure: Individual or LLC? | AFH Club"
        description="A practical guide for Adult Family Home owners in Washington State exploring individual ownership versus LLC formation — covering legal structure, asset protection, taxes, compliance, and real owner experiences."
        canonical="https://realpropertyplanning.com/afh-club/ownership-structure"
        schemaJson={jsonLd}
      />
      <BreadcrumbSchema
        items={[
          { name: "AFH Club", url: "/afh-club" },
          { name: "Ownership Structure", url: "/afh-club/ownership-structure" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section
          className="w-full overflow-hidden"
          style={{
            background: "#f6f5f2",
            borderBottom: "4px solid #b87333",
          }}
        >
          <div
            className="mx-auto"
            style={{
              maxWidth: 960,
              padding: "clamp(36px, 5vw, 64px) clamp(20px, 4vw, 48px)",
            }}
          >
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#b87333",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Resources. Education. Community.
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(32px, 4.2vw, 52px)",
                fontWeight: 600,
                color: "#2c3a48",
                lineHeight: 1.15,
                marginBottom: 16,
                maxWidth: 800,
              }}
            >
              AFH Ownership: Individual or LLC?
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 1.6vw, 20px)",
                color: "#6B7280",
                lineHeight: 1.65,
                maxWidth: 720,
              }}
            >
              Make the right choice for your future. Protect your assets, reduce
              risk, and build your Adult Family Home with confidence.
            </p>
          </div>
        </section>

        <HeroBandTitle as="div">AFH Resource Library</HeroBandTitle>

        {/* Cover Image */}
        <section
          style={{
            background: "#fff",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div
            className="mx-auto"
            style={{ maxWidth: 960, padding: "clamp(28px, 4vw, 48px) clamp(20px, 4vw, 48px)" }}
          >
            <img
              src="/afh-ownership-structure.webp"
              alt="AFH Ownership Structure infographic — Individual or LLC decision guide for Adult Family Home owners"
              className="w-full block"
              style={{
                borderRadius: 12,
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              }}
              loading="eager"
              sizes="(max-width: 960px) 100vw, 960px"
              decoding="async"
              width={960}
              height={1280}
            />
          </div>
        </section>

        {/* Topics */}
        <section
          style={{
            background: "#f6f5f2",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div
            className="mx-auto"
            style={{
              maxWidth: 960,
              padding: "clamp(36px, 5vw, 64px) clamp(20px, 4vw, 48px)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(24px, 2.8vw, 34px)",
                fontWeight: 600,
                color: "#2c3a48",
                lineHeight: 1.2,
                marginBottom: 32,
                textAlign: "center",
              }}
            >
              What Every AFH Owner Should Know
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {topics.map((topic) => (
                <div
                  key={topic.title}
                  style={{
                    background: "#fff",
                    borderRadius: 12,
                    border: "1px solid rgba(0,0,0,0.06)",
                    padding: "24px 28px",
                    transition: "box-shadow 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 8px 32px rgba(0,0,0,0.08)";
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#1B3A6B",
                      lineHeight: 1.3,
                      marginBottom: 10,
                    }}
                  >
                    {topic.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#6B7280",
                      lineHeight: 1.65,
                    }}
                  >
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ownership Checklist */}
        <section
          style={{
            background: "#fff",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div
            className="mx-auto"
            style={{
              maxWidth: 960,
              padding: "clamp(36px, 5vw, 64px) clamp(20px, 4vw, 48px)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(24px, 2.8vw, 34px)",
                fontWeight: 600,
                color: "#2c3a48",
                lineHeight: 1.2,
                marginBottom: 8,
                textAlign: "center",
              }}
            >
              Ownership Checklist
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#6B7280",
                lineHeight: 1.6,
                textAlign: "center",
                maxWidth: 600,
                margin: "0 auto 32px",
              }}
            >
              Key areas to evaluate when deciding how to structure your Adult
              Family Home ownership.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 14,
                maxWidth: 720,
                margin: "0 auto",
              }}
            >
              {checklistItems.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    background: "#f6f5f2",
                    borderRadius: 10,
                    padding: "14px 18px",
                    border: "1px solid rgba(0,0,0,0.04)",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    style={{ flexShrink: 0 }}
                  >
                    <rect
                      x="1"
                      y="1"
                      width="18"
                      height="18"
                      rx="4"
                      stroke="#b87333"
                      strokeWidth="2"
                    />
                    <path
                      d="M6 10l3 3 5-6"
                      stroke="#b87333"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: "#2c3a48",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planning for Success */}
        <section
          style={{
            background: "#f6f5f2",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div
            className="mx-auto"
            style={{
              maxWidth: 960,
              padding: "clamp(36px, 5vw, 64px) clamp(20px, 4vw, 48px)",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(24px, 2.8vw, 34px)",
                fontWeight: 600,
                color: "#2c3a48",
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Planning for Long-Term Success
            </h2>
            <p
              style={{
                fontSize: "clamp(16px, 1.6vw, 18px)",
                color: "#6B7280",
                lineHeight: 1.65,
                maxWidth: 700,
                margin: "0 auto 32px",
              }}
            >
              Informed decisions. Stronger communities. Protect your assets,
              minimize risk, maximize benefits, and build a legacy.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 20,
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              {[
                { label: "Protect Your Assets", icon: "shield" },
                { label: "Minimize Risk", icon: "trend" },
                { label: "Maximize Benefits", icon: "check" },
                { label: "Build a Legacy", icon: "trophy" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                    padding: "20px 16px",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(184,115,51,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon === "shield" && (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    )}
                    {item.icon === "trend" && (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </svg>
                    )}
                    {item.icon === "check" && (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    )}
                    {item.icon === "trophy" && (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7" />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </svg>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#2c3a48",
                      textAlign: "center",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "#1B2B4B",
          }}
        >
          <div
            className="mx-auto"
            style={{
              maxWidth: 960,
              padding: "clamp(36px, 5vw, 64px) clamp(20px, 4vw, 48px)",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(24px, 2.8vw, 34px)",
                fontWeight: 600,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              Stronger Together. Better Outcomes.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.65,
                maxWidth: 600,
                margin: "0 auto 28px",
              }}
            >
              Your AFH. Our priority. Their future. We are in this together.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                justifyContent: "center",
              }}
            >
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#b87333",
                  color: "#fff",
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  padding: "14px 28px",
                  borderRadius: 8,
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#9a5f2b";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#b87333";
                }}
              >
                Connect With an Advisor
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
              <Link
                to="/afh-club/resources"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "#fff",
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  padding: "14px 28px",
                  borderRadius: 8,
                  border: "2px solid rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  transition: "border-color 0.2s ease, background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.6)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                Explore More Resources
              </Link>
            </div>
          </div>
        </section>

        <BackToAFHClub />
        <CTASection />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default AFHOwnershipStructure;
