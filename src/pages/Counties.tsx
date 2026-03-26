import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import mappin3d from "@/assets/mappin-3d.png";

const countyCards = [
  {
    county: "King County",
    href: "/counties/king",
    intro: "Support for inherited homes, estate property, and major home transitions throughout the Eastside, Seattle, and surrounding areas.",
  },
  {
    county: "Snohomish County",
    href: "/counties/snohomish",
    intro: "Guidance for probate and inherited property sales in communities ranging from Edmonds and Lynnwood to Everett, Mukilteo, and beyond.",
  },
  {
    county: "Pierce County",
    href: "/counties/pierce",
    intro: "Experienced help with estate sales, trust-owned homes, and transition-related property decisions throughout Pierce County.",
  },
  {
    county: "Kitsap County",
    href: "/counties/kitsap",
    intro: "Practical real estate guidance for inherited homes and estate-related sales across key Kitsap communities.",
  },
  {
    county: "Skagit County",
    href: "/counties/skagit",
    intro: "Estate property guidance for families and fiduciaries navigating probate, inherited homes, and property transitions in the Skagit Valley.",
  },
];

const Counties = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Probate Real Estate & Inherited Property Sales | Western Washington Service Areas"
        description="Real Property Planning provides probate real estate and inherited property sales guidance across King, Snohomish, Pierce, Skagit, and Kitsap Counties throughout Washington State."
      />
      <BreadcrumbSchema items={[{ name: "Counties", url: "/counties" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Local Service Areas
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Service Areas Throughout Western Washington
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              Each county in the Puget Sound region has its own housing stock, buyer expectations, and market rhythm. A waterfront estate on Bainbridge Island sells differently than a mid-century home in Tacoma or a suburban family property in Mill Creek. David Stein brings local knowledge built over two decades — so clients and referral partners get market-specific guidance, not a one-size-fits-all approach.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-5">
              Click a county to see key cities and examples of where we've helped clients with probate, estate, trust, and senior transition real estate.
            </p>
            <p className="text-base text-primary-foreground/60 leading-relaxed">
              Select a county below to learn how Real Property Planning serves each area.
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* County Cards */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-6">
            {countyCards.map((card) => (
              <Link key={card.county} to={card.href} className="group">
                <div className="bg-card border border-border rounded-[18px] px-7 py-8 h-full hover:border-gold/30 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={mappin3d} alt="" aria-hidden="true" className="w-7 h-7 object-contain shrink-0" />
                    <h2 className="font-serif text-xl text-foreground font-semibold group-hover:text-gold transition-colors">
                      {card.county}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{card.intro}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/counties" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Need help with a property in one of these counties?
            </h2>
            <div className="flex justify-center">
              <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light">
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

export default Counties;
