/**
 * A list of steps or sections, each with a square photo in place of a number (Oct 27, 2026, David:
 * "it would be helpful from a visual standpoint"). Same look as the photo steps on the simplified
 * topic pages (.apf-step in index.css), for pages outside that system: the executor checklist and
 * the probate guides. The photos are the site's own square estate set (src/assets/estate).
 *
 * Class prefix "rpp-psteps" avoids the index.css substring traps (card, tile, btn, cta, BackTo).
 * Titles render as the given heading level so each page keeps its outline (h2 or h3).
 */
import type { ReactNode } from "react";

export interface PhotoStep {
  title: string;
  body: ReactNode;
  image: string;
}

const CSS = `
html body main ol.rpp-psteps { list-style: none !important; padding: 0 !important; margin: 0 !important; display: flex; flex-direction: column; gap: 14px; }
html body main ol.rpp-psteps > li.rpp-psteps-item {
  display: flex; gap: 20px; align-items: flex-start;
  margin: 0 !important; padding: 16px !important;
  background: #ffffff; border: 1px solid #e4ddd1; border-radius: 12px;
}
html body main ol.rpp-psteps > li.rpp-psteps-item::before,
html body main ol.rpp-psteps > li.rpp-psteps-item::marker { content: none !important; display: none !important; }
html body main ol.rpp-psteps img.rpp-psteps-img {
  flex: none; width: 128px !important; height: 128px !important; max-width: none !important;
  border-radius: 10px; object-fit: cover; display: block; margin: 0 !important;
}
html body main ol.rpp-psteps .rpp-psteps-text { min-width: 0; padding-top: 2px; }
html body main ol.rpp-psteps .rpp-psteps-title.rpp-psteps-title {
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
  font-size: 21px !important; font-weight: 700 !important; line-height: 1.3 !important;
  color: #1c1917 !important; margin: 0 0 6px !important;
}
html body main ol.rpp-psteps .rpp-psteps-body.rpp-psteps-body {
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
  font-size: 18px !important; line-height: 1.6 !important; color: #1c1917 !important; margin: 0 !important;
}
/* Phones: photo beside the heading, paragraph full width beneath (a photo column left the
   text a narrow strip about 250px wide). */
@media (max-width: 640px) {
  html body main ol.rpp-psteps > li.rpp-psteps-item {
    display: grid !important; grid-template-columns: 76px minmax(0, 1fr); column-gap: 14px; row-gap: 10px;
    align-items: center; padding: 12px 14px 14px !important;
  }
  html body main ol.rpp-psteps .rpp-psteps-text { display: contents; }
  html body main ol.rpp-psteps img.rpp-psteps-img { width: 76px !important; height: 76px !important; }
  html body main ol.rpp-psteps .rpp-psteps-title.rpp-psteps-title { font-size: 19px !important; margin: 0 !important; }
  html body main ol.rpp-psteps .rpp-psteps-body.rpp-psteps-body { grid-column: 1 / -1; font-size: 17px !important; }
}
`;

export default function PhotoSteps({ steps, as: Heading = "h3", label }: { steps: PhotoStep[]; as?: "h2" | "h3"; label?: string }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <ol className="rpp-psteps" aria-label={label}>
        {steps.map((s) => (
          <li key={s.title} className="rpp-psteps-item">
            <img className="rpp-psteps-img" src={s.image} alt="" width={480} height={480} loading="lazy" decoding="async" />
            <div className="rpp-psteps-text">
              <Heading className="rpp-psteps-title">{s.title}</Heading>
              <div className="rpp-psteps-body">{s.body}</div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
