import { Link } from "react-router-dom";
import premiumTileBg from "@/assets/premium-tile-bg.png";

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="premium-shell-tile group relative flex flex-col justify-between"
                style={{
                  backgroundImage: `url(${premiumTileBg})`,
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <div className="relative z-10 flex flex-col justify-between h-full px-8 py-7 sm:px-9 sm:py-8">
                  <div>
                    <h3 className="font-serif text-[1.05rem] font-bold text-foreground group-hover:text-accent transition-colors mb-2.5 leading-snug">
                      {link.label}
                    </h3>
                    <p className="text-muted-foreground/90 text-sm leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 mt-4 text-primary/70 group-hover:text-accent transition-colors text-sm font-medium">
                    <span>Learn more</span>
                    <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">→</span>
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
