import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import GoldCheck3D from "@/components/GoldCheck3D";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { hubOrganizationSchema, areaServed } from "@/lib/schema";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";
import ProbateStartHere from "@/components/ProbateStartHere";

const faqs = [
  {
    question: "How does selling an inherited home work in Vancouver, WA?",
    answer:
      `Selling an inherited home in Vancouver starts with confirming who has legal authority to sell (through probate or trust administration). After that comes a look at the property's condition and a plan for pricing and preparation. ${FEATURED_BROKER.Role} can coordinate the sale from the first assessment to closing, keeping the parties informed and the timeline on track.`,
  },
  {
    question: "What if the family is split between Washington and Oregon?",
    answer:
      `This is common in the Vancouver area. ${FEATURED_BROKER.Role} works with families where some members live in Portland, others out of state, and the property is in Clark County. ${FEATURED_BROKER.pronoun.Subject} can keep communication going among everyone involved and handle the local logistics, so the sale can keep moving wherever each person lives.`,
  },
  {
    question: "How does an appraisal background help with Vancouver properties?",
    answer:
      `${FEATURED_BROKER.Role} holds a Washington real estate broker license and a state residential appraiser certification, and bases a price on the home's assessed condition and local market data rather than an automated estimate. In Vancouver, being next to Portland shapes prices in ways that call for careful local analysis.`,
  },
  {
    question: "Can you get help coordinate a sale alongside a senior transition or relocation?",
    answer:
      `Yes. In Vancouver a property sale often overlaps with a move to senior living, a relocation to be closer to family, or a move between Washington and Oregon. ${FEATURED_BROKER.Role} can fit the sale timeline to the wider transition, working with moving companies, family members, and other professionals.`,
  },
  {
    question: "Should I prepare the home before selling?",
    answer:
      `That turns on the condition of the house, how much time you have, and what else is changing for the family. ${FEATURED_BROKER.Role} looks at which repairs or updates would probably add more to the price than they cost in money and delay, and which would not. When a move or transition leaves little time, ${FEATURED_BROKER.pronoun.subject} helps decide what to do first.`,
  },
  {
    question: "How long does it take to sell an estate property in Vancouver?",
    answer:
      `The schedule depends on where the probate or trust administration stands, what shape the house is in, and the market at the time. Once someone has authority to sell and the house is ready to show, a well-priced Vancouver home typically finds a buyer within a few weeks. ${FEATURED_BROKER.Role} can map out a likely schedule for your property and match the sale schedule to any move or other transition.`,
  },
];

