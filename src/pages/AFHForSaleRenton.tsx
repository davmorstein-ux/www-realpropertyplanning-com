import AFHCityHub from "@/components/AFHCityHub";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Renton, WA?",
    answer:
      "Renton's current AFH listings are shown above. As a South King County hub with a diverse mix of housing stock, Renton tends to offer more accessible entry points into AFH ownership than areas closer to Seattle or the Eastside.",
  },
  {
    question: "Is Renton a good area to buy an Adult Family Home?",
    answer:
      "Renton's combination of relatively moderate real estate pricing, proximity to major King County employers, and a growing senior population makes it a practical option for buyers who want King County market access without Seattle or Eastside price levels.",
  },
  {
    question: "What's the difference between buying an AFH property versus an AFH business in Renton?",
    answer:
      "A property-only purchase gets you the physical home, but you'll need to complete DSHS licensing and build a resident base before generating revenue. An operating business purchase includes the existing license, staff, and residents — meaning income from day one, but it also requires DSHS approval of you as the new licensee before the transfer can close.",
  },
  {
    question: "How long does it take to buy and open an Adult Family Home in Renton?",
    answer:
      "Timelines vary by path. Buying an already-licensed, operating home can move as quickly as a standard real estate closing, since the licensing is already in place — though DSHS still needs to approve the new licensee. Starting from an unlicensed property typically adds several months for inspections, background checks, and the licensing process itself.",
  },
  {
    question: "Do Renton Adult Family Homes need to be Medicaid-certified?",
    answer:
      "No — Medicaid certification is optional and separate from the base DSHS license. Some Renton AFHs operate as private-pay only, while others carry Medicaid certification to serve a broader range of residents. Whether a specific listing is Medicaid-certified is typically noted on the listing itself.",
  },
  {
    question: "How do I get notified about new AFH listings in Renton and South King County?",
    answer:
      "Contact David Stein directly — he tracks AFH inventory across South King County and can reach out when a Renton-area property matching your criteria comes on the market.",
  },
];

const AFHForSaleRenton = () => (
  <AFHCityHub
    city="Renton"
    county="King"
    slug="renton-wa"
    metaDescription="Adult Family Homes for sale in Renton, WA — licensed businesses, properties, or both in South King County. Current listings and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Renton occupies a practical middle ground in the King County AFH market — close enough to Seattle and the
          Eastside to draw on the same employment base and senior population, while offering more approachable
          pricing than either. For many first-time AFH buyers, that combination makes it a natural entry point.
        </p>
        <p>
          South King County's housing stock also tends to include more of the larger, single-level ranch-style homes
          that convert well to AFH use — a practical advantage when evaluating a property's suitability, separate
          from the licensing question entirely.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSaleRenton;
