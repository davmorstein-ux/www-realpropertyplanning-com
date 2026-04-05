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
      className={`rounded-xl p-6 md:p-8 relative border-[1.5px] ${
        isAccent
          ? "bg-gold/5 border-gold/25"
          : "bg-secondary border-border/80"
      }`}
      style={{
        boxShadow: '0 4px 14px -2px rgba(0,0,0,0.08), 0 2px 6px -1px rgba(0,0,0,0.05), inset 0 1px 0 0 rgba(255,255,255,0.6)',
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
          className="text-xs text-accent hover:text-gold underline underline-offset-4 transition-colors shrink-0 ml-4"
        >
          More reviews →
        </Link>
      </div>
    </div>
  );
};

export default ProofCallout;
