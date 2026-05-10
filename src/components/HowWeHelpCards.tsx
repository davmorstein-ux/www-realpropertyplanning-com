import { Link } from "react-router-dom";
import inheritedHomeIcon from "@/assets/probate-inherited-home-icon-washington.webp";
import seniorHousingIcon from "@/assets/senior-housing-placement-icon-washington.webp";
import estateAppraisalsIcon from "@/assets/estate-appraisal-services-icon-washington.webp";

const cards = [
  {
    iconSrc: inheritedHomeIcon,
    iconAlt: "Inherited home real estate icon — probate and estate property sales in Washington State",
    iconSize: "w-[240px] h-[168px]",
    headline: "Selling an Inherited Home",
    headlineClass: "text-xl",
    description: "We handle the details so families don't have to. Real Property Planning's background as both a licensed broker and a certified appraiser means inherited homes are priced honestly — based on actual condition, not an inflated pitch to win a listing. From valuation through closing, we manage the entire process.",
    link: "/probate-estate-sales",
    proLink: { label: "Find a probate attorney →", href: "/professionals/probate-attorneys" },
  },
  {
    iconSrc: seniorHousingIcon,
    iconAlt: "Senior housing transition icon — downsizing and relocation guidance in Washington State",
    iconSize: "w-[240px] h-[168px]",
    headline: "Senior Housing Transitions",
    headlineClass: "text-xl",
    description: "Helping seniors and their families navigate the sale of a longtime home with patience and clear communication — whether the next step is assisted living, downsizing, or a move closer to family. We coordinate with care teams, move managers, and advisors throughout the Puget Sound area.",
    link: "/senior-transitions",
    proLink: { label: "Find a senior housing advisor →", href: "/professionals/senior-housing-advisors" },
  },
  {
    iconSrc: estateAppraisalsIcon,
    iconAlt: "Estate appraisal document icon — certified residential appraisals for probate and trusts",
    iconSize: "w-[240px] h-[168px]",
    headline: " Estate & Trust Appraisals",
    headlineClass: "text-2xl",
    description: "As a Washington State Certified Residential Appraiser, Real Property Planning provides condition-adjusted, defensible valuations for probate, trust administration, estate settlements, and financial planning purposes — the kind of analysis that holds up when attorneys, courts, and family members ask questions.",
    link: "/real-estate-appraiser",
    proLink: { label: "See all professional resources →", href: "/professionals" },
  },
];

const HowWeHelpCards = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <h2 className="font-serif text-red-900 font-semibold text-center mb-12 text-3xl">
          How We Help
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => (
            <Link
              key={card.headline}
              to={card.link}
              className="card-3d-blue group block h-full"
            >
              <div className="card-3d-blue__inner h-full">
                <div className="card-3d-blue__face h-full">
                  <div className="flex h-full flex-col px-7 pb-7 pt-8">
                    <div className="w-full flex justify-center mb-5">
                      <img
                        src={card.iconSrc}
                        alt={card.iconAlt}
                        className={`${card.iconSize} object-contain`}
                        loading="lazy"
                      />
                    </div>
                    <h3
                      className="font-serif font-extrabold mb-3 text-center text-foreground group-hover:text-accent transition-colors"
                      style={{ fontSize: '22px', textShadow: "0 1px 4px hsla(220, 30%, 15%, 0.25)" }}
                    >
                      {card.headline}
                    </h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed mb-5 flex-1">
                      {card.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-gold group-hover:text-[hsl(var(--gold-dark))] transition-colors mb-3">
                      <span>Learn more</span>
                      <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                    </div>
                    <span
                      className="text-muted-foreground text-sm underline underline-offset-2 hover:text-gold transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.location.href = card.proLink.href;
                      }}
                    >
                      {card.proLink.label}
                    </span>
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

export default HowWeHelpCards;
