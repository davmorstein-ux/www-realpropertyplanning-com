import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { confirmedPrivatePayBands, privatePayBandByMarket } from "@/data/afhPrivatePayRanges";
import { AFH_RATE_REGION_LABELS, medicaidRange, monthly, rateRegionForCounty } from "@/data/afhMedicaidRates";

/**
 * Builds an annual gross revenue figure for an adult family home from a
 * market (county or King submarket), a bed mix by care level, and occupancy —
 * instead of asking a buyer to type a gross revenue number they may not have.
 *
 * Shared by the ROI calculator and the valuation estimator. Both pages are
 * DOM-driven, so the parent receives the result through `onApply` and writes
 * it into its own inputs.
 */

export interface RevenueBuildResult {
  /** Annual gross at 100% of the beds entered. */
  annualFull: number;
  /** Annual gross after the occupancy entered here. */
  annualOccupied: number;
  monthlyFull: number;
  beds: number;
  occupancy: number;
  marketLabel: string;
}

type RatePoint = "low" | "mid" | "high";

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const pick = (low: number, high: number, at: RatePoint) => (at === "low" ? low : at === "high" ? high : (low + high) / 2);

const AFHRevenueBuilder = ({
  accent,
  defaultMarket = "king",
  defaultOccupancy = 95,
  onApply,
}: {
  accent: string;
  defaultMarket?: string;
  defaultOccupancy?: number;
  onApply: (r: RevenueBuildResult) => void;
}) => {
  const bands = useMemo(() => confirmedPrivatePayBands(), []);
  // A listing, city page, or sold page can open this pre-filled: ?market=king-eastside&beds=6
  const fromUrl = useMemo(() => {
    if (typeof window === "undefined") return { market: null as string | null, beds: null as number | null };
    const sp = new URLSearchParams(window.location.search);
    const m = sp.get("market");
    const b = parseInt(sp.get("beds") ?? "");
    return { market: m && privatePayBandByMarket(m)?.confirmed ? m : null, beds: b >= 1 && b <= 8 ? b : null };
  }, []);
  const initialMarket = fromUrl.market ?? defaultMarket;
  const typicalIndexFor = (m: string) => {
    const b = privatePayBandByMarket(m);
    return Math.max(0, b ? b.tiers.findIndex((t) => /typical|personal|higher-end/i.test(t.label)) : 0);
  };
  const [market, setMarket] = useState(initialMarket);
  const [ratePoint, setRatePoint] = useState<RatePoint>("mid");
  const [beds, setBeds] = useState<Record<string, number>>({ [String(typicalIndexFor(initialMarket))]: fromUrl.beds ?? 6 });
  const [medicaidBeds, setMedicaidBeds] = useState(0);
  const [occupancy, setOccupancy] = useState(defaultOccupancy);

  const band = privatePayBandByMarket(market) ?? bands[0];
  const region = rateRegionForCounty(band.county);
  const med = medicaidRange(region);
  const medMonthly = pick(monthly(med.minDaily), monthly(med.maxDaily), ratePoint);

  const rows = band.tiers.map((t, i) => {
    const n = beds[String(i)] ?? 0;
    const rate = pick(t.low, t.high, ratePoint);
    return { key: String(i), label: t.label, note: t.note, low: t.low, high: t.high, openEnded: !!t.openEnded, n, rate };
  });
  const privateBeds = rows.reduce((s, r) => s + r.n, 0);
  const totalBeds = privateBeds + medicaidBeds;
  const monthlyFull = rows.reduce((s, r) => s + r.n * r.rate, 0) + medicaidBeds * medMonthly;
  const annualFull = monthlyFull * 12;
  const occ = Math.min(100, Math.max(0, occupancy));
  const annualOccupied = annualFull * (occ / 100);
  const overCap = totalBeds > 8;

  const changeMarket = (m: string) => {
    setMarket(m);
    // Put every private-pay bed on the market's "typical" tier by default.
    setBeds({ [String(typicalIndexFor(m))]: privateBeds || 6 });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#ffffff",
    border: `1.5px solid ${accent}55`,
    borderRadius: 6,
    color: "#272421",
    fontSize: 16,
    padding: "9px 12px",
    fontFamily: "'DM Sans', system-ui, sans-serif",
    boxSizing: "border-box",
    display: "block",
  };
  const bedsStyle: React.CSSProperties = { ...inputStyle, width: 74, textAlign: "center", padding: "8px 6px" };
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    color: "#272421",
    marginBottom: 7,
    fontWeight: 700,
  };

  return (
    <div style={{ border: `1.5px solid ${accent}55`, background: "#faf8f4", borderRadius: 10, padding: "1rem 1.1rem", marginBottom: 16 }}>
      <style>{`@media (max-width: 640px) { .rb-grid2 { grid-template-columns: 1fr !important; } }`}</style>
      <div style={{ fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: accent, fontWeight: 700, marginBottom: 4 }}>
        Build revenue from market rates
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: "#302b26", margin: "0 0 14px" }}>
        Don't have the P&amp;L? Pick the market, enter how many beds you expect at each care level, and this fills in
        gross revenue using the per-resident private-pay ranges and the DSHS Medicaid rate for that county. Rates are
        per resident, per month.
      </p>

      <div className="rb-grid2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div>
          <label style={labelStyle} htmlFor="rb-market">Market</label>
          <select id="rb-market" style={inputStyle} value={market} onChange={(e) => changeMarket(e.target.value)}>
            {bands.map((b) => (
              <option key={b.market} value={b.market}>
                {b.market.startsWith("king-") ? `King — ${b.label.replace(/ \(.*\)$/, "")}` : b.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label style={labelStyle} htmlFor="rb-rate">Rate assumption</label>
          <select id="rb-rate" style={inputStyle} value={ratePoint} onChange={(e) => setRatePoint(e.target.value as RatePoint)}>
            <option value="low">Low end of each range (conservative)</option>
            <option value="mid">Midpoint of each range</option>
            <option value="high">High end of each range</option>
          </select>
        </div>
      </div>

      <table style={{ width: "100%", fontSize: 15, borderCollapse: "collapse", marginBottom: 10 }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "2px solid #dccdce" }}>
            <th style={{ padding: "6px 6px" }}>Care level</th>
            <th style={{ padding: "6px 6px", whiteSpace: "nowrap" }}>Beds</th>
            <th style={{ padding: "6px 6px", whiteSpace: "nowrap", textAlign: "right" }}>Rate used</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.key} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "8px 6px" }}>
                <strong style={{ color: "#272421" }}>{r.label}</strong>
                <div style={{ color: "#5f6b66", fontSize: 16 }}>
                  {money(r.low)} – {money(r.high)}
                  {r.openEnded ? "+" : ""} · {r.note}
                </div>
              </td>
              <td style={{ padding: "8px 6px" }}>
                <input
                  type="number"
                  min={0}
                  max={8}
                  aria-label={`${r.label} beds`}
                  style={bedsStyle}
                  value={r.n}
                  onChange={(e) => setBeds({ ...beds, [r.key]: Math.max(0, Math.min(8, parseInt(e.target.value) || 0)) })}
                />
              </td>
              <td style={{ padding: "8px 6px", textAlign: "right", fontWeight: 700, color: accent, whiteSpace: "nowrap" }}>{money(r.rate)}/mo</td>
            </tr>
          ))}
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "8px 6px" }}>
              <strong style={{ color: "#272421" }}>Medicaid</strong>
              <div style={{ color: "#5f6b66", fontSize: 16 }}>
                {money(monthly(med.minDaily))} – {money(monthly(med.maxDaily))} · DSHS {AFH_RATE_REGION_LABELS[region]} rate, lightest to heaviest care
              </div>
            </td>
            <td style={{ padding: "8px 6px" }}>
              <input
                type="number"
                min={0}
                max={8}
                aria-label="Medicaid beds"
                style={bedsStyle}
                value={medicaidBeds}
                onChange={(e) => setMedicaidBeds(Math.max(0, Math.min(8, parseInt(e.target.value) || 0)))}
              />
            </td>
            <td style={{ padding: "8px 6px", textAlign: "right", fontWeight: 700, color: accent, whiteSpace: "nowrap" }}>{money(medMonthly)}/mo</td>
          </tr>
        </tbody>
      </table>

      <div className="rb-grid2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, alignItems: "end", marginBottom: 12 }}>
        <div>
          <label style={labelStyle} htmlFor="rb-occ">Expected occupancy (%)</label>
          <input
            id="rb-occ"
            type="number"
            min={0}
            max={100}
            style={inputStyle}
            value={occupancy}
            onChange={(e) => setOccupancy(parseInt(e.target.value) || 0)}
          />
        </div>
        <div style={{ fontSize: 15, lineHeight: 1.5, color: "#302b26" }}>
          <div>
            <strong>{totalBeds}</strong> beds · <strong>{money(monthlyFull)}</strong>/mo at full
          </div>
          <div>
            <strong style={{ color: accent }}>{money(annualFull)}</strong>/yr at full · <strong style={{ color: accent }}>{money(annualOccupied)}</strong>/yr at {occ}%
          </div>
        </div>
      </div>

      {overCap && (
        <p style={{ fontSize: 14, color: "#b62733", margin: "0 0 10px", fontWeight: 600 }}>
          A Washington adult family home is licensed for at most 8 residents; reduce the bed count.
        </p>
      )}

      <button
        type="button"
        className="rpp-apply-button"
        aria-disabled={totalBeds === 0 || overCap}
        onClick={() => {
          if (totalBeds === 0 || overCap) return;
          onApply({ annualFull, annualOccupied, monthlyFull, beds: totalBeds, occupancy: occ, marketLabel: band.label });
        }}
        style={{
          ["--rpp-fill" as string]: totalBeds === 0 || overCap ? "#9a948c" : accent,
          width: "100%",
          padding: "14px 20px",
          borderRadius: 8,
          border: "none",
          fontSize: 19,
          cursor: totalBeds === 0 || overCap ? "not-allowed" : "pointer",
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
      >
        Use this revenue in the calculator
      </button>
      <p style={{ fontSize: 16, lineHeight: 1.5, color: "#5f6b66", margin: "12px 0 0" }}>
        Private-pay ranges are David Stein's working bands from brokerage and appraisal experience (reviewed September
        2026); Medicaid rates are the DSHS schedule effective July 1, 2026. You can still type your own gross revenue
        below if you have the actual P&amp;L.{" "}
        <Link to="/adult-family-home-costs" style={{ color: accent, fontWeight: 700 }}>
          See the full rate lookup by city and county
        </Link>
        .
      </p>
    </div>
  );
};

export default AFHRevenueBuilder;
