import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import iconTrustees from "@/assets/icons/icon-trustees.png";
import CTASection from "@/components/CTASection";

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
      title="Trustees — Real Estate Guidance for Trust-Held Property | Real Property Planning"
      description="Practical real estate guidance for trustees and successor trustees selling trust-held property throughout Washington State."
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
