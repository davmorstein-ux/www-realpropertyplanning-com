import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import { counties } from "@/lib/service-areas-data";

const CityGrid = ({ countyData }: { countyData: typeof counties[0] }) => (
  <div className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-3">
      {countyData.cities.map((city) => (
        <Link
          key={city.slug}
          to={`/cities/${city.slug}`}
          className="text-foreground hover:text-gold transition-colors leading-relaxed"
        >
          {city.name}
        </Link>
      ))}
    </div>
  </div>
);

const countyMeta = [
  {
    slug: "king-county",
    eyebrow: "King County Communities",
    heading: "King County Cities Served",
    intro: "King County includes a wide range of urban, suburban, waterfront, and estate-oriented markets. Probate, inherited, and trust-related real estate decisions often vary significantly depending on the city, neighborhood, and property type.",
    outro: "From Seattle and Bellevue to Kirkland, Redmond, Renton, Bothell, Issaquah, and beyond, David Stein helps clients approach estate-related real property decisions with local perspective and valuation-informed guidance.",
    bg: "bg-secondary",
  },
  {
    slug: "snohomish-county",
    eyebrow: "Snohomish County Communities",
    heading: "Snohomish County Cities Served",
    intro: "Snohomish County includes coastal, suburban, historic, rural, and growing residential markets where property condition, lot characteristics, buyer expectations, and neighborhood context can meaningfully affect sale strategy.",
    outro: "From Everett, Edmonds, Lynnwood, Mukilteo, and Mill Creek to Snohomish, Lake Stevens, Monroe, Marysville, and surrounding communities, David Stein helps clients make better-informed real estate decisions during important property transitions.",
    bg: "bg-background",
  },
  {
    slug: "pierce-county",
    eyebrow: "Pierce County Communities",
    heading: "Pierce County Cities Served",
    intro: "Pierce County includes waterfront markets, established neighborhoods, smaller towns, suburban communities, and military-influenced areas where local positioning and preparation strategy can have a major effect on value and sale timing.",
    outro: "From Tacoma and University Place to Puyallup, Gig Harbor, Lakewood, Bonney Lake, Sumner, DuPont, and nearby communities, David Stein helps clients and families navigate estate-related property decisions with clarity and local market awareness.",
    bg: "bg-secondary",
  },
  {
    slug: "kitsap-county",
    eyebrow: "Kitsap County Communities",
    heading: "Kitsap County Cities & Communities Served",
    intro: "Kitsap County's peninsula geography creates distinct real estate markets shaped by ferry access, military presence, and the appeal of waterfront and rural living. Both incorporated cities and major search-relevant communities are included below.",
    outro: "From Bremerton and Bainbridge Island to Poulsbo, Port Orchard, Silverdale, and Kingston, David Stein provides guidance informed by how local market positioning affects inherited, probate, and trust-owned property decisions throughout Kitsap County.",
    bg: "bg-background",
  },
];

const countyLinks = [
  { title: "King County Probate and Inherited Property Guidance", href: "/king-county", button: "Explore King County" },
  { title: "Snohomish County Probate and Inherited Property Guidance", href: "/snohomish-county", button: "Explore Snohomish County" },
  { title: "Pierce County Probate and Inherited Property Guidance", href: "/pierce-county", button: "Explore Pierce County" },
  { title: "Kitsap County Probate and Inherited Property Guidance", href: "/kitsap-county", button: "Explore Kitsap County" },
];

const CitiesWeServe = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cities We Serve for Probate and Inherited Property Guidance | David Stein"
        description="David Stein serves cities throughout Washington State for probate real estate, inherited property, trust-owned homes, and estate-related sales, with especially strong experience in Western Washington and the Puget Sound region."
      />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Local Cities and Communities
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Cities We Serve Throughout Washington State
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              David Stein helps clients and referring professionals navigate probate property, inherited homes, trust-owned real estate, and estate-related property transitions across a wide range of communities throughout Washington State. His work combines over 20 years of real estate experience with Washington state certified appraisal expertise to help clients make more informed decisions about value, preparation, timing, and sale strategy.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              Click on any city below to explore local guidance and available services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                  Request a Confidential Consultation
                </Button>
              </Link>
              <Link to="/counties">
                <Button size="lg" variant="outline3d" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Explore County Pages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* County City Sections */}
      {countyMeta.map((meta) => {
        const countyData = counties.find((c) => c.slug === meta.slug);
        if (!countyData) return null;
        return (
          <section key={meta.slug} className={`pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] ${meta.bg}`}>
            <div className="container px-6 lg:px-8">
              <div className="max-w-[1140px] mx-auto">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
                  {meta.eyebrow}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
                  {meta.heading}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
                  {meta.intro}
                </p>
                <CityGrid countyData={countyData} />
                <p className="text-muted-foreground leading-relaxed mt-6 max-w-3xl">
                  {meta.outro}
                </p>
              </div>
            </div>
          </section>
        );
      })}

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
                      variant="outline3d"
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
                  <Button variant="navy3d" size="lg">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                    Request a Confidential Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline3d" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Discuss a Property Transition
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default CitiesWeServe;
