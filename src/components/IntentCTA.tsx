import { Link } from "react-router-dom";
import { FEATURED_BROKER, FEATURED_APPRAISER, SAME_PERSON } from "@/data/featuredProfessionals";

/**
 * A context-specific call to action for the site's main landing pages
 * (Sept 2026 audit: "many pages are excellent informational destinations but
 * provide weak or late next steps"). Each page names the visitor's situation
 * in the heading and button, and the link carries that situation into the
 * contact form through ?reason=, so the message arrives already sorted.
 *
 * Voice: the hub connects; the licensed work belongs to the featured broker
 * or appraiser, named once in the attribution line. Never "Talk With David".
 */
export type CTAReason =
  | "estate-property"
  | "aging-parent"
  | "sell-or-value"
  | "afh-buy-sell"
  | "find-professional"
  | "join-network"
  | "other";

interface IntentCTAProps {
  heading: string;
  body: string;
  buttonText: string;
  reason: CTAReason;
  /** Which licensed person the attribution line names. Default: the broker. */
  professional?: "broker" | "appraiser" | "none";
  variant?: "light" | "dark";
}

const IntentCTA = ({ heading, body, buttonText, reason, professional = "broker", variant = "light" }: IntentCTAProps) => {
  const dark = variant === "dark";
  const attribution =
    professional === "none"
      ? null
      : professional === "appraiser"
        ? `Appraisal questions go to ${FEATURED_APPRAISER.name}, the featured appraiser (${FEATURED_APPRAISER.firm}), independently of Real Property Planning.`
        : SAME_PERSON
          ? `Property questions go to ${FEATURED_BROKER.name}, the featured broker and appraiser (${FEATURED_BROKER.brokerage}), independently of Real Property Planning.`
          : `Property questions go to ${FEATURED_BROKER.name}, the featured broker (${FEATURED_BROKER.brokerage}), independently of Real Property Planning.`;
  return (
    <section
      aria-label={heading}
      style={{
        background: dark ? "#1B3A6B" : "#faf8f4",
        borderTop: dark ? "none" : "1px solid #e6e0d6",
        padding: "2.5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        <h2
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "clamp(22px, 2.4vw, 30px)",
            fontWeight: 700,
            color: dark ? "#fff" : "#272421",
            margin: "0 0 0.6rem",
            lineHeight: 1.2,
          }}
        >
          {heading}
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.5, color: dark ? "rgba(255,255,255,0.9)" : "#3a3531", margin: "0 auto 1.25rem", maxWidth: 640 }}>{body}</p>
        <Link
          to={`/contact?reason=${reason}`}
          className="bg-transparent"
          style={{
            display: "inline-block",
            padding: "14px 30px",
            borderRadius: 999,
            background: dark ? "#fff" : "#1B3A6B",
            color: dark ? "#1B3A6B" : "#fff",
            fontWeight: 700,
            fontSize: 17,
            textDecoration: "none",
            boxShadow: "0 2px 10px rgba(27, 58, 107, 0.25)",
          }}
        >
          {buttonText}
        </Link>
        {attribution && (
          <p style={{ fontSize: 13, lineHeight: 1.5, color: dark ? "rgba(255,255,255,0.75)" : "#5a534b", margin: "1rem auto 0", maxWidth: 560 }}>{attribution}</p>
        )}
      </div>
    </section>
  );
};

export default IntentCTA;
