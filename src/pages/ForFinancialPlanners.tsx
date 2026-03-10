import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";

const whyPlannersInvolveRE = [
  {
    heading: "Sale Versus Hold Decisions",
    text: "When a client inherits property or holds real estate within a trust or estate, deciding whether to sell or hold often depends on condition, carrying costs, market timing, and broader planning goals. David Stein provides the practical real estate perspective that helps inform that analysis.",
  },
  {
    heading: "Inherited Property Evaluation",
    text: "Inherited homes often carry deferred maintenance, personal belongings, outdated finishes, or condition questions that affect value and next steps. David helps clients understand the property's realistic market position before making decisions.",
  },
  {
    heading: "Trust-Related Real Estate",
    text: "Trust-owned properties may need to be evaluated, prepared, or sold as part of broader administrative or planning goals. David Stein helps trustees and beneficiaries navigate these transitions with clarity and professionalism.",
  },
  {
    heading: "Timing, Preparation, and Marketability",
    text: "The timing, presentation, and preparation of a property sale can meaningfully affect the outcome. David helps clients and their advisors understand how these factors interact with value and market conditions in Western Washington.",
  },
];

const howHelpsBlocks = [
  {
    heading: "Practical Real Estate Guidance",
    text: "David Stein helps clients and their advisors understand property condition, likely market position, preparation options, and the practical steps involved in bringing real estate to market during important transitions.",
  },
  {
    heading: "Valuation-Informed Perspective",
    text: "As both a licensed real estate broker and a Washington state certified real estate appraiser, David brings added insight into pricing, marketability, and property positioning that supports more informed decision-making.",
  },
  {
    heading: "Preparation Strategy",
    text: "Not every property needs renovation. David helps clients evaluate whether preparation, cleanup, or an as-is approach makes the most sense given condition, cost, and expected market response.",
  },
  {
    heading: "Local Market Awareness",
    text: "David Stein serves clients throughout King County, Snohomish County, Pierce County, and Kitsap County with local market knowledge that helps inform pricing, timing, and strategy across different communities.",
  },
  {
    heading: "Support for Families and Decision-Makers",
    text: "Property transitions often involve multiple stakeholders — trustees, heirs, spouses, and family members. David communicates clearly and helps reduce friction throughout the process.",
  },
  {
    heading: "Important Property Transitions in Western Washington",
    text: "Whether the situation involves probate, inheritance, trust administration, downsizing, or senior housing changes, David Stein helps clients navigate the real estate side of these transitions with practical, experienced guidance.",
  },
];

const commonSituations = [
  "Inherited homes requiring evaluation and sale guidance",
  "Trust-owned real estate transitions",
  "Probate property sales",
  "Senior transitions and downsizing",
  "Longtime family homes where condition and value need assessment",
  "Properties requiring cleanup, preparation, or as-is decisions",
  "Homes where value and timing affect broader financial planning",
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
      <Header />

      {/* Section 1: Hero */}
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
                  Discuss a Client Situation
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

      {/* Section 2: Why Financial Planners May Involve a Real Estate Professional */}
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
              Financial planners may need real estate insight when a client's broader planning goals intersect with property decisions that require experienced market perspective, valuation awareness, and practical guidance.
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

      {/* Section 3: How David Stein Helps Financial Planner Clients */}
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
              David Stein provides practical, valuation-informed real estate guidance that helps financial planner clients and their families navigate important property transitions with greater clarity and confidence.
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

      {/* Section 4: Common Real Estate Situations */}
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
              Financial planners and their clients encounter a range of property-related situations where experienced real estate guidance can support better-informed planning decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {commonSituations.map((situation, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2.5 shrink-0" />
                  <p className="text-foreground leading-relaxed">{situation}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How the Process Works</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/faq" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Frequently Asked Questions</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/contact" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Contact David Stein</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Experienced Property Guidance */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
                Experienced Perspective
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
                Why Clients Benefit From Experienced Property Guidance
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Clients are often better served when property-related decisions are approached with realistic market perspective, practical planning, and coordination among the professionals involved. When a financial planner, attorney, fiduciary, and real estate professional each contribute within their area of expertise, the client benefits from a more informed and well-organized process.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                David Stein values the trust that financial planners place in him when referring a client. He aims to reflect well on the professionals who involve him by providing thoughtful, experienced, and discreet real estate guidance throughout every property transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Disclaimer */}
      <DisclaimerSection />

      {/* Section 7: Final CTA */}
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
