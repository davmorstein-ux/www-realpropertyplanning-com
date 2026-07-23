import AFHCityHub from "@/components/AFHCityHub";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Lynnwood, WA?",
    answer:
      "Lynnwood consistently has some of the strongest AFH listing activity in Snohomish County, and current listings are shown above. As a hub along the I-5 corridor with strong transit access, it draws steady interest from both buyers and operators.",
  },
  {
    question: "Why does Lynnwood have more Adult Family Homes for sale than other Snohomish County cities?",
    answer:
      "Lynnwood's mix of established single-family neighborhoods, central I-5/I-405 location, and proximity to major medical facilities makes it one of the more active AFH markets in Snohomish County. That activity means more listing turnover — which is good for buyers wanting genuine selection, though it also means more competition for well-priced properties.",
  },
  {
    question: "I'm planning to purchase an Adult Family Home in Lynnwood — where do I start?",
    answer:
      "Start by deciding whether you want to buy an already-licensed, operating home (faster path to revenue, but requires DSHS approval as the new licensee) or an unlicensed property you'll convert and license yourself (more flexibility, longer runway). From there, a Washington-licensed broker experienced in AFH transactions — someone who understands both the real estate and the DSHS process — can help you evaluate specific listings against your goals.",
  },
  {
    question: "How much do Adult Family Homes cost in Lynnwood?",
    answer:
      "Pricing varies significantly based on whether the sale includes just the property, an operating business, or both, along with the home's capacity (typically licensed for 2 to 6 residents), condition, and occupancy history. Current asking prices for available Lynnwood listings are shown above.",
  },
  {
    question: "Do I need experience in senior care to buy an Adult Family Home in Lynnwood?",
    answer:
      "DSHS requires the licensee to complete specific training and certification, but prior caregiving experience isn't a hard prerequisite to apply. Many successful AFH owners come from business, healthcare, or real estate backgrounds and build their caregiving team around experienced staff.",
  },
  {
    question: "How do I get notified about new AFH listings in Lynnwood?",
    answer:
      "Reach out directly — David Stein tracks Lynnwood and broader Snohomish County AFH inventory closely and can notify you as soon as a matching property comes to market.",
  },
];

const AFHForSaleLynnwood = () => (
  <AFHCityHub
    city="Lynnwood"
    county="Snohomish"
    slug="lynnwood-wa"
    metaDescription="Adult Family Homes for sale in Lynnwood, WA — licensed businesses, properties, or both. Current listings, pricing guidance, and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Lynnwood is one of the more active Adult Family Home markets in Snohomish County — its central location
          along the I-5 corridor, established residential neighborhoods, and proximity to Swedish Edmonds and other
          major medical facilities all make it a natural fit for licensed care.
        </p>
        <p>
          That activity is good news for buyers: Lynnwood tends to offer more genuine selection than smaller
          surrounding cities, whether you're looking for a licensed, operating business ready to generate income
          immediately, or a property you plan to license and build out yourself.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSaleLynnwood;
