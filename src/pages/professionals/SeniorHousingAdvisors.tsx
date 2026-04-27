import ProfessionPageTemplate from "@/components/ProfessionPageTemplate";

const SeniorHousingAdvisors = () => {
  return (
    <ProfessionPageTemplate
      title="Senior Housing Advisors"
      metaTitle="Senior Housing Advisors in Western Washington | Real Property Planning"
      metaDescription="Find trusted senior housing advisors and placement specialists serving the Puget Sound region — helping older adults and families choose assisted living, memory care, and independent living options."
      helpHeadline="How a Senior Housing Advisor Helps Your Family"
      helpRows={[
        { icon: "🏡", text: "Assesses the older adult's care needs, preferences, and budget to identify the right housing options" },
        { icon: "🔍", text: "Provides guided tours and honest comparisons of assisted living, memory care, and adult family homes" },
        { icon: "💛", text: "Supports families through the emotional side of the transition — not just the logistics" },
      ]}
      faqs={[
        {
          q: "What is a senior housing advisor?",
          a: "A senior housing advisor is a trained specialist who helps older adults and their families choose the right living situation — whether that's assisted living, memory care, independent living, or an adult family home. They assess needs, explain options, and guide families through the decision without pressure.",
        },
        {
          q: "Does a senior housing advisor cost money?",
          a: "In most cases, senior housing advisors are paid by the community or facility once a placement is made — meaning there is no direct cost to the family. However, it's always good to ask how an advisor is compensated before you begin working together.",
        },
        {
          q: "How is a senior housing advisor different from a care manager?",
          a: "A senior housing advisor focuses primarily on finding the right place to live. A care manager (also called an aging life care professional) takes a broader role — coordinating medical care, family communication, and long-term care planning. Many families benefit from both.",
        },
        {
          q: "When is the right time to involve a senior housing advisor?",
          a: "Earlier than most families think. Advisors can help families plan ahead — before a crisis forces a rushed decision. Even if a move is 6–12 months away, an early conversation helps families understand options and costs.",
        },
        {
          q: "What areas do senior housing advisors serve?",
          a: "The professionals listed on this page serve the Puget Sound region, including King, Snohomish, Pierce, Skagit, and Kitsap Counties.",
        },
      ]}
      relatedProfessions={[
        { title: "Probate & Estate Attorneys", href: "/professionals/probate-attorneys" },
        { title: "Care Managers & Social Workers", href: "/professionals/care-managers" },
      ]}
      professionLabel="senior housing advisor"
    />
  );
};

export default SeniorHousingAdvisors;
