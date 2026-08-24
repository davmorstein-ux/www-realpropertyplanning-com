import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import ProviderTile from "@/components/ProviderTile";
import purpleGroupPhoto from "@/assets/providers/cpa-purple-group-tenly-jessica-seattle.webp";
const purpleGroupLogo = "/the-purple-group-logo.webp";

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

    
    <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
      <div style={{ lineHeight: 0 }}>
<HeroBandTitle as="h1">CPA &amp; TAX PROFESSIONAL GUIDANCE</HeroBandTitle>
      </div>
    </section>


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
            title="Co-Founders"
            name2="Jessica Simons, CPA"
            title2=""
            company="The Purple Group"
            photo={purpleGroupPhoto}
            photoAlt="Photo of Tenly Krakoff and Jessica Simons, CPAs at The Purple Group in Seattle"
            logo={purpleGroupLogo}
            logoAlt="The Purple Group logo"
            phone="(425) 207-3990"
            email="hello@thepurplegroup.com"
            website="https://www.thepurplegroup.com"
            bio={PURPLE_GROUP_BIO}
            specialty="Tax planning, estate and trust taxation, and financial strategy for individuals, small businesses, and high-net-worth clients."
          />
        </div>
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

    {/* Cross-link to bookkeeping.
        Bookkeepers and CPAs are adjacent but distinct: a bookkeeper maintains
        the records, a CPA files on them. Someone landing here with disorganised
        books often needs the former first, so the link earns its place rather
        than being a directory shortcut. It is deliberately NOT the only route
        to /bookkeeping-services — a visitor looking for a bookkeeper has no
        reason to open a page labelled CPAs. The card in Financial & Valuation
        Professionals is the primary entrance; this is the secondary one. */}
    <section className="py-10 md:py-12 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#246044" }}>
            Looking for Bookkeeping Support?
          </h2>
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-6">
            A bookkeeper keeps financial records accurate and current throughout the year, which is what makes a CPA's
            work at tax time faster and more accurate. If your books have fallen behind, or an estate includes a
            business or rental property whose records need organising, that work comes first.
          </p>
          <Link to="/bookkeeping-services" className="gold-cta" style={{ textDecoration: "none" }}>
            Bookkeeping Services
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
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
