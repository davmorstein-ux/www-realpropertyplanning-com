import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import AuthorByline from "@/components/AuthorByline";
import PageFAQ from "@/components/PageFAQ";
import BackToAFHClub from "@/components/BackToAFHClub";
import ArticleCover from "@/components/ArticleCover";
import MiniMarkdown from "@/components/MiniMarkdown";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import { mdToText } from "@/data/statuteGuides";
import { afhArticle, type AFHArticle as Article } from "@/data/afhArticles";

/**
 * AFH Club articles (Oct 12, 2026). Words live in src/data/afhArticles.json (see the
 * header of afhArticles.ts for how they were checked); sources are in
 * articleRecords.ts and show under the author byline. Built like the statute
 * guides: scoped "afa-" classes with !important to survive index.css; no class
 * name contains "section", "card", "tile", "btn" or "cta".
 */

const G = "#0a5648"; // AFH Club hunter green
const CSS = `
.afa { background: #ffffff; }
.afa .afa-wrap { max-width: 960px; margin: 0 auto; }
.afa .afa-narrow { max-width: 760px; }
.afa p { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 18px !important; line-height: 1.7 !important; color: #1c1917 !important; margin: 0 0 14px !important; }
.afa .afa-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: ${G} !important; margin: 0 0 12px !important; }
.afa h1.afa-h1 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: clamp(30px, 4.6vw, 44px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #10231f !important; margin: 0 0 14px !important; text-wrap: balance; }
.afa .afa-dek { font-size: 19px !important; }
.afa h2.afa-h2 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: clamp(24px, 3.2vw, 30px) !important; line-height: 1.2 !important; font-weight: 700 !important; color: #10231f !important; margin: 0 0 14px !important; text-wrap: balance; scroll-margin-top: 180px; }
.afa .afa-answer { background: #ffffff; border: 1px solid #cfe0dc; border-left: 5px solid ${G}; border-radius: 10px; padding: 18px 22px; margin-top: 18px; }
.afa .afa-answer p { font-size: 19px !important; margin: 0 !important; }
.afa .afa-answer .afa-label { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase; color: ${G} !important; margin: 0 0 6px !important; }
.afa ul.afa-ul, .afa ol.afa-ol { margin: 0 0 16px 24px !important; padding: 0 !important; }
.afa ul.afa-ul { list-style: disc !important; }
.afa ol.afa-ol { list-style: decimal !important; }
.afa li.afa-li { display: list-item !important; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 18px !important; line-height: 1.65 !important; letter-spacing: normal !important; color: #1c1917 !important; margin-bottom: 10px; padding-left: 4px; }
.afa ul.afa-ul li.afa-li { list-style: disc !important; }
.afa ol.afa-ol li.afa-li { list-style: decimal !important; }
.afa li.afa-li::marker { color: ${G}; font-weight: 700; }
.afa a.afa-a { color: ${G} !important; text-decoration: underline !important; text-underline-offset: 3px; font-size: inherit !important; font-weight: 600; }
.afa table.afa-table { border-collapse: collapse; width: 100%; min-width: 420px; margin: 4px 0 16px; background: #fff; border: 1px solid #cfe0dc; }
.afa table.afa-table th, .afa table.afa-table td { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 17px !important; line-height: 1.45; padding: 10px 14px; text-align: left; border-bottom: 1px solid #e3ece9; color: #1c1917; }
.afa table.afa-table th { background: #edf5f3; font-weight: 700; color: #10231f; }
.afa .afa-note { background: #f7f4ef; border: 1px solid #e2ddd5; border-radius: 10px; padding: 16px 20px; }
.afa .afa-small { font-size: 15px !important; color: #3f3a35 !important; }
.afa .afa-toc { display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0 0; padding: 0; list-style: none; }
.afa .afa-toc li { list-style: none; }
.afa .afa-toc a { display: inline-block; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 16px !important; font-weight: 600; color: ${G} !important; border: 1.5px solid ${G}; border-radius: 999px; padding: 6px 14px; text-decoration: none !important; background: #fff; }
@media (hover: hover) { .afa .afa-toc a:hover { background: ${G}; color: #fff !important; } }
`;

