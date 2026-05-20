import AttorneyEducationalPage from "@/components/AttorneyEducationalPage";
import heroImage from "@/assets/elder-law-attorney-hero.png";

const AttorneysForElderLawAttorneys = () => (
  <AttorneyEducationalPage
    title="Elder Law Attorney"
    heroImage={heroImage}
    heroImageAlt="Elder law attorney at desk reviewing estate plan documents"
    path="/attorneys/for-elder-law-attorneys"
    seoTitle="Elder Law Attorneys in Washington State | Real Property Planning"
    seoDescription="How elder law attorneys help seniors plan for incapacity, Medicaid, guardianship, and housing transitions — and how those decisions intersect with real estate."
    featuredHeading="Featured Elder Law Attorney — Coming Soon"
    altLabel="featured elder law attorney"
    opening={[
      "Elder law attorneys focus on the legal needs that arise as people age — long-term care planning, Medicaid eligibility, incapacity planning, guardianship, and the protection of assets and dignity in later life. Their work sits at the intersection of estate planning, public benefits, family dynamics, and housing decisions.",
      "When a senior or their family is weighing a move, a transfer of property, or a care decision, an elder law attorney is often the most important advisor in the room. Real Property Planning is an independent educational hub that helps families understand these decisions and, when needed, connect with appropriately licensed elder law attorneys throughout Washington State.",
    ]}
    intersectionsHeading="Where Elder Law and Real Estate Intersect"
    intersectionsIntro="Many elder law matters involve the family home or other real property. Common situations include:"
    intersections={[
      "Selling a long-held home to fund assisted living, memory care, or skilled nursing",
      "Transferring property in ways that protect Medicaid eligibility and avoid look-back issues",
      "Establishing guardianship or conservatorship that affects authority to sell or manage real estate",
      "Coordinating power of attorney decisions for a senior who can no longer manage property matters",
      "Planning around the family home as part of a broader long-term care strategy",
      "Navigating a sale when adult children disagree about timing, price, or what is best for a parent",
    ]}
    servicesIntro="The following reflects services offered independently by David Stein in his capacity as a licensed real estate broker and certified residential appraiser — not services provided by Real Property Planning."
    services={[
      {
        title: "Accurate Valuation for Planning Purposes",
        description:
          "David Stein provides condition-adjusted, comparable-supported market analyses that elder law attorneys can rely on when modeling Medicaid scenarios, evaluating transfer options, or weighing whether to sell or retain a home as part of a long-term care plan.",
      },
      {
        title: "Patient, Senior-Focused Sale Process",
        description:
          "Selling a long-held family home is rarely just a transaction. David Stein manages preparation, listing, and closing with the pace, communication, and respect that senior clients and their families need — often coordinating directly with the attorney, family members, or a fiduciary.",
      },
      {
        title: "Coordination with Care Decisions",
        description:
          "When a sale is tied to a move into assisted living, memory care, or skilled nursing, timing matters. David Stein works alongside the legal and care team so the real estate timeline supports — rather than dictates — the senior's transition.",
      },
      {
        title: "Clear Guidance for Out-of-State Families",
        description:
          "Many elder law clients have adult children living out of state. David Stein provides structured updates, virtual walkthroughs, and document coordination so distant family members stay informed and involved throughout the process.",
      },
    ]}
    faqs={[
      {
        question: "Does Real Property Planning provide elder law advice?",
        answer:
          "No. Real Property Planning is an independent educational hub and does not provide legal advice of any kind. Elder law guidance must come from an appropriately licensed elder law attorney. Real Property Planning can help families understand the issues and, when appropriate, connect them with qualified elder law attorneys.",
      },
      {
        question: "How does a home sale affect Medicaid eligibility?",
        answer:
          "It depends on the structure of the sale, the timing, how proceeds are held, and the planning that has been done in advance. These are legal questions that should be answered by an elder law attorney familiar with Washington State Medicaid rules. David Stein coordinates with the attorney so the real estate side aligns with the legal strategy.",
      },
      {
        question: "Can a property be sold under a power of attorney or guardianship?",
        answer:
          "Often yes, but the specifics depend on the document, the court order, and the authority granted. The elder law attorney determines what is legally permissible. David Stein then handles the property side in alignment with that authority.",
      },
    ]}
    ctaIntro="If you have a client whose elder law plan involves a Washington State property decision, a brief conversation is usually the most efficient starting point. David Stein works collaboratively with elder law attorneys throughout the state."
  />
);

export default AttorneysForElderLawAttorneys;
