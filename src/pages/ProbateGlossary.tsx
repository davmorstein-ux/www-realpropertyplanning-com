import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import AuthorByline from "@/components/AuthorByline";
import BackToPreviousPage from "@/components/BackToPreviousPage";
import {
  PROBATE_GLOSSARY,
  PROBATE_GLOSSARY_A_TO_Z,
  PROBATE_GLOSSARY_CATEGORIES,
  type ProbateGlossaryTerm,
} from "@/data/probateGlossary";

/**
 * Probate & estate glossary (Sept 30, 2026). Every word lives in
 * src/data/probateGlossary.ts, which the prerender also reads; this file is
 * layout only (same structure as the AFH Club glossary).
 * index.css traps handled here: the first section's top padding is zeroed
 * sitewide (padding goes on the inner wrapper), `main h2` is forced to 36px and
 * `main a` to 16px (scoped classes with !important), and <nav> is styled as the
 * site header (the jump bar is a div with role="navigation").
 */

const PATH = "/probate-glossary";
const CANONICAL = `https://realpropertyplanning.com${PATH}`;
const A = "#25597e";

const letterOf = (t: ProbateGlossaryTerm) => {
  const c = t.term.charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
};

const BY_LETTER = PROBATE_GLOSSARY_A_TO_Z.reduce<Record<string, ProbateGlossaryTerm[]>>((acc, t) => {
  (acc[letterOf(t)] ||= []).push(t);
  return acc;
}, {});
const LETTERS = Object.keys(BY_LETTER).sort();
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const schema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": `${CANONICAL}#terms`,
  name: "Washington Probate & Estate Property Glossary",
  description:
    "Plain-English definitions of Washington probate, inheritance, trust, tax and estate property terms, each with its statute where there is one.",
  url: CANONICAL,
  hasDefinedTerm: PROBATE_GLOSSARY.map((t) => ({
    "@type": "DefinedTerm",
    "@id": `${CANONICAL}#${t.id}`,
    name: t.term,
    ...(t.aka ? { alternateName: t.aka } : {}),
    description: t.definition,
    url: `${CANONICAL}#${t.id}`,
    inDefinedTermSet: `${CANONICAL}#terms`,
  })),
};

const CSS = `
.prg { background: #ffffff; }
.prg .prg-wrap { max-width: 880px; margin: 0 auto; }
.prg p { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 18px !important; line-height: 1.7 !important; color: #1c1917 !important; margin: 0 0 14px !important; }
.prg .prg-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: ${A} !important; margin: 0 0 12px !important; }
.prg h1.prg-h1 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: clamp(30px, 4.6vw, 46px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 16px !important; text-wrap: balance; }
.prg h2.prg-letter { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: 30px !important; line-height: 1 !important; font-weight: 700 !important; color: ${A} !important; margin: 0 0 8px !important; padding-bottom: 8px; border-bottom: 2px solid #d3dfe8; scroll-margin-top: 180px; }
.prg h2.prg-h2 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: clamp(24px, 3.2vw, 30px) !important; line-height: 1.2 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 14px !important; }
.prg .prg-jump { display: flex; flex-wrap: wrap; gap: 6px; margin: 22px 0 0; }
.prg .prg-jump a, .prg .prg-jump span { display: inline-flex; align-items: center; justify-content: center; min-width: 40px; height: 40px; border-radius: 6px; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 17px !important; font-weight: 700; text-decoration: none !important; }
.prg .prg-jump a { background: #ffffff; color: ${A} !important; border: 1px solid #b7cbd9; }
@media (hover: hover) { .prg .prg-jump a:hover { background: ${A}; color: #ffffff !important; } }
.prg .prg-jump a:focus-visible { background: ${A}; color: #ffffff !important; }
.prg .prg-jump span { color: #9a948c; border: 1px solid transparent; }
.prg dl { margin: 0; }
.prg .prg-term { padding: 18px 0; border-bottom: 1px solid #eee9e1; scroll-margin-top: 180px; }
.prg .prg-term:last-child { border-bottom: 0; }
.prg .prg-term:target { background: #eef3f7; box-shadow: -12px 0 0 #eef3f7, 12px 0 0 #eef3f7; }
.prg dt { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 21px; font-weight: 700; color: #14283a; line-height: 1.3; }
.prg dt .prg-aka { display: block; font-size: 16px; font-weight: 500; color: #4a443e; margin-top: 2px; }
.prg dd { margin: 8px 0 0; }
.prg dd p.prg-def { margin: 0 0 8px !important; }
.prg .prg-meta { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 15px !important; color: #3f3a35; line-height: 1.6; }
.prg a.prg-link, .prg .prg-meta a { color: #1B3A6B !important; text-decoration: underline !important; text-underline-offset: 3px; font-size: inherit !important; }
.prg .prg-cats { display: grid; gap: 18px 28px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 760px) { .prg .prg-cats { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.prg .prg-cat h3 { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 18px !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 6px !important; }
.prg .prg-cat ul { margin: 0; padding: 0; list-style: none; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 16px; line-height: 1.7; }
.prg .prg-cat li { display: inline; }
.prg .prg-cat a.prg-link { font-weight: 500 !important; font-size: 16px !important; }
.prg .prg-cat li:not(:last-child)::after { content: " · "; color: #8a837a; }
`;

