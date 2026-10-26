import { useLocation } from "react-router-dom";
import NextStepBlock from "@/components/NextStepBlock";
import ImageTile, { ImageTileStyles } from "@/components/ImageTile";
import { nextQuestionsFor } from "@/data/nextQuestions";

/**
 * "Your next questions" — decision-path links for the current page, from
 * src/data/nextQuestions.ts. Renders nothing on pages without an entry, so a
 * shared layout can include it safely.
 */
const NextQuestions = () => {
  const { pathname } = useLocation();
  const steps = nextQuestionsFor(pathname);
  if (!steps.length) return null;
  /* Picture tiles once every question here has its picture (Oct 26, 2026);
     until then the text tiles stay, so a block never mixes the two. Title
     only on picture tiles; the description goes to screen readers. */
  if (steps.every((s) => s.image)) {
    return (
      <section data-track-block="next_questions" className="py-14 lg:py-20 bg-secondary">
        <ImageTileStyles />
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8 text-foreground">Your next questions</h2>
            {/* Rows centre their leftovers, and four questions sit in one row,
                so a tile is never stranded alone on a second line. */}
            <div className={`rpp-nq-row${steps.length === 4 ? " rpp-nq-four" : ""}`}>
              {steps.map((s) => (
                <div key={s.href} className="rpp-nq-cell">
                  <ImageTile to={s.href} title={s.title} description={s.description} img={s.image!.src} w={s.image!.w} h={s.image!.h} />
                </div>
              ))}
            </div>
            <style dangerouslySetInnerHTML={{ __html: `
              .rpp-nq-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.25rem; }
              .rpp-nq-cell { flex: 0 0 100%; display: flex; }
              @media (min-width: 640px) { .rpp-nq-cell { flex-basis: calc((100% - 1.25rem) / 2); } }
              @media (min-width: 1024px) {
                .rpp-nq-cell { flex-basis: calc((100% - 2.5rem) / 3); }
                .rpp-nq-four .rpp-nq-cell { flex-basis: calc((100% - 3.75rem) / 4); }
              }
            ` }} />
          </div>
        </div>
      </section>
    );
  }
  return <NextStepBlock heading="Your next questions" steps={steps} columns={2} />;
};

export default NextQuestions;
