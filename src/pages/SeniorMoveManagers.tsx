import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import BackToProfessionals from "@/components/BackToProfessionals";
import ericRovnerPhoto from "@/assets/providers/senior-movers-eric-rovner-washington.webp";
import hbmmLogo from "@/assets/providers/senior-movers-hbmovemanagement-logo-washington.webp";
import tinaBarilPhoto from "@/assets/providers/senior-movers-tina-baril-washington.webp";
import monarchLogo from "@/assets/providers/senior-movers-monarch-transitions-logo-washington.webp";
import meriannPhoto from "@/assets/meriann-roberts-ginnys-girls-owner.webp";
import abigailPhoto from "@/assets/abigail-mckee-ginnys-girls-manager.webp";
import ginnysGirlsLogo from "@/assets/ginnys-girls-estate-services-logo-v3.webp";
import ericPhoto from "@/assets/senior-movers-eric-rovner-washington.webp";
import hbLogo from "@/assets/senior-movers-hbmovemanagement-logo-washington.webp";

type Contact = { name: string; role?: string; photo: string; alt: string };

type Provider = {
  company: string;
  website: string;
  logo: string;
  logoAlt: string;
  contacts: Contact[];
  specialty: string;
  phones: { label: string; href: string }[];
  email: string;
};

const providers: Provider[] = [
  {
    company: "HB Move Management · Hansen Bros. Moving",
    website: "https://www.hbmovemanagement.com",
    logo: hbmmLogo,
    logoAlt: "HB Move Management logo",
    contacts: [
      {
        name: "Eric Rovner",
        role: "Vice President of Marketing",
        photo: ericRovnerPhoto,
        alt: "Eric Rovner — Vice President of Marketing, HB Move Management",
      },
    ],
    specialty:
      "Senior move management including preparation, packing, moving, and resettling throughout the Puget Sound region.",
    phones: [{ label: "(206) 257-4314", href: "tel:+12062574314" }],
    email: "info@hbmovemanagement.com",
  },
  {
    company: "Monarch Transitions · Senior Move Managers",
    website: "https://www.monarchtransitions.com",
    logo: monarchLogo,
    logoAlt: "Monarch Transitions logo",
    contacts: [
      {
        name: "Tina Baril",
        role: "Owner",
        photo: tinaBarilPhoto,
        alt: "Tina Baril — Owner, Monarch Transitions",
      },
    ],
    specialty:
      "Senior move management serving Pierce, South King, Thurston and Kitsap counties.",
    phones: [
      { label: "(206) 353-8617", href: "tel:+12063538617" },
      { label: "(253) 507-3398", href: "tel:+12535073398" },
    ],
    email: "tina@monarchtransitions.com",
  },
  {
    company: "Ginny's Girls Estate Services",
    website: "https://www.ginnysestates.com",
    logo: ginnysGirlsLogo,
    logoAlt: "Ginny's Girls Estate Services logo",
    contacts: [
      {
        name: "Meriann Roberts",
        role: "Owner",
        photo: meriannPhoto,
        alt: "Meriann Roberts — Owner of Ginny's Girls Estate Services",
      },
      {
        name: "Abigail McKee",
        role: "Manager",
        photo: abigailPhoto,
        alt: "Abigail McKee — Manager at Ginny's Girls Estate Services",
      },
    ],
    specialty:
      "Senior move management, estate sales, residential clear outs, and personal property appraisals throughout North King and Snohomish Counties.",
    phones: [{ label: "(206) 466-0759", href: "tel:+12064660759" }],
    email: "info@ginnysestates.com",
  },
];

const ERIC_BIO = `Eric Rovner brings decades of moving industry experience to HB Move Management, a specialized senior move management division of Hansen Bros. Moving & Storage — one of the Pacific Northwest's most trusted names in relocation. Eric and his team provide comprehensive, compassionate support for older adults transitioning out of long-time homes, including sorting and downsizing, packing, coordinating the move, and resettling into a new space. Whether a senior is moving to a smaller home, an assisted living community, or closer to family, HB Move Management handles every detail so families don't have to.`;

