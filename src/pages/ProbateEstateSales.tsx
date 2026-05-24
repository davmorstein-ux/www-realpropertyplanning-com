import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import iconClientStories from "@/assets/icons/client-stories-3d.webp";
import iconTerminology from "@/assets/icons/probate-property-sales-alt-icon-washington.webp";
import iconCommonQuestions from "@/assets/icons/common-questions-3d.webp";
import iconHowProcessWorks from "@/assets/icons/how-the-process-works-3d.webp";

// ── Data ──

const whatMakesDifferentTiles = [
  {
    image: "/tiles/set2/the-probate-process.webp",
    alt: "Legal authority in probate property sales",
    title: "Legal Authority",
    description: "Court requirements may dictate when and how a sale can occur.",
    cta: "Learn More",
    href: "/terminology",
  },
  {
    image: "/tiles/set2/executors.webp",
    alt: "Multiple decision-makers in estate sales",
    title: "Multiple Decision-Makers",
    description: "Executors, co-heirs, attorneys, and trustees must coordinate.",
    cta: "Learn More",
    href: "/executors",
  },
  {
    image: "/tiles/set2/probate-estate-sales.webp",
    alt: "Estate property condition assessment",
    title: "Property Condition",
    description: "Deferred maintenance, belongings, and vacancy are common.",
    cta: "Learn More",
    href: "/how-the-process-works",
  },
  {
    image: "/tiles/set1/real-estate-appraisers.webp",
    alt: "Honest pricing for estate property",
    title: "Honest Pricing",
    description: "Value must reflect actual condition — not automated estimates.",
    cta: "Learn More",
    href: "/why-valuation-matters",
  },
  {
    image: "/tiles/set2/trustees.webp",
    alt: "Emotional complexity in family estate decisions",
    title: "Emotional Complexity",
    description: "Family dynamics can slow communication and decisions.",
    cta: "Learn More",
    href: "/client-stories",
  },
  {
    image: "/tiles/set3/home-values-pricing.webp",
    alt: "Preparation strategy for estate property sales",
    title: "Preparation Strategy",
    description: "As-is vs. repairs has a direct impact on fiduciary defensibility.",
    cta: "Learn More",
    href: "/how-the-process-works",
  },
];

