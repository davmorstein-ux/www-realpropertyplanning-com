import { Quote } from "lucide-react";
import { Link } from "react-router-dom";

interface ProofCalloutProps {
  quote: string;
  attribution: string;
  context?: string;
  variant?: "light" | "accent";
}

const ProofCallout = ({
  quote,
  attribution,
  context,
  variant = "light",
}: ProofCalloutProps) => {
  const isAccent = variant === "accent";

  return (
    <div
      className={`rounded-[18px] p-6 md:p-8 relative border-[1.5px] ${
        isAccent
          ? "bg-gradient-to-b from-white via-[hsl(42,45%,98%)] to-[hsl(40,30%,95%)] border-[hsl(42_55%_52%/0.4)]"
          : "bg-gradient-to-b from-white via-[hsl(40,25%,97%)] to-[hsl(38,18%,95%)] border-[hsl(42_55%_62%/0.4)]"
      }`}
      style={{
        boxShadow: '0 6px 18px -4px rgba(0,0,0,0.10), 0 3px 8px -3px rgba(0,0,0,0.06), 0 1px 0 0 hsl(36 14% 85%), inset 0 1px 0 0 rgba(255,255,255,0.85), inset 0 -1px 2px 0 rgba(0,0,0,0.03)',
      }}
    >
      <Quote
        className={`w-8 h-8 absolute top-6 right-6 ${
          isAccent ? "text-gold/25" : "text-gold/18"
        }`}
      />
      <p className="text-foreground text-lg leading-relaxed italic pr-10 mb-5">
        "{quote}"
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-foreground text-base">— {attribution}</p>
          {context && (
            <p className="text-muted-foreground text-base mt-0.5">{context}</p>
          )}
        </div>
        <Link
          to="/testimonials"
          className="text-base text-accent hover:text-gold underline underline-offset-4 transition-colors shrink-0 ml-4"
        >
          More reviews →
        </Link>
      </div>
    </div>
  );
};

export default ProofCallout;
