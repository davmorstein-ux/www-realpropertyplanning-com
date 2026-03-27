import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import NextStepBlock from "@/components/NextStepBlock";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  { question: "What is the most expensive mistake executors make?", answer: "Pricing the property based on emotion or outdated information rather than current market data. An overpriced property sits on the market, accumulates carrying costs, and eventually sells for less than it would have at a well-researched initial price." },
  { question: "Is it a mistake to sell a house quickly?", answer: "Speed is not inherently a mistake — under-preparation is. A property that is properly assessed, priced, and presented can sell quickly and still achieve strong results. The mistake is rushing to market without doing the groundwork." },
  { question: "Should I use the same agent who sold the house originally?", answer: "Not necessarily. Estate and probate property sales require specific expertise — understanding fiduciary obligations, court requirements, family dynamics, and valuation. An agent who specializes in estate property understands these nuances in ways that a general residential agent may not." },
  { question: "How do I know if I'm making a mistake?", answer: "If you are making decisions without professional guidance, without understanding the property's current value, or under pressure from family members who may not understand the process — those are warning signs. Taking the time to get informed before acting is the single best way to avoid costly errors." },
];

const jsonLd = articleSchema({
  headline: "What Are the Biggest Mistakes People Make When Selling an Estate Property?",
  description: "The most common and costly mistakes families and executors make when selling estate property — and how to avoid them. Covers pricing, preparation, timing, and communication.",
  url: "/insights/estate-property-mistakes",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Estate property mistakes", "Executor errors", "Property sale pitfalls", "Estate planning"],
});

const EstatePropertyMistakes = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Biggest Mistakes When Selling an Estate Property | Real Property Planning"
      description="The most common and costly mistakes families make when selling estate property. Pricing errors, preparation missteps, timing issues, and how to avoid them."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Insights", url: "/insights" },
      { name: "Estate Property Mistakes", url: "/insights/estate-property-mistakes" },
    ]} />
    <Header />

    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Insights</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            What Are the Biggest Mistakes People Make When Selling an Estate Property?
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            Most estate property mistakes are not dramatic failures — they are quiet, avoidable errors that cost families time, money, and unnecessary stress. The good news is that nearly all of them can be prevented with professional guidance and a structured approach.
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            This article covers the most common mistakes across pricing, preparation, timing, and communication — and what to do instead.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* Pricing Mistakes */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Pricing Mistakes</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Pricing is where the most money is lost — or left on the table — in estate property sales.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Pricing based on emotion.</strong> Families often believe the home is worth more than the market supports — because of what it means to them, not what a buyer would pay. This leads to overpricing, extended market time, and eventual price reductions that signal desperation.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Relying on online estimates.</strong> Automated valuation tools cannot account for deferred maintenance, dated interiors, or the specific condition of an estate property. Using Zillow's "Zestimate" as a pricing strategy is one of the most common and costly errors.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Underpricing to get a quick sale.</strong> Some executors, eager to close the estate, accept the first offer without understanding whether it reflects fair market value. This can expose the executor to legal challenges from heirs who believe the property was sold for too little.
          </p>
        </div>
      </div>
    </section>

    {/* Preparation Mistakes */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Preparation Mistakes</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            How a property is prepared for sale directly affects what buyers are willing to offer.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Listing with a cluttered home.</strong> Buyers cannot see past decades of accumulated belongings. A property full of furniture, personal items, and clutter almost always sells for less — not because the house is worth less, but because buyers struggle to see its potential.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Over-improving the property.</strong> Spending $30,000 on a kitchen remodel for an estate property rarely returns that investment. Targeted, cost-effective improvements — cleaning, paint, landscaping — are almost always a better use of estate funds.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Doing nothing.</strong> Some families are so overwhelmed that they list the property without any preparation at all. Even modest effort — basic cleaning, yard work, and removing personal items — can shift buyer perception significantly.
          </p>
        </div>
      </div>
    </section>

    <MidPageCTA />

    {/* Timing Mistakes */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Timing Mistakes</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Estate property sales follow their own rhythm — and fighting against that rhythm creates problems.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Waiting too long to start.</strong> Many families delay action hoping that "the right time" will appear. Meanwhile, the property deteriorates, carrying costs accumulate, and the eventual sale becomes more difficult and less profitable.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Not using the probate waiting period.</strong> The weeks or months between filing for probate and receiving court authority are a valuable planning window. Families who use this time to assess, clean out, and prepare the property are often ready to list the day they receive their letters — saving months on the overall timeline.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Letting external pressure dictate timing.</strong> A neighbor's offer, a family member's urgency, or market anxiety can push families into premature decisions. Taking the time to get informed — even if it means saying "not yet" — almost always leads to better outcomes.
          </p>
        </div>
      </div>
    </section>

    {/* Communication Issues */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Communication Issues</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Poor communication between family members, professionals, and other stakeholders is one of the most underestimated causes of problems in estate sales.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Not keeping all heirs informed.</strong> Even when the executor has authority to make decisions, excluding family members from the process breeds resentment and legal risk. Regular updates — even brief ones — maintain trust.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Not coordinating professionals.</strong> When the attorney, agent, appraiser, and cleanout crew are all working independently without a shared timeline, delays multiply. Someone needs to be coordinating the moving parts.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Avoiding difficult conversations.</strong> Disagreements about price, timing, or distribution do not resolve themselves. The longer they are avoided, the more entrenched positions become. Early, honest conversation — ideally supported by objective data — is the best prevention.
          </p>
        </div>
      </div>
    </section>

    {/* How to Avoid Them */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">How to Avoid These Mistakes</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            The pattern across all of these mistakes is the same: acting without adequate information or professional guidance.
          </p>
          <ul className="space-y-4">
            {[
              "Get a professional property assessment before making any major decisions",
              "Work with professionals who understand estate and probate property — not just residential real estate",
              "Use the probate waiting period productively rather than waiting passively",
              "Communicate openly with all stakeholders and establish a clear timeline",
              "Make pricing decisions based on data, not emotion or online estimates",
              "Invest in targeted preparation that removes barriers for buyers without over-spending",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-6">
            Most families who follow these principles look back on the process feeling that it was handled well — even when the situation itself was difficult.
          </p>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <PageFAQ faqs={faqs} />
        </div>
      </div>
    </section>

    <NextStepBlock
      steps={[
        { title: "Executor's Pre-Sale Checklist", description: "Practical first steps for executors.", href: "/guides/what-executors-should-do" },
        { title: "Estate Property Sale Timeline", description: "What affects timing and realistic expectations.", href: "/insights/estate-property-sale-timeline" },
        { title: "Everett Probate & Estate Real Estate", description: "Local support for Snohomish County families.", href: "/everett-probate-estate-real-estate" },
      ]}
    />

    {/* CTA */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">A Clear Next Step</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            If you're working through a situation like this and want help thinking through your options, a short conversation can often bring clarity.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-primary font-semibold px-8 py-4 text-lg rounded-lg">
              Schedule a Consultation
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-3">No pressure. Just practical guidance.</p>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/insights/estate-property-mistakes" />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default EstatePropertyMistakes;
