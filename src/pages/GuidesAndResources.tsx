import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Link } from "react-router-dom";
import { GUIDE_LIBRARY, GUIDE_COUNT } from "@/data/guideLibrary";

const NAV_FONT = { fontFamily: "'DM Sans', system-ui, sans-serif" };
const GOLD = "#7f2028";

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
  .rpp-lib-jump a.rpp-lib-chip.rpp-lib-chip { display: inline-block; padding: 9px 14px; border: 1px solid #c9a9ac; border-radius: 999px; background: #fff; color: #280a0c !important; font-family: 'DM Sans', system-ui, sans-serif; font-size: 15.5px !important; font-weight: 600 !important; line-height: 1.3; text-decoration: none !important; }
  @media (hover: hover) { .rpp-lib-jump a.rpp-lib-chip.rpp-lib-chip:hover { border-color: #7f2028; background: #fbf3f4; } }
  .rpp-lib-jump a.rpp-lib-chip.rpp-lib-chip:focus-visible { outline: 3px solid #d9b3b7; outline-offset: 2px; }
  .rpp-lib-count.rpp-lib-count { font-family: 'DM Sans', system-ui, sans-serif; font-size: 18px !important; line-height: 1.6 !important; color: #280a0c; text-align: center; max-width: 760px; margin: 0 auto 22px !important; }
  a.rpp-lib-landing.rpp-lib-landing { display: inline-block; margin: 14px 0 4px; font-family: 'DM Sans', system-ui, sans-serif; font-size: 16.5px !important; font-weight: 700 !important; color: #7f2028 !important; text-decoration: underline !important; text-underline-offset: 4px; }
  section[id] { scroll-margin-top: calc(var(--header-height, 120px) + 12px); }
`;

const GuidesAndResources = () => {
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

        {/* Looking for a professional? CTA */}
        <div style={{ background: "#f7f4ef", padding: "28px 24px", textAlign: "center" }}>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 17, color: "#280a0c", margin: 0 }}>
            Looking for a professional instead of a guide?{" "}
            <Link to="/resources" style={{ color: GOLD, fontWeight: 700, textDecoration: "underline" }}>
              Browse our Find a Professional directory →
            </Link>
          </p>
        </div>

        {/* How many, and a way to jump to a group */}
        <div style={{ background: "#fff", padding: "34px 20px 30px" }}>
          <style>{LIBRARY_CSS}</style>
          <p className="rpp-lib-count">
            <strong>{GUIDE_COUNT} guides and articles</strong> for Washington families, executors, and trustees, in {categories.length} groups. Jump to the one that fits where you are.
          </p>
          <ul className="rpp-lib-jump">
            {categories.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="rpp-lib-chip bg-transparent">
                  {c.label} <span style={{ fontWeight: 400, color: "#5b4446" }}>({c.articles.length})</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Category Sections */}
        {categories.map((cat, catIndex) => (
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
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    fontWeight: 700,
                    color: "#280a0c",
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
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#280a0c",
                        lineHeight: 1.4,
                      }}
                    >
                      {article.title}
                    </div>

                    {/* CTA */}
                    <span className="gold-cta">
                      Read
                      <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        <DisclaimerSection />
      </main>

      <Footer />
    </>
  );
};

export default GuidesAndResources;
