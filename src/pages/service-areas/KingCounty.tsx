import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Link } from "react-router-dom";
import { Phone, ShieldCheck, Heart, Globe, MapPin } from "lucide-react";

const sectionBase = "py-14 md:py-20";
const contentWrap = "container px-6 lg:px-8";
const proseWrap = "max-w-3xl mx-auto";
const h2Class = "font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6";
const pClass = "text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-5 last:mb-0";

const communities = [
  "Seattle", "Bellevue", "Kirkland", "Redmond", "Bothell", "Woodinville",
  "Renton", "Auburn", "Kent", "Federal Way", "Issaquah", "Sammamish",
  "Mercer Island", "Shoreline", "Burien", "Des Moines", "Kenmore",
  "Lake Forest Park", "Maple Valley", "Covington", "Black Diamond",
  "Enumclaw", "North Bend", "Snoqualmie", "Tukwila", "SeaTac",
];

const whyCards = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-gold" aria-hidden="true" />,
    title: "Dual Expertise",
    text: "Licensed Real Estate Broker and Certified Residential Appraiser — one professional who understands both sides of the transaction.",
  },
  {
    icon: <Heart className="h-6 w-6 text-gold" aria-hidden="true" />,
    title: "Calm Guidance",
    text: "We work with families during some of the most stressful moments of their lives. Our approach is patient, clear, and never rushed.",
  },
  {
    icon: <Globe className="h-6 w-6 text-gold" aria-hidden="true" />,
    title: "Statewide Network",
    text: "Through eXp Realty's referral network, we can connect families with trusted professionals anywhere in Washington State or beyond.",
  },
  {
    icon: <MapPin className="h-6 w-6 text-gold" aria-hidden="true" />,
    title: "Local Knowledge",
    text: "Deep familiarity with King County neighborhoods, market conditions, and property values built over years of professional experience.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Real Property Planning — King County",
  description: "Probate, estate, and senior transition real estate services in King County, Washington.",
  url: "https://www.realpropertyplanning.com/service-areas/king-county",
  telephone: "+1-206-900-3015",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "King County, Washington",
  },
};

const KingCountyServiceArea = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Probate, Estate & Senior Transition Real Estate in King County, WA | Real Property Planning"
      description="Serving families, executors, attorneys, and seniors throughout King County Washington — Seattle, Bellevue, Kirkland, Redmond, Bothell, Woodinville, Renton, and beyond. Probate sales, certified appraisals, and senior transitions."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Service Areas", url: "/counties" },
      { name: "King County", url: "/service-areas/king-county" },
    ]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">King County, Washington</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Probate, Estate & Senior Transition Real Estate in King County, Washington
          </h1>
          <p className="text-xl md:text-[22px] text-primary-foreground/80 leading-[1.75] mb-5">
            Real Property Planning serves families, executors, attorneys, and seniors throughout King County with certified appraisals, probate real estate sales, and senior housing transition guidance.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/70 leading-[1.75] mb-8">
            Whether you are managing an inherited property in Seattle, helping a parent downsize in Woodinville, or settling an estate in Renton — we are here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-gold-dark transition-colors min-h-[52px]"
          >
            Talk to Us About Your King County Property
          </Link>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* Communities */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className="max-w-4xl mx-auto">
          <h2 className={h2Class}>Communities We Serve in King County</h2>
          <div className="flex flex-wrap gap-2.5">
            {communities.map((city) => (
              <span
                key={city}
                className="inline-block px-4 py-2 rounded-full text-[15px] md:text-base font-medium text-foreground bg-secondary border border-border"
              >
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
          <h2 className={h2Class}>Probate & Estate Real Estate in King County</h2>
          <p className={pClass}>
            When a family member passes away owning property in King County, the estate often requires professional guidance to navigate the probate process, establish fair market value, and coordinate the sale.
          </p>
          <p className={pClass}>
            Real Property Planning provides both certified appraisal services and experienced real estate brokerage — a rare combination that gives families and attorneys a single trusted resource for the entire process.
          </p>
        </div>
      </div>
    </section>

    {/* Certified Appraisals */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Certified Appraisals in King County</h2>
          <p className={pClass}>
            A certified appraisal is often required in King County probate proceedings, estate tax filings, trust administration, and divorce settlements.
          </p>
          <p className={pClass}>
            As a Washington State Certified Residential Appraiser (WA #1702080), we provide court-acceptable, lender-approved appraisal reports for residential and commercial properties throughout King County.
          </p>
          <p className={pClass}>
            Reports are prepared with precision, delivered in a timely manner, and stand up to legal scrutiny.
          </p>
        </div>
      </div>
    </section>

    {/* Senior Transitions */}
    <section className={`${sectionBase} bg-secondary`}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Senior Transitions in King County</h2>
          <p className={pClass}>
            King County families navigating a parent's move from a longtime home to an assisted living or senior living community face both emotional and logistical challenges.
          </p>
          <p className={pClass}>
            We help families understand what the home is worth, prepare it for sale thoughtfully, and coordinate the timing of the sale with the move — so nothing falls through the cracks during an already demanding transition.
          </p>
        </div>
      </div>
    </section>

    {/* Executors and Attorneys */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Serving Executors and Attorneys in King County</h2>
          <p className={pClass}>
            Real Property Planning works regularly with probate attorneys, elder law attorneys, fiduciaries, and trustees throughout King County.
          </p>
          <p className={pClass}>
            We understand the legal dimensions of estate real estate, communicate clearly and professionally, and deliver the documentation that legal proceedings require.
          </p>
          <p className={pClass}>
            If you are an attorney looking for a reliable real estate and appraisal resource for your King County clients, we welcome the conversation.
          </p>
        </div>
      </div>
    </section>

    {/* Why Families Choose */}
    <section className={`${sectionBase} bg-secondary`}>
      <div className={contentWrap}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`${h2Class} text-center`}>Why Families in King County Choose Real Property Planning</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-card rounded-xl border border-border p-6 md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 mb-4">
                  {card.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-[17px] leading-[1.8]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 md:py-24 bg-warm-bg">
      <div className={contentWrap}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
            Have a King County Property to Discuss?
          </h2>
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-10 max-w-2xl mx-auto">
            A short conversation is usually the fastest way to get clarity. There is no obligation — just practical guidance about your situation.
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

    <RelatedServices currentPath="/service-areas/king-county" />
    <DisclaimerSection />

    </main>
    <Footer />
  </div>
);

export default KingCountyServiceArea;
