import AttorneyEducationalPage from "@/components/AttorneyEducationalPage";
import heroImage from "@/assets/family-law-attorney-hero.png";

const AttorneysForFamilyLawAttorneys = () => (
  <AttorneyEducationalPage
    title="Family Law Attorney"
    path="/attorneys/for-family-law-attorneys"
    heroImage={heroImage}
    heroImageAlt="Family law attorney meeting with a family reviewing a parenting plan"
    seoTitle="Family Law Attorneys in Washington State | Real Property Planning"
    seoDescription="How family law attorneys help families navigate custody, parenting plans, guardianship, and spousal support — and how those matters often intersect with real estate decisions."
    featuredHeading="Featured Family Law Attorney — Coming Soon"
    altLabel="featured family law attorney"
    opening={[
      "Family law attorneys help families navigate some of the most personal and consequential legal matters they will ever face — custody and parenting plans, child and spousal support, guardianship, paternity, adoption, and the division of property when a household changes shape.",
      "Real Property Planning is an independent educational hub that helps families understand the property side of these transitions and, when appropriate, connect with qualified family law attorneys throughout Washington State.",
    ]}
    intersectionsHeading="Where Family Law and Real Estate Intersect"
    intersectionsIntro="Family law matters frequently involve real property — even when the headline issue is custody, support, or guardianship. Common situations include:"
    intersections={[
      "Establishing a defensible market value for the family home as part of property division or support calculations",
      "Selling a shared home when parenting plans require one or both parties to relocate",
      "Coordinating a sale with custody schedules so children's lives are disrupted as little as possible",
      "Navigating guardianship of a minor or incapacitated adult whose assets include real estate",
      "Handling property questions tied to spousal maintenance, child support, or modification proceedings",
      "Managing a buyout when one party will retain the home and the other needs an objective value",
    ]}
    servicesIntro="The following reflects services offered independently by David Stein in his capacity as a licensed real estate broker and certified residential appraiser — not services provided by Real Property Planning."
    services={[
      {
        title: "Neutral, Defensible Market Valuation",
        description:
          "When parties disagree on what a home is worth, David Stein's certified appraisal background produces a condition-adjusted, methodology-based market analysis that both attorneys and both parties can evaluate from the same factual foundation.",
      },
      {
        title: "Process Designed to Reduce Conflict",
        description:
          "David Stein's role is explicitly neutral. Communication can be routed through respective counsel and structured so updates are simultaneous, factual, and professionally consistent — reducing opportunities for misunderstanding between parties.",
      },
      {
        title: "Timeline Coordination with Family Law Proceedings",
        description:
          "Court dates, parenting transitions, and support determinations all interact with a real estate timeline. David Stein coordinates with the attorneys so the property side supports — rather than complicates — the legal and family schedule.",
      },
      {
        title: "Care for Children and Living Situations",
        description:
          "When children are still living in the home, showings, staging, and timing all need to be handled with extra care. David Stein approaches these situations with clear protocols and a respect for the family's daily life.",
      },
    ]}
    faqs={[
      {
        question: "Does Real Property Planning provide family law advice?",
        answer:
          "No. Real Property Planning is an independent educational hub and does not provide legal advice. Family law matters must be handled by an appropriately licensed family law attorney.",
      },
      {
        question: "Can David Stein work with both parties in a family law matter?",
        answer:
          "Yes — David Stein's role is defined from the beginning as neutral coordinator. Communication protocols can be structured to route through respective counsel or in whatever way the attorneys prefer. Pricing and preparation decisions are based on market data, not either party's preference.",
      },
      {
        question: "What if children are still living in the home during the sale?",
        answer:
          "David Stein approaches these situations with clear protocols: scheduled showings with appropriate notice, staging guidance that respects the family's daily routine, and consistent communication that keeps both parties informed without requiring them to interact directly.",
      },
    ]}
    ctaIntro="If you have a client navigating a family law matter that involves real property in Washington State, a brief conversation is usually the most efficient starting point. David Stein works collaboratively with family law attorneys throughout the state."
  />
);

export default AttorneysForFamilyLawAttorneys;
