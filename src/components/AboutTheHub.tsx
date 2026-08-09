/**
 * AboutTheHub
 *
 * Short orienting statement for the homepage: what Real Property Planning is
 * and who it serves. Sits below the "What brings you here today?" funnel tiles
 * and above the Cost of Care Calculator band.
 *
 * STRUCTURE — why a lead sentence plus a list rather than a paragraph.
 * The earlier version was one dense paragraph. Readers arriving here are often
 * mid-crisis and scanning, not reading. The situations that make someone
 * recognise themselves ("aging, illness, probate, or settling an estate") now
 * sit in the lead sentence, where they are read first, and the list carries
 * three short items instead of long ones. Every item completes the phrase
 * "Real Property Planning is…", so the stem and the items form real sentences.
 * Keep items to roughly ten words: past that they wrap and the list stops
 * being scannable, which is the whole reason it is a list.
 *
 * "Directory" is deliberate, and so is the absence of "trusted". The About
 * page states that inclusion is not an endorsement or guarantee, so language
 * here that implies vetting would contradict the site's own disclaimer.
 *
 * COLOUR — no gold. The rule and the markers use the same navy (#1B3A6B) as
 * the site name in the lead sentence, so the three elements read as one unit
 * rather than as separate decoration. Gold was rejected here deliberately:
 * it is overused across the site and reads dated on cream. Navy measures
 * 11.27:1 on white, clear of both the 4.5:1 text floor and the 3:1 floor for
 * meaningful graphics. Do not reintroduce gold in this card.
 *
 * The border stays a quiet stone rather than the burgundy used on the Cost of
 * Care card — that card is clickable and this one is not, so a matching border
 * would imply an action that doesn't exist. The single navy rule under the
 * lead is the only ornament: enough to catch the eye between four saturated
 * funnel tiles above and a bordered card below, without adding another
 * competing block of colour.
 *
 * TYPE — serif lead, sans list. The lead is a statement and reads as prose;
 * the list is meant to be scanned, and DM Sans scans faster at a glance. Both
 * families are already loaded, so the pairing costs nothing.
 *
 * Doubled class names follow the pattern this page already uses to defeat the
 * global "main p font-size !important" rule in index.css.
 *
 * The scale line under the list is hardcoded English too, and its figures are
 * counts of real pages — do not inflate them. An unverifiable claim on the
 * homepage is the kind of thing a journalist checks first.
 *
 * Copy is hardcoded English for now — the rest of this page uses i18next keys,
 * so this block still needs keys added to translate with the other 7 locales.
 */
const AboutTheHub = () => {
  return (
    <div style={{ margin: "2.25rem 0 2.5rem" }}>
      <style>{`
        .rpp-abouthub-card.rpp-abouthub-card {
          display: block;
          background: #ffffff;
          border: 3px solid #d6cdbf;
          border-radius: 12px;
          padding: 1.6rem 1.8rem 1.5rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.10);
        }

        .rpp-abouthub-lead.rpp-abouthub-lead {
          font-family: Georgia, serif;
          font-size: clamp(19px, 1.5vw, 24px) !important;
          font-weight: 400;
          color: #272421;
          line-height: 1.5;
          margin: 0;
          max-width: 54em;
          text-align: left;
        }
        .rpp-abouthub-name.rpp-abouthub-name {
          font-weight: 700;
          color: #1B3A6B;
          white-space: nowrap;
        }

        /* The rule is the one decorative element. Short and left-aligned so it
           reads as a mark under the sentence rather than a divider across the
           card, which would cut the block in half. */
        .rpp-abouthub-rule.rpp-abouthub-rule {
          width: 64px;
          height: 3px;
          background: #1B3A6B;
          border: 0;
          border-radius: 2px;
          margin: 1.15rem 0 1.25rem;
        }

        .rpp-abouthub-list.rpp-abouthub-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .rpp-abouthub-list.rpp-abouthub-list li {
          position: relative;
          padding-left: 1.75rem;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: clamp(17px, 1.3vw, 20px) !important;
          font-weight: 500;
          color: #272421;
          line-height: 1.45;
        }
        /* Rotated square rather than a disc: a disc reads as a default browser
           bullet, and the diamond is drawn in CSS rather than pulling in an
           image, so it scales with the text and costs no extra request. */
        .rpp-abouthub-list.rpp-abouthub-list li::before {
          content: "";
          position: absolute;
          left: 0.25rem;
          top: 0.62em;
          width: 9px;
          height: 9px;
          background: #1B3A6B;
          transform: rotate(45deg);
        }

        /* Scale line. Sits under the list, separated by a hairline so it reads
           as a footing rather than a fourth bullet. Figures verified against
           the repo: 67 editorial pages across guides, articles, long-term
           care, senior living, planning-before-a-crisis, executor
           responsibilities and estate/probate; 6 housing calculators plus 2
           AFH operator calculators; 4,046 licensed homes in the DSHS data for
           King, Snohomish and Pierce. "Over 4,000" is deliberate — the
           directory is a snapshot and homes open and close, so a precise
           figure would go stale. Re-check before changing any of these.

           Hardcoded rather than derived: counting the directory at runtime
           would mean importing 4,000+ records into the homepage bundle for
           the sake of one number. */
        .rpp-abouthub-stats.rpp-abouthub-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem 2.25rem;
          margin: 1.35rem 0 0;
          padding-top: 1.15rem;
          border-top: 1px solid #e4ddd1;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 16px !important;
          font-weight: 500;
          color: #4a4540;
          line-height: 1.4;
        }
        .rpp-abouthub-stats.rpp-abouthub-stats strong {
          font-weight: 700;
          color: #1B3A6B;
        }

        @media (max-width: 640px) {
          .rpp-abouthub-card.rpp-abouthub-card {
            padding: 1.3rem 1.25rem 1.25rem;
          }
          .rpp-abouthub-rule.rpp-abouthub-rule {
            margin: 1rem 0 1.1rem;
          }
        }
      `}</style>

      <div className="rpp-abouthub-card rpp-abouthub-card">
        <p className="rpp-abouthub-lead rpp-abouthub-lead">
          When aging, illness, probate, or settling an estate forces a decision about a home,{" "}
          <span className="rpp-abouthub-name rpp-abouthub-name">Real Property Planning</span> is&hellip;
        </p>

        <hr className="rpp-abouthub-rule rpp-abouthub-rule" />

        <ul className="rpp-abouthub-list rpp-abouthub-list">
          <li>A free, independent resource for Washington families</li>
          <li>Plain-language answers on real estate, housing, and planning</li>
          <li>A directory of attorneys, fiduciaries, and care professionals</li>
        </ul>

        <p className="rpp-abouthub-stats rpp-abouthub-stats">
          <span>
            <strong>67</strong> guides &amp; articles
          </span>
          <span>
            <strong>8</strong> calculators
          </span>
          <span>
            Directory of over <strong>4,000</strong> licensed adult family homes
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutTheHub;
