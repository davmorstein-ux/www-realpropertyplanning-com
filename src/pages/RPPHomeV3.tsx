import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import tilePlanning from "@/assets/tiles/tile-planning-ahead.webp";
import tileHelping from "@/assets/tiles/tile-helping-loved-one.webp";
import tileEstate from "@/assets/tiles/tile-handling-estate.webp";
import tileProfessionals from "@/assets/tiles/tile-find-professionals.webp";
import HomepagePopularResources from "@/components/HomepagePopularResources";
import HomepageReassurance from "@/components/HomepageReassurance";
import HomepageFAQ from "@/components/HomepageFAQ";
import CostOfCareTeaser from "@/components/CostOfCareTeaser";

const tiles = [
  {
    imgSrc: tilePlanning,
    imgAlt: "Older couple reviewing an estate plan together at home",
    title: "I Want to Plan Ahead",
    href: "/planning-before-a-crisis",
    bgColor: "#8b2e2e",
  },
  {
    imgSrc: tileHelping,
    imgAlt: "Adult daughter hugging her senior mother on a couch",
    title: "I'm Helping an Aging Parent",
    href: "/helping-aging-parents",
    bgColor: "#c47c2b",
  },
  {
    imgSrc: tileEstate,
    imgAlt: "Family reviewing an estate property plan with documents",
    title: "I'm Handling an Estate",
    href: "/estate-probate-inherited-property",
    bgColor: "#5c6e9e",
  },
  {
    imgSrc: tileProfessionals,
    imgAlt: "Man at a laptop browsing trusted professional resources",
    title: "I Need a Professional",
    href: "/building-your-trusted-professional-team",
    bgColor: "#7a4f8a",
  },
];

const RPPHomeV3 = () => {
  return (
    <>
      <SEOHead
        title="Real Property Planning | Estate & Senior Resources"
        description="Washington resource hub for probate real estate, inherited property, senior transitions, and trusted professional guidance."
        canonical="https://realpropertyplanning.com"
      />
      <Header />
      <main id="main-content">
        {/* Hero image with logo + tagline overlay */}
        <div style={{ position: "relative", width: "100%", lineHeight: 0 }}>
          <img
            src="/hero-v2.webp"
            alt="Real Property Planning — serving Washington families through senior transitions, probate, and estate sales"
            style={{
              width: "100%",
              display: "block",
              maxHeight: "520px",
              objectFit: "cover",
              objectPosition: "center",
            }}
            loading="eager"
            decoding="async"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              maxWidth: "90%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/rpp-logo-correct-proportions.webp"
              alt="Real Property Planning"
              style={{
                width: "min(520px, 62%)",
                maxWidth: "100%",
                height: "auto",
                display: "block",
                marginBottom: "-0.5rem",
              }}
            />
            <p
              style={{
                fontFamily: "'Raleway', 'Gill Sans', sans-serif",
                fontSize: "clamp(28px, 3.6vw, 42px)",
                fontWeight: 800,
                color: "#1a2744",
                letterSpacing: "0.04em",
                textAlign: "center",
                margin: "0",
                textShadow: "0 1px 6px rgba(255,255,255,0.9), 0 0 18px rgba(255,255,255,0.7)",
              }}
            >
              Estate & Probate Sales · Senior Transitions
              <br />
              Adult Family Home Marketplace
            </p>
          </div>
        </div>

        {/* Orientation */}
        <section className="py-8 md:py-10 lg:py-12 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-[820px] mx-auto text-center">
              <h2 className="font-serif text-[48px] md:text-[56px] lg:text-[60px] font-semibold text-red-900 leading-tight mb-3 md:mb-4">
                Welcome to Real Property Planning
              </h2>
              <p className="font-sans text-[12px] md:text-[13px] font-bold tracking-[0.18em] uppercase text-[hsl(var(--gold-dark))] mb-4 md:mb-5">
                A Free-To-Use Hub · Built For Families · Trusted By Professionals
              </p>
              <p className="text-[19px] md:text-[22px] lg:text-[24px] text-navy font-medium leading-[1.55]">
                Connecting families, seniors, and professionals with the right people and resources.
              </p>
            </div>
          </div>
        </section>

        {/* Funnel Tiles */}
        <section style={{ backgroundColor: "#f5f2ec", padding: "0.5rem 0 4rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
              <h2
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "3rem",
                  fontWeight: 600,
                  color: "#b8963e",
                  margin: 0,
                }}
              >
                What brings you here today?
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "1.25rem",
                marginBottom: "1.25rem",
              }}
            >
              {tiles.map(({ imgSrc, imgAlt, title, href, bgColor }) => (
                <Link key={title} to={href} style={{ textDecoration: "none", display: "block" }}>
                  <div style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.10)" }}>
                    <img
                      src={imgSrc}
                      alt={imgAlt}
                      loading="lazy"
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
                          fontSize: 20,
                          fontWeight: 700,
                          color: "#ffffff",
                          lineHeight: 1.25,
                          margin: 0,
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

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              <CostOfCareTeaser />
              <a
                href="/afh-club"
                style={{
                  backgroundColor: "#f8fafa",
                  border: "2px solid #1a2744",
                  borderRadius: 10,
                  padding: "0.5rem 1.25rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", marginBottom: "1rem" }}>
                  <img
                    src="/afh-club-badge.png"
                    alt="AFH Club"
                    style={{ height: 240, width: "auto", mixBlendMode: "multiply", flexShrink: 0 }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: 40,
                        fontWeight: 800,
                        color: "#1a5c58",
                        margin: "0 0 0.4rem 0",
                      }}
                    >
                      AFH Club
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: 16,
                        fontWeight: 500,
                        color: "#2c3e50",
                        margin: 0,
                      }}
                    >
                      The ultimate resource network for buying, selling, managing and learning about Adult Family Homes.
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#ffffff",
                      backgroundColor: "#1a5c58",
                      padding: "0.7rem 1.5rem",
                      borderRadius: 6,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Explore AFH Club
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
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
              </a>
            </div>
          </div>
        </section>

        <HomepagePopularResources />
        <HomepageReassurance />
        <HomepageFAQ />
      </main>
      <Footer />
    </>
  );
};

export default RPPHomeV3;
