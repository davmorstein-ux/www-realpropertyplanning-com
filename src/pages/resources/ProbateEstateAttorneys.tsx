import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import CTASection from "@/components/CTASection";

const ProbateEstateAttorneys = () => (
  <>
    <SEOHead
      title="Probate & Estate Attorneys | Resources | Real Property Planning"
      description="Probate and estate attorneys in Western Washington who guide families and fiduciaries through estate administration."
      canonical="https://www.realpropertyplanning.com/resources/probate-estate-attorneys"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Resources", url: "https://www.realpropertyplanning.com/resources" },
        { name: "Probate & Estate Attorneys", url: "https://www.realpropertyplanning.com/resources/probate-estate-attorneys" },
      ]}
    />
    <Header />
    <main>
      <section className="bg-secondary py-14 md:py-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">Resources</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Probate & Estate Attorneys</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Attorneys who guide families and fiduciaries through the probate process and estate administration. Coming soon — David's recommended attorneys in Western Washington.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
      <RelatedServices currentPath="/resources/probate-estate-attorneys" />
    </main>
    <Footer />
  </>
);

export default ProbateEstateAttorneys;
