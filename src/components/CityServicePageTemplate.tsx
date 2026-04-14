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
  getDeepCityServiceIntro,
  getDeepCityServiceHowWeHelp,
  getDeepCTAHeading,
  getDeepCTABody,
  getDeepCTAButton,
  isTier1City,
} from "@/lib/service-areas-data";
import type { CityData, ServiceData } from "@/lib/service-areas-data";

interface CityServicePageTemplateProps {
  city: CityData;
  service: ServiceData;
}

const CityServicePageTemplate = ({ city, service }: CityServicePageTemplateProps) => {
  const tier1 = isTier1City(city.slug);
  const tone = city.tone;

  const intro = getDeepCityServiceIntro(service, city);
  const howWeHelp = getDeepCityServiceHowWeHelp(city.name, service.slug, tone, city.slug);
  const ctaHeading = getDeepCTAHeading(city.name, city.slug, service.slug, tone);
  const ctaBody = getDeepCTABody(city.name, city.slug, service.slug, tone);
  const ctaButton = getDeepCTAButton(city.slug, service.slug);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${service.shortName} in ${city.name}, WA | Real Property Planning`}
        description={`${service.shortName} in ${city.name}, ${city.county}. Experienced real estate guidance with licensed broker and certified appraiser credentials.`}
        noindex={!tier1}
      />
      <BreadcrumbSchema items={[
        { name: "Counties", url: "/counties" },
        { name: city.county, url: `/${city.countySlug}` },
        { name: city.name, url: `/cities/${city.slug}` },
        { name: service.shortName, url: `/cities/${city.slug}/${service.slug}` },
      ]} />
      <Header />
      <main id="main-content">

      {/* Hero — concise */}
      <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
              {service.shortName} · {city.name}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold leading-tight mb-4">
              {service.name} in {city.name}
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {intro}
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* How We Help — compact bullets */}
      <section className="py-14 lg:py-18 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-foreground font-semibold mb-5">
              How We Help
            </h2>
            <ul className="space-y-3">
              {howWeHelp.slice(0, 5).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={18} className="mt-0.5" />
                  <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-10 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-2">Related</p>
            <div className="flex flex-wrap gap-2">
              <Link to={`/cities/${city.slug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{city.name}</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to={`/${city.countySlug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{city.county}</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to={`/services/${service.slug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{service.shortName} Overview</Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath={`/cities/${city.slug}/${service.slug}`} />

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-primary-foreground font-semibold mb-4">
              {ctaHeading}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-6">
              {ctaBody}
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg">{ctaButton}</Button>
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default CityServicePageTemplate;
