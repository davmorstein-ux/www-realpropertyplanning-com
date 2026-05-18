import { Link } from "react-router-dom";
import { Home, Scale, Handshake, ArrowRight } from "lucide-react";

const cards = [
  {
    Icon: Home,
    label: "Seniors & Families",
    description: "Navigating an inherited home, estate sale, or senior housing transition",
    cta: "Start Here",
    href: "/what-should-we-do-first",
  },
  {
    Icon: Scale,
    label: "Attorneys & Fiduciaries",
    description: "Need a trusted probate real estate partner in Washington State",
    cta: "Learn More",
    href: "/for-attorneys",
  },
  {
    Icon: Handshake,
    label: "Service Providers",
    description: "Join our network of vetted professionals serving seniors and estates",
    cta: "Get Connected",
    href: "/join-the-network",
  },
];

const HomepageFunnel = () => (
  <section className="bg-cream py-12 md:py-16 lg:py-20">
    <div className="container px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {cards.map(({ Icon, label, description, cta, href }) => (
          <Link
            key={label}
            to={href}
            aria-label={label}
            className="group flex h-full flex-col items-center text-center rounded-2xl bg-white border-2 border-gold p-8 lg:p-10 shadow-[0_12px_32px_-18px_hsl(var(--navy)/0.55)] hover:border-gold hover:shadow-[0_22px_46px_-22px_hsl(var(--navy)/0.7)] hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 no-underline"
            style={{ textDecoration: "none" }}
          >
            <Icon className="w-12 h-12 text-navy mb-5" strokeWidth={1.75} aria-hidden="true" />
            <h3 className="font-serif text-2xl lg:text-3xl text-navy font-bold mb-3 leading-tight group-hover:text-[hsl(var(--gold-dark))] transition-colors">
              {label}
            </h3>
            <p className="text-[#374151] mb-7 flex-1" style={{ fontSize: "17px", lineHeight: 1.6 }}>
              {description}
            </p>
            <span className="mt-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-[hsl(var(--gold-dark))] text-navy font-bold text-base px-6 py-3 rounded-lg transition-colors no-underline">
              {cta}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default HomepageFunnel;
