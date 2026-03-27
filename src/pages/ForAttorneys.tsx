import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MidPageCTA from "@/components/MidPageCTA";
import PageFAQ from "@/components/PageFAQ";


import iconProbate from "@/assets/icons/icon-probate-sales.png";
import iconExecutors from "@/assets/icons/icon-executors.png";
import iconDivorce from "@/assets/icons/icon-divorce.png";
import iconSeniorMoves from "@/assets/icons/icon-senior-moves.png";
import iconFinancial from "@/assets/icons/icon-financial-planning.png";
import iconTrustees from "@/assets/icons/icon-trustees.png";
import alcaLogo from "@/assets/alca-corporate-partner.png";
import naosaBadge from "@/assets/naosa-badge-clean.png";
import naepcLogo from "@/assets/naepc-logo.png";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const attorneyTiles = [
  {
    title: "Probate\nAttorneys",
    href: "/for-probate-attorneys",
    iconSrc: iconProbate,
  },
  {
    title: "Estate Planning\nAttorneys",
    href: "/for-estate-planning-attorneys",
    iconSrc: iconFinancial,
  },
  {
    title: "Elder Law\nAttorneys",
    href: "/for-elder-law-attorneys",
    iconSrc: iconSeniorMoves,
  },
  {
    title: "Family Law\nAttorneys",
    href: "/for-family-law-attorneys",
    iconSrc: iconTrustees,
  },
  {
    title: "Divorce\nAttorneys",
    href: "/for-divorce-attorneys",
    iconSrc: iconDivorce,
  },
];

const attorneyFaqs = [
  {
    question: "How does David support attorneys during probate property sales?",
    answer: "David handles the real estate side — property assessment, preparation, pricing, marketing, and sale — while coordinating directly with the attorney and personal representative. He provides regular updates and documentation to support the legal process.",
  },
  {
    question: "What is the difference between a CMA and a formal appraisal?",
    answer: "A CMA (Comparative Market Analysis) is a broker's opinion of value based on comparable sales data. A formal appraisal is a certified, independent valuation with stricter methodology. David's dual credentials allow him to provide market analysis informed by appraisal discipline — giving attorneys stronger data for estate decisions.",
  },
  {
    question: "Can David help with valuation disputes or pricing disagreements among heirs?",
    answer: "Yes. David's appraisal background allows him to present data-driven pricing supported by comparable sales analysis, condition adjustments, and market context — helping resolve disagreements with objective evidence rather than opinion.",
  },
  {
    question: "Does David work with attorneys outside of Western Washington?",
    answer: "David serves clients throughout Washington State. For properties outside Washington, he can connect attorneys with trusted brokers through eXp Realty's nationwide referral network.",
  },
];

const ForAttorneys = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Real Estate Support for Attorneys | Probate, Estate & Family Law | David Stein"
        description="Licensed real estate broker and certified residential appraiser supporting attorneys with probate sales, estate property coordination, valuation guidance, and family law property matters throughout Washington State."
      />
      <BreadcrumbSchema items={[{ name: "For Attorneys", url: "/for-attorneys" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              For Attorneys & Fiduciaries
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Real Estate Support for Attorneys and Their Clients
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Helping Navigate Property Decisions with Clarity, Coordination, and Confidence
            </p>
            <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light px-7 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                Connect to Discuss a Client Situation
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
              As a licensed real estate broker and state-certified residential appraiser, I bring a dual perspective that supports both strategic planning and practical execution.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My role is not to replace legal guidance — it is to support it. Select an area below to learn more about how I work with attorneys and their clients.
            </p>
          </div>
        </div>
      </section>

      {/* Tile Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
                Areas of Collaboration
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Select the area that best fits your client's situation:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {attorneyTiles.map((tile) => (
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA
        heading="Have a Client Situation to Discuss?"
        body="David works alongside attorneys to handle the real estate side of probate, estate, and family law matters with professionalism and clear communication."
        buttonText="Connect to Discuss a Client Situation"
        microcopy="Confidential. Professional. No obligation."
      />

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
                <img src={naepcLogo} alt="National Association of Estate Planners & Councils" className="max-h-[82px] w-auto object-contain" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageFAQ faqs={attorneyFaqs} heading="Questions Attorneys Ask About Working With David" />

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
              Let's Connect
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
              If you work with clients where real estate plays a role, I would welcome the opportunity to collaborate and support a smooth, well-coordinated process.
            </p>
            <p className="text-primary-foreground/50 text-base mb-8">
              A short conversation to understand your client's situation and discuss how I can support your work.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
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

export default ForAttorneys;
