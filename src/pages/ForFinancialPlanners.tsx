import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconFinancialPlanning from "@/assets/icons/estate-financial-planning-icon-washington.webp";
import CTASection from "@/components/CTASection";

const jsonLd = articleSchema({
  headline: "Real Estate Guidance for Financial Planners and Their Clients in Washington State",
  description: "Real Property Planning supports financial planners whose clients face inherited property, trust-owned homes, or senior housing transitions in Washington State. Puget Sound focus.",
  url: "/for-financial-planners",
  datePublished: "2025-01-15",
  dateModified: "2026-04-14",
  about: ["Financial planner guidance", "Estate property", "Senior transition property"],
});

const ForFinancialPlanners = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Guidance for Financial Planners | Estate & Senior Transition Property | Real Property Planning"
      description="Real Property Planning supports financial planners whose clients face inherited property, trust-owned homes, or senior housing transitions in Washington State. Puget Sound focus."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[{ name: "For Financial Planners", url: "/for-financial-planners" }]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-1.5 md:mb-2">
            <img src={iconFinancialPlanning} alt="Financial planner senior transition and estate property guidance Washington State" className="block w-full max-w-[15rem] h-auto object-contain" loading="lazy"/>
          </div>
          <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
            For Financial Planners
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-4">
            Real Estate Guidance for Financial Planners and Their Clients in Washington State
          </h1>
          <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-3" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
            Practical property guidance when your clients face inherited property, trust-owned homes, estate transitions, or senior housing changes.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
              Discuss a Client Situation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Supporting paragraph */}
    <section className="py-10 md:py-14 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-4">
            Financial planners working with clients in transition — estate settlements, <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">senior housing changes</Link>, inherited property, or trust-owned real estate — regularly encounter property questions that affect the broader financial picture. What is the home realistically worth in its current condition? Should the client sell now or prepare the property first? How does a senior housing transition interact with the client's retirement income plan?
          </p>
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8]">
            These decisions benefit from real estate expertise that goes beyond a listing pitch. David Stein's dual background as a licensed real estate broker and a <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">Washington State Certified Residential Appraiser</Link> means your clients receive honest, condition-informed property analysis — the kind that integrates cleanly with the financial planning work you're already doing.
          </p>
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
