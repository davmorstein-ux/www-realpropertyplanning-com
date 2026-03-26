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
import {
  getCityServiceIntro,
  getWhyLocalMatters,
  getCityServiceHowWeHelp,
  getCityServiceScenarios,
  getToneScenariosHeading,
  getToneScenariosLead,
  getToneHowWeHelpHeading,
  getToneHowWeHelpLead,
  getToneCTAHeading,
  getToneCTABody,
} from "@/lib/service-areas-data";
import type { CityData, ServiceData } from "@/lib/service-areas-data";

interface CityServicePageTemplateProps {
  city: CityData;
  service: ServiceData;
}

const CityServicePageTemplate = ({ city, service }: CityServicePageTemplateProps) => {
  const intro = getCityServiceIntro(service, city);
  const whyLocal = getWhyLocalMatters(city.name, city.county, city);
  const howWeHelp = getCityServiceHowWeHelp(city.name, service.slug);
  const scenarios = getCityServiceScenarios(city.name, service.shortName, service.slug);
  const tone = city.tone;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${service.shortName} in ${city.name}, WA | Real Property Planning`}
        description={`${service.shortName} in ${city.name}, ${city.county}. David Stein provides experienced real estate guidance for ${service.name.toLowerCase()} with licensed broker and certified appraiser credentials.`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: city.county, url: `/${city.countySlug}` },
          { name: city.name, url: `/cities/${city.slug}` },
          { name: service.shortName, url: `/cities/${city.slug}/${service.slug}` },
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              {service.shortName} · {city.name}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              {service.name} in {city.name}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              {intro}
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Typical Scenarios */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              {getToneScenariosHeading(city.name, service.shortName, tone)}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {getToneScenariosLead(city.name, service.name, tone)}
            </p>
            <ul className="space-y-4">
              {scenarios.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              {getToneHowWeHelpHeading(tone)}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {getToneHowWeHelpLead(city.name, service.name, tone)}
            </p>
            <ul className="space-y-4">
              {howWeHelp.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Local Context Matters */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Why Local Context Matters for {service.shortName} in {city.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {whyLocal}
            </p>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-3">
              <Link to={`/cities/${city.slug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                {city.name} Overview
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to={`/${city.countySlug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                {city.county}
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to={`/services/${service.slug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                {service.shortName} Overview
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/services" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                All Services
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/cities-we-serve" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                All Cities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath={`/cities/${city.slug}/${service.slug}`} />

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              {getToneCTAHeading(city.name, service.shortName, tone)}
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              {getToneCTABody(city.name, tone)}
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Schedule a Consultation
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

export default CityServicePageTemplate;
