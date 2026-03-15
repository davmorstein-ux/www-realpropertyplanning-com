import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import CTASection from "@/components/CTASection";

const EstateSaleCompanies = () => (
  <>
    <SEOHead
      title="Estate Sale Companies | Resources | Real Property Planning"
      description="Estate sale companies in Western Washington that organize, price, and conduct sales of personal property and household contents."
      canonicalUrl="https://www.realpropertyplanning.com/resources/estate-sale-companies"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Resources", url: "https://www.realpropertyplanning.com/resources" },
        { name: "Estate Sale Companies", url: "https://www.realpropertyplanning.com/resources/estate-sale-companies" },
      ]}
    />
    <Header />
    <main>
      <section className="bg-secondary py-14 md:py-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">Resources</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Estate Sale Companies</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Companies that organize, price, and conduct estate sales for personal property and household contents. Coming soon — David's recommended estate sale companies in Western Washington.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
      <RelatedServices currentPath="/resources/estate-sale-companies" />
    </main>
    <Footer />
  </>
);

export default EstateSaleCompanies;
