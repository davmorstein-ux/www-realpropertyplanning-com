import Header from "@/components/Header";
import BackToProfessionals from "@/components/BackToProfessionals";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FeaturedProviderPlaceholder from "@/components/FeaturedProviderPlaceholder";
import SiteDisclaimerBlock from "@/components/SiteDisclaimerBlock";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroBandTitle from "@/components/HeroBandTitle";

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
<HeroBandTitle as="h1" compact>Estate Planning Attorney</HeroBandTitle>
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
      <BackToProfessionals />
    </main>
    <Footer />
  </div>
);

export default EstatePlanningPowersOfAttorney;
