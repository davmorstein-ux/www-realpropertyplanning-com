import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import PlanningAndNextSteps from "@/components/PlanningAndNextSteps";

const Planning = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <PlanningAndNextSteps />
    </main>
    <DisclaimerSection />
    <Footer />
  </div>
);

export default Planning;
