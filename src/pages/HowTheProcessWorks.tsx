import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Conversation and Situation Review",
    text: "The process begins with a conversation about the property, the people involved, the current stage of the matter, and the questions that need to be answered first. This may involve an executor, trustee, attorney, fiduciary, heir, or family member seeking clarity about next steps. The goal is to understand the situation before making unnecessary decisions too quickly.",
  },
  {
    number: "02",
    title: "Property Evaluation and Value Perspective",
    text: "Once the basic circumstances are understood, the next step is evaluating the property itself. That includes condition, location, likely market position, value-related considerations, and any practical issues that may affect timing or sale strategy. David Stein's background as both a real estate broker and Washington state certified real estate appraiser brings added perspective to this stage.",
  },
  {
    number: "03",
    title: "Preparation and Sale Strategy Discussion",
    text: "Not every property should be handled the same way. Some homes should be sold as-is. Others may benefit from limited cleanup, repairs, presentation work, or a more deliberate preparation plan. David Stein helps clients weigh those options carefully so the approach fits the property, the market, and the goals of the people involved.",
  },
  {
    number: "04",
    title: "Coordination and Market Readiness",
    text: "Once a direction is established, the next step is preparing the property for market in an organized way. This may include coordinating access, cleanup, vendor work, presentation, pricing strategy, and timing. The objective is to reduce confusion and move the property toward readiness with a clear plan.",
  },
  {
    number: "05",
    title: "Marketing, Buyer Interest, and Sale Management",
    text: "When the property is ready, David Stein brings it to market with a strategy designed to reflect local market conditions, buyer expectations, property condition, and pricing realities. During this stage, he helps clients navigate showing activity, buyer response, offer evaluation, negotiation, and transaction progress in a way that remains clear and manageable.",
  },
  {
    number: "06",
    title: "Closing and Next-Step Transition",
    text: "After a sale is secured, the process moves through closing and final transition. David Stein helps clients stay organized through the final stages of the transaction so there is a clear path from listing to closing. The goal is to help clients move from uncertainty to resolution with confidence and professional support.",
  },
];

const reassuranceCards = [
  {
    title: "A Clear Starting Point",
    text: "Many people are unsure what should happen first. A structured process helps reduce uncertainty and create a more sensible path forward.",
  },
  {
    title: "Thoughtful Guidance on Value and Strategy",
    text: "Real estate decisions connected to estates, trusts, and inherited property often carry financial and emotional weight. David Stein helps clients think through those decisions with care and perspective.",
  },
  {
    title: "Local Market Awareness",
    text: "Property strategy is shaped by local conditions. David Stein serves King County, Snohomish County, Pierce County, and Kitsap County with local market insight that helps inform better decisions.",
  },
  {
    title: "A Measured and Professional Approach",
    text: "Important property transitions benefit from calm communication, practical coordination, and an organized process. David Stein's approach is designed to help clients move forward with greater clarity and confidence.",
  },
];

const HowTheProcessWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How the Process Works for Probate and Inherited Property Sales | David Stein"
        description="Learn how David Stein's six-step process helps attorneys, executors, trustees, and families navigate probate property, inherited homes, and estate sales in King, Snohomish, Pierce, and Kitsap Counties."
      />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-[96px]">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              A Clear and Organized Approach
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              How the Process Works
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-4">
              When a home or other real estate is part of a probate matter, trust administration, inherited property transition, or estate-related sale, it helps to have a clear process. David Stein works with attorneys, executors, trustees, fiduciaries, personal representatives, heirs, and families to bring structure, market clarity, and practical real estate guidance to important property decisions throughout King County, Snohomish County, Pierce County, and Kitsap County.
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-[30px]">
              Every property situation is different, but a thoughtful process can reduce confusion, improve decision-making, and help clients move forward with greater confidence. David Stein's role is to help clients understand the property, evaluate the options, and develop a practical plan for the real-estate side of the transition.
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

      {/* Intro Section */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-muted-foreground/60 font-bold tracking-[0.2em] uppercase text-xs mb-3.5">
              Why Process Matters
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-[22px]">
              A Structured Approach to Important Property Decisions
            </h2>
            <div className="max-w-[900px] space-y-5 text-muted-foreground text-base md:text-[17px] leading-[1.8]">
              <p>
                Estate-related real property often involves more than a typical home sale. There may be legal authority questions, family communication issues, uncertainty about value, deferred maintenance, personal belongings in the home, timing concerns, or questions about whether the property should be sold as-is or prepared for the market. A clear process helps bring those moving parts into a more organized and manageable sequence.
              </p>
              <p>
                David Stein helps clients understand the real-estate side of these transitions with a process grounded in market knowledge, valuation insight, local experience, and practical next-step guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Six-Step Process */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-muted-foreground/60 font-bold tracking-[0.2em] uppercase text-xs mb-3.5">
              Step by Step
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-10 md:mb-14">
              What Working With David Stein Typically Looks Like
            </h2>
            <div className="grid gap-5 lg:gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-card border border-border rounded-[18px] px-7 py-7 md:px-9 md:py-8 flex gap-5 md:gap-7 items-start"
                >
                  <span className="text-muted-foreground/30 font-serif text-3xl md:text-4xl font-semibold leading-none pt-1 select-none shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-[1.75] text-base md:text-[17px]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-muted-foreground/60 font-bold tracking-[0.2em] uppercase text-xs mb-3.5">
              What Clients Often Need Most
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
              Clarity, Structure, and Practical Guidance
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-[1.8] max-w-[900px] mb-10 md:mb-14">
              For many clients, the most valuable part of the process is not just selling the property. It is having an experienced professional who can help make the situation feel more understandable and more manageable.
            </p>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {reassuranceCards.map((card, i) => (
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

      {/* Related Resources */}
      <section className="pt-10 pb-10 md:pt-14 md:pb-14 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-sm">Related Resources</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-attorneys" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Attorneys</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Probate & Estate Sales</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/faq" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">FAQ</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/contact" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Contact</Link>
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

export default HowTheProcessWorks;
