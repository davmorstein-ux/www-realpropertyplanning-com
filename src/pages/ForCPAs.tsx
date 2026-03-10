import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";

const whyCPAsInvolveRE = [
  {
    heading: "Understanding Likely Property Value",
    text: "When a client inherits property, is settling an estate, or is considering a sale connected to a trust or financial transition, understanding likely value is often one of the first and most important questions. David Stein brings a valuation-informed perspective that helps clients and their advisors make more grounded decisions.",
  },
  {
    heading: "Evaluating Whether to Sell or Hold",
    text: "Property-related decisions often depend on timing, condition, carrying costs, and market context. David helps clients and their professional advisors think through these factors with a realistic view of the local real estate market.",
  },
  {
    heading: "Assessing Preparation and Sale Timing",
    text: "Whether a property should be sold as-is, cleaned out, repaired, or prepared for market depends on condition, value, and the client's goals. David provides practical guidance that helps inform that decision.",
  },
  {
    heading: "Coordinating With Other Professionals",
    text: "Real estate transitions connected to estates, trusts, and inheritance often involve attorneys, trustees, heirs, and family members. David Stein works effectively alongside other professionals and communicates clearly throughout the process.",
  },
];

const howHelpsBlocks = [
  {
    heading: "Valuation-Informed Perspective",
    text: "As both a licensed real estate broker and a Washington state certified real estate appraiser, David Stein brings added insight into pricing, marketability, buyer response, and property positioning that many traditional brokers may not offer.",
  },
  {
    heading: "Pricing and Market Strategy",
    text: "David helps clients understand how condition, location, market timing, and preparation affect likely sale price and buyer interest, helping CPA clients make more informed financial decisions.",
  },
  {
    heading: "Inherited and Probate Property Decisions",
    text: "Properties connected to estates, probate, trusts, and inheritance often carry unique challenges. David helps clients navigate these situations with practical guidance tailored to each property and family circumstance.",
  },
  {
    heading: "Preparation and As-Is Sale Considerations",
    text: "Not every property needs to be renovated before sale. David helps clients evaluate whether preparation, cleanup, or an as-is sale makes the most sense given the property's condition and market position.",
  },
  {
    heading: "Practical Coordination With Families and Advisors",
    text: "David communicates clearly with clients, family members, and professional advisors throughout the process, reducing confusion and helping keep property decisions on track.",
  },
  {
    heading: "Local Market Insight",
    text: "David Stein serves clients throughout King County, Snohomish County, Pierce County, and Kitsap County with local market knowledge that helps inform better property decisions in each area.",
  },
];

const commonSituations = [
  "Inherited homes requiring evaluation and sale guidance",
  "Probate property needing valuation-informed pricing",
  "Trust-owned real estate transitions",
  "Longtime family homes where condition and value need assessment",
  "Downsizing and senior transitions",
  "Estate property preparation and sale timing decisions",
  "Clients needing a practical understanding of real property value and marketability",
];

const ForCPAs = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "David Stein — Real Estate Guidance for CPAs",
    description: "David Stein provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for CPAs and their clients in King, Snohomish, Pierce, and Kitsap Counties.",
    url: "https://realpropertyplanning.com/for-cpas",
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
        title="Real Estate Guidance for CPAs and Their Clients | David Stein"
        description="David Stein provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for CPAs and their clients in King, Snohomish, Pierce, and Kitsap Counties."
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
              Real Estate Guidance for CPAs and Their Clients
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              CPAs are often involved when clients are making important financial decisions related to inherited property, estate settlement, trust administration, probate matters, downsizing, or the sale of real estate during major life transitions. In these situations, it can be helpful to have an experienced real estate and valuation resource who understands how property condition, market timing, preparation strategy, and likely value affect decision-making.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              David Stein is a licensed real estate broker in the State of Washington and a Washington state certified real estate appraiser. He helps clients and their advisors navigate probate property, inherited homes, trust-owned real estate, estate-related home sales, and other important real property transitions throughout King County, Snohomish County, Pierce County, and Kitsap County.
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

      {/* Section 2: Why CPAs May Involve a Real Estate Professional */}
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
              Real estate often becomes relevant when a client's financial picture involves property that must be evaluated, prepared, or sold. In these moments, having access to an experienced real estate and valuation resource can help CPAs and their clients make more informed decisions.
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

      {/* Section 3: How David Stein Helps CPA Clients */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Practical Real Estate Guidance
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              How David Stein Helps CPA Clients
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              David Stein provides practical, valuation-informed real estate guidance that helps CPA clients and their families navigate important property transitions with greater clarity and confidence.
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

      {/* Section 4: Common Situations */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Representative Situations
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              Common Situations Where David Stein Can Help
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              CPAs and their clients encounter a wide range of property-related situations where experienced real estate guidance can make a meaningful difference.
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

      {/* Section 5: Coordinated Approach */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
                Working Together
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
                Why a Coordinated Professional Approach Matters
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Clients often benefit when their CPA, attorney, fiduciary, and real estate professional each work within their own professional role while helping the client make more informed decisions. A coordinated approach helps ensure that property-related decisions are made with realistic market perspective, practical planning, and professional clarity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                David Stein values the trust that CPAs place in him when referring a client. He aims to reflect well on the professionals who involve him by providing thoughtful, experienced, and discreet real estate guidance throughout every property transition.
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
                If you are a CPA working with a client who needs guidance related to probate property, inherited real estate, trust-owned property, downsizing, or an estate-related home sale in King County, Snohomish County, Pierce County, or Kitsap County, David Stein provides experienced real estate guidance grounded in market knowledge, valuation insight, and a practical understanding of important property transitions.
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

export default ForCPAs;
