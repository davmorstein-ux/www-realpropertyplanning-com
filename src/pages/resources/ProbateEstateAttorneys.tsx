import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FeaturedProviderPlaceholder from "@/components/FeaturedProviderPlaceholder";
import SiteDisclaimerBlock from "@/components/SiteDisclaimerBlock";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroIcon from "@/assets/probate-attorney-hero.webp";

const ProbateEstateAttorneys = () => (
  <>
    <SEOHead
      title="Probate & Estate Attorneys | Real Property Planning"
      description="A probate attorney guides families, executors, and trustees through the legal process of settling an estate in Washington State."
      canonical="https://realpropertyplanning.com/resources/probate-estate-attorneys"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Resources", url: "https://realpropertyplanning.com/resources" },
        { name: "Probate Attorney", url: "https://realpropertyplanning.com/resources/probate-estate-attorneys" },
      ]}
    />
    <Header />
    <main id="main-content">
      <section className="w-full bg-secondary" style={{ marginTop: 0, paddingTop: 0 }}>
        <div className="container px-6 lg:px-8 py-10 md:py-14 flex justify-center">
          <div
  className="rpp-hero"
  role="img"
  aria-label="Probate attorney at desk reviewing estate plan documents"
  style={{ backgroundImage: `url(${heroIcon})`, height: "50vh" }}
/>
        </div>
        <HeroBandTitle compact>Probate Attorney</HeroBandTitle>
      </section>

      <FeaturedProviderPlaceholder
        heading="Featured Probate Attorney — Coming Soon"
        altLabel="featured probate attorney"
      />

      <p className="attorney-role-description">
        A probate attorney guides families, executors, and trustees through the legal process of settling an estate after someone passes away. They handle court filings, interpret wills and trust documents, resolve disputes among heirs, and ensure the estate is administered according to Washington State law. If the estate includes real property, a probate attorney is typically one of the first professionals involved.
      </p>

      <div className="flex justify-center my-8">
        <Link to="/professionals/attorneys">
          <Button variant="gold" size="lg">Back to Attorneys</Button>
        </Link>
      </div>

      <SiteDisclaimerBlock />
    </main>
    <Footer />
  </>
);

export default ProbateEstateAttorneys;
