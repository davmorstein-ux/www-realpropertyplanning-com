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
    question: "What should I do first with an inherited home in Everett?",
    answer:
      `Make the house secure, then confirm you have legal authority to act for the estate. After that, get a clear picture of the home's condition and value; many inherited Everett homes have years of put-off maintenance. ${FEATURED_BROKER.Role} can visit, flag the problems that affect price, and explain the options before you decide anything.`,
  },
  {
    question: `How does ${FEATURED_BROKER.role} help with homes that need a lot of work?`,
    answer:
      `${FEATURED_BROKER.Role} draws on ${FEATURED_BROKER.pronoun.possessive} appraisal background to separate the repairs likely to add more to the sale price than they cost from the ones that won't. For some homes the answer is to sell as-is; for others, a short list of repairs is worth doing. Either way the decision rests on data rather than a guess.`,
  },
  {
    question: "How does working with a broker who is also an appraiser benefit Everett sellers?",
    answer:
      `${FEATURED_BROKER.Role} holds two credentials: a Washington State real estate broker license and state certification as a residential appraiser. The price is built from the home's actual condition and sales in its neighborhood. That grounding helps with older Everett homes, where condition, location, and the lot itself can move the value considerably.`,
  },
  {
    question: "What if family members disagree about what to do with the property?",
    answer:
      `Disagreement among heirs is common. ${FEATURED_BROKER.Role} can give everyone the same set of facts: what shape the house is in, what it would likely sell for, and what each choice involves. Starting from shared information instead of assumptions can help the family move the conversation forward.`,
  },
  {
    question: "Can you get help if I don't live in the Everett area?",
    answer:
      `Yes. ${FEATURED_BROKER.Role} works with executors and relatives who handle Everett property from out of the area. ${FEATURED_BROKER.pronoun.Subject} can arrange access for vendors, oversee preparation, and manage the sale, with updates at each stage, so you travel only when you need to.`,
  },
  {
    question: "How long does it take to sell an inherited home in Everett?",
    answer:
      `Three things set the pace: the probate or trust process, the home's condition, and how much preparation it needs. After the authority to sell is settled and the house is ready, a well-priced Everett home typically sells within a few weeks. A realistic timeline for your own situation is something ${FEATURED_BROKER.role} can map out with you.`,
  },
];

