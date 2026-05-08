import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, ShieldAlert, LifeBuoy } from "lucide-react";
import { articleSchema } from "@/lib/schema";

import iconHome from "@/assets/icons/probate-property-home-icon-washington.webp";
import iconDocument from "@/assets/icons/probate-document-icon-washington.webp";
import iconExecutor from "@/assets/icons/probate-executors-services-icon-washington.webp";
import iconTrustees from "@/assets/icons/estate-trustees-services-icon-washington.webp";
import iconAppraisal from "@/assets/icons/property-appraisal-valuation-icon-washington.webp";
import iconAppraiser from "@/assets/icons/real-estate-appraiser-icon-washington.webp";
import iconHandshake from "@/assets/icons/real-estate-agent-handshake-icon-washington.webp";
import iconBriefcase from "@/assets/icons/real-estate-agent-briefcase-icon-washington.webp";
import iconBookOpen from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";
import iconPhone from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconLiquidation from "@/assets/icons/estate-liquidation-services-icon-washington.webp";
import iconCpas from "@/assets/icons/estate-cpas-financial-icon-washington.webp";
import iconAttorney from "@/assets/icons/probate-attorney-services-icon-washington.webp";
import iconMovers from "@/assets/icons/senior-movers-relocation-icon-washington.webp";
import iconChecklist from "@/assets/icons/executors-clipboard-checklist-icon-washington.webp";
import iconArrow from "@/assets/icons/property-guidance-arrow-icon-washington.webp";
import JourneyOrientation from "@/components/JourneyOrientation";

interface Stage {
  letter: string;
  title: string;
  description: string;
  items: { label: string; href: string; icon: string }[];
}

const stages: Stage[] = [
  {
    letter: "A",
    title: "First Steps After a Death",
    description:
      "Calm, practical actions to take in the early days — before any major decisions need to be made.",
    items: [
      { label: "Secure the Property", href: "/guides/executor-first-steps-house", icon: iconHome },
      { label: "Locate Important Documents", href: "/guides/what-executors-should-do", icon: iconDocument },
      { label: "Identify Decision-Makers", href: "/guides/who-has-authority-sell-probate-property", icon: iconChecklist },
      { label: "Immediate Responsibilities", href: "/executors", icon: iconExecutor },
    ],
  },
  {
    letter: "B",
    title: "Understanding Probate, Executors & Trustees",
    description:
      "Learn the roles, the process, and when legal guidance is most helpful.",
    items: [
      { label: "What Probate Means", href: "/guides/how-probate-real-estate-works", icon: iconBookOpen },
      { label: "Executor Responsibilities", href: "/executors", icon: iconExecutor },
      { label: "Trustee Responsibilities", href: "/trustees", icon: iconTrustees },
      { label: "When Legal Guidance Helps", href: "/for-probate-attorneys", icon: iconAttorney },
    ],
  },
  {
    letter: "C",
    title: "Understanding the Property's Value",
    description:
      "Estate property valuation has unique requirements. Learn what's expected and why it matters.",
    items: [
      { label: "Appraisal vs. CMA", href: "/guides/appraisal-vs-cma", icon: iconAppraisal },
      { label: "Date-of-Death Valuation", href: "/real-estate-appraiser", icon: iconAppraiser },
      { label: "As-Is Condition Pricing", href: "/guides/pricing-house-trust-estate", icon: iconHome },
      { label: "Fair Market Value & Family", href: "/why-valuation-matters", icon: iconAppraisal },
    ],
  },
  {
    letter: "D",
    title: "Deciding What to Do With the Property",
    description:
      "Sell, keep, rent, or transfer — there is no single right answer. Compare options carefully.",
    items: [
      { label: "Sell the Property", href: "/probate-estate-sales", icon: iconHome },
      { label: "Keep or Rent It Out", href: "/guides/sell-inherited-house-as-is-or-fix", icon: iconBriefcase },
      { label: "Inherited Home Decisions", href: "/guides/inherited-house-washington", icon: iconBookOpen },
      { label: "Coordinating With Heirs", href: "/guides/heirs-disagree-selling-house", icon: iconHandshake },
    ],
  },
  {
    letter: "E",
    title: "Preparing the Property",
    description:
      "From cleanout to repairs to occupancy concerns — what to handle before the home goes to market.",
    items: [
      { label: "Cleanout & Estate Liquidation", href: "/estate-liquidation", icon: iconLiquidation },
      { label: "Repairs & Improvements", href: "/guides/repairs-before-selling-probate-home-washington", icon: iconHome },
      { label: "Property Preparation Services", href: "/resources/property-preparation-services", icon: iconMovers },
      { label: "Safety, Access & Occupancy", href: "/guides/estate-property-repairs", icon: iconChecklist },
    ],
  },
  {
    letter: "F",
    title: "Building the Right Professional Team",
    description:
      "A coordinated team protects the estate, the heirs, and the property's value.",
    items: [
      { label: "Probate Attorney", href: "/for-probate-attorneys", icon: iconAttorney },
      { label: "CPA or Tax Professional", href: "/for-cpas", icon: iconCpas },
      { label: "Real Estate Broker", href: "/realtor", icon: iconHandshake },
      { label: "Real Estate Appraiser", href: "/real-estate-appraiser", icon: iconAppraiser },
      { label: "Estate Liquidator", href: "/professionals/estate-sale", icon: iconLiquidation },
      { label: "Senior Move Manager", href: "/resources/senior-move-managers", icon: iconMovers },
    ],
  },
];

