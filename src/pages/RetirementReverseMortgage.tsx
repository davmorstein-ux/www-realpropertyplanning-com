import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Globe } from "lucide-react";
import iconEmail3d from "@/assets/icons/icon-email-3d.png";

const RetirementReverseMortgage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Lenders & Financing Specialists | Real Property Planning"
      description="Supporting clients with financing options and long-term planning. Connect with trusted lending professionals who help you explore reverse mortgage and retirement strategies."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Professionals", url: "/for-professionals" },
        { name: "Lenders & Financing Specialists", url: "/retirement-reverse-mortgage" },
      ]}
    />
    <Header />

    {/* Hero */}
    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            Lenders & Financing Specialists
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Supporting Clients with Financing Options and Long-Term Planning
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Connecting clients with trusted professionals who provide clarity around financing, retirement planning, and long-term strategy.
          </p>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Real estate decisions are often closely tied to financing, retirement planning, and long-term financial strategy.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            In some situations, selling a home is the right decision. In others, financing solutions may provide flexibility and allow clients to remain in their home.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I work with trusted lending professionals who help clients explore their options clearly and without pressure.
          </p>
        </div>
      </div>
    </section>

    {/* Reverse Mortgage & Retirement Planning */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
            Reverse Mortgage & Retirement Planning
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            For seniors, reverse mortgage solutions can be part of a broader financial strategy.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            These conversations should be approached carefully, with a clear understanding of both benefits and considerations.
          </p>
        </div>
      </div>
    </section>

    {/* Featured Professional */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            Featured Professional
          </p>
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">
            Daniel Bartel
          </h2>

          <div className="bg-card border border-border rounded-xl px-7 py-8 mb-10">
            <div className="space-y-1 mb-6">
              <p className="text-foreground font-semibold text-lg">Retirement Mortgage Specialist</p>
              <p className="text-muted-foreground">Reverse Mortgage Lender</p>
              <p className="text-muted-foreground">C2 Financial</p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Daniel specializes in helping seniors evaluate reverse mortgage options as part of a larger retirement plan.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              His approach is educational and consultative — focused on helping clients understand their options so they can make informed decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a Registered Social Security Analyst, he also helps clients consider how real estate and financing decisions fit into their broader retirement strategy.
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-card border border-border rounded-xl px-7 py-8">
            <h3 className="font-serif text-xl text-foreground font-semibold mb-5">
              Contact Information
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:santadan@c2financial.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <img src={iconEmail3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" />
                <span>santadan@c2financial.com</span>
              </a>
              <a
                href="tel:+12063105766"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 shrink-0 object-contain" />
                <span>(206) 310-5766</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>1721 Hewitt Ave Ste. 612, Everett, WA 98201</span>
              </div>
              <a
                href="http://www.santadanmortgage.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="w-5 h-5 text-gold shrink-0" />
                <span>www.santadanmortgage.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* How This Fits In */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">
            How This Fits Into the Bigger Picture
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Every client's situation is different.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Some choose to sell. Others explore financing options. Some do both as part of a long-term plan.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The goal is to provide clarity — not push a specific path.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
            Let's Connect
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            If you're exploring whether selling, staying, or financing options make the most sense, I'm happy to help you evaluate your situation and connect you with the right professionals.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
              Schedule a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/retirement-reverse-mortgage" />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default RetirementReverseMortgage;
