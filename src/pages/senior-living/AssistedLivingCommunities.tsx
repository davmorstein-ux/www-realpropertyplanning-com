import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Link } from "react-router-dom";
import ServicePageNav from "@/components/ServicePageNav";

const AssistedLivingCommunities = () => (
  <>
    <SEOHead
      title="Assisted Living Communities | Senior Living | Real Property Planning"
      description="Learn about assisted living communities offering daily support, social activities, and on-site amenities for seniors throughout Washington State."
      canonical="https://www.realpropertyplanning.com/senior-living/assisted-living-communities"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Senior Living & Relocation", url: "https://www.realpropertyplanning.com/senior-living-and-relocation" },
        { name: "Assisted Living Communities", url: "https://www.realpropertyplanning.com/senior-living/assisted-living-communities" },
      ]}
    />
    <Header />
    <main>
      <section className="bg-secondary py-14 md:py-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">Senior Living</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Assisted Living Communities</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Larger communities that offer varying levels of daily support, social activities, and on-site amenities while maintaining independence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-secondary border border-border rounded-xl px-6 py-8 md:px-8 text-center">
              <p className="text-muted-foreground text-base leading-relaxed">
                This page is being developed with detailed information about assisted living communities throughout Washington State. Check back soon, or{" "}
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
      <RelatedServices currentPath="/senior-living/assisted-living-communities" />
      <ServicePageNav />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AssistedLivingCommunities;
