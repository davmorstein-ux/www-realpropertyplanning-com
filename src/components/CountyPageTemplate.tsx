import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

const COUNTY_ORDER = [
  { slug: "king-county",      path: "/king-county",      name: "King County" },
  { slug: "snohomish-county", path: "/snohomish-county", name: "Snohomish County" },
  { slug: "pierce-county",    path: "/pierce-county",    name: "Pierce County" },
  { slug: "kitsap-county",    path: "/kitsap-county",    name: "Kitsap County" },
  { slug: "skagit-county",    path: "/skagit-county",    name: "Skagit County" },
  { slug: "whatcom-county",   path: "/whatcom-county",   name: "Whatcom County" },
  { slug: "thurston-county",  path: "/thurston-county",  name: "Thurston County" },
  { slug: "clark-county",     path: "/clark-county",     name: "Clark County" },
  { slug: "spokane-county",   path: "/spokane-county",   name: "Spokane County" },
  { slug: "benton-county",    path: "/benton-county",    name: "Benton County" },
];

import mappin3d from "@/assets/real-estate-service-areas-mappin-washington.webp";
import heroIcon from "@/assets/icons/real-estate-service-areas-map-icon-washington.webp";
import bentonLogo from "@/assets/counties/benton-county-logo.webp";
import clarkLogo from "@/assets/counties/clark-county-logo.webp";
import kingLogo from "@/assets/counties/king-county-logo.webp";
import kitsapLogo from "@/assets/counties/kitsap-county-logo.webp";
import pierceLogo from "@/assets/counties/pierce-county-logo.webp";
import skagitLogo from "@/assets/counties/skagit-county-logo.webp";
import snohomishLogo from "@/assets/counties/snohomish-county-logo.webp";
import spokaneLogo from "@/assets/counties/spokane-county-logo.webp";
import thurstonLogo from "@/assets/counties/thurston-county-logo.webp";
import whatcomLogo from "@/assets/counties/whatcom-county-logo.webp";
import cowlitzLogo from "@/assets/counties/cowlitz-county-logo.webp";
import islandLogo from "@/assets/counties/island-county-logo.webp";
import jeffersonLogo from "@/assets/counties/jefferson-county-logo.webp";
import lewisLogo from "@/assets/counties/lewis-county-logo.webp";
import masonLogo from "@/assets/counties/mason-county-logo.webp";
import pacificLogo from "@/assets/counties/pacific-county-logo.webp";
import sanJuanLogo from "@/assets/counties/san-juan-county-logo.webp";
import skamaniаLogo from "@/assets/counties/skamania-county-logo.webp";
import wahkiakumLogo from "@/assets/counties/wahkiakum-county-logo.webp";
import graysHarborLogo from "@/assets/counties/grays-harbor-county-logo.webp";
import { services, counties } from "@/lib/service-areas-data";

type CountyVideo = {
  webm?: string;
  mp4?: string;
  poster?: string;
  uploadDate?: string;
};

const SITE_URL = "https://www.realpropertyplanning.com";

const COUNTY_WEBSITES: Record<string, string> = {
  "benton-county":    "https://www.co.benton.wa.us",
  "clark-county":     "https://www.clark.wa.gov",
  "king-county":      "https://kingcounty.gov",
  "kitsap-county":    "https://www.kitsapgov.com",
  "pierce-county":    "https://www.piercecountywa.gov",
  "skagit-county":    "https://www.skagitcounty.net",
  "snohomish-county": "https://snohomishcountywa.gov",
  "spokane-county":   "https://www.spokanecounty.org",
  "thurston-county":  "https://www.thurstoncountywa.gov",
  "whatcom-county":   "https://www.whatcomcounty.us",
  "cowlitz-county":      "https://www.co.cowlitz.wa.us",
  "grays-harbor-county": "https://www.graysharborcounty.net",
  "island-county":       "https://www.islandcountywa.gov",
  "jefferson-county":    "https://www.jeffersoncountywa.gov",
  "lewis-county":        "https://www.lewiscountywa.gov",
  "mason-county":        "https://www.masoncountywa.gov",
  "pacific-county":      "https://www.pacificcounty.org",
  "san-juan-county":     "https://www.sanjuanco.com",
  "skamania-county":     "https://www.skamaniacounty.org",
  "wahkiakum-county":    "https://www.wahkiakumcounty.org",
};

