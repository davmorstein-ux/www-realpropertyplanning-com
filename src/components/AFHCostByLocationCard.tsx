import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { countyIndex, countiesChecked, countySlug, getCountySummary } from "@/data/afh/directory";
import {
  AFH_MEDICAID_RATES,
  AFH_RATE_REGION_LABELS,
  medicaidRange,
  monthly,
  rateRegionForCounty,
} from "@/data/afhMedicaidRates";
import { privatePayBandForPlace } from "@/data/afhPrivatePayRanges";
import { cityPageByCity } from "@/data/afhCityPages";
import { FEATURED_APPRAISER } from "@/data/featuredProfessionals";
import { CalcShell, CalcSection, CalcField, CalcHero, CalcStats, CalcWaiting, CalcFoot, CK_CSS, ckVars, AFH_TOOL_COLOR } from "@/components/calc/CalcKit";

/**
 * The city/county cost lookup as a self-contained card, in the same idiom as
 * the ROI and valuation calculators. Rendered on its own page
 * (/adult-family-home-costs) and embedded under the Adult Family Home
 * Cost of Care calculator.
 */

const DEFAULT_ACCENT = AFH_TOOL_COLOR;
const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const money2 = (n: number) => "$" + n.toFixed(2);
const reviewedLabel = (iso: string) => {
  const d = new Date(iso + "T00:00:00");
  return isNaN(d.getTime()) ? iso : d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
};

interface Place {
  kind: "city" | "county";
  label: string;
  county: string;
  citySlug?: string;
}

