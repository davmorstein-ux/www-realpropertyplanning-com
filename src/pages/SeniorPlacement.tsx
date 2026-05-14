import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoldCheckItem from "@/components/GoldCheckItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import housingOptionsHero from "@/assets/housing_options_hero.png";

const housingOptions = [
  {
    title: "Independent Living",
    href: "/senior-living/independent-living",
    body: "For seniors who are largely self-sufficient but want community, convenience, and freedom from home maintenance. No medical care provided on-site.",
  },
  {
    title: "Assisted Living",
    href: "/senior-living/assisted-living",
    body: "For seniors who need help with daily activities such as bathing, dressing, medication, and meals. Staff available around the clock.\n\nHundreds of licensed communities across Washington State.",
  },
  {
    title: "Memory Care",
    href: "/senior-living/memory-care",
    body: "Specialized care for seniors living with Alzheimer's or other forms of dementia. Secure environments, structured routines, and trained staff.",
  },
  {
    title: "Adult Family Homes",
    href: "/senior-living/adult-family-homes",
    body: "A residential home — typically 2 to 6 residents — licensed by Washington State to provide personal care. Often more affordable and intimate than larger facilities. Common throughout King, Snohomish, Pierce, and Kitsap Counties.",
  },
  {
    title: "Skilled Nursing Care",
    href: "/senior-living/skilled-nursing",
    body: "For seniors requiring 24-hour medical care and supervision. Usually short-term after hospitalization, though some seniors transition to long-term care.",
  },
  {
    title: "Aging in Place",
    href: "/senior-living/aging-in-place",
    body: "For seniors who wish to remain in their own home with the support of in-home caregivers, safety modifications, meal delivery, and other services. Often the first step before a larger transition.",
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

        {/* Intro */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
                Understanding Your Options
              </h2>
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                Every senior's situation is different. Use this as a starting point to understand what type of care or housing may be the right fit.
              </p>
            </div>
          </div>
        </section>

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
                    className="card-3d p-6 bg-card flex flex-col hover:-translate-y-1 transition-transform"
                  >
                    <h3 className="font-serif text-xl text-red-800 font-bold mb-3 text-center min-h-14 flex items-start justify-center">
                      {opt.title}
                    </h3>
                    <p className="text-foreground/85 text-base leading-relaxed whitespace-pre-line">
                      {opt.body}
                    </p>
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
