import AttorneyPageTemplate from "@/components/AttorneyPageTemplate";

const ForElderLawAttorneys = () => (
  <AttorneyPageTemplate
    title="Elder Law Attorneys"
    seoTitle="Real Estate Support for Elder Law Attorneys | Real Property Planning"
    seoDescription="David Stein works with elder law attorneys on guardianship property sales, senior transitions, and Medicaid-related real estate matters in Western Washington."
    path="/for-elder-law-attorneys"
    heroLabel="For Elder Law Attorneys"
    heroHeadline="Real Estate Support for Elder Law Attorneys and Their Clients"
    heroSubtext="Navigating property sales, senior transitions, and guardianship matters with the patience, documentation, and professional care that elder law requires."
    introHeading="Working With Elder Law Attorneys"
    introText={[
      "Elder law matters frequently involve real property — whether a senior is transitioning to assisted living, a guardian needs to sell a protected person's home, or Medicaid planning requires property decisions. Real Property Planning works with elder law attorneys to handle the real estate side with the sensitivity, patience, and documentation these situations demand.",
      "David Stein understands that elder law clients and their families are often navigating emotional and complex transitions. His dual experience as a broker and certified appraiser allows him to provide clear market guidance while treating every client with the respect and compassion they deserve.",
    ]}
    scenarios={[
      { title: "Guardianship Property Sale", description: "A guardian needs to sell a protected person's home with court approval. David provides thorough property assessment, documented market analysis for court review, and manages the sale process within the legal framework." },
      { title: "Senior Transition to Assisted Living", description: "An elderly client is moving from a longtime home to a care facility. David coordinates the property preparation, works with the family at their pace, and ensures the home is properly positioned for sale." },
      { title: "Medicaid Planning Property Decisions", description: "An attorney's client needs to understand property value and sale implications for Medicaid eligibility planning. David provides realistic market perspective to support informed planning decisions." },
      { title: "Family Caregiver Property Coordination", description: "Adult children are managing a parent's property transition while balancing caregiving responsibilities. David handles the real estate details — cleanout, repairs, listing — so the family can focus on their loved one." },
    ]}
    howWeHelp={[
      "Court-ready property assessment and documented market analysis for guardianship sales",
      "Patient, compassionate communication with elderly clients and their families",
      "Full coordination of property preparation — cleanout, repairs, and staging",
      "Valuation-informed pricing that reflects property condition and market reality",
      "Proactive communication with attorneys, guardians, and family members",
      "Experience with the unique timelines and sensitivities of elder law matters",
    ]}
    whyItMatters={[
      "Reduces burden on families already managing complex caregiving situations",
      "Provides documentation that meets court and regulatory requirements",
      "Ensures property decisions align with the client's care and financial needs",
      "Protects the attorney's client through honest, professional real estate guidance",
      "Treats every situation with the dignity and patience it deserves",
    ]}
  />
);

export default ForElderLawAttorneys;
