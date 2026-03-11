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
import { Phone, CheckCircle } from "lucide-react";

const whyMatters = [
  "Helps support more confident pricing decisions",
  "Reduces avoidable disagreement among heirs or family members",
  "Clarifies whether repairs are likely to improve outcomes",
  "Helps attorneys, executors, and trustees make better-informed recommendations",
  "Improves sale planning and market positioning",
];

const situations = [
  "Inherited homes with outdated condition",
  "Family buyout conversations",
  "Trust-owned property sale planning",
  "Homes with deferred maintenance",
  "Pricing disagreements",
  "Decisions about whether to sell as-is or improve before listing",
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
        title="Why Valuation Matters for Probate & Inherited Property | Real Property Planning"
        description="Learn why accurate valuation matters for probate real estate, inherited homes, estate sales, trust-owned property, and pricing decisions throughout Western Washington."
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
              Why Valuation Matters in Probate and Inherited Property Decisions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-4">
              Valuation is one of the most important parts of an inherited property, probate real estate, or estate sale decision. Without a well-informed understanding of value, families and fiduciaries can struggle with pricing, timing, repairs, buyout discussions, sale strategy, and overall decision-making.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              As both a Washington real estate broker and state certified residential appraiser, David Stein brings a perspective that helps clients and referral partners think more clearly about market value, property condition, positioning, and sale strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Why Accurate Value Guidance Matters */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Why Accurate Value Guidance Matters
            </h2>
            <ul className="space-y-4">
              {whyMatters.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Situations Where Valuation Becomes Especially Important */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Situations Where Valuation Becomes Especially Important
            </h2>
            <ul className="space-y-4">
              {situations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Valuation FAQs" />

      <RelatedServices currentPath="/why-valuation-matters" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Need experienced pricing and value guidance before making a property decision?
            </h2>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                  Contact David
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default WhyValuationMatters;
