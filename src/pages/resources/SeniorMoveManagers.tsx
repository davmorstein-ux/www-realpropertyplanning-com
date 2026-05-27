import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToProfessionalsButton from "@/components/BackToProfessionalsButton";
import HeroBandTitle from "@/components/HeroBandTitle";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import GinnysGirlsCard from "@/components/GinnysGirlsCard";
import heroIcon from "@/assets/icons/senior-move-managers-hero-washington.webp";
import ericRovnerPhoto from "@/assets/providers/senior-movers-eric-rovner-washington.webp";
import tinaBarilPhoto from "@/assets/providers/senior-movers-tina-baril-washington.webp";
import meriannRobertsPhoto from "@/assets/meriann-roberts-ginnys-girls-owner.webp";
import hbLogo from "@/assets/providers/senior-movers-hbmovemanagement-logo-washington.webp";
import monarchLogo from "@/assets/providers/senior-movers-monarch-transitions-logo-washington.webp";
import ginnysLogo from "@/assets/ginnys-girls-estate-services-logo.webp";

const featuredMovers = [
  {
    name: "Eric Rovner",
    title: "Vice President of Marketing",
    company: "HB Move Management · Hansen Bros. Moving",
    photo: ericRovnerPhoto,
    alt: "Photo of Eric Rovner",
    href: "https://www.hbmovemanagement.com",
    logo: hbLogo,
    logoAlt: "HB Move Management logo",
    external: true,
  },
  {
    name: "Tina Baril",
    title: "Owner",
    company: "Monarch Transitions · Senior Move Managers",
    photo: tinaBarilPhoto,
    alt: "Photo of Tina Baril",
    href: "https://www.monarchtransitions.com",
    logo: monarchLogo,
    logoAlt: "Monarch Transitions logo",
    external: true,
  },
  {
    name: "Meriann Roberts",
    title: "Owner",
    company: "Ginny's Girls Estate Services",
    photo: meriannRobertsPhoto,
    alt: "Photo of Meriann Roberts",
    href: "https://www.ginnysestates.com",
    logo: ginnysLogo,
    logoAlt: "Ginny's Girls Estate Services logo",
    external: true,
  },
];


const SeniorMoveManagers = () => (
  <>
    <SEOHead
      title="Senior Move Managers | Resources | Real Property Planning"
      description="Senior move management professionals throughout Washington State who coordinate and manage the physical and emotional aspects of relocating seniors."
      canonical="https://realpropertyplanning.com/resources/senior-move-managers"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Resources", url: "https://realpropertyplanning.com/resources" },
        { name: "Senior Move Managers", url: "https://realpropertyplanning.com/resources/senior-move-managers" },
      ]}
    />
    <Header />
    <main id="main-content">
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img src={heroIcon} alt="" aria-hidden="true" className="block w-full max-w-[15rem] h-auto object-contain" loading="lazy" />
            </div>

            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-base">Resources</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-4">Senior Move Managers</h1>
          </div>
        </div>
      </section>

      {/* Featured tiles — immediately below hero band */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {featuredMovers.map((m) => (
              <a
                key={m.name}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name}, ${m.title} at ${m.company} — Learn more`}
                className="interior-tile tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <div className="tile-white__inner h-full">
                  <div className="tile-white__face h-full">
                    <div className="flex h-full flex-col items-center text-center p-6">
                      <img
                        src={m.photo}
                        alt={m.alt}
                        className="w-28 h-28 rounded-full object-cover border-2 border-border shadow-sm mb-4"
                        loading="lazy"
                      />
                      <h3 className="font-serif text-xl text-navy font-semibold leading-snug mb-1">
                        {m.name}
                      </h3>
                      <p className="text-foreground text-sm mb-1">{m.title}</p>
                      <p className="text-foreground text-sm font-semibold mb-4">{m.company}</p>
                      {m.logo && (
                        <img
                          src={m.logo}
                          alt={m.logoAlt || `${m.company} logo`}
                          className="h-12 w-auto max-w-[180px] object-contain mb-5"
                          loading="lazy"
                        />
                      )}

                      <span className="gold-cta mt-auto">
                        Learn More
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Explanatory content — below tiles */}
      <section className="pb-12 md:pb-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              What Senior Move Managers Do
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Senior move managers coordinate and manage the physical and emotional aspects of relocating seniors — whether moving to a smaller home, an assisted living community, or closer to family. They handle sorting, packing, floor-plan design, unpacking, and settling in, so families don't have to manage every detail during an already stressful time.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Real Property Planning works with senior move managers regularly as part of <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">senior transition</Link> situations. When a home needs to be sold alongside a move, Real Property Planning coordinates with the move manager to align timelines, property preparation, and the sale process.
            </p>
          </div>
        </div>
      </section>

      <GinnysGirlsCard />

      <section className="py-8 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground/60 text-[15px] leading-relaxed italic">
                These professionals are listed as informational resources for visitors navigating senior transitions and estate property matters. Real Property Planning does not receive compensation for these listings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <RelatedServices currentPath="/resources/senior-move-managers" />
      <BackToProfessionalsButton />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default SeniorMoveManagers;
