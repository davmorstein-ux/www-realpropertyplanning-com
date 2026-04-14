import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";
import { counties } from "@/lib/service-areas-data";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services, isTier1City } from "@/lib/service-areas-data";
import type { CityData } from "@/lib/service-areas-data";
import heroIcon from "@/assets/icons/real-estate-service-areas-map-icon-washington.webp";

// Tone-specific FAQ sets (kept for SEO uniqueness)
const toneFaqSets: Record<string, (city: CityData) => { question: string; answer: string }[]> = {
  premium: (city) => [
    { question: `What should an executor consider before listing a high-value home in ${city.name}?`, answer: `High-value properties require precise pricing and careful preparation. David's appraisal background helps executors understand realistic market position — avoiding costly mistakes from automated estimates.` },
    { question: `Can David manage the sale if the family lives out of state?`, answer: `Yes. David handles property access, vendor coordination, preparation, and the full sale process — providing detailed updates so distant family members can manage without repeated travel.` },
    { question: `How does David price estate properties in ${city.name}?`, answer: `David combines broker experience with certified appraiser training to evaluate each property individually — producing pricing that is both competitive and defensible for fiduciary situations.` },
  ],
  urban: (city) => [
    { question: `How does probate affect selling a home in ${city.name}?`, answer: `Probate sales require legal authority before listing. David coordinates with the estate attorney to manage assessment, preparation, pricing, and sale within legal requirements.` },
    { question: `Is it better to sell an inherited ${city.name} property as-is or invest in updates?`, answer: `It depends on condition and neighborhood expectations. David evaluates each situation, recommending preparation when the return justifies the investment.` },
    { question: `Can David coordinate the sale from a distance?`, answer: `Yes. David handles the full process locally — from cleanout to closing — keeping distant executors informed with regular updates.` },
  ],
  suburban: (city) => [
    { question: `What are the first steps when selling an inherited home in ${city.name}?`, answer: `Secure the property, confirm legal authority, and get a realistic assessment. David can visit the property, evaluate what needs attention, and help you develop a clear plan.` },
    { question: `How does David determine the right price?`, answer: `David uses dual credentials as broker and certified appraiser to evaluate based on actual condition and neighborhood-level market data — avoiding both overpricing and underpricing.` },
    { question: `Does David help with cleanout and preparation?`, answer: `Yes. David coordinates the full preparation process — from organizing vendors to assessing which repairs are worth the investment.` },
  ],
  waterfront: (city) => [
    { question: `How is pricing a waterfront home in ${city.name} different?`, answer: `Waterfront properties involve unique factors — shoreline type, view corridors, bulkhead condition, water access. David's appraiser credentials help evaluate these accurately.` },
    { question: `Can David help sell from a distance?`, answer: `Yes. David coordinates all on-site activities — providing regular updates so you can manage from anywhere.` },
    { question: `What preparation is worthwhile before listing?`, answer: `David evaluates which improvements deliver a return and which are better left for the buyer, based on appraisal-informed analysis.` },
  ],
  smalltown: (city) => [
    { question: `What should I know about selling an inherited home in ${city.name}?`, answer: `Smaller markets need accurate pricing. David's appraisal background helps set prices that reflect local demand — avoiding extended time on market.` },
    { question: `How does David handle estate sales when the family lives far away?`, answer: `David manages the entire process locally with regular updates by phone and email.` },
    { question: `Is it worth making repairs before selling?`, answer: `David evaluates which improvements justify the cost and delay, using appraisal training to base recommendations on data.` },
  ],
  military: (city) => [
    { question: `What should military families know about managing inherited property?`, answer: `Military families often face distance challenges. David provides full-service coordination — handling everything on-site with structured updates.` },
    { question: `How does David price estate property in ${city.name}?`, answer: `David uses dual credentials to evaluate based on condition, demand, and comparable sales — producing accurate, defensible pricing.` },
    { question: `Can David coordinate if I'm stationed elsewhere?`, answer: `Yes. David handles property access, vendor coordination, preparation, and the complete sale process with consistent updates.` },
  ],
  rural: (city) => [
    { question: `How do you value a rural property near ${city.name}?`, answer: `Rural properties involve acreage, outbuildings, well/septic systems. David's certified appraiser credentials help evaluate these non-standard features accurately.` },
    { question: `What challenges come with selling inherited rural property?`, answer: `Deferred maintenance, access issues, and zoning restrictions are common. David assesses these factors honestly and helps families understand realistic value.` },
    { question: `Can David manage a rural estate sale from a distance?`, answer: `Yes. David handles all on-site coordination, ensuring nothing falls through the cracks while keeping distant family members informed.` },
  ],
};

