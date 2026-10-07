/**
 * Sections for /trustees (Question Map step 6, Oct 4, 2026): what a trustee
 * does with a house the trust owns, whether beneficiaries must approve a sale,
 * co-trustees who disagree, and a beneficiary living in the house.
 *
 * Checked Oct 4, 2026 against the statute text of chapter 11.98 RCW:
 *   - 11.98.070  trustee's power to sell, lease, convey and manage trust
 *                property "in accordance with the standards provided by law"
 *   - 11.98.072  keep qualified beneficiaries reasonably informed; respond
 *                promptly to requests; 60-day notice after accepting the
 *                trusteeship (trusts created or irrevocable after 2011),
 *                unless the trust document waives or modifies it
 *   - 11.98.075  certification of trust; a person relying on it in good faith
 *                is protected
 *   - 11.98.078  duty of loyalty and impartiality; a sale to the trustee, or
 *                one affected by a conflict (spouse, descendants, siblings,
 *                parents and their spouses, the trustee's agent or attorney),
 *                is voidable unless the trust authorizes it, a court or a
 *                binding agreement under RCW 11.96A.210-.250 approves it, or
 *                the beneficiary consents (RCW 11.98.108)
 *   - 11.98.016  three or more trustees act by majority; written dissent;
 *                15-day written notice; delegation between co-trustees
 *   - 11.98.039(4) a beneficiary, the trustor or a trustee may petition to
 *                change a trustee for reasonable cause (chapter 11.96A RCW)
 * Points the statutes leave to the trust document or a lawyer are framed that
 * way, not as rules.
 */
import { Link } from "react-router-dom";

const rcw = (cite: string) => `https://app.leg.wa.gov/RCW/default.aspx?cite=${cite}`;
const R = ({ cite }: { cite: string }) => (
  <a href={rcw(cite)} target="_blank" rel="noopener noreferrer">
    RCW {cite}
  </a>
);

const CSS = `
.tg-sec { padding: 3.5rem 0; }
.tg-sec.alt { background: #faf8f4; }
.tg-in { max-width: 860px; margin: 0 auto; padding: 0 1.5rem; }
.tg-h2.tg-h2 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; font-size: clamp(28px, 3vw, 38px) !important; font-weight: 700; color: #1c1917 !important; margin: 0 0 0.9rem !important; line-height: 1.2; }
.tg-in p { font-size: 18px; line-height: 1.65; color: #1f2933; margin: 0 0 1rem; }
.tg-steps { list-style: none; counter-reset: s; margin: 1.25rem 0; padding: 0; display: grid; gap: 0.85rem; }
.tg-steps li { counter-increment: s; position: relative; background: #fff; border: 1px solid #e3d9cc; border-radius: 10px; padding: 1rem 1.25rem 1rem 3.4rem; font-size: 17px; line-height: 1.6; color: #1f2933; }
.tg-steps li::before { content: counter(s); position: absolute; left: 1rem; top: 1rem; width: 1.7rem; height: 1.7rem; border-radius: 999px; background: #1f4058; color: #fff; font-weight: 700; font-size: 15px; display: flex; align-items: center; justify-content: center; }
.tg-tiles { list-style: none; margin: 1.25rem 0; padding: 0; display: grid; gap: 0.75rem; }
.tg-tiles li { background: #fff; border: 1px solid #e3d9cc; border-left: 4px solid #8a4214; border-radius: 8px; padding: 0.9rem 1.15rem; font-size: 17px; line-height: 1.6; color: #1f2933; }
.tg-note { background: #fff; border-left: 5px solid #1f4058; border-radius: 8px; padding: 1rem 1.25rem; }
.tg-src.tg-src { font-size: 14px !important; color: #3d4a55 !important; margin-top: 0.5rem !important; }
.tg-sec a { color: #9e1f2b; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
`;

