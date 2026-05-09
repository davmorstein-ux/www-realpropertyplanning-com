import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const situations = [
  {
    image: "/tiles/set3/senior-home-sales.webp",
    alt: "Helping an aging parent — senior care guidance Washington State",
    title: "Helping an Aging Parent",
    description:
      "Worried about a parent's safety, care, or future housing decisions.",
    cta: "Explore Guidance",
    href: "/helping-aging-parents",
  },
  {
    image: "/tiles/set2/probate-estate-sales.webp",
    alt: "Probate and inherited property guidance Washington State",
    title: "A Loved One Recently Passed Away",
    description:
      "Trying to understand probate, inherited property, or what comes next.",
    cta: "Understand the Process",
    href: "/estate-probate-inherited-property",
  },
  {
    image: "/tiles/set1/real-estate-brokers.webp",
    alt: "Decisions about an inherited or family home Washington State",
    title: "Deciding What To Do With the House",
    description:
      "Unsure whether to sell, keep, rent, repair, or prepare a property.",
    cta: "Explore Options",
    href: "/what-to-do-with-the-house",
  },
  {
    image: "/tiles/set3/senior-living-options.webp",
    alt: "Senior living and care options Washington State",
    title: "Exploring Housing & Care Options",
    description:
      "Considering assisted living, memory care, or aging in place.",
    cta: "Learn More",
    href: "/understanding-housing-care-options",
  },
  {
    image: "/tiles/set2/wills.webp",
    alt: "Estate planning, wills, and powers of attorney Washington State",
    title: "Planning Before a Crisis",
    description:
      "Quietly organizing legal, caregiving, and property planning ahead of time.",
    cta: "Explore Planning",
    href: "/estate-planning-powers-of-attorney",
  },
  {
    image: "/tiles/set2/executors.webp",
    alt: "Executor and trustee first steps Washington State",
    title: "Serving as Executor or Trustee",
    description:
      "Recently named executor or trustee and unsure what comes first.",
    cta: "View First Steps",
    href: "/executor-responsibilities-first-steps",
  },
];

const SituationCards = () => {
  return (
    <section className="py-14 md:py-20 bg-cream">
      <div className="container px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="font-serif text-[28px] md:text-4xl lg:text-[44px] font-semibold text-red-900 leading-tight mb-4">
            Where Are You in This Journey?
          </h2>
          <p className="text-foreground text-lg md:text-xl leading-relaxed">
            Choose whichever feels closest. You don't have to figure this out alone — and there's no rush.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {situations.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="group relative block rounded-2xl bg-white border-2 border-gold/30 shadow-[0_8px_24px_-12px_rgba(27,43,75,0.25)] hover:shadow-[0_18px_40px_-16px_rgba(27,43,75,0.45)] hover:-translate-y-1 hover:border-gold transition-all duration-300 overflow-hidden no-underline"
            >
              <div
                className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-gold to-gold-dark"
                aria-hidden="true"
              />
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-5 sm:gap-6 p-5 sm:p-6 pl-6 sm:pl-8">
                <div className="shrink-0 w-full sm:w-[180px] h-[140px] sm:h-auto rounded-xl overflow-hidden bg-cream">
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left flex flex-col justify-between gap-4 min-w-0">
                  <div>
                    <h3 className="font-serif text-[22px] sm:text-[26px] font-semibold text-navy leading-snug mb-2 no-underline">
                      {s.title}
                    </h3>
                    <p className="text-foreground text-[18px] sm:text-[19px] leading-relaxed no-underline">
                      {s.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center justify-center sm:justify-start gap-2 self-center sm:self-start px-6 py-3 min-h-[52px] rounded-xl bg-gradient-to-b from-gold to-gold-dark text-navy font-semibold text-base shadow-md group-hover:shadow-lg group-hover:translate-x-1 transition-all duration-300 whitespace-nowrap no-underline">
                    {s.cta}
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SituationCards;