const faqs = [
  {
    question: "Do we need probate before selling the home?",
    answer:
      "It depends on how the property was titled and what estate documents exist. Some homes can transfer without probate; others require court authority before a sale can close. Families often speak with a probate attorney early to confirm what process applies.",
  },
  {
    question: "Who has legal authority to make decisions about the property?",
    answer:
      "Authority typically rests with the named personal representative (executor), the trustee, or — when no one is named — a court-appointed administrator. Until that authority is confirmed in writing, no one should sign listing agreements or contracts on the home's behalf.",
  },
  {
    question: "Should we get an appraisal before listing the property?",
    answer:
      "In most estate situations, yes. A formal appraisal supports tax reporting, family transparency, and a defensible listing price. It's especially important when heirs live in different states or when one heir wants to buy out the others.",
  },
  {
    question: "What is a date-of-death valuation?",
    answer:
      "It's a written valuation of the property as of the date the owner passed away. It establishes the new cost basis for tax purposes and is often required by attorneys and CPAs working on the estate.",
  },
  {
    question: "What if siblings disagree about selling?",
    answer:
      "Disagreements are common and rarely about the house itself. A neutral appraisal, clear written information, and a calm professional advisor can help families find common ground before legal action becomes necessary.",
  },
  {
    question: "Should the home be cleaned out before valuation?",
    answer:
      "Not necessarily. An experienced appraiser or broker can evaluate the home in its current state. Sometimes it's better to keep contents in place until family members have had time to identify what they want.",
  },
  {
    question: "Are repairs worth doing before selling?",
    answer:
      "Sometimes. Targeted repairs can meaningfully improve sale price; others rarely return their cost. A broker familiar with estate sales can help you prioritize what's worth doing — and what isn't.",
  },
  {
    question: "What happens if someone is living in the property?",
    answer:
      "Occupancy adds complexity and should be addressed early. Whether the resident is a family member, tenant, or caregiver, families often work with both an attorney and a real estate professional to handle the situation respectfully and lawfully.",
  },
  {
    question: "What professionals should be contacted first?",
    answer:
      "Most families benefit from speaking first with a probate attorney and a real estate professional experienced in estate matters. From there, a CPA, appraiser, and estate liquidator are commonly added as needed.",
  },
  {
    question: "How do we avoid making costly mistakes?",
    answer:
      "The most common mistakes come from acting before authority is confirmed, guessing at value, or making large repair decisions without input. Slowing down and assembling a small, coordinated team almost always pays for itself.",
  },
];

const mistakes = [
  {
    title: "Selling Before Understanding Authority",
    description: "Listing or signing contracts before the right person has legal authority can void the sale.",
  },
  {
    title: "Guessing the Property Value",
    description: "An informal opinion is not a valuation. Estates need defensible numbers in writing.",
  },
  {
    title: "Letting Family Conflict Delay Decisions",
    description: "Time costs money — in carrying costs, repairs, and missed market windows.",
  },
  {
    title: "Making Expensive Repairs Without Guidance",
    description: "Many improvements don't return their cost in an estate sale. Get input first.",
  },
  {
    title: "Ignoring Tax or Date-of-Death Valuation",
    description: "Skipping a date-of-death valuation can create avoidable tax exposure for heirs.",
  },
  {
    title: "Failing to Secure or Insure the Property",
    description: "Vacant homes have unique insurance, security, and liability considerations.",
  },
  {
    title: "Waiting Too Long to Build a Team",
    description: "The right professionals — assembled early — prevent most of the costly mistakes above.",
  },
];

