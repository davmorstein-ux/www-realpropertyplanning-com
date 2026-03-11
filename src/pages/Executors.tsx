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

const howHelps = [
  "Explains the real estate side in plain English",
  "Helps determine property condition, marketability, and likely next steps",
  "Advises on repairs, cleanout, preparation, and timing",
  "Helps coordinate sale planning with family members and decision-makers",
  "Provides experienced pricing and market guidance",
];

const commonQuestions = [
  "Can the house be sold yet?",
  "Should anything be repaired before listing?",
  "What is the home likely worth in its current condition?",
  "What if siblings or heirs do not agree?",
  "What should happen first if the house is full of belongings?",
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
  name: "Real Property Planning — Guidance for Executors & Trustees",
  description: "Real Property Planning helps executors, trustees, personal representatives, and families handle inherited property, estate home sales, and real estate decisions throughout Western Washington.",
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
        title="Guidance for Executors, Trustees & Personal Representatives | Real Property Planning"
        description="Real Property Planning helps executors, trustees, personal representatives, and families handle inherited property, estate home sales, and next-step real estate decisions throughout Western Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "For Executors", url: "/executors" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Executor & Family Resource
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Guidance for Executors, Personal Representatives, Trustees, and Families
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              Real Property Planning helps executors, personal representatives, trustees, and families understand the real estate side of inherited property, estate home sales, and major home transitions.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              If you are responsible for a property after a death or major life event, you may be dealing with timing issues, legal questions, family communication, property condition concerns, and uncertainty about what to do next. David Stein brings practical guidance shaped by more than 20 years of real estate and valuation experience.
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

      {/* How David Helps Executors and Families */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How Real Property Planning Helps Executors and Families
            </h2>
            <ul className="space-y-4">
              {howHelps.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Common Questions Executors Have */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Common Questions Executors Have
            </h2>
            <ul className="space-y-4">
              {commonQuestions.map((q, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* You Do Not Need to Figure It Out Alone */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              You Do Not Need to Figure It Out Alone
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Many executors are handling these responsibilities for the first time. A clear plan, good communication, and knowledgeable property guidance can reduce stress and prevent avoidable mistakes.
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
              Need help understanding the next step with an inherited or estate-related property?
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

export default Executors;
