import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

const points = [
  "Our team handles property visits, vendor coordination, and inspections in person — so you don't have to fly back and forth.",
  "You'll get regular updates with photos and clear communication. No guessing about what's happening.",
  "He coordinates directly with local attorneys, cleanout crews, contractors, and other professionals on your behalf.",
  "Pricing is honest and defensible, so you can make confident decisions even from 2,000 miles away.",
  "Our team regularly works with executors, trustees, and family members who are managing things from out of state — it's one of his most common situations.",
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
          This is one of the situations our team sees most often: someone inherits a Washington property but lives in another state. The logistics feel impossible — you can't be there to check on the house, manage vendors, or oversee the sale. Our team steps in as your local point of contact and handles the details on the ground so you don't have to fly back and forth.
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
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
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
