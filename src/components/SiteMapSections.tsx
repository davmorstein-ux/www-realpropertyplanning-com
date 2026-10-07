import { Link } from "react-router-dom";
import type { SiteMapSection } from "@/data/siteMaps";

/**
 * The body of both visitor site maps: sections in a grid (one column on a
 * phone, two from 720px, three from 1100px), each with its heading, a line on
 * who it is for, and its pages as plain titles at reading size.
 *
 * Written for the site's older readers (Sept 27, 2026): the old /sitemap was a
 * tree of raw addresses in 11px code type. Titles here are 18px, near-black,
 * underlined only on hover so a long list stays calm, with a 44px-tall tap
 * row on phones.
 *
 * Styles are page-scoped with !important because src/index.css overrides
 * plain p/a/h2 rules site-wide (see AGENTS.md section 4). Class names use an
 * "smap-" prefix and avoid the substrings (card, tile, btn, cta) that global
 * attribute selectors restyle.
 */
const CSS = `
.smap-grid { display: grid; gap: 20px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 720px) { .smap-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (min-width: 1100px) { .smap-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; } }
.smap-section { background: #ffffff; border: 1px solid #ddd6cc; border-top: 4px solid var(--smap-accent, #7f2028); border-radius: 10px; padding: 20px 22px 16px; min-width: 0; }
.smap-root h2.smap-h2 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: 22px !important; line-height: 1.25 !important; font-weight: 700 !important; color: var(--smap-accent, #280a0c) !important; margin: 0 0 6px !important; }
.smap-root p.smap-blurb { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 16px !important; line-height: 1.5 !important; color: #1c1917 !important; margin: 0 0 12px !important; }
.smap-root h3.smap-h3 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: 14px !important; line-height: 1.3 !important; font-weight: 700 !important; letter-spacing: 0.08em !important; text-transform: uppercase !important; color: #1c1917 !important; margin: 16px 0 4px !important; }
.smap-root ul.smap-list { list-style: none !important; margin: 0 !important; padding: 0 !important; }
.smap-root ul.smap-list li { margin: 0 !important; padding: 0 !important; border-bottom: 1px solid #f0ebe3; }
.smap-root ul.smap-list li:last-child { border-bottom: 0; }
.smap-root a.smap-link { display: block; padding: 8px 0 !important; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 18px !important; line-height: 1.35 !important; font-weight: 500 !important; color: #1c1917 !important; text-decoration: none !important; }
.smap-root a.smap-link::after { content: none !important; display: none !important; }
@media (hover: hover) { .smap-root a.smap-link:hover { color: var(--smap-accent, #7f2028) !important; text-decoration: underline !important; text-underline-offset: 3px; } }
.smap-root a.smap-link:focus-visible { outline: 3px solid var(--smap-accent, #7f2028); outline-offset: 2px; border-radius: 3px; }
@media (max-width: 719px) { .smap-root a.smap-link { min-height: 44px; display: flex; align-items: center; } }
`;

export default function SiteMapSections({ sections, accents = {} }: { sections: SiteMapSection[]; accents?: Record<string, string> }) {
  return (
    <div className="smap-root">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="smap-grid">
        {sections.map((s) => (
          <section
            key={s.id}
            className="smap-section"
            aria-labelledby={`smap-${s.id}`}
            style={accents[s.id] ? ({ ["--smap-accent" as string]: accents[s.id] } as React.CSSProperties) : undefined}
          >
            <h2 id={`smap-${s.id}`} className="smap-h2">
              {s.label}
            </h2>
            {s.blurb && <p className="smap-blurb">{s.blurb}</p>}
            {s.groups.map((g, i) => (
              <div key={g.label ?? i}>
                {g.label && <h3 className="smap-h3">{g.label}</h3>}
                <ul className="smap-list">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link to={l.href} className="smap-link bg-transparent">
                        {l.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
