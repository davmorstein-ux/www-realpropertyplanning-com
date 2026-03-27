import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services, getCommonSituations, getWhyLocalMatters, getWhyBrokerAppraiser, isTier1City } from "@/lib/service-areas-data";
import type { CityData } from "@/lib/service-areas-data";

interface CityPageTemplateProps {
  city: CityData;
}

const CityPageTemplate = ({ city }: CityPageTemplateProps) => {
  const situations = getCommonSituations(city.name, city);
  const whyLocal = getWhyLocalMatters(city.name, city.county, city);
  const whyBrokerAppraiser = getWhyBrokerAppraiser(city.name, city);

  const faqs = [
    {
      question: `What types of property transitions does Real Property Planning help with in ${city.name}?`,
      answer: `Real Property Planning assists with probate and estate sales, senior transitions, executor support, downsizing, trust property sales, divorce-related sales, and valuation guidance for properties in ${city.name} and throughout ${city.county}.`,
    },
    {
      question: `How does David Stein's appraisal background help sellers in ${city.name}?`,
      answer: `As both a licensed Washington real estate broker and a state-certified residential appraiser, David brings valuation expertise that helps clients price properties accurately based on actual condition and local market context — not automated estimates or generic comps.`,
    },
    {
      question: `Can David help if I live out of state but the property is in ${city.name}?`,
      answer: `Yes. David regularly works with out-of-state executors, trustees, and heirs. He coordinates property access, vendor management, preparation, and the full sale process — keeping distant clients informed at every step.`,
    },
  ];

  const clientTypes = city.localClientTypes || [
    `Executors and personal representatives managing estate property in ${city.name}`,
    `Attorneys and fiduciaries seeking a reliable real estate partner in ${city.county}`,
    `Seniors and families preparing to transition from a longtime ${city.name} home`,
    `Trustees managing trust-owned real estate in ${city.name}`,
    `Out-of-state heirs who need local coordination for an inherited property`,
    `CPAs and financial planners advising clients on property-related decisions`,
  ];

  const heroIntro = city.heroIntro ||
    `Real Property Planning provides experienced real estate guidance for probate sales, estate property, senior transitions, and related situations in ${city.name} and throughout ${city.county}. David Stein combines over 20 years of experience as a licensed broker and state-certified residential appraiser to help clients make well-informed decisions about value, preparation, timing, and sale strategy.`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Probate & Estate Real Estate Services in ${city.name}, WA | Real Property Planning`}
        description={city.descriptor
          ? `${city.descriptor} — Real Property Planning provides probate, estate, and senior transition guidance in ${city.name}, ${city.county}. Licensed broker and certified appraiser David Stein.`
          : `Real Property Planning provides probate, estate, senior transition, and valuation-informed real estate guidance in ${city.name}, ${city.county}. Licensed broker and certified appraiser David Stein serves clients throughout Washington State.`
        }
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: city.county, url: `/${city.countySlug}` },
          { name: city.name, url: `/cities/${city.slug}` },
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              {city.name}, {city.county}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Real Estate Guidance for Important Property Transitions in {city.name}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              {heroIntro}
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Who We Help */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Who We Work With in {city.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              David Stein works with a range of clients and professional partners in {city.name}, including:
            </p>
            <ul className="space-y-4">
              {clientTypes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Common Situations in {city.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Clients in {city.name} often reach out when facing situations such as:
            </p>
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

      {/* Services Available */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Services Available in {city.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-3xl">
              Real Property Planning offers the following services for clients in {city.name} and throughout {city.county}:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/cities/${city.slug}/${service.slug}`}
                  className="card-3d group p-6"
                >
                  <h3 className="font-serif text-lg text-foreground font-medium mb-2 group-hover:text-gold transition-colors">
                    {service.shortName}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-gold transition-colors">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With a Broker/Appraiser */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Why Work With a Broker and Appraiser Who Understands {city.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {whyBrokerAppraiser}
            </p>
          </div>
        </div>
      </section>

      {/* Why Local Knowledge Matters */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Why Local Knowledge Matters in {city.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {whyLocal}
            </p>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading={`${city.name} Property Transition FAQ`} />

      {/* Internal Links */}
      <section className="py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-3">
              <Link to={`/${city.countySlug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                {city.county} Overview
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/cities-we-serve" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                All Cities We Serve
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/services" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                All Services
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/counties" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                Counties We Serve
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath={`/cities/${city.slug}`} />

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Need Help With a Property in {city.name}?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              David Stein provides confidential consultations for executors, attorneys, trustees, families, and financial professionals in {city.name} and throughout {city.county}.
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

export default CityPageTemplate;