const resources = [
  { href: "/guides/how-probate-real-estate-works", title: "Probate Real Estate Guidance", description: "How probate sales work in Washington — from authority to closing." },
  { href: "/executors", title: "Executor Resources", description: "Roadmap and responsibilities for personal representatives." },
  { href: "/trustees", title: "Trustee Resources", description: "Fiduciary support when a trust holds real property." },
  { href: "/guides/inherited-house-washington", title: "Inherited Home Decisions", description: "Options and decision factors when you inherit property." },
  { href: "/real-estate-appraiser", title: "Real Estate Appraisal", description: "Date-of-death and current-market valuations explained." },
  { href: "/estate-liquidation", title: "Estate Cleanout & Liquidation", description: "How to clear and prepare an estate property respectfully." },
  { href: "/for-estate-planning-attorneys", title: "Estate Planning Attorneys", description: "When to involve estate planning counsel." },
  { href: "/for-cpas", title: "CPAs & Tax Professionals", description: "Tax reporting, basis, and capital gains for estates." },
];

const continueJourney = [
  { href: "/executor-responsibilities-first-steps", title: "Executor Responsibilities & First Steps", description: "A first-step roadmap for executors and personal representatives.", icon: iconExecutor },
  { href: "/selling-an-inherited-home", title: "Selling an Inherited Home", description: "How estate sales differ from ordinary listings.", icon: iconHome },
  { href: "/date-of-death-valuation-property-appraisals", title: "Date-of-Death Valuation", description: "Why and how estate properties are appraised.", icon: iconAppraiser },
  { href: "/what-to-do-with-the-house", title: "What To Do With the House", description: "A guided decision roadmap for the home.", icon: iconBriefcase },
  { href: "/building-your-trusted-professional-team", title: "Building Your Trusted Professional Team", description: "Meet the coordinated network of estate professionals.", icon: iconHandshake },
];

const nextSteps = [
  "Confirm who has authority to make decisions",
  "Understand whether probate or legal guidance is needed",
  "Learn the property's value and condition",
  "Decide whether to keep, sell, rent, or transfer the property",
  "Build the right professional team before making major decisions",
];

const jsonLd = articleSchema({
  headline: "Managing an Estate, Probate, or Inherited Property",
  description:
    "A guided roadmap for executors, trustees, heirs, and families navigating estate settlement, probate, inherited homes, valuation, and property decisions in Washington State.",
  url: "/estate-probate-inherited-property",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Probate", "Estate administration", "Inherited property", "Executors", "Trustees"],
});

