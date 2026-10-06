/**
 * Newly licensed adult family homes (Oct 6, 2026): every home that appeared in
 * DSHS licensing records between the last two downloads, and every new license
 * at an address that had a different license (usually a change of ownership).
 * Ended licenses are counted, not listed by name. Data:
 * LATEST_CHANGES in src/data/afhMarketReport.ts.
 */
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import { MKT_CSS, Fig, Section, ReportSignup } from "@/components/afh/MarketReportParts";
import { LATEST, LATEST_CHANGES as C, NEW_LICENSES_PATH, editionPath, editionTitle, homePath, longDate, type ChangedHome } from "@/data/afhMarketReport";

const URL = `https://realpropertyplanning.com${NEW_LICENSES_PATH}`;

const byCountyCity = (homes: ChangedHome[]) => {
  const out: Record<string, Record<string, ChangedHome[]>> = {};
  for (const h of homes) ((out[h.county] ??= {})[h.citySlug] ??= []).push(h);
  return out;
};

const HomeLine = ({ h, extra }: { h: ChangedHome; extra?: string }) => (
  <li>
    <Link className="mkt-link" to={homePath(h)}>{h.name}</Link>, {h.street}, {h.city} · licensed for {h.beds}
    {extra ? ` · ${extra}` : ""}
  </li>
);

const NewLicenses = () => {
  const grouped = byCountyCity(C.newHomes);
  const period = `${longDate(C.from)} to ${longDate(C.to)}`;
  return (
    <div className="mkt">
      <style dangerouslySetInnerHTML={{ __html: MKT_CSS }} />
      <SEOHead
        title="Newly Licensed Adult Family Homes in Washington | AFH Club"
        description={`Adult family homes newly licensed by DSHS in ${C.counties.join(", ")} counties, ${period}, and homes that changed ownership, with links to each home's licensing record.`}
        canonical={URL}
      />
      <BreadcrumbSchema items={[{ name: "AFH Club", url: "/afh-club" }, { name: "Directory", url: "/afh-club/homes" }, { name: "Newly Licensed Homes", url: NEW_LICENSES_PATH }]} />
      <Header />
      <main id="main-content">
        <HeroBandTitle as="h1">Newly Licensed Adult Family Homes</HeroBandTitle>
        <Section>
          <p>
            Homes that appeared in DSHS adult family home licensing records in {C.counties.join(", ")} counties between{" "}
            {period}. The list is updated after each DSHS download; statewide lists begin with the next one.
          </p>
          <div className="mkt-figs">
            <Fig n={String(C.newHomes.length)} label="newly licensed homes" />
            <Fig n={String(C.ownershipChanges.length)} label="likely ownership changes" />
            <Fig n={String(C.closed.length)} label="licenses that ended" />
            <Fig n={String(C.counties.length)} label="counties compared" />
          </div>
        </Section>

        <Section alt id="new">
          <h2 className="mkt-h2">Newly licensed homes</h2>
          {Object.keys(grouped).sort().map((county) => (
            <div key={county}>
              <h3 className="mkt-h3">{county} County</h3>
              <ul className="mkt-list">
                {Object.keys(grouped[county]).sort().flatMap((city) => grouped[county][city].map((h) => <HomeLine key={h.license} h={h} />))}
              </ul>
            </div>
          ))}
        </Section>

        <Section id="ownership">
          <h2 className="mkt-h2">New licenses at the same address</h2>
          <p>
            DSHS issues a new license when a home changes owners, so a new license at an address where a different license
            ended usually means a change of ownership. This is a best match on the street address.
          </p>
          <ul className="mkt-list">
            {C.ownershipChanges.map((h) => (
              <HomeLine key={h.license} h={h} extra={h.previousName === h.name ? "same name, new license" : `previously ${h.previousName}`} />
            ))}
          </ul>
          <p className="mkt-small" style={{ marginTop: 18 }}>
            {C.closed.length} other licenses in these counties ended during the period. Closed homes are counted in the{" "}
            <Link className="mkt-link" to={editionPath(LATEST)}>{editionTitle(LATEST)} market report</Link> but not listed here.
            Source: DSHS adult family home licensing records; general information. Confirm a home&apos;s current license on
            its directory page or with DSHS.
          </p>
        </Section>
        <ReportSignup />
        <BackToAFHClub />
      </main>
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default NewLicenses;
