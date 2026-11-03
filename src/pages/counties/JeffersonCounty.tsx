import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const JeffersonCounty = () => (
  <CountyPageTemplate
    countyName="Jefferson County"
    countyPath="/jefferson-county"
    countySlug="jefferson-county"
    heroH1="Jefferson County, WA"
    heroSubheading="Probate, estate, and senior transition real estate for families with property on Washington's Olympic Peninsula."
    belowHeroHeading="Serving Every Corner of Jefferson County"
    seoTitle="Probate & Estate Real Estate in Jefferson County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout Jefferson County, Washington. Serving Port Townsend, Sequim, Port Hadlock & surrounding communities."
    cities={[
      "Port Townsend", "Sequim", "Port Hadlock", "Quilcene",
      "Brinnon", "Chimacum", "Irondale", "Marrowstone Island", "Discovery Bay",
    ]}
    localInsight={`Jefferson County occupies the northeastern corner of the Olympic Peninsula. Its small communities each have their own identity, and its real estate market is shaped as much by lifestyle as by economics. Port Townsend's Victorian architecture and arts community attract buyers looking for historic character and waterfront access. Sequim's lavender fields and mild microclimate have made it one of Washington's premier retirement destinations. The rural communities of Quilcene, Brinnon, and the Hood Canal corridor draw buyers who want quiet, rural living at the edge of the Olympic Peninsula. An estate or inherited property here needs someone who understands the community it sits in and the buyers it will attract, as well as the property itself. ${FEATURED_BROKER.Role} works with families and executors throughout the county.`}
    aeoQuestion="How does probate real estate work in Jefferson County?"
    aeoAnswer="Jefferson County probates are usually filed in the Jefferson County Superior Court in Port Townsend, though Washington allows filing in any county. Personal representatives must receive Letters Testamentary (or, without a will, Letters of Administration) before marketing or selling estate property. The featured Washington licensed broker, who is also a certified residential appraiser, can support executors and families from the initial date-of-death valuation through closing, with particular attention to the Peninsula's local market and the logistics of managing a property across communities that can be far apart."
    aeoSupportFaqs={[
      {
        question: "What types of estate properties are most common in Jefferson County?",
        answer: "Jefferson County estates frequently involve historic homes in Port Townsend, retirement-era properties in Sequim, rural acreage along the Hood Canal and Olympic Peninsula foothills, and waterfront or water-view properties throughout the county. Each type needs a different approach to valuation, preparation, and marketing.",
      },
      {
        question: "How does Sequim's retirement community character affect estate sales there?",
        answer: `Sequim has attracted retirees for decades, so many estate sales involve properties chosen for retirement living: single-story homes, accessible layouts, low-maintenance lots, and proximity to amenities. That creates a specific buyer pool of active retirees and families relocating parents, which ${FEATURED_BROKER.role} accounts for in pricing and marketing.`,
      },
    ]}
    localExpertiseHeading="Jefferson County's Market: What Estate Sellers Need to Know"
    localExpertiseBody={[
      "Jefferson County's communities work as separate markets despite sharing a county. Port Townsend's Victorian waterfront and historic district draw buyers who want architectural character, walkability, and an arts community. Sequim's retirement appeal and 'banana belt' microclimate attract a different buyer, one who puts sunshine, accessibility, and nearby medical services first. The rural Hood Canal communities of Brinnon and Quilcene serve buyers looking for privacy, outdoor recreation, and properties with land.",
      `For estate and inherited properties, this means pricing and preparation have to be set for the specific location, not for Jefferson County as a whole. A Port Townsend Victorian, a Sequim retirement rambler, and a Quilcene acreage property each need a different approach. ${FEATURED_BROKER.Role}'s appraisal background and Olympic Peninsula market knowledge help each property be evaluated on its own terms.`,
    ]}
    communitiesIntro={`${FEATURED_BROKER.Role} serves families, executors, and professionals throughout Jefferson County, including:`}
    closingCtaBody={[
      "If you are handling an inherited Victorian in Port Townsend, a retirement-era home in Sequim, or rural acreage along the Hood Canal, a conversation can go over the property's likely value and the work needed before a sale.",
      `${FEATURED_BROKER.Role} works with estate and inherited properties in each of Jefferson County's communities.`,
    ]}
    countySpecificFaqs={[
      {
        question: "Can a Jefferson County probate property be listed before Letters are issued?",
        answer: `No. The property cannot be marketed until Letters Testamentary or Letters of Administration have been issued by the superior court handling the estate (usually the Jefferson County Superior Court in Port Townsend). ${FEATURED_BROKER.Role} uses that waiting period for the valuation walk-through, securing the property, coordinating vendors, and preparing the marketing file, so the listing can start soon after Letters arrive.`,
      },
      {
        question: "How is a historic Port Townsend home valued as part of an estate?",
        answer: `Port Townsend's Victorian homes are among the most architecturally significant in Washington State, and their value reflects both the historic character and the condition of each property. Restoration work, period-appropriate features, and proximity to the historic district all affect value in ways that automated tools miss. ${FEATURED_BROKER.Role}'s appraisal background supports the property-specific analysis these homes need.`,
      },
      {
        question: "Can a Jefferson County estate sale be managed for out-of-area heirs?",
        answer: `Yes. This is especially common in Jefferson County, where many property owners relocated from Western Washington or out of state for retirement. ${FEATURED_BROKER.Role} handles property assessment, vendor coordination, preparation, showings, and offer review locally, and keeps out-of-area families informed with regular updates. Travel to Jefferson County is rarely required.`,
      },
      {
        question: "What should executors know about selling rural acreage or Hood Canal property in Jefferson County?",
        answer: `Rural properties in Jefferson County (acreage along the Hood Canal, properties near Quilcene and Brinnon, and Olympic Peninsula foothills parcels) need a valuation that accounts for land features, access, well and septic systems, and a buyer pool that differs significantly from suburban markets. Comparable sales for these property types are often limited, so an on-site evaluation matters, and ${FEATURED_BROKER.role}'s certified appraisal background supports it.`,
      },
    ]}
  />
);

export default JeffersonCounty;
