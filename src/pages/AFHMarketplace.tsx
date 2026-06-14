import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Plus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import HeroBandTitle from "@/components/HeroBandTitle";

type ListingType = "Property" | "Business" | "Both";

type Listing = {
  id: number;
  title: string;
  location: string;
  county: string;
  type: ListingType;
  price: number;
  capacity: number;
  sqft: number | null;
  occupancy: number | null;
  annualRev: number | null;
  annualNet: number | null;
  dshsLicensed: boolean;
  medicaidCertified: boolean;
  yearsOperating: number | null;
  reasonForSale: string | null;
  newListing: boolean;
};

const listings: Listing[] = [
  { id: 1, title: "6-bed AFH — fully licensed & staffed", location: "Renton", county: "King", type: "Both", price: 1250000, capacity: 6, sqft: 3400, occupancy: 100, annualRev: 312000, annualNet: 148000, dshsLicensed: true, medicaidCertified: true, yearsOperating: 7, reasonForSale: "Retirement", newListing: true },
  { id: 2, title: "4-bed AFH property — turnkey condition", location: "Lynnwood", county: "Snohomish", type: "Property", price: 720000, capacity: 4, sqft: 2800, occupancy: null, annualRev: null, annualNet: null, dshsLicensed: false, medicaidCertified: false, yearsOperating: null, reasonForSale: null, newListing: false },
  { id: 3, title: "AFH business & license — no property", location: "Tacoma", county: "Pierce", type: "Business", price: 185000, capacity: 4, sqft: null, occupancy: 75, annualRev: 168000, annualNet: 72000, dshsLicensed: true, medicaidCertified: true, yearsOperating: 4, reasonForSale: "Relocating", newListing: true },
  { id: 4, title: "6-bed waterfront AFH — property + ops", location: "Gig Harbor", county: "Pierce", type: "Both", price: 1480000, capacity: 6, sqft: 4100, occupancy: 83, annualRev: 288000, annualNet: 124000, dshsLicensed: true, medicaidCertified: false, yearsOperating: 11, reasonForSale: "Estate sale", newListing: false },
  { id: 5, title: "2-bed AFH — ideal first-time buyer", location: "Olympia", county: "Thurston", type: "Both", price: 425000, capacity: 2, sqft: 1900, occupancy: 100, annualRev: 96000, annualNet: 38000, dshsLicensed: true, medicaidCertified: true, yearsOperating: 3, reasonForSale: "Health reasons", newListing: false },
  { id: 6, title: "4-bed AFH property — zoned & ADA ready", location: "Bremerton", county: "Kitsap", type: "Property", price: 540000, capacity: 4, sqft: 2500, occupancy: null, annualRev: null, annualNet: null, dshsLicensed: false, medicaidCertified: false, yearsOperating: null, reasonForSale: null, newListing: true },
];

const TABS: { key: "all" | ListingType; label: string }[] = [
  { key: "all", label: "All listings" },
  { key: "Property", label: "Property only" },
  { key: "Business", label: "Business only" },
  { key: "Both", label: "Property + business" },
];

const COUNTIES = ["All counties", "King", "Snohomish", "Pierce", "Kitsap", "Thurston"];
const CAPACITIES = ["Any capacity", "2 beds", "4 beds", "6 beds"];
const PRICES = ["Any price", "Under $500K", "Under $750K", "Under $1M", "Under $1.5M"];

const fmtMoney = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(2)}M` : `$${(n / 1_000).toFixed(0)}K`;

const typeBadgeClass = (t: ListingType): string => {
  if (t === "Property") return "bg-blue-100 text-blue-800 border-blue-200";
  if (t === "Business") return "bg-emerald-100 text-emerald-800 border-emerald-200";
  return "bg-purple-100 text-purple-800 border-purple-200";
};

const Badge: React.FC<{ className: string; children: React.ReactNode }> = ({ className, children }) => (
  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border ${className}`}>
    {children}
  </span>
);

const Metric: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</div>
    <div className="text-[17px] font-bold text-slate-800 mt-0.5">{value}</div>
  </div>
);

