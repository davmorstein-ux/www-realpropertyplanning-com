import AFHCityHub from "@/components/AFHCityHub";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Lakewood, WA?",
    answer:
      "Lakewood's current AFH listings are shown on this page. As one of Pierce County's larger cities, Lakewood offers a genuinely varied AFH market shaped by its mix of established neighborhoods and proximity to Joint Base Lewis-McChord.",
  },
  {
    question: "Is Lakewood a good area to buy an Adult Family Home?",
    answer:
      "Lakewood offers meaningfully lower real estate pricing than King County while still sitting within reasonable reach of Tacoma's medical facilities and services — a combination that makes it a practical entry point for buyers prioritizing affordability without sacrificing access to care infrastructure.",
  },
  {
    question: "How much does an Adult Family Home cost in Lakewood compared to Tacoma?",
    answer:
      "Lakewood pricing tends to run somewhat below Tacoma's core neighborhoods for comparable properties, though the gap has narrowed as both cities have seen steady growth. Current asking prices for available Lakewood listings are shown above.",
  },
  {
    question: "Does Joint Base Lewis-McChord affect the Lakewood AFH market?",
    answer:
      "Indirectly, yes — the base's presence supports a broader regional population and economy, which factors into overall housing demand in Lakewood. It doesn't change core DSHS licensing requirements, but it's part of what shapes the city's steady residential growth.",
  },
  {
    question: "What should I know about buying an operating AFH business in Lakewood versus a property alone?",
    answer:
      "An operating business purchase — with residents, staff, and an active DSHS license already in place — offers a faster path to revenue, though DSHS still needs to approve you as the new licensee. A property-only purchase gives you more control over licensing and staffing decisions from the start.",
  },
  {
    question: "How do I get notified about new AFH listings in Lakewood and Pierce County?",
    answer:
      "Reach out directly — David Stein tracks AFH inventory across Pierce County and can notify you when a Lakewood-area property matching your criteria comes on the market.",
  },
];

const AFHForSaleLakewood = () => (
  <AFHCityHub
    city="Lakewood"
    county="Pierce"
    slug="lakewood-wa"
    metaDescription="Adult Family Homes for sale in Lakewood, WA — licensed businesses, properties, or both in Pierce County. Current listings and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Lakewood is one of Pierce County's larger, more established cities, with a housing stock shaped by decades
          of steady growth and proximity to Joint Base Lewis-McChord. That mix of affordability and access to
          Tacoma-area services has made it a consistently practical market for Adult Family Home buyers.
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

export default AFHForSaleLakewood;