const COUNTY_VIDEOS: Record<string, CountyVideo> = {
  "snohomish-county": {
    webm: "/county-videos/snohomish-hero.webm?v=3",
    mp4: "/county-videos/snohomish-hero.mp4?v=3",
    poster: "/county-videos/snohomish-hero-poster.webp?v=3",
    uploadDate: "2025-04-10",
  },
  "king-county": {
    webm: "/county-videos/king-hero.webm?v=1",
    mp4: "/county-videos/king-hero.mp4?v=1",
    poster: "/county-videos/king-hero-poster.webp?v=1",
    uploadDate: "2025-04-12",
  },
  "kitsap-county": {
    webm: "/county-videos/kitsap-hero.webm?v=1",
    mp4: "/county-videos/kitsap-hero.mp4?v=1",
    poster: "/county-videos/kitsap-hero-poster.webp?v=1",
    uploadDate: "2025-04-15",
  },
  "island-county": {
    webm: "/county-videos/island-hero.webm?v=2",
    mp4: "/county-videos/island-hero.mp4?v=2",
    poster: "/county-videos/island-hero-poster.webp?v=2",
    uploadDate: "2026-04-18",
  },
  "whatcom-county": {
    webm: "/county-videos/whatcom-hero.webm?v=1",
    mp4: "/county-videos/whatcom-hero.mp4?v=1",
    poster: "/county-videos/whatcom-hero-poster.webp?v=1",
    uploadDate: "2025-04-17",
  },
  "pierce-county": {
    webm: "/county-videos/pierce-hero.webm?v=2",
    mp4: "/county-videos/pierce-hero.mp4?v=2",
    poster: "/county-videos/pierce-hero-poster.webp?v=2",
    uploadDate: "2025-04-17",
  },
};

const COUNTY_LOGOS: Record<string, string> = {
  "benton-county": bentonLogo,
  "clark-county": clarkLogo,
  "king-county": kingLogo,
  "kitsap-county": kitsapLogo,
  "pierce-county": pierceLogo,
  "skagit-county": skagitLogo,
  "snohomish-county": snohomishLogo,
  "spokane-county": spokaneLogo,
  "thurston-county": thurstonLogo,
  "whatcom-county": whatcomLogo,
  "cowlitz-county":     cowlitzLogo,
  "grays-harbor-county": graysHarborLogo,
  "island-county":      islandLogo,
  "jefferson-county":   jeffersonLogo,
  "lewis-county":       lewisLogo,
  "mason-county":       masonLogo,
  "pacific-county":     pacificLogo,
  "san-juan-county":    sanJuanLogo,
  "skamania-county":    skamaniаLogo,
  "wahkiakum-county":   wahkiakumLogo,
};

