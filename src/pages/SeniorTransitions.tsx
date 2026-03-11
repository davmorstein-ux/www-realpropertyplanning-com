import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import nursingHome from "@/assets/nursing-home.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Heart } from "lucide-react";

const situations = [
  "Downsizing to a smaller home",
  "Selling a long-time family residence",
  "Transitioning to assisted living or independent living",
  "Helping aging parents prepare for a move",
  "Evaluating whether to improve or sell as-is",
  "Coordinating services to reduce burden on the family",
];

const faqs = [
  {
    question: "How does David Stein help seniors who need to sell their home?",
    answer: "David provides patient, step-by-step guidance through the entire process — from evaluating the home's market value and condition to coordinating cleanup, repairs, staging, and the sale. He understands that senior transitions involve emotional decisions and works at a pace that respects the family's needs.",
  },
  {
    question: "What if my parent's home needs significant work before selling?",
    answer: "Many longtime family homes need updates before going to market. David helps families evaluate which improvements are likely to improve the sale result and which are not worth the investment. He also coordinates vendors for cleanup, repairs, and preparation.",
  },
  {
    question: "Can David help coordinate a move to assisted living?",
    answer: "David focuses on the real estate side of the transition — preparing and selling the home. He often works alongside families, care managers, senior move managers, and other professionals to ensure the real estate process aligns with the broader transition plan.",
  },
  {
    question: "How long does it take to sell a senior's home?",
    answer: "Timelines depend on the home's condition, location, and preparation needs. Some homes sell quickly with minimal preparation; others benefit from a more deliberate approach. David helps families create a realistic timeline that balances speed with value protection.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "David Stein — Senior Real Estate Transitions",
  description: "Patient, professional real estate guidance for seniors and families navigating downsizing, relocation, and assisted living transitions in Western Washington.",
  url: "https://realpropertyplanning.com/senior-transitions",
  areaServed: [
    { "@type": "AdministrativeArea", name: "King County, WA" },
    { "@type": "AdministrativeArea", name: "Snohomish County, WA" },
    { "@type": "AdministrativeArea", name: "Pierce County, WA" },
    { "@type": "AdministrativeArea", name: "Kitsap County, WA" },
  ],
};

const SeniorTransitions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Senior Real Estate Transitions and Downsizing Help | David Stein"
        description="David Stein provides patient, professional real estate guidance for seniors and families navigating downsizing, relocation, assisted living transitions, and family home sales in King, Snohomish, Pierce, and Kitsap Counties."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Senior Transitions", url: "/senior-transitions" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 lg:pt-32 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
              Senior Real Estate & Downsizing Help
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Thoughtful Real Estate Support for Senior Transitions
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
              When a senior or aging parent needs to sell a longtime family home — whether for downsizing, assisted living, or a broader family transition — the process requires patience, sensitivity, and experienced market guidance. David Stein specializes in helping families navigate these important decisions.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
              As a licensed Washington real estate broker and state certified residential appraiser with over 20 years of experience, David helps families understand property value, coordinate preparation, and manage the sale with care and professionalism across King, Snohomish, Pierce, and Kitsap Counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                  Request a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <img src={nursingHome} alt="Senior living community" className="w-80 md:w-96 rounded-lg shadow-lg" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
              Real Estate Guidance for a Major Life Transition
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              For many seniors and families, a move involves much more than real estate. It may be connected to health changes, safety concerns, lifestyle shifts, financial planning, or the emotional challenge of leaving a home filled with memories.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              David Stein helps make the real estate side of the transition more manageable — providing guidance on timing, market value, preparation, sale strategy, and coordination so families can move forward with greater confidence and less stress.
            </p>
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                Common Situations
              </h2>
              <ul className="space-y-4">
                {situations.map((situation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-foreground">{situation}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary rounded-lg p-10 lg:p-12">
              <Heart className="w-10 h-10 text-gold mb-6" />
              <h3 className="font-serif text-2xl text-primary-foreground font-semibold mb-4">
                A Calm, Respectful Approach
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Senior transitions require patience, listening, and careful coordination. David Stein helps clients and families think through the process step by step so the property decisions are clear, practical, and aligned with the family's goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Senior Transition FAQs" />

      <RelatedServices currentPath="/senior-transitions" />

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Ready to Discuss Your Situation?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              David Stein provides experienced, patient guidance for seniors and families navigating important housing transitions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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

export default SeniorTransitions;
