import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import PremiumTile from "@/components/PremiumTile";
import { articleSchema } from "@/lib/schema";

import iconHeartHands from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import iconAssisted from "@/assets/icons/senior-assisted-living-icon-washington.webp";
import iconHome from "@/assets/icons/probate-property-home-icon-washington.webp";
import iconExecutor from "@/assets/icons/probate-executors-services-icon-washington.webp";
import iconDocument from "@/assets/icons/probate-document-icon-washington.webp";
import iconArrow from "@/assets/icons/property-guidance-arrow-icon-washington.webp";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/understanding-housing-care-options-hero-washington.webp";

interface Pathway {
  letter: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

const pathways: Pathway[] = [
  {
    letter: "1",
    title: "Independent Living",
    description:
      "For active seniors seeking convenience, community, reduced maintenance, and lifestyle support while remaining largely independent.",
    href: "/senior-living/independent-living",
    icon: iconHeartHands,
  },
  {
    letter: "2",
    title: "Assisted Living",
    description:
      "For seniors who may benefit from help with daily activities, meals, medication reminders, transportation, or personal support.",
    href: "/senior-living/assisted-living-communities",
    icon: iconAssisted,
  },
  {
    letter: "3",
    title: "Adult Family Homes",
    description:
      "Smaller residential care settings that often provide more personalized support in a home-like environment.",
    href: "/senior-living/adult-family-homes",
    icon: iconHome,
  },
  {
    letter: "4",
    title: "Memory Care",
    description:
      "Specialized environments designed for individuals experiencing Alzheimer's disease, dementia, or cognitive decline.",
    href: "/senior-living/memory-care",
    icon: iconExecutor,
  },
  {
    letter: "5",
    title: "In-Home Care & Aging in Place",
    description:
      "Options for seniors who wish to remain at home while receiving caregiving, safety, and support services.",
    href: "/helping-an-aging-parent",
    icon: iconHeartHands,
  },
  {
    letter: "6",
    title: "Temporary or Transitional Care",
    description: "Short-term rehabilitation, recovery support, respite care, or transitional care situations.",
    href: "/senior-living/nursing-and-skilled-care",
    icon: iconAssisted,
  },
];

const continueJourney = [
  {
    href: "/understanding-senior-transitions",
    title: "Understanding Senior Transitions",
    description: "An overview of the most common life-stage moves.",
    icon: iconHeartHands,
  },
  {
    href: "/aging-in-place-staying-home-safely",
    title: "Aging in Place & Staying at Home Safely",
    description: "Plan ahead for safety, support, and independence at home.",
    icon: iconHome,
  },
  {
    href: "/estate-planning-powers-of-attorney",
    title: "Estate Planning & Powers of Attorney",
    description: "Understand the legal documents most families need.",
    icon: iconDocument,
  },
  {
    href: "/what-to-do-with-the-house",
    title: "What To Do With the House",
    description: "A guided decision roadmap for the home.",
    icon: iconExecutor,
  },
];

const jsonLd = articleSchema({
  headline: "Understanding Housing & Care Options",
  description:
    "A guided roadmap for families and seniors exploring assisted living, adult family homes, memory care, independent living, in-home care, and other housing decisions in Washington.",
  url: "/understanding-housing-care-options",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Senior housing", "Assisted living", "Memory care", "Adult family homes", "Aging in place"],
});

const UnderstandingHousingCareOptions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Understanding Housing & Care Options | Real Property Planning"
        description="A calm guided roadmap for families and seniors exploring assisted living, adult family homes, memory care, independent living, and in-home care in Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema
        items={[{ name: "Understanding Housing & Care Options", url: "/understanding-housing-care-options" }]}
      />
      <Header />
      <main id="main-content">
        {/* HERO IMAGE */}
        <section className="w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Family touring a Washington senior living community to understand housing and care options"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover"
            width={1600}
            height={900}
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
          />
        </section>
        <HeroBandTitle as="h1">Understanding Housing and Care Options</HeroBandTitle>

