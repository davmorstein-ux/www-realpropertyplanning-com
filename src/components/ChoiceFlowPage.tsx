import { useLocation, Link, Navigate } from "react-router-dom";
import { ArrowRight, ChevronRight, ChevronDown } from "lucide-react";
import HeroBandTitle from "@/components/HeroBandTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { AGING_PARENT_LOOKUP, type FlowNode } from "@/lib/aging-parent-flow";
import { SIMPLE_TOPICS, SIMPLE_HUB, NOT_SURE_CHOICE } from "@/lib/aging-parent-simple";
import NextQuestions from "@/components/NextQuestions";
import JourneyShortcuts from "@/components/JourneyShortcuts";
import TopicProfessionals from "@/components/TopicProfessionals";
import { professionalsForTopic } from "@/data/topicProfessionals";

/** Same rule as scripts/build-aging-parent-routes.mjs, so the prerendered
 *  description and the live one agree. */
const metaDescription = (node: FlowNode) => {
  const s = SIMPLE_TOPICS[node.path]?.short || node.content?.intro || node.subtext || node.label;
  return s.length <= 158 ? s : s.slice(0, s.lastIndexOf(" ", 157)) + "…";
};

/** Page heading: the plain title where one was approved, else the band title. */
export const flowHeading = (node: FlowNode, isRoot: boolean) =>
  SIMPLE_TOPICS[node.path]?.title || node.heroBandTitle || (isRoot ? "Helping an Aging Parent" : node.label);

/**
 * Renders a single page in the guided choice flow based on the current pathname.
 *
 * Simplified layout (Oct 22, 2026, approved by the site owner after a reader
 * said the site had too much text and too many choices):
 *  - Choice pages: photo buttons, two per row.
 *  - Topic pages: plain title, "The short answer", three steps with photos,
 *    one next button, the professionals box, then "More on this" with the
 *    full original text in fold-open sections (kept in the HTML for search
 *    engines and AI tools).
 * Class names start "apf-" and avoid card/cta/btn/tile/section, which
 * index.css restyles sitewide. Styles: "AGING PARENT SIMPLE LAYOUT" in index.css.
 */
const ChoiceFlowPage = ({ lookup = AGING_PARENT_LOOKUP }: { lookup?: typeof AGING_PARENT_LOOKUP }) => {
  const { pathname } = useLocation();
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const entry = lookup.get(normalized);

  if (!entry) {
    // Fallback: redirect unknown sub-paths to flow root.
    return <Navigate to="/helping-an-aging-parent" replace />;
  }

  const { node, parent, trail } = entry;
  const hasChildren = !!node.children?.length;
  const isRoot = parent === null;
  const simple = SIMPLE_TOPICS[normalized];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead title={`${node.label} | Real Property Planning`} description={metaDescription(node)} />
      <BreadcrumbSchema items={trail.slice(1).map((t) => ({ name: t.label, url: t.path }))} />
      <Header />

      <main id="main-content" className="flex-1 apf">
        <div className="pt-8 pb-10 lg:pt-10 lg:pb-16 bg-cream">
          <div className="container px-5 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Full-bleed title band, as on every other page. */}
              <div style={{ width: "100vw", position: "relative", left: "50%", transform: "translateX(-50%)" }}>
                <HeroBandTitle as="h1">{flowHeading(node, isRoot)}</HeroBandTitle>
              </div>

              {!isRoot && parent && (
                <p className="apf-back">
                  <Link to={parent.path}>
                    ← Back to {parent.path === "/helping-an-aging-parent" ? "all choices" : parent.heroBandTitle || parent.label}
                  </Link>
                </p>
              )}

              {hasChildren ? (
                <>
                  {node.subtext && <p className="apf-ask">{isRoot ? "Where are you right now?" : node.subtext}</p>}
                  <ChoiceGrid node={node} isRoot={isRoot} />
                  {isRoot && (
                    <JourneyShortcuts lead="Looking for a quick answer?" questions="aging-parent" style={{ margin: "40px auto 0" }} />
                  )}
                </>
              ) : node.content ? (
                <TopicBody node={node} parent={parent} path={normalized} simple={simple} />
              ) : null}
            </div>
          </div>
        </div>
        <NextQuestions />
      </main>

      <Footer />
    </div>
  );
};

