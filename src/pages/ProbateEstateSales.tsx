import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconProbateSales from "@/assets/probate-estate-sales-hero.png";
import iconLegalAuthority from "@/assets/icons/legal-authority-3d.webp";
import iconMultipleDecisionMakers from "@/assets/icons/multiple-decision-makers-3d.webp";
import iconPropertyCondition from "@/assets/icons/property-condition-3d.webp";
import iconHonestPricing from "@/assets/icons/honest-pricing-3d.webp";
import iconEmotionalComplexity from "@/assets/icons/emotional-complexity-3d.webp";
import iconPreparationStrategy from "@/assets/icons/preparation-strategy-3d.webp";
import iconClientStories from "@/assets/icons/client-stories-3d.webp";
import iconCommonQuestions from "@/assets/icons/common-questions-3d.webp";
import iconHowProcessWorks from "@/assets/icons/how-the-process-works-3d.webp";

// ── Data ──

const whatMakesDifferentTiles = [
  { icon: iconLegalAuthority, label: "Legal Authority", text: "Court requirements may dictate when and how a sale can occur." },
  { icon: iconMultipleDecisionMakers, label: "Multiple Decision-Makers", text: "Executors, co-heirs, attorneys, and trustees must coordinate." },
  { icon: iconPropertyCondition, label: "Property Condition", text: "Deferred maintenance, belongings, and vacancy are common." },
  { icon: iconHonestPricing, label: "Honest Pricing", text: "Value must reflect actual condition — not automated estimates." },
  { icon: iconEmotionalComplexity, label: "Emotional Complexity", text: "Family dynamics can slow communication and decisions." },
  { icon: iconPreparationStrategy, label: "Preparation Strategy", text: "As-is vs. repairs has a direct impact on fiduciary defensibility." },
];

const card3dStyle = {
  background: '#FFFFFF',
  border: '2px solid #C9A84C',
  borderRadius: '16px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.06), 0 8px 16px rgba(0,0,0,0.08), 0 16px 32px rgba(0,0,0,0.06)',
  transition: 'all 0.3s ease',
};

const card3dHoverShadow = '0 8px 16px rgba(0,0,0,0.10), 0 20px 40px rgba(0,0,0,0.12), 0 0 0 2px #C9A84C';

const jsonLd = articleSchema({
  headline: "Probate Real Estate Sales in Washington State",
  description: "Evidence-based probate real estate guidance for executors, attorneys, and families throughout Washington State. Serving King, Snohomish, Pierce & Kitsap Counties.",
  url: "/probate-estate-sales",
  datePublished: "2025-01-15",
  dateModified: "2026-05-05",
  about: ["Probate real estate", "Estate sales", "Inherited property", "Court-supervised sales", "Fiduciary duties"],
});

