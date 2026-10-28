import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import ArticlesCarousel from "@/components/ArticlesCarousel";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { GUIDE_LIBRARY, GUIDE_COUNT } from "@/data/guideLibrary";

import RppArrow from "@/components/RppArrow";
const NAV_FONT = { fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif" };
const GOLD = "#1B3A6B";

/**
 * The list itself lives in src/data/guideLibrary.ts, not here. That one file is
 * rendered by this page, written into the static HTML for crawlers at build
 * time, and counted by a test, so the homepage's "90+ guides & articles" can be
 * checked by a visitor and cannot silently become untrue. To add, remove or
 * regroup a guide, edit the data file.
 */
const categories = GUIDE_LIBRARY.map((g) => ({ label: g.label, id: g.id, landing: g.landing, articles: g.pieces }));

const LIBRARY_CSS = `
  /* index.css overrides inline margins and link styles with !important, so the
     few new elements on this page are styled here with enough weight to win. */
  .rpp-lib-jump { display: flex; flex-wrap: wrap; gap: 10px 10px; justify-content: center; max-width: 980px; margin: 0 auto; padding: 0; list-style: none; }
  .rpp-lib-jump a.rpp-lib-chip.rpp-lib-chip { display: inline-block; padding: 9px 14px; border: 1px solid #c9a9ac; border-radius: 999px; background: #fff; color: #142c52 !important; font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; font-size: 15.5px !important; font-weight: 600 !important; line-height: 1.3; text-decoration: none !important; }
  @media (hover: hover) { .rpp-lib-jump a.rpp-lib-chip.rpp-lib-chip:hover { border-color: #1B3A6B; background: #fbf3f4; } }
  .rpp-lib-jump a.rpp-lib-chip.rpp-lib-chip:focus-visible { outline: 3px solid #d9b3b7; outline-offset: 2px; }
  .rpp-lib-count.rpp-lib-count { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; font-size: 18px !important; line-height: 1.6 !important; color: #142c52; text-align: center; max-width: 760px; margin: 0 auto 22px !important; }
  a.rpp-lib-landing.rpp-lib-landing { display: inline-block; margin: 14px 0 4px; font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; font-size: 16.5px !important; font-weight: 700 !important; color: #1B3A6B !important; text-decoration: underline !important; text-underline-offset: 4px; }
  section[id] { scroll-margin-top: calc(var(--header-height, 120px) + 12px); }

  /* Oct 28, 2026 (David: visitors may not realise there is a searchable list below the
     carousel). A search box that filters the list as you type, and on phones a single
     "Jump to a topic" dropdown in place of nine tall topic buttons. */
  .rpp-lib-find { max-width: 760px; margin: 0 auto 18px; }
  .rpp-lib-find label.rpp-lib-find-label { display: block; font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; font-size: 15px !important; font-weight: 700 !important; color: #142c52; margin: 0 0 6px; }
  .rpp-lib-find .rpp-lib-find-box { position: relative; }
  .rpp-lib-find .rpp-lib-find-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #1B3A6B; pointer-events: none; }
  .rpp-lib-find input.rpp-lib-find-input.rpp-lib-find-input { width: 100%; box-sizing: border-box; min-height: 56px; padding: 12px 52px 12px 50px; font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; font-size: 18px !important; color: #1c1917; background: #fff; border: 2px solid #1B3A6B; border-radius: 12px; box-shadow: 0 2px 10px rgba(20,44,82,0.08); -webkit-appearance: none; appearance: none; }
  .rpp-lib-find input.rpp-lib-find-input::placeholder { color: #6b6660; }
  .rpp-lib-find input.rpp-lib-find-input.rpp-lib-find-input:placeholder-shown { padding-right: 14px; }
  .rpp-lib-find input.rpp-lib-find-input::-webkit-search-cancel-button { display: none; }
  .rpp-lib-find input.rpp-lib-find-input:focus { outline: 3px solid rgba(27,58,107,0.25); outline-offset: 1px; }
  .rpp-lib-find button.rpp-lib-find-clear { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border: 0; border-radius: 50%; background: transparent !important; color: #4a4540; cursor: pointer; padding: 0; }
  .rpp-lib-find-status.rpp-lib-find-status { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; font-size: 16px !important; color: #142c52; text-align: center; margin: 12px 0 0 !important; }
  .rpp-lib-find-status a { color: #1B3A6B !important; font-weight: 700; text-decoration: underline !important; text-underline-offset: 3px; }
  .rpp-lib-topic { display: none; max-width: 760px; margin: 0 auto; }
  .rpp-lib-topic select.rpp-lib-topic-select { width: 100%; min-height: 52px; padding: 10px 44px 10px 14px; font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; font-size: 17px !important; font-weight: 600; color: #142c52; background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%231B3A6B' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right 14px center; border: 1px solid #c9a9ac; border-radius: 12px; -webkit-appearance: none; appearance: none; }
  .rpp-lib-pro { background: #f7f4ef; padding: 32px 24px; text-align: center; }
  @media (max-width: 640px) {
    .rpp-lib-jump.rpp-lib-jump { display: none; }
    .rpp-lib-topic { display: block; }
    .rpp-lib-count.rpp-lib-count { font-size: 17px !important; margin-bottom: 16px !important; }
  }
`;

/** Every word typed must appear in the guide's title or its group's name. */
const matches = (q: string, title: string, group: string) => {
  const hay = `${title} ${group}`.toLowerCase().replace(/[’']/g, "");
  return q
    .toLowerCase()
    .replace(/[’']/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .every((w) => hay.includes(w));
};

const GuidesAndResources = () => {
  const [query, setQuery] = useState("");
  const q = query.trim();
  const shown = useMemo(
    () => categories.map((c) => ({ ...c, articles: q ? c.articles.filter((a) => matches(q, a.title, c.label)) : c.articles })),
    [q],
  );
  const hits = shown.reduce((n, c) => n + c.articles.length, 0);
  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };
  return (
    <>
      <SEOHead
        title="Guides & Articles | Probate, Estate & Senior Transition Guidance | Real Property Planning"
        description="All 90 of Real Property Planning's guides and articles in one place, grouped by topic. Clear, practical guides and articles for families, executors, trustees, and professionals navigating probate, inherited property, senior transitions, pricing, and real estate decisions in Washington State."
        canonical="https://realpropertyplanning.com/guides-and-resources"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "Guides & Articles", url: "https://realpropertyplanning.com/guides-and-resources" },
        ]}
      />
      <Header />

      <main id="main-content">
      
        {/* Blue band — matches site standard */}
        <HeroBandTitle as="h1">Guides &amp; Articles</HeroBandTitle>

        {/* Oct 27, 2026 (David couldn't find the covered articles from here): the magazine-cover
            carousel from the Articles Library, with a link to that page. The same articles
            also appear as text in the groups below. */}
        {/* Oct 28, 2026: the "Browse the Articles Library" link that sat here was removed (the
            covers and the list below both lead to the articles), and the "Looking for a
            professional" line moved to the end of the page, so the list starts sooner. */}
        <ArticlesCarousel />

        {/* How many, a search box, and a way to jump to a group */}
        <div style={{ background: "#fff", padding: "30px 20px 28px" }}>
          <style dangerouslySetInnerHTML={{ __html: LIBRARY_CSS }} />
          <p className="rpp-lib-count">
            <strong>{GUIDE_COUNT} guides and articles</strong> for Washington families, executors, and trustees. Search by
            topic, or browse the {categories.length} groups below.
          </p>
          <div className="rpp-lib-find" role="search">
            <label htmlFor="rpp-lib-q" className="rpp-lib-find-label">Find a guide</label>
            <div className="rpp-lib-find-box">
              <SearchIcon className="rpp-lib-find-icon" size={22} aria-hidden="true" />
              <input
                id="rpp-lib-q"
                className="rpp-lib-find-input"
                type="search"
                inputMode="search"
                autoComplete="off"
                placeholder="Try probate or memory care"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button type="button" className="rpp-lib-find-clear" aria-label="Clear search" onClick={() => setQuery("")}>
                  <X size={22} aria-hidden="true" />
                </button>
              )}
            </div>
            <p className="rpp-lib-find-status" aria-live="polite">
              {!q ? null : hits === 0 ? (
                <>
                  No guide titles match "{q}". Try a different word, or <Link to="/search">ask a question</Link>.
                </>
              ) : (
                <>
                  {hits} {hits === 1 ? "guide matches" : "guides match"} "{q}"
                </>
              )}
            </p>
          </div>
          {!q && (
            <>
              <ul className="rpp-lib-jump">
                {categories.map((c) => (
                  <li key={c.id}>
                    <a href={`#${c.id}`} className="rpp-lib-chip bg-transparent">
                      {c.label} <span style={{ fontWeight: 400, color: "#1c1917" }}>({c.articles.length})</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="rpp-lib-topic">
                <select
                  className="rpp-lib-topic-select"
                  aria-label="Jump to a topic"
                  value=""
                  onChange={(e) => e.target.value && jumpTo(e.target.value)}
                >
                  <option value="">Or jump to a topic…</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label} ({c.articles.length})
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
        </div>

        {/* Category Sections (while searching, only groups with a matching guide show) */}
        {shown.map((cat, catIndex) => cat.articles.length === 0 ? null : (
          <section
            key={cat.id}
            id={cat.id}
            style={{ background: catIndex % 2 === 0 ? "#fff" : "#f7f4ef", padding: "56px 24px" }}
          >
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              {/* Category Header */}
              <div style={{ marginBottom: 8, paddingBottom: 16, borderBottom: `2px solid ${GOLD}` }}>
                <h2
                  style={{
                    fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    fontWeight: 700,
                    color: "#142c52",
                    margin: 0,
                  }}
                >
                  {cat.label}
                </h2>
                {cat.landing && (
                  <Link to={cat.landing.href} className="rpp-lib-landing bg-transparent">
                    {cat.landing.label}
                  </Link>
                )}
              </div>

              {/* Article List */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {cat.articles.map((article, i) => (
                  <Link
                    key={article.href}
                    to={article.href}
                    className="group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "14px 12px",
                      borderBottom: i < cat.articles.length - 1 ? "1px solid #dfc9cb" : "none",
                      textDecoration: "none",
                      transition: "background 0.2s",
                      borderRadius: 4,
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(139,105,20,0.04)")
                    }
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
                  >
                    {/* Gold dot */}
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: GOLD, flexShrink: 0 }} />

                    {/* Title */}
                    <div
                      style={{
                        flex: 1,
                        fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#142c52",
                        lineHeight: 1.4,
                      }}
                    >
                      {article.title}
                    </div>

                    {/* CTA */}
                    <span className="gold-cta">
                      Read
                      <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"> <RppArrow />
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Looking for a professional? (moved here from above the list, Oct 28, 2026) */}
        <div className="rpp-lib-pro">
          <p style={{ fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif", fontSize: 17, color: "#142c52", margin: 0 }}>
            Looking for a professional instead of a guide?{" "}
            <Link to="/resources" style={{ color: GOLD, fontWeight: 700, textDecoration: "underline" }}>
              Browse the Find a Professional directory <RppArrow />
            </Link>
          </p>
        </div>

        <DisclaimerSection />
      </main>

      <Footer />
    </>
  );
};

export default GuidesAndResources;