const EstateProbateInheritedProperty = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Managing an Estate, Probate, or Inherited Property | Real Property Planning"
        description="A guided roadmap for executors, trustees, heirs, and families navigating estate settlement, probate questions, inherited homes, and property decisions in Washington State."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema
        items={[{ name: "Managing an Estate, Probate, or Inherited Property", url: "/estate-probate-inherited-property" }]}
      />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="bg-primary pt-12 pb-10 lg:pt-20 lg:pb-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-4 text-sm">
                Estate Journey Hub
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-primary-foreground font-semibold leading-tight mb-6">
                Managing an Estate, Probate, or Inherited Property
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-8 max-w-2xl">
                A guided roadmap for executors, trustees, heirs, and families navigating
                estate settlement, probate questions, inherited homes, property value,
                and next-step decisions.
              </p>
              <a href="#roadmap">
                <Button variant="gold" size="lg" className="px-8 h-[56px] text-base rounded-lg">
                  <Compass className="w-5 h-5 mr-2" aria-hidden="true" />
                  Start Here
                </Button>
              </a>
            </div>
          </div>
        </section>

        <JourneyOrientation
          items={[
            "A loved one recently passed away",
            "You inherited a home or property",
            "You were named executor or trustee",
            "Your family is unsure what steps come next",
            "You want to avoid costly mistakes",
            "You are coordinating decisions from out of state"
          ]}
        />

        {/* REASSURANCE */}
        <section className="py-10 lg:py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <LifeBuoy className="w-10 h-10 text-gold mx-auto mb-6" aria-hidden="true" />
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-5">
                You Do Not Have to Know Everything Yet
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed">
                Many families arrive here unsure what to do first. You may be dealing
                with grief, legal paperwork, family questions, property concerns, or
                uncertainty about whether a home should be kept, sold, rented, or
                prepared for sale. This guide is designed to help you understand the
                process one step at a time.
              </p>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="py-10 lg:py-14 bg-secondary scroll-mt-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-8 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                Guided Roadmap
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-4">
                Where Are You in the Estate Process?
              </h2>
              <p className="text-navy/85 text-lg leading-relaxed max-w-2xl mx-auto">
                Choose any stage. Each checkpoint includes the resources, options, and
                people who can help you move forward.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {stages.map((stage) => (
                <article
                  key={stage.letter}
                  className="bg-white border-2 border-gold/25 rounded-2xl shadow-[0_8px_24px_-12px_rgba(27,43,75,0.18)] overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 bg-gradient-to-br from-navy to-[hsl(var(--navy-dark))] text-cream p-6 md:p-8 flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                      <span className="font-serif text-5xl md:text-6xl text-gold font-bold leading-none">
                        {stage.letter}
                      </span>
                      <span className="text-cream/85 uppercase tracking-widest text-xs font-bold">
                        Stage {stage.letter}
                      </span>
                    </div>
                    <div className="flex-1 p-6 md:p-8">
                      <h3 className="font-serif text-2xl md:text-[1.6rem] text-navy font-semibold mb-3">
                        {stage.title}
                      </h3>
                      <p className="text-navy/85 text-base md:text-lg leading-relaxed mb-6">
                        {stage.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {stage.items.map((item) => (
                          <Link
                            key={item.href + item.label}
                            to={item.href}
                            className="group flex items-center gap-3 bg-cream hover:bg-white border border-gold/20 hover:border-gold/50 rounded-xl px-4 py-3 min-h-[60px] transition-all hover:-translate-y-0.5 hover:shadow-md"
                          >
                            <img
                              src={item.icon}
                              alt=""
                              aria-hidden="true"
                              className="w-9 h-9 object-contain shrink-0"
                              loading="lazy"
                            />
                            <span className="font-semibold text-navy text-base flex-1 group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                              {item.label}
                            </span>
                            <ArrowRight className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PageFAQ
          faqs={faqs}
          heading="Questions Families Often Do Not Know to Ask"
          eyebrow="Estate FAQs"
          id="estate-probate-inherited"
        />

        {/* COMMON MISTAKES */}
        <section className="py-10 lg:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <ShieldAlert className="w-10 h-10 text-gold mx-auto mb-4" aria-hidden="true" />
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Avoid These
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold">
                  Common Estate Property Mistakes to Avoid
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {mistakes.map((m) => (
                  <article
                    key={m.title}
                    className="bg-white border-2 border-gold/25 rounded-2xl p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)]"
                  >
                    <h3 className="font-serif text-lg md:text-xl text-navy font-semibold mb-2">
                      {m.title}
                    </h3>
                    <p className="text-navy text-base leading-relaxed">{m.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HELPFUL RESOURCES */}
        <section className="py-10 lg:py-14 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Education
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold">
                  Helpful Resources
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {resources.map((r) => (
                  <Link
                    key={r.href}
                    to={r.href}
                    className="group bg-white border-2 border-gold/20 rounded-2xl p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)] hover:border-gold/50 hover:-translate-y-1 hover:shadow-[0_12px_28px_-12px_rgba(27,43,75,0.28)] transition-all"
                  >
                    <h3 className="font-serif text-xl text-navy font-semibold mb-2 group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-navy text-base leading-relaxed mb-3">
                      {r.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold font-bold text-sm">
                      Read more <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTINUE YOUR JOURNEY */}
        <section className="py-10 lg:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <img src={iconArrow} alt="" aria-hidden="true" className="w-12 h-12 object-contain mx-auto mb-4" loading="lazy" />
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Keep Going
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Continue Your Journey
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  People managing estate property often need help understanding what comes next.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {continueJourney.map((c) => (
                  <Link
                    key={c.href}
                    to={c.href}
                    className="group bg-white border-2 border-gold/25 rounded-2xl p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)] hover:border-gold/50 hover:-translate-y-1 hover:shadow-[0_12px_28px_-12px_rgba(27,43,75,0.28)] transition-all flex flex-col"
                  >
                    <img src={c.icon} alt="" aria-hidden="true" className="w-12 h-12 object-contain mb-4" loading="lazy" />
                    <h3 className="font-serif text-xl text-navy font-semibold mb-2 group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-navy text-base leading-relaxed mb-4 flex-1">
                      {c.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold font-bold text-sm">
                      Continue <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SIMPLE NEXT STEPS */}
        <section className="py-10 lg:py-14 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Simple Next Steps
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold">
                  A Calm, Clear Action Plan
                </h2>
              </div>
              <ol className="space-y-4">
                {nextSteps.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-center gap-5 bg-white border border-gold/25 rounded-2xl p-5 md:p-6 shadow-[0_4px_14px_-8px_rgba(27,43,75,0.2)]"
                  >
                    <span className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-[hsl(var(--gold-dark))] text-white font-serif text-2xl font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-navy font-semibold text-lg md:text-xl leading-snug">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 lg:py-14 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
                Need help thinking it through?
              </h2>
              <p className="text-primary-foreground/85 text-lg leading-relaxed mb-8">
                Reach out for a calm, no-pressure conversation about where the estate
                stands — and what to consider next.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-8 h-[56px] text-base rounded-lg">
                  <img src={iconPhone} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain" loading="lazy" />
                  Start the Conversation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default EstateProbateInheritedProperty;
