import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import iconEmail3d from "@/assets/icons/icon-email-3d.png";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const CTASection = () => {
  return (
    <section data-nosnippet className="py-20 lg:py-28 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-bold tracking-wider uppercase mb-3 text-base">
            Let's Talk
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-medium mb-6">
            Not Sure Where to Start? That's Completely Normal.
          </h2>
          <p className="text-muted-foreground text-lg mb-4 max-w-2xl mx-auto">
            A simple conversation can help bring clarity. Whether you're an attorney, executor, trustee, or family member — a short call is often the easiest first step.
          </p>
          <p className="text-muted-foreground text-base mb-10 max-w-2xl mx-auto">
            If the property is in Washington, David can help directly. If your move or sale involves another state or country, David can connect you with a trusted eXp Realty referral partner.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-navy-dark text-primary-foreground font-semibold px-8"
            >
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
              (206) 900-3015
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a 20-Minute Consultation
            </Button>
          </div>

          <p className="text-muted-foreground/70 text-sm mb-10 max-w-md mx-auto">
            No pressure. Just practical guidance for your situation.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <img src={iconEmail3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" />
            <span>david@realpropertyplanning.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
