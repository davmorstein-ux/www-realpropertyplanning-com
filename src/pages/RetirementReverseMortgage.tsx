import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

const RetirementReverseMortgage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Retirement & Reverse Mortgage Planning | Real Property Planning"
      description="A resource for seniors exploring reverse mortgage options and retirement planning. Connect with trusted professionals who help you understand your financial options clearly."
    />
    <BreadcrumbSchema
      items={[
        { name: "Resources", url: "/resources" },
        { name: "Retirement & Reverse Mortgage Planning", url: "/retirement-reverse-mortgage" },
      ]}
    />
    <Header />

    {/* Hero */}
    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            Senior Financial Resources
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Retirement & Reverse Mortgage Planning
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            A Resource for Seniors Exploring Financial Options
          </p>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            For many seniors, real estate decisions are closely tied to financial flexibility, long-term planning, and maintaining independence.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            In some situations, a reverse mortgage may be worth exploring as part of that conversation. I work with trusted professionals who specialize in helping seniors understand their options clearly and without pressure.
          </p>
        </div>
      </div>
    </section>

    {/* Featured Resource */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            Featured Resource
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
              Daniel focuses on helping seniors evaluate whether a reverse mortgage aligns with their goals, lifestyle, and financial needs. His approach is educational and consultative, ensuring clients fully understand their options before making any decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a Registered Social Security Analyst, he also helps clients consider how housing decisions may interact with broader retirement planning.
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
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>santadan@c2financial.com</span>
              </a>
              <a
                href="tel:+12063105766"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-gold shrink-0" />
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
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">
            How This Fits In
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Every situation is different.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Some clients choose to sell. Others choose to stay. Some explore financing options as part of a broader plan.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The goal is not to push a specific solution — but to help clients understand their options so they can make confident decisions.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
            Need Help Navigating the Bigger Picture?
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            If you're unsure whether selling, staying, or exploring financing options is the right move, I'm happy to help you think through the possibilities and connect you with the right professionals.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
              <Phone className="w-5 h-5 mr-2" />
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
