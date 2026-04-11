import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Link } from "react-router-dom";

const howIHelp = [
  "Pricing strategy grounded in certified appraisal experience",
  "Property preparation and clean-out coordination",
  "Support for out-of-state families managing property remotely",
  "Coordination with attorneys, CPAs, and fiduciaries",
  "Guidance through probate, trust, and estate property sales",
];

const whoHelps = [
  "Seniors transitioning to a new living situation",
  "Families helping aging parents with property decisions",
  "Executors managing estate property sales",
  "Trustees overseeing trust-held real estate",
  "Out-of-state owners managing Washington property",
  "Professionals needing a trusted real estate resource",
];

const RealtorLearnMore = () => (
  <>
    <SEOHead
      title="Realtor Guide — How David Stein Helps | Real Property Planning"
      description="Detailed information about real estate services for seniors, families, executors, and professionals navigating property decisions in Washington State."
    />
    <BreadcrumbSchema items={[
      { name: "Realtor", url: "/realtor" },
      { name: "Learn More", url: "/realtor/learn-more" },
    ]} />
    <Header />
    <main id="main-content">
      <section className="bg-secondary py-12 md:py-16">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">In-Depth Guide</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">How David Helps as a Realtor</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Navigating a property decision during a life transition requires patience, experience, and coordination.
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
            <Link to="/realtor" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
              ← Back to Realtor
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
    <Footer />
  </>
);

export default RealtorLearnMore;
