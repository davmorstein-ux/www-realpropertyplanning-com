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
import { Phone, CheckCircle, MessageSquare } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Assess the Property",
    text: "David reviews the home's condition, location, and current state to give you an honest picture of what you're working with and what the market is likely to see.",
  },
  {
    number: "02",
    title: "Coordinate Timing",
    text: "Legal authority, family discussions, and personal logistics all affect when a sale can begin. David helps you understand the timeline and plan accordingly.",
  },
  {
    number: "03",
    title: "Prepare the Home",
    text: "Many estate homes need cleanout, minor repairs, or light staging. David coordinates vendors and manages the preparation so you don't have to.",
  },
  {
    number: "04",
    title: "Price It Properly",
    text: "With dual credentials as a broker and certified appraiser, David provides pricing guidance that reflects the property's true condition and the current market — not wishful thinking.",
  },
  {
    number: "05",
    title: "Market and Sell",
    text: "David creates a strategic marketing plan, manages showings, reviews offers, and negotiates terms designed to protect the estate's interests.",
  },
  {
    number: "06",
    title: "Communicate Throughout",
    text: "From listing to closing, David keeps you, the attorney, and other stakeholders informed with clear updates — so you always know where things stand.",
  },
];

const commonNeeds = [
  "Understanding what the property is worth in its current condition",
  "Knowing whether to make repairs or sell as-is",
  "Coordinating with siblings, co-heirs, or other decision-makers",
  "Managing a property from out of state",
  "Dealing with a home full of personal belongings",
  "Navigating legal authority and sale timing",
];

const faqs = [
  {
    question: "What is the first thing I should do as executor when there is real estate involved?",
    answer: "Secure the property, confirm your legal authority to act, and get a realistic assessment of the home's condition and likely market value. David can handle the property evaluation while you work with the estate attorney on the legal requirements.",
  },
  {
    question: "I live out of state — can David handle the property locally?",
    answer: "Absolutely. Many executors and trustees manage property from a distance. David provides hands-on local coordination — property access, vendor management, inspections, preparation, and sale oversight — keeping you informed through regular updates without requiring you to be present.",
  },
  {
    question: "Should I invest in repairs before selling the estate property?",
    answer: "It depends on the property, the market, and the likely return on investment. Some improvements meaningfully increase value; others are not worth the cost or delay. David evaluates repair decisions with a practical, market-informed perspective so you make the right call.",
  },
  {
    question: "How is selling estate property different from a normal home sale?",
    answer: "Estate sales often involve legal timelines, multiple decision-makers, deferred maintenance, personal property cleanout, and emotional complexity. David understands these dynamics and structures the process to account for them — reducing stress and avoiding costly missteps.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Real Property Planning — Guidance for Executors & Trustees",
  description: "David Stein provides practical, step-by-step real estate guidance for executors, personal representatives, trustees, and families managing inherited property and estate home sales in Western Washington.",
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
        title="Estate Property Guide for Executors & Trustees | Real Property Planning"
        description="Named executor or trustee? David Stein provides step-by-step real estate guidance — from property assessment and preparation through pricing and closing — so you can manage estate responsibilities with confidence."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "For Executors", url: "/executors" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              For Executors, Trustees & Personal Representatives
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              You Have Enough to Manage — Let David Handle the Property
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              If you have been named executor, trustee, or personal representative, you are likely facing decisions about a property you did not plan for — and may not know where to start. David Stein provides the kind of clear, organized, hands-on guidance that takes the real estate burden off your plate.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              Whether you're local or managing from out of state, David brings over 20 years of experience as a broker and certified appraiser to help you navigate the process from first assessment to closing day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Request a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* What Executors Commonly Need Help With */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              What Executors Commonly Need Help With
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              If any of these sound familiar, you're in the right place:
            </p>
            <ul className="space-y-4">
              {commonNeeds.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              How the Process Works for Executors
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              David follows a clear, six-step process so you always know what's happening and what comes next:
            </p>
            <div className="grid gap-5 lg:gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="bg-card border border-border rounded-[18px] px-7 py-7 md:px-9 md:py-8 flex gap-5 md:gap-7 items-start">
                  <span className="text-gold font-serif text-3xl md:text-4xl font-semibold leading-none pt-1 select-none shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-2">
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

      {/* Testimonial */}
      <section className="py-14 lg:py-16 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-foreground text-lg italic leading-relaxed mb-4">
              "David brought clarity, professionalism, and calm guidance during a very difficult property transition. His valuation perspective and market knowledge were incredibly helpful."
            </p>
            <p className="text-muted-foreground text-sm font-medium">— Client Review · Estate-related property transition</p>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              You Don't Have to Figure This Out Alone
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Most executors are doing this for the first time. The legal terminology, the property decisions, the family dynamics — it can feel like a lot. David's role is to take the real estate weight off your shoulders so you can focus on everything else.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A clear plan, experienced guidance, and consistent communication make all the difference. Learn more about <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">how the full process works</Link> or explore <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">why accurate pricing matters</Link> for estate property.
            </p>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Executor & Trustee FAQs" />

      <RelatedServices currentPath="/executors" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Need help with an inherited or estate property?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Start with a conversation. David will review your situation and outline practical next steps — no pressure, no obligation.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Consultation
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

export default Executors;
