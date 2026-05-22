import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DominikMusafiaCard from "@/components/DominikMusafiaCard";
import SiteDisclaimerBlock from "@/components/SiteDisclaimerBlock";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroBandTitle from "@/components/HeroBandTitle";
import divorceCircle from "@/assets/divorce-attorney-hero.png";

const ForDivorceAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Divorce Attorneys in Washington State | Real Property Planning"
      description="A divorce attorney helps individuals and couples navigate the legal process of ending a marriage, including asset division and real property matters."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Divorce Attorneys", url: "/for-divorce-attorneys" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section className="w-full bg-secondary" style={{ marginTop: 0, paddingTop: 0 }}>
        <div className="container px-6 lg:px-8 py-10 md:py-14 flex justify-center">
          <img
            src={divorceCircle}
            alt="Divorce attorney at desk reviewing divorce agreement"
            className="max-w-full h-auto max-h-[420px] object-contain"
            loading="eager"
          />
        </div>
        <HeroBandTitle compact>Divorce Attorney</HeroBandTitle>
      </section>

      {/* Featured Providers */}
      <DominikMusafiaCard />

      <p className="attorney-role-description">
        A divorce attorney helps individuals and couples navigate the legal process of ending a marriage. They handle asset division, spousal support, parenting plans, and court filings. When the family home or other real property is involved, a divorce attorney works to ensure it is fairly addressed as part of the overall settlement.
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

export default ForDivorceAttorneys;
