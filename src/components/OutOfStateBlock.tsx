import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const points = [
  "Boots-on-the-ground support — David handles property visits, vendor coordination, and inspections so you don't need to travel.",
  "Regular updates with photos and clear communication — stay informed from anywhere.",
  "Coordination with local attorneys, cleanout crews, contractors, and other professionals.",
  "Honest, defensible pricing so you can make confident decisions from a distance.",
  "Experience working with executors, trustees, and family members across the country.",
];

const OutOfStateBlock = () => (
  <section className="py-16 lg:py-20 bg-warm-bg">
    <div className="container px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base text-center">
          Out-of-State Support
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-5 text-center">
          Managing Washington Property From a Distance?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
          Many executors, trustees, and family members live outside Washington when they inherit or need to sell a property here. David serves as your trusted local partner — managing the process so you don't have to be physically present.
        </p>

        <ul className="space-y-4 mb-10">
          {points.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <GoldCheck3D size={20} className="mt-0.5" />
              <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-8 py-4 h-auto">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
              Schedule a Call
            </Button>
          </Link>
          <p className="text-muted-foreground text-sm mt-3">
            Available by phone, email, or video call — wherever you are.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OutOfStateBlock;