const SeniorMoveManagers = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Senior Move Managers in Washington State | Real Property Planning"
      description="Featured Senior Move Managers helping older adults and families plan, pack, and resettle during life's most significant transitions across Washington State."
      canonical="https://realpropertyplanning.com/senior-move-managers"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Senior Move Managers", url: "https://realpropertyplanning.com/senior-move-managers" },
      ]}
    />
    <Header />
    <main id="main-content">
      <HeroBandTitle as="h1">Senior Move Managers</HeroBandTitle>

      {/* Featured providers */}
      <section className="py-10 md:py-14 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {providers.map((p) => (
              <div
                key={p.company}
                className="interior-tile interior-tile--wide tile-white block h-full"
              >

                <div className="tile-white__inner h-full">
                  <div className="tile-white__face h-full">
                    <div className="flex h-full flex-col items-center text-center p-6">
                      <img
                        src={p.logo}
                        alt={p.logoAlt}
                        className="h-[120px] md:h-[144px] w-auto object-contain mb-4"
                        loading="lazy"
                      />

                      <div className="flex justify-center gap-5 mb-3">
                        {p.contacts.map((c) => (
                          <div key={c.name} className="flex flex-col items-center">
                            <img
                              src={c.photo}
                              alt={c.alt}
                              className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full object-cover border-2 border-border shadow-sm"
                              loading="lazy"
                            />
                            <p className="text-foreground font-semibold text-sm mt-2">{c.name}</p>
                            {c.role && (
                              <p className="text-muted-foreground text-xs">{c.role}</p>
                            )}
                          </div>
                        ))}
                      </div>

                      <h2 className="font-serif text-lg md:text-xl text-navy font-semibold leading-snug mb-3">
                        {p.company}
                      </h2>

                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                        {p.specialty}
                      </p>

                      <div className="w-full space-y-1.5 text-sm mb-5">
                        {p.phones.map((ph) => (
                          <div key={ph.href} className="flex items-center gap-2 justify-center">
                            <a
                              href={ph.href}
                              className="text-accent hover:text-gold underline-offset-4 hover:underline font-medium"
                            >
                              {ph.label}
                            </a>
                          </div>
                        ))}
                        <div className="flex items-center gap-2 justify-center">
                          <a
                            href={`mailto:${p.email}`}
                            className="text-accent hover:text-gold underline-offset-4 hover:underline break-all"
                          >
                            {p.email}
                          </a>
                        </div>
                      </div>

                      <div className="mt-auto w-full pt-2">
                        <a
                          href={p.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Learn more about ${p.company} (opens in a new tab)`}
                          className="gold-cta"
                        >
                          Learn More
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explanatory content */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-6">
              What Senior Move Managers Do
            </h2>
            <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4">
              <p>
                Senior Move Managers are specialists who help older adults and their families plan and manage
                the physical and emotional process of moving from a longtime home. Whether the destination is
                an assisted living community, a family member's home, or a smaller independent residence, a
                Senior Move Manager brings both practical expertise and compassionate support to one of life's
                most significant transitions.
              </p>
              <p>
                Their services typically include space planning, sorting and organizing belongings, coordinating
                donation and disposal, packing, overseeing the move itself, and unpacking and resettling in the
                new space. Many also coordinate with estate sale companies, cleanout crews, and other service
                providers to handle everything that remains after the move.
              </p>
              <p>
                What sets a Senior Move Manager apart is their understanding of the emotional weight that comes
                with leaving a home filled with memories. They work at the client's pace, with patience and
                sensitivity, helping families make decisions that feel manageable rather than overwhelming.
              </p>
              <p>
                Many Senior Move Managers are members of the National Association of Senior Move Managers
                (NASMM), whose members adhere to a professional code of ethics and standards of practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BackToProfessionals />

      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default SeniorMoveManagers;
