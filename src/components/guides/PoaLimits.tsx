/**
 * Two sections for /power-of-attorney (Question Map step 6, Oct 4, 2026):
 *   - When there is no usable power of attorney
 *   - Can the agent buy the house, or give it away?
 *
 * Checked Oct 4, 2026 against the statute text:
 *   - RCW 11.125.040  a POA ends at incapacity unless it says it survives it
 *   - RCW 11.125.090  a "springing" POA needs written confirmation of
 *                     incapacity (physician, licensed psychologist, judge or
 *                     person named in the POA)
 *   - RCW 11.125.140  agent duties: good faith, loyalty, avoid conflicts,
 *                     preserve the estate plan, keep records; (4) not liable
 *                     solely because the agent also benefits; (9) records on
 *                     written request within 30 days
 *   - RCW 11.125.160  who may ask a court to review the agent's conduct
 *   - RCW 11.125.240  gifts need an express grant; an agent who is not the
 *                     principal's ancestor, spouse or descendant may not create
 *                     an interest in the principal's property for themselves
 *                     unless the POA expressly provides
 *   - RCW 11.125.390  gift authority limited by default to the federal annual
 *                     gift tax exclusion per recipient
 *   - RCW 11.130.435  a conservator needs notice and specific court
 *                     authorization to sell the person's home or other real
 *                     estate; the court considers what the person would decide
 *   - WAC 182-513-1363 Medicaid transfer penalty (already cited on the site)
 */
import { Link } from "react-router-dom";

const rcw = (cite: string) => `https://app.leg.wa.gov/RCW/default.aspx?cite=${cite}`;
const R = ({ cite }: { cite: string }) => (
  <a href={rcw(cite)} target="_blank" rel="noopener noreferrer">
    RCW {cite}
  </a>
);

const CSS = `
.pl-sec { padding: 3.5rem 0; }
.pl-sec.alt { background: #faf8f4; }
.pl-in { max-width: 860px; margin: 0 auto; padding: 0 1.5rem; }
.pl-h2.pl-h2 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; font-size: clamp(28px, 3vw, 38px) !important; font-weight: 700; color: #1c1917 !important; margin: 0 0 0.9rem !important; line-height: 1.2; }
.pl-in p { font-size: 18px; line-height: 1.65; color: #1f2933; margin: 0 0 1rem; }
.pl-tiles { list-style: none; margin: 1.25rem 0; padding: 0; display: grid; gap: 0.75rem; }
.pl-tiles li { background: #fff; border: 1px solid #e3d9cc; border-left: 4px solid #1f4058; border-radius: 8px; padding: 0.9rem 1.15rem; font-size: 17px; line-height: 1.6; color: #1f2933; }
.pl-tiles.warm li { border-left-color: #8a4214; }
.pl-note { background: #fff; border-left: 5px solid #8a4214; border-radius: 8px; padding: 1rem 1.25rem; }
.pl-src.pl-src { font-size: 14px !important; color: #3d4a55 !important; margin-top: 0.5rem !important; }
.pl-sec a { color: #9e1f2b; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
`;

const PoaLimits = () => (
  <>
    <style dangerouslySetInnerHTML={{ __html: CSS }} />

    <section className="pl-sec alt" aria-labelledby="no-usable-poa">
      <div className="pl-in">
        <h2 id="no-usable-poa" className="pl-h2">When there is no usable power of attorney</h2>
        <p>Families often find out too late that the document they have will not work for selling the house. The usual reasons:</p>
        <ul className="pl-tiles">
          <li>
            <strong>There is no power of attorney at all.</strong>
          </li>
          <li>
            <strong>It is not durable.</strong> In Washington a power of attorney ends when the parent loses capacity
            unless it says it survives that, with words such as "This power of attorney shall not be affected by
            disability of the principal."
          </li>
          <li>
            <strong>It does not cover real estate.</strong> A document limited to banking or health care decisions
            does not let the agent sell the house.
          </li>
          <li>
            <strong>It "springs" on incapacity, and nobody has confirmed it.</strong> A power of attorney that takes
            effect only on incapacity needs that confirmed in writing, usually by a physician or licensed
            psychologist, before the agent can use it.
          </li>
        </ul>
        <p>
          <strong>If your parent still has capacity,</strong> the simplest fix is a new durable power of attorney that
          covers real estate, signed now with an attorney's help. Your parent can also sign the listing and deed
          themselves.
        </p>
        <p>
          <strong>If they no longer have capacity,</strong> someone has to ask the superior court to appoint a
          conservator to manage their property. A conservator cannot sell the parent's home on their own authority:
          they must give notice to the family members entitled to it and get specific court approval for the sale, and
          the court considers primarily the decision the parent would make if able. It takes longer and costs more
          than using a power of attorney, which is the best argument for signing one while it is still possible.
        </p>
        <p className="pl-src">
          Sources: <R cite="11.125.040" /> (durability); <R cite="11.125.090" /> (springing powers);{" "}
          <R cite="11.130.435" /> (conservator sales need court approval).
        </p>
      </div>
    </section>

    <section className="pl-sec" aria-labelledby="agent-buy-or-gift">
      <div className="pl-in">
        <h2 id="agent-buy-or-gift" className="pl-h2">Can the agent buy the house, or give it away?</h2>
        <p>
          An agent must act in good faith and loyally for the parent's benefit, avoid conflicts of interest, keep
          records, and try to preserve the parent's estate plan. Those duties decide what an agent can do with the house.
        </p>
        <ul className="pl-tiles warm">
          <li>
            <strong>Buying the house yourself.</strong> Not forbidden, but it is the clearest conflict of interest an
            agent can have. The law protects an agent who acts in good faith from liability solely because they also
            benefit, but the agent has to be able to show the sale was fair to the parent. An independent appraisal,
            a price at full value, an attorney's review, and telling the other family members in writing first are
            what make that showing possible.
          </li>
          <li>
            <strong>Giving the house away, or selling it cheaply.</strong> An agent can make gifts only if the power
            of attorney expressly grants that authority. Even then, by default, gifts are limited to the federal
            annual gift tax exclusion per recipient, far less than a house is worth, unless the document says
            otherwise. An agent who is not the parent's spouse, parent, child or other descendant cannot give
            themselves an interest in the parent's property at all unless the document expressly allows it.
          </li>
          <li>
            <strong>The Medicaid risk.</strong> A gift of the house, or a sale to family below fair value, within 60
            months before applying for Apple Health long-term care can cause a penalty period with no coverage. See{" "}
            <Link to="/long-term-care/medicaid-and-long-term-care">Medicaid and the house</Link>.
          </li>
        </ul>
        <p className="pl-note">
          <strong>Agents can be asked to account.</strong> The parent, a guardian or conservator, a government agency
          protecting the parent and, after death, the personal representative can request the agent's records in
          writing, and the agent must provide them within 30 days. The parent's spouse, and any other person who shows
          the court a good-faith concern for the parent's welfare, can ask the court to review the agent's conduct.
        </p>
        <p className="pl-src">
          Sources: <R cite="11.125.140" /> (agent duties, records); <R cite="11.125.160" /> (court review);{" "}
          <R cite="11.125.240" /> (gifts need express authority); <R cite="11.125.390" /> (gift limits);{" "}
          <a href="https://app.leg.wa.gov/WAC/default.aspx?cite=182-513-1363" target="_blank" rel="noopener noreferrer">
            WAC 182-513-1363
          </a>{" "}
          (Medicaid transfer penalty).
        </p>
      </div>
    </section>
  </>
);

export default PoaLimits;
