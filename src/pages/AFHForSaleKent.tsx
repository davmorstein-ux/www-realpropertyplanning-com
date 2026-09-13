import AFHCityHub from "@/components/AFHCityHub";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Kent, WA?",
    answer:
      "Kent has steady Adult Family Home listing activity across its West Hill and East Hill neighborhoods, and current listings are shown on this page.",
  },
  {
    question: "How much does an Adult Family Home cost in Kent?",
    answer:
      "Kent AFH real estate usually prices between Tacoma and the Eastside. The closed sales on this page show recent results, and business prices, where disclosed, are noted on each sale.",
  },
  {
    question: "Are Kent AFH sales usually real estate only, or real estate plus business?",
    answer:
      "Both are common, and many Kent sales close as two transactions on the same day. The classification label on each listing says whether the operating business conveys, is listed separately, or is not included.",
  },
  {
    question: "Is Kent a good market for a first adult family home?",
    answer:
      "Kent is one of the more accessible South King County markets for a first-time operator: prices are moderate, the licensing infrastructure is nearby, and there is a deep pool of experienced caregivers in the area.",
  },
  {
    question: "How do I get notified about new AFH listings in Kent?",
    answer:
      "Use the alert form on this page, or contact David Stein directly. He tracks Kent and the South King County AFH market and can notify you when a matching property lists.",
  },
];

const AFHForSaleKent = () => (
  <AFHCityHub
    city="Kent"
    county="King"
    slug="kent-wa"
    metaDescription="Adult Family Homes for sale in Kent, WA — licensed businesses, properties, or both. Current listings, recent sales, pricing guidance, and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Kent sits in the middle of the South King County corridor that produces a large share of the region's adult family home sales. West Hill and East Hill both carry established AFH neighborhoods, the housing stock skews toward the ramblers operators prefer, and prices remain below Seattle and the Eastside.
        </p>
        <p>
          Kent listings are often sold as separate real-estate and business transactions closing simultaneously, so pay close attention to which one a listing describes and what the combined price is.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSaleKent;
