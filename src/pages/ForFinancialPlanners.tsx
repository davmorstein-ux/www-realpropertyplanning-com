import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";

const whyPlannersInvolveRE = [
  {
    heading: "Sale Versus Hold Decisions",
    text: "Clients sometimes need to decide whether to sell, retain, or further evaluate a property before making larger planning decisions. Understanding how the market is likely to view the property can help shape that conversation.",
  },
  {
    heading: "Value and Marketability Questions",
    text: "A property's likely value is important, but so is its likely marketability. Condition, location, buyer expectations, and preparation needs can all affect timing and overall outcome.",
  },
  {
    heading: "Downsizing and Senior Housing Changes",
    text: "Later-life housing decisions often involve both personal and financial considerations. When a home sale is part of the transition, practical real estate guidance helps clarify next steps.",
  },
  {
    heading: "Estate and Trust Property Transitions",
    text: "Inherited homes, trust-owned properties, and estate assets often require coordination among family members and professional advisors. Real estate guidance can help reduce uncertainty during those transitions.",
  },
];

const howHelpsBlocks = [
  {
    heading: "Practical Real Estate Guidance",
    text: "David helps clients understand what the property is, what may affect its value, how buyers are likely to respond, and what sale strategy may make the most sense.",
  },
  {
    heading: "Valuation-Informed Perspective",
    text: "As both a Washington-licensed real estate broker and a Washington state certified real estate appraiser, David Stein brings added insight to questions of pricing, condition, marketability, and positioning.",
  },
  {
    heading: "Preparation Strategy",
    text: "Some homes benefit from cleanup, repairs, or limited improvements before going to market. Others are best sold as-is. David helps clients think through those choices with care and realism.",
  },
  {
    heading: "Local Market Awareness",
    text: "David Stein serves King County, Snohomish County, Pierce County, and Kitsap County, with local insight that helps inform decisions in a wide range of neighborhoods and property types.",
  },
  {
    heading: "Support for Families and Decision-Makers",
    text: "Many planner clients are also working with trustees, heirs, fiduciaries, adult children, or other decision-makers. David helps bring clarity and practical structure to the real-estate side of the process.",
  },
  {
    heading: "Experience With Important Property Transitions",
    text: "Probate property, inherited homes, trust-owned real estate, downsizing, and estate-related sales often require more than a standard listing approach. David helps clients move forward with greater confidence and a better understanding of their options.",
  },
];

const commonSituations = [
  "Inherited homes",
  "Trust-owned real estate",
  "Probate property sales",
  "Senior transitions",
  "Downsizing",
  "Longtime family homes",
  "Properties requiring cleanup, preparation, or as-is decisions",
  "Homes where likely value and timing affect broader planning conversations",
  "Estate-related home sales",
  "Clients seeking clarity about marketability, preparation, and next-step strategy",
];

const benefitFeatures = [
  {
    heading: "Realistic Market Understanding",
    text: "Property decisions are stronger when they are grounded in current market conditions, likely buyer response, and practical preparation considerations.",
  },
  {
    heading: "Clearer Next Steps",
    text: "Clients often feel overwhelmed when real estate becomes part of a larger planning conversation. Practical guidance helps make the situation more manageable.",
  },
  {
    heading: "Better Coordination Among Professionals",
    text: "When financial planners, attorneys, fiduciaries, and real estate professionals each contribute within their own role, clients often receive clearer and more effective guidance.",
  },
  {
    heading: "More Confident Decision-Making",
    text: "When clients better understand the likely value, marketability, and sale strategy of a property, they are often able to move forward with greater confidence and less uncertainty.",
  },
];

