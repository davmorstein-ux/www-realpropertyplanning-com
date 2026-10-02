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
import { articleAuthor, articlePublisher } from "@/lib/schema";
import stats from "@/data/afh/stats.json";
import { AFH_GLOSSARY } from "@/data/afhGlossary";
import { ARTICLE_RECORDS } from "@/data/articleRecords";
import { AFH_SITE_MAP } from "@/data/siteMaps";
import { AFH_FLOW_BASE, AFH_RULES_PATH } from "@/data/afhFlow";

/**
 * AFH Club pillar page: the Washington Adult Family Home Guide (Sept 29, 2026).
 *
 * The one page that explains the whole subject and routes each reader to the
 * right guide. Audience is buyers, sellers, owners and investors (AGENTS.md §8);
 * family placement belongs on the senior-housing side.
 *
 * Every fact here was checked against the statute or rule it cites on Sept 29,
 * 2026, and agrees with the reviewed guide it links to. Figures about the
 * number of homes come from src/data/afh/stats.json, never typed by hand. If a
 * guide's fact changes, change it here and in src/data/afhGlossary.ts too.
 */

const PATH = AFH_RULES_PATH;
const CANONICAL = `https://realpropertyplanning.com${PATH}`;
const TITLE = "Washington Adult Family Homes: Rules & Key Figures";
const COVER = "/afh-washington-guide-cover.webp";
const DESCRIPTION =
  "The rules and figures that matter for a Washington adult family home, each with its source: licensing, capacity, zoning, owner experience, training, the building inspection, fees, inspections, payment, and what happens in a sale.";

const S = stats.state;
const n = (x: number) => x.toLocaleString("en-US");
const p = (x: number) => `${x.toFixed(1)}%`;
const sixBed = stats.bedSizes.find((b) => b.beds === 6);

const WAC = (cite: string) => `https://app.leg.wa.gov/WAC/default.aspx?cite=${cite}`;
const RCW = (cite: string) => `https://app.leg.wa.gov/RCW/default.aspx?cite=${cite}`;
const LOCATOR = "https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx";
const BAAU_QUEUE = "https://www.dshs.wa.gov/altsa/baau-application-processing-timeline";

/* ---------- At a glance ---------- */
const GLANCE: { topic: string; answer: string; src: { label: string; href: string } }[] = [
  { topic: "Who licenses it", answer: "DSHS Residential Care Services licenses the provider and inspects the home.", src: { label: "Ch. 388-76 WAC", href: WAC("388-76") } },
  { topic: "How many residents", answer: "Two to six adults not related to the provider. DSHS may approve seven or eight for an experienced provider.", src: { label: "RCW 70.128.010", href: RCW("70.128.010") } },
  { topic: "Who lives there", answer: "The provider, entity representative or a resident manager, unless the home has 24-hour staffing with a decision-maker always present.", src: { label: "WAC 388-76-10040", href: WAC("388-76-10040") } },
  { topic: "Zoning", answer: "A permitted use in every residential or commercial zone, including single-family zones.", src: { label: "RCW 70.128.140", href: RCW("70.128.140") } },
  { topic: "Owner experience", answer: "1,000 hours of direct care in the last 60 months (licensed physicians, PAs and nurses exempt); new applicants also complete AFH Administrator Training.", src: { label: "WAC 388-76-10130", href: WAC("388-76-10130") } },
  { topic: "Caregiver training", answer: "75 hours and a Home Care Aide certification for most caregivers, then 12 hours of continuing education a year.", src: { label: "Ch. 388-112A WAC", href: WAC("388-112A") } },
  { topic: "The building", answer: "Passed by the local city or county building official, using DSHS form 15-604, before the home can be licensed.", src: { label: "WAC 388-76-10700", href: WAC("388-76-10700") } },
  { topic: "Annual license fee", answer: "$450 per licensed bed since July 2025 ($2,700 for six beds), per DSHS in writing.", src: { label: "WAC 388-76-10025", href: WAC("388-76-10025") } },
  { topic: "Routine inspections", answer: "At least every 18 months, 15 on average, and unannounced at any time; up to two years after three citation-free inspections.", src: { label: "RCW 70.128.070", href: RCW("70.128.070") } },
  { topic: "When the home is sold", answer: "The license does not transfer. The buyer applies for a new one; the seller gives DSHS and residents 60 days' written notice.", src: { label: "WAC 388-76-10105", href: WAC("388-76-10105") } },
];

