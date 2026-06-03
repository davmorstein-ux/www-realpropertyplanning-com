import { useLocation, Link, Navigate } from "react-router-dom";
import HeroBandTitle from "@/components/HeroBandTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { AGING_PARENT_LOOKUP, type FlowNode } from "@/lib/aging-parent-flow";
import agingParentHero from "@/assets/helping-an-aging-parent-hero.webp.asset.json";

const ChoiceFlowPage = ({ lookup = AGING_PARENT_LOOKUP }: { lookup?: typeof AGING_PARENT_LOOKUP }) => {
  const { pathname } = useLocation();
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const entry = lookup.get(normalized);

  if (!entry) {
    return <Navigate to="/helping-an-aging-parent" replace />;
  }

  const { node, parent, trail } = entry;
  const hasChildren = !!node.children?.length;
  const isRoot = parent === null;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={`${node.label} | Real Property Planning`} description={node.subtext || node.label} />
      <BreadcrumbSchema items={trail.slice(1).map((t) => ({ name: t.label, url: t.path }))} />
      <Header />
      <main id="main-content">
        <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
          <div style={{ lineHeight: 0 }}>
            <img
              src={node.heroImage || agingParentHero.url}
              alt={node.heroAlt || "Helping an aging parent — Real Property Planning"}
              className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover block"
              loading="eager"
            />
            <HeroBandTitle as="div">
              {node.heroBandTitle || (isRoot ? "Helping an Aging Parent" : node.label)}
            </HeroBandTitle>
          </div>
        </section>
        <h1 className="sr-only">{node.heroBandTitle || node.label}</h1>
        <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {node.subtext && (
                <p className="text-navy/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-center mb-10">
                  {node.subtext}
                </p>
              )}
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

const ChoiceGrid = ({ choices }: { choices: FlowNode[] }) => (
  <ul className="grid gap-5 sm:gap-6 lg:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
    {choices.map((choice) => {
      const Icon = choice.icon;
      return (
        <li key={choice.path}>
          <Link to={choice.path} className="tile-white group block h-full min-h-[176px] no-underline rounded-xl">
            <div className="tile-white__inner h-full">
              <div className="tile-white__face h-full">
                <div className="flex h-full flex-col justify-between px-7 pb-7 pt-8">
                  <div className="flex items-center gap-5">
                    <span className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </span>
                    <h3 className="font-serif text-lg font-bold text-navy leading-snug flex-1">{choice.label}</h3>
                  </div>
                  <div className="mt-5 text-sm font-semibold text-gold">Learn more →</div>
                </div>
              </div>
            </div>
          </Link>
        </li>
      );
    })}
  </ul>
);

const ComingSoon = () => (
  <div className="bg-white border-2 border-gold/25 rounded-2xl p-8 text-center">
    <p className="text-navy text-lg font-semibold mb-2">Content coming soon.</p>
    <p className="text-navy/70 text-base">We're putting together clear, helpful guidance for this step.</p>
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
      <p className="text-navy/80 text-base leading-relaxed mb-4">{content.closing}</p>
      <a href="/contact" className="inline-block px-6 py-3 bg-navy text-white font-semibold rounded-lg">
        Connect With a Professional
      </a>
    </div>
  </div>
);

export default ChoiceFlowPage;
