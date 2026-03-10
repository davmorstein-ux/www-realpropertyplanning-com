import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
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

const Executors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Section 1: Hero */}
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
              When a home or other real estate becomes part of an estate, trust, or inherited property transition, the responsibility can feel overwhelming. Executors, personal representatives, trustees, heirs, and family members are often expected to make important decisions about value, timing, preparation, cleanup, sale strategy, and next steps during an already stressful time.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              David Stein is a licensed real estate broker in the State of Washington and a Washington state certified real estate appraiser with over 20 years of experience helping clients navigate probate property, inherited homes, trust-owned real estate, and estate-related property transitions throughout King County, Snohomish County, Pierce County, and Kitsap County. He helps clients move from uncertainty toward a more informed, organized, and manageable process.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Request a Confidential Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Discuss a Property Transition
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What Executors Face */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
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

      {/* Section 3: How David Helps */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Practical Real Estate Guidance
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              How David Stein Helps Executors, Trustees, and Families
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              David Stein helps clients understand the real-estate side of important property transitions. His role is to provide practical guidance on value, preparation, sale strategy, market timing, and the steps required to bring a property to market in a way that is organized, informed, and responsive to the client's goals.
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
              Common Situations and Decisions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              Every property and family situation is different, but many executors, trustees, and heirs face similar questions. David Stein helps clients navigate a wide range of real-estate-related concerns during estate and inherited property transitions.
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {situations.map((situation, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2.5 shrink-0" />
                  <p className="text-foreground leading-relaxed">{situation}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Whether the property is a longtime family residence, an outdated inherited home, a trust-owned asset, or a probate property that needs to be evaluated and prepared for sale, David Stein helps clients make better-informed decisions with greater clarity and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Valuation & Local Knowledge */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Why Experience Matters
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10">
              Why Valuation and Local Market Knowledge Matter
            </h2>
            <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 mb-10">
              {valuationFeatures.map((item, index) => (
                <div key={index} className="bg-secondary border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {item.heading}
                  </h3>
                  <p className="text-muted-foreground leading-[1.75]">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              For executors, personal representatives, trustees, heirs, and families, the goal is not simply to sell a property. The goal is to understand what it is, what it may be worth, what should be done before sale, and how to move forward in a way that protects value and reduces unnecessary stress.
            </p>
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
                Discuss a Property Transition With David Stein
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto mb-8">
                If you are an executor, personal representative, trustee, heir, or family member dealing with probate property, inherited real estate, trust-owned property, or an estate-related home sale in King County, Snohomish County, Pierce County, or Kitsap County, David Stein provides experienced guidance grounded in market knowledge, valuation insight, and a practical understanding of important property transitions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    Request a Confidential Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
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

export default Executors;
