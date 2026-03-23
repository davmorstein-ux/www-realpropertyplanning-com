import { Link } from "react-router-dom";
import {
  Scale, FileText, Home, MapPin, Handshake, Users, BarChart3,
  ShieldCheck, BookOpen, Briefcase, TrendingUp, ClipboardList, Network,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface ServiceTile {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
}

const tiles: ServiceTile[] = [
  {
    title: "For Attorneys",
    subtitle: "Estate & Probate Support",
    href: "/for-attorneys",
    icon: Scale,
  },
  {
    title: "Personal Representatives",
    subtitle: "Guidance for Executors",
    href: "/executors",
    icon: FileText,
  },
  {
    title: "Trustees & Fiduciaries",
    subtitle: "Property Decision Support",
    href: "/executors",
    icon: ShieldCheck,
  },
  {
    title: "CPAs",
    subtitle: "Coordinating Real Estate Decisions",
    href: "/for-cpas",
    icon: Briefcase,
  },
  {
    title: "Financial Planners",
    subtitle: "Property & Wealth Strategy",
    href: "/for-financial-planners",
    icon: TrendingUp,
  },
  {
    title: "Senior Transitions",
    subtitle: "Downsizing & Housing Changes",
    href: "/senior-transitions",
    icon: Users,
  },
  {
    title: "Probate & Estate Sales",
    subtitle: "Selling Inherited Property",
    href: "/probate-estate-sales",
    icon: Home,
  },
  {
    title: "How the Process Works",
    subtitle: "Step-by-Step Overview",
    href: "/how-the-process-works",
    icon: ClipboardList,
  },
  {
    title: "Why Valuation Matters",
    subtitle: "Understanding Property Value",
    href: "/why-valuation-matters",
    icon: BarChart3,
  },
  {
    title: "Probate Terminology",
    subtitle: "Simple Definitions & Guidance",
    href: "/terminology",
    icon: BookOpen,
  },
  {
    title: "Service Areas",
    subtitle: "Western Washington Coverage",
    href: "/counties",
    icon: MapPin,
  },
  {
    title: "Professional Resources",
    subtitle: "Trusted Network & Partners",
    href: "/professional-referral-resource",
    icon: Handshake,
  },
];

const ServiceNavTiles = () => {
  return (
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
            How Can I Help You Today?
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Select a topic below to learn more about how we can assist you.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {tiles.map((tile) => (
              <CarouselItem
                key={tile.href + tile.title}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Link
                  to={tile.href}
                  className="group flex flex-col items-center text-center bg-card border border-border rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md hover:border-gold/40 hover:scale-[1.03] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                    <tile.icon className="w-8 h-8 text-accent group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground font-semibold leading-snug mb-1.5">
                    {tile.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-snug">
                    {tile.subtitle}
                  </p>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 lg:-left-12" />
          <CarouselNext className="-right-4 lg:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default ServiceNavTiles;
