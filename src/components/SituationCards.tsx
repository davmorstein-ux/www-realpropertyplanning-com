import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import iconAgingParent from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import iconProbate from "@/assets/icons/probate-property-home-icon-washington.webp";
import iconHouse from "@/assets/icons/senior-home-sales-couple-house-icon-washington.webp";
import iconCare from "@/assets/icons/senior-assisted-living-icon-washington.webp";
import iconPlanning from "@/assets/icons/estate-wills-planning-icon-washington.webp";
import iconExecutor from "@/assets/icons/executors-clipboard-checklist-icon-washington.webp";

const situations = [
  {
    icon: iconAgingParent,
    title: "Helping an Aging Parent",
    description:
      "Worried about a parent's safety, care, or future housing decisions.",
    cta: "Explore Guidance",
    href: "/helping-aging-parents",
  },
  {
    icon: iconProbate,
    title: "A Loved One Recently Passed Away",
    description:
      "Trying to understand probate, inherited property, or what comes next.",
    cta: "Understand the Process",
    href: "/estate-probate-inherited-property",
  },
  {
    icon: iconHouse,
    title: "Deciding What To Do With the House",
    description:
      "Unsure whether to sell, keep, rent, repair, or prepare a property.",
    cta: "Explore Options",
    href: "/what-to-do-with-the-house",
  },
  {
    icon: iconCare,
    title: "Exploring Housing & Care Options",
    description:
      "Considering assisted living, memory care, or aging in place.",
    cta: "Learn More",
    href: "/understanding-housing-care-options",
  },
  {
    icon: iconPlanning,
    title: "Planning Before a Crisis",
    description:
      "Quietly organizing legal, caregiving, and property planning ahead of time.",
    cta: "Explore Planning",
    href: "/estate-planning-powers-of-attorney",
  },
  {
    icon: iconExecutor,
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
            What Best Describes Your Situation?
          </h2>
          <p className="text-foreground text-lg md:text-xl leading-relaxed">
            Choose the path that best matches what you or your family may be experiencing.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {situations.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="group relative block rounded-2xl bg-white border-2 border-gold/30 shadow-[0_8px_24px_-12px_rgba(27,43,75,0.25)] hover:shadow-[0_18px_40px_-16px_rgba(27,43,75,0.45)] hover:-translate-y-1 hover:border-gold transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-gold to-gold-dark"
                aria-hidden="true"
              />
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 p-6 sm:p-7 pl-7 sm:pl-9">
                <div className="shrink-0 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-navy to-navy-dark shadow-inner">
                  <img
                    src={s.icon}
                    alt=""
                    aria-hidden="true"
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left flex flex-col justify-between gap-4 min-w-0">
                  <div>
                    <h3 className="font-serif text-[22px] sm:text-2xl font-semibold text-navy leading-snug mb-2">
                      {s.title}
                    </h3>
                    <p className="text-foreground text-base sm:text-lg leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center justify-center sm:justify-start gap-2 self-center sm:self-start px-6 py-3 min-h-[52px] rounded-xl bg-gradient-to-b from-gold to-gold-dark text-navy font-semibold text-base shadow-md group-hover:shadow-lg group-hover:translate-x-1 transition-all duration-300 whitespace-nowrap">
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
