import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const counties = [
  {
    title: "King County Probate and Inherited Property Guidance",
    text: "Real estate guidance for probate property, inherited homes, trust-owned real estate, and estate-related sales throughout King County.",
    button: "Explore King County",
    href: "/counties/king",
  },
  {
    title: "Snohomish County Probate and Inherited Property Guidance",
    text: "Local insight and real estate guidance for inherited property, probate homes, trust-owned real estate, and estate sales throughout Snohomish County.",
    button: "Explore Snohomish County",
    href: "/counties/snohomish",
  },
  {
    title: "Pierce County Probate and Inherited Property Guidance",
    text: "Experienced support for probate property, inherited homes, trust-owned real estate, and estate-related home sales throughout Pierce County.",
    button: "Explore Pierce County",
    href: "/counties/pierce",
  },
  {
    title: "Kitsap County Probate and Inherited Property Guidance",
    text: "Real property guidance for executors, trustees, attorneys, and families handling inherited, probate, and trust-owned homes throughout Kitsap County.",
    button: "Explore Kitsap County",
    href: "/counties/kitsap",
  },
];

const Counties = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Local Service Areas
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Probate Real Estate and Inherited Property Guidance by County
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              David Stein provides probate real estate, inherited property, trust-owned real estate, and estate property guidance throughout key counties in Western Washington. Because local market conditions, pricing patterns, buyer expectations, preparation strategy, and neighborhood dynamics can vary from county to county, county-specific guidance helps clients and referring professionals make more informed real property decisions.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              The pages below are designed for attorneys, executors, trustees, fiduciaries, personal representatives, heirs, and family members who need experienced real estate and valuation guidance related to probate property, inherited homes, trust-owned real estate, and estate-related home sales in King County, Snohomish County, Pierce County, and Kitsap County.
            </p>
          </div>
        </div>
      </section>

      {/* County Cards */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {counties.map((county, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9 flex flex-col"
                >
                  <h2 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {county.title}
                  </h2>
                  <p className="text-muted-foreground leading-[1.75] mb-6 flex-grow">
                    {county.text}
                  </p>
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

            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mt-12">
              Each county page speaks directly to local clients and referral sources while reinforcing David Stein's role as a real estate broker and Washington state certified real estate appraiser focused on important property transitions.
            </p>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default Counties;
