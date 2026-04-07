import GoldCheck3D from "@/components/GoldCheck3D";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import mappin3d from "@/assets/mappin-3d.png";
import { services, counties } from "@/lib/service-areas-data";
import ServicePageNav from "@/components/ServicePageNav";

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
}

const CountyPageTemplate = ({
  countyName,
  countyPath,
  countySlug,
  cities,
  localParagraph,
  localInsight,
  typicalSituations,
  clientTypes,
  marketOverview,
}: CountyPageProps) => {
  const breadcrumbItems = [
    { name: "Counties", url: "/counties" },
    { name: countyName, url: countyPath },
  ];

  const countyData = counties.find((c) => c.slug === countySlug);

  const defaultClientTypes = [
    `Executors and personal representatives managing probate property in ${countyName}`,
    `Trustees overseeing trust-owned real estate in ${countyName} communities`,
    `Attorneys referring clients with estate or inherited property in the area`,
    `Families coordinating a senior housing transition from a longtime ${countyName} home`,
    `Out-of-state heirs who need local, hands-on property management and sale coordination`,
    `CPAs and financial planners advising clients on property-related estate decisions`,
  ];

  const defaultSituations = [
    "Probate property that needs to be evaluated and sold",
    "Inherited homes requiring cleanout, repairs, or preparation",
    "Trust-owned real estate needing sale coordination",
    "Senior housing transitions involving a longtime family home",
    "Pricing questions for properties in non-standard condition",
  ];

  const countyFaqs = [
    {
      question: `How do I sell a house in probate in ${countyName}?`,
      answer: `Selling probate property in ${countyName} typically requires legal authority (letters testamentary or letters of administration) before the property can be listed. David coordinates with the estate attorney and personal representative to assess the property, develop a pricing strategy, manage preparation, and handle the sale — keeping all parties informed throughout the process.`,
    },
    {
      question: `What should an executor do first when there is property in ${countyName}?`,
      answer: `The first steps are securing the property, confirming your legal authority, and getting a realistic assessment of the home's condition and market value. David can evaluate the property and help you understand your options while you work with the estate attorney on legal requirements.`,
    },
    {
      question: `Can David help if I live out of state but the property is in ${countyName}?`,
      answer: `Yes. David regularly works with out-of-state executors, trustees, and family members. He coordinates property access, vendor management, cleanout, preparation, and the full sale process — providing regular updates so you can manage from a distance without needing to travel repeatedly.`,
    },
    {
      question: `Do I need an appraisal before selling estate property in ${countyName}?`,
      answer: `It depends on the situation. Some estates benefit from a formal appraisal for court, tax, or distribution purposes. David's dual credentials as a broker and certified appraiser allow him to provide market analysis informed by appraisal-level discipline, helping you make well-supported pricing decisions.`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Probate Real Estate & Inherited Property Sales in ${countyName} | Real Property Planning`}
        description={countyName === "King County" ? "Probate real estate and inherited property sales guidance for executors, attorneys, and families in King County — Seattle, Bellevue, Kirkland, Redmond, and surrounding communities." : countyName === "Snohomish County" ? "Probate real estate and inherited property sales support for families and fiduciaries in Snohomish County — Everett, Edmonds, Lynnwood, Mukilteo, and surrounding areas." : countyName === "Pierce County" ? "Probate real estate and inherited property sales guidance for executors and families in Pierce County — Tacoma, Puyallup, Gig Harbor, Lakewood, and surrounding communities." : countyName === "Kitsap County" ? "Probate real estate and inherited property sales guidance for executors and families in Kitsap County — Bainbridge Island, Poulsbo, Bremerton, Silverdale, and surrounding areas." : countyName === "Skagit County" ? "Probate real estate and inherited property sales guidance for families and fiduciaries in Skagit County — Mount Vernon, Anacortes, Burlington, and surrounding communities." : `Probate real estate and inherited property sales guidance for families and fiduciaries in ${countyName}, Washington State.`}
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
              Estate &amp; Inherited Property Sales in {countyName}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              {localInsight || `Whether the property needs assessment, preparation, pricing strategy, or a full sale plan, clients and referral partners in ${countyName} benefit from David's dual credentials as a licensed broker and state certified residential appraiser.`}
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Market Overview (unique per county) */}
      {marketOverview && (
        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                Understanding the {countyName} Real Estate Market
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {marketOverview}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Who We Work With */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Clients and Partners in {countyName}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Most of the people David works with in {countyName} are dealing with a property situation they didn't expect — and they're looking for someone with real experience to guide the process:
            </p>
            <ul className="space-y-4">
              {(clientTypes || defaultClientTypes).map((item, index) => (
                <li key={index} className="flex items-start gap-3">
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
              Situations That Bring {countyName} Families to David
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every situation is different, but these are the kinds of circumstances David sees most often in {countyName}:
            </p>
            <ul className="space-y-4">
              {(typicalSituations || defaultSituations).map((item, index) => (
                <li key={index} className="flex items-start gap-3">
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
        heading={`Dealing With a ${countyName} Property?`}
        body="A short conversation is usually the best way to figure out next steps. David can walk you through your options."
        buttonText="Schedule a Conversation"
      />

      {/* Services Available */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              What David Can Help With in {countyName}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-3xl">
              Each situation is different, but these are the areas where David's experience is most relevant:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
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

      {/* Why Local Knowledge Matters */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Why Does Local Knowledge Matter in {countyName}?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {localParagraph || `Every county has its own market patterns, housing stock, buyer demand, and practical sale considerations. Real Property Planning combines broad experience with local awareness to help clients make informed property decisions in ${countyName}.`}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From neighborhood-level pricing nuances to understanding which preparation investments deliver meaningful returns, local context shapes every recommendation David makes. This is especially important for estate, probate, and inherited properties where condition and market positioning can significantly affect the final outcome.
            </p>
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
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Explore city-specific guidance for communities throughout {countyName}:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
              {cities.map((cityName) => {
                const cityData = countyData?.cities.find((c) => c.name === cityName);
                if (cityData) {
                  return (
                    <Link
                      key={cityName}
                      to={`/cities/${cityData.slug}`}
                      className="flex items-center gap-2 hover:text-gold transition-colors"
                    >
                      <img src={mappin3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" />
                      <span className="text-foreground hover:text-gold transition-colors">{cityName}</span>
                    </Link>
                  );
                }
                return (
                  <div key={cityName} className="flex items-center gap-2">
                    <img src={mappin3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" />
                    <span className="text-muted-foreground">{cityName}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* County FAQ */}
      <PageFAQ faqs={countyFaqs} heading={`${countyName} Property Transition FAQ`} />

      {/* Internal Links */}
      <section className="py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
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
              <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How the Process Works</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/cities-we-serve" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Cities We Serve</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/resources" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Resources</Link>
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
              <Link to="/guides/appraisal-vs-cma" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Appraisal vs. CMA</Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath={countyPath} />

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Ready to Talk About a {countyName} Property?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              David is happy to walk through your situation and help you see what makes sense as a next step.
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

export default CountyPageTemplate;
