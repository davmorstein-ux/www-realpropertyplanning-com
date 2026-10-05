import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import AuthorByline from "@/components/AuthorByline";
import { FLOW_CHART_CSS } from "@/components/probate/ProbateFlowChart";
import { PROBATE_CSS, PROBATE_CSS_EXTRA } from "@/components/probate/probateStyles";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import type { FlowPage } from "@/data/probateFlow";

/**
 * One box of a flow chart guide (Oct 1, 2026): the probate guide and the AFH
 * guide share this template so they look and work the same. Words come from
 * src/data/probateFlow.ts and src/data/afhFlow.ts; keep pages short.
 *
 * The styles are the probate ones; `accent` swaps the probate blue for another
 * section's colour (AFH Club green) everywhere it appears.
 */
const SITE = "https://realpropertyplanning.com";
const PROBATE_BLUE = "#25597e";

export const flowCss = (accent: string) =>
  (PROBATE_CSS + PROBATE_CSS_EXTRA + FLOW_CHART_CSS).split(PROBATE_BLUE).join(accent);

export interface FlowBranchProps {
  page: FlowPage;
  base: string;
  /** "Washington Probate Guide" / "Washington AFH Guide" */
  guideName: string;
  /** The chart, rendered with this page's box highlighted. */
  chart: ReactNode;
  reference: { label: string; href: string };
  glossary: { label: string; href: string };
  accent: string;
  heroBg: string;
  disclaimer: string;
  /** Extra blocks under the article (AFH Club adds its own back link and CTA). */
  after?: ReactNode;
  /** A full section shown after "Watch out for" (e.g. the heir page's "when the executor isn't acting"). */
  extra?: ReactNode;
  /** Which author sentence the byline shows: "estate" for probate pages, "afh" for AFH Club. */
  bylineContext: "afh" | "estate";
}

const Section = ({ bg, children }: { bg: string; children: ReactNode }) => (
  <section style={{ background: bg, padding: "36px 16px" }}>
    <div className="prp-wrap">{children}</div>
  </section>
);

export default function FlowBranchPage({ page: p, base, guideName, chart, reference, glossary, accent, heroBg, disclaimer, after, extra, bylineContext }: FlowBranchProps) {
  const canonical = `${SITE}${p.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    url: canonical,
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    author: articleAuthor,
    publisher: articlePublisher,
    isPartOf: { "@type": "WebPage", name: guideName, url: `${SITE}${base}` },
  };
  return (
    <div className="prp">
      <style dangerouslySetInnerHTML={{ __html: flowCss(accent) }} />
      <SEOHead title={`${p.title} | ${guideName}`} description={p.description} canonical={canonical} ogType="article" schemaJson={schema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE },
          { name: guideName, url: `${SITE}${base}` },
          { name: p.title, url: canonical },
        ]}
      />
      <Header />
      <main id="main-content">
        <section style={{ background: heroBg, padding: "32px 16px 28px", borderBottom: `3px solid ${accent}` }}>
          {/* index.css zeroes the first section's top padding; the gap goes inside. */}
          <div className="prp-wrap" style={{ paddingTop: 24 }}>
            <div className="prp-narrow">
              <div className="prp-trail" role="navigation" aria-label="Where you are in the flow chart">
                <Link to={base}>Flow chart</Link>
                {p.trail.map((t, i) => (
                  <span key={t}>
                    <span className="prp-sep" aria-hidden="true">›</span>{" "}
                    {i === p.trail.length - 1 ? <strong>{t}</strong> : t}
                  </span>
                ))}
              </div>
              <h1 className="prp-h1">{p.title}</h1>
              {p.summary.map((s) => (
                <p key={s.slice(0, 30)}>{s}</p>
              ))}
            </div>
          </div>
        </section>

        <Section bg="#ffffff">
          <div className="prp-narrow">
            <h2 className="prp-h2">Your steps, in order</h2>
            <ol className="prp-big">
              {p.steps.map((s) => (
                <li key={s.href}>
                  <div>
                    <Link to={s.href}>{s.label}</Link>
                    <span>{s.note}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        <Section bg="#f7f4ef">
          <h2 className="prp-h2">Watch out for</h2>
          <div className="prp-watch">
            {p.watch.map((w) => (
              <div key={w.lead}>
                <p className="prp-watch-lead">{w.lead}</p>
                <p>{w.text}</p>
                {w.link && (
                  <p style={{ marginBottom: 0 }}>
                    <Link to={w.link.href}>{w.link.label}</Link>
                  </p>
                )}
                {w.cite && (
                  <p style={{ marginBottom: 0 }}>
                    <a href={w.cite.href} target="_blank" rel="noopener noreferrer">{w.cite.label}</a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </Section>

        {extra}

        <Section bg="#ffffff">
          <div className="prp-nextrow">
            <Link className="prp-back" to={base}>← Back to the flow chart</Link>
            {p.next && <Link className="prp-next" to={p.next.href}>Next: {p.next.label} →</Link>}
          </div>
          <p className="prp-small" style={{ marginTop: 18 }}>
            Looking for a figure or a rule? See <Link className="prp-link" to={reference.href}>{reference.label}</Link> or the{" "}
            <Link className="prp-link" to={glossary.href}>{glossary.label}</Link>. {disclaimer}
          </p>
          <details className="prp-fold" style={{ marginTop: 18 }}>
            <summary>See the whole flow chart</summary>
            <div style={{ paddingTop: 6 }}>{chart}</div>
          </details>
        </Section>
      </main>
      <AuthorByline context={bylineContext} />
      {after}
      <DisclaimerSection />
      <Footer />
    </div>
  );
}
