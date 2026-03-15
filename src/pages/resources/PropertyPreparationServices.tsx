import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import CTASection from "@/components/CTASection";

const PropertyPreparationServices = () => (
  <>
    <SEOHead
      title="Property Preparation Services | Resources | Real Property Planning"
      description="Cleanout, staging, repair, and preparation services for estate and transition properties in Western Washington."
      canonical="https://www.realpropertyplanning.com/resources/property-preparation-services"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Resources", url: "https://www.realpropertyplanning.com/resources" },
        { name: "Property Preparation Services", url: "https://www.realpropertyplanning.com/resources/property-preparation-services" },
      ]}
    />
    <Header />
    <main>
      <section className="bg-secondary py-14 md:py-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">Resources</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Property Preparation Services</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Cleanout, staging, repair, and preparation services to get estate and transition properties market-ready. Coming soon — David's recommended service providers.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
      <RelatedServices currentPath="/resources/property-preparation-services" />
    </main>
    <Footer />
  </>
);

export default PropertyPreparationServices;