/* ---------- Key terms (pulled from the glossary so wording cannot drift) ---------- */
const KEY_TERM_IDS = ["chow", "care-assessment", "a-through-e", "cbhs", "ecs", "sbs", "building-inspection", "door-rule"];
const KEY_TERMS = KEY_TERM_IDS.map((id) => AFH_GLOSSARY.find((t) => t.id === id)).filter(Boolean) as typeof AFH_GLOSSARY;

/* ---------- Recently reviewed AFH guides (from the article records) ---------- */
const AFH_TITLES = new Map<string, string>();
for (const sec of AFH_SITE_MAP) for (const g of sec.groups) for (const l of g.links) if (!AFH_TITLES.has(l.href)) AFH_TITLES.set(l.href, l.title);
const RECENT = Object.entries(ARTICLE_RECORDS)
  .filter(([href]) => href.startsWith("/afh-club/") && href !== PATH && AFH_TITLES.has(href))
  .sort((a, b) => b[1].reviewed.localeCompare(a[1].reviewed) || (AFH_TITLES.get(a[0]) ?? "").localeCompare(AFH_TITLES.get(b[0]) ?? ""))
  .slice(0, 8)
  .map(([href, rec]) => ({ href, title: AFH_TITLES.get(href) as string, reviewed: rec.reviewed }));