/** Photo buttons, two per row (one per row on narrow phones). */
const ChoiceGrid = ({ node, isRoot }: { node: FlowNode; isRoot: boolean }) => {
  const items = node.children!.map((c) => ({
    to: c.path,
    label: SIMPLE_HUB[c.path]?.label || SIMPLE_TOPICS[c.path]?.title || c.label,
    image: SIMPLE_HUB[c.path]?.image || SIMPLE_TOPICS[c.path]?.steps[0]?.image,
  }));
  if (isRoot) items.push(NOT_SURE_CHOICE);
  return (
    <ul className={`apf-grid apf-grid-${items.length}`}>
      {items.map((it) => (
        <li key={it.to}>
          <Link to={it.to} className="apf-pick">
            {it.image && <img src={it.image} alt="" width={800} height={600} loading="lazy" decoding="async" />}
            <span className="apf-pick-label">
              <span>{it.label}</span>
              <span className="apf-arrow" aria-hidden="true"><ChevronRight size={20} strokeWidth={2.5} /></span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const TopicBody = ({
  node, parent, path, simple,
}: {
  node: FlowNode; parent: FlowNode | null; path: string; simple?: (typeof SIMPLE_TOPICS)[string];
}) => {
  const content = node.content!;
  const hasPros = professionalsForTopic(path).length > 0;
  const siblings = parent?.children ?? [];
  const idx = siblings.findIndex((s) => s.path === node.path);
  const next = idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : null;
  const nextLabel = next ? SIMPLE_TOPICS[next.path]?.title || next.label : null;

  return (
    <div className="apf-topic">
      {simple && (
        <>
          <div className="apf-answer">
            <p className="apf-answer-label">The short answer</p>
            <p className="apf-answer-text">{simple.short}</p>
          </div>

          <h2 className="apf-h2">What to do now</h2>
          <ol className="apf-steps">
            {simple.steps.map((s) => (
              <li key={s.title} className="apf-step">
                <img src={s.image} alt="" width={480} height={480} loading="lazy" decoding="async" />
                <div>
                  <p className="apf-step-title">{s.title}</p>
                  <p className="apf-step-text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="apf-next">
            {next ? (
              <Link to={next.path} className="apf-next-link">
                Next: {nextLabel} <ArrowRight size={20} aria-hidden="true" />
              </Link>
            ) : (
              <Link to="/helping-an-aging-parent" className="apf-next-link">
                Back to all choices <ArrowRight size={20} aria-hidden="true" />
              </Link>
            )}
            {hasPros ? (
              <a href="#people-who-help" className="apf-talk">Or talk to someone</a>
            ) : (
              <Link to="/featured-professionals" className="apf-talk">Or talk to someone</Link>
            )}
          </div>
        </>
      )}

      <div id="people-who-help" style={{ scrollMarginTop: 96 }}>
        <TopicProfessionals path={path} style={{ margin: "36px 0 0" }} />
      </div>

      {/* The full original guidance, folded. <details> keeps every word in
          the HTML, so search engines and AI tools still read all of it. */}
      <div className="apf-more">
        <h2 className="apf-h2">More on this</h2>
        <details className="apf-fold">
          <summary>Overview <ChevronDown size={22} aria-hidden="true" /></summary>
          <p className="apf-fold-text">{content.intro}</p>
        </details>
        {content.sections.map((s) => (
          <details key={s.heading} className="apf-fold">
            <summary>{s.heading} <ChevronDown size={22} aria-hidden="true" /></summary>
            <p className="apf-fold-text">{s.body}</p>
          </details>
        ))}
        <p className="apf-closing">{content.closing}</p>
      </div>
    </div>
  );
};

export default ChoiceFlowPage;
