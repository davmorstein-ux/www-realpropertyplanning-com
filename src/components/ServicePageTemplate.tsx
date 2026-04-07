import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import MidPageCTA from "@/components/MidPageCTA";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { counties, isTier1City } from "@/lib/service-areas-data";
import type { ServiceData } from "@/lib/service-areas-data";
import ServicePageNav from "@/components/ServicePageNav";

interface ServicePageTemplateProps {
  service: ServiceData;
  introText: string;
  situations: string[];
  benefits: string[];
}

const ServicePageTemplate = ({ service, introText, situations, benefits }: ServicePageTemplateProps) => {
  // Show all Tier 1 cities first, then fill with additional cities for coverage
  const allCities = counties.flatMap((county) =>
    county.cities.map((c) => ({
      ...c,
      countyName: county.name,
    }))
  );
  const tier1Cities = allCities.filter((c) => isTier1City(c.slug));
  const otherCities = allCities.filter((c) => !isTier1City(c.slug)).slice(0, 6);
  const citySamples = [...tier1Cities, ...otherCities];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${service.name} in Washington State | Real Property Planning`}
        description={`${service.description} David Stein provides ${service.name.toLowerCase()} throughout Washington State with licensed broker and certified appraiser credentials.`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Services", url: "/services" },
          { name: service.name, url: `/services/${service.slug}` },
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              {service.shortName}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              {introText}
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Who This Service Is For */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Who This Service Is For
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {service.shortName} is designed for clients and professionals who need experienced, trustworthy guidance during an important property transition:
            </p>
            <ul className="space-y-4">
              {service.targetAudience.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              When You May Need {service.shortName}
            </h2>
            <ul className="space-y-4">
              {situations.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              How Real Property Planning Helps
            </h2>
            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading={`Questions About ${service.shortName}?`}
        body="A brief conversation is usually the best place to start. David can walk you through your options."
        buttonText="Schedule a Conversation"
      />

      {/* Why Valuation & Market Guidance Matter */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Why Valuation and Market Guidance Matter
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {service.whyValuationMatters}
            </p>
          </div>
        </div>
      </section>

      {/* City Links for this Service */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              {service.shortName} by City
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-4xl">
              Learn more about {service.name.toLowerCase()} in specific communities throughout Washington State:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {citySamples.map((c) => (
                <Link
                  key={c.slug}
                  to={`/cities/${c.slug}/${service.slug}`}
                  className="flex items-center gap-2 text-sm text-foreground hover:text-gold transition-colors py-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Probate & Estate Sales</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-attorneys" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Attorneys</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/senior-transitions" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Senior Transitions</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/counties" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Counties</Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath={`/services/${service.slug}`} />

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Want to Talk Through Your Situation?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              David is happy to listen, answer questions, and help you see what makes sense as a next step.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicePageNav />
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
