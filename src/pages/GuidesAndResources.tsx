import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import { Button } from "@/components/ui/button";

const NAV_FONT = { fontFamily: "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif" };
const GOLD = "#8B6914";

const categories = [
  {
    label: "Probate & Inherited Property",
    id: "probate-inherited",
    articles: [
      {
        title: "How Probate Real Estate Works in Washington",
        description:
          "An overview of the probate sale process, court requirements, and what executors and attorneys need to know.",
        href: "/guides/how-probate-real-estate-works",
      },
      {
        title: "Can You Sell a House During Probate in Washington?",
        description: "What Washington law allows, what approvals may be needed, and how the timeline works.",
        href: "/guides/sell-house-during-probate-washington",
      },
      {
        title: "What to Do With an Inherited House in Washington",
        description: "Options, decision factors, and practical guidance when you inherit property in Washington State.",
        href: "/guides/inherited-house-washington",
      },
      {
        title: "What Happens If Heirs Disagree About Selling?",
        description:
          "Common conflict scenarios, communication strategies, and how independent valuation helps move families forward.",
        href: "/guides/heirs-disagree-selling-house",
      },
      {
        title: "How Long Does It Take to Sell a Probate Property?",
        description: "What affects timing, how probate and non-probate situations differ, and realistic expectations.",
        href: "/guides/how-long-sell-probate-property",
      },
      {
        title: "What Taxes Apply When Selling an Inherited House in Washington?",
        description:
          "Capital gains, stepped-up basis, and Washington estate tax considerations families and executors should understand.",
        href: "/guides/taxes-selling-inherited-house-washington",
      },
      {
        title: "Probate vs Trust Sale in Washington — What's the Difference?",
        description:
          "Key differences between probate sales and trust sales in Washington State — process, timeline, and legal authority.",
        href: "/guides/probate-vs-trust-sale-washington",
      },
      {
        title: "Who Has Authority to Sell Probate Property in Washington?",
        description:
          "Personal representatives, Letters Testamentary, and what's required before any real estate action can be taken.",
        href: "/guides/who-has-authority-sell-probate-property-washington",
      },
      {
        title: "Probate House Sale Timeline in Washington State",
        description:
          "A realistic, step-by-step guide to how long a probate property sale actually takes — from death to distribution.",
        href: "/guides/probate-house-sale-timeline-washington",
      },
    ],
  },
  {
    label: "Executors, Trustees & Families",
    id: "executors-trustees",
    articles: [
      {
        title: "What Executors Should Do Before Selling a Home",
        description:
          "Practical first steps for executors and personal representatives — from securing the property to understanding its value.",
        href: "/guides/what-executors-should-do",
      },
      {
        title: "What Should an Executor Do First With a House?",
        description: "Immediate priorities, securing the property, and what to focus on in the first 30 days.",
        href: "/guides/executor-first-steps-house",
      },
      {
        title: "Can an Executor Sell Before Probate in Washington?",
        description: "Understanding timing, legal authority, and preparation steps before a property can be listed.",
        href: "/guides/executor-sell-house-before-probate-washington",
      },
      {
        title: "What Happens When Family Members Disagree About Selling?",
        description:
          "How families navigate disagreements, what options exist, and where independent valuation can help.",
        href: "/insights/family-disagreement-selling-house",
      },
      {
        title: "How Out-of-State Families Can Handle a Washington Property Sale",
        description: "Guidance for executors, trustees, and family members coordinating a sale from a distance.",
        href: "/guides/out-of-state-families",
      },
    ],
  },
  {
    label: "Senior Moves & Housing Options",
    id: "senior-moves",
    articles: [
      {
        title: "How to Help a Parent Move From a Longtime Home",
        description:
          "Compassionate guidance for families coordinating a move from a longtime home to a new living situation.",
        href: "/how-to-move-elderly-parents",
      },
      {
        title: "How Senior Transition Sales Differ From Ordinary Home Sales",
        description: "What families should expect when helping a parent or loved one sell a longtime home.",
        href: "/guides/senior-transition-differences",
      },
      {
        title: "Senior Housing Options Explained",
        description:
          "An overview of independent living, assisted living, memory care, adult family homes, and skilled nursing.",
        href: "/senior-living-and-relocation",
      },
      {
        title: "Downsizing a Senior's Home: Where to Start",
        description:
          "Practical guidance for families helping a parent or loved one move from a larger home to a smaller space.",
        href: "/senior-transitions",
      },
    ],
  },
  {
    label: "Selling, Pricing & Preparation",
    id: "selling-pricing",
    articles: [
      {
        title: "Appraisal vs. CMA for Estate Property",
        description:
          "Why the distinction matters for estate property, probate sales, and trust-related real estate decisions.",
        href: "/guides/appraisal-vs-cma",
      },
      {
        title: "Do You Need an Appraisal Before Selling Inherited Property?",
        description: "When a formal appraisal is required, when it's recommended, and how it protects your interests.",
        href: "/guides/appraisal-before-selling-inherited-property",
      },
      {
        title: "How Do You Price a House in a Trust or Estate?",
        description: "Evidence-based strategies that protect fiduciaries and support informed decisions.",
        href: "/guides/pricing-house-trust-estate",
      },
      {
        title: "Should You Sell an Inherited House As-Is or Fix It First?",
        description: "Pros and cons of selling as-is, when repairs make sense, and how to evaluate the decision.",
        href: "/guides/sell-inherited-house-as-is-or-fix",
      },
      {
        title: "What Repairs Should Be Done Before Selling Estate Property?",
        description: "Which improvements are worth the investment — and which ones to skip.",
        href: "/guides/estate-property-repairs-before-sale",
      },
      {
        title: "What Are the Biggest Mistakes When Selling Estate Property?",
        description: "Common pricing, preparation, timing, and communication errors — and how to avoid them.",
        href: "/insights/estate-property-mistakes",
      },
      {
        title: "What Repairs Should Be Made Before Selling a Probate Home?",
        description: "A practical guide to which improvements are worth the investment in an estate property.",
        href: "/guides/repairs-before-selling-probate-home-washington",
      },
    ],
  },
  {
    label: "Professionals & Coordination",
    id: "professionals",
    articles: [
      {
        title: "Which Professionals May Be Needed During a Property Transition",
        description:
          "An overview of the attorneys, appraisers, move managers, estate sale companies, and specialists families may work with.",
        href: "/professionals",
      },
      {
        title: "How an Out-of-State Executor Managed a Washington Estate Sale",
        description:
          "A real-world example of remote coordination, valuation, preparation, and sale of an inherited home.",
        href: "/insights/out-of-state-executor-case-study",
      },
      {
        title: "Trusted Resources for Families in Transition",
        description:
          "A curated directory of professional service providers — attorneys, CPAs, move managers, estate sale companies, and more.",
        href: "/resources",
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

        {/* Hero Text Band */}
        <section style={{ background: "#0a1628", padding: "40px 24px 44px", textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 12px",
              lineHeight: 1.15,
            }}
          >
            Guides & Resources
          </h1>
          <p
            style={{
              ...NAV_FONT,
              fontSize: 16,
              color: "rgba(255,255,255,0.8)",
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.7,
              fontWeight: 300,
              letterSpacing: "0.04em",
            }}
          >
            ​

          </p>
        </section>

        {/* Category Jump Links */}
        <section style={{ background: "#f7f4ef", padding: "24px 24px", borderBottom: "1px solid #e0d8c8" }}>
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
            }}
          >
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                style={{
                  ...NAV_FONT,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#0a1628",
                  textDecoration: "none",
                  padding: "8px 16px",
                  border: "1px solid #c8b98a",
                  borderRadius: 2,
                  background: "#fff",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#0a1628";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#E8C97A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#0a1628";
                }}
              >
                {cat.label}
              </a>
            ))}
          </div>
        </section>

        {/* Category Sections */}
        {categories.map((cat, catIndex) => (
          <section
            key={cat.id}
            id={cat.id}
            style={{ background: catIndex % 2 === 0 ? "#fff" : "#f7f4ef", padding: "56px 24px" }}
          >
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              {/* Category Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 8,
                  paddingBottom: 16,
                  borderBottom: `2px solid ${GOLD}`,
                }}
              >
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
                      alignItems: "flex-start",
                      gap: 20,
                      padding: "18px 0",
                      borderBottom: i < cat.articles.length - 1 ? "1px solid #e0d8c8" : "none",
                      textDecoration: "none",
                      transition: "background 0.2s",
                      borderRadius: 4,
                      paddingLeft: 12,
                      paddingRight: 12,
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(139,105,20,0.04)")
                    }
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
                  >
                    {/* Gold dot */}
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: GOLD,
                        flexShrink: 0,
                        marginTop: 7,
                      }}
                    />

                    {/* Text */}
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontFamily: "Georgia, serif",
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#0a1628",
                          marginBottom: 4,
                          lineHeight: 1.4,
                        }}
                      >
                        {article.title}
                      </div>
                      <div style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#4a5568", lineHeight: 1.6 }}>
                        {article.description}
                      </div>
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
                        marginTop: 4,
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

        {/* CTA */}
        <section style={{ background: "#0a1628", padding: "64px 24px", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 12px",
            }}
          >
            Have a Question That Isn't Covered Here?
          </h2>
          <p
            style={{
              ...NAV_FONT,
              fontSize: 15,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 560,
              margin: "0 auto 32px",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Every property situation is different. Real Property Planning is happy to answer questions — no obligation,
            no pressure.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-8 py-4 h-auto rounded-lg">
              <img
                src={iconPhone3d}
                alt=""
                aria-hidden="true"
                className="w-10 h-10 mr-2.5 object-contain shrink-0"
                style={{ background: "transparent" }}
                loading="lazy"
              />
              Start a Conversation
            </Button>
          </Link>
        </section>

        <RelatedServices currentPath="/guides-and-resources" />
        <DisclaimerSection />
      </main>

      <Footer />
    </>
  );
};

export default GuidesAndResources;
