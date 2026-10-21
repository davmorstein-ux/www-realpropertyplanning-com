/**
 * One line near the top of each homepage-tile hub (Oct 20, 2026, David's go on
 * the visitor-journey review): the two quickest ways to an answer that the
 * hubs did not offer.
 *
 *   - My Real Property Plan: Estate opens it with that situation chosen; Plan
 *     Ahead opens it at the situation choice (its readers may be planning for
 *     a parent or for themselves). Helping an Aging Parent already shows the
 *     full invitation card, so it gets the questions link only.
 *   - The question library for that journey (/questions/<slug>), which until
 *     now was linked only from the footer and the site map.
 *
 * No question counts on purpose: importing the library to count it would add
 * its whole JSON to each hub's bundle for one number.
 *
 * Plain links in a paragraph: index.css restyles classes containing "card",
 * "cta", "btn", "tile" or "section" and forces links to 16px.
 */
import { Link } from "react-router-dom";

type Slug = "plan-ahead" | "aging-parent" | "estate" | "professional";

export default function JourneyShortcuts({
  questions,
  plan,
  lead = "Not sure where to start?",
  style,
}: {
  questions: Slug;
  plan?: "estate" | "parent" | "choose";
  lead?: string;
  style?: React.CSSProperties;
}) {
  const link = { color: "#1B3A6B", fontWeight: 700 } as const;
  return (
    <p
      data-track-block="journey_shortcuts"
      className="journey-shortcuts"
      style={{
        maxWidth: 768,
        margin: "0 auto 2rem",
        textAlign: "center",
        fontSize: 18,
        lineHeight: 1.6,
        color: "#1c1917",
        ...style,
      }}
    >
      {lead}{" "}
      {plan && (
        <>
          <Link to={plan === "choose" ? "/my-plan" : `/my-plan#${plan}:`} style={link}>
            Make a free step-by-step plan
          </Link>
          , or{" "}
        </>
      )}
      <Link to={`/questions/${questions}`} style={link}>
        {plan ? "read short answers to common questions" : "Read short answers to common questions"}
      </Link>
      .
    </p>
  );
}
