import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

import { Link } from "react-router-dom";

import ProviderTile from "@/components/ProviderTile";
import tiffanyPhoto from "@/assets/tiffany-lane-financial-planner-new-york-life-seattle.webp";
import nyLifeLogo from "@/assets/new-york-life-logo.webp";
import heroImage from "@/assets/financial-planners-hero-washington.webp";

const jsonLd = articleSchema({
  headline: "Real Estate Guidance for Financial Planners and Their Clients in Washington State",
  description: "Real Property Planning supports financial planners whose clients face inherited property, trust-owned homes, or senior housing transitions in Washington State. Puget Sound focus.",
  url: "/for-financial-planners",
  datePublished: "2025-01-15",
  dateModified: "2026-04-14",
  about: ["Financial planner guidance", "Estate property", "Senior transition property"],
});

const TIFFANY_BIO = `With a deep personal understanding of how life transitions impact families, I focus on guiding retirees and their loved ones through every step of their financial journey. After witnessing my own family navigate the complexities of Alzheimer's and elder care, I've dedicated my career to helping others plan with confidence. I work closely with retirees and their adult children, offering guidance so families can navigate estate planning, downsizing, and legacy protection together. For over 180 years, New York Life has existed for one purpose: to help families and businesses achieve financial security and peace of mind. When you need us, we are there.`;

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

    {/* Hero image — standardized height */}
    <section className="bg-white">
      <img
        src={heroImage}
        alt="Financial planners guidance — estate and senior transition real estate in Washington State"
        className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover block"
        loading="eager"
      />
    </section>

    {/* Thin white gap */}
    <div className="bg-white h-[2px]" aria-hidden="true" />

    {/* Blue band — title (standardized height) */}
    <section className="bg-primary py-9 md:py-10">
      <div className="container px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-primary-foreground font-semibold leading-tight">
            Guidance for Financial Planning
          </h1>
        </div>
      </div>
    </section>

    {/* Supporting paragraph */}
    <section className="py-10 md:py-14 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8]">
            Real Property Planning connects clients with experienced Financial Planners who help support informed property decisions.
          </p>
        </div>
      </div>
    </section>

    <section className="py-10 md:py-14 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          <ProviderTile
            name="Tiffany Lane"
            title="Financial Professional"
            company="New York Life — Seattle General Office"
            photo={tiffanyPhoto}
            photoAlt="Photo of Tiffany Lane, Financial Planner at New York Life"
            logo={nyLifeLogo}
            logoAlt="New York Life logo"
            phone="(206) 999-2116"
            phone2="(206) 888-4960"
            email="tcford@ft.newyorklife.com"
            website="https://www.newyorklife.com"
            bio={TIFFANY_BIO}
            specialty="Retirement planning, estate planning, downsizing guidance, and legacy protection for retirees and their families."
          />
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

    
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default ForFinancialPlanners;
