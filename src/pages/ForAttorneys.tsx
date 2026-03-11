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

const reasons = [
  "Over 20 years of real estate experience",
  "Professional real estate broker",
  "State certified residential appraiser",
  "Strong understanding of value, pricing, and marketability",
  "Calm and professional communication style",
  "Experience coordinating sensitive, multi-party matters",
  "Hands-on assistance with property preparation and sale execution",
  "Referral-oriented professionalism and discretion",
];

const referralSituations = [
  "Probate property sales",
  "Estate-owned residences",
  "Trust-owned real property",
  "Inherited homes",
  "Senior housing transitions",
  "Properties requiring clean-out or preparation",
  "Properties needing thoughtful pricing and strategy guidance",
  "Sensitive family situations requiring discretion",
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
  name: "David Stein — Real Estate Resource for Attorneys and Fiduciaries",
  description:
    "David Stein provides real estate guidance for attorneys and fiduciaries handling probate property, inherited homes, trust-owned real estate, and estate-related property transitions in King, Snohomish, Pierce, and Kitsap Counties.",
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
        title="Real Estate Guidance for Attorneys and Fiduciaries | David Stein"
        description="David Stein provides real estate guidance for attorneys and fiduciaries handling probate property, inherited homes, trust-owned real estate, and estate-related property transitions in King, Snohomish, Pierce, and Kitsap Counties."
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
                For Attorneys, Executors & Fiduciaries
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
                A Trusted Real Estate Resource for Attorneys and Fiduciaries
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
                Attorneys, trustees, and fiduciaries handling probate, trust, and estate property matters need a real estate professional who understands legal timelines, sensitive family dynamics, and the importance of sound valuation. David Stein serves as that resource across King, Snohomish, Pierce, and Kitsap Counties.
              </p>
              <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
                With dual credentials as a licensed Washington real estate broker and state certified residential appraiser, David brings over 20 years of experience evaluating property condition, pricing strategy, and sale coordination for estate-related matters — so the professionals who refer him can do so with confidence.
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

      {/* Why Professionals Refer */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Briefcase className="w-10 h-10 text-gold mb-6" />
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                Why Professionals Refer David Stein
              </h2>
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-foreground font-semibold mb-6">
                Typical Referral Situations
              </h3>
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
        </div>
      </section>

      {/* How David Supports */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
              How David Supports Attorneys and Fiduciaries
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              David Stein aims to be a dependable extension of the advisory team. He helps clients understand their options, reduces friction in the real estate process, and maintains clear communication throughout the matter. Whether the property should be sold as-is, prepared for market, or evaluated more carefully before a decision is made, David helps bring clarity and forward motion to the process.
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
              Looking for a Real Estate Resource You Can Refer With Confidence?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              David Stein provides a high-trust, experienced approach designed to support both the referring professional and the client.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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

export default ForAttorneys;
