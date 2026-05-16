import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const situations = [
  {
    image: "/tiles/journey/helping-aging-parent.webp",
    alt: "Helping an aging parent — senior care guidance Washington State",
    title: "Helping an Aging Parent",
    description: "Worried about a parent's safety, care, or future housing decisions.",
    cta: "Explore Guidance",
    href: "/helping-aging-parents",
  },
  {
    image: "/tiles/journey/loved-one-passed-away.webp",
    alt: "Probate and inherited property guidance Washington State",
    title: "A Loved One Recently Passed Away",
    description: "Trying to understand probate, inherited property, or what comes next.",
    cta: "Understand the Process",
    href: "/estate-probate-inherited-property",
  },
  {
    image: "/tiles/journey/serving-executor-trustee.webp",
    alt: "Executor and trustee first steps Washington State",
    title: "Serving as Executor or Trustee",
    description: "Recently named executor or trustee and unsure what comes first.",
    cta: "View First Steps",
    href: "/executor-responsibilities-first-steps",
  },
  {
    image: "/tiles/journey/property-valuation.png",
    alt: "Property valuation and appraisal Washington State",
    title: "I Need a Property Valuation",
    description: "Understanding what a property is worth before making any decisions about selling, keeping, or transferring.",
    cta: "Get a Valuation",
    href: "/property-valuation",
  },
  {
    image: "/tiles/journey/housing-care-options.webp",
    alt: "Senior living and care options Washington State",
    title: "Exploring Housing & Care Options",
    description: "Considering assisted living, memory care, or aging in place.",
    cta: "Learn More",
    href: "/understanding-housing-care-options",
  },
  {
    image: "/tiles/journey/planning-before-crisis.webp",
    alt: "Estate planning, wills, and powers of attorney Washington State",
    title: "Planning Before a Crisis",
    description: "Quietly organizing legal, caregiving, and property planning ahead of time.",
    cta: "Explore Planning",
    href: "/planning-before-a-crisis",
  },
  {
    image: "/tiles/journey/deciding-what-to-do-with-house.webp",
    alt: "Decisions about an inherited or family home Washington State",
    title: "Deciding What To Do With the House",
    description: "Unsure whether to sell, keep, rent, repair, or prepare a property.",
    cta: "Explore Options",
    href: "/what-to-do-with-the-house",
  },
  {
    image: "/tiles/journey/out-of-state-families.png",
    alt: "Out-of-state families managing Washington State property remotely",
    title: "Out-of-State Families",
    description: "Managing a Washington State property remotely — coordinating care, sale, and decisions from a distance.",
    cta: "Learn More",
    href: "/out-of-state-families",
  },
];

const SituationCards = () => {
  return (
    <section className="py-14 md:py-20 bg-cream">
      <div className="container px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="font-serif text-[32px] md:text-[44px] lg:text-[52px] font-semibold text-navy leading-tight">
            ​
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {situations.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              aria-label={`${s.title} — ${s.description} — ${s.cta}`}
              className="card-3d-blue group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <div className="card-3d-blue__inner h-full relative">
                <div className="card-3d-blue__face h-full">
                  <div className="flex h-full flex-col">
                    <div className="relative w-full overflow-hidden bg-transparent flex items-center justify-center" style={{ aspectRatio: "500 / 312" }}>
                      <img
                        src={s.image}
                        alt={s.alt}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative flex flex-1 flex-col items-center text-center overflow-hidden" style={{ padding: "16px" }}>
                      <h3 className="font-serif text-[22px] md:text-[24px] font-semibold text-navy leading-snug mb-3 flex items-start justify-center transition-opacity duration-200 group-hover:opacity-0">
                        {s.title}
                      </h3>
                      <p className="text-foreground text-[14px] leading-relaxed mb-6 flex items-start justify-center transition-opacity duration-200 group-hover:opacity-0">
                        {s.description}
                      </p>
                      <span className="gold-cta mt-auto transition-opacity duration-200 group-hover:opacity-0" style={{ padding: "10px 16px" }}>
                        {s.cta}
                        <ArrowRight aria-hidden="true" />
                      </span>
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                        style={{
                          background: "rgba(10, 20, 46, 0.97)",
                          zIndex: 10,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          padding: "1.25rem 1.5rem",
                          transition: "opacity 0.28s ease 0.1s",
                        }}
                      >
                        <h3 className="font-serif text-white text-[24px] md:text-[26px] font-bold leading-snug mb-3">
                          {s.title}
                        </h3>
                        <span
                          className="inline-flex items-center gap-2 text-[16px] font-bold tracking-wide"
                          style={{ color: "#C9A84C", fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {s.cta}
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
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
