import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToAFHClub from "@/components/BackToAFHClub";
import AuthorByline from "@/components/AuthorByline";
import PageFAQ from "@/components/PageFAQ";
import ArticleCover from "@/components/ArticleCover";
import { gs, INK } from "@/components/afh/PaymentGuideShell";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";
import {
  AFH_MGMT,
  AFH_MGMT_FAQS,
  AFH_MGMT_QUESTIONS,
  AFH_MGMT_SOURCES,
  MANAGER_CAN,
  OWNER_KEEPS,
  TWO_MANAGERS,
} from "@/data/afhManagementCompanies";

/**
 * Hiring a Management Company for Your Washington State Adult Family Home (Oct 10, 2026).
 * Every rule, the sources, and what is deliberately left unanswered: see the
 * header of src/data/afhManagementCompanies.ts. The FAQs below also feed the
 * site's "Ask a question" box, which answers only from page FAQs.
 */

const FONT = "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif";
/** AFH Club hunter green, the Operate row's colour on Find a Professional. */
const GREEN = "#0a5648";

const Bullets = ({ items }: { items: string[] }) => (
  <ul style={{ margin: "0 0 16px", paddingLeft: 22 }}>
    {items.map((t) => (
      <li key={t} style={gs.li}>{t}</li>
    ))}
  </ul>
);

