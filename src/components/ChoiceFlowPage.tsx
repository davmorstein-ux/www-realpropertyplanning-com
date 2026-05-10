import { useLocation, Link, Navigate } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { AGING_PARENT_LOOKUP, type FlowNode } from "@/lib/aging-parent-flow";

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
                <h1 className="font-serif text-3xl md:text-5xl text-navy font-semibold leading-tight mb-4">
                  {node.label}
                </h1>
                {node.subtext && (
                  <p className="text-navy/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    {node.subtext}
                  </p>
                )}
              </header>

              {/* Choice cards or placeholder */}
              {hasChildren ? (
                <ChoiceGrid choices={node.children!} />
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
  // Up to 5 cards: 1 column mobile, 2 columns tablet+. Compact, icon + label only.
  return (
    <ul
      className={`grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 ${
        choices.length === 5 ? "lg:grid-cols-3" : ""
      }`}
    >
      {choices.map((choice) => {
        const Icon = choice.icon;
        return (
          <li key={choice.path}>
            <Link
              to={choice.path}
              className="card-3d-blue group block h-full min-h-[160px] sm:min-h-[180px]"
            >
              <div className="card-3d-blue__inner h-full">
                <div className="card-3d-blue__face h-full">
                  <div className="flex h-full flex-col justify-between px-6 pb-6 pt-7 sm:px-7 sm:pb-7 sm:pt-8">
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 text-gold flex items-center justify-center">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </span>
                      <h3
                        className="font-serif text-lg sm:text-xl font-extrabold text-foreground leading-snug flex-1 group-hover:text-accent transition-colors"
                        style={{ textShadow: "0 1px 4px hsla(220, 30%, 15%, 0.25)" }}
                      >
                        {choice.label}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-gold group-hover:text-[hsl(var(--gold-dark))] transition-colors">
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

export default ChoiceFlowPage;
