import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

import iconAttorneys from "@/assets/icons/icon-attorneys.png";
import iconFinancial from "@/assets/icons/icon-financial-planning.png";
import iconSeniorMoves from "@/assets/icons/icon-senior-moves.png";
import iconHomeValue from "@/assets/icons/icon-home-value.png";
import alcaLogo from "@/assets/alca-corporate-partner.png";
import naosaBadge from "@/assets/naosa-badge.jpg";
import naepcLogo from "@/assets/naepc-logo.png";

const partnerTiles = [
  {
    title: "Attorneys",
    description: "Supporting clients through probate, estate planning, divorce, and other legal matters.",
    href: "/for-attorneys",
    iconSrc: iconAttorneys,
  },
  {
    title: "Financial\nProfessionals",
    description: "Working alongside financial planners and advisors to align real estate decisions with broader financial goals.",
    href: "/for-financial-planners",
    iconSrc: iconFinancial,
  },
  {
    title: "Lenders &\nFinancing",
    description: "Connecting clients with trusted professionals who provide financing solutions, including reverse mortgage options.",
    href: "/lenders-and-financing-specialists",
    iconSrc: iconHomeValue,
  },
];

const whyCollaborate = [
  "Clear, defensible valuation backed by appraisal experience",
  "Structured and reliable process",
  "Strong communication across all parties",
  "Experience navigating complex situations",
  "A focus on reducing stress for clients",
];

const ForProfessionals = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Real Estate Support for Professional Partners | Real Property Planning"
        description="A coordinated approach to property decisions involving legal planning, financial strategy, and life transitions. Collaborate with a licensed broker and certified appraiser."
      />
      <BreadcrumbSchema items={[{ name: "For Professionals", url: "/for-professionals" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              For Professional Partners
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Real Estate Support for Professional Partners
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
              A Coordinated Approach to Life's Most Important Property Decisions
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold px-7 py-4 h-auto rounded-lg">
                <Phone className="w-4 h-4 mr-2" />
                Schedule a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Many real estate decisions are part of a much larger picture — involving legal planning, financial strategy, and major life transitions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I work alongside trusted professionals to help ensure that property-related decisions are handled with clarity, coordination, and care.
            </p>
          </div>
        </div>
      </section>

      {/* A Collaborative Network */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              A Collaborative Network
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To provide clients with a connected, thoughtful approach — where each professional plays their role, and no detail is overlooked.
            </p>
          </div>
        </div>
      </section>

      {/* Tile Grid */}
      <section className="py-10 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
                Areas of Collaboration
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Select the area that best aligns with your work:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {partnerTiles.map((tile) => (
                <Link
                  key={tile.href}
                  to={tile.href}
                  className="group relative flex flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border-[3px] border-[hsl(215_20%_72%)] bg-card px-8 py-10 text-center shadow-[0_4px_20px_-4px_hsl(var(--foreground)/0.10)] transition-all duration-[120ms] ease-out hover:-translate-y-0.5 hover:border-[hsl(215_30%_55%)] hover:shadow-[0_8px_28px_-6px_hsl(var(--foreground)/0.15)] active:translate-y-px active:scale-[0.97] active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.07] to-transparent" />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-foreground/[0.10] to-transparent" />

                  <img
                    src={tile.iconSrc}
                    alt=""
                    className="h-28 w-28 sm:h-32 sm:w-32 object-contain mix-blend-multiply"
                    loading="lazy"
                  />

                  <h3 className="font-serif text-[1.75rem] font-bold leading-[1.15] tracking-tight text-foreground lg:text-[2rem] whitespace-pre-line">
                    {tile.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">
                    {tile.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Professionals Collaborate */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">
              Why Professionals Choose to Collaborate
            </h2>
            <ul className="space-y-4">
              {whyCollaborate.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-xl text-foreground font-semibold mb-6">Professional Memberships &amp; Affiliations</h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer">
                <img src={alcaLogo} alt="Aging Life Care Association Corporate Partner" className="h-16 md:h-20 w-auto" loading="lazy" />
              </a>
              <img src={naosaBadge} alt="National Association of Senior Advocates - Best Real Estate Agent 2026" className="h-20 md:h-24 w-auto" loading="lazy" />
              <a href="https://www.naepc.org" target="_blank" rel="noopener noreferrer">
                <img src={naepcLogo} alt="National Association of Estate Planners & Councils" className="h-14 md:h-18 w-auto" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
              Let's Connect
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              If you work with clients where real estate plays a role, I would welcome the opportunity to collaborate and support a smooth, well-coordinated process.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default ForProfessionals;
