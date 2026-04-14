import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";
import RelatedServices from "@/components/RelatedServices";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-contact-icon-washington.webp";

const sectionBase = "py-14 md:py-20";
const contentWrap = "container px-6 lg:px-8";
const proseWrap = "max-w-3xl mx-auto";
const h2Class = "font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6";
const pClass = "text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-5 last:mb-0";

const communities = [
  "Mount Vernon", "Burlington", "Anacortes", "Sedro-Woolley", "La Conner",
  "Concrete", "Hamilton", "Lyman", "Bow", "Edison", "Alger", "Big Lake",
  "Clear Lake", "Conway", "Bay View", "Rockport", "Marblemount",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Real Property Planning — Skagit County",
  description: "Probate, estate, and senior transition real estate services in Skagit County, Washington.",
  url: "https://www.realpropertyplanning.com/service-areas/skagit-county",
  telephone: "+1-206-900-3015",
  areaServed: { "@type": "AdministrativeArea", name: "Skagit County, Washington" },
};

const SkagitCountyServiceArea = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Probate & Estate Real Estate in Skagit County, WA | Real Property Planning"
      description="Experienced probate real estate, inherited property guidance, and senior transitions throughout Skagit County. Serving Mount Vernon, Burlington, Anacortes, La Conner & more."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Service Areas", url: "/counties" },
      { name: "Skagit County", url: "/service-areas/skagit-county" },
    ]} />
    <Header />
    <main id="main-content">

    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Skagit County, Washington</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Probate &amp; Estate Real Estate in Skagit County, Washington
          </h1>
          <p className="text-xl md:text-[22px] text-primary-foreground/80 leading-[1.75] mb-5">
            Experienced guidance for <Link to="/executors" className="text-gold hover:text-gold/80 underline underline-offset-4">executors</Link>, families, and <Link to="/for-attorneys" className="text-gold hover:text-gold/80 underline underline-offset-4">attorneys</Link> navigating property sales throughout Skagit County — including waterfront, agricultural, and rural properties.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/70 leading-[1.75] mb-8">
            Whether you are managing an inherited property in Mount Vernon, helping a parent transition in Anacortes, or settling an estate in Burlington — we are here to help.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-gold-dark transition-colors min-h-[52px]">
            Talk to Us About Your Skagit County Property
          </Link>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* AEO Direct Answer */}
    <DirectAnswerBlock
      question="How does selling estate property work in Skagit County?"
      answer="Skagit County is unlike any other market in the Puget Sound region. It is a county where working farmland borders waterfront communities, where a property in Anacortes carries entirely different value drivers than acreage near Burlington or a historic home in La Conner. Real Property Planning brings the dual perspective of a licensed real estate broker and a Washington State Certified Residential Appraiser to every Skagit County property situation."
      supportBullets={[
        "Agricultural and rural property valuation accounting for soil, water rights, and zoning",
        "Waterfront premium analysis for Anacortes and island-adjacent communities",
        "Small-community expertise for La Conner, Edison, Bow, and Concrete",
        "Full remote coordination for families managing from Seattle or out of state",
      ]}
    />

    {/* Communities */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className="max-w-4xl mx-auto">
          <h2 className={h2Class}>Communities We Serve in Skagit County</h2>
          <p className={pClass}>Real Property Planning serves families, executors, and professionals throughout Skagit County, including:</p>
          <div className="flex flex-wrap gap-2.5 mt-6">
            {communities.map((city) => (
              <span key={city} className="inline-block px-4 py-2 rounded-full text-[15px] md:text-base font-medium text-foreground bg-secondary border border-border">{city}</span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* What Makes Skagit Different */}
    <section className={`${sectionBase} bg-secondary`}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>What Makes Skagit County Estate Properties Different</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-lg text-foreground font-semibold mb-2">Agricultural and Rural Properties</h3>
              <p className={pClass}>Farmland, acreage, and rural residential properties with agricultural zoning require valuation methodology that accounts for soil quality, water rights, easements, and land use — factors that residential comparable analysis alone cannot capture accurately.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground font-semibold mb-2">Waterfront and Island-Adjacent Communities</h3>
              <p className={pClass}>Anacortes and communities near the water carry premiums driven by boating access, San Juan Islands proximity, and a buyer pool that comes from well beyond the immediate area. Pricing these properties accurately requires understanding both the local market and the broader buyer geography.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground font-semibold mb-2">Small Historic Communities</h3>
              <p className={pClass}>La Conner, Edison, Bow, and Concrete each have their own community character and buyer pool. Estate properties in these communities need to be positioned for the buyers who seek out that character specifically — not priced against suburban comparable sales that don't apply.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground font-semibold mb-2">Mixed-Use and Transitional Properties</h3>
              <p className={pClass}>Some Skagit County estate properties don't fit cleanly into residential or agricultural categories — rural homes on large lots, properties with outbuildings, or parcels that could have multiple uses. These require the kind of flexible, methodology-based analysis that David's appraisal training provides.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Probate & Estate */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Probate &amp; Estate Real Estate in Skagit County</h2>
          <p className={pClass}>Skagit County families managing inherited property or <Link to="/probate-estate-sales" className="text-accent hover:text-gold underline underline-offset-4">probate</Link> real estate need a professional who understands both Washington State probate law and the local Skagit Valley market — including the agricultural, waterfront, and small-community dynamics that make this county unique.</p>
          <p className={pClass}>We provide <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">certified appraisals</Link> and experienced real estate brokerage — giving families and <Link to="/for-attorneys" className="text-accent hover:text-gold underline underline-offset-4">estate attorneys</Link> a reliable single resource for the entire process.</p>
        </div>
      </div>
    </section>

    {/* Certified Appraisals */}
    <section className={`${sectionBase} bg-secondary`}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Certified Appraisals in Skagit County</h2>
          <p className={pClass}>We provide Washington State certified residential appraisals throughout Skagit County for probate proceedings, estate settlements, trust administration, and <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">senior transition</Link> planning — with particular expertise in the agricultural, waterfront, and rural properties that make Skagit County valuation uniquely complex.</p>
          <p className={pClass}>Every report is court-acceptable, precise, and delivered on a timeline that works for your situation.</p>
        </div>
      </div>
    </section>

    {/* Senior Transitions */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Senior Transitions in Skagit County</h2>
          <p className={pClass}>From the Skagit Valley farmlands to the waterfront communities of Anacortes and La Conner, we help Skagit County families navigate the sale of a longtime family home as part of a senior housing transition — with calm guidance and careful coordination.</p>
        </div>
      </div>
    </section>

    {/* Serving Executors and Attorneys */}
    <section className={`${sectionBase} bg-secondary`}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Serving <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">Executors</Link> and Attorneys in Skagit County</h2>
          <p className={pClass}>We work with probate and elder law attorneys throughout Skagit County, providing certified appraisal reports and real estate expertise that legal proceedings require. Many <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">executors</Link> managing Skagit County estate property are based in the greater Seattle area — David coordinates the full process locally so you don't have to make the drive north for every step.</p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-24 bg-warm-bg">
      <div className={contentWrap}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">Have a Skagit County Property to Discuss?</h2>
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-4 max-w-2xl mx-auto">Whether you're managing a straightforward inherited home in Mount Vernon or navigating a complex agricultural property near Burlington, a short conversation with David can help clarify your options and develop a realistic next step.</p>
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-10 max-w-2xl mx-auto">Real Property Planning serves Skagit County families and <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">executors</Link> directly — and can connect those with needs beyond real estate brokerage and appraisal with trusted referral partners throughout the county and region.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+12069003015">
              <Button variant="gold" size="lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                Call (206) 900-3015
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-2 border-gold text-gold hover:bg-gold/10">
                <img src={iconEmail3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                Send a Message
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/service-areas/skagit-county" />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default SkagitCountyServiceArea;
