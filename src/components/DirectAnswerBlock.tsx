/**
 * AEO Direct Answer Block
 * A concise, quote-ready summary in a clean card layout.
 * Designed to be extractable by AI answer engines and featured snippets.
 * Supports optional scannable support content below the answer.
 */
import { Link } from "react-router-dom";

interface SupportStep {
  label: string;
  desc: string;
}

interface SupportFaq {
  question: string;
  answer: string;
}

interface DirectAnswerBlockProps {
  /** The question this block answers — rendered as a visually subtle label */
  question: string;
  /** 2–4 sentence direct answer, concise and standalone */
  answer: string;
  /** Optional variant for background styling */
  variant?: "light" | "muted";
  /** Optional 3 short bullets */
  supportBullets?: string[];
  /** Optional 3-step process */
  supportSteps?: SupportStep[];
  /** Optional 2 short FAQ cards */
  supportFaqs?: SupportFaq[];
  /** Optional page-specific call to action, rendered at the bottom of the card */
  ctaLabel?: string;
  ctaHref?: string;
}

const DirectAnswerBlock = ({
  question,
  answer,
  variant = "light",
  supportBullets,
  supportSteps,
  supportFaqs,
  ctaLabel,
  ctaHref,
}: DirectAnswerBlockProps) => {
  return (
    <section
      className={`py-10 lg:py-14 ${variant === "muted" ? "bg-secondary" : "bg-background"}`}
      data-nosnippet={undefined}
    >
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Card wrapper */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <p className="font-bold tracking-[0.14em] uppercase mb-2" style={{ color: "#6b1b22", fontSize: "15px" }}>
              Quick Answer
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">{question}</h2>
            <p className="text-foreground text-lg md:text-xl leading-relaxed" style={{ color: "#2f2b27" }}>
              {answer}
            </p>

            {/* Support bullets */}
            {supportBullets && supportBullets.length > 0 && (
              <ul className="mt-6 pt-5 border-t border-border space-y-3">
                {supportBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: "#6b1b22" }} />
                    <span className="text-lg leading-relaxed" style={{ color: "#2f2b27" }}>
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Support steps */}
            {supportSteps && supportSteps.length > 0 && (
              <div className="rpp-direct-answer-steps mt-6 pt-5 border-t border-border grid sm:grid-cols-3 gap-5 text-center">
                {supportSteps.map((step, i) => (
                  <div
                    key={i}
                    className={`rpp-direct-answer-step${i > 0 ? " sm:border-l sm:border-border sm:pl-5" : ""}`}
                  >
                    <span
                      className="rpp-direct-answer-step-label"
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "32px",
                        fontWeight: 900,
                        color: "#6b1b22",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      {step.label}
                    </span>
                    <p className="text-base mt-1 leading-relaxed" style={{ color: "#2f2b27" }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Support FAQ cards */}
            {supportFaqs && supportFaqs.length > 0 && (
              <div className="mt-6 pt-5 border-t border-border grid sm:grid-cols-2 gap-4">
                {supportFaqs.map((faq, i) => (
                  <div key={i} className="bg-secondary/50 rounded-xl p-4">
                    <p className="text-foreground text-base font-semibold mb-1.5">{faq.question}</p>
                    <p className="text-base leading-relaxed" style={{ color: "#2f2b27" }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Optional page-specific CTA
                CONTRAST FIX — three layers of defence against the global rule
                  main a:not([class*="bg-"]):not(.btn):not([class*="button"]) { color: #ca2b38 }
                which was repainting this label dark red on burgundy:
                  1. `btn` class            -> matches the rule's :not(.btn) exclusion
                  2. `bg-[#6b1b22]` class   -> matches the :not([class*="bg-"]) exclusion
                  3. inline color           -> inline styles beat any non-!important rule
                Any one of these is sufficient; all three make it robust against
                future edits to the global stylesheet. */}
            {ctaLabel && ctaHref && (
              <div className="mt-6 pt-5 border-t border-border">
                <Link
                  to={ctaHref}
                  className="rpp-answer-cta btn bg-[#6b1b22] inline-flex items-center gap-2 rounded-lg font-bold text-white no-underline"
                  style={{
                    background: "#6b1b22",
                    color: "#ffffff",
                    padding: "13px 26px",
                    fontSize: 17,
                    minHeight: 44,
                  }}
                >
                  <span style={{ color: "#ffffff" }}>{ctaLabel}</span>
                  <span aria-hidden="true" style={{ color: "#ffffff" }}>
                    →
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectAnswerBlock;
