import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import ArticlesCarousel from "@/components/ArticlesCarousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

/* `minutes` is a measured read time, not a guess: word count of each article
   page's rendered text divided by 200 wpm, rounded. `listenMinutes` is the
   narration MP3's actual duration, read from file metadata in the browser
   (2026-08) and rounded to the nearest minute — the narrations are abridged,
   so listen and read times legitimately differ. If an article is
   substantially rewritten, re-measure rather than eyeballing — a stated read
   time that's wrong is worse than none. The audio narrations announce their
   own duration in the player, so no separate listen time is shown. */
/* Shared style for the Read / Listen links at the foot of each card. */
const actionLinkStyle: CSSProperties = {
  fontSize: 12,
  fontFamily: "'DM Sans', system-ui, sans-serif",
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: "#7f2028",
  display: "inline-flex",
  alignItems: "center",
  gap: 7,
  textDecoration: "none",
  minHeight: 44,
};

const ARTICLES = [
  {
    title: "The Silver Tsunami",
    href: "/articles/silver-tsunami",
    minutes: 5,
    listenMinutes: 7,
    img: "/The_Silver_Tsunami.webp",
    description: "The surge of seniors is reshaping housing, care, and the future of our communities — ready or not.",
  },
  {
    title: "The Senior Housing Guide",
    href: "/articles/senior-housing-guide",
    minutes: 6,
    listenMinutes: 8,
    img: "/The_Senior_Housing_Guide.webp",
    description: "A clear, honest roadmap for one of the most important decisions a family will ever make.",
  },
  {
    title: "Senior Housing Options",
    href: "/articles/senior-housing-options",
    minutes: 7,
    listenMinutes: 5,
    img: "/Senior_Housing_Options.webp",
    description: "A roadmap to informed decisions — before urgency makes the choice for you.",
  },
  {
    title: "Senior Housing Costs",
    href: "/articles/senior-housing-costs",
    minutes: 5,
    listenMinutes: 4,
    img: "/Senior_Housing_Costs.webp",
    description:
      "What families need to know before they start comparing options — and what the brochure won't tell you.",
  },
  {
    title: "How to Choose Senior Housing",
    href: "/articles/how-to-choose-senior-housing",
    minutes: 6,
    listenMinutes: 5,
    img: "/How_to_Choose_Senior_Housing.webp",
    description: "A step-by-step guide for families navigating one of life's most important decisions.",
  },
  {
    title: "Independent Living Costs",
    href: "/articles/independent-living-costs",
    minutes: 6,
    listenMinutes: 5,
    img: "/Independent_Living_Costs.webp",
    description: "What the monthly fee actually covers — and what the number on the brochure doesn't tell you.",
  },
  {
    title: "Memory Care Costs",
    href: "/articles/memory-care-costs",
    minutes: 6,
    listenMinutes: 6,
    img: "/Memory_Care_Costs.webp",
    description: "What families need to know — and what no brochure will tell you about making this decision.",
  },
  {
    title: "CCRC Costs",
    href: "/articles/ccrc-costs",
    minutes: 7,
    listenMinutes: 5,
    img: "/CCRC_Costs.webp",
    description: "Continuing care retirement communities are expensive. Here's what you're really buying.",
  },
  {
    title: "Affordable Senior Housing",
    href: "/articles/affordable-senior-housing",
    minutes: 6,
    listenMinutes: 5,
    img: "/Affordable_Senior_Housing.webp",
    description:
      "For older adults on fixed incomes, the right housing isn't just about comfort — it's about financial survival.",
  },
  {
    title: "Aging in Place With Support",
    href: "/articles/aging-in-place",
    minutes: 6,
    listenMinutes: 4,
    img: "/Aging_in_Place_With_Support.webp",
    description:
      "Most older adults want to stay home. Here's what that actually takes — and how to know when it's still the right answer.",
  },
  {
    title: "Wills, Trusts, and Other Options",
    href: "/articles/wills-trusts-other-options",
    minutes: 5,
    listenMinutes: 4,
    img: "/Wills_Trusts_Other_Options.webp",
    description: "How to pass real estate to your children — and the tradeoffs each method carries.",
  },
];

const Articles = () => {
  return (
    <>
      <SEOHead
        title="Articles & Insights | Senior Housing, Probate & Estate Guidance — WA"
        description="Plain-English articles on senior housing options, probate timelines, inherited property decisions, and estate transitions across Washington State."
      />
      <BreadcrumbSchema items={[{ name: "Articles", url: "/articles" }]} />
      <Header />
      <main id="main-content">
        {/* Carousel */}
        <ArticlesCarousel />

        {/* Article list */}
        <section
          style={{
            width: "100%",
            boxSizing: "border-box",
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
              color: "#280a0c",
              marginBottom: 8,
              letterSpacing: "-0.01em",
            }}
          >
            All Articles
          </h2>
          <div style={{ width: 48, height: 2, background: "#7f2028", marginBottom: 40, borderRadius: 1 }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {ARTICLES.map((article, i) => (
              /* A div, not a Link. The card used to be one whole-card anchor,
                 which ruled out separate Read and Listen destinations — nested
                 anchors are invalid HTML. The cover, the title and the two
                 action links below are the anchors now, all generous targets. */
              <div
                key={article.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  padding: "20px 0",
                  borderBottom: "1px solid #dfc9cb",
                  borderTop: i === 0 ? "1px solid #dfc9cb" : "none",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background = "rgba(139,105,20,0.04)")
                }
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "transparent")}
              >
                {/* Thumbnail — links to the article like the title does */}
                <Link
                  to={article.href}
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{
                    flexShrink: 0,
                    width: 90,
                    height: 120,
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 2px 12px rgba(10,22,40,0.12)",
                    display: "block",
                  }}
                >
                  <img
                    src={article.img}
                    alt={article.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                    sizes="100vw"
                    decoding="async"
                  />
                </Link>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#280a0c",
                      margin: "0 0 4px",
                      lineHeight: 1.3,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    <Link to={article.href} style={{ color: "inherit", textDecoration: "none" }}>
                      {article.title}
                    </Link>
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#5e5954",
                      margin: "0 0 12px",
                      lineHeight: 1.6,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {article.description}
                  </p>
                  {/* Two real destinations, one row. Read opens the article;
                      Listen opens it with ?listen=1, which the audio player
                      reads to expand, scroll into view and start playback —
                      so choosing Listen here is one click, not a click plus a
                      hunt for the player. Each link carries its measured time,
                      which replaced the separate times line above: same
                      information, fewer elements. */}
                  <div style={{ display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
                    <Link to={article.href} style={{ ...actionLinkStyle }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      Read &middot; {article.minutes} min
                    </Link>
                    <Link to={`${article.href}?listen=1`} style={{ ...actionLinkStyle }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                      </svg>
                      Listen &middot; {article.listenMinutes} min
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Articles;
