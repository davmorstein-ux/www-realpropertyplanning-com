import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { AFHListingCard, AFHListingsDisclaimer } from "@/components/AFHListingCard";
import { soldListings, afhClassification, formatVerifiedDate, latestVerified, listingSlug } from "@/data/afhListings";
import { soldStats } from "@/data/afhInventoryPrerender";

const GREEN = "#0a5648";

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const num = (s: string) => Number(s.replace(/[^0-9.]/g, "")) || 0;

const FAQS = [
  {
    question: "Where do these sales come from?",
    answer:
      "Closed-sale records from the Northwest Multiple Listing Service, filtered for adult family home references and then reviewed one by one. Sales that only described a house as a possible adult family home were removed.",
  },
  {
    question: "Does the sold price include the business?",
    answer:
      "Only when the record says so. Many AFH sales close the real estate and the operating business as two transactions; where the business price was disclosed it is noted on the sale, and the sold price shown is the real estate closing price.",
  },
  {
    question: "Why show price per bedroom?",
    answer:
      "Buyers and lenders value adult family homes largely on resident capacity. Price per bedroom is a rough proxy for that; the licensed capacity, where known, appears on each listing's page.",
  },
  {
    question: "Can David Stein appraise my adult family home?",
    answer:
      "Yes. David Stein is a Washington State certified residential appraiser (Stein Appraisal, license #1702080) and a licensed real estate broker (eXp Realty). Contact him directly for appraisal or brokerage work.",
  },
];

