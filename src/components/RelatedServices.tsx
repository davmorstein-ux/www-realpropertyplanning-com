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
  { href: "/how-to-move-elderly-parents", label: "How to Move Elderly Parents" },
  { href: "/counties", label: "Counties We Serve" },
  { href: "/transition-resources", label: "Transition Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact David" },
  { href: "/resources", label: "Resources" },
];

interface RelatedServicesProps {
  /** Current page path — will be excluded from the links list */
  currentPath: string;
}

const RelatedServices = ({ currentPath }: RelatedServicesProps) => {
  const links = allLinks.filter((l) => l.href !== currentPath);

  return (
    <section data-nosnippet className="pt-10 pb-10 md:pt-14 md:pb-14 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-5 text-sm">
            Related Resources
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2.5">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm leading-relaxed"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
