import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import AuthorByline from "@/components/AuthorByline";
import { AFH_GLOSSARY, GLOSSARY_A_TO_Z, GLOSSARY_CATEGORIES, type GlossaryTerm } from "@/data/afhGlossary";

/**
 * AFH Club glossary (Sept 29, 2026). Every word lives in src/data/afhGlossary.ts,
 * which the prerender also reads; this file is layout only.
 * index.css traps handled here: the first section's top padding is zeroed
 * sitewide (padding goes on the inner wrapper), `main h2` is forced to 36px and
 * `main a` to 16px (scoped classes with !important), and <nav> is styled as the
 * site header (the jump bar is a div with role="navigation").
 */

const PATH = "/afh-club/glossary";
const CANONICAL = `https://realpropertyplanning.com${PATH}`;

const letterOf = (t: GlossaryTerm) => {
  const c = t.term.charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
};

const BY_LETTER = GLOSSARY_A_TO_Z.reduce<Record<string, GlossaryTerm[]>>((acc, t) => {
  (acc[letterOf(t)] ||= []).push(t);
  return acc;
}, {});
const LETTERS = Object.keys(BY_LETTER).sort();
const ALPHABET = ["#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

const schema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": `${CANONICAL}#terms`,
  name: "Washington Adult Family Home Glossary",
  description: "Plain-English definitions of the licensing, building, payment, ownership and enforcement terms used for Washington adult family homes, each with its primary source.",
  url: CANONICAL,
  hasDefinedTerm: AFH_GLOSSARY.map((t) => ({
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
.afhg { background: #ffffff; }
.afhg .afhg-wrap { max-width: 880px; margin: 0 auto; }
.afhg p { font-family: 'DM Sans', sans-serif !important; font-size: 18px !important; line-height: 1.7 !important; color: #1c1917 !important; margin: 0 0 14px !important; }
.afhg .afhg-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: #0a5648 !important; margin: 0 0 12px !important; }
.afhg h1.afhg-h1 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(30px, 4.6vw, 46px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #192A19 !important; margin: 0 0 16px !important; text-wrap: balance; }
.afhg h2.afhg-letter { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: 30px !important; line-height: 1 !important; font-weight: 700 !important; color: #0a5648 !important; margin: 0 0 8px !important; padding-bottom: 8px; border-bottom: 2px solid #d5e0da; scroll-margin-top: 180px; }
.afhg h2.afhg-h2 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(24px, 3.2vw, 30px) !important; line-height: 1.2 !important; font-weight: 700 !important; color: #192A19 !important; margin: 0 0 14px !important; }
.afhg .afhg-jump { display: flex; flex-wrap: wrap; gap: 6px; margin: 22px 0 0; }
.afhg .afhg-jump a, .afhg .afhg-jump span { display: inline-flex; align-items: center; justify-content: center; min-width: 38px; height: 38px; border-radius: 6px; font-family: 'DM Sans', sans-serif; font-size: 17px !important; font-weight: 700; text-decoration: none !important; }
.afhg .afhg-jump a { background: #ffffff; color: #0a5648 !important; border: 1px solid #b9cdc3; }
.afhg .afhg-jump a:hover, .afhg .afhg-jump a:focus-visible { background: #0a5648; color: #ffffff !important; }
.afhg .afhg-jump span { color: #a8a29a; border: 1px solid transparent; }
.afhg dl { margin: 0; }
.afhg .afhg-term { padding: 18px 0; border-bottom: 1px solid #eee9e1; scroll-margin-top: 180px; }
.afhg .afhg-term:last-child { border-bottom: 0; }
.afhg .afhg-term:target { background: #f3f6f4; box-shadow: -12px 0 0 #f3f6f4, 12px 0 0 #f3f6f4; }
.afhg dt { font-family: 'DM Sans', sans-serif; font-size: 21px; font-weight: 700; color: #192A19; line-height: 1.3; }
.afhg dt .afhg-aka { display: block; font-size: 16px; font-weight: 500; color: #4a443e; margin-top: 2px; }
.afhg dd { margin: 8px 0 0; }
.afhg dd p.afhg-def { margin: 0 0 8px !important; }
.afhg .afhg-meta { font-family: 'DM Sans', sans-serif; font-size: 15px !important; color: #3f3a35; line-height: 1.6; }
.afhg a.afhg-link, .afhg .afhg-meta a { color: #1B3A6B !important; text-decoration: underline !important; text-underline-offset: 3px; font-size: inherit !important; }
.afhg .afhg-cats { display: grid; gap: 18px 28px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 760px) { .afhg .afhg-cats { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.afhg .afhg-cat h3 { font-family: 'DM Sans', sans-serif !important; font-size: 18px !important; font-weight: 700 !important; color: #192A19 !important; margin: 0 0 6px !important; }
.afhg .afhg-cat ul { margin: 0; padding: 0; list-style: none; font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.7; }
.afhg .afhg-cat li { display: inline; }
.afhg .afhg-cat a.afhg-link { font-weight: 500 !important; font-size: 16px !important; }
.afhg .afhg-cat li:not(:last-child)::after { content: " · "; color: #8a837a; }
`;

const AFHGlossary = () => (
  <div className="afhg">
    <style>{CSS}</style>
    <SEOHead
      title="Washington Adult Family Home Glossary: AFH Terms Explained | AFH Club"
      description={`${AFH_GLOSSARY.length} Washington adult family home terms in plain English: CHOW, CARE and the A–E classifications, CBHS tiers, ECS and SBS, WABO and form 15-604, license fees, inspections and enforcement, each with its WAC or RCW source.`}
      canonical={CANONICAL}
      schemaJson={schema}
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "AFH Glossary", url: CANONICAL },
      ]}
    />
    <Header />
    <main id="main-content">
      <section style={{ background: "#edf0f3", padding: "40px 16px 32px", borderBottom: "3px solid #0a5648" }}>
        <div className="afhg-wrap" style={{ paddingTop: 32 }}>
          <p className="afhg-eyebrow">AFH Club · Reference</p>
          <h1 className="afhg-h1">Washington Adult Family Home Glossary</h1>
          <p style={{ fontSize: 20 }}>
            {AFH_GLOSSARY.length} terms you will meet when opening, running, buying or selling an adult family home in Washington,
            in plain English. Each one links to the AFH Club guide that explains it and, where there is one, the rule or statute
            behind it.
          </p>
          <p className="afhg-meta" style={{ marginBottom: 0 }}>
            New to adult family homes? Start with the{" "}
            <Link className="afhg-link" to="/afh-club/washington-adult-family-home-guide">Washington Adult Family Home Guide</Link>.
          </p>
          <div className="afhg-jump" role="navigation" aria-label="Glossary letters">
            {ALPHABET.map((L) =>
              BY_LETTER[L] ? (
                <a key={L} href={`#letter-${L === "#" ? "0-9" : L}`} aria-label={L === "#" ? "Terms starting with a number" : `Terms starting with ${L}`}>{L}</a>
              ) : (
                <span key={L} aria-hidden="true">{L}</span>
              )
            )}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "40px 16px 24px" }}>
        <div className="afhg-wrap">
          <h2 className="afhg-h2">Browse by topic</h2>
          <div className="afhg-cats">
            {GLOSSARY_CATEGORIES.map((cat) => (
              <div key={cat} className="afhg-cat">
                <h3>{cat}</h3>
                <ul>
                  {GLOSSARY_A_TO_Z.filter((t) => t.category === cat).map((t) => (
                    <li key={t.id}><a className="afhg-link" href={`#${t.id}`}>{t.term}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "24px 16px 48px" }}>
        <div className="afhg-wrap" style={{ display: "grid", gap: 36 }}>
          {LETTERS.map((L) => (
            <div key={L}>
              <h2 className="afhg-letter" id={`letter-${L === "#" ? "0-9" : L}`}>{L === "#" ? "0–9" : L}</h2>
              <dl>
                {BY_LETTER[L].map((t) => (
                  <div key={t.id} id={t.id} className="afhg-term">
                    <dt>
                      {t.term}
                      {t.aka && <span className="afhg-aka">{t.aka}</span>}
                    </dt>
                    <dd>
                      <p className="afhg-def">{t.definition}</p>
                      <div className="afhg-meta">
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
          <p className="afhg-meta" style={{ margin: 0 }}>
            Missing a term, or found one that is out of date?{" "}
            <Link className="afhg-link" to="/corrections-policy">Tell us how to fix it</Link>.
          </p>
        </div>
      </section>
    </main>
    <AuthorByline context="afh" />
    <BackToAFHClub />
    <CTASection />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default AFHGlossary;
