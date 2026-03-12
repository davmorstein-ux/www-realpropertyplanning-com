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
import { Phone, CheckCircle, Briefcase, ArrowRight, MapPin } from "lucide-react";
import attorneyImage from "@/assets/attorney.png";

const supportBullets = [
  "Practical guidance for probate real estate and inherited property",
  "Support for trust-owned homes and estate-related sales",
  "Communication with executors, trustees, fiduciaries, and family members",
  "Insight on pricing, property condition, marketability, and timing",
  "Help coordinating preparation, cleanout, repairs, and sale readiness",
  "A calm and professional approach in sensitive situations",
];

const referralSituations = [
  "A probate property needs to be prepared, priced, and sold",
  "A trust-owned home needs guidance before going to market",
  "Family members disagree about repairs, timing, or sale strategy",
  "An inherited home has deferred maintenance or cleanout needs",
  "A fiduciary needs a reliable property resource for next-step planning",
  "A senior-related housing transition involves a home sale decision",
];

const faqs = [
  {
    question: "When should an attorney involve a real estate professional in a probate or trust matter?",
    answer: "It is often helpful to involve a real estate professional early, especially when there are questions about property condition, likely marketability, timing, preparation, pricing strategy, or next-step planning. Early guidance can help clients avoid delays and make more informed decisions.",
  },
  {
    question: "Can Real Property Planning help with inherited homes that need repairs or cleanout?",
    answer: "Yes. Many inherited and estate-related homes need preparation before they are ready for the market. Real Property Planning can help evaluate the situation, identify likely next steps, and coordinate a practical plan for sale readiness.",
  },
  {
    question: "Do you work directly with executors, trustees, and family members?",
    answer: "Yes. Real Property Planning regularly works with executors, trustees, fiduciaries, adult children, and families who are involved in inherited property, trust-owned homes, and estate-related sales.",
  },
  {
    question: "Can you help provide value guidance before a sale decision is made?",
    answer: "Yes. Because David Stein is both a Washington real estate broker and state certified residential appraiser, Real Property Planning can offer informed guidance related to pricing, property condition, market positioning, and valuation-related decision-making.",
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
        description="Real Property Planning supports attorneys and fiduciaries with probate real estate, inherited property sales, trust-owned homes, valuation insight, and coordinated property guidance throughout Western Washington."
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
                Real Property Planning supports attorneys, fiduciaries, and referral partners who need practical help with probate real estate, inherited property, trust-owned homes, senior-related housing transitions, and other sensitive property matters.
              </p>
              <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
                These situations often require a real estate resource who communicates clearly, understands the complexity of family and property transitions, and helps move the real estate side forward in a steady and professional way. David Stein brings more than 20 years of experience as a Washington real estate broker and state certified residential appraiser.
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
              <img src={attorneyImage} alt="Professional attorneys reviewing estate documents" className="w-80 xl:w-96 rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* How RPP Supports Attorneys */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Briefcase className="w-10 h-10 text-gold mb-6" />
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How Real Property Planning Supports Attorneys and Fiduciaries
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Real Property Planning is designed to support professionals who need a dependable real estate resource in matters involving inherited homes, estate property sales, trust-owned real estate, valuation-related decisions, and transition planning.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Attorneys and fiduciaries often need more than a traditional listing agent. They need a knowledgeable professional who can help assess property condition, advise on likely marketability, coordinate preparation steps, communicate clearly with decision-makers, and provide steady guidance in situations that may involve grief, family tension, deferred maintenance, or uncertainty about next steps.
            </p>
            <ul className="space-y-4">
              {supportBullets.map((item, index) => (
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

      {/* Why Referral Partners Value This Resource */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Why Referral Partners Value This Resource
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Real Property Planning is built to help referral partners feel confident that the property side of a matter is being handled with professionalism, discretion, and practical judgment. The goal is to reduce friction, improve communication, and help clients move forward with a clearer plan.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Because David Stein also brings the perspective of a state certified residential appraiser, attorneys and fiduciaries benefit from guidance that is informed not only by sales strategy, but also by valuation awareness, property condition analysis, and market context.
            </p>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Frequently Asked Questions" eyebrow="Common Questions" />

      {/* Service Area */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <MapPin className="w-10 h-10 text-gold mb-6" />
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Serving Referral Partners Throughout Western Washington
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Real Property Planning serves attorneys, fiduciaries, and families throughout King, Snohomish, Pierce, and Kitsap Counties, with a focus on probate real estate, inherited property, trust-owned homes, valuation-related questions, and major housing transitions.
            </p>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/for-attorneys" />

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Need a dependable real estate resource for a probate, trust, inherited property, or senior-related housing matter?
            </h2>
            <div className="flex justify-center mb-8">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                  Contact David
                </Button>
              </Link>
            </div>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              If you would like to discuss a property, referral situation, or client need, Real Property Planning welcomes the conversation.
            </p>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default ForAttorneys;
