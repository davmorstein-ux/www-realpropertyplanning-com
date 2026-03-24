import AttorneyPageTemplate from "@/components/AttorneyPageTemplate";

const ForProbateAttorneys = () => (
  <AttorneyPageTemplate
    title="Probate Attorneys"
    seoTitle="Real Estate Support for Probate Attorneys | Real Property Planning"
    seoDescription="David Stein works with probate attorneys to coordinate property sales, valuations, and estate real estate decisions across Western Washington."
    path="/for-probate-attorneys"
    heroLabel="For Probate Attorneys"
    heroHeadline="Real Estate Support for Probate Attorneys and Their Clients"
    heroSubtext="Coordinating property sales, valuations, and preparation during probate administration — so your client's estate matters move forward with clarity and confidence."
    introHeading="Working With Probate Attorneys"
    introText={[
      "Probate matters often involve real property that needs to be assessed, prepared, and sold as part of estate administration. Real Property Planning works with probate attorneys to handle the real estate side — from initial property assessment through closing — so your client receives professional guidance without adding to your workload.",
      "David Stein brings over 20 years of dual experience as a licensed real estate broker and Washington State certified residential appraiser. He understands the legal context of probate sales, communicates proactively with all parties, and provides the documented market analysis that court-supervised and fiduciary transactions require.",
    ]}
    scenarios={[
      { title: "Inherited Property Requiring Sale", description: "An executor inherits a home that needs cleanout, repairs, and sale. David coordinates the entire process — assessment, vendor management, pricing, listing, and closing — keeping the attorney informed at key milestones." },
      { title: "Multi-Beneficiary Estate", description: "Multiple heirs have different expectations about property value. David provides objective, data-driven market analysis that helps align all parties and supports defensible pricing decisions." },
      { title: "Out-of-State Executor", description: "The personal representative lives outside Washington and needs reliable local coordination. David manages the property on-site, handling preparation and communication so the executor doesn't need to travel repeatedly." },
      { title: "Property With Deferred Maintenance", description: "Estate properties often have years of deferred maintenance. David evaluates condition, recommends cost-effective improvements, and prices the property realistically based on its actual state." },
    ]}
    howWeHelp={[
      "Thorough property assessment with written findings and realistic market perspective",
      "Valuation-informed pricing strategy grounded in comparable sales and property condition",
      "Full coordination of property preparation — cleanout, repairs, staging, vendor management",
      "Professional, structured communication with attorneys, executors, and beneficiaries",
      "Documented market analysis suitable for court filings and fiduciary review",
      "Calm, respectful handling of sensitive family dynamics and multi-party situations",
    ]}
    whyItMatters={[
      "Reduces stress for executors and families during an already difficult time",
      "Provides defensible market data that supports fiduciary decision-making",
      "Aligns the real estate process with the legal timeline and estate administration goals",
      "Improves outcomes by ensuring the property is properly prepared and priced",
      "Protects the attorney's reputation through professional, reliable service",
    ]}
  />
);

export default ForProbateAttorneys;
