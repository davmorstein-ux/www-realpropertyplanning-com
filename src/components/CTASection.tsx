import { Button } from "@/components/ui/button";
import iconEmail3d from "@/assets/icons/real-estate-email-contact-icon-washington.webp";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

export interface CTASectionProps {
  /** Small uppercase eyebrow above the heading. Pass null to hide. */
  eyebrow?: string | null;
  /** Main H2. Each page should pass its own. */
  heading?: string;
  /** Supporting paragraph. Each page should pass its own. */
  body?: string;
  /** Label for the primary call button. */
  callLabel?: string;
  /** Label for the message button. */
  messageLabel?: string;
  /** Microcopy under the buttons. Pass null to hide. */
  microcopy?: string | null;
}

const CTASection = ({
  eyebrow = "Let's Talk",
  heading = "Not Sure Where to Start? That's Exactly Where Most People Are.",
  body = "A short conversation is usually the fastest way to get clarity. David works with families throughout Washington and can connect you with a trusted partner if the property is in another state.",
  callLabel = "Call (206) 900-3015",
  messageLabel = "Send a Message",
  microcopy = "Just a practical conversation about your situation.",
}: CTASectionProps = {}) => {
  return (
    <section data-nosnippet className="py-20 lg:py-28 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {eyebrow && (
            <p className="section-eyebrow">
              {eyebrow}
            </p>
          )}
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
            {heading}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {body}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <a href="tel:2069003015">
              <Button
                variant="navy3d"
                size="lg"
                className="px-8"
              >
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
                {callLabel}
              </Button>
            </a>
            <a href="mailto:david@realpropertyplanning.com">
              <Button
                variant="gold"
                size="lg"
                className="px-8"
              >
                {messageLabel}
              </Button>
            </a>
          </div>

          {microcopy && (
            <p className="text-muted-foreground text-base mb-10 max-w-md mx-auto">
              {microcopy}
            </p>
          )}

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <img src={iconEmail3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" loading="lazy"/>
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
