// accordion removed — replaced with static card grid
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import attorneysTileImg from "@/assets/legal/attorneys-tile.webp";

import HeroBandTitle from "@/components/HeroBandTitle";

const tileMeta = [
  { key: "moveManagers", image: "/tiles/set1/senior-move-managers-tile.webp", href: "/senior-move-managers" },
  { key: "livingAdvisors", image: "/tiles/set1/senior-living-advisors-tile.webp", href: "/senior-living-advisors" },
  { key: "estateSale", image: "/tiles/set1/estate-liquidators-tile.webp?v=20260602b", href: "/estate-liquidation" },
  { key: "broker", image: "/tiles/set1/real-estate-brokers-tile.webp?v=20260602b", href: "/realtor" },
  { key: "appraiser", image: "/tiles/set1/real-estate-appraisers-tile.webp", href: "/real-estate-appraiser" },
  { key: "attorneys", image: attorneysTileImg, href: "/for-attorneys" },
  { key: "medicare", image: "/tiles/set1/medicare-providers-tile.webp", href: "/medicare-providers" },
  { key: "financial", image: "/tiles/set1/financial-planners-tile.webp", href: "/for-financial-planners" },
] as const;

const SeniorTransitions = () => {
  const { t } = useTranslation();
  const jsonLd = articleSchema({
    headline: t("seniorTransitions.seo.jsonLdHeadline"),
    description: t("seniorTransitions.seo.jsonLdDescription"),
    url: "/senior-transitions",
    datePublished: "2025-01-15",
    dateModified: "2026-04-14",
    about: ["Senior transitions", "Downsizing", "Assisted living", "Senior home sales", "Family housing decisions"],
  });
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t("seniorTransitions.seo.title")}
        description={t("seniorTransitions.seo.description")}
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Senior Transitions", url: "/senior-transitions" }]} />
      <Header />
      <main id="main-content">
        <HeroBandTitle as="h1">{t("seniorTransitions.heroTitle")}</HeroBandTitle>

        <DirectAnswerBlock
          question={t("seniorTransitions.directAnswer.question")}
          answer={t("seniorTransitions.directAnswer.answer")}
          supportBullets={[
            t("seniorTransitions.directAnswer.bullet1"),
            t("seniorTransitions.directAnswer.bullet2"),
            t("seniorTransitions.directAnswer.bullet3"),
          ]}
          ctaLabel={t("seniorTransitions.directAnswer.ctaLabel")}
          ctaHref="/contact"
        />

        {/* What Goes Into a Senior Transition */}
        <section className="py-20 lg:py-28 bg-background border-b border-border">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                {t("seniorTransitions.whatGoesInto.heading")}
              </h2>
              <p className="text-foreground text-lg leading-[1.7]">
                {t("seniorTransitions.whatGoesInto.body")}
              </p>
            </div>
          </div>
        </section>

        {/* Who Helps With a Senior Transition */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-10 text-center">
                {t("seniorTransitions.whoHelps.heading")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-stretch">
                {tileMeta.map((s) => {
                  const title = t(`seniorTransitions.whoHelps.${s.key}.title`);
                  const description = t(`seniorTransitions.whoHelps.${s.key}.description`);
                  const alt = t(`seniorTransitions.whoHelps.${s.key}.alt`);
                  const cta = t(`seniorTransitions.whoHelps.${s.key}.cta`);
                  return (
                  <Link
                    key={s.key}
                    to={s.href}
                    aria-label={`${title} — ${description} — ${cta}`}
                    className="interior-tile interior-tile--guide tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  >
                    <div className="tile-white__inner h-full relative w-full">
                      <div className="tile-white__face h-full">
                        <div className="overflow-hidden">
                          <img
                            src={s.image}
                            alt={alt}
                            className="float-left w-[110px] sm:w-[140px] mr-5 mb-3 rounded-md object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            style={{ aspectRatio: "1 / 1" }}
                            loading="lazy"
                            sizes="100vw"
                            decoding="async"
                          />
                          <h3 className="font-serif text-[20px] md:text-[22px] font-semibold text-navy leading-snug mb-2">
                            {title}
                          </h3>
                          <p className="text-foreground text-[15px] leading-relaxed mb-4">{description}</p>
                          <span className="gold-cta clear-left inline-flex">
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
                  </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Not Sure Where to Start */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">{t("seniorTransitions.notSure.heading")}</h2>
              <p className="text-foreground text-lg leading-[1.7] mb-8">
                {t("seniorTransitions.notSure.body")}
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  <img
                    src={iconPhone3d}
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 mr-2 object-contain shrink-0"
                    loading="lazy"
                    sizes="100vw"
                    decoding="async"
                    width={1024}
                    height={1536}
                  />
                  {t("seniorTransitions.notSure.button")}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <PageFAQ
          id="senior-transitions"
          eyebrow={t("seniorTransitions.faq.eyebrow")}
          heading={t("seniorTransitions.faq.heading")}
          faqs={[
            {
              question: t("seniorTransitions.faq.q1.question"),
              answer: t("seniorTransitions.faq.q1.answer"),
            },
            {
              question: t("seniorTransitions.faq.q2.question"),
              answer: t("seniorTransitions.faq.q2.answer"),
            },
            {
              question: t("seniorTransitions.faq.q3.question"),
              answer: t("seniorTransitions.faq.q3.answer"),
            },
            {
              question: t("seniorTransitions.faq.q4.question"),
              answer: t("seniorTransitions.faq.q4.answer"),
            },
            {
              question: t("seniorTransitions.faq.q5.question"),
              answer: t("seniorTransitions.faq.q5.answer"),
            },
          ]}
        />

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default SeniorTransitions;
