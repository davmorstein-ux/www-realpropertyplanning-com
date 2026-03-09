import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-medium tracking-wider uppercase mb-3 text-sm">
            Let's Talk
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-medium mb-6">
            Ready to Get Expert Guidance?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Whether you're an attorney seeking a reliable real estate partner, an executor navigating probate, or a family caring for aging parents — David Stein is here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-navy-dark text-primary-foreground font-semibold px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              (206) 900-3015
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span>expert@pugetsoundprobate.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
