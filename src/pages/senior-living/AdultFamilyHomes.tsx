import { Link } from "react-router-dom";
import HousingOptionDetail from "@/components/HousingOptionDetail";

/* Family guides on adult family homes (moved here from AFH Club, which is for
   home operators, Oct 4, 2026). Shown under the "Browse" button so a family
   who has just read what an adult family home is can go deeper. */
const GUIDES = [
  {
    href: "/senior-living/what-is-an-adult-family-home",
    title: "What Is an Adult Family Home?",
    role: "The definition, how it differs from assisted living, and what the same kind of home is called in other states.",
  },
  {
    href: "/senior-living/choosing-an-adult-family-home",
    title: "How to Choose an Adult Family Home",
    role: "A tour checklist: what to ask, what to look for, and how to read a home's DSHS record.",
  },
  {
    href: "/adult-family-home-costs",
    title: "What an Adult Family Home Costs",
    role: "Typical private-pay ranges by city and county, and what Medicaid pays.",
  },
];

const FamilyGuides = (
  <section className="py-10 md:py-14 bg-background border-t border-border" aria-labelledby="afh-family-guides">
    <div className="container px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 id="afh-family-guides" className="text-2xl md:text-3xl font-bold text-foreground mb-5">
          Guides for families
        </h2>
        <ul className="space-y-4">
          {GUIDES.map((g) => (
            <li key={g.href} className="text-lg leading-relaxed text-foreground">
              <Link to={g.href} className="font-semibold text-primary underline underline-offset-4">
                {g.title}
              </Link>
              : {g.role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const AdultFamilyHomes = () => (
  <HousingOptionDetail
    title="Adult Family Homes"
    slug="adult-family-homes"
    metaDescription="Adult Family Homes in Washington State — licensed residential homes serving 2–6 residents (up to 8 with DSHS approval) with personal care in a home-like setting."
    whatItIs="A residential home licensed by DSHS — serving 2 to 6 residents, or up to 8 with DSHS approval — that provides personal care in a home-like setting. Most common in King, Snohomish, Pierce, Spokane, and Clark Counties."
    bestFor="Seniors who prefer a smaller, more intimate setting with more individualized attention than a larger facility can offer."
    typicalCosts="Each home sets its own private-pay rate, and no survey publishes them. For Medicaid residents, DSHS pays about $4,030–$8,495 a month (rates effective July 1, 2026), depending on county and care level. The cost lookup further down this page shows typical private-pay ranges by city and county. Often more affordable than larger assisted living communities for comparable care levels."
    whatsIncluded="Room and board, personal care, meals, medication management, and 24-hour supervision."
    calculatorCareId="adult-family-home"
    listingsHref="/afh-club/homes"
    listingsLabel="Browse Adult Family Homes in Washington"
    listingsIntro="Ready to see real homes? Browse licensed adult family homes by city and county."
    extra={FamilyGuides}
  />
);

export default AdultFamilyHomes;
