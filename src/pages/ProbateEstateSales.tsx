import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";
import PageFAQ from "@/components/PageFAQ";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

// ── Data ── (images, hrefs — text pulled via t() in the component)

const whatMakesDifferentMeta = [
  { key: "legalAuthority", image: "/tiles/set2/the-probate-process.webp", href: "/terminology" },
  { key: "decisionMakers", image: "/tiles/set2/executors.webp", href: "/executors" },
  { key: "propertyCondition", image: "/tiles/set2/probate-estate-sales.webp?v=20260602b", href: "/how-the-process-works" },
  { key: "honestPricing", image: "/tiles/set1/real-estate-appraisers.webp", href: "/why-valuation-matters" },
  { key: "emotionalComplexity", image: "/tiles/set2/trustees.webp", href: "/client-stories" },
  { key: "preparationStrategy", image: "/tiles/set3/home-values-pricing.webp", href: "/how-the-process-works" },
] as const;

const comparisonMeta = [
  { key: "probate", image: "/tiles/set2/probate-property-real.webp", href: "/terminology" },
  { key: "inherited", image: "/tiles/set2/inherited-property-real.webp", href: "/guides/inherited-house-washington" },
] as const;

const ProbateEstateSales = () => {
  const { t } = useTranslation();
  const jsonLd = articleSchema({
    headline: t("probateEstateSales.seo.jsonLdHeadline"),
    description: t("probateEstateSales.seo.jsonLdDescription"),
    url: "/probate-estate-sales",
    datePublished: "2025-01-15",
    dateModified: "2026-05-05",
    about: ["Probate real estate", "Estate sales", "Inherited property", "Court-supervised sales", "Fiduciary duties"],
  });
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t("probateEstateSales.seo.title")}
        description={t("probateEstateSales.seo.description")}
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Probate & Estate Sales", url: "/probate-estate-sales" }]} />
      <Header />
      <main id="main-content">
        {/* SECTION 1 — Hero */}
        <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