const AFHSold = () => {
  const all = useMemo(() => soldListings(), []);
  const cities = useMemo(() => [...new Set(all.map((l) => l.city))].sort(), [all]);
  const classes = useMemo(() => [...new Set(all.map(afhClassification))].sort(), [all]);
  const [city, setCity] = useState("all");
  const [cls, setCls] = useState("all");

  const shown = all.filter((l) => (city === "all" || l.city === city) && (cls === "all" || afhClassification(l) === cls));
  const stats = soldStats(shown);
  const verified = latestVerified(all);

  const selectStyle: React.CSSProperties = {
    fontSize: "17px",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #cfcfcf",
    background: "#fff",
    minHeight: "44px",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Adult Family Home Sales in Washington — Sold Prices & Comps | AFH Club"
        description="Closed adult family home sales across Washington State with sold price, sold price per bedroom, size, licensing status at sale, and whether the business conveyed. NWMLS records reviewed by David Stein, certified residential appraiser."
        canonical="https://realpropertyplanning.com/afh-club/sold"
      />
      <BreadcrumbSchema
        items={[
          { name: "AFH Club", url: "/afh-club" },
          { name: "Listings", url: "/afh-club/listings" },
          { name: "Sold", url: "/afh-club/sold" },
        ]}
      />
      <Header />
      <main id="main-content">
        <div style={{ background: GREEN, padding: "6px 24px 4px" }} />
        <HeroBandTitle as="h1">Adult Family Home Sales in Washington</HeroBandTitle>

        <section className="py-10 md:py-14 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="rounded-xl border border-border bg-background p-5 md:p-6 mb-8">
                <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-2">Quick Answer</p>
                <h2 className="font-serif text-[22px] md:text-[26px] font-semibold text-navy leading-tight mb-2">
                  What do adult family homes sell for in Washington?
                </h2>
                <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed">
                  This page lists closed adult family home sales in Washington State from NWMLS records, each reviewed to
                  confirm the home was licensed, formerly licensed, or WABO-approved rather than merely marketed as an AFH
                  opportunity. Every sale shows the sold price, last list price, sold price per bedroom, size, licensing
                  status at the time of sale, and whether the operating business conveyed.
                </p>
              </div>
              <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed mb-4">
                Adult family homes trade differently from ordinary houses. A licensed, occupied home carries an income
                stream, a fire-sprinkler system, widened doors and roll-in showers, and often a caregiver suite, and buyers
                pay for that whether or not the business is included in the deed. A formerly licensed home or a
                WABO-approved house that was never licensed is a different purchase, which is why each sale below is
                labelled by its status at closing.
              </p>
              <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed">
                David Stein, a Washington State certified residential appraiser (Stein Appraisal), reviewed each record
                against the listing remarks and the DSHS licensing locator.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-background">
          <div className="container px-5 md:px-8">
            <div className="max-w-[1000px] mx-auto">
              <div className="text-center mb-6">
                <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-3">Closed sales</p>
                <h2 className="font-serif text-[26px] md:text-[34px] font-semibold text-navy leading-tight">
                  {all.length} adult family home sales
                  {stats.earliest && stats.latest
                    ? `, ${formatVerifiedDate(stats.earliest)} – ${formatVerifiedDate(stats.latest)}`
                    : ""}
                </h2>
                {verified && (
                  <p className="text-foreground/70 text-[16px] mt-3">Records verified {formatVerifiedDate(verified)}</p>
                )}
              </div>

              <div className="flex flex-wrap gap-3 justify-center mb-6" role="group" aria-label="Filter sales">
                <label className="text-[17px]">
                  <span className="sr-only">City</span>
                  <select value={city} onChange={(e) => setCity(e.target.value)} style={selectStyle} aria-label="Filter by city">
                    <option value="all">All cities</option>
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-[17px]">
                  <span className="sr-only">Classification</span>
                  <select value={cls} onChange={(e) => setCls(e.target.value)} style={selectStyle} aria-label="Filter by classification">
                    <option value="all">All classifications</option>
                    {classes.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {stats.count > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-3">
                  {[
                    ["Sales shown", String(stats.count)],
                    ["Median sold price", stats.medianSold !== null ? money(stats.medianSold) : "—"],
                    ["Median $ per bedroom", stats.medianPerBed !== null ? money(stats.medianPerBed) : "—"],
                    ["Median $ per sq ft", stats.medianPerSqft !== null ? money(stats.medianPerSqft) : "—"],
                    ["Median days on market", stats.medianDaysOnMarket !== null ? String(Math.round(stats.medianDaysOnMarket)) : "—"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-lg border border-border bg-cream p-3">
                      <div className="text-[13px] uppercase tracking-wider text-foreground/70">{k}</div>
                      <div className="text-[22px] font-bold text-navy">{v}</div>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-foreground/70 text-[15px] mb-8">
                Per-bedroom figures use the listed bedroom count, not licensed capacity. Sold price is the real estate
                closing price; business prices, where disclosed, are noted on each sale.
              </p>

              {shown.length > 0 && (
                <div className="overflow-x-auto mb-10">
                  <table className="w-full text-[16px]">
                    <thead>
                      <tr className="text-left border-b-2 border-border">
                        <th className="py-2 pr-3">Closed</th>
                        <th className="py-2 pr-3">Location</th>
                        <th className="py-2 pr-3">Sold</th>
                        <th className="py-2 pr-3">Last list</th>
                        <th className="py-2 pr-3">Beds</th>
                        <th className="py-2 pr-3">Sq ft</th>
                        <th className="py-2 pr-3">$/bed</th>
                        <th className="py-2 pr-3">Classification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shown.map((l) => {
                        const sp = l.soldPrice ? num(l.soldPrice) : 0;
                        return (
                          <tr key={l.id} className="border-b border-border">
                            <td className="py-2 pr-3 whitespace-nowrap">{l.soldDate ? formatVerifiedDate(l.soldDate) : ""}</td>
                            <td className="py-2 pr-3">
                              <Link to={`/afh-club/listings/${listingSlug(l)}`} className="text-accent underline underline-offset-4">
                                {/upon request|undisclosed/i.test(l.address) ? "Undisclosed" : l.address}, {l.city}
                              </Link>
                            </td>
                            <td className="py-2 pr-3 whitespace-nowrap font-semibold">{l.soldPrice}</td>
                            <td className="py-2 pr-3 whitespace-nowrap">{l.price}</td>
                            <td className="py-2 pr-3">{l.beds}</td>
                            <td className="py-2 pr-3 whitespace-nowrap">{l.sqft}</td>
                            <td className="py-2 pr-3 whitespace-nowrap">{sp && l.beds ? money(sp / l.beds) : ""}</td>
                            <td className="py-2 pr-3">{afhClassification(l)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="flex flex-col gap-4">
                {shown.map((l, i) => (
                  <AFHListingCard key={l.id} listing={l} index={i} total={shown.length} />
                ))}
                {shown.length === 0 && (
                  <p className="text-center text-foreground/80 text-[17px]">No sales match those filters.</p>
                )}
                <AFHListingsDisclaimer />
              </div>

              <p className="text-[18px] mt-8">
                <Link to="/afh-club/listings" className="text-accent underline underline-offset-4 font-semibold">
                  Adult family homes currently for sale in Washington →
                </Link>
              </p>
            </div>
          </div>
        </section>

        <PageFAQ faqs={FAQS} heading="Adult Family Home Sales: Common Questions" eyebrow="Frequently Asked Questions" id="afh-sold" />
      </main>
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default AFHSold;
