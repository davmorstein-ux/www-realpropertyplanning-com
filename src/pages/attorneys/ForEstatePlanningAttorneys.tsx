import AttorneyPageTemplate from "@/components/AttorneyPageTemplate";

const ForEstatePlanningAttorneys = () => (
  <AttorneyPageTemplate
    title="Estate Planning Attorneys"
    seoTitle="Real Estate Support for Estate Planning Attorneys | Real Property Planning"
    seoDescription="David Stein works with estate planning attorneys on trust-owned property sales, valuations, and real estate coordination across Western Washington."
    path="/for-estate-planning-attorneys"
    heroLabel="For Estate Planning Attorneys"
    heroHeadline="Real Estate Support for Estate Planning Attorneys and Their Clients"
    heroSubtext="Providing valuation clarity and professional real estate coordination for trust administration, estate transitions, and property-related planning decisions."
    introHeading="Working With Estate Planning Attorneys"
    introText={[
      "Estate planning often involves real property held in trusts, family estates, or transitional ownership structures. Real Property Planning works with estate planning attorneys to provide market-informed guidance when property decisions need to be made — whether the goal is selling, transferring, or understanding current value.",
      "David Stein's dual credentials as a licensed broker and certified residential appraiser give him the analytical foundation to support the nuanced property decisions that estate planning involves. He communicates with precision, respects the attorney-client relationship, and provides documentation that supports your planning objectives.",
    ]}
    scenarios={[
      { title: "Trust-Owned Property Sale", description: "A trustee needs to liquidate residential real estate as part of trust administration. David assesses the property, provides market analysis, and manages the sale process with the documentation trustees need to fulfill their fiduciary duties." },
      { title: "Pre-Planning Valuation Guidance", description: "An attorney's client wants to understand the current market value of real property before making estate planning decisions. David provides detailed property assessment and market perspective to inform planning conversations." },
      { title: "Multi-Generational Property Transition", description: "A family home needs to transition from one generation to the next, and the attorney needs current market data to structure equitable distributions. David provides objective analysis that helps families make informed decisions." },
      { title: "Beneficiary Disagreements", description: "Multiple beneficiaries have different opinions about what to do with trust-owned property. David presents clear, data-driven market information that helps all parties align on a realistic path forward." },
    ]}
    howWeHelp={[
      "Detailed property assessments with written market analysis for planning purposes",
      "Valuation-informed guidance grounded in appraiser-level market knowledge",
      "Coordination of property preparation and sale when liquidation is needed",
      "Clear communication with trustees, beneficiaries, and legal counsel",
      "Documentation suitable for trust administration and fiduciary review",
      "Patient, professional handling of family dynamics and multi-party decisions",
    ]}
    whyItMatters={[
      "Ensures property decisions are based on accurate, current market data",
      "Supports sound fiduciary decision-making with defensible analysis",
      "Reduces complexity for trustees and beneficiaries during transitions",
      "Aligns real estate execution with the attorney's planning strategy",
      "Builds trust through professional, transparent communication",
    ]}
  />
);

export default ForEstatePlanningAttorneys;
