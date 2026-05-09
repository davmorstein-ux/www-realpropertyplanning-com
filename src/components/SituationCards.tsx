import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const situations = [
  {
    image: "/tiles/journey/helping-aging-parent.png",
    alt: "Helping an aging parent — senior care guidance Washington State",
    title: "Helping an Aging Parent",
    description: "Worried about a parent's safety, care, or future housing decisions.",
    cta: "Explore Guidance",
    href: "/helping-aging-parents",
  },
  {
    image: "/tiles/journey/loved-one-passed-away.png",
    alt: "Probate and inherited property guidance Washington State",
    title: "A Loved One Recently Passed Away",
    description: "Trying to understand probate, inherited property, or what comes next.",
    cta: "Understand the Process",
    href: "/estate-probate-inherited-property",
  },
  {
    image: "/tiles/journey/deciding-what-to-do-with-house.png",
    alt: "Decisions about an inherited or family home Washington State",
    title: "Deciding What To Do With the House",
    description: "Unsure whether to sell, keep, rent, repair, or prepare a property.",
    cta: "Explore Options",
    href: "/what-to-do-with-the-house",
  },
  {
    image: "/tiles/journey/housing-care-options.png",
    alt: "Senior living and care options Washington State",
    title: "Exploring Housing & Care Options",
    description: "Considering assisted living, memory care, or aging in place.",
    cta: "Learn More",
    href: "/understanding-housing-care-options",
  },
  {
    image: "/tiles/journey/planning-before-crisis.png",
    alt: "Estate planning, wills, and powers of attorney Washington State",
    title: "Planning Before a Crisis",
    description: "Quietly organizing legal, caregiving, and property planning ahead of time.",
    cta: "Explore Planning",
    href: "/estate-planning-powers-of-attorney",
  },
  {
    image: "/tiles/journey/serving-executor-trustee.png",
    alt: "Executor and trustee first steps Washington State",
    title: "Serving as Executor or Trustee",
    description: "Recently named executor or trustee and unsure what comes first.",
    cta: "View First Steps",
    href: "/executor-responsibilities-first-steps",
  },
];

const SituationCards = () => {
  return (
    <section className="py-14 md:py-20 bg-cream">
      <div className="container px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="font-serif text-[32px] md:text-[44px] lg:text-[52px] font-semibold text-navy leading-tight">
            Where Are You In The Process?
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {situations.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              aria-label={`${s.title} — ${s.description} — ${s.cta}`}
              className="group flex h-full flex-col rounded-2xl bg-white border border-gold/30 shadow-[0_8px_24px_-12px_rgba(27,43,75,0.25)] hover:shadow-[0_18px_40px_-16px_rgba(27,43,75,0.45)] hover:-translate-y-1 hover:border-gold transition-all duration-300 overflow-hidden no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <div className="relative w-full overflow-hidden bg-cream flex items-center justify-center" style={{ aspectRatio: "1 / 1" }}>
                <img
                  src={s.image}
                  alt={s.alt}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col items-center text-center px-6 pt-6 pb-7">
                <h3 className="font-serif text-[24px] md:text-[26px] font-semibold text-navy leading-snug mb-3 min-h-[72px] flex items-center justify-center">
                  {s.title}
                </h3>
                <p className="text-foreground text-[18px] md:text-[19px] leading-relaxed mb-6 min-h-[84px] flex items-center justify-center">
                  {s.description}
                </p>
                <span className="mt-auto inline-flex items-center justify-center gap-2 w-full max-w-[280px] h-[58px] px-6 rounded-xl bg-gradient-to-b from-gold to-gold-dark text-navy font-semibold text-[18px] shadow-md group-hover:shadow-lg group-hover:translate-x-1 transition-all duration-300 whitespace-nowrap">
                  {s.cta}
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SituationCards;
