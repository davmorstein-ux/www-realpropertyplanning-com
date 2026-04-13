import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const sectionBase = "py-14 md:py-20";
const contentWrap = "container px-6 lg:px-8";
const proseWrap = "max-w-3xl mx-auto";
const h2Class = "font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6";
const pClass = "text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-5 last:mb-0";

const communities = [
  "Tacoma", "Puyallup", "Lakewood", "Gig Harbor", "Bonney Lake", "Sumner",
  "Auburn", "Orting", "Eatonville", "Graham", "Spanaway", "University Place",
  "Fircrest", "Milton", "Edgewood", "Buckley", "Enumclaw", "South Prairie",
  "Carbonado", "Wilkeson",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Real Property Planning — Pierce County",
  description: "Probate, estate, and senior transition real estate services in Pierce County, Washington.",
  url: "https://www.realpropertyplanning.com/service-areas/pierce-county",
  telephone: "+1-206-900-3015",
  areaServed: { "@type": "AdministrativeArea", name: "Pierce County, Washington" },
};

const PierceCountyServiceArea = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Probate, Estate & Senior Transition Real Estate in Pierce County, WA | Real Property Planning"
      description="Serving families, executors, and seniors throughout Pierce County — Tacoma, Puyallup, Lakewood, Gig Harbor, Bonney Lake, Sumner, and surrounding areas. Probate sales, certified appraisals, and senior transitions."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Service Areas", url: "/counties" },
      { name: "Pierce County", url: "/service-areas/pierce-county" },
    ]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Pierce County, Washington</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Probate, Estate & Senior Transition Real Estate in Pierce County, Washington
          </h1>
          <p className="text-xl md:text-[22px] text-primary-foreground/80 leading-[1.75] mb-5">
            Real Property Planning serves families, executors, attorneys, and seniors throughout Pierce County with certified appraisals, probate real estate sales, and senior housing transition guidance.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/70 leading-[1.75] mb-8">
            Whether you are managing an inherited property in Tacoma, helping a parent transition in Gig Harbor, or settling an estate in Puyallup — we are here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-gold-dark transition-colors min-h-[52px]"
          >
            Talk to Us About Your Pierce County Property
          </Link>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* Communities */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className="max-w-4xl mx-auto">
          <h2 className={h2Class}>Communities We Serve in Pierce County</h2>
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
          <h2 className={h2Class}>Probate & Estate Real Estate in Pierce County</h2>
          <p className={pClass}>
            Pierce County families managing inherited property or probate real estate need a professional who understands both the legal process and the local market.
          </p>
          <p className={pClass}>
            We provide certified appraisals and experienced brokerage services to help estates move forward efficiently and fairly.
          </p>
        </div>
      </div>
    </section>

    {/* Certified Appraisals */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Certified Appraisals in Pierce County</h2>
          <p className={pClass}>
            We provide Washington State certified residential appraisals throughout Pierce County for probate proceedings, estate settlements, trust administration, and senior transition planning.
          </p>
          <p className={pClass}>
            Every report is court-acceptable and delivered with the precision that legal and financial proceedings require.
          </p>
        </div>
      </div>
    </section>

    {/* Senior Transitions */}
    <section className={`${sectionBase} bg-secondary`}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Senior Transitions in Pierce County</h2>
          <p className={pClass}>
            From Tacoma to Gig Harbor, Pierce County families rely on us to help aging parents navigate the move from a longtime family home to a senior or assisted living community.
          </p>
          <p className={pClass}>
            We handle the real estate side with care and coordination so families can focus on their loved ones.
          </p>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 md:py-24 bg-warm-bg">
      <div className={contentWrap}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
            Have a Pierce County Property to Discuss?
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

    <RelatedServices currentPath="/service-areas/pierce-county" />
    <DisclaimerSection />

    </main>
    <Footer />
  </div>
);

export default PierceCountyServiceArea;
