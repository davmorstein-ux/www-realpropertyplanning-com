import { Link, useLocation } from "react-router-dom";

/**
 * Site-wide breadcrumb bar — derives the trail from the current URL.
 * Hidden on the homepage. Style mirrors the existing "Home" breadcrumb
 * on the Helping an Aging Parent page (same font, size, navy/70 color).
 *
 * Add custom labels in PATH_LABELS for any segment whose title-cased form
 * isn't a good display label.
 */

const PATH_LABELS: Record<string, string> = {
  "helping-an-aging-parent": "Helping an Aging Parent",
  "helping-aging-parents": "Helping an Aging Parent",
  "estate-probate-inherited-property": "When a Loved One Passes Away",
  "first-steps": "First Steps After a Death",
  "probate-and-legal-authority": "Understanding Probate & Legal Authority",
  "property-value": "Understanding the Property's Value",
  "what-to-do-with-the-property": "Deciding What to Do With the Property",
  "preparing-the-property": "Preparing the Property",
  "professional-team": "Building Your Professional Team",
  "executor-responsibilities-first-steps": "Serving as Executor & Trustee",
  "first-30-days": "Your First 30 Days",
  "legal-duties": "Understanding Your Legal Duties",
  "property-decisions": "What to Do With the Property",
  "working-with-professionals": "Working With Attorneys & Professionals",
  "common-mistakes": "Common Executor Mistakes",
  "when-you-need-extra-help": "When You Need Extra Help",
  "planning-before-a-crisis": "Planning Before a Crisis",
  "why-planning-early": "Why Planning Early",
  "conversations-to-have": "Conversations to Have",
  "legal-documents": "Legal Documents",
  "property-questions": "Property Questions",
  "when-a-move-is-coming": "When a Move Is Coming",
  "how-we-can-help": "How We Can Help",
  "what-should-we-do-first": "What Should We Do First?",
  "what-to-do-with-the-house": "Deciding What to Do With the House",
  "understanding-housing-care-options": "Exploring Housing & Care Options",
  "understanding-senior-transitions": "Understanding Senior Transitions",
  "estate-planning-powers-of-attorney": "Estate Planning & Powers of Attorney",
  "building-your-trusted-professional-team": "Building Your Trusted Professional Team",
  "downsizing-preparing-for-transition": "Downsizing & Preparing for Transition",
  "preparing-home-for-sale-during-transition": "Preparing the Home for Sale",
  "selling-an-inherited-home": "Selling an Inherited Home",
  "aging-in-place-staying-home-safely": "Aging in Place — Staying Home Safely",
  "date-of-death-valuation-property-appraisals": "Date-of-Death Valuation",
  "senior-placement": "Senior Placement",
  "sell-house-fund-senior-living": "Selling a Home to Fund Senior Living",
  "why-valuation-matters": "Why Valuation Matters",
  "how-the-process-works": "How the Process Works",
  "executors": "Executors",
  "trustees": "Trustees",
  "estate-liquidation": "Estate Liquidation",
  "learn-more": "Learn More",
  "real-estate-appraiser": "Real Estate Appraiser",
  "realtor": "Realtor",
  "wills": "Wills",
  "power-of-attorney": "Power of Attorney",
  "gray-divorce": "Gray Divorce",
  "grey-divorce": "Grey Divorce",
  "medicare-providers": "Medicare Providers",
  "title-and-escrow": "Title & Escrow",
  "for-attorneys": "For Attorneys",
  "how-it-works": "How It Works",
  "for-probate-attorneys": "For Probate Attorneys",
  "for-estate-planning-attorneys": "For Estate Planning Attorneys",
  "for-elder-law-attorneys": "For Elder Law Attorneys",
  "for-family-law-attorneys": "For Family Law Attorneys",
  "for-divorce-attorneys": "For Divorce Attorneys",
  "real-estate-attorneys": "For Real Estate Attorneys",
  "for-cpas": "For CPAs",
  "for-financial-planners": "For Financial Planners",
  "join-the-network": "Join the Network",
  "counties": "Counties",
  "guides-and-resources": "Guides & Resources",
  "guides": "Guides",
  "professionals": "Professionals",
  "professionals-services": "Professionals & Services",
  "roles": "Roles",
  "planning": "Planning",
  "senior-living-and-relocation": "Senior Living & Relocation",
  "senior-living": "Senior Living",
  "adult-family-homes": "Adult Family Homes",
  "assisted-living-communities": "Assisted Living Communities",
  "memory-care": "Memory Care",
  "nursing-and-skilled-care": "Nursing & Skilled Care",
  "independent-living": "Independent Living",
  "power-of-attorneys": "Powers of Attorney",
  "lenders-and-financing-specialists": "Lenders & Financing Specialists",
  "retirement-reverse-mortgage": "Retirement & Reverse Mortgage",
  "resources": "Resources",
  "senior-move-managers": "Senior Move Managers",
  "estate-sale-companies": "Estate Sale Companies",
  "probate-estate-attorneys": "Probate & Estate Attorneys",
  "cpas-financial-advisors": "CPAs & Financial Advisors",
  "senior-living-communities": "Senior Living Communities",
  "property-preparation-services": "Property Preparation Services",
  "moving-relocation-services": "Moving & Relocation Services",
  "washington-executors-10-step-checklist": "Washington Executors 10-Step Checklist",
  "about": "About",
  "contact": "Contact",
  "faq": "FAQ",
  "terminology": "Terminology",
  "testimonials": "Testimonials",
  "client-stories": "Client Stories",
  "probate-estate-sales": "Probate & Estate Sales",
  "senior-transitions": "Senior Transitions",
  "probate-attorneys": "Probate Attorneys",
  "senior-housing-advisors": "Senior Housing Advisors",
  "financial-planners": "Financial Planners",
  "estate-sale": "Estate Sale",
  "home-preparation": "Home Preparation",
  "care-managers": "Care Managers",
};

const titleCase = (slug: string): string =>
  slug
    .split("-")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");

const labelFor = (segment: string): string =>
  PATH_LABELS[segment] || titleCase(segment);

const AutoBreadcrumbs = () => {
  const { pathname } = useLocation();

  // Hide on homepage and 404-style empty paths.
  if (pathname === "/" || pathname === "") return null;

  const segments = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
  if (segments.length === 0) return null;

  // Build cumulative trail — each crumb has the path up to and including it.
  const trail = segments.map((seg, i) => ({
    label: labelFor(seg),
    path: "/" + segments.slice(0, i + 1).join("/"),
  }));

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-cream border-b border-border/40"
    >
      <div className="container px-5 md:px-8 py-3 md:py-4">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-navy/70">
          <li className="flex items-center gap-2">
            <Link to="/" className="hover:text-navy font-semibold">
              Home
            </Link>
            <span aria-hidden="true" className="text-navy/40">
              ›
            </span>
          </li>
          {trail.slice(0, -1).map((crumb) => (
            <li key={crumb.path} className="flex items-center gap-2">
              <Link to={crumb.path} className="hover:text-navy font-semibold">
                {crumb.label}
              </Link>
              <span aria-hidden="true" className="text-navy/40">
                ›
              </span>
            </li>
          ))}
          <li className="text-navy font-semibold">{trail[trail.length - 1].label}</li>
        </ol>
      </div>
    </nav>
  );
};

export default AutoBreadcrumbs;
