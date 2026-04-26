import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TestimonialsSection from "@/components/TestimonialsSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const Testimonials = () => {
  return (
    <>
      <SEOHead
        title="Client Reviews — Probate Real Estate & Senior Transitions in Washington State | Real Property Planning"
        description="Client reviews and testimonials about working with Real Property Planning on probate property sales, estate transitions, inherited homes, and senior moves throughout Washington State."
        canonical="https://www.realpropertyplanning.com/testimonials"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.realpropertyplanning.com/" },
          { name: "Testimonials", url: "https://www.realpropertyplanning.com/testimonials" },
        ]}
      />
      <Header />
      <main id="main-content">
        <TestimonialsSection />
      </main>
      <DisclaimerSection />
      <Footer />
    </>
  );
};

export default Testimonials;
