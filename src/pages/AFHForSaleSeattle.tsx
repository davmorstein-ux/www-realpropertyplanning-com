import AFHCityHub from "@/components/AFHCityHub";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Seattle, WA?",
    answer:
      "Seattle's Adult Family Home inventory turns over regularly across neighborhoods from West Seattle to Northgate. Current listings — with photos, pricing, and licensing status — are shown above, and update as new properties come to market.",
  },
  {
    question: "How much does an Adult Family Home cost in Seattle?",
    answer:
      "Seattle city-limit AFH pricing tends to run higher than surrounding King County suburbs, largely due to land values. Pricing depends heavily on whether the sale includes the licensed business and operations, the property alone, or both — a licensed, operating home with strong occupancy commands a meaningful premium over an unlicensed property being converted for AFH use.",
  },
  {
    question: "Do I need a special license to buy or operate an AFH in Seattle?",
    answer:
      "Yes. Adult Family Homes in Washington State are licensed through the Department of Social and Health Services (DSHS), regardless of city. Seattle doesn't have a separate municipal AFH license, but city-level business licensing, zoning compliance, and fire/building code requirements still apply on top of the state DSHS process.",
  },
  {
    question: "Is it better to buy an AFH as a business, the property, or both?",
    answer:
      "It depends on your goals. Buying an already-licensed, operating business (with residents, staff, and DSHS licensing in place) lets you generate revenue faster but requires passing DSHS's licensee approval process. Buying just the property gives you flexibility but means starting the licensing and staffing process from scratch. Buying both together is the most common path for someone who wants to step directly into ownership and operation.",
  },
  {
    question: "What parts of Seattle have Adult Family Homes available?",
    answer:
      "AFHs are distributed across Seattle's residential zones rather than concentrated in one neighborhood — availability shifts over time based on what's currently listed. The listings shown above reflect whatever is actively on the market in Seattle right now.",
  },
  {
    question: "How do I get notified when a new Seattle AFH listing comes on the market?",
    answer:
      "The fastest way is to reach out directly — David Stein tracks new Seattle-area AFH listings as they hit the market and can notify you when something matching your criteria becomes available, often before it's widely marketed.",
  },
];

const AFHForSaleSeattle = () => (
  <AFHCityHub
    city="Seattle"
    county="King"
    slug="seattle-wa"
    metaDescription="Adult Family Homes for sale in Seattle, WA — licensed businesses, properties, or both. Current listings, pricing guidance, and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Seattle's Adult Family Home market sits at the intersection of the city's aging population and its
          persistently tight housing supply — which together keep demand for licensed AFH care steady across nearly
          every neighborhood. For buyers, that means opportunities do come up, but they don't sit on the market
          long.
        </p>
        <p>
          Every AFH sale in Seattle runs on two parallel tracks: the real estate transaction itself, and the DSHS
          licensing process that determines who can legally operate the home. Understanding how those two pieces fit
          together — and where a buyer's timeline can get held up waiting on one or the other — is usually the
          difference between a smooth purchase and a frustrating one.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSaleSeattle;
