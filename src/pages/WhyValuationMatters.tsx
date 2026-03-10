import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";

const valuationCards = [
  {
    title: "Pricing Strategy Matters",
    text: "If a property is priced too high, it may sit on the market, lose momentum, and create frustration for heirs, executors, trustees, or other decision-makers. If it is priced too low, value may be left behind. A stronger valuation perspective helps create a more responsible and realistic pricing strategy.",
  },
  {
    title: "Condition Affects Marketability",
    text: "Many inherited and estate properties are not move-in ready. Deferred maintenance, outdated finishes, cleanup issues, vacant condition, or years of accumulated belongings can all affect buyer response. Understanding how condition influences marketability helps clients decide whether improvements make sense or whether an as-is strategy is more appropriate.",
  },
  {
    title: "Preparation Decisions Should Be Informed",
    text: "Some properties benefit from targeted cleanup, repairs, presentation work, or selective updates before going to market. Others do not. A valuation-informed approach helps clients think more carefully about where effort and money may improve outcome and where it may not.",
  },
  {
    title: "Local Market Context Changes Everything",
    text: "A property in Seattle, Bellevue, Kirkland, Everett, Tacoma, Gig Harbor, Bremerton, Bainbridge Island, or another local community may need a different strategy depending on the surrounding market. Value is not determined in a vacuum. Local buyer behavior, neighborhood expectations, inventory, and property type all matter.",
  },
];

const brokerageFeatures = [
  {
    title: "More Than a Typical Listing Perspective",
    text: "David Stein helps clients think beyond simply putting a property on the market. He helps them consider likely value, property condition, buyer expectations, timing, and sale strategy in a broader and more practical way.",
  },
  {
    title: "Useful Perspective for Sensitive Property Decisions",
    text: "Probate, inherited, and trust-owned properties often involve multiple decision-makers, emotional complexity, and the need for careful judgment. A stronger valuation perspective can help make those conversations more grounded and more productive.",
  },
  {
    title: "Local Market Awareness Across Multiple Counties",
    text: "David Stein serves King County, Snohomish County, Pierce County, and Kitsap County, with local knowledge that helps inform value-related decisions in a range of urban, suburban, waterfront, estate, and neighborhood-specific markets.",
  },
  {
    title: "Guidance Grounded in Real Property Reality",
    text: "Value is shaped by more than square footage and location alone. Condition, layout, deferred maintenance, lot characteristics, buyer demand, presentation, and competing inventory all affect how a property is likely to perform in the market.",
  },
];

const clarityFeatures = [
  {
    title: "A More Realistic Starting Point",
    text: "Understanding likely market position helps clients begin the process with clearer expectations and a better framework for decision-making.",
  },
  {
    title: "Better Preparation Choices",
    text: "Not every property needs the same level of work before sale. Valuation insight helps clients decide what is likely to matter and what may not.",
  },
  {
    title: "More Informed Conversations",
    text: "Executors, trustees, heirs, attorneys, and family members often need a common point of reference. A stronger value perspective helps support more constructive decision-making.",
  },
  {
    title: "Greater Confidence Moving Forward",
    text: "When clients better understand what affects value and marketability, they are often able to move forward with greater clarity, stronger preparation, and more confidence in the overall strategy.",
  },
];

const WhyValuationMatters = () => {
  useEffect(() => {
    document.title = "Why Valuation Matters in Probate and Inherited Property Sales | David Stein";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Learn why valuation matters when selling probate property, inherited homes, and trust-owned real estate in King, Snohomish, Pierce, and Kitsap Counties.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Learn why valuation matters when selling probate property, inherited homes, and trust-owned real estate in King, Snohomish, Pierce, and Kitsap Counties.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-[96px]">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Valuation and Market Perspective
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Why Valuation Matters
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-4">
              When a home or other real estate is part of a probate matter, trust administration, inherited property transition, or estate-related sale, valuation becomes one of the most important parts of the decision-making process. Accurate valuation helps attorneys, executors, trustees, fiduciaries, personal representatives, heirs, and families make more informed decisions about pricing, preparation, timing, and sale strategy.
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-[30px]">
              David Stein is a licensed real estate broker in the State of Washington and a Washington state certified real estate appraiser. His work combines real estate brokerage experience with valuation insight to help clients better understand how property condition, location, buyer expectations, and local market realities affect important property transitions throughout King County, Snohomish County, Pierce County, and Kitsap County.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Request a Confidential Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Discuss a Property Transition
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro: Important Property Decisions */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-[22px]">
              Important Property Decisions Begin With Clearer Value Perspective
            </h2>
            <div className="max-w-[900px] space-y-5 text-muted-foreground text-base md:text-[17px] leading-[1.8]">
              <p>
                Estate-related real estate decisions often carry financial, legal, practical, and emotional weight. A property may be one of the most important assets in an estate or trust, and decisions about whether to sell, how to price, whether to improve the home, and how to position it in the market are all influenced by value.
              </p>
              <p>
                Without a realistic understanding of value, people may delay unnecessarily, spend money in the wrong places, set unrealistic expectations, or move forward without a clear strategy. A thoughtful valuation perspective helps create a more informed starting point.
              </p>
              <p>
                David Stein helps clients understand not only what may affect value, but also how buyers are likely to respond to the property in its current condition and in its local market context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Valuation Matters Cards */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-10 md:mb-14">
              Why Valuation Matters in Probate, Inherited, and Trust-Related Property Decisions
            </h2>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {valuationCards.map((card, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9"
                >
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-[1.75] text-base md:text-[17px]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brokerage + Valuation Insight */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
              Brokerage Experience Combined With Valuation Insight
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-[1.8] max-w-[900px] mb-10 md:mb-14">
              Many real estate professionals can market a property. Far fewer bring both brokerage experience and Washington state certified appraisal credentials to estate-related real property decisions. That combination can be especially useful when a property needs to be evaluated not only as a listing, but as an important asset requiring sound judgment.
            </p>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {brokerageFeatures.map((card, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9"
                >
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-[1.75] text-base md:text-[17px]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clarity Before Major Decisions */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
              Clarity Before Major Decisions
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-[1.8] max-w-[900px] mb-10 md:mb-14">
              For many clients, the goal is not to become experts in valuation. The goal is to make better-informed property decisions with less uncertainty and less avoidable risk.
            </p>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {clarityFeatures.map((card, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9"
                >
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-[1.75] text-base md:text-[17px]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <DisclaimerSection />

      {/* Final CTA */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-[84px] lg:pb-[88px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1060px] mx-auto">
            <div className="bg-card border border-border rounded-[18px] px-7 py-9 md:px-10 md:py-11 text-center">
              <p className="text-muted-foreground/60 font-bold tracking-[0.2em] uppercase text-xs mb-3.5">
                Confidential Consultation
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
                Discuss a Property Transition With David Stein
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto mb-8">
                If you are handling probate property, inherited real estate, trust-owned property, or an estate-related home sale in King County, Snohomish County, Pierce County, or Kitsap County, David Stein provides experienced guidance grounded in market knowledge, valuation insight, and a practical understanding of important property transitions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Request a Confidential Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Discuss a Property Transition
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
