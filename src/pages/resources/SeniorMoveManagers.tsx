import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import CTASection from "@/components/CTASection";

const SeniorMoveManagers = () => (
  <>
    <SEOHead
      title="Senior Move Managers | Resources | Real Property Planning"
      description="Senior move management professionals in Western Washington who help coordinate and manage senior relocations."
      canonicalUrl="https://www.realpropertyplanning.com/resources/senior-move-managers"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Resources", url: "https://www.realpropertyplanning.com/resources" },
        { name: "Senior Move Managers", url: "https://www.realpropertyplanning.com/resources/senior-move-managers" },
      ]}
    />
    <Header />
    <main>
      <section className="bg-secondary py-14 md:py-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">Resources</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Senior Move Managers</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Professionals who coordinate and manage the physical and emotional aspects of relocating seniors. Coming soon — David's recommended senior move managers in Western Washington.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
      <RelatedServices currentPath="/resources/senior-move-managers" />
    </main>
    <Footer />
  </>
);

export default SeniorMoveManagers;
