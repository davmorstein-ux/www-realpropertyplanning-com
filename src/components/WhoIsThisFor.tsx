import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import familiesIcon from "@/assets/who-is-this-for-families-icon.png";
import professionalsIcon from "@/assets/who-is-this-for-professionals-icon.png";

const WhoIsThisFor = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-cream">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary font-semibold">
            Who Is This For?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Tile 1: Families & Individuals */}
          <div className="card-3d p-8 md:p-10 lg:p-12 flex flex-col items-center text-center bg-white">
            <div className="mb-6 flex justify-center">
              <img
                src={familiesIcon}
                alt=""
                aria-hidden="true"
                width={1024}
                height={1024}
                className="w-36 h-36 md:w-40 md:h-40 object-contain"
                style={{ background: "transparent" }}
                loading="lazy"
              />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground font-bold mb-4">
              Families &amp; Individuals
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-sm">
              Help with senior transitions, housing, and next steps
            </p>
            <Link to="/senior-transitions" className="mt-auto">
              <Button variant="gold" size="lg" className="px-8 py-4 h-auto rounded-lg text-base md:text-lg !text-white">
                Start Here
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Tile 2: Professionals */}
          <div className="card-3d p-8 md:p-10 lg:p-12 flex flex-col items-center text-center bg-white">
            <div className="mb-6 flex justify-center">
              <img
                src={professionalsIcon}
                alt=""
                aria-hidden="true"
                width={1024}
                height={1024}
                className="w-36 h-36 md:w-40 md:h-40 object-contain"
                style={{ background: "transparent" }}
                loading="lazy"
              />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground font-bold mb-4">
              Professionals
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-sm">
              Connect, collaborate, and support your clients
            </p>
            <Link to="/join-the-network" className="mt-auto" style={{ color: "#ffffff" }}>
              <Button
                variant="navy3d"
                size="lg"
                className="px-8 py-4 h-auto rounded-lg text-base md:text-lg !text-white [&_*]:!text-white"
                style={{ color: "#ffffff" }}
              >
                <span className="!text-white" style={{ color: "#ffffff" }}>Explore Network</span>
                <ChevronRight className="w-5 h-5 ml-1 !text-white" style={{ color: "#ffffff" }} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
