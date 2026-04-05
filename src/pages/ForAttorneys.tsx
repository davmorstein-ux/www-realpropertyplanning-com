import GoldCheck3D from "@/components/GoldCheck3D";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MidPageCTA from "@/components/MidPageCTA";
import PageFAQ from "@/components/PageFAQ";
import ProfessionalConfidence from "@/components/ProfessionalConfidence";
import ProofCallout from "@/components/ProofCallout";
import iconProbate from "@/assets/icons/icon-probate-sales.png";
import iconExecutors from "@/assets/icons/icon-executors.png";
import iconDivorce from "@/assets/icons/icon-divorce-3d.png";
import iconSeniorMoves from "@/assets/icons/icon-senior-moves.png";
import iconElderLaw from "@/assets/icons/icon-elder-law-3d.png";
import iconFinancial from "@/assets/icons/icon-financial-planning.png";
import iconEstatePlanning from "@/assets/icons/icon-estate-planning-3d.png";
import iconTrustees from "@/assets/icons/icon-trustees.png";
import iconFamilyLaw from "@/assets/icons/icon-family-law-3d.png";
import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import ClientReviewsSection from "@/components/ClientReviewsSection";
import RealClientSituations from "@/components/RealClientSituations";
import StatewideSupport from "@/components/StatewideSupport";

const attorneyReviews = [
  {
    text: "David guided our family through a very difficult time with professionalism and genuine compassion. His valuation perspective and market knowledge were incredibly helpful.",
    highlights: ["professionalism and genuine compassion", "valuation perspective"],
    attribution: "Estate Attorney, Seattle",
    contextTag: "Probate · Executor",
  },
  {
    text: "David's dual background in brokerage and appraisal gave us confidence that the property was priced correctly. He made a complicated situation feel manageable.",
    highlights: ["priced correctly", "complicated situation"],
    attribution: "Professional Referral",
    contextTag: "Valuation Strategy",
  },
  {
    text: "We didn't know where to start. David made the entire process manageable and kept us informed every step of the way.",
    highlights: ["entire process manageable", "informed every step"],
    attribution: "Executor, Snohomish County",
    contextTag: "Out-of-State Coordination",
  },
];

const attorneyCaseStudies = [
  {
    title: "Out-of-State Executor With a Full House",
    label: "Out-of-State Executor",
    situation: "An executor living in California was named personal representative for her father's estate in Snohomish County.",
    challenge: "No local contacts, property hadn't been updated in 30 years, and was filled with decades of belongings.",
    howHelped: "Coordinated cleanout, managed repairs, handled the entire listing and sale remotely with regular updates to both the executor and her estate attorney.",
    outcome: "Home sold within three weeks at a price exceeding expectations. The executor later referred David to her attorney for future situations.",
  },
  {
    title: "Siblings Who Disagreed on Pricing",
    label: "Family Coordination",
    situation: "Three adult children inherited their mother's home in King County. Each had a different opinion about what to do.",
    challenge: "One wanted to sell quickly, one believed the home was worth far more than market data showed, and one was unsure.",
    howHelped: "Presented a detailed property assessment and comparable sales analysis grounded in appraisal methodology to all three siblings.",
    outcome: "The family agreed on a data-driven price. The home sold with minimal conflict, and all three felt the process was professional.",
  },
  {
    title: "Senior Transition With Family Coordination",
    label: "Senior Transition",
    situation: "An elder law attorney's client needed to sell the family home as part of a move to assisted living.",
    challenge: "The senior was emotionally attached to the home, and adult children living out of state needed regular communication and reassurance.",
    howHelped: "David worked with the family to set a realistic timeline, coordinated preparation and staging, and provided consistent updates to both the attorney and family members.",
    outcome: "The home sold at a fair price with a smooth transition. The family described the process as respectful and well-coordinated.",
  },
  {
    title: "Coordinating a Probate Sale with Multiple Heirs",
    label: "Family Coordination",
    situation: "Four adult siblings inherited a family home in Kitsap County. The probate attorney needed a broker who could manage the real estate while keeping all parties aligned.",
    challenge: "Differing opinions on timing and value among the heirs, plus no one lived near the property.",
    howHelped: "David provided a valuation-informed pricing assessment, held a group call to walk through the data, and managed the full sale process with regular updates to the attorney and all four siblings.",
    outcome: "Agreement reached within two weeks. The home sold at a fair price, and the attorney noted that having a reliable real estate partner simplified the probate process.",
  },
  {
    title: "Providing Clarity on Pricing an Inherited Property",
    label: "Valuation Strategy",
    situation: "An estate planning attorney's client — an executor — had received conflicting price opinions from two other agents and didn't know who to trust.",
    challenge: "One agent suggested listing high, the other recommended a much lower price. Neither provided detailed analysis to support their recommendation.",
    howHelped: "David conducted a thorough property review and presented a valuation-informed pricing strategy with clear comparable data — giving the executor and attorney confidence in the recommended price.",
    outcome: "The executor chose a well-supported list price. The home sold close to asking, and the attorney added David to their referral list for future estate situations.",
  },
];

