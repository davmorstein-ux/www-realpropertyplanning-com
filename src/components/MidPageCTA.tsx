import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.webp";

interface MidPageCTAProps {
  heading?: string;
  body?: string;
  microcopy?: string;
  buttonText?: string;
  variant?: "light" | "dark";
}

const MidPageCTA = ({
  heading = "Ready to Talk Through Your Situation?",
  body = "A brief conversation is usually the best place to start.",
  microcopy,
  buttonText = "Schedule a Conversation",
  variant = "light",
}: MidPageCTAProps) => {
  const isDark = variant === "dark";

  return (
    <section className={`py-16 lg:py-20 ${isDark ? "bg-primary" : "bg-secondary"}`}>
      <div className="container px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Gold accent divider top */}
          <div className="premium-divider mb-8">
            <span className="premium-divider-dot" />
          </div>

          <h3
            className={`font-serif text-2xl md:text-3xl font-semibold mb-4 ${
              isDark ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {heading}
          </h3>
          <p
            className={`text-lg leading-relaxed mb-8 ${
              isDark ? "text-primary-foreground/75" : "text-muted-foreground"
            }`}
          >
            {body}
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-10 py-4 h-auto text-base">
              <img
                src={iconPhone3d}
                alt=""
                aria-hidden="true"
                className="w-5 h-5 mr-2 object-contain shrink-0"
               loading="lazy"/>
              {buttonText}
            </Button>
          </Link>
          {microcopy && (
            <p
              className={`text-sm mt-4 ${
                isDark ? "text-primary-foreground/50" : "text-muted-foreground/70"
              }`}
            >
              {microcopy}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MidPageCTA;
