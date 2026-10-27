import { ReactNode } from "react";
import TopicProfessionals from "@/components/TopicProfessionals";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import RoadmapDropdown from "@/components/RoadmapDropdown";
import { planningBeforeACrisisTopics } from "@/lib/planningBeforeACrisisTopics";
import { FEATURED_BROKER, brokerCredentialSentence } from "@/data/featuredProfessionals";
import SimpleTopicBody from "@/components/SimpleTopicBody";
import { PLAN_SIMPLE_TOPICS, PLAN_HUB_PATH } from "@/lib/plan-ahead-simple";

import RppArrow from "@/components/RppArrow";
interface PlanningSubPageLayoutProps {
  /** Browser tab + meta title */
  seoTitle: string;
  /** Meta description */
  seoDescription: string;
  /** URL path (no domain), e.g. /planning-before-a-crisis/why-planning-early */
  canonicalPath: string;
  /** Breadcrumb name for this leaf page */
  breadcrumbName: string;
  /** Blue band title. Rendered as the page h1 in Title Case — NOT all caps.
   *  The old "ALL CAPS" note here described a bug, not a decision: the band
   *  only uppercased because it was not being rendered as an h1. */
  bandTitle: string;
  /** Body sections */
  children: ReactNode;
  /** Italic disclaimer line at the bottom of the content (above sitewide footer) */
  disclaimer: string;
}

