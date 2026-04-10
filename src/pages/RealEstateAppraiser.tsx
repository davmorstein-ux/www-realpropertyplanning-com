import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import davidSteinPhoto from "@/assets/providers/david-stein-headshot-sq.jpg";
import steinAppraisalLogo from "@/assets/stein-appraisal-logo.jpg";
import ehoLogo from "@/assets/providers/equal-housing-opportunity.png";
import iconAppraiser from "@/assets/icons/icon-appraiser.png";

const RealEstateAppraiser = () => (
  <>
    <SEOHead
      title="Real Estate Appraiser | Real Property Planning"
      description="Certified residential appraiser providing objective property valuations for estate, probate, trust, and senior transition situations throughout Washington State."
      canonical="https://www.realpropertyplanning.com/real-estate-appraiser"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Real Estate Appraiser", url: "https://www.realpropertyplanning.com/real-estate-appraiser" },
      ]}
    />
    <Header />
    <main>
      {/* Hero */}
      <section className="bg-secondary pt-8 md:pt-12 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8 md:mb-10">
              <img src={iconAppraiser} alt="Real Estate Appraiser" className="block w-full max-w-[23rem] h-auto object-contain" />
            </div>
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">Valuation &amp; Appraisal</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-tight mb-4">Real Estate Appraiser</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Objective, defensible property valuations for families, executors, trustees, and professionals during important life transitions.
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
                  <img src={davidSteinPhoto} alt="David Stein — Certified Residential Appraiser" className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm" />
                </div>
                <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
                  <img src={steinAppraisalLogo} alt="Stein Appraisal logo" className="h-[120px] w-auto object-contain mx-auto sm:mx-0 sm:-translate-x-[4px] block" />
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
                      <img src={ehoLogo} alt="Equal Housing Opportunity" className="h-10 w-auto object-contain opacity-70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
