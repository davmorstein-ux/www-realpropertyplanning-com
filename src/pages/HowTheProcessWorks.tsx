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

const steps = [
  {
    number: "01",
    title: "Initial Conversation and Situation Review",
    text: "The process begins with a conversation about the property, the people involved, the current stage of the matter, and the questions that need to be answered first.",
  },
  {
    number: "02",
    title: "Property Evaluation and Value Perspective",
    text: "Once the basic circumstances are understood, the next step is evaluating the property itself — condition, location, likely market position, and value-related considerations.",
  },
  {
    number: "03",
    title: "Preparation and Sale Strategy Discussion",
    text: "Some homes should be sold as-is. Others may benefit from limited cleanup, repairs, or presentation work. David helps clients weigh those options carefully.",
  },
  {
    number: "04",
    title: "Coordination and Market Readiness",
    text: "Once a direction is established, the next step is preparing the property for market — coordinating access, cleanup, vendor work, presentation, pricing strategy, and timing.",
  },
  {
    number: "05",
    title: "Marketing, Buyer Interest, and Sale Management",
    text: "David brings the property to market with a strategy designed to reflect local market conditions, buyer expectations, and pricing realities.",
  },
  {
    number: "06",
    title: "Closing and Next-Step Transition",
    text: "After a sale is secured, the process moves through closing and final transition with consistent communication and oversight.",
  },
];

const reassuranceCards = [
  {
    title: "A Clear Starting Point",
    text: "Many people are unsure what should happen first. A structured process helps reduce uncertainty and create a more sensible path forward.",
  },
  {
    title: "Thoughtful Guidance on Value and Strategy",
    text: "Real estate decisions connected to estates, trusts, and inherited property often carry financial and emotional weight. David helps clients think through those decisions with care.",
  },
  {
    title: "Local Market Awareness",
    text: "Property strategy is shaped by local conditions. David Stein serves King County, Snohomish County, Pierce County, and Kitsap County with local market insight.",
  },
  {
    title: "A Measured and Professional Approach",
    text: "Important property transitions benefit from calm communication, practical coordination, and an organized process. David's approach is designed to help clients move forward with greater clarity.",
  },
];

const faqs = [
  {
    question: "What is the typical process for selling an inherited or probate property?",
    answer: "The process generally follows six steps: initial consultation, property evaluation, strategy discussion, preparation coordination, marketing and sale management, and closing. David Stein guides clients through each step with clear communication and practical next-step guidance.",
  },
  {
    question: "How long does the entire process take from start to closing?",
    answer: "Timelines vary depending on property condition, legal authority, preparation needs, and market conditions. Simple situations may take 2-3 months; more complex matters with cleanup, repairs, or multi-party coordination may take longer. David helps set realistic expectations early.",
  },
  {
    question: "Do I need to be local to work with David Stein?",
    answer: "No. Many clients — especially executors and trustees — are managing property from out of state. David provides hands-on local coordination and keeps clients informed through regular updates so they can participate in decisions without needing to be physically present.",
  },
];

const HowTheProcessWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How the Process Works for Probate and Inherited Property Sales | David Stein"
        description="Learn David Stein's six-step process for selling probate property, inherited homes, and estate real estate. Licensed broker and certified appraiser serving King, Snohomish, Pierce, and Kitsap Counties."
      />
      <BreadcrumbSchema items={[{ name: "How the Process Works", url: "/how-the-process-works" }]} />
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
              Estate-related property sales are not like typical home sales. They involve legal authority questions, family coordination, property condition issues, and pricing decisions that require a structured, experienced approach. David Stein's six-step process brings clarity to each stage.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              As a licensed Washington real estate broker and state certified residential appraiser with over 20 years of experience, David helps attorneys, executors, trustees, and families navigate probate, inherited, and trust property sales throughout King, Snohomish, Pierce, and Kitsap Counties.
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

      {/* Six-Step Process */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-10 md:mb-14">
              What Working With David Stein Typically Looks Like
            </h2>
            <div className="grid gap-5 lg:gap-6">
              {steps.map((step) => (
                <div key={step.number} className="bg-card border border-border rounded-[18px] px-7 py-7 md:px-9 md:py-8 flex gap-5 md:gap-7 items-start">
                  <span className="text-muted-foreground/30 font-serif text-3xl md:text-4xl font-semibold leading-none pt-1 select-none shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-[1.75]">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-10">
              Clarity, Structure, and Practical Guidance
            </h2>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {reassuranceCards.map((card, i) => (
                <div key={i} className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-[1.75]">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Process FAQs" />

      <RelatedServices currentPath="/how-the-process-works" />

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
                If you are handling probate property, inherited real estate, or an estate-related home sale, David Stein provides experienced guidance grounded in market knowledge and valuation insight.
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

export default HowTheProcessWorks;
