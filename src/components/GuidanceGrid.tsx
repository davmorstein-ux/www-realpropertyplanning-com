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
      {challenges.length > 0 && (
        <section className="py-10 lg:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-7">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  You Are Not Alone
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Common Challenges Families Face
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Naming what's hard often makes it easier to move forward.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {challenges.map((c) => (
                  <div
                    key={c.title}
                    className="bg-white border-2 border-gold/25 rounded-2xl p-5 md:p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)]"
                  >
                    <h3 className="font-serif text-lg md:text-xl text-navy font-semibold mb-2">
                      {c.title}
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
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Common Mistakes to Avoid
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Naming what often goes wrong makes it easier to plan well.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {mistakes.map((m) => (
                  <div
                    key={m.title}
                    className="bg-white border-2 border-gold/25 rounded-2xl p-5 md:p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)]"
                  >
                    <h3 className="font-serif text-lg md:text-xl text-navy font-semibold mb-2">
                      {m.title}
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
