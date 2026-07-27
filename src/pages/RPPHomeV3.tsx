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
  return (
    <>
      <SEOHead title={t("seo.title")} description={t("seo.description")} canonical="https://realpropertyplanning.com" />
      <Header />

      <main id="main-content">
        {/* ── Hero ── scales to fit the enlarged tagline ───────────── */}
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "clamp(180px, 22.5vw, 310px)",
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
          {/* Logo + tagline overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(16px, 3vw, 40px) 8%",
              boxSizing: "border-box",
              gap: "clamp(6px, 1vw, 12px)",
            }}
          >
            {/* Tagline — two lines as separate spans */}
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

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "clamp(10px, 1.4vw, 16px)",
                marginTop: "clamp(14px, 2.2vw, 26px)",
              }}
            >
              <a
                href="#rpp-start-here"
                className="marquee-hover"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#ffffff",
                  border: "2px solid #7f1d1d",
                  color: "#7f1d1d",
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(15px, 1.6vw, 18px)",
                  padding: "clamp(10px, 1.4vw, 14px) clamp(20px, 2.6vw, 30px)",
                  borderRadius: 8,
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
                }}
              >
                {t("hero.ctaPrimary")}
                <svg
                  className="rpp-cta-arrow"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#7f1d1d"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flexShrink: 0 }}
                >
                  <polyline points="19 12 12 19 5 12" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                </svg>
              </a>
              <a
                href="/featured-professionals"
                className="marquee-hover"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#7f1d1d",
                  border: "2px solid #7f1d1d",
                  outline: "2px solid #ffffff",
                  outlineOffset: "-6px",
                  color: "#ffffff",
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(15px, 1.6vw, 18px)",
                  padding: "clamp(10px, 1.4vw, 14px) clamp(20px, 2.6vw, 30px)",
                  borderRadius: 8,
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  ["--marquee-color" as string]: "#ffffff",
                }}
              >
                {t("hero.ctaSecondary")}
                <svg
                  className="rpp-cta-arrow-right"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flexShrink: 0 }}
                >
                  <polyline points="12 5 19 12 12 19" />
                  <line x1="19" y1="12" x2="5" y2="12" />
                </svg>
              </a>
            </div>
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

            {/* Tap hint — mobile only */}
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
                            className="absolute top-3 right-3 sm:hidden"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.88)",
                              color: "#272421",
                              fontSize: 11,
                              fontWeight: 700,
                              fontFamily: "Inter, system-ui, sans-serif",
                              padding: "3px 8px",
                              borderRadius: 20,
                              letterSpacing: "0.04em",
                              textTransform: "uppercase",
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

            {/* ── Secondary cards: Cost of Care + AFH Club ─────────── */}
            <style>{`
              .rpp-card-desc {
                color: #272421 !important;
                opacity: 1 !important;
                font-weight: 600 !important;
              }
            `}</style>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
              <a
                href="/cost-of-care-calculator"
                className="group marquee-hover block"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  background: "#ffffff",
                  border: "2px solid #d43341",
                  borderRadius: 12,
                  padding: "1.25rem 1.5rem",
                  minHeight: 220,
                }}
              >
                <h3
                  className="coc-heading"
                  style={{
                    fontFamily: "Georgia, serif",
                    textAlign: "center",
                  }}
                >
                  <span style={{ color: "#272421" }}>{t("costOfCare.headingPart1")}</span>{" "}
                  <span style={{ color: "#d43341" }}>{t("costOfCare.headingPart2")}</span>
                </h3>
                <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-5" style={{ flex: 1 }}>
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
                        color: "#272421",
                        lineHeight: 1.5,
                        margin: "0 0 14px",
                        maxWidth: 320,
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
                        fontSize: 16,
                        padding: "10px 20px",
                        borderRadius: 8,
                        marginTop: "auto",
                      }}
                    >
                      {t("costOfCare.cta")}
                    </span>
                  </div>
                  <img
                    src="/cost-of-care-calc-graphic.webp"
                    alt=""
                    aria-hidden="true"
                    className="h-[140px] sm:h-[220px] w-auto"
                    style={{ flexShrink: 0, display: "block", alignSelf: "center" }}
                  />
                </div>
              </a>

              <a
                href="/afh-club"
                className="group marquee-hover block"
                style={{ textDecoration: "none", borderRadius: 12 }}
              >
                <div
                  style={{
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
                        margin: "0 0 10px",
                        lineHeight: 1.1,
                        backgroundImage: "linear-gradient(180deg, #2ba57c 0%, #0f6b52 45%, #0a5648 75%, #063e33 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                        textShadow:
                          "0px 1px 0 #0a5648, 0px 2px 0 #094e42, 0px 3px 0 #08453c, 0px 4px 0 #073c35, 0px 5px 0 #06332e, 0px 7px 10px rgba(0,0,0,0.35)",
                      }}
                    >
                      {t("afhClub.heading")}
                    </h3>
                    <p
                      className="afh-eyebrow-label-v2"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontSize: 13,
                        color: "#063e33",
                        textShadow:
                          "0 0 6px rgba(255,255,255,0.9), 0 0 3px rgba(255,255,255,0.9), 0 1px 2px rgba(255,255,255,0.9)",
                        margin: "0 0 12px",
                      }}
                    >
                      {t("afhClub.eyebrow")}
                    </p>
                    <div style={{ width: 64, height: 2, background: "#c8b5b7", margin: "0 0 14px" }} />
                    <div
                      className="rpp-card-desc afh-club-desc"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: 20,
                        color: "#272421",
                        lineHeight: 1.5,
                        margin: "0 0 16px",
                        maxWidth: 360,
                      }}
                    >
                      {t("afhClub.description")}
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
                      {t("afhClub.cta")}
                    </span>
                  </div>
                </div>
              </a>
            </div>
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
