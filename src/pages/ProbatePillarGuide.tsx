import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import AuthorByline from "@/components/AuthorByline";
import PageFAQ from "@/components/PageFAQ";
import BackToPreviousPage from "@/components/BackToPreviousPage";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import { PROBATE_GLOSSARY, rcw, rcwChapter, DOR_ESTATE_TAX, IRS_ESTATE_TAX } from "@/data/probateGlossary";
import { PROBATE_GLANCE, PROBATE_PATHS, PROBATE_FAQS, PROBATE_KEY_TERM_IDS, PROBATE_PILLAR } from "@/data/probatePillar";

/**
 * The Washington Probate & Estate Property Guide (Sept 30, 2026): the family
 * side's "start here" page, built like the AFH Club pillar.
 *
 * Words that the prerender also needs (the at-a-glance table, the paths, the
 * FAQ) live in src/data/probatePillar.ts; terms come from
 * src/data/probateGlossary.ts. Every fact was checked against the statute it
 * cites on Sept 30, 2026. The site does not refer attorneys (AGENTS.md).
 *
 * index.css traps handled here: the first section's top padding is zeroed
 * sitewide (padding goes on the inner wrapper), `main h2` and `main a` are
 * forced (scoped classes with !important), and <nav> is styled as the site
 * header (the jump bar is a div with role="navigation").
 */

const { PATH, TITLE, DESCRIPTION, COVER } = PROBATE_PILLAR;
const CANONICAL = `https://realpropertyplanning.com${PATH}`;
const KEY_TERMS = PROBATE_KEY_TERM_IDS.map((id) => PROBATE_GLOSSARY.find((t) => t.id === id)).filter(Boolean) as typeof PROBATE_GLOSSARY;

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  url: CANONICAL,
  image: `https://realpropertyplanning.com${COVER}`,
  datePublished: "2026-09-30",
  dateModified: "2026-09-30",
  author: articleAuthor,
  publisher: articlePublisher,
  about: { "@type": "Thing", name: "Probate and estate property in Washington State" },
  isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
};

