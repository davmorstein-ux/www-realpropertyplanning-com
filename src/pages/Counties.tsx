import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const countyData = [
  {
    county: "King County",
    href: "/counties/king",
    cities: [
      "Seattle", "Bellevue", "Kirkland", "Redmond", "Bothell", "Shoreline",
      "Mercer Island", "Kenmore", "Woodinville", "Sammamish", "Issaquah",
      "Renton", "Kent", "Auburn", "Federal Way", "Burien", "Tukwila",
      "SeaTac", "Maple Valley", "Covington", "Newcastle", "Medina",
      "Clyde Hill", "Yarrow Point", "Hunts Point", "Beaux Arts Village",
      "Normandy Park", "Des Moines", "Snoqualmie", "North Bend",
      "Fall City", "Carnation", "Duvall", "Vashon Island",
    ],
  },
  {
    county: "Snohomish County",
    href: "/counties/snohomish",
    cities: [
      "Everett", "Edmonds", "Lynnwood", "Bothell", "Mill Creek",
      "Mukilteo", "Snohomish", "Lake Stevens", "Marysville", "Arlington",
      "Mountlake Terrace", "Brier", "Woodway", "Stanwood", "Monroe",
      "Sultan", "Gold Bar", "Index", "Granite Falls", "Darrington",
      "Tulalip", "Silvana", "Lake Roesiger", "Cathcart",
    ],
  },
  {
    county: "Pierce County",
    href: "/counties/pierce",
    cities: [
      "Tacoma", "Gig Harbor", "University Place", "Puyallup", "Lakewood",
      "Bonney Lake", "Sumner", "Fircrest", "Steilacoom", "DuPont",
      "Orting", "Buckley", "Eatonville", "Graham", "Spanaway",
      "Parkland", "Edgewood", "Milton", "Pacific", "Ruston",
      "Fox Island", "Anderson Island", "Key Peninsula",
    ],
  },
  {
    county: "Kitsap County",
    href: "/counties/kitsap",
    cities: [
      "Bremerton", "Silverdale", "Poulsbo", "Bainbridge Island",
      "Port Orchard", "Kingston", "Suquamish", "Indianola",
      "Seabeck", "Hansville", "Keyport", "Tracyton", "Gorst",
      "Manchester", "Olalla", "Southworth",
    ],
  },
];

const Counties = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Probate Real Estate and Inherited Property Guidance by County | David Stein"
        description="David Stein provides probate real estate, inherited property, and estate sale guidance organized by county across King, Snohomish, Pierce, and Kitsap Counties in Western Washington."
      />
      <BreadcrumbSchema items={[{ name: "Counties", url: "/counties" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Local Service Areas
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Probate Real Estate Guidance by County in Western Washington
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              Real estate markets vary dramatically from county to county — and even neighborhood to neighborhood — across Western Washington. A probate property in Seattle requires a different pricing and preparation strategy than an inherited home in Tacoma, Bremerton, or Everett. David Stein's local knowledge helps clients and professionals make better-informed decisions.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
              As a licensed Washington real estate broker and state certified residential appraiser with over 20 years of experience, David serves attorneys, executors, trustees, and families across all four counties listed below.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold px-7 py-4 h-auto rounded-lg">
                <Phone className="w-4 h-4 mr-2" />
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* County Sections */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto space-y-14 md:space-y-[72px]">
            {countyData.map((county) => (
              <div key={county.county}>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold">
                    {county.county}
                  </h2>
                  <Link to={county.href}>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium rounded-lg w-full sm:w-auto">
                      Explore {county.county}
                    </Button>
                  </Link>
                </div>
                <div className="bg-secondary border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-3">
                    {county.cities.map((city) => (
                      <p key={city} className="text-muted-foreground leading-relaxed">{city}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/counties" />

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-primary-foreground font-semibold mb-4">
              Discuss a Local Property Transition
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              David Stein provides experienced guidance for probate, inherited, and trust property sales across all four counties.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Contact David
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default Counties;
