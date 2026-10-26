import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FeaturedProviderPlaceholder from "@/components/FeaturedProviderPlaceholder";
import SiteDisclaimerBlock from "@/components/SiteDisclaimerBlock";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroBandTitle from "@/components/HeroBandTitle";

import BackLink from "@/components/BackLink";
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
        <HeroBandTitle as="h1" compact>Probate Attorney</HeroBandTitle>
      </section>

      <FeaturedProviderPlaceholder
        heading="Featured Probate Attorney"
        seeAlso={{ href: "/for-probate-attorneys", label: "See the featured probate attorney" }}
        altLabel="featured probate attorney"
      />

      <p className="attorney-role-description">
        A probate attorney guides families, executors, and trustees through the legal process of settling an estate after someone passes away. They handle court filings, interpret wills and trust documents, resolve disputes among heirs, and ensure the estate is administered according to Washington State law. If the estate includes real property, a probate attorney is typically one of the first professionals involved.
      </p>

      <div className="flex justify-center my-8">
        <BackLink to="/professionals/attorneys" label="Attorneys" />
      </div>

      <SiteDisclaimerBlock />
    </main>
    <Footer />
  </>
);

export default ProbateEstateAttorneys;
