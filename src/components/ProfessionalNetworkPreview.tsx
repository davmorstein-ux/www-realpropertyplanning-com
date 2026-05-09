import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfessionalNetworkCard from "./ProfessionalNetworkCard";
import { featuredHomepageTiles } from "./professional-network-tiles-data";

/**
 * Calm, curated 6-tile preview of the Trusted Professional Network.
 * Lives on the homepage; links to the full ~30-tile grid on
 * /building-your-trusted-professional-team.
 */
const ProfessionalNetworkPreview = () => {
  return (
    <section className="py-12 lg:py-16 bg-secondary">
      <div className="container px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-[26px] md:text-[34px] lg:text-[38px] font-semibold text-navy leading-tight mb-3">
            A Trusted Professional Network
          </h2>
          <p className="text-foreground text-lg leading-relaxed">
            You don't have to assemble the team alone — these are the kinds of professionals who often work together on estate and senior transitions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 mb-10">
          {featuredHomepageTiles.map((tile) => (
            <ProfessionalNetworkCard key={tile.href} tile={tile} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/building-your-trusted-professional-team">
            <Button variant="gold" size="lg" className="px-8 py-4 h-auto rounded-lg text-base">
              Explore the Full Professional Network
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalNetworkPreview;
