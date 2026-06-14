import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Bed, DollarSign, TrendingUp, Filter, Plus, Sparkles, ShieldCheck, BadgeCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const TEAL = "#1a7a78";
const SLATE = "#2c3e50";
const GRAY_BG = "#f4f6f7";
const GRAY_BORDER = "#dde3e8";
const GRAY_TEXT = "#6b7a87";
const WHITE = "#ffffff";
const GOLD = "#b8860b";

type ListingType = "property" | "business" | "both";

interface Listing {
  id: number;
  title: string;
  city: string;
  county: string;
  type: ListingType;
  capacity: number;
  price: number;
  revenue: number;
  noi: number;
  capRate: number;
  occupancy: number;
  dshs: boolean;
  medicaid: boolean;
  isNew: boolean;
}

const SAMPLE_LISTINGS: Listing[] = [
  { id: 1, title: "Established 6-Bed AFH — Turnkey", city: "Edmonds", county: "Snohomish", type: "both", capacity: 6, price: 1850000, revenue: 432000, noi: 168000, capRate: 9.1, occupancy: 100, dshs: true, medicaid: true, isNew: true },
  { id: 2, title: "Premium AFH Property — Sound Views", city: "Kirkland", county: "King", type: "property", capacity: 8, price: 2250000, revenue: 0, noi: 0, capRate: 0, occupancy: 0, dshs: true, medicaid: false, isNew: false },
  { id: 3, title: "Operating Business Only — 2 AFH Lease", city: "Lynnwood", county: "Snohomish", type: "business", capacity: 12, price: 685000, revenue: 720000, noi: 215000, capRate: 31.4, occupancy: 92, dshs: true, medicaid: true, isNew: true },
  { id: 4, title: "Newly Licensed 6-Bed", city: "Renton", county: "King", type: "both", capacity: 6, price: 1495000, revenue: 360000, noi: 124000, capRate: 8.3, occupancy: 83, dshs: true, medicaid: false, isNew: true },
  { id: 5, title: "Memory Care Specialty AFH", city: "Bellevue", county: "King", type: "both", capacity: 6, price: 2100000, revenue: 540000, noi: 198000, capRate: 9.4, occupancy: 100, dshs: true, medicaid: true, isNew: false },
  { id: 6, title: "Property Only — AFH Build-Ready", city: "Tacoma", county: "Pierce", type: "property", capacity: 8, price: 1195000, revenue: 0, noi: 0, capRate: 0, occupancy: 0, dshs: false, medicaid: false, isNew: false },
  { id: 7, title: "Business Only — 6 Bed Operation", city: "Federal Way", county: "King", type: "business", capacity: 6, price: 425000, revenue: 396000, noi: 132000, capRate: 31.1, occupancy: 100, dshs: true, medicaid: true, isNew: false },
  { id: 8, title: "Dual-Home Campus Opportunity", city: "Puyallup", county: "Pierce", type: "both", capacity: 12, price: 3250000, revenue: 864000, noi: 312000, capRate: 9.6, occupancy: 95, dshs: true, medicaid: true, isNew: true },
];

const TABS: { key: "all" | ListingType; label: string }[] = [
  { key: "all", label: "All listings" },
  { key: "property", label: "Property only" },
  { key: "business", label: "Business only" },
  { key: "both", label: "Property + business" },
];

const COUNTIES = ["All counties", "King", "Snohomish", "Pierce"];
const CAPACITIES = ["Any capacity", "6 beds", "8 beds", "12+ beds"];
const PRICES = ["Any price", "Under $750K", "$750K – $1.5M", "$1.5M – $2.5M", "Over $2.5M"];

