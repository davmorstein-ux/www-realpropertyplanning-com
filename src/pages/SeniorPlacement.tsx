import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoldCheckItem from "@/components/GoldCheckItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import abbyPhoto from "@/assets/abby-durr-silver-age-senior-living-advisor.webp";
import housingOptionsHero from "@/assets/housing_options_hero.webp";

const housingOptions = [
  {
    title: "Independent Living",
    href: "/senior-living/independent-living",
    image: "/tiles/set3/senior-living-options.webp",
    alt: "Independent living communities Washington State",
    body: "Community living for active, self-sufficient seniors who want convenience and connection without home upkeep.",
  },
  {
    title: "Assisted Living",
    href: "/senior-living/assisted-living",
    image: "/tiles/set1/senior-living-advisors.webp",
    alt: "Assisted living communities Washington State",
    body: "For seniors who need daily support with meals, medication, and personal care.",
  },
  {
    title: "Memory Care",
    href: "/senior-living/memory-care",
    image: "/tiles/set3/medicare-providers.webp",
    alt: "Memory care for Alzheimer's and dementia Washington State",
    body: "Specialized care for seniors living with Alzheimer's, dementia, or cognitive decline.",
  },
  {
    title: "Adult Family Homes",
    href: "/senior-living/adult-family-homes",
    image: "/tiles/set3/senior-home-sales.webp",
    alt: "Adult family homes Washington State",
    body: "Small, licensed residential homes offering personalized care in an intimate setting.",
  },
  {
    title: "Skilled Nursing Care",
    href: "/senior-living/skilled-nursing",
    image: "/tiles/set3/paying-for-senior-living.webp",
    alt: "Skilled nursing care Washington State",
    body: "24-hour medical care and supervision, typically following a hospitalization.",
  },
  {
    title: "Aging in Place",
    href: "/senior-living/aging-in-place",
    image: "/tiles/set1/senior-move-managers.webp",
    alt: "Aging in place with in-home care Washington State",
    body: "Remaining at home with the support of in-home caregivers and home-based services.",
  },
];

const signs = [
  "Frequent falls or balance problems at home",
  "Difficulty managing medications safely",
  "Declining hygiene or nutrition",
  "Isolation and withdrawal from social activity",
  "Unsafe driving or getting lost in familiar places",
  "Caregiver burnout among family members",
  "The home becoming unmanageable — stairs, maintenance, yard work",
];

const team = [
  {
    role: "Senior Placement Advisor",
    body: "Assesses needs, tours communities, and recommends the right housing match. Real Property Planning maintains referral relationships with trusted placement advisors throughout the Puget Sound region.",
  },
  {
    role: "Real Estate Broker & Appraiser",
    body: "Evaluates the home, coordinates preparation, prices it accurately, and manages the sale. Real Property Planning brings both credentials — rare in this field.",
  },
  {
    role: "Senior Move Manager",
    body: "Helps the senior sort, pack, donate, and move belongings with patience and sensitivity. Real Property Planning works with HB Move Management, a division of Hansen Bros. Moving & Storage.",
  },
  {
    role: "Elder Law Attorney",
    body: "Advises on Medicaid planning, powers of attorney, trusts, and the legal structure of the transition.",
  },
  {
    role: "Financial Planner or CPA",
    body: "Plans how home sale proceeds will fund care costs and advises on tax implications.",
  },
];

const SeniorPlacement = () => {
  return (
    <>
      <SEOHead
        title="Senior Placement in Washington State | Real Property Planning"
        description="Real Property Planning helps Washington State families navigate senior placement and the sale of the family home. Licensed Broker & Certified Appraiser serving King, Snohomish, Pierce & Kitsap Counties."
        canonical="https://realpropertyplanning.com/senior-placement"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com/" },
          { name: "Services", url: "https://realpropertyplanning.com/services" },
          { name: "Senior Placement", url: "https://realpropertyplanning.com/senior-placement" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero stack */}
        <section className="pt-0 pb-0 bg-transparent">
          <div style={{ lineHeight: 0 }}>
            <img
              src={housingOptionsHero}
              alt="Senior placement and housing options in Washington State"
              className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
              loading="eager"
            />
            <HeroBandTitle>Senior Placement &amp; Housing Options</HeroBandTitle>
          </div>
        </section>

        <AbbyDurrCard />

        {/* Housing Options */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10 text-center">
                Housing Options Explained
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {housingOptions.map((opt) => (
                  <Link
                    key={opt.title}
                    to={opt.href}
                    aria-label={`${opt.title} — ${opt.body} — Learn More`}
                    className="interior-tile tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  >
                    <div className="tile-white__inner h-full relative">
                      <div className="tile-white__face h-full">
                        <div className="flex h-full flex-col">
                          <div className="relative flex flex-1 flex-col items-center text-center overflow-hidden" style={{ padding: "24px" }}>
                            <h3 className="font-serif text-[22px] md:text-[24px] font-semibold text-navy leading-snug mb-3 flex items-start justify-center transition-opacity duration-200 group-hover:opacity-0">
                              {opt.title}
                            </h3>
                            <p className="text-foreground text-[14px] leading-relaxed mb-6 flex items-start justify-center transition-opacity duration-200 group-hover:opacity-0">
                              {opt.body}
                            </p>
                            <span className="gold-cta mt-auto transition-opacity duration-200 group-hover:opacity-0">
                              Learn More
                              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <polyline points="9 18 15 12 9 6" />
                              </svg>
                            </span>
                            <div
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                              style={{
                                background: "rgba(10, 20, 46, 0.97)",
                                zIndex: 10,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                padding: "1.25rem 1.5rem",
                                transition: "opacity 0.28s ease 0.1s",
                              }}
                            >
                              <h3 className="font-serif text-white text-[24px] md:text-[26px] font-bold leading-snug mb-3">
                                {opt.title}
                              </h3>
                              <span
                                className="inline-flex items-center gap-2 text-[16px] font-bold tracking-wide"
                                style={{ color: "#C9A84C", fontFamily: "'DM Sans', sans-serif" }}
                              >
                                Learn More
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Signs */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-8">
                Signs It May Be Time to Make a Move
              </h2>
              <ul className="space-y-4">
                {signs.map((sign) => (
                  <GoldCheckItem key={sign}>{sign}</GoldCheckItem>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Who Is Involved */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-8">
                Who Is Involved in a Senior Placement
              </h2>
              <ul className="space-y-6">
                {team.map((member) => (
                  <li key={member.role} className="border-l-4 border-gold pl-5">
                    <p className="text-foreground text-base md:text-lg leading-relaxed">
                      <span className="font-bold text-foreground">{member.role}</span>
                      <span className="text-foreground/85"> — {member.body}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Link to="/contact">
                <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold">
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <DisclaimerSection />
      <Footer />
    </>
  );
};

export default SeniorPlacement;
