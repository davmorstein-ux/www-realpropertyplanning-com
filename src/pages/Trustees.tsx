import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, Globe } from "lucide-react";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import iconTrustees from "@/assets/icons/icon-trustees.png";
import CTASection from "@/components/CTASection";
import davidSteinPhoto from "@/assets/providers/david-stein-headshot-sq.jpg";
import expRealtyLogo from "@/assets/providers/exp-realty-logo-large.png";
import ehoLogo from "@/assets/providers/equal-housing-opportunity.png";

const jsonLd = articleSchema({
  headline: "Trust Property Guide for Trustees",
  description: "Practical real estate guidance for trustees, successor trustees, and fiduciaries managing trust-held property in Washington State.",
  url: "/trustees",
  datePublished: "2026-04-09",
  dateModified: "2026-04-10",
  about: ["Trustees", "Successor trustees", "Trust administration", "Trust property"],
});

const Trustees = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Trustees — Real Estate Guidance for Trust-Held Property | David Stein"
      description="Practical real estate guidance for trustees and successor trustees selling trust-held property throughout Washington State. Licensed broker and certified appraiser."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[{ name: "Trustees", url: "/trustees" }]} />
    <Header />

    {/* Hero */}
    <section className="bg-secondary pt-8 md:pt-12 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8 md:mb-10">
            <img src={iconTrustees} alt="Trustees" className="block w-full max-w-[23rem] h-auto object-contain" />
          </div>
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
            Fiduciary Support
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-tight mb-4">
            Trustees
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Practical real estate guidance for trustees and successor trustees managing trust-held property in Washington State.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
              Schedule a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Featured Professional */}
    <section className="py-10 md:py-14 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-6">Featured Professional</h2>
          <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm p-5 sm:p-6">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
              <div className="shrink-0">
                <img src={davidSteinPhoto} alt="David Stein" className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm" />
              </div>
              <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
                <a href="https://davestein.exprealty.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <img src={expRealtyLogo} alt="eXp Realty logo" className="h-[120px] w-auto object-contain mx-auto sm:mx-0 sm:-translate-x-[10px] block" />
                </a>
                <div className="w-full mt-1 text-center sm:text-left">
                  <p className="text-foreground font-semibold text-base">David Stein</p>
                  <p className="text-muted-foreground text-sm mb-0.5">Real Estate Broker</p>
                  <p className="text-muted-foreground text-sm mb-1.5">Real Property Planning</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Specializing in senior transitions, probate and estate property sales, and trust-held real estate throughout Washington State.
                  </p>
                  <div className="text-muted-foreground text-xs leading-relaxed mb-3 space-y-0.5">
                    <p>Real Estate Broker — License #113972</p>
                    <p>WA Certified Residential Appraiser — #1702080</p>
                  </div>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Phone className="w-4 h-4 text-accent shrink-0" />
                      <a href="tel:+12069003015" className="text-accent hover:text-gold underline-offset-4 hover:underline">(206) 900-3015</a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Mail className="w-4 h-4 text-accent shrink-0" />
                      <a href="mailto:david@realpropertyplanning.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">david@realpropertyplanning.com</a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Globe className="w-4 h-4 text-accent shrink-0" />
                      <a href="https://davestein.exprealty.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline-offset-4 hover:underline">davestein.exprealty.com</a>
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
          <Link to="/trustees/learn-more" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
            More information about Trustees →
          </Link>
        </div>
      </div>
    </section>

    <CTASection />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default Trustees;
