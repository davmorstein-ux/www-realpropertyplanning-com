import { Link } from "react-router-dom";

const allLinks = [
  { href: "/for-attorneys", label: "For Attorneys & Fiduciaries", description: "How we support attorneys and fiduciaries with real estate during probate and estate matters." },
  { href: "/executors", label: "For Executors", description: "A clear roadmap for executors managing estate real property in Washington State." },
  { href: "/probate-estate-sales", label: "Probate & Estate Sales", description: "Guidance for families and fiduciaries navigating property sales during probate." },
  { href: "/senior-transitions", label: "Senior Transitions", description: "Support for families navigating a move from a longtime home." },
  { href: "/for-cpas", label: "For CPAs", description: "Property guidance for CPAs advising clients through estate or life transitions." },
  { href: "/for-financial-planners", label: "For Financial Planners", description: "How we work with financial planners whose clients face housing decisions." },
  { href: "/why-valuation-matters", label: "Why Valuation Matters", description: "Understanding the role of accurate property valuation in estate and transition planning." },
  { href: "/how-the-process-works", label: "How the Process Works", description: "A step-by-step look at how a property sale unfolds from conversation through closing." },
  { href: "/how-to-move-elderly-parents", label: "How to Move Elderly Parents", description: "A compassionate guide for families planning a senior housing transition." },
  { href: "/counties", label: "Counties We Serve", description: "Service areas throughout Washington State." },
  { href: "/transition-resources", label: "Transition Resources", description: "A curated starting point for families and professionals navigating major housing transitions." },
  { href: "/faq", label: "FAQ", description: "Answers to common questions about our services, process, and expertise." },
  { href: "/contact", label: "Contact David", description: "Start a confidential conversation about your property situation." },
  { href: "/resources", label: "Resources", description: "Trusted professionals and service providers for probate, estate, and senior transitions." },
];

interface RelatedServicesProps {
  currentPath: string;
}

const RelatedServices = ({ currentPath }: RelatedServicesProps) => {
  const links = allLinks.filter((l) => l.href !== currentPath);

  return (
    <section data-nosnippet className="py-14 md:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-2 text-sm">
            Related Resources
          </p>
          <p className="text-muted-foreground text-[15px] mb-8 max-w-2xl">
            Explore helpful pages for families, executors, and professionals navigating property transitions.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="card-3d-blue group block h-full min-h-[252px] sm:min-h-[280px]"
              >
                <div className="card-3d-blue__inner h-full">
                  <div className="card-3d-blue__face h-full">
                    <div className="flex h-full flex-col justify-between px-6 pb-6 pt-10 sm:px-7 sm:pb-7 sm:pt-11">
                      <div>
                        <h3 className="mb-3 font-serif text-xl font-extrabold leading-snug text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.38rem]" style={{ textShadow: '0 1px 4px hsla(220, 30%, 15%, 0.25)' }}>
                          {link.label}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                      <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary/75 transition-colors duration-300 group-hover:text-accent">
                        <span>Learn more</span>
                        <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
