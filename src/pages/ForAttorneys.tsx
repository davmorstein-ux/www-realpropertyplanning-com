import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Briefcase, Mail } from "lucide-react";
import attorneyImage from "@/assets/attorney.png";

const reasons = [
  "Over 20 years of real estate experience",
  "Professional real estate broker",
  "State certified appraiser",
  "Strong understanding of value, pricing, and marketability",
  "Calm and professional communication style",
  "Experience coordinating sensitive, multi-party matters",
  "Hands-on assistance with property preparation and sale execution",
  "Referral-oriented professionalism and discretion"
];

const referralSituations = [
  "Probate property sales",
  "Estate-owned residences",
  "Trust-owned real property",
  "Inherited homes",
  "Senior housing transitions",
  "Properties requiring clean-out or preparation",
  "Properties needing thoughtful pricing and strategy guidance",
  "Sensitive family situations requiring discretion"
];

const ForAttorneys = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Real Estate Resource for Attorneys, Trustees & Fiduciaries | David Stein"
        description="David Stein serves as a trusted real estate and valuation resource for attorneys, trustees, executors, and fiduciaries handling probate, estate, and trust property matters in Western Washington."
      />
      <Header />
      
      {/* Hero */}
      <section className="bg-navy pt-16 pb-12 lg:pt-32 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
                For Attorneys, Executors & Fiduciaries
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
                A Trusted Real Estate Resource for Attorneys, Fiduciaries, and High-Trust Referrals
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                David Stein works with attorneys, trustees, executors, personal representatives, and fiduciaries who need an experienced real estate professional capable of handling sensitive property matters with discretion, responsiveness, and sound judgment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gold hover:bg-gold-light text-navy font-semibold w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    Discuss a Client Matter
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                    <Mail className="w-5 h-5 mr-2" />
                    Request Confidential Consultation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img src={attorneyImage} alt="Professional attorneys signing documents" className="w-80 xl:w-96 rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
              Professional Support for the Real Estate Side of Estate and Senior Matters
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Legal and fiduciary professionals often need a real estate resource who understands more than the mechanics of a standard listing. Estate, probate, trust, and senior-transition properties frequently involve emotional complexity, logistical challenges, multiple interested parties, condition concerns, and important timing considerations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              David Stein provides experienced support in evaluating the property, shaping the sale strategy, coordinating preparation, and managing the transaction in a way that reflects well on the professionals who refer him.
            </p>
          </div>
        </div>
      </section>

      {/* Why Professionals Refer */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Briefcase className="w-10 h-10 text-gold mb-6" />
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                Why Professionals Refer David Stein
              </h2>
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-foreground font-semibold mb-6">
                Typical Referral Situations
              </h3>
              <ul className="space-y-4">
                {referralSituations.map((situation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                    <span className="text-muted-foreground">{situation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How David Supports */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
              How David Supports Attorneys and Fiduciaries
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              David Stein aims to be a dependable extension of the advisory team. He helps clients understand their options, reduces friction in the real estate process, and maintains clear communication throughout the matter. Whether the property should be sold as-is, prepared for market, or evaluated more carefully before a decision is made, David helps bring clarity and forward motion to the process.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/for-cpas" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For CPAs</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-financial-planners" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Financial Planners</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How the Process Works</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Looking for a Real Estate Resource You Can Refer With Confidence?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              David Stein provides a high-trust, experienced approach designed to support both the referring professional and the client.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-navy font-semibold">
                Discuss a Referral Opportunity
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default ForAttorneys;
