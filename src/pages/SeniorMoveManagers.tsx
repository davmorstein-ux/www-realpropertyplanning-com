import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ericRovnerPhoto from "@/assets/providers/senior-movers-eric-rovner-washington.webp";
import hbmmLogo from "@/assets/providers/senior-movers-hbmovemanagement-logo-washington.webp";
import tinaBarilPhoto from "@/assets/providers/senior-movers-tina-baril-washington.webp";
import monarchLogo from "@/assets/providers/senior-movers-monarch-transitions-logo-washington.webp";
import iconSeniorMoves from "@/assets/icons/senior-movers-relocation-icon-washington.webp";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconPin3d from "@/assets/icons/real-estate-location-pin-3d-icon-washington.png";
import iconCall3d from "@/assets/icons/real-estate-phone-handset-3d-icon-washington.png";
import iconMail3d from "@/assets/icons/real-estate-email-envelope-3d-icon-washington.png";
import iconGlobe3d from "@/assets/icons/real-estate-website-globe-3d-icon-washington.png";
import { Icon3DFamily, Icon3DHome, Icon3DHeart } from "@/components/icons/Icon3D";

const realEstateSideItems = [
  {
    title: "Certified Home Valuation",
    text: "Before any decision is made, families need to know what the home is actually worth. As a Washington State Certified Residential Appraiser, we provide court-acceptable, lender-approved valuations that give families a reliable foundation for planning.",
  },
  {
    title: "Preparing the Home for Sale",
    text: "Many family homes need some level of preparation before going on the market. We provide practical, no-pressure guidance on what is worth doing and what can be skipped — with full awareness that the family is already managing a great deal.",
  },
  {
    title: "Coordinating the Timeline",
    text: "Timing the sale of the family home with the move to a new living situation requires careful coordination. Moving too fast can be traumatic. Moving too slow can create financial strain. We help families sequence these steps in a way that protects everyone.",
  },
  {
    title: "Connecting Families with Trusted Partners",
    text: "Real estate is just one piece of the puzzle. We maintain relationships with senior move managers, elder law attorneys, senior care coordinators, and other professionals who specialize in senior transitions — so families have the right people around them at every step.",
  },
];

