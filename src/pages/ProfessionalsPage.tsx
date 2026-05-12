import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import ProfessionalsAndServices from "@/components/ProfessionalsAndServices";
import heroImage from "@/assets/professionals-hero.png";

const ProfessionalsPage = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      {/* Hero image — standardized height, flush with header */}
      <section className="bg-white">
        <img
          src={heroImage}
          alt="Professionals and services — Washington State estate, probate, and senior transition specialists"
          className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover block"
          loading="eager"
        />
      </section>

      {/* Thin white gap — site standard */}
      <div className="bg-white h-[6px]" aria-hidden="true" />

      {/* Blue band — title */}
      <section className="bg-primary py-9 md:py-10">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-primary-foreground font-semibold leading-tight">
              Professionals &amp; Services
            </h1>
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
