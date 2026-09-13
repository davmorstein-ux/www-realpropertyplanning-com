import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { countyIndex, countiesChecked, countySlug } from "@/data/afh/directory";
import {
  AFH_MEDICAID_RATES,
  AFH_RATE_REGION_LABELS,
  medicaidRange,
  monthly,
  rateRegionForCounty,
} from "@/data/afhMedicaidRates";
import { privatePayBandForCounty } from "@/data/afhPrivatePayRanges";
import { cityPageByCity } from "@/data/afhCityPages";

const GREEN = "#0a5648";
const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const money2 = (n: number) => "$" + n.toFixed(2);

interface Place {
  kind: "city" | "county";
  label: string;
  county: string;
  citySlug?: string;
}

const FAQS = [
  {
    question: "What does a Medicaid resident actually pay?",
    answer:
      "The DSHS daily rate is what the state pays the home. A Medicaid resident contributes most of their own monthly income toward that cost and keeps a small personal needs allowance. So a family's out-of-pocket under Medicaid is usually the resident's income, not the rate shown here; the rate matters because it is what makes a home willing to accept a Medicaid placement at a given care level.",
  },
  {
    question: "Why do King, Pierce, and Snohomish have a higher rate?",
    answer:
      "DSHS pays a 'High Cost' schedule in those three counties and a 'Standard Cost' schedule everywhere else, reflecting labor and housing costs. Within a region the rate depends only on the resident's CARE classification (A Low through E High), which a DSHS case manager assigns after an assessment.",
  },
  {
    question: "Where do the private-pay ranges come from?",
    answer:
      "There is no public dataset of private-pay AFH rates in Washington. The ranges shown are working bands from David Stein's brokerage and appraisal experience with operating homes, reviewed on the date shown. Individual homes quote their own rates, and memory care or heavy-care needs sit above the top of any band.",
  },
  {
    question: "Does a cheaper county mean a cheaper home?",
    answer:
      "On average, yes, but the spread inside a county is wider than the spread between counties. Care level, private room versus shared, and whether the home has a nurse on staff move the number more than the ZIP code does. Use the county figure to set a budget, then compare specific homes.",
  },
];

