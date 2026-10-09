import type { Lender } from "@/data/afhLenders";

/**
 * One lender from src/data/afhLenders.ts, as shown on the AFH financing pages
 * (How to Finance an AFH, DSCR Loans for Adult Family Homes). Extracted Oct 9,
 * 2026 so every page shows a lender the same way, including the "not yet
 * confirmed" label until David has spoken with the lender.
 */

const NAVY = "#1B3A6B";
const INK = "#141210";

export const fmtLenderDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const LenderCard = ({ lender: l, why }: { lender: Lender; why?: string }) => (
  <div style={{ background: "#faf8f4", border: "1px solid #dccdce", borderRadius: 10, padding: "14px 16px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, alignItems: "baseline" }}>
      <div style={{ fontSize: 20, fontWeight: 700, color: NAVY }}>
        {l.name} <span style={{ fontSize: 16, fontWeight: 600, color: "#3b3733" }}>· {l.location}</span>
      </div>
      <div style={{ fontSize: 15, fontWeight: 700, color: l.verified ? "#15803d" : "#7a4a00", background: l.verified ? "#dcfce7" : "#fef3c7", borderRadius: 999, padding: "3px 10px" }}>
        {l.verified ? `Confirmed ${fmtLenderDate(l.verified)}` : "From published information — not yet confirmed"}
      </div>
    </div>
    {why && <div style={{ fontSize: 17, lineHeight: 1.55, color: INK, marginTop: 8, fontWeight: 700 }}>{why}</div>}
    {l.publishedTerms && (
      <div style={{ fontSize: 17, lineHeight: 1.55, color: INK, marginTop: 8 }}>
        {l.publishedTerms} <span style={{ color: "#3b3733" }}>(lender's published terms as of {fmtLenderDate(l.termsAsOf)})</span>
      </div>
    )}
    <div style={{ fontSize: 17, lineHeight: 1.55, color: INK, marginTop: 6 }}><strong>Best fit:</strong> {l.bestFit}</div>
    {l.note && <div style={{ fontSize: 16, color: "#7a4a00", marginTop: 6 }}>{l.note}</div>}
    {(l.contacts.length > 0 || l.phone) && (
      <div style={{ fontSize: 17, color: INK, marginTop: 8, lineHeight: 1.6 }}>
        {l.contacts.map((c) => (
          <div key={c.name}>
            <strong>{c.name}</strong>{c.role ? `, ${c.role}` : ""}{c.phone ? ` · ${c.phone}` : ""}{c.nmls ? ` · NMLS ${c.nmls}` : ""}
          </div>
        ))}
        {l.phone && <div>{l.phone}</div>}
      </div>
    )}
  </div>
);

export default LenderCard;
