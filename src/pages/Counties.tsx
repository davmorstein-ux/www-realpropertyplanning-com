import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import iconServiceAreas from "@/assets/icons/real-estate-service-areas-map-illustration-washington.webp";
import { services } from "@/lib/service-areas-data";
import kingCountyLogo from "@/assets/counties/king-county-logo.webp";
import snohomishCountyLogo from "@/assets/counties/snohomish-county-logo.webp";
import pierceCountyLogo from "@/assets/counties/pierce-county-logo.webp";
import kitsapCountyLogo from "@/assets/counties/kitsap-county-logo.webp";
import skagitCountyLogo from "@/assets/counties/skagit-county-logo.webp";
import clarkCountyLogo from "@/assets/counties/clark-county-logo.webp";
import spokaneCountyLogo from "@/assets/counties/spokane-county-logo.webp";
import thurstonCountyLogo from "@/assets/counties/thurston-county-logo.webp";
import whatcomCountyLogo from "@/assets/counties/whatcom-county-logo.webp";
import bentonCountyLogo from "@/assets/counties/benton-county-logo.webp";
import fallbackCountyLogo from "@/assets/icons/real-estate-service-areas-map-icon-washington.webp";
import cowlitzCountyLogo from "@/assets/counties/cowlitz-county-logo.webp";
import islandCountyLogo from "@/assets/counties/island-county-logo.webp";
import jeffersonCountyLogo from "@/assets/counties/jefferson-county-logo.webp";
import lewisCountyLogo from "@/assets/counties/lewis-county-logo.webp";
import masonCountyLogo from "@/assets/counties/mason-county-logo.webp";
import pacificCountyLogo from "@/assets/counties/pacific-county-logo.webp";
import sanJuanCountyLogo from "@/assets/counties/san-juan-county-logo.webp";
import skamaniCountyLogo from "@/assets/counties/skamania-county-logo.webp";
import wahkiakumCountyLogo from "@/assets/counties/wahkiakum-county-logo.webp";
import graysHarborCountyLogo from "@/assets/counties/grays-harbor-county-logo.webp";

const countyCards = [
  {
    county: "King County",
    href: "/king-county",
    logo: kingCountyLogo,
    intro: "Washington's largest and most competitive real estate market. Estate properties range from Capitol Hill bungalows to Eastside homes valued well over a million dollars — making accurate pricing and experienced coordination especially critical.",
  },
  {
    county: "Snohomish County",
    href: "/snohomish-county",
    logo: snohomishCountyLogo,
    intro: "Diverse housing stock from established Edmonds neighborhoods to newer Marysville developments. Executors and families here often need help with deferred maintenance, realistic pricing, and coordinating vendors for homes that haven't been updated in decades.",
  },
  {
    county: "Pierce County",
    href: "/pierce-county",
    logo: pierceCountyLogo,
    intro: "Military-adjacent communities, established Tacoma neighborhoods, and growing suburban areas each present unique challenges for estate sales. Pierce County properties often require careful condition assessment and realistic buyer-pool analysis.",
  },
  {
    county: "Kitsap County",
    href: "/kitsap-county",
    logo: kitsapCountyLogo,
    intro: "Waterfront properties, naval community transitions, and rural acreage create a market where automated valuations consistently miss the mark. Local knowledge and condition-based pricing are essential here.",
  },
  {
    county: "Skagit County",
    href: "/skagit-county",
    logo: skagitCountyLogo,
    intro: "Agricultural properties, small-town homes, and waterfront parcels in the Skagit Valley require a different approach than urban markets. Estate sales here often involve unique zoning, acreage, and condition considerations.",
  },
  {
    county: "Clark County",
    href: "/clark-county",
    logo: clarkCountyLogo,
    intro: "Cross-state families, Portland-area relocation dynamics, and a rapidly growing market make Clark County estate sales uniquely complex — especially for executors coordinating from Oregon or beyond.",
  },
  {
    county: "Spokane County",
    href: "/spokane-county",
    logo: spokaneCountyLogo,
    intro: "Eastern Washington's largest metro area, with a housing market distinct from the Puget Sound region. Out-of-area executors often need hands-on coordination for inherited properties in Spokane's established neighborhoods.",
  },
  {
    county: "Thurston County",
    href: "/thurston-county",
    logo: thurstonCountyLogo,
    intro: "State capital region with a mix of government-adjacent homes, established neighborhoods, and rural acreage. Retiree transitions and estate planning follow-through are especially common here.",
  },
  {
    county: "Whatcom County",
    href: "/whatcom-county",
    logo: whatcomCountyLogo,
    intro: "Bellingham and surrounding communities attract second-home owners and retirees, creating frequent distance-ownership challenges when estates need to be settled or seniors need to transition.",
  },
  {
    county: "Benton County",
    href: "/benton-county",
    logo: bentonCountyLogo,
    intro: "Tri-Cities area properties often involve practical pricing challenges, multi-generational family homes, and executors coordinating from Western Washington or out of state.",
  },
  {
    county: "Cowlitz County",
    href: "/cowlitz-county",
    logo: cowlitzCountyLogo,
    intro: "From Longview's established neighborhoods to rural properties along the Toutle River corridor, Cowlitz County estate sales require local market knowledge and condition-adjusted pricing. Real Property Planning coordinates the full process for families and executors throughout the area.",
  },
  {
    county: "Grays Harbor County",
    href: "/grays-harbor-county",
    logo: graysHarborCountyLogo,
    intro: "Grays Harbor spans the coastal communities of Ocean Shores and Westport to the urban twin cities of Aberdeen and Hoquiam. Estate and inherited properties here range from coastal cottages to rural timber parcels — each requiring a different pricing and preparation approach.",
  },
  {
    county: "Island County",
    href: "/island-county",
    logo: islandCountyLogo,
    intro: "Whidbey and Camano Islands offer waterfront living, rural character, and communities that attract retirees and second-home owners. Estate properties on the islands require locally informed guidance and coordination for families managing from the mainland.",
  },
  {
    county: "Jefferson County",
    href: "/jefferson-county",
    logo: jeffersonCountyLogo,
    intro: "Jefferson County's Olympic Peninsula setting — from Port Townsend's Victorian waterfront to the rural Hood Canal communities — creates a distinctive market for estate and inherited properties. Real Property Planning provides experienced guidance for executors and families throughout the area.",
  },
  {
    county: "Lewis County",
    href: "/lewis-county",
    logo: lewisCountyLogo,
    intro: "Lewis County stretches from Chehalis and Centralia along I-5 to the rural communities of the Cascade foothills. Estate properties here often include older homes, rural acreage, and agricultural parcels that benefit from condition-based pricing and local coordination.",
  },
  {
    county: "Mason County",
    href: "/mason-county",
    logo: masonCountyLogo,
    intro: "Mason County's Hood Canal waterfront, Shelton's small-city character, and the surrounding rural communities create a varied market for estate and transition properties. Waterfront premiums, rural acreage, and limited comparable sales all call for experienced, on-the-ground guidance.",
  },
  {
    county: "Pacific County",
    href: "/pacific-county",
    logo: pacificCountyLogo,
    intro: "Pacific County's Long Beach Peninsula, Raymond, and South Bend communities offer coastal and rural properties that attract a specific buyer pool. Estate sales here require pricing calibrated to the local market and buyer demographics — not broad regional averages.",
  },
  {
    county: "San Juan County",
    href: "/san-juan-county",
    logo: sanJuanCountyLogo,
    intro: "The San Juan Islands are one of Washington's most distinctive and sought-after real estate markets. Estate properties on San Juan, Orcas, Lopez, and the smaller islands require specialized valuation and coordination for families managing from the mainland or out of state.",
  },
  {
    county: "Skamania County",
    href: "/skamania-county",
    logo: skamaniCountyLogo,
    intro: "Skamania County's Columbia River Gorge setting — anchored by Stevenson and the surrounding communities — creates a niche market for estate and rural properties. Limited comparable sales and unique property characteristics make experienced, locally informed guidance especially important here.",
  },
  {
    county: "Wahkiakum County",
    href: "/wahkiakum-county",
    logo: wahkiakumCountyLogo,
    intro: "Wahkiakum County is Washington's smallest county by population — a rural, river-delta community along the Columbia where estate properties often include acreage, agricultural character, and limited market activity. Real Property Planning provides practical, honest guidance for families navigating property decisions in this distinctive area.",
  },
];

