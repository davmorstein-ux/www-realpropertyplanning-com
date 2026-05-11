import GoldCheck3D from "@/components/GoldCheck3D";

export type JourneyTone = "caregiving" | "probate" | "transition" | "valuation" | "default";

interface JourneyOrientationProps {
  items: string[];
  title?: string;
  className?: string;
  /**
   * Subtle emotional variant — keeps brand cohesion while letting different
   * journey categories feel slightly different in pacing and emphasis.
   */
  tone?: JourneyTone;
  hideLeadIn?: boolean;
}

const TONE_CONFIG: Record<
  JourneyTone,
  {
    section: string;
    card: string;
    title: string;
    defaultTitle: string;
    leadIn?: string;
  }
> = {
  caregiving: {
    // softer, warmer, slower paced
    section: "py-12 lg:py-16 bg-cream",
    card:
      "flex items-start gap-4 bg-card rounded-3xl border border-gold/25 shadow-sm px-6 py-5 md:px-7 md:py-6",
    title: "font-serif text-[28px] md:text-[34px] lg:text-[38px] text-navy font-semibold mb-3 text-center leading-tight",
    defaultTitle: "Who This Journey Often Supports",
    leadIn: "Take this at your own pace — there's no rush.",
  },
  probate: {
    // structured, stabilizing, organized
    section: "py-10 lg:py-12 bg-secondary",
    card:
      "flex items-start gap-4 bg-card rounded-lg border-l-4 border-l-navy border-y border-r border-border/50 shadow-sm px-5 py-4 md:px-6 md:py-5",
    title: "font-serif text-[26px] md:text-[32px] lg:text-[36px] text-navy font-semibold mb-3 text-center leading-tight",
    defaultTitle: "This Roadmap May Help If…",
    leadIn: "A clear, sequenced path through what comes next.",
  },
  transition: {
    // practical, relieving, lighter
    section: "py-10 lg:py-14 bg-cream",
    card:
      "flex items-start gap-4 bg-card rounded-2xl border border-border/40 px-5 py-4 md:px-6 md:py-5",
    title: "font-serif text-[28px] md:text-[34px] lg:text-[38px] text-navy font-semibold mb-3 text-center leading-tight",
    defaultTitle: "This Path Can Make Things Easier If…",
    leadIn: "Practical, manageable steps — not all at once.",
  },
  valuation: {
    // trustworthy, grounded, intelligent
    section: "py-10 lg:py-14 bg-card",
    card:
      "flex items-start gap-4 bg-cream rounded-md border border-border px-5 py-4 md:px-6 md:py-5",
    title: "font-serif text-[26px] md:text-[32px] lg:text-[36px] text-navy font-semibold mb-3 text-center leading-tight tracking-tight",
    defaultTitle: "This Guidance Is Right For You If…",
    leadIn: "Grounded in evidence, not estimates.",
  },
  default: {
    section: "py-10 lg:py-14 bg-cream",
    card:
      "flex items-start gap-4 bg-card rounded-2xl border border-border/60 shadow-sm px-5 py-4 md:px-6 md:py-5",
    title: "font-serif text-[28px] md:text-[34px] lg:text-[38px] text-navy font-semibold mb-3 text-center leading-tight",
    defaultTitle: "This Journey May Help If…",
  },
};

/**
 * "This Journey May Help If…" orientation block.
 * Placed below the hero on Journey Hub pages so visitors can quickly self-identify.
 *
 * Pass `tone` to subtly differentiate emotional pacing between journey categories
 * (caregiving = warmer, probate = structured, transition = practical, valuation = grounded).
 */
const JourneyOrientation = ({
  items,
  title,
  className = "",
  tone = "default",
}: JourneyOrientationProps) => {
  const cfg = TONE_CONFIG[tone];
  const heading = title ?? cfg.defaultTitle;

  return (
    <section className={`${cfg.section} ${className}`}>
      <div className="container px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className={cfg.title}>{heading}</h2>
          {cfg.leadIn && (
            <p className="text-navy text-[18px] md:text-[19px] text-center mb-7 md:mb-9">
              {cfg.leadIn}
            </p>
          )}
          {!cfg.leadIn && <div className="mb-4 md:mb-6" />}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {items.map((item) => (
              <li key={item} className={cfg.card}>
                <GoldCheck3D size={26} className="mt-1" />
                <span className="text-navy text-[18px] md:text-[20px] leading-[1.55] font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default JourneyOrientation;
