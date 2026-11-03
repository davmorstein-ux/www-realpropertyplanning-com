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
  fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: "#1B3A6B",
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
    description: "How the aging of the Baby Boomers is reshaping housing, care and communities.",
  },
  {
    title: "The Senior Housing Guide",
    href: "/articles/senior-housing-guide",
    minutes: 6,
    listenMinutes: 8,
    img: "/The_Senior_Housing_Guide.webp",
    description: "A plain overview of the main options, from independent living and assisted living to memory care, CCRCs and aging in place.",
  },
  {
    title: "Senior Housing Options",
    href: "/articles/senior-housing-options",
    minutes: 7,
    listenMinutes: 5,
    img: "/Senior_Housing_Options.webp",
    description: "What each option offers, so you can compare them before an urgent need forces the choice.",
  },
  {
    title: "Senior Housing Costs",
    href: "/articles/senior-housing-costs",
    minutes: 5,
    listenMinutes: 4,
    img: "/Senior_Housing_Costs.webp",
    description:
      "What to know about cost before you start comparing options, including what the brochure leaves out.",
  },
  {
    title: "How to Choose Senior Housing",
    href: "/articles/how-to-choose-senior-housing",
    minutes: 6,
    listenMinutes: 5,
    img: "/How_to_Choose_Senior_Housing.webp",
    description: "A step-by-step guide: assess needs and budget, compare options, tour, review the contract and move.",
  },
  {
    title: "Independent Living Costs",
    href: "/articles/independent-living-costs",
    minutes: 6,
    listenMinutes: 5,
    img: "/Independent_Living_Costs.webp",
    description: "What the monthly fee actually covers, and what the brochure price leaves out.",
  },
  {
    title: "Memory Care Costs",
    href: "/articles/memory-care-costs",
    minutes: 6,
    listenMinutes: 6,
    img: "/Memory_Care_Costs.webp",
    description: "What memory care includes, the extra fees to watch for, and how to compare communities.",
  },
  {
    title: "CCRC Costs",
    href: "/articles/ccrc-costs",
    minutes: 7,
    listenMinutes: 5,
    img: "/CCRC_Costs.webp",
    description: "Continuing care retirement communities are expensive. What the entrance fee, monthly fee and contract type actually buy.",
  },
  {
    title: "Affordable Senior Housing",
    href: "/articles/affordable-senior-housing",
    minutes: 6,
    listenMinutes: 5,
    img: "/Affordable_Senior_Housing.webp",
    description:
      "Income-based rent, waitlists and how to apply, for older adults living on fixed incomes.",
  },
  {
    title: "Aging in Place With Support",
    href: "/articles/aging-in-place",
    minutes: 6,
    listenMinutes: 4,
    img: "/Aging_in_Place_With_Support.webp",
    description:
      "Most older adults want to stay home. What that actually takes, and how to tell when it still works.",
  },
  {
    title: "Wills, Trusts, and Other Options",
    href: "/articles/wills-trusts-other-options",
    minutes: 5,
    listenMinutes: 4,
    img: "/Wills_Trusts_Other_Options.webp",
    description: "Ways to pass real estate to your children, and the tradeoffs of each.",
  },
  {
    title: "Hospice Care in Washington State",
    href: "/articles/hospice-care-washington",
    minutes: 6,
    listenMinutes: 5,
    img: "/hospice-care-cover.webp",
    description: "Hospice comes to where a person lives (home, an adult family home, assisted living) and doesn't replace it. What Medicare pays, what it doesn't, and what \"24-hour\" really means.",
  },
  /* Moved here from the AFH Club resource library (Nov 2, 2026, David): it is
     written for families choosing a home for a parent, not for operators.
     Narration added the same day (7:12). */
  {
    title: "How to Choose an Adult Family Home",
    href: "/senior-living/choosing-an-adult-family-home",
    minutes: 6,
    listenMinutes: 7,
    img: "/afh-choosing-a-home-cover.webp",
    description: "Build a shortlist from the state's records, read each home's DSHS inspection history, ask the right questions on a tour, and compare two homes side by side.",
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
        <h1 className="sr-only">Articles &amp; Insights</h1>
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
            fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              color: "#142c52",
              marginBottom: 8,
              letterSpacing: "-0.01em",
            }}
          >
            All Articles
          </h2>
          <div style={{ width: 48, height: 2, background: "#1B3A6B", marginBottom: 40, borderRadius: 1 }} />

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
                      color: "#142c52",
                      margin: "0 0 4px",
                      lineHeight: 1.3,
                      fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
                    }}
                  >
                    <Link to={article.href} style={{ color: "inherit", textDecoration: "none" }}>
                      {article.title}
                    </Link>
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#1c1917",
                      margin: "0 0 12px",
                      lineHeight: 1.6,
                      fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
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
                    {article.listenMinutes ? (
                    <Link to={`${article.href}?listen=1`} style={{ ...actionLinkStyle }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                      </svg>
                      Listen &middot; {article.listenMinutes} min
                    </Link>
                    ) : null}
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
