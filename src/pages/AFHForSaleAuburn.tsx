import AFHCityHub from "@/components/AFHCityHub";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Auburn, WA?",
    answer:
      "Auburn has consistently active AFH listing activity, and current listings are shown on this page. Sitting at the boundary of King and Pierce counties, Auburn draws AFH buyers and operators looking for a central South Sound location.",
  },
  {
    question: "Is Auburn a good market for buying an Adult Family Home?",
    answer:
      "Auburn's location — roughly equidistant from Tacoma and Seattle, with direct access to both via I-5 and Highway 167 — makes it a practical base for an AFH serving South King and North Pierce County families, while offering more accessible pricing than either metro core.",
  },
  {
    question: "How much does an Adult Family Home cost in Auburn?",
    answer:
      "Pricing depends heavily on whether the sale includes the property alone, an operating licensed business, or both, along with the home's licensed capacity and occupancy history. Current asking prices for available Auburn listings are shown above.",
  },
  {
    question: "Does it matter whether an Auburn AFH is on the King County or Pierce County side of the city?",
    answer:
      "It can. Auburn spans both King and Pierce counties, and while the core DSHS licensing requirements are the same statewide, local zoning, permitting timelines, and property tax rates can differ slightly depending on which county a specific property falls in — worth confirming for any listing you're seriously considering.",
  },
  {
    question: "Can I buy an Auburn AFH if I don't live in the area?",
    answer:
      "Yes — this is common. A Washington-licensed broker experienced in AFH transactions can coordinate showings, inspections, and the DSHS licensing process remotely, and many operating businesses come with existing staff already in place to maintain continuity of care during the transition.",
  },
  {
    question: "How do I get notified about new AFH listings in Auburn?",
    answer:
      "Reach out directly — David Stein tracks Auburn and the broader South King/North Pierce County AFH market and can notify you when a matching property comes to market.",
  },
];

const AFHForSaleAuburn = () => (
  <AFHCityHub
    city="Auburn"
    county="King"
    slug="auburn-wa"
    metaDescription="Adult Family Homes for sale in Auburn, WA — licensed businesses, properties, or both. Current listings, pricing guidance, and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Auburn's position at the boundary of King and Pierce counties has long made it a practical hub for South
          Sound real estate, and its Adult Family Home market reflects that same central location. Buyers here often
          value the access it provides to both Tacoma and Seattle without the price premium of either.
        </p>
        <p>
          Because Auburn straddles two counties, it's worth confirming which side of the city line a specific
          property sits on — the core state licensing requirements are identical, but local permitting and zoning
          details can vary.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSaleAuburn;
