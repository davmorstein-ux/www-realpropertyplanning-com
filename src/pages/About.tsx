import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { realEstateAgentSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import TrustStrip from "@/components/TrustStrip";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Phone } from "lucide-react";
import daveHeadshot from "@/assets/dave-headshot.jpg";
import AgentCredentialBlock from "@/components/AgentCredentialBlock";

const whoWorksWith = [
  "Estate planning, probate, and elder law attorneys",
  "Executors and personal representatives",
  "Trustees and fiduciaries",
  "CPAs and financial planners",
  "Adult children helping parents transition",
  "Seniors and families navigating major home decisions",
];

const whatSetsApart = [
  "Dual-credentialed: licensed broker and state certified residential appraiser",
  "Specialized focus on probate, estate, trust, and transition-related property",
  "A calm, steady communication style suited to sensitive situations",
  "Hands-on coordination from assessment through closing",
  "Over two decades of relevant experience across Western Washington",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About David Stein — Broker & Certified Appraiser | Real Property Planning"
        description="Meet David Stein — the Washington broker and certified appraiser behind Real Property Planning. Over 20 years of focused experience helping attorneys, executors, and families with estate property."
        jsonLd={realEstateAgentSchema}
      />
      <BreadcrumbSchema items={[{ name: "About", url: "/about" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              About
            </p>
             <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight">
              About David Stein
            </h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mt-4">
              Real estate broker serving the greater Puget Sound region, specializing in senior relocation, estate and inherited property sales, and trust &amp; probate real estate.
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Bio */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  David Stein founded Real Property Planning to serve a need he saw repeatedly in real estate: families, executors, attorneys, and trustees facing complex property decisions without a professional who truly understood the intersection of estate settlement, property valuation, and market strategy.
                </p>
                <p>
                  With over 20 years of experience as a licensed Washington real estate broker and a state certified residential appraiser, David brings a rare combination of credentials to every engagement. This dual background means he doesn't just understand how to sell a home — he understands how to evaluate it with analytical precision and price it with market-informed confidence.
                </p>
                <p>
                  David's practice is focused exclusively on property situations that require more than a standard listing approach: <Link to="/probate-estate-sales" className="text-accent hover:text-gold underline underline-offset-4">probate and estate sales</Link>, <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">senior housing transitions</Link>, trust-owned real estate, and inherited homes that need experienced guidance from assessment through closing.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden border-2 border-gold/20 shadow-lg">
                <img
                  src={daveHeadshot}
                  alt="David Stein, Washington state certified real estate appraiser and broker behind Real Property Planning"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
              <AgentCredentialBlock />
            </div>
          </div>
        </div>
      </section>

      {/* Who David Works With */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Who David Works With
            </h2>
            <ul className="space-y-4">
              {whoWorksWith.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What Sets David Apart */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              What Sets This Practice Apart
            </h2>
            <ul className="space-y-4">
              {whatSetsApart.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-lg leading-relaxed mt-8">
              Learn more about <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">why David's valuation expertise matters</Link> or explore the <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">step-by-step process</Link> he follows for every engagement.
            </p>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/about" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Ready to discuss a property situation?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              David welcomes confidential conversations with attorneys, executors, trustees, families, and financial professionals.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact David
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default About;
