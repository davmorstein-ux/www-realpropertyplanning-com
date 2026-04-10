import ProfessionPageTemplate from "@/components/ProfessionPageTemplate";

const FinancialPlanners = () => {
  return (
    <ProfessionPageTemplate
      title="Financial Planners & Advisors"
      metaTitle="Financial Planners for Estate & Senior Transitions | Western Washington | Real Property Planning"
      metaDescription="Find financial advisors and planners in the Puget Sound region who specialize in inherited assets, estate tax planning, and financial decisions during senior transitions."
      helpHeadline="How a Financial Planner Helps Your Family"
      helpRows={[
        { icon: "💰", text: "Reviews inherited assets and helps beneficiaries understand their financial options after a loss" },
        { icon: "📊", text: "Advises on estate taxes, stepped-up basis, and capital gains implications when selling inherited property" },
        { icon: "🏡", text: "Helps older adults plan financially for assisted living, long-term care costs, and housing transitions" },
      ]}
      faqs={[
        {
          q: "Do I need a financial advisor when I inherit property?",
          a: "Not always required, but often very helpful. Inheriting real estate comes with tax implications — particularly around capital gains and the stepped-up basis — that a financial advisor can help you understand before you make any decisions about selling or keeping the property.",
        },
        {
          q: 'What is a "stepped-up basis" and why does it matter?',
          a: "When you inherit a home, its cost basis for tax purposes is \"stepped up\" to the market value at the time of the original owner's death — not what they originally paid. This often significantly reduces or eliminates capital gains tax if you sell the home shortly after inheriting it. A financial advisor or CPA can walk you through how this applies to your situation.",
        },
        {
          q: "What is Washington State's estate tax and who does it affect?",
          a: "Washington State has its own estate tax, separate from the federal one, that applies to estates valued above approximately $2.193 million (as of 2024). This is lower than the federal threshold, meaning some Washington families are affected by the state tax even when no federal estate tax is owed. A financial planner familiar with Washington law can help families plan ahead.",
        },
        {
          q: "How can a financial advisor help with the cost of assisted living?",
          a: "Senior living costs vary widely in the Puget Sound area. A financial advisor can help families understand what's affordable, how to use home sale proceeds, and whether long-term care insurance or other resources apply. Planning early creates more options.",
        },
        {
          q: "What is the difference between a financial planner and a CPA for estate matters?",
          a: "A CPA (Certified Public Accountant) focuses primarily on taxes — filing returns, calculating tax owed, and advising on tax strategy. A financial planner takes a broader view — investments, retirement income, long-term care planning, and overall financial goals. For estate matters, many families benefit from working with both.",
        },
      ]}
      relatedProfessions={[
        { title: "Probate & Estate Attorneys", href: "/professionals/probate-attorneys" },
        { title: "Care Managers & Social Workers", href: "/professionals/care-managers" },
      ]}
      professionLabel="financial planner or advisor"
    />
  );
};

export default FinancialPlanners;
