import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import RoadmapDropdown from "@/components/RoadmapDropdown";
import heroImage from "@/assets/panorama-road-scene.webp";

const tiles = [
  {
    title: "Why Planning Early Makes Such a Difference",
    description:
      "Avoid rushed real estate decisions, legal gaps, family conflict, and missed options when time is short.",
    href: "/planning-before-a-crisis/why-planning-early",
  },
  {
    title: "The Conversations Worth Having Now",
    description: "The questions families wish they'd asked sooner — about home, care, authority, and wishes.",
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
    description: "Practical steps when months — not years — separate today from a likely housing transition.",
    href: "/planning-before-a-crisis/when-a-move-is-coming",
  },
  {
    title: "How Real Property Planning Can Help",
    description: "Calm, unhurried guidance coordinated across the professionals who matter most to your situation.",
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
        <section className="bg-white w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Planning before a crisis — thoughtful estate and property planning in Washington State"
            className="w-full block"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            loading="eager"
            sizes="100vw"
            decoding="async"
            width={1920}
            height={487}
          />
        </section>

        <HeroBandTitle as="h1">Planning Before a Crisis</HeroBandTitle>

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

            <p className="max-w-3xl mx-auto text-center text-navy/70 text-base leading-relaxed mb-8">
              Not sure where to start?{" "}
              <Link
                to="/contact"
                className="text-gold font-bold underline underline-offset-2 hover:text-[hsl(var(--gold-dark))]"
              >
                Reach out and we'll help you figure out the right first step.
              </Link>
            </p>

            <RoadmapDropdown topics={tiles} accentColor="#721d24" mode="list" currentPath={tiles[0].href} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlanningBeforeACrisis;
