import AFHCityHub from "@/components/AFHCityHub";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Everett, WA?",
    answer:
      "Everett's current AFH listings are shown on this page. As the largest city and county seat of Snohomish County, Everett anchors much of the region's senior care infrastructure, including Providence Regional Medical Center Everett.",
  },
  {
    question: "Why is Everett a strong location for an Adult Family Home?",
    answer:
      "Everett's size and its role as a regional medical hub mean a consistently large pool of potential residents and referral sources, from hospital discharge planners to home health agencies. That density of care infrastructure is part of what makes Everett a genuinely active AFH market.",
  },
  {
    question: "How much does an Adult Family Home cost in Everett?",
    answer:
      "Pricing depends on whether a listing includes the property alone, an operating licensed business, or both, along with the home's condition, capacity, and occupancy history. Current asking prices for available Everett listings are shown above.",
  },
  {
    question: "What neighborhoods in Everett have Adult Family Homes available?",
    answer:
      "AFHs are distributed across Everett's residential neighborhoods rather than concentrated in one area — availability shifts based on what's currently listed. The listings shown above reflect whatever is actively on the market in Everett right now.",
  },
  {
    question: "Is it better to buy an operating AFH business or just the property in Everett?",
    answer:
      "An operating business purchase — with residents, staff, and an active DSHS license already in place — offers a faster path to revenue, though DSHS still needs to approve you as the new licensee. A property-only purchase gives you more flexibility to build out licensing and staffing on your own timeline.",
  },
  {
    question: "How do I find out about new AFH listings in Everett as they come available?",
    answer:
      "Reach out directly — David Stein, a Washington State licensed broker and certified appraiser, tracks Everett and broader Snohomish County AFH inventory and can notify you when a matching listing comes to market.",
  },
];

const AFHForSaleEverett = () => (
  <AFHCityHub
    city="Everett"
    county="Snohomish"
    slug="everett-wa"
    metaDescription="Adult Family Homes for sale in Everett, WA — licensed businesses, properties, or both. Current listings, pricing guidance, and answers to common AFH buying questions."
    intro={
      <>
        <p>
          As the county seat and largest city in Snohomish County, Everett anchors a substantial share of the
          region's senior care infrastructure — anchored by Providence Regional Medical Center Everett and a dense
          network of home health and hospital discharge referral sources.
        </p>
        <p>
          That density translates directly into AFH demand: a well-run home in Everett draws on a genuinely large
          pool of potential residents, which is part of why it's remained one of Snohomish County's more consistently
          active markets for both buyers and operators.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSaleEverett;