const EverettProbateEstate = () => {
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
        { "@type": "City", name: "Everett", containedInPlace: { "@type": "State", name: "Washington" } },
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
        title="Probate & Estate Real Estate in Everett, WA"
        description="Guidance for executors and families handling inherited homes in Everett, WA. Practical preparation help, realistic pricing, clear next steps."
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: "Snohomish County", url: "/snohomish-county" },
          { name: "Everett", url: "/everett-probate-estate-real-estate" },
        ]}
      />
      <Header />
      <main id="main-content">
        <ProbateStartHere />

      {/* Hero */}
      <HeroBandTitle as="h1">Helping Everett Families With Inherited Homes</HeroBandTitle>

      {/* Intro — relocated out of the title band. The band carries the
          page title and nothing else, sitewide. */}
      <section className="py-10 md:py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "18px" }}>
            Before an inherited Everett home goes on the market, there are usually three things to sort out: repairs that were put off for years, a house still full of belongings, and family decisions about what happens next. Someone local who handles these sales can help with all three.
          </p>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              When Everett Families Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              In Everett, the first call to {FEATURED_BROKER.role} usually comes from one of these situations:
            </p>
            <ul className="space-y-4">
              {[
                "A home the family owned for decades, still full of belongings, with maintenance put off",
                "An executor who doesn't know where to begin or what the home is worth",
                "Siblings or heirs with different opinions about whether to sell, keep, or rent",
                "A house that needs cleanup or repairs before it can be listed",
                "Uncertainty about pricing in Everett's varied neighborhoods and market conditions",
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
              Why Everett Inherited Homes Need a Practical Approach
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              What an inherited Everett home needs depends a great deal on where it is and when it was built. The city runs from early-1900s craftsman houses in the Port Gardner neighborhood to mid-century ramblers in Boulevard Bluffs and newer construction in Silver Lake, and each area has its own buyers, price range, and preparation needs.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Many inherited Everett homes come with decades of wear: the roof, plumbing, wiring, and finishes may be well out of date. Telling apart the problems buyers will walk away over, the improvements that pay for themselves, and the ones not worth the wait takes an honest look at the actual condition rather than guesswork or general advice.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {FEATURED_BROKER.Role} is licensed by Washington State as a real estate broker and holds a state-certified residential appraiser credential, so the starting point is what the property is worth. The aim is to give families a realistic basis, drawn from local sales data, for deciding how much preparation to do, what price to ask, and when to list.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Dealing With an Inherited Home in Everett?"
        body={`${FEATURED_BROKER.name}, a licensed real estate broker, talks confidentially with executors, trustees, and families about inherited homes and other estate property in Everett and across Snohomish County.`}
        buttonText="Schedule a Consultation"
        microcopy="Talking it through doesn't commit you to anything; the focus is the house and what to do with it."
      />

      {/* Family Decision-Making */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support When Families Need to Make Decisions Together
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              When several relatives share a say in an inherited house, the decision gets harder. Siblings may remember the home differently, be in different financial positions, and want different outcomes. Those talks can get emotional, and facts about the property help keep them grounded.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              {FEATURED_BROKER.Role} can supply those facts: the property's condition, a realistic price drawn from local sales, and a plain explanation of each option. Having the same neutral information in front of everyone can help a family get unstuck and reach a decision each person understands.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Relatives in Everett, elsewhere in Washington, or in other states all get the same updates from {FEATURED_BROKER.role} as the sale moves along.
            </p>
          </div>
        </div>
      </section>

      {/* How a featured broker helps (third person since Sept 27, 2026: the hub does not do this work) */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How {FEATURED_BROKER.roleTitle} Can Help Everett Families Move Forward
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Here is the usual order of the work, adjusted to each house and family:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understanding the Situation",
                  desc: `${FEATURED_BROKER.Role} starts with a conversation about the property, the people involved, the timeline, and any concerns.`,
                },
                {
                  title: "Evaluating the Property",
                  desc: `${FEATURED_BROKER.pronoun.Subject} tours the house, looks at its condition and anything that would pull down the price, and separates preparation that could pay off from work that would cost more in time or money than it returns.`,
                },
                {
                  title: "Realistic Pricing Strategy",
                  desc: `The asking price comes from Everett sales data read with an appraiser's eye, so it reflects the home's real condition, its location, and the neighborhood around it.`,
                },
                {
                  title: "Coordinating Preparation",
                  desc: `When the house needs clearing or repairs, ${FEATURED_BROKER.pronoun.subject} lines up the cleanout crew and contractors and keeps their work on a realistic schedule.`,
                },
                {
                  title: "Guiding the Sale to Completion",
                  desc: `${FEATURED_BROKER.pronoun.Subject} takes care of the listing and the steps to closing, and every family member involved hears about progress along the way.`,
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
      <PageFAQ faqs={faqs} heading="Everett Inherited Property FAQ" />

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
                { to: "/snohomish-county", label: "Snohomish County Overview" },
                { to: "/for-attorneys", label: "For Attorneys" },
                { to: "/why-valuation-matters", label: "Why Valuation Matters" },
                { to: "/how-the-process-works", label: "How the Process Works" },
                { to: "/resources/property-preparation-services", label: "Property Preparation" },
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

      <RelatedServices currentPath="/everett-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Practical Next Step for Everett Families
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you've inherited an Everett home and the next step isn't obvious, a short call can lay out the options and which one to take up first.
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

export default EverettProbateEstate;

