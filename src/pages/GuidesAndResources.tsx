import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Link } from "react-router-dom";

const NAV_FONT = { fontFamily: "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif" };
const GOLD = "#8B6914";

const categories = [
  {
    label: "Professionals & Service Providers",
    id: "professionals",
    articles: [
      { title: "Aging Life Care Managers", href: "/aging-life-care-managers" },
      { title: "Certified Appraisers", href: "/real-estate-appraiser" },
      { title: "CPAs & Accountants", href: "/professionals/cpas" },
      { title: "Divorce Attorneys", href: "/professionals/probate-attorneys" },
      { title: "Elder Law Attorneys", href: "/professionals/elder-law-attorneys" },
      { title: "Estate Liquidators", href: "/estate-liquidators" },
      { title: "Estate Planning Attorneys", href: "/professionals/estate-planning-attorneys" },
      { title: "Family Law Attorneys", href: "/professionals/family-law-attorneys" },
      { title: "Financial Planners & Advisors", href: "/professionals/financial-planners" },
      { title: "Medicare & Benefits Advisors", href: "/medicare-providers" },
      { title: "Mortgage Lenders", href: "/mortgage-lenders" },
      { title: "Probate & Estate Attorneys", href: "/professionals/probate-attorneys" },
      { title: "Real Estate Attorneys", href: "/professionals/real-estate-attorneys" },
      { title: "Real Estate Brokers", href: "/realtor" },
      { title: "Senior Living Advisors", href: "/senior-living-advisors" },
      { title: "Senior Move Managers", href: "/senior-move-managers" },
    ],
  },
  {
    label: "Probate & Inherited Property",
    id: "probate-inherited",
    articles: [
      {
        title: "Can You Sell a House During Probate in Washington?",
        href: "/guides/sell-house-during-probate-washington",
      },
      { title: "How Long Does It Take to Sell a Probate Property?", href: "/guides/how-long-sell-probate-property" },
      { title: "How Probate Real Estate Works in Washington", href: "/guides/how-probate-real-estate-works" },
      {
        title: "Probate House Sale Timeline in Washington State",
        href: "/guides/probate-house-sale-timeline-washington",
      },
      {
        title: "Probate vs Trust Sale in Washington — What's the Difference?",
        href: "/guides/probate-vs-trust-sale-washington",
      },
      { title: "What Happens If Heirs Disagree About Selling?", href: "/guides/heirs-disagree-selling-house" },
      {
        title: "What Taxes Apply When Selling an Inherited House in Washington?",
        href: "/guides/taxes-selling-inherited-house-washington",
      },
      { title: "What to Do With an Inherited House in Washington", href: "/guides/inherited-house-washington" },
      {
        title: "Who Has Authority to Sell Probate Property in Washington?",
        href: "/guides/who-has-authority-sell-probate-property-washington",
      },
    ],
  },
  {
    label: "Executors, Trustees & Families",
    id: "executors-trustees",
    articles: [
      {
        title: "Can an Executor Sell Before Probate in Washington?",
        href: "/guides/executor-sell-house-before-probate-washington",
      },
      {
        title: "How Out-of-State Families Can Handle a Washington Property Sale",
        href: "/guides/out-of-state-families",
      },
      { title: "What Executors Should Do Before Selling a Home", href: "/guides/what-executors-should-do" },
      {
        title: "What Happens When Family Members Disagree About Selling?",
        href: "/insights/family-disagreement-selling-house",
      },
      { title: "What Should an Executor Do First With a House?", href: "/guides/executor-first-steps-house" },
    ],
  },
  {
    label: "Senior Moves & Housing Options",
    id: "senior-moves",
    articles: [
      { title: "Downsizing a Senior's Home: Where to Start", href: "/senior-transitions" },
      {
        title: "How Senior Transition Sales Differ From Ordinary Home Sales",
        href: "/guides/senior-transition-differences",
      },
      { title: "How to Help a Parent Move From a Longtime Home", href: "/how-to-move-elderly-parents" },
      { title: "Senior Housing Options Explained", href: "/senior-living-and-relocation" },
    ],
  },
  {
    label: "Selling, Pricing & Preparation",
    id: "selling-pricing",
    articles: [
      { title: "Appraisal vs. CMA for Estate Property", href: "/guides/appraisal-vs-cma" },
      {
        title: "Do You Need an Appraisal Before Selling Inherited Property?",
        href: "/guides/appraisal-before-selling-inherited-property",
      },
      { title: "How Do You Price a House in a Trust or Estate?", href: "/guides/pricing-house-trust-estate" },
      {
        title: "Should You Sell an Inherited House As-Is or Fix It First?",
        href: "/guides/sell-inherited-house-as-is-or-fix",
      },
      {
        title: "What Are the Biggest Mistakes When Selling Estate Property?",
        href: "/insights/estate-property-mistakes",
      },
      {
        title: "What Repairs Should Be Done Before Selling Estate Property?",
        href: "/guides/estate-property-repairs-before-sale",
      },
      {
        title: "What Repairs Should Be Made Before Selling a Probate Home?",
        href: "/guides/repairs-before-selling-probate-home-washington",
      },
    ],
  },
];

const GuidesAndResources = () => {
  return (
    <>
      <SEOHead
        title="Guides & Resources | Probate, Estate & Senior Transition Guidance | Real Property Planning"
        description="Clear, practical guides for families, executors, trustees, and professionals navigating probate, inherited property, senior transitions, pricing, and real estate decisions in Washington State."
        canonical="https://realpropertyplanning.com/guides-and-resources"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "Guides & Resources", url: "https://realpropertyplanning.com/guides-and-resources" },
        ]}
      />
      <Header />

      <main id="main-content">
        {/* Hero Image */}
        <div style={{ width: "100%", marginTop: 64, lineHeight: 0 }}>
          <img
            src="/resources-hero.png"
            alt="Seniors reading guides outside a resource center"
            style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            loading="eager"
          />
        </div>

        {/* Blue band — matches site standard */}
        <HeroBandTitle>Guides & Resources</HeroBandTitle>

        {/* Category Sections */}
        {categories.map((cat, catIndex) => (
          <section
            key={cat.id}
            id={cat.id}
            style={{ background: catIndex % 2 === 0 ? "#fff" : "#f7f4ef", padding: "56px 24px" }}
          >
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              {/* Category Header */}
              <div style={{ marginBottom: 8, paddingBottom: 16, borderBottom: `2px solid ${GOLD}` }}>
                <h2
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    fontWeight: 700,
                    color: "#0a1628",
                    margin: 0,
                  }}
                >
                  {cat.label}
                </h2>
              </div>

              {/* Article List */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {cat.articles.map((article, i) => (
                  <Link
                    key={article.href}
                    to={article.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "14px 12px",
                      borderBottom: i < cat.articles.length - 1 ? "1px solid #e0d8c8" : "none",
                      textDecoration: "none",
                      transition: "background 0.2s",
                      borderRadius: 4,
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(139,105,20,0.04)")
                    }
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
                  >
                    {/* Gold dot */}
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: GOLD, flexShrink: 0 }} />

                    {/* Title */}
                    <div
                      style={{
                        flex: 1,
                        fontFamily: "Georgia, serif",
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#0a1628",
                        lineHeight: 1.4,
                      }}
                    >
                      {article.title}
                    </div>

                    {/* Arrow */}
                    <div
                      style={{
                        ...NAV_FONT,
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: GOLD,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      Read
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        <DisclaimerSection />
      </main>

      <Footer />
    </>
  );
};

export default GuidesAndResources;
