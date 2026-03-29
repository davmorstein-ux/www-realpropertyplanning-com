import { Button } from "@/components/ui/button";
import iconEmail3d from "@/assets/icons/icon-email-3d.png";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const CTASection = () => {
  return (
    <section data-nosnippet className="py-20 lg:py-28 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-eyebrow">
            Let's Talk
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
            Not Sure Where to Start? That's Exactly Where Most People Are.
          </h2>
          <p className="text-muted-foreground text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
            You don't need to have everything figured out before reaching out. A short conversation is usually the easiest way to get clarity on what comes next.
          </p>
          <p className="text-muted-foreground text-base mb-10 max-w-2xl mx-auto leading-relaxed">
            If the property is in Washington, David can help directly. If it involves another state, he can connect you with a trusted eXp Realty partner.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <a href="tel:2069003015">
              <Button 
                variant="navy3d"
                size="lg" 
                className="px-8"
              >
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                Call (206) 900-3015
              </Button>
            </a>
            <a href="mailto:david@realpropertyplanning.com">
              <Button 
                variant="gold"
                size="lg" 
                className="px-8"
              >
                Send a Message Instead
              </Button>
            </a>
          </div>

          <p className="text-muted-foreground/70 text-sm mb-3 max-w-md mx-auto">
            No pressure, no sales pitch — just a practical conversation about your situation.
          </p>
          <p className="text-muted-foreground/50 text-sm mb-10 max-w-md mx-auto">
            Even if you're early in the process, it's worth a quick call.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <img src={iconEmail3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" />
            <a href="mailto:david@realpropertyplanning.com" className="hover:text-gold transition-colors">
              david@realpropertyplanning.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
