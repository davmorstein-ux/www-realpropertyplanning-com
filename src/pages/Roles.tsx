import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import RolesAndResponsibilities from "@/components/RolesAndResponsibilities";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const Roles = () => (
  <div className="min-h-screen flex flex-col">
    <SEOHead
      title="Roles & Responsibilities | Executors, Trustees & POA — Washington"
      description="Clear guidance on the roles that govern estates — executors, trustees, power of attorney, and the duties each carries in Washington State."
    />
    <BreadcrumbSchema items={[{ name: "Roles & Responsibilities", url: "/roles" }]} />
    <Header />
    <main className="flex-1">
      <RolesAndResponsibilities />
    </main>
    <DisclaimerSection />
    <Footer />
  </div>
);

export default Roles;
