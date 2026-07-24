import AFHCityHub from "@/components/AFHCityHub";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Marysville, WA?",
    answer:
      "Marysville has some of the strongest AFH listing activity in Snohomish County, and current listings are shown on this page. As one of the county's fastest-growing cities, Marysville has seen steady expansion in both its residential base and its AFH inventory.",
  },
  {
    question: "Why does Marysville have a strong Adult Family Home market?",
    answer:
      "Marysville combines relatively accessible land and home prices with proximity to Everett's medical facilities and the broader Puget Sound job market, drawing both operators looking to establish new homes and buyers seeking an accessible entry point into AFH ownership.",
  },
  {
    question: "How much do Adult Family Homes cost in Marysville?",
    answer:
      "Pricing depends on whether a listing includes the property alone, an operating licensed business, or both, along with the home's capacity, condition, and occupancy history. Current asking prices for available Marysville listings are shown above.",
  },
  {
    question: "Is Marysville a good area to convert a property into an Adult Family Home?",
    answer:
      "Marysville's housing stock includes a good number of single-level ranch-style homes on larger lots, which tend to convert well to AFH use. As with any conversion, the property still needs to pass DSHS licensing requirements around safety, accessibility, and staffing sightlines regardless of location.",
  },
  {
    question: "What's the difference between buying an AFH property versus an operating business in Marysville?",
    answer:
      "A property-only purchase gives you a home you'll need to license and staff yourself. An operating business purchase includes the existing DSHS license, staff, and residents, offering a faster path to revenue — though DSHS still needs to approve you as the new licensee before the transfer can close.",
  },
  {
    question: "How do I find out about new AFH listings in Marysville before they're widely marketed?",
    answer:
      "Reach out directly — David Stein tracks Marysville and broader Snohomish County AFH inventory closely and can notify you as soon as a matching property comes to market.",
  },
];

const AFHForSaleMarysville = () => (
  <AFHCityHub
    city="Marysville"
    county="Snohomish"
    slug="marysville-wa"
    metaDescription="Adult Family Homes for sale in Marysville, WA — licensed businesses, properties, or both. Current listings, pricing guidance, and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Marysville has grown into one of Snohomish County's most active Adult Family Home markets, driven by the
          same rapid residential expansion that's reshaped the city over the past two decades. Its mix of newer
          construction and established single-level homes gives buyers real flexibility, whether the goal is
          licensing a property from scratch or purchasing an already-operating home.
        </p>
        <p>
          As with any AFH purchase, the real estate transaction and the DSHS licensing process run on separate but
          connected tracks — understanding both from the outset makes for a smoother path from offer to open doors.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSaleMarysville;
