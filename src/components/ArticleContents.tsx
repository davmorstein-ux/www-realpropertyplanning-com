import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * "In this article" — a contents box with tap-to-jump links (Oct 27, 2026, David's idea after
 * seeing Apple News list what each part of an article covers).
 *
 * The list is built from the article's own section headings (the <h2>s inside `articleRef`),
 * so it can never fall out of step with the article: rename or add a section and the box
 * follows. Headings marked data-toc="skip" are left out (for example an h2 that only repeats
 * the article's title). Each heading gets an id from its words if it has none, so a link like
 * /articles/memory-care-costs#when-memory-care-becomes-necessary also works from outside.
 *
 * Shown only when there are at least MIN_SECTIONS sections: a box listing two parts is clutter.
 * Jumps stop below the sticky header (scroll-margin-top, set in the CSS below).
 *
 * Class prefix "rpp-toc" avoids the index.css substring traps (card, tile, btn, cta, BackTo).
 */
const MIN_SECTIONS = 4;

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);

const CSS = `
html body main nav.rpp-toc.rpp-toc {
  display: block !important;
  width: auto !important;
  margin: 0 0 28px;
  padding: 18px 22px 16px;
  background: #ffffff;
  border: 1px solid #d9d2c6;
  border-left: 5px solid #1B3A6B;
  border-radius: 12px;
}
html body main nav.rpp-toc p.rpp-toc-label.rpp-toc-label {
  margin: 0 0 10px !important;
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
  font-size: 20px !important;
  font-weight: 700 !important;
  line-height: 1.3 !important;
  color: #1B3A6B !important;
}
html body main nav.rpp-toc ol.rpp-toc-list {
  display: block !important;
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  counter-reset: rpp-toc;
}
html body main nav.rpp-toc ol.rpp-toc-list > li {
  display: block !important;
  max-width: none !important;
  counter-increment: rpp-toc;
  margin: 0 !important;
  padding: 0 !important;
  border-top: 1px solid #eee8de;
}
html body main nav.rpp-toc ol.rpp-toc-list > li:first-child { border-top: 0; }
html body main nav.rpp-toc ol.rpp-toc-list > li::marker { content: none; }
html body main nav.rpp-toc a.rpp-toc-link.rpp-toc-link {
  display: flex !important;
  align-items: baseline;
  gap: 8px;
  min-height: 44px;
  max-width: none !important;
  padding: 10px 0 !important;
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
  font-size: 18px !important;
  font-weight: 600 !important;
  line-height: 1.4 !important;
  color: #1c1917 !important;
  text-decoration: none !important;
}
html body main nav.rpp-toc a.rpp-toc-link.rpp-toc-link::before {
  content: counter(rpp-toc);
  flex: none;
  width: 1.3em;
  font-weight: 700;
  color: #1B3A6B;
  font-variant-numeric: tabular-nums;
}
@media (hover: hover) {
  html body main nav.rpp-toc a.rpp-toc-link.rpp-toc-link:hover { color: #1B3A6B !important; text-decoration: underline !important; text-underline-offset: 4px; }
}
html body main nav.rpp-toc a.rpp-toc-link.rpp-toc-link:focus-visible { outline: 3px solid #1B3A6B; outline-offset: 2px; border-radius: 4px; }
/* Where a jump lands: below the sticky header (130px on laptops, 167px below 1280px wide,
   65px fixed on phones), with a little air. */
html body main [data-toc-target] { scroll-margin-top: 190px; }
html body main [data-toc-target]:focus { outline: none; }
@media (min-width: 1280px) { html body main [data-toc-target] { scroll-margin-top: 150px; } }
@media (max-width: 950px) { html body main [data-toc-target] { scroll-margin-top: 90px; } }
@media (max-width: 640px) {
  html body main nav.rpp-toc.rpp-toc { padding: 16px 16px 12px; }
  html body main nav.rpp-toc a.rpp-toc-link.rpp-toc-link { font-size: 17px !important; }
}
`;

export default function ArticleContents({ articleRef, label = "In this article" }: { articleRef: RefObject<HTMLElement>; label?: string }) {
  const [items, setItems] = useState<{ id: string; text: string }[]>([]);
  const built = useRef(false);

  useEffect(() => {
    const root = articleRef.current;
    if (!root || built.current) return;
    built.current = true;
    const used = new Set<string>();
    const found = Array.from(root.querySelectorAll("h2"))
      .filter((h) => h.dataset.toc !== "skip" && !h.closest("nav.rpp-toc"))
      .map((h) => {
        const text = (h.textContent || "").trim();
        let id = h.id || slug(text) || "section";
        while (used.has(id)) id += "-2";
        used.add(id);
        h.id = id;
        h.setAttribute("data-toc-target", "");
        return { id, text };
      })
      .filter((x) => x.text);
    setItems(found);
  }, [articleRef]);

  if (items.length < MIN_SECTIONS) return null;

  const jump = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    try {
      history.replaceState(null, "", `#${id}`);
    } catch {
      /* ignore */
    }
    // Move keyboard focus to the section so the next Tab continues from there.
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  };

  return (
    <nav className="rpp-toc" aria-label={label}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <p className="rpp-toc-label">{label}</p>
      <ol className="rpp-toc-list">
        {items.map((it) => (
          <li key={it.id}>
            <a className="rpp-toc-link" href={`#${it.id}`} onClick={(e) => jump(e, it.id)}>
              {it.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
