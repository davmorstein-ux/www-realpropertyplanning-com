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

const transitionSituations = [
  "Downsizing from a longtime home",
  "Move to assisted living or senior housing",
  "Sale of a home after a health or care change",
  "Family support during a housing transition",
  "Preparation of a home for market after many years of ownership",
];

const whatFamiliesNeed = [
  "A calm and respectful process",
  "Guidance about timing and next steps",
  "Help understanding current value and sale options",
  "Advice on repairs, cleanout, or preparation",
  "A trustworthy professional who communicates clearly",
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
  description: "Thoughtful real estate support for senior transitions, downsizing, relocation, assisted living moves, and family housing decisions throughout Western Washington.",
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
        title="Senior Transition Real Estate Support in Western Washington | David Stein"
        description="Thoughtful real estate support for senior transitions, downsizing, relocation, assisted living moves, and family housing decisions throughout Western Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Senior Transitions", url: "/senior-transitions" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 lg:pt-32 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
              Senior Real Estate Support
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Thoughtful Real Estate Support for Senior Transitions
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
              Senior transitions often involve far more than a sale. Families may be making decisions about timing, care, relocation, downsizing, property preparation, and what to do with a long-held home during an emotional and sometimes urgent period of change.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
              David Stein helps seniors, adult children, attorneys, fiduciaries, and trusted advisors navigate these housing decisions with patience, professionalism, and a practical plan.
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

      {/* Common Senior Transition Situations */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Common Senior Transition Situations
            </h2>
            <ul className="space-y-4">
              {transitionSituations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What Families Often Need Most */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              What Families Often Need Most
            </h2>
            <ul className="space-y-4">
              {whatFamiliesNeed.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Senior Transition FAQs" />

      <RelatedServices currentPath="/senior-transitions" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Need help with a senior-related housing transition?
            </h2>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                  Request a Call
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