const A = "#25597e"; // the Estate & Probate menu colour
const CSS = `
.prp { background: #ffffff; }
.prp .prp-wrap { max-width: 960px; margin: 0 auto; }
.prp .prp-narrow { max-width: 760px; }
.prp .prp-hero { display: grid; gap: 28px; align-items: start; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 900px) { .prp .prp-hero { grid-template-columns: minmax(0, 1fr) 250px; } }
.prp .prp-cover { width: 100%; max-width: 300px; height: auto; aspect-ratio: 3 / 4; border-radius: 8px; box-shadow: 0 12px 30px rgba(18,45,66,0.25); justify-self: center; }
.prp p { font-family: 'DM Sans', sans-serif !important; font-size: 18px !important; line-height: 1.7 !important; color: #1c1917 !important; margin: 0 0 14px !important; }
.prp .prp-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: ${A} !important; margin: 0 0 12px !important; }
.prp h1.prp-h1 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(30px, 4.6vw, 46px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 18px !important; text-wrap: balance; }
.prp h2.prp-h2 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(24px, 3.2vw, 30px) !important; line-height: 1.2 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 14px !important; text-wrap: balance; scroll-margin-top: 110px; }
.prp h3.prp-h3 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: 21px !important; line-height: 1.3 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 6px !important; }
.prp .prp-answer { background: #ffffff; border: 1px solid #d3dfe8; border-left: 5px solid ${A}; border-radius: 10px; padding: 18px 22px; margin: 4px 0 0; }
.prp .prp-answer p { font-size: 19px !important; margin: 0 !important; }
.prp .prp-answer .prp-answer-label { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase; color: ${A} !important; margin: 0 0 6px !important; }
.prp .prp-figs { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0, 1fr)); margin: 22px 0 8px; }
@media (min-width: 820px) { .prp .prp-figs { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
.prp .prp-fig { background: #ffffff; border: 1px solid #d3dfe8; border-radius: 10px; padding: 14px 16px; }
.prp .prp-fig .prp-fig-n { font-family: 'DM Sans', sans-serif !important; font-size: clamp(26px, 3.4vw, 34px) !important; font-weight: 700 !important; color: #14283a; line-height: 1.1; font-variant-numeric: tabular-nums; }
.prp .prp-fig .prp-fig-l { font-family: 'DM Sans', sans-serif !important; font-size: 15px !important; color: #2b2825; line-height: 1.35; margin-top: 6px; }
.prp ul.prp-list { list-style: disc !important; margin: 0 0 0 22px; padding: 0; font-family: 'DM Sans', sans-serif; font-size: 18px; line-height: 1.7; color: #1c1917; }
.prp ul.prp-list li { display: list-item !important; list-style: disc !important; margin-bottom: 8px; }
.prp ul.prp-list li::marker { color: ${A}; }
.prp .prp-tablewrap { overflow-x: auto; border: 1px solid #e2ddd5; border-radius: 10px; background: #ffffff; }
.prp table { width: 100%; border-collapse: collapse; font-family: 'DM Sans', sans-serif; font-size: 16px; color: #1c1917; }
.prp th { text-align: left; font-weight: 700; background: #eef3f7; padding: 10px 14px; border-bottom: 1px solid #d3dfe8; }
.prp td { padding: 11px 14px; border-bottom: 1px solid #eee9e1; vertical-align: top; line-height: 1.5; overflow-wrap: break-word; }
.prp tr:last-child td { border-bottom: 0; }
.prp td.prp-topic { font-weight: 700; width: 24%; min-width: 130px; }
.prp td.prp-src { white-space: nowrap; font-size: 15px; }
@media (max-width: 640px) {
  .prp table, .prp tbody, .prp tr, .prp td { display: block; width: 100% !important; }
  .prp thead { display: none; }
  .prp tr { padding: 12px 14px; border-bottom: 1px solid #eee9e1; }
  .prp tr:last-child { border-bottom: 0; }
  .prp td { padding: 0; border: 0; }
  .prp td.prp-topic { min-width: 0; margin-bottom: 4px; }
  .prp td.prp-src { margin-top: 6px; white-space: normal; }
}
.prp a.prp-link, .prp td a, .prp .prp-small a { color: #1B3A6B !important; text-decoration: underline !important; text-underline-offset: 3px; font-size: inherit !important; }
.prp .prp-jump { display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0 0; }
.prp .prp-jump a { display: inline-flex; align-items: center; min-height: 44px; padding: 8px 16px; border-radius: 999px; background: #ffffff; border: 1px solid #b7cbd9; color: ${A} !important; font-family: 'DM Sans', sans-serif; font-size: 16px !important; font-weight: 600; text-decoration: none !important; }
@media (hover: hover) { .prp .prp-jump a:hover { background: ${A}; color: #ffffff !important; } }
.prp .prp-jump a:focus-visible { background: ${A}; color: #ffffff !important; }
.prp .prp-paths { display: grid; gap: 18px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 820px) { .prp .prp-paths { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.prp .prp-path { background: #ffffff; border: 1px solid #ddd6cc; border-top: 4px solid ${A}; border-radius: 10px; padding: 20px 22px; scroll-margin-top: 110px; }
.prp .prp-path .prp-who { font-size: 16px !important; color: #4a443e !important; margin: 0 0 12px !important; }
.prp ol.prp-steps { margin: 0; padding: 0 0 0 22px; font-family: 'DM Sans', sans-serif; }
.prp ol.prp-steps li { margin-bottom: 12px; font-size: 16px !important; line-height: 1.45 !important; color: #3f3a35; }
.prp ol.prp-steps li::marker { color: ${A}; font-weight: 700; }
.prp ol.prp-steps a { display: inline; color: #1B3A6B !important; font-weight: 700; font-size: 17px !important; text-decoration: underline !important; text-underline-offset: 3px; }
.prp ol.prp-steps span { display: block; font-size: 16px !important; line-height: 1.45; margin-top: 2px; }
.prp .prp-qa { display: grid; gap: 34px; }
.prp .prp-more { font-size: 16px !important; margin-top: 4px !important; }
.prp dl.prp-terms { display: grid; gap: 14px 28px; grid-template-columns: minmax(0, 1fr); margin: 0 0 16px; }
@media (min-width: 760px) { .prp dl.prp-terms { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.prp dl.prp-terms dt { font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 18px; color: #14283a; }
.prp dl.prp-terms dt span { font-weight: 500; color: #4a443e; font-size: 15px; }
.prp dl.prp-terms dd { margin: 4px 0 0; font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.55; color: #2b2825; }
.prp .prp-small { font-size: 15px !important; color: #3f3a35 !important; }
.prp .prp-note { background: #f7f4ef; border: 1px solid #e2ddd5; border-radius: 10px; padding: 16px 20px; }
`;

