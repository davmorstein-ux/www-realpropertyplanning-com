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
        title="Testimonials & Reviews | Real Property Planning"
        description="Read client reviews and testimonials about working with Real Property Planning for probate property sales, estate transitions, and senior moves in Western Washington."
        canonical="https://www.realpropertyplanning.com/testimonials"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.realpropertyplanning.com/" },
          { name: "Testimonials", url: "https://www.realpropertyplanning.com/testimonials" },
        ]}
      />
      <Header />
      <main>
        <TestimonialsSection />
      </main>
      <DisclaimerSection />
      <Footer />
    </>
  );
};

export default Testimonials;