const CostByLocation = () => {
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
  const matches = query.trim().length >= 2 ? places.filter((p) => p.label.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 8) : [];

  const county = picked?.county ?? null;
  const region = county ? rateRegionForCounty(county) : null;
  const range = region ? medicaidRange(region) : null;
  const band = county ? privatePayBandForCounty(county) : null;
  const checked = county ? countiesChecked.find((c) => c.county.toLowerCase() === county.toLowerCase()) : null;
  const countyCities = county ? countyIndex.filter((c) => (c.counties ?? [c.county]).some((n) => n.toLowerCase() === county.toLowerCase())) : [];
  const privatePayOnly = countyCities.reduce((s, c) => s + c.privatePay, 0);
  const cityEntry = picked?.kind === "city" ? countyIndex.find((c) => c.citySlug === picked.citySlug) : null;
  const forSale = picked ? cityPageByCity(picked.kind === "city" ? picked.label.split(" (")[0] : "") : null;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Adult Family Home Cost by City and County in Washington | AFH Club"
        description="Look up what an adult family home costs in any Washington city or county: the DSHS Medicaid daily and monthly rate range for that county, typical private-pay ranges, and how many licensed homes there accept Medicaid."
        canonical="https://realpropertyplanning.com/afh-club/cost-by-location"
      />
      <BreadcrumbSchema
        items={[
          { name: "AFH Club", url: "/afh-club" },
          { name: "Calculators", url: "/afh-club/calculators" },
          { name: "Cost by location", url: "/afh-club/cost-by-location" },
        ]}
      />
      <Header />
      <main id="main-content">
        <div style={{ background: GREEN, padding: "6px 24px 4px" }} />
        <HeroBandTitle as="h1">What does an adult family home cost where you're looking?</HeroBandTitle>

        <section className="py-10 md:py-14 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed mb-6">
                Type a city or county. You'll get the DSHS Medicaid rate range for that county (what the state pays a
                home per day and per month, by care level), a typical private-pay range where one has been reviewed,
                and how many licensed homes are there and how many accept Medicaid.
              </p>
              <label htmlFor="place" className="block text-[17px] font-semibold mb-2">
                City or county
              </label>
              <div style={{ position: "relative" }}>
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
                    width: "100%",
                    fontSize: "19px",
                    padding: "14px 16px",
                    minHeight: "52px",
                    border: "1px solid #cfcfcf",
                    borderRadius: "10px",
                    background: "#fff",
                  }}
                />
                {!picked && matches.length > 0 && (
                  <ul
                    role="listbox"
                    style={{
                      position: "absolute",
                      zIndex: 10,
                      left: 0,
                      right: 0,
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      background: "#fff",
                      border: "1px solid #cfcfcf",
                      borderRadius: "10px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                      overflow: "hidden",
                    }}
                  >
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
                            fontSize: "17px",
                            padding: "12px 16px",
                            minHeight: "48px",
                            background: "none",
                            border: "none",
                            borderBottom: "1px solid #eee",
                            cursor: "pointer",
                          }}
                        >
                          {m.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {!picked && query.trim().length >= 2 && matches.length === 0 && (
                <p className="text-foreground/70 text-[16px] mt-2">No Washington city or county matches that. Try the county name.</p>
              )}
            </div>
          </div>
        </section>

        {picked && county && region && range && band && (
          <section className="py-10 md:py-14 bg-background">
            <div className="container px-5 md:px-8">
              <div className="max-w-3xl mx-auto flex flex-col gap-8">
                <div>
                  <h2 className="font-serif text-[26px] md:text-[32px] font-semibold text-navy leading-tight mb-2">
                    {picked.kind === "city" ? `${picked.label.split(" (")[0]}, ` : ""}
                    {county} County
                  </h2>
                  <p className="text-foreground/70 text-[16px]">
                    DSHS rate region: <strong>{AFH_RATE_REGION_LABELS[region]}</strong>
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-cream p-5 md:p-6">
                  <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-2">Medicaid rate range</p>
                  <p className="text-[28px] md:text-[34px] font-bold text-navy leading-tight mb-1">
                    {money(monthly(range.minDaily))} – {money(monthly(range.maxDaily))} per month
                  </p>
                  <p className="text-foreground/80 text-[17px] mb-4">
                    {money2(range.minDaily)} – {money2(range.maxDaily)} per day, from the lightest care level (A Low) to the
                    heaviest (E High). What DSHS pays the home; a Medicaid resident contributes most of their income toward
                    it.
                  </p>
                  <details>
                    <summary className="text-accent underline underline-offset-4 cursor-pointer text-[17px]">All 17 care levels</summary>
                    <table className="w-full text-[16px] mt-3">
                      <thead>
                        <tr className="text-left border-b-2 border-border">
                          <th className="py-1 pr-3">CARE level</th>
                          <th className="py-1 pr-3">Per day</th>
                          <th className="py-1 pr-3">Per month</th>
                        </tr>
                      </thead>
                      <tbody>
                        {AFH_MEDICAID_RATES.levels.map((l) => (
                          <tr key={l.classification} className="border-b border-border">
                            <td className="py-1 pr-3">{l.classification}</td>
                            <td className="py-1 pr-3">{money2(l[region])}</td>
                            <td className="py-1 pr-3">{money(monthly(l[region]))}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </details>
                  <p className="text-foreground/60 text-[14px] mt-3">
                    Source:{" "}
                    <a href={AFH_MEDICAID_RATES.source} target="_blank" rel="noopener noreferrer" className="underline">
                      {AFH_MEDICAID_RATES.sourceLabel}
                    </a>
                    . Base AFH rate only; specialty add-ons excluded.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-background p-5 md:p-6">
                  <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-2">Private pay</p>
                  {band.confirmed ? (
                    <>
                      <p className="text-[28px] md:text-[34px] font-bold text-navy leading-tight mb-1">
                        {money(band.low)} – {money(band.high)} per month
                      </p>
                      <p className="text-foreground/80 text-[17px]">
                        Typical range for a standard-needs resident in {band.label}, from David Stein's experience with
                        operating homes, reviewed {band.reviewed}. Memory care and heavy-care needs run above the top of
                        this range. Each home sets its own rate.
                      </p>
                    </>
                  ) : (
                    <p className="text-foreground/80 text-[17px]">
                      A reviewed private-pay range for {band.label} isn't published yet. Statewide, most adult family
                      homes quote private-pay rates well above the Medicaid rate for the same care level, and memory care
                      sits higher still. Ask each home for its rate sheet.
                    </p>
                  )}
                </div>

                {checked && (
                  <div className="rounded-xl border border-border bg-cream p-5 md:p-6">
                    <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-2">Licensed homes here</p>
                    {checked.facilityCount > 0 ? (
                      <>
                        <p className="text-[17px] md:text-[18px] leading-relaxed mb-3">
                          {cityEntry ? (
                            <>
                              <strong>{cityEntry.city}</strong> has {cityEntry.facilityCount} licensed adult family homes with{" "}
                              {cityEntry.totalBeds} beds; {cityEntry.facilityCount - cityEntry.privatePay} hold a DSHS contract
                              and can accept Medicaid.{" "}
                            </>
                          ) : null}
                          <strong>{county} County</strong> has {checked.facilityCount.toLocaleString()} licensed homes with{" "}
                          {checked.totalBeds.toLocaleString()} beds across {countyCities.length} {countyCities.length === 1 ? "city" : "cities"};{" "}
                          {(checked.facilityCount - privatePayOnly).toLocaleString()} can accept Medicaid and {privatePayOnly} are private-pay only.
                        </p>
                        <p className="text-[17px] flex flex-wrap gap-x-5 gap-y-2">
                          {cityEntry && (
                            <Link to={`/afh-club/homes/${cityEntry.citySlug}`} className="text-accent underline underline-offset-4 font-semibold">
                              Every licensed home in {cityEntry.city} →
                            </Link>
                          )}
                          <Link to={`/afh-club/homes/county/${countySlug(county)}`} className="text-accent underline underline-offset-4 font-semibold">
                            {county} County directory →
                          </Link>
                          {forSale && (
                            <Link to={`/afh-club/for-sale/${forSale.slug}`} className="text-accent underline underline-offset-4">
                              Homes for sale in {forSale.city}
                            </Link>
                          )}
                        </p>
                      </>
                    ) : (
                      <p className="text-[17px] md:text-[18px] leading-relaxed">
                        DSHS records show no licensed adult family homes in {county} County. The Medicaid rate above is what a
                        home there would be paid; families usually look to neighbouring counties.{" "}
                        <Link to={`/afh-club/homes/county/${countySlug(county)}`} className="text-accent underline underline-offset-4">
                          See the county page
                        </Link>
                        .
                      </p>
                    )}
                  </div>
                )}

                <p className="text-foreground/70 text-[15px]">
                  Rates and counts change. Medicaid rates are updated by DSHS each July; directory counts come from DSHS
                  licensing records dated {checked ? checked.retrievedAt : "recently"}. This tool is for budgeting, not a quote.
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="py-10 md:py-14 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-navy leading-tight mb-3">
                Medicaid rates at a glance
              </h2>
              <p className="text-[17px] md:text-[18px] leading-relaxed mb-4">
                DSHS pays two schedules. The figures are the base adult family home rate per resident, from the lightest
                to the heaviest care level, effective {AFH_MEDICAID_RATES.effective}.
              </p>
              <table className="w-full text-[17px]">
                <thead>
                  <tr className="text-left border-b-2 border-border">
                    <th className="py-2 pr-3">Region</th>
                    <th className="py-2 pr-3">Per day</th>
                    <th className="py-2 pr-3">Per month</th>
                  </tr>
                </thead>
                <tbody>
                  {(["highCost", "standard"] as const).map((r) => {
                    const rg = medicaidRange(r);
                    return (
                      <tr key={r} className="border-b border-border">
                        <td className="py-2 pr-3">{AFH_RATE_REGION_LABELS[r]}</td>
                        <td className="py-2 pr-3 whitespace-nowrap">
                          {money2(rg.minDaily)} – {money2(rg.maxDaily)}
                        </td>
                        <td className="py-2 pr-3 whitespace-nowrap">
                          {money(monthly(rg.minDaily))} – {money(monthly(rg.maxDaily))}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <PageFAQ faqs={FAQS} heading="Adult Family Home Costs: Common Questions" eyebrow="Frequently Asked Questions" id="afh-cost-location" />
      </main>
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default CostByLocation;
