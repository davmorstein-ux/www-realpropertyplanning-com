import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BackToProfessionalsButton = () => (
  <section className="py-10 md:py-14 bg-background">
    <div className="container px-6 lg:px-8">
      <div className="flex justify-center">
        <Link to="/building-your-trusted-professional-team">
          <Button
            variant="navy3d"
            size="lg"
            className="px-8 py-4 h-auto min-h-[52px] text-base md:text-lg !border-2 !border-gold"
          >
            Back to Professionals
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default BackToProfessionalsButton;