const Section = ({ bg, id, children }: { bg: string; id?: string; children: React.ReactNode }) => (
  <section id={id} style={{ background: bg, padding: "48px 16px" }}>
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

const ProbatePillarGuide = () => (
  <div className="prp">
    <style>{CSS}</style>
    <SEOHead title={`${TITLE} | Real Property Planning`} description={DESCRIPTION} canonical={CANONICAL} ogType="article" schemaJson={schema} />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Estate & Probate", url: "https://realpropertyplanning.com/probate-estate-sales" },
        { name: "Washington Probate & Estate Property Guide", url: CANONICAL },
      ]}
    />
    <Header />
    <main id="main-content">
      <section style={{ background: "#eef3f7", padding: "40px 16px 36px", borderBottom: `3px solid ${A}` }}>
        {/* index.css zeroes the first section's top padding sitewide; the gap goes inside. */}
        <div className="prp-wrap" style={{ paddingTop: 32 }}>
          <div className="prp-hero" style={COVER ? undefined : { gridTemplateColumns: "minmax(0, 1fr)" }}>
            <div className="prp-narrow">
              <p className="prp-eyebrow">Estate &amp; Probate · Start here</p>
              <h1 className="prp-h1">{TITLE}</h1>
              <p style={{ fontSize: 20 }}>
                For executors, heirs, trustees and families dealing with a house after a death in Washington: how probate works,
                who can act, the deadlines that matter, and a path to the right guide for your role.
              </p>
              <div className="prp-answer">
                <p className="prp-answer-label">The short answer</p>
                <p>{PROBATE_PILLAR.SHORT_ANSWER}</p>
              </div>
            </div>
            {COVER && (
              <img
                src={COVER}
                alt="Reference guide cover: The Washington Probate and Estate Property Guide"
                className="prp-cover"
                width={1024}
                height={1365}
                loading="eager"
                decoding="async"
              />
            )}
          </div>
          <div className="prp-figs">
            {PROBATE_PILLAR.FIGURES.map((f) => (
              <div key={f.n + f.label} className="prp-fig">
                <div className="prp-fig-n">{f.n}</div>
                <div className="prp-fig-l">{f.label}</div>
              </div>
            ))}
          </div>
          <p className="prp-small" style={{ marginTop: 8 }}>
            Deadlines from Title 11 RCW, checked September 30, 2026. Each is explained, with its statute, below.
          </p>
          <div className="prp-jump" role="navigation" aria-label="Jump to a path">
            {PROBATE_PATHS.map((pa) => (
              <a key={pa.id} href={`#${pa.id}`}>{pa.short}</a>
            ))}
            <Link to="/probate-glossary">Glossary</Link>
          </div>
        </div>
      </section>

      <Section bg="#ffffff">
        <div className="prp-narrow">
          <div style={{ marginBottom: 20 }}>
            <BackToPreviousPage variant="top" fallback={{ href: "/probate-estate-sales", label: "Probate & Estate Sales" }} />
          </div>
          <h2 className="prp-h2">Key takeaways</h2>
          <ul className="prp-list">
            {PROBATE_PILLAR.TAKEAWAYS.map((t) => (
              <li key={t.lead}><strong>{t.lead}</strong> {t.text}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section bg="#f7f4ef">
        <h2 className="prp-h2">Washington probate at a glance</h2>
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
        <h2 className="prp-h2">Choose your path</h2>
        <p style={{ maxWidth: 760 }}>Each path lists the guides in the order most people need them.</p>
        <div className="prp-paths">
          {PROBATE_PATHS.map((pa) => (
            <div key={pa.id} id={pa.id} className="prp-path">
              <h3 className="prp-h3">{pa.title}</h3>
              <p className="prp-who">{pa.who}</p>
              <ol className="prp-steps">
                {pa.steps.map((s) => (
                  <li key={s.href}>
                    <Link to={s.href}>{s.label}</Link>
                    <span>{s.note}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="#f7f4ef">
        <div className="prp-narrow prp-qa">
          <div>
            <h2 className="prp-h2" id="need-probate">Does every estate need probate?</h2>
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

          <div>
            <h2 className="prp-h2" id="authority">Who has authority to sell the house?</h2>
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

          <div>
            <h2 className="prp-h2" id="sell-during-probate">Can the house be sold while probate is open?</h2>
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

          <div>
            <h2 className="prp-h2" id="how-long">How long does probate take?</h2>
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

          <div>
            <h2 className="prp-h2" id="value">What is the house worth for the estate?</h2>
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

          <div>
            <h2 className="prp-h2" id="taxes">What taxes apply?</h2>
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

          <div>
            <h2 className="prp-h2" id="debts">What about the person's debts and Medicaid?</h2>
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

          <div>
            <h2 className="prp-h2" id="disagree">What if the heirs disagree?</h2>
            <p>
              Most disagreements are about value or timing, and an independent appraisal everyone relies on settles many of them. Heirs
              can also buy one another out. Washington's{" "}
              <Cite href={rcwChapter("11.96A")}>Trust and Estate Dispute Resolution Act (TEDRA)</Cite> lets everyone sign a binding
              agreement without a hearing, or ask the court to decide. A will contest must be filed within four months of the will
              being admitted (<Cite href={rcw("11.24.010")}>RCW 11.24.010</Cite>).
            </p>
            <More to="/guides/heirs-disagree-selling-house">Read What Happens If Heirs Disagree About Selling?</More>
          </div>
        </div>
      </Section>

      <Section bg="#ffffff">
        <h2 className="prp-h2">Terms to know</h2>
        <dl className="prp-terms">
          {KEY_TERMS.map((t) => (
            <div key={t.id}>
              <dt>
                {t.term}
                {t.aka && <span> ({t.aka})</span>}
              </dt>
              <dd>{t.definition}</dd>
            </div>
          ))}
        </dl>
        <p>
          <Link className="prp-link" to="/probate-glossary">All {PROBATE_GLOSSARY.length} terms in the Probate &amp; Estate Glossary</Link>
        </p>
      </Section>

      <Section bg="#f7f4ef">
        <div className="prp-narrow prp-note">
          <h2 className="prp-h2" style={{ fontSize: 22 }}>This guide is not legal advice</h2>
          <p style={{ marginBottom: 0 }}>
            It explains how Washington probate generally works so you can ask better questions. Every estate is different, and the
            personal representative is usually well served by a Washington-licensed probate attorney. Real Property Planning does not
            refer clients to attorneys; choose one yourself, and confirm any lawyer's license with the Washington State Bar Association
            (wsba.org).
          </p>
        </div>
      </Section>

      <PageFAQ faqs={PROBATE_FAQS} heading="Washington Probate: Common Questions" eyebrow="Frequently Asked Questions" id="probate-pillar" />
      <div style={{ padding: "0 16px 32px" }}>
        <div className="prp-wrap">
          <BackToPreviousPage variant="bottom" fallback={{ href: "/probate-estate-sales", label: "Probate & Estate Sales" }} />
        </div>
      </div>
    </main>
    <AuthorByline />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default ProbatePillarGuide;
