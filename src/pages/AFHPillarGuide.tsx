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

const PATH = "/afh-club/washington-adult-family-home-guide";
const CANONICAL = `https://realpropertyplanning.com${PATH}`;
const TITLE = "Washington Adult Family Homes: The Complete Guide";
const DESCRIPTION =
  "What a Washington adult family home is, who licenses it, what the house and the owner need, how homes are paid, and what happens when one is sold, with a path for opening, running, buying, selling or evaluating an AFH.";

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

/* ---------- Four paths ---------- */
type Step = { label: string; href: string; note: string };
const PATHS: { id: string; short: string; title: string; who: string; steps: Step[] }[] = [
  {
    id: "opening",
    short: "Opening",
    title: "Opening a new adult family home",
    who: "You want to become a licensed provider, in a house you own, buy or lease.",
    steps: [
      { label: "Is an Adult Family Home Right for You?", href: "/afh-club/getting-started", note: "Qualifications, the 1,000 hours, and what the job really is." },
      { label: "Training & Education Requirements", href: "/afh-club/training-education", note: "Administrator training, Home Care Aide, specialty training." },
      { label: "AFH Licensing & Certification", href: "/afh-club/licensing-certification", note: "The BAAU application, background checks, the licensing inspection." },
      { label: "Building Requirements & Inspections", href: "/afh-club/building-inspection", note: "What the house needs to pass form 15-604." },
      { label: "AFH Costs & Fees", href: "/afh-club/costs-fees", note: "License fees, insurance, training and start-up costs." },
      { label: "Buying as an Individual or Through an LLC", href: "/afh-club/ownership-structure", note: "Which structure, and why forming one later is a change of ownership." },
    ],
  },
  {
    id: "running",
    short: "Running",
    title: "Running a licensed home",
    who: "You operate a home today and want to stay compliant and understand your income.",
    steps: [
      { label: "The Dos and Don'ts of Operating an AFH", href: "/afh-club/dos-and-donts-operating-adult-family-home", note: "Fourteen topics, each marked requirement or best practice." },
      { label: "DSHS Inspections & Compliance", href: "/afh-club/regulations-compliance", note: "How inspections work and the rules cited most often." },
      { label: "A Through E: CARE Classifications", href: "/afh-club/care-classifications-a-through-e", note: "How each Medicaid resident's daily rate is set." },
      { label: "CBHS Tiers Explained", href: "/afh-club/cbhs-tiers", note: "Behavioral health support paid on top of the base rate." },
      { label: "The AFH Payment Field Guide", href: "/afh-club/afh-payment-field-guide", note: "ECS, SBS, private pay, and what a contract list does not prove." },
      { label: "Find a Professional", href: "/afh-club/find-a-professional", note: "Independent bookkeepers, insurance brokers and others." },
    ],
  },
  {
    id: "buying-selling",
    short: "Buying / selling",
    title: "Buying or selling a home or business",
    who: "You are buying an operating home, selling one, or planning an exit.",
    steps: [
      { label: "Buying or Selling an Adult Family Home", href: "/afh-club/buying-selling", note: "The change-of-ownership process from both sides." },
      { label: "Is It Really an Adult Family Home?", href: "/afh-club/afh-property-classifications", note: "Operating, former, AFH-ready or just marketing." },
      { label: "How to Look Up DSHS Violations", href: "/afh-club/violation-history-lookup", note: "Checking a home's inspection and enforcement record." },
      { label: "How to Finance an AFH", href: "/afh-club/how-to-finance-an-afh", note: "Loan types for the real estate and the business." },
      { label: "Selling Your AFH Business at Retirement", href: "/afh-club/selling-your-business-at-retirement", note: "Timing, notice, and what a buyer will ask for." },
      { label: "AFH Listings", href: "/afh-club/listings", note: "Homes, businesses and leases for sale in Washington." },
    ],
  },
  {
    id: "evaluating",
    short: "Evaluating",
    title: "Evaluating a property or investment",
    who: "You are comparing houses, running numbers, or studying the market.",
    steps: [
      { label: "AFH Property Score", href: "/afh-club/afh-property-score", note: "How well a specific house fits adult family home use." },
      { label: "AFH ROI Calculator", href: "/afh-club/afh-roi-calculator", note: "Income, expenses and return from your own assumptions." },
      { label: "AFH Valuation Estimator", href: "/afh-club/afh-valuation-estimator", note: "A starting range for the real estate and the business." },
      { label: "WABO Checklist & Technical Requirements", href: "/afh-club/wabo-technical-guide", note: "Bedroom types, escape windows, ramps and doors." },
      { label: "Washington AFHs by the Numbers", href: "/afh-club/washington-afh-data", note: "Every licensed home counted by county, size and contract." },
      { label: "Directory of Licensed Homes", href: "/afh-club/homes", note: "Every licensed adult family home, by county and city." },
    ],
  },
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
  datePublished: "2026-09-29",
  dateModified: "2026-09-29",
  author: articleAuthor,
  publisher: articlePublisher,
  about: { "@type": "Thing", name: "Adult family homes in Washington State" },
  isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
};

