import ProfessionPageTemplate from "@/components/ProfessionPageTemplate";

const CareManagers = () => {
  return (
    <ProfessionPageTemplate
      title="Aging Life Care Managers & Social Workers"
      metaTitle="Aging Life Care Managers & Social Workers | Puget Sound | Real Property Planning"
      metaDescription="Find certified aging life care managers and geriatric social workers serving Western Washington — helping families coordinate care, navigate elder care decisions, and support older adults through major life transitions."
      helpHeadline="How a Care Manager Helps Your Family"
      helpRows={[
        { icon: "❤️", text: "Assesses the older adult's medical, emotional, and daily living needs — and creates a personalized care plan" },
        { icon: "🔗", text: "Coordinates with doctors, facilities, and family members so everyone is informed and working toward the same goals" },
        { icon: "🌍", text: "Serves as a trusted local advocate — especially valuable for families who live out of state or out of the area" },
      ]}
      faqs={[
        {
          q: "What is an aging life care manager?",
          a: "An aging life care manager (also called a geriatric care manager) is a trained professional — often a social worker or registered nurse — who helps older adults and their families navigate the challenges of aging. They assess needs, coordinate care, communicate with medical providers, and help families make informed decisions during difficult transitions.",
        },
        {
          q: "How is a care manager different from a home caregiver?",
          a: "A home caregiver provides hands-on daily assistance — help with bathing, meals, or mobility. A care manager takes a higher-level coordination role: assessing needs, creating care plans, communicating with doctors and facilities, and guiding family decisions. Many families benefit from both working together.",
        },
        {
          q: "When should a family consider hiring a care manager?",
          a: "Common situations include: a parent's health or memory is declining and the family isn't sure what kind of help is needed; family members live far away and need a local advocate; a recent hospitalization has changed care needs; or the family is trying to decide between in-home care and a care facility.",
        },
        {
          q: "Can a care manager help with housing decisions?",
          a: "Yes — this is one of the most common reasons families reach out. Care managers have deep knowledge of local assisted living, memory care, adult family homes, and in-home care options. They can assess what level of care is appropriate and help families avoid costly mismatches.",
        },
        {
          q: "Does Medicare pay for care management?",
          a: "Generally, no. Most aging life care management services are private pay. However, some long-term care insurance policies may cover care management fees. It's worth checking your policy or asking a care manager about payment options during an initial consultation.",
        },
        {
          q: "How does a care manager work with other professionals — like attorneys or real estate agents?",
          a: "Care managers frequently collaborate with probate attorneys, financial advisors, and real estate professionals. When a family is dealing with both a housing transition and care decisions at the same time, a care manager helps coordinate the human side of the picture — making sure the older adult's wellbeing stays at the center of every decision.",
        },
      ]}
      relatedProfessions={[
        { title: "Senior Housing Advisors", href: "/professionals/senior-housing-advisors" },
        { title: "Financial Planners & Advisors", href: "/professionals/financial-planners" },
      ]}
      professionLabel="care manager or social worker"
    />
  );
};

export default CareManagers;
