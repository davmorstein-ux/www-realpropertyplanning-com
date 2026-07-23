import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Link } from "react-router-dom";

const NAV_FONT = { fontFamily: "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif" };
const GOLD = "#7f2028";

const categories = [
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
        title="Guides & Articles | Probate, Estate & Senior Transition Guidance | Real Property Planning"
        description="Clear, practical guides and articles for families, executors, trustees, and professionals navigating probate, inherited property, senior transitions, pricing, and real estate decisions in Washington State."
        canonical="https://realpropertyplanning.com/guides-and-resources"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "Guides & Articles", url: "https://realpropertyplanning.com/guides-and-resources" },
        ]}
      />
      <Header />

      <main id="main-content">
        {/* Hero Image */}
        <div style={{ width: "100%", marginTop: 64, lineHeight: 0 }}>
          <img
            src="/resources-hero.webp"
            alt="Seniors reading guides outside a resource center"
            style={{ width: "100%", height: "clamp(220px, 32vw, 380px)", display: "block", objectFit: "cover" }}
            loading="eager"
            sizes="100vw"
            decoding="async"
            width={1920}
            height={640}
          />
        </div>

        {/* Blue band — matches site standard */}
        <HeroBandTitle as="h1">Guides &amp; Articles</HeroBandTitle>

        {/* Looking for a professional? CTA */}
        <div style={{ background: "#f7f4ef", padding: "28px 24px", textAlign: "center" }}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: 17, color: "#280a0c", margin: 0 }}>
            Looking for a professional instead of a guide?{" "}
            <Link to="/resources" style={{ color: GOLD, fontWeight: 700, textDecoration: "underline" }}>
              Browse our Find a Professional directory →
            </Link>
          </p>
        </div>

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
                    color: "#280a0c",
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
                    className="group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "14px 12px",
                      borderBottom: i < cat.articles.length - 1 ? "1px solid #dfc9cb" : "none",
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
                        color: "#280a0c",
                        lineHeight: 1.4,
                      }}
                    >
                      {article.title}
                    </div>

                    {/* CTA */}
                    <span className="gold-cta">
                      Read
                      <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                        →
                      </span>
                    </span>
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
