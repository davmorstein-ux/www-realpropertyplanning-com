import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import CTASection from "@/components/CTASection";

const MovingRelocationServices = () => (
  <>
    <SEOHead
      title="Moving & Relocation Services | Resources | Real Property Planning"
      description="Moving companies and relocation specialists for estate and senior transitions in Western Washington."
      canonicalUrl="https://www.realpropertyplanning.com/resources/moving-relocation-services"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Resources", url: "https://www.realpropertyplanning.com/resources" },
        { name: "Moving & Relocation Services", url: "https://www.realpropertyplanning.com/resources/moving-relocation-services" },
      ]}
    />
    <Header />
    <main>
      <section className="bg-secondary py-14 md:py-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">Resources</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Moving & Relocation Services</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Moving companies and relocation specialists experienced with estate and senior transitions. Coming soon — David's recommended movers in Western Washington.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
      <RelatedServices currentPath="/resources/moving-relocation-services" />
    </main>
    <Footer />
  </>
);

export default MovingRelocationServices;
