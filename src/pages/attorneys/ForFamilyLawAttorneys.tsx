import AttorneyPageTemplate from "@/components/AttorneyPageTemplate";

const ForFamilyLawAttorneys = () => (
  <AttorneyPageTemplate
    title="Family Law Attorneys"
    seoTitle="Real Estate Support for Family Law Attorneys | Real Property Planning"
    seoDescription="David Stein works with family law attorneys on property valuations, marital home sales, and real estate coordination during family transitions in Western Washington."
    path="/for-family-law-attorneys"
    heroLabel="For Family Law Attorneys"
    heroHeadline="Real Estate Support for Family Law Attorneys and Their Clients"
    heroSubtext="Providing objective property valuations, coordinated home sales, and professional real estate guidance during family transitions and legal proceedings."
    introHeading="Working With Family Law Attorneys"
    introText={[
      "Family law matters often involve the marital home or other real property that needs to be valued, sold, or transferred as part of a legal resolution. Real Property Planning works with family law attorneys to provide objective market analysis and professional real estate coordination that supports fair outcomes.",
      "David Stein's dual credentials as a licensed broker and certified residential appraiser bring analytical objectivity to property-related decisions during family transitions. He communicates neutrally, provides data-driven guidance, and manages the real estate process with discretion and professionalism.",
    ]}
    scenarios={[
      { title: "Marital Home Sale During Separation", description: "A couple needs to sell the family home as part of a divorce settlement. David provides objective market analysis, manages preparation and listing, and communicates professionally with both parties and their attorneys." },
      { title: "Property Valuation for Settlement", description: "An attorney needs a current, defensible property valuation to support equitable distribution negotiations. David provides detailed market analysis grounded in comparable sales and property condition assessment." },
      { title: "Buyout Evaluation", description: "One spouse wants to buy out the other's share of the family home. David provides realistic market perspective to help both parties and their attorneys negotiate from an informed position." },
      { title: "Pre-Listing Coordination", description: "The court has ordered the sale of the marital home. David coordinates preparation, pricing, and listing while maintaining neutral communication with both parties." },
    ]}
    howWeHelp={[
      "Objective, data-driven property valuation grounded in appraiser-level analysis",
      "Neutral communication with all parties — no favoritism or advocacy",
      "Professional coordination of property preparation and sale",
      "Defensible market analysis suitable for settlement negotiations and court review",
      "Discreet, professional handling of sensitive family situations",
      "Clear documentation and transparent process from assessment through closing",
    ]}
    whyItMatters={[
      "Provides objective market data that supports fair, informed settlements",
      "Reduces conflict by presenting facts rather than opinions",
      "Aligns the real estate process with the legal timeline and settlement strategy",
      "Ensures both parties feel the process is transparent and professional",
      "Protects the attorney's client through honest, analytical guidance",
    ]}
  />
);

export default ForFamilyLawAttorneys;
