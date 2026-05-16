import HeroBandTitle from "@/components/HeroBandTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyValuationMatters = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Estate Property Valuation in Washington State"
        description="Defensible pricing for probate, trust, and inherited Washington homes — from a licensed broker and Washington State Certified Residential Appraiser."
        jsonLd={articleSchema({
          headline: "Why Pricing & Valuation Matter in Estate Property Sales",
          description: "How broker and certified appraiser expertise prevents costly pricing mistakes in estate property.",
          url: "/why-valuation-matters",
          datePublished: "2025-01-15",
          dateModified: "2026-03-15",
          about: ["Property valuation", "Estate pricing", "Certified appraiser", "Probate property pricing", "Inherited home value"],
        })}
      />
      <BreadcrumbSchema items={[{ name: "Why Valuation Matters", url: "/why-valuation-matters" }]} />
      <Header />
      <main id="main-content">

        {/* HERO */}
        <section className="w-full overflow-hidden" style={{ lineHeight: 0 }}>
          <img
            src="/assets/valuation_hero_clean.webp"
            alt="Why Valuation Matters — Real Property Planning"
            className="w-full h-auto object-cover"
            loading="eager"
            fetchPriority="high"
            style={{ display: 'block' }}
          />
          <HeroBandTitle>Pricing &amp; Valuation Expertise</HeroBandTitle>
        </section>

        {/* Closing CTA */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                Have Questions About Property Valuation?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Real Property Planning connects families, executors, and attorneys with qualified appraisers and brokers throughout Washington State.
              </p>
              <div className="flex justify-center">
                <Link to="/contact">
                  <Button variant="gold" size="lg" className="px-8">
                    Start a Conversation →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default WhyValuationMatters;
