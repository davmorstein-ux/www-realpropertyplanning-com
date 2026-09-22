import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { countyIndex, countiesChecked, countySlug } from "@/data/afh/directory";
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

/**
 * The city/county cost lookup as a self-contained card, in the same idiom as
 * the ROI and valuation calculators. Rendered on its own page
 * (/adult-family-home-costs) and embedded under the Adult Family Home
 * Cost of Care calculator.
 */

const DEFAULT_ACCENT = "#0f6b56";
const PS: React.CSSProperties = { marginBottom: 20 };
const PT: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontSize: 13,
  letterSpacing: ".18em",
  textTransform: "uppercase",
  fontWeight: 700,
  marginBottom: 6,
};
const DV: React.CSSProperties = { height: 1, background: "#eee6e7", margin: "0 0 12px" };
const stepperBtn: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 700,
  background: "#f5f2ec",
  border: "2px solid #dccdce",
  borderRadius: 8,
  cursor: "pointer",
  color: "#272421",
  fontFamily: "'DM Sans', system-ui, sans-serif",
};
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
  const countyCities = county ? countyIndex.filter((c) => (c.counties ?? [c.county]).some((n) => n.toLowerCase() === county.toLowerCase())) : [];
  const privatePayOnly = countyCities.reduce((s, c) => s + c.privatePay, 0);
  const cityEntry = picked?.kind === "city" ? countyIndex.find((c) => c.citySlug === picked.citySlug) : null;
  const forSale = picked ? cityPageByCity(picked.kind === "city" ? picked.label.split(" (")[0] : "") : null;

  return (
    <>
      <style>{`@media (max-width: 640px) { .cost-tiles { grid-template-columns: 1fr !important; } }`}</style>
          <div
            style={{
              maxWidth: compact ? "none" : 900,
              margin: "0 auto",
              background: "#ffffff",
              border: `2px solid ${GREEN}40`,
              borderRadius: 14,
              padding: "1.5rem 1.25rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <div style={{ fontSize: 13, letterSpacing: ".25em", textTransform: "uppercase", color: GREEN, marginBottom: 8, fontWeight: 700 }}>
                Adult Family Home
              </div>
              <h2 className="coc-card-title" style={{ fontSize: 28, fontWeight: 700, color: "#272421", margin: 0 }}>
                Cost by <strong className="coc-card-title-accent is-green">City &amp; County</strong>
              </h2>
              <div style={{ fontSize: 13, color: "#5f6b66", marginTop: 6, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 600 }}>
                Medicaid rates · Private pay · Licensed homes
              </div>
            </div>

            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#302b26", margin: "0 0 18px", textAlign: "center" }}>
              Type a city or county. You'll get the DSHS Medicaid rate range for that county (what the state pays a
              home per day and per month, by care level), a typical private-pay range where one has been reviewed,
              and how many licensed homes are there and how many accept Medicaid.
            </p>

            <div style={PS}>
              <div style={{ ...PT, color: GREEN }}>
                Location <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${GREEN}30,transparent)` }} />
              </div>
              <div style={DV} />
              <label htmlFor="place" style={{ display: "block", fontSize: 15, fontWeight: 700, color: "#272421", marginBottom: 6 }}>
                City or county
              </label>
              <div style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
                <input
                  id="place"
                  type="text"
                  value={picked ? picked.label : query}
                  onChange={(e) => {
                    setPicked(null);
                    setQuery(e.target.value);
                  }}
                  placeholder="e.g. Kennewick, Spokane County, Edmonds"
                  autoComplete="off"
                  style={{
                    flex: 1,
                    fontSize: 19,
                    padding: "12px 14px",
                    minHeight: 52,
                    border: `2px solid ${GREEN}b3`,
                    borderRadius: 8,
                    background: "#f5f2ec",
                    color: "#272421",
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                  }}
                />
                {picked && (
                  <button
                    type="button"
                    onClick={() => {
                      setPicked(null);
                      setQuery("");
                    }}
                    style={{ ...stepperBtn, minWidth: 52 }}
                    aria-label="Clear"
                  >
                    ×
                  </button>
                )}
              </div>
              {/* Results render in flow (not floating) so they can never sit behind the sections below. */}
              {!picked && matches.length > 0 && (
                <ul role="listbox" style={{ listStyle: "none", margin: "8px 0 0", padding: 0, border: `2px solid ${GREEN}b3`, borderRadius: 8, overflow: "hidden", background: "#fff" }}>
                  {matches.map((m) => (
                    <li key={m.label}>
                      <button
                        type="button"
                        onClick={() => {
                          setPicked(m);
                          setQuery("");
                        }}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          fontSize: 17,
                          padding: "12px 14px",
                          minHeight: 48,
                          background: m.kind === "county" ? "#f5f2ec" : "#fff",
                          border: "none",
                          borderBottom: "1px solid #eee",
                          cursor: "pointer",
                          fontFamily: "'DM Sans', system-ui, sans-serif",
                          color: "#272421",
                          fontWeight: m.kind === "county" ? 700 : 500,
                        }}
                      >
                        {m.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {!picked && q.length >= 2 && matches.length === 0 && (
                <p style={{ fontSize: 15, color: "#5f6b66", margin: "8px 0 0" }}>No Washington city or county matches that. Try the county name.</p>
              )}
            </div>

            {picked && county && region && range && band && (
              <>
                <div style={PS}>
                  <div style={{ ...PT, color: GREEN }}>
                    {picked.kind === "city" ? `${picked.label.split(" (")[0]}, ` : ""}
                    {county} County <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${GREEN}30,transparent)` }} />
                  </div>
                  <div style={DV} />
                  <div style={{ fontSize: 14, color: "#5f6b66", marginBottom: 12 }}>
                    DSHS rate region: <strong style={{ color: "#272421" }}>{AFH_RATE_REGION_LABELS[region]}</strong>
                  </div>
                  <div className="cost-tiles" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
                    {[
                      ["Medicaid, per month", `${money(monthly(range.minDaily))} – ${money(monthly(range.maxDaily))}`, "lightest to heaviest care level"],
                      ["Medicaid, per day", `${money2(range.minDaily)} – ${money2(range.maxDaily)}`, "what DSHS pays the home"],
                      [
                        "Private pay, per month",
                        band.confirmed ? `${money(band.low)} – ${money(band.high)}` : "Not yet published",
                        band.confirmed ? `typical range, reviewed ${reviewedLabel(band.reviewed)}` : "ask each home for its rate sheet",
                      ],
                    ].map(([k, v, note]) => (
                      <div key={k} style={{ background: "#f5f2ec", border: `2px solid ${GREEN}b3`, borderRadius: 8, padding: "12px 10px", textAlign: "center" }}>
                        <div style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "#5f6b66", fontWeight: 700, marginBottom: 6 }}>{k}</div>
                        <div style={{ fontSize: 20, fontWeight: 700, color: GREEN, lineHeight: 1.2 }}>{v}</div>
                        <div style={{ fontSize: 13, color: "#5f6b66", marginTop: 4 }}>{note}</div>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "#302b26", margin: "14px 0 0" }}>
                    Hospice is separate from these figures: Medicare covers hospice services but not the home's room and
                    board, so a resident on hospice still pays the home as before.{" "}
                    <Link to="/articles/hospice-care-washington" style={{ color: GREEN, fontWeight: 700 }}>
                      How hospice works in an adult family home
                    </Link>
                    . The Medicaid figures are what DSHS pays the home; a Medicaid resident contributes most of their own
                    income toward that cost and keeps a personal needs allowance, so a family's out-of-pocket under
                    Medicaid is usually the resident's income, not the rate.
                    {band.confirmed
                      ? ` The private-pay figure is per resident, not the home's total revenue: the typical monthly rate for a private room with moderate care in ${band.label}, from ${FEATURED_APPRAISER.name}'s brokerage and appraisal experience with operating homes (reviewed ${reviewedLabel(band.reviewed)}). Lighter care runs below it and heavy-care or specialty needs run well above it; each home sets its own rate.${band.note ? " " + band.note : ""}`
                      : ""}
                  </p>
                  {band.confirmed && band.tiers.length > 0 && (
                    <details style={{ marginTop: 12 }} open>
                      <summary style={{ cursor: "pointer", color: GREEN, fontWeight: 700, fontSize: 15 }}>Private pay by care level, {band.label}</summary>
                      <table style={{ width: "100%", fontSize: 15, marginTop: 8, borderCollapse: "collapse" }}>
                        <thead>
                          <tr style={{ textAlign: "left", borderBottom: "2px solid #dccdce" }}>
                            <th style={{ padding: "6px 8px" }}>Care level</th>
                            <th style={{ padding: "6px 8px", whiteSpace: "nowrap" }}>Per month</th>
                          </tr>
                        </thead>
                        <tbody>
                          {band.tiers.map((t) => (
                            <tr key={t.label} style={{ borderBottom: "1px solid #eee" }}>
                              <td style={{ padding: "6px 8px" }}>
                                <strong style={{ color: "#272421" }}>{t.label}</strong>
                                <div style={{ color: "#5f6b66" }}>{t.note}</div>
                              </td>
                              <td style={{ padding: "6px 8px", whiteSpace: "nowrap", fontWeight: 700, color: GREEN }}>
                                {money(t.low)} – {money(t.high)}{t.openEnded ? "+" : ""}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </details>
                  )}
                  <details style={{ marginTop: 12 }}>
                    <summary style={{ cursor: "pointer", color: GREEN, fontWeight: 700, fontSize: 15 }}>All 17 Medicaid care levels for this region</summary>
                    <table style={{ width: "100%", fontSize: 15, marginTop: 8, borderCollapse: "collapse" }}>
                      <thead>
                        <tr style={{ textAlign: "left", borderBottom: "2px solid #dccdce" }}>
                          <th style={{ padding: "6px 8px" }}>CARE level</th>
                          <th style={{ padding: "6px 8px" }}>Per day</th>
                          <th style={{ padding: "6px 8px" }}>Per month</th>
                        </tr>
                      </thead>
                      <tbody>
                        {AFH_MEDICAID_RATES.levels.map((l) => (
                          <tr key={l.classification} style={{ borderBottom: "1px solid #eee" }}>
                            <td style={{ padding: "6px 8px" }}>{l.classification}</td>
                            <td style={{ padding: "6px 8px" }}>{money2(l[region])}</td>
                            <td style={{ padding: "6px 8px" }}>{money(monthly(l[region]))}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p style={{ fontSize: 13, color: "#5f6b66", margin: "8px 0 0" }}>
                      Source:{" "}
                      <a href={AFH_MEDICAID_RATES.source} target="_blank" rel="noopener noreferrer" style={{ color: GREEN }}>
                        {AFH_MEDICAID_RATES.sourceLabel}
                      </a>
                      . Base AFH rate only; specialty add-ons excluded.
                    </p>
                  </details>
                </div>

                {checked && (
                  <div style={{ ...PS, marginBottom: 0 }}>
                    <div style={{ ...PT, color: GREEN }}>
                      Licensed homes here <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${GREEN}30,transparent)` }} />
                    </div>
                    <div style={DV} />
                    {checked.facilityCount > 0 ? (
                      <>
                        <div className="cost-tiles" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 14 }}>
                          {[
                            [cityEntry ? `Homes in ${cityEntry.city}` : `Homes in ${county} County`, cityEntry ? cityEntry.facilityCount : checked.facilityCount, cityEntry ? `${cityEntry.totalBeds} beds` : `${checked.totalBeds.toLocaleString()} beds`],
                            ["Accept Medicaid", cityEntry ? cityEntry.facilityCount - cityEntry.privatePay : checked.facilityCount - privatePayOnly, "hold a DSHS contract"],
                            ["Private-pay only", cityEntry ? cityEntry.privatePay : privatePayOnly, "no DSHS contract"],
                          ].map(([k, v, note]) => (
                            <div key={String(k)} style={{ background: "#f5f2ec", border: `2px solid ${GREEN}b3`, borderRadius: 8, padding: "12px 10px", textAlign: "center" }}>
                              <div style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "#5f6b66", fontWeight: 700, marginBottom: 6 }}>{k}</div>
                              <div style={{ fontSize: 24, fontWeight: 700, color: "#272421", lineHeight: 1.2 }}>{Number(v).toLocaleString()}</div>
                              <div style={{ fontSize: 13, color: "#5f6b66", marginTop: 4 }}>{note}</div>
                            </div>
                          ))}
                        </div>
                        {cityEntry && (
                          <p style={{ fontSize: 15, color: "#302b26", margin: "0 0 10px" }}>
                            {county} County overall: {checked.facilityCount.toLocaleString()} licensed homes, {checked.totalBeds.toLocaleString()} beds,{" "}
                            {(checked.facilityCount - privatePayOnly).toLocaleString()} accepting Medicaid.
                          </p>
                        )}
                        <p style={{ fontSize: 16, display: "flex", flexWrap: "wrap", gap: "6px 18px", margin: 0 }}>
                          {cityEntry && (
                            <Link to={`/afh-club/homes/${cityEntry.citySlug}`} style={{ color: GREEN, fontWeight: 700 }}>
                              Every licensed home in {cityEntry.city} →
                            </Link>
                          )}
                          <Link to={`/afh-club/homes/county/${countySlug(county)}`} style={{ color: GREEN, fontWeight: 700 }}>
                            {county} County directory →
                          </Link>
                          {forSale && (
                            <Link to={`/afh-club/for-sale/${forSale.slug}`} style={{ color: GREEN }}>
                              Homes for sale in {forSale.city}
                            </Link>
                          )}
                        </p>
                      </>
                    ) : (
                      <p style={{ fontSize: 16, lineHeight: 1.6, color: "#302b26", margin: 0 }}>
                        DSHS records show no licensed adult family homes in {county} County. The Medicaid rate above is what a
                        home there would be paid; families usually look to neighbouring counties.{" "}
                        <Link to={`/afh-club/homes/county/${countySlug(county)}`} style={{ color: GREEN, fontWeight: 700 }}>
                          See the county page
                        </Link>
                        .
                      </p>
                    )}
                  </div>
                )}
                <p style={{ fontSize: 13, color: "#5f6b66", margin: "16px 0 0", textAlign: "center" }}>
                  Rates and counts change. Medicaid rates are updated by DSHS each July; directory counts come from DSHS
                  licensing records dated {checked ? checked.retrievedAt : "recently"}. For budgeting, not a quote.
                </p>
              </>
            )}
          </div>

    </>
  );
};

export default AFHCostByLocationCard;
