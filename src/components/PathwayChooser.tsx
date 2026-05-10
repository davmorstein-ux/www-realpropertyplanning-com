import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import seniorIcon from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import probateIcon from "@/assets/icons/probate-property-home-icon-washington.webp";
import proIcon from "@/assets/icons/professional-network-nodes-icon-washington.png";

const pathways = [
  {
    icon: seniorIcon,
    title: "Helping an Aging Parent or Loved One?",
    description:
      "Guidance for senior transitions, housing options, downsizing, and care planning.",
    cta: "Start Here",
    href: "/helping-aging-parents",
  },
  {
    icon: probateIcon,
    title: "Managing an Estate, Probate, or Inherited Property?",
    description:
      "Resources for executors, trustees, heirs, probate matters, appraisals, and estate property decisions.",
    cta: "Start Here",
    href: "/estate-probate-inherited-property",
  },
  {
    icon: proIcon,
    title: "Are You a Professional or Advisor?",
    description:
      "Connect with trusted professionals, referral resources, and collaborative support for clients and families.",
    cta: "Start Here",
    href: "/building-your-trusted-professional-team",
  },
];

const PathwayChooser = () => {
  return (
    <section className="py-14 md:py-20 bg-cream">
      <div className="container px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="font-serif text-[28px] md:text-4xl lg:text-[44px] font-semibold text-red-900 leading-tight mb-4">
            Choose the topic that best fits your situation:
          </h2>
          <p className="text-foreground text-lg md:text-xl leading-relaxed">
            Choose the situation that best fits you, and we'll guide you from there.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-5 md:gap-6">
          {pathways.map((p) => (
            <Link
              key={p.href}
              to={p.href}
              className="group relative block rounded-2xl bg-white border-2 border-gold/30 shadow-[0_8px_24px_-12px_rgba(27,43,75,0.25)] hover:shadow-[0_18px_40px_-16px_rgba(27,43,75,0.45)] hover:-translate-y-1 hover:border-gold transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-gold to-gold-dark" aria-hidden="true" />
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-5 sm:gap-6 p-6 sm:p-7 pl-7 sm:pl-9">
                {/* Icon */}
                <div className="shrink-0 flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-navy to-navy-dark shadow-inner">
                  <img
                    src={p.icon}
                    alt=""
                    aria-hidden="true"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 text-center sm:text-left flex flex-col justify-center">
                  <h3 className="font-serif text-[22px] sm:text-2xl md:text-[26px] font-semibold text-navy leading-snug mb-2">
                    {p.title}
                  </h3>
                  <p className="text-foreground text-base sm:text-lg leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="shrink-0 flex items-center justify-center sm:justify-end">
                  <span className="inline-flex items-center gap-2 px-6 py-4 min-h-[52px] rounded-xl bg-gradient-to-b from-gold to-gold-dark text-navy font-semibold text-base sm:text-lg shadow-md group-hover:shadow-lg group-hover:translate-x-1 transition-all duration-300 whitespace-nowrap">
                    {p.cta}
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

export default PathwayChooser;
