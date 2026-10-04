import { useState } from "react";
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
import {
  RULE_CHANGES,
  PENDING_RULES,
  RULE_CATEGORIES,
  OUTDATED_ADVICE,
  RULES_LAST_VERIFIED,
  type RuleCategory,
} from "@/data/afhRuleChanges";

/**
 * Washington AFH Rules Have Changed: Old Requirements vs. Today's Standards
 * (Sept 29, 2026). Every rule row lives in src/data/afhRuleChanges.ts, which
 * the prerender also reads; this file is layout and explanation only.
 * Review quarterly: the test fails when a row's verified date is > 120 days old.
 */

const PATH = "/afh-club/washington-afh-rule-changes";
const CANONICAL = `https://realpropertyplanning.com${PATH}`;
const TITLE = "Washington AFH Rules Have Changed: Old Requirements vs. Today's Standards";
const COVER = "/afh-rule-changes-cover.webp";
const DESCRIPTION =
  "Every Washington adult family home rule change since 2023, side by side: the old requirement, today's rule, the effective date, who it affects and the official citation, plus proposals that are not yet law.";

const fmt = (iso: string) => new Date(iso + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
const fmtShort = (iso: string) => new Date(iso + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
const byNewest = [...RULE_CHANGES].sort((a, b) => b.effective.localeCompare(a.effective) || a.topic.localeCompare(b.topic));
const ACTIVE = RULE_CHANGES.filter((r) => !r.status).length;
const WAC = (cite: string) => `https://app.leg.wa.gov/WAC/default.aspx?cite=${cite}`;

const FAQS = [
  {
    question: "What Washington adult family home rules changed in 2026?",
    answer:
      "Effective September 20, 2026 (WSR 26-17-004): homes licensed after that date need 27-inch interior doors where residents pass through; partial evacuation drills are required at least every two months; resident records must hold the signed notice-of-rights acknowledgement; a resident may not sleep in a bedroom DSHS has not inspected and approved; and license denial became mandatory for an applicant who operates other homes without meeting the multiple-home provider requirements. Earlier in 2026, Medicaid residency agreements became required (January 1), the rules on posting stop placement orders were made more specific (March 15), and the Washington Supreme Court ended the minimum-wage exemption for AFH live-in caregivers (July 9).",
  },
  {
    question: "Does a new AFH rule apply to homes that are already licensed?",
    answer:
      "It depends on the rule's own wording. Building rules usually say \"homes licensed after\" a date, so they apply to new licenses only; DSHS confirmed a continuously licensed home sold through a change of ownership keeps the building rules it was first licensed under. Operating rules, such as drills, records and residency agreements, apply to every home from their effective date.",
  },
  {
    question: "What is the difference between a proposed and an adopted WAC rule?",
    answer:
      "A CR-101 is a notice that an agency is considering a rule. A CR-102 publishes the proposed text for public comment. Only a CR-103, the adopted rule, changes the law, usually 31 days after filing. Until then a proposal has no legal effect.",
  },
  {
    question: "Is the WAC website always up to date?",
    answer:
      "Not always. After WSR 26-17-004 took effect, the codified page for WAC 388-76-10895 still showed drills \"every sixty days\" although the adopted filing changed it to \"every two months.\" When they differ, the adopted filing in the Washington State Register controls.",
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
  dateModified: RULES_LAST_VERIFIED,
  author: articleAuthor,
  publisher: articlePublisher,
  isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
};

const CSS = `
.afhr { background: #ffffff; }
.afhr .afhr-wrap { max-width: 960px; margin: 0 auto; }
.afhr .afhr-narrow { max-width: 760px; }
.afhr p { font-family: 'DM Sans', sans-serif !important; font-size: 18px !important; line-height: 1.7 !important; color: #1c1917 !important; margin: 0 0 14px !important; }
.afhr .afhr-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: #0b5c8a !important; margin: 0 0 12px !important; }
.afhr h1.afhr-h1 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(30px, 4.4vw, 44px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #0f1b2b !important; margin: 0 0 18px !important; text-wrap: balance; }
.afhr h2.afhr-h2 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(24px, 3.2vw, 30px) !important; line-height: 1.2 !important; font-weight: 700 !important; color: #0f1b2b !important; margin: 0 0 14px !important; text-wrap: balance; scroll-margin-top: 110px; }
.afhr h3.afhr-h3 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: 20px !important; line-height: 1.3 !important; font-weight: 700 !important; color: #0f1b2b !important; margin: 0 0 8px !important; }
.afhr .afhr-hero { display: grid; gap: 28px; align-items: start; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 900px) { .afhr .afhr-hero { grid-template-columns: minmax(0, 1fr) 250px; } }
.afhr .afhr-cover { width: 100%; max-width: 300px; height: auto; aspect-ratio: 3 / 4; border-radius: 8px; box-shadow: 0 12px 30px rgba(10,22,40,0.35); justify-self: center; }
.afhr .afhr-answer { background: #ffffff; border: 1px solid #cfdbe6; border-left: 5px solid #0b5c8a; border-radius: 10px; padding: 18px 22px; }
.afhr .afhr-answer p { font-size: 18px !important; margin: 0 0 10px !important; }
.afhr .afhr-answer p:last-child { margin: 0 !important; }
.afhr .afhr-label { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase; color: #0b5c8a !important; margin: 0 0 6px !important; }
.afhr ul.afhr-list, .afhr ol.afhr-list { margin: 0 0 14px 22px; padding: 0; font-family: 'DM Sans', sans-serif; font-size: 18px; line-height: 1.7; color: #1c1917; }
.afhr ul.afhr-list { list-style: disc !important; }
.afhr ol.afhr-list { list-style: decimal !important; }
.afhr .afhr-list li { display: list-item !important; margin-bottom: 8px; font-size: 18px !important; }
.afhr a.afhr-link, .afhr .afhr-small a, .afhr td a, .afhr .afhr-card a { color: #1B3A6B !important; text-decoration: underline !important; text-underline-offset: 3px; font-size: inherit !important; }
.afhr .afhr-small { font-size: 15px !important; color: #3f3a35 !important; }
.afhr .afhr-tablewrap { overflow-x: auto; border: 1px solid #e2ddd5; border-radius: 10px; background: #ffffff; }
.afhr table { width: 100%; border-collapse: collapse; font-family: 'DM Sans', sans-serif; font-size: 16px; color: #1c1917; }
.afhr th { text-align: left; font-weight: 700; background: #eef3f7; padding: 10px 14px; border-bottom: 1px solid #cfdbe6; }
.afhr td { padding: 11px 14px; border-bottom: 1px solid #eee9e1; vertical-align: top; line-height: 1.5; }
.afhr tr:last-child td { border-bottom: 0; }
.afhr td.afhr-old { color: #6b4a2a; }
.afhr .afhr-kinds { display: grid; gap: 14px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 760px) { .afhr .afhr-kinds { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.afhr .afhr-kind { background: #ffffff; border: 1px solid #ddd6cc; border-radius: 10px; padding: 16px 18px; }
.afhr .afhr-kind p { font-size: 16px !important; margin: 0 !important; }
.afhr .afhr-filters { display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 18px; }
.afhr .afhr-filters button { padding: 8px 14px; border-radius: 999px; border: 1px solid #b7c9d8; background: #ffffff; color: #0b5c8a; font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 600; cursor: pointer; }
.afhr .afhr-filters button[aria-pressed="true"] { background: #0b5c8a; border-color: #0b5c8a; color: #ffffff; }
.afhr .afhr-cards { display: grid; gap: 14px; }
.afhr .afhr-card { background: #ffffff; border: 1px solid #ddd6cc; border-left: 5px solid #0b5c8a; border-radius: 10px; padding: 18px 20px; scroll-margin-top: 110px; }
.afhr .afhr-card.afhr-ended { border-left-color: #a39a8f; background: #faf8f4; }
.afhr .afhr-meta { display: flex; flex-wrap: wrap; gap: 6px 10px; margin: 0 0 8px; font-family: 'DM Sans', sans-serif; font-size: 14px; }
.afhr .afhr-chip { display: inline-block; padding: 2px 10px; border-radius: 999px; background: #eef3f7; color: #0f1b2b; font-weight: 600; }
.afhr .afhr-chip.afhr-date { background: #0b5c8a; color: #ffffff; }
.afhr .afhr-chip.afhr-ended-chip { background: #e7e1d8; color: #4a443e; }
.afhr .afhr-ba { display: grid; gap: 10px; grid-template-columns: minmax(0, 1fr); margin: 8px 0 10px; }
@media (min-width: 760px) { .afhr .afhr-ba { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.afhr .afhr-ba > div { border-radius: 8px; padding: 12px 14px; }
.afhr .afhr-ba .afhr-was { background: #f7f1e8; }
.afhr .afhr-ba .afhr-now { background: #eef5fa; }
.afhr .afhr-ba p { font-size: 16px !important; line-height: 1.55 !important; margin: 0 !important; }
.afhr .afhr-ba .afhr-balabel { font-size: 13px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase; margin: 0 0 4px !important; color: #4a443e !important; }
.afhr dl.afhr-dl { margin: 0; display: grid; gap: 6px; font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.55; color: #2b2825; }
.afhr dl.afhr-dl div { display: grid; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 640px) { .afhr dl.afhr-dl div { grid-template-columns: 150px minmax(0, 1fr); gap: 10px; } }
.afhr dl.afhr-dl dt { font-weight: 700; color: #0f1b2b; }
.afhr dl.afhr-dl dd { margin: 0; }
.afhr .afhr-pending { background: #fffaf0; border: 1px dashed #c9a24c; border-radius: 10px; padding: 18px 20px; }
.afhr .afhr-pending .afhr-chip { background: #f3e3bd; color: #5a4210; }
`;

const Section = ({ bg, id, children }: { bg: string; id?: string; children: React.ReactNode }) => (
  <section id={id} style={{ background: bg, padding: "48px 16px" }}>
    <div className="afhr-wrap">{children}</div>
  </section>
);

const AFHRuleChanges = () => {
  const [cat, setCat] = useState<RuleCategory | "All">("All");
  const shown = byNewest.filter((r) => cat === "All" || r.category === cat);

  return (
    <div className="afhr">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SEOHead title={`${TITLE} | AFH Club`} description={DESCRIPTION} canonical={CANONICAL} ogType="article" schemaJson={schema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
          { name: "Washington AFH Rule Changes", url: CANONICAL },
        ]}
      />
      <Header />
      <main id="main-content">
        <section style={{ background: "#eef2f6", padding: "40px 16px 36px", borderBottom: "3px solid #0b5c8a" }}>
          {/* index.css zeroes the first section's top padding sitewide; the gap goes inside. */}
          <div className="afhr-wrap" style={{ paddingTop: 32 }}>
            <div className="afhr-hero">
              <div className="afhr-narrow">
                <p className="afhr-eyebrow">AFH Club · Regulatory update · Last verified {fmt(RULES_LAST_VERIFIED)}</p>
                <h1 className="afhr-h1">{TITLE}</h1>
                <p style={{ fontSize: 20 }}>
                  A practical guide to replaced rules, updated building requirements, licensing changes, what older homes keep,
                  and proposals that are not yet law, for owners, buyers, sellers and the professionals who work with them.
                </p>
                <div className="afhr-answer">
                  <p className="afhr-label">The short answer</p>
                  <p>
                    The tracker below lists {ACTIVE} changes since 2023 that are still in force and matter to owners and buyers: new
                    rules, laws, payment changes and a court decision, from seven- and eight-bed licensing and toilet counts to
                    bedroom approval, 27-inch doors, evacuation drills, Medicaid residency agreements and caregiver wages.
                  </p>
                  <p>
                    Before relying on anything you read about AFH rules, including older AFH Club material, check the date against
                    the tracker below.
                  </p>
                </div>
              </div>
              <img
                src={COVER}
                alt="AFH Club regulatory update cover: Washington AFH Rules Have Changed, old requirements vs. today's standards"
                className="afhr-cover"
                width={1024}
                height={1365}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <Section bg="#ffffff">
          <div className="afhr-narrow">
            <h2 className="afhr-h2">The changes that matter most</h2>
            <ul className="afhr-list">
              <li><strong>Bedrooms need DSHS approval.</strong> Since September 20, 2026, no resident may sleep in a bedroom DSHS has not inspected and approved.</li>
              <li><strong>Doors, for new licenses only.</strong> Homes licensed after September 20, 2026 need 27-inch interior doors where residents pass through. A continuously licensed home sold to a new owner is exempt; a lapsed one is not.</li>
              <li><strong>Seven and eight beds.</strong> Possible since August 2023 after 24 months of experience, and since March 2025 possible without sprinklers if every resident can evacuate unaided.</li>
              <li><strong>Behavioral income.</strong> CBHS replaced BHPC in July 2024, SBS now requires a resident to be found ineligible for CBHS first, and Meaningful Day is gone.</li>
              <li><strong>Staffing costs.</strong> The live-in caregiver wage exemption is gone (July 2026), and new caregivers have more time to certify through 2027.</li>
              <li><strong>Paperwork buyers should inspect.</strong> Medicaid residency agreements (since January 2026) and signed notice-of-rights acknowledgements (since September 2026).</li>
            </ul>
          </div>
        </Section>

        <Section bg="#f7f4ef">
          <h2 className="afhr-h2">Old advice that may no longer be reliable</h2>
          <p style={{ maxWidth: 760 }}>You will still find these online, in older courses, and in some listings. Each links to the change that replaced it.</p>
          <div className="afhr-tablewrap">
            <table>
              <caption className="sr-only">Outdated adult family home advice and what the rule says now</caption>
              <thead><tr><th scope="col">What you may read</th><th scope="col">What the rule says now</th></tr></thead>
              <tbody>
                {OUTDATED_ADVICE.map((o) => (
                  <tr key={o.ruleId}>
                    <td className="afhr-old">{o.claim}</td>
                    <td>{o.now} <a href={`#${o.ruleId}`}>Details</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section bg="#ffffff">
          <h2 className="afhr-h2">Four kinds of rules, and why the difference matters</h2>
          <div className="afhr-kinds">
            <div className="afhr-kind"><h3 className="afhr-h3">Statutes (RCW)</h3><p>Laws passed by the Legislature, such as chapter 70.128 RCW. They set the framework: what an AFH is, capacity, inspections, enforcement.</p></div>
            <div className="afhr-kind"><h3 className="afhr-h3">Rules (WAC)</h3><p>Adopted by DSHS and other agencies to carry out the statutes, such as chapter 388-76 WAC. Most day-to-day requirements live here.</p></div>
            <div className="afhr-kind"><h3 className="afhr-h3">Building code and the checklist</h3><p>Construction and life-safety standards (WAC 51-51-0330) applied by the local building official using DSHS form 15-604. Passing it is not a license.</p></div>
            <div className="afhr-kind"><h3 className="afhr-h3">Budgets, contracts, notices and courts</h3><p>Fees and add-ons come from the state budget and the AFH Council agreement; DSHS notices explain how they apply; court decisions can overturn a statute. None of these is a WAC rule, and each can change on its own schedule.</p></div>
          </div>
        </Section>

        <Section bg="#f7f4ef">
          <div className="afhr-narrow">
            <h2 className="afhr-h2" id="existing-homes">Does the new rule apply to existing homes?</h2>
            <p>Read the rule's own words. Three patterns cover almost every change on this page:</p>
            <ul className="afhr-list">
              <li><strong>"Homes licensed after [date]"</strong> applies to new licenses only. The 27-inch doors (after September 20, 2026) and the toilet ratio (after August 1, 2023) work this way, and the AFH building code section does not apply to homes licensed before July 1, 2001.</li>
              <li><strong>Operating rules</strong> apply to every home from the effective date: drills, resident records, residency agreements, rosters, posting a stop placement.</li>
              <li><strong>Payment rules</strong> apply by resident or by date of assessment. The SBS change applies to assessments on or after July 1, 2025, not to residents approved earlier.</li>
            </ul>
          </div>
        </Section>

        <Section bg="#ffffff">
          <div className="afhr-narrow">
            <h2 className="afhr-h2" id="chow">What changes during a change of ownership?</h2>
            <p>
              The license never transfers: the buyer applies for a new one (
              <a className="afhr-link" href={WAC("388-76-10105")} target="_blank" rel="noopener noreferrer">WAC 388-76-10105</a>). DSHS told AFH
              Club in writing that a continuously licensed home keeps the building rules it was first licensed under, so the new owner
              of such a home does not have to widen doors to 27 inches.
            </p>
            <p>Everything else is the new owner's from day one:</p>
            <ul className="afhr-list">
              <li>Every current operating rule, including the 2026 records and drill changes.</li>
              <li>Every provider qualification, including administrator training and 1,000 hours of experience.</li>
              <li>For a seven- or eight-bed home, the buyer must already have held an AFH license for at least 24 months to apply for the change of ownership (<a className="afhr-link" href={WAC("388-76-10032")} target="_blank" rel="noopener noreferrer">WAC 388-76-10032</a>).</li>
              <li>ECS and SBS contracts, which do not transfer and must be approved again.</li>
            </ul>
            <p>
              <Link className="afhr-link" to="/afh-club/buying-selling">Read Buying or Selling an Adult Family Home</Link>
            </p>
          </div>
        </Section>

        <Section bg="#f7f4ef">
          <div className="afhr-narrow">
            <h2 className="afhr-h2">Grandfathered does not mean exempt from everything</h2>
            <p>
              An older home keeps the building standards it was licensed under only while its license continues. Three things end or
              narrow that protection:
            </p>
            <ul className="afhr-list">
              <li><strong>A lapsed license.</strong> A former AFH must meet today's rules to be licensed again, including 27-inch doors.</li>
              <li><strong>Construction.</strong> Work that changes exits or resident bedrooms needs the local building official's approval again (<a className="afhr-link" href={WAC("388-76-10700")} target="_blank" rel="noopener noreferrer">WAC 388-76-10700</a>), and since September 20, 2026 DSHS must also inspect and approve a bedroom before a resident sleeps in it.</li>
              <li><strong>Operating rules.</strong> Grandfathering covers the building, never staffing, records, drills, resident rights or payment rules.</li>
            </ul>
          </div>
        </Section>

        <Section bg="#ffffff" id="tracker">
          <h2 className="afhr-h2">The rule-change tracker</h2>
          <p style={{ maxWidth: 760 }}>
            Every adopted change since 2023, newest first. Each shows the old rule, today's rule, who it affects, the official citation,
            the filing that made the change, and the date AFH Club last checked it.
          </p>
          <div className="afhr-filters" role="group" aria-label="Filter changes by topic">
            {(["All", ...RULE_CATEGORIES] as const).map((c) => (
              <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}>
                {c}
              </button>
            ))}
          </div>
          <div className="afhr-cards">
            {shown.map((r) => (
              <article key={r.id} id={r.id} className={`afhr-card${r.status ? " afhr-ended" : ""}`}>
                <div className="afhr-meta">
                  <span className="afhr-chip afhr-date">{r.effectiveNote ?? `Effective ${fmtShort(r.effective)}`}</span>
                  <span className="afhr-chip">{r.category}</span>
                  <span className="afhr-chip">{r.kind}</span>
                  {r.status && <span className="afhr-chip afhr-ended-chip">{r.status === "replaced" ? "Replaced" : "Expired"}</span>}
                </div>
                <h3 className="afhr-h3">{r.topic}</h3>
                <div className="afhr-ba">
                  <div className="afhr-was"><p className="afhr-balabel">Before</p><p>{r.before}</p></div>
                  <div className="afhr-now"><p className="afhr-balabel">{r.status ? "Then" : "Now"}</p><p>{r.after}</p></div>
                </div>
                <dl className="afhr-dl">
                  <div><dt>Who it affects</dt><dd>{r.affects}</dd></div>
                  <div><dt>Practical impact</dt><dd>{r.impact}</dd></div>
                  <div><dt>Citation</dt><dd><a href={r.citation.href} target="_blank" rel="noopener noreferrer">{r.citation.label}</a></dd></div>
                  <div><dt>Made by</dt><dd><a href={r.filing.href} target="_blank" rel="noopener noreferrer">{r.filing.label}</a></dd></div>
                  <div><dt>Last verified</dt><dd>{fmt(r.verified)}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </Section>

        <Section bg="#f7f4ef" id="proposed">
          <div className="afhr-narrow">
            <h2 className="afhr-h2">Proposed is not the same as adopted</h2>
            <p>
              Washington rules move through three filings: a <strong>CR-101</strong> says the agency is considering a rule, a{" "}
              <strong>CR-102</strong> publishes proposed text for comment, and only a <strong>CR-103</strong> adopts it, usually taking
              effect 31 days later. Nothing below is law yet, and the final text can differ or never arrive. For example, DSHS proposed
              changes to the rule on licensing additional homes (WAC 388-76-10037) in 2026 and left them out of the adopted version.
            </p>
          </div>
          <div className="afhr-cards" style={{ maxWidth: 760 }}>
            {PENDING_RULES.map((p) => (
              <div key={p.id} className="afhr-pending">
                <div className="afhr-meta">
                  <span className="afhr-chip">Not yet law</span>
                  <span className="afhr-chip">{p.stage}</span>
                </div>
                <h3 className="afhr-h3">{p.topic}</h3>
                <ul className="afhr-list">
                  {p.proposes.map((x) => <li key={x}>{x}</li>)}
                </ul>
                <p className="afhr-small">
                  Filed {fmt(p.filed)} as <a href={p.filing.href} target="_blank" rel="noopener noreferrer">{p.filing.label}</a>. Last checked{" "}
                  {fmt(p.verified)}.
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section bg="#ffffff">
          <div className="afhr-narrow">
            <h2 className="afhr-h2">How to verify a rule yourself</h2>
            <ol className="afhr-list">
              <li>Open the section on the Legislature's WAC or RCW site and read the history line at the bottom: it lists every filing (WSR number) and its effective date.</li>
              <li>Open the newest WSR filing. If it differs from the codified page, the filing controls; the codified page can lag.</li>
              <li>For fees and add-ons, check the current DSHS notice or the AFH Council agreement, not the WAC.</li>
              <li>For proposals, look for a CR-103. A CR-101 or CR-102 alone changes nothing.</li>
              <li>When in doubt, ask DSHS Residential Care Services policy staff at rcspolicy@dshs.wa.gov and keep the written answer.</li>
            </ol>
          </div>
        </Section>

        <Section bg="#f7f4ef">
          <div className="afhr-narrow">
            <h2 className="afhr-h2">Questions to ask before buying or remodeling an AFH</h2>
            <ul className="afhr-list">
              <li>When was this home first licensed, and has the license ever lapsed?</li>
              <li>What changes have been made to exits or bedrooms since the last building inspection, and were they approved?</li>
              <li>Which residents are on CBHS, SBS or ECS, and what does each pay today?</li>
              <li>Does any income statement still include Meaningful Day?</li>
              <li>How are live-in caregivers paid, and has payroll been reviewed since July 2026?</li>
              <li>Does every Medicaid resident have a signed residency agreement, and every resident a signed notice-of-rights acknowledgement?</li>
              <li>For a seven- or eight-bed home: is there a sprinkler system, and does the license limit who the home may serve?</li>
            </ul>
            <p>
              Related: <Link className="afhr-link" to="/afh-club/washington-adult-family-home-guide">Washington Adult Family Homes: The Complete Guide</Link> ·{" "}
              <Link className="afhr-link" to="/afh-club/glossary">AFH Glossary</Link> ·{" "}
              <Link className="afhr-link" to="/afh-club/afh-property-classifications">Is It Really an Adult Family Home?</Link>
            </p>
          </div>
        </Section>

        <PageFAQ faqs={FAQS} heading="AFH Rule Changes: Common Questions" eyebrow="Frequently Asked Questions" id="afh-rules" />
      </main>
      <AuthorByline context="afh" />
      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default AFHRuleChanges;
