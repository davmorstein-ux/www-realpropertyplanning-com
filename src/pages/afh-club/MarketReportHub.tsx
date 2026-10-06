/**
 * Washington AFH Market Report hub (Oct 6, 2026): the latest edition's key
 * figures and the list of editions. Editions live in src/data/afhMarketReport.ts.
 */
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import { MKT_CSS, Fig, Section, ReportSignup, RelatedLinks } from "@/components/afh/MarketReportParts";
import { EDITIONS, LATEST, REPORT_HUB, editionPath, editionTitle, editionSummary, longDate, usd, num } from "@/data/afhMarketReport";

const URL = `https://realpropertyplanning.com${REPORT_HUB}`;

const MarketReportHub = () => (
  <div className="mkt">
    <style dangerouslySetInnerHTML={{ __html: MKT_CSS }} />
    <SEOHead
      title="Washington Adult Family Home Market Report | AFH Club"
      description="A regular report on Washington adult family homes: licensed homes and beds from DSHS records, new licenses, ownership changes and closures, and adult family home sales."
      canonical={URL}
    />
    <BreadcrumbSchema items={[{ name: "AFH Club", url: "/afh-club" }, { name: "Market Report", url: REPORT_HUB }]} />
    <Header />
    <main id="main-content">
      <HeroBandTitle as="h1">Washington AFH Market Report</HeroBandTitle>
      <Section>
        <p>
          A regular look at Washington&apos;s adult family homes: how many are licensed, which homes are new, which changed
          owners or closed, and what adult family home properties are selling for. Built from DSHS licensing records and the
          adult family home sales reviewed on AFH Club.
        </p>
        <h2 className="mkt-h2" style={{ marginTop: 22 }}>Latest: {editionTitle(LATEST)}</h2>
        <div className="mkt-figs">
          <Fig n={num(LATEST.dshs.homes)} label={`licensed homes (DSHS, ${longDate(LATEST.dshs.asOf)})`} />
          <Fig n={String(LATEST.licensing.newHomes)} label="newly licensed in King, Pierce and Snohomish" />
          <Fig n={String(LATEST.sales.sold.count)} label="AFH properties sold in 12 months" />
          <Fig n={usd(LATEST.sales.sold.medianPrice)} label="median sale price" />
        </div>
        <div className="mkt-lede"><p>{editionSummary(LATEST)}</p></div>
        <p style={{ marginTop: 16 }}>
          <Link className="mkt-link" to={editionPath(LATEST)}>Read the {editionTitle(LATEST)} report</Link>
        </p>
      </Section>
      <Section alt>
        <h2 className="mkt-h2">All editions</h2>
        <ul className="mkt-list">
          {EDITIONS.map((e) => (
            <li key={e.edition}>
              <Link className="mkt-link" to={editionPath(e)}>{editionTitle(e)}</Link> (published {longDate(e.published)})
            </li>
          ))}
        </ul>
        <h2 className="mkt-h2" style={{ marginTop: 28 }}>Related</h2>
        <RelatedLinks />
      </Section>
      <ReportSignup />
      <BackToAFHClub />
    </main>
    <DisclaimerSection />
    <Footer />
  </div>
);

export default MarketReportHub;
