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
      className={`rounded-xl p-6 md:p-8 relative border ${
        isAccent
          ? "bg-gold/5 border-gold/20"
          : "bg-secondary border-border"
      }`}
    >
      <Quote
        className={`w-8 h-8 absolute top-6 right-6 ${
          isAccent ? "text-gold/20" : "text-gold/15"
        }`}
      />
      <p className="text-foreground text-lg leading-relaxed italic pr-10 mb-4">
        "{quote}"
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-foreground text-sm">— {attribution}</p>
          {context && (
            <p className="text-muted-foreground text-sm mt-0.5">{context}</p>
          )}
        </div>
        <Link
          to="/testimonials"
          className="text-xs text-accent hover:text-gold underline underline-offset-4 transition-colors shrink-0 ml-4"
        >
          More reviews →
        </Link>
      </div>
    </div>
  );
};

export default ProofCallout;
