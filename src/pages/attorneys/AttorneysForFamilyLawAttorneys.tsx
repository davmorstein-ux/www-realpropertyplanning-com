import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FeaturedProviderPlaceholder from "@/components/FeaturedProviderPlaceholder";
import SiteDisclaimerBlock from "@/components/SiteDisclaimerBlock";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/family-law-attorney-hero.webp";
import ParallaxHero from "@/components/ParallaxHero";

const AttorneysForFamilyLawAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Family Law Attorneys in Washington State | Real Property Planning"
      description="A family law attorney helps families with custody, parenting plans, guardianship, and spousal support — often intersecting with real estate decisions."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Family Law Attorneys", url: "/attorneys/for-family-law-attorneys" },
      ]}
    />
    <Header />
    <main id="main-content">
      <section className="w-full bg-secondary" style={{ marginTop: 0, paddingTop: 0 }}>
        <div className="container px-6 lg:px-8 py-10 md:py-14 flex justify-center">
          <ParallaxHero src={heroImage} alt="Family law attorney meeting with a family reviewing a parenting plan" />
        </div>
        <HeroBandTitle compact>Family Law Attorney</HeroBandTitle>
      </section>

      <FeaturedProviderPlaceholder
        heading="Featured Family Law Attorney — Coming Soon"
        altLabel="featured family law attorney"
      />

      <p className="attorney-role-description">
        A family law attorney helps families navigate legal matters involving children, custody, parenting plans, guardianship, and spousal support. Their work often intersects with real estate when a family home, inherited property, or shared assets need to be addressed as part of a legal resolution.
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

export default AttorneysForFamilyLawAttorneys;
