import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import iconCpas from "@/assets/icons/icon-cpas.png";
import CTASection from "@/components/CTASection";
import davidSteinPhoto from "@/assets/providers/david-stein-headshot-sq.jpg";
import expRealtyLogo from "@/assets/providers/exp-realty-logo-large.png";

const jsonLd = articleSchema({
  headline: "Real Estate Guidance for CPAs and Their Clients",
  description: "Real Property Planning provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for CPAs and their clients throughout Washington State.",
  url: "/for-cpas",
  datePublished: "2025-01-15",
  dateModified: "2026-04-10",
  about: ["CPA real estate guidance", "Estate property", "Inherited property"],
});

const ForCPAs = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Guidance for CPAs and Their Clients | Real Property Planning"
      description="Real Property Planning provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for CPAs and their clients throughout Washington State."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[{ name: "For CPAs", url: "/for-cpas" }]} />
    <Header />

    {/* Hero */}
    <section className="bg-secondary pt-8 md:pt-12 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8 md:mb-10">
            <img src={iconCpas} alt="CPAs" className="block w-full max-w-[23rem] h-auto object-contain" />
          </div>
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
            For CPAs
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-tight mb-4">
            Real Estate Guidance for CPAs
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Practical, valuation-informed property guidance when your clients face inherited property, estate settlement, or trust administration decisions.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
              Discuss a Client Situation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Featured Professional */}
    <section className="py-10 md:py-14 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-secondary border border-border rounded-xl p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <img src={davidSteinPhoto} alt="David Stein" className="w-24 h-24 rounded-full object-cover border-2 border-border shadow-sm shrink-0" />
              <div className="text-center sm:text-left">
                <img src={expRealtyLogo} alt="eXp Realty" className="h-16 w-auto object-contain mx-auto sm:mx-0 mb-1" />
                <p className="text-foreground font-semibold text-base">David Stein</p>
                <p className="text-muted-foreground text-sm mb-1">Real Estate Broker · Certified Residential Appraiser</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  Specializing in estate property, probate sales, and trust-held real estate throughout Washington State.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 text-sm">
                  <a href="tel:+12069003015" className="inline-flex items-center gap-1.5 text-accent hover:text-gold">
                    <Phone className="w-3.5 h-3.5" />(206) 900-3015
                  </a>
                  <a href="mailto:david@realpropertyplanning.com" className="inline-flex items-center gap-1.5 text-accent hover:text-gold">
                    <Mail className="w-3.5 h-3.5" />david@realpropertyplanning.com
                  </a>
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
          <Link to="/for-cpas/learn-more" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
            More information about CPAs →
          </Link>
        </div>
      </div>
    </section>

    <CTASection />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default ForCPAs;
