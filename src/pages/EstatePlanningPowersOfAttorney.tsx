import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FeaturedProviderPlaceholder from "@/components/FeaturedProviderPlaceholder";
import SiteDisclaimerBlock from "@/components/SiteDisclaimerBlock";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/estate-planning-attorney-hero.png";

const EstatePlanningPowersOfAttorney = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Estate Planning Attorneys in Washington State | Real Property Planning"
      description="An estate planning attorney drafts wills, trusts, powers of attorney, and healthcare directives so your wishes are legally documented."
    />
    <BreadcrumbSchema items={[{ name: "Estate Planning Attorney", url: "/estate-planning-powers-of-attorney" }]} />
    <Header />
    <main id="main-content">
      {/* HERO */}
      <section className="w-full bg-secondary" style={{ marginTop: 0, paddingTop: 0 }}>
        <div className="container px-6 lg:px-8 py-10 md:py-14 flex justify-center">
          <img
            src={heroImage}
            alt="Estate planning attorney at desk reviewing estate plan documents"
            className="max-w-full h-auto max-h-[420px] object-contain"
            loading="eager"
          />
        </div>
        <HeroBandTitle compact>Estate Planning Attorney</HeroBandTitle>
      </section>

      <FeaturedProviderPlaceholder
        heading="Featured Estate Planning Attorney — Coming Soon"
        altLabel="featured estate planning attorney"
      />

      <p className="attorney-role-description">
        An estate planning attorney helps individuals and families prepare for the future by drafting wills, trusts, powers of attorney, and healthcare directives. Their work ensures that your wishes are legally documented and that the right people have authority to act on your behalf if you cannot. Good estate planning can help families avoid confusion, conflict, and unnecessary probate proceedings.
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

export default EstatePlanningPowersOfAttorney;
