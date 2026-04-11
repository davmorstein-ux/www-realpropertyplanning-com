import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import iconFinancialPlanning from "@/assets/icons/icon-financial-planning.png";
import CTASection from "@/components/CTASection";

const jsonLd = articleSchema({
  headline: "Real Estate Guidance for Financial Planners and Their Clients",
  description: "Real Property Planning provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for financial planners and their clients throughout Washington State.",
  url: "/for-financial-planners",
  datePublished: "2025-01-15",
  dateModified: "2026-04-10",
  about: ["Financial planner guidance", "Estate property", "Inherited property"],
});

const ForFinancialPlanners = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Guidance for Financial Planners | Real Property Planning"
      description="Real Property Planning provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for financial planners and their clients throughout Washington State."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[{ name: "For Financial Planners", url: "/for-financial-planners" }]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-secondary pt-8 md:pt-12 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8 md:mb-10">
            <img src={iconFinancialPlanning} alt="Financial Planning" className="block w-full max-w-[23rem] h-auto object-contain"  loading="lazy"/>
          </div>
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
            For Financial Planners
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-tight mb-4">
            Real Estate Guidance for Financial Planners
          </h1>
          <p className="text-muted-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
            Practical property guidance when your clients face inherited property, trust-owned homes, estate transitions, or senior housing changes.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
              Discuss a Client Situation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* More information link */}
    <section className="py-6 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Link to="/for-financial-planners/learn-more" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
            More information about Financial Planners →
          </Link>
        </div>
      </div>
    </section>

    <CTASection />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default ForFinancialPlanners;