const TrusteeHouseGuide = () => (
  <>
    <style dangerouslySetInnerHTML={{ __html: CSS }} />

    <section className="tg-sec" aria-labelledby="trustee-first-steps">
      <div className="tg-in">
        <h2 id="trustee-first-steps" className="tg-h2">When the trust owns the house: a trustee's first steps</h2>
        <p>
          When a parent's living trust holds the house, the successor trustee can usually manage and sell it without
          probate or a court order. The trustee's powers come from the trust document and Washington law, and they
          come with duties: to follow the trust's terms, to act only in the beneficiaries' interests, and to treat
          them evenhandedly.
        </p>
        <ol className="tg-steps">
          <li>
            <strong>Confirm your authority.</strong> Read the trust and any amendments, and have the trust's attorney
            prepare a certification of trust. Title companies and banks can rely on it without seeing the whole
            trust, which keeps family details private.
          </li>
          <li>
            <strong>Secure and insure the house.</strong> Change the locks if others have keys, tell the insurer the
            owner has died (a vacant house may need different coverage), and keep paying the mortgage, taxes and
            utilities from trust funds.
          </li>
          <li>
            <strong>Tell the beneficiaries.</strong> For most trusts, the trustee must notify the qualified
            beneficiaries within 60 days of accepting the trusteeship, unless the trust document waives or changes
            that, and must keep them reasonably informed from then on, answering their questions promptly.
          </li>
          <li>
            <strong>Get the value on paper.</strong> A date-of-death appraisal sets the new tax basis and documents
            what the house was worth, which matters whether it is sold, kept or given to one beneficiary.
          </li>
          <li>
            <strong>Follow the trust's instructions.</strong> The document may say to sell, to give the house to one
            person, or to hold it. Where it leaves the choice to you, decide with all the beneficiaries in mind, not
            just the one who speaks loudest.
          </li>
        </ol>
        <p className="tg-src">
          Sources: <R cite="11.98.070" /> (powers); <R cite="11.98.072" /> (notice and information);{" "}
          <R cite="11.98.075" /> (certification of trust); <R cite="11.98.078" /> (loyalty and impartiality).
        </p>
      </div>
    </section>

    <section className="tg-sec alt" aria-labelledby="beneficiary-approval">
      <div className="tg-in">
        <h2 id="beneficiary-approval" className="tg-h2">Do the beneficiaries have to approve the sale?</h2>
        <p>
          Usually not. Washington law gives a trustee the power to sell trust property, subject to the trust's own
          terms and the trustee's duties. The beneficiaries must be kept informed, but informing them is not the same
          as needing their permission. Check the document itself: some trusts do require consent, or name who
          receives the house.
        </p>
        <p className="tg-note">
          <strong>The exception: selling to yourself or your family.</strong> A sale of trust property to the trustee,
          or one affected by a conflict of interest, such as a sale to the trustee's spouse, children, siblings or
          parents, can be undone by an affected beneficiary. It stands if the trust authorizes it, if a court or a
          binding written agreement among the interested parties approves it, or if the beneficiary consents. A
          trustee who wants to buy the house should get an independent appraisal and that approval in writing before
          signing anything.
        </p>
        <p className="tg-src">
          Sources: <R cite="11.98.070" />; <R cite="11.98.078" /> (conflicted transactions);{" "}
          <R cite="11.96A.220" /> (binding agreements). Pricing:{" "}
          <Link to="/guides/pricing-house-trust-estate">pricing a house in a trust or estate</Link>.
        </p>
      </div>
    </section>

    <section className="tg-sec" aria-labelledby="cotrustees-disagree">
      <div className="tg-in">
        <h2 id="cotrustees-disagree" className="tg-h2">When co-trustees disagree</h2>
        <p>
          Siblings named as co-trustees often disagree about whether to sell, when, and for how much. Start with the
          trust document, which may say how co-trustees decide. Where it is silent, Washington law sets a few rules:
        </p>
        <ul className="tg-tiles">
          <li>
            <strong>Three or more trustees</strong> may act by majority. A trustee who goes along with the majority
            under protest is protected by putting the dissent in writing to each co-trustee at or before the time.
          </li>
          <li>
            <strong>Two trustees</strong> are not covered by the majority rule, so plan on both signing unless the
            trust says otherwise.
          </li>
          <li>
            <strong>The 15-day notice.</strong> A trustee can send the others written notice of a proposed action,
            such as accepting an offer. A co-trustee who does not object in writing within 15 days of receiving it is
            treated as approving, unless they earlier told that trustee in writing that the 15-day rule does not apply.
          </li>
          <li>
            <strong>Delegation.</strong> With the other's consent, one co-trustee can delegate a task, such as
            handling the sale, to another in a signed writing.
          </li>
        </ul>
        <p>
          If none of that breaks the deadlock, Washington's trust dispute law (TEDRA) offers mediation and, failing
          that, a court petition, which can include asking the court to change a trustee for reasonable cause. Each
          step costs the trust money, so it usually makes sense to try a neutral appraisal and a written plan first.
        </p>
        <p className="tg-src">
          Sources: <R cite="11.98.016" /> (co-trustees); <R cite="11.98.039" /> (changing a trustee); chapter{" "}
          <a href={rcw("11.96A")} target="_blank" rel="noopener noreferrer">11.96A RCW</a> (TEDRA).
        </p>
      </div>
    </section>

    <section className="tg-sec alt" aria-labelledby="beneficiary-in-the-house">
      <div className="tg-in">
        <h2 id="beneficiary-in-the-house" className="tg-h2">A beneficiary living in the house rent-free</h2>
        <p>
          It is common: an adult child who lived with or cared for the parent stays on after the death. The trustee
          has to treat all the beneficiaries impartially, so free use of the trust's house by one of them, while the
          others wait, needs a basis. The first question is whether the trust gives that person a right to live there.
          If it does not:
        </p>
        <ol className="tg-steps">
          <li>
            <strong>Agree on terms in writing.</strong> A move-out date, and either rent or payment of the taxes,
            insurance and utilities while they stay.
          </li>
          <li>
            <strong>Keep a record</strong> of the dates and what was or wasn't paid, and ask the trust's attorney
            whether fair rent can be charged against that beneficiary's share when the trust is divided.
          </li>
          <li>
            <strong>Remember who holds title.</strong> The trustee, not the beneficiary in residence, controls the
            house. If talking fails, the trust's attorney can recommend the right legal step to recover possession;
            it is the last resort because it costs every beneficiary.
          </li>
        </ol>
        <p className="tg-src">
          Source: <R cite="11.98.078" /> (impartiality). If the house is in probate rather than a trust, see{" "}
          <Link to="/guides/heirs-disagree-selling-house#sibling-in-the-house">when a sibling lives in the house</Link>.
        </p>
      </div>
    </section>
  </>
);

export default TrusteeHouseGuide;
