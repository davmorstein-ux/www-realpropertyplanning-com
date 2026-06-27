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
          {/* Logo + tagline overlay — stacked vertically, centered in hero */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingBottom: "clamp(16px, 3vw, 48px)",
              padding: "0 8%",
              boxSizing: "border-box",
              gap: "clamp(12px, 2vw, 28px)",
            }}
          >
            <img
              src="/rpp-logo-final.webp"
              alt="Real Property Planning"
              style={{
                width: "clamp(160px, 46vw, 540px)",
                maxWidth: "100%",
                height: "auto",
                display: "block",
              }}
            />
            <p
              id="rpp-tagline"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(16px, 2.2vw, 32px)",
                fontWeight: 600,
                fontStyle: "italic",
                color: "#7f1d1d",
                margin: 0,
                lineHeight: 1.35,
                letterSpacing: "0.01em",
                textAlign: "center",
                textShadow: "0 1px 4px rgba(255,255,255,0.7)",
                whiteSpace: "pre-line",
              }}
            >
              {"Guidance for real estate decisions\nand later life transitions"}
            </p>
          </div>
        </div>

        {/* ── Descriptor ───────────────────────────────────────────── */}
        <section id="rpp-orientation" className="py-5 md:py-7 bg-cream">
          <div className="w-full px-5 md:px-8">
            <div className="max-w-[860px] mx-auto text-center">
              <p
                id="rpp-descriptor"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(18px, 2.4vw, 28px)",
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: "#1a2744",
                  margin: 0,
                  lineHeight: 1.5,
                  letterSpacing: "0.01em",
                }}
              >
                Washington State's leading resource for senior transitions, estate &amp; probate sales, and the Adult
                Family Home marketplace
              </p>
            </div>
          </div>
        </section>

        {/* ── Funnel Tiles ─────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#f5f2ec", padding: "0.5rem 0 4rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
              <h2
                className="rpp-funnel-heading"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
              <a
                href="/cost-of-care-calculator"
                className="group block transition-transform duration-200 hover:-translate-y-1"
                style={{ textDecoration: "none", display: "block" }}
              >
                <img
                  src="/cost-of-care-button.webp"
                  alt="Cost of Care Calculator — compare Home Care, Assisted Living, Memory Care, Adult Family Homes, Nursing Homes, and Adult Day Care costs. Plan Ahead With Confidence."
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}
                />
              </a>
              <a
                href="/afh-club"
                className="group block transition-transform duration-200 hover:-translate-y-1"
                style={{ textDecoration: "none", display: "block" }}
              >
                <img
                  src="/afh-club-button.webp"
                  alt="AFH Club — the ultimate resource network for buying, selling, managing and learning about Adult Family Homes."
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}
                />
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
