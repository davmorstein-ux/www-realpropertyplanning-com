import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import ProfessionalsAndServices from "@/components/ProfessionalsAndServices";
import heroImage from "@/assets/professionals-hero.webp";

const ProfessionalsPage = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <section className="pt-0 pb-0 lg:pt-0 lg:pb-0 bg-transparent">
        <div style={{ lineHeight: 0 }}>
          <div
  className="rpp-hero"
  role="img"
  aria-label="Professionals and services — Washington State estate, probate, and senior transition specialists"
  style={{ backgroundImage: `url(${heroImage})`, height: "50vh" }}
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
