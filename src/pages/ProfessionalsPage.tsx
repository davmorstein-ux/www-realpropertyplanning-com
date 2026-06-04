import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import ProfessionalsAndServices from "@/components/ProfessionalsAndServices";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import heroImage from "@/assets/professionals-hero.webp";

const ProfessionalsPage = () => (
  <div className="min-h-screen flex flex-col">
    <SEOHead
      title="Professionals & Services | Estate, Probate & Senior Specialists — WA"
      description="Connect with vetted attorneys, CPAs, lenders, appraisers, and senior transition specialists serving families across Washington State."
    />
    <BreadcrumbSchema items={[{ name: "Professionals & Services", url: "/professionals" }]} />
    <Header />
    <main className="flex-1">
      <section className="pt-0 pb-0 lg:pt-0 lg:pb-0 bg-transparent">
        <div style={{ lineHeight: 0 }}>
          <img
            src={heroImage}
            alt="Professionals and services — Washington State estate, probate, and senior transition specialists"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover block"
            loading="eager"
          />
          <HeroBandTitle>Professionals &amp; Services</HeroBandTitle>
        </div>
      </section>

      <ProfessionalsAndServices />
    </main>
    <DisclaimerSection />
    <Footer />
  </div>
);

export default ProfessionalsPage;
