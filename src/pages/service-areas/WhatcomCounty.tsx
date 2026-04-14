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
  "Bellingham", "Ferndale", "Lynden", "Blaine", "Birch Bay", "Sumas",
  "Everson", "Nooksack", "Sudden Valley", "Lummi Island", "Point Roberts",
  "Acme", "Deming", "Kendall", "Maple Falls", "Glacier",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Real Property Planning — Whatcom County",
  description: "Probate, estate, and senior transition real estate services in Whatcom County, Washington.",
  url: "https://www.realpropertyplanning.com/service-areas/whatcom-county",
  telephone: "+1-206-900-3015",
  areaServed: { "@type": "AdministrativeArea", name: "Whatcom County, Washington" },
};

const WhatcomCountyServiceArea = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Probate, Estate & Senior Transition Real Estate in Whatcom County, WA | Real Property Planning"
      description="Serving families, executors, and seniors throughout Whatcom County — Bellingham, Ferndale, Lynden, Blaine, Birch Bay, Sumas, and surrounding areas. Probate sales, certified appraisals, and senior transitions."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Service Areas", url: "/counties" },
      { name: "Whatcom County", url: "/service-areas/whatcom-county" },
    ]} />
    <Header />
    <main id="main-content">

    <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Whatcom County, Washington</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Probate, Estate & Senior Transition Real Estate in Whatcom County, Washington
          </h1>
          <p className="text-xl md:text-[22px] text-primary-foreground/80 leading-[1.75] mb-5">
            Real Property Planning serves families, executors, attorneys, and seniors throughout Whatcom County with certified appraisals, probate real estate sales, and senior housing transition guidance.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/70 leading-[1.75] mb-3">
            Whether you are managing an inherited property in Bellingham, helping a parent transition in Ferndale, or settling an estate in Lynden — we are here to help.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-gold-dark transition-colors min-h-[52px]">
            Talk to Us About Your Whatcom County Property
          </Link>
        </div>
      </div>
    </section>

    <TrustStrip />

    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className="max-w-4xl mx-auto">
          <h2 className={h2Class}>Communities We Serve in Whatcom County</h2>
          <div className="flex flex-wrap gap-2.5">
            {communities.map((city) => (
              <span key={city} className="inline-block px-4 py-2 rounded-full text-[15px] md:text-base font-medium text-foreground bg-secondary border border-border">{city}</span>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className={`${sectionBase} bg-secondary`}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Probate & Estate Real Estate in Whatcom County</h2>
          <p className={pClass}>Whatcom County families managing inherited property or probate real estate need a professional who understands the northern Washington market and Washington State probate requirements.</p>
          <p className={pClass}>We provide certified appraisals and experienced real estate brokerage from Bellingham to the Canadian border.</p>
        </div>
      </div>
    </section>

    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Certified Appraisals in Whatcom County</h2>
          <p className={pClass}>We provide Washington State certified residential appraisals throughout Whatcom County for probate proceedings, estate settlements, trust administration, and senior transition planning.</p>
          <p className={pClass}>Every report is court-acceptable and prepared to the highest professional standard.</p>
        </div>
      </div>
    </section>

    <section className={`${sectionBase} bg-secondary`}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Senior Transitions in Whatcom County</h2>
          <p className={pClass}>From Bellingham's vibrant senior community to the rural landscapes of eastern Whatcom County, we help families navigate the real estate side of a senior housing transition with care, local knowledge, and clear guidance at every step.</p>
        </div>
      </div>
    </section>

    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Serving Executors and Attorneys in Whatcom County</h2>
          <p className={pClass}>We work with probate and elder law attorneys throughout Whatcom County, providing certified appraisal reports and experienced real estate guidance for estate proceedings.</p>
          <p className={pClass}>Professional, timely, and easy to work with.</p>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-warm-bg">
      <div className={contentWrap}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">Have a Whatcom County Property to Discuss?</h2>
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-10 max-w-2xl mx-auto">A short conversation is usually the fastest way to get clarity. No obligation — just practical guidance about your situation.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+12069003015" className="inline-flex items-center justify-center gap-2.5 rounded-md bg-gold px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-gold-dark transition-colors min-h-[52px]">
              <Phone className="h-5 w-5" aria-hidden="true" />Call (206) 900-3015
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md border-2 border-gold px-8 py-3.5 text-base font-semibold text-gold shadow-sm hover:bg-gold/10 transition-colors min-h-[52px]">Send a Message</Link>
          </div>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/service-areas/whatcom-county" />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default WhatcomCountyServiceArea;
