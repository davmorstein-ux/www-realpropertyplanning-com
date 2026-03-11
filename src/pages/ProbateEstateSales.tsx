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

const whatMakesDifferent = [
  "Legal authority and timing may affect when a sale can occur",
  "Family communication can affect decision-making",
  "The home may need preparation before market exposure",
  "Pricing must reflect condition, timing, and market reality",
  "Some properties require a more careful strategy due to deferred maintenance or occupancy issues",
];

const davidCanHelp = [
  "Inherited homes",
  "Probate property",
  "Trust-owned real estate",
  "Vacant estate homes",
  "Deferred-maintenance property",
  "Sale preparation and market strategy",
];

const faqs = [
  {
    question: "How long does it take to sell a probate property in Washington?",
    answer: "Timelines vary depending on legal authority, property condition, preparation needs, and market conditions. Some probate properties sell within weeks of listing; others may take longer due to cleanup, repairs, or coordination among multiple parties. David Stein helps create a realistic timeline based on each situation.",
  },
  {
    question: "Can an estate property be sold as-is?",
    answer: "Yes. Many estate and probate properties are sold in as-is condition, especially when time, budget, or logistics make preparation impractical. David helps clients evaluate whether an as-is sale or targeted preparation will produce the best overall result.",
  },
  {
    question: "What costs are involved in selling a probate property?",
    answer: "Common costs include clean-out, minor repairs, staging, real estate commissions, closing costs, and any title-related expenses. David helps executors and families understand likely costs upfront so there are no surprises during the process.",
  },
  {
    question: "Does the executor need court approval to sell estate property in Washington?",
    answer: "It depends on the estate structure and the authority granted. In many cases, a personal representative has authority under the will or court appointment to sell without additional court confirmation. Legal questions should always be directed to the estate attorney.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Real Property Planning — Probate & Estate Property Sales",
  description: "Real Property Planning provides experienced guidance for probate real estate, estate property sales, inherited homes, and trust-owned homes throughout Western Washington.",
  url: "https://realpropertyplanning.com/probate-estate-sales",
  areaServed: [
    { "@type": "AdministrativeArea", name: "King County, WA" },
    { "@type": "AdministrativeArea", name: "Snohomish County, WA" },
    { "@type": "AdministrativeArea", name: "Pierce County, WA" },
    { "@type": "AdministrativeArea", name: "Kitsap County, WA" },
  ],
};

const ProbateEstateSales = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Probate Real Estate & Estate Property Sales | Real Property Planning"
        description="Real Property Planning provides experienced guidance for probate real estate, estate property sales, inherited homes, and trust-owned homes throughout Western Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Probate & Estate Sales", url: "/probate-estate-sales" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 lg:pt-32 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
              Probate Real Estate Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Experienced Guidance for Probate and Estate Property Sales
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
              Real Property Planning helps clients and referral partners navigate probate real estate, inherited homes, estate property sales, and trust-owned property with a practical, steady approach.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
              These transactions often involve more complexity than a typical home sale. The property may need cleanout, preparation, deferred maintenance review, pricing analysis, or coordination among family members, fiduciaries, and legal professionals. David Stein provides experienced guidance shaped by both brokerage and valuation experience.
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

      {/* What Makes Estate Property Sales Different */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              What Makes Estate Property Sales Different
            </h2>
            <ul className="space-y-4">
              {whatMakesDifferent.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* David Can Help With */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Real Property Planning Can Help With
            </h2>
            <ul className="space-y-4">
              {davidCanHelp.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-primary-foreground font-semibold mb-6">
              Need guidance on preparing, pricing, or selling an estate-related property?
            </h2>
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Probate & Estate Sale FAQs" />

      <RelatedServices currentPath="/probate-estate-sales" />

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default ProbateEstateSales;
