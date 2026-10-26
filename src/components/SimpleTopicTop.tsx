/**
 * Top of a simplified topic page (Estate and Plan Ahead paths, Oct 23, 2026): the short
 * answer, "What to do now" with three steps (photo + words), one Next button
 * and "Or talk to someone". Same look as the Aging Parent topic pages
 * (ChoiceFlowPage.tsx); styles are the "apf-" rules in index.css, so the
 * page's <main> must carry className="apf".
 *
 * Class names start "apf-" and must not contain card/cta/btn/tile/section,
 * which index.css restyles sitewide.
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { SimpleTopic } from "@/lib/simple-topics";
import RppArrow from "@/components/RppArrow";

interface Props {
  topic: SimpleTopic;
  next: { to: string; label: string };
  talkHref: string;
}

const SimpleTopicTop = ({ topic, next, talkHref }: Props) => (
  <>
    <div className="apf-answer">
      <p className="apf-answer-label">The short answer</p>
      <p className="apf-answer-text">{topic.short}</p>
    </div>

    <h2 className="apf-h2">What to do now</h2>
    <ol className="apf-steps">
      {topic.steps.map((s) => (
        <li key={s.title} className="apf-step">
          {s.image && <img src={s.image} alt="" width={480} height={480} loading="lazy" decoding="async" />}
          <div>
            <p className="apf-step-title">{s.title}</p>
            <p className="apf-step-text">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>

    <div className="apf-next">
      <Link to={next.to} className="apf-next-link">
        {next.label} <RppArrow />
      </Link>
      {talkHref.startsWith("#") ? (
        <a href={talkHref} className="apf-talk">Or talk to someone</a>
      ) : (
        <Link to={talkHref} className="apf-talk">Or talk to someone</Link>
      )}
    </div>
  </>
);

export default SimpleTopicTop;
