import AFHCityHub from "@/components/AFHCityHub";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Kennewick, WA?",
    answer:
      "Kennewick and the Tri-Cities have a growing Adult Family Home market with high occupancy and less competition than Puget Sound. Any current listings are shown on this page, and recent closed sales appear below them.",
  },
  {
    question: "How much does an Adult Family Home cost in Kennewick?",
    answer:
      "The most recent Kennewick sale on this page was a licensed home operating since 2008 that sold in the high $800,000s for the real estate, with the business offered separately. Tri-Cities AFH prices generally sit below Puget Sound for comparable homes.",
  },
  {
    question: "Is the Tri-Cities a good market for an adult family home?",
    answer:
      "Operators report high occupancy and strong demand from a growing retiree population, with less competition than the Seattle-Tacoma corridor. The trade-off is thin inventory: opportunities to buy an operating home are infrequent.",
  },
  {
    question: "Do you cover Pasco and Richland as well?",
    answer:
      "Yes. Tri-Cities listings and sales are grouped here until Pasco and Richland have enough activity for their own pages.",
  },
  {
    question: "How do I get notified about new AFH listings in Kennewick?",
    answer:
      `Use the alert form on this page, or contact ${FEATURED_BROKER.name} directly. He tracks the Tri-Cities AFH market and can notify you when a matching property lists.`,
  },
];

const AFHForSaleKennewick = () => (
  <AFHCityHub
    city="Kennewick"
    county="Benton"
    slug="kennewick-wa"
    metaDescription="Adult Family Homes for sale in Kennewick, WA — licensed businesses, properties, or both. Current listings, recent sales, pricing guidance, and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Kennewick, with Pasco and Richland, forms a Tri-Cities adult family home market that behaves differently from Western Washington. Occupancy runs high, the retiree population is growing, and there are far fewer homes on the market at any given time, so a licensed home that lists tends to draw regional attention quickly.
        </p>
        <p>
          Inventory here is thin and irregular. When nothing is active, the closed sales below and the alert form are the best way to follow the market.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSaleKennewick;
