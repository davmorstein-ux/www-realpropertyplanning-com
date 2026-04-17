import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Link } from "react-router-dom";

const IndependentLiving = () => (
  <>
    <SEOHead
      title="Independent Living | Senior Living | Real Property Planning"
      description="Learn about independent living communities for active seniors seeking a maintenance-free lifestyle throughout Washington State."
      canonical="https://www.realpropertyplanning.com/senior-living/independent-living"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Senior Living & Relocation", url: "https://www.realpropertyplanning.com/senior-living-and-relocation" },
        { name: "Independent Living", url: "https://www.realpropertyplanning.com/senior-living/independent-living" },
      ]}
    />
    <Header />
    <main id="main-content">
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-base">Senior Living</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-4">Independent Living</h1>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Communities designed for active seniors who want a maintenance-free lifestyle with access to social activities and shared amenities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-secondary border border-border rounded-xl px-6 py-8 md:px-8 text-center">
              <p className="text-muted-foreground text-base leading-relaxed">
                This page is being developed with detailed information about independent living communities throughout Washington State. Check back soon, or{" "}
                <Link to="/contact" className="text-accent hover:text-gold underline underline-offset-4">Contact us</Link> for guidance.
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
      <RelatedServices currentPath="/senior-living/independent-living" />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default IndependentLiving;
