import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ericRovnerPhoto from "@/assets/providers/senior-movers-eric-rovner-washington.webp";
import hbmmLogo from "@/assets/providers/senior-movers-hbmovemanagement-logo-washington.webp";
import tinaBarilPhoto from "@/assets/providers/senior-movers-tina-baril-washington.webp";
import monarchLogo from "@/assets/providers/senior-movers-monarch-transitions-logo-washington.webp";
import meriannPhoto from "@/assets/meriann-roberts-ginnys-girls-owner.webp";
import abigailPhoto from "@/assets/abigail-mckee-ginnys-girls-manager.webp";
import ginnysGirlsLogo from "@/assets/ginnys-girls-estate-services-logo-v3.webp";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-envelope-3d-icon-washington.webp";

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
                className={`interior-tile tile-white block h-full ${
                  p.contacts.length > 1 ? "interior-tile--wide" : ""
                }`}
              >

                <div className="tile-white__inner h-full">
                  <div className="tile-white__face h-full">
                    <div className="flex h-full flex-col items-center text-center p-6">
                      <img
                        src={p.logo}
                        alt={p.logoAlt}
                        className="h-20 md:h-24 w-auto object-contain mb-4"
                        loading="lazy"
                      />

                      <div className="flex justify-center gap-5 mb-3">
                        {p.contacts.map((c) => (
                          <div key={c.name} className="flex flex-col items-center">
                            <img
                              src={c.photo}
                              alt={c.alt}
                              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-border shadow-sm"
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
                            <img
                              src={iconPhone3d}
                              alt=""
                              aria-hidden="true"
                              className="w-5 h-5 object-contain shrink-0"
                              loading="lazy"
                            />
                            <a
                              href={ph.href}
                              className="text-accent hover:text-gold underline-offset-4 hover:underline font-medium"
                            >
                              {ph.label}
                            </a>
                          </div>
                        ))}
                        <div className="flex items-center gap-2 justify-center">
                          <img
                            src={iconEmail3d}
                            alt=""
                            aria-hidden="true"
                            className="w-5 h-5 object-contain shrink-0"
                            loading="lazy"
                          />
                          <a
                            href={`mailto:${p.email}`}
                            className="text-accent hover:text-gold underline-offset-4 hover:underline break-all"
                          >
                            {p.email}
                          </a>
                        </div>
                      </div>

                      <div className="mt-auto w-full pt-2">
                        <Button asChild variant="outline" className="h-11 px-5 rounded-lg">
                          <a
                            href={p.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Learn more about ${p.company} (opens in a new tab)`}
                          >
                            Learn More
                            <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                          </a>
                        </Button>
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

      <section className="py-10 bg-background">
        <div className="container px-6 lg:px-8 flex justify-center">
          <Button asChild variant="outline" size="lg" className="h-[52px] px-6 rounded-lg">
            <a href="https://realpropertyplanning.com/building-your-trusted-professional-team">
              <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
              Back to Professionals
            </a>
          </Button>
        </div>
      </section>

      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default SeniorMoveManagers;
