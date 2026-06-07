import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import AFHCarousel from "@/components/AFHCarousel";

const CATEGORIES = [
  {
    title: "AFH Resources",
    href: "/afh-club/resources",
    img: "/afh-resources.webp",
    description: "Licensing, training, building requirements, costs, regulations, and more — organized by topic.",
    placeholder: "#2c3a48",
  },
  {
    title: "AFH Listings",
    href: "/afh-club/listings",
    img: "/afh-listings.webp",
    description: "Adult Family Homes currently available for sale throughout Washington State.",
    placeholder: "#2a3848",
  },
  {
    title: "Management Companies",
    href: "/afh-club/management-companies",
    img: "/afh-management-companies.webp",
    description: "Professional AFH management companies serving Washington State owners and operators.",
    placeholder: "#283646",
  },
  {
    title: "AFH Real Estate Broker",
    href: "/afh-club/real-estate-broker",
    img: "/afh-real-estate-broker.webp",
    description: "A licensed Washington State real estate broker specializing in Adult Family Home transactions.",
    placeholder: "#263444",
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
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ marginBottom: 16 }}>
            <img
              src="/afh-club-badge.webp"
              alt="AFH Club — Washington State Adult Family Home Resource Network"
              style={{
                width: "100%",
                maxWidth: 200,
                height: "auto",
                display: "block",
                margin: "0 auto",
                mixBlendMode: "multiply",
              }}
              loading="eager"
              width={200}
              height={200}
            />
          </div>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#5a3200",
              margin: "0 0 16px",
            }}
          >
            Real Property Planning
          </p>
          <h1
            style={{
              fontSize: "clamp(52px, 7vw, 72px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#1a2530",
              lineHeight: 1.1,
              margin: "0 0 12px",
            }}
          >
            AFH Club
          </h1>
          <p
            style={{
              fontSize: "clamp(24px, 3vw, 30px)",
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              color: "#5a3200",
              letterSpacing: "0.06em",
              margin: "0 0 28px",
            }}
          >
            Washington State Adult Family Home Resource Network
          </p>
          <div style={{ width: 56, height: 3, background: "#b87333", margin: "0 auto 36px", borderRadius: 1 }} />
          <p
            style={{
              fontSize: "clamp(20px, 2vw, 24px)",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#1e2a38",
              lineHeight: 1.8,
              margin: "0 auto 20px",
              maxWidth: 680,
            }}
          >
            Washington State's most comprehensive resource network for Adult Family Home owners, prospective providers,
            investors, and the professionals who serve them. Whether you are opening your first AFH, managing an
            existing operation, or looking to buy or sell — AFH Club is your starting point.
          </p>
          <p
            style={{
              fontSize: "clamp(20px, 2vw, 24px)",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#1e2a38",
              lineHeight: 1.8,
              margin: "0 auto",
              maxWidth: 600,
            }}
          >
            No memberships. No fees. No agenda. Simply authoritative, organized resources built for the AFH community
            throughout Washington State.
          </p>
        </div>
      </section>

      {/* Welcome banner */}
      <div style={{ background: "#2c3a48", padding: "22px 24px", textAlign: "center" }}>
        <p
          style={{
            margin: 0,
            fontSize: 18,
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#e8e2d9",
          }}
        >
          Welcome to the AFH Club
        </p>
      </div>

      {/* Carousel */}
      <AFHCarousel categories={CATEGORIES} />

      {/* Category list */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px 80px" }}>
        <h2
          style={{
            fontSize: "clamp(26px, 3vw, 36px)",
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            color: "#0a1628",
            marginBottom: 8,
          }}
        >
          Explore AFH Club
        </h2>
        <div style={{ width: 48, height: 3, background: "#b87333", marginBottom: 40, borderRadius: 1 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.href}
              to={cat.href}
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
                  background: cat.placeholder,
                  boxShadow: "0 2px 12px rgba(10,22,40,0.12)",
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  width={90}
                  height={120}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
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
                  {cat.title}
                </h3>
                <p
                  style={{
                    fontSize: "clamp(16px, 1.6vw, 18px)",
                    color: "#1e2a38",
                    margin: "0 0 12px",
                    lineHeight: 1.65,
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {cat.description}
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
                  Explore{" "}
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

      {/* What is an AFH */}
      <section style={{ background: "#f7f4ef", padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 14,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#5a3200",
              margin: "0 0 16px",
            }}
          >
            Background
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#0a1628",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            What Is an Adult Family Home?
          </h2>
          <div style={{ width: 40, height: 3, background: "#b87333", marginBottom: 32, borderRadius: 1 }} />
          <p
            style={{
              fontSize: "clamp(20px, 2vw, 24px)",
              fontFamily: "'Raleway', sans-serif",
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: "0 0 22px",
            }}
          >
            An Adult Family Home (AFH) is a private residence licensed by the Washington State Department of Social and
            Health Services (DSHS) to provide personal care, room, and board for up to six adults who are unrelated to
            the service provider.
          </p>
          <p
            style={{
              fontSize: "clamp(20px, 2vw, 24px)",
              fontFamily: "'Raleway', sans-serif",
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: "0 0 22px",
            }}
          >
            AFHs are permitted in all single-family residential zoning districts throughout Washington State and are
            regulated under WAC 388-76 and RCW 70.128.
          </p>
          <p
            style={{
              fontSize: "clamp(20px, 2vw, 24px)",
              fontFamily: "'Raleway', sans-serif",
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            DSHS licensors conduct unannounced inspections on a regular cycle. Providers must maintain continuous
            compliance with licensing, training, building, and care standards — which is precisely why organized,
            reliable information matters.
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