const CSS = `
.afhp { background: #ffffff; }
.afhp .afhp-wrap { max-width: 960px; margin: 0 auto; }
.afhp .afhp-narrow { max-width: 760px; }
.afhp p { font-family: 'DM Sans', sans-serif !important; font-size: 18px !important; line-height: 1.7 !important; color: #1c1917 !important; margin: 0 0 14px !important; }
.afhp .afhp-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: #0a5648 !important; margin: 0 0 12px !important; }
.afhp h1.afhp-h1 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(30px, 4.6vw, 46px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #192A19 !important; margin: 0 0 18px !important; text-wrap: balance; }
.afhp h2.afhp-h2 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(24px, 3.2vw, 30px) !important; line-height: 1.2 !important; font-weight: 700 !important; color: #192A19 !important; margin: 0 0 14px !important; text-wrap: balance; scroll-margin-top: 110px; }
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
.afhp .afhp-path { background: #ffffff; border: 1px solid #ddd6cc; border-top: 4px solid #0a5648; border-radius: 10px; padding: 20px 22px; scroll-margin-top: 110px; }
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

const AFHPillarGuide = () => (
  <div className="afhp">
    <style>{CSS}</style>
    <SEOHead title={`${TITLE} | AFH Club`} description={DESCRIPTION} canonical={CANONICAL} ogType="article" schemaJson={schema} />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Washington Adult Family Home Guide", url: CANONICAL },
      ]}
    />
    <Header />
    <main id="main-content">
      <section style={{ background: "#edf0f3", padding: "40px 16px 36px", borderBottom: "3px solid #0a5648" }}>
        {/* index.css zeroes the first section's top padding sitewide; the gap goes inside. */}
        <div className="afhp-wrap" style={{ paddingTop: 32 }}>
          <div className="afhp-narrow">
            <p className="afhp-eyebrow">AFH Club · Start here</p>
            <h1 className="afhp-h1">{TITLE}</h1>
            <p style={{ fontSize: 20 }}>
              For anyone opening, running, buying, selling or investing in an adult family home in Washington: the rules that
              matter, in plain English, with a path to the right guide for what you are doing.
            </p>
            <div className="afhp-answer">
              <p className="afhp-answer-label">The short answer</p>
              <p>
                An adult family home is a regular house licensed by DSHS to care for two to six adults who are not related to the
                provider, or up to eight with DSHS approval. The license belongs to the provider, not the house, so it never
                transfers in a sale: every new owner applies for a new one. Most homes are paid mainly by Medicaid, at a daily
                rate set by each resident's CARE classification and where the home is.
              </p>
            </div>
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
          <div className="afhp-jump" role="navigation" aria-label="Jump to a path">
            {PATHS.map((pa) => (
              <a key={pa.id} href={`#${pa.id}`}>{pa.short}</a>
            ))}
            <Link to="/afh-club/glossary">Glossary</Link>
          </div>
        </div>
      </section>

      <Section bg="#ffffff">
        <div className="afhp-narrow">
          <h2 className="afhp-h2">Key takeaways</h2>
          <ul className="afhp-list">
            <li><strong>Two approvals, not one.</strong> The local building official passes the house; DSHS licenses the provider. A passed building inspection is not a license.</li>
            <li><strong>The license never transfers.</strong> A buyer applies for a new license, and the seller gives DSHS and every resident 60 days' written notice.</li>
            <li><strong>The provider must be qualified.</strong> For an LLC or corporation, that means its entity representative: 1,000 hours of direct care experience, AFH Administrator Training and a background check, whether you buy a home or start from scratch.</li>
            <li><strong>Medicaid drives the market.</strong> {p(stats.shares.medicaid)} of homes hold a Medicaid contract, and each resident's CARE classification sets the daily rate.</li>
            <li><strong>Specialty contracts belong to the owner.</strong> ECS and SBS contracts do not transfer in a sale; a buyer must be approved for them separately.</li>
            <li><strong>Check the record yourself.</strong> The DSHS locator shows every licensed home and three years of enforcement. Not listed means not licensed.</li>
          </ul>
        </div>
      </Section>

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
          itself says the fee is set in the state budget.
        </p>
      </Section>

      <Section bg="#ffffff">
        <h2 className="afhp-h2">Choose your path</h2>
        <p style={{ maxWidth: 760 }}>Each path lists the AFH Club guides in the order most people need them.</p>
        <div className="afhp-paths">
          {PATHS.map((pa) => (
            <div key={pa.id} id={pa.id} className="afhp-path">
              <h3 className="afhp-h3">{pa.title}</h3>
              <p className="afhp-who">{pa.who}</p>
              <ol className="afhp-steps">
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
        <div className="afhp-narrow afhp-qa">
          <div>
            <h2 className="afhp-h2" id="license-transfer">Does the license transfer when an adult family home is sold?</h2>
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

          <div>
            <h2 className="afhp-h2" id="timeline">How long does licensing take?</h2>
            <p>
              DSHS does not promise a timeline. It posts its application queue instead: in late September 2026 it was working on
              applications received in May 2026, and it allows up to 60 days once an application is complete (
              <a className="afhp-link" href={BAAU_QUEUE} target="_blank" rel="noopener noreferrer">DSHS processing timeline</a>). The local
              building inspection must be passed before the home can be licensed. DSHS told AFH Club in writing that once it approves a
              license, it emails the license letter and license to the new provider within a day.
            </p>
            <More to="/afh-club/licensing-certification">Read AFH Licensing & Certification</More>
          </div>

          <div>
            <h2 className="afhp-h2" id="payment">How do adult family homes get paid?</h2>
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

          <div>
            <h2 className="afhp-h2" id="building">What does the house itself need?</h2>
            <p>
              The local city or county building official inspects the house against DSHS form 15-604, the Adult Family Home Local
              Building Inspection Checklist, before the home can be licensed (
              <a className="afhp-link" href={WAC("388-76-10700")} target="_blank" rel="noopener noreferrer">WAC 388-76-10700</a>). It covers
              bedroom exits and classifications, emergency escape windows, smoke and carbon monoxide alarms, doors, ramps, stairs,
              bathrooms and fire access. WABO helped write the checklist but does not inspect. Homes licensed after September 20,
              2026 also need interior doors at least 27 inches wide wherever residents pass through.
            </p>
            <More to="/afh-club/building-inspection">Read Building Requirements & Inspections</More>
          </div>

          <div>
            <h2 className="afhp-h2" id="inspections">How often are homes inspected, and where is the record?</h2>
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

          <div>
            <h2 className="afhp-h2" id="training">What training does an owner need?</h2>
            <p>
              A provider, entity representative or resident manager needs 1,000 hours of direct care to vulnerable adults within
              the previous 60 months (licensed physicians, physician assistants and nurses are exempt). A new license applicant, or
              an entity's representative, also completes AFH Administrator Training of at least 48 hours. All three need specialty
              training before serving residents with dementia, mental illness or developmental disabilities. Most caregivers complete 75 hours of training and a Home Care Aide certification, then 12 hours of
              continuing education a year.
            </p>
            <More to="/afh-club/training-education">Read Training & Education Requirements</More>
          </div>
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

export default AFHPillarGuide;
