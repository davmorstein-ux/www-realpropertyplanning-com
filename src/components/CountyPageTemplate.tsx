import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import mappin3d from "@/assets/real-estate-service-areas-mappin-washington.webp";
import heroIcon from "@/assets/icons/real-estate-service-areas-map-icon-washington.webp";
import { services, counties } from "@/lib/service-areas-data";

interface CountyPageProps {
  countyName: string;
  countyPath: string;
  countySlug: string;
  cities: string[];
  localParagraph?: string;
  localInsight?: string;
  typicalSituations?: string[];
  clientTypes?: string[];
  marketOverview?: string;
  whoIHelp?: string;
  whyCredentialsMatter?: string;
  countySpecificFaqs?: { question: string; answer: string }[];
  aeoQuestion?: string;
  aeoAnswer?: string;
  aeoSupportBullets?: string[];
  aeoSupportFaqs?: { question: string; answer: string }[];
  heroH1?: string;
  heroSubheading?: string;
  seoTitle?: string;
  seoDescription?: string;
  localExpertiseHeading?: string;
  localExpertiseBody?: string[];
  communitiesIntro?: string;
  closingCtaBody?: string[];
}

const CountyPageTemplate = ({
  countyName, countyPath, countySlug, cities,
  localInsight, countySpecificFaqs,
  aeoQuestion, aeoAnswer, aeoSupportBullets, aeoSupportFaqs,
  heroH1, heroSubheading, seoTitle, seoDescription,
  localExpertiseHeading, localExpertiseBody, communitiesIntro, closingCtaBody,
}: CountyPageProps) => {
  const countyData = counties.find((c) => c.slug === countySlug);

  const defaultCountyFaqs = [
    {
      question: `How do I sell a house in probate in ${countyName}?`,
      answer: `Selling probate property in ${countyName} requires legal authority before the property can be listed. David coordinates with the estate attorney and personal representative to assess the property, develop pricing, manage preparation, and handle the sale.`,
    },
    {
      question: `Can David help if I live out of state but the property is in ${countyName}?`,
      answer: `Yes. David regularly works with out-of-state executors and trustees, coordinating property access, vendor management, preparation, and the full sale process with regular updates.`,
    },
    {
      question: `Do I need an appraisal before selling estate property in ${countyName}?`,
      answer: `It depends on the situation. David's dual credentials as a broker and certified appraiser allow him to provide market analysis informed by appraisal-level discipline, helping you make well-supported pricing decisions.`,
    },
  ];

  const faqs = countySpecificFaqs || defaultCountyFaqs;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={seoTitle || `Probate Real Estate & Inherited Property Sales in ${countyName} | Real Property Planning`}
        description={seoDescription || `Probate real estate and inherited property sales guidance for executors, attorneys, and families in ${countyName}, Washington State.`}
      />
      <BreadcrumbSchema items={[
        { name: "Counties", url: "/counties" },
        { name: countyName, url: countyPath },
      ]} />
      <Header />
      <main id="main-content">

      {/* Hero — concise */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img src={heroIcon} alt="" aria-hidden="true" className="block w-full max-w-[15rem] h-auto object-contain" loading="lazy" />
            </div>
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
              {countyName}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold leading-tight mb-4">
              {heroH1 || `Estate & Inherited Property Sales in ${countyName}`}
            </h1>
            {heroSubheading && (
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4 font-serif italic">
                {heroSubheading}
              </p>
            )}
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {localInsight || `Licensed broker and certified appraiser guidance for probate, estate, and senior property transitions in ${countyName}.`}
            </p>
          </div>
        </div>
      </section>

      <DirectAnswerBlock
        question={aeoQuestion || `How do probate and estate property sales work in ${countyName}?`}
        answer={aeoAnswer || `Real Property Planning provides experienced guidance for executors, trustees, attorneys, and families selling probate, inherited, and trust-held property in ${countyName}. Each property is carefully evaluated, and defensible pricing is provided based on licensed broker and certified appraiser expertise.`}
        supportBullets={aeoSupportBullets}
        supportFaqs={aeoSupportFaqs}
        supportSteps={!aeoSupportBullets && !aeoSupportFaqs ? [
          { label: "Evaluate", desc: "Property assessment and valuation-informed pricing" },
          { label: "Prepare", desc: "Cleanout, repairs, and vendor coordination" },
          { label: "Sell", desc: "Marketing, negotiation, and closing" },
        ] : undefined}
      />

      <TrustStrip />

      {/* Services Available — compact grid */}
      <section className="py-14 lg:py-18 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-2xl text-foreground font-semibold mb-6">
              What David Can Help With in {countyName}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="card-3d group p-5">
                  <h3 className="font-serif text-lg text-foreground font-medium mb-1.5 group-hover:text-gold transition-colors">
                    {service.shortName}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-gold transition-colors">
                    Learn More <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise — optional */}
      {localExpertiseHeading && localExpertiseBody && (
        <section className="py-14 lg:py-18 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl text-foreground font-semibold mb-5">
                {localExpertiseHeading}
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                {localExpertiseBody.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Communities Served */}
      <section className="py-14 lg:py-18 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-foreground font-semibold mb-5">
              Communities in {countyName}
            </h2>
            {communitiesIntro && (
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">{communitiesIntro}</p>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2.5">
              {cities.map((cityName) => {
                const cityData = countyData?.cities.find((c) => c.name === cityName);
                if (cityData) {
                  return (
                    <Link key={cityName} to={`/cities/${cityData.slug}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                      <img src={mappin3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0"  loading="lazy"/>
                      <span className="text-foreground hover:text-gold transition-colors text-sm">{cityName}</span>
                    </Link>
                  );
                }
                return (
                  <div key={cityName} className="flex items-center gap-2">
                    <img src={mappin3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0"  loading="lazy"/>
                    <span className="text-muted-foreground text-sm">{cityName}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — short */}
      <PageFAQ faqs={faqs} heading={`${countyName} FAQ`} />

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-primary-foreground font-semibold mb-4">
              Ready to Talk About a {countyName} Property?
            </h2>
            {closingCtaBody ? (
              closingCtaBody.map((p, i) => (
                <p key={i} className="text-primary-foreground/70 text-lg mb-4 leading-relaxed">{p}</p>
              ))
            ) : (
              <p className="text-primary-foreground/70 text-lg mb-6">
                David can walk you through your situation and help you see what makes sense.
              </p>
            )}
            <Link to="/contact">
              <Button variant="gold" size="lg">Start a Conversation</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-10 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            {countyData && countyData.cities.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">{countyName} Cities</p>
                <div className="flex flex-wrap gap-2">
                  {countyData.cities.map((c, i) => (
                    <span key={c.slug}>
                      {i > 0 && <span className="text-muted-foreground/40 mr-2">·</span>}
                      <Link to={`/cities/${c.slug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{c.name}</Link>
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">Guides</p>
              <div className="flex flex-wrap gap-2">
                <Link to="/guides/how-probate-real-estate-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How Probate Works</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/guides/what-executors-should-do" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">First Steps for Executors</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Inherited House Guide</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath={countyPath} />
      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default CountyPageTemplate;
