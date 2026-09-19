import { Link } from "react-router-dom";
import PaymentGuideShell, { GUIDES, Table, gs } from "@/components/afh/PaymentGuideShell";

/**
 * CBHS Tiers Explained: The Behavioral Health Add-On Behind Some AFH Income
 * (Sept 2026). Part of the three-part payment series.
 *
 * Sources checked Sept 18, 2026: WAC 182-561-0100 through -0600 (tiers as
 * amended by WSR 25-09-161, effective May 24, 2025), HCA's CBHS program page
 * and billing guide (Jan 2026), HCA re-tiering request form 13-0125, HCA
 * supportive-supervision tracking form 13-0126, AFH Council guidance Feb 2025.
 *
 * DELIBERATELY ABSENT: per-tier dollar amounts. HCA publishes a fee schedule,
 * but no figure has been verified, and what a home is paid under its managed
 * care contracts has not been confirmed either. Do not add dollar figures
 * without a source. Also open: exactly what a new owner must have in place
 * for CBHS payments to continue after a change of ownership — posed to the
 * reader as a question, not answered.
 */

const FAQS = [
  { question: "What are CBHS tiers in a Washington adult family home?", answer: "Community Behavioral Health Support (CBHS) is a Medicaid benefit administered by the Health Care Authority with DSHS. It pays for supportive supervision of residents with qualifying behavioral health needs. There are six tiers, defined by the average hours per day of dedicated staff a resident requires, from 0.5 to 2 hours at Tier 1 up to 20.1 to 24 hours at Tier 6." },
  { question: "Is a CBHS tier the same as a CARE classification?", answer: "No. The CARE classification (A Low through E High) is assigned by DSHS and sets the base daily rate for every Medicaid resident. A CBHS tier is a separate benefit for residents with qualifying behavioral needs. It covers supportive supervision only, not personal care or room and board." },
  { question: "Does every AFH receive CBHS payments?", answer: "No. The tier belongs to the individual resident, and only residents who meet the eligibility criteria have one. Two homes identical in size, location and licensing can have very different CBHS income depending on who lives there." },
  { question: "Can a resident's CBHS tier change?", answer: "Yes. Eligibility is reviewed at least once every 12 months, and a resident may be moved to a different tier. A home that believes a resident is in the wrong tier can submit a re-tiering request to the payer. If a resident moves out, the payment leaves with them." },
  { question: "What should a buyer verify about CBHS income?", answer: "Which residents carry a tier and when each was last reviewed; that the required daily service logs exist and the hours delivered line up with the tier being paid; what staffing supports those hours; how concentrated the income is; and what the new owner must have in place with the Health Care Authority and the managed care plans for payments to continue after closing." },
];

