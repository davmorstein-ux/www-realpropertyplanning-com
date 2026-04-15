import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEstateLiquidation from "@/assets/icons/estate-liquidation-services-icon-washington.webp";

const EstateLiquidation = () => (
  <>
    <SEOHead
      title="Estate Liquidation & Estate Sales | Real Property Planning"
      description="Estate liquidation services in Washington State — from estate sales and cleanouts to donation coordination and preparing the home for market. Guidance for executors, heirs, and families."
      canonical="https://www.realpropertyplanning.com/estate-liquidation"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Estate Liquidation", url: "https://www.realpropertyplanning.com/estate-liquidation" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img src={iconEstateLiquidation} alt="Estate liquidation and inherited property guidance in Washington State" className="block w-full max-w-[15rem] h-auto object-contain"  loading="lazy"/>
            </div>
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">Services</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-4">
              Estate Liquidation & Estate Sales
            </h1>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-3" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
              Coordinating the sorting, valuing, and responsible distribution of a home's contents — so the property can move toward sale.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                Schedule a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* More information link */}
      <section className="py-6 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/estate-liquidation/learn-more" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
              More information about Estate Liquidation →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default EstateLiquidation;
