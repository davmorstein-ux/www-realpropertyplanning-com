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
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import stampImage from "@/assets/stamp.png";

const services = [
  "Property review and sale strategy",
  "Market-based pricing guidance",
  "As-is versus improvement analysis",
  "Clean-out coordination",
  "Repair and vendor coordination",
  "Staging and presentation recommendations",
  "Strategic marketing and sale execution",
  "Ongoing communication with involved parties",
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
  name: "David Stein — Probate & Estate Property Sales",
  description: "Experienced guidance for probate property sales, estate-owned homes, and inherited real estate in King, Snohomish, Pierce, and Kitsap Counties.",
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
        title="Probate and Estate Property Sales in Western Washington | David Stein"
        description="David Stein provides experienced guidance for selling probate property, estate-owned homes, and inherited real estate. Licensed broker and certified appraiser serving King, Snohomish, Pierce, and Kitsap Counties."
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
              Selling real estate tied to probate, estate administration, or inheritance involves legal timelines, multiple decision-makers, property condition concerns, and pricing complexity that most agents are not equipped to handle. David Stein specializes in exactly these situations.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
              As a licensed Washington real estate broker and state certified residential appraiser with over 20 years of experience, David helps attorneys, executors, trustees, and families navigate the sale process from initial property review through closing — with a valuation-informed approach that protects value and reduces stress.
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
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                Real Estate Support for Estate Settlement and Probate Matters
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Selling a property after the death of an owner often involves more than listing a home for sale. There may be legal procedures, title considerations, multiple heirs, personal property, deferred maintenance, and uncertainty about timing or strategy.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                David Stein helps clients and referral partners navigate the real estate side of the process with professionalism and practical guidance. His work includes helping assess the property, understand likely market value, determine the best sale approach, coordinate needed preparation, and manage the transaction through closing.
              </p>
              <div className="hidden lg:flex justify-center">
                <img src={stampImage} alt="Vintage estate property stamp" className="w-64 xl:w-72 rounded-lg shadow-lg" />
              </div>
            </div>
            <div className="bg-secondary rounded-lg p-8 lg:p-10">
              <h3 className="font-serif text-xl text-foreground font-semibold mb-6">
                Services Include
              </h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Probate & Estate Sale FAQs" />

      <RelatedServices currentPath="/probate-estate-sales" />

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Need Help With a Probate or Estate Property?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              David Stein can help you evaluate the property, understand the likely options, and create a practical path forward.
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
                  <ArrowRight className="w-5 h-5 ml-2" />
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

export default ProbateEstateSales;
