import GoldCheck3D from "@/components/GoldCheck3D";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { realEstateAgentSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import iconEmail3d from "@/assets/icons/icon-email-3d.png";
import iconLicense3d from "@/assets/icons/icon-license-3d.png";
import iconAppraiser3d from "@/assets/icons/icon-appraiser-3d.png";
import mappin3d from "@/assets/mappin-3d.png";
import iconServiceProbate from "@/assets/icons/icon-service-probate.png";
import iconServiceSenior from "@/assets/icons/icon-service-senior.png";
import iconServiceValuation from "@/assets/icons/icon-service-valuation.png";
import daveHeadshot2 from "@/assets/dave-headshot-2.jpg";
import logo from "@/assets/logo-rpp-bright.png";
import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";
import expRealtyLogo from "@/assets/exp-realty-logo.png";
import ServiceNavTiles from "@/components/ServiceNavTiles";
import StatewideSupport from "@/components/StatewideSupport";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import WhatToExpect from "@/components/WhatToExpect";
import LeadMagnetBlock from "@/components/LeadMagnetBlock";
import HomepageLeadForm from "@/components/HomepageLeadForm";
import AppraiserAdvantage from "@/components/AppraiserAdvantage";
import OutOfStateBlock from "@/components/OutOfStateBlock";
import TrustAndResults from "@/components/TrustAndResults";
import MidPageCTA from "@/components/MidPageCTA";
import EducationalPathways from "@/components/EducationalPathways";
import SituationFinderBlock from "@/components/SituationFinderBlock";
import GuidedEntryPanel from "@/components/GuidedEntryPanel";
import StickyMobileCallButton from "@/components/StickyMobileCallButton";
import WhatHappensNext from "@/components/WhatHappensNext";
import SecureWillSection from "@/components/SecureWillSection";

const serviceAreas = [
  { county: "King County", href: "/counties/king", cities: "Seattle, Bellevue, Kirkland, Redmond, Renton, Kent, Federal Way & more" },
  { county: "Snohomish County", href: "/counties/snohomish", cities: "Everett, Edmonds, Lynnwood, Marysville, Lake Stevens, Mukilteo & more" },
  { county: "Pierce County", href: "/counties/pierce", cities: "Tacoma, Puyallup, Lakewood, University Place, Bonney Lake & more" },
  { county: "Kitsap County", href: "/counties/kitsap", cities: "Bremerton, Silverdale, Poulsbo, Bainbridge Island, Port Orchard & more" },
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
          1. BRAND INTRO — Short, clear, hub-focused
      ═══════════════════════════════════════════════════ */}
      <section className="-mt-6 lg:-mt-8 pt-6 md:pt-0 pb-6 lg:pb-8 text-center" style={{ background: 'radial-gradient(ellipse 70% 50% at center 30%, hsl(220 48% 17%), hsl(220 52% 10%) 55%, hsl(220 55% 8%) 100%)' }}>
        <div className="container px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Logo */}
            <div className="-mb-6 md:-mb-20 lg:-mb-32">
              <img
                src={logo}
                alt="Real Property Planning"
                className="mx-auto w-[600px] md:w-[840px] lg:w-[1020px] h-auto object-contain motion-safe:animate-[logo-glow_8s_ease-in-out_infinite_2s]"
                loading="eager"
              />
            </div>

            <h1 className="font-serif text-[1.35rem] md:text-[1.65rem] lg:text-[1.95rem] font-semibold leading-[1.35] tracking-[0.01em] text-primary-foreground mb-3 max-w-[28rem] mx-auto motion-safe:animate-[text-emphasis-a_14s_ease-in-out_infinite]" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.25)', wordSpacing: '0.05em' }}>
              Guiding seniors, families, and professionals through real estate and housing transitions across Washington State.
            </h1>

            <h2 className="font-serif text-[1.35rem] md:text-[1.65rem] lg:text-[1.95rem] font-semibold leading-[1.35] tracking-[0.01em] text-primary-foreground mb-6 max-w-[28rem] mx-auto motion-safe:animate-[text-emphasis-b_14s_ease-in-out_infinite]" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.25)', wordSpacing: '0.05em' }}>
              Downsizing, relocation, probate, inherited property, and senior living decisions — with calm guidance, practical coordination, and clear next steps.
            </h2>

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
          2. SERVICE NAV TILES — Role-based pathways
      ═══════════════════════════════════════════════════ */}
      <ServiceNavTiles />

      {/* ═══════════════════════════════════════════════════
          3. START HERE — Decision-based entry points
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 lg:py-18 bg-secondary">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-3">
              Start Here If You Are…
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the path that fits your situation. We'll guide you from there.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Handling an Estate", desc: "Named as executor or managing inherited property", link: "/executors" },
              { title: "Helping a Family Member", desc: "Supporting a parent or loved one through a transition", link: "/senior-transitions" },
              { title: "Planning Ahead", desc: "Getting organized before a transition happens", link: "/wills" },
              { title: "Managing a Property Transition", desc: "Navigating a sale tied to probate, trust, or life change", link: "/how-the-process-works" },
            ].map((item, i) => (
              <Link key={i} to={item.link} className="card-3d-blue-skin group p-6 text-center flex flex-col items-center">
                <div className="h-[48px] flex items-start justify-center">
                  <h3 className="font-serif text-xl font-bold group-hover:text-gold transition-colors" style={{ color: 'hsl(0, 70%, 30%)', lineHeight: '1.15' }}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm flex-1 pl-[2px] pr-0 pt-[8px] pb-0 mb-0 mt-0" style={{ lineHeight: "0.9" }}>
                  {item.desc}
                </p>
                <span className="text-gold font-semibold text-sm inline-flex items-center gap-1 mt-auto">
                  Learn More <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. TRUST STRIP — Credentials early
      ═══════════════════════════════════════════════════ */}
      <section className="py-10 lg:py-12 bg-cream">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-3">
              <img src={iconLicense3d} alt="" aria-hidden="true" className="h-10 w-10 object-contain" />
              <span className="text-foreground font-semibold text-base">Licensed WA Broker</span>
            </div>
            <div className="flex items-center gap-3">
              <img src={iconAppraiser3d} alt="" aria-hidden="true" className="h-10 w-10 object-contain mix-blend-multiply" />
              <span className="text-foreground font-semibold text-base">Certified Appraiser</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-foreground font-semibold text-base">20+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. WHAT WE DO — Three service cards
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 lg:py-18 bg-warm-bg">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">
              What We Do
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold">
              Real Estate Services for Complex Situations
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                iconSrc: iconServiceProbate,
                title: "Probate & Estate Sales",
                body: "Guidance for executors and families navigating inherited homes, trust-owned property, and court-supervised sales.",
                link: "/probate-estate-sales",
              },
              {
                iconSrc: iconServiceSenior,
                title: "Senior Transitions",
                body: "Coordinating the sale of a longtime family home when a loved one is moving — with patience for the emotional side.",
                link: "/senior-transitions",
              },
              {
                iconSrc: iconServiceValuation,
                title: "Valuation-Informed Pricing",
                body: "Pricing grounded in certified appraisal methodology — not guesswork. Especially important in estate and fiduciary situations.",
                link: "/why-valuation-matters",
              },
            ].map((card, i) => (
              <Link key={i} to={card.link} className="card-3d-blue-skin group flex flex-col items-center text-center p-8">
                <div className="mb-6 flex h-48 w-full items-center justify-center md:h-[13.5rem]">
                  <img
                    src={card.iconSrc}
                    alt={card.title}
                    className="block max-h-full max-w-[16.5rem] object-contain mix-blend-multiply mx-auto"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-xl text-foreground font-semibold mb-3 group-hover:text-gold transition-colors">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {card.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. TRUST & RESULTS — Moved higher
      ═══════════════════════════════════════════════════ */}
      <TrustAndResults />

      {/* ═══════════════════════════════════════════════════
          7. SECURE YOUR WILL — Featured section
      ═══════════════════════════════════════════════════ */}
      <SecureWillSection />

      {/* ═══════════════════════════════════════════════════
          8. MID-PAGE CTA
      ═══════════════════════════════════════════════════ */}
      <MidPageCTA
        heading="Have Questions?"
        body="A short, no-pressure conversation to understand your situation and talk through next steps."
        microcopy="Most people feel better just having a plan."
        buttonText="Schedule a Conversation"
        variant="dark"
      />

      {/* ═══════════════════════════════════════════════════
          9. WHAT TO EXPECT — 4-step process
      ═══════════════════════════════════════════════════ */}
      <WhatToExpect />

      {/* ═══════════════════════════════════════════════════
          10. APPRAISER ADVANTAGE
      ═══════════════════════════════════════════════════ */}
      <AppraiserAdvantage />

      {/* ═══════════════════════════════════════════════════
          11. OUT-OF-STATE SUPPORT
      ═══════════════════════════════════════════════════ */}
      <OutOfStateBlock />

      {/* ═══════════════════════════════════════════════════
          12. ABOUT DAVID — The trusted expert
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 lg:py-18 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-5 text-base">
            Your Guide
          </p>

          <div className="flex justify-center mb-5">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold/30 shadow-xl">
              <img
                src={daveHeadshot2}
                alt="David Stein, President of Real Property Planning"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          <p className="text-2xl md:text-[1.65rem] font-bold text-foreground">David Stein</p>
          <p className="text-lg md:text-xl font-semibold text-foreground/80 mt-1">President, Real Property Planning</p>

          <div className="mt-6 text-left sm:text-center space-y-3 max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed">
              20+ years as both a licensed broker and certified residential appraiser. That combination means pricing advice grounded in professional methodology — not a best guess.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              David works with executors, attorneys, trustees, and families across Washington State.
            </p>
          </div>

          <div className="mt-6 space-y-2">
            <p className="flex items-center justify-center text-base font-semibold text-foreground">
              <img src={iconLicense3d} alt="" aria-hidden="true" className="mr-3 h-10 w-10 shrink-0 object-contain" />
              Licensed Real Estate Broker — License #113972
            </p>
            <p className="flex items-center justify-center text-base font-semibold text-foreground">
              <img src={iconAppraiser3d} alt="" aria-hidden="true" className="mr-3 h-10 w-10 shrink-0 object-contain mix-blend-multiply" />
              WA Certified Residential Appraiser — #1702080
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-base text-muted-foreground">
            <a href="tel:2069003015" className="flex items-center gap-2 hover:text-gold transition-colors font-medium">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="h-8 w-8 object-contain shrink-0" />
              (206) 900-3015
            </a>
            <a href="mailto:david@realpropertyplanning.com" className="flex items-center gap-2 hover:text-gold transition-colors font-medium">
              <img src={iconEmail3d} alt="" aria-hidden="true" className="h-12 w-12 object-contain shrink-0" />
              david@realpropertyplanning.com
            </a>
          </div>

          <div className="mt-6 w-full flex flex-col items-center">
            <div className="w-full grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-4">
              <div className="flex items-center justify-center sm:justify-end">
                <img src={expRealtyLogo} alt="eXp Realty" className="h-7 w-auto opacity-70" loading="lazy" />
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed text-center">
                <p>PO Box 1462, Woodinville, WA 98072</p>
                <p>Office: 1455 NW Leary Way, Seattle, WA 98107</p>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <img src="/badges/equal-housing-badge.png" alt="Equal Housing Opportunity" className="h-[5.25rem] w-auto opacity-70" loading="lazy" />
              </div>
            </div>

            <div className="mt-10 mb-4 flex items-center justify-center gap-3 w-full max-w-xl">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-muted-foreground/60 to-muted-foreground/60" />
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground md:whitespace-nowrap text-center">Professional<br className="md:hidden" /> Memberships &amp; Affiliations</p>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-muted-foreground/60 to-muted-foreground/60" />
            </div>
            <AffiliationBadgeGrid />
          </div>
        </div>
      </section>

      <StatewideSupport background="bg-cream" />

      {/* ═══════════════════════════════════════════════════
          13. WHEN SHOULD YOU CALL
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 lg:py-18 bg-cream">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-5">
              When Should You Reach Out?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Most people don't call with a plan. They call because something happened and they need to figure out what comes next.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "You've been named an executor and aren't sure where to start",
                "You're handling an inherited home and need guidance",
                "An attorney is involved and real estate is part of the process",
                "A parent or family member is transitioning out of their home",
                "You want a clear picture of what the property is worth",
                "You just want to talk through your situation first",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
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
          14. LEAD MAGNET
      ═══════════════════════════════════════════════════ */}
      <LeadMagnetBlock />

      {/* ═══════════════════════════════════════════════════
          15. AREAS SERVED
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 lg:py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath d='M100 20 L130 80 L160 140 H40 L70 80 Z' fill='%23fff'/%3E%3Cpath d='M100 50 L120 90 L140 130 H60 L80 90 Z' fill='%23fff'/%3E%3C/svg%3E")`,
          backgroundSize: '300px',
        }} />
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-base">
              Service Areas
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
              Serving Clients Across Washington State
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-3xl mx-auto leading-relaxed">
              Based in Western Washington with referral connections nationwide through eXp Realty.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviceAreas.map((area, i) => (
              <Link key={i} to={area.href} className="card-3d group p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img src={mappin3d} alt="" aria-hidden="true" className="w-12 h-12 object-contain shrink-0" />
                  <h3 className="font-serif text-xl text-foreground font-semibold group-hover:text-gold transition-colors">
                    {area.county}
                  </h3>
                </div>
                <p className="text-muted-foreground text-base">{area.cities}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
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
          16. CONTACT
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-navy-dark">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
                Start With a Question, Not a Plan
              </h2>
              <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
                Most client relationships start the same way — someone calls because a situation came up and they're not sure what comes first.
              </p>
              <p className="text-primary-foreground/60 text-lg leading-relaxed mb-3">
                <strong className="text-primary-foreground/80">What happens next:</strong> David typically responds within one business day, often sooner.
              </p>
              <p className="text-primary-foreground/60 text-lg leading-relaxed mb-10">
                Confidential. Practical. No obligation.
              </p>

              <div className="space-y-5">
                <div>
                  <p className="text-base text-primary-foreground/60">Phone</p>
                  <a href="tel:2069003015" className="mt-1 inline-flex items-center text-primary-foreground transition-colors hover:text-gold">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="mr-3 h-14 w-14 shrink-0 object-contain" />
                    <span className="text-lg font-semibold">(206) 900-3015</span>
                  </a>
                </div>
                <div>
                  <p className="text-base text-primary-foreground/60">Email</p>
                  <a href="mailto:david@realpropertyplanning.com" className="mt-1 inline-flex items-center text-primary-foreground transition-colors hover:text-gold">
                    <img src={iconEmail3d} alt="" aria-hidden="true" className="mr-3 h-14 w-14 shrink-0 object-contain" />
                    <span className="text-lg font-semibold">david@realpropertyplanning.com</span>
                  </a>
                </div>
                <div>
                  <p className="text-base text-primary-foreground/60">Serving</p>
                  <div className="mt-1 inline-flex items-center text-primary-foreground">
                    <img src={mappin3d} alt="" aria-hidden="true" className="mr-3 h-11 w-11 shrink-0 object-contain" />
                    <span className="text-lg font-semibold">Washington State &amp; Beyond</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <img src={expRealtyLogo} alt="eXp Realty" className="h-6 w-auto opacity-50" loading="lazy" />
                <span className="text-primary-foreground/40 text-base">Broker License #113972 · Appraiser #1702080</span>
              </div>
            </div>

            <div className="mt-10">
              <WhatHappensNext variant="dark" />
            </div>

            <HomepageLeadForm />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          17. EDUCATIONAL PATHWAYS
      ═══════════════════════════════════════════════════ */}
      <EducationalPathways />

      <DisclaimerSection />
      <Footer />
      
    </div>
  );
};

export default Index;