const ProbateEstateSales = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Probate Real Estate Broker & Agent in Washington State | Real Property Planning"
        description="Real Property Planning — Washington State Licensed Real Estate Broker & Certified Appraiser specializing in probate real estate sales in King, Snohomish, Pierce & Kitsap Counties. Real Property Planning."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Probate & Estate Sales", url: "/probate-estate-sales" }]} />
      <Header />
      <main id="main-content">

      {/* SECTION 1 — Hero */}
      <section className="bg-primary pt-6 md:pt-10 pb-10 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <img src={iconProbateSales} alt="Probate estate sale scene — house with sold sign, probate court documents, keys, and scale of justice in gold circular frame" className="mx-auto max-w-[16rem] md:max-w-[20rem] w-full h-auto object-contain mb-5" loading="eager"/>
            <p className="text-gold font-bold uppercase mb-3" style={{ fontSize: '20px', letterSpacing: '0.18em' }}>
              Probate &amp; Estate Property Sales
            </p>
            <h1 className="font-serif text-primary-foreground font-semibold leading-tight mb-5" style={{ fontSize: 'clamp(36px, 5vw, 46px)' }}>
              Selling a Home Through Probate in Washington State
            </h1>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
              <span className="inline-flex items-center text-primary-foreground bg-white/10 rounded-full px-3 py-1" style={{ fontSize: '16px' }}>✓ Court-aligned timelines</span>
              <span className="inline-flex items-center text-primary-foreground bg-white/10 rounded-full px-3 py-1" style={{ fontSize: '16px' }}>✓ Fiduciary-grade pricing</span>
              <span className="inline-flex items-center text-primary-foreground bg-white/10 rounded-full px-3 py-1" style={{ fontSize: '16px' }}>✓ Full documentation</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="w-full sm:w-auto px-8 py-4 h-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
                  Talk Through Your Estate
                </Button>
              </Link>
              <Link to="/guides/sell-house-during-probate-washington">
                <Button size="lg" variant="outline3d" className="bg-white !text-[#0f2d52] border-2 border-[#0f2d52] hover:bg-[#0f2d52] hover:!text-white focus-visible:ring-[#0f2d52] w-full sm:w-auto px-8 py-4 h-auto">
                  Read the Probate Sale Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Probate vs. Inherited (two tiles, no accordions) */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-[hsl(0_70%_30%)] font-semibold mb-4">
              Probate Property vs. Inherited Property — What's the Difference?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              This distinction matters more than most people realize. Understanding which situation you're in determines your legal authority, your timeline, and your options before you can take any action on the property.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-6 hover:-translate-y-1" style={card3dStyle} onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12), 0 20px 40px rgba(0,0,0,0.08)'; }} onMouseLeave={e => { e.currentTarget.style.boxShadow = card3dStyle.boxShadow; }}>
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">Probate Property</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">
                  Court-supervised. Legal authority required before the sale can proceed.
                </p>
                <Link to="/terminology" className="text-accent hover:text-gold text-sm font-medium transition-colors">
                  Learn more →
                </Link>
              </div>
              <div className="p-6 hover:-translate-y-1" style={card3dStyle} onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12), 0 20px 40px rgba(0,0,0,0.08)'; }} onMouseLeave={e => { e.currentTarget.style.boxShadow = card3dStyle.boxShadow; }}>
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">Inherited Property (Non-Probate)</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">
                  Passes outside probate via trust or joint tenancy. Fewer legal hurdles, but still complex.
                </p>
                <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold text-sm font-medium transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — What Makes Estate Sales Different (icon tile grid) */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-[hsl(0_70%_30%)] font-semibold mb-4">
              What Makes Estate Property Sales Different
            </h2>
            <p className="text-muted-foreground text-[17px] leading-[1.85] mb-10">
              Estate property sales are genuinely different from standard real estate transactions — and treating them like ordinary listings is where families and executors most often run into trouble.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatMakesDifferentTiles.map((tile, i) => (
                  <div
                    key={i}
                    className="p-6 flex flex-col items-start cursor-default"
                    style={card3dStyle}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = card3dHoverShadow; e.currentTarget.style.borderColor = '#E2C66A'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = card3dStyle.boxShadow; e.currentTarget.style.borderColor = '#C9A84C'; }}
                  >
                    <img src={tile.icon} alt="" aria-hidden="true" loading="lazy" width="80" height="80" className="mb-4 shrink-0" style={{ width: 80, height: 80, objectFit: 'contain' }} />
                    <h3 className="font-serif text-base text-foreground font-semibold mb-2">{tile.label}</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">{tile.text}</p>
                  </div>
                ))}

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — 3-Step Timeline */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-[hsl(0_70%_30%)] font-semibold mb-8">
              Timing and Coordination in Probate Sales
            </h2>
            <div className="space-y-5">
              <div className="flex gap-5 items-start">
                <span className="text-gold font-serif text-2xl font-semibold shrink-0 leading-none pt-1">01</span>
                <div>
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-1">Before Legal Authority Is Granted</h3>
                  <p className="text-muted-foreground leading-relaxed">We can assess the property and help you plan before legal authority is formally granted.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <span className="text-gold font-serif text-2xl font-semibold shrink-0 leading-none pt-1">02</span>
                <div>
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-1">During Active Probate</h3>
                  <p className="text-muted-foreground leading-relaxed">Once authority is established, we coordinate preparation, pricing, and listing — in step with the legal proceedings.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <span className="text-gold font-serif text-2xl font-semibold shrink-0 leading-none pt-1">03</span>
                <div>
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-1">Post-Probate or Trust Distribution</h3>
                  <p className="text-muted-foreground leading-relaxed">We manage preparation, marketing, negotiation, and closing — evaluating every repair for return on investment.</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground mt-8">
              <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4 transition-colors">
                See how the full process works →
              </Link>
            </p>
          </div>
        </div>
      </section>


      {/* SECTION 6 — Explore Further (3-tile nav grid) */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">Explore Further</h2>
            <div className="grid md:grid-cols-3 gap-5">
              <Link
                to="/client-stories"
                className="group flex flex-col p-6"
                style={card3dStyle}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = card3dHoverShadow; e.currentTarget.style.borderColor = '#E2C66A'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = card3dStyle.boxShadow; e.currentTarget.style.borderColor = '#C9A84C'; }}
              >
                <img src={iconClientStories} alt="" aria-hidden="true" loading="lazy" width="80" height="80" className="mb-4 shrink-0" style={{ width: 80, height: 80, objectFit: 'contain' }} />
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2 group-hover:text-gold transition-colors">Client Stories</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-4 flex-1">See how we've helped executors, families, and trustees navigate real situations.</p>
                <span className="text-accent group-hover:text-gold text-sm font-medium transition-colors inline-flex items-center gap-1">
                  View stories <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link
                to="/faq"
                className="group flex flex-col p-6"
                style={card3dStyle}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = card3dHoverShadow; e.currentTarget.style.borderColor = '#E2C66A'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = card3dStyle.boxShadow; e.currentTarget.style.borderColor = '#C9A84C'; }}
              >
                <img src={iconCommonQuestions} alt="" aria-hidden="true" loading="lazy" width="80" height="80" className="mb-4 shrink-0" style={{ width: 80, height: 80, objectFit: 'contain' }} />
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2 group-hover:text-gold transition-colors">Common Questions</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-4 flex-1">Answers to the questions executors and families ask most.</p>
                <span className="text-accent group-hover:text-gold text-sm font-medium transition-colors inline-flex items-center gap-1">
                  Read FAQs <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link
                to="/how-the-process-works"
                className="group flex flex-col p-6"
                style={card3dStyle}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = card3dHoverShadow; e.currentTarget.style.borderColor = '#E2C66A'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = card3dStyle.boxShadow; e.currentTarget.style.borderColor = '#C9A84C'; }}
              >
                <img src={iconHowProcessWorks} alt="" aria-hidden="true" loading="lazy" width="80" height="80" className="mb-4 shrink-0" style={{ width: 80, height: 80, objectFit: 'contain' }} />
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2 group-hover:text-gold transition-colors">How the Process Works</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-4 flex-1">A clear walkthrough from assessment to closing.</p>
                <span className="text-accent group-hover:text-gold text-sm font-medium transition-colors inline-flex items-center gap-1">
                  See the process <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Ready to Talk? (closing CTA) */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Ready to Talk?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
              Whether{" "}
              <Link to="/terminology" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">probate</Link>{" "}
              is just beginning, actively underway, or nearing completion, a short conversation can help you understand your options and develop a practical next step.
            </p>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Our team works with{" "}
              <Link to="/executors" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">executors</Link>,{" "}
              <Link to="/for-attorneys" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">attorneys</Link>, and families throughout{" "}
              <Link to="/counties" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">King County, Snohomish County, Pierce County, Kitsap County</Link>, and across Washington State. Through our eXp Realty network, Real Property Planning can also connect{" "}
              <Link to="/guides/out-of-state-families" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">out-of-state</Link>{" "}
              families with trusted brokers in other states.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+12069003015">
                <Button variant="gold" size="lg" className="px-8 py-4 h-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
                  Call (206) 900-3015
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold">
                  Send a Message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProbateEstateSales;
