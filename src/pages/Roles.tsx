import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import RolesAndResponsibilities from "@/components/RolesAndResponsibilities";

const Roles = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <RolesAndResponsibilities />
    </main>
    <DisclaimerSection />
    <Footer />
  </div>
);

export default Roles;
