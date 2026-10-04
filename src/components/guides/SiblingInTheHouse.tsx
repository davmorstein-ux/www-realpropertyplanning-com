/**
 * "When a sibling lives in the house and won't leave" for
 * /guides/heirs-disagree-selling-house (Question Map step 6, Oct 4, 2026; the
 * Bellevue scenario). Sources checked Oct 4, 2026 against the statute text:
 * RCW 11.48.020 (a qualified personal representative's right to immediate
 * possession of the estate's real estate, and to collect its rents) and
 * RCW 11.48.090 (actions for possession by and against personal
 * representatives). Remedies beyond those are framed as questions for the
 * estate's attorney, not as rules.
 */
import { Link } from "react-router-dom";

const rcw = (cite: string) => `https://app.leg.wa.gov/RCW/default.aspx?cite=${cite}`;

const CSS = `
.sib-sec { padding: 3.75rem 0; background: #faf8f4; }
.sib-in { max-width: 860px; margin: 0 auto; padding: 0 1.5rem; }
.sib-h2.sib-h2 { font-family: 'DM Sans', system-ui, sans-serif; font-size: clamp(28px, 3vw, 38px) !important; font-weight: 700; color: #1c1917 !important; margin: 0 0 0.9rem !important; line-height: 1.2; }
.sib-in p { font-size: 18px; line-height: 1.65; color: #1f2933; margin: 0 0 1rem; }
.sib-steps { list-style: none; counter-reset: s; margin: 1.25rem 0; padding: 0; display: grid; gap: 0.85rem; }
.sib-steps li { counter-increment: s; position: relative; background: #fff; border: 1px solid #e3d9cc; border-radius: 10px; padding: 1rem 1.25rem 1rem 3.4rem; font-size: 17px; line-height: 1.6; color: #1f2933; }
.sib-steps li::before { content: counter(s); position: absolute; left: 1rem; top: 1rem; width: 1.7rem; height: 1.7rem; border-radius: 999px; background: #1f4058; color: #fff; font-weight: 700; font-size: 15px; display: flex; align-items: center; justify-content: center; }
.sib-note { background: #fff; border-left: 5px solid #8a4214; border-radius: 8px; padding: 1rem 1.25rem; }
.sib-src.sib-src { font-size: 14px !important; color: #3d4a55 !important; }
.sib-sec a { color: #9e1f2b; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
`;

const SiblingInTheHouse = () => (
  <section className="sib-sec" aria-labelledby="sibling-in-the-house">
    <style dangerouslySetInnerHTML={{ __html: CSS }} />
    <div className="sib-in">
      <h2 id="sibling-in-the-house" className="sib-h2">When a sibling lives in the house and won't leave</h2>
      <p>
        While the estate is in probate, the house is controlled by the personal representative, not by the heir who
        lives there. Once appointed and qualified, a personal representative has a right to immediate possession of
        the estate's real estate and may collect rent from it. Check the will first, though: if it gives your sibling
        the right to live there, that changes the picture.
      </p>
      <ol className="sib-steps">
        <li>
          <strong>Talk first, then put it in writing.</strong> Explain the plan to sell, the timeline, and a reasonable
          move-out date. A calm letter often settles what a heated conversation doesn't.
        </li>
        <li>
          <strong>If they will stay for a while, agree on terms.</strong> A short written agreement on rent, or on
          paying the taxes, insurance and utilities while they live there, protects the estate and the other heirs.
        </li>
        <li>
          <strong>Keep a record.</strong> Note when the sibling lived there and what they did or didn't pay. Ask the
          estate's attorney whether unpaid rent can be taken into account when the estate is divided.
        </li>
        <li>
          <strong>Court is the last resort.</strong> A personal representative can bring an action for possession of
          estate property. The estate's attorney will choose the right procedure; a lawsuit costs the estate time
          and money, which is why it comes last.
        </li>
      </ol>
      <p className="sib-note">
        <strong>No probate, or the house already distributed?</strong> Then the heirs own it together, each with an
        equal right to use it, and generally none can put the others out. The paths are agreement, a buyout, or a
        partition action (see the quick answers above).
      </p>
      <p className="sib-src">
        Sources: <a href={rcw("11.48.020")} target="_blank" rel="noopener noreferrer">RCW 11.48.020</a> (right to
        possession and rents); <a href={rcw("11.48.090")} target="_blank" rel="noopener noreferrer">RCW 11.48.090</a>{" "}
        (actions for possession). More on authority:{" "}
        <Link to="/guides/who-has-authority-sell-probate-property-washington">who can sell estate property</Link>.
      </p>
    </div>
  </section>
);

export default SiblingInTheHouse;
