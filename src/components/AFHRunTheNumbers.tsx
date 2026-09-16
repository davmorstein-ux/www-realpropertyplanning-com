import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { privatePayBandForPlace } from "@/data/afhPrivatePayRanges";
import { medicaidRange, monthly, rateRegionForCounty } from "@/data/afhMedicaidRates";

/**
 * A short card that points a buyer or seller from a listing, city page, or the
 * sold page into the ROI calculator and valuation estimator, with the market
 * (and licensed bed count, when known) carried in the URL so the revenue
 * builder opens pre-filled.
 *
 * Built for an older audience: two large figures, one short sentence, two big
 * buttons. Nothing under 18px except the eyebrow. Links use `rpp-btn-link`,
 * which index.css exempts from the 16px link floor and the red link colour.
 */

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const GREEN = "#0a5648";

interface Props {
  /** City the visitor is looking at, if any; drives King County submarkets. */
  city?: string | null;
  /** County for DSHS purposes. */
  county: string;
  /** Licensed bed count when known (from the DSHS record), 1–8. */
  beds?: number | null;
  /** Which calculator to lead with. */
  lead?: "buyer" | "seller" | "both";
  /** Override the heading for the page it sits on. */
  heading?: string;
}

const Stat = ({ label, value, sub }: { label: string; value: string; sub: string }) => (
  <div
    style={{
      flex: "1 1 260px",
      background: "#f5f2ec",
      border: `2px solid ${GREEN}40`,
      borderRadius: 10,
      padding: "18px 16px",
      textAlign: "center",
    }}
  >
    <div style={{ fontSize: 14, letterSpacing: ".12em", textTransform: "uppercase", color: "#5f6b66", fontWeight: 700, marginBottom: 8 }}>
      {label}
    </div>
    <div style={{ fontSize: 30, fontWeight: 700, color: GREEN, lineHeight: 1.15 }}>{value}</div>
    <div style={{ fontSize: 18, color: "#302b26", marginTop: 8 }}>{sub}</div>
  </div>
);

const Btn = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link
    to={to}
    className="rpp-btn-link"
    style={{
      display: "block",
      background: GREEN,
      color: "#ffffff",
      textAlign: "center",
      padding: "16px 20px",
      borderRadius: 10,
      fontWeight: 700,
      textDecoration: "none",
      lineHeight: 1.3,
    }}
  >
    {children}
  </Link>
);

const AFHRunTheNumbers = ({ city, county, beds, lead = "both", heading }: Props) => {
  const band = privatePayBandForPlace(city, county);
  const region = rateRegionForCounty(county);
  const med = medicaidRange(region);
  const qs = new URLSearchParams();
  if (band.confirmed) qs.set("market", band.market);
  if (beds && beds >= 1 && beds <= 8) qs.set("beds", String(beds));
  const q = qs.toString() ? `?${qs.toString()}` : "";
  const place = city ?? `${county} County`;

  return (
    <div
      style={{
        background: "#ffffff",
        border: `2px solid ${GREEN}40`,
        borderRadius: 14,
        padding: "28px 24px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ fontSize: 14, letterSpacing: ".2em", textTransform: "uppercase", color: GREEN, fontWeight: 700, marginBottom: 8 }}>
        Run the numbers
      </div>
      <h2 style={{ fontSize: 28, fontWeight: 700, color: "#272421", margin: "0 0 20px", lineHeight: 1.25 }}>
        {heading ?? `What a home in ${place} can earn`}
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 18 }}>
        <Stat
          label="Private pay"
          value={band.confirmed ? `${money(band.low)} – ${money(band.high)}` : "Not yet published"}
          sub={band.confirmed ? "per resident, per month" : "ask each home for its rate sheet"}
        />
        <Stat
          label="Medicaid (DSHS)"
          value={`${money(monthly(med.minDaily))} – ${money(monthly(med.maxDaily))}`}
          sub="per resident, per month"
        />
      </div>

      <p style={{ fontSize: 19, lineHeight: 1.6, color: "#302b26", margin: "0 0 22px" }}>
        {band.confirmed
          ? `Typical rates in ${band.label} for a private room with moderate care. Heavier care costs more.`
          : `Medicaid rates for ${county} County by care level. Private-pay figures are coming.`}
        {beds ? ` This home is licensed for ${beds} residents.` : ""}
      </p>

      <div style={{ display: "grid", gap: 12 }}>
        {lead !== "seller" && <Btn to={`/afh-club/afh-roi-calculator${q}`}>Buying? See your return</Btn>}
        {lead !== "buyer" && <Btn to={`/afh-club/afh-valuation-estimator${q}`}>Selling? See what it's worth</Btn>}
      </div>

      <p style={{ fontSize: 18, margin: "20px 0 0", textAlign: "center" }}>
        <Link to="/afh-club/cost-by-location" className="rpp-btn-link" style={{ color: GREEN, fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 4 }}>
          Look up rates for any city or county
        </Link>
      </p>
    </div>
  );
};

export default AFHRunTheNumbers;
