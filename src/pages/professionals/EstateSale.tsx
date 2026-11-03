import ProfessionPageTemplate from "@/components/ProfessionPageTemplate";

const EstateSale = () => {
  return (
    <ProfessionPageTemplate
      title="Estate Sale & Personal Property"
      metaTitle="Estate Sale & Personal Property Specialists | Puget Sound | Real Property Planning"
      metaDescription="Find independent estate sale companies and personal property specialists serving Western Washington — helping families sort, value, and sell belongings from an estate or senior downsizing."
      helpHeadline="How an Estate Sale Specialist Helps Your Family"
      helpRows={[
        { icon: "🏷️", text: "Inventories, prices, and manages the sale of household contents, from furniture and art to everyday items" },
        { icon: "📢", text: "Handles advertising, staffing, and running the sale, so the family doesn't have to manage those details at a difficult time" },
        { icon: "🧹", text: "Coordinates donation pickups and cleanout after the sale, leaving the home ready for the next step" },
      ]}
      faqs={[
        {
          q: "What is an estate sale?",
          a: "An estate sale is a professionally managed, public sale held inside a home to sell personal belongings, usually after a death, a move to assisted living, or a major downsizing. The company handles pricing, advertising, running the sale, and cleaning up afterward.",
        },
        {
          q: "How is an estate sale different from a garage sale?",
          a: "An estate sale is run by a professional company that takes responsibility for the whole process: pricing items, marketing to likely buyers, and managing the logistics, including security during the sale. The aim is to get good value for the household contents as well as to clear the space.",
        },
        {
          q: "How does an estate sale company get paid?",
          a: "Most estate sale companies work on commission (typically 25% to 40% of total sales) with no upfront cost to the family. Some may charge additional fees for advertising, setup, or cleanup. Always ask for a written agreement before you begin.",
        },
        {
          q: "When should we schedule an estate sale?",
          a: "Ideally before the home is listed for sale, so the property can be shown empty or staged after the sale is complete. Estate sale companies typically need 1–3 weeks to prepare. If the timeline is tight, discuss your closing date with the company upfront.",
        },
        {
          q: "What happens to items that don't sell?",
          a: "Most estate sale companies offer options for unsold items: donation coordination (often with tax receipts), consignment to resale shops, or full cleanout services. Ask about this before signing an agreement.",
        },
        {
          q: "Can an estate sale happen while the house is still in probate?",
          a: "In most cases, yes. Personal property (furniture, clothing, household items) can be sold during probate. The sale of real property may require court approval. Consult your probate attorney if you're unsure what can be sold and when.",
        },
      ]}
      relatedProfessions={[
        { title: "Probate & Estate Attorneys", href: "/professionals/probate-attorneys" },
        { title: "Home Preparation & Staging", href: "/professionals/home-preparation" },
      ]}
      professionLabel="estate sale specialist"
    />
  );
};

export default EstateSale;
