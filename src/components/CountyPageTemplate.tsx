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
import { Link } from "react-router-dom";

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
import { services, counties } from "@/lib/service-areas-data";

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
}

const CountyPageTemplate = ({
  countyName, countyPath, countySlug, cities,
  localInsight, countySpecificFaqs,
  aeoQuestion, aeoAnswer, aeoSupportBullets, aeoSupportFaqs,
  heroH1, heroSubheading, seoTitle, seoDescription,
  localExpertiseHeading, localExpertiseBody, communitiesIntro, closingCtaBody,
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

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={seoTitle || `Probate Real Estate & Inherited Property Sales in ${countyName} | Real Property Planning`}
        description={seoDescription || `Probate real estate and inherited property sales guidance for executors, attorneys, and families in ${countyName}, Washington State.`}
      />
      <BreadcrumbSchema items={[
        { name: "Counties", url: "/counties" },
        { name: countyName, url: countyPath },
      ]} />
      <Header />
      <main id="main-content">

      {/* Hero — concise */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img src={heroIcon} alt="" aria-hidden="true" className="block w-full max-w-[15rem] h-auto object-contain" loading="lazy" />
            </div>
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
              {countyName}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold leading-tight mb-4">
              {heroH1 || `Estate & Inherited Property Sales in ${countyName}`}
            </h1>
            {heroSubheading && (
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4 font-serif italic">
                {heroSubheading}
              </p>
            )}
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {localInsight || `Licensed broker and certified appraiser guidance for probate, estate, and senior property transitions in ${countyName}.`}
            </p>
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

      <RelatedServices currentPath={countyPath} />
      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default CountyPageTemplate;
