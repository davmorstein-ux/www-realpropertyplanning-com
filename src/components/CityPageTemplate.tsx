import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services, getCommonSituations, getWhyLocalMatters, getWhyBrokerAppraiser, isTier1City } from "@/lib/service-areas-data";
import type { CityData } from "@/lib/service-areas-data";
import ServicePageNav from "@/components/ServicePageNav";

interface CityPageTemplateProps {
  city: CityData;
}

const CityPageTemplate = ({ city }: CityPageTemplateProps) => {
  const tier1 = isTier1City(city.slug);
  const situations = getCommonSituations(city.name, city);
  const whyLocal = getWhyLocalMatters(city.name, city.county, city);
  const whyBrokerAppraiser = getWhyBrokerAppraiser(city.name, city);

  // Vary section headings by tone to reduce template repetition
  const tone = city.tone || "suburban";
  const whoHeadings: Record<string, string> = {
    premium: `Who Relies on Real Property Planning in ${city.name}`,
    urban: `Clients and Partners We Serve in ${city.name}`,
    suburban: `Who We Work With in ${city.name}`,
    waterfront: `Families and Professionals We Help in ${city.name}`,
    smalltown: `Who Reaches Out in ${city.name}`,
    military: `Who We Support in ${city.name}`,
    rural: `Who We Help in ${city.name}`,
  };
  const situationHeadings: Record<string, string> = {
    premium: `When ${city.name} Families and Professionals Reach Out`,
    urban: `Common Property Transition Situations in ${city.name}`,
    suburban: `When Do People in ${city.name} Need Help With Property Transitions?`,
    waterfront: `Situations That Bring ${city.name} Families to Real Property Planning`,
    smalltown: `When ${city.name} Residents Need Property Guidance`,
    military: `Property Situations We Handle in ${city.name}`,
    rural: `When Families in ${city.name} Need Help With Property`,
  };

  const faqs = [
    {
      question: `How does selling a home in probate work in ${city.name}?`,
      answer: `Probate property sales in ${city.name} typically require legal authority before the property can be listed. David coordinates with the estate attorney and personal representative to assess the property, manage preparation, develop a pricing strategy, and handle the sale — keeping all parties informed throughout the process.`,
    },
    {
      question: `What should an executor do first when there is property in ${city.name}?`,
      answer: `Secure the property, confirm your legal authority to act, and get a realistic assessment of the home's condition and market value. David can evaluate the property and help you understand your options while you work with the estate attorney on the legal requirements.`,
    },
    {
      question: `How does David Stein's appraisal background help sellers in ${city.name}?`,
      answer: `As both a licensed Washington real estate broker and a state-certified residential appraiser, David brings valuation expertise that helps clients price properties accurately based on actual condition and local ${city.name} market context — not automated estimates or generic comps.`,
    },
    {
      question: `Can David help if I live out of state but the property is in ${city.name}?`,
      answer: `Yes. David regularly works with out-of-state executors, trustees, and heirs. He coordinates property access, vendor management, preparation, and the full sale process — keeping distant clients informed at every step.`,
    },
    {
      question: `What should be done before listing an inherited home in ${city.name}?`,
      answer: `It depends on the property's condition and your timeline. David evaluates whether to sell as-is or invest in targeted preparation — using his appraisal background to assess which improvements are likely to increase the sale price enough to justify the cost and delay.`,
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
        noindex={!tier1}
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
              {city.heroHeading || `Real Estate Guidance for Important Property Transitions in ${city.name}`}
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
              {whoHeadings[tone]}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Many of the people David works with in {city.name} are navigating something they haven't been through before:
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
              {situationHeadings[tone]}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              These are the kinds of circumstances that typically lead to a conversation:
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

      {/* Mid-page CTA */}
      <MidPageCTA
        heading={`Need Guidance on a ${city.name} Property?`}
        body="A brief conversation is usually the fastest way to get clarity on your options and next steps."
        buttonText="Schedule a Conversation"
      />

      {/* Services Available */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              What David Can Help With in {city.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-3xl">
              The right approach depends on the situation. Here are the areas where David's experience is most relevant:
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
              Why Does Local Knowledge Matter for Property Transitions in {city.name}?
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
            <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
            <div className="flex flex-wrap gap-3">
              <Link to={`/${city.countySlug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                {city.county} Overview
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                Probate & Estate Sales
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                For Executors
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/senior-transitions" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                Senior Transitions
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-attorneys" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                For Attorneys
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                Why Valuation Matters
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                How the Process Works
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/cities-we-serve" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                All Cities
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/resources" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-10 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Helpful Guides</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/guides/how-probate-real-estate-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How Probate Sales Work</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/guides/what-executors-should-do" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">What Executors Should Do First</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Inherited House Guide</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/guides/out-of-state-families" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Out-of-State Families</Link>
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
              Ready to Talk About Your {city.name} Property?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              David can walk you through your situation and help you figure out a practical path forward.
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

export default CityPageTemplate;
