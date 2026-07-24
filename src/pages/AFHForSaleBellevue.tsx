import AFHCityHub from "@/components/AFHCityHub";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Bellevue, WA?",
    answer:
      "Bellevue's current AFH listings are shown on this page. As one of the Eastside's most established cities, Bellevue has a mature, high-value AFH market shaped by some of the highest household incomes in the state.",
  },
  {
    question: "Why are Adult Family Homes in Bellevue more expensive than most of the region?",
    answer:
      "Bellevue's real estate values — driven by its tech-sector economy, top-rated schools, and central Eastside location — carry through directly to AFH pricing. A comparably sized home in Bellevue will typically command a real premium over the same property type in Snohomish or Pierce County.",
  },
  {
    question: "Is Bellevue a good market for buying an operating AFH business rather than a property?",
    answer:
      "For many buyers, yes. Given how competitive and expensive Bellevue real estate is, purchasing an already-licensed, staffed, and occupied AFH lets you avoid both the bidding-war dynamics of the open property market and the months-long DSHS licensing process required to start from scratch.",
  },
  {
    question: "What's the DSHS licensing process like for a Bellevue AFH?",
    answer:
      "Regardless of city, Adult Family Homes in Washington State are licensed through the Department of Social and Health Services, involving a background check, home study, and fire/safety inspection. Buying an already-licensed home doesn't skip this process for the new owner, but it does mean the property itself has already passed inspection once.",
  },
  {
    question: "How does Bellevue's AFH market compare to Kirkland's?",
    answer:
      "The two Eastside cities share similar dynamics — high land values, an aging homeowner base, and steady demand for licensed care — though Bellevue's larger size and downtown density mean somewhat more variation between neighborhoods, from Somerset's larger lots to the more compact homes near Crossroads.",
  },
  {
    question: "How do I find out about new Bellevue AFH listings before they're widely marketed?",
    answer:
      "Reach out directly — David Stein works with AFH buyers and sellers throughout the Eastside and can flag new Bellevue listings as they come available, often ahead of general market exposure.",
  },
];

const AFHForSaleBellevue = () => (
  <AFHCityHub
    city="Bellevue"
    county="King"
    slug="bellevue-wa"
    metaDescription="Adult Family Homes for sale in Bellevue, WA — licensed businesses, properties, or both on the Eastside. Current listings and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Bellevue sits at the center of the Eastside's high-value real estate market — a combination of tech-sector
          wealth, top-rated schools, and central location that keeps demand for existing licensed AFHs consistently
          strong, even as it makes new development of care facilities financially difficult.
        </p>
        <p>
          For buyers, that combination cuts both ways: a well-run Adult Family Home in Bellevue can command a
          genuine premium, but competition for available listings is real. Buyers who move decisively — and
          understand the DSHS timeline well enough not to be caught off guard by it — tend to do best here.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSaleBellevue;
