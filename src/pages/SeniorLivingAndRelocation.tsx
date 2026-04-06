import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import iconSeniorLiving from "@/assets/icons/icon-senior-living.png";
import iconAfh3d from "@/assets/icons/icon-afh-3d.png";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const livingOptions = [
  {
    title: "Adult Family Homes",
    description:
      "Smaller, home-like settings that offer personalized care for a limited number of residents. Often a good fit for seniors who prefer a quieter, more intimate environment.",
    path: "/senior-living/adult-family-homes",
  },
  {
    title: "Assisted Living Communities",
    description:
      "Larger communities that offer varying levels of daily support, social activities, and on-site amenities while maintaining independence.",
    path: "/senior-living/assisted-living-communities",
  },
  {
    title: "Memory Care",
    description:
      "Specialized programs designed for individuals living with Alzheimer's or other forms of dementia, with structured routines and secure environments.",
    path: "/senior-living/memory-care",
  },
  {
    title: "Nursing & Skilled Care",
    description:
      "Facilities that provide 24-hour medical support for seniors with more complex health needs or those recovering from hospitalization.",
    path: "/senior-living/nursing-and-skilled-care",
  },
  {
    title: "Independent Living",
    description:
      "Communities designed for active seniors who want a maintenance-free lifestyle with access to social activities and shared amenities.",
    path: "/senior-living/independent-living",
  },
];

const supportItems = [
  {
    title: "Timing Real Estate with Relocation",
    description:
      "Understanding when to list, how to prepare the home, and how to align the sale with the move timeline.",
  },
  {
    title: "Property Preparation & Coordination",
    description:
      "Coordinating cleanout, repairs, and staging with trusted vendors so the home is market-ready without adding stress.",
  },
  {
    title: "Clear, Objective Valuation",
    description:
      "Providing accurate market insight so families can make informed financial decisions about the property.",
  },
  {
    title: "Working with Your Team",
    description:
      "Collaborating with senior move managers, care advisors, attorneys, and family members to keep everyone aligned.",
  },
  {
    title: "Calm, Steady Communication",
    description:
      "Providing regular updates and a patient, structured approach during what is often an emotional process.",
  },
];

const SeniorLivingAndRelocation = () => {
  return (
    <>
      <SEOHead
        title="Senior Living & Relocation | Real Property Planning"
        description="Helping families navigate housing transitions — from understanding senior living options to coordinating the sale of a family home."
        canonical="https://www.realpropertyplanning.com/senior-living-and-relocation"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.realpropertyplanning.com" },
          { name: "Senior Living & Relocation", url: "https://www.realpropertyplanning.com/senior-living-and-relocation" },
        ]}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-secondary py-14 md:py-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <img
                  src={iconSeniorLiving}
                  alt="Senior Living & Relocation"
                  className="h-36 w-36 object-contain"
                />
              </div>
              <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
                Transition Support
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-tight mb-4">
                Senior Living & Relocation
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                When a senior is moving out of their home, families face important decisions about where to go next — and what to do with the property they're leaving behind. I help families navigate both sides of that transition with clarity and care.
              </p>
            </div>
          </div>
        </section>

        {/* Understanding Options */}
        <section className="py-14 md:py-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-4">
                Understanding Senior Living Options
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
                Every family's situation is different. Understanding the range of options available is an important first step in planning a thoughtful transition.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
                {livingOptions.map((option) => {
                  const forcedLabelLines =
                    option.title === "Adult Family Homes"
                      ? ["Adult Family", "Homes"]
                      : option.title === "Assisted Living Communities"
                        ? ["Assisted Living", "Communities"]
                        : option.title === "Nursing & Skilled Care"
                          ? ["Nursing &", "Skilled Care"]
                          : option.title === "Independent Living"
                            ? ["Independent", "Living"]
                            : null;

                  return (
                    <Link
                      key={option.title}
                      to={option.path}
                      className="card-3d-blue group block no-underline w-[170px] h-[200px] sm:w-[180px] sm:h-[210px]"
                    >
                      <div className="card-3d-blue__inner h-full">
                        <div className="card-3d-blue__face h-full px-3 pt-3 pb-2 flex flex-col items-center">
                          {option.title === "Adult Family Homes" ? (
                            <img src={iconAfh3d} alt="Adult Family Homes" className="h-[105px] max-w-[150px] shrink-0 object-contain mt-1" />
                          ) : (
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-b from-[hsl(205_80%_92%)] to-[hsl(205_60%_85%)] border border-[hsl(205_70%_75%/0.5)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_2px_4px_rgba(0,0,0,0.08)] mt-3" />
                          )}
                          {forcedLabelLines ? (
                            <div className="relative w-full flex-1 mt-3 px-1">
                              <div className="absolute inset-x-0 bottom-[12px] translate-y-[6px] flex flex-col items-center justify-center">
                                <h3 className="m-0 font-serif text-[19px] sm:text-[14px] font-bold text-foreground group-hover:text-accent transition-colors text-center">
                                  <span className="block leading-[1.02]">{forcedLabelLines[0]}</span>
                                  <span className="-mt-0.5 block leading-[1.02]">{forcedLabelLines[1]}</span>
                                </h3>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-end w-full flex-1 mt-3 px-1">
                              <h3
                                className="font-serif text-[19px] sm:text-[14px] font-bold text-foreground group-hover:text-accent transition-colors text-center"
                                style={{ lineHeight: '1.15' }}
                              >
                                {option.title}
                              </h3>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How I Help */}
        <section className="py-14 md:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-4">
                How Real Estate Connects to Relocation
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
                The decision to move often raises questions about the family home. When should it be sold? How should it be prepared? How does the timing align with the move? I help families answer these questions.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                {supportItems.map((item) => (
                  <div
                    key={item.title}
                    className="card-3d px-6 py-6"
                  >
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section className="py-14 md:py-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                A Guide, Not a Placement Agency
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                My role is not to recommend specific communities or make placement decisions. Instead, I help families understand how real estate timing and strategy connect to the larger transition — and I work alongside the professionals who specialize in senior placement and care coordination.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Together, we can help ensure that housing decisions — both the home being left and the home being chosen — are handled thoughtfully and with the family's best interests in mind.
              </p>
            </div>
          </div>
        </section>

        <CTASection />
        <RelatedServices currentPath="/senior-living-and-relocation" />
        <DisclaimerSection />
      </main>

      <Footer />
    </>
  );
};

export default SeniorLivingAndRelocation;
