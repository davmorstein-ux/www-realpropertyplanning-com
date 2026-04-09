/**
 * AEO Direct Answer Block
 * A concise, quote-ready summary placed near the top of pages.
 * Designed to be extractable by AI answer engines and featured snippets.
 */

interface DirectAnswerBlockProps {
  /** The question this block answers — rendered as a visually subtle label */
  question: string;
  /** 2–4 sentence direct answer, concise and standalone */
  answer: string;
  /** Optional variant for background styling */
  variant?: "light" | "muted";
}

const DirectAnswerBlock = ({ question, answer, variant = "light" }: DirectAnswerBlockProps) => {
  return (
    <section
      className={`py-8 lg:py-10 ${variant === "muted" ? "bg-secondary" : "bg-background"}`}
      data-nosnippet={undefined}
    >
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold font-bold tracking-[0.15em] uppercase text-xs mb-2">Quick Answer</p>
          <h2 className="font-serif text-xl md:text-2xl text-foreground font-semibold mb-3">
            {question}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DirectAnswerBlock;
