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
import logo from "@/assets/logo-rpp-bright.png";
import expRealtyLogo from "@/assets/exp-realty-logo.png";
import ServiceNavTiles from "@/components/ServiceNavTiles";
import HomepageLeadForm from "@/components/HomepageLeadForm";
import LeadMagnetBlock from "@/components/LeadMagnetBlock";
import EducationalPathways from "@/components/EducationalPathways";
import StickyMobileCallButton from "@/components/StickyMobileCallButton";
import WhatHappensNext from "@/components/WhatHappensNext";

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
        title="Real Property Planning | Probate, Estate & Senior Transition Real Estate | Washington State"
        description="David Stein helps executors, trustees, attorneys, and families navigate probate sales, inherited homes, senior transitions, and trust property across Washington State. Licensed broker and certified appraiser with 20+ years of experience."
        jsonLd={jsonLd}
      />
      <Header />

      {/* ═══════════════════════════════════════════════════
          1. BRAND INTRO — Short, calm, scannable
      ═══════════════════════════════════════════════════ */}
      <section className="-mt-6 lg:-mt-8 pt-6 md:pt-0 pb-6 lg:pb-8 text-center" style={{ background: 'radial-gradient(ellipse 70% 50% at center 30%, hsl(220 48% 17%), hsl(220 52% 10%) 55%, hsl(220 55% 8%) 100%)' }}>
        <div className="container px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="-mb-6 md:-mb-20 lg:-mb-32">
              <img
                src={logo}
                alt="Real Property Planning"
                className="mx-auto w-[600px] md:w-[840px] lg:w-[1020px] h-auto object-contain motion-safe:animate-[logo-glow_8s_ease-in-out_infinite_2s]"
                loading="eager"
              />
            </div>

            <h1 className="font-serif text-[1.35rem] md:text-[1.65rem] lg:text-[1.95rem] font-semibold leading-[1.35] tracking-[0.01em] text-primary-foreground mb-5 max-w-[28rem] mx-auto" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.25)', wordSpacing: '0.05em' }}>
              Calm guidance for estate, probate, and senior real estate transitions across Washington State.
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact">
                <button className="inline-flex w-[240px] h-[32px] items-center justify-center rounded-md font-medium text-[0.8rem] tracking-[0.06em] uppercase text-white/90 transition-all duration-200 ease-out bg-[#a8892f] border border-[#c9a84c]/20 shadow-[0_1px_3px_rgba(0,0,0,0.2)] ring-1 ring-inset ring-black/30 hover:bg-[#b89a3a] hover:shadow-[0_2px_6px_rgba(0,0,0,0.2)] active:bg-[#96792a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a84c]/50">
                  Contact Us Now
                </button>
              </Link>
              <Link to="/services">
                <button className="inline-flex w-[240px] h-[32px] items-center justify-center rounded-md font-medium text-[0.8rem] tracking-[0.06em] uppercase transition-all duration-200 ease-out bg-transparent border-[2.5px] border-[#c9a84c]/35 text-primary-foreground/90 hover:border-[#c9a84c]/55 hover:text-primary-foreground hover:bg-white/5 active:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30">
                  Explore Services
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. SERVICE NAV TILES — Show choices fast
      ═══════════════════════════════════════════════════ */}
      <ServiceNavTiles />

      {/* Spacer between tiles and next section */}

      {/* ═══════════════════════════════════════════════════
          4. WHEN SHOULD YOU CALL — Quick, scannable
      ═══════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════
          5. LEAD MAGNET
      ═══════════════════════════════════════════════════ */}
      <LeadMagnetBlock />

      {/* ═══════════════════════════════════════════════════
          6. AREAS SERVED
      ═══════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════
          7. CONTACT
      ═══════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════
          8. EDUCATIONAL PATHWAYS
      ═══════════════════════════════════════════════════ */}
      <EducationalPathways />

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default Index;
