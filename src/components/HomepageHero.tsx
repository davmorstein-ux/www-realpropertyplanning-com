import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-pnw-home.jpg";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import iconEmail3d from "@/assets/icons/icon-email-3d.png";

const HomepageHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Background image */}
      <img
        src={heroBg}
        alt="Peaceful Pacific Northwest craftsman home in a lush green neighborhood"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        width={1920}
        height={1080}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="container relative z-10 px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <h1 className="font-sans text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold leading-[1.15] text-white mb-6">
            We Help Families Through One of Life's Hardest Moments
          </h1>

          <p className="text-[1.375rem] leading-relaxed text-white/80 mb-10 max-w-2xl">
            Selling an inherited home. Moving a parent to assisted living. Navigating probate. We guide you — calmly, clearly, and with 20 years of experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="tel:2069003015">
              <button className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-lg bg-gold text-primary font-bold text-lg tracking-wide shadow-lg hover:brightness-110 transition-all min-w-[240px]">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" />
                Call Us: (206) 900-3015
              </button>
            </a>
            <Link to="/contact">
              <button className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-lg border-2 border-white/40 bg-white/10 text-white font-bold text-lg tracking-wide hover:bg-white/20 transition-all min-w-[240px]">
                <img src={iconEmail3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" />
                Send a Message
              </button>
            </Link>
          </div>

          <p className="text-white/60 text-base">
            Licensed Real Estate Broker &amp; Certified Residential Appraiser · Serving Western Washington
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
