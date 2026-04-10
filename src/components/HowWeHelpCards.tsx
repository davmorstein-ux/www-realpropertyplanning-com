import { Link } from "react-router-dom";
import { Home, Users, ClipboardList } from "lucide-react";

const cards = [
  {
    icon: Home,
    headline: "Selling an Inherited Home",
    description: "We handle the details so families don't have to. From pricing to closing, we manage the process with care.",
    link: "/probate-estate-sales",
  },
  {
    icon: Users,
    headline: "Senior Housing Transitions",
    description: "Helping older adults and their families find the right next step — whether that's downsizing or moving to assisted living.",
    link: "/senior-transitions",
  },
  {
    icon: ClipboardList,
    headline: "Estate & Trust Appraisals",
    description: "As a certified appraiser, David provides legally reliable valuations for probate, trusts, and estate settlements.",
    link: "/real-estate-appraiser",
  },
];

const HowWeHelpCards = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <h2 className="font-serif text-[2.5rem] text-foreground font-semibold text-center mb-12">
          How We Help
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.headline}
              className="bg-card rounded-2xl shadow-md p-8 flex flex-col items-start"
            >
              <card.icon className="w-16 h-16 text-gold mb-6 stroke-[1.5]" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {card.headline}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 flex-1">
                {card.description}
              </p>
              <Link
                to={card.link}
                className="text-gold font-semibold text-lg underline underline-offset-4 hover:text-gold-dark transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpCards;
