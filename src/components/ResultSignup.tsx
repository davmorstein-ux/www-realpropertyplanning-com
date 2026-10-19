/**
 * Newsletter invitation shown right after a calculator result (Oct 18, 2026,
 * from the October audit: people are most willing to sign up just after they
 * get something useful). Each version offers something concrete now, not just
 * "occasional updates":
 *   care     — the free 7-step family home checklist (PDF), the same one the
 *              /family-home-planning ad page offers; the house usually pays for care
 *   remodel  — My Real Property Plan for heirs, and the family newsletter
 *
 * Source tags are deliberately generic ("care-cost", not "care-cost:memory-care"):
 * a care-type tag in MailerLite would hint at a family member's health.
 */
import { Link } from "react-router-dom";
import NewsletterSignup from "@/components/NewsletterSignup";
import { CHECKLIST_PDF } from "@/data/myPlan";

type Kind = "care" | "remodel";

const COPY: Record<Kind, { heading: string; body: string; cta: string }> = {
  care: {
    heading: "Free: the family home planning checklist",
    body: "For most families the house pays for care. Get the 7-step checklist for Washington families: who can sign, how the home is owned, and when to sell. You'll also get the occasional Real Property Planning newsletter. Unsubscribe any time.",
    cta: "Send me the checklist",
  },
  remodel: {
    heading: "Keep your numbers in view",
    body: "Home values move with every quarter's sales. Join the free Real Property Planning newsletter for plain-English notes on Washington home values, what buyers pay for, and estates. No ads. Unsubscribe any time.",
    cta: "Join the newsletter",
  },
};

export default function ResultSignup({ kind, style }: { kind: Kind; style?: React.CSSProperties }) {
  return (
    <div style={{ margin: "28px 0 0", ...style }}>
      <NewsletterSignup
        list="family"
        source={kind === "care" ? "care-cost" : "remodel-result"}
        copy={COPY[kind]}
        doneMessage={
          kind === "care" ? (
            <>
              <p style={{ margin: "0 0 14px", fontSize: 19, fontWeight: 700 }}>Your checklist is ready.</p>
              <p style={{ margin: "0 0 14px" }}>
                <a href={CHECKLIST_PDF} target="_blank" rel="noopener" style={{ fontSize: 19, fontWeight: 700, color: "#1B3A6B", textDecoration: "underline" }}>
                  Download the 7-step checklist (PDF)
                </a>
              </p>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55 }}>
                <strong>One more step for the newsletter:</strong> we've emailed you a link to confirm your address. Nothing else is sent until you click it.
              </p>
            </>
          ) : undefined
        }
      />
      {kind === "remodel" && (
        <p style={{ margin: "12px 0 0", fontSize: 17, lineHeight: 1.55, fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif" }}>
          Deciding about an inherited house?{" "}
          <Link to="/my-plan" style={{ color: "#1B3A6B", fontWeight: 700, textDecoration: "underline" }}>
            Make your free Real Property Plan
          </Link>
          : a step-by-step checklist for your situation.
        </p>
      )}
    </div>
  );
}
