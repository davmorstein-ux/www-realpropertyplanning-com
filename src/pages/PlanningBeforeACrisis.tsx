import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/planning-before-a-crisis-hero-washington.webp";

const tiles = [
  {
    title: "Why Planning Early Makes Such a Difference",
    description:
      "Avoid rushed real estate decisions, legal gaps, family conflict, and missed options when time is short.",
    href: "/planning-before-a-crisis/why-planning-early",
  },
  {
    title: "The Conversations Worth Having Now",
    description:
      "The questions families wish they'd asked sooner — about home, care, authority, and wishes.",
    href: "/planning-before-a-crisis/conversations-to-have",
  },
  {
    title: "The Legal Documents That Matter Most",
    description:
      "Powers of attorney, healthcare directives, wills, trusts, and beneficiary designations explained simply.",
    href: "/planning-before-a-crisis/legal-documents",
  },
  {
    title: "The Property Questions to Think Through",
    description:
      "Valuation, condition, co-ownership, and tax considerations to weigh well before any decision is made.",
    href: "/planning-before-a-crisis/property-questions",
  },
  {
    title: "When a Move Seems Like It's Coming",
    description:
      "Practical steps when months — not years — separate today from a likely housing transition.",
    href: "/planning-before-a-crisis/when-a-move-is-coming",
  },
  {
    title: "How Real Property Planning Can Help",
    description:
      "Calm, unhurried guidance coordinated across the professionals who matter most to your situation.",
    href: "/planning-before-a-crisis/how-we-can-help",
  },
];

const PlanningBeforeACrisis = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Planning Before a Crisis | Real Property Planning"
        description="Most families wait until a health emergency or a loved one's passing to sort out housing and property. Learn what you can do now — while there's still time to plan calmly."
        canonical="https://realpropertyplanning.com/planning-before-a-crisis"
      />
      <BreadcrumbSchema items={[{ name: "Planning Before a Crisis", url: "/planning-before-a-crisis" }]} />
      <Header />
      <main id="main-content">
        {/* HERO IMAGE — standardized height */}
        <section className="bg-white">
          <img
            src={heroImage}
            alt="Planning before a crisis — thoughtful estate and property planning in Washington State"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
            loading="eager"
          />
        </section>

        <HeroBandTitle>Planning Before a Crisis</HeroBandTitle>

        {/* THINGS TO CONSIDER */}
        <section className="py-14 md:py-20 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
              <p className="text-gold font-bold tracking-[0.25em] uppercase text-sm md:text-[15px] mb-4">
                Things to Consider
              </p>
              <h2 className="font-serif text-[28px] md:text-[40px] lg:text-[44px] font-semibold text-navy leading-tight">
                Six things worth thinking through — before you have to
              </h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
              {tiles.map((t) => (
                <Link
                  key={t.title}
                  to={t.href}
                  className="interior-tile tile-white block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  aria-label={t.title}
                >
                  <div className="tile-white__inner h-full relative">
                    <div className="tile-white__face h-full">
                      <div className="flex h-full flex-col items-center text-center" style={{ padding: "28px 22px" }}>
                        <h3 className="font-serif text-[22px] md:text-[24px] font-semibold text-navy leading-snug mb-3">
                          {t.title}
                        </h3>
                        <p className="text-foreground text-[15px] leading-relaxed">
                          {t.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlanningBeforeACrisis;
