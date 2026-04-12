import { Button } from "@/components/ui/button";
import iconEmail3d from "@/assets/icons/icon-email-3d.webp";
import iconPhone3d from "@/assets/icons/icon-phone-3d.webp";

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
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            A short conversation is usually the fastest way to get clarity. David works with families throughout Washington and can connect you with a trusted partner if the property is in another state.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <a href="tel:2069003015">
              <Button 
                variant="navy3d"
                size="lg" 
                className="px-8"
              >
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                Call (206) 900-3015
              </Button>
            </a>
            <a href="mailto:david@realpropertyplanning.com">
              <Button 
                variant="gold"
                size="lg" 
                className="px-8"
              >
                Send a Message
              </Button>
            </a>
          </div>

          <p className="text-muted-foreground text-base mb-10 max-w-md mx-auto">
            Just a practical conversation about your situation.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <img src={iconEmail3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0"  loading="lazy"/>
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
