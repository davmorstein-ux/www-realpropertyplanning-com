import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import AuthorByline from "@/components/AuthorByline";
import PageFAQ from "@/components/PageFAQ";
import stats from "@/data/afh/stats.json";

/**
 * Washington Adult Family Homes by the Numbers (Sept 28, 2026).
 *
 * Every figure comes from src/data/afh/stats.json, which
 * scripts/build-afh-stats.mjs computes from the DSHS locator data behind the
 * directory. Nothing on this page is typed in by hand: refresh the directory,
 * run the script, and the page, the CSV, and the prerendered HTML all follow.
 * src/test/afhStats.test.ts fails if stats.json is stale.
 *
 * Wording rules: these are counts of what DSHS publishes. A specialty
 * designation is training-based, not a quality rating; a contract listed in
 * the locator is not proof it is funded today (Meaningful Day is the example).
 */

const PATH = "/afh-club/washington-afh-data";
const CANONICAL = `https://realpropertyplanning.com${PATH}`;
const CSV = "/data/washington-afh-by-county.csv";
const S = stats.state;
const n = (x: number) => x.toLocaleString("en-US");
const p = (x: number) => (x >= 99.95 ? "100%" : `${x.toFixed(1)}%`);
const share = (part: number, whole: number) => (whole ? (part / whole) * 100 : 0);
const fmtDate = (iso: string) => new Date(iso + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
const sameMonth = stats.retrievedFrom.slice(0, 7) === stats.retrievedTo.slice(0, 7);
const RETRIEVED =
  stats.retrievedFrom === stats.retrievedTo
    ? fmtDate(stats.retrievedTo)
    : sameMonth
      ? fmtDate(stats.retrievedFrom).replace(/,\s*\d{4}$/, "") + `–${Number(stats.retrievedTo.slice(8))}, ${stats.retrievedTo.slice(0, 4)}`
      : `${fmtDate(stats.retrievedFrom)} to ${fmtDate(stats.retrievedTo)}`;

const sixBed = stats.bedSizes.find((b) => b.beds === 6);
const sevenEight = stats.bedSizes.filter((b) => b.beds >= 7).reduce((s, b) => s + b.homes, 0);
const underSix = stats.bedSizes.filter((b) => b.beds < 6).reduce((s, b) => s + b.homes, 0);
const byHomes = [...stats.counties].filter((c) => c.homes > 0).sort((a, b) => b.homes - a.homes);
const top3 = byHomes.slice(0, 3);
const top3Share = share(top3.reduce((s, c) => s + c.homes, 0), S.homes);
const bigCounties = byHomes.filter((c) => c.homes >= 250);
const sbsHigh = [...bigCounties].sort((a, b) => b.sbs / b.homes - a.sbs / a.homes)[0];
const sbsLow = [...bigCounties].sort((a, b) => a.sbs / a.homes - b.sbs / b.homes)[0];
const emptyCounties = stats.counties.filter((c) => c.homes === 0).map((c) => c.county);

const CONTRACT_LABELS: Record<string, { label: string; note?: string }> = {
  adultFamilyHome: { label: "Adult family home (the base Medicaid contract)" },
  expandedCommunityServices: { label: "Expanded Community Services (ECS)" },
  specializedBehaviorSupport: { label: "Specialized Behavior Support (SBS)" },
  ddaMeaningfulDay: { label: "DDA Meaningful Day", note: "Still listed by DSHS; see the note below the table." },
  hcsMeaningfulDay: { label: "HCS Meaningful Day", note: "Still listed by DSHS; see the note below the table." },
  wcfAfhSow: { label: "WA Cares Fund, adult family home" },
  waCaresFundRespite: { label: "WA Cares Fund, respite" },
  privateDutyNursing: { label: "Private duty nursing" },
  ddaSpecialtyPilot: { label: "DDA specialty pilot" },
  afhRespite: { label: "Adult family home respite" },
  wcfPrivateDutyNursing: { label: "WA Cares Fund, private duty nursing" },
};

const FAQS = [
  {
    question: "How many licensed adult family homes are there in Washington?",
    answer: `${n(S.homes)} licensed adult family homes with ${n(S.beds)} licensed beds, in ${S.counties} of Washington's 39 counties, according to the DSHS Adult Family Home Locator as retrieved ${RETRIEVED}.`,
  },
  {
    question: "How many beds does a typical Washington adult family home have?",
    answer: `Six. ${p(sixBed?.share ?? 0)} of licensed homes are licensed for six residents; the statewide average is ${S.avgBeds.toFixed(2)} beds. Only ${n(sevenEight)} homes (${p(share(sevenEight, S.homes))}) are licensed for seven or eight, which requires 24 months of licensed operation first (WAC 388-76-10031).`,
  },
  {
    question: "What share of adult family homes accept Medicaid?",
    answer: `${p(stats.shares.medicaid)} of licensed homes (${n(S.medicaid)}) hold a DSHS Medicaid contract, according to the DSHS locator.`,
  },
  {
    question: "Which counties have the most adult family homes?",
    answer: `${top3.map((c) => `${c.county} (${n(c.homes)})`).join(", ")}. Together they hold ${p(top3Share)} of the state's licensed homes.`,
  },
];

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Washington State licensed adult family homes, by county",
  description: `Counts of licensed adult family homes and beds in Washington State by county, with Medicaid contracts, DSHS specialty designations, and ECS and SBS contracts. Compiled from the DSHS Adult Family Home Locator, retrieved ${RETRIEVED}.`,
  url: CANONICAL,
  creator: { "@type": "Organization", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
  isBasedOn: "https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx",
  spatialCoverage: { "@type": "Place", name: "Washington State, United States" },
  temporalCoverage: stats.retrievedTo,
  dateModified: stats.retrievedTo,
  isAccessibleForFree: true,
  measurementTechnique: "Counts of records published in the DSHS Adult Family Home Locator; see https://realpropertyplanning.com/research-methodology",
  variableMeasured: ["Licensed homes", "Licensed beds", "Homes accepting Medicaid", "Specialty designations", "ECS contracts", "SBS contracts"],
  distribution: [{ "@type": "DataDownload", encodingFormat: "text/csv", contentUrl: `https://realpropertyplanning.com${CSV}` }],
};

const CSS = `
.afhd { background: #ffffff; }
.afhd .afhd-wrap { max-width: 960px; margin: 0 auto; }
.afhd .afhd-narrow { max-width: 760px; }
.afhd p { font-family: 'DM Sans', sans-serif !important; font-size: 18px !important; line-height: 1.7 !important; color: #1c1917 !important; margin: 0 0 14px !important; }
.afhd .afhd-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: #0a5648 !important; margin: 0 0 12px !important; }
.afhd h1.afhd-h1 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(30px, 4.6vw, 46px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #192A19 !important; margin: 0 0 16px !important; text-wrap: balance; }
.afhd h2.afhd-h2 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(24px, 3.2vw, 30px) !important; line-height: 1.2 !important; font-weight: 700 !important; color: #192A19 !important; margin: 0 0 12px !important; text-wrap: balance; }
.afhd .afhd-figs { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0, 1fr)); margin: 24px 0 8px; }
@media (min-width: 820px) { .afhd .afhd-figs { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
.afhd .afhd-fig { background: #f3f6f4; border: 1px solid #d5e0da; border-radius: 10px; padding: 14px 16px; }
.afhd .afhd-fig .afhd-fig-n { font-family: 'DM Sans', sans-serif !important; font-size: clamp(26px, 3.4vw, 34px) !important; font-weight: 700 !important; color: #192A19; line-height: 1.1; font-variant-numeric: tabular-nums; }
.afhd .afhd-fig .afhd-fig-l { font-family: 'DM Sans', sans-serif !important; font-size: 15px !important; color: #2b2825; line-height: 1.35; margin-top: 6px; }
.afhd .afhd-tablewrap { overflow-x: auto; margin: 8px 0 12px; border: 1px solid #e2ddd5; border-radius: 10px; }
.afhd table { width: 100%; border-collapse: collapse; font-family: 'DM Sans', sans-serif; font-size: 16px; color: #1c1917; font-variant-numeric: tabular-nums; }
.afhd th { text-align: left; font-weight: 700; background: #f3f6f4; padding: 10px 12px; border-bottom: 1px solid #d5e0da; white-space: nowrap; }
.afhd td { padding: 9px 12px; border-bottom: 1px solid #eee9e1; vertical-align: middle; }
.afhd tr:last-child td { border-bottom: 0; }
.afhd td.num, .afhd th.num { text-align: right; white-space: nowrap; }
.afhd tr.afhd-total td { font-weight: 700; background: #faf8f4; }
.afhd .afhd-bar { display: block; height: 10px; border-radius: 0 4px 4px 0; background: #0a5648; min-width: 2px; }
.afhd td.afhd-barcell { width: 38%; min-width: 120px; }
.afhd a.afhd-link { color: #1B3A6B !important; text-decoration: underline !important; text-underline-offset: 3px; }
.afhd .afhd-note { background: #faf8f4; border-left: 4px solid #0a5648; border-radius: 8px; padding: 14px 18px; margin: 12px 0 0; }
.afhd .afhd-note p { font-size: 16px !important; margin: 0 !important; }
.afhd .afhd-small { font-size: 15px !important; color: #3f3a35 !important; }
`;

const Bar = ({ value, max }: { value: number; max: number }) => (
  <span className="afhd-bar" style={{ width: `${Math.max(0.5, (value / max) * 100)}%` }} aria-hidden="true" />
);

const Section = ({ bg, children }: { bg: string; children: React.ReactNode }) => (
  <section style={{ background: bg, padding: "48px 16px" }}>
    <div className="afhd-wrap">{children}</div>
  </section>
);

const AFHWashingtonData = () => {
  const maxBed = Math.max(...stats.bedSizes.map((b) => b.homes));
  const maxContract = Math.max(...stats.contracts.map((c) => c.homes));
  return (
    <div className="afhd">
      <style>{CSS}</style>
      <SEOHead
        title="Washington Adult Family Homes by the Numbers | AFH Club"
        description={`${n(S.homes)} licensed adult family homes and ${n(S.beds)} beds in Washington: counts by county, home size, Medicaid, specialty designations, and ECS and SBS contracts, from DSHS data. Free CSV download.`}
        canonical={CANONICAL}
        schemaJson={datasetSchema}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
          { name: "Washington AFHs by the Numbers", url: CANONICAL },
        ]}
      />
      <Header />
      <main id="main-content">
        <section style={{ background: "#edf0f3", padding: "40px 16px 36px", borderBottom: "3px solid #0a5648" }}>
          <div className="afhd-wrap">
            <p className="afhd-eyebrow">AFH Club · Data · DSHS records retrieved {RETRIEVED}</p>
            <h1 className="afhd-h1">Washington Adult Family Homes by the Numbers</h1>
            <p style={{ fontSize: 20 }}>
              Every licensed adult family home in Washington, counted from the state's own records: how many there are,
              where they are, how big they are, and which contracts and specialty designations they hold.
            </p>
            <div className="afhd-figs">
              <div className="afhd-fig"><div className="afhd-fig-n">{n(S.homes)}</div><div className="afhd-fig-l">licensed adult family homes</div></div>
              <div className="afhd-fig"><div className="afhd-fig-n">{n(S.beds)}</div><div className="afhd-fig-l">licensed beds</div></div>
              <div className="afhd-fig"><div className="afhd-fig-n">{p(sixBed?.share ?? 0)}</div><div className="afhd-fig-l">are licensed for six residents</div></div>
              <div className="afhd-fig"><div className="afhd-fig-n">{p(stats.shares.medicaid)}</div><div className="afhd-fig-l">hold a Medicaid contract</div></div>
            </div>
            <p className="afhd-small" style={{ marginTop: 10 }}>
              Source: DSHS Adult Family Home Locator, all 39 counties.{" "}
              <a className="afhd-link" href={CSV} download>Download the county table (CSV)</a> ·{" "}
              <Link className="afhd-link" to="/research-methodology">How the data is gathered</Link>
            </p>
          </div>
        </section>

        <Section bg="#ffffff">
          <div className="afhd-narrow">
            <h2 className="afhd-h2">Five things the numbers show</h2>
            <ol style={{ margin: "0 0 0 22px", padding: 0, fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.7, color: "#1c1917" }}>
              <li style={{ marginBottom: 10 }}>
                <strong>Six beds is the standard.</strong> {p(sixBed?.share ?? 0)} of homes are licensed for six. Only{" "}
                {n(sevenEight)} ({p(share(sevenEight, S.homes))}) hold seven or eight beds, which a home can apply for only after
                24 months of licensed operation. {n(underSix)} homes are licensed for fewer than six.
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong>Three counties hold {p(top3Share)} of the state's homes:</strong>{" "}
                {top3.map((c, i) => `${c.county} (${n(c.homes)})${i < 2 ? ", " : ""}`)}.
                {emptyCounties.length > 0 && ` ${emptyCounties.length} counties have none: ${emptyCounties.join(", ")}.`}
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong>Almost every home takes Medicaid.</strong> {p(stats.shares.medicaid)} hold the base DSHS contract, so a
                home's Medicaid census, and the state's daily rates, drive most of the market.
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong>Dementia and mental health designations are near-universal</strong> ({p(stats.shares.dementia)} and{" "}
                {p(stats.shares.mentalHealth)} of homes). Developmental disabilities is the one that separates homes:{" "}
                {p(stats.shares.developmentalDisabilities)} hold it. These are training-based designations, not quality ratings.
              </li>
              {sbsHigh && sbsLow && (
                <li style={{ marginBottom: 10 }}>
                  <strong>Behavioral contracts vary sharply by region.</strong> In {sbsHigh.county} County,{" "}
                  {p(share(sbsHigh.sbs, sbsHigh.homes))} of homes hold a Specialized Behavior Support (SBS) contract; in{" "}
                  {sbsLow.county} County, {p(share(sbsLow.sbs, sbsLow.homes))}. Statewide, {p(stats.shares.ecs)} hold an Expanded
                  Community Services (ECS) contract and {p(stats.shares.sbs)} hold SBS. These contracts belong to the owner and do
                  not transfer in a sale (see <Link className="afhd-link" to="/afh-club/afh-payment-field-guide">the AFH Payment Field Guide</Link>).
                </li>
              )}
            </ol>
          </div>
        </Section>

        <Section bg="#f7f4ef">
          <h2 className="afhd-h2">Homes by licensed capacity</h2>
          <div className="afhd-tablewrap">
            <table>
              <caption className="sr-only">Licensed adult family homes in Washington by number of licensed beds</caption>
              <thead><tr><th>Licensed beds</th><th className="num">Homes</th><th className="num">Share</th><th aria-hidden="true"></th></tr></thead>
              <tbody>
                {stats.bedSizes.map((b) => (
                  <tr key={b.beds}>
                    <td>{b.beds} beds</td>
                    <td className="num">{n(b.homes)}</td>
                    <td className="num">{p(b.share)}</td>
                    <td className="afhd-barcell"><Bar value={b.homes} max={maxBed} /></td>
                  </tr>
                ))}
                <tr className="afhd-total"><td>All homes</td><td className="num">{n(S.homes)}</td><td className="num">100%</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section bg="#ffffff">
          <h2 className="afhd-h2">Homes by county</h2>
          <p>
            Every county with a licensed home, alphabetically. County names link to that county's directory of homes. The same
            table is available as a <a className="afhd-link" href={CSV} download>CSV file</a>.
          </p>
          <div className="afhd-tablewrap">
            <table>
              <caption className="sr-only">Licensed adult family homes and beds by Washington county, with Medicaid, ECS and SBS contracts</caption>
              <thead>
                <tr>
                  <th>County</th><th className="num">Homes</th><th className="num">Beds</th><th className="num">Share of state</th>
                  <th className="num">Medicaid</th><th className="num">ECS</th><th className="num">SBS</th>
                </tr>
              </thead>
              <tbody>
                {stats.counties.filter((c) => c.homes > 0).map((c) => (
                  <tr key={c.county}>
                    <td><Link className="afhd-link" to={`/afh-club/homes/county/${c.slug}`}>{c.county}</Link></td>
                    <td className="num">{n(c.homes)}</td>
                    <td className="num">{n(c.beds)}</td>
                    <td className="num">{p(share(c.homes, S.homes))}</td>
                    <td className="num">{p(share(c.medicaid, c.homes))}</td>
                    <td className="num">{p(share(c.ecs, c.homes))}</td>
                    <td className="num">{p(share(c.sbs, c.homes))}</td>
                  </tr>
                ))}
                <tr className="afhd-total">
                  <td>Washington</td><td className="num">{n(S.homes)}</td><td className="num">{n(S.beds)}</td><td className="num">100%</td>
                  <td className="num">{p(stats.shares.medicaid)}</td><td className="num">{p(stats.shares.ecs)}</td><td className="num">{p(stats.shares.sbs)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="afhd-small">
            Medicaid, ECS and SBS columns are the share of that county's homes holding the contract. Counties with fewer than about
            20 homes swing widely on one or two homes.
          </p>
        </Section>

        <Section bg="#f7f4ef">
          <h2 className="afhd-h2">Cities with the most licensed homes</h2>
          <div className="afhd-tablewrap">
            <table>
              <caption className="sr-only">The 15 Washington cities with the most licensed adult family homes</caption>
              <thead><tr><th>City</th><th>County</th><th className="num">Homes</th><th className="num">Beds</th></tr></thead>
              <tbody>
                {stats.topCities.map((c) => (
                  <tr key={c.city + c.county}>
                    <td><Link className="afhd-link" to={`/afh-club/homes/${c.citySlug}`}>{c.city}</Link></td>
                    <td>{c.county}</td>
                    <td className="num">{n(c.homes)}</td>
                    <td className="num">{n(c.beds)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="afhd-small">City is the city in the home's DSHS mailing address, which can differ from the jurisdiction the home sits in.</p>
        </Section>

        <Section bg="#ffffff">
          <h2 className="afhd-h2">DSHS contracts held</h2>
          <p>How many homes the locator lists with each DSHS contract. A home can hold several.</p>
          <div className="afhd-tablewrap">
            <table>
              <caption className="sr-only">Washington adult family homes by DSHS contract type</caption>
              <thead><tr><th>Contract</th><th className="num">Homes</th><th className="num">Share</th><th aria-hidden="true"></th></tr></thead>
              <tbody>
                {stats.contracts.map((c) => (
                  <tr key={c.id}>
                    <td>{CONTRACT_LABELS[c.id]?.label ?? c.id}</td>
                    <td className="num">{n(c.homes)}</td>
                    <td className="num">{c.share < 0.1 ? "<0.1%" : p(c.share)}</td>
                    <td className="afhd-barcell"><Bar value={c.homes} max={maxContract} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="afhd-note">
            <p>
              <strong>About Meaningful Day.</strong> The DSHS locator still lists Meaningful Day contracts for thousands of homes,
              but funding for the HCS Meaningful Day program ended July 1, 2025. A contract listed in the locator is not proof that
              it pays today. Confirm any specialty income with the home's own payment records.
            </p>
          </div>
        </Section>

        <Section bg="#f7f4ef">
          <div className="afhd-narrow">
            <h2 className="afhd-h2">What this data can and cannot tell you</h2>
            <p>
              These are counts of what DSHS publishes in its Adult Family Home Locator, for all 39 counties, retrieved {RETRIEVED}. They
              are a snapshot: homes are licensed, change hands, and close every week. Nothing here is estimated, and nothing is a rating.
            </p>
            <p>
              A specialty designation means the provider has completed DSHS-required specialty training; it says nothing about the
              quality of care. A contract means DSHS lists it for the home. Always confirm a particular home's current license in the{" "}
              <a className="afhd-link" href="https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx" target="_blank" rel="noopener noreferrer">DSHS locator</a>{" "}
              before relying on it.
            </p>
            <p>
              The full method, including how the records are cleaned, is on the{" "}
              <Link className="afhd-link" to="/research-methodology">Research and Data Methodology</Link> page. You may reuse these figures
              with a link to this page as the source.
            </p>
            <p>
              Looking for a specific home? Browse the{" "}
              <Link className="afhd-link" to="/afh-club/homes">directory of every licensed adult family home</Link>, or see{" "}
              <Link className="afhd-link" to="/afh-club/listings">adult family homes for sale</Link>.
            </p>
          </div>
        </Section>

        <PageFAQ faqs={FAQS} heading="Washington AFH Data: Common Questions" eyebrow="Frequently Asked Questions" id="afh-data" />
      </main>
      <AuthorByline />
      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default AFHWashingtonData;
