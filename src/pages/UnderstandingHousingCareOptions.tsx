import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
    href: "/helping-aging-parents",
    icon: iconHeartHands,
  },
  {
    letter: "6",
    title: "Temporary or Transitional Care",
    description:
      "Short-term rehabilitation, recovery support, respite care, or transitional care situations.",
    href: "/senior-living/nursing-and-skilled-care",
    icon: iconAssisted,
  },
];

const continueJourney = [
  { href: "/understanding-senior-transitions", title: "Understanding Senior Transitions", description: "An overview of the most common life-stage moves.", icon: iconHeartHands },
  { href: "/aging-in-place-staying-home-safely", title: "Aging in Place & Staying at Home Safely", description: "Plan ahead for safety, support, and independence at home.", icon: iconHome },
  { href: "/estate-planning-powers-of-attorney", title: "Estate Planning & Powers of Attorney", description: "Understand the legal documents most families need.", icon: iconDocument },
  { href: "/what-to-do-with-the-house", title: "What To Do With the House", description: "A guided decision roadmap for the home.", icon: iconExecutor },
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
      <BreadcrumbSchema items={[{ name: "Understanding Housing & Care Options", url: "/understanding-housing-care-options" }]} />
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
          />
        </section>
        <HeroBandTitle>UNDERSTANDING&nbsp;&nbsp;HOUSING&nbsp;&nbsp;AND&nbsp;&nbsp;CARE&nbsp;&nbsp;OPTIONS</HeroBandTitle>

        {/* INTRO */}
        <section className="bg-background pt-10 pb-6 lg:pt-14 lg:pb-8">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-4">
                What Type of Support Are You Looking For?
              </h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                {" "}
              </p>
            </div>
          </div>
        </section>

        {/* PATHWAYS */}
        <section id="pathways" className="py-10 lg:py-14 bg-secondary scroll-mt-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-7 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                {" "}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                {" "}
              </h2>
              <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                {" "}
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-4">
              {pathways.map((p) => (
                <Link
                  key={p.letter}
                  to={p.href}
                  className="group block bg-white border-2 border-gold/25 rounded-2xl shadow-[0_8px_24px_-12px_rgba(27,43,75,0.18)] hover:border-gold/55 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(27,43,75,0.28)] transition-all overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row items-stretch">
                    <div className="md:w-44 bg-gradient-to-br from-navy to-[hsl(var(--navy-dark))] text-cream p-5 md:p-6 flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                      <span className="font-serif text-5xl text-gold font-bold leading-none">
                        {p.letter}
                      </span>
                      <span className="text-cream uppercase tracking-widest text-xs font-bold">
                        Option {p.letter}
                      </span>
                    </div>
                    <div className="flex-1 p-5 md:p-6 flex items-center gap-5">
                      <img
                        src={p.icon}
                        alt=""
                        aria-hidden="true"
                        className="w-14 h-14 md:w-16 md:h-16 object-contain shrink-0 hidden sm:block"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <h3 className="font-serif text-xl md:text-2xl text-navy font-semibold mb-2 group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-navy text-base md:text-lg leading-relaxed mb-2">
                          {p.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-gold font-bold text-sm">
                          Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CONTINUE YOUR JOURNEY */}
        <section className="py-10 lg:py-14 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-7">
                <img src={iconArrow} alt="" aria-hidden="true" className="w-12 h-12 object-contain mx-auto mb-4" loading="lazy" />
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Keep Going
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Continue Your Journey
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Families exploring housing and care options often need help
                  understanding these next steps.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {continueJourney.map((c) => (
                  <Link
                    key={c.href + c.title}
                    to={c.href}
                    className="group bg-white border-2 border-gold/25 rounded-2xl p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)] hover:border-gold/55 hover:-translate-y-1 hover:shadow-[0_12px_28px_-12px_rgba(27,43,75,0.28)] transition-all flex flex-col"
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

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default UnderstandingHousingCareOptions;
