import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import tilePlanning from "@/assets/tiles/tile-planning-ahead.webp";
import tileHelping from "@/assets/tiles/tile-helping-loved-one.webp";
import tileEstate from "@/assets/tiles/tile-handling-estate.webp";
import tileProfessionals from "@/assets/tiles/tile-find-professionals.webp";
import HomepagePopularResources from "@/components/HomepagePopularResources";
import HomepageTestimonials from "@/components/HomepageTestimonials";
import HomepageFAQ from "@/components/HomepageFAQ";
import AboutTheHub from "@/components/AboutTheHub";
import { formatCurrency } from "@/lib/careTypes";
import { CARE_CALCULATORS, careTypeFor } from "@/lib/careCalculators";

const tileMeta = [
  { key: "planAhead", href: "/planning-before-a-crisis", bgColor: "#D97706", imgSrc: tilePlanning },
  { key: "helpingParent", href: "/helping-an-aging-parent", bgColor: "#246044", imgSrc: tileHelping },
  { key: "handlingEstate", href: "/estate-probate-inherited-property", bgColor: "#25597e", imgSrc: tileEstate },
  {
    key: "needProfessional",
    href: "/building-your-trusted-professional-team",
    bgColor: "#5d2f74",
    imgSrc: tileProfessionals,
  },
] as const;



