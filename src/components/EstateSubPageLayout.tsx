import { ReactNode, Children, isValidElement } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import TopicProfessionals from "@/components/TopicProfessionals";
import EstateReadNext from "@/components/EstateReadNext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import RoadmapDropdown from "@/components/RoadmapDropdown";
import { estateProbateTopics } from "@/lib/estateProbateTopics";
import ProbateStartHere from "@/components/ProbateStartHere";
import SimpleTopicTop from "@/components/SimpleTopicTop";
import { ESTATE_SIMPLE_TOPICS, ESTATE_HUB_PATH } from "@/lib/estate-simple";
import { professionalsForTopic } from "@/data/topicProfessionals";

interface EstateSubPageLayoutProps {
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  breadcrumbName: string;
  bandTitle: string;
  children: ReactNode;
  disclaimer: string;
  /** Simplified pages only: shown right after the steps (e.g. the team tiles). */
  afterSteps?: ReactNode;
}

const EstateSubPageLayout = ({
  seoTitle,
  seoDescription,
  canonicalPath,
  breadcrumbName,
  bandTitle,
  children,
  disclaimer,
  afterSteps,
}: EstateSubPageLayoutProps) => {
  const simple = ESTATE_SIMPLE_TOPICS[canonicalPath];
  if (simple) {
    return (
      <SimpleEstatePage
        seoTitle={seoTitle}
        seoDescription={seoDescription}
        canonicalPath={canonicalPath}
        breadcrumbName={breadcrumbName}
        disclaimer={disclaimer}
        afterSteps={afterSteps}
      >
        {children}
      </SimpleEstatePage>
    );
  }
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={`https://realpropertyplanning.com${canonicalPath}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Managing an Estate, Probate, or Inherited Property", url: "/estate-probate-inherited-property" },
          { name: breadcrumbName, url: canonicalPath },
        ]}
      />
      <Header />
      <main id="main-content">
        <ProbateStartHere />
        {/* The photo that sat here above the title band was removed from all
            six estate topic pages (David, Oct 20, 2026): the sitewide rule is
            one hero image, on the homepage. */}

        {/* `as="h1"` is load-bearing twice over. Without it HeroBandTitle
            defaults to `as="div"`, so all six pages using this layout shipped
            with NO h1 at all — a WCAG 1.3.1 / 2.4.6 failure and a real
            problem for an audience that navigates by screen reader and by
            heading structure. It also drives typography: HeroBandTitle keys
            `textTransform` off `isH1`, so a non-h1 band renders ALL CAPS.
            That is why these six read as shouty while their hub renders in
            Title Case. One attribute fixes both. */}
        <HeroBandTitle as="h1">{bandTitle}</HeroBandTitle>

        <section className="py-14 md:py-20 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto mb-10 md:mb-14">
              <RoadmapDropdown
                topics={estateProbateTopics}
                accentColor="#1B3A6B"
                currentPath={canonicalPath}
                mode="list"
              />
            </div>
            <article className="max-w-3xl mx-auto text-foreground" style={{ fontSize: "18px", lineHeight: 1.75 }}>
              {children}
              <TopicProfessionals path={canonicalPath} style={{ marginTop: 40 }} />
              <EstateReadNext path={canonicalPath} style={{ marginTop: 32 }} />
            </article>
          </div>
        </section>

        {/* Removed: a "Have Questions? We're Here to Help." band carrying the
            office phone, the info@ address and a "Get in Touch" button.

            This is the same block, and the same reasoning, as the CTA deleted
            from the hub page at /estate-probate-inherited-property. Two
            problems. "We're here to help" attributes help to Real Property
            Planning, which is a neutral educational hub that provides no
            services — the misattribution corrected in ForAttorneysHowItWorks
            and across the attorney pages. And it was an unbounded promise of
            individual guidance to every visitor on pages about probate and
            inherited property, where readers arrive in distress and at all
            hours.

            Deliberately not replaced with a softer version. The hub made that
            call and the six pages beneath it were still contradicting it. The
            footer and /contact remain available to anyone who wants them.

            If a property-specific CTA is ever wanted on an individual page,
            use <MidPageCTA /> in the page body rather than reinstating a
            blanket band here — its copy is already scoped to the real estate
            side and attributed to the featured broker personally. */}

        <section className="py-8 bg-cream">
          <div className="container px-5 md:px-8">
            <p className="max-w-3xl mx-auto text-center text-muted-foreground text-sm italic leading-relaxed">
              {disclaimer}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

/**
 * Simplified layout (Oct 23, 2026, same pattern as Helping an Aging Parent):
 * plain title, short answer, three steps with photos, one Next button, the
 * people-who-help box, then "More on this" with the page's full original text
 * folded into one <details> per heading. <details> keeps every word in the
 * HTML, so search engines and AI tools still read all of it. Wording and
 * images: src/lib/estate-simple.ts. Styles: the "apf-" rules in index.css.
 */
const SimpleEstatePage = ({
  seoTitle,
  seoDescription,
  canonicalPath,
  breadcrumbName,
  disclaimer,
  afterSteps,
  children,
}: Omit<EstateSubPageLayoutProps, "bandTitle">) => {
  const topic = ESTATE_SIMPLE_TOPICS[canonicalPath];
  const i = estateProbateTopics.findIndex((t) => t.href === canonicalPath);
  const nextTopic = i >= 0 ? estateProbateTopics[i + 1] : undefined;
  const next = nextTopic
    ? { to: nextTopic.href, label: `Next: ${ESTATE_SIMPLE_TOPICS[nextTopic.href]?.title ?? nextTopic.title}` }
    : { to: ESTATE_HUB_PATH, label: "Back to all estate topics" };
  const hasPros = professionalsForTopic(canonicalPath).length > 0;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={`https://realpropertyplanning.com${canonicalPath}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Managing an Estate, Probate, or Inherited Property", url: ESTATE_HUB_PATH },
          { name: breadcrumbName, url: canonicalPath },
        ]}
      />
      <Header />
      <main id="main-content" className="apf">
        <ProbateStartHere />
        <HeroBandTitle as="h1">{topic.title}</HeroBandTitle>

        <section className="py-8 md:py-12 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="apf-topic">
              <p className="apf-back">
                <Link to={ESTATE_HUB_PATH}>← Back to all estate topics</Link>
              </p>

              <SimpleTopicTop topic={topic} next={next} talkHref={hasPros ? "#people-who-help" : "/featured-professionals"} />

              {afterSteps && <div style={{ marginTop: 36 }}>{afterSteps}</div>}

              <div id="people-who-help" style={{ scrollMarginTop: 96 }}>
                <TopicProfessionals path={canonicalPath} style={{ margin: "36px 0 0" }} />
              </div>

              <div className="apf-more">
                <h2 className="apf-h2">More on this</h2>
                {foldByHeading(children).map((g, n) => (
                  <details key={n} className="apf-fold">
                    <summary>
                      {g.heading} <ChevronDown size={22} aria-hidden="true" />
                    </summary>
                    <div className="apf-fold-body">{g.nodes}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-cream">
          <div className="container px-5 md:px-8">
            <p className="max-w-3xl mx-auto text-center text-muted-foreground text-sm italic leading-relaxed">
              {disclaimer}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

/** Splits a page body into one group per <SubH2>; dividers are dropped. */
function foldByHeading(children: ReactNode) {
  const groups: { heading: ReactNode; nodes: ReactNode[] }[] = [];
  let cur: { heading: ReactNode; nodes: ReactNode[] } = { heading: "Overview", nodes: [] };
  Children.toArray(children).forEach((child) => {
    if (isValidElement(child) && child.type === SubH2) {
      if (cur.nodes.length) groups.push(cur);
      cur = { heading: (child.props as { children: ReactNode }).children, nodes: [] };
    } else if (!(isValidElement(child) && child.type === Divider)) {
      cur.nodes.push(child);
    }
  });
  if (cur.nodes.length) groups.push(cur);
  return groups;
}

export default EstateSubPageLayout;

export const SubH2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-serif text-[26px] md:text-[32px] font-semibold text-navy leading-tight mt-10 mb-4 first:mt-0">
    {children}
  </h2>
);

export const SubH3 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-serif text-[20px] md:text-[23px] font-semibold text-navy leading-snug mt-7 mb-3">{children}</h3>
);

export const P = ({ children }: { children: ReactNode }) => <p className="mb-5">{children}</p>;

export const UL = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
);

export const Divider = () => <hr className="my-10 border-border/60" />;
