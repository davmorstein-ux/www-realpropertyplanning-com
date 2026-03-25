import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const kingCountyCities = [
  "Algona", "Auburn", "Beaux Arts Village", "Bellevue", "Black Diamond",
  "Bothell", "Burien", "Carnation", "Clyde Hill", "Covington",
  "Des Moines", "Duvall", "Enumclaw", "Federal Way", "Hunts Point",
  "Issaquah", "Kenmore", "Kent", "Kirkland", "Lake Forest Park",
  "Maple Valley", "Medina", "Mercer Island", "Milton", "Newcastle",
  "Normandy Park", "North Bend", "Pacific", "Redmond", "Renton",
  "Sammamish", "SeaTac", "Seattle", "Shoreline", "Skykomish",
  "Snoqualmie", "Tukwila", "Woodinville", "Yarrow Point",
];

const snohomishCountyCities = [
  "Arlington", "Bothell", "Brier", "Darrington", "Edmonds",
  "Everett", "Gold Bar", "Granite Falls", "Index", "Lake Stevens",
  "Lynnwood", "Marysville", "Mill Creek", "Monroe", "Mountlake Terrace",
  "Mukilteo", "Snohomish", "Stanwood", "Sultan", "Woodway",
];

const pierceCountyCities = [
  "Auburn", "Bonney Lake", "Buckley", "Carbonado", "DuPont",
  "Eatonville", "Edgewood", "Fife", "Fircrest", "Gig Harbor",
  "Lakewood", "Milton", "Orting", "Pacific", "Puyallup",
  "Roy", "Ruston", "South Prairie", "Steilacoom", "Sumner",
  "Tacoma", "University Place", "Wilkeson",
];

const kitsapIncorporated = [
  "Bainbridge Island", "Bremerton", "Port Orchard", "Poulsbo",
];

const kitsapCommunities = [
  "Silverdale", "Kingston", "Suquamish", "Rollingbay",
];

const countyLinks = [
  { title: "King County Probate and Inherited Property Guidance", href: "/counties/king", button: "Explore King County" },
  { title: "Snohomish County Probate and Inherited Property Guidance", href: "/counties/snohomish", button: "Explore Snohomish County" },
  { title: "Pierce County Probate and Inherited Property Guidance", href: "/counties/pierce", button: "Explore Pierce County" },
  { title: "Kitsap County Probate and Inherited Property Guidance", href: "/counties/kitsap", button: "Explore Kitsap County" },
];

const CityGrid = ({ cities }: { cities: string[] }) => (
  <div className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-3">
      {cities.map((city) => (
        <p key={city} className="text-foreground leading-relaxed">{city}</p>
      ))}
    </div>
  </div>
);

const CitiesWeServe = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cities We Serve for Probate and Inherited Property Guidance | David Stein"
        description="David Stein serves cities across King, Snohomish, Pierce, and Kitsap Counties for probate real estate, inherited property, trust-owned homes, and estate-related sales in Western Washington."
      />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Local Cities and Communities
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Cities We Serve Across King, Snohomish, Pierce, and Kitsap Counties
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              David Stein helps clients and referring professionals navigate probate property, inherited homes, trust-owned real estate, and estate-related property transitions across a wide range of local communities in Western Washington. His work combines over 20 years of real estate experience with Washington state certified appraisal expertise to help clients make more informed decisions about value, preparation, timing, and sale strategy.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              Whether a property is located in Seattle, Bellevue, Kirkland, Everett, Tacoma, Gig Harbor, Bremerton, Bainbridge Island, or another local market, David Stein provides experienced guidance grounded in local awareness, valuation perspective, and a practical understanding of important property transitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-4 h-4 mr-2 object-contain shrink-0" />
                  Request a Confidential Consultation
                </Button>
              </Link>
              <Link to="/counties">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Explore County Pages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* King County Cities */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              King County Communities
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              King County Cities Served
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
              King County includes a wide range of urban, suburban, waterfront, and estate-oriented markets. Probate, inherited, and trust-related real estate decisions often vary significantly depending on the city, neighborhood, and property type.
            </p>
            <CityGrid cities={kingCountyCities} />
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-3xl">
              From Seattle and Bellevue to Kirkland, Redmond, Renton, Bothell, Issaquah, and beyond, David Stein helps clients approach estate-related real property decisions with local perspective and valuation-informed guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Snohomish County Cities */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Snohomish County Communities
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              Snohomish County Cities Served
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
              Snohomish County includes coastal, suburban, historic, rural, and growing residential markets where property condition, lot characteristics, buyer expectations, and neighborhood context can meaningfully affect sale strategy.
            </p>
            <CityGrid cities={snohomishCountyCities} />
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-3xl">
              From Everett, Edmonds, Lynnwood, Mukilteo, and Mill Creek to Snohomish, Lake Stevens, Monroe, Marysville, and surrounding communities, David Stein helps clients make better-informed real estate decisions during important property transitions.
            </p>
          </div>
        </div>
      </section>

      {/* Pierce County Cities */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Pierce County Communities
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              Pierce County Cities Served
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
              Pierce County includes waterfront markets, established neighborhoods, smaller towns, suburban communities, and military-influenced areas where local positioning and preparation strategy can have a major effect on value and sale timing.
            </p>
            <CityGrid cities={pierceCountyCities} />
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-3xl">
              From Tacoma and University Place to Puyallup, Gig Harbor, Lakewood, Bonney Lake, Sumner, DuPont, and nearby communities, David Stein helps clients and families navigate estate-related property decisions with clarity and local market awareness.
            </p>
          </div>
        </div>
      </section>

      {/* Kitsap County Cities */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Kitsap County Communities
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              Kitsap County Cities and Search-Relevant Communities Served
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
              Kitsap County has four incorporated cities, but clients and referral sources also commonly search by major unincorporated communities. To support both user clarity and local search visibility, both incorporated cities and major search-relevant communities are included below.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-4">
                  Incorporated Cities
                </h3>
                <CityGrid cities={kitsapIncorporated} />
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-4">
                  Major Search-Relevant Communities
                </h3>
                <CityGrid cities={kitsapCommunities} />
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-6 max-w-3xl">
              Kitsap County includes four incorporated cities, but many real estate searches and property decisions are also centered around major communities such as Silverdale and Kingston. David Stein provides guidance informed by how local market positioning affects inherited, probate, and trust-owned property decisions throughout Kitsap County.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links to County Pages */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              County-Level Guidance
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              Explore County-Specific Guidance
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              For more detailed local guidance, explore each county page for deeper insight into how David Stein helps clients navigate probate, inherited, and trust-owned property decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {countyLinks.map((county) => (
                <div
                  key={county.href}
                  className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9 flex flex-col"
                >
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-5 flex-grow">
                    {county.title}
                  </h3>
                  <Link to={county.href}>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium rounded-lg w-full sm:w-auto"
                    >
                      {county.button}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <DisclaimerSection />

      {/* Final CTA */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-[84px] lg:pb-[104px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <div className="bg-secondary border border-border rounded-[18px] px-7 py-9 md:px-10 md:py-11 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
                Confidential Consultation
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
                Discuss a Local Property Transition With David Stein
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto mb-8">
                If you are handling probate property, inherited real estate, trust-owned property, or an estate-related home sale in King County, Snohomish County, Pierce County, or Kitsap County, David Stein provides experienced guidance grounded in market knowledge, valuation insight, and a practical understanding of important property transitions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-4 h-4 mr-2 object-contain shrink-0" />
                    Request a Confidential Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Discuss a Property Transition
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CitiesWeServe;
