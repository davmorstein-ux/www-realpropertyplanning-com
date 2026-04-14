import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconExecutors from "@/assets/icons/probate-executors-services-icon-washington.webp";
import CTASection from "@/components/CTASection";

const jsonLd = articleSchema({
  headline: "Executor's Guide to Selling Estate Property in Washington State",
  description: "Guidance for executors and personal representatives managing inherited real estate in Washington State. Honest valuation, full coordination, and clear communication throughout.",
  url: "/executors",
  datePublished: "2025-01-15",
  dateModified: "2026-04-14",
  about: ["Executors", "Trustees", "Personal representatives", "Estate property", "Inherited home sales"],
});

const Executors = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Executor's Guide to Selling Estate Property in Washington State | Real Property Planning"
      description="Guidance for executors and personal representatives managing inherited real estate in Washington State. Honest valuation, full coordination, and clear communication throughout."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[{ name: "For Executors", url: "/executors" }]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-3 md:mb-4">
            <img src={iconExecutors} alt="Executor and personal representative real estate guidance Washington State" className="block w-full max-w-[23rem] h-auto object-contain" loading="lazy" />
          </div>
          <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
            For Executors & Personal Representatives
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-4">
            Guidance for Executors Managing Inherited Property in Washington State
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Real Property Planning coordinates property evaluation, preparation, pricing, and sale — so you can focus on your other responsibilities.
          </p>
          <p className="text-primary-foreground/80 text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto mb-3">
            Being named executor is an honor — and an enormous responsibility. Most executors have never sold a home on behalf of an estate before, and many are managing the process from another city or state while also grieving, coordinating with attorneys, and dealing with family members who may not agree on anything. Real Property Planning exists to take the real estate burden off your plate entirely — with honest guidance, local expertise throughout{" "}
            <Link to="/counties" className="text-accent hover:text-gold underline underline-offset-4 transition-colors">King, Snohomish, Pierce, and Kitsap Counties</Link>, and the kind of steady communication that keeps everyone informed without overwhelming anyone.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
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
          <Link to="/executors/learn-more" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
            More information about Executors →
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

export default Executors;
