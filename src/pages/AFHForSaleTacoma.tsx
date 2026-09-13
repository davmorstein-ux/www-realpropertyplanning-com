import AFHCityHub from "@/components/AFHCityHub";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Tacoma, WA?",
    answer:
      "Tacoma has the deepest Adult Family Home inventory in Pierce County, and current listings are shown on this page. A large stock of single-level mid-century homes, a big senior population, and proximity to the Tacoma hospitals make it one of the most active AFH markets in Washington.",
  },
  {
    question: "How much does an Adult Family Home cost in Tacoma?",
    answer:
      "Tacoma AFH real estate typically trades well below King County. Recent closed sales on this page show what licensed, formerly licensed, and WABO-ready homes actually sold for; the business, where it conveys, is usually priced separately.",
  },
  {
    question: "Which Tacoma neighborhoods have the most adult family homes?",
    answer:
      "North Tacoma, West Tacoma, Browns Point, and the Parkland and South Tacoma areas all carry meaningful AFH activity. Single-level homes with four or more bedrooms and level entries are the common thread.",
  },
  {
    question: "Is Tacoma a good place to open an adult family home?",
    answer:
      "Demand is strong and the supporting infrastructure is in place, but the market is competitive and the city has many established operators. Buying an existing licensed home through Change of Ownership is often faster than converting a house from scratch.",
  },
  {
    question: "How do I get notified about new AFH listings in Tacoma?",
    answer:
      "Use the alert form on this page, or contact David Stein directly. He tracks Tacoma and the wider Pierce County AFH market and can notify you when a matching property lists.",
  },
];

const AFHForSaleTacoma = () => (
  <AFHCityHub
    city="Tacoma"
    county="Pierce"
    slug="tacoma-wa"
    metaDescription="Adult Family Homes for sale in Tacoma, WA — licensed businesses, properties, or both. Current listings, recent sales, pricing guidance, and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Tacoma is where much of Pierce County's adult family home activity happens. The city's older neighborhoods are full of one-story ramblers with the room counts operators look for, prices sit well below King County, and the hospitals, home-health agencies, and Medicaid case-management infrastructure that AFH operators depend on are all close.
        </p>
        <p>
          That depth cuts both ways. Tacoma sees more listings than any other city on this site, which means more choice for buyers but also more variation in condition, licensing status, and what is actually being sold. The labels on each listing below matter more here than almost anywhere.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSaleTacoma;