const ForFinancialPlanners = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "David Stein — Real Estate Guidance for Financial Planners",
    description: "David Stein provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for financial planners and their clients in King, Snohomish, Pierce, and Kitsap Counties.",
    url: "https://realpropertyplanning.com/for-financial-planners",
    areaServed: [
      { "@type": "AdministrativeArea", name: "King County, WA" },
      { "@type": "AdministrativeArea", name: "Snohomish County, WA" },
      { "@type": "AdministrativeArea", name: "Pierce County, WA" },
      { "@type": "AdministrativeArea", name: "Kitsap County, WA" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Real Estate Guidance for Financial Planners and Their Clients | David Stein"
        description="David Stein provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for financial planners and their clients in King, Snohomish, Pierce, and Kitsap Counties."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "For Financial Planners", url: "/for-financial-planners" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Professional Referral Resource
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Real Estate Guidance for Financial Planners and Their Clients
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              Financial planners are often helping clients think through major decisions involving inherited property, trust-owned homes, estate transitions, downsizing, senior housing changes, and the sale of real estate that may affect broader planning goals. In many cases, it helps to involve an experienced real estate and valuation professional who can provide practical guidance on property condition, likely value, timing, preparation, and market strategy.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              David Stein is a licensed real estate broker in the State of Washington and a Washington state certified real estate appraiser. He helps clients and their advisors navigate probate property, inherited homes, trust-owned real estate, estate-related sales, and other important property transitions throughout King County, Snohomish County, Pierce County, and Kitsap County.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Request a Confidential Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Why Financial Planners May Involve a Real Estate Professional */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              When Real Estate Insight Matters
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              Why Financial Planners May Involve a Real Estate Professional
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              Real estate can play a major role in broader planning decisions, especially when clients are dealing with inheritance, trust administration, downsizing, later-life housing transitions, or a property that may need to be sold as part of a larger financial plan. In those situations, market-aware property guidance can be valuable.
            </p>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {whyPlannersInvolveRE.map((card, index) => (
                <div key={index} className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {card.heading}
                  </h3>
                  <p className="text-muted-foreground leading-[1.75]">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How David Stein Helps Financial Planner Clients */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Practical Real Estate Guidance
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              How David Stein Helps Financial Planner Clients
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              David Stein helps planner clients understand the real-estate side of important property decisions in a way that is grounded, organized, and informed by both market knowledge and valuation perspective.
            </p>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {howHelpsBlocks.map((block, index) => (
                <div key={index} className="bg-secondary border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {block.heading}
                  </h3>
                  <p className="text-muted-foreground leading-[1.75]">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Real Estate Situations */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Planning-Related Property Decisions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              Common Real Estate Situations That Affect Financial Planning
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              Real estate is often one of the most significant assets a client owns or inherits. David Stein helps clients and their advisors navigate situations where property decisions meaningfully affect broader planning.
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
              {commonSituations.map((situation, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2.5 shrink-0" />
                  <p className="text-foreground leading-relaxed">{situation}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
              Whether the property is part of an inheritance, a trust, a downsizing decision, or a broader transition in later life, David Stein helps clients make better-informed decisions with a clearer understanding of the real-estate side of the process.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How the Process Works</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-attorneys" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Attorneys & Fiduciaries</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-cpas" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For CPAs</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/faq" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Frequently Asked Questions</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/contact" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Contact David Stein</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Benefit From Experienced Property Guidance */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Experienced Perspective
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              Why Clients Benefit From Experienced Property Guidance
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              Clients are often better served when property-related decisions are approached with realistic market perspective, practical planning, and coordination among the professionals involved.
            </p>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {benefitFeatures.map((feature, index) => (
                <div key={index} className="bg-secondary border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {feature.heading}
                  </h3>
                  <p className="text-muted-foreground leading-[1.75]">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <DisclaimerSection />

      {/* Final CTA */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-[84px] lg:pb-[104px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <div className="bg-secondary border border-border rounded-[18px] px-7 py-9 md:px-10 md:py-11 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
                Confidential Consultation
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
                Discuss a Client Property Situation With David Stein
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto mb-8">
                If you are a financial planner working with a client who needs guidance related to inherited property, trust-owned real estate, probate property, downsizing, or an estate-related home sale in King County, Snohomish County, Pierce County, or Kitsap County, David Stein provides experienced real estate guidance grounded in market knowledge, valuation insight, and a practical understanding of important property transitions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    Discuss a Client Situation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Request a Confidential Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForFinancialPlanners;