const fmtMoney = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(2)}M` : `$${(n / 1000).toFixed(0)}K`;

const Badge: React.FC<{ color: string; bg: string; icon?: React.ReactNode; children: React.ReactNode }> = ({
  color, bg, icon, children,
}) => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700,
    letterSpacing: "0.05em", textTransform: "uppercase", color, backgroundColor: bg,
    padding: "3px 8px", borderRadius: 100, border: `1px solid ${color}33`,
  }}>{icon}{children}</span>
);

const Metric: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
    <div style={{ fontSize: 10, fontWeight: 600, color: GRAY_TEXT, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</div>
    <div style={{ fontSize: 14, fontWeight: 700, color: SLATE }}>{value}</div>
  </div>
);

const AFHMarketplace: React.FC = () => {
  const [tab, setTab] = useState<"all" | ListingType>("all");
  const [county, setCounty] = useState(COUNTIES[0]);
  const [capacity, setCapacity] = useState(CAPACITIES[0]);
  const [price, setPrice] = useState(PRICES[0]);

  const filtered = useMemo(() => {
    return SAMPLE_LISTINGS.filter((l) => {
      if (tab !== "all" && l.type !== tab) return false;
      if (county !== "All counties" && l.county !== county) return false;
      if (capacity === "6 beds" && l.capacity !== 6) return false;
      if (capacity === "8 beds" && l.capacity !== 8) return false;
      if (capacity === "12+ beds" && l.capacity < 12) return false;
      if (price === "Under $750K" && l.price >= 750000) return false;
      if (price === "$750K – $1.5M" && (l.price < 750000 || l.price > 1500000)) return false;
      if (price === "$1.5M – $2.5M" && (l.price < 1500000 || l.price > 2500000)) return false;
      if (price === "Over $2.5M" && l.price <= 2500000) return false;
      return true;
    });
  }, [tab, county, capacity, price]);

  const selectStyle: React.CSSProperties = {
    appearance: "none", backgroundColor: WHITE, border: `1px solid ${GRAY_BORDER}`,
    borderRadius: 8, padding: "10px 36px 10px 14px", fontSize: 14, fontWeight: 500,
    color: SLATE, fontFamily: "Inter, system-ui, sans-serif", cursor: "pointer",
    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='%236b7a87' d='M6 8L0 0h12z'/></svg>\")",
    backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center",
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: GRAY_BG, fontFamily: "Inter, system-ui, sans-serif" }}>
      <SEOHead
        title="AFH Marketplace — Adult Family Home Listings | Real Property Planning"
        description="Browse licensed Adult Family Home listings across Washington State. Filter by county, capacity, and price. Property, business, and combined opportunities."
        canonical="https://realpropertyplanning.com/afh-marketplace"
      />
      <Header />
      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* HEADER */}
        <div style={{ backgroundColor: WHITE, borderBottom: `1px solid ${GRAY_BORDER}`, padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1.5rem" }}>
              <div style={{ flex: "1 1 480px" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: "#f0f0f0",
                  color: "#8b1a1a", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", padding: "4px 12px", borderRadius: 100,
                  border: "1px solid #d0c0c0", marginBottom: "0.85rem",
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#8b1a1a" }} />
                  AFH Marketplace
                </span>
                <h1 style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 700, color: SLATE,
                  margin: "0 0 0.7rem", letterSpacing: "-0.02em", lineHeight: 1.2,
                }}>
                  Adult Family Home Listings
                </h1>
                <p style={{ fontSize: 15, color: GRAY_TEXT, lineHeight: 1.7, margin: 0, maxWidth: 620 }}>
                  Licensed AFH property and business opportunities across Washington State. Browse, filter, and connect
                  with operators and brokers — all in one marketplace.
                </p>
              </div>
              <Link
                to="/afh-submit"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: TEAL,
                  color: WHITE, fontSize: 14, fontWeight: 600, padding: "12px 22px",
                  borderRadius: 8, textDecoration: "none", letterSpacing: "0.02em",
                  boxShadow: "0 2px 6px rgba(26,122,120,0.25)",
                }}
              >
                <Plus size={16} />
                Submit a listing
              </Link>
            </div>
          </div>
        </div>

        {/* TABS + FILTERS */}
        <div style={{ backgroundColor: WHITE, borderBottom: `1px solid ${GRAY_BORDER}` }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
            <div role="tablist" style={{ display: "flex", gap: 4, flexWrap: "wrap", borderBottom: `1px solid ${GRAY_BORDER}` }}>
              {TABS.map((t) => {
                const active = tab === t.key;
                return (
                  <button
                    key={t.key}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setTab(t.key)}
                    style={{
                      background: "transparent", border: "none", padding: "16px 18px",
                      fontSize: 14, fontWeight: 600, fontFamily: "inherit",
                      color: active ? TEAL : GRAY_TEXT, cursor: "pointer",
                      borderBottom: `3px solid ${active ? TEAL : "transparent"}`,
                      marginBottom: -1, letterSpacing: "0.01em",
                    }}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", padding: "1rem 0" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, color: GRAY_TEXT, fontSize: 13, fontWeight: 600 }}>
                <Filter size={14} /> Filter:
              </div>
              <select value={county} onChange={(e) => setCounty(e.target.value)} style={selectStyle} aria-label="County">
                {COUNTIES.map((c) => <option key={c}>{c}</option>)}
              </select>
              <select value={capacity} onChange={(e) => setCapacity(e.target.value)} style={selectStyle} aria-label="Capacity">
                {CAPACITIES.map((c) => <option key={c}>{c}</option>)}
              </select>
              <select value={price} onChange={(e) => setPrice(e.target.value)} style={selectStyle} aria-label="Price">
                {PRICES.map((p) => <option key={p}>{p}</option>)}
              </select>
              <div style={{ marginLeft: "auto", fontSize: 13, color: GRAY_TEXT, fontWeight: 500 }}>
                {filtered.length} listing{filtered.length === 1 ? "" : "s"}
              </div>
            </div>
          </div>
        </div>

        {/* LISTINGS GRID */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1.5rem 3rem" }}>
          {filtered.length === 0 ? (
            <div style={{ padding: "3rem", textAlign: "center", backgroundColor: WHITE, borderRadius: 10, border: `1px solid ${GRAY_BORDER}`, color: GRAY_TEXT }}>
              No listings match your filters. Try widening your search.
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
              {filtered.map((l) => (
                <article key={l.id} style={{
                  backgroundColor: WHITE, border: `1px solid ${GRAY_BORDER}`, borderRadius: 10,
                  padding: "1.25rem 1.25rem 1rem", display: "flex", flexDirection: "column", gap: "0.85rem",
                }}>
                  {/* Badges */}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {l.isNew && (
                      <Badge color={GOLD} bg="#fdf6e3" icon={<Sparkles size={10} />}>New listing</Badge>
                    )}
                    {l.dshs && (
                      <Badge color={TEAL} bg="#e6f2f1" icon={<ShieldCheck size={10} />}>DSHS Licensed</Badge>
                    )}
                    {l.medicaid && (
                      <Badge color="#2d7a3a" bg="#eaf5ec" icon={<BadgeCheck size={10} />}>Medicaid Certified</Badge>
                    )}
                  </div>

                  {/* Title & location */}
                  <div>
                    <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color: SLATE, margin: "0 0 4px", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                      {l.title}
                    </h2>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: GRAY_TEXT }}>
                      <MapPin size={12} /> {l.city}, {l.county} County
                    </div>
                  </div>

                  {/* Price */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: `1px solid ${GRAY_BORDER}`, paddingTop: "0.85rem" }}>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 600, color: GRAY_TEXT, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        Asking price
                      </div>
                      <div style={{ fontSize: "1.5rem", fontWeight: 700, color: TEAL, letterSpacing: "-0.02em", lineHeight: 1 }}>
                        {fmtMoney(l.price)}
                      </div>
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: GRAY_TEXT, fontWeight: 600 }}>
                      <Bed size={13} /> {l.capacity} beds
                    </div>
                  </div>

                  {/* Financial metrics */}
                  {l.type !== "property" && l.revenue > 0 && (
                    <div style={{
                      display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8,
                      padding: "0.85rem", backgroundColor: GRAY_BG, borderRadius: 8,
                    }}>
                      <Metric label="Revenue" value={fmtMoney(l.revenue)} />
                      <Metric label="NOI" value={fmtMoney(l.noi)} />
                      <Metric label="Cap rate" value={`${l.capRate.toFixed(1)}%`} />
                      <Metric label="Occupancy" value={`${l.occupancy}%`} />
                    </div>
                  )}
                  {l.type === "property" && (
                    <div style={{
                      padding: "0.85rem", backgroundColor: GRAY_BG, borderRadius: 8,
                      fontSize: 12, color: GRAY_TEXT, display: "flex", alignItems: "center", gap: 6,
                    }}>
                      <TrendingUp size={13} style={{ color: TEAL }} />
                      Property only — no operating financials. Buyer brings their own license & operations.
                    </div>
                  )}

                  {/* CTA */}
                  <Link
                    to="/contact"
                    style={{
                      display: "inline-flex", justifyContent: "center", alignItems: "center", gap: 6,
                      backgroundColor: "transparent", color: TEAL, fontSize: 13, fontWeight: 600,
                      padding: "10px 14px", borderRadius: 8, border: `1px solid ${TEAL}55`,
                      textDecoration: "none", marginTop: "auto",
                    }}
                  >
                    <DollarSign size={13} /> Request details
                  </Link>
                </article>
              ))}
            </div>
          )}

          {/* Submit CTA banner */}
          <div style={{
            marginTop: "2.5rem", padding: "1.75rem", backgroundColor: WHITE,
            borderRadius: 10, border: `1px solid ${GRAY_BORDER}`,
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: "1rem",
          }}>
            <div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: SLATE, margin: "0 0 4px" }}>
                Have an AFH to sell?
              </h3>
              <p style={{ fontSize: 14, color: GRAY_TEXT, margin: 0, lineHeight: 1.6 }}>
                List your property, business, or both. Reach verified buyers across Washington State.
              </p>
            </div>
            <Link
              to="/afh-submit"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: TEAL,
                color: WHITE, fontSize: 14, fontWeight: 600, padding: "12px 22px",
                borderRadius: 8, textDecoration: "none",
              }}
            >
              <Plus size={16} /> Submit a listing
            </Link>
          </div>

          <div style={{
            marginTop: "1.5rem", padding: "1rem", fontSize: 11.5, color: GRAY_TEXT,
            lineHeight: 1.7, textAlign: "center",
          }}>
            Sample listings shown for demonstration. All AFH transactions handled in coordination with David Stein,
            WA Licensed Real Estate Broker (eXp Realty · License #113972).
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AFHMarketplace;
