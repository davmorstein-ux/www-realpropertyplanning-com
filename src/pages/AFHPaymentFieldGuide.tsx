import { Link } from "react-router-dom";
import PaymentGuideShell, { GUIDES, Table, gs } from "@/components/afh/PaymentGuideShell";
import { AFH_SPECIALTY_RATES } from "@/data/afhBehavioralRates";

/**
 * Tiers, Levels, and Classifications: A Field Guide to How Washington AFHs
 * Get Paid (Sept 2026). The hub of the three-part payment series: it names the
 * four systems people conflate and links out to the two deep dives. It should
 * stay short — it is a map, not a lesson in any one system.
 *
 * Sources checked Sept 18, 2026: WAC 388-106-0115 (CARE residential groups),
 * WAC 182-561-0500 (CBHS tiers), DSHS CHOW page (specialty contracts do not
 * transfer), WAC 388-106-1810/1840 (the 2026 five-tier PE rule is in-home only).
 * Revised Sept 19, 2026: Meaningful Day removed as a current specialty contract
 * (funding cut July 1, 2025); ECS/SBS mechanics and rates added from the 2025-27
 * CBA via src/data/afhBehavioralRates.ts; CBHS-before-SBS rule (WAC 388-106-0336(11)).
 * Revised Sept 25, 2026 from written answers by DSHS contracting and residential
 * policy staff: no new assessments at a change of ownership, new authorizations
 * under the new owner's ProviderOne number, ECS/SBS need AFH program staff
 * approval, Meaningful Day not available since July 1, 2025. Still open with
 * DSHS: whether a buyer can qualify for ECS/SBS before closing (program managers).
 */

const money = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD" });

const FAQS = [
  { question: "Are Washington adult family homes classified as Tier 1 through Tier 5?", answer: "No. Homes are not tiered at all. The systems people call tiers are assigned to individual residents or, for specialty contracts, held by the owner. The numbered tiers an AFH owner usually means are CBHS supportive supervision tiers, which run 1 through 6 and apply only to residents with qualifying behavioral health needs." },
  { question: "What is the difference between a CARE classification and a CBHS tier?", answer: "A CARE classification (A Low through E High) is assigned by DSHS to every Medicaid resident and sets the base daily rate. A CBHS tier (1 through 6) is a separate Health Care Authority benefit for residents with qualifying behavioral needs, defined by hours of dedicated staff supervision per day, and paid in addition to the base rate." },
  { question: "What is the 2026 five-tier personal care rule I keep finding online?", answer: "It is part of Washington's long-term services presumptive eligibility program. It sets Tier 1 through 5 monthly personal care hours for people receiving care in their own home while their Medicaid application is processed. It does not apply to adult family home residents and has no effect on AFH income." },
  { question: "Which AFH income survives a sale?", answer: "It depends on the system. Base CARE classifications follow each resident: DSHS contracting staff confirmed in September 2026 that residents do not need new assessments after a change of ownership, though each resident's authorization must be reissued under the new owner's ProviderOne number. CBHS tiers also follow the resident and are reviewed at least yearly. Specialty contracts such as ECS and SBS belong to the owner and do not transfer; a buyer needs its own, approved by DSHS program staff, and residents' other services continue but the specialty services do not unless the new owner is granted those contracts. Private-pay rates are set by the home and can be changed by the next owner." },
];

const AFHPaymentFieldGuide = () => (
  <PaymentGuideShell
    id="hub"
    seoTitle="AFH Tiers, Levels and Classifications Explained | How Washington Adult Family Homes Get Paid | AFH Club"
    seoDescription="CARE classifications A through E, CBHS Tiers 1 through 6, ECS and SBS specialty contracts, and private-pay care levels are four different systems. A field guide for Washington AFH buyers, sellers and owners: who sets each one, who it applies to, and what survives a sale."
    eyebrow="For buyers, sellers & owners"
    lede="Spend an afternoon with adult family home owners and you will hear about Tier 3 residents, C High, Level 4 care, and the ECS contract, sometimes in one sentence. These are not one system. They are four."
    cover={{ src: "/afh-payment-field-guide-cover.webp", alt: "Which Tier? The AFH Payment Field Guide — four separate systems: A–E classifications, CBHS tiers, specialty contracts, and private-pay levels" }}
    dateModified="2026-09-25"
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
        ["Specialty contracts", "DSHS", "The owner / the home", "ECS, SBS"],
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

    <h3 style={gs.h3}>3. Specialty contracts (ECS and SBS)</h3>
    <p style={gs.p}>
      These are contracts the home itself must qualify for and hold under the state's Residential Support Waiver. They pay in two different ways, and the difference matters when you read a seller's income. <strong>Expanded Community Services (ECS)</strong> is not an add-on: the home is paid the ECS daily rate ({money(AFH_SPECIALTY_RATES.ecsDailyPaid)}) or the resident's base rate, whichever is greater. <strong>Specialized Behavior Support (SBS)</strong> is an add-on: {money(AFH_SPECIALTY_RATES.sbsAddOn)} a day on top of the base rate, in exchange for six to eight additional hours a day of individualized staffing.
    </p>
    <p style={gs.p}>
      These contracts matter less than they used to. Since July 1, 2025, a resident must first be found not eligible for CBHS before receiving SBS, which makes CBHS the primary route for behavioral support and means the two never stack. Both contracts come with a warning every buyer should memorize.
    </p>
    <div style={gs.warn}>
      <p style={{ ...gs.p, margin: 0 }}>
        <strong>Specialty contracts do not transfer with the home.</strong> DSHS states that specialty contracts such as Expanded Community Services (ECS) and Specialized Behavior Support (SBS) are not transferable in a change of ownership. The new owner must qualify and hold a fully executed contract before providing, or being paid for, those services. Revenue from them cannot be assumed to survive closing.
      </p>
    </div>
    <p style={gs.p}>
      DSHS contracting staff confirmed in September 2026 that they cannot add ECS or SBS to a new owner's contract without approval from DSHS's adult family home program staff. Residents' services continue after a sale, except the specialty services a new owner has not been granted. Whether a buyer can apply before closing, and on what terms, has been referred to the program managers for those contracts. This guide will be updated when they answer. Until then, treat specialty revenue as at risk in a sale.
    </p>
    <p style={{ ...gs.p, fontSize: 17 }}>
      A note on Meaningful Day: you will still see it listed alongside ECS and SBS, including on state pages. The 2025 state budget eliminated its funding, and DSHS contracting staff confirmed in September 2026 that Meaningful Day has not been available since July 1, 2025. Do not count it as income in a purchase.
    </p>

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
        ["CARE classification", "Reassessed as the resident's needs change", "Follows the resident. No new assessment; the authorization is reissued under the new owner"],
        ["CBHS tier", "At least every 12 months", "Follows the resident; confirm what the new owner must have in place with HCA and the managed care plans"],
        ["Specialty contract", "Held under contract terms", "Does not transfer. Buyer needs its own, approved by DSHS program staff"],
        ["Private-pay level", "Whenever the home reassesses", "A business decision the next owner can change"],
      ]}
    />
  </PaymentGuideShell>
);

export default AFHPaymentFieldGuide;
