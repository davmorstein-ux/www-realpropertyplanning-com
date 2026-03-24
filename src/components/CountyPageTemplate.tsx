import GoldCheck3D from "@/components/GoldCheck3D";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

interface CountyPageProps {
  countyName: string;
  countyPath: string;
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

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Probate Real Estate & Inherited Property Sales in ${countyName} | Real Property Planning`}
        description={countyName === "King County" ? "Probate real estate and inherited property sales guidance for executors, attorneys, and families in King County — Seattle, Bellevue, Kirkland, Redmond, and surrounding communities." : countyName === "Snohomish County" ? "Probate real estate and inherited property sales support for families and fiduciaries in Snohomish County — Everett, Edmonds, Lynnwood, Mukilteo, and surrounding areas." : countyName === "Pierce County" ? "Probate real estate and inherited property sales guidance for executors and families in Pierce County — Tacoma, Puyallup, Gig Harbor, Lakewood, and surrounding communities." : countyName === "Kitsap County" ? "Probate real estate and inherited property sales guidance for executors and families in Kitsap County — Bainbridge Island, Poulsbo, Bremerton, Silverdale, and surrounding areas." : countyName === "Skagit County" ? "Probate real estate and inherited property sales guidance for families and fiduciaries in Skagit County — Mount Vernon, Anacortes, Burlington, and surrounding communities." : `Probate real estate and inherited property sales guidance for families and fiduciaries in ${countyName}, Western Washington.`}
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
              Estate & Inherited Property Sales in {countyName}
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

      {/* Who We Work With in This County */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Who Real Property Planning Works With in {countyName}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              David Stein works with a range of clients and professional partners throughout {countyName}, including:
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

      {/* Typical Situations */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Common Situations in {countyName}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              David regularly works with clients in {countyName} facing situations such as:
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
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {localParagraph || `Every county has its own market patterns, housing stock, buyer demand, and practical sale considerations. Real Property Planning combines broad experience with local awareness to help clients make informed property decisions in ${countyName}.`}
            </p>
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
            </div>
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
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              David provides confidential consultations for executors, attorneys, trustees, families, and financial professionals throughout {countyName}.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
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

export default CountyPageTemplate;