const PlanningSubPageLayout = ({
  seoTitle,
  seoDescription,
  canonicalPath,
  breadcrumbName,
  bandTitle,
  children,
  disclaimer,
}: PlanningSubPageLayoutProps) => {
  if (PLAN_SIMPLE_TOPICS[canonicalPath]) {
    return (
      <SimplePlanPage
        seoTitle={seoTitle}
        seoDescription={seoDescription}
        canonicalPath={canonicalPath}
        breadcrumbName={breadcrumbName}
        disclaimer={disclaimer}
      >
        {children}
      </SimplePlanPage>
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
          { name: "Planning Before a Crisis", url: "/planning-before-a-crisis" },
          { name: breadcrumbName, url: canonicalPath },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* BLUE BAND — `as="h1"` is load-bearing twice over. Without it
            HeroBandTitle defaults to `as="div"`, so all twelve pages using
            this layout shipped with NO h1 at all — a WCAG 1.3.1 / 2.4.6
            failure. It also drives typography: HeroBandTitle keys
            `textTransform` off `isH1`, so a non-h1 band renders ALL CAPS.
            One attribute fixes both. */}
        <HeroBandTitle as="h1">{bandTitle}</HeroBandTitle>

        {/* BODY */}
        <section className="py-14 md:py-20 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto mb-10 md:mb-14">
              <RoadmapDropdown
                topics={planningBeforeACrisisTopics}
                accentColor="#1B3A6B"
                currentPath={canonicalPath}
                mode="list"
              />
            </div>
            <article className="max-w-3xl mx-auto text-foreground" style={{ fontSize: "18px", lineHeight: 1.75 }}>
              {children}
              <TopicProfessionals path={canonicalPath} style={{ marginTop: 40 }} />
            </article>
          </div>
        </section>

        <PropertySideBand />

        {/* DISCLAIMER — small muted italic */}
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

/** "Questions About the Property Side?" band, shown on every page in this
 *  family, simplified or not. */
const PropertySideBand = () => (
  <>
    {/* CTA — rescoped, not deleted.

        The previous copy was "Have Questions? We're Here to Help." with
        the phone, the info@ address and a "Get in Touch" button. That
        same band was removed outright from EstateSubPageLayout and
        ExecutorSubPageLayout, because the hubs above those two had
        already deleted their CTAs on the grounds that readers arrive
        bereaved, in distress, and at all hours.

        This family is different and is treated differently on purpose.
        "Planning Before a Crisis" is read by people who are planning
        ahead — nobody has died, nothing is urgent, and a visitor who
        reaches the bottom of one of these pages is exactly the person
        for whom a property conversation is useful rather than intrusive.
        So the affordance stays; only the misattribution goes.

        The "we" is what had to change. Real Property Planning is a
        neutral educational hub and provides no services, so it cannot
        offer help. The featured broker can, in his own name and inside his own
        licenses (src/data/featuredProfessionals.ts). Copy below follows the MidPageCTA standard: scoped to
        the property side, attributed personally, with everything else
        pointed back at the licensed professionals in the directory.
        Keep any future copy inside that line. */}
    <section className="py-14 md:py-20 bg-secondary">
      <div className="container px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-navy leading-tight mb-6">
            Questions About the Property Side?
          </h2>
          <p className="text-foreground text-[18px] md:text-[19px] leading-relaxed mb-6">
            {brokerCredentialSentence} If your planning involves a home — what it is worth, what condition it
            is in, or what a sale would actually involve — those are questions he can answer directly.
          </p>
          <p className="text-foreground text-[18px] md:text-[19px] leading-relaxed mb-8">
            <strong>Call:</strong>{" "}
            <a href={`tel:${FEATURED_BROKER.phoneTel}`} className="text-navy underline hover:no-underline">
              {FEATURED_BROKER.phone}
            </a>
            <span className="mx-3 text-muted-foreground">·</span>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@realpropertyplanning.com"
              className="text-navy underline hover:no-underline break-words"
            >
              info@realpropertyplanning.com
            </a>
          </p>
          <Link to="/contact" className="gold-cta inline-flex items-center" style={{ fontSize: "15px" }}>
            Get in Touch
            <RppArrow />
          </Link>
          <p className="text-muted-foreground text-[16px] leading-[1.6] mt-6 max-w-2xl mx-auto">
            For legal, tax, and care questions, the attorneys, fiduciaries, and care professionals listed
            throughout this site are the right place to start.
          </p>
        </div>
      </div>
    </section>
  </>
);

/**
 * Simplified layout (Oct 23, 2026, Plan Ahead pages only; the executor pages
 * that share this layout are unchanged): plain title, short answer, three
 * steps with photos, one Next button, the people-who-help box, then "More on
 * this" with the page's full original text folded under its headings.
 * Wording and images: src/lib/plan-ahead-simple.ts.
 */
const SimplePlanPage = ({
  seoTitle,
  seoDescription,
  canonicalPath,
  breadcrumbName,
  disclaimer,
  children,
}: Omit<PlanningSubPageLayoutProps, "bandTitle">) => (
  <div className="min-h-screen bg-background">
    <SEOHead title={seoTitle} description={seoDescription} canonical={`https://realpropertyplanning.com${canonicalPath}`} />
    <BreadcrumbSchema
      items={[
        { name: "Planning Before a Crisis", url: PLAN_HUB_PATH },
        { name: breadcrumbName, url: canonicalPath },
      ]}
    />
    <Header />
    <main id="main-content" className="apf">
      <HeroBandTitle as="h1">{PLAN_SIMPLE_TOPICS[canonicalPath].title}</HeroBandTitle>

      <section className="py-8 md:py-12 bg-cream">
        <div className="container px-5 md:px-8">
          <SimpleTopicBody
            path={canonicalPath}
            topics={PLAN_SIMPLE_TOPICS}
            order={planningBeforeACrisisTopics}
            hubPath={PLAN_HUB_PATH}
            hubLabel="all planning topics"
            headingType={SubH2}
            dividerType={Divider}
          >
            {children}
          </SimpleTopicBody>
        </div>
      </section>

      <PropertySideBand />

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

export default PlanningSubPageLayout;

/**
 * Small content helpers so each page reads cleanly.
 */
export const SubH2 = ({ children, id }: { children: ReactNode; id?: string }) => (
  <h2 id={id} className="font-serif text-[26px] md:text-[32px] font-semibold text-navy leading-tight mt-10 mb-4 first:mt-0">
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
