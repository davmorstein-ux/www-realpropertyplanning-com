import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import ProfessionalsAndServices from "@/components/ProfessionalsAndServices";

const ProfessionalsPage = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <ProfessionalsAndServices />
    </main>
    <DisclaimerSection />
    <Footer />
  </div>
);

export default ProfessionalsPage;
