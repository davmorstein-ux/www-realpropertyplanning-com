import { Link } from "react-router-dom";
import HousingOptionDetail from "@/components/HousingOptionDetail";

/* Independent living is often confused with 55+ communities, which are housing
   with an age rule and no services; point to the guide (Oct 4, 2026). */
const FiftyFiveNote = (
  <section className="py-10 md:py-12 bg-background border-t border-border">
    <div className="container px-6 lg:px-8">
      <p className="max-w-3xl mx-auto text-lg leading-relaxed text-foreground">
        Not the same as a 55+ community: those are ordinary homes, condos, manufactured-home communities or apartments
        with an age rule, usually without meals or services.{" "}
        <Link to="/senior-transitions/55-plus-communities-washington" className="font-semibold text-primary underline underline-offset-4">
          55+ communities in Washington: what families should know
        </Link>
        .
      </p>
    </div>
  </section>
);

const IndependentLiving = () => (
  <>
    <HousingOptionDetail
      title="Independent Living"
      slug="independent-living"
      metaDescription="Independent Living communities in Washington State for active, self-sufficient seniors who want convenience, social connection, and freedom from home maintenance."
      whatItIs="Communities designed for active, largely self-sufficient seniors who want convenience, social connection, and freedom from home maintenance. No medical or personal care is provided on-site."
      bestFor="Seniors who are healthy and independent but want community, amenities, and a simpler lifestyle."
      typicalCosts="No Washington cost survey covers independent living. Costs work much like rent and vary widely: often a few thousand dollars a month, and more in the Seattle area, depending on location, apartment size, and amenities. This is an estimate. Usually private pay."
      whatsIncluded="Apartment or cottage-style residence, meals, housekeeping, transportation, activities, and common areas."
      calculatorCareId="independent-living"
      extra={FiftyFiveNote}
    />
  </>
);

export default IndependentLiving;
