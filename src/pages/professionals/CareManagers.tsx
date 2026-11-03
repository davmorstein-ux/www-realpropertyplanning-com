import ProfessionPageTemplate from "@/components/ProfessionPageTemplate";

const CareManagers = () => {
  return (
    <ProfessionPageTemplate
      title="Aging Life Care Managers & Social Workers"
      metaTitle="Aging Life Care Managers & Social Workers | Puget Sound | Real Property Planning"
      metaDescription="Find certified aging life care managers and geriatric social workers serving Western Washington — helping families coordinate care, navigate elder care decisions, and support older adults through major life transitions."
      helpHeadline="How a Care Manager Helps Your Family"
      helpRows={[
        { icon: "❤️", text: "Assesses the older adult's medical, emotional, and daily living needs, then writes a care plan for that person" },
        { icon: "🔗", text: "Coordinates with doctors, facilities, and family members so everyone is informed and working toward the same goals" },
        { icon: "🌍", text: "Serves as a local advocate, which matters most when family members live out of state or out of the area" },
      ]}
      faqs={[
        {
          q: "What is an aging life care manager?",
          a: "An aging life care manager (also called a geriatric care manager) is a trained professional, often a social worker or registered nurse, who works with older adults and their families on the practical side of aging. Care managers assess needs, coordinate care, communicate with medical providers, and help the family decide what to do during difficult transitions.",
        },
        {
          q: "How is a care manager different from a home caregiver?",
          a: "A home caregiver provides hands-on daily help with bathing, meals, or mobility. A care manager coordinates: assessing needs, writing care plans, communicating with doctors and facilities, and advising the family on decisions. The two roles often work side by side.",
        },
        {
          q: "When should a family consider hiring a care manager?",
          a: "Common situations include: a parent's health or memory is declining and the family isn't sure what kind of help is needed; family members live far away and need a local advocate; a recent hospitalization has changed care needs; or the family is trying to decide between in-home care and a care facility.",
        },
        {
          q: "Can a care manager help with housing decisions?",
          a: "Yes, and housing is a common reason families hire one. Care managers usually know the local assisted living, memory care, adult family home, and in-home care options. They can assess what level of care is appropriate and help families avoid costly mismatches.",
        },
        {
          q: "Does Medicare pay for care management?",
          a: "Generally, no. Most aging life care management services are private pay. However, some long-term care insurance policies may cover care management fees. Check your policy, or ask a care manager about payment options at the initial consultation.",
        },
        {
          q: "How does a care manager work with other professionals — like attorneys or real estate agents?",
          a: "Care managers frequently collaborate with probate attorneys, financial advisors, and real estate professionals. When a family faces a housing transition and care decisions at the same time, the care manager handles the care side and keeps the older adult's wellbeing at the center of each decision.",
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