const ProbateGlossary = () => (
  <div className="prg">
    <style dangerouslySetInnerHTML={{ __html: CSS }} />
    <SEOHead
      title="Washington Probate & Estate Glossary: Terms Explained | Real Property Planning"
      description={`${PROBATE_GLOSSARY.length} Washington probate and estate property terms in plain English: personal representative, letters testamentary, nonintervention powers, creditor claims, transfer on death deeds, stepped-up basis and estate tax, each with its statute.`}
      canonical={CANONICAL}
      schemaJson={schema}
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Estate & Probate", url: "https://realpropertyplanning.com/probate-estate-sales" },
        { name: "Probate & Estate Glossary", url: CANONICAL },
      ]}
    />
    <Header />
    <main id="main-content">
      <section style={{ background: "#eef3f7", padding: "40px 16px 32px", borderBottom: `3px solid ${A}` }}>
        <div className="prg-wrap" style={{ paddingTop: 32 }}>
          <p className="prg-eyebrow">Estate &amp; Probate · Reference</p>
          <h1 className="prg-h1">Washington Probate &amp; Estate Glossary</h1>
          <p style={{ fontSize: 20 }}>
            {PROBATE_GLOSSARY.length} terms you will meet when settling an estate, inheriting a house or selling one in Washington, in
            plain English. Each one links to the guide that explains it and, where there is one, the statute behind it.
          </p>
          <p className="prg-meta" style={{ marginBottom: 0 }}>
            New to probate? Start with the{" "}
            <Link className="prg-link" to="/washington-probate-guide">Washington Probate &amp; Estate Property Guide</Link>.
          </p>
          <div className="prg-jump" role="navigation" aria-label="Glossary letters">
            {ALPHABET.map((L) =>
              BY_LETTER[L] ? (
                <a key={L} href={`#letter-${L}`} aria-label={`Terms starting with ${L}`}>{L}</a>
              ) : (
                <span key={L} aria-hidden="true">{L}</span>
              )
            )}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "32px 16px 24px" }}>
        <div className="prg-wrap">
          <div style={{ marginBottom: 20 }}>
            <BackToPreviousPage variant="top" fallback={{ href: "/washington-probate-guide", label: "Washington Probate Guide" }} />
          </div>
          <h2 className="prg-h2">Browse by topic</h2>
          <div className="prg-cats">
            {PROBATE_GLOSSARY_CATEGORIES.map((cat) => (
              <div key={cat} className="prg-cat">
                <h3>{cat}</h3>
                <ul>
                  {PROBATE_GLOSSARY_A_TO_Z.filter((t) => t.category === cat).map((t) => (
                    <li key={t.id}><a className="prg-link" href={`#${t.id}`}>{t.term}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "24px 16px 48px" }}>
        <div className="prg-wrap" style={{ display: "grid", gap: 36 }}>
          {LETTERS.map((L) => (
            <div key={L}>
              <h2 className="prg-letter" id={`letter-${L}`}>{L}</h2>
              <dl>
                {BY_LETTER[L].map((t) => (
                  <div key={t.id} id={t.id} className="prg-term">
                    <dt>
                      {t.term}
                      {t.aka && <span className="prg-aka">{t.aka}</span>}
                    </dt>
                    <dd>
                      <p className="prg-def">{t.definition}</p>
                      <div className="prg-meta">
                        Explained in <Link to={t.guide.href}>{t.guide.label}</Link>
                        {t.source && (
                          <>
                            {" · "}Source:{" "}
                            <a href={t.source.href} target="_blank" rel="noopener noreferrer">{t.source.label}</a>
                          </>
                        )}
                      </div>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
          <p className="prg-meta" style={{ margin: 0 }}>
            General information, not legal advice. Real Property Planning does not refer clients to attorneys; confirm any lawyer's
            license with the Washington State Bar Association (wsba.org). Missing a term, or found one that is out of date?{" "}
            <Link className="prg-link" to="/corrections-policy">Tell us how to fix it</Link>.
          </p>
        </div>
      </section>
    </main>
    <AuthorByline context="estate" />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default ProbateGlossary;
