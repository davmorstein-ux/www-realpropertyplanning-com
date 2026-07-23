import AFHCityHub from "@/components/AFHCityHub";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Edmonds, WA?",
    answer:
      "Edmonds has consistently strong AFH inventory, and current listings are shown above. As a well-established Puget Sound community with an older housing stock and a large senior population, Edmonds has long been one of Snohomish County's most active AFH markets.",
  },
  {
    question: "Why is Edmonds a popular area for Adult Family Homes?",
    answer:
      "Edmonds combines an unusually high concentration of older single-family homes — many well-suited to AFH conversion with minimal renovation — with a strong local senior population and easy access to Swedish Edmonds hospital. That combination has made it a long-established, stable AFH market rather than an emerging one.",
  },
  {
    question: "How much does an Adult Family Home cost in Edmonds?",
    answer:
      "Pricing depends on whether a listing includes the property alone, an operating licensed business, or both, along with the home's bedroom/bathroom count, condition, and (for operating businesses) occupancy and revenue history. Current asking prices for available Edmonds listings are shown above.",
  },
  {
    question: "Are Edmonds Adult Family Homes typically sold with the business, or just the property?",
    answer:
      "Both types of listings come up regularly in Edmonds. A sale that includes the operating business — residents, staff, and an active DSHS license — offers a faster path to income, while a property-only sale offers more flexibility for a buyer who wants to build out licensing and staffing on their own terms.",
  },
  {
    question: "What should I look for when evaluating an older Edmonds home for AFH conversion?",
    answer:
      "Beyond the DSHS licensing requirements, look closely at single-level living space, bathroom accessibility, bedroom count and configuration, and whether the layout supports the required staff sightlines and emergency egress. An independent, certified appraisal that accounts for AFH-specific use — not just general residential value — is worth having before making an offer.",
  },
  {
    question: "How do I find out about new Edmonds AFH listings as they come available?",
    answer:
      "Reach out directly — David Stein, a Washington State licensed broker and certified appraiser, tracks Edmonds and broader Snohomish County AFH inventory and can notify you when a matching listing comes to market.",
  },
];

const AFHForSaleEdmonds = () => (
  <AFHCityHub
    city="Edmonds"
    county="Snohomish"
    slug="edmonds-wa"
    metaDescription="Adult Family Homes for sale in Edmonds, WA — licensed businesses, properties, or both. Current listings, pricing guidance, and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Edmonds has one of the deepest, most established Adult Family Home markets in Snohomish County. Its housing
          stock skews older and larger than much of the surrounding area, its senior population is significant, and
          its proximity to Swedish Edmonds hospital makes it an attractive location for licensed care.
        </p>
        <p>
          For buyers, that maturity cuts both ways: there tends to be more genuine selection here than in smaller
          cities, but well-run, established homes with strong occupancy histories also command real premiums when
          they do come to market.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSaleEdmonds;
