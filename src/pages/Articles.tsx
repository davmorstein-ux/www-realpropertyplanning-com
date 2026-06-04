import { Link } from "react-router-dom";
import ArticlesCarousel from "@/components/ArticlesCarousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ARTICLES = [
  {
    title: "The Silver Tsunami",
    href: "/articles/silver-tsunami",
    img: "/The_Silver_Tsunami.webp",
    description: "The surge of seniors is reshaping housing, care, and the future of our communities — ready or not.",
  },
  {
    title: "The Senior Housing Guide",
    href: "/articles/senior-housing-guide",
    img: "/The_Senior_Housing_Guide.webp",
    description: "A clear, honest roadmap for one of the most important decisions a family will ever make.",
  },
  {
    title: "Senior Housing Options",
    href: "/articles/senior-housing-options",
    img: "/Senior_Housing_Options.webp",
    description: "A roadmap to informed decisions — before urgency makes the choice for you.",
  },
  {
    title: "Senior Housing Costs",
    href: "/articles/senior-housing-costs",
    img: "/Senior_Housing_Costs.webp",
    description:
      "What families need to know before they start comparing options — and what the brochure won't tell you.",
  },
  {
    title: "How to Choose Senior Housing",
    href: "/articles/how-to-choose-senior-housing",
    img: "/How_to_Choose_Senior_Housing.webp",
    description: "A step-by-step guide for families navigating one of life's most important decisions.",
  },
  {
    title: "Independent Living Costs",
    href: "/articles/independent-living-costs",
    img: "/Independent_Living_Costs.webp",
    description: "What the monthly fee actually covers — and what the number on the brochure doesn't tell you.",
  },
  {
    title: "Memory Care Costs",
    href: "/articles/memory-care-costs",
    img: "/Memory_Care_Costs.webp",
    description: "What families need to know — and what no brochure will tell you about making this decision.",
  },
  {
    title: "CCRC Costs",
    href: "/articles/ccrc-costs",
    img: "/CCRC_Costs.webp",
    description: "Continuing care retirement communities are expensive. Here's what you're really buying.",
  },
  {
    title: "Affordable Senior Housing",
    href: "/articles/affordable-senior-housing",
    img: "/Affordable_Senior_Housing.webp",
    description:
      "For older adults on fixed incomes, the right housing isn't just about comfort — it's about financial survival.",
  },
  {
    title: "Aging in Place With Support",
    href: "/articles/aging-in-place",
    img: "/Aging_in_Place_With_Support.webp",
    description:
      "Most older adults want to stay home. Here's what that actually takes — and how to know when it's still the right answer.",
  },
];

const Articles = () => {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Carousel */}
        <ArticlesCarousel />

        {/* Article list */}
        <section
          style={{
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
              color: "#0a1628",
              marginBottom: 8,
              letterSpacing: "-0.01em",
            }}
          >
            All Articles
          </h2>
          <div style={{ width: 48, height: 2, background: "#8B6914", marginBottom: 40, borderRadius: 1 }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {ARTICLES.map((article, i) => (
              <Link
                key={article.href}
                to={article.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  padding: "20px 0",
                  borderBottom: "1px solid #e0d8c8",
                  borderTop: i === 0 ? "1px solid #e0d8c8" : "none",
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(139,105,20,0.04)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 90,
                    height: 120,
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 2px 12px rgba(10,22,40,0.12)",
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
                  />
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#0a1628",
                      margin: "0 0 8px",
                      lineHeight: 1.3,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#4a5568",
                      margin: "0 0 12px",
                      lineHeight: 1.6,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {article.description}
                  </p>
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: "'Raleway', 'Gill Sans', sans-serif",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#8B6914",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    Read Article
                    <svg
                      width="11"
                      height="11"
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
      </main>
      <Footer />
    </>
  );
};

export default Articles;
