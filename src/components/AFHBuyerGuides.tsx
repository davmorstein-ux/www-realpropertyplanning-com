import { Link } from "react-router-dom";
import type { AFHListing } from "@/data/afhListings";
import { guidesForListing, GUIDES_FOR_BROWSING } from "@/data/afhBuyerGuides";

/**
 * "Before you buy" guide links for the AFH for-sale pages.
 *
 *   <AFHBuyerGuides listing={listing} />   one listing: guides chosen by what
 *                                          is being sold (see afhBuyerGuides.ts)
 *   <AFHBuyerGuides />                     index and city pages: the fixed set
 *
 * The list itself lives in src/data/afhBuyerGuides.ts because the build-time
 * prerender writes the same links into the static HTML crawlers read. Change
 * the guides there, not here.
 */
const AFHBuyerGuides = ({ listing }: { listing?: Pick<AFHListing, "listingType" | "afhStatus"> }) => {
  const set = listing ? guidesForListing(listing) : GUIDES_FOR_BROWSING;
  return (
    <div className="max-w-3xl">
      <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-3">From the AFH Club library</p>
      <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-navy leading-tight mb-3">{set.heading}</h2>
      <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed mb-5">{set.intro}</p>
      <ul className="list-none p-0 m-0 flex flex-col">
        {set.guides.map((g) => (
          <li key={g.href} className="py-4 border-t border-border last:border-b">
            <Link to={g.href} className="text-accent underline underline-offset-4 font-semibold text-[18px] md:text-[19px]">
              {g.title}
            </Link>
            <p className="text-foreground text-[17px] leading-relaxed mt-1 mb-0">{g.why}</p>
          </li>
        ))}
      </ul>
      <p className="text-[17px] md:text-[18px] mt-5 mb-0">
        <Link to="/afh-club/resources" className="text-accent underline underline-offset-4">
          All AFH Club guides
        </Link>
      </p>
    </div>
  );
};

export default AFHBuyerGuides;
