import ProfessionPageTemplate from "@/components/ProfessionPageTemplate";

const HomePreparation = () => {
  return (
    <ProfessionPageTemplate
      title="Home Preparation & Staging"
      metaTitle="Home Preparation & Staging for Estate Sales | Western Washington | Real Property Planning"
      metaDescription="Find contractors, cleaners, and staging professionals in the Puget Sound area who help prepare inherited homes and longtime family residences for a successful sale."
      helpHeadline="How Home Preparation Specialists Help Your Family"
      helpRows={[
        { icon: "🔧", text: "Assess the home's condition and coordinate repairs, cleaning, and improvements that make the biggest difference to buyers" },
        { icon: "🛋️", text: "Stage the home so it feels welcoming and well-maintained — helping it sell faster and for a stronger price" },
        { icon: "🤝", text: "Work within estate and probate timelines, understanding that these situations require extra sensitivity and flexibility" },
      ]}
      faqs={[
        {
          q: "Does an inherited or estate home need to be prepared before selling?",
          a: "In most cases, yes — even modest preparation makes a real difference. Homes that have been lived in for many years often benefit from deep cleaning, minor repairs, fresh paint, and decluttering. Buyers respond to homes that feel cared for, even if they're older.",
        },
        {
          q: "What is home staging and is it worth it?",
          a: "Home staging involves arranging furniture and décor to help buyers visualize living in the space. Studies consistently show staged homes sell faster and often receive stronger offers than unstaged homes. For estate properties — which may have dated décor or feel lived-in — staging can make a significant difference.",
        },
        {
          q: "What repairs are most important before listing an estate home?",
          a: "The highest-impact improvements are usually the simplest: fresh paint in neutral colors, deep cleaning throughout, cleaned or replaced carpets, and tidy landscaping. Major renovations rarely pay off in estate sales — the goal is to present the home as clean and well-maintained, not brand new.",
        },
        {
          q: "Can home preparation happen while the estate is still in probate?",
          a: "Yes. Repairs, cleaning, and staging are generally considered property maintenance and can proceed during probate. The estate typically pays for these costs, which are deducted before distribution to heirs. Your probate attorney can confirm what expenses are appropriate.",
        },
        {
          q: "How long does it take to prepare an estate home for sale?",
          a: "It depends on the home's condition, but most preparation takes 2–6 weeks. Coordinating the right professionals early — before the estate sale, if possible — keeps everything on schedule.",
        },
      ]}
      relatedProfessions={[
        { title: "Estate Sale & Personal Property", href: "/professionals/estate-sale" },
        { title: "Senior Housing Advisors", href: "/professionals/senior-housing-advisors" },
      ]}
      professionLabel="home preparation or staging specialist"
    />
  );
};

export default HomePreparation;
