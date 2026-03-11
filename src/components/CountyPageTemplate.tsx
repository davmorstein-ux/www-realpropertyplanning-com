import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin } from "lucide-react";

const howDavidHelps = [
  "Probate and estate property sales",
  "Inherited home sale planning",
  "Trust-owned real estate guidance",
  "Pricing and market strategy",
  "Senior transition support",
  "Help for attorneys, executors, trustees, and families",
];

interface CountyPageProps {
  countyName: string;
  countyPath: string;
  cities: string[];
  localParagraph?: string;
}

const CountyPageTemplate = ({
  countyName,
  countyPath,
  cities,
  localParagraph,
}: CountyPageProps) => {
  const breadcrumbItems = [
    { name: "Counties", url: "/counties" },
    { name: countyName, url: countyPath },
  ];

  const defaultLocalParagraph = `Every county has its own market patterns, housing stock, buyer demand, and practical sale considerations. David combines broad experience with local awareness to help clients make informed property decisions in ${countyName}.`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${countyName} Probate Real Estate & Inherited Property Guidance | Real Property Planning`}
        description={`Real Property Planning provides practical real estate guidance for inherited property, probate real estate, estate sales, trust-owned homes, and senior transitions in ${countyName}, Washington.`}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              {countyName} Service Area
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Probate Real Estate and Inherited Property Guidance in {countyName}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              Real Property Planning provides practical real estate guidance for inherited property, probate real estate, estate sales, trust-owned homes, valuation-related decisions, and senior transitions throughout {countyName}, Washington.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              Whether the property needs preparation, pricing strategy, family coordination, or a full sale plan, clients and referral partners benefit from local market insight and experienced support. David Stein brings more than 20 years of real estate and valuation experience to these important transitions.
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* How David Helps */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How Real Property Planning Helps in {countyName}
            </h2>
            <ul className="space-y-4">
              {howDavidHelps.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Communities Served */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Communities Served in {countyName}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
              {cities.map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span className="text-muted-foreground">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Paragraph */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {localParagraph || defaultLocalParagraph}
            </p>
          </div>
        </div>
      </section>

      <RelatedServices currentPath={countyPath} />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Need help with a property in {countyName}?
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

export default CountyPageTemplate;