const RPPHomeV3 = () => {
  const { t } = useTranslation();

  /* Every value on this tile derives from CARE_CALCULATORS — the same list the
     calculator hub and the switcher strip read. The list shown here used to be
     "care types not currently rotating", which after the rotation was removed
     left an arbitrary subset: it omitted adult family homes, assisted living
     and memory care while advertising options the hub does not cover. */
  const careOptions = CARE_CALCULATORS.map((o) => ({ option: o, care: careTypeFor(o) }));
  const careMonthlyFigures = CARE_CALCULATORS.map((o) => careTypeFor(o).waMonthly);
  const careMonthlyLow = Math.min(...careMonthlyFigures);
  const careMonthlyHigh = Math.max(...careMonthlyFigures);

  return (
    <>
      <SEOHead title={t("seo.title")} description={t("seo.description")} canonical="https://realpropertyplanning.com" />
      <Header />

      <main id="main-content">
        {/* ── Hero ── height driven by content, image is a background layer ── */}
        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <img
            id="rpp-hero-image"
            src="/hero-v2.webp"
            srcSet="/hero-v2-640w.webp 640w, /hero-v2-960w.webp 960w, /hero-v2-1280w.webp 1280w, /hero-v2-1691w.webp 1691w"
            sizes="100vw"
            width={1691}
            height={756}
            alt={t("hero.imageAlt")}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            /* WAS fetchPriority — React does not recognise the camelCase form
               on a DOM element and drops it with a console warning, so the
               hero never actually received high priority. Lowercase is the
               attribute the browser reads. */
            fetchPriority="high"
            decoding="async"
          />
          {/* Logo + tagline overlay — normal flow, so this content's own
              height determines the hero's height on every screen size.

              The two hero CTA buttons were removed: "Find the Right Starting
              Point" only scrolled to tiles already visible in the same
              viewport, and "Connect with a Specialist" duplicated the
              "I Need a Professional" funnel tile below. */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(24px, 3vw, 40px) 8%",
              boxSizing: "border-box",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.55) 55%, rgba(255,255,255,0) 100%)",
              gap: "clamp(6px, 1vw, 12px)",
            }}
          >
            {/* Tagline in #1B3A6B — the same navy used by the homepage
                descriptor and the calculator tile's secondary text. */}
            <h1 id="rpp-tagline" style={{ textAlign: "center", margin: 0 }}>
              <span
                className="rpp-tagline-line-v2"
                style={{
                  display: "block",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(28px, 4.4vw, 62px)",
                  fontWeight: 700,
                  fontStyle: "normal",
                  color: "#1B3A6B",
                  lineHeight: 1,
                  letterSpacing: "0.01em",
                  textShadow: "0 1px 3px rgba(255,255,255,0.85)",
                  marginTop: "clamp(8px, 1.5vw, 20px)",
                }}
              >
                {t("hero.taglineLine1")}
              </span>
              <span
                className="rpp-tagline-line-v2"
                style={{
                  display: "block",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(28px, 4.4vw, 62px)",
                  fontWeight: 700,
                  fontStyle: "normal",
                  color: "#1B3A6B",
                  lineHeight: 1,
                  letterSpacing: "0.01em",
                  textShadow: "0 1px 3px rgba(255,255,255,0.85)",
                  marginTop: "0.2em",
                }}
              >
                {" "}
                {t("hero.taglineLine2")}
              </span>
            </h1>
          </div>
        </div>

        {/* ── Funnel Tiles ─────────────────────────────────────────── */}
        <section id="rpp-start-here" style={{ backgroundColor: "#f5f2ec", padding: "2.5rem 0 4rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
              <h2
                className="rpp-funnel-heading"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "2.25rem",
                  fontWeight: 500,
                  color: "#272421",
                  margin: 0,
                }}
              >
                {t("funnel.heading")}
              </h2>
            </div>

            <p className="block sm:hidden text-center text-base text-navy font-medium mb-4 tracking-wide">
              {t("funnel.mobileHint")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              {tileMeta.map(({ key, href, bgColor, imgSrc }) => {
                const title = t(`funnel.tiles.${key}.title`);
                const imgAlt = t(`funnel.tiles.${key}.imgAlt`);
                return (
                  <Link key={key} to={href} className="group block" style={{ textDecoration: "none" }}>
                    <div
                      className="marquee-hover group-active:scale-[0.98] transition-transform duration-150"
                      style={{ borderRadius: 10 }}
                    >
                      <div
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
                            className="absolute top-3 right-3 sm:hidden rpp-explore-badge"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.88)",
                              color: "#272421",
                              fontSize: 11,
                              fontWeight: 700,
                              fontFamily: "'DM Sans', system-ui, sans-serif",
                              padding: "3px 8px",
                              borderRadius: 20,
                              letterSpacing: "0.04em",
                            }}
                          >
                            {t("funnel.exploreBadge")}
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
                              fontFamily: "'DM Sans', system-ui, sans-serif",
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
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* ── Scoped styles ───────────────────────────────────────
                text-transform lives in classes rather than inline styles:
                a global [style*="text-transform: uppercase"] selector in
                index.css forces font-weight 600 on anything declaring it
                inline. Doubled class names beat the global
                "main p font-size !important" rule. */}
            <style>{`
  .rpp-explore-badge.rpp-explore-badge {
    text-transform: uppercase;
  }

  .rpp-funnel-heading.rpp-funnel-heading {
    font-size: 2.25rem !important;
  }

              /* Cost of Care tile — three columns on desktop: heading+CTA on
                 the left, rotating figures in the middle, and the full list
                 of care types on the right. Secondary text throughout uses
                 a single dark blue (#25597e, 7.48:1 on white) so the tile
                 has one supporting color rather than two; the care-type
                 figures stay the only accent colors. */
              .rpp-coc-card.rpp-coc-card {
                display: block;
                background: #ffffff;
                border: 3px solid #7f1d1d;
                border-radius: 12px;
                padding: 1.35rem 1.6rem;
                /* Same lift as the funnel tiles above, so this card belongs
                   to the same visual system instead of sitting flat. */
                box-shadow: 0 2px 12px rgba(0,0,0,0.10);
              }
              /* The whole card is a link, so a global anchor rule underlines
                 every descendant. Strip it explicitly, everywhere. */
              .rpp-coc-card.rpp-coc-card,
              .rpp-coc-card.rpp-coc-card * {
                text-decoration: none !important;
              }
              /* Two columns now, not three. The middle column held rotating
                 figures; with those gone it left a gap, so the range moved in
                 beside the heading and the options list takes the right. */
              .rpp-coc-layout.rpp-coc-layout {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                align-items: center;
              }
              .rpp-coc-rangelabel {
                font-family: 'DM Sans', system-ui, sans-serif;
                font-size: 16px !important;
                font-weight: 700;
                color: #25597e;
                line-height: 1.3;
                margin-bottom: 2px;
              }
              .rpp-coc-range {
                font-family: Georgia, serif;
                font-size: 30px;
                font-weight: 700;
                color: #7f1d1d;
                line-height: 1.15;
                white-space: nowrap;
              }
              .rpp-coc-rangeper {
                font-family: 'DM Sans', system-ui, sans-serif;
                font-size: 16px;
                font-weight: 600;
              }
              /* Name left, figure right, on one row per option — the figures
                 line up in a column so they can be compared at a glance. */
              .rpp-coc-options.rpp-coc-options {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                margin: 0;
                padding: 0 0 0 2rem;
                border-left: 1px solid #f0ece5;
                list-style: none;
              }
              .rpp-coc-options.rpp-coc-options li {
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                gap: 1rem;
              }
             /* Each option takes its own colour, matching the calculator
                 pages and the switcher cards. Six distinct hues, all clearing
                 4.5:1 on white — the label always sits beside the figure, so
                 colour reinforces rather than carries the meaning. */
              .rpp-coc-opt-name {
                font-family: 'DM Sans', system-ui, sans-serif;
                font-size: 17px !important;
                font-weight: 700;
                color: var(--opt-color, #25597e) !important;
                line-height: 1.35;
              }
              .rpp-coc-opt-figure {
                font-family: Georgia, serif;
                font-size: 18px !important;
                font-weight: 700;
                color: #272421;
                line-height: 1.35;
                white-space: nowrap;
              }
              .rpp-coc-left.rpp-coc-left {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 1.1rem;
              }
              /* Bullets are drawn with ::before rather than list-style,
                 because the <ul> is display:flex and native markers render
                 inconsistently on flex children. */
              /* The descriptor's inline clamp() was being overridden by the
                 global "main p { font-size: ... !important }" rule, so it
                 rendered at a flat 18px. Doubled class + !important wins. */
              .rpp-descriptor-text.rpp-descriptor-text {
                font-size: clamp(21px, 2.6vw, 31px) !important;
                line-height: 1.5 !important;
                font-weight: 400 !important;
                color: #1B3A6B !important;
              }

              /* Rotation controls sit OUTSIDE the card's anchor — a button
                 inside an <a> is invalid markup and would navigate on click
                 instead of pausing. */
              .rpp-coc-controls {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 12px;
                margin-top: 10px;
              }
              .rpp-coc-pause {
                min-height: 44px;
                padding: 6px 16px;
                font-family: 'DM Sans', system-ui, sans-serif;
                font-size: 15px !important;
                font-weight: 700;
                color: #7f1d1d;
                background: transparent;
                border: 2px solid #7f1d1d;
                border-radius: 6px;
                cursor: pointer;
              }
              .rpp-coc-pause:hover { background: rgba(127,29,29,0.06); }
              .rpp-coc-pause:focus-visible { outline: 3px solid #d1a847; outline-offset: 2px; }
              .rpp-coc-dots { display: inline-flex; gap: 7px; }
              .rpp-coc-dot {
                width: 11px; height: 11px; padding: 0;
                border-radius: 50%;
                border: 1px solid #7f1d1d;
                background: transparent;
                cursor: pointer;
              }
              .rpp-coc-dot.is-current { background: #7f1d1d; }

              @media (max-width: 768px) {
                .rpp-coc-layout.rpp-coc-layout {
                  grid-template-columns: 1fr;
                  gap: 1rem;
                  align-items: stretch;
                }
                .rpp-coc-options.rpp-coc-options {
                  border-left: none;
                  border-top: 1px solid #f0ece5;
                  padding: 0.9rem 0 0 0;
                }
                .rpp-coc-card.rpp-coc-card {
                  padding: 1.2rem 1.25rem;
                }
              }

            `}</style>

            {/* ── What is Real Property Planning? ──────────────────── */}
            <AboutTheHub />

            {/* ── Cost of Care Calculator — two columns ──────────────── */}
            <div>
              <a href="/cost-of-care-calculator" className="rpp-coc-card group marquee-hover">
                <div className="rpp-coc-layout">
                  <div className="rpp-coc-left">
                    <h3
                      className="coc-heading"
                      style={{
                        fontFamily: "Georgia, serif",
                        margin: 0,
                        lineHeight: 1.1,
                      }}
                    >
                      <span style={{ color: "#272421" }}>{t("costOfCare.headingPart1")}</span>{" "}
                      <span style={{ color: "#7f1d1d" }}>{t("costOfCare.headingPart2")}</span>
                    </h3>

                    {/* The range sits with the heading rather than in its own
                        column: alone in the middle it read as a stray figure. */}
                    <div>
                      <div className="rpp-coc-rangelabel">Monthly cost in Washington</div>
                      <div className="rpp-coc-range">
                        {formatCurrency(careMonthlyLow)} &ndash; {formatCurrency(careMonthlyHigh)}
                        <span className="rpp-coc-rangeper"> / month</span>
                      </div>
                    </div>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "#7f1d1d",
                        color: "#ffffff",
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: 16,
                        padding: "11px 22px",
                        borderRadius: 8,
                        whiteSpace: "nowrap",
                        flex: "0 0 auto",
                      }}
                    >
                      {t("costOfCare.cta")}
                    </span>
                  </div>

                  {/* Right column: the six options the hub actually covers,
                      each with its figure. Drawn from CARE_CALCULATORS so the
                      tile and the hub can never disagree. This replaces both
                      the rotating figures and the old "other care types" list,
                      which showed an arbitrary subset. */}
                  <ul className="rpp-coc-options">
                    {careOptions.map(({ option, care }) => (
                      <li key={option.slug}>
                        <span className="rpp-coc-opt-name">{option.shortLabel}</span>
                        <span className="rpp-coc-opt-figure">{formatCurrency(care.waMonthly)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>

             </div>
          </div>
        </section>

        <HomepagePopularResources />
        {/* <HomepageTestimonials /> — hidden until real testimonials are collected */}
        <HomepageFAQ />
      </main>
      <Footer />
    </>
  );
};

export default RPPHomeV3;
