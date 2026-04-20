import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import davidSteinPhoto from "@/assets/providers/realtor-david-stein-headshot-seattle.webp";
import steinAppraisalLogo from "@/assets/stein-appraisal-appraiser-logo-washington.webp";
import ehoLogo from "@/assets/providers/equal-housing-opportunity-logo-washington.webp";
import iconAppraiser from "@/assets/icons/real-estate-appraiser-icon-washington.webp";

const RealEstateAppraiser = () => (
  <>
    <SEOHead
      title="Certified Real Estate Appraiser in Washington State"
      description="Washington State Certified Residential Appraiser. Estate, probate, and senior transition appraisals accepted by courts, lenders, and the IRS."
      canonical="https://www.realpropertyplanning.com/real-estate-appraiser"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Real Estate Appraiser", url: "https://www.realpropertyplanning.com/real-estate-appraiser" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img src={iconAppraiser} alt="Real Estate Appraiser" className="block w-full max-w-[15rem] h-auto object-contain"  loading="lazy"/>
            </div>
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">Valuation &amp; Appraisal</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-4">Real Estate Appraiser</h1>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Objective, defensible property valuations for families, executors, trustees, and professionals during important life transitions.
            </p>
            <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mt-4">
              Appraisal services are provided through Stein Appraisal, David Stein's independent Washington State certified residential appraisal practice.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Appraiser */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">Featured Appraiser</h2>
            <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
                <div className="shrink-0">
                  <img src={davidSteinPhoto} alt="David Stein — Certified Residential Appraiser" className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"  loading="lazy"/>
                </div>
                <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
                  <img src={steinAppraisalLogo} alt="Stein Appraisal logo" className="h-[120px] w-auto object-contain mx-auto sm:mx-0 sm:-translate-x-[4px] block"  loading="lazy"/>
                  <div className="w-full mt-1 text-center sm:text-left">
                    <p className="text-foreground font-semibold text-base">David Stein</p>
                    <p className="text-muted-foreground text-sm mb-0.5">Certified Residential Appraiser</p>
                    <p className="text-muted-foreground text-sm mb-1.5">Real Property Planning</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Providing objective, certified residential appraisals for estate settlements, probate proceedings, trust administration, and senior transition property decisions throughout Washington State.
                    </p>
                    <div className="text-muted-foreground text-xs leading-relaxed mb-3 space-y-0.5">
                      <p>WA Certified Residential Appraiser — #1702080</p>
                      <p>Real Estate Broker — License #113972</p>
                    </div>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <Phone className="w-4 h-4 text-accent shrink-0" />
                        <a href="tel:+12069003015" className="text-accent hover:text-gold underline-offset-4 hover:underline">(206) 900-3015</a>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <Mail className="w-4 h-4 text-accent shrink-0" />
                        <a href="mailto:dave@steinappraisal.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">dave@steinappraisal.com</a>
                      </div>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
                      <img src={ehoLogo} alt="Equal Housing Opportunity" className="h-10 w-auto object-contain opacity-70"  loading="lazy"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appraisal Services */}
      <section className="py-10 md:py-14 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-4">Appraisal Services We Provide</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10">
              A certified appraisal is one of the most important documents in any major property decision. Whether you are settling an estate, navigating probate, helping a parent transition out of their home, or refinancing — an accurate, defensible valuation gives you the foundation to move forward with confidence.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Residential Appraisals",
                  text: "Whether you are buying, selling, refinancing, or simply want to know what your home is worth, a certified residential appraisal provides an accurate, lender-accepted valuation backed by local Washington State market data.",
                },
                {
                  title: "Estate & Probate Appraisals",
                  text: "When a loved one passes away, Washington State courts and the IRS often require a certified appraisal of real property to settle the estate. We provide court-acceptable appraisal reports prepared with the care and precision these situations demand — and with sensitivity to what families are going through.",
                },
                {
                  title: "Senior Transition & Relocation Appraisals",
                  text: "Families helping an aging parent leave the home they have lived in for decades need to know its fair market value before making any decisions. We work directly with families, elder law attorneys, and senior care coordinators to deliver timely, accurate appraisals that support confident next steps.",
                },
              ].map((card) => (
                <div key={card.title} className="bg-background border border-border rounded-xl p-5 sm:p-6 shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Certified Appraiser */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">Why a Certified Appraiser Makes a Difference</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Not all property valuations carry the same weight. A certified appraisal is legally defensible, accepted by courts, lenders, and the IRS — and is often required in probate, divorce, estate settlement, tax appeals, and senior housing decisions. Real Property Planning holds both a Washington State Certified Residential Appraiser designation (WA #1702080) and a Real Estate Broker license (#113972) — a rare combination that brings deeper market insight and practical real estate experience to every valuation.
            </p>
          </div>
        </div>
      </section>

      {/* Serving All of Washington State */}
      <section className="py-10 md:py-14 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">Serving All of Washington State</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              From King County and Snohomish County to Pierce, Thurston, Whatcom, Skagit, Clark, Spokane, and every county in between — Real Property Planning provides certified appraisal services throughout Washington State. Whether your property is in a major metro area or a rural community, we can help.
            </p>
          </div>
        </div>
      </section>

      {/* More information link */}
      <section className="py-6 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/real-estate-appraiser/learn-more" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
              More information about Real Estate Appraisers →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
    <Footer />
  </>
);

export default RealEstateAppraiser;
