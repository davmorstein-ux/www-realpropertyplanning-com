import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import iconExecutors from "@/assets/icons/icon-executors.png";
import CTASection from "@/components/CTASection";
import davidSteinPhoto from "@/assets/providers/david-stein-headshot-sq.jpg";
import expRealtyLogo from "@/assets/providers/exp-realty-logo-large.png";
import { Phone, Mail } from "lucide-react";

const jsonLd = articleSchema({
  headline: "Estate Property Guide for Executors & Trustees",
  description: "Practical, step-by-step real estate guidance for executors, personal representatives, trustees, and families managing inherited property and estate home sales throughout Washington State.",
  url: "/executors",
  datePublished: "2025-01-15",
  dateModified: "2026-04-10",
  about: ["Executors", "Trustees", "Personal representatives", "Estate property", "Inherited home sales"],
});

const Executors = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="What Executors Need to Know About Selling Estate Property | David Stein"
      description="Step-by-step real estate guidance for executors, personal representatives, and trustees selling inherited homes and estate property throughout Washington State. Licensed broker and certified appraiser."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[{ name: "For Executors", url: "/executors" }]} />
    <Header />

    {/* Hero */}
    <section className="bg-secondary pt-8 md:pt-12 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8 md:mb-10">
            <img src={iconExecutors} alt="Executors" className="block w-full max-w-[23rem] h-auto object-contain" />
          </div>
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
            For Executors & Personal Representatives
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-tight mb-4">
            You Do Not Have to Figure This Out Alone
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            David handles property evaluation, preparation, pricing, and sale so you can focus on your other responsibilities.
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
          <div className="bg-secondary border border-border rounded-xl p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <img src={davidSteinPhoto} alt="David Stein" className="w-24 h-24 rounded-full object-cover border-2 border-border shadow-sm shrink-0" />
              <div className="text-center sm:text-left">
                <img src={expRealtyLogo} alt="eXp Realty" className="h-16 w-auto object-contain mx-auto sm:mx-0 mb-1" />
                <p className="text-foreground font-semibold text-base">David Stein</p>
                <p className="text-muted-foreground text-sm mb-1">Real Estate Broker · Certified Residential Appraiser</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  Specializing in estate property, probate sales, and senior transitions throughout Washington State.
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
          <Link to="/executors/learn-more" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
            More information about Executors →
          </Link>
        </div>
      </div>
    </section>

    <CTASection />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default Executors;
