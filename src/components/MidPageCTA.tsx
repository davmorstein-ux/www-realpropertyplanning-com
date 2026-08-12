import { Link } from "react-router-dom";

interface MidPageCTAProps {
  heading?: string;
  body?: string;
  microcopy?: string;
  buttonText?: string;
  variant?: "light" | "dark";
}

const MidPageCTA = ({
  /* Copy is deliberately scoped to the PROPERTY side and attributed to David
     Stein personally. The previous default — "Ready to Talk Through Your
     Situation?" / "Schedule a Conversation" — invited visitors to bring legal,
     care and family questions to RPP, and RPP is a neutral hub that provides
     no services and gives no advice. Real-estate conversations belong to
     David Stein as a licensed broker; everything else belongs to the licensed
     professionals in the directory. Keep any future copy inside that line. */
  heading = "Questions About the Real Estate Side?",
  body = "David Stein, a licensed real estate broker, can walk you through how the property side of the process works.",
  microcopy,
  buttonText = "Schedule a Conversation About the Property",
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
          {/* Canonical flat burgundy CTA (styled by the CTA block at the end
              of index.css) — the glossy 3D gold button and phone icon it
              replaces predated the CTA standard and rendered badly. */}
          <Link to="/contact" className="rpp-answer-cta" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "14px 30px", borderRadius: 8 }}>
            {buttonText}
          </Link>
          {microcopy && (
            <p
              className={`text-[16px] leading-[1.6] mt-4 ${
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