const SeniorMoveManagers = () => (
  <>
    <SEOHead
      title="Senior Housing Transitions & Downsizing in Washington State | Real Property Planning"
      description="Helping families and seniors navigate the move from a longtime family home to senior or assisted living across Washington State. Compassionate real estate guidance, certified appraisals, and trusted local partners."
      canonical="https://www.realpropertyplanning.com/senior-move-managers"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Senior Move Managers", url: "https://www.realpropertyplanning.com/senior-move-managers" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img
                src={iconSeniorMoves}
                alt="Senior move management and downsizing coordination in Washington State"
                className="block w-full max-w-[15rem] h-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">Senior Transitions</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-4">
              Senior Move Managers
            </h1>
            <p
              className="text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-3"
              style={{
                maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
              }}
            >
              Practical, compassionate help for older adults and families preparing to downsize, organize, pack,
              relocate, or settle into a new home.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
                <img
                  src={iconPhone3d}
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 object-contain shrink-0"
                  loading="lazy"
                />
                Request a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 1: Helping Families */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-4">
              Helping Families Navigate One of Life's Hardest Transitions
            </h2>
            <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4">
              <p>
                When an aging parent can no longer safely or comfortably remain in the home they have lived in for
                decades, families are often thrust into an unfamiliar and emotionally charged situation — all while
                trying to care for someone they love. Questions come fast. Should we sell the house? What is it worth?
                How do we coordinate the move with finding a new place? How do we do all of this without overwhelming
                Mom or Dad?
              </p>
              <p>
                Real Property Planning exists to help families answer those questions with calm, experienced guidance —
                and to handle the real estate side of the transition so families can focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Who We Help */}
      <section className="py-10 md:py-14 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
              Who We Help
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="bg-background border border-border rounded-xl p-5 sm:p-6 shadow-sm text-center flex flex-col">
                <Icon3DFamily className="mx-auto mb-1.5" size={64} />
                <h3
                  className="font-serif font-semibold text-[#8B0000] text-center mb-1"
                  style={{
                    fontSize: "1rem",
                    minHeight: "3.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Families of Aging Parents
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Adult children helping a parent leave the home they have lived in for years — whether the move is to a
                  smaller home, an independent living community, or an assisted living or memory care facility.
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-5 sm:p-6 shadow-sm text-center flex flex-col">
                <Icon3DHome className="mx-auto mb-1.5" size={64} />
                <h3
                  className="font-serif font-semibold text-[#8B0000] text-center mb-1"
                  style={{
                    fontSize: "1rem",
                    minHeight: "3.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Seniors Downsizing
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Older adults who are ready to simplify, move closer to family, or transition into a community that
                  better fits their current lifestyle and needs.
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-5 sm:p-6 shadow-sm text-center flex flex-col">
                <Icon3DHeart className="mx-auto mb-1.5" size={64} />
                <h3 style={{ fontFamily: "Georgia, serif", fontWeight: "500", color: "#8B0000", textAlign: "center", marginBottom: "4px", fontSize: "13px", lineHeight: "1.3", minHeight: "3.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  Care Coordinators &amp; Social Workers
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Professionals who work with seniors and their families and need a trusted real estate partner who understands the pace, sensitivities, and unique demands of senior transitions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Real Estate Side */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-4">
              The Real Estate Side of a Senior Transition
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center mb-10">
              The family home is often the most valuable asset involved in a senior transition — and what happens to it
              can directly affect the family's ability to fund assisted living, distribute assets fairly, or simply move
              forward. Here is how Real Property Planning helps:
            </p>
            <div className="space-y-5">
              {realEstateSideItems.map((item) => (
                <div key={item.title} className="bg-secondary border border-border rounded-xl p-5 sm:p-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Independent to Assisted */}
      <section className="py-10 md:py-14 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              From Independent Living to Assisted Living
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Senior housing transitions do not always start from a family home. Sometimes a parent is already living in
              an independent living or retirement community when their needs change and a move to assisted living or
              memory care becomes necessary. When that transition involves owned real estate — whether a condo, a home
              being held, or another property — Real Property Planning can help families manage that piece of the puzzle
              quickly and with care.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: Serving All of WA */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Serving Families Throughout Washington State
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              From Seattle and the Eastside to Everett, Tacoma, Olympia, Bellingham, Spokane, and every community in
              between — Real Property Planning provides senior transition real estate guidance throughout Washington
              State. Whether the family home is in a major metro area or a small rural community, we are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Senior Move Managers */}
      <section className="py-10 md:py-14 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
              Featured Senior Move Manager
            </h2>
            <div className="bg-background border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
                <div className="shrink-0">
                  <img
                    src={ericRovnerPhoto}
                    alt="Eric Rovner — HB Move Management"
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"
                    loading="lazy"
                  />
                </div>
                <div className="w-full flex flex-col items-center sm:flex-1 sm:items-start">
                  <div className="w-full mt-1 text-center sm:text-left">
                    <a
                      href="https://www.hbmovemanagement.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <img
                        src={hbmmLogo}
                        alt="HB Move Management logo"
                        className="h-[240px] w-auto object-contain mx-auto sm:mx-0 sm:-translate-x-[70px] block"
                        loading="lazy"
                      />
                    </a>
                    <p className="text-foreground font-semibold text-base">Eric Rovner</p>
                    <p className="text-muted-foreground text-sm mb-0.5">Vice President of Marketing</p>
                    <p className="text-muted-foreground text-sm mb-1.5">HB Move Management · Hansen Bros. Moving</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      HB Move Management is a proud division of Hansen Bros. Moving &amp; Storage, one of the oldest and
                      most respected service providers in the Puget Sound region. Their services go far beyond
                      traditional moving — helping people prepare, survive the move, and get settled in their new home.
                    </p>
                    <div className="space-y-0.5 text-sm">
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <img
                          src={iconPin3d}
                          alt=""
                          aria-hidden="true"
                          className="w-6 h-6 object-contain shrink-0"
                          loading="lazy"
                        />
                        <span className="text-muted-foreground">10750 Aurora Ave N, Seattle, WA 98133</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <img
                          src={iconCall3d}
                          alt=""
                          aria-hidden="true"
                          className="w-6 h-6 object-contain shrink-0"
                          loading="lazy"
                        />
                        <a
                          href="tel:+12062574314"
                          className="text-accent hover:text-gold underline-offset-4 hover:underline"
                        >
                          (206) 257-4314
                        </a>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <img
                          src={iconMail3d}
                          alt=""
                          aria-hidden="true"
                          className="w-6 h-6 object-contain shrink-0"
                          loading="lazy"
                        />
                        <a
                          href="mailto:info@hbmovemanagement.com"
                          className="text-accent hover:text-gold underline-offset-4 hover:underline break-all"
                        >
                          info@hbmovemanagement.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <img
                          src={iconGlobe3d}
                          alt=""
                          aria-hidden="true"
                          className="w-6 h-6 object-contain shrink-0"
                          loading="lazy"
                        />
                        <a
                          href="https://www.hbmovemanagement.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-gold underline-offset-4 hover:underline"
                        >
                          www.hbmovemanagement.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6 mt-6">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
                <div className="shrink-0">
                  <img
                    src={tinaBarilPhoto}
                    alt="Tina Baril — Monarch Transitions"
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"
                    loading="lazy"
                  />
                </div>
                <div className="w-full flex flex-col items-center sm:flex-1 sm:items-start">
                  <div className="w-full mt-1 text-center sm:text-left">
                    <a
                      href="https://www.monarchtransitions.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <img
                        src={monarchLogo}
                        alt="Monarch Transitions logo"
                        className="h-[140px] w-auto object-contain mx-auto sm:mx-0 block mb-2"
                        loading="lazy"
                      />
                    </a>
                    <p className="text-foreground font-semibold text-base">Tina Baril</p>
                    <p className="text-muted-foreground text-sm mb-0.5">Owner</p>
                    <p className="text-muted-foreground text-sm mb-1.5">Monarch Transitions · Senior Move Managers</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Let us assist and guide you through a low-stress moving experience. At Monarch Transitions, we
                      specialize in assisting older adults and their families with the emotional and physical aspects of
                      moving and transition. Understanding the unique challenges seniors face, we offer expertise in
                      resources and approaches that save money, reduce stress and produce quality results.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Monarch Transitions is in its 16th year continuing the family business with the mother-son team of
                      Tina Baril and Avery Baril. They continue to serve the families and service partners of Pierce,
                      South King, Thurston and Kitsap counties.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Tina's passion for assisting older adults and their families has continued to grow and thrive.
                      While it is important to attend to the details and challenges of moving and transitioning loved
                      ones, it is equally essential to address any emotional and physical limitations that they and/or
                      their families may be suffering, which may be affecting the process. Tina works closely with
                      health care and senior service professionals to connect with families that face these challenges.
                    </p>
                    <div className="space-y-0.5 text-sm">
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <img
                          src={iconPin3d}
                          alt=""
                          aria-hidden="true"
                          className="w-6 h-6 object-contain shrink-0"
                          loading="lazy"
                        />
                        <span className="text-muted-foreground">P.O. Box 8246, Tacoma, WA 98419</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <img
                          src={iconCall3d}
                          alt=""
                          aria-hidden="true"
                          className="w-6 h-6 object-contain shrink-0"
                          loading="lazy"
                        />
                        <a
                          href="tel:+12063538617"
                          className="text-accent hover:text-gold underline-offset-4 hover:underline"
                        >
                          (206) 353-8617
                        </a>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <img
                          src={iconCall3d}
                          alt=""
                          aria-hidden="true"
                          className="w-6 h-6 object-contain shrink-0"
                          loading="lazy"
                        />
                        <a
                          href="tel:+12535073398"
                          className="text-accent hover:text-gold underline-offset-4 hover:underline"
                        >
                          (253) 507-3398
                        </a>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <img
                          src={iconMail3d}
                          alt=""
                          aria-hidden="true"
                          className="w-6 h-6 object-contain shrink-0"
                          loading="lazy"
                        />
                        <a
                          href="mailto:tina@monarchtransitions.com"
                          className="text-accent hover:text-gold underline-offset-4 hover:underline break-all"
                        >
                          tina@monarchtransitions.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <img
                          src={iconGlobe3d}
                          alt=""
                          aria-hidden="true"
                          className="w-6 h-6 object-contain shrink-0"
                          loading="lazy"
                        />
                        <a
                          href="https://www.monarchtransitions.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-gold underline-offset-4 hover:underline"
                        >
                          www.monarchtransitions.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More information link */}
      <section className="py-6 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              to="/senior-move-managers/learn-more"
              className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors"
            >
              More information about Senior Move Managers →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default SeniorMoveManagers;
