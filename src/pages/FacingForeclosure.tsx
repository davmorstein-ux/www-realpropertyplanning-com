/**
 * Facing Foreclosure: hub and four topic pages, one component (Nov 6, 2026).
 * Content and sources live in src/lib/facing-foreclosure.ts; edit them there.
 * Layout matches the simplified paths: hub = picture buttons (text only until
 * the owner supplies images), topic = short answer, three steps, people who
 * help (selling page only), then "More on this" folds.
 */
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import DisclaimerSection from "@/components/DisclaimerSection";
import SimpleTopicTop from "@/components/SimpleTopicTop";
import TopicProfessionals from "@/components/TopicProfessionals";
import { professionalsForTopic } from "@/data/topicProfessionals";
import BackLink from "@/components/BackLink";
import RppArrow from "@/components/RppArrow";
import { FF_HUB, FF_TOPICS, FF_BY_PATH } from "@/lib/facing-foreclosure";
import { FQ_PAGES, FQ_BY_PATH, fqPath } from "@/lib/foreclosure-questions";
import PageFAQ from "@/components/PageFAQ";

const SITE = "https://realpropertyplanning.com";
const HUB_TITLE = "Facing Foreclosure";
const HUB_DESCRIPTION =
  "Free help for older homeowners in Washington State (WA) who are behind on the mortgage: the foreclosure deadlines, ways to keep the home, selling before the sale, and avoiding foreclosure scams.";

const Hub = () => (
  <>
    <p className="apf-ask">
      Behind on the mortgage, or worried you soon will be? Start with the free help: the earlier you act, the more choices stay open.
    </p>
    <ul className="apf-grid apf-grid-4">
      {FF_TOPICS.map((t) => (
        <li key={t.path}>
          <Link to={t.path} className="apf-pick">
            <span className="apf-pick-label">
              <span>{t.label}</span>
              <span className="apf-arrow" aria-hidden="true"><RppArrow size="100%" /></span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
    <p className="apf-fold-text" style={{ marginTop: 28, textAlign: "center" }}>
      Free housing counselor hotline: <a href="tel:+18778944663" style={{ fontWeight: 700, color: "#1B3A6B", whiteSpace: "nowrap" }}>1-877-894-HOME (4663)</a>
    </p>
    <h2 className="apf-h2" style={{ marginTop: 40 }}>Common questions</h2>
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
      {FQ_PAGES.map((q) => (
        <li key={q.slug}>
          <Link to={fqPath(q.slug)} className="rpp-heading-link" style={{ fontSize: 19, fontWeight: 700, color: "#1B3A6B" }}>
            {q.question}
          </Link>
        </li>
      ))}
    </ul>
  </>
);

/** A narrow question page: the question, the short answer, a few sections, an FAQ, links on. */
const Question = ({ path }: { path: string }) => {
  const q = FQ_BY_PATH[path];
  const hasPros = professionalsForTopic(path).length > 0;
  const titleFor = (to: string) => FF_BY_PATH[to]?.title || (to === "/retirement-reverse-mortgage" ? "Reverse Mortgages in Retirement" : to);
  return (
    <>
      <p className="apf-back">
        <BackLink to={FF_HUB} label="Facing Foreclosure" />
      </p>
      <div className="apf-topic">
        <div className="apf-answer">
          <p className="apf-answer-label">The short answer</p>
          <p className="apf-answer-text">{q.short}</p>
        </div>
        {q.sections.map((sec) => (
          <div key={sec.heading}>
            <h2 className="apf-h2">{sec.heading}</h2>
            {sec.paras.map((p) => (
              <p key={p.slice(0, 40)} className="apf-fold-text" style={{ padding: "0 0 12px" }}>{p}</p>
            ))}
          </div>
        ))}
        {hasPros && (
          <div id="people-who-help" style={{ scrollMarginTop: 96 }}>
            <TopicProfessionals path={path} style={{ margin: "28px 0 0" }} />
          </div>
        )}
        <h2 className="apf-h2" style={{ marginTop: 32 }}>Read next</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
          {q.related.map((to) => (
            <li key={to}>
              <Link to={to} className="rpp-heading-link" style={{ fontSize: 19, fontWeight: 700, color: "#1B3A6B" }}>
                {titleFor(to)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: 40 }}>
        <PageFAQ faqs={q.faq} id={q.slug} heading="Quick answers" />
      </div>
    </>
  );
};

const Topic = ({ path }: { path: string }) => {
  const t = FF_BY_PATH[path];
  const i = FF_TOPICS.indexOf(t);
  const next = FF_TOPICS[i + 1];
  const hasPros = professionalsForTopic(path).length > 0;
  return (
    <>
      <p className="apf-back">
        <BackLink to={FF_HUB} label="Facing Foreclosure" />
      </p>
      <div className="apf-topic">
        <SimpleTopicTop
          topic={{ title: t.title, short: t.short, steps: t.steps }}
          next={next ? { to: next.path, label: `Next: ${next.label}` } : { to: FF_HUB, label: "Back to Facing Foreclosure" }}
          talkHref={hasPros ? "#people-who-help" : "tel:+18778944663"}
        />
        {hasPros && (
          <div id="people-who-help" style={{ scrollMarginTop: 96 }}>
            <TopicProfessionals path={path} style={{ margin: "36px 0 0" }} />
          </div>
        )}
        <div className="apf-more">
          <h2 className="apf-h2">More on this</h2>
          {t.folds.map((f) => (
            <details key={f.heading} className="apf-fold">
              <summary>
                {f.heading} <ChevronDown size={22} aria-hidden="true" />
              </summary>
              <div className="apf-fold-body">
                {f.paras.map((p) => (
                  <p key={p.slice(0, 40)} className="apf-fold-text">{p}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </>
  );
};

const FacingForeclosure = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "") || FF_HUB;
  const topic = FF_BY_PATH[path];
  const question = FQ_BY_PATH[path];
  const title = topic ? topic.title : question ? question.question : HUB_TITLE;
  const url = `${SITE}${topic ? topic.path : question ? path : FF_HUB}`;
  const crumbs = [
    { name: "Home", url: `${SITE}/` },
    { name: HUB_TITLE, url: `${SITE}${FF_HUB}` },
    ...(topic || question ? [{ name: title, url }] : []),
  ];
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={
          question
            ? `${question.title} | Real Property Planning`
            : `${topic ? `${topic.title}: Facing Foreclosure` : "Facing Foreclosure: Help for Older Homeowners Behind on the Mortgage"} in Washington State (WA) | Real Property Planning`
        }
        description={question ? question.description : topic ? topic.description : HUB_DESCRIPTION}
        canonical={url}
      />
      <BreadcrumbSchema items={crumbs} />
      <Header />
      <main id="main-content" className="apf">
        <HeroBandTitle as="h1">{title}</HeroBandTitle>
        <section className="py-8 md:py-12 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-4xl mx-auto">{topic ? <Topic path={path} /> : question ? <Question path={path} /> : <Hub />}</div>
          </div>
        </section>
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default FacingForeclosure;
