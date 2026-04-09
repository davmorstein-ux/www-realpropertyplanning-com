/**
 * AEO Direct Answer Block
 * A concise, quote-ready summary in a clean card layout.
 * Designed to be extractable by AI answer engines and featured snippets.
 * Supports optional scannable support content below the answer.
 */

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
}

const DirectAnswerBlock = ({
  question,
  answer,
  variant = "light",
  supportBullets,
  supportSteps,
  supportFaqs,
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
            <p className="text-gold font-bold tracking-[0.15em] uppercase text-xs mb-2">Quick Answer</p>
            <h2 className="font-serif text-xl md:text-2xl text-foreground font-semibold mb-3">
              {question}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {answer}
            </p>

            {/* Support bullets */}
            {supportBullets && supportBullets.length > 0 && (
              <ul className="mt-6 pt-5 border-t border-border space-y-2.5">
                {supportBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Support steps */}
            {supportSteps && supportSteps.length > 0 && (
              <div className="mt-6 pt-5 border-t border-border grid sm:grid-cols-3 gap-5 text-center">
                {supportSteps.map((step, i) => (
                  <div key={i}>
                    <span className="text-gold font-serif text-lg font-semibold">{step.label}</span>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Support FAQ cards */}
            {supportFaqs && supportFaqs.length > 0 && (
              <div className="mt-6 pt-5 border-t border-border grid sm:grid-cols-2 gap-4">
                {supportFaqs.map((faq, i) => (
                  <div key={i} className="bg-secondary/50 rounded-xl p-4">
                    <p className="text-foreground text-sm font-semibold mb-1.5">{faq.question}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectAnswerBlock;
