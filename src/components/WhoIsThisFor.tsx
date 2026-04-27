import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import familiesIcon from "@/assets/who-is-this-for-families-icon.png";
import professionalsIcon from "@/assets/who-is-this-for-professionals-icon.png";

const WhoIsThisFor = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-cream">
      <style>{`.explore-btn, .explore-btn * { color: #ffffff !important; }`}</style>
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary font-semibold">
            Who Is This For?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {/* Tile 1: Families & Individuals */}
          <div className="card-3d p-5 md:p-6 flex flex-col items-center text-center bg-white">
            <div className="mb-3 flex justify-center">
              <img
                src={familiesIcon}
                alt=""
                aria-hidden="true"
                width={1024}
                height={1024}
                className="w-20 h-20 object-contain"
                style={{ background: "transparent" }}
                loading="lazy"
              />
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground font-bold mb-2">
              Families &amp; Individuals
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-5 max-w-sm">
              Help with senior transitions, housing, and next steps
            </p>
            <Link to="/senior-transitions" className="mt-auto">
              <Button variant="gold" size="sm" className="px-5 py-2 h-auto rounded-lg text-sm md:text-base !text-white">
                Start Here
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Tile 2: Professionals */}
          <div className="card-3d p-5 md:p-6 flex flex-col items-center text-center bg-white">
            <div className="mb-3 flex justify-center">
              <img
                src={professionalsIcon}
                alt=""
                aria-hidden="true"
                width={1024}
                height={1024}
                className="w-20 h-20 object-contain"
                style={{ background: "transparent" }}
                loading="lazy"
              />
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground font-bold mb-2">
              Professionals
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-5 max-w-sm">
              Connect, collaborate, and support your clients
            </p>
            <Link
              to="/join-the-network"
              className="explore-btn mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2 min-h-[36px] font-bold tracking-[0.02em] text-sm md:text-base no-underline"
              style={{ backgroundColor: "#1e3a5f", color: "#ffffff" }}
            >
              <span style={{ color: "#ffffff" }}>Explore Network</span>
              <span aria-hidden="true" style={{ color: "#ffffff" }}>›</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