interface CityPageTemplateProps {
  city: CityData;
}

const CityPageTemplate = ({ city }: CityPageTemplateProps) => {
  const tier1 = isTier1City(city.slug);
  const tone = city.tone || "suburban";

  const faqGenerator = toneFaqSets[tone] || toneFaqSets.suburban;
  const faqs = city.localFaqs || faqGenerator(city);

  const heroIntro = city.heroIntro ||
    `Experienced real estate guidance for probate, estate, and senior transitions in ${city.name}, ${city.county}. Licensed broker and certified appraiser.`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Probate & Estate Real Estate in ${city.name}, WA | Real Property Planning`}
        description={city.descriptor
          ? `${city.descriptor} — Probate, estate, and senior transition guidance in ${city.name}, ${city.county}.`
          : `Probate, estate, and senior transition real estate guidance in ${city.name}, ${city.county}. Licensed broker and certified appraiser David Stein.`
        }
        noindex={!tier1}
      />
      <BreadcrumbSchema items={[
        { name: "Counties", url: "/counties" },
        { name: city.county, url: `/${city.countySlug}` },
        { name: city.name, url: `/cities/${city.slug}` },
      ]} />
      <Header />
      <main id="main-content">

      {/* Hero — concise */}
      <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex justify-center mb-3 md:mb-4">
              <img src={heroIcon} alt="" aria-hidden="true" className="block w-full max-w-[23rem] h-auto object-contain" loading="lazy" />
            </div>
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
              {city.name}, {city.county}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold leading-tight mb-4">
              {city.heroHeading || `Property Transition Guidance in ${city.name}`}
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {heroIntro}
            </p>
          </div>
        </div>
      </section>

      <DirectAnswerBlock
        question={city.aeoQuestion || `How do probate and estate property sales work in ${city.name}?`}
        answer={city.aeoAnswer || `Real Property Planning provides hands-on guidance for executors, trustees, attorneys, and families selling property in ${city.name}. Each property is carefully evaluated, and the full sale process is coordinated with licensed broker and certified appraiser expertise.`}
        supportBullets={city.aeoSupportBullets}
        supportFaqs={city.aeoSupportFaqs}
        supportSteps={!city.aeoSupportBullets && !city.aeoSupportFaqs ? [
          { label: "Evaluate", desc: "Property assessment and pricing" },
          { label: "Prepare", desc: "Cleanout and vendor coordination" },
          { label: "Sell", desc: "Marketing, negotiation, closing" },
        ] : undefined}
      />

      <TrustStrip />

      {/* Services Available — compact */}
      <section className="py-14 lg:py-18 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-2xl text-foreground font-semibold mb-5">
              Services in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Link key={service.slug} to={`/cities/${city.slug}/${service.slug}`} className="card-3d group p-5">
                  <h3 className="font-serif text-lg text-foreground font-medium mb-1.5 group-hover:text-gold transition-colors">
                    {service.shortName}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">{service.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-gold transition-colors">
                    Learn More <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <PageFAQ faqs={faqs} heading={`${city.name} FAQ`} />

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-primary-foreground font-semibold mb-4">
              Ready to Talk About Your {city.name} Property?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-6">
              David can walk you through your situation and help you figure out next steps.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg">Start a Conversation</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links — compact */}
      <section className="py-10 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">County</p>
              <Link to={`/counties/${city.countySlug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                {city.county}
              </Link>
            </div>
            {(() => {
              const countyData = counties.find(c => c.slug === city.countySlug);
              const siblings = countyData?.cities.filter(c => c.slug !== city.slug).slice(0, 6) || [];
              if (siblings.length === 0) return null;
              return (
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Nearby</p>
                  <div className="flex flex-wrap gap-2">
                    {siblings.map((c, i) => (
                      <span key={c.slug}>
                        {i > 0 && <span className="text-muted-foreground/40 mr-2">·</span>}
                        <Link to={`/cities/${c.slug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{c.name}</Link>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })()}
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

      <RelatedServices currentPath={`/cities/${city.slug}`} />
      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default CityPageTemplate;
