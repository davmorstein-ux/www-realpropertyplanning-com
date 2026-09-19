import { Link } from "react-router-dom";
import PaymentGuideShell, { GUIDES, Table, gs } from "@/components/afh/PaymentGuideShell";

/**
 * Tiers, Levels, and Classifications: A Field Guide to How Washington AFHs
 * Get Paid (Sept 2026). The hub of the three-part payment series: it names the
 * four systems people conflate and links out to the two deep dives. It should
 * stay short — it is a map, not a lesson in any one system.
 *
 * Sources checked Sept 18, 2026: WAC 388-106-0115 (CARE residential groups),
 * WAC 182-561-0500 (CBHS tiers), DSHS CHOW page (specialty contracts do not
 * transfer), WAC 388-106-1810/1840 (the 2026 five-tier PE rule is in-home only).
 */

const FAQS = [
  { question: "Are Washington adult family homes classified as Tier 1 through Tier 5?", answer: "No. Homes are not tiered at all. The systems people call tiers are assigned to individual residents or, for specialty contracts, held by the owner. The numbered tiers an AFH owner usually means are CBHS supportive supervision tiers, which run 1 through 6 and apply only to residents with qualifying behavioral health needs." },
  { question: "What is the difference between a CARE classification and a CBHS tier?", answer: "A CARE classification (A Low through E High) is assigned by DSHS to every Medicaid resident and sets the base daily rate. A CBHS tier (1 through 6) is a separate Health Care Authority benefit for residents with qualifying behavioral needs, defined by hours of dedicated staff supervision per day, and paid in addition to the base rate." },
  { question: "What is the 2026 five-tier personal care rule I keep finding online?", answer: "It is part of Washington's long-term services presumptive eligibility program. It sets Tier 1 through 5 monthly personal care hours for people receiving care in their own home while their Medicaid application is processed. It does not apply to adult family home residents and has no effect on AFH income." },
  { question: "Which AFH income survives a sale?", answer: "It depends on the system. Base CARE classifications follow each resident. CBHS tiers also follow the resident and are reviewed at least yearly. Specialty contracts such as ECS, SBS and Meaningful Day belong to the owner and do not transfer in a change of ownership; a buyer must qualify for their own. Private-pay rates are set by the home and can be changed by the next owner." },
];

