import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import AFHCarousel from "@/components/AFHCarousel";
import HeroBandTitle from "@/components/HeroBandTitle";
import { useTranslation } from "react-i18next";

const CATEGORY_META = [
  { key: "resources", href: "/afh-club/resources", img: "/afh-resources.webp", placeholder: "#3f3a35" },
  { key: "listings", href: "/afh-club/listings", img: "/afh-listings.webp", placeholder: "#3e3934" },
  {
    key: "management",
    href: "/afh-club/management-companies",
    img: "/afh-management-companies.webp",
    placeholder: "#3c3732",
  },
  { key: "broker", href: "/afh-club/real-estate-broker", img: "/afh-real-estate-broker.webp", placeholder: "#3a3530" },
  {
    key: "calculators",
    href: "/afh-club/calculators",
    img: "/__l5e/assets-v1/f6d8b31f-90b0-4639-a379-feeff961e81c/afh-cost-calculator-v2.webp",
    placeholder: "#433d37",
  },
] as const;

const AFHClub = () => {
  const { t } = useTranslation();
  const categories = CATEGORY_META.map((c) => ({
    title: t(`afhClubPage.categories.${c.key}.title`),
    description: t(`afhClubPage.categories.${c.key}.description`),
    href: c.href,
    img: c.img,
    placeholder: c.placeholder,
  }));
  return (
    <>
      <SEOHead
        title={t("afhClubPage.seo.title")}
        description={t("afhClubPage.seo.description")}
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
        {/* Hero — badge, title, subtitle, one description line only */}
        <section
          style={{
            background: "#edf0f3",
            padding: "48px 24px 40px",
            textAlign: "center",
            borderBottom: "3px solid #b13a44",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: "var(--header-height, 100px)" }}>
            {/* Badge — tight */}
            <div style={{ marginBottom: 8 }}>
              <img
                src="/afh-club-badge-logo.webp"
                alt={t("afhClubPage.hero.badgeAlt")}
                style={{
                  width: "100%",
                  maxWidth: 320,
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                }}
                loading="eager"
                width={320}
                height={320}
              />
            </div>

            {/* Eyebrow — tight below badge */}
            <p
              style={{
                fontSize: "20px",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#481216",
                margin: "0 0 8px",
              }}
            >
              Real Property Planning
            </p>

            <h1
              style={{
                fontSize: "clamp(52px, 7vw, 72px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#292521",
                lineHeight: 1.1,
                margin: "0 0 8px",
              }}
            >
              AFH Club
            </h1>

            <p
              style={{
                fontSize: "clamp(22px, 3vw, 28px)",
                fontFamily: "Georgia, serif",
                fontWeight: 400,
                color: "#481216",
                margin: "0 0 20px",
              }}
            >
              {t("afhClubPage.hero.subtitle")}
            </p>

            {/* Single description line — moved from carousel */}
            <p
              style={{
                fontSize: "clamp(22px, 2.4vw, 28px)",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400,
                color: "#302b26",
                lineHeight: 1.8,
                margin: "0 auto",
                maxWidth: 680,
              }}
            >
              {t("afhClubPage.hero.description")}
            </p>
          </div>
        </section>

        {/* Welcome banner */}
        <HeroBandTitle>{t("afhClubPage.welcomeBanner")}</HeroBandTitle>

        {/* Carousel — no text above it */}
        <AFHCarousel categories={categories} />

        <section style={{ background: "#fff", padding: "48px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#b13a44",
                marginBottom: 12,
              }}
            >
              {t("afhClubPage.marketplace.eyebrow")}
            </p>
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 36px)",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                color: "#302b26",
                marginBottom: 16,
              }}
            >
              {t("afhClubPage.marketplace.heading")}
            </h2>
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Raleway', sans-serif",
                color: "#5e5954",
                maxWidth: 600,
                margin: "0 auto 32px",
                lineHeight: 1.7,
              }}
            >
              {t("afhClubPage.marketplace.description")}
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/afh-club/listings"
                style={{
                  display: "inline-block",
                  background: "#302b26",
                  color: "#fff",
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: "0.08em",
                  padding: "14px 32px",
                  borderRadius: 3,
                  textDecoration: "none",
                }}
              >
                {t("afhClubPage.marketplace.browseListings")}
              </Link>
              <Link
                to="/afh-submit"
                style={{
                  display: "inline-block",
                  background: "transparent",
                  color: "#302b26",
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: "0.08em",
                  padding: "14px 32px",
                  borderRadius: 3,
                  textDecoration: "none",
                  border: "2px solid #302b26",
                }}
              >
                {t("afhClubPage.marketplace.submitListing")}
              </Link>
            </div>

            {/* Directory of every licensed home, not just those for sale. Uses a
              defaultValue so it reads correctly in all locales without needing a
              new key added to each of the eight translation files. */}
            <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.7 }}>
              <Link
                to="/afh-club/homes"
                style={{ color: "#302b26", textDecoration: "underline", textUnderlineOffset: 4, fontWeight: 600 }}
              >
                {t("afhClubPage.marketplace.browseDirectory", {
                  defaultValue: "Or browse every licensed adult family home in Washington by city →",
                })}
              </Link>
            </p>
          </div>
        </section>

        {/* Browse by city */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 56px" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#5e5954",
              marginBottom: 14,
            }}
          >
            {t("afhClubPage.browseByCity")}
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { name: "Seattle", href: "/afh-club/for-sale/seattle-wa" },
              { name: "Kirkland", href: "/afh-club/for-sale/kirkland-wa" },
              { name: "Renton", href: "/afh-club/for-sale/renton-wa" },
              { name: "Bellevue", href: "/afh-club/for-sale/bellevue-wa" },
              { name: "Auburn", href: "/afh-club/for-sale/auburn-wa" },
              { name: "Lynnwood", href: "/afh-club/for-sale/lynnwood-wa" },
              { name: "Edmonds", href: "/afh-club/for-sale/edmonds-wa" },
              { name: "Everett", href: "/afh-club/for-sale/everett-wa" },
              { name: "Marysville", href: "/afh-club/for-sale/marysville-wa" },
              { name: "Mukilteo", href: "/afh-club/for-sale/mukilteo-wa" },
              { name: "Puyallup", href: "/afh-club/for-sale/puyallup-wa" },
              { name: "Lakewood", href: "/afh-club/for-sale/lakewood-wa" },
              { name: "Bonney Lake", href: "/afh-club/for-sale/bonney-lake-wa" },
            ].map((c) => (
              <Link
                key={c.href}
                to={c.href}
                style={{
                  display: "inline-block",
                  background: "#f7f4ef",
                  color: "#302b26",
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  padding: "8px 16px",
                  borderRadius: 20,
                  textDecoration: "none",
                  border: "1px solid #dfc9cb",
                }}
              >
                {c.name}, WA
              </Link>
            ))}
          </div>
        </section>

        {/* Category list */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px 80px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 3vw, 38px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#280a0c",
              marginBottom: 48,
            }}
          >
            {t("afhClubPage.exploreHeading")}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {categories.map((cat, i) => (
              <Link
                key={cat.href}
                to={cat.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  padding: "22px 0",
                  borderBottom: "1px solid #dfc9cb",
                  borderTop: i === 0 ? "1px solid #dfc9cb" : "none",
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(184,115,51,0.04)")
                }
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
                      fontSize: "clamp(20px, 2vw, 24px)",
                      fontWeight: 700,
                      color: "#280a0c",
                      margin: "0 0 8px",
                      lineHeight: 1.3,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(18px, 1.8vw, 20px)",
                      color: "#302b26",
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
                      fontSize: "16px",
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#481216",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    {t("afhClubPage.exploreLabel")}
                    <svg
                      width="12"
                      height="12"
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
                fontSize: "20px",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#481216",
                margin: "0 0 16px",
              }}
            >
              {t("afhClubPage.whatIsAfh.eyebrow")}
            </p>
            <h2
              style={{
                fontSize: "clamp(30px, 3.5vw, 42px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#280a0c",
                lineHeight: 1.2,
                margin: "0 0 20px",
              }}
            >
              {t("afhClubPage.whatIsAfh.heading")}
            </h2>
            <p
              style={{
                fontSize: "clamp(19px, 2vw, 22px)",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400,
                color: "#302b26",
                lineHeight: 1.85,
                margin: "0 0 22px",
              }}
            >
              {t("afhClubPage.whatIsAfh.paragraph1")}
            </p>
            <p
              style={{
                fontSize: "clamp(19px, 2vw, 22px)",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400,
                color: "#302b26",
                lineHeight: 1.85,
                margin: "0 0 22px",
              }}
            >
              {t("afhClubPage.whatIsAfh.paragraph2")}
            </p>
            <p
              style={{
                fontSize: "clamp(19px, 2vw, 22px)",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400,
                color: "#302b26",
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              {t("afhClubPage.whatIsAfh.paragraph3")}
            </p>
          </div>
        </section>

        {/* Featured: AFH Marketplace */}
        <section
          style={{
            background: "linear-gradient(135deg, #1a7a78 0%, #155f5d 100%)",
            padding: "56px 24px",
            color: "#ffffff",
          }}
        >
          <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 600,
                margin: "0 0 12px",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              {t("afhClubPage.readyToBuySell.heading")}
            </h2>
            <p
              style={{
                fontSize: 19,
                lineHeight: 1.7,
                margin: "0 auto 28px",
                maxWidth: 640,
                color: "rgba(255,255,255,0.95)",
              }}
            >
              {t("afhClubPage.readyToBuySell.description")}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <Link
                to="/afh-club/listings"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#ffffff",
                  color: "#1a7a78",
                  fontSize: 16,
                  fontWeight: 700,
                  padding: "14px 28px",
                  borderRadius: 10,
                  textDecoration: "none",
                  minHeight: 52,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                }}
              >
                {t("afhClubPage.readyToBuySell.browseListings")}
              </Link>
              <Link
                to="/afh-submit"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "#ffffff",
                  fontSize: 16,
                  fontWeight: 700,
                  padding: "14px 28px",
                  borderRadius: 10,
                  textDecoration: "none",
                  minHeight: 52,
                  border: "2px solid rgba(255,255,255,0.85)",
                }}
              >
                {t("afhClubPage.readyToBuySell.sellYourAfh")}
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
        <DisclaimerSection />
      </main>
      <Footer />
    </>
  );
};

export default AFHClub;
