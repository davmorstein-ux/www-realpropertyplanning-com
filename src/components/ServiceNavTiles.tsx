import { Link } from "react-router-dom";
import { Scale, FileText, Home, MapPin, Handshake, Users, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceTile {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
}

const tiles: ServiceTile[] = [
  {
    title: "For Attorneys",
    href: "/for-attorneys",
    icon: Scale,
    description: "Probate & estate real estate support",
  },
  {
    title: "For Executors",
    href: "/executors",
    icon: FileText,
    description: "Guidance for estate representatives",
  },
  {
    title: "Probate & Estate Sales",
    href: "/probate-estate-sales",
    icon: Home,
    description: "Inherited & estate property sales",
  },
  {
    title: "Senior Transitions",
    href: "/senior-transitions",
    icon: Users,
    description: "Downsizing & relocation support",
  },
  {
    title: "Why Valuation Matters",
    href: "/why-valuation-matters",
    icon: BarChart3,
    description: "Appraisal-informed pricing strategy",
  },
  {
    title: "Service Areas",
    href: "/counties",
    icon: MapPin,
    description: "Counties & cities we serve",
  },
  {
    title: "Professional Referral Resource",
    href: "/professional-referral-resource",
    icon: Handshake,
    description: "For CPAs, advisors & partners",
  },
];

const ServiceNavTiles = () => {
  return (
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
            How Can I Help You Today?
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Select a topic below to learn more about how we can assist you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 lg:gap-5">
          {tiles.map((tile) => (
            <Link
              key={tile.href}
              to={tile.href}
              className="group flex flex-col items-center text-center bg-card border border-border rounded-xl p-5 lg:p-6 shadow-sm hover:shadow-md hover:border-gold/40 hover:scale-[1.03] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                <tile.icon className="w-7 h-7 text-accent group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-serif text-[15px] lg:text-base text-foreground font-semibold leading-snug mb-1.5">
                {tile.title}
              </h3>
              <p className="text-muted-foreground text-[13px] leading-snug hidden sm:block">
                {tile.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceNavTiles;
