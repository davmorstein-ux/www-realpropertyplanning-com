import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import PlanningAndNextSteps from "@/components/PlanningAndNextSteps";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const Planning = () => (
  <div className="min-h-screen flex flex-col">
    <SEOHead
      title="Planning & Next Steps | Estate & Senior Transition Roadmap — WA"
      description="A practical roadmap for planning ahead — estate prep, property decisions, and senior housing transitions guided with care across Washington State."
    />
    <BreadcrumbSchema items={[{ name: "Planning & Next Steps", url: "/planning" }]} />
    <Header />
    <main className="flex-1">
      <PlanningAndNextSteps />
    </main>
    <DisclaimerSection />
    <Footer />
  </div>
);

export default Planning;
