import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ARTICLES = [
  {
    title: "The Silver Tsunami",
    href: "/articles/silver-tsunami",
    description:
      "Understanding the demographic wave reshaping senior housing, estates, and family transitions.",
  },
  {
    title: "Senior Housing Guide",
    href: "/articles/senior-housing-guide",
    description:
      "A comprehensive overview of senior living options for families planning a transition.",
  },
  {
    title: "Senior Housing Options",
    href: "/articles/senior-housing-options",
    description:
      "Compare independent living, assisted living, memory care, and continuing care communities.",
  },
  {
    title: "Senior Housing Costs",
    href: "/articles/senior-housing-costs",
    description:
      "What seniors and families should expect to pay across different levels of care.",
  },
  {
    title: "How to Choose Senior Housing",
    href: "/articles/how-to-choose-senior-housing",
    description:
      "A practical decision framework for matching a community to your loved one's needs.",
  },
  {
    title: "Independent Living Costs",
    href: "/articles/independent-living-costs",
    description:
      "Typical monthly fees, what's included, and how to budget for independent living.",
  },
  {
    title: "Memory Care Costs",
    href: "/articles/memory-care-costs",
    description:
      "What memory care really costs and how to plan for dementia and Alzheimer's care.",
  },
  {
    title: "CCRC Costs",
    href: "/articles/ccrc-costs",
    description:
      "Entry fees, monthly costs, and contract types for Continuing Care Retirement Communities.",
  },
  {
    title: "Affordable Senior Housing",
    href: "/articles/affordable-senior-housing",
    description:
      "Subsidized, low-income, and value-focused options for seniors on a fixed budget.",
  },
  {
    title: "Aging in Place With Support",
    href: "/articles/aging-in-place",
    description:
      "How to stay safely at home with the right modifications, services, and care team.",
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-cream">
      <SEOHead
        title="Articles | Real Property Planning"
        description="In-depth articles on senior housing, probate, estate transitions, and aging in place from Real Property Planning."
        canonical="https://www.realpropertyplanning.com/articles"
      />
      <Header />

      <main id="main-content" className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <header className="mb-12">
            <p
              className="text-xs uppercase mb-4"
              style={{
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: "0.22em",
                color: "#8B6914",
                fontWeight: 600,
              }}
            >
              Articles & Insights
            </p>
            <h1
              className="text-4xl md:text-5xl mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "#1B2B4B",
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              Articles
            </h1>
            <p
              className="max-w-2xl"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "18px",
                lineHeight: 1.7,
                color: "#1B2B4B",
              }}
            >
              Practical, well-researched guidance on senior housing, probate, estate
              transitions, and aging in place for Washington families.
            </p>
          </header>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
            {ARTICLES.map((article) => (
              <li key={article.href}>
                <Link
                  to={article.href}
                  className="block h-full p-7 rounded-lg bg-white border transition-all hover:shadow-lg"
                  style={{
                    borderColor: "#e0d8c8",
                    textDecoration: "none",
                  }}
                >
                  <h2
                    className="mb-3"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "24px",
                      lineHeight: 1.25,
                      color: "#1B2B4B",
                      fontWeight: 500,
                    }}
                  >
                    {article.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "#1B2B4B",
                    }}
                  >
                    {article.description}
                  </p>
                  <span
                    className="inline-block mt-5"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: "12px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#8B6914",
                      fontWeight: 600,
                    }}
                  >
                    Read article →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
