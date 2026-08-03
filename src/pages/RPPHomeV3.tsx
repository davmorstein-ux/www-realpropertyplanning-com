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
import HomepageFAQ from "@/components/HomepageFAQ";
import { CARE_TYPES, CARE_TYPE_COLORS, formatCurrency } from "@/lib/careTypes";

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

/* The three care types previewed on the homepage tile. Adult family home is
   the option most families have never heard of, assisted living is the
   familiar baseline, and memory care is the figure that surprises people —
   that spread is what makes someone want to see the rest.

   Figures and labels are read from the same CARE_TYPES constant the
   calculator itself uses, so the tile and the tool can never disagree.
   Unresolved ids are filtered out rather than throwing, so a renamed id
   degrades to fewer rows instead of a blank homepage. */
const PREVIEW_CARE_IDS = ["adult-family-home", "assisted-living", "memory-care"] as const;

const RPPHomeV3 = () => {
  const { t } = useTranslation();

  const previewCareTypes = PREVIEW_CARE_IDS.map((id) => CARE_TYPES.find((c) => c.id === id)).filter(
    (c): c is (typeof CARE_TYPES)[number] => Boolean(c),
  );
  const remainingCareTypes = CARE_TYPES.filter(
    (c) => !PREVIEW_CARE_IDS.includes(c.id as (typeof PREVIEW_CARE_IDS)[number]),
  );

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
            fetchPriority="high"
            decoding="async"
          />
          {/* Logo + tagline overlay — normal flow, so this content's own
              height determines the hero's height on every screen size.

              The two hero CTA buttons were removed: "Find the Right Starting
              Point" only scrolled to tiles already visible in the same
              viewport, and "Connect with a Specialist" duplicated the
              "I Need a Professional" funnel tile below. The tiles are the
              call to action. */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(24px, 3vw, 40px) 8%",
              boxSizing: "border-box",
              gap: "clamp(6px, 1vw, 12px)",
            }}
          >
            <h1 id="rpp-tagline" style={{ textAlign: "center", margin: 0 }}>
              <span
                className="rpp-tagline-line-v2"
                style={{
                  display: "block",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(25px, 3.5vw, 50px)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "#0000FF",
                  lineHeight: 1,
                  letterSpacing: "0.01em",
                  textShadow: "0 1px 4px rgba(255,255,255,0.7)",
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
                  fontSize: "clamp(25px, 3.5vw, 50px)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "#0000FF",
                  lineHeight: 1,
                  letterSpacing: "0.01em",
                  textShadow: "0 1px 4px rgba(255,255,255,0.7)",
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
                  fontSize: "3rem",
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
                              fontFamily: "Inter, system-ui, sans-serif",
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
                `main p { font-size: ... !important }` rule. */}
            <style>{`
              .rpp-card-desc {
                color: #272421 !important;
                opacity: 1 !important;
                font-weight: 600 !important;
              }
              .rpp-explore-badge.rpp-explore-badge {
                text-transform: uppercase;
              }
              .rpp-coc-eyebrow.rpp-coc-eyebrow {
                text-transform: uppercase;
                letter-spacing: 0.08em;
              }
              .rpp-afh-strip.rpp-afh-strip {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                gap: 0.5rem 1.25rem;
                width: 100%;
                min-height: 56px;
                margin-top: 1.25rem;
                padding: 0.9rem 1.5rem;
                background: #ffffff;
                border: 1px solid #cfd8d4;
                border-left: 5px solid #0a5648;
                border-radius: 10px;
                text-decoration: none;
                text-align: center;
                transition: background-color 150ms ease, border-color 150ms ease;
              }
              .rpp-afh-strip:hover,
              .rpp-afh-strip:focus-visible {
                background: #f4f8f6;
                border-color: #0a5648;
              }
              .rpp-afh-strip-label.rpp-afh-strip-label {
                font-family: 'DM Sans', 'Raleway', system-ui, sans-serif;
                font-size: 17px;
                font-weight: 700;
                letter-spacing: 0.06em;
                text-transform: uppercase;
                color: #063e33;
                margin: 0;
              }
              .rpp-afh-strip-cta.rpp-afh-strip-cta {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                font-family: 'Raleway', system-ui, sans-serif;
                font-size: 18px;
                font-weight: 700;
                color: #0a5648;
                text-decoration: underline;
                text-underline-offset: 4px;
                margin: 0;
              }
              @media (max-width: 640px) {
                .rpp-afh-strip.rpp-afh-strip {
                  flex-direction: column;
                  gap: 0.6rem;
                  padding: 1rem 1.25rem;
                }
                .rpp-afh-strip-label.rpp-afh-strip-label {
                  font-size: 15px;
                  letter-spacing: 0.05em;
                }
              }
            `}</style>

            {/* ── Cost of Care Calculator — full width, data-driven ──── */}
            <a
              href="/cost-of-care-calculator"
              className="group marquee-hover block"
              style={{
                textDecoration: "none",
                display: "block",
                background: "#ffffff",
                border: "2px solid #d43341",
                borderRadius: 12,
                padding: "1.6rem 1.9rem",
              }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Left: heading, description, CTA */}
                <div className="flex-1 min-w-0 flex flex-col items-center md:items-start text-center md:text-left">
                  <h3
                    className="coc-heading"
                    style={{
                      fontFamily: "Georgia, serif",
                      margin: "0 0 0.6rem",
                    }}
                  >
                    <span style={{ color: "#272421" }}>{t("costOfCare.headingPart1")}</span>{" "}
                    <span style={{ color: "#d43341" }}>{t("costOfCare.headingPart2")}</span>
                  </h3>
                  <div
                    className="rpp-card-desc coc-desc"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: 20,
                      color: "#272421",
                      lineHeight: 1.55,
                      margin: "0 0 18px",
                      maxWidth: 460,
                    }}
                  >
                    {t("costOfCare.description")}
                  </div>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "#d43341",
                      color: "#ffffff",
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 700,
                      fontSize: 17,
                      padding: "12px 24px",
                      borderRadius: 8,
                    }}
                  >
                    {t("costOfCare.cta")}
                  </span>
                </div>

                {/* Right: live figures pulled from CARE_TYPES */}
                <div
                  className="w-full md:w-auto md:flex-1 min-w-0 md:border-l md:pl-9"
                  style={{ borderColor: "#e2ddd5" }}
                >
                  <div
                    className="rpp-coc-eyebrow"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#5e5954",
                      marginBottom: "0.85rem",
                    }}
                  >
                    {t("costOfCarePage.results.washington")} · {t("costOfCarePage.results.monthly")}
                  </div>

                  {previewCareTypes.map((c, i) => (
                    <div
                      key={c.id}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        gap: 14,
                        paddingBottom: 10,
                        marginBottom: 10,
                        borderBottom: i === previewCareTypes.length - 1 ? "none" : "1px solid #f0ece5",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          fontSize: 17,
                          fontWeight: 600,
                          color: "#272421",
                          lineHeight: 1.3,
                        }}
                      >
                        {t(`costOfCarePage.careTypes.${c.id}.shortLabel`)}
                      </span>
                      <span
                        style={{
                          fontFamily: "Georgia, serif",
                          fontSize: 23,
                          fontWeight: 700,
                          color: CARE_TYPE_COLORS[c.id] ?? "#903f46",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {formatCurrency(c.waMonthly)}
                      </span>
                    </div>
                  ))}

                  {remainingCareTypes.length > 0 && (
                    <div
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#5e5954",
                        lineHeight: 1.45,
                        marginTop: 12,
                        paddingTop: 12,
                        borderTop: "1px solid #f0ece5",
                      }}
                    >
                      {remainingCareTypes.map((c) => t(`costOfCarePage.careTypes.${c.id}.shortLabel`)).join(" · ")}
                    </div>
                  )}
                </div>
              </div>
            </a>

            {/* ── AFH Club — labeled entrance, not a co-equal section ── */}
            <a href="/afh-club" className="rpp-afh-strip marquee-hover">
              <span className="rpp-afh-strip-label">{t("afhClub.eyebrow")}</span>
              <span className="rpp-afh-strip-cta">
                {t("afhClub.cta")}
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#0a5648"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flexShrink: 0 }}
                >
                  <polyline points="12 5 19 12 12 19" />
                  <line x1="19" y1="12" x2="5" y2="12" />
                </svg>
              </span>
            </a>
          </div>
        </section>

        {/* ── Descriptor ───────────────────────────────────────────── */}
        <section id="rpp-orientation" className="py-6 md:py-9 bg-cream">
          <div className="w-full px-5 md:px-8">
            <div className="max-w-[1000px] mx-auto text-center">
              <p
                id="rpp-descriptor"
                style={{
                  fontFamily: "Georgia, 'Cormorant Garamond', serif",
                  fontSize: "clamp(18px, 2.2vw, 26px)",
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: "#1B3A6B",
                  margin: 0,
                  lineHeight: 1.55,
                  letterSpacing: "0.01em",
                  textWrap: "balance" as any,
                }}
              >
                {t("descriptor")}
              </p>
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
