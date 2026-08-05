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
       description="Experiences shared by families and professionals who have used Real Property Planning to navigate senior transitions, probate, and adult family home decisions in Washington State."
        canonical="https://realpropertyplanning.com/testimonials"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com/" },
          { name: "Testimonials", url: "https://realpropertyplanning.com/testimonials" },
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
