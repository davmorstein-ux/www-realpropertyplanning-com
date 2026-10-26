/**
 * Body of a simplified topic page (Oct 23, 2026), shared by the Estate and
 * Plan Ahead paths: back link, short answer, three steps with photos, one
 * Next button, optional extra block (e.g. team tiles), the people-who-help
 * box, then "More on this" with the page's full original text folded into
 * one <details> per heading. <details> keeps every word in the HTML, so
 * search engines and AI tools still read all of it.
 *
 * Same look as the Helping an Aging Parent topic pages; styles are the
 * "apf-" rules in index.css, so the page's <main> must carry className="apf".
 */
import { ReactNode, Children, isValidElement, type ElementType } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import SimpleTopicTop from "@/components/SimpleTopicTop";
import TopicProfessionals from "@/components/TopicProfessionals";
import { professionalsForTopic } from "@/data/topicProfessionals";
import type { SimpleTopic } from "@/lib/simple-topics";

import BackLink from "@/components/BackLink";
interface Props {
  path: string;
  topics: Record<string, SimpleTopic>;
  /** The path's pages in order, for the Next button. */
  order: { href: string; title: string }[];
  hubPath: string;
  /** e.g. "all estate topics" */
  hubLabel: string;
  afterSteps?: ReactNode;
  /** The layout's own heading and divider components, used to fold the body. */
  headingType: ElementType;
  dividerType: ElementType;
  children: ReactNode;
}

const SimpleTopicBody = ({ path, topics, order, hubPath, hubLabel, afterSteps, headingType, dividerType, children }: Props) => {
  const topic = topics[path];
  const i = order.findIndex((t) => t.href === path);
  const nextTopic = i >= 0 ? order[i + 1] : undefined;
  const next = nextTopic
    ? { to: nextTopic.href, label: `Next: ${topics[nextTopic.href]?.title ?? nextTopic.title}` }
    : { to: hubPath, label: `Back to ${hubLabel}` };
  const hasPros = professionalsForTopic(path).length > 0;

  return (
    <div className="apf-topic">
      <p className="apf-back">
        <BackLink to={hubPath} label={hubLabel} />
      </p>

      <SimpleTopicTop topic={topic} next={next} talkHref={hasPros ? "#people-who-help" : "/featured-professionals"} />

      {afterSteps && <div style={{ marginTop: 36 }}>{afterSteps}</div>}

      <div id="people-who-help" style={{ scrollMarginTop: 96 }}>
        <TopicProfessionals path={path} style={{ margin: "36px 0 0" }} />
      </div>

      <div className="apf-more">
        <h2 className="apf-h2">More on this</h2>
        {foldByHeading(children, headingType, dividerType).map((g, n) => (
          <details key={n} className="apf-fold">
            <summary>
              {g.heading} <ChevronDown size={22} aria-hidden="true" />
            </summary>
            <div className="apf-fold-body">{g.nodes}</div>
          </details>
        ))}
      </div>
    </div>
  );
};

/** Splits a page body into one group per top-level heading; dividers are dropped. */
function foldByHeading(children: ReactNode, headingType: ElementType, dividerType: ElementType) {
  const groups: { heading: ReactNode; nodes: ReactNode[] }[] = [];
  let cur: { heading: ReactNode; nodes: ReactNode[] } = { heading: "Overview", nodes: [] };
  Children.toArray(children).forEach((child) => {
    if (isValidElement(child) && child.type === headingType) {
      if (cur.nodes.length) groups.push(cur);
      cur = { heading: (child.props as { children: ReactNode }).children, nodes: [] };
    } else if (!(isValidElement(child) && child.type === dividerType)) {
      cur.nodes.push(child);
    }
  });
  if (cur.nodes.length) groups.push(cur);
  return groups;
}

export default SimpleTopicBody;