const AFHPaymentFieldGuide = () => (
  <PaymentGuideShell
    id="hub"
    seoTitle="AFH Tiers, Levels and Classifications Explained | How Washington Adult Family Homes Get Paid | AFH Club"
    seoDescription="CARE classifications A through E, CBHS Tiers 1 through 6, ECS and SBS specialty contracts, and private-pay care levels are four different systems. A field guide for Washington AFH buyers, sellers and owners: who sets each one, who it applies to, and what survives a sale."
    eyebrow="For buyers, sellers & owners"
    lede="Spend an afternoon with adult family home owners and you will hear about Tier 3 residents, C High, Level 4 care, and the ECS contract, sometimes in one sentence. These are not one system. They are four."
    cover={{ src: "/afh-payment-field-guide-cover.webp", alt: "Which Tier? The AFH Payment Field Guide — four separate systems: A–E classifications, CBHS tiers, specialty contracts, and private-pay levels" }}
    dateModified="2026-09-18"
    faqs={FAQS}
    faqHeading="AFH Tiers and Classifications: Common Questions"
    disclaimer="This page is general educational information for people buying, selling, or operating an adult family home. It is not legal, financial, or reimbursement advice. Program rules and rates change; confirm current details with DSHS and the Washington State Health Care Authority."
  >
    <h2 style={gs.h2}>Four systems, run by different people</h2>
    <p style={gs.p}>
      Each one is set by someone different, attaches to something different, and behaves differently when a home changes hands. If you are buying, selling, or operating an AFH, mixing them up leads to bad revenue assumptions. Here is the map.
    </p>

    <Table
      head={["System", "Who sets it", "Attached to", "Labels you'll hear"]}
      rows={[
        ["CARE classifications", "DSHS", "Each Medicaid resident", "A Low … E High"],
        ["CBHS tiers", "Health Care Authority", "Residents with qualifying behavioral needs", "Tier 1 … Tier 6"],
        ["Specialty contracts", "DSHS", "The owner / the home", "ECS, SBS, Meaningful Day"],
        ["Private-pay care levels", "The home itself", "Each private-pay resident", "Often Level 1 … 5"],
      ]}
    />

    <h3 style={gs.h3}>1. CARE classifications (A Low through E High)</h3>
    <p style={gs.p}>
      This is the foundation of Medicaid payment. A DSHS assessment places each Medicaid resident into one of seventeen classifications, and each classification carries a daily rate that also depends on the county. Every Medicaid resident has one. It is lettered, never numbered. Full guide: <Link to={GUIDES.care.href} style={gs.link}>A Through E</Link>.
    </p>

    <h3 style={gs.h3}>2. CBHS tiers (Tier 1 through Tier 6)</h3>
    <p style={gs.p}>
      This is where the word "tier" properly belongs. Community Behavioral Health Support is a Health Care Authority benefit that pays for supportive supervision of residents with qualifying behavioral needs, on top of the base rate. Tiers are defined by hours of dedicated staff time per day. Only some residents qualify. Full guide: <Link to={GUIDES.cbhs.href} style={gs.link}>CBHS Tiers Explained</Link>.
    </p>

    <h3 style={gs.h3}>3. Specialty contracts (ECS, SBS, Meaningful Day)</h3>
    <p style={gs.p}>
      These are contracts the home itself must qualify for and hold, and they pay add-on rates for eligible residents. They come with a warning every buyer should memorize.
    </p>
    <div style={gs.warn}>
      <p style={{ ...gs.p, margin: 0 }}>
        <strong>Specialty contracts do not transfer with the home.</strong> DSHS states that contracts such as Meaningful Day, Expanded Community Services (ECS), and Specialized Behavior Support (SBS) are not transferable in a change of ownership. The new owner must qualify and hold a fully executed contract before providing, or being paid for, those services. Revenue from them cannot be assumed to survive closing.
      </p>
    </div>

    <h3 style={gs.h3}>4. Private-pay care levels</h3>
    <p style={gs.p}>
      Many homes price private-pay residents as a base monthly rate plus a care-level charge, often labeled Level 1 through 5. No agency sets these. Each home defines its own levels and amounts in its admission agreement, so "Level 3" at one home tells you nothing about Level 3 at another.
    </p>

    <h2 style={gs.h2}>Two systems that are not about AFHs at all</h2>
    <p style={gs.p}>
      Search "Washington five-tier system" and you will find a 2026 rule assigning Tier 1 through 5 personal care hours. That rule belongs to a presumptive eligibility program for people receiving care <strong>in their own home</strong>, not in an adult family home. Washington also has a tiered quality incentive for nursing facilities. Neither one affects AFH income, and neither one classifies adult family homes.
    </p>

    <div style={gs.callout}>
      <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", margin: "0 0 10px", color: "#9fe3dc" }}>The question to ask about any revenue line</p>
      <p style={{ fontSize: 21, lineHeight: 1.5, margin: 0, fontWeight: 600 }}>
        Who sets it? Is it attached to the resident or to the owner? How often is it reviewed? Does it survive a sale?
      </p>
    </div>

    <Table
      head={["System", "How often reviewed", "In a sale"]}
      rows={[
        ["CARE classification", "Reassessed as the resident's needs change", "Follows the resident"],
        ["CBHS tier", "At least every 12 months", "Follows the resident; confirm what the new owner must have in place with HCA and the managed care plans"],
        ["Specialty contract", "Held under contract terms", "Does not transfer. Buyer must qualify for their own"],
        ["Private-pay level", "Whenever the home reassesses", "A business decision the next owner can change"],
      ]}
    />
  </PaymentGuideShell>
);

export default AFHPaymentFieldGuide;