const AFHCBHSTiers = () => (
  <PaymentGuideShell
    id="cbhs"
    seoTitle="CBHS Tiers Explained for Washington Adult Family Homes | Supportive Supervision Tiers 1–6 | AFH Club"
    seoDescription="Community Behavioral Health Support (CBHS) pays adult family homes for supportive supervision in six tiers defined by staff hours per day. What the tiers are, who qualifies, how they are reviewed and re-tiered, and what AFH buyers and sellers should verify."
    eyebrow="For buyers, sellers & owners"
    lede="If an adult family home owner talks about Tier 2 or Tier 4 residents, this is almost certainly the system they mean. It is separate from the A through E classification that sets the base rate."
    cover={{ src: "/afh-cbhs-tiers-cover.webp", alt: "CBHS Tiers: The Add-On Buyers Overlook — understand, qualify, staff, sustain" }}
    dateModified="2026-09-18"
    faqs={FAQS}
    faqHeading="CBHS Tiers: Common Questions"
    disclaimer="This page is general educational information for people buying, selling, or operating an adult family home. It is not legal, financial, clinical, or reimbursement advice, and it deliberately quotes no payment amounts. Confirm current rules, rates, and contracting requirements with the Washington State Health Care Authority and the relevant managed care organizations."
  >
    <h2 style={gs.h2}>What CBHS is</h2>
    <p style={gs.p}>
      Community Behavioral Health Support, or CBHS, is a Medicaid benefit administered by the Health Care Authority (HCA) in conjunction with DSHS. It began July 1, 2024. It helps people who have a significant mental health diagnosis, and who need additional support, live in a community setting such as an adult family home. CBHS replaces the older Behavioral Health Personal Care (BHPC) wrap-around funding that managed care organizations used to pay, so owners who have been operating for years may still describe it in those terms.
    </p>

    <h3 style={gs.h3}>What it pays for</h3>
    <p style={gs.p}>
      The service is called supportive supervision: direct monitoring, redirection, diversion, and cueing to prevent at-risk behavior that could harm the resident or others, along with help building the skills to live stably in the community. It is staff time devoted to keeping a resident with serious behavioral needs stable. It does not pay for personal care or room and board, which are covered elsewhere.
    </p>

    <h3 style={gs.h3}>Who can provide it</h3>
    <p style={gs.p}>
      Services must be delivered by agency-contracted providers: licensed adult family homes, as well as ARC, EARC, assisted living, and enhanced services facilities. A home enrolls through ProviderOne so that HCA and the managed care organizations can contract with it, and it must contract with the managed care organizations to serve their enrollees.
    </p>

    <h2 style={gs.h2}>The six tiers</h2>
    <p style={gs.p}>
      Tiers are assigned on medical appropriateness and clinical acuity, and they are defined by the average hours per day of dedicated staff a resident requires. Anyone found eligible qualifies for at least Tier 1. Payment is based on the authorized tier.
    </p>

    <Table
      head={["Tier", "Average dedicated staff hours per day"]}
      rows={[
        ["Tier 1", "0.5 to 2.0. Daily intermittent monitoring, redirection, and cueing"],
        ["Tier 2", "2.1 to 6.0"],
        ["Tier 3", "6.1 to 10.0 of one-on-one staffing"],
        ["Tier 4", "10.1 to 15.0 of one-on-one staffing"],
        ["Tier 5", "15.1 to 20.0 of one-on-one staffing"],
        ["Tier 6", "20.1 to 24, or regular episodes requiring multiple staff"],
      ]}
    />
    <p style={{ ...gs.p, fontSize: 17 }}>
      Source: WAC 182-561-0500. The hour bands for Tiers 4 and 5 were revised by an amendment effective May 24, 2025, so older handouts may show slightly different ranges.
    </p>

    <h2 style={gs.h2}>Why two similar homes can have very different CBHS income</h2>
    <p style={gs.p}>
      The tier belongs to the resident, not the house. A home with three Tier 2 residents and a home with none can be identical in size, location, and licensing. This is why owners say tier income "varies from home to home" even though the tier structure is the state's. HCA publishes a fee schedule for CBHS; what a particular home is actually paid should be confirmed against its managed care contracts and its deposits.
    </p>

    <div style={gs.callout}>
      <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", margin: "0 0 10px", color: "#9fe3dc" }}>The income is real, and so is the cost</p>
      <p style={{ fontSize: 21, lineHeight: 1.5, margin: 0, fontWeight: 600 }}>
        A Tier 3 resident is authorized for six to ten hours a day of one-on-one staffing. That staffing has to actually be provided. Look at the payroll supporting the income, not just the deposits.
      </p>
    </div>

    <h2 style={gs.h2}>It gets documented, reviewed, and re-tiered</h2>
    <ul style={{ margin: "0 0 16px", paddingLeft: 22 }}>
      <li style={gs.li}><strong>Daily logs.</strong> To use Medicaid dollars, HCA and the managed care organizations need to verify that services were provided, so providers keep a log of supportive supervision for each day of service. Industry guidance is that the average hours delivered each month should align with the resident's authorized tier.</li>
      <li style={gs.li}><strong>Yearly review.</strong> Eligibility is reviewed at least once every 12 months. A resident who stabilizes may be moved to a lower tier.</li>
      <li style={gs.li}><strong>Re-tiering.</strong> A home that believes a resident is in the wrong tier can submit a Supportive Supervision Re-Tiering Request to the payer, documenting how the resident's needs have changed.</li>
      <li style={gs.li}><strong>It leaves with the resident.</strong> If a resident with a tier moves out, that income goes too.</li>
    </ul>
    <p style={gs.p}>
      For all of those reasons, annualizing last month's CBHS deposits overstates what a buyer can count on.
    </p>

    <h2 style={gs.h2}>Questions for buyers and sellers</h2>
    <ul style={{ margin: "0 0 16px", paddingLeft: 22 }}>
      <li style={gs.li}>Which residents carry a tier, and when was each last reviewed?</li>
      <li style={gs.li}>Do the daily service logs exist, and do the hours delivered line up with the tier being paid? A home paid at Tier 3 whose logs show two hours a day has a problem no buyer wants to inherit.</li>
      <li style={gs.li}>What staffing is in place to deliver those hours, and what does it cost?</li>
      <li style={gs.li}>How concentrated is the income: one Tier 4 resident, or several at lower tiers?</li>
      <li style={gs.li}><strong>What does the new owner need in place with the Health Care Authority and the managed care plans before CBHS payments continue after closing?</strong> Get that answer in writing before relying on the income.</li>
    </ul>
    <p style={gs.p}>
      Sellers: having those answers organized before you list makes the income credible to a buyer's lender. See <Link to="/afh-club/how-to-finance-an-afh" style={gs.link}>How to Finance an Adult Family Home</Link> for how lenders test a home's income.
    </p>

    <h2 style={gs.h2}>Where CBHS fits</h2>
    <p style={gs.p}>
      CBHS sits on top of the base Medicaid rate set by the resident's <Link to={GUIDES.care.href} style={gs.link}>CARE classification (A through E)</Link>, and it is separate again from owner-held specialty contracts such as ECS and SBS, which do not transfer in a sale. The <Link to={GUIDES.hub.href} style={gs.link}>Field Guide</Link> lays all four systems side by side.
    </p>
  </PaymentGuideShell>
);

export default AFHCBHSTiers;
