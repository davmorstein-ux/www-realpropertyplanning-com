import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import AuthorByline from "@/components/AuthorByline";
import PageFAQ from "@/components/PageFAQ";
import BackToPreviousPage from "@/components/BackToPreviousPage";
import ProbateStartHere from "@/components/ProbateStartHere";
import MiniMarkdown from "@/components/MiniMarkdown";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import {
  STATUTE_GUIDES,
  STATUTE_GUIDES_PUBLISHED,
  STATUTE_GUIDES_REVIEWED,
  mdToText,
  statuteGuide,
  type StatuteGuide as Guide,
} from "@/data/statuteGuides";

/**
 * The three statute-based probate guides (Oct 11, 2026): probate costs, debts after a
 * death, will contests. Words live in src/data/statuteGuides.json (see the header of
 * statuteGuides.ts for how they were checked); sources are in articleRecords.ts and
 * show under the author byline. Built like Property Taxes After a Death: scoped "stg-"
 * classes with !important to survive index.css; no class name contains "section",
 * "card", "tile", "btn" or "cta".
 */

const A = "#25597e"; // the Estate & Probate menu colour
const CSS = `
.stg { background: #ffffff; }
.stg .stg-wrap { max-width: 960px; margin: 0 auto; }
.stg .stg-narrow { max-width: 760px; }
.stg p { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 18px !important; line-height: 1.7 !important; color: #1c1917 !important; margin: 0 0 14px !important; }
.stg .stg-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: ${A} !important; margin: 0 0 12px !important; }
.stg h1.stg-h1 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: clamp(30px, 4.6vw, 44px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 18px !important; text-wrap: balance; }
.stg h2.stg-h2 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: clamp(24px, 3.2vw, 30px) !important; line-height: 1.2 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 14px !important; text-wrap: balance; scroll-margin-top: 180px; }
.stg .stg-answer { background: #ffffff; border: 1px solid #d3dfe8; border-left: 5px solid ${A}; border-radius: 10px; padding: 18px 22px; }
.stg .stg-answer p { font-size: 19px !important; margin: 0 !important; }
.stg .stg-answer .stg-label { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase; color: ${A} !important; margin: 0 0 6px !important; }
.stg ul.stg-ul, .stg ol.stg-ol { margin: 0 0 16px 24px !important; padding: 0 !important; }
.stg ul.stg-ul { list-style: disc !important; }
.stg ol.stg-ol { list-style: decimal !important; }
.stg li.stg-li { display: list-item !important; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 18px !important; line-height: 1.65 !important; letter-spacing: normal !important; color: #1c1917 !important; margin-bottom: 10px; padding-left: 4px; }
.stg ul.stg-ul li.stg-li { list-style: disc !important; }
.stg ol.stg-ol li.stg-li { list-style: decimal !important; }
.stg li.stg-li::marker { color: ${A}; font-weight: 700; }
.stg a.stg-a { color: #1B3A6B !important; text-decoration: underline !important; text-underline-offset: 3px; font-size: inherit !important; font-weight: 600; }
.stg table.stg-table { border-collapse: collapse; width: 100%; min-width: 420px; margin: 4px 0 16px; background: #fff; border: 1px solid #d3dfe8; }
.stg table.stg-table th, .stg table.stg-table td { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 17px !important; line-height: 1.45; padding: 10px 14px; text-align: left; border-bottom: 1px solid #e3e9ef; color: #1c1917; }
.stg table.stg-table th { background: #eef3f7; font-weight: 700; color: #14283a; }
.stg .stg-note { background: #f7f4ef; border: 1px solid #e2ddd5; border-radius: 10px; padding: 16px 20px; }
.stg .stg-small { font-size: 15px !important; color: #3f3a35 !important; }
.stg .stg-toc { display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0 0; padding: 0; list-style: none; }
.stg .stg-toc li { list-style: none; }
.stg .stg-toc a { display: inline-block; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 16px !important; font-weight: 600; color: ${A} !important; border: 1.5px solid ${A}; border-radius: 999px; padding: 6px 14px; text-decoration: none !important; background: #fff; }
@media (hover: hover) { .stg .stg-toc a:hover { background: ${A}; color: #fff !important; } }
`;

const MD_CLASSES = { p: undefined, ul: "stg-ul", ol: "stg-ol", li: "stg-li", a: "stg-a", table: "stg-table" };

const anchor = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const Band = ({ bg, id, children }: { bg: string; id?: string; children: ReactNode }) => (
  <section id={id} style={{ background: bg, padding: "44px 16px" }}>
    <div className="stg-wrap">
      <div className="stg-narrow">{children}</div>
    </div>
  </section>
);

