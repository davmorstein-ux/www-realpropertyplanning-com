import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const whyCPAsInvolveRE = [
  {
    heading: "Understanding Likely Market Value",
    text: "Clients often need a practical understanding of what a property may be worth before they can make informed decisions about holding, selling, distributing, or planning around a real estate asset.",
  },
  {
    heading: "Evaluating Sale Timing and Strategy",
    text: "A property may need to be sold quickly, prepared carefully for the market, or evaluated more thoughtfully before action is taken. Real estate timing and preparation decisions can have meaningful consequences.",
  },
  {
    heading: "Helping Clients Think Through Property Condition",
    text: "Inherited homes, longtime family residences, and estate properties are often not in move-in-ready condition. Deferred maintenance, cleanup needs, or outdated features can materially affect marketability and sale strategy.",
  },
  {
    heading: "Supporting Coordinated Decision-Making",
    text: "Property decisions often involve attorneys, trustees, heirs, fiduciaries, and family members. A knowledgeable real estate resource can help bring more clarity and structure to the real-estate side of those discussions.",
  },
];

const howHelpsBlocks = [
  {
    heading: "Valuation-Informed Perspective",
    text: "As both a licensed real estate broker in Washington and a Washington state certified real estate appraiser, David Stein brings added perspective to questions of likely value, pricing strategy, marketability, and sale positioning.",
  },
  {
    heading: "Practical Guidance on Sale Strategy",
    text: "Some properties should be sold as-is. Others may benefit from cleanup, repairs, or selective preparation before going to market. David helps clients think through those choices in a practical and market-conscious way.",
  },
  {
    heading: "Support With Inherited and Probate Property",
    text: "Inherited homes and probate properties often involve more complexity than a typical sale. David helps clients and their advisors understand the issues that may affect next steps, timing, and presentation.",
  },
  {
    heading: "Help With Trust-Owned Real Estate",
    text: "Trust-owned property can still involve important decisions about value, preparation, timing, and family communication. David helps bring structure and practical market guidance to that process.",
  },
  {
    heading: "Local Market Insight",
    text: "David Stein serves King County, Snohomish County, Pierce County, and Kitsap County, with local market knowledge that helps clients make decisions grounded in actual market conditions rather than broad assumptions.",
  },
  {
    heading: "Clear Communication With Clients and Advisors",
    text: "When clients are working with CPAs, attorneys, trustees, or fiduciaries, David Stein helps provide real-estate-related insight within the scope of his role so the client can move forward with greater clarity and confidence.",
  },
];

const commonSituations = [
  "Inherited homes",
  "Probate property",
  "Trust-owned real estate",
  "Longtime family homes",
  "Estate-related home sales",
  "Downsizing and senior transitions",
  "Questions about likely market value",
  "Sale timing decisions",
  "Property preparation and as-is sale considerations",
  "Clients needing practical real estate guidance during major life transitions",
];

const coordinatedFeatures = [
  {
    heading: "Clear Role Definition",
    text: "David Stein provides real-estate-related guidance, market perspective, and valuation-informed insight within the scope of his professional licensure and certification.",
  },
  {
    heading: "Better Client Understanding",
    text: "When clients have a clearer understanding of the real estate side of the situation, broader financial and planning conversations often become easier to navigate.",
  },
  {
    heading: "Stronger Coordination",
    text: "A coordinated approach can help reduce confusion, improve communication, and support more informed decisions involving important real property assets.",
  },
  {
    heading: "Practical Forward Movement",
    text: "When the right professionals are involved at the right time, clients are more likely to move forward with clarity, confidence, and a workable plan.",
  },
];

const ForCPAs = () => {
  const jsonLd = articleSchema({
    headline: "Real Estate Guidance for CPAs and Their Clients",
    description: "Real Property Planning provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for CPAs and their clients throughout Washington State.",
    url: "/for-cpas",
    datePublished: "2025-01-15",
    dateModified: "2026-03-15",
    about: ["CPA real estate guidance", "Estate property", "Inherited property", "Tax planning", "Capital gains"],
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Real Estate Guidance for CPAs and Their Clients | Real Property Planning"
        description="Real Property Planning provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for CPAs and their clients throughout Washington State."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "For CPAs", url: "/for-cpas" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Professional Referral Resource
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Real Estate Guidance for CPAs and Their Clients
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              Real Property Planning supports CPAs and their clients when important financial decisions involve inherited property, estate settlement, trust administration, probate matters, downsizing, or the sale of real estate during major life transitions.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              David Stein brings more than 20 years of experience as a Washington real estate broker and state certified residential appraiser, helping clients and their advisors navigate property decisions with a practical, valuation-informed approach throughout King, Snohomish, Pierce, and Kitsap Counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Request a Confidential Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Why CPAs May Involve a Real Estate Professional */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              When Real Estate Insight Matters
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              Why CPAs May Involve a Real Estate Professional
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              For many clients, real estate is one of the most significant assets involved in estate settlement, inheritance, trust administration, or later-life planning. When that property becomes part of a broader financial conversation, it can be helpful to involve a real estate professional who can provide grounded perspective on likely value, marketability, timing, and sale strategy.
            </p>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {whyCPAsInvolveRE.map((card, index) => (
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

      {/* How David Stein Helps CPA Clients */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Practical Real Estate Guidance
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              How Real Property Planning Helps CPA Clients
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              Real Property Planning helps CPA clients understand the real-estate side of important property decisions in a way that is calm, practical, and valuation-informed — clarifying what the property is, how the market is likely to view it, and what options may make the most sense.
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

      {/* Common Situations */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Representative Situations
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              Common Situations Where Real Property Planning Can Help
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              Real estate becomes relevant in many financial and estate-related situations. Real Property Planning helps CPA clients navigate a wide range of property matters that affect timing, decision-making, and value.
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
              Whether the property is an inherited residence, a trust-owned home, a probate asset, or a longtime family property that now needs to be evaluated and sold, David Stein helps clients move from uncertainty toward a more informed and manageable process.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-base">How the Process Works</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-base">Why Valuation Matters</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-attorneys" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-base">For Attorneys & Fiduciaries</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-financial-planners" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-base">For Financial Planners</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/faq" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-base">Frequently Asked Questions</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/contact" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-base">Contact David Stein</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why a Coordinated Professional Approach Matters */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Working Together
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              Why a Coordinated Professional Approach Matters
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              Clients are often best served when each professional advisor works within their own role while helping the client make more informed decisions. Real estate, legal, tax, and financial planning questions often overlap, but each should be addressed by the appropriate professional.
            </p>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {coordinatedFeatures.map((feature, index) => (
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
                If you are a CPA working with a client who needs guidance related to probate property, inherited real estate, trust-owned property, downsizing, or an estate-related home sale in King County, Snohomish County, Pierce County, or Kitsap County, David Stein provides experienced real estate guidance grounded in market knowledge, valuation insight, and a practical understanding of important property transitions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
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

export default ForCPAs;
