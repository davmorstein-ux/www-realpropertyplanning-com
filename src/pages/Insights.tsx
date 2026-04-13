import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import ResourceCard from "@/components/ResourceCard";
import { BookOpen, Home, Users, MapPin, DollarSign, Scale, Compass } from "lucide-react";

interface Article {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

interface Category {
  label: string;
  id: string;
  icon: React.ReactNode;
  articles: Article[];
}

const categories: Category[] = [
  {
    label: "Probate & Estate Property",
    id: "probate-estate",
    icon: <Scale className="w-5 h-5 text-gold" />,
    articles: [
      {
        title: "How Does Probate Real Estate Work in Washington?",
        description: "An overview of the probate sale process, court requirements, and what executors and attorneys need to know.",
        href: "/insights-guidance/how-does-probate-real-estate-work-in-washington",
      },
      {
        title: "Can an Executor Sell a House Before Probate?",
        description: "What Washington law allows — and why timing, authority, and documentation matter before listing.",
        href: "/guides/executor-sell-house-before-probate-washington",
      },
      {
        title: "What Happens If Heirs Disagree on Selling a House?",
        description: "How families navigate disagreements, what options exist, and where independent valuation helps.",
        href: "/guides/heirs-disagree-selling-house",
      },
      {
        title: "Understanding the Timeline for Selling an Estate Property",
        description: "What affects timing, how probate and non-probate situations differ, and realistic expectations.",
        href: "/insights/estate-property-sale-timeline",
      },
      {
        title: "What Are the Biggest Mistakes When Selling Estate Property?",
        description: "Common pricing, preparation, timing, and communication errors — and how to avoid them.",
        href: "/insights/estate-property-mistakes",
      },
    ],
  },
  {
    label: "Inherited Homes",
    id: "inherited-homes",
    icon: <Home className="w-5 h-5 text-gold" />,
    articles: [
      {
        title: "What to Do With an Inherited House in Washington State",
        description: "Options, decision factors, and practical guidance when you inherit property in Washington.",
        href: "/guides/inherited-house-washington",
      },
      {
        title: "What Should You Do First After Inheriting a House in Washington?",
        description: "Immediate priorities, common mistakes to avoid, and how to think through your next steps.",
        href: "/insights/first-steps-inherited-house-washington",
      },
      {
        title: "What Repairs Should Be Done Before Selling an Estate Property?",
        description: "Which improvements are worth the investment — and which ones to skip.",
        href: "/guides/estate-property-repairs-before-sale",
      },
      {
        title: "Should You Clean Out an Estate Property Before Selling?",
        description: "When cleanout is necessary, when it may not be needed, and a practical decision approach.",
        href: "/insights/estate-property-cleanout-before-sale",
      },
      {
        title: "Can You Sell an Inherited House Without Fixing It Up?",
        description: "Pros and cons of selling as-is, when repairs make sense, and how to evaluate the decision.",
        href: "/insights/sell-inherited-house-without-repairs",
      },
      {
        title: "Do You Need to Empty a House Before Selling It?",
        description: "When emptying matters, when it doesn't, and a practical approach to the decision.",
        href: "/insights/empty-house-before-selling",
      },
      {
        title: "How Do You Decide Whether to Sell or Keep an Inherited Property?",
        description: "Financial considerations, emotional factors, and a simple decision framework.",
        href: "/insights/sell-or-keep-inherited-property",
      },
    ],
  },
  {
    label: "Executors & Trustees",
    id: "executors-trustees",
    icon: <Users className="w-5 h-5 text-gold" />,
    articles: [
      {
        title: "What Should an Executor Do Before Selling an Inherited Home?",
        description: "Practical first steps for executors and personal representatives — from securing the property to understanding value.",
        href: "/guides/what-executors-should-do",
      },
      {
        title: "Can an Executor Sell Before Probate in Washington?",
        description: "Understanding timing, legal authority, and preparation steps before a property can be listed.",
        href: "/guides/executor-sell-house-before-probate-washington",
      },
      {
        title: "What Happens If Family Members Disagree About Selling?",
        description: "Common conflict scenarios, communication strategies, and how to find a way forward.",
        href: "/insights/family-disagreement-selling-house",
      },
    ],
  },
  {
    label: "Senior Transitions",
    id: "senior-transitions",
    icon: <Compass className="w-5 h-5 text-gold" />,
    articles: [
      {
        title: "How Do Senior Transition Sales Differ From Ordinary Home Sales?",
        description: "What families should expect when helping a parent or loved one sell a longtime home.",
        href: "/guides/senior-transition-differences",
      },
      {
        title: "How to Move Elderly Parents Safely and Respectfully",
        description: "Guidance for families coordinating a move from a longtime home to a new living situation.",
        href: "/how-to-move-elderly-parents",
      },
    ],
  },
  {
    label: "Valuation & Pricing",
    id: "valuation-pricing",
    icon: <DollarSign className="w-5 h-5 text-gold" />,
    articles: [
      {
        title: "What Is the Difference Between an Appraisal and a CMA?",
        description: "Why the distinction matters for estate property, probate sales, and trust-related real estate decisions.",
        href: "/guides/appraisal-vs-cma",
      },
      {
        title: "Do I Need an Appraisal Before Selling Inherited Property?",
        description: "When a formal appraisal is required, when it's recommended, and how it protects your interests.",
        href: "/guides/appraisal-before-selling-inherited-property",
      },
      {
        title: "How Do You Price a House in a Trust or Estate?",
        description: "Valuation-informed strategies that protect fiduciaries and support informed decisions.",
        href: "/guides/pricing-house-trust-estate",
      },
      {
        title: "What Makes Pricing an Inherited Property Different?",
        description: "Why inherited property pricing requires a different approach — and how to avoid costly mistakes.",
        href: "/insights/pricing-inherited-property-differences",
      },
    ],
  },
  {
    label: "Out-of-State Ownership",
    id: "out-of-state",
    icon: <MapPin className="w-5 h-5 text-gold" />,
    articles: [
      {
        title: "How Can an Out-of-State Family Manage a Washington Property Sale?",
        description: "Guidance for executors, trustees, and family members coordinating a sale from a distance.",
        href: "/guides/out-of-state-families",
      },
      {
        title: "How to Handle an Inherited House When You Live Out of State",
        description: "Practical strategies for managing inherited property remotely — coordination, condition, and minimizing travel.",
        href: "/insights/out-of-state-inherited-house-help",
      },
    ],
  },
];

const Insights = () => {
  return (
    <>
      <SEOHead
        title="Insights | Probate, Estate & Senior Transition Guidance | Real Property Planning"
        description="Clear, practical guidance for families, executors, and professionals navigating probate, inherited property, and senior transition real estate in Washington State."
        canonical="https://www.realpropertyplanning.com/insights"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.realpropertyplanning.com" },
          { name: "Insights", url: "https://www.realpropertyplanning.com/insights" },
        ]}
      />
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="bg-secondary py-14 md:py-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
                Insights & Guidance
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-tight mb-4">
                Guidance for Probate, Inherited Property, and Real Estate Decisions
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Clear, practical information to help families, executors, and professionals navigate complex property situations.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 md:py-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed">
                Whether you're an executor navigating probate for the first time, a family managing an inherited home, or a professional advising a client — these articles address the questions and situations that come up most often. Each guide is written in plain language with a focus on real-world usefulness.
              </p>
            </div>
          </div>
        </section>