const VancouverWaProbateEstate = () => {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    };

    const localSchema = {
      ...hubOrganizationSchema,
      "@context": "https://schema.org",
      areaServed: [
        { "@type": "City", name: "Vancouver", containedInPlace: { "@type": "State", name: "Washington" } },
        ...areaServed,
      ],
    };

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.setAttribute("data-page-jsonld", "faq");
    script1.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.setAttribute("data-page-jsonld", "local");
    script2.textContent = JSON.stringify(localSchema);
    document.head.appendChild(script2);

    return () => {
      document.querySelectorAll("script[data-page-jsonld]").forEach((s) => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Probate & Estate Real Estate in Vancouver, WA"
        description="Guidance for families, executors, and trustees with inherited property in Vancouver, WA. Relocation, timing, and coordinated transitions."
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: "Vancouver", url: "/vancouver-wa-probate-estate-real-estate" },
        ]}
      />
      <Header />
      <main id="main-content">
        <ProbateStartHere />

      {/* Hero */}
      <HeroBandTitle as="h1">Vancouver Property Transitions Across State Lines</HeroBandTitle>

      {/* Intro — relocated out of the title band. The band carries the
          page title and nothing else, sitewide. */}
      <section className="py-10 md:py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "18px" }}>
            Vancouver property decisions often involve timing, relocation, and coordination across state lines. An inherited or estate home here may have heirs in Portland, buyers from Oregon, and a sale that has to line up with someone's move.
          </p>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              When Families in Vancouver Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Vancouver sits on the Oregon border, and the property questions families bring here often involve timing, coordination, and decisions that cross state lines:
            </p>
            <ul className="space-y-4">
              {[
                "Relocating between Washington and Oregon",
                "Inherited home during a move or transition",
                "Executor balancing timing of sale and relocation",
                "Coordinating property decisions with multiple family members",
                "Questions about pricing and next steps",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={22} className="mt-0.5 shrink-0" />
                  <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Local Market */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Why Timing and Coordination Matter in Vancouver
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Being next to Portland shapes how estate and transition property sells in Vancouver. Buyers often cross state lines, tax considerations differ between Washington and Oregon, and families frequently have ties to both sides of the river. These factors make timing and coordination especially important.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Whether the property is in Salmon Creek, Felida, the Heights, or closer to downtown, neighborhood-level pricing differences matter. Inherited and estate homes often need some preparation, and when a move or transition is happening at the same time, the order in which decisions are made becomes critical.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {FEATURED_BROKER.Role} is licensed as a Washington real estate broker and state-certified as a residential appraiser, and starts from what the property is worth in its actual condition, using local market data. The aim is a price the estate can stand behind and plain reporting to attorneys and family members.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Handling a Property Transition in Vancouver?"
        body={`Executors, trustees, and families dealing with inherited property, an estate sale, or a property decision tied to a move in Vancouver or elsewhere in Clark County can request a confidential consultation with ${FEATURED_BROKER.name}, a licensed real estate broker.`}
        buttonText="Schedule a Consultation"
        microcopy="You are not committing to anything; the talk is limited to the property."
      />

      {/* Coordination */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support Through Transition and Relocation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Vancouver property situations often involve more than selling a home. A parent may be moving to senior living while the family home needs to be prepared and sold. An executor in Portland may be managing a Clark County estate. A family may be relocating out of state and needs the sale coordinated with their move timeline.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              {FEATURED_BROKER.Role} can act as the central point of coordination: managing property access, working with cleanout crews, contractors, moving companies, and other vendors, communicating with attorneys and family members, and keeping the timeline in line with the wider transition.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The aim is to take on the day-to-day details of preparing and selling the property, leaving the family more time for the other decisions a transition brings.
            </p>
          </div>
        </div>
      </section>

      {/* How a featured broker helps (third person since Sept 27, 2026: the hub does not do this work) */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How {FEATURED_BROKER.roleTitle} Can Help With Transition-Driven Decisions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The approach follows the same five steps, adjusted to each situation:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understanding the Full Picture",
                  desc: `The first step is a talk with ${FEATURED_BROKER.role} about the house, who is involved, when things need to happen, and any move or relocation that bears on the sale.`,
                },
                {
                  title: "Assessing the Property",
                  desc: `${FEATURED_BROKER.pronoun.Subject} walks through the home, notes its condition and anything that would pull the price down, and works out how much preparation fits your schedule and goals.`,
                },
                {
                  title: "Aligning the Timeline",
                  desc: `When a sale needs to line up with a move, a senior transition, or a cross-state relocation, ${FEATURED_BROKER.pronoun.subject} builds a realistic timeline that accounts for all the moving parts.`,
                },
                {
                  title: "Vancouver Pricing Strategy",
                  desc: `With Vancouver sales data and ${FEATURED_BROKER.pronoun.possessive} appraisal training, ${FEATURED_BROKER.role} sets a price that reflects the home's real condition and neighborhood and can be explained to the parties.`,
                },
                {
                  title: "Guiding the Process to Completion",
                  desc: `From preparation to closing, ${FEATURED_BROKER.pronoun.subject} handles the details and keeps every party updated as the sale moves through each stage.`,
                },
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/15 text-gold font-semibold text-sm shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-foreground font-semibold text-[15px] mb-1">{step.title}</p>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <PageFAQ faqs={faqs} heading="Vancouver Probate & Estate Property FAQ" />

      {/* Internal Links */}
      <section className="py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
            <div className="flex flex-wrap gap-3">
              {[
                { to: "/executors", label: "For Executors" },
                { to: "/probate-estate-sales", label: "Probate & Estate Sales" },
                { to: "/senior-transitions", label: "Senior Transitions" },
                { to: "/for-attorneys", label: "For Attorneys" },
                { to: "/why-valuation-matters", label: "Why Valuation Matters" },
                { to: "/how-the-process-works", label: "How the Process Works" },
                { to: `/counties`, label: "All Cities" },
              ].map((link, i) => (
                <span key={link.to} className="flex items-center gap-3">
                  {i > 0 && <span className="text-muted-foreground/40">·</span>}
                  <Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cornerstone Guides */}
      <section className="py-10 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Helpful Guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { to: "/guides/how-probate-real-estate-works", label: "How Probate Sales Work" },
                { to: "/guides/what-executors-should-do", label: "What Executors Should Do First" },
                { to: "/guides/inherited-house-washington", label: "Inherited House Guide" },
                { to: "/guides/out-of-state-families", label: "Out-of-State Families" },
                { to: "/guides/appraisal-vs-cma", label: "Appraisal vs. CMA" },
                { to: "/guides/senior-transition-differences", label: "Senior Transition Differences" },
              ].map((link, i) => (
                <span key={link.to} className="flex items-center gap-3">
                  {i > 0 && <span className="text-muted-foreground/40">·</span>}
                  <Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/vancouver-wa-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Clear Next Step
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              For a Vancouver property caught up in a transition or relocation, a short conversation can help sort out the next steps for the property.
            </p>
            <div className="flex justify-center">
              <Link to="/contact?reason=estate-property">
                <Button variant="gold" size="lg" className="px-10 py-4 h-auto text-base">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default VancouverWaProbateEstate;