const AFHMarketplace: React.FC = () => {
  const [tab, setTab] = useState<"all" | ListingType>("all");
  const [county, setCounty] = useState(COUNTIES[0]);
  const [capacity, setCapacity] = useState(CAPACITIES[0]);
  const [maxPrice, setMaxPrice] = useState(PRICES[0]);

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      if (tab !== "all" && l.type !== tab) return false;
      if (county !== "All counties" && l.county !== county) return false;
      if (capacity === "2 beds" && l.capacity !== 2) return false;
      if (capacity === "4 beds" && l.capacity !== 4) return false;
      if (capacity === "6 beds" && l.capacity !== 6) return false;
      if (maxPrice === "Under $500K" && l.price >= 500_000) return false;
      if (maxPrice === "Under $750K" && l.price >= 750_000) return false;
      if (maxPrice === "Under $1M" && l.price >= 1_000_000) return false;
      if (maxPrice === "Under $1.5M" && l.price >= 1_500_000) return false;
      return true;
    });
  }, [tab, county, capacity, maxPrice]);

  const selectClass =
    "appearance-none bg-white border border-slate-300 rounded-lg px-4 py-2.5 pr-9 text-[15px] font-medium text-slate-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1a7a78]/40 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path fill=%22%236b7a87%22 d=%22M6 8L0 0h12z%22/></svg>')] bg-no-repeat bg-[right_14px_center]";

  return (
    <>
      <SEOHead
        title="AFH Marketplace — Washington Adult Family Homes for Sale | Real Property Planning"
        description="Washington State Adult Family Homes for sale — property, business, or both. Filter by county, capacity, and price."
        canonical="https://realpropertyplanning.com/afh-marketplace"
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-slate-50" style={{ paddingTop: 80 }}>
        <section className="bg-white border-b border-slate-200 py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-6">
            <HeroBandTitle>AFH Marketplace</HeroBandTitle>
            <p className="text-[17px] md:text-[19px] text-slate-600 mt-3 max-w-3xl leading-relaxed">
              Washington State Adult Family Homes for sale — property, business, or both.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <div role="tablist" className="flex flex-wrap gap-1 border-b border-slate-200">
              {TABS.map((t) => {
                const active = tab === t.key;
                return (
                  <button
                    key={t.key}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setTab(t.key)}
                    className={`px-5 py-4 text-[15px] font-semibold border-b-[3px] -mb-px transition-colors ${
                      active ? "border-[#1a7a78] text-[#1a7a78]" : "border-transparent text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-3 py-4">
              <select aria-label="County" value={county} onChange={(e) => setCounty(e.target.value)} className={selectClass}>
                {COUNTIES.map((c) => <option key={c}>{c}</option>)}
              </select>
              <select aria-label="Capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} className={selectClass}>
                {CAPACITIES.map((c) => <option key={c}>{c}</option>)}
              </select>
              <select aria-label="Max price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className={selectClass}>
                {PRICES.map((p) => <option key={p}>{p}</option>)}
              </select>
              <div className="ml-auto text-[15px] text-slate-600 font-medium">
                Showing {filtered.length} listing{filtered.length === 1 ? "" : "s"}
              </div>
            </div>
          </div>
        </section>

        {/* Listings */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          {filtered.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-xl p-12 text-center text-[17px] text-slate-600">
              No listings match your filters — try adjusting your search.
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {filtered.map((l) => {
                const showBusiness = l.type === "Business" || l.type === "Both";
                return (
                  <article key={l.id} className="bg-white border border-slate-200 rounded-xl p-6 md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h2 className="text-[20px] md:text-[22px] font-bold text-slate-900 leading-tight">
                          {l.title}
                        </h2>
                        <div className="flex items-center gap-1.5 mt-1.5 text-[15px] text-slate-600">
                          <MapPin size={14} className="text-[#1a7a78]" />
                          {l.location}, {l.county} County
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[28px] md:text-[32px] font-bold text-[#1a7a78] leading-none tracking-tight">
                          {fmtMoney(l.price)}
                        </div>
                        <div className="text-xs text-slate-500 mt-1 font-medium">Asking price</div>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge className={typeBadgeClass(l.type)}>{l.type}</Badge>
                      {l.dshsLicensed && <Badge className="bg-teal-100 text-teal-800 border-teal-200">DSHS Licensed</Badge>}
                      {l.medicaidCertified && <Badge className="bg-amber-100 text-amber-800 border-amber-200">Medicaid Certified</Badge>}
                      {l.newListing && <Badge className="bg-red-100 text-red-800 border-red-200">New Listing</Badge>}
                    </div>

                    {/* Metrics */}
                    <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-lg">
                      {l.type === "Property" ? (
                        <>
                          <Metric label="Square feet" value={l.sqft ? l.sqft.toLocaleString() : "—"} />
                          <Metric label="Capacity" value={`${l.capacity} beds`} />
                        </>
                      ) : (
                        <>
                          <Metric label="Annual revenue" value={l.annualRev ? fmtMoney(l.annualRev) : "—"} />
                          <Metric label="Net income" value={l.annualNet ? fmtMoney(l.annualNet) : "—"} />
                          <Metric label="Occupancy" value={l.occupancy != null ? `${l.occupancy}%` : "—"} />
                          <Metric label="Years operating" value={l.yearsOperating != null ? String(l.yearsOperating) : "—"} />
                        </>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                      <div className="text-[15px] text-slate-600">
                        {l.reasonForSale ? (
                          <>Reason for sale: <span className="font-semibold text-slate-800">{l.reasonForSale}</span></>
                        ) : (
                          <>{l.county} County · {l.capacity} beds</>
                        )}
                      </div>
                      <Link
                        to={`/contact?listing=${l.id}`}
                        className="inline-flex items-center gap-2 bg-[#1a7a78] hover:bg-[#155f5d] text-white text-[15px] font-semibold px-5 py-2.5 rounded-lg transition-colors"
                      >
                        Inquire
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Seller CTA band */}
          <div className="mt-10 bg-gradient-to-r from-[#1a7a78] to-[#155f5d] text-white rounded-xl p-8 md:p-10 flex flex-wrap items-center justify-between gap-5">
            <div className="max-w-2xl">
              <h3 className="text-[22px] md:text-[24px] font-bold leading-tight">
                Thinking of selling your AFH?
              </h3>
              <p className="text-[17px] text-white/90 mt-2 leading-relaxed">
                Contact David Stein with eXp Realty first to discuss your goals, timeline, and options. A signed listing agreement is required before any property is marketed.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1a7a78] text-[15px] font-bold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AFHMarketplace;
