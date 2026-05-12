import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import ProfessionalsAndServices from "@/components/ProfessionalsAndServices";
import heroImage from "@/assets/professionals-hero.png";

const ProfessionalsPage = () => (
  <div className="min-h-screen flex flex-col">
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
          {/* Thin white gap */}
          <div className="bg-white h-[3px]" aria-hidden="true" />
          {/* Blue band — standardized height */}
          <div className="bg-primary py-9 md:py-10">
            <div className="container px-6 lg:px-8">
              <div className="font-serif text-[32px] md:text-[40px] lg:text-2xl" style={{ color: 'white', fontWeight: 600, textAlign: 'center', margin: 0, lineHeight: 1.2 }}>
                Professionals &amp; Services
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProfessionalsAndServices />
    </main>
    <DisclaimerSection />
    <Footer />
  </div>
);

export default ProfessionalsPage;
