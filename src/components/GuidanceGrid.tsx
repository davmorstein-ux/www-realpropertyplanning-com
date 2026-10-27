import { guidanceFor } from "@/lib/inheritedPropertyGuidance";

/**
 * Renders the "challenges" and "mistakes" guidance for one sub-page.
 *
 * Both sections come from src/lib/inheritedPropertyGuidance.ts, filtered by
 * slug. A page renders <GuidanceGrid page="what-to-do-with-the-house" /> and
 * gets only the items that belong to it.
 *
 * Renders NOTHING when a page has no items of a given kind, so adding this to
 * a page speculatively is harmless — it simply does not appear until items are
 * tagged for that slug.
 *
 * The markup mirrors what these sections looked like on the hub, so the moved
 * text lands in a familiar shape rather than a new one.
 */
interface GuidanceGridProps {
  /** Route path without the leading slash. Must match `page` in the data. */
  page: string;
}

const GuidanceGrid = ({ page }: GuidanceGridProps) => {
  const challenges = guidanceFor(page, "challenge");
  const mistakes = guidanceFor(page, "mistake");

  if (!challenges.length && !mistakes.length) return null;

  return (
    <>
      {/* Icons beside each title (Oct 27, 2026): amber for challenges, brick red for mistakes,
          never navy. The body text indents to line up with the title. Cards had been
          mostly empty space; padding tightened. */}
      <style dangerouslySetInnerHTML={{ __html: `
        html body main .rpp-guide-item.rpp-guide-item { padding: 18px 20px !important; }
        html body main h3.rpp-guide-item-title.rpp-guide-item-title { display: flex; align-items: center; gap: 12px; margin-bottom: 6px !important; }
        html body main svg.rpp-guide-icon.rpp-guide-icon { flex: none; width: 28px; height: 28px; }
        html body main svg.rpp-guide-icon-challenge { color: #8a5300 !important; }
        html body main svg.rpp-guide-icon-mistake { color: #B0352A !important; }
        html body main .rpp-guide-item.rpp-guide-item > p { padding-left: 40px; margin: 0 !important; }
        /* index.css sets spans inside cards to 16px regular; the title must outrank the text. */
        html body main h3.rpp-guide-item-title span.rpp-guide-item-name.rpp-guide-item-name { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: 21px !important; font-weight: 700 !important; line-height: 1.3 !important; color: #1c1917 !important; }
        html body main .rpp-guide-item.rpp-guide-item > p { font-size: 18px !important; line-height: 1.55 !important; color: #1c1917 !important; }
        @media (max-width: 640px) {
          html body main h3.rpp-guide-item-title span.rpp-guide-item-name.rpp-guide-item-name { font-size: 19px !important; }
          html body main .rpp-guide-item.rpp-guide-item > p { font-size: 17px !important; padding-left: 0; }
        }
      ` }} />
      {challenges.length > 0 && (
        <section className="py-10 lg:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-7">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  You Are Not Alone
                </p>
                <h2 className="rpp-guidance-heading font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Common Challenges Families Face
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Naming what's hard often makes it easier to move forward.
                </p>
              </div>
              {/* A lone card in a two-column grid fills column 1 and leaves
                  column 2 empty, which reads as left-aligned rather than
                  deliberate. Five of the eleven sections across these pages
                  have exactly one item, so this is the common case, not an
                  edge case. Single card: one centred column, capped so it does
                  not stretch the full width either. */}
              <div
                className={
                  challenges.length === 1
                    ? "grid grid-cols-1 gap-4 max-w-2xl mx-auto"
                    : "grid sm:grid-cols-2 gap-4"
                }
              >
                {challenges.map((c) => (
                  <div
                    key={c.title}
                    className="rpp-guide-item bg-white border-2 border-gold/25 rounded-2xl p-5 md:p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)]"
                  >
                    <h3 className="rpp-guide-item-title font-serif text-lg md:text-xl text-navy font-semibold mb-2">
                      <c.icon className="rpp-guide-icon rpp-guide-icon-challenge" aria-hidden="true" strokeWidth={1.9} />
                      <span className="rpp-guide-item-name">{c.title}</span>
                    </h3>
                    <p className="text-navy text-base leading-relaxed">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {mistakes.length > 0 && (
        <section className="py-10 lg:py-14 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-7">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Avoid These Pitfalls
                </p>
                <h2 className="rpp-guidance-heading font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Common Mistakes to Avoid
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Naming what often goes wrong makes it easier to plan well.
                </p>
              </div>
              <div
                className={
                  mistakes.length === 1
                    ? "grid grid-cols-1 gap-4 max-w-2xl mx-auto"
                    : "grid sm:grid-cols-2 gap-4"
                }
              >
                {mistakes.map((m) => (
                  <div
                    key={m.title}
                    className="rpp-guide-item bg-white border-2 border-gold/25 rounded-2xl p-5 md:p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)]"
                  >
                    <h3 className="rpp-guide-item-title font-serif text-lg md:text-xl text-navy font-semibold mb-2">
                      <m.icon className="rpp-guide-icon rpp-guide-icon-mistake" aria-hidden="true" strokeWidth={1.9} />
                      <span className="rpp-guide-item-name">{m.title}</span>
                    </h3>
                    <p className="text-navy text-base leading-relaxed">{m.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default GuidanceGrid;
