import { Link } from "react-router-dom";

interface MidPageCTAProps {
  heading?: string;
  body?: string;
  /** @deprecated Accepted and ignored. See the note above the render. */
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
  /* Still destructured so the 34 pages passing it do not error, but no longer
     rendered. Those props are inert and can be deleted whenever those files
     are next open. */
  microcopy: _microcopy,
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
          {/* Microcopy no longer renders. Every page passing it was passing a
              variant of "No pressure. Just practical guidance on the property
              questions." — 74 instances of that voice across 43 files.

              It was reassurance nobody asked for. David Stein is a licensed
              broker and appraiser; the value on offer is competence, and
              promising an executor that a conversation will be low-pressure
              reads as managing their feelings rather than answering their
              question. The heading and body above already say what is on offer
              and from whom, which is the reassurance that actually helps.

              The prop is accepted and discarded rather than removed from the
              interface, so the pages still passing it keep compiling. If you
              want a line here again, delete this block and render it — but
              write something that carries information. */}
        </div>
      </div>
    </section>
  );
};

export default MidPageCTA;
