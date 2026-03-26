import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Link } from "react-router-dom";

const MemoryCare = () => (
  <>
    <SEOHead
      title="Memory Care | Senior Living | Real Property Planning"
      description="Learn about memory care programs designed for individuals living with Alzheimer's or dementia in Western Washington."
      canonical="https://www.realpropertyplanning.com/senior-living/memory-care"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Senior Living & Relocation", url: "https://www.realpropertyplanning.com/senior-living-and-relocation" },
        { name: "Memory Care", url: "https://www.realpropertyplanning.com/senior-living/memory-care" },
      ]}
    />
    <Header />
    <main>
      <section className="bg-secondary py-14 md:py-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">Senior Living</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Memory Care</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Specialized programs designed for individuals living with Alzheimer's or other forms of dementia, with structured routines and secure environments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-secondary border border-border rounded-xl px-6 py-8 md:px-8 text-center">
              <p className="text-muted-foreground text-base leading-relaxed">
                This page is being developed with detailed information about memory care options in Western Washington. Check back soon, or{" "}
                <Link to="/contact" className="text-accent hover:text-gold underline underline-offset-4">contact David</Link> for guidance.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link to="/senior-living-and-relocation" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium">
                ← Back to Senior Living & Relocation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <RelatedServices currentPath="/senior-living/memory-care" />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default MemoryCare;
