import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";

const EstateSaleCompanies = () => (
  <>
    <SEOHead
      title="Estate Sale Companies | Resources | Real Property Planning"
      description="Estate sale companies throughout Washington State that organize, price, and conduct sales of personal property and household contents during probate and estate transitions."
      canonical="https://www.realpropertyplanning.com/resources/estate-sale-companies"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Resources", url: "https://www.realpropertyplanning.com/resources" },
        { name: "Estate Sale Companies", url: "https://www.realpropertyplanning.com/resources/estate-sale-companies" },
      ]}
    />
    <Header />
    <main id="main-content">
      <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-base">Resources</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-4">Estate Sale Companies</h1>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              What Estate Sale Companies Do
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Estate sale companies organize, price, and conduct on-site sales of personal property, furniture, collectibles, and household contents. They are often engaged during <Link to="/probate-estate-sales" className="text-accent hover:text-gold underline underline-offset-4">probate and estate sales</Link> when families need to liquidate the contents of a home before the property is listed or transferred.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Real Property Planning works with estate sale companies to coordinate timing between the contents sale and the real estate listing process, ensuring a smooth transition from cleanout to market-ready preparation.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-5">
              Recommended Professionals
            </h2>
            <div className="bg-secondary border border-border rounded-xl px-6 py-8 md:px-8 text-center">
              <p className="text-muted-foreground text-base leading-relaxed">
                David is currently compiling a list of recommended estate sale companies throughout Washington State. Check back soon, or <Link to="/contact" className="text-accent hover:text-gold underline underline-offset-4">contact David</Link> for a current referral.
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
      <RelatedServices currentPath="/resources/estate-sale-companies" />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default EstateSaleCompanies;
