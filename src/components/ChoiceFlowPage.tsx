import { Fragment } from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import { Check } from "lucide-react";
import HeroBandTitle from "@/components/HeroBandTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { AGING_PARENT_LOOKUP, type FlowNode } from "@/lib/aging-parent-flow";
import agingParentHero from "@/assets/aging_parent_hero_clean.webp";

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
  const activeStep = trail.length; // 1 = root, 2 = category, 3 = your guidance

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead title={`${node.label} | Real Property Planning`} description={node.subtext || node.label} />
      <BreadcrumbSchema items={trail.slice(1).map((t) => ({ name: t.label, url: t.path }))} />
      <Header />

      <main id="main-content" className="flex-1">
        <section className="pt-8 pb-10 lg:pt-10 lg:pb-16 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto" style={{ paddingTop: "var(--header-height, 100px)" }}>
              {/* Hero image — root page or any node with explicit heroImage */}
              {(isRoot || node.heroImage || node.heroBandTitle) && (
                <>
                  <div
                    style={{
                      width: "100vw",
                      position: "relative",
                      left: "50%",
                      transform: "translateX(-50%)",
                      lineHeight: 0,
                    }}
                  >
                    <img
                      src={node.heroImage || agingParentHero}
                      alt={node.heroAlt || "Helping an aging parent — Real Property Planning"}
                      className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover block"
                      loading="eager"
                      sizes="100vw"
                      decoding="async"
                    />
                    <HeroBandTitle>
                      {node.heroBandTitle || (isRoot ? "Helping an Aging Parent" : node.label)}
                    </HeroBandTitle>
                  </div>
                  <div style={{ marginBottom: "40px" }} />
                </>
              )}

              {/* Heading */}
              <header className="mb-10 text-center">
                {!isRoot && !node.heroImage && !node.heroBandTitle && (
                  <h1 className="font-serif text-3xl md:text-5xl text-navy font-semibold leading-tight mb-4">
                    {node.label}
                  </h1>
                )}
                {(isRoot || node.heroImage || node.heroBandTitle) && (
                  <h1 className="sr-only">{node.heroBandTitle || node.label}</h1>
                )}
                {node.subtext && (
                  <p className="text-navy/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">{node.subtext}</p>
                )}
              </header>

              {/* Choice cards or placeholder */}
              {hasChildren ? (
                <>
                  <RoadmapSteps activeStep={activeStep} trail={trail} />
                  <p className="text-center text-navy/70 text-base mb-8">
                    Pick the option below that best matches your situation to get started.
                  </p>
                  <ChoiceGrid choices={node.children!} />
                </>
              ) : node.content ? (
                <>
                  <RoadmapSteps activeStep={activeStep} trail={trail} />
                  <p className="text-center text-navy/70 text-base mb-8">
                    You've made it — here's the guidance for your situation.
                  </p>
                  <ContentBlock content={node.content} />
                </>
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

const ROADMAP_LABELS = ["Where you are", "What you need", "Your guidance"];
const CURRENT_COLOR = "#1f6fb2";

const RoadmapSteps = ({ activeStep, trail }: { activeStep: number; trail: FlowNode[] }) => (
  <ol className="flex items-start justify-center mb-5 max-w-md mx-auto" aria-label="Your progress through this guide">
    {ROADMAP_LABELS.map((label, i) => {
      const stepNum = i + 1;
      const isDone = stepNum < activeStep;
      const isCurrent = stepNum === activeStep;
      const stepPath = trail[i]?.path;

      const circle = (
        <span
          aria-current={isCurrent ? "step" : undefined}
          className={`w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-xl border-2 transition-colors ${
            isCurrent
              ? "text-white shadow-[0_0_0_4px_rgba(31,111,178,0.25)]"
              : isDone
                ? "bg-navy border-navy text-white"
                : "bg-white border-navy/40 text-navy/40"
          }`}
          style={isCurrent ? { background: CURRENT_COLOR, borderColor: CURRENT_COLOR } : undefined}
        >
          {isDone ? <Check className="w-6 h-6" aria-hidden="true" /> : stepNum}
        </span>
      );

      return (
        <Fragment key={label}>
          <li className="flex flex-col items-center text-center" style={{ width: 100 }}>
            {isDone && stepPath ? (
              <Link
                to={stepPath}
                className="flex flex-col items-center group"
                aria-label={`Back to step ${stepNum}: ${label}`}
              >
                <span className="group-hover:opacity-80 transition-opacity">{circle}</span>
                <span className="mt-2 text-base leading-snug font-medium text-navy underline underline-offset-2">
                  {label}
                </span>
              </Link>
            ) : (
              <>
                {circle}
                <span
                  className={`mt-2 text-base leading-snug ${isCurrent ? "font-bold" : "font-medium text-navy/50"}`}
                  style={isCurrent ? { color: CURRENT_COLOR } : undefined}
                >
                  {label}
                </span>
              </>
            )}
          </li>
          {stepNum < ROADMAP_LABELS.length && (
            <div className={`flex-1 h-0.5 mt-6 ${isDone ? "bg-navy" : "bg-navy/25"}`} aria-hidden="true" />
          )}
        </Fragment>
      );
    })}
  </ol>
);

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
              className="tile-white marquee-hover group block h-full min-h-[280px] sm:min-h-[300px] no-underline rounded-xl"
            >
              <div className="tile-white__inner h-full">
                <div className="tile-white__face h-full">
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
                          sizes="100vw"
                          decoding="async"
                        />
                      ) : (
                        <span
                          style={{ width: 56, height: 56 }}
                          className="shrink-0 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 text-gold flex items-center justify-center"
                        >
                          <Icon className="w-7 h-7" aria-hidden="true" />
                        </span>
                      )}
                      <h3 className="font-serif text-[19px] sm:text-xl font-bold text-navy leading-snug flex-1 no-underline group-hover:text-accent transition-colors">
                        {choice.label}
                      </h3>
                    </div>
                    {choice.children?.length ? (
                      <ul className="mt-4 space-y-1.5" aria-label={`Topics under ${choice.label}`}>
                        {choice.children.slice(0, 4).map((child) => (
                          <li key={child.path} className="text-base text-navy/75 leading-snug">
                            {child.label}
                          </li>
                        ))}
                        {choice.children.length > 4 && (
                          <li className="text-base text-navy/60">+{choice.children.length - 4} more</li>
                        )}
                      </ul>
                    ) : null}

                    <div className="mt-5 flex items-center gap-1.5 text-base font-semibold text-gold group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                      <span>Learn more</span>
                      <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                        →
                      </span>
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
    <p className="text-navy text-lg md:text-xl leading-relaxed mb-2 font-semibold">Content coming soon.</p>
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
      <a
        href="/contact"
        className="inline-block mt-4 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy/90 transition-colors"
      >
        Connect With a Professional
      </a>
    </div>
  </div>
);

export default ChoiceFlowPage;
