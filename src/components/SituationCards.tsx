import { Link } from "react-router-dom";

const situations = [
  {
    image: "/tiles/journey/helping-aging-parent.png",
    title: "Helping an Aging Parent",
    description: "Worried about a parent's safety, care, or future housing decisions.",
    cta: "Explore Guidance",
    href: "/helping-aging-parents",
  },
  {
    image: "/tiles/journey/loved-one-passed-away.png",
    title: "A Loved One Recently Passed Away",
    description: "Trying to understand probate, inherited property, or what comes next.",
    cta: "Understand the Process",
    href: "/estate-probate-inherited-property",
  },
  {
    image: "/tiles/journey/deciding-what-to-do-with-house.png",
    title: "Deciding What To Do With the House",
    description: "Unsure whether to sell, keep, rent, repair, or prepare a property.",
    cta: "Explore Options",
    href: "/what-to-do-with-the-house",
  },
  {
    image: "/tiles/journey/housing-care-options.png",
    title: "Exploring Housing & Care Options",
    description: "Considering assisted living, memory care, or aging in place.",
    cta: "Learn More",
    href: "/understanding-housing-care-options",
  },
  {
    image: "/tiles/journey/planning-before-crisis.png",
    title: "Planning Before a Crisis",
    description: "Quietly organizing legal, caregiving, and property planning ahead of time.",
    cta: "Explore Planning",
    href: "/estate-planning-powers-of-attorney",
  },
  {
    image: "/tiles/journey/serving-executor-trustee.png",
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
          <h2 className="font-serif text-[28px] md:text-4xl lg:text-[44px] font-semibold text-navy leading-tight mb-4">
            Where Are You in This Journey?
          </h2>
          <p className="text-foreground text-lg md:text-xl leading-relaxed">
            Choose whichever feels closest. You don't have to figure this out alone — and there's no rush.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {situations.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              aria-label={`${s.title} — ${s.description} — ${s.cta}`}
              className="group block rounded-2xl overflow-hidden bg-cream transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <div className="relative w-full overflow-hidden bg-cream" style={{ aspectRatio: "420 / 490" }}>
                <img
                  src={s.image}
                  alt={`${s.title} — ${s.description}`}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <span className="sr-only">{s.cta}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SituationCards;
