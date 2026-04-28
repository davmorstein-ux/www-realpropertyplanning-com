import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import grayDivorceIcon from "@/assets/icons/probate-estate-resources-icon-washington.webp";

const GrayDivorce = () => {
  return (
    <>
      <SEOHead
        title="Gray Divorce and the Family Home in Washington State | Real Property Planning"
        description="Guidance for Washington State couples over 50 navigating the family home during divorce. Calm, neutral real estate coordination from a Licensed Broker & Certified Appraiser."
        canonical="https://www.realpropertyplanning.com/gray-divorce"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.realpropertyplanning.com/" },
          { name: "Gray Divorce", url: "https://www.realpropertyplanning.com/gray-divorce" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-3 md:pt-4 pb-14 md:pb-16 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <img
                src={grayDivorceIcon}
                alt=""
                aria-hidden="true"
                className="mx-auto max-w-[18rem] w-full h-auto object-contain mb-4"
                loading="lazy"
              />
              <p className="font-sans text-sm md:text-base tracking-[0.2em] uppercase text-gold font-semibold mb-4">
                Planning &amp; Next Steps
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold mb-6 leading-tight">
                Gray Divorce and Your Home — What Washington Couples Need to Know
              </h1>
              <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                When a long marriage ends after 50, the family home is often the most complex — and emotional — asset to navigate. Real Property Planning helps separating couples understand their options clearly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold w-full sm:w-auto">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <DisclaimerSection />
      </main>
      <Footer />
    </>
  );
};

export default GrayDivorce;
