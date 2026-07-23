// accordion removed — replaced with static card grid
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import seniorTransitionsHero from "@/assets/senior-transitions-hero.webp";
import attorneysTileImg from "@/assets/legal/attorneys-tile.webp";

import HeroBandTitle from "@/components/HeroBandTitle";

const jsonLd = articleSchema({
  headline: "Senior Housing Transitions in Washington State",
  description:
    "Patient, experienced guidance for families helping a senior sell their home in Washington State. Serving King, Snohomish, Pierce & Kitsap Counties.",
  url: "/senior-transitions",
  datePublished: "2025-01-15",
  dateModified: "2026-04-14",
  about: ["Senior transitions", "Downsizing", "Assisted living", "Senior home sales", "Family housing decisions"],
});

const SeniorTransitions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Senior Home Sales & Downsizing in Washington | Family-Paced Guidance"
        description="Help for Washington families selling a longtime home during a move to assisted living, memory care, or downsizing. Coordinated with care teams, attorneys, and out-of-state siblings."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Senior Transitions", url: "/senior-transitions" }]} />
      <Header />
      <main id="main-content">
        {/* Hero image + brand band — matches site-wide HeroBandTitle pattern */}
        <section className="w-full overflow-hidden" style={{ lineHeight: 0 }}>
          <img
            src={seniorTransitionsHero}
            alt="Senior couple in front of their longtime Washington home with a Real Property Planning For Sale sign"
            className="w-full object-cover"
            style={{ height: "clamp(220px, 32vw, 380px)", display: "block" }}
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            width={1920}
            height={763}
          />
          <HeroBandTitle as="h1">Selling A Senior's Home</HeroBandTitle>
        </section>

        <DirectAnswerBlock
          question="How do I sell a senior parent's home in Washington State?"
          answer="Selling a longtime family home during a senior transition usually involves more than a standard listing — coordinating with care providers, out-of-state siblings, move managers, and sometimes an attorney or financial planner, all at a pace the family can manage. Real Property Planning connects families with the right professionals for each step and provides condition-based pricing guidance so the home sells for a fair, defensible value."
          supportBullets={[
            "Works at the family's own pace — no pressure to rush a decision",
            "Connects you with move managers, living advisors, and estate liquidators as needed",
            "Provides an honest, condition-based valuation rather than an automated estimate",
          ]}
        />

        {/* What Goes Into a Senior Transition */}
        <section className="py-20 lg:py-28 bg-background border-b border-border">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                What Goes Into a Senior Transition?
              </h2>
              <p className="text-foreground text-lg leading-[1.7]">
                When a senior leaves a longtime home — whether moving to assisted living, a memory care community, a
                smaller residence, or closer to family — it rarely involves just real estate. It's a coordinated process
                that touches nearly every part of a family's life. Real Property Planning connects families and
                professionals to the right people for each step.
              </p>
            </div>
          </div>
        </section>

        {/* Who Helps With a Senior Transition */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-10 text-center">
                Who Helps With a Senior Transition?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-stretch">
                {[
                  {
                    image: "/tiles/set1/senior-move-managers-tile.webp",
                    alt: "Senior move managers — Washington State senior transition specialists",
                    title: "Senior Move Managers",
                    description:
                      "Specialists who handle the physical side of a move — sorting, packing, coordinating movers, and setting up the new home. They work at the family's pace and are trained to handle the emotional weight of leaving a longtime residence.",
                    cta: "Find a Move Manager",
                    href: "/senior-move-managers",
                  },
                  {
                    image: "/tiles/set1/senior-living-advisors-tile.webp",
                    alt: "Senior living advisors — Washington State placement specialists",
                    title: "Senior Living Advisors",
                    description:
                      "Professionals who help families evaluate and choose the right next home — whether that's independent living, assisted living, memory care, or in-home support. They know local communities, availability, and costs.",
                    cta: "Find a Living Advisor",
                    href: "/senior-living-advisors",
                  },
                  {
                    image: "/tiles/set1/estate-liquidators-tile.webp?v=20260602b",
                    alt: "Estate sale and liquidation services Washington State",
                    title: "Estate Sale & Liquidation",
                    description:
                      "When a home contains decades of belongings, estate sale professionals help families sort, value, and sell or donate items — clearing the home efficiently and respectfully before it goes on the market.",
                    cta: "Learn More",
                    href: "/estate-liquidation",
                  },
                  {
                    image: "/tiles/set1/real-estate-brokers-tile.webp?v=20260602b",
                    alt: "Real estate brokers experienced in senior transitions Washington State",
                    title: "Real Estate Broker",
                    description:
                      "A broker experienced in senior transitions understands condition-based pricing, family dynamics, and the need for patience. Real Property Planning connects families with brokers who specialize in this work throughout Washington State.",
                    cta: "Learn More",
                    href: "/realtor",
                  },
                  {
                    image: "/tiles/set1/real-estate-appraisers-tile.webp",
                    alt: "Certified real estate appraisers Washington State",
                    title: "Certified Appraiser",
                    description:
                      "An independent appraisal gives families an honest, defensible value for the home — useful for estate planning, trust administration, or simply knowing where you stand before making decisions.",
                    cta: "Learn More",
                    href: "/real-estate-appraiser",
                  },
                  {
                    image: attorneysTileImg,
                    alt: "Estate attorneys Washington State",
                    title: "Estate Attorneys",
                    description:
                      "Many senior transitions intersect with trust administration, power of attorney, or estate planning. An attorney ensures the legal side of the transition is handled properly alongside the real estate process.",
                    cta: "Learn More",
                    href: "/for-attorneys",
                  },
                  {
                    image: "/tiles/set1/medicare-providers-tile.webp",
                    alt: "Medicare and benefits advisors Washington State",
                    title: "Medicare & Benefits Advisors",
                    description:
                      "Understanding Medicare, Medicaid, and other senior benefits is critical when a housing transition affects care funding. A benefits advisor helps families navigate coverage options, eligibility rules, and the financial impact of a move on existing or pending benefits.",
                    cta: "Find a Benefits Advisor",
                    href: "/medicare-providers",
                  },
                  {
                    image: "/tiles/set1/financial-planners-tile.webp",
                    alt: "Financial advisors and CPAs Washington State",
                    title: "Financial Advisors & CPAs",
                    description:
                      "Selling a longtime home has tax implications — capital gains, stepped-up basis, trust distributions. A financial planner or CPA helps families understand the financial picture before and after the sale.",
                    cta: "Learn More",
                    href: "/for-financial-planners",
                  },
                ].map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    aria-label={`${s.title} — ${s.description} — ${s.cta}`}
                    className="interior-tile interior-tile--guide tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  >
                    <div className="tile-white__inner h-full relative w-full">
                      <div className="tile-white__face h-full">
                        <div className="overflow-hidden">
                          <img
                            src={s.image}
                            alt={s.alt}
                            className="float-left w-[110px] sm:w-[140px] mr-5 mb-3 rounded-md object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            style={{ aspectRatio: "1 / 1" }}
                            loading="lazy"
                            sizes="100vw"
                            decoding="async"
                          />
                          <h3 className="font-serif text-[20px] md:text-[22px] font-semibold text-navy leading-snug mb-2">
                            {s.title}
                          </h3>
                          <p className="text-foreground text-[15px] leading-relaxed mb-4">{s.description}</p>
                          <span className="gold-cta clear-left inline-flex">
                            {s.cta}
                            <svg
                              viewBox="0 0 24 24"
                              width="14"
                              height="14"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Not Sure Where to Start */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Not Sure Where to Start?</h2>
              <p className="text-foreground text-lg leading-[1.7] mb-8">
                Most families don't know which professional they need first. That's okay. Real Property Planning helps
                you figure out the right sequence and connects you with trusted professionals throughout the Puget Sound
                area.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  <img
                    src={iconPhone3d}
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 mr-2 object-contain shrink-0"
                    loading="lazy"
                    sizes="100vw"
                    decoding="async"
                    width={1024}
                    height={1536}
                  />
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <PageFAQ
          id="senior-transitions"
          eyebrow="Quick Answers"
          heading="Senior Transition Questions"
          faqs={[
            {
              question: "What's the first step in selling a senior's home in Washington?",
              answer:
                "Most families start by getting an honest sense of the home's value and condition, then deciding on next steps together — whether that's assisted living, a smaller home, or moving closer to family. Real Property Planning can help you figure out the right sequence of professionals before any decisions are made.",
            },
            {
              question: "Do I need a Power of Attorney to sell my parent's house?",
              answer:
                "If your parent can no longer manage their own affairs, the person acting as their agent under a Durable Power of Attorney typically needs that document in hand before signing on their behalf — banks, title companies, and real estate transactions all require it. An elder law or estate attorney can confirm the POA covers real estate authority specifically.",
            },
            {
              question: "How long does it typically take to sell a senior's home?",
              answer:
                "Timelines vary widely depending on the home's condition, family decision-making, and whether repairs or a full estate-sale cleanout are needed first. Because senior transitions often involve multiple family members and sometimes a move to care, the process is generally paced to the family's needs rather than rushed.",
            },
            {
              question: "Who helps coordinate a senior's move alongside the home sale?",
              answer:
                "A senior move manager typically handles the physical side — sorting, packing, and setting up the new home — while a senior living advisor helps evaluate placement options. Real Property Planning connects families with both, alongside the real estate and valuation side of the transition.",
            },
            {
              question: "Are there tax considerations when selling a longtime family home?",
              answer:
                "Yes — capital gains exclusions, stepped-up basis in a trust, and other tax factors can significantly affect the outcome. A CPA or financial planner should be part of the conversation before listing, and Real Property Planning can help connect your family with one.",
            },
          ]}
        />

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default SeniorTransitions;
