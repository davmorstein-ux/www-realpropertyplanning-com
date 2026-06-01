import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
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
import ProviderTile from "@/components/ProviderTile";
import purpleGroupPhoto from "@/assets/providers/cpa-purple-group-tenly-jessica-seattle.webp";
import purpleGroupLogo from "@/assets/providers/cpa-purple-group-logo-seattle.webp";

const PURPLE_GROUP_BIO = `Tenly Krakoff, CPA and Jessica Simons, CPA are the co-founders of The Purple Group, a CPA firm built to deliver a more personalized, relationship-driven experience. Tenly holds a Master's in Accountancy (Taxation) from Gonzaga University and is a Lean Six Sigma–certified professional specializing in tax planning, operational strategy, and process improvement for closely held businesses. Jessica holds a Master's in Accounting (Taxation) from Washington State University and brings over a decade of experience in tax strategy for high-net-worth individuals, small businesses, and estates and trusts. Together they combine expertise with technology to help clients simplify finances, support growth, and focus on what matters most.`;

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
          src="/assets/cpas_hero_clean.webp"
          alt="Guidance for CPAs and tax professionals — Washington State estate and probate real estate"
          className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover block"
          loading="eager"
        />
        <HeroBandTitle>CPA &amp; TAX PROFESSIONAL GUIDANCE</HeroBandTitle>
      </div>
    </section>

    {/* Supporting paragraph */}
    <section className="py-10 md:py-14 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8]">
            CPAs and tax professionals help people understand the financial and tax consequences of major decisions, including the sale, transfer, or ownership of real estate. When a senior is transitioning from a longtime home or a property is going through probate, they are especially important because they can help identify tax implications, coordinate financial records, and support decisions that affect timing, proceeds, and potential liabilities.
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

    {/* Featured CPAs */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-3">
            Featured CPAs
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            ​
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <ProviderTile
            name="Tenly Krakoff, CPA"
            title="Co-Founder"
            company="The Purple Group"
            photo={purpleGroupPhoto}
            photoAlt="Photo of Tenly Krakoff and Jessica Simons, CPAs at The Purple Group in Seattle"
            logo={purpleGroupLogo}
            logoAlt="The Purple Group logo"
            website="https://www.thepurplegroup.com"
            bio={PURPLE_GROUP_BIO}
            specialty="Tax planning, estate and trust taxation, and financial strategy for individuals, small businesses, and high-net-worth clients."
          />
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
