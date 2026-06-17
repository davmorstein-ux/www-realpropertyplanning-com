import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import HeroBandTitle from "@/components/HeroBandTitle";
import AFHCarousel from "@/components/AFHCarousel";

const TOPICS = [
  {
    title: "Getting Started",
    href: "/afh-club/getting-started",
    img: "/afh-getting-started.webp",
    description: "Is an Adult Family Home the right business for you? What to know before you begin.",
  },
  {
    title: "Licensing & Certification",
    href: "/afh-club/licensing-certification",
    img: "/afh-licensing-certification.webp",
    description: "DSHS license application, Home Care Aide certification, background checks, and more.",
  },
  {
    title: "Training & Education",
    href: "/afh-club/training-education",
    img: "/afh-training-education.webp",
    description: "75-hour orientation, AFH Administrator training, specialty courses, and where to enroll.",
  },
  {
    title: "Building & Inspection",
    href: "/afh-club/building-inspection",
    img: "/afh-building-inspection.webp",
    description: "Building code requirements, WABO, permits, floor plans, and septic system considerations.",
  },
  {
    title: "Costs & Fees",
    href: "/afh-club/costs-fees",
    img: "/afh-costs-fees.webp",
    description: "Licensing fees, application costs, liability insurance requirements, and Medicaid rates.",
  },
  {
    title: "Buying or Selling an AFH",
    href: "/afh-club/buying-selling",
    img: "/afh-buying-selling.webp",
    description: "The CHOW process, AFH listings, specialty contract transferability, and real estate guidance.",
  },
  {
    title: "Regulations & Compliance",
    href: "/afh-club/regulations-compliance",
    img: "/afh-regulations-compliance.webp",
    description: "WAC 388-76, RCW 70.128, DSHS unannounced inspections, violations, and record-keeping.",
  },
  {
    title: "Find a Professional",
    href: "/afh-club/find-a-professional",
    img: "/afh-find-professional.webp",
    description: "AFH management companies, inspectors, CPAs, elder law attorneys, and real estate brokers.",
  },
];

const AFHResources = () => (
  <>
    <SEOHead
      title="AFH Resources | AFH Club | Real Property Planning"
      description="Comprehensive Adult Family Home resources for Washington State — licensing, training, building requirements, costs, regulations, and professional directories."
      canonical="https://realpropertyplanning.com/afh-club/resources"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "AFH Resources", url: "https://realpropertyplanning.com/afh-club/resources" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b87333" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "clamp(18px, 2vw, 20px)",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#1e2a38",
              lineHeight: 1.85,
              maxWidth: 680,
            }}
          >
            Everything you need to know about opening, operating, buying, or selling an Adult Family Home in Washington
            State — organized by topic so you can go straight to what matters most.
          </p>
        </div>
      </section>
      <HeroBandTitle>AFH Resource Library</HeroBandTitle>

      <AFHCarousel
        categories={[
          {
            title: "AFH Ownership: Individual or LLC?",
            href: "/afh-club/ownership-structure",
            img: "/__l5e/assets-v1/7a895a21-63fc-4733-bc7a-2faa63337afa/afh-ownership-structure.webp",
            placeholder: "#ff0000",
          },
        ]}
      />

      {/* Topic list */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px 80px" }}>
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 34px)",
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            color: "#0a1628",
            marginBottom: 8,
          }}
        >
          All Topics
        </h2>
        <div style={{ width: 48, height: 3, background: "#b87333", marginBottom: 40, borderRadius: 1 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {TOPICS.map((topic, i) => (
            <Link
              key={topic.href}
              to={topic.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                padding: "22px 0",
                borderBottom: "1px solid #e0d8c8",
                borderTop: i === 0 ? "1px solid #e0d8c8" : "none",
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(184,115,51,0.04)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 90,
                  height: 120,
                  borderRadius: 4,
                  overflow: "hidden",
                  background: "#2c3a48",
                  boxShadow: "0 2px 12px rgba(10,22,40,0.12)",
                }}
              >
                <img
                  src={topic.img}
                  alt={topic.title}
                  width={90}
                  height={120}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                  loading="lazy"
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3
                  style={{
                    fontSize: "clamp(18px, 2vw, 22px)",
                    fontWeight: 700,
                    color: "#0a1628",
                    margin: "0 0 8px",
                    lineHeight: 1.3,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {topic.title}
                </h3>
                <p
                  style={{
                    fontSize: "clamp(16px, 1.6vw, 18px)",
                    color: "#1e2a38",
                    margin: "0 0 12px",
                    lineHeight: 1.65,
                    fontFamily: "'Raleway', sans-serif",
                  }}
                >
                  {topic.description}
                </p>
                <span
                  style={{
                    fontSize: 14,
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#5a3200",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  Explore Topic{" "}
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHResources;
