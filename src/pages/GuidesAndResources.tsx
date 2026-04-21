import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import ResourceCard from "@/components/ResourceCard";
import { BookOpen, Home, Users, Compass, DollarSign, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import iconResources from "@/assets/icons/probate-estate-resources-icon-washington.webp";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import { Button } from "@/components/ui/button";

interface Article {
  title: string;
  description: string;
  href: string;
}

interface Category {
  label: string;
  id: string;
  icon: React.ReactNode;
  articles: Article[];
}

const categories: Category[] = [
  {
    label: "Probate & Inherited Property",
    id: "probate-inherited",
    icon: <Home className="w-5 h-5 text-gold" />,
    articles: [
      {
        title: "How Probate Real Estate Works in Washington",
        description:
          "An overview of the probate sale process, court requirements, and what executors and attorneys need to know about selling estate property.",
        href: "/guides/how-probate-real-estate-works",
      },
      {
        title: "Can You Sell a House During Probate in Washington?",
        description:
          "What Washington law allows, what approvals may be needed, and how the timeline works when selling during probate.",
        href: "/guides/sell-house-during-probate-washington",
      },
      {
        title: "What to Do With an Inherited House in Washington",
        description:
          "Options, decision factors, and practical guidance when you inherit property in Washington State.",
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
        description:
          "What affects timing, how probate and non-probate situations differ, and realistic expectations for estate sales.",
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
          "A realistic, step-by-step guide to how long a probate property sale actually takes — from death to distribution of proceeds.",
        href: "/guides/probate-house-sale-timeline-washington",
      },
    ],
  },
  {
    label: "Executors, Trustees & Families",
    id: "executors-trustees",
    icon: <Users className="w-5 h-5 text-gold" />,
    articles: [
      {
        title: "What Executors Should Do Before Selling a Home",
        description:
          "Practical first steps for executors and personal representatives — from securing the property to understanding its value.",
        href: "/guides/what-executors-should-do",
      },
      {
        title: "What Should an Executor Do First With a House?",
        description:
          "Immediate priorities, securing the property, and what to focus on in the first 30 days.",
        href: "/guides/executor-first-steps-house",
      },
      {
        title: "Can an Executor Sell Before Probate in Washington?",
        description:
          "Understanding timing, legal authority, and preparation steps before a property can be listed.",
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
        description:
          "Guidance for executors, trustees, and family members coordinating a sale from a distance.",
        href: "/guides/out-of-state-families",
      },
    ],
  },
  {
    label: "Senior Moves & Housing Options",
    id: "senior-moves",
    icon: <Compass className="w-5 h-5 text-gold" />,
    articles: [
      {
        title: "How to Help a Parent Move From a Longtime Home",
        description:
          "Compassionate guidance for families coordinating a move from a longtime home to a new living situation.",
        href: "/how-to-move-elderly-parents",
      },
      {
        title: "How Senior Transition Sales Differ From Ordinary Home Sales",
        description:
          "What families should expect when helping a parent or loved one sell a longtime home.",
        href: "/guides/senior-transition-differences",
      },
      {
        title: "Senior Housing Options Explained",
        description:
          "An overview of independent living, assisted living, memory care, adult family homes, and skilled nursing — and how each relates to real estate decisions.",
        href: "/senior-living-and-relocation",
      },
      {
        title: "Downsizing a Senior's Home: Where to Start",
        description:
          "Practical guidance for families helping a parent or loved one move from a larger home to a smaller space or community setting.",
        href: "/senior-transitions",
      },
    ],
  },
  {
    label: "Selling, Pricing & Preparation",
    id: "selling-pricing",
    icon: <DollarSign className="w-5 h-5 text-gold" />,
    articles: [
      {
        title: "Appraisal vs. CMA for Estate Property",
        description:
          "Why the distinction matters for estate property, probate sales, and trust-related real estate decisions.",
        href: "/guides/appraisal-vs-cma",
      },
      {
        title: "Do You Need an Appraisal Before Selling Inherited Property?",
        description:
          "When a formal appraisal is required, when it's recommended, and how it protects your interests.",
        href: "/guides/appraisal-before-selling-inherited-property",
      },
      {
        title: "How Do You Price a House in a Trust or Estate?",
        description:
          "Evidence-based strategies that protect fiduciaries and support informed decisions.",
        href: "/guides/pricing-house-trust-estate",
      },
      {
        title: "Should You Sell an Inherited House As-Is or Fix It First?",
        description:
          "Pros and cons of selling as-is, when repairs make sense, and how to evaluate the decision.",
        href: "/guides/sell-inherited-house-as-is-or-fix",
      },
      {
        title: "What Repairs Should Be Done Before Selling Estate Property?",
        description:
          "Which improvements are worth the investment — and which ones to skip.",
        href: "/guides/estate-property-repairs-before-sale",
      },
      {
        title: "What Are the Biggest Mistakes When Selling Estate Property?",
        description:
          "Common pricing, preparation, timing, and communication errors — and how to avoid them.",
        href: "/insights/estate-property-mistakes",
      },
      {
        title: "What Repairs Should Be Made Before Selling a Probate Home?",
        description:
          "A practical guide to which improvements are worth the investment in an estate property — and which ones to skip.",
        href: "/guides/repairs-before-selling-probate-home-washington",
      },
    ],
  },
  {
    label: "Professionals & Coordination",
    id: "professionals",
    icon: <Briefcase className="w-5 h-5 text-gold" />,
    articles: [
      {
        title: "Which Professionals May Be Needed During a Property Transition",
        description:
          "An overview of the attorneys, appraisers, move managers, estate sale companies, and other specialists families may work with.",
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
        canonical="https://www.realpropertyplanning.com/guides-and-resources"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.realpropertyplanning.com" },
          { name: "Guides & Resources", url: "https://www.realpropertyplanning.com/guides-and-resources" },
        ]}
      />
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <img
                src={iconResources}
                alt=""
                aria-hidden="true"
                className="mx-auto max-w-[18rem] w-full h-auto object-contain mb-4"
                loading="eager"
              />
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-4">
                Guides & Resources
              </h1>
              <p className="text-primary-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-4 font-medium">
                Everything you need to understand probate real estate, inherited property, and senior housing transitions — organized by topic and written in plain language.
              </p>
              <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Practical answers to common questions about probate, inherited homes, senior transitions, pricing, and the professionals who help.
              </p>
            </div>
          </div>
        </section>

        {/* Category Jump Links */}
        <section className="py-8 border-b border-border/40">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-foreground transition-all duration-200 ease-out bg-gradient-to-b from-white to-[hsl(40_20%_96%)] border border-border/60 shadow-sm hover:-translate-y-[1px] hover:border-gold/40 hover:text-gold hover:shadow-md"
                >
                  {cat.icon}
                  {cat.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Category Sections */}
        {categories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="py-14 md:py-18 even:bg-secondary"
          >
            <div className="container px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                    {cat.icon}
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    {cat.label}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.articles.map((article) => (
                    <ResourceCard
                      key={article.href}
                      title={article.title}
                      description={article.description}
                      linkTo={article.href}
                      icon={<BookOpen className="h-5 w-5 text-gold" />}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-14 md:py-20 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Have a Question That Isn't Covered Here?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Every property situation is different. Real Property Planning is happy to answer questions — no obligation, no pressure.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-8 py-4 h-auto rounded-lg">
                  <img
                    src={iconPhone3d}
                    alt=""
                    aria-hidden="true"
                    className="w-10 h-10 mr-2.5 object-contain shrink-0"
                    style={{ background: "transparent" }}
                   loading="lazy"/>
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <RelatedServices currentPath="/guides-and-resources" />
        <DisclaimerSection />
      </main>

      <Footer />
    </>
  );
};

export default GuidesAndResources;