const jsonLd = articleSchema({
  headline: "Probate Real Estate Sales in Washington State",
  description:
    "Evidence-based probate real estate guidance for executors, attorneys, and families throughout Washington State. Serving King, Snohomish, Pierce & Kitsap Counties.",
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
        <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
          <div className="relative w-full" style={{ display: 'block', lineHeight: 0 }}>
            <img
              src="/assets/estate_probate_sales_hero_clean.webp"
              alt="Probate and estate property sale scene with family reviewing belongings outside a Washington home"
              className="w-full h-auto object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <HeroBandTitle as="h2">PROBATE &amp; ESTATE PROPERTY SALES</HeroBandTitle>
        </section>

        {/* SECTION 2 — Probate vs. Inherited (two tiles, no accordions) */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <h2 className="text-3xl text-[hsl(0_70%_30%)] font-semibold mb-4 font-sans text-center">
                Probate Property vs. Inherited Property
                <br />
                What's the Difference?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                ​
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 items-stretch">
                {[
                  {
                    image: "/tiles/set2/the-probate-process.webp",
                    alt: "Probate property real estate Washington State",
                    title: "Probate Property",
                    description: "Court-supervised. Legal authority required before the sale can proceed.",
                    cta: "Learn More",
                    href: "/terminology",
                  },
                  {
                    image: "/tiles/set2/wills.webp",
                    alt: "Inherited property non-probate Washington State",
                    title: "Inherited Property (Non-Probate)",
                    description: "Passes outside probate via trust or joint tenancy. Fewer legal hurdles, but still complex.",
                    cta: "Learn More",
                    href: "/guides/inherited-house-washington",
                  },
                ].map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    aria-label={`${s.title} — ${s.description} — ${s.cta}`}
                    className="card-3d-blue group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  >
                    <div className="card-3d-blue__inner h-full relative">
                      <div className="card-3d-blue__face h-full">
                        <div className="flex h-full flex-col">
                          <div className="relative w-full overflow-hidden bg-transparent flex items-center justify-center" style={{ aspectRatio: "500 / 312" }}>
                            <img
                              src={s.image}
                              alt={s.alt}
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                              loading="lazy"
                            />
                          </div>
                          <div className="relative flex flex-1 flex-col items-center text-center overflow-hidden" style={{ padding: "10px" }}>
                            <h3 className="font-serif text-[15px] md:text-[17px] font-semibold text-navy leading-snug mb-2 flex items-start justify-center transition-opacity duration-200 group-hover:opacity-0">
                              {s.title}
                            </h3>
                            <p className="text-foreground text-[11px] leading-relaxed mb-3 flex items-start justify-center transition-opacity duration-200 group-hover:opacity-0">
                              {s.description}
                            </p>
                            <span className="gold-cta mt-auto transition-opacity duration-200 group-hover:opacity-0" style={{ padding: "6px 12px" }}>
                              {s.cta}
                              <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <polyline points="9 18 15 12 9 6" />
                              </svg>
                            </span>
                            <div
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                              style={{
                                background: "rgba(10, 20, 46, 0.97)",
                                zIndex: 10,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                padding: "0.75rem 1rem",
                                transition: "opacity 0.28s ease 0.1s",
                              }}
                            >
                              <h3 className="font-serif text-white text-[17px] md:text-[19px] font-bold leading-snug mb-2">
                                {s.title}
                              </h3>
                              <span
                                className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wide"
                                style={{ color: "#C9A84C", fontFamily: "'DM Sans', sans-serif" }}
                              >
                                {s.cta}
                                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — What Makes Estate Sales Different (icon tile grid) */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl text-[hsl(0_70%_30%)] font-semibold mb-4 text-center font-sans">
                What Makes Estate Property Sales Different
              </h2>
              <p className="text-muted-foreground text-[17px] leading-[1.85] mb-10">
                Estate property sales are genuinely different from standard real estate transactions — and treating them
                like ordinary listings is where families and executors most often run into trouble.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
                {whatMakesDifferentTiles.map((s) => (
                  <Link
                    key={s.title}
                    to={s.href}
                    aria-label={`${s.title} — ${s.description} — ${s.cta}`}
                    className="card-3d-blue group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  >
                    <div className="card-3d-blue__inner h-full relative">
                      <div className="card-3d-blue__face h-full">
                        <div className="flex h-full flex-col">
                          <div className="relative flex flex-1 flex-col items-center text-center overflow-hidden" style={{ padding: "16px" }}>
                            <h3 className="font-serif text-[22px] md:text-[24px] font-semibold text-navy leading-snug mb-3 flex items-start justify-center transition-opacity duration-200 group-hover:opacity-0">
                              {s.title}
                            </h3>
                            <p className="text-foreground text-[14px] leading-relaxed mb-6 flex items-start justify-center transition-opacity duration-200 group-hover:opacity-0">
                              {s.description}
                            </p>
                            <span className="gold-cta mt-auto transition-opacity duration-200 group-hover:opacity-0" style={{ padding: "10px 16px" }}>
                              {s.cta}
                              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <polyline points="9 18 15 12 9 6" />
                              </svg>
                            </span>
                            <div
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                              style={{
                                background: "rgba(10, 20, 46, 0.97)",
                                zIndex: 10,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                padding: "1.25rem 1.5rem",
                                transition: "opacity 0.28s ease 0.1s",
                              }}
                            >
                              <h3 className="font-serif text-white text-[24px] md:text-[26px] font-bold leading-snug mb-3">
                                {s.title}
                              </h3>
                              <span
                                className="inline-flex items-center gap-2 text-[16px] font-bold tracking-wide"
                                style={{ color: "#C9A84C", fontFamily: "'DM Sans', sans-serif" }}
                              >
                                {s.cta}
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — 3-Step Timeline */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl text-[hsl(0_70%_30%)] font-semibold mb-8 text-center font-sans">
                Timing and Coordination in Probate Sales
              </h2>
              <div className="space-y-5">
                {[
                  {
                    hour: 1,
                    title: "Before Legal Authority Is Granted",
                    desc: "A property can be assessed and a plan developed before legal authority is formally granted — so families and executors are prepared when the time comes.",
                  },
                  {
                    hour: 2,
                    title: "During Active Probate",
                    desc: "Once authority is established, preparation, pricing, and listing can proceed in step with the legal proceedings — coordinated with the estate's attorney and other professionals.",
                  },
                  {
                    hour: 3,
                    title: "Post-Probate or Trust Distribution",
                    desc: "After probate closes or a trust distribution is planned, the property can move toward preparation, marketing, and sale — with every repair decision evaluated for return on investment.",
                  },
                ].map(({ hour, title, desc }) => {
                  const angle = hour * 30; // degrees from 12
                  const rad = (angle - 90) * (Math.PI / 180);
                  const cx = 32,
                    cy = 32,
                    len = 14;
                  const hx = cx + Math.cos(rad) * len;
                  const hy = cy + Math.sin(rad) * len;
                  return (
                    <div key={hour} className="flex gap-5 items-center">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        aria-hidden="true"
                        className="shrink-0"
                        style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.20))" }}
                      >
                        <defs>
                          <radialGradient id={`clockFace${hour}`} cx="40%" cy="35%" r="70%">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="70%" stopColor="#FAF6EC" />
                            <stop offset="100%" stopColor="#EFE6CC" />
                          </radialGradient>
                          <linearGradient id={`clockRim${hour}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#E2C66A" />
                            <stop offset="50%" stopColor="#C9A84C" />
                            <stop offset="100%" stopColor="#8C7530" />
                          </linearGradient>
                        </defs>
                        {/* Outer rim */}
                        <circle cx="32" cy="32" r="30" fill={`url(#clockRim${hour})`} />
                        {/* Inner face */}
                        <circle
                          cx="32"
                          cy="32"
                          r="25"
                          fill={`url(#clockFace${hour})`}
                          stroke="#1E3A5F"
                          strokeWidth="0.5"
                        />
                        {/* Hour ticks */}
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
                          const a = (i * 30 - 90) * (Math.PI / 180);
                          const x1 = 32 + Math.cos(a) * 22;
                          const y1 = 32 + Math.sin(a) * 22;
                          const x2 = 32 + Math.cos(a) * 25;
                          const y2 = 32 + Math.sin(a) * 25;
                          return (
                            <line
                              key={i}
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke="#1E3A5F"
                              strokeWidth={i % 3 === 0 ? 1.8 : 1}
                              strokeLinecap="round"
                            />
                          );
                        })}
                        {/* Minute hand pointing to 12 */}
                        <line
                          x1="32"
                          y1="32"
                          x2="32"
                          y2="14"
                          stroke="#C9A84C"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        {/* Hour hand */}
                        <line
                          x1="32"
                          y1="32"
                          x2={hx}
                          y2={hy}
                          stroke="#1E3A5F"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        {/* Center cap */}
                        <circle cx="32" cy="32" r="2.5" fill="#C9A84C" stroke="#8C7530" strokeWidth="0.5" />
                      </svg>
                      <div>
                        <h3 className="font-serif text-lg text-foreground font-semibold mb-1">{title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-muted-foreground mt-8">
                <Link
                  to="/how-the-process-works"
                  className="text-accent hover:text-gold underline underline-offset-4 transition-colors"
                >
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
              <h2 className="text-3xl text-[hsl(0_70%_30%)] font-semibold mb-8 text-center font-sans">Explore Further</h2>
              <div className="grid md:grid-cols-3 gap-5 items-stretch">
                <Link to="/terminology" className="card-3d-blue group block h-full no-underline">
                  <div className="card-3d-blue__inner h-full">
                    <div className="card-3d-blue__face p-6 flex flex-col h-full">
                      <img
                        src={iconTerminology}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        width="80"
                        height="80"
                        className="mb-4 shrink-0"
                        style={{ width: 80, height: 80, objectFit: "contain" }}
                      />
                      <h3 className="font-serif text-lg text-foreground font-semibold mb-2 group-hover:text-gold transition-colors">
                        Probate Terminology
                      </h3>
                      <p className="text-muted-foreground text-[15px] leading-relaxed mb-4">
                        Unfamiliar with terms like Letters Testamentary, Personal Representative, or Intestate? This plain-language glossary explains the most common probate terms.
                      </p>
                      <span className="mt-auto text-accent group-hover:text-gold text-sm font-medium transition-colors inline-flex items-center gap-1">
                        View the Glossary <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
                <Link to="/faq" className="card-3d-blue group block h-full no-underline">
                  <div className="card-3d-blue__inner h-full">
                    <div className="card-3d-blue__face p-6 flex flex-col h-full">
                      <img
                        src={iconCommonQuestions}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        width="80"
                        height="80"
                        className="mb-4 shrink-0"
                        style={{ width: 80, height: 80, objectFit: "contain" }}
                      />
                      <h3 className="font-serif text-lg text-foreground font-semibold mb-2 group-hover:text-gold transition-colors">
                        Common Questions
                      </h3>
                      <p className="text-muted-foreground text-[15px] leading-relaxed mb-4">
                        Answers to the questions executors and families ask most.
                      </p>
                      <span className="mt-auto text-accent group-hover:text-gold text-sm font-medium transition-colors inline-flex items-center gap-1">
                        Read FAQs <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
                <Link to="/how-the-process-works" className="card-3d-blue group block h-full no-underline">
                  <div className="card-3d-blue__inner h-full">
                    <div className="card-3d-blue__face p-6 flex flex-col h-full">
                      <img
                        src={iconHowProcessWorks}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        width="80"
                        height="80"
                        className="mb-4 shrink-0"
                        style={{ width: 80, height: 80, objectFit: "contain" }}
                      />
                      <h3 className="font-serif text-lg text-foreground font-semibold mb-2 group-hover:text-gold transition-colors">
                        How the Process Works
                      </h3>
                      <p className="text-muted-foreground text-[15px] leading-relaxed mb-4">
                        A clear walkthrough from assessment to closing.
                      </p>
                      <span className="mt-auto text-accent group-hover:text-gold text-sm font-medium transition-colors inline-flex items-center gap-1">
                        See the process <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
};

export default ProbateEstateSales;
