import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Link } from "react-router-dom";

const howIHelp = [
  "Objective value perspective independent of the sale outcome",
  "Pricing and valuation insight grounded in certified appraisal methodology",
  "Support for equitable estate distribution among heirs",
  "Defensible valuations for attorneys, CPAs, and fiduciary reporting",
  "Date-of-death and retrospective appraisals for estate and tax purposes",
];

const whoHelps = [
  "Heirs needing fair market value for estate distribution",
  "Executors managing probate property valuations",
  "Trustees overseeing trust-held real estate appraisals",
  "Attorneys requiring defensible property valuations",
  "Seniors and families making informed property decisions",
  "Out-of-state owners needing independent value opinions",
];

const RealEstateAppraiserLearnMore = () => (
  <>
    <SEOHead
      title="Real Estate Appraiser Guide — Certified Appraisal Services | Real Property Planning"
      description="Detailed information about certified residential appraisal services for estate, probate, trust, and senior transition situations in Washington State."
    />
    <BreadcrumbSchema items={[
      { name: "Real Estate Appraiser", url: "/real-estate-appraiser" },
      { name: "Learn More", url: "/real-estate-appraiser/learn-more" },
    ]} />
    <Header />
    <main id="main-content">
      <section className="bg-secondary py-12 md:py-16">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">In-Depth Guide</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Appraisal Services in Detail</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              An objective property valuation is the foundation of every sound real estate decision — especially during estate, probate, and senior transition situations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">How I Help</h2>
            <ul className="space-y-4">
              {howIHelp.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">Who This Helps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whoHelps.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-background rounded-lg p-4">
                  <span className="text-gold-dark mt-0.5 shrink-0">✦</span>
                  <span className="text-foreground text-sm md:text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
              ← Back to Real Estate Appraiser
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
    <Footer />
  </>
);

export default RealEstateAppraiserLearnMore;
