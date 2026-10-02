import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import AuthorByline from "@/components/AuthorByline";
import ProbateFlowChart, { FLOW_CHART_CSS } from "@/components/probate/ProbateFlowChart";
import { PROBATE_CSS, PROBATE_CSS_EXTRA } from "@/components/probate/probateStyles";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import { FLOW_BY_SLUG, FLOW_BASE, DEADLINES_PATH } from "@/data/probateFlow";

/**
 * One box of the probate flow chart (Oct 1, 2026). Words live in
 * src/data/probateFlow.ts; keep these pages short (see the note there).
 */
const SITE = "https://realpropertyplanning.com";

const Section = ({ bg, children }: { bg: string; children: React.ReactNode }) => (
  <section style={{ background: bg, padding: "36px 16px" }}>
    <div className="prp-wrap">{children}</div>
  </section>
);

export default function ProbateFlowPage({ slug }: { slug: string }) {
  const p = FLOW_BY_SLUG[slug];
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
    isPartOf: { "@type": "WebPage", name: "Washington Probate & Estate Property Guide", url: `${SITE}${FLOW_BASE}` },
  };
  return (
    <div className="prp">
      <style>{PROBATE_CSS + PROBATE_CSS_EXTRA + FLOW_CHART_CSS}</style>
      <SEOHead title={`${p.title} | Washington Probate Guide`} description={p.description} canonical={canonical} ogType="article" schemaJson={schema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE },
          { name: "Washington Probate Guide", url: `${SITE}${FLOW_BASE}` },
          { name: p.title, url: canonical },
        ]}
      />
      <Header />
      <main id="main-content">
        <section style={{ background: "#eef3f7", padding: "32px 16px 28px", borderBottom: "3px solid #25597e" }}>
          {/* index.css zeroes the first section's top padding; the gap goes inside. */}
          <div className="prp-wrap" style={{ paddingTop: 24 }}>
          <div className="prp-narrow">
            <div className="prp-trail" role="navigation" aria-label="Where you are in the probate flow chart">
              <Link to={FLOW_BASE}>Probate flow chart</Link>
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

        <Section bg="#ffffff">
          <div className="prp-nextrow">
            <Link className="prp-back" to={FLOW_BASE}>← Back to the flow chart</Link>
            {p.next && <Link className="prp-next" to={p.next.href}>Next: {p.next.label} →</Link>}
          </div>
          <p className="prp-small" style={{ marginTop: 18 }}>
            Looking for a deadline or a rule? See <Link className="prp-link" to={DEADLINES_PATH}>Deadlines &amp; key rules</Link> or the{" "}
            <Link className="prp-link" to="/probate-glossary">glossary</Link>. General information, not legal advice; Real Property Planning does not refer clients to attorneys.
          </p>
          <details className="prp-fold" style={{ marginTop: 18 }}>
            <summary>See the whole flow chart</summary>
            <div style={{ paddingTop: 6 }}>
              <ProbateFlowChart current={slug} />
            </div>
          </details>
        </Section>
      </main>
      <AuthorByline />
      <DisclaimerSection />
      <Footer />
    </div>
  );
}
