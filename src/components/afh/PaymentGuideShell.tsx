import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToAFHClub from "@/components/BackToAFHClub";
import PageFAQ from "@/components/PageFAQ";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

/**
 * Shell shared by the three "how AFHs get paid" guides (Sept 2026):
 *
 *   /afh-club/afh-payment-field-guide            the hub — which system is which
 *   /afh-club/care-classifications-a-through-e   Medicaid base rates (CARE, A–E)
 *   /afh-club/cbhs-tiers                         CBHS supportive-supervision tiers
 *
 * One shell so the hero, cover, series navigation, disclaimer, and FAQ stay
 * identical across the set. Audience is AFH Club's: buyers, sellers, owners,
 * investors. Nothing here is written for a family placing a parent.
 */

export const TEAL = "#0f766e";
export const TEAL_DARK = "#0b5b55";
export const NAVY = "#1B3A6B";
export const INK = "#141210";
const FONT = "'DM Sans', system-ui, sans-serif";

export const gs = {
  h2: { fontSize: 28, fontWeight: 700, color: NAVY, margin: "40px 0 12px", lineHeight: 1.25, fontFamily: FONT } as React.CSSProperties,
  h3: { fontSize: 22, fontWeight: 700, color: TEAL_DARK, margin: "24px 0 8px", lineHeight: 1.3, fontFamily: FONT } as React.CSSProperties,
  p: { fontSize: 19, lineHeight: 1.7, color: INK, margin: "0 0 16px", fontFamily: FONT } as React.CSSProperties,
  li: { fontSize: 18, lineHeight: 1.6, color: INK, marginBottom: 8, fontFamily: FONT } as React.CSSProperties,
  card: { background: "#fff", border: `2px solid ${TEAL}`, borderRadius: 14, padding: "1.5rem 1.4rem", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" } as React.CSSProperties,
  callout: { background: NAVY, color: "#fff", borderRadius: 14, padding: "1.6rem 1.5rem", margin: "24px 0", fontFamily: FONT } as React.CSSProperties,
  warn: { background: "#fff7ed", border: "2px solid #c2410c", borderRadius: 14, padding: "1.3rem 1.4rem", margin: "24px 0", fontFamily: FONT } as React.CSSProperties,
  th: { textAlign: "left", padding: "10px 12px", fontSize: 16, fontWeight: 700, color: "#fff", background: NAVY, fontFamily: FONT } as React.CSSProperties,
  td: { padding: "10px 12px", fontSize: 17, lineHeight: 1.5, color: INK, borderBottom: "1px solid #e5e0d6", verticalAlign: "top", fontFamily: FONT } as React.CSSProperties,
  link: { color: TEAL, fontWeight: 700 } as React.CSSProperties,
};

export type GuideId = "hub" | "care" | "cbhs";

export const GUIDES: Record<GuideId, { href: string; title: string; short: string; blurb: string }> = {
  hub: {
    href: "/afh-club/afh-payment-field-guide",
    title: "Tiers, Levels, and Classifications: A Field Guide to How Washington AFHs Get Paid",
    short: "The Field Guide",
    blurb: "Four separate systems, who sets each one, and which survive a sale.",
  },
  care: {
    href: "/afh-club/care-classifications-a-through-e",
    title: "A Through E: How CARE Classifications Set an Adult Family Home's Medicaid Income",
    short: "A Through E",
    blurb: "The Medicaid base rate: seventeen classifications and what they pay.",
  },
  cbhs: {
    href: "/afh-club/cbhs-tiers",
    title: "CBHS Tiers Explained: The Behavioral Health Add-On Behind Some AFH Income",
    short: "CBHS Tiers",
    blurb: "Six tiers of supportive supervision, paid on top of the base rate.",
  },
};

interface ShellProps {
  id: GuideId;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  lede: string;
  cover: { src: string; alt: string };
  dateModified: string;
  faqs: { question: string; answer: string }[];
  faqHeading: string;
  disclaimer: string;
  children: React.ReactNode;
}

export const Table = ({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) => (
  <div style={{ overflowX: "auto", margin: "16px 0 24px", borderRadius: 10, border: "1px solid #e5e0d6", background: "#fff" }}>
    <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 460 }}>
      <thead>
        <tr>{head.map((h) => <th key={h} style={gs.th}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>{r.map((c, j) => <td key={j} style={{ ...gs.td, fontWeight: j === 0 ? 700 : 400, whiteSpace: j === 0 ? "nowrap" : "normal" }}>{c}</td>)}</tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PaymentGuideShell = ({ id, seoTitle, seoDescription, eyebrow, lede, cover, dateModified, faqs, faqHeading, disclaimer, children }: ShellProps) => {
  const guide = GUIDES[id];
  const others = (Object.keys(GUIDES) as GuideId[]).filter((g) => g !== id);
  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          author: { "@type": "Person", name: `${FEATURED_BROKER.name}` },
          datePublished: "2026-09-18",
          dateModified,
          image: `https://realpropertyplanning.com${cover.src}`,
          url: `https://realpropertyplanning.com${guide.href}`,
        }}
      />
      <Header />
      <main>
        <div style={{ background: "#f5f2ec", padding: "48px 24px 40px", borderBottom: `3px solid ${TEAL}` }}>
          <div style={{ maxWidth: 900, margin: "0 auto", paddingTop: "var(--header-height, 100px)" }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: TEAL_DARK, marginBottom: 10, fontFamily: FONT }}>{eyebrow}</p>
            <h1 style={{ fontSize: "clamp(30px,4.2vw,44px)", fontWeight: 700, color: INK, marginBottom: 12, lineHeight: 1.2, fontFamily: FONT }}>{guide.title}</h1>
            <p style={{ ...gs.p, maxWidth: 720, margin: 0 }}>{lede}</p>
          </div>
        </div>

        <div style={{ background: "#f5f2ec", padding: "2rem 1rem 3rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div className="pg-top" style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 28, alignItems: "start" }}>
              <img
                src={cover.src}
                alt={cover.alt}
                style={{ width: "100%", maxWidth: 340, height: "auto", borderRadius: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.15)", justifySelf: "center" }}
                decoding="async"
                width={1024}
                height={1365}
              />
              <div style={gs.card}>
                <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: TEAL_DARK, margin: "0 0 10px", fontFamily: FONT }}>A three-part series</p>
                <p style={{ ...gs.p, fontSize: 18 }}>
                  "Tier," "level," and "classification" get used interchangeably in AFH conversations. They are different systems, and each affects a home's income differently.
                </p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {(Object.keys(GUIDES) as GuideId[]).map((g) => (
                    <li key={g} style={{ ...gs.li, padding: "10px 0", borderTop: "1px solid #e5e0d6", marginBottom: 0 }}>
                      {g === id ? (
                        <span><strong>{GUIDES[g].short}</strong> <span style={{ color: TEAL_DARK, fontWeight: 700 }}>· you are here</span><br /><span style={{ fontSize: 16 }}>{GUIDES[g].blurb}</span></span>
                      ) : (
                        <span><Link to={GUIDES[g].href} style={gs.link}>{GUIDES[g].short}</Link><br /><span style={{ fontSize: 16 }}>{GUIDES[g].blurb}</span></span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {children}

            <div style={{ ...gs.card, marginTop: 36 }}>
              <h2 style={{ ...gs.h2, marginTop: 0, fontSize: 24 }}>Keep reading</h2>
              <ul style={{ margin: 0, paddingLeft: 22 }}>
                {others.map((g) => (
                  <li key={g} style={gs.li}><Link to={GUIDES[g].href} style={gs.link}>{GUIDES[g].title}</Link></li>
                ))}
                <li style={gs.li}><Link to="/afh-club/afh-valuation-estimator" style={gs.link}>AFH Valuation Estimator</Link> and <Link to="/afh-club/how-to-finance-an-afh" style={gs.link}>How to Finance an Adult Family Home</Link></li>
                <li style={gs.li}><Link to="/afh-club/buying-selling" style={gs.link}>Buying or Selling an AFH</Link>: the change-of-ownership process and what transfers</li>
                <li style={gs.li}><Link to="/afh-club/listings" style={gs.link}>Adult family homes for sale in Washington</Link>: properties, businesses, and leases currently on the market</li>
              </ul>
            </div>

            <p style={{ ...gs.p, fontSize: 17, color: "#2b2825", marginTop: 28 }}>{disclaimer}</p>
          </div>
        </div>
        <style>{`@media (max-width: 760px) { .pg-top { grid-template-columns: 1fr !important; } }`}</style>
        <PageFAQ faqs={faqs} heading={faqHeading} eyebrow="Frequently Asked Questions" id={`afh-payment-${id}`} />
        <BackToAFHClub />
      </main>
      <Footer />
    </>
  );
};

export default PaymentGuideShell;
