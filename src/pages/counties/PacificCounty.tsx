import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const PacificCounty = () => (
  <CountyPageTemplate
    countyName="Pacific County"
    countyPath="/pacific-county"
    countySlug="pacific-county"
    heroH1="Pacific County, WA"
    heroSubheading="Probate, estate, and senior transition real estate for families with inherited property along Washington's southern Pacific coast."
    belowHeroHeading="Serving Every Corner of Pacific County"
    seoTitle="Probate & Estate Real Estate in Pacific County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout Pacific County, Washington. Serving Long Beach, Raymond, South Bend, Ilwaco & surrounding communities."
    cities={[
      "Long Beach", "Raymond", "South Bend", "Ilwaco", "Naselle",
      "Ocean Park", "Seaview", "Chinook", "Skamokawa", "Lebam",
    ]}
    localInsight={`Pacific County runs along Washington's southern Pacific coastline, from the Long Beach Peninsula's beach communities and the fishing port of Ilwaco to the timber and agricultural communities of Raymond and South Bend on Willapa Bay. It is one of Washington's most geographically remote counties, and that remoteness shapes its real estate market. Buyers for coastal Pacific County properties are a specific group, drawn by the beach, the natural setting, and the affordability relative to other Pacific Northwest coastal areas. Estate and inherited properties here need pricing set for that buyer pool and for the property's actual condition, which often includes significant deferred maintenance from coastal exposure and seasonal use. ${FEATURED_BROKER.Role} works with families and executors on Pacific County estate properties.`}
    aeoQuestion="How does probate real estate work in Pacific County?"
    aeoAnswer="Pacific County probates are usually filed in the Pacific County Superior Court in South Bend, though Washington allows filing in any county. Personal representatives must receive Letters Testamentary (or, without a will, Letters of Administration) before listing or selling estate property. The featured Washington licensed broker, who is also a certified residential appraiser, can support executors and families from date-of-death valuation through closing, with particular attention to coastal property characteristics, the county's remote location, and the logistics of managing an estate property for families based in Western Washington or out of state."
    aeoSupportFaqs={[
      {
        question: "What types of estate properties are most common in Pacific County?",
        answer: "Pacific County estates frequently involve beach cottages and vacation homes on the Long Beach Peninsula, established homes in Raymond and South Bend, fishing and waterfront properties near Ilwaco and Chinook, rural acreage in the county interior, and older properties with coastal exposure wear and deferred maintenance. Each type needs a different valuation and preparation approach.",
      },
      {
        question: "How does coastal exposure affect estate property values in Pacific County?",
        answer: `Coastal exposure causes specific condition problems (moisture intrusion, weathering, salt air corrosion, and deferred maintenance on decks, roofing, and exterior finishes) that affect both value and buyer expectations. ${FEATURED_BROKER.Role}'s condition-based valuation accounts for these factors, so an estate property is priced on its actual condition rather than its coastal location alone.`,
      },
    ]}
    localExpertiseHeading="Pacific County's Real Estate Market: What Estate Sellers Need to Know"
    localExpertiseBody={[
      "The Long Beach Peninsula is Pacific County's most active real estate market. It is a 28-mile barrier spit with beach access, a history of vacation rentals, and a buyer pool that includes second-home buyers, retirees, and families looking for affordable coastal living. Properties on the peninsula range from modest beach cottages to larger homes with ocean or bay views, and condition varies widely. Estate properties here need an honest condition assessment and a price that reflects what coastal buyers will actually pay for the property in its current state.",
      "Raymond and South Bend are a different market. They are the county's inland commercial and governmental centers, with practical residential neighborhoods and a buyer pool driven by local employment rather than coastal lifestyle. Estate properties there need pricing set to local demand, which can be more limited than on the peninsula. Rural properties in the county interior (acreage near Naselle, Lebam, and the surrounding timber communities) need rural valuation experience that accounts for land characteristics, access, and the specific buyer pool for remote Pacific County property.",
    ]}
    communitiesIntro={`${FEATURED_BROKER.Role} serves families, executors, and professionals throughout Pacific County, including:`}
    closingCtaBody={[
      "If you are handling an inherited beach cottage on the Long Beach Peninsula, a home in Raymond, or rural acreage near Naselle, a conversation can cover the property's condition and what local buyers are paying.",
      `${FEATURED_BROKER.Role} prices Pacific County estate properties on their actual condition, on the coast and inland alike.`,
    ]}
    countySpecificFaqs={[
      {
        question: "Can a Pacific County probate property be listed before Letters are issued?",
        answer: `No. The property cannot be marketed until Letters Testamentary or Letters of Administration have been issued by the superior court handling the estate (usually the Pacific County Superior Court in South Bend). ${FEATURED_BROKER.Role} uses that waiting period for the date-of-death valuation walk-through, securing the property, coordinating cleanout vendors, and preparing the marketing file, so the property is ready to list when Letters arrive.`,
      },
      {
        question: "How is a Long Beach Peninsula vacation property valued as part of an estate?",
        answer: `Long Beach Peninsula vacation properties are valued based on location within the peninsula, proximity to the ocean or bay, lot size, condition, and rental history if applicable. Automated estimates are frequently unreliable for these properties. ${FEATURED_BROKER.Role}'s certified appraisal background supports the on-site, property-specific evaluation these coastal vacation properties need.`,
      },
      {
        question: "Can a Pacific County estate sale be managed for families in Seattle or out of state?",
        answer: `Yes. This is a common situation for ${FEATURED_BROKER.role} in Pacific County, where many properties are owned by families based hours away. ${FEATURED_BROKER.pronoun.Subject} handles property assessment, vendor coordination, preparation, showings, and closing locally, with regular updates so families don't need to make repeated trips to the south coast.`,
      },
      {
        question: "What should executors know about selling property in Raymond or South Bend?",
        answer: `Raymond and South Bend have a more limited buyer pool than the Long Beach Peninsula, and estate properties here need to be priced realistically for local demand rather than coastal lifestyle premiums. An honest condition assessment and practical preparation matter especially in these communities, where overpricing can lead to longer market time and eventual price reductions. ${FEATURED_BROKER.Role} gives plain pricing and preparation advice for these markets.`,
      },
    ]}
  />
);

export default PacificCounty;
