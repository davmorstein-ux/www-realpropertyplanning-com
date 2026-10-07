/**
 * The substance of date-of-death valuation, moved Oct 4, 2026 (Question Map
 * step 8) from /estate-probate-inherited-property/property-value onto
 * /date-of-death-valuation-property-appraisals, the page whose address
 * matches the search. The step page now summarizes and links here.
 * Sources as on the old page: RCW 11.44.015 (inventory within three months
 * of appointment, values as of the date of death, no certified appraisal
 * required); stepped-up basis (26 U.S.C. 1014, cited on the taxes guide).
 */
import { Link } from "react-router-dom";

const CSS = `
.dod-sec { padding: 3.25rem 0; background: #fff; }
.dod-in { max-width: 860px; margin: 0 auto; padding: 0 1.5rem; }
.dod-h2.dod-h2 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; font-size: clamp(26px, 3vw, 34px) !important; font-weight: 700; color: #1c1917 !important; margin: 2rem 0 0.8rem !important; line-height: 1.2; }
.dod-h2.first { margin-top: 0 !important; }
.dod-in p { font-size: 18px; line-height: 1.65; color: #1f2933; margin: 0 0 1rem; }
.dod-list { list-style: none; margin: 1rem 0 1.25rem; padding: 0; display: grid; gap: 0.7rem; }
.dod-list li { background: #faf8f4; border: 1px solid #e3d9cc; border-left: 4px solid #25597e; border-radius: 8px; padding: 0.85rem 1.1rem; font-size: 17px; line-height: 1.6; color: #1f2933; }
.dod-src.dod-src { font-size: 14px !important; color: #3d4a55 !important; }
.dod-sec a { color: #9e1f2b; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
`;

const DateOfDeathEssentials = () => (
  <section className="dod-sec" aria-labelledby="dod-what">
    <style dangerouslySetInnerHTML={{ __html: CSS }} />
    <div className="dod-in">
      <h2 id="dod-what" className="dod-h2 first">What a date-of-death value is, and why it matters</h2>
      <p>
        A date-of-death appraisal estimates the property's fair market value as of the day the owner died. It is the
        single most important number in an estate that includes a house, because several decisions rest on it:
      </p>
      <ul className="dod-list">
        <li>
          <strong>Capital gains for the heirs.</strong> Inherited property generally takes a new tax basis equal to its
          value at the date of death, so heirs who sell soon after usually owe little capital gains tax. The appraisal
          documents that basis.{" "}
          <Link to="/guides/taxes-selling-inherited-house-washington">Taxes when selling an inherited house</Link>.
        </li>
        <li>
          <strong>Estate tax.</strong> Washington has its own estate tax, with an exemption far lower than the federal
          one, and the house's value is a key input in whether it is owed.
        </li>
        <li>
          <strong>Dividing the estate fairly.</strong> When one heir keeps the house or buys out the others, everyone
          needs an independent value to work from.
        </li>
        <li>
          <strong>The estate inventory.</strong> The personal representative must prepare an inventory valuing estate
          property as of the date of death within three months of appointment (RCW 11.44.015). The law does not demand a
          certified appraisal, but an appraisal is the value that holds up if an heir, a creditor or a tax authority
          questions it; an online estimate does not.
        </li>
      </ul>

      <h2 className="dod-h2">Appraisal or market analysis?</h2>
      <p>
        A <strong>certified appraisal</strong> is prepared by a state-certified appraiser using established methods,
        in a written report that can be relied on for tax and legal purposes. A{" "}
        <strong>comparative market analysis (CMA)</strong> is a broker's pricing tool for listing a home. When the value
        will be reported for taxes, relied on by a court, or used to divide the estate among heirs, get a certified
        appraisal. For pricing a straightforward sale, a well-supported broker opinion is often enough.
      </p>

      <h2 className="dod-h2">Valued as it stood</h2>
      <p>
        Estate properties are appraised in their condition on the date of death, including deferred maintenance, dated
        finishes and belongings left behind: what a willing buyer would pay a willing seller, neither under pressure.
        That as-is value is the starting point for every later decision, whether to sell as-is, repair first, or give
        the house to an heir.
      </p>

      <h2 className="dod-h2">When to get it</h2>
      <p>
        As soon as reasonably possible after the death. An appraiser can also value the property retrospectively, as of
        a past date, but a value set close to the date of death is easier to support. Any Washington certified
        residential appraiser can prepare one; the site's featured appraiser is one, and you can hire anyone you choose.
      </p>
      <p className="dod-src">Source: <a href="https://app.leg.wa.gov/RCW/default.aspx?cite=11.44.015" target="_blank" rel="noopener noreferrer">RCW 11.44.015</a> (inventory and appraisement).</p>
    </div>
  </section>
);

export default DateOfDeathEssentials;
