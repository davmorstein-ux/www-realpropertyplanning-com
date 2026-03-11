import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";

const valuationCards = [
  {
    title: "Pricing Strategy Matters",
    text: "If a property is priced too high, it may sit on the market and lose momentum. If priced too low, value may be left behind. A stronger valuation perspective helps create a more responsible pricing strategy.",
  },
  {
    title: "Condition Affects Marketability",
    text: "Many inherited and estate properties are not move-in ready. Understanding how condition influences marketability helps clients decide whether improvements make sense or whether an as-is strategy is more appropriate.",
  },
  {
    title: "Preparation Decisions Should Be Informed",
    text: "Some properties benefit from targeted cleanup, repairs, or updates before going to market. A valuation-informed approach helps clients think more carefully about where effort and money may improve outcome.",
  },
  {
    title: "Local Market Context Changes Everything",
    text: "A property in Seattle, Bellevue, Everett, Tacoma, or Bremerton may need a different strategy. Value is not determined in a vacuum — local buyer behavior, inventory, and property type all matter.",
  },
];

const brokerageFeatures = [
  {
    title: "More Than a Typical Listing Perspective",
    text: "David Stein helps clients consider likely value, property condition, buyer expectations, timing, and sale strategy in a broader and more practical way.",
  },
  {
    title: "Useful Perspective for Sensitive Property Decisions",
    text: "Probate, inherited, and trust-owned properties often involve multiple decision-makers and emotional complexity. A stronger valuation perspective can help make those conversations more productive.",
  },
  {
    title: "Local Market Awareness Across Multiple Counties",
    text: "David Stein serves King, Snohomish, Pierce, and Kitsap Counties with local knowledge that helps inform value-related decisions across urban, suburban, waterfront, and neighborhood-specific markets.",
  },
  {
    title: "Guidance Grounded in Real Property Reality",
    text: "Value is shaped by more than square footage and location alone. Condition, layout, deferred maintenance, lot characteristics, buyer demand, and competing inventory all affect market performance.",
  },
];

const clarityFeatures = [
  {
    title: "A More Realistic Starting Point",
    text: "Understanding likely market position helps clients begin the process with clearer expectations.",
  },
  {
    title: "Better Preparation Choices",
    text: "Not every property needs the same level of work before sale. Valuation insight helps clients decide what is likely to matter.",
  },
  {
    title: "More Informed Conversations",
    text: "Executors, trustees, heirs, and attorneys often need a common point of reference. A stronger value perspective helps support more constructive decision-making.",
  },
  {
    title: "Greater Confidence Moving Forward",
    text: "When clients better understand what affects value and marketability, they can move forward with stronger preparation and more confidence.",
  },
];

const faqs = [
  {
    question: "Why is valuation expertise important when selling probate property?",
    answer: "Probate properties are often in non-standard condition — outdated, deferred maintenance, cluttered, or vacant. Accurate valuation helps avoid pricing too high (stalling the sale) or too low (leaving value behind). David's dual credentials as broker and certified appraiser provide deeper insight than a standard comparative market analysis.",
  },
  {
    question: "Does David Stein provide formal appraisals?",
    answer: "David is a Washington state certified residential appraiser and can discuss valuation matters in depth. His primary role in most client engagements is as a real estate broker, providing pricing strategy and sale execution. Formal appraisal services are available separately when needed.",
  },
  {
    question: "How does David's appraisal background improve the sale process?",
    answer: "Understanding how appraisers evaluate property helps David anticipate buyer financing challenges, price properties more accurately, and identify condition issues that could affect value — all before the property hits the market.",
  },
];

const WhyValuationMatters = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Why Valuation Matters in Probate and Inherited Property Sales | David Stein"
        description="Understand why valuation expertise matters when selling probate property, inherited homes, and trust-owned real estate. David Stein combines brokerage and certified appraisal credentials serving King, Snohomish, Pierce, and Kitsap Counties."
      />
      <BreadcrumbSchema items={[{ name: "Why Valuation Matters", url: "/why-valuation-matters" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-[96px]">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Valuation and Market Perspective
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Why Valuation Matters in Probate and Estate Property Sales
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-4">
              Pricing mistakes are one of the most costly errors in estate-related real estate. A property priced too high stalls on the market and erodes confidence; priced too low, value is permanently lost. David Stein's dual credentials as a licensed broker and state certified appraiser provide the valuation depth that probate, trust, and inherited property sales demand.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              With over 20 years of experience serving King, Snohomish, Pierce, and Kitsap Counties, David helps attorneys, executors, trustees, and families understand not just what a property may be worth — but why, and how to position it for the strongest result.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Request a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Why Valuation Matters Cards */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-10">
              Why Valuation Matters in Probate, Inherited, and Trust-Related Property Decisions
            </h2>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {valuationCards.map((card, i) => (
                <div key={i} className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-[1.75]">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brokerage + Valuation */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-10">
              Brokerage Experience Combined With Valuation Insight
            </h2>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {brokerageFeatures.map((card, i) => (
                <div key={i} className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-[1.75]">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clarity */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-10">
              Clarity Before Major Decisions
            </h2>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {clarityFeatures.map((card, i) => (
                <div key={i} className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-[1.75]">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Valuation FAQs" />

      <RelatedServices currentPath="/why-valuation-matters" />

      <DisclaimerSection />

      {/* Final CTA */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-[84px] lg:pb-[88px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1060px] mx-auto">
            <div className="bg-secondary border border-border rounded-[18px] px-7 py-9 md:px-10 md:py-11 text-center">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
                Discuss a Property Transition With David Stein
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto mb-8">
                If you need valuation-informed guidance for probate property, inherited real estate, or trust-owned property, David Stein can help.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact David
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

export default WhyValuationMatters;
