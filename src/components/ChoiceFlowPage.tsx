import { useLocation, Link, Navigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { AGING_PARENT_LOOKUP, type FlowNode } from "@/lib/aging-parent-flow";
import agingParentHero from "@/assets/aging_parent_hero_clean.png";

/**
 * Renders a single page in the guided choice flow based on the current pathname.
 * Reusable: a future flow can swap the lookup map for another topic tree.
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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title={`${node.label} | Real Property Planning`}
        description={node.subtext || node.label}
      />
      <BreadcrumbSchema items={trail.slice(1).map((t) => ({ name: t.label, url: t.path }))} />
      <Header />

      <main id="main-content" className="flex-1">
        <section className="py-10 lg:py-16 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Hero image — root page only */}
              {isRoot && (
                <>
                  <div style={{ width: '100vw', position: 'relative', left: '50%', transform: 'translateX(-50%)', lineHeight: 0 }}>
                    <img
                      src={agingParentHero}
                      alt="Helping an aging parent — Real Property Planning"
                      className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover block"
                      loading="eager"
                    />
                    {/* Thin white gap */}
                    <div className="bg-white h-1.5" aria-hidden="true" />
                    {/* Blue band — standardized height */}
                    <div className="bg-primary py-9 md:py-10">
                      <div className="container px-6 lg:px-8">
                        <div className="font-serif text-[32px] md:text-[40px] lg:text-[44px]" style={{ color: 'white', fontWeight: 600, textAlign: 'center', margin: 0, lineHeight: 1.2 }}>
                          Helping an Aging Parent
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: '40px' }} />
                </>
              )}

              {/* Breadcrumb / back link */}
              <nav aria-label="Breadcrumb" className="mb-8">
                {isRoot ? (
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-navy/70 hover:text-navy text-base font-semibold"
                  >
                    <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                    Home
                  </Link>
                ) : (
                  <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-navy/70">
                    {trail.slice(0, -1).map((crumb, i) => (
                      <li key={crumb.path} className="flex items-center gap-2">
                        <Link to={crumb.path} className="hover:text-navy font-semibold">
                          {i === 0 ? "Helping an Aging Parent" : crumb.label}
                        </Link>
                        <span aria-hidden="true" className="text-navy/40">/</span>
                      </li>
                    ))}
                    <li className="text-navy font-semibold">{node.label}</li>
                  </ol>
                )}
              </nav>

              {/* Heading */}
              <header className="mb-10 text-center">
                {!isRoot && (
                  <h1 className="font-serif text-3xl md:text-5xl text-navy font-semibold leading-tight mb-4">
                    {node.label}
                  </h1>
                )}
                {isRoot && (
                  <h1 className="sr-only">Helping an Aging Parent</h1>
                )}
                {node.subtext && (
                  <p className="text-navy/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    {node.subtext}
                  </p>
                )}
              </header>

              {/* Choice cards or placeholder */}
              {hasChildren ? (
                <ChoiceGrid choices={node.children!} />
              ) : node.content ? (
                <ContentBlock content={node.content} />
              ) : (
                <ComingSoon />
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const ChoiceGrid = ({ choices }: { choices: FlowNode[] }) => {
  // Up to 5 cards: 1 col mobile, 2 cols tablet, 3 cols desktop so all 5 fit above the fold.
  return (
    <ul
      className={`grid gap-5 sm:gap-6 lg:gap-7 grid-cols-1 sm:grid-cols-2 items-stretch ${
        choices.length >= 5 ? "lg:grid-cols-3" : ""
      }`}
    >
      {choices.map((choice) => {
        const Icon = choice.icon;
        return (
          <li key={choice.path} className="h-full">
            <Link
              to={choice.path}
              className="card-3d-blue group block h-full min-h-[176px] sm:min-h-[192px] no-underline"
            >
              <div className="card-3d-blue__inner h-full">
                <div className="card-3d-blue__face h-full">
                  <div className="flex h-full flex-col justify-between px-7 pb-7 pt-8 sm:px-8 sm:pb-8 sm:pt-9">
                    <div className="flex items-center gap-5">
                      {choice.image ? (
                        <img
                          src={choice.image}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          style={{ width: 56, height: 56 }}
                          className="shrink-0 object-contain"
                        />
                      ) : (
                        <span style={{ width: 56, height: 56 }} className="shrink-0 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 text-gold flex items-center justify-center">
                          <Icon className="w-7 h-7" aria-hidden="true" />
                        </span>
                      )}
                      <h3
                        className="font-serif text-[19px] sm:text-xl font-bold text-navy leading-snug flex-1 no-underline group-hover:text-accent transition-colors"
                      >
                        {choice.label}
                      </h3>
                    </div>
                    <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-gold group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                      <span>Learn more</span>
                      <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const ComingSoon = () => (
  <div className="bg-white border-2 border-gold/25 rounded-2xl p-8 md:p-10 text-center shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)]">
    <p className="text-navy text-lg md:text-xl leading-relaxed mb-2 font-semibold">
      Content coming soon.
    </p>
    <p className="text-navy/70 text-base md:text-lg leading-relaxed">
      We're putting together clear, helpful guidance for this step. Check back shortly.
    </p>
  </div>
);

const ContentBlock = ({ content }: { content: NonNullable<FlowNode["content"]> }) => (
  <div className="space-y-6 max-w-3xl mx-auto">
    <p className="text-navy/80 text-lg leading-relaxed">{content.intro}</p>
    {content.sections.map((section, i) => (
      <div key={i}>
        <h2 className="font-serif text-xl font-semibold text-navy mb-2">{section.heading}</h2>
        <p className="text-navy/75 text-base leading-relaxed whitespace-pre-line">{section.body}</p>
      </div>
    ))}
    <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-8">
      <p className="text-navy/80 text-base leading-relaxed">{content.closing}</p>
      <a href="/contact" className="inline-block mt-4 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy/90 transition-colors">
        Connect With Our Team
      </a>
    </div>
  </div>
);

export default ChoiceFlowPage;