<HeroBandTitle as="h1">{t("probateEstateSales.heroTitle")}</HeroBandTitle>
        </section>

        <DirectAnswerBlock
          question={t("probateEstateSales.directAnswer.question")}
          answer={t("probateEstateSales.directAnswer.answer")}
          supportSteps={[
            {
              label: t("probateEstateSales.directAnswer.step1Label"),
              desc: t("probateEstateSales.directAnswer.step1Desc"),
            },
            {
              label: t("probateEstateSales.directAnswer.step2Label"),
              desc: t("probateEstateSales.directAnswer.step2Desc"),
            },
            {
              label: t("probateEstateSales.directAnswer.step3Label"),
              desc: t("probateEstateSales.directAnswer.step3Desc"),
            },
          ]}
          ctaLabel={t("probateEstateSales.directAnswer.ctaLabel")}
          ctaHref="/contact"
        />

        {/* SECTION 2 — Probate vs. Inherited (two tiles, no accordions) */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl text-[hsl(0_70%_30%)] font-semibold mb-4 font-sans text-center">
                {t("probateEstateSales.comparison.heading1")}
                <br />
                {" "}
                {t("probateEstateSales.comparison.heading2")}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">​</p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, auto)",
                  columnGap: "8px",
                  rowGap: "16px",
                  width: "fit-content",
                  margin: "0 auto",
                  alignItems: "stretch",
                }}
              >
                {comparisonMeta.map((s) => {
                  const title = t(`probateEstateSales.comparison.${s.key}.title`);
                  const description = t(`probateEstateSales.comparison.${s.key}.description`);
                  const alt = t(`probateEstateSales.comparison.${s.key}.alt`);
                  const cta = t("probateEstateSales.comparison.learnMore");
                  return (
                  <Link
                    key={s.href}
                    to={s.href}
                    aria-label={`${title} — ${description} — ${cta}`}
                    className="interior-tile tile-white probate-wide-tile group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                    style={{ width: "380px" }}
                  >
                    <div className="tile-white__inner h-full relative">
                      <div className="tile-white__face h-full">
                        <div className="flex h-full flex-col">
                          <div
                            className="relative w-full overflow-hidden bg-transparent flex items-center justify-center"
                            style={{ aspectRatio: "500 / 420" }}
                          >
                            <img
                              src={s.image}
                              alt={alt}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                              loading="lazy"
                              sizes="100vw"
                              decoding="async"
                            />
                          </div>
                          <div className="relative flex flex-1 flex-col items-center text-center overflow-hidden p-5 md:p-6">
                            <h3
                              className="font-serif text-[19px] md:text-[22px] font-semibold text-navy mb-2 flex items-start justify-center"
                              style={{ lineHeight: 1.3 }}
                            >
                              {title}
                            </h3>
                            <p
                              className="text-foreground text-[15px] md:text-[16px] mb-3 flex items-start justify-center"
                              style={{ lineHeight: 1.5 }}
                            >
                              {description}
                            </p>
                            <span className="gold-cta mt-auto">
                              {cta}
                              <svg
                                viewBox="0 0 24 24"
                                width="14"
                                height="14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <polyline points="9 18 15 12 9 6" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — What Makes Estate Sales Different (icon tile grid) */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl text-[hsl(0_70%_30%)] font-semibold mb-4 text-center font-sans">
                {t("probateEstateSales.whatMakesDifferent.heading")}
              </h2>
              <p className="text-muted-foreground text-[17px] leading-[1.85] mb-10">
                {t("probateEstateSales.whatMakesDifferent.intro")}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, auto)",
                  rowGap: "16px",
                  columnGap: "8px",
                  width: "fit-content",
                  margin: "0 auto",
                  alignItems: "stretch",
                }}
              >
                {whatMakesDifferentMeta.map((s) => {
                  const title = t(`probateEstateSales.whatMakesDifferent.${s.key}.title`);
                  const description = t(`probateEstateSales.whatMakesDifferent.${s.key}.description`);
                  const cta = t("probateEstateSales.comparison.learnMore");
                  return (
                  <Link
                    key={s.key}
                    to={s.href}
                    aria-label={`${title} — ${description} — ${cta}`}
                    className="interior-tile tile-white probate-wide-tile group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                    style={{ width: "380px" }}
                  >
                    <div className="tile-white__inner h-full relative" style={{ minHeight: "unset" }}>
                      <div className="tile-white__face h-full" style={{ minHeight: "unset" }}>
                        <div className="flex h-full flex-col">
                          <div
                            className="relative flex flex-1 flex-col items-center text-center overflow-hidden"
                            style={{ padding: "16px 16px 12px 16px", paddingTop: "20px" }}
                          >
                            <h3
                              className="font-serif text-[22px] md:text-[24px] font-semibold text-navy leading-snug flex items-start justify-center"
                              style={{ display: "flex", alignItems: "flex-start", marginBottom: "8px" }}
                            >
                              {title}
                            </h3>
                            <p className="text-foreground text-[14px] leading-relaxed mb-6 flex items-start justify-center">
                              {description}
                            </p>
                            <span className="gold-cta mt-auto">
                              {cta}
                              <svg
                                viewBox="0 0 24 24"
                                width="14"
                                height="14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <polyline points="9 18 15 12 9 6" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .probate-wide-tile {
            max-width: 380px !important;
            min-width: 320px !important;
          }
        `}</style>

        {/* SECTION 4 — 3-Step Timeline */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl text-[hsl(0_70%_30%)] font-semibold mb-8 text-center font-sans">
                {t("probateEstateSales.timeline.heading")}
              </h2>
              <div className="space-y-5">
                {[
                  {
                    hour: 1,
                    title: t("probateEstateSales.timeline.step1Title"),
                    desc: t("probateEstateSales.timeline.step1Desc"),
                  },
                  {
                    hour: 2,
                    title: t("probateEstateSales.timeline.step2Title"),
                    desc: t("probateEstateSales.timeline.step2Desc"),
                  },
                  {
                    hour: 3,
                    title: t("probateEstateSales.timeline.step3Title"),
                    desc: t("probateEstateSales.timeline.step3Desc"),
                  },
                ].map(({ hour, title, desc }) => {
                  const angle = hour * 30; // degrees from 12
                  const rad = (angle - 90) * (Math.PI / 180);
                  const cx = 32,
                    cy = 32,
                    len = 14;
                  const hx = cx + Math.cos(rad) * len;
                  const hy = cy + Math.sin(rad) * len;
                  const rimColors = [
                    { light: "#dd888f", mid: "#c24752", dark: "#86272f" }, // burgundy
                    { light: "#88ddb2", mid: "#47c285", dark: "#278657" }, // forest green
                    { light: "#88b2dd", mid: "#4785c2", dark: "#275786" }, // steel blue
                  ][hour - 1];
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
                            <stop offset="100%" stopColor="#edced0" />
                          </radialGradient>
                          <linearGradient id={`clockRim${hour}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={rimColors.light} />
                            <stop offset="50%" stopColor={rimColors.mid} />
                            <stop offset="100%" stopColor={rimColors.dark} />
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
                          stroke="#463f37"
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
                              stroke="#463f37"
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
                          stroke={rimColors.mid}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        {/* Hour hand */}
                        <line
                          x1="32"
                          y1="32"
                          x2={hx}
                          y2={hy}
                          stroke="#463f37"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        {/* Center cap */}
                        <circle cx="32" cy="32" r="2.5" fill="#c3525c" stroke="#87353b" strokeWidth="0.5" />
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
                  {t("probateEstateSales.timeline.seeFullProcess")}
                </Link>
              </p>
            </div>
          </div>
        </section>

        <PageFAQ
          id="probate-estate-sales"
          eyebrow={t("probateEstateSales.faq.eyebrow")}
          heading={t("probateEstateSales.faq.heading")}
          faqs={[
            {
              question: t("probateEstateSales.faq.q1.question"),
              answer: t("probateEstateSales.faq.q1.answer"),
            },
            {
              question: t("probateEstateSales.faq.q2.question"),
              answer: t("probateEstateSales.faq.q2.answer"),
            },
            {
              question: t("probateEstateSales.faq.q3.question"),
              answer: t("probateEstateSales.faq.q3.answer"),
            },
            {
              question: t("probateEstateSales.faq.q4.question"),
              answer: t("probateEstateSales.faq.q4.answer"),
            },
            {
              question: t("probateEstateSales.faq.q5.question"),
              answer: t("probateEstateSales.faq.q5.answer"),
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ProbateEstateSales;
