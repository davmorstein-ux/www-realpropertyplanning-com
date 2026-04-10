import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { realEstateAgentSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import mappin3d from "@/assets/mappin-3d.png";
import expRealtyLogo from "@/assets/exp-realty-logo.png";
import ServiceNavTiles from "@/components/ServiceNavTiles";
import HomepageLeadForm from "@/components/HomepageLeadForm";
import LeadMagnetBlock from "@/components/LeadMagnetBlock";
import EducationalPathways from "@/components/EducationalPathways";
import WhatHappensNext from "@/components/WhatHappensNext";
import HomepageHero from "@/components/HomepageHero";
import HowWeHelpCards from "@/components/HowWeHelpCards";
import HomepageWarmStatement from "@/components/HomepageWarmStatement";
import HomepageFAQ from "@/components/HomepageFAQ";
import HomepageTeamSection from "@/components/HomepageTeamSection";

const serviceAreas = [
  { county: "King County", href: "/counties/king", cities: "Seattle, Bellevue, Kirkland, Redmond, Renton, Kent & more" },
  { county: "Snohomish County", href: "/counties/snohomish", cities: "Everett, Edmonds, Lynnwood, Marysville & more" },
  { county: "Pierce County", href: "/counties/pierce", cities: "Tacoma, Puyallup, Lakewood & more" },
  { county: "Kitsap County", href: "/counties/kitsap", cities: "Bremerton, Silverdale, Poulsbo & more" },
];

const jsonLd = realEstateAgentSchema;

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <SEOHead
        title="Probate & Estate Real Estate | Washington State | Real Property Planning"
        description="Helping families, attorneys, and trustees navigate inherited homes, probate sales, and senior housing transitions across Western Washington. David Stein — licensed broker and certified appraiser with 20+ years of experience."
        jsonLd={jsonLd}
      />
      <Header />

      {/* 1. HERO — PNW background, calm headline, two CTAs */}
      <HomepageHero />

      {/* 2. SERVICE NAV TILES */}
      <ServiceNavTiles />

      {/* 3. HOW WE HELP — 3 icon cards */}
      <HowWeHelpCards />

      {/* 4. WARM STATEMENT + PULLQUOTE */}
      <HomepageWarmStatement />

      {/* 5. TEAM SECTION */}
      <HomepageTeamSection />

      {/* 6. FAQ */}
      <HomepageFAQ />

      {/* 7. WHEN SHOULD YOU CALL */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
              Not sure where to start?
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Most people call because something happened — not because they have a plan. That's okay.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-8 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-10 h-10 mr-2.5 object-contain shrink-0" style={{ background: 'transparent' }} />
                Schedule a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. LEAD MAGNET */}
      <LeadMagnetBlock />

      {/* 9. AREAS SERVED */}
      <section className="py-14 lg:py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath d='M100 20 L130 80 L160 140 H40 L70 80 Z' fill='%23fff'/%3E%3Cpath d='M100 50 L120 90 L140 130 H60 L80 90 Z' fill='%23fff'/%3E%3C/svg%3E")`,
          backgroundSize: '300px',
        }} />
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-3">
              Serving Clients Across Washington State
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
              Based in Western Washington with referral connections nationwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviceAreas.map((area, i) => (
              <Link key={i} to={area.href} className="card-3d group p-6">
                <div className="flex items-center gap-3 mb-2">
                  <img src={mappin3d} alt="" aria-hidden="true" className="w-10 h-10 object-contain shrink-0" />
                  <h3 className="font-serif text-xl text-foreground font-semibold group-hover:text-gold transition-colors">
                    {area.county}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">{area.cities}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/counties">
              <Button variant="gold" size="lg" className="focus-visible:ring-gold">
                View All Service Areas
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CONTACT */}
      <section className="py-14 lg:py-20 bg-navy-dark">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
                Start With a Question
              </h2>
              <p className="text-primary-foreground/75 text-lg leading-relaxed mb-6">
                Confidential. Practical. No obligation. David typically responds within one business day.
              </p>
              <div className="space-y-4">
                <a href="tel:2069003015" className="flex items-center gap-3 text-primary-foreground hover:text-gold transition-colors">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="h-10 w-10 shrink-0 object-contain" />
                  <span className="text-lg font-semibold">(206) 900-3015</span>
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <img src={expRealtyLogo} alt="eXp Realty" className="h-6 w-auto opacity-50" loading="lazy" />
                <span className="text-primary-foreground/40 text-sm">Broker #113972 · Appraiser #1702080</span>
              </div>
            </div>
            <div>
              <WhatHappensNext variant="dark" />
            </div>
            <HomepageLeadForm />
          </div>
        </div>
      </section>

      {/* 11. EDUCATIONAL PATHWAYS */}
      <EducationalPathways />

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default Index;