/** Neighboring-county relationships for inter-county SEO link equity */
const NEIGHBORING_COUNTIES: Record<string, { slug: string; name: string }[]> = {
  "king-county": [
    { slug: "snohomish-county", name: "Snohomish County" },
    { slug: "pierce-county", name: "Pierce County" },
    { slug: "kitsap-county", name: "Kitsap County" },
  ],
  "snohomish-county": [
    { slug: "king-county", name: "King County" },
    { slug: "skagit-county", name: "Skagit County" },
    { slug: "whatcom-county", name: "Whatcom County" },
  ],
  "pierce-county": [
    { slug: "king-county", name: "King County" },
    { slug: "kitsap-county", name: "Kitsap County" },
    { slug: "thurston-county", name: "Thurston County" },
  ],
  "kitsap-county": [
    { slug: "king-county", name: "King County" },
    { slug: "pierce-county", name: "Pierce County" },
    { slug: "thurston-county", name: "Thurston County" },
  ],
  "skagit-county": [
    { slug: "snohomish-county", name: "Snohomish County" },
    { slug: "whatcom-county", name: "Whatcom County" },
  ],
  "whatcom-county": [
    { slug: "skagit-county", name: "Skagit County" },
    { slug: "snohomish-county", name: "Snohomish County" },
  ],
  "thurston-county": [
    { slug: "pierce-county", name: "Pierce County" },
    { slug: "kitsap-county", name: "Kitsap County" },
  ],
  "clark-county": [
    { slug: "thurston-county", name: "Thurston County" },
  ],
  "spokane-county": [
    { slug: "benton-county", name: "Benton County" },
  ],
  "benton-county": [
    { slug: "spokane-county", name: "Spokane County" },
  ],
  "cowlitz-county": [
    { slug: "clark-county", name: "Clark County" },
    { slug: "wahkiakum-county", name: "Wahkiakum County" },
    { slug: "lewis-county", name: "Lewis County" },
    { slug: "skamania-county", name: "Skamania County" },
  ],
  "grays-harbor-county": [
    { slug: "mason-county", name: "Mason County" },
    { slug: "lewis-county", name: "Lewis County" },
    { slug: "pacific-county", name: "Pacific County" },
  ],
  "island-county": [
    { slug: "skagit-county", name: "Skagit County" },
    { slug: "snohomish-county", name: "Snohomish County" },
  ],
  "jefferson-county": [
    { slug: "clallam-county", name: "Clallam County" },
    { slug: "mason-county", name: "Mason County" },
    { slug: "kitsap-county", name: "Kitsap County" },
  ],
  "lewis-county": [
    { slug: "thurston-county", name: "Thurston County" },
    { slug: "grays-harbor-county", name: "Grays Harbor County" },
    { slug: "cowlitz-county", name: "Cowlitz County" },
    { slug: "pierce-county", name: "Pierce County" },
  ],
  "mason-county": [
    { slug: "kitsap-county", name: "Kitsap County" },
    { slug: "thurston-county", name: "Thurston County" },
    { slug: "grays-harbor-county", name: "Grays Harbor County" },
    { slug: "jefferson-county", name: "Jefferson County" },
  ],
  "pacific-county": [
    { slug: "grays-harbor-county", name: "Grays Harbor County" },
    { slug: "wahkiakum-county", name: "Wahkiakum County" },
    { slug: "cowlitz-county", name: "Cowlitz County" },
  ],
  "san-juan-county": [
    { slug: "skagit-county", name: "Skagit County" },
    { slug: "island-county", name: "Island County" },
  ],
  "skamania-county": [
    { slug: "clark-county", name: "Clark County" },
    { slug: "cowlitz-county", name: "Cowlitz County" },
  ],
  "wahkiakum-county": [
    { slug: "pacific-county", name: "Pacific County" },
    { slug: "cowlitz-county", name: "Cowlitz County" },
  ],
};

interface CountyPageProps {
  countyName: string;
  countyPath: string;
  countySlug: string;
  cities: string[];
  localParagraph?: string;
  localInsight?: string;
  typicalSituations?: string[];
  clientTypes?: string[];
  marketOverview?: string;
  whoIHelp?: string;
  whyCredentialsMatter?: string;
  countySpecificFaqs?: { question: string; answer: string }[];
  aeoQuestion?: string;
  aeoAnswer?: string;
  aeoSupportBullets?: string[];
  aeoSupportFaqs?: { question: string; answer: string }[];
  heroH1?: string;
  heroSubheading?: string;
  seoTitle?: string;
  seoDescription?: string;
  localExpertiseHeading?: string;
  localExpertiseBody?: string[];
  communitiesIntro?: string;
  closingCtaBody?: string[];
  belowHeroHeading?: string;
}

