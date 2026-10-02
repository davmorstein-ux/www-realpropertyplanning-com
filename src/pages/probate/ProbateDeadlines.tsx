import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import AuthorByline from "@/components/AuthorByline";
import PageFAQ from "@/components/PageFAQ";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import { rcw, rcwChapter, DOR_ESTATE_TAX, IRS_ESTATE_TAX } from "@/data/probateGlossary";
import { PROBATE_GLANCE, PROBATE_FAQS, PROBATE_PILLAR } from "@/data/probatePillar";
import { FLOW_BASE, DEADLINES_PATH } from "@/data/probateFlow";
import { PROBATE_CSS, PROBATE_CSS_EXTRA } from "@/components/probate/probateStyles";

/**
 * Deadlines & Key Rules (Oct 1, 2026): the reference half of the old one-page
 * probate guide, now one tap from every box of the flow chart. The rules table
 * and the questions moved here unchanged (checked against each statute on
 * Sept 30, 2026); the questions are folded so the page opens short.
 */
const SITE = "https://realpropertyplanning.com";
const CANONICAL = `${SITE}${DEADLINES_PATH}`;
const TITLE = "Washington Probate Deadlines & Key Rules";
const DESCRIPTION =
  "Every Washington probate deadline and rule that matters for a house, in one table with its statute: notice to heirs, inventory, creditor claims, will contests, small estates, transfer on death deeds, estate tax, and common questions.";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  url: CANONICAL,
  datePublished: "2026-09-30",
  dateModified: "2026-10-01",
  author: articleAuthor,
  publisher: articlePublisher,
  isPartOf: { "@type": "WebPage", name: "Washington Probate & Estate Property Guide", url: `${SITE}${FLOW_BASE}` },
};

const Section = ({ bg, id, children }: { bg: string; id?: string; children: React.ReactNode }) => (
  <section id={id} style={{ background: bg, padding: "40px 16px" }}>
    <div className="prp-wrap">{children}</div>
  </section>
);

const More = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <p className="prp-more">
    <Link className="prp-link" to={to}>{children}</Link>
  </p>
);

const Cite = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a className="prp-link" href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

