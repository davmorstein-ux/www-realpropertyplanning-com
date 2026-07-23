import AFHCityHub from "@/components/AFHCityHub";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Puyallup, WA?",
    answer:
      "Current Puyallup-area AFH listings are shown above. As one of Pierce County's fastest-growing communities, Puyallup has seen steady growth in AFH activity alongside its broader residential expansion.",
  },
  {
    question: "Is Puyallup a good market for buying an Adult Family Home?",
    answer:
      "Puyallup offers meaningfully lower real estate pricing than King County or the Eastside while still sitting within reasonable reach of Tacoma-area medical facilities and services — a combination that makes it appealing for buyers looking to enter AFH ownership at a more accessible price point.",
  },
  {
    question: "What AFHs are for sale in Pierce County, not just Puyallup?",
    answer:
      "Pierce County's AFH market extends across Puyallup, Tacoma, Gig Harbor, and surrounding communities, each with a different mix of pricing and inventory. Puyallup listings are shown above; for a broader view of what's available across all of Pierce County, the full AFH marketplace listing tool covers the wider region.",
  },
  {
    question: "How much does an Adult Family Home cost in Puyallup compared to Seattle or the Eastside?",
    answer:
      "Puyallup pricing runs meaningfully below King County markets like Seattle or Kirkland for comparable properties, reflecting the broader real estate price differences between Pierce and King counties. That gap can make Puyallup an attractive option for buyers prioritizing affordability over proximity to Seattle.",
  },
  {
    question: "Do Puyallup Adult Family Homes need to meet different licensing requirements than other counties?",
    answer:
      "No — Adult Family Home licensing is governed at the state level by DSHS, so the core requirements (background checks, training, home study, fire and safety inspection) are the same in Puyallup as anywhere else in Washington. Local zoning and building code compliance are handled separately at the city/county level.",
  },
  {
    question: "How do I get notified about new AFH listings in Puyallup and Pierce County?",
    answer:
      "Reach out directly — David Stein tracks AFH inventory across Pierce County and can notify you when a Puyallup-area property matching your criteria comes on the market.",
  },
];

const AFHForSalePuyallup = () => (
  <AFHCityHub
    city="Puyallup"
    county="Pierce"
    slug="puyallup-wa"
    metaDescription="Adult Family Homes for sale in Puyallup, WA — licensed businesses, properties, or both in Pierce County. Current listings and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Puyallup has grown into one of Pierce County's more active residential markets, and its Adult Family Home
          inventory has grown alongside it. For buyers priced out of King County or the Eastside, Puyallup offers a
          genuinely more accessible entry point into AFH ownership without moving far from Tacoma-area services and
          medical facilities.
        </p>
        <p>
          As with any AFH purchase, the real estate transaction and the DSHS licensing process run on separate but
          connected tracks — understanding both from the start makes for a smoother path from offer to open doors.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSalePuyallup;
