import { Link } from "react-router-dom";
import heroAsset from "@/assets/hero-homepage-new.webp.asset.json";
import tilePlanning from "@/assets/tiles/tile-planning-ahead.webp";
import tileHelping from "@/assets/tiles/tile-helping-loved-one.webp";
import tileEstate from "@/assets/tiles/tile-handling-estate.webp";
import tileProfessionals from "@/assets/tiles/tile-find-professionals.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const tiles = [
  { imgSrc: tilePlanning, imgAlt: "Older couple reviewing an estate plan together at home", title: "I Want to Plan Ahead", href: "/planning-before-a-crisis", bgColor: "#8b2e2e" },
  { imgSrc: tileHelping, imgAlt: "Adult daughter hugging her senior mother on a couch", title: "I'm Helping an Aging Parent", href: "/helping-aging-parents", bgColor: "#c47c2b" },
  { imgSrc: tileEstate, imgAlt: "Family reviewing an estate property plan with documents", title: "I'm Handling an Estate", href: "/estate-probate-inherited-property", bgColor: "#5c6e9e" },
  { imgSrc: tileProfessionals, imgAlt: "Man at a laptop browsing trusted professional resources", title: "I Need a Professional", href: "/building-your-trusted-professional-team", bgColor: "#7a4f8a" },
];

const HomepageNew = () => (
  <>
    <SEOHead
      title="Real Property Planning | Estate & Senior Resources"
      description="Washington resource hub for probate real estate, inherited property, senior transitions, and trusted professional guidance."
      canonical="https://realpropertyplanning.com"
    />
    <Header />
    <main id="main-content">
      {/* Hero Image */}
      <section style={{ backgroundColor: "#1a2744", minHeight: "320px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src="/logo.webp"
          alt="Real Property Planning"
          style={{ maxHeight: "120px", width: "auto" }}
        />
      </section>

      {/* Orientation */}
      <section className="py-8 md:py-10 lg:py-12" style={{ backgroundColor: "#f5f2ec" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: 600,
              color: "#8b2e2e",
              lineHeight: 1.15,
              margin: "0 0 0.75rem",
            }}
          >
            Welcome to Real Property Planning
          </h2>
          <p
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#b8963e",
              margin: "0 0 1.25rem",
            }}
          >
            A Free-To-Use Hub · Built For Families · Trusted By Professionals
          </p>
          <p
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
              fontWeight: 500,
              color: "#1a2744",
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            Connecting families, seniors, and professionals with the right people and resources.
          </p>
        </div>
      </section>

      {/* Funnel Tiles */}
      <section style={{ backgroundColor: "#f5f2ec", padding: "0.5rem 0 4rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "2.25rem",
                fontWeight: 600,
                color: "#b8963e",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              What brings you here today?
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.25rem",
              marginBottom: "1.25rem",
            }}
          >
            {tiles.map(({ imgSrc, imgAlt, title, href, bgColor }) => (
              <Link key={title} to={href} aria-label={title} style={{ textDecoration: "none", display: "block" }}>
                <div
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    cursor: "pointer",
                    height: "100%",
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 28px rgba(0,0,0,0.16)";
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.10)";
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={imgAlt}
                    loading="lazy"
                    decoding="async"
                    style={{ display: "block", width: "100%", height: "190px", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      backgroundColor: bgColor,
                      padding: "1.1rem 1.25rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                      minHeight: "70px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#ffffff",
                        lineHeight: 1.25,
                      }}
                    >
                      {title}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ flexShrink: 0, opacity: 0.8 }}
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* AFH Club */}
          <Link to="/afh-club" aria-label="Explore the AFH Club" style={{ textDecoration: "none", display: "block" }}>
            <div
              style={{
                backgroundColor: "#1a7a78",
                borderRadius: "10px",
                padding: "2rem 2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "2rem",
                flexWrap: "wrap",
                boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 28px rgba(0,0,0,0.18)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                <img
                  src="/afh-club-badge.png"
                  alt="AFH Club"
                  style={{ height: "80px", width: "auto", display: "block", flexShrink: 0 }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "26px",
                      fontWeight: 800,
                      color: "#ffffff",
                      lineHeight: 1.2,
                      margin: "0 0 0.4rem",
                    }}
                  >
                    AFH Club
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#d4f0ee",
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    The ultimate resource network for buying, selling, managing and learning about Adult Family Homes.
                  </p>
                </div>
              </div>

              <span
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#1a7a78",
                  backgroundColor: "#ffffff",
                  padding: "0.65rem 1.5rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "background-color 0.15s ease",
                }}
              >
                Explore AFH Club
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default HomepageNew;
