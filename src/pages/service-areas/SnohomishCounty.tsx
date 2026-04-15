import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import heroIcon from "@/assets/icons/real-estate-service-areas-map-icon-washington.webp";

const sectionBase = "py-14 md:py-20";
const contentWrap = "container px-6 lg:px-8";
const proseWrap = "max-w-3xl mx-auto";
const h2Class = "font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6";
const pClass = "text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-5 last:mb-0";

const communities = [
  "Everett", "Lynnwood", "Marysville", "Bothell", "Edmonds", "Mukilteo",
  "Monroe", "Snohomish", "Mill Creek", "Mountlake Terrace", "Shoreline",
  "Kenmore", "Arlington", "Stanwood", "Lake Stevens", "Granite Falls",
  "Index", "Sultan", "Gold Bar", "Darrington", "Brier", "Woodway",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Real Property Planning — Snohomish County",
  description: "Probate, estate, and senior transition real estate services in Snohomish County, Washington.",
  url: "https://www.realpropertyplanning.com/service-areas/snohomish-county",
  telephone: "+1-206-900-3015",
  areaServed: { "@type": "AdministrativeArea", name: "Snohomish County, Washington" },
};

const SnohomishCountyServiceArea = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Probate, Estate & Senior Transition Real Estate in Snohomish County, WA | Real Property Planning"
      description="Serving families, executors, and seniors throughout Snohomish County — Everett, Lynnwood, Marysville, Bothell, Edmonds, Mukilteo, Monroe, and surrounding areas. Probate sales, certified appraisals, and senior transitions."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Service Areas", url: "/counties" },
      { name: "Snohomish County", url: "/service-areas/snohomish-county" },
    ]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img src={heroIcon} alt="" aria-hidden="true" className="block w-full max-w-[15rem] h-auto object-contain" loading="lazy" />
            </div>

          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Snohomish County, Washington</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Probate, Estate & Senior Transition Real Estate in Snohomish County, Washington
          </h1>
          <p className="text-xl md:text-[22px] text-primary-foreground/80 leading-[1.75] mb-5">
            Real Property Planning serves families, executors, attorneys, and seniors throughout Snohomish County with certified appraisals, probate real estate sales, and senior housing transition guidance.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/70 leading-[1.75] mb-3">
            Whether you are managing an inherited property in Everett, helping a parent downsize in Edmonds, or settling an estate in Marysville — we are here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-gold-dark transition-colors min-h-[52px]"
          >
            Talk to Us About Your Snohomish County Property
          </Link>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* Communities */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className="max-w-4xl mx-auto">
          <h2 className={h2Class}>Communities We Serve in Snohomish County</h2>
          <div className="flex flex-wrap gap-2.5">
            {communities.map((city) => (
              <span key={city} className="inline-block px-4 py-2 rounded-full text-[15px] md:text-base font-medium text-foreground bg-secondary border border-border">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Probate & Estate */}
    <section className={`${sectionBase} bg-secondary`}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Probate & Estate Real Estate in Snohomish County</h2>
          <p className={pClass}>
            When a family member passes away owning property in Snohomish County, navigating the probate process requires both real estate expertise and an understanding of the legal requirements.
          </p>
          <p className={pClass}>
            We work alongside families and their attorneys to manage the property, establish fair market value through certified appraisal, and coordinate a smooth sale.
          </p>
        </div>
      </div>
    </section>

    {/* Certified Appraisals */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Certified Appraisals in Snohomish County</h2>
          <p className={pClass}>
            As a Washington State Certified Residential Appraiser (WA #1702080), we provide court-acceptable appraisal reports for residential properties throughout Snohomish County — for probate proceedings, estate tax filings, trust administration, and senior transition planning.
          </p>
        </div>
      </div>
    </section>

    {/* Senior Transitions */}
    <section className={`${sectionBase} bg-secondary`}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Senior Transitions in Snohomish County</h2>
          <p className={pClass}>
            Helping a parent or grandparent leave their Snohomish County home is one of the most significant transitions a family will face.
          </p>
          <p className={pClass}>
            We provide calm, experienced guidance through every step — from establishing the home's value to coordinating the sale alongside the move to a new living situation.
          </p>
        </div>
      </div>
    </section>

    {/* Executors and Attorneys */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Serving Executors and Attorneys in Snohomish County</h2>
          <p className={pClass}>
            We work regularly with probate and elder law attorneys throughout Snohomish County, providing the appraisal reports and real estate expertise that estate proceedings require.
          </p>
          <p className={pClass}>
            We communicate clearly, meet deadlines, and understand what legal professionals need from a real estate partner.
          </p>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 md:py-24 bg-warm-bg">
      <div className={contentWrap}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
            Have a Snohomish County Property to Discuss?
          </h2>
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-10 max-w-2xl mx-auto">
            A short conversation is usually the fastest way to get clarity. No obligation — just practical guidance about your situation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+12069003015"
              className="inline-flex items-center justify-center gap-2.5 rounded-md bg-gold px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-gold-dark transition-colors min-h-[52px]"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call (206) 900-3015
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border-2 border-gold px-8 py-3.5 text-base font-semibold text-gold shadow-sm hover:bg-gold/10 transition-colors min-h-[52px]"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/service-areas/snohomish-county" />
    <DisclaimerSection />

    </main>
    <Footer />
  </div>
);

export default SnohomishCountyServiceArea;
