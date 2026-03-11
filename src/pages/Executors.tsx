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

const challengeCards = [
  {
    heading: "Uncertainty About What To Do First",
    text: "Many people are not sure whether they should clean the property, obtain legal authority, remove belongings, get a valuation, make repairs, or prepare for sale. One of the most helpful first steps is creating a clear and orderly plan.",
  },
  {
    heading: "Questions About Value",
    text: "Families often need to understand what the property may be worth before they can make informed decisions about whether to sell, how to price it, and whether any improvements make sense.",
  },
  {
    heading: "Condition, Cleanup, and Preparation",
    text: "Inherited and estate properties may contain years of personal belongings, deferred maintenance, outdated finishes, vacant conditions, or as-is sale questions that affect next steps.",
  },
  {
    heading: "Multiple Decision-Makers",
    text: "Executors, trustees, heirs, and family members may all be involved, and that can create delays or confusion unless there is a clear process and a realistic understanding of the property and market.",
  },
];

const howHelpsBlocks = [
  {
    heading: "Understanding the Property",
    text: "David Stein helps clients evaluate the property's condition, likely market position, value-related factors, and the practical issues that may affect next steps.",
  },
  {
    heading: "Clarifying Sale Options",
    text: "Some properties should be sold as-is. Others may benefit from limited preparation before going to market. David helps clients weigh those decisions with a practical eye toward value, timing, and return on effort.",
  },
  {
    heading: "Helping Clients Prepare for Market",
    text: "From cleanup and presentation to pricing and market strategy, David Stein helps create a plan that is realistic, efficient, and tailored to the property and the people involved.",
  },
  {
    heading: "Providing Valuation-Informed Perspective",
    text: "As both a real estate broker and Washington state certified real estate appraiser, David Stein brings added perspective to questions of pricing, marketability, buyer response, and sale strategy.",
  },
  {
    heading: "Reducing Confusion",
    text: "Probate and inherited property sales can feel overwhelming when there are many moving parts. David helps simplify the process and create a clearer path forward.",
  },
  {
    heading: "Serving Western Washington Families",
    text: "David Stein serves clients throughout King County, Snohomish County, Pierce County, and Kitsap County, with local market knowledge that helps inform better property decisions in each area.",
  },
];

const situations = [
  "Selling a probate property",
  "Selling an inherited home",
  "Selling trust-owned real estate",
  "Deciding whether to sell as-is",
  "Determining whether cleanup or repairs are worth doing",
  "Understanding likely market value",
  "Preparing a longtime family home for sale",
  "Coordinating with out-of-area heirs or family members",
  "Addressing timing questions and next steps",
  "Navigating real property decisions with multiple decision-makers",
  "Understanding how local market conditions affect strategy",
  "Working alongside attorneys, trustees, and fiduciaries",
];

const valuationFeatures = [
  {
    heading: "Pricing Matters More Than Many Families Realize",
    text: "If an estate property is priced too high, it may sit on the market and lose momentum. If it is priced too low, value may be left behind. Understanding the property's likely market position is one of the most important parts of the process.",
  },
  {
    heading: "Condition Affects Buyer Response",
    text: "Probate and inherited properties are often different from move-in-ready retail listings. Condition, deferred maintenance, layout, location, and presentation all affect how buyers respond and what strategy makes the most sense.",
  },
  {
    heading: "Local Knowledge Helps Shape Better Decisions",
    text: "A property in Seattle, Bellevue, Everett, Tacoma, Gig Harbor, Bremerton, Silverdale, or a more rural area may require a different pricing and preparation strategy. David Stein's experience in King County, Snohomish County, Pierce County, and Kitsap County helps clients make decisions based on local market reality.",
  },
];

const faqs = [
  {
    question: "What is the first thing an executor should do with estate property?",
    answer: "Start by understanding who has legal authority to act, securing the property, and getting a realistic assessment of its condition and likely value. David Stein can help with the real estate evaluation while you work with your attorney on the legal side.",
  },
  {
    question: "How does David Stein help executors who live out of state?",
    answer: "Many executors are managing property from a distance. David provides hands-on local support — evaluating the property, coordinating access, managing cleanup and preparation, and overseeing the sale process so out-of-area executors can stay informed without needing to be physically present.",
  },
  {
    question: "Should an executor make repairs before selling estate property?",
    answer: "It depends on the property, the market, and the likely return. Some repairs meaningfully improve value; others are not worth the cost. David helps executors evaluate repair decisions with a practical, market-informed perspective.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "David Stein — Guidance for Executors & Trustees",
  description: "David Stein helps executors, personal representatives, trustees, and families navigate inherited property, probate real estate, and estate-related home sales in King, Snohomish, Pierce, and Kitsap Counties.",
  url: "https://realpropertyplanning.com/executors",
  areaServed: [
    { "@type": "AdministrativeArea", name: "King County, WA" },
    { "@type": "AdministrativeArea", name: "Snohomish County, WA" },
    { "@type": "AdministrativeArea", name: "Pierce County, WA" },
    { "@type": "AdministrativeArea", name: "Kitsap County, WA" },
  ],
};

const Executors = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Guidance for Executors, Personal Representatives & Trustees | David Stein"
        description="David Stein helps executors, personal representatives, trustees, and families navigate inherited property, probate real estate, and estate-related home sales in King, Snohomish, Pierce, and Kitsap Counties."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "For Executors", url: "/executors" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Executor and Family Resource
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Guidance for Executors, Personal Representatives, Trustees, and Families Handling Real Property
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              Being named executor or personal representative means taking on real estate decisions you may have never faced before — from determining property value and coordinating cleanup to managing a sale with multiple stakeholders. David Stein helps executors and families cut through the confusion with experienced, step-by-step guidance.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              As a licensed Washington real estate broker and state certified residential appraiser with over 20 years of experience, David works with executors, trustees, heirs, and families throughout King, Snohomish, Pierce, and Kitsap Counties to move from uncertainty toward an organized, informed, and manageable process.
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
                  Request a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* What Executors Face */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Understanding the Situation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              What Executors and Families Are Often Facing
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              Real property connected to probate, trust administration, or inheritance often brings a different set of challenges than a typical home sale. In many cases, the people responsible for the property are also dealing with grief, legal responsibilities, family communication, and uncertainty about what should happen first.
            </p>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {challengeCards.map((card, index) => (
                <div key={index} className="bg-secondary border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
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

      {/* How David Helps */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Practical Real Estate Guidance
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10">
              How David Stein Helps Executors, Trustees, and Families
            </h2>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {howHelpsBlocks.map((block, index) => (
                <div key={index} className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
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
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Representative Situations
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10">
              Common Situations and Decisions
            </h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {situations.map((situation, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2.5 shrink-0" />
                  <p className="text-foreground leading-relaxed">{situation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valuation & Local Knowledge */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Why Experience Matters
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10">
              Why Valuation and Local Market Knowledge Matter
            </h2>
            <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
              {valuationFeatures.map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {item.heading}
                  </h3>
                  <p className="text-muted-foreground leading-[1.75]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Executor & Trustee FAQs" />

      <RelatedServices currentPath="/executors" />

      <DisclaimerSection />

      {/* Final CTA */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-[84px] lg:pb-[104px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <div className="bg-secondary border border-border rounded-[18px] px-7 py-9 md:px-10 md:py-11 text-center">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
                Discuss a Property Transition With David Stein
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto mb-8">
                If you are an executor, personal representative, trustee, heir, or family member dealing with probate property, inherited real estate, or an estate-related home sale, David Stein provides experienced guidance grounded in market knowledge and valuation insight.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
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

export default Executors;
