import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import tilePlanning from "@/assets/tiles/tile-planning-ahead.webp";
import tileHelping from "@/assets/tiles/tile-helping-loved-one.webp";
import tileEstate from "@/assets/tiles/tile-handling-estate.webp";
import tileProfessionals from "@/assets/tiles/tile-find-professionals.webp";
import HomepagePopularResources from "@/components/HomepagePopularResources";
import HomepageFAQ from "@/components/HomepageFAQ";

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
        {/* ── Hero ── shrinks gracefully on mobile ─────────────────── */}
        <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
          <img
            src="/hero-v2.webp"
            alt="Real Property Planning — serving Washington families through senior transitions, probate, and estate sales"
            className="block w-full object-cover object-center"
            style={{ height: "clamp(260px, 46vw, 600px)" }}
            loading="eager"
            decoding="async"
          />
          {/* Logo + tagline overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingBottom: "clamp(32px, 5vw, 72px)",
              padding: "0 8% clamp(32px, 5vw, 72px)",
              boxSizing: "border-box",
              gap: "clamp(6px, 1vw, 12px)",
            }}
          >
            <img
              src="/rpp-logo-final.webp"
              alt="Real Property Planning"
              style={{
                width: "clamp(200px, 55vw, 640px)",
                maxWidth: "100%",
                height: "auto",
                display: "block",
              }}
            />
            {/* Tagline — two lines as separate spans */}
            <div id="rpp-tagline" style={{ textAlign: "center" }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(16px, 2.2vw, 32px)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "#7f1d1d",
                  lineHeight: 1,
                  letterSpacing: "0.01em",
                  textShadow: "0 1px 4px rgba(255,255,255,0.7)",
                  marginTop: "clamp(24px, 4vw, 56px)",
                }}
              >
                Guidance for real estate decisions
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(16px, 2.2vw, 32px)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "#7f1d1d",
                  lineHeight: 1,
                  letterSpacing: "0.01em",
                  textShadow: "0 1px 4px rgba(255,255,255,0.7)",
                  marginTop: "0.2em",
                }}
              >
                and later life transitions
              </span>
            </div>
          </div>
        </div>

        {/* ── Descriptor ───────────────────────────────────────────── */}
        <section id="rpp-orientation" className="py-6 md:py-9 bg-cream">
          <div className="w-full px-5 md:px-8">
            <div className="max-w-[1000px] mx-auto text-center">
              <p
                id="rpp-descriptor"
                style={{
                  fontFamily: "Georgia, 'Cormorant Garamond', serif",
                  fontSize: "clamp(18px, 2.4vw, 28px)",
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: "#1a2744",
                  margin: 0,
                  lineHeight: 1.5,
                  letterSpacing: "0.01em",
                  textWrap: "balance" as any,
                }}
              >
                Washington State's leading resource for senior transitions, estate &amp; probate sales, and the Adult
                Family Home marketplace
              </p>
            </div>
          </div>
        </section>

        {/* ── Funnel Tiles ─────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#f5f2ec", padding: "2.5rem 0 4rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
              <h2
                className="rpp-funnel-heading"
                style={{
                  fontFamily: "Georgia, 'Cormorant Garamond', serif",
                  fontSize: "3rem",
                  fontWeight: 600,
                  color: "#1a2744",
                  margin: 0,
                }}
              >
                What brings you here today?
              </h2>
            </div>

            {/* Tap hint — mobile only */}
            <p className="block sm:hidden text-center text-[13px] text-navy/60 font-medium mb-4 tracking-wide">
              Tap a card to get started
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              {tiles.map(({ imgSrc, imgAlt, title, href, bgColor }) => (
                <Link key={title} to={href} className="group block" style={{ textDecoration: "none" }}>
                  <div
                    className="transition-transform duration-200 group-hover:-translate-y-1 group-active:scale-[0.98]"
                    style={{
                      borderRadius: 10,
                      overflow: "hidden",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <img
                        src={imgSrc}
                        alt={imgAlt}
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: "190px", objectFit: "cover" }}
                      />
                      <span
                        className="absolute top-3 right-3 sm:hidden"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.88)",
                          color: "#1a2744",
                          fontSize: 11,
                          fontWeight: 700,
                          fontFamily: "Inter, system-ui, sans-serif",
                          padding: "3px 8px",
                          borderRadius: 20,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                      >
                        Explore →
                      </span>
                    </div>
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

            {/* ── Secondary cards: Cost of Care + AFH Club ─────────── */}
            <style>{`
              .rpp-card-desc {
                color: #1a2744 !important;
                opacity: 1 !important;
                font-weight: 600 !important;
              }
            `}</style>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
              <a
                href="/cost-of-care-calculator"
                className="group block transition-transform duration-200 hover:-translate-y-1"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  background: "#ffffff",
                  border: "2px solid #2f5fd8",
                  borderRadius: 12,
                  padding: "1.25rem 1.5rem",
                  minHeight: 220,
                }}
              >
                <h3
                  className="coc-heading"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "40px",
                    fontWeight: 900,
                    margin: "0 0 20px",
                    lineHeight: 1.1,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ color: "#1a2744" }}>Cost of Care</span>{" "}
                  <span style={{ color: "#2f5fd8" }}>Calculator</span>
                </h3>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "stretch",
                    gap: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      minWidth: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div
                      className="rpp-card-desc coc-desc"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: 20,
                        color: "#1a2744",
                        lineHeight: 1.5,
                        margin: "0 0 14px",
                        maxWidth: 320,
                      }}
                    >
                      Compare in-home care, assisted living, memory care, and more — in Washington versus national
                      averages.
                    </div>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "#2f5fd8",
                        color: "#ffffff",
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 700,
                        fontSize: 16,
                        padding: "10px 20px",
                        borderRadius: 8,
                        marginTop: "auto",
                      }}
                    >
                      Calculate My Costs →
                    </span>
                  </div>
                  <img
                    src="/cost-of-care-calc-graphic.webp"
                    alt=""
                    aria-hidden="true"
                    style={{ height: 220, width: "auto", flexShrink: 0, display: "block", alignSelf: "center" }}
                  />
                </div>
              </a>

              <a
                href="/afh-club"
                className="group block transition-transform duration-200 hover:-translate-y-1"
                style={{
                  textDecoration: "none",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  border: "2px solid #0a5648",
                  borderRadius: 12,
                  padding: "1.5rem",
                  minHeight: 220,
                  overflow: "hidden",
                  backgroundImage: "url(/afh-club-house-bg.webp)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Readability overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(255,255,255,0.62)",
                  }}
                />

                {/* Content sits above the overlay */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <h3
                    className="afh-club-heading"
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "72px",
                      fontWeight: 700,
                      color: "#0a5648",
                      margin: "0 0 10px",
                      lineHeight: 1.1,
                    }}
                  >
                    AFH Club
                  </h3>
                  <div style={{ width: 64, height: 2, background: "#c9c2b4", margin: "0 0 14px" }} />
                  <div
                    className="rpp-card-desc afh-club-desc"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: 20,
                      color: "#1a2744",
                      lineHeight: 1.5,
                      margin: "0 0 16px",
                      maxWidth: 360,
                    }}
                  >
                    The ultimate resource network for buying, selling, managing and learning about Adult Family Homes.
                  </div>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "#0a5648",
                      color: "#ffffff",
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      padding: "10px 20px",
                      borderRadius: 8,
                      marginTop: "auto",
                    }}
                  >
                    Explore AFH Club →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <HomepagePopularResources />
        <HomepageFAQ />
      </main>
      <Footer />
    </>
  );
};

export default RPPHomeV3;