const AFHCostByLocationCard = ({ compact = false, accent = DEFAULT_ACCENT }: { compact?: boolean; accent?: string }) => {
  const GREEN = accent;
  const places = useMemo<Place[]>(() => {
    const cities: Place[] = countyIndex.map((c) => ({
      kind: "city",
      label: `${c.city} (${c.county} County)`,
      county: c.county,
      citySlug: c.citySlug,
    }));
    const counties: Place[] = countiesChecked.map((c) => ({ kind: "county", label: `${c.county} County`, county: c.county }));
    return [...counties, ...cities].sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  const [query, setQuery] = useState("");
  const [picked, setPicked] = useState<Place | null>(null);
  const q = query.trim().toLowerCase();
  const matches =
    q.length >= 2
      ? places
          .map((p) => {
            const name = p.label.toLowerCase();
            const bare = p.kind === "city" ? name.split(" (")[0] : name.replace(/ county$/, "");
            const score = bare.startsWith(q) ? 0 : name.startsWith(q) ? 1 : bare.includes(q) ? 2 : name.includes(q) ? 3 : -1;
            return { p, score: score === -1 ? -1 : score * 2 + (p.kind === "county" ? 0 : 1) };
          })
          .filter((x) => x.score >= 0)
          .sort((a, b) => a.score - b.score || a.p.label.localeCompare(b.p.label))
          .slice(0, 8)
          .map((x) => x.p)
      : [];

  const county = picked?.county ?? null;
  const region = county ? rateRegionForCounty(county) : null;
  const range = region ? medicaidRange(region) : null;
  const band = county ? privatePayBandForPlace(picked?.kind === "city" ? picked.label.split(" (")[0] : null, county) : null;
  const checked = county ? countiesChecked.find((c) => c.county.toLowerCase() === county.toLowerCase()) : null;
  // getCountySummary counts a split city only for the homes in this county.
  const countyCities = county ? getCountySummary(county)?.cities ?? [] : [];
  const privatePayOnly = countyCities.reduce((s, c) => s + c.privatePay, 0);
  const cityEntry = picked?.kind === "city" ? countyIndex.find((c) => c.citySlug === picked.citySlug) : null;
  const forSale = picked ? cityPageByCity(picked.kind === "city" ? picked.label.split(" (")[0] : "") : null;

  const placeName = picked ? (picked.kind === "city" ? `${picked.label.split(" (")[0]}, ${county} County` : `${county} County`) : "";

  const body = (
    <>
      <p className="ck-intro">
        Type a city or county. You'll get the DSHS Medicaid rate range for that county (what the state pays a home per day and
        per month, by care level), a typical private-pay range where one has been reviewed, and how many licensed homes are there.
      </p>

      <CalcSection title="Location">
        <CalcField label="City or county" htmlFor="place">
          <input
            id="place"
            className="ck-input"
            type="text"
            value={picked ? picked.label : query}
            onChange={(e) => {
              setPicked(null);
              setQuery(e.target.value);
            }}
            placeholder="e.g. Kennewick, Spokane County, Edmonds"
            autoComplete="off"
          />
          {picked && (
            <button
              type="button"
              className="ck-clear"
              onClick={() => {
                setPicked(null);
                setQuery("");
              }}
              aria-label="Clear"
            >
              ×
            </button>
          )}
        </CalcField>
        {/* Results render in flow (not floating) so they can never sit behind the sections below. */}
        {!picked && matches.length > 0 && (
          <ul role="listbox" className="ck-matches">
            {matches.map((m) => (
              <li key={m.label}>
                <button
                  type="button"
                  className={m.kind === "county" ? "ck-match ck-matchcounty" : "ck-match"}
                  onClick={() => {
                    setPicked(m);
                    setQuery("");
                  }}
                >
                  {m.label}
                </button>
              </li>
            ))}
          </ul>
        )}
        {!picked && q.length >= 2 && matches.length === 0 && <p className="ck-hint">No Washington city or county matches that. Try the county name.</p>}
      </CalcSection>

      {picked && county && region && range && band ? (
        <>
          <CalcHero
            label={`Medicaid pays a home in ${placeName}, per month`}
            value={`${money(monthly(range.minDaily))} – ${money(monthly(range.maxDaily))}`}
            sub={`${money2(range.minDaily)} – ${money2(range.maxDaily)} a day, lightest to heaviest care level · ${AFH_RATE_REGION_LABELS[region]}`}
          />
          <CalcStats
            items={[
              { label: "Private pay, per month", value: band.confirmed ? `${money(band.low)} – ${money(band.high)}` : "Not yet published" },
              ...(checked && checked.facilityCount > 0
                ? [
                    { label: cityEntry ? `Homes in ${cityEntry.city}` : `Homes in ${county} County`, value: (cityEntry ? cityEntry.facilityCount : checked.facilityCount).toLocaleString() },
                    { label: "Accept Medicaid", value: (cityEntry ? cityEntry.facilityCount - cityEntry.privatePay : checked.facilityCount - privatePayOnly).toLocaleString() },
                  ]
                : []),
            ]}
          />
          <p className="ck-body-text">
            {band.confirmed
              ? `Private pay is per resident, not the home's total revenue: the typical monthly rate for a private room with moderate care in ${band.label}, from ${FEATURED_APPRAISER.name}'s brokerage and appraisal experience with operating homes (reviewed ${reviewedLabel(band.reviewed)}). Lighter care runs below it and heavy-care or specialty needs run well above it; each home sets its own rate.${band.note ? " " + band.note : ""} `
              : "No private-pay range has been reviewed here yet; ask each home for its rate sheet. "}
            The Medicaid figures are what DSHS pays the home; a Medicaid resident contributes most of their own income toward that
            cost and keeps a personal needs allowance. Hospice is separate: Medicare covers hospice services but not room and board.{" "}
            <Link to="/articles/hospice-care-washington">How hospice works in an adult family home</Link>.
          </p>
          {band.confirmed && band.tiers.length > 0 && (
            <details className="ck-fold" open>
              <summary>Private pay by care level, {band.label}</summary>
              <div className="ck-tablewrap">
                <table className="ck-table">
                  <thead>
                    <tr>
                      <th scope="col">Care level</th>
                      <th scope="col">Per month</th>
                    </tr>
                  </thead>
                  <tbody>
                    {band.tiers.map((t) => (
                      <tr key={t.label}>
                        <td>
                          <strong>{t.label}</strong>
                          <div className="ck-tablenote">{t.note}</div>
                        </td>
                        <td className="ck-num">
                          {money(t.low)} – {money(t.high)}
                          {t.openEnded ? "+" : ""}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          )}
          <details className="ck-fold">
            <summary>All 17 Medicaid care levels for this region</summary>
            <div className="ck-tablewrap">
              <table className="ck-table">
                <thead>
                  <tr>
                    <th scope="col">CARE level</th>
                    <th scope="col">Per day</th>
                    <th scope="col">Per month</th>
                  </tr>
                </thead>
                <tbody>
                  {AFH_MEDICAID_RATES.levels.map((l) => (
                    <tr key={l.classification}>
                      <td>{l.classification}</td>
                      <td className="ck-num">{money2(l[region])}</td>
                      <td className="ck-num">{money(monthly(l[region]))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="ck-hint">
              Source: <a href={AFH_MEDICAID_RATES.source} target="_blank" rel="noopener noreferrer">{AFH_MEDICAID_RATES.sourceLabel}</a>. Base AFH rate only;
              specialty add-ons excluded.
            </p>
          </details>
          {checked && (
            <div className="ck-links">
              {checked.facilityCount > 0 ? (
                <>
                  {cityEntry && <Link to={`/afh-club/homes/${cityEntry.citySlug}`}>Every licensed home in {cityEntry.city} →</Link>}
                  <Link to={`/afh-club/homes/county/${countySlug(county)}`}>{county} County directory →</Link>
                  {forSale && <Link to={`/afh-club/for-sale/${forSale.slug}`}>Homes for sale in {forSale.city} →</Link>}
                </>
              ) : (
                <span>
                  DSHS records show no licensed adult family homes in {county} County; families usually look to neighbouring counties.{" "}
                  <Link to={`/afh-club/homes/county/${countySlug(county)}`}>See the county page →</Link>
                </span>
              )}
            </div>
          )}
          <CalcFoot>
            Rates and counts change. Medicaid rates are updated by DSHS each July; directory counts come from DSHS licensing records
            dated {checked ? checked.retrievedAt : "recently"}. For budgeting, not a quote.
          </CalcFoot>
        </>
      ) : (
        !compact && <CalcWaiting>Start typing a city or county above.</CalcWaiting>
      )}
      <style dangerouslySetInnerHTML={{ __html: LOOKUP_CSS }} />
    </>
  );

  if (compact) {
    return (
      <div className="ck ck-plain" style={ckVars(GREEN)}>
        <style dangerouslySetInnerHTML={{ __html: CK_CSS }} />
        <div className="ck-body">{body}</div>
      </div>
    );
  }
  return (
    <CalcShell color={GREEN} icon="pin" eyebrow="AFH Club Calculator" title="Adult Family Home Cost by City & County" subtitle="Medicaid rates, private pay and licensed homes, wherever you look">
      {body}
    </CalcShell>
  );
};

const LOOKUP_CSS = `
.ck.ck-plain { border: 0 !important; box-shadow: none !important; border-radius: 0 !important; overflow: visible; }
.ck.ck-plain .ck-body { padding: 0 !important; }
.ck p.ck-intro.ck-intro { font-size: 16px !important; line-height: 1.55 !important; color: #1f2933 !important; margin: 0 0 16px !important; }
.ck button.ck-clear.ck-clear { flex: 0 0 auto; width: 48px !important; min-height: 48px; border: 1px solid #c9d7e2 !important; border-radius: 10px !important; background: #eef3f7 !important; color: #14283a !important; font-size: 22px !important; cursor: pointer !important; }
.ck ul.ck-matches { list-style: none !important; margin: 8px 0 0 !important; padding: 0 !important; border: 1px solid #c9d7e2; border-radius: 10px; overflow: hidden; }
.ck ul.ck-matches li { display: block !important; }
.ck button.ck-match.ck-match { display: block; width: 100%; text-align: left; min-height: 46px; padding: 10px 14px !important; background: #ffffff !important; border: 0 !important; border-bottom: 1px solid #eef1f4 !important; font-family: 'DM Sans', sans-serif !important; font-size: 16px !important; font-weight: 500 !important; color: #14283a !important; cursor: pointer !important; }
.ck button.ck-match.ck-matchcounty { background: #f6f8fa !important; font-weight: 700 !important; }
@media (hover: hover) { .ck button.ck-match.ck-match:hover { background: var(--tint) !important; } }
.ck p.ck-body-text.ck-body-text { font-size: 15px !important; line-height: 1.6 !important; color: #1f2933 !important; margin: 0 0 12px !important; }
.ck p.ck-body-text a, .ck .ck-links a, .ck .ck-hint a { color: var(--deep) !important; font-weight: 700; text-decoration: underline !important; text-underline-offset: 3px; font-size: inherit !important; }
.ck details.ck-fold { border: 1px solid #e1e7ec; border-radius: 12px; padding: 0 14px; margin: 0 0 10px; }
.ck details.ck-fold > summary { cursor: pointer; padding: 12px 0; font-size: 16px; font-weight: 700; color: var(--deep); }
.ck .ck-tablewrap { overflow-x: auto; margin: 0 0 10px; }
.ck table.ck-table { width: 100%; border-collapse: collapse; font-family: 'DM Sans', sans-serif; font-size: 15px; color: #14283a; }
.ck table.ck-table th { text-align: left; font-size: 13px; letter-spacing: .08em; text-transform: uppercase; color: #2b3640; padding: 6px 8px; border-bottom: 1px solid #dfe5ea; }
.ck table.ck-table td { padding: 8px; border-bottom: 1px solid #eef1f4; vertical-align: top; }
.ck table.ck-table td.ck-num { white-space: nowrap; font-weight: 700; color: var(--deep); font-variant-numeric: tabular-nums; }
.ck .ck-tablenote { color: #2b3640; font-size: 14px; }
.ck .ck-links { display: flex; flex-wrap: wrap; gap: 6px 18px; font-size: 16px; margin: 6px 0 12px; }
`;

export default AFHCostByLocationCard;
