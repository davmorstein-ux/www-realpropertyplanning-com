import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";

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
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">Resources</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Property Preparation Services</h1>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              Getting an Estate Property Market-Ready
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Estate and transition properties often need cleanout, minor repairs, painting, landscaping, or light staging before listing. Property preparation services handle the hands-on work of transforming a home from its current condition into a property that shows well to buyers and commands a fair market price.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Real Property Planning coordinates with property preparation vendors as part of the <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">sale process</Link>. David Stein evaluates which improvements are worth the investment and which are not — ensuring preparation decisions are guided by market data, not guesswork.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-5">
              Recommended Professionals
            </h2>
            <div className="bg-secondary border border-border rounded-xl px-6 py-8 md:px-8 text-center">
              <p className="text-muted-foreground text-base leading-relaxed">
                David is currently compiling a list of recommended property preparation services in Western Washington. Check back soon, or <Link to="/contact" className="text-accent hover:text-gold underline underline-offset-4">contact David</Link> for a current referral.
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
      <RelatedServices currentPath="/resources/property-preparation-services" />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default PropertyPreparationServices;
