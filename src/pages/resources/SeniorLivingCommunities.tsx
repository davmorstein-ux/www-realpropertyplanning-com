import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import CTASection from "@/components/CTASection";

const SeniorLivingCommunities = () => (
  <>
    <SEOHead
      title="Senior Living Communities | Resources | Real Property Planning"
      description="Assisted living, independent living, and memory care communities across Western Washington."
      canonicalUrl="https://www.realpropertyplanning.com/resources/senior-living-communities"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Resources", url: "https://www.realpropertyplanning.com/resources" },
        { name: "Senior Living Communities", url: "https://www.realpropertyplanning.com/resources/senior-living-communities" },
      ]}
    />
    <Header />
    <main>
      <section className="bg-secondary py-14 md:py-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">Resources</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Senior Living Communities</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Assisted living, independent living, and memory care communities across Western Washington. Coming soon — David's recommended communities.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
      <RelatedServices currentPath="/resources/senior-living-communities" />
    </main>
    <Footer />
  </>
);

export default SeniorLivingCommunities;
