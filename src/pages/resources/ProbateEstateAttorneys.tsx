import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import heroIcon from "@/assets/icons/probate-estate-resources-icon-washington.webp";

const ProbateEstateAttorneys = () => (
  <>
    <SEOHead
      title="Probate & Estate Attorneys | Resources | Real Property Planning"
      description="Probate and estate attorneys throughout Washington State who guide families, executors, and fiduciaries through estate administration and property-related legal matters."
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
    <main id="main-content">
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img src={heroIcon} alt="" aria-hidden="true" className="block w-full max-w-[15rem] h-auto object-contain" loading="lazy" />
            </div>

            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-base">Resources</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-4">Probate & Estate Attorneys</h1>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              The Role of Probate & Estate Attorneys
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Probate and estate attorneys guide families, <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">executors</Link>, trustees, and fiduciaries through the legal process of estate administration. They handle court filings, interpret wills and trust documents, resolve disputes, and ensure the estate is settled according to Washington State law.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Real Property Planning works with probate and estate attorneys regularly, providing real estate brokerage and valuation-related guidance on the property side of estate matters. Real Property Planning coordinates with the legal team to align timing, pricing, and sale strategy with the overall estate administration process. Learn more about <Link to="/for-attorneys" className="text-accent hover:text-gold underline underline-offset-4">how Our team works with attorneys</Link>.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-5">
              Recommended Professionals
            </h2>
            <div className="bg-secondary border border-border rounded-xl px-6 py-8 md:px-8 text-center">
              <p className="text-muted-foreground text-base leading-relaxed">
                Our team is currently compiling a list of recommended probate and estate attorneys throughout Washington State. Check back soon, or <Link to="/contact" className="text-accent hover:text-gold underline underline-offset-4">contact us</Link> for a current referral.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground/60 text-[15px] leading-relaxed italic">
                These professionals are listed as informational resources for visitors navigating senior transitions and estate property matters. Real Property Planning does not receive compensation for these listings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <RelatedServices currentPath="/resources/probate-estate-attorneys" />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default ProbateEstateAttorneys;