const MD_CLASSES = { p: undefined, ul: "afa-ul", ol: "afa-ol", li: "afa-li", a: "afa-a", table: "afa-table" };

const anchor = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const Band = ({ bg, id, children }: { bg: string; id?: string; children: ReactNode }) => (
  <section id={id} style={{ background: bg, padding: "44px 16px" }}>
    <div className="afa-wrap">
      <div className="afa-narrow">{children}</div>
    </div>
  </section>
);

const fmt = (iso: string) => new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

function Page({ a }: { a: Article }) {
  const url = `https://realpropertyplanning.com${a.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: mdToText(a.shortAnswer),
    url,
    datePublished: a.published,
    dateModified: a.reviewed,
    author: articleAuthor,
    publisher: articlePublisher,
    ...(a.cover ? { image: `https://realpropertyplanning.com${a.cover}` } : {}),
    isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
  };
  return (
    <div className="afa">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SEOHead title={`${a.title} | AFH Club`} description={mdToText(a.shortAnswer).slice(0, 200).replace(/\s+\S*$/, "") + "…"} canonical={url} ogType="article" schemaJson={schema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
          { name: a.short, url },
        ]}
      />
      <Header />
      <main id="main-content">
        <section style={{ background: "#faf8f4", padding: "36px 16px 32px", borderBottom: `3px solid ${G}` }}>
          <div className="afa-wrap" style={{ paddingTop: 28 }}>
            <div className="afa-narrow">
              {a.cover && <ArticleCover src={a.cover} alt={`Cover art: ${a.short}`} width={1086} height={1448} />}
              <p className="afa-eyebrow">{a.eyebrow}</p>
              <h1 className="afa-h1">{a.title}</h1>
              <p className="afa-dek">{a.dek}</p>
              <div className="afa-answer">
                <p className="afa-label">The short answer</p>
                <MiniMarkdown md={a.shortAnswer} classes={MD_CLASSES} />
              </div>
              <p className="afa-small" style={{ marginTop: 12 }}>
                Written from the HCA, DSHS and Washington rules it cites, checked {fmt(a.reviewed)}. Its primary sources are listed under the author note at the end of the page.
              </p>
              <nav aria-label="On this page">
                <ul className="afa-toc">
                  {a.sections.map((s) => (
                    <li key={s.heading}><a href={`#${anchor(s.heading)}`}>{s.heading.split(":")[0]}</a></li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {a.sections.map((s, i) => (
          <Band key={s.heading} id={anchor(s.heading)} bg={i % 2 === 0 ? "#ffffff" : "#faf8f4"}>
            <h2 className="afa-h2">{s.heading}</h2>
            <MiniMarkdown md={s.body} classes={MD_CLASSES} />
          </Band>
        ))}

        {a.next && (
          <Band bg={a.sections.length % 2 === 0 ? "#ffffff" : "#faf8f4"} id="what-to-do-next">
            <h2 className="afa-h2">What to do next</h2>
            <MiniMarkdown md={a.next} classes={MD_CLASSES} />
            <div className="afa-note" style={{ marginTop: 20 }}>
              <p style={{ marginBottom: 0 }}>
                General information for adult family home owners and operators, not legal, billing or licensing advice. DSHS and HCA rules and procedures change: confirm current requirements with DSHS and HCA. See also{" "}
                <Link className="afa-a" to="/afh-club/questions/running">Running an AFH: Questions &amp; Answers</Link>.
              </p>
            </div>
          </Band>
        )}

        <div style={{ padding: "0 16px" }}>
          <AuthorByline context="afh" />
        </div>
        <PageFAQ faqs={a.faqs.map((f) => ({ question: f.question, answer: f.answer }))} heading={`${a.short}: Common Questions`} eyebrow="Frequently Asked Questions" id={`afa-${a.slug}`} />
        <BackToAFHClub />
      </main>
      <Footer />
    </div>
  );
}

export default function AFHArticle({ slug }: { slug: string }) {
  return <Page a={afhArticle(slug)} />;
}
