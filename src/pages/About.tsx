import GoldCheck3D from "@/components/GoldCheck3D";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { realEstateAgentSchema, davidSteinPerson } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import TrustStrip from "@/components/TrustStrip";
import RelatedServices from "@/components/RelatedServices";
import StatewideSupport from "@/components/StatewideSupport";
import ProofCallout from "@/components/ProofCallout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import daveHeadshot from "@/assets/dave-headshot.jpg";
import AgentCredentialBlock from "@/components/AgentCredentialBlock";
import alcaLogo from "@/assets/alca-corporate-partner.png";
import naosaBadge from "@/assets/naosa-badge-clean.png";
import naepcLogo from "@/assets/naepc-logo.png";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const whoWorksWith = [
  "Estate planning, probate, and elder law attorneys",
  "Executors and personal representatives",
  "Trustees and fiduciaries",
  "CPAs and financial planners",
  "Adult children helping parents transition",
  "Seniors and families navigating major home decisions",
];

const whatSetsApart = [
  "Dual-credentialed: licensed broker and state certified residential appraiser",
  "Specialized focus on probate, estate, trust, and transition-related property",
  "A calm, steady communication style suited to sensitive situations",
  "Hands-on coordination from assessment through closing",
  "Over two decades of relevant experience throughout Washington State",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
       <SEOHead
        title="About David Stein — Probate, Estate & Senior Transition Broker | Washington State"
        description="David Stein is a Washington State licensed real estate broker and certified residential appraiser specializing in probate, estate, inherited property, and senior transition real estate throughout Washington State."
        jsonLd={{
          "@context": "https://schema.org",
          ...davidSteinPerson,
          description: "Washington State licensed real estate broker and certified residential appraiser specializing in probate, estate, inherited property, and senior transition real estate. Over 20 years of dual expertise serving attorneys, executors, trustees, seniors, and families throughout Washington State.",
          image: "https://realpropertyplanning.com/dave-headshot.jpg",
        }}
      />
      <BreadcrumbSchema items={[{ name: "About", url: "/about" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              About
            </p>
             <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight">
              About David Stein
            </h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mt-4">
               Washington State real estate broker with eXp Realty, specializing in senior relocation, estate and inherited property sales, and trust &amp; probate real estate.
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Bio */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Washington State real estate broker with eXp Realty, specializing in senior relocation, estate and inherited property sales, and trust &amp; probate real estate. David works with executors, probate attorneys, and families to coordinate valuation, clean‑out, repairs, and sale of homes throughout Washington State, with deep experience across King, Snohomish, and Pierce counties.
                </p>
                <p>
                  Experienced with court timelines, fiduciary obligations, and working with out‑of‑area decision makers, David brings over 20 years of experience as a licensed Washington real estate broker and a state certified residential appraiser. This dual background means he doesn't just understand how to sell a home — he understands how to evaluate it with analytical precision and price it with market-informed confidence.
                </p>
                <p>
                  David's practice is focused exclusively on property situations that require more than a standard listing approach: <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">senior relocation home sales</Link>, <Link to="/probate-estate-sales" className="text-accent hover:text-gold underline underline-offset-4">probate and estate sales</Link>, trust-owned real estate, and inherited homes that need experienced guidance from assessment through closing. If you are navigating a transition or handling an estate, contact David for a clear, step‑by‑step plan and a no‑pressure consultation.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden border-2 border-gold/20 shadow-lg">
                <img
                  src={daveHeadshot}
                  alt="David Stein, Washington state certified real estate appraiser and broker behind Real Property Planning"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
              <AgentCredentialBlock />
            </div>
          </div>
        </div>
      </section>

      {/* Why Professionals Refer to David */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Why Professionals and Families Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Attorneys, fiduciaries, and family members consistently describe these qualities when recommending David:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Valuation Expertise", desc: "Pricing grounded in certified appraisal methodology, not guesswork" },
                { label: "Calm Communication", desc: "Clear, steady guidance through emotional and complex situations" },
                { label: "Full Coordination", desc: "Manages vendors, cleanout, repairs, and sale from start to close" },
                { label: "Fiduciary Awareness", desc: "Understands the obligations executors, trustees, and attorneys carry" },
                { label: "Remote Management", desc: "Serves as local point of contact for out-of-state decision makers" },
                { label: "Niche Focus", desc: "Exclusively handles probate, estate, inherited property, and senior transitions" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={18} className="mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <ProofCallout
              quote="David guided our family through a very difficult time with professionalism and genuine compassion. His valuation perspective and market knowledge were incredibly helpful."
              attribution="Estate Attorney, Seattle"
              context="Probate property transition"
              variant="accent"
            />
          </div>
        </div>
      </section>

      {/* Who David Works With */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Who David Works With
            </h2>
            <ul className="space-y-4">
              {whoWorksWith.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What Sets David Apart */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              What Sets This Practice Apart
            </h2>
            <ul className="space-y-4">
              {whatSetsApart.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-lg leading-relaxed mt-8">
              Learn more about <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">why David's valuation expertise matters</Link> or explore the <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">step-by-step process</Link> he follows for every engagement.
            </p>

            {/* Review pathways */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm font-semibold text-muted-foreground mb-3">Client Reviews &amp; Reputation</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/testimonials" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Read Client Reviews</Link>
                <span className="text-muted-foreground/40">·</span>
                <a
                  href="https://www.zillow.com/profile/dstein2112#reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm"
                >
                  See Reviews on Zillow
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/about" />

      {/* Professional Affiliations */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-xl text-foreground font-semibold mb-6">Professional Memberships &amp; Affiliations</h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer">
                <img src={alcaLogo} alt="Aging Life Care Association Corporate Partner" className="h-16 md:h-20 w-auto" loading="lazy" />
              </a>
              <a href="https://www.naosa.org" target="_blank" rel="noopener noreferrer">
                <img src={naosaBadge} alt="National Association of Senior Advocates - Best Real Estate Agent 2026" className="h-40 md:h-48 w-auto" loading="lazy" />
              </a>
              <a href="https://www.naepc.org" target="_blank" rel="noopener noreferrer">
                <img src={naepcLogo} alt="National Association of Estate Planners & Councils" className="max-h-[246px] w-auto object-contain" loading="lazy" />
              </a>
              <div className="flex items-center justify-center min-h-[80px]">
                <img src="/badges/realtor-badge.png" alt="REALTOR® badge" className="h-[58px] md:h-[64px] w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center min-h-[80px]">
                <img src="/badges/equal-housing-badge.png" alt="Equal Housing Opportunity badge" className="h-[44px] md:h-[48px] w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Ready to discuss a property situation?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              David welcomes confidential conversations with attorneys, executors, trustees, families, and financial professionals.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                  Contact David
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StatewideSupport background="bg-secondary" />

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default About;