const fmt = (iso: string) => new Date(iso + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const FAQS = [
  {
    question: "What is an adult family home in Washington?",
    answer:
      "A regular house licensed by DSHS to provide room, board, personal care and special care to two to six adults who are not related to the provider (RCW 70.128.010). DSHS may approve seven or eight for a provider with at least 24 months under the initial license and a clean inspection record (WAC 388-76-10031).",
  },
  {
    question: "Does an adult family home license transfer when the home is sold?",
    answer:
      "No. A change of ownership requires a new license application and a new license (WAC 388-76-10105). The seller must give DSHS and each resident written notice 60 calendar days before the proposed change (WAC 388-76-10106).",
  },
  {
    question: "How long does it take to license an adult family home?",
    answer:
      "DSHS does not promise a timeline. It posts its application queue online; in late September 2026 it was working on applications received in May 2026, and it allows up to 60 days once an application is complete. The local building inspection and the DSHS licensing inspection come on top of that.",
  },
  {
    question: "How are Washington adult family homes paid?",
    answer: `Mostly through Medicaid: ${p(stats.shares.medicaid)} of licensed homes hold a DSHS Medicaid contract. DSHS pays a daily rate set by each resident's CARE classification (A Low to E High) and the rate region. Some residents also qualify for Community Behavioral Health Support, and some homes hold ECS or SBS specialty contracts. Private-pay rates are set by the home.`,
  },
  {
    question: "How many adult family homes are there in Washington?",
    answer: `${n(S.homes)} licensed homes with ${n(S.beds)} beds in ${S.counties} of the state's 39 counties, counted from the DSHS Adult Family Home Locator (retrieved ${stats.retrievedFrom} to ${stats.retrievedTo}).`,
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  url: CANONICAL,
  image: `https://realpropertyplanning.com${COVER}`,
  datePublished: "2026-09-29",
  dateModified: "2026-10-01",
  author: articleAuthor,
  publisher: articlePublisher,
  about: { "@type": "Thing", name: "Adult family homes in Washington State" },
  isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
};

const CSS = `
.afhp { background: #ffffff; }
.afhp .afhp-wrap { max-width: 960px; margin: 0 auto; }
.afhp .afhp-narrow { max-width: 760px; }
.afhp .afhp-hero { display: grid; gap: 28px; align-items: start; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 900px) { .afhp .afhp-hero { grid-template-columns: minmax(0, 1fr) 250px; } }
.afhp .afhp-cover { width: 100%; max-width: 300px; height: auto; aspect-ratio: 3 / 4; border-radius: 8px; box-shadow: 0 12px 30px rgba(10,42,77,0.25); justify-self: center; }
.afhp p { font-family: 'DM Sans', sans-serif !important; font-size: 18px !important; line-height: 1.7 !important; color: #1c1917 !important; margin: 0 0 14px !important; }
.afhp .afhp-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: #0a5648 !important; margin: 0 0 12px !important; }
.afhp h1.afhp-h1 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(30px, 4.6vw, 46px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #192A19 !important; margin: 0 0 18px !important; text-wrap: balance; }
.afhp h2.afhp-h2 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(24px, 3.2vw, 30px) !important; line-height: 1.2 !important; font-weight: 700 !important; color: #192A19 !important; margin: 0 0 14px !important; text-wrap: balance; scroll-margin-top: 180px; }
.afhp h3.afhp-h3 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: 21px !important; line-height: 1.3 !important; font-weight: 700 !important; color: #192A19 !important; margin: 0 0 6px !important; }
.afhp .afhp-answer { background: #ffffff; border: 1px solid #d5e0da; border-left: 5px solid #0a5648; border-radius: 10px; padding: 18px 22px; margin: 4px 0 0; }
.afhp .afhp-answer p { font-size: 19px !important; margin: 0 !important; }
.afhp .afhp-answer .afhp-answer-label { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase; color: #0a5648 !important; margin: 0 0 6px !important; }
.afhp .afhp-figs { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0, 1fr)); margin: 22px 0 8px; }
@media (min-width: 820px) { .afhp .afhp-figs { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
.afhp .afhp-fig { background: #f3f6f4; border: 1px solid #d5e0da; border-radius: 10px; padding: 14px 16px; }
.afhp .afhp-fig .afhp-fig-n { font-family: 'DM Sans', sans-serif !important; font-size: clamp(26px, 3.4vw, 34px) !important; font-weight: 700 !important; color: #192A19; line-height: 1.1; font-variant-numeric: tabular-nums; }
.afhp .afhp-fig .afhp-fig-l { font-family: 'DM Sans', sans-serif !important; font-size: 15px !important; color: #2b2825; line-height: 1.35; margin-top: 6px; }
.afhp ul.afhp-list { list-style: disc !important; margin: 0 0 0 22px; padding: 0; font-family: 'DM Sans', sans-serif; font-size: 18px; line-height: 1.7; color: #1c1917; }
.afhp ul.afhp-list li { display: list-item !important; list-style: disc !important; margin-bottom: 8px; }
.afhp ul.afhp-list li::marker { color: #0a5648; }
.afhp .afhp-tablewrap { overflow-x: auto; border: 1px solid #e2ddd5; border-radius: 10px; background: #ffffff; }
.afhp table { width: 100%; border-collapse: collapse; font-family: 'DM Sans', sans-serif; font-size: 16px; color: #1c1917; }
.afhp th { text-align: left; font-weight: 700; background: #f3f6f4; padding: 10px 14px; border-bottom: 1px solid #d5e0da; }
.afhp td { padding: 11px 14px; border-bottom: 1px solid #eee9e1; vertical-align: top; line-height: 1.5; }
.afhp tr:last-child td { border-bottom: 0; }
.afhp td.afhp-topic { font-weight: 700; width: 24%; min-width: 130px; }
.afhp td.afhp-src { white-space: nowrap; font-size: 15px; }
.afhp a.afhp-link, .afhp td a, .afhp .afhp-small a { color: #1B3A6B !important; text-decoration: underline !important; text-underline-offset: 3px; font-size: inherit !important; }
.afhp .afhp-jump { display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0 0; }
.afhp .afhp-jump a { display: inline-block; padding: 8px 14px; border-radius: 999px; background: #ffffff; border: 1px solid #b9cdc3; color: #0a5648 !important; font-family: 'DM Sans', sans-serif; font-size: 16px !important; font-weight: 600; text-decoration: none !important; }
.afhp .afhp-jump a:hover, .afhp .afhp-jump a:focus-visible { background: #0a5648; color: #ffffff !important; }
.afhp .afhp-paths { display: grid; gap: 18px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 820px) { .afhp .afhp-paths { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.afhp .afhp-path { background: #ffffff; border: 1px solid #ddd6cc; border-top: 4px solid #0a5648; border-radius: 10px; padding: 20px 22px; scroll-margin-top: 180px; }
.afhp .afhp-path .afhp-who { font-size: 16px !important; color: #4a443e !important; margin: 0 0 12px !important; }
.afhp ol.afhp-steps { margin: 0; padding: 0 0 0 22px; font-family: 'DM Sans', sans-serif; }
.afhp ol.afhp-steps li { margin-bottom: 12px; font-size: 16px !important; line-height: 1.45 !important; color: #3f3a35; }
.afhp ol.afhp-steps li::marker { color: #0a5648; font-weight: 700; }
.afhp ol.afhp-steps a { display: inline; color: #1B3A6B !important; font-weight: 700; font-size: 17px !important; text-decoration: underline !important; text-underline-offset: 3px; }
.afhp ol.afhp-steps span { display: block; font-size: 16px !important; line-height: 1.45; margin-top: 2px; }
.afhp .afhp-qa { display: grid; gap: 34px; }
.afhp .afhp-more { font-size: 16px !important; margin-top: 4px !important; }
.afhp dl.afhp-terms { display: grid; gap: 14px 28px; grid-template-columns: minmax(0, 1fr); margin: 0 0 16px; }
@media (min-width: 760px) { .afhp dl.afhp-terms { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.afhp dl.afhp-terms dt { font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 18px; color: #192A19; }
.afhp dl.afhp-terms dt span { font-weight: 500; color: #4a443e; font-size: 15px; }
.afhp dl.afhp-terms dd { margin: 4px 0 0; font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.55; color: #2b2825; }
.afhp ul.afhp-recent { list-style: none; margin: 0; padding: 0; display: grid; gap: 0; border-top: 1px solid #e2ddd5; }
.afhp ul.afhp-recent li { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 16px; padding: 12px 0; border-bottom: 1px solid #e2ddd5; font-family: 'DM Sans', sans-serif; font-size: 17px; }
.afhp ul.afhp-recent li span { color: #4a443e; font-size: 15px; }
.afhp .afhp-small { font-size: 15px !important; color: #3f3a35 !important; }
.afhp .afhp-trail { font-family: 'DM Sans', sans-serif; font-size: 15px; color: #3f4a54; margin: 0 0 14px; }
.afhp .afhp-trail a { color: #1B3A6B !important; font-size: 15px !important; font-weight: 600; text-decoration: underline !important; text-underline-offset: 3px; }
.afhp details.afhp-fold { background: #ffffff; border: 1px solid #d5ddd9; border-radius: 12px; scroll-margin-top: 180px; }
.afhp details.afhp-fold + details.afhp-fold { margin-top: 10px; }
.afhp details.afhp-fold > summary { cursor: pointer; list-style: none; padding: 16px 48px 16px 18px; position: relative; font-family: 'DM Sans', sans-serif; font-size: 19px; font-weight: 700; color: #192A19; }
.afhp details.afhp-fold > summary::-webkit-details-marker { display: none; }
.afhp details.afhp-fold > summary::after { content: "+"; position: absolute; right: 18px; top: 50%; transform: translateY(-50%); font-size: 26px; font-weight: 400; color: #0a5648; }
.afhp details.afhp-fold[open] > summary::after { content: "–"; }
.afhp details.afhp-fold > div { padding: 0 18px 16px; }
`;

const Section = ({ bg, id, children }: { bg: string; id?: string; children: React.ReactNode }) => (
  <section id={id} style={{ background: bg, padding: "48px 16px" }}>
    <div className="afhp-wrap">{children}</div>
  </section>
);

const More = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <p className="afhp-more">
    <Link className="afhp-link" to={to}>{children}</Link>
  </p>
);

const AFHRulesAndFigures = () => (
  <div className="afhp">
    <style>{CSS}</style>
    <SEOHead title={`${TITLE} | AFH Club`} description={DESCRIPTION} canonical={CANONICAL} ogType="article" schemaJson={schema} />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Washington Adult Family Home Guide", url: `https://realpropertyplanning.com${AFH_FLOW_BASE}` },
        { name: "Rules & Key Figures", url: CANONICAL },
      ]}
    />
    <Header />
    <main id="main-content">
      <section style={{ background: "#edf0f3", padding: "40px 16px 36px", borderBottom: "3px solid #0a5648" }}>
        {/* index.css zeroes the first section's top padding sitewide; the gap goes inside. */}
        <div className="afhp-wrap" style={{ paddingTop: 32 }}>
          <div className="afhp-narrow">
            <div className="afhp-trail" role="navigation" aria-label="Where you are">
              <Link to={AFH_FLOW_BASE}>Flow chart</Link> <span aria-hidden="true">›</span> <strong>Rules &amp; key figures</strong>
            </div>
            <h1 className="afhp-h1">{TITLE}</h1>
            <p style={{ fontSize: 20 }}>
              The rules and numbers that matter for an adult family home in Washington, each with its source. Tap a question for the
              explanation.
            </p>
          </div>
          <div className="afhp-figs">
            <div className="afhp-fig"><div className="afhp-fig-n">{n(S.homes)}</div><div className="afhp-fig-l">licensed homes in Washington</div></div>
            <div className="afhp-fig"><div className="afhp-fig-n">{n(S.beds)}</div><div className="afhp-fig-l">licensed beds</div></div>
            <div className="afhp-fig"><div className="afhp-fig-n">{p(sixBed?.share ?? 0)}</div><div className="afhp-fig-l">are licensed for six residents</div></div>
            <div className="afhp-fig"><div className="afhp-fig-n">{p(stats.shares.medicaid)}</div><div className="afhp-fig-l">hold a Medicaid contract</div></div>
          </div>
          <p className="afhp-small" style={{ marginTop: 8 }}>
            Counted from the DSHS Adult Family Home Locator, retrieved {fmt(stats.retrievedTo)}.{" "}
            <Link className="afhp-link" to="/afh-club/washington-afh-data">See the full data</Link>
          </p>
          
        </div>
      </section>

      <Section bg="#f7f4ef">
        <h2 className="afhp-h2">Washington adult family homes at a glance</h2>
        <div className="afhp-tablewrap">
          <table>
            <caption className="sr-only">Key Washington adult family home rules with their legal sources</caption>
            <thead><tr><th scope="col">Topic</th><th scope="col">The rule</th><th scope="col">Source</th></tr></thead>
            <tbody>
              {GLANCE.map((g) => (
                <tr key={g.topic}>
                  <td className="afhp-topic">{g.topic}</td>
                  <td>{g.answer}</td>
                  <td className="afhp-src"><a href={g.src.href} target="_blank" rel="noopener noreferrer">{g.src.label}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="afhp-small" style={{ marginTop: 10 }}>
          Checked against each rule on September 29, 2026. The license fee is from DSHS's written answer of the same date; the rule
          itself says the fee is set in the state budget. What changed recently, and when:{" "}
          <Link className="afhp-link" to="/afh-club/washington-afh-rule-changes">Washington AFH Rules Have Changed</Link>.
        </p>
      </Section>

      <Section bg="#f7f4ef">
        <div className="afhp-narrow">
          <h2 className="afhp-h2">Key questions</h2>
          <details className="afhp-fold" id="license-transfer">
            <summary>Does the license transfer when an adult family home is sold?</summary>
            <div>
            <p>
              No. Washington treats any change in the provider, or in who controls the provider, as a change of ownership, and a
              change of ownership "requires both a new license application and a new license" (
              <a className="afhp-link" href={WAC("388-76-10105")} target="_blank" rel="noopener noreferrer">WAC 388-76-10105</a>). That
              includes forming an LLC around an existing home or transferring half or more of an entity's shares.
            </p>
            <p>
              The current owner gives DSHS and each resident written notice 60 calendar days before the proposed change (
              <a className="afhp-link" href={WAC("388-76-10106")} target="_blank" rel="noopener noreferrer">WAC 388-76-10106</a>). The buyer
              (for an entity, its entity representative) must meet every provider qualification. DSHS confirmed in writing that a continuously licensed home keeps the building
              rules it was first licensed under, so the new 27-inch door rule does not apply to it; a home whose license lapsed must
              meet current rules. ECS and SBS contracts do not transfer.
            </p>
            <More to="/afh-club/buying-selling">Read Buying or Selling an Adult Family Home</More>
            </div>
          </details>
          <details className="afhp-fold" id="timeline">
            <summary>How long does licensing take?</summary>
            <div>
            <p>
              DSHS does not promise a timeline. It posts its application queue instead: in late September 2026 it was working on
              applications received in May 2026, and it allows up to 60 days once an application is complete (
              <a className="afhp-link" href={BAAU_QUEUE} target="_blank" rel="noopener noreferrer">DSHS processing timeline</a>). The local
              building inspection must be passed before the home can be licensed. DSHS told AFH Club in writing that once it approves a
              license, it emails the license letter and license to the new provider within a day.
            </p>
            <More to="/afh-club/licensing-certification">Read AFH Licensing & Certification</More>
            </div>
          </details>
          <details className="afhp-fold" id="payment">
            <summary>How do adult family homes get paid?</summary>
            <div>
            <p>
              Mostly through Medicaid. A DSHS case manager's CARE assessment places each Medicaid resident in one of 17
              classifications, from A Low to E High (
              <a className="afhp-link" href={WAC("388-106-0115")} target="_blank" rel="noopener noreferrer">WAC 388-106-0115</a>). The
              classification and the rate region set the daily rate DSHS pays: homes in King, Pierce and Snohomish counties are paid
              more than homes in the rest of the state (
              <a className="afhp-link" href="https://www.dshs.wa.gov/sites/default/files/ALTSA/msd/documents/All_HCS_Rates.pdf" target="_blank" rel="noopener noreferrer">DSHS rates</a>).
            </p>
            <p>
              On top of that, a resident may qualify for Community Behavioral Health Support (CBHS), paid in six tiers by the
              staff time the resident needs. Some homes hold owner-level ECS or SBS contracts for residents with complex behavioral
              needs. Private-pay rates are set by each home; no agency publishes them.
            </p>
            <More to="/afh-club/care-classifications-a-through-e">Read A Through E: CARE Classifications</More>
            </div>
          </details>
          <details className="afhp-fold" id="building">
            <summary>What does the house itself need?</summary>
            <div>
            <p>
              The local city or county building official inspects the house against DSHS form 15-604, the Adult Family Home Local
              Building Inspection Checklist, before the home can be licensed (
              <a className="afhp-link" href={WAC("388-76-10700")} target="_blank" rel="noopener noreferrer">WAC 388-76-10700</a>). It covers
              bedroom exits and classifications, emergency escape windows, smoke and carbon monoxide alarms, doors, ramps, stairs,
              bathrooms and fire access. WABO helped write the checklist but does not inspect. Homes licensed after September 20,
              2026 also need interior doors at least 27 inches wide wherever residents pass through, and since that date no resident may
              sleep in a bedroom DSHS has not inspected and approved.
            </p>
            <More to="/afh-club/building-inspection">Read Building Requirements & Inspections</More>
            </div>
          </details>
          <details className="afhp-fold" id="inspections">
            <summary>How often are homes inspected, and where is the record?</summary>
            <div>
            <p>
              DSHS inspects every licensed home at least every 18 months, with an annual average of 15, and may inspect unannounced
              at any time. A home with no citations on its last three inspections, and no complaint violations in that period, may go
              two years (
              <a className="afhp-link" href={RCW("70.128.070")} target="_blank" rel="noopener noreferrer">RCW 70.128.070</a>). Enforcement
              ranges from license conditions and civil fines to stop placement, suspension and revocation (
              <a className="afhp-link" href={RCW("70.128.160")} target="_blank" rel="noopener noreferrer">RCW 70.128.160</a>).
            </p>
            <p>
              The{" "}
              <a className="afhp-link" href={LOCATOR} target="_blank" rel="noopener noreferrer">DSHS Adult Family Home Locator</a> shows each
              home's license and the limits and enforcement letters issued in the previous three years.
            </p>
            <More to="/afh-club/violation-history-lookup">Read How to Look Up DSHS Violations</More>
            </div>
          </details>
          <details className="afhp-fold" id="training">
            <summary>What training does an owner need?</summary>
            <div>
            <p>
              A provider, entity representative or resident manager needs 1,000 hours of direct care to vulnerable adults within
              the previous 60 months (licensed physicians, physician assistants and nurses are exempt). A new license applicant, or
              an entity's representative, also completes AFH Administrator Training of at least 48 hours. All three need specialty
              training before serving residents with dementia, mental illness or developmental disabilities. Most caregivers complete 75 hours of training and a Home Care Aide certification, then 12 hours of
              continuing education a year.
            </p>
            <More to="/afh-club/training-education">Read Training & Education Requirements</More>
            </div>
          </details>
        </div>
      </Section>

      <Section bg="#ffffff">
        <h2 className="afhp-h2">Terms to know</h2>
        <dl className="afhp-terms">
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
          <Link className="afhp-link" to="/afh-club/glossary">All {AFH_GLOSSARY.length} terms in the AFH Glossary</Link>
        </p>
      </Section>

      {RECENT.length > 0 && (
        <Section bg="#f7f4ef">
          <div className="afhp-narrow">
            <h2 className="afhp-h2">Recently reviewed against their sources</h2>
            <ul className="afhp-recent">
              {RECENT.map((r) => (
                <li key={r.href}>
                  <Link className="afhp-link" to={r.href}>{r.title}</Link>
                  <span>Reviewed {fmt(r.reviewed)}</span>
                </li>
              ))}
            </ul>
            <p className="afhp-small" style={{ marginTop: 12 }}>
              How guides are checked: <Link className="afhp-link" to="/editorial-standards">Editorial Standards</Link>.
            </p>
          </div>
        </Section>
      )}

      <PageFAQ faqs={FAQS} heading="Washington Adult Family Homes: Common Questions" eyebrow="Frequently Asked Questions" id="afh-pillar" />
    </main>
    <AuthorByline />
    <BackToAFHClub />
    <CTASection />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default AFHRulesAndFigures;
