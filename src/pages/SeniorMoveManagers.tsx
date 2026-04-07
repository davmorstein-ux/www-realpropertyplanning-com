import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Heart, ArrowRight, Phone, Mail, Globe, MapPin } from "lucide-react";
import { Button, GoldHighlight } from "@/components/ui/button";
import ericRovnerPhoto from "@/assets/providers/eric-rovner-hbmovemanagement.png";
import hbmmLogo from "@/assets/providers/hbmovemanagement-logo.png";

const SeniorMoveManagers = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Senior Move Managers",
    description:
      "Practical, compassionate help for older adults and families preparing to downsize, organize, pack, relocate, or settle into a new home.",
    author: {
      "@type": "Person",
      name: "David Stein",
    },
    publisher: {
      "@type": "Organization",
      name: "Real Property Planning",
    },
    url: "https://www.realpropertyplanning.com/senior-move-managers",
  };

  return (
    <>
      <SEOHead
        title="Senior Move Managers | Real Property Planning"
        description="Senior Move Managers help older adults and families with downsizing, sorting, packing, organizing, move coordination, unpacking, and settling into a new home throughout Washington State."
        canonical="https://www.realpropertyplanning.com/senior-move-managers"
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.realpropertyplanning.com" },
          { name: "Senior Move Managers", url: "https://www.realpropertyplanning.com/senior-move-managers" },
        ]}
      />
      <Header />
      <main>
        {/* HERO */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
                Senior Transitions
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold mb-6">
                Senior Move Managers
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Practical, compassionate help for older adults and families preparing to downsize, organize, pack, relocate, or settle into a new home.
              </p>
              <p className="text-primary-foreground/70 text-base leading-relaxed max-w-2xl mx-auto mb-10">
                Senior Move Managers help make later-life moves more manageable. They assist with the planning, organizing, sorting, packing, coordination, and setup that often come with moving from a longtime home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="gold" size="lg" className="text-base">
                    <GoldHighlight />
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Request a Consultation
                    </span>
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline3d" size="lg" className="text-base">
                    Ask About Senior Move Manager Resources
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS A SENIOR MOVE MANAGER */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                What Is a Senior Move Manager?
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                A Senior Move Manager is a professional who helps older adults and their families with the emotional and practical sides of moving, downsizing, and home transitions. Unlike a traditional moving company that primarily transports boxes, a Senior Move Manager plans and manages the entire process from start to finish.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Their services typically include:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Sorting and decluttering",
                  "Downsizing assistance",
                  "Packing and unpacking coordination",
                  "Move planning and scheduling",
                  "Space planning for the new home",
                  "Coordinating movers and service providers",
                  "Donation, consignment, estate sale, or disposal coordination",
                  "Helping the new home feel settled and functional",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-dark mt-0.5 shrink-0" />
                    <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                For many families, having someone manage these details means less stress, fewer decisions to make alone, and a smoother path to the next chapter.
              </p>
            </div>
          </div>
        </section>

        {/* HOW THEY DIFFER FROM TRADITIONAL MOVERS */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                How Senior Move Managers Differ From Traditional Movers
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background border border-border rounded-xl p-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                    Traditional Moving Company
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-[15px] leading-relaxed">
                    <li>• Primarily transports belongings from one location to another</li>
                    <li>• Focuses on the physical move itself</li>
                    <li>• Limited involvement before or after moving day</li>
                    <li>• Typically does not assist with sorting, downsizing, or organizing</li>
                  </ul>
                </div>
                <div className="bg-background border border-gold/30 rounded-xl p-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                    Senior Move Manager
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-[15px] leading-relaxed">
                    <li>• Plans and manages the full transition from start to finish</li>
                    <li>• Helps with sorting, downsizing, and emotional decision-making</li>
                    <li>• Coordinates movers, donations, estate sales, and disposal</li>
                    <li>• Especially helpful when decades of possessions or family coordination are involved</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mt-8">
                Senior Move Managers are especially valuable when a transition involves decades of accumulated possessions, emotional decisions about keepsakes and heirlooms, coordination among multiple family members, or a move into senior living.
              </p>
            </div>
          </div>
        </section>

        {/* WHO THIS CAN HELP */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Who This Can Help
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                Senior Move Managers support a wide range of people and situations:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Seniors preparing to downsize from a longtime home",
                  "Adult children helping aging parents with a transition",
                  "Out-of-state families coordinating a move from a distance",
                  "Executors, trustees, and attorneys managing estate transitions",
                  "Families preparing for a move to independent living, assisted living, memory care, or a smaller residence",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY FAMILIES HIRE SENIOR MOVE MANAGERS */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Why Families Hire Senior Move Managers
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                Later-life moves are different from typical relocations. They often involve decades of memories, complex logistics, and sensitive family dynamics. Here is why families turn to Senior Move Managers:
              </p>
              <div className="space-y-4">
                {[
                  { label: "Reduced stress", desc: "Someone experienced manages the details so the family can focus on what matters most." },
                  { label: "Better organization", desc: "A clear plan keeps the transition on track without last-minute chaos." },
                  { label: "Help making difficult decisions", desc: "Guidance on what to keep, donate, sell, or let go of — without judgment." },
                  { label: "Smoother transition", desc: "Coordinating every moving part means fewer surprises on move day." },
                  { label: "Detail coordination", desc: "From utilities to furniture placement, nothing falls through the cracks." },
                  { label: "Support for overwhelmed seniors", desc: "Patient, hands-on assistance for older adults who may feel anxious about the change." },
                  { label: "Practical help for distant families", desc: "Especially valuable when family members live far away or have limited time to be on-site." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-gold-dark mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground text-[15px]">{item.label}:</span>{" "}
                      <span className="text-muted-foreground text-[15px] leading-relaxed">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED SENIOR MOVE MANAGERS */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
                Featured Senior Move Manager
              </h2>

              <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
                  <div className="shrink-0">
                    <img
                      src={ericRovnerPhoto}
                      alt="Eric Rovner — Vice President of Marketing, HB Move Management"
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"
                    />
                  </div>

                  <div className="w-full flex flex-col items-center sm:flex-1 sm:items-start">
                    <div className="w-full mt-1 text-center sm:text-left">
                      <a href="https://www.hbmovemanagement.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                        <img
                          src={hbmmLogo}
                          alt="HB Move Management logo"
                          className="h-[240px] w-auto object-contain mx-auto sm:mx-0 block"
                        />
                      </a>
                      <p className="text-foreground font-semibold text-base">Eric Rovner</p>
                      <p className="text-muted-foreground text-sm mb-0.5">Vice President of Marketing</p>
                      <p className="text-muted-foreground text-sm mb-1.5">HB Move Management · Hansen Bros. Moving</p>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        HB Move Management is a proud division of Hansen Bros. Moving &amp; Storage, one of the oldest (founded in 1890) and most highly respected service providers in the Puget Sound region. Our services go far beyond those of traditional moving companies — although we do work closely with the movers. Our colleagues at Hansen Bros. focus on getting things from one place to another. We focus on helping people prepare for the move, survive the move, and get comfortably settled in their new home!
                      </p>

                      <div className="space-y-1.5 text-sm">
                        <div className="flex items-start gap-2 justify-center sm:justify-start">
                          <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">10750 Aurora Ave N, Seattle, WA 98133</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center sm:justify-start">
                          <Phone className="w-4 h-4 text-accent shrink-0" />
                          <a href="tel:+12062574314" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                            (206) 257-4314
                          </a>
                        </div>
                        <div className="flex items-center gap-2 justify-center sm:justify-start">
                          <Mail className="w-4 h-4 text-accent shrink-0" />
                          <a href="mailto:info@hbmovemanagement.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">
                            info@hbmovemanagement.com
                          </a>
                        </div>
                        <div className="flex items-center gap-2 justify-center sm:justify-start">
                          <Globe className="w-4 h-4 text-accent shrink-0" />
                          <a href="https://www.hbmovemanagement.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                            www.hbmovemanagement.com
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

        {/* NASMM / TRUST SECTION */}
        <section className="py-14 md:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
                Professional Standards and Associations
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Many Senior Move Managers belong to NASMM, the National Association of Senior & Specialty Move Managers. NASMM members follow a code of ethics and professional standards designed to protect older adults and their families during transitions.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                When choosing a Senior Move Manager, look for professionals who carry appropriate insurance, have experience working with older adults, and can provide references from past clients or professional partners.
              </p>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="py-20 md:py-28 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary-foreground font-semibold mb-5">
                Need Help Planning a Senior Move?
              </h2>
              <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                If you or a family member are preparing for a move, downsizing a longtime home, or coordinating a transition into a new living environment, I can help you identify practical next steps and connect you with the right local resources.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="text-base">
                  <GoldHighlight />
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Schedule a Conversation
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <DisclaimerSection />
      </main>
      <Footer />
    </>
  );
};

export default SeniorMoveManagers;