const AFHManagementCompanies = () => {
  const url = `https://realpropertyplanning.com${AFH_MGMT.PATH}`;

  return (
    <>
      <SEOHead
        title={AFH_MGMT.SEO_TITLE}
        description={AFH_MGMT.DESCRIPTION}
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: AFH_MGMT.TITLE,
          author: { "@type": "Person", name: FEATURED_BROKER.name },
          datePublished: AFH_MGMT.PUBLISHED,
          dateModified: AFH_MGMT.REVIEWED,
          url,
          ...(AFH_MGMT.COVER ? { image: `https://realpropertyplanning.com${AFH_MGMT.COVER}` } : {}),
        }}
      />
      <Header />
      <main>
        <div style={{ background: "#faf8f4", padding: "48px 24px 40px", borderBottom: `3px solid ${GREEN}` }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            {AFH_MGMT.COVER && <ArticleCover src={AFH_MGMT.COVER} alt="Cover art: Hiring an AFH Management Company" width={1086} height={1448} />}
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: GREEN, marginBottom: 10, fontFamily: FONT }}>Running an AFH · For owners &amp; investors</p>
            <h1 style={{ fontSize: "clamp(30px,4.2vw,44px)", fontWeight: 700, color: INK, marginBottom: 12, lineHeight: 1.2, fontFamily: FONT }}>{AFH_MGMT.TITLE}</h1>
            <p style={{ ...gs.p, maxWidth: 720, margin: 0 }}>
              What a management company can do for a Washington adult family home, what stays with you as the licensed owner, and the DSHS filing that has to come first.
            </p>
          </div>
        </div>

        <div style={{ background: "#faf8f4", padding: "2rem 1rem 3rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={gs.card}>
              <h2 style={{ ...gs.h2, marginTop: 0 }}>The short answer</h2>
              <p style={{ ...gs.p, marginBottom: 0 }}>{AFH_MGMT.SHORT_ANSWER}</p>
            </div>

            <h2 style={gs.h2}>Two jobs called "manager"</h2>
            <p style={gs.p}>
              Most confusion starts here. The rules use "manager" for a company you hire under a management agreement, and "resident manager" for the person in charge inside the home. They are different jobs with different limits.
            </p>
            {/* Two boxes rather than a table: at phone width a three-column table squeezed the
                "How many homes" column off the edge. Stacks below 640px. */}
            <div className="afhmgmt-two" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 14, margin: "16px 0 24px" }}>
              {TWO_MANAGERS.map((m) => (
                <div key={m.label} style={{ background: "#fff", border: "1px solid #e5e0d6", borderTop: `4px solid ${GREEN}`, borderRadius: 12, padding: "16px 18px", fontFamily: FONT }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: INK, marginBottom: 8, lineHeight: 1.25 }}>{m.label}</div>
                  <div style={{ fontSize: 18, lineHeight: 1.6, color: INK, marginBottom: 12 }}>{m.who}</div>
                  <div style={{ fontSize: 18, lineHeight: 1.5, color: INK }}>
                    <strong style={{ color: GREEN }}>How many homes:</strong> {m.howMany}
                  </div>
                  <div style={{ fontSize: 16, lineHeight: 1.5, color: "#2b2825", marginTop: 6 }}>{m.rule}</div>
                </div>
              ))}
            </div>
            <style dangerouslySetInnerHTML={{ __html: `@media (max-width: 640px) { .afhmgmt-two { grid-template-columns: 1fr !important; } }` }} />
            <p style={gs.p}>
              <strong>Can one person manage more than one home?</strong> As a resident manager, no: each home has its own person in charge, designated for one home at a time. As a management company, yes: a company can hold agreements with several homes and owners. Each of those homes still needs its own on-site person in charge.
            </p>
            <p style={gs.p}>
              The live-in rule has one exception: no one has to live in the home if it has staff 24 hours a day and someone who can make decisions is always present (WAC 388-76-10040). Whether that lets one resident manager oversee homes belonging to two different owners is not settled by the rules. Ask DSHS before planning around it.
            </p>

            <h2 style={gs.h2}>What a management company can do</h2>
            <p style={gs.p}>Whatever the written agreement assigns to it, acting as your agent. Typically:</p>
            <Bullets items={MANAGER_CAN} />

            <h2 style={gs.h2}>What stays with you, the licensed owner</h2>
            <p style={gs.p}>Hiring a manager does not hand over the license or the responsibility. Every management agreement must leave you with:</p>
            <Bullets items={OWNER_KEEPS} />

            <div style={gs.warn}>
              <p style={{ ...gs.p, margin: 0 }}>
                <strong>The line you cannot cross.</strong> If you give a manager so much that you are no longer running the home day to day, DSHS treats it as a change of ownership and may take action against the license (WAC 388-76-11055). "A management company can run the home for me" is exactly the arrangement the rules do not allow.
              </p>
            </div>

            <h2 style={gs.h2}>Filing with DSHS: the 60-day clock</h2>
            <p style={gs.p}>Before a management agreement starts, the home files a packet with DSHS:</p>
            <Bullets
              items={[
                "The written management agreement",
                "An organizational chart showing the home, the manager, and any related companies and staff",
                "A copy of the notice to residents",
                "Form DSHS 27-226, the attestation, signed by both the home and the manager",
              ]}
            />
            <p style={gs.p}>
              <strong>Timing:</strong> 60 days before the agreement takes effect, and residents and their representatives get written notice 60 days ahead. Changes to an existing agreement are filed 30 days ahead. A new applicant includes the agreement with the license application. DSHS can ask for more information or require changes (WAC 388-76-11050, 11065).
            </p>
            <p style={gs.p}>
              <strong>Where it goes:</strong> licensed homes email the form and attachments to RCSBOA@dshs.wa.gov, as the form itself directs.{" "}
              <a href="https://www.dshs.wa.gov/media/24326/download?inline" target="_blank" rel="noopener noreferrer" style={gs.link}>Open form DSHS 27-226</a>.
            </p>

            <h2 style={gs.h2}>Still to confirm with DSHS</h2>
            <p style={gs.p}>
              <strong>Can the management company be the resident manager's employer?</strong> The rules do not say. They keep ultimate responsibility for "all personnel issues" with the licensed home (WAC 388-76-11060), so whoever signs the paycheck, the owner has to remain in charge of who is placed in the home. Ask DSHS before setting it up with the company as employer. This page will be updated when DSHS answers in writing.
            </p>

            <div className="rpp-dark-surface" style={{ ...gs.callout, background: GREEN }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 12px", lineHeight: 1.3, fontFamily: FONT }}>Questions to ask a management company</h2>
              <ol style={{ margin: 0, paddingLeft: 0 }}>
                {/* Numbers written out: index.css strips list markers inside main. */}
                {AFH_MGMT_QUESTIONS.map((q, i) => (
                  <li key={q} style={{ listStyle: "none", display: "flex", gap: 10, fontSize: 19, lineHeight: 1.55, marginBottom: 8, color: "#fff", fontFamily: FONT }}>
                    <span style={{ fontWeight: 700, flex: "0 0 26px", whiteSpace: "nowrap" }}>{i + 1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ol>
            </div>

            <h2 style={gs.h2}>Finding a management company</h2>
            <p style={gs.p}>
              AFH Club lists an adult family home management company the site owner has met in person, in the Operate row of{" "}
              <Link to="/afh-club/find-a-professional" style={gs.link}>AFH Club Featured Professionals</Link>. No one pays to be listed, and Real Property Planning receives nothing if you hire them.
            </p>
            <p style={gs.p}>
              <strong>Thinking of owning more than one home yourself?</strong> That is a separate path. A second license needs 24 months on the first with no enforcement actions for significant violations; later ones need 12 months since the last (WAC 388-76-10037). See{" "}
              <Link to="/afh-club/ownership-structure" style={gs.link}>Buying as an Individual or Through an LLC</Link>.
            </p>

            <h2 style={gs.h2}>Sources</h2>
            <p style={{ ...gs.p, fontSize: 17 }}>Each rule was read in full on the Washington State Legislature's site on October 10, 2026.</p>
            <ul style={{ margin: "0 0 16px", paddingLeft: 22 }}>
              {AFH_MGMT_SOURCES.map((s) => (
                <li key={s.cite} style={{ ...gs.li, fontSize: 17 }}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" style={gs.link}>{s.cite}</a>: {s.title}
                </li>
              ))}
            </ul>

            <p style={{ ...gs.p, fontSize: 17, color: "#2b2825", marginTop: 28 }}>
              This page is general educational information for adult family home owners, buyers and investors. It is not legal advice, and it does not describe any particular company's services. Rules change; confirm current requirements with DSHS Residential Care Services.
            </p>
          </div>
        </div>
        <div style={{ padding: "0 16px" }}>
          <AuthorByline context="afh" />
        </div>
        <PageFAQ faqs={AFH_MGMT_FAQS} heading="AFH Management Companies: Common Questions" eyebrow="Frequently Asked Questions" id="afh-management-companies" />
        <BackToAFHClub />
      </main>
      <Footer />
    </>
  );
};

export default AFHManagementCompanies;
