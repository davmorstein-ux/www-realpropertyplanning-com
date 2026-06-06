import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
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

const AFHClub = () => (
  <>
    <SEOHead
      title="AFH Club | Adult Family Home Resource Network | Real Property Planning"
      description="Washington State's premier resource network for Adult Family Home owners, prospective providers, buyers, and the professionals who serve them."
      canonical="https://realpropertyplanning.com/afh-club"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section
        style={{
          background: "#edf0f3",
          padding: "72px 24px 64px",
          textAlign: "center",
          borderBottom: "3px solid #b87333",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {/* Badge */}
          <div style={{ marginBottom: 36 }}>
            <img
              src="/afh-club-badge.webp"
              alt="AFH Club — Washington State Adult Family Home Resource Network"
              style={{
                width: "100%",
                maxWidth: 200,
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
              loading="eager"
            />
          </div>

          <p
            style={{
              fontSize: 12,
              fontFamily: "'Raleway', 'Gill Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a4e1a",
              margin: "0 0 14px",
            }}
          >
            Real Property Planning
          </p>

          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 54px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#1a2530",
              lineHeight: 1.15,
              margin: "0 0 10px",
            }}
          >
            AFH Club
          </h1>

          <p
            style={{
              fontSize: 19,
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              color: "#7a4e1a",
              letterSpacing: "0.06em",
              margin: "0 0 24px",
            }}
          >
            Washington State Adult Family Home Resource Network
          </p>

          <div
            style={{
              width: 48,
              height: 3,
              background: "#b87333",
              margin: "0 auto 32px",
              borderRadius: 1,
            }}
          />

          <p
            style={{
              fontSize: "clamp(17px, 2vw, 19px)",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#1e2e3e",
              lineHeight: 1.85,
              margin: "0 auto 20px",
              maxWidth: 640,
            }}
          >
            Adult Family Homes are among Washington State's most vital — and most complex — care environments. Whether
            you are exploring the business for the first time, navigating licensing and building requirements, looking
            to buy or sell an AFH, or searching for qualified professionals, AFH Club exists as a neutral resource
            network for everyone in the AFH community.
          </p>

          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#2e3e4e",
              lineHeight: 1.85,
              margin: "0 auto",
              maxWidth: 580,
            }}
          >
            No memberships. No fees. Simply a curated collection of resources, directories, and connections — organized
            so you can find exactly what you need.
          </p>
        </div>
      </section>

      {/* Topic divider */}
      <div
        style={{
          background: "#2c3a48",
          padding: "18px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 12,
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#e8e2d9",
          }}
        >
          Select a topic below to explore
        </p>
      </div>

      {/* Carousel */}
      <AFHCarousel />

      {/* Topic list */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "56px 24px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 700,
            color: "#0a1628",
            marginBottom: 8,
            letterSpacing: "-0.01em",
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
                padding: "20px 0",
                borderBottom: "1px solid #e0d8c8",
                borderTop: i === 0 ? "1px solid #e0d8c8" : "none",
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(184,115,51,0.04)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
            >
              {/* Thumbnail */}
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
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3
                  style={{
                    fontSize: 19,
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
                    fontSize: 15,
                    color: "#1e2a38",
                    margin: "0 0 12px",
                    lineHeight: 1.65,
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {topic.description}
                </p>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: "'Raleway', 'Gill Sans', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#7a4e1a",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  Explore Topic
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

      {/* What is an AFH section */}
      <section
        style={{
          background: "#f7f4ef",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a4e1a",
              margin: "0 0 16px",
            }}
          >
            Background
          </p>
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#0a1628",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            What Is an Adult Family Home?
          </h2>
          <div
            style={{
              width: 40,
              height: 3,
              background: "#b87333",
              marginBottom: 32,
              borderRadius: 1,
            }}
          />
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: "0 0 22px",
            }}
          >
            An Adult Family Home (AFH) is a private residence licensed by the Washington State Department of Social and
            Health Services (DSHS) to provide personal care, room, and board for up to six adults who are unrelated to
            the service provider. In certain circumstances, an existing licensed AFH may be expanded to serve up to
            eight residents.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: "0 0 22px",
            }}
          >
            AFHs are permitted in all single-family residential zoning districts throughout Washington State and are
            regulated under WAC 388-76 and RCW 70.128. They represent one of the most personal and community-integrated
            forms of long-term care available — and one of the most regulated.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            DSHS licensors conduct unannounced inspections on a regular cycle. Providers must maintain continuous
            compliance with licensing, training, building, and care standards — which is precisely why having access to
            organized, reliable information matters.
          </p>
        </div>
      </section>

      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHClub;
