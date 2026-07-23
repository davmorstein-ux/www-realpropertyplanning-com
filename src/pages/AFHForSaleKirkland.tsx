import AFHCityHub from "@/components/AFHCityHub";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Kirkland, WA?",
    answer:
      "Kirkland's Adult Family Home listings are shown above and reflect what's currently active on the market — inventory here tends to be limited given the Eastside's high land values, so available properties don't stay listed long.",
  },
  {
    question: "Why are Adult Family Homes in Kirkland more expensive than other areas?",
    answer:
      "Kirkland's real estate values — driven by its lakefront location, strong schools, and proximity to Eastside employers — carry through directly to AFH pricing. A comparably sized home in Kirkland will typically cost more than the same property type in Snohomish or Pierce County, even before accounting for the value of an existing operating license and resident base.",
  },
  {
    question: "Is Kirkland a good market to buy an operating AFH business rather than just the property?",
    answer:
      "For many buyers, yes. Given how competitive Kirkland real estate is, purchasing an already-licensed, staffed, and occupied AFH lets you sidestep both the bidding-war dynamics of the open property market and the months-long DSHS licensing process required to start a home from scratch.",
  },
  {
    question: "What's involved in the DSHS licensing process for a Kirkland AFH?",
    answer:
      "Regardless of city, Adult Family Homes in Washington State are licensed through the Department of Social and Health Services. The process includes a background check, a home study, fire and safety inspections, and training requirements for the licensee. Buying an already-licensed home doesn't eliminate this process, but it does streamline it since the property has already passed inspection once.",
  },
  {
    question: "How does zoning affect buying an AFH in Kirkland?",
    answer:
      "Adult Family Homes are generally permitted in residential zones under Washington State law, which limits how much a city can restrict them compared to other group-care facilities. Still, it's worth confirming a specific property's zoning and any HOA restrictions before making an offer, particularly in planned communities.",
  },
  {
    question: "How do I find out about new Kirkland AFH listings before they're widely marketed?",
    answer:
      "Reach out directly — David Stein works with AFH buyers and sellers throughout the Eastside and can flag new Kirkland listings as they come available, often ahead of general market exposure.",
  },
];

const AFHForSaleKirkland = () => (
  <AFHCityHub
    city="Kirkland"
    county="King"
    slug="kirkland-wa"
    metaDescription="Adult Family Homes for sale in Kirkland, WA — licensed businesses, properties, or both on the Eastside. Current listings and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Kirkland sits at a distinctive point in the Eastside AFH market — strong household incomes, an aging
          homeowner base, and land values that make new construction of care facilities financially difficult all
          combine to keep demand for existing licensed homes high.
        </p>
        <p>
          That combination cuts both ways for buyers: it's a market where a well-run Adult Family Home can command a
          real premium, but it's also one where competition for available listings is genuine. Buyers who move
          decisively — and who understand the DSHS licensing timeline well enough to not be caught off guard by it —
          tend to fare best here.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSaleKirkland;
