import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import RoadmapDropdown from "@/components/RoadmapDropdown";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
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

const faqs = [
  {
    question: "When should we actually start planning, if nothing feels urgent yet?",
    answer:
      "As early as possible, while decisions can still be made calmly and with full input from everyone involved. Families rarely regret planning too soon — but often wish they'd started before a health change or emergency forced rushed decisions.",
  },
  {
    question: "What's the difference between a power of attorney and a court-appointed guardianship?",
    answer:
      "A power of attorney is a document a person signs while they still have legal capacity, naming someone to act on their behalf. A guardianship is a court process that only becomes necessary if capacity is lost without one in place — and it's typically slower, more expensive, and less private. Having the right documents ahead of time is usually the better path.",
  },
  {
    question: "Do we need an attorney to put these documents in place?",
    answer:
      "For documents like powers of attorney, healthcare directives, wills, and trusts, working with an estate planning or elder law attorney licensed in Washington State helps ensure everything is valid and reflects your family's actual wishes. Real Property Planning can connect you with attorneys in our professional network.",
  },
  {
    question: "What if family members don't agree on the plan?",
    answer:
      "This is common, and it's part of why planning early helps — there's time for honest conversations rather than decisions made under pressure. Having documented wishes, and involving the right professionals, tends to reduce conflict rather than create it.",
  },
  {
    question: "Should the property be appraised before anything happens?",
    answer:
      "Understanding a home's current value is often a useful part of early planning, particularly for tax and estate purposes. An appraisal from a Washington State certified appraiser provides an independent, defensible figure to plan around.",
  },
  {
    question: "What actually happens if a family waits until a crisis hits?",
    answer:
      "Typically, less time to weigh options, more pressure to make fast decisions, and a higher chance of family disagreement — often while also navigating an emotional health event. Planning ahead doesn't remove the difficulty of these situations, but it gives families more room to think clearly when it matters most.",
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

        <PageFAQ
          faqs={faqs}
          heading="Planning Before a Crisis: Common Questions"
          eyebrow="Frequently Asked Questions"
          id="planning-before-a-crisis"
        />
      </main>
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default PlanningBeforeACrisis;
