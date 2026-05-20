import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FeaturedProviderPlaceholder from "@/components/FeaturedProviderPlaceholder";
import SiteDisclaimerBlock from "@/components/SiteDisclaimerBlock";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/elder-law-attorney-hero.png";

const AttorneysForElderLawAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Elder Law Attorneys in Washington State | Real Property Planning"
      description="An elder law attorney helps seniors and families with long-term care planning, Medicaid, guardianship, and incapacity planning in Washington State."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Elder Law Attorneys", url: "/attorneys/for-elder-law-attorneys" },
      ]}
    />
    <Header />
    <main id="main-content">
      <section className="w-full bg-secondary" style={{ marginTop: 0, paddingTop: 0 }}>
        <div className="container px-6 lg:px-8 py-10 md:py-14 flex justify-center">
          <img
            src={heroImage}
            alt="Elder law attorney at desk reviewing estate plan documents"
            className="max-w-full h-auto max-h-[420px] object-contain"
            loading="eager"
          />
        </div>
        <HeroBandTitle compact>Elder Law Attorney</HeroBandTitle>
      </section>

      <FeaturedProviderPlaceholder
        heading="Featured Elder Law Attorney — Coming Soon"
        altLabel="featured elder law attorney"
      />

      <p className="attorney-role-description">
        An elder law attorney focuses on the legal needs that arise as people age — including long-term care planning, Medicaid eligibility, guardianship, conservatorship, and incapacity planning. They help seniors and their families make important decisions about care, housing, and assets before a crisis creates pressure. When the family home is part of the picture, an elder law attorney is often the most important advisor involved.
      </p>

      <SiteDisclaimerBlock />
    </main>
    <Footer />
  </div>
);

export default AttorneysForElderLawAttorneys;