const Counties = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Service Areas | Probate Real Estate Across Puget Sound | Real Property Planning"
        description="Probate real estate, inherited home sales, and senior transition guidance across Washington State — serving King, Snohomish, Pierce, Kitsap, Skagit, Whatcom, Clark, Thurston, Spokane, Benton, Cowlitz, Grays Harbor, Island, Jefferson, Lewis, Mason, Pacific, San Juan, Skamania, Wahkiakum, Yakima, Franklin and surrounding counties."
      />
      <BreadcrumbSchema items={[{ name: "Service Areas", url: "/counties" }]} />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <img src={iconServiceAreas} alt="Service areas map illustration" width="240" height="240" className="mx-auto w-full max-w-[15rem] aspect-square h-auto object-contain mb-1.5" loading="lazy"/>
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Service Areas
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Probate &amp; Estate Real Estate Guidance by County
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              Every county in Washington has its own market dynamics, housing stock, and buyer expectations. Estate properties in Seattle's urban neighborhoods sell differently than inherited homes in Spokane's established communities or waterfront parcels on Bainbridge Island. Real Property Planning provides county-specific guidance so executors, trustees, attorneys, and families get pricing and coordination tailored to where the property actually sits.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-5">
              As a licensed broker and state-certified residential appraiser with over 20 years of experience, Real Property Planning evaluates each property based on its real condition and local market context — not generic statewide assumptions. Select a county below to learn more about service in that area.
            </p>
            <p className="text-base text-primary-foreground/60 leading-relaxed">
              Looking for a specific city? <Link to="/cities-we-serve" className="underline hover:text-gold transition-colors">Browse all cities we serve</Link>.
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* County Cards */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-6">
            {countyCards.map((card) => (
              <Link
                key={card.county}
                to={card.href}
                className="card-3d-premium group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
              >
                <div className="card-3d-premium__inner h-full">
                  <div className="card-3d-premium__face flex h-full flex-col px-7 py-7 md:px-8 md:py-8">
                    <div className="flex items-center mb-4" style={{ columnGap: "12px" }}>
                      <span
                        className="shrink-0 inline-flex items-center justify-center rounded-full bg-[#F7F5F0] w-9 h-9 md:w-11 md:h-11 transition-transform duration-300 ease-out group-hover:scale-105"
                        style={{ padding: "4px" }}
                      >
                        <img
                          src={card.logo}
                          alt={`${card.county}, Washington official seal — probate, estate, and senior transition real estate services`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </span>
                      <h2 className="font-serif text-xl text-foreground font-semibold group-hover:text-gold transition-colors">
                        {card.county}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base">{card.intro}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Services Available in Each County
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-3xl">
              Whether the situation involves probate, an inherited home, a trust-owned property, or a senior transition, Real Property Planning provides hands-on guidance through every step:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="card-3d group p-6"
                >
                  <h3 className="font-serif text-lg text-foreground font-medium mb-2 group-hover:text-gold transition-colors">
                    {service.shortName}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-gold transition-colors">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/counties" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Need help with a property in one of these counties?
            </h2>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Counties;
