import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div id="services">
          <ServicesSection />
        </div>
        <div id="about">
          <WhyChooseSection />
        </div>
        <div id="areas">
          <ServiceAreasSection />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