const CountyPageTemplate = ({
  countyName, countyPath, countySlug, cities,
  localInsight, countySpecificFaqs,
  aeoQuestion, aeoAnswer, aeoSupportBullets, aeoSupportFaqs,
  heroH1, heroSubheading, seoTitle, seoDescription,
  localExpertiseHeading, localExpertiseBody, communitiesIntro, closingCtaBody,
  belowHeroHeading,
}: CountyPageProps) => {
  const countyData = counties.find((c) => c.slug === countySlug);

  // Truly county-specific defaults — varied by county so the visible text differs
  // when no countySpecificFaqs are passed.
  const countySlugUpper = countySlug.charAt(0).toUpperCase() + countySlug.slice(1);
  const cityList = cities.slice(0, 3).join(", ");
  const defaultCountyFaqs = [
    {
      question: `Does Real Property Planning open ${countyName} probate listings before Letters are issued?`,
      answer: `No. The property cannot be marketed until the personal representative receives Letters Testamentary or Letters of Administration from the ${countyName} Superior Court. We do, however, use that waiting period for the date-of-death valuation walk-through, securing the home, lining up cleanout vendors, and preparing the marketing file — so the day Letters arrive, you are ready to list rather than starting from zero.`,
    },
    {
      question: `Is there anything specific to ${countyName} that affects how an estate property sells?`,
      answer: `Yes — buyer expectations, inspection norms, and condition tolerance vary noticeably across ${countySlugUpper} County's submarkets (${cityList}, and surrounding communities). Pricing built on a county-wide average will frequently miss in either direction. Each property here is evaluated on its own block and condition, not pulled off an automated estimate.`,
    },
    {
      question: `Can our team handle a ${countyName} estate sale if every heir lives out of state?`,
      answer: `Routinely. Out-of-state personal representatives are one of the most common situations in ${countyName}. Our team handles the in-person walk-through, vendor coordination, photo and video updates, showings, and offer review — so the heirs almost never need to travel to ${countyName} to close.`,
    },
  ];

  const faqs = countySpecificFaqs || defaultCountyFaqs;

  const video = COUNTY_VIDEOS[countySlug];
  const videoSchema = video
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: `Aerial View of ${countyName}, Washington`,
        description: `Scenic aerial footage of ${countyName}, Washington — context for probate, estate, and senior transition real estate services provided by Real Property Planning.`,
        thumbnailUrl: [`${SITE_URL}${(video.poster || "").split("?")[0]}`],
        contentUrl: `${SITE_URL}${(video.mp4 || video.webm || "").split("?")[0]}`,
        uploadDate: video.uploadDate || "2025-04-01",
      }
    : undefined;

  const navigate = useNavigate();
  const touchStartX = useRef<number | null>(null);
  const currentIndex = COUNTY_ORDER.findIndex((c) => c.slug === countySlug);
  const prevCounty = currentIndex >= 0
    ? COUNTY_ORDER[(currentIndex - 1 + COUNTY_ORDER.length) % COUNTY_ORDER.length]
    : null;
  const nextCounty = currentIndex >= 0
    ? COUNTY_ORDER[(currentIndex + 1) % COUNTY_ORDER.length]
    : null;

  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.innerWidth >= 768) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (window.innerWidth >= 768 || touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) < 50) return;
    if (deltaX < 0 && nextCounty) navigate(nextCounty.path);
    else if (deltaX > 0 && prevCounty) navigate(prevCounty.path);
  };

  return (
    <div
      className="min-h-screen bg-background"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <SEOHead
        title={seoTitle || `Probate Real Estate & Inherited Property Sales in ${countyName} | Real Property Planning`}
        description={seoDescription || `Probate real estate and inherited property sales guidance for executors, attorneys, and families in ${countyName}, Washington State.`}
        schemaJson={videoSchema}
      />
      <BreadcrumbSchema items={[
        { name: "Counties", url: "/counties" },
        { name: countyName, url: countyPath },
      ]} />
      <Header />
      <main id="main-content">

      {/* Hero — concise */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14 [&:has(>_.county-hero-video)]:pb-0">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex justify-center mb-4 md:mb-5">
              {COUNTY_LOGOS[countySlug] ? (
                COUNTY_WEBSITES[countySlug] ? (
                  <a
                    href={COUNTY_WEBSITES[countySlug]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit the official ${countyName}, Washington website`}
                    className="flex items-center justify-center rounded-full bg-[#F7F5F0] w-[120px] h-[120px] md:w-[180px] md:h-[180px] p-4 transition-transform duration-200 hover:scale-105"
                    style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                  >
                    <img
                      src={COUNTY_LOGOS[countySlug]}
                      alt={`${countyName}, Washington official seal — probate, estate, and senior transition real estate services`}
                      className="w-full h-full object-contain"
                      loading="eager"
                    />
                  </a>
                ) : (
                  <div
                    className="flex items-center justify-center rounded-full bg-[#F7F5F0] w-[120px] h-[120px] md:w-[180px] md:h-[180px] p-4"
                    style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                  >
                    <img
                      src={COUNTY_LOGOS[countySlug]}
                      alt={`${countyName}, Washington official seal — probate, estate, and senior transition real estate services`}
                      className="w-full h-full object-contain"
                      loading="eager"
                    />
                  </div>
                )
              ) : (
                <img src={heroIcon} alt="" aria-hidden="true" className="block w-full max-w-[15rem] h-auto object-contain" loading="lazy" />
              )}
            </div>
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
              {countyName}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold leading-tight mb-4">
              {heroH1 || `Estate & Inherited Property Sales in ${countyName}`}
            </h1>
            {heroSubheading && (
              <p className="text-xl text-primary-foreground/85 leading-relaxed font-serif italic">
                {heroSubheading}
              </p>
            )}
          </div>
        </div>

        {COUNTY_VIDEOS[countySlug] && (
          <div className="county-hero-video w-full mt-8">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1920 / 244" }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={COUNTY_VIDEOS[countySlug].poster}
                aria-label={`Aerial video showcasing ${countyName}, Washington`}
                className="absolute inset-0 w-full h-full object-cover"
              >
                {COUNTY_VIDEOS[countySlug].webm && (
                  <source src={COUNTY_VIDEOS[countySlug].webm} type="video/webm" />
                )}
                {COUNTY_VIDEOS[countySlug].mp4 && (
                  <source src={COUNTY_VIDEOS[countySlug].mp4} type="video/mp4" />
                )}
              </video>
            </div>
          </div>
        )}
      </section>

      {localInsight && (
        <section className="py-14 lg:py-18 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl text-foreground font-semibold mb-5">
                {belowHeroHeading || `Serving Every Corner of ${countyName}`}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {localInsight}
              </p>
            </div>
          </div>
        </section>
      )}

      <DirectAnswerBlock
        question={aeoQuestion || `How do probate and estate property sales work in ${countyName}?`}
        answer={aeoAnswer || `Real Property Planning provides experienced guidance for executors, trustees, attorneys, and families selling probate, inherited, and trust-held property in ${countyName}. Each property is carefully evaluated, and defensible pricing is provided based on licensed broker and certified appraiser expertise.`}
        supportBullets={aeoSupportBullets}
        supportFaqs={aeoSupportFaqs}
        supportSteps={!aeoSupportBullets && !aeoSupportFaqs ? [
          { label: "Evaluate", desc: "On-site property review and pricing analysis" },
          { label: "Prepare", desc: "Cleanout, repairs, and vendor coordination" },
          { label: "Sell", desc: "Marketing, negotiation, and closing" },
        ] : undefined}
      />

      <TrustStrip />

      {/* What we handle locally — narrative, not a duplicated services grid */}
      <section className="py-14 lg:py-18 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-foreground font-semibold mb-4">
              How a {countyName} Estate Sale Actually Runs
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              In {countyName}, most calls start one of three ways: a personal representative who has just received Letters and needs to know what to do with the house first, an attorney whose client is stuck on the property piece of the file, or an out-of-state heir who has not been inside the home in years. The first conversation is short and concrete — what the property is, who has authority, and what's already been touched.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              From there, the work usually includes a date-of-death walk-through with{" "}
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">appraisal-grade pricing analysis</Link>, securing the home and coordinating cleanout, a written prep plan that matches what {countyName} buyers actually expect on this kind of property, and a clean handoff into listing,{" "}
              <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">offer review</Link>, and closing. If you're earlier than that — still figuring out what you've inherited — start with the{" "}
              <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold underline underline-offset-4">inherited house guide</Link>.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {services.slice(0, 6).map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="text-accent hover:text-gold underline underline-offset-4">
                  {service.shortName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise — optional */}
      {localExpertiseHeading && localExpertiseBody && (
        <section className="py-14 lg:py-18 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl text-foreground font-semibold mb-5">
                {localExpertiseHeading}
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                {localExpertiseBody.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Communities Served */}
      <section className="py-14 lg:py-18 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-foreground font-semibold mb-5">
              Communities in {countyName}
            </h2>
            {communitiesIntro && (
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">{communitiesIntro}</p>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2.5">
              {cities.map((cityName) => {
                const cityData = countyData?.cities.find((c) => c.name === cityName);
                if (cityData) {
                  return (
                    <Link key={cityName} to={`/cities/${cityData.slug}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                      <img src={mappin3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0"  loading="lazy"/>
                      <span className="text-foreground hover:text-gold transition-colors text-sm">{cityName}</span>
                    </Link>
                  );
                }
                return (
                  <div key={cityName} className="flex items-center gap-2">
                    <img src={mappin3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0"  loading="lazy"/>
                    <span className="text-muted-foreground text-sm">{cityName}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — short */}
      <PageFAQ faqs={faqs} heading={`${countyName} FAQ`} />

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-primary-foreground font-semibold mb-4">
              Ready to Talk About a {countyName} Property?
            </h2>
            {closingCtaBody ? (
              closingCtaBody.map((p, i) => (
                <p key={i} className="text-primary-foreground/70 text-lg mb-4 leading-relaxed">{p}</p>
              ))
            ) : (
              <p className="text-primary-foreground/70 text-lg mb-6">
                Our team can walk you through your situation and help you see what makes sense.
              </p>
            )}
            <Link to="/contact">
              <Button variant="gold" size="lg">Start a Conversation</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-10 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            {countyData && countyData.cities.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">{countyName} Cities</p>
                <div className="flex flex-wrap gap-2">
                  {countyData.cities.map((c, i) => (
                    <span key={c.slug}>
                      {i > 0 && <span className="text-muted-foreground/40 mr-2">·</span>}
                      <Link to={`/cities/${c.slug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{c.name}</Link>
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">Guides</p>
              <div className="flex flex-wrap gap-2">
                <Link to="/guides/how-probate-real-estate-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How Probate Works</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/guides/what-executors-should-do" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">First Steps for Executors</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Inherited House Guide</Link>
              </div>
            </div>
            {NEIGHBORING_COUNTIES[countySlug] && NEIGHBORING_COUNTIES[countySlug].length > 0 && (
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Neighboring Counties</p>
                <div className="flex flex-wrap gap-2">
                  {NEIGHBORING_COUNTIES[countySlug].map((c, i) => (
                    <span key={c.slug}>
                      {i > 0 && <span className="text-muted-foreground/40 mr-2">·</span>}
                      <Link to={`/${c.slug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{c.name}</Link>
                    </span>
                  ))}
                  <span className="text-muted-foreground/40">·</span>
                  <Link to="/counties" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">All Washington counties</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {prevCounty && nextCounty && (
        <nav
          aria-label="County navigation"
          className="md:hidden border-t border-border bg-background px-6 py-5"
        >
          <p className="text-xs text-muted-foreground/80 text-center mb-3 italic">
            Swipe left or right to explore nearby counties
          </p>
          <div className="flex items-center justify-between gap-4">
            <Link
              to={prevCounty.path}
              className="flex items-center gap-1 text-accent hover:text-gold transition-colors text-sm font-medium"
            >
              <span aria-hidden="true">←</span>
              <span>{prevCounty.name}</span>
            </Link>
            <Link
              to={nextCounty.path}
              className="flex items-center gap-1 text-accent hover:text-gold transition-colors text-sm font-medium"
            >
              <span>{nextCounty.name}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      )}

      <RelatedServices currentPath={countyPath} />
      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default CountyPageTemplate;
