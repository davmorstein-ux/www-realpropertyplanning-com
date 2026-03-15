import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    text: "We start with the property, the situation, the decision-makers, and the immediate questions.",
  },
  {
    number: "02",
    title: "Property Review",
    text: "We assess condition, occupancy, preparation needs, likely market position, and any concerns affecting sale strategy.",
  },
  {
    number: "03",
    title: "Value and Strategy Discussion",
    text: "We review realistic pricing considerations, possible preparation options, and the best path forward based on goals and circumstances.",
  },
  {
    number: "04",
    title: "Preparation and Coordination",
    text: "If needed, Real Property Planning helps guide the next steps related to cleanout, repairs, contractors, staging, or readiness for market.",
  },
  {
    number: "05",
    title: "Listing and Marketing",
    text: "The property is positioned for the market with a strategy tailored to condition, timing, and buyer demand.",
  },
  {
    number: "06",
    title: "Contract to Closing",
    text: "The team helps guide the transaction through negotiations, contingency management, communication, and closing coordination.",
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
        title="How the Process Works — Estate Property Sales | Real Property Planning"
        description="From initial consultation to closing day — here is exactly how David Stein helps executors, attorneys, and families sell probate, inherited, and trust-owned property in Western Washington."
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
              Estate property sales can feel overwhelming — especially when you are managing legal requirements, family expectations, and a property that may need significant work. David Stein follows a clear, six-step process designed to bring order to complexity and keep everyone informed at every stage.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              Each engagement is structured around practical milestones: assess the property, align on strategy, prepare the home, price it accurately, market it effectively, and close with confidence.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-medium px-7 py-4 h-auto rounded-lg">
                <Phone className="w-4 h-4 mr-2" />
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Six Steps */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <div className="grid gap-5 lg:gap-6">
              {steps.map((step) => (
                <div key={step.number} className="bg-card border border-border rounded-[18px] px-7 py-7 md:px-9 md:py-8 flex gap-5 md:gap-7 items-start">
                  <span className="text-muted-foreground/30 font-serif text-3xl md:text-4xl font-semibold leading-none pt-1 select-none shrink-0">
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

      {/* Reassurance */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every situation is different. Some clients need immediate sale guidance. Others need time, planning, family coordination, or valuation-related clarity before taking the next step.
            </p>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Process FAQs" />

      <RelatedServices currentPath="/how-the-process-works" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Want to talk through your situation and next steps?
            </h2>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
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

export default HowTheProcessWorks;
