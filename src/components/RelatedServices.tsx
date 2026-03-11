import { Link } from "react-router-dom";

const allLinks = [
  { href: "/for-attorneys", label: "For Attorneys & Fiduciaries" },
  { href: "/executors", label: "For Executors" },
  { href: "/probate-estate-sales", label: "Probate & Estate Sales" },
  { href: "/senior-transitions", label: "Senior Transitions" },
  { href: "/for-cpas", label: "For CPAs" },
  { href: "/for-financial-planners", label: "For Financial Planners" },
  { href: "/why-valuation-matters", label: "Why Valuation Matters" },
  { href: "/how-the-process-works", label: "How the Process Works" },
  { href: "/counties", label: "Counties We Serve" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact David" },
];

interface RelatedServicesProps {
  /** Current page path — will be excluded from the links list */
  currentPath: string;
}

const RelatedServices = ({ currentPath }: RelatedServicesProps) => {
  const links = allLinks.filter((l) => l.href !== currentPath);

  return (
    <section className="pt-10 pb-10 md:pt-14 md:pb-14 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-sm">
            Related Resources
          </p>
          <div className="flex flex-wrap gap-3">
            {links.map((link, i) => (
              <span key={link.href} className="flex items-center gap-3">
                {i > 0 && <span className="text-muted-foreground/40">·</span>}
                <Link
                  to={link.href}
                  className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