const attorneyTiles = [
  {
    title: "Probate\nAttorneys",
    href: "/for-probate-attorneys",
    iconSrc: iconProbate,
  },
  {
    title: "Estate Planning\nAttorneys",
    href: "/for-estate-planning-attorneys",
    iconSrc: iconEstatePlanning,
  },
  {
    title: "Elder Law\nAttorneys",
    href: "/for-elder-law-attorneys",
    iconSrc: iconElderLaw,
  },
  {
    title: "Family Law\nAttorneys",
    href: "/for-family-law-attorneys",
    iconSrc: iconFamilyLaw,
  },
  {
    title: "Divorce\nAttorneys",
    href: "/for-divorce-attorneys",
    iconSrc: iconDivorce,
  },
];

const attorneyFaqs = [
  {
    question: "How does David support attorneys during probate property sales?",
    answer: "David handles the real estate side — property assessment, preparation, pricing, marketing, and sale — while coordinating directly with the attorney and personal representative. He provides regular updates and documentation to support the legal process.",
  },
  {
    question: "What is the difference between a CMA and a formal appraisal?",
    answer: "A CMA (Comparative Market Analysis) is a broker's opinion of value based on comparable sales data. A formal appraisal is a certified, independent valuation with stricter methodology. David's dual credentials allow him to provide market analysis informed by appraisal discipline — giving attorneys stronger data for estate decisions.",
  },
  {
    question: "Can David help with valuation disputes or pricing disagreements among heirs?",
    answer: "Yes. David's appraisal background allows him to present data-driven pricing supported by comparable sales analysis, condition adjustments, and market context — helping resolve disagreements with objective evidence rather than opinion.",
  },
  {
    question: "Does David work with attorneys outside of Western Washington?",
    answer: "David serves clients throughout Washington State. For properties outside Washington, he can connect attorneys with trusted brokers through eXp Realty's nationwide referral network.",
  },
];

const ForAttorneys = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Real Estate Support for Attorneys | Probate, Estate & Family Law | David Stein"
        description="Licensed real estate broker and certified residential appraiser supporting attorneys with probate sales, estate property coordination, valuation guidance, and family law property matters throughout Washington State."
      />
      <BreadcrumbSchema items={[{ name: "For Attorneys", url: "/for-attorneys" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              For Attorneys & Fiduciaries
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              When Your Client Has a Property to Deal With
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
              David handles the real estate side — valuation, preparation, coordination, and sale — so you and your client can focus on the legal and financial priorities.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                Discuss a Client Situation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Most attorneys I work with reach out because they have a client situation where the property piece is becoming the bottleneck — a probate that needs a realistic market assessment, an estate where the family can't agree on pricing, or a trust that needs to sell a home in difficult condition.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My role is to take the real estate off your plate entirely. I handle the property assessment, preparation, pricing, and sale — while keeping you and your client informed at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Tile Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
                Areas of Collaboration
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Select the area that best fits your client's situation:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {attorneyTiles.map((tile) => (
                <Link
                  key={tile.href}
                  to={tile.href}
                  className="card-3d group relative flex flex-col items-center justify-center gap-5 overflow-hidden px-8 py-10 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.07] to-transparent" />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-foreground/[0.10] to-transparent" />

                  <img
                    src={tile.iconSrc}
                    alt=""
                    className="h-28 w-28 sm:h-32 sm:w-32 object-contain mix-blend-multiply transition-transform duration-300 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  <h3 className="font-serif text-[1.75rem] font-bold leading-[1.15] tracking-tight text-foreground lg:text-[2rem] whitespace-pre-line">
                    {tile.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA
        heading="Have a Client Who Needs Property Guidance?"
        body="A quick call is usually the fastest way to determine how David can support the situation."
        buttonText="Discuss a Client Situation"
      />

      {/* Professional Affiliations */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-xl text-foreground font-semibold mb-6">Professional Memberships &amp; Affiliations</h3>
            <AffiliationBadgeGrid />
          </div>
        </div>
      </section>

      <ProfessionalConfidence
        heading="Why Attorneys Trust This Process"
        intro="Legal professionals consistently describe these qualities when referring clients to David:"
        background="bg-background"
      />

      <section className="py-10 lg:py-12 bg-cream">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ProofCallout
              quote="David guided our family through a very difficult time with professionalism and genuine compassion. His valuation perspective and market knowledge were incredibly helpful."
              attribution="Estate Attorney, Seattle"
              context="Probate property transition"
              variant="accent"
            />
          </div>
        </div>
      </section>

      <ClientReviewsSection
        reviews={attorneyReviews}
        heading="Client Reviews & Experiences"
        subheading="Feedback from attorneys, executors, and families who have worked with David on complex property situations."
        background="bg-background"
      />

      <RealClientSituations
        studies={attorneyCaseStudies}
        heading="Real Client Situations"
        subheading="Examples of how David has supported attorneys and their clients through complex property transitions."
        background="bg-secondary"
        showCTA
      />

      <PageFAQ faqs={attorneyFaqs} heading="Questions Attorneys Ask About Working With David" />

      <StatewideSupport background="bg-cream" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
              A Reliable Resource for Your Practice
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              When you have a client situation involving property, David can step in and handle the real estate side with the professionalism your practice requires.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                Discuss a Client Situation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default ForAttorneys;
