/**
 * A simplified hub's choices (Oct 23, 2026), shared by the Estate and Plan
 * Ahead hubs: photo buttons, two per row on phones and three per row on
 * computers, then one full-width "Not sure where to start?" bar. Same look as
 * the Helping an Aging Parent hub; styles are the "apf-" rules in index.css,
 * so the page's <main> must carry className="apf".
 */
import { Link } from "react-router-dom";
import type { SimpleChoice, NotSureBar } from "@/lib/simple-topics";
import RppArrow from "@/components/RppArrow";

const SimpleHubChoices = ({ choices, notSure }: { choices: SimpleChoice[]; notSure: NotSureBar }) => (
  <>
    <ul className={`apf-grid apf-grid-${choices.length}`}>
      {choices.map((it) => (
        <li key={it.to}>
          <Link to={it.to} className="apf-pick">
            <img src={it.image} alt="" width={800} height={500} loading="lazy" decoding="async" />
            <span className="apf-pick-label">
              <span>{it.label}</span>
              <span className="apf-arrow" aria-hidden="true"><RppArrow size="100%" /></span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
    <div className="apf-wide">
      <Link to={notSure.to} className="apf-wide-link">
        <span className="apf-wide-text">
          <span>{notSure.label}</span>
          <span>{notSure.sub}</span>
        </span>
        <span className="apf-arrow" aria-hidden="true"><RppArrow size="100%" /></span>
      </Link>
    </div>
  </>
);

export default SimpleHubChoices;