        {/* INTRO
            Removed a <p> containing only a space. It rendered an empty
            paragraph that still received the 18px line-height and margin
            from the global rules, adding dead vertical space below the
            heading for no reason. */}
        <section className="bg-background pt-10 pb-6 lg:pt-14 lg:pb-8">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-4">
                What Type of Support Are You Looking For?
              </h2>
            </div>
          </div>
        </section>

        {/* PATHWAYS
            Removed a header block of three empty elements — an eyebrow <p>,
            an <h2>, and a <p>, each containing only a space. The empty <h2>
            was the worst of them: it put a blank heading into the document
            outline, so a screen reader announced a heading with no text, and
            search engines saw a second empty H2 on the page. */}
        <section id="pathways" className="py-10 lg:py-14 bg-secondary scroll-mt-20">
          <div className="container px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {pathways.map((p) => (
                <PremiumTile
                  key={p.letter}
                  to={p.href}
                  title={p.title}
                  description={p.description}
                  cta="Learn More"
                  className="understanding-tile-outline"
                />
              ))}
            </div>
          </div>
        </section>

        {/* CONTINUE YOUR JOURNEY
            Grid changed from 3 columns to 2. There are four cards here, so a
            3-column layout left a single orphaned tile alone on a second row.
            Two columns gives a balanced 2x2 and lets each card run wider. */}
        <section className="py-10 lg:py-14 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-7">
                <img
                  src={iconArrow}
                  alt=""
                  aria-hidden="true"
                  className="w-12 h-12 object-contain mx-auto mb-4"
                  loading="lazy"
                  sizes="48px"
                  decoding="async"
                  width={512}
                  height={512}
                />
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">Keep Going</p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">Continue Your Journey</h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Families exploring housing and care options often need help understanding these next steps.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {continueJourney.map((c) => (
                  <PremiumTile
                    key={c.href + c.title}
                    to={c.href}
                    title={c.title}
                    description={c.description}
                    cta="Continue"
                    className="understanding-tile-outline"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <style>{`
          /* ---- Existing teal outline ---- */
          .understanding-tile-outline .tile-white__face {
            border: 2px solid #0d9488 !important;
          }
          .understanding-tile-outline h3 {
            text-shadow: none !important;
          }

          /* ---- TILE SHAPE FIX ----
             PremiumTile carries .interior-tile, which index.css caps at
             max-width: 260px with centred text. That cap was written for
             the round-headshot provider tiles, not for text cards.

             Each grid cell here is roughly 330px, so a 260px tile left
             about 70px of dead space inside every cell — which is why the
             tiles looked thin AND why the spacing looked too wide. One
             cause, both symptoms.

             Centred text in a 260px column also produced six-word ragged
             lines, which is the hard-to-read part.

             Scoped to this page's class so nothing else on the site moves.
             The equivalent global fix already exists as
             .interior-tile--guide, used on /senior-transitions. */
          .understanding-tile-outline.understanding-tile-outline {
            max-width: 100% !important;
            min-width: 0 !important;
            width: 100% !important;
            align-items: flex-start !important;
            text-align: left !important;
            padding: 24px 26px 22px !important;
          }
          .understanding-tile-outline.understanding-tile-outline h3 {
            text-align: left !important;
            justify-content: flex-start !important;
            font-size: 1.22rem !important;
            line-height: 1.3 !important;
            min-height: 0 !important;
          }
          .understanding-tile-outline.understanding-tile-outline p {
            text-align: left !important;
            line-height: 1.55 !important;
          }
          .understanding-tile-outline.understanding-tile-outline .tile-white__inner,
          .understanding-tile-outline.understanding-tile-outline .tile-white__face {
            width: 100% !important;
          }
        `}</style>

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default UnderstandingHousingCareOptions;
