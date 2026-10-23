import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import SimpleHubChoices from "@/components/SimpleHubChoices";
import { PLAN_HUB_CHOICES, PLAN_NOT_SURE } from "@/lib/plan-ahead-simple";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import JourneyShortcuts from "@/components/JourneyShortcuts";

const faqs = [
  {
    question: "When should we actually start planning, if nothing feels urgent yet?",
    answer:
      "As early as possible, while decisions can still be made calmly and with full input from everyone involved. Families rarely regret planning too soon — but often wish they'd started before a health change or emergency forced rushed decisions.",
  },
  {
    question: "What's the difference between a power of attorney and a court-appointed guardianship?",
    answer:
      "A power of attorney is a document a person signs while they still have legal capacity, naming someone to act on their behalf. A guardianship or conservatorship is a court process that usually becomes necessary only if capacity is lost without one in place — and it's typically slower, more expensive, and less private. Having the right documents ahead of time is usually the better path.",
  },
  {
    question: "Do we need an attorney to put these documents in place?",
    answer:
      "For documents like powers of attorney, healthcare directives, wills, and trusts, working with an estate planning or elder law attorney licensed in Washington State helps ensure everything is valid and reflects your family's actual wishes. Real Property Planning does not refer anyone to attorneys; you can confirm any lawyer's license with the Washington State Bar Association (wsba.org).",
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
    /* Moved here Oct 20, 2026 from the retired /what-should-we-do-first page
       (three of its FAQs, same wording), so question PA-053 in the question
       library still restates a live page. */
    question: "How do we avoid costly mistakes with the house?",
    answer:
      "The most expensive mistakes come from acting before authority is confirmed, guessing at value, or making large repairs without input. Slow down and assemble the right team first — usually an attorney, a real estate professional, and often a CPA; senior situations may add a housing advisor and move manager. Families typically choose to sell, keep, rent, or transfer the home. The right answer depends on care costs, family goals, taxes, and timing.",
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
      <main id="main-content" className="apf">
        {/* PanoramaHero was removed here. This page was the last one in the
            codebase still rendering it — every other page dropped its hero in
            the sweep that left only the homepage with one, and this file was
            missed. The import went with it; PanoramaHero.tsx is now unused by
            any page. */}
        {/* Standard full-size band — matches every non-attorney page.
            Do not add `compact` here. It was added briefly and made this the
            only slim band outside the attorney family, which read as a
            mismatch against Featured Professionals and the rest of the site. */}
        <HeroBandTitle as="h1">Planning Before a Crisis</HeroBandTitle>

        {/* Simplified hub (Oct 23, 2026, same pattern as Helping an Aging
            Parent and Handling an Estate): six photo buttons, then one
            full-width "Not sure where to start?" bar. Labels and images:
            src/lib/plan-ahead-simple.ts. Replaced the "Six things worth
            thinking through" heading and the RoadmapDropdown list. */}
        <section className="py-10 md:py-14 bg-cream">
          <div className="container px-5 md:px-8">
            <p className="apf-ask">Where would you like to start?</p>
            <SimpleHubChoices choices={PLAN_HUB_CHOICES} notSure={PLAN_NOT_SURE} />
            <JourneyShortcuts lead="Looking for a quick answer?" questions="plan-ahead" style={{ margin: "32px auto 0" }} />
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
