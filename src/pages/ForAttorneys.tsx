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
import { Phone, CheckCircle, Briefcase, ArrowRight } from "lucide-react";
import attorneyImage from "@/assets/attorney.png";

const howDavidSupports = [
  "Property-specific guidance for inherited and estate-owned real estate",
  "Sale preparation strategy for occupied, vacant, deferred-maintenance, or distressed homes",
  "Communication with executors, trustees, personal representatives, and family members",
  "Market insight and valuation perspective from a broker who is also a certified residential appraiser",
  "Coordination designed to reduce friction and keep matters moving",
];

const referralSituations = [
  "Probate property that needs to be listed and sold",
  "Trust-owned property requiring sale planning",
  "Heirs disagreeing about timing, repairs, or pricing",
  "A home that needs cleanout, deferred maintenance review, or contractor coordination",
  "Families needing a calm, informed point person during a difficult transition",
];

const faqs = [
  {
    question: "Why should an attorney refer estate property matters to a specialist instead of a general real estate agent?",
    answer: "Estate and probate properties involve legal timelines, fiduciary duties, multiple decision-makers, and condition issues that general agents may not be prepared for. David Stein combines brokerage expertise with certified appraisal credentials to evaluate value, coordinate preparation, and manage the transaction in a way that reflects well on the referring professional.",
  },
  {
    question: "How does David Stein communicate with attorneys during a probate property sale?",
    answer: "David provides clear, direct communication throughout the process — including property updates, market feedback, offer analysis, and transaction progress. He understands that attorneys need a real estate professional who follows through, respects timelines, and avoids unnecessary confusion.",
  },
  {
    question: "What types of properties does David Stein handle for attorney referrals?",
    answer: "David works with probate properties, estate-owned homes, trust-owned real estate, inherited homes, senior transitions, and other property matters where attorneys, trustees, executors, or fiduciaries need an experienced and discreet real estate resource.",
  },
  {
    question: "Does David Stein provide formal appraisals for estate property?",
    answer: "David is a Washington state certified residential appraiser and can discuss valuation matters, but his primary role in attorney referrals is as a real estate broker — helping with pricing strategy, property preparation, marketing, and sale execution. Formal appraisal services are available separately when needed.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Real Property Planning — Real Estate Resource for Attorneys and Fiduciaries",
  description:
    "Real Property Planning supports attorneys and fiduciaries with probate real estate, inherited property sales, valuation insight, sale coordination, and practical guidance throughout Western Washington.",
  url: "https://realpropertyplanning.com/for-attorneys",
  provider: {
    "@type": "RealEstateAgent",
    name: "David Stein",
    url: "https://realpropertyplanning.com",
    jobTitle: "Real Estate Broker & State Certified Appraiser",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "King County, WA" },
    { "@type": "AdministrativeArea", name: "Snohomish County, WA" },
    { "@type": "AdministrativeArea", name: "Pierce County, WA" },
    { "@type": "AdministrativeArea", name: "Kitsap County, WA" },
  ],
};

const ForAttorneys = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Real Estate Resource for Attorneys & Fiduciaries | Real Property Planning"
        description="Real Property Planning supports attorneys and fiduciaries with probate real estate, inherited property sales, valuation insight, sale coordination, and practical guidance throughout Western Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "For Attorneys & Fiduciaries", url: "/for-attorneys" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 lg:pt-32 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
                For Attorneys & Fiduciaries
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
                A Real Estate Resource for Attorneys, Fiduciaries, and High-Trust Referrals
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
                Real Property Planning supports attorneys and fiduciaries who need practical help with the real estate side of probate, trust administration, inherited property, senior-related housing transitions, and other complex property matters.
              </p>
              <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
                These situations often require a real estate resource who communicates clearly, understands sensitive circumstances, and helps move the property side forward in a steady and professional way. David Stein brings more than 20 years of experience as a Washington real estate broker and state certified residential appraiser.
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
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Discuss a Referral
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img src={attorneyImage} alt="Professional attorneys signing documents" className="w-80 xl:w-96 rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* How David Supports Attorneys */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Briefcase className="w-10 h-10 text-gold mb-6" />
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How Real Property Planning Supports Attorneys
            </h2>
            <ul className="space-y-4">
              {howDavidSupports.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Common Referral Situations */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Common Referral Situations
            </h2>
            <ul className="space-y-4">
              {referralSituations.map((situation, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{situation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Referral Partners Value Working with David */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Why Referral Partners Value Working with Real Property Planning
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Referral partners often need a dependable real estate resource who will communicate professionally, treat clients with patience and respect, and understand that these transactions are rarely routine. The goal is to make attorneys look well-supported by helping the real estate side move forward in an organized and thoughtful way.
            </p>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Attorney & Fiduciary FAQs" />

      <RelatedServices currentPath="/for-attorneys" />

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Need a reliable real estate resource for an estate, trust, probate, or senior-related property matter?
            </h2>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
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

export default ForAttorneys;