export default function ProbateDeadlines() {
  return (
    <div className="prp">
      <style>{PROBATE_CSS + PROBATE_CSS_EXTRA}</style>
      <SEOHead title={`${TITLE} | Real Property Planning`} description={DESCRIPTION} canonical={CANONICAL} ogType="article" schemaJson={schema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE },
          { name: "Washington Probate Guide", url: `${SITE}${FLOW_BASE}` },
          { name: "Deadlines & Key Rules", url: CANONICAL },
        ]}
      />
      <Header />
      <main id="main-content">
        <section style={{ background: "#eef3f7", padding: "32px 16px 28px", borderBottom: "3px solid #25597e" }}>
          <div className="prp-wrap" style={{ paddingTop: 24 }}>
            <div className="prp-trail" role="navigation" aria-label="Where you are">
              <Link to={FLOW_BASE}>Probate flow chart</Link>
              <span><span className="prp-sep" aria-hidden="true">›</span> <strong>Deadlines &amp; key rules</strong></span>
            </div>
            <h1 className="prp-h1">{TITLE}</h1>
            <p className="prp-narrow">The dates and rules that matter when there is a house, each with its statute. Tap a question below for the explanation.</p>
            <div className="prp-figs">
              {PROBATE_PILLAR.FIGURES.map((f) => (
                <div key={f.n + f.label} className="prp-fig">
                  <div className="prp-fig-n">{f.n}</div>
                  <div className="prp-fig-l">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section bg="#ffffff" id="questions">
          <div className="prp-narrow">
            <h2 className="prp-h2">Key questions</h2>
          <details className="prp-fold" id="need-probate">
            <summary>Does every estate need probate?</summary>
            <div>
            <p>
              No. Probate is needed for property titled in the person's name alone with no beneficiary named. Property that passes by
              title or designation does not go through it: a house in a living trust, a house held in joint tenancy with right of
              survivorship, a house with a{" "}
              <Cite href={rcw("64.80.060")}>transfer on death deed</Cite> recorded before the death, and accounts or policies with a
              living beneficiary. Married couples and registered domestic partners often use a{" "}
              <Cite href={rcw("26.16.120")}>community property agreement</Cite>, which can pass all their property to the survivor without probate.
            </p>
            <p>
              If everything in the person's name, real estate included, is worth $100,000 or less after liens, a successor can collect it with a{" "}
              <Cite href={rcw("11.62.010")}>small estate affidavit</Cite> 40 days after the death. That affidavit cannot transfer real
              estate, so a house in the person's name alone usually means probate, however small the rest of the estate is.
            </p>
            <More to="/estate-probate-inherited-property/probate-and-legal-authority">Read Understanding Probate &amp; Legal Authority</More>
            </div>
          </details>
          <details className="prp-fold" id="authority">
            <summary>Who has authority to sell the house?</summary>
            <div>
            <p>
              For a house that goes through probate, only the personal representative, and only after the superior court appoints
              them and issues letters. Being named executor in the will does not give that authority on its own, and neither does being
              an heir. A{" "}
              <Link className="prp-link" to="/power-of-attorney">power of attorney</Link> ends at death, so the parent's agent cannot sell
              either.
            </p>
            <p>
              A house in a living trust is sold by the successor trustee, usually with a{" "}
              <Cite href={rcw("11.98.075")}>certification of trust</Cite> for the title company. A house held in joint tenancy with
              right of survivorship belongs to the surviving owner, who records proof of the death with the county and can then sell.
            </p>
            <More to="/guides/who-has-authority-sell-probate-property-washington">Read Who Has Authority to Sell Probate Property?</More>
            </div>
          </details>
          <details className="prp-fold" id="sell-during-probate">
            <summary>Can the house be sold while probate is open?</summary>
            <div>
            <p>
              Usually, yes. Most Washington estates are administered with{" "}
              <Cite href={rcw("11.68.090")}>nonintervention powers</Cite>, which let the personal representative sell, lease or
              mortgage real estate "without an order of the court." The sale does not have to wait for the creditor period to end.
              Only a solvent estate qualifies. Without nonintervention powers, a sale generally needs a court order, then a report of sale and the court's confirmation, under{" "}
              <Cite href={rcwChapter("11.56")}>chapter 11.56 RCW</Cite>, unless the will itself directs or authorizes the sale.
            </p>
            <p>
              Heirs can file a{" "}
              <Cite href={rcw("11.28.240")}>request for special notice</Cite> to be told when the inventory, petitions, accounts or the
              declaration of completion are filed. A sale under nonintervention powers involves no court filing, so it brings no notice;
              heirs who want to know about a sale should ask the personal representative directly.
            </p>
            <More to="/guides/sell-house-during-probate-washington">Read Can You Sell a House During Probate?</More>
            </div>
          </details>
          <details className="prp-fold" id="how-long">
            <summary>How long does probate take?</summary>
            <div>
            <p>
              There is no fixed length, but the creditor period sets a floor. Creditors have four months from the first publication of
              the notice to creditors (<Cite href={rcw("11.40.051")}>RCW 11.40.051</Cite>), so few estates close in less than about five
              or six months, and many take a year or more when there is a house to sell, a tax return to file or a disagreement to
              resolve. An estate with nonintervention powers closes with a{" "}
              <Cite href={rcw("11.68.110")}>declaration of completion</Cite>, which becomes final if no one asks the court to review it
              within 30 days.
            </p>
            <More to="/guides/probate-house-sale-timeline-washington">Read Probate House Sale Timeline in Washington</More>
            </div>
          </details>
          <details className="prp-fold" id="value">
            <summary>What is the house worth for the estate?</summary>
            <div>
            <p>
              The estate's inventory values everything as of the date of death (
              <Cite href={rcw("11.44.015")}>RCW 11.44.015</Cite>), and that same date-of-death value is generally the heirs' new
              federal tax basis when they sell (
              <Cite href="https://www.law.cornell.edu/uscode/text/26/1014">26 U.S.C. § 1014</Cite>). A certified appraiser can value a
              house as of the date of death even months later, in a retrospective appraisal. A broker's market analysis helps set a
              list price, but it is not an appraisal.
            </p>
            <More to="/date-of-death-valuation-property-appraisals">Read Date-of-Death Valuation &amp; Estate Property Appraisals</More>
            </div>
          </details>
          <details className="prp-fold" id="taxes">
            <summary>What taxes apply?</summary>
            <div>
            <p>
              Washington has its own estate tax. For deaths from July 1, 2026 the exclusion is $3,000,000 and rates run from 10 to 20
              percent. The figures depend on the date of death: $3,076,000 for deaths from January to June 2026, and rates of 10 to 35
              percent for deaths from July 1, 2025 to June 30, 2026 (
              <Cite href={DOR_ESTATE_TAX}>Department of Revenue</Cite>). The federal estate tax starts far higher: $15 million per person
              for deaths in 2026 (<Cite href={IRS_ESTATE_TAX}>IRS</Cite>).
            </p>
            <p>
              Inheriting a house does not trigger the real estate excise tax, but selling it to a buyer does, as with any sale.
              Washington's capital gains tax does not apply to real estate. Federal capital gains tax applies only to gain above the
              stepped-up basis, which is often small when an estate sells soon after the death.
            </p>
            <More to="/guides/taxes-selling-inherited-house-washington">Read What Taxes Apply When Selling an Inherited House?</More>
            </div>
          </details>
          <details className="prp-fold" id="debts">
            <summary>What about the person's debts and Medicaid?</summary>
            <div>
            <p>
              Debts are paid from the estate, not by the heirs personally (though someone who receives a nonprobate asset can be required to
              contribute). The personal representative publishes a notice to creditors
              and must mail a copy to the DSHS Office of Financial Recovery (
              <Cite href={rcw("11.40.020")}>RCW 11.40.020</Cite>). If the person received Medicaid long-term care at 55 or older, or state-funded long-term care at any age, the state can claim
              repayment from the estate and from nonprobate assets such as a house passing by transfer on death deed (
              <Cite href={rcw("43.20B.080")}>RCW 43.20B.080</Cite>, <Cite href={rcw("74.39A.170")}>74.39A.170</Cite>). That claim can take
              much of the proceeds of a parent's house.
              Ask the estate's attorney about it early.
            </p>
            <More to="/executor-responsibilities-first-steps/legal-duties">Read Understanding Your Legal Duties as Executor</More>
            </div>
          </details>
          <details className="prp-fold" id="disagree">
            <summary>What if the heirs disagree?</summary>
            <div>
            <p>
              Most disagreements are about value or timing, and an independent appraisal everyone relies on settles many of them. Heirs
              can also buy one another out. Washington's{" "}
              <Cite href={rcwChapter("11.96A")}>Trust and Estate Dispute Resolution Act (TEDRA)</Cite> lets everyone sign a binding
              agreement without a hearing, or ask the court to decide. A will contest must be filed within four months of the will
              being admitted (<Cite href={rcw("11.24.010")}>RCW 11.24.010</Cite>).
            </p>
            <More to="/guides/heirs-disagree-selling-house">Read What Happens If Heirs Disagree About Selling?</More>
            </div>
          </details>
          </div>
        </Section>

      <Section bg="#f7f4ef" id="table">
        <h2 className="prp-h2">The deadlines and rules, in one table</h2>
        <div className="prp-tablewrap">
          <table>
            <caption className="sr-only">Key Washington probate rules with their legal sources</caption>
            <thead><tr><th scope="col">Topic</th><th scope="col">The rule</th><th scope="col">Source</th></tr></thead>
            <tbody>
              {PROBATE_GLANCE.map((g) => (
                <tr key={g.topic}>
                  <td className="prp-topic">{g.topic}</td>
                  <td>{g.answer}</td>
                  <td className="prp-src"><a href={g.src.href} target="_blank" rel="noopener noreferrer">{g.src.label}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="prp-small" style={{ marginTop: 10 }}>
          Checked against each statute and agency table on September 30, 2026. Tax figures change; confirm the ones for the date of
          death with the estate's accountant.
        </p>
      </Section>

      <Section bg="#ffffff">
        <div className="prp-narrow prp-note">
          <p style={{ marginBottom: 0 }}>
            General information, not legal advice. The personal representative is usually well served by a Washington-licensed probate
            attorney. Real Property Planning does not refer clients to attorneys; confirm any lawyer's license with the Washington State
            Bar Association (wsba.org).
          </p>
        </div>
        <div className="prp-nextrow" style={{ marginTop: 22 }}>
          <Link className="prp-back" to={FLOW_BASE}>← Back to the flow chart</Link>
          <Link className="prp-next" to="/probate-glossary">Glossary of terms →</Link>
        </div>
      </Section>

      <PageFAQ faqs={PROBATE_FAQS} heading="Washington Probate: Common Questions" eyebrow="Frequently Asked Questions" id="probate-pillar" />
      </main>
      <AuthorByline />
      <DisclaimerSection />
      <Footer />
    </div>
  );
}
