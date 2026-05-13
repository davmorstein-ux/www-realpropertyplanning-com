import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconCpas from "@/assets/icons/estate-cpas-financial-icon-washington.webp";
import CTASection from "@/components/CTASection";

const jsonLd = articleSchema({
  headline: "Real Estate Guidance for CPAs and Their Clients in Washington State",
  description: "Real Property Planning provides experienced real estate support for CPAs whose clients face inherited property, probate sales, or estate transitions in Washington State.",
  url: "/for-cpas",
  datePublished: "2025-01-15",
  dateModified: "2026-04-14",
  about: ["CPA real estate guidance", "Estate property", "Inherited property"],
});

const ForCPAs = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Guidance for CPAs | Estate & Inherited Property Support | Real Property Planning"
      description="Real Property Planning provides experienced real estate support for CPAs whose clients face inherited property, probate sales, or estate transitions in Washington State."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[{ name: "For CPAs", url: "/for-cpas" }]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
      <div style={{ lineHeight: 0 }}>
        <img
          src="/assets/cpas_hero_clean.png"
          alt="Guidance for CPAs and tax professionals — Washington State estate and probate real estate"
          className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover block"
          loading="eager"
        />
        <div className="bg-white h-[3px]" aria-hidden="true" />
        <div className="bg-primary py-9 md:py-10">
          <h1 className="font-serif text-[32px] md:text-[40px] lg:text-[44px]" style={{ fontWeight: 600, color: 'white', textAlign: 'center', margin: 0 }}>
            GUIDANCE FOR CPAs &amp; TAX PROFESSIONALS
          </h1>
        </div>
      </div>
    </section>

    {/* Supporting paragraph */}
    <section className="py-10 md:py-14 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8]">
            CPAs advising estates, trusts, and clients in transition often need clear real estate insight beyond tax and accounting. Real Property Planning provides valuation-informed guidance on pricing, property condition, and sale timing so decisions can be made with accurate, practical information.
          </p>
        </div>
      </div>
    </section>

    {/* More information link */}
    <section className="py-6 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Link to="/for-cpas/learn-more" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
            More information about CPAs →
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

export default ForCPAs;
