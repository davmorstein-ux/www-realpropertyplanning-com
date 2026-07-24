import AFHCityHub from "@/components/AFHCityHub";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Mukilteo, WA?",
    answer:
      "Mukilteo's current AFH listings are shown on this page. As a smaller, waterfront Snohomish County community with strong ties to Boeing's Everett facility, Mukilteo has a compact but genuine AFH market.",
  },
  {
    question: "Is Mukilteo a good area for buying an Adult Family Home?",
    answer:
      "Mukilteo combines waterfront and view-property character with proximity to Providence Regional Medical Center Everett, giving it real appeal for both residents and buyers — though its smaller size means listing inventory is naturally more limited than larger neighboring cities.",
  },
  {
    question: "How much does an Adult Family Home cost in Mukilteo compared to Everett?",
    answer:
      "Mukilteo pricing tends to run above Everett's for comparable properties, reflecting the city's waterfront character and generally higher home values. Current asking prices for available Mukilteo listings are shown above.",
  },
  {
    question: "Are there many Adult Family Homes for sale in Mukilteo at any given time?",
    answer:
      "Mukilteo's smaller size means AFH inventory here is naturally more limited than in larger Snohomish County cities like Everett or Lynnwood. When a well-run home does come to market, it's worth acting on — worth setting up direct notifications if Mukilteo specifically is your target.",
  },
  {
    question: "What's the DSHS licensing process like for a Mukilteo AFH?",
    answer:
      "The same statewide process applies regardless of city — a background check, home study, and fire/safety inspection through the Department of Social and Health Services. Buying an already-licensed home means the property has already passed that inspection once, though the new owner still needs DSHS approval.",
  },
  {
    question: "How do I find out about new AFH listings in Mukilteo before they're widely marketed?",
    answer:
      "Reach out directly — given how limited Mukilteo's inventory typically is, David Stein can notify you as soon as a matching property comes to market, often before it's widely advertised.",
  },
];

const AFHForSaleMukilteo = () => (
  <AFHCityHub
    city="Mukilteo"
    county="Snohomish"
    slug="mukilteo-wa"
    metaDescription="Adult Family Homes for sale in Mukilteo, WA — licensed businesses, properties, or both. Current listings, pricing guidance, and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Mukilteo is a smaller, waterfront Snohomish County community shaped by its ferry terminal, Boeing's nearby
          Everett facility, and a genuine sense of small-town character despite sitting minutes from the region's
          largest employers. Its Adult Family Home market reflects that same scale — compact, but real.
        </p>
        <p>
          Because Mukilteo's inventory is naturally more limited than larger neighboring cities, buyers with their
          heart set on this specific community benefit from moving quickly and staying in close contact as new
          listings come available.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSaleMukilteo;
