import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FeaturedProviderPlaceholder from "@/components/FeaturedProviderPlaceholder";
import SiteDisclaimerBlock from "@/components/SiteDisclaimerBlock";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/real-estate-attorney-hero.png";

const AttorneysForRealEstateAttorney = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Attorneys in Washington State | Real Property Planning"
      description="A real estate attorney handles the legal side of property transactions — contracts, title issues, closings, and ownership transfers in Washington State."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Real Estate Attorneys", url: "/attorneys/for-real-estate-attorney" },
      ]}
    />
    <Header />
    <main id="main-content">
      <section className="w-full bg-secondary" style={{ marginTop: 0, paddingTop: 0 }}>
        <div className="container px-6 lg:px-8 py-10 md:py-14 flex justify-center">
          <img
            src={heroImage}
            alt="Real estate attorney at desk reviewing a real estate matter"
            className="max-w-full h-auto max-h-[420px] object-contain"
            loading="eager"
          />
        </div>
        <HeroBandTitle compact>Real Estate Attorney</HeroBandTitle>
      </section>

      <FeaturedProviderPlaceholder
        heading="Featured Real Estate Attorney — Coming Soon"
        altLabel="featured real estate attorney"
      />

      <p className="attorney-role-description">
        A real estate attorney handles the legal side of property transactions — reviewing contracts, resolving title issues, managing closings, and advising on ownership transfers. In estate, probate, and senior transition situations, a real estate attorney ensures that property is transferred or sold correctly under Washington State law.
      </p>

      <div className="flex justify-center my-8">
        <Link to="/professionals/attorneys">
          <Button variant="gold" size="lg">Back to Attorneys</Button>
        </Link>
      </div>

      <SiteDisclaimerBlock />
    </main>
    <Footer />
  </div>
);

export default AttorneysForRealEstateAttorney;
