/**
 * One edition of the Washington AFH Market Report (Oct 6, 2026). Every figure
 * comes from the frozen edition file (src/data/afh/market/<edition>.json) via
 * src/data/afhMarketReport.ts. Route: /afh-club/market-report/:edition.
 */
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import NotFound from "@/pages/NotFound";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import { MKT_CSS, Fig, Section, ReportSignup, RelatedLinks } from "@/components/afh/MarketReportParts";
import {
  EDITIONS, REPORT_HUB, NEW_LICENSES_PATH, editionPath, editionTitle, editionSummary, longDate, usd, num,
} from "@/data/afhMarketReport";

const MarketReportEdition = () => {
  const { edition } = useParams();
  const e = EDITIONS.find((x) => x.edition === edition);
  if (!e) return <NotFound />;
  const title = `Washington Adult Family Home Market Report: ${editionTitle(e)}`;
  const url = `https://realpropertyplanning.com${editionPath(e)}`;
  const s = e.sales;
  const l = e.licensing;
  const d = e.dshs;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: editionSummary(e),
    url,
    datePublished: e.published,
    dateModified: e.published,
    author: articleAuthor,
    publisher: articlePublisher,
    isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
  };

  return (
    <div className="mkt">
      <style dangerouslySetInnerHTML={{ __html: MKT_CSS }} />
      <SEOHead title={`${title} | AFH Club`} description={editionSummary(e).slice(0, 300)} canonical={url} ogType="article" schemaJson={schema} />
      <BreadcrumbSchema
        items={[
          { name: "AFH Club", url: "/afh-club" },
          { name: "Market Report", url: REPORT_HUB },
          { name: editionTitle(e), url: editionPath(e) },
        ]}
      />
      <Header />
      <main id="main-content">
        <HeroBandTitle as="h1">{`AFH Market Report: ${editionTitle(e)}`}</HeroBandTitle>

        <Section>
          <p className="mkt-small" style={{ marginBottom: 10 }}>
            Washington adult family homes · Published {longDate(e.published)} ·{" "}
            <Link className="mkt-link" to={REPORT_HUB}>All editions</Link>
          </p>
          <div className="mkt-lede"><p>{editionSummary(e)}</p></div>
        </Section>

        <Section alt id="licensed-homes">
          <h2 className="mkt-h2">Licensed homes statewide</h2>
          <div className="mkt-figs">
            <Fig n={num(d.homes)} label="licensed adult family homes" />
            <Fig n={num(d.beds)} label="licensed beds" />
            <Fig n={`${d.shares.medicaid}%`} label="accept Medicaid" />
            <Fig n={String(d.counties)} label="counties with at least one home" />
          </div>
          <p>
            DSHS licensing records as of {longDate(d.asOf)}. Homes average {d.avgBeds} beds. {d.shares.dementia}% hold the
            dementia specialty, {d.shares.mentalHealth}% mental health and {d.shares.developmentalDisabilities}% developmental
            disabilities; {d.shares.ecs}% hold an Expanded Community Services contract and {d.shares.sbs}% Specialized
            Behavior Support.
          </p>
          <div className="mkt-tablebox">
            <table className="mkt-table">
              <caption className="mkt-small" style={{ textAlign: "left", padding: "0 0 6px" }}>Largest counties by number of licensed homes</caption>
              <thead><tr><th scope="col">County</th><th scope="col" className="n">Homes</th><th scope="col" className="n">Beds</th></tr></thead>
              <tbody>
                {d.topCounties.map((c) => (
                  <tr key={c.slug}>
                    <td><Link className="mkt-link" to={`/afh-club/homes/county/${c.slug}`}>{c.county}</Link></td>
                    <td className="n">{num(c.homes)}</td>
                    <td className="n">{num(c.beds)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="licensing-changes">
          <h2 className="mkt-h2">New licenses, ownership changes and closures</h2>
          <p>
            {l.counties.join(", ")} counties, {longDate(l.from)} to {longDate(l.to)}. These three counties hold about two
            thirds of the state&apos;s homes; statewide comparisons begin with the next DSHS download.
          </p>
          <div className="mkt-figs">
            <Fig n={String(l.newHomes)} label="newly licensed homes" />
            <Fig n={String(l.ownershipChanges)} label="new licenses at the same address (usually a change of ownership)" />
            <Fig n={String(l.closed)} label="licenses that ended" />
            <Fig n={String(l.newHomes - l.closed)} label="net change in homes" />
          </div>
          <div className="mkt-tablebox">
            <table className="mkt-table">
              <thead><tr><th scope="col">County</th><th scope="col" className="n">New</th><th scope="col" className="n">Ownership changes</th><th scope="col" className="n">Ended</th></tr></thead>
              <tbody>
                {l.byCounty.map((c) => (
                  <tr key={c.county}><td>{c.county}</td><td className="n">{c.newHomes}</td><td className="n">{c.ownershipChanges}</td><td className="n">{c.closed}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Every new home and ownership change, with links to each home&apos;s licensing record:{" "}
            <Link className="mkt-link" to={NEW_LICENSES_PATH}>newly licensed adult family homes</Link>.
          </p>
        </Section>

        <Section alt id="sales">
          <h2 className="mkt-h2">Adult family home sales</h2>
          <p>
            Sales closed between {longDate(s.since)} and {longDate(s.asOf)}, from the NWMLS adult family home sales reviewed
            and classified on AFH Club.
          </p>
          <div className="mkt-figs">
            <Fig n={String(s.sold.count)} label="properties sold" />
            <Fig n={usd(s.sold.medianPrice)} label="median sale price" />
            <Fig n={`${s.sold.medianDaysOnMarket} days`} label="median time on market" />
            <Fig n={`${s.onMarket} + ${s.pending}`} label={`on the market + pending, ${s.onMarketCities} cities`} />
          </div>
          <div className="mkt-tablebox">
            <table className="mkt-table">
              <thead><tr><th scope="col">Type of property</th><th scope="col" className="n">Sales</th><th scope="col" className="n">Median price</th><th scope="col" className="n">Median days on market</th></tr></thead>
              <tbody>
                <tr><td>Licensed at the time of sale</td><td className="n">{s.soldLicensed.count}</td><td className="n">{usd(s.soldLicensed.medianPrice)}</td><td className="n">{s.soldLicensed.medianDaysOnMarket}</td></tr>
                <tr><td>Former, AFH-ready or other</td><td className="n">{s.soldOther.count}</td><td className="n">{usd(s.soldOther.medianPrice)}</td><td className="n">{s.soldOther.medianDaysOnMarket}</td></tr>
                <tr><td><strong>All</strong></td><td className="n"><strong>{s.sold.count}</strong></td><td className="n"><strong>{usd(s.sold.medianPrice)}</strong></td><td className="n"><strong>{s.sold.medianDaysOnMarket}</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Prices ranged from {usd(s.sold.lowPrice)} to {usd(s.sold.highPrice)}. {s.soldWithBusiness} of the {s.sold.count} sold
            with the operating business included in the price. Sales by quarter:{" "}
            {s.byQuarter.map((q) => `${q.quarter} ${q.count}`).join(", ")}. Most sales: {s.topCities.map((c) => `${c.city} (${c.count})`).join(", ")}.
          </p>
          <p>
            Every sale, with its classification and price: <Link className="mkt-link" to="/afh-club/sold">recent adult family home sales</Link>.
            What&apos;s on the market now: <Link className="mkt-link" to="/afh-club/listings">adult family homes for sale</Link>.
          </p>
        </Section>

        <Section id="method">
          <h2 className="mkt-h2">About these figures</h2>
          <div className="mkt-note">
            <p className="mkt-small" style={{ marginBottom: 10 }}>
              Licensing figures come from DSHS adult family home licensing records, downloaded and compared by Real Property
              Planning ({l.from === "2026-08-01" ? "King County records from July 31, 2026, Pierce and Snohomish from August 1" : longDate(l.from)}, against {longDate(l.to)}).
              DSHS issues a new license number at a change of ownership, so a new license at an address where a different
              license ended is counted as an ownership change. That is a best match on the street address.
            </p>
            <p className="mkt-small" style={{ margin: 0 }}>
              Sales figures cover the adult family home sales on the NWMLS that AFH Club has reviewed and classified, not every
              sale in Washington. With a few dozen sales, one or two can move a median, so read them as a direction, not a value
              for any one home. General information, not an appraisal.
            </p>
          </div>
          <h3 className="mkt-h3">Related</h3>
          <RelatedLinks />
        </Section>

        <ReportSignup />
        <BackToAFHClub />
      </main>
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default MarketReportEdition;
