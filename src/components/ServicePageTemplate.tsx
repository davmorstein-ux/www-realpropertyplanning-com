import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { counties, isTier1City } from "@/lib/service-areas-data";
import type { ServiceData } from "@/lib/service-areas-data";

interface ServicePageTemplateProps {
  service: ServiceData;
  introText: string;
  situations: string[];
  benefits: string[];
}

const ServicePageTemplate = ({ service, introText, situations, benefits }: ServicePageTemplateProps) => {
  const allCities = counties.flatMap((county) =>
    county.cities.map((c) => ({ ...c, countyName: county.name }))
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
      <main id="main-content">

      {/* Hero — short */}
      <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
              {service.shortName}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold leading-tight mb-4">
              {service.name}
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {introText}
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Key Benefits — compact bullets */}
      <section className="py-14 lg:py-18 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-foreground font-semibold mb-5">
              How Real Property Planning Helps
            </h2>
            <ul className="space-y-3">
              {benefits.slice(0, 5).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={18} className="mt-0.5" />
                  <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* When You May Need This — compact */}
      <section className="py-14 lg:py-18 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-foreground font-semibold mb-5">
              When You May Need {service.shortName}
            </h2>
            <ul className="space-y-2.5">
              {situations.slice(0, 5).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link to="/guides/how-probate-real-estate-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                Read the full guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-primary-foreground font-semibold mb-4">
              Questions About {service.shortName}?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-6">
              A brief conversation is usually the best place to start.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg">Schedule a Conversation</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* City Links */}
      <section className="py-14 lg:py-18 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-2xl text-foreground font-semibold mb-6">
              {service.shortName} by City
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {citySamples.map((c) => (
                <Link
                  key={c.slug}
                  to={`/cities/${c.slug}/${service.slug}`}
                  className="flex items-center gap-2 text-sm text-foreground hover:text-gold transition-colors py-1"
                >
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-10 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Related</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Probate & Estate Sales</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-attorneys" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Attorneys</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath={`/services/${service.slug}`} />
      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
