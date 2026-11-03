import ProfessionPageTemplate from "@/components/ProfessionPageTemplate";

const SeniorHousingAdvisors = () => {
  return (
    <ProfessionPageTemplate
      title="Senior Housing Advisors"
      metaTitle="Senior Housing Advisors in Western Washington | Real Property Planning"
      metaDescription="Find independent senior housing advisors and placement specialists serving the Puget Sound region — helping older adults and families choose assisted living, memory care, and independent living options."
      helpHeadline="How a Senior Housing Advisor Helps Your Family"
      helpRows={[
        { icon: "🏡", text: "Assesses the older adult's care needs, preferences, and budget to identify housing options that fit" },
        { icon: "🔍", text: "Arranges tours and compares assisted living, memory care, and adult family homes" },
        { icon: "💛", text: "Helps families with the emotional side of the move as well as the logistics" },
      ]}
      faqs={[
        {
          q: "What is a senior housing advisor?",
          a: "A senior housing advisor helps older adults and their families choose where to live: assisted living, memory care, independent living, or an adult family home. Advisors assess needs, explain the options, and guide the family through the decision.",
        },
        {
          q: "Does a senior housing advisor cost money?",
          a: "In most cases, senior housing advisors are paid by the community or facility once a placement is made, so there is no direct cost to the family. Before you begin working together, ask how the advisor is compensated.",
        },
        {
          q: "How is a senior housing advisor different from a care manager?",
          a: "A senior housing advisor focuses mainly on finding a place to live. A care manager (also called an aging life care professional) takes a broader role: coordinating medical care, family communication, and long-term care planning. Some families use both.",
        },
        {
          q: "When is the right time to involve a senior housing advisor?",
          a: "Before a move becomes urgent. An advisor can help a family plan ahead, before a crisis forces a rushed decision. Even if a move is 6–12 months away, an early conversation helps the family understand options and costs.",
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
