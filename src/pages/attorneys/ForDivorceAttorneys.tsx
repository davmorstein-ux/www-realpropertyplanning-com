import AttorneyPageTemplate from "@/components/AttorneyPageTemplate";

const ForDivorceAttorneys = () => (
  <AttorneyPageTemplate
    title="Divorce Attorneys"
    seoTitle="Real Estate Support for Divorce Attorneys | Real Property Planning"
    seoDescription="David Stein works with divorce attorneys on property valuations, home sales, and real estate coordination during divorce proceedings in Western Washington."
    path="/for-divorce-attorneys"
    heroLabel="For Divorce Attorneys"
    heroHeadline="Real Estate Support for Divorce Attorneys and Their Clients"
    heroSubtext="Objective property valuations, professional home sales, and structured coordination that support fair outcomes during divorce proceedings."
    introHeading="Working With Divorce Attorneys"
    introText={[
      "Divorce proceedings frequently require property-related decisions — from determining current market value for equitable distribution to managing the sale of a shared home. Real Property Planning works with divorce attorneys to provide the objective analysis and professional coordination that these high-stakes situations demand.",
      "David Stein approaches every divorce-related engagement with neutrality, discretion, and analytical rigor. His dual credentials as a licensed broker and certified residential appraiser ensure that property valuations and sale strategies are grounded in data — not emotions — providing both parties with a defensible basis for negotiation.",
    ]}
    scenarios={[
      { title: "Court-Ordered Home Sale", description: "The court has ordered the sale of the marital home. David manages the entire process — preparation, pricing, marketing, and closing — while maintaining professional communication with both parties and their legal counsel." },
      { title: "Pre-Divorce Property Valuation", description: "An attorney needs a thorough market analysis before negotiations begin. David provides a detailed property assessment with comparable sales data to establish a defensible value for settlement discussions." },
      { title: "Contested Property Value", description: "Spouses disagree about what the home is worth. David provides objective, appraiser-level market analysis that gives both attorneys a factual basis for resolving valuation disputes." },
      { title: "Cooperative Sale Between Parties", description: "Both parties agree to sell but need a professional who can manage the process fairly. David coordinates preparation and sale while communicating transparently with all involved parties." },
    ]}
    howWeHelp={[
      "Appraiser-level property valuation with documented comparable sales analysis",
      "Strict neutrality — David serves the facts, not either party",
      "Professional management of home preparation, listing, and sale",
      "Clear, transparent communication with both parties and their attorneys",
      "Defensible documentation suitable for court filings and settlement negotiations",
      "Experienced handling of emotionally charged property situations",
    ]}
    whyItMatters={[
      "Provides a factual foundation that reduces property-related disputes",
      "Supports equitable outcomes through objective, documented analysis",
      "Keeps the real estate process on track within the legal timeline",
      "Reduces emotional friction by maintaining professional neutrality",
      "Gives your client confidence that the property side is handled with integrity",
    ]}
  />
);

export default ForDivorceAttorneys;