        {/* Category Sections */}
        {categories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="py-12 md:py-16 even:bg-secondary"
          >
            <div className="container px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    {cat.icon}
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
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

        {/* Quick Links */}
        <section className="py-14 md:py-20 bg-warm-bg">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Looking for Something Specific?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                These pages address the most common starting points for families and professionals.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "For Executors", href: "/executors" },
                  { label: "Probate & Estate Sales", href: "/probate-estate-sales" },
                  { label: "Senior Transitions", href: "/senior-transitions" },
                  { label: "Why Valuation Matters", href: "/why-valuation-matters" },
                  { label: "Resources", href: "/resources" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-block px-5 py-2.5 rounded-[14px] text-sm font-medium text-foreground transition-all duration-200 ease-out bg-gradient-to-b from-white to-[#f0ede8] border-[1.5px] border-[hsl(42_55%_62%/0.5)] shadow-[0_3px_0_rgba(160,150,130,0.3),0_6px_14px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] hover:-translate-y-[2px] hover:border-[hsl(42_60%_52%/0.6)] hover:shadow-[0_5px_0_rgba(160,150,130,0.3),0_10px_18px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:text-gold active:translate-y-[1px] active:shadow-[0_1px_3px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(0,0,0,0.04)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <RelatedServices currentPath="/insights" />
          <DisclaimerSection />
      </main>

      <Footer />
    </>
  );
};

export default Insights;