const fmt = (iso: string) => new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

function Page({ g }: { g: Guide }) {
  const url = `https://realpropertyplanning.com${g.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: mdToText(g.shortAnswer),
    url,
    datePublished: g.published ?? STATUTE_GUIDES_PUBLISHED,
    dateModified: g.reviewed ?? STATUTE_GUIDES_REVIEWED,
    author: articleAuthor,
    publisher: articlePublisher,
    isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
  };
  const others = STATUTE_GUIDES.filter((x) => x.slug !== g.slug);
  const back = g.back ?? { href: "/washington-probate-guide", label: "Washington Probate Guide" };
  return (
    <div className="stg">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SEOHead title={`${g.title} | Real Property Planning`} description={mdToText(g.shortAnswer).slice(0, 200).replace(/\s+\S*$/, "") + "…"} canonical={url} ogType="article" schemaJson={schema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          g.crumb ?? { name: "Estate & Probate", url: "https://realpropertyplanning.com/probate-estate-sales" },
          { name: g.short, url },
        ]}
      />
      <Header />
      <main id="main-content">
        {g.probateBanner !== false && <ProbateStartHere />}
        <section style={{ background: "#eef3f7", padding: "36px 16px 32px", borderBottom: `3px solid ${A}` }}>
          <div className="stg-wrap" style={{ paddingTop: 28 }}>
            <div className="stg-narrow">
              <p className="stg-eyebrow">{g.eyebrow ?? "Estate & Probate · For executors and families"}</p>
              <h1 className="stg-h1">{g.title}</h1>
              <div className="stg-answer">
                <p className="stg-label">The short answer</p>
                <MiniMarkdown md={g.shortAnswer} classes={MD_CLASSES} />
              </div>
              <p className="stg-small" style={{ marginTop: 12 }}>
                Written from the Washington statutes it cites, checked {fmt(g.reviewed ?? STATUTE_GUIDES_REVIEWED)}. Its primary sources are listed at the end of the page.
              </p>
              <nav aria-label="On this page">
                <ul className="stg-toc">
                  {g.sections.map((s) => (
                    <li key={s.heading}><a href={`#${anchor(s.heading)}`}>{s.heading}</a></li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>

        <Band bg="#ffffff">
          <BackToPreviousPage variant="top" fallback={back} />
        </Band>

        {g.sections.map((s, i) => (
          <Band key={s.heading} id={anchor(s.heading)} bg={i % 2 === 0 ? "#f7f4ef" : "#ffffff"}>
            <h2 className="stg-h2">{s.heading}</h2>
            <MiniMarkdown md={s.body} classes={MD_CLASSES} />
          </Band>
        ))}

        {g.next && (
          <Band bg={g.sections.length % 2 === 0 ? "#f7f4ef" : "#ffffff"} id="what-to-do-next">
            <h2 className="stg-h2">What to do next</h2>
            <MiniMarkdown md={g.next} classes={MD_CLASSES} />
            <p style={{ marginTop: 18 }}>
              <strong>Related:</strong>{" "}
              {others.map((o, j) => (
                <span key={o.slug}>
                  {j > 0 && " · "}
                  <Link className="stg-a" to={o.path}>{o.title}</Link>
                </span>
              ))}
            </p>
            <div className="stg-note" style={{ marginTop: 20 }}>
              <p style={{ marginBottom: 0 }}>
                General information about Washington law, not legal or tax advice. Laws change, and how they apply depends on the facts; a Washington {g.slug === "choosing-a-trustee" ? "estate planning attorney can advise on a particular trust" : "probate attorney can advise on a particular estate"}.
                Real Property Planning does not refer anyone to attorneys.
              </p>
            </div>
          </Band>
        )}

        <PageFAQ faqs={g.faqs.map((f) => ({ question: f.question, answer: f.answer }))} heading={`${g.short}: Common Questions`} eyebrow="Frequently Asked Questions" id={`stg-${g.slug}`} />
        <div style={{ padding: "0 16px 32px" }}>
          <div className="stg-wrap">
            <BackToPreviousPage variant="bottom" fallback={back} />
          </div>
        </div>
      </main>
      <AuthorByline context="estate" />
      <DisclaimerSection />
      <Footer />
    </div>
  );
}

export default function StatuteGuide({ slug }: { slug: Guide["slug"] }) {
  return <Page g={statuteGuide(slug)} />;
}
