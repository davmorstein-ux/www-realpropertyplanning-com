import AFHCityHub from "@/components/AFHCityHub";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Federal Way, WA?",
    answer:
      "Federal Way is one of the most active Adult Family Home markets in South King County, and current listings are shown on this page.",
  },
  {
    question: "How much does an Adult Family Home cost in Federal Way?",
    answer:
      "Recent Federal Way sales on this page ranged widely depending on whether the home was operating, formerly licensed, or WABO-ready. Sold price per bedroom is shown for each closed sale.",
  },
  {
    question: "Which Federal Way neighborhoods have adult family homes?",
    answer:
      "Dash Point, Twin Lakes, Steel Lake, and the Redondo border with Des Moines all have established AFH activity.",
  },
  {
    question: "Can a formerly licensed Federal Way home be relicensed quickly?",
    answer:
      "Often, if the inspected floor plan is unchanged and later work was permitted. One Federal Way home on this page went from formerly licensed to relicensed under a new provider within months of closing.",
  },
  {
    question: "How do I get notified about new AFH listings in Federal Way?",
    answer:
      `Use the alert form on this page, or contact ${FEATURED_BROKER.name} directly. He tracks Federal Way and the South King County AFH market and can notify you when a matching property lists.`,
  },
];

const AFHForSaleFederalWay = () => (
  <AFHCityHub
    city="Federal Way"
    county="King"
    slug="federal-way-wa"
    metaDescription="Adult Family Homes for sale in Federal Way, WA — licensed businesses, properties, or both. Current listings, recent sales, pricing guidance, and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Federal Way has quietly become one of the busiest adult family home markets south of Seattle. The city's Dash Point, Twin Lakes, and Steel Lake neighborhoods are full of the single-level homes that convert well, and the closed sales on this page show homes moving from formerly licensed to relicensed within a year.
        </p>
        <p>
          Because Federal Way sees a mix of operating homes, formerly licensed homes, and WABO-ready houses, the label on each listing is worth reading carefully before comparing prices.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSaleFederalWay;
