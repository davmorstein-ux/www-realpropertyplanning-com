import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import meriannPhoto from "@/assets/meriann-roberts-ginnys-girls-owner.webp";
import abigailPhoto from "@/assets/abigail-mckee-ginnys-girls-manager.webp";
import ginnysGirlsLogo from "@/assets/ginnys-girls-estate-services-logo-v3.webp";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-envelope-3d-icon-washington.webp";

type Liquidator = {
  company: string;
  website: string;
  logo: string;
  logoAlt: string;
  contacts: { name: string; role: string; photo: string; alt: string }[];
  specialty: string;
  phone: string;
  phoneHref: string;
  email: string;
};

const liquidators: Liquidator[] = [
  {
    company: "Ginny's Girls Estate Services",
    website: "https://www.ginnysestates.com",
    logo: ginnysGirlsLogo,
    logoAlt: "Ginny's Girls Estate Services logo",
    contacts: [
      { name: "Meriann Roberts", role: "Owner", photo: meriannPhoto, alt: "Meriann Roberts — Owner of Ginny's Girls Estate Services" },
      { name: "Abigail McKee", role: "Manager", photo: abigailPhoto, alt: "Abigail McKee — Manager at Ginny's Girls Estate Services" },
    ],
    specialty:
      "Estate sales, senior move management, residential clear outs, and personal property appraisals throughout North King and Snohomish Counties.",
    phone: "(206) 466-0759",
    phoneHref: "tel:+12064660759",
    email: "info@ginnysestates.com",
  },
];

const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

const EstateLiquidators = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Estate Liquidators | Real Property Planning"
      description="Featured Washington State estate liquidators helping families with estate sales, residential clear outs, and personal property liquidation."
      canonical="https://realpropertyplanning.com/estate-liquidators"
    />
    <BreadcrumbSchema items={[{ name: "Estate Liquidators", url: "/estate-liquidators" }]} />
    <Header />
    <main id="main-content">
      <HeroBandTitle>Estate Liquidators</HeroBandTitle>

      <section className="pt-8 md:pt-10 pb-4 bg-background">
        <div className="container px-6 lg:px-8">
          <p className="max-w-3xl mx-auto text-center text-muted-foreground text-base md:text-lg leading-relaxed">
            Trusted estate liquidation professionals helping families manage belongings, conduct estate sales, and clear properties during life's most significant transitions.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {liquidators.map((l) => (
              <a
                key={l.company}
                href={l.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${l.company} — Visit website (opens in a new tab)`}
                className={`interior-tile tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                  l.contacts.length > 1 ? "md:col-span-2" : ""
                }`}
              >

                <div className="tile-white__inner h-full">
                  <div className="tile-white__face h-full">
                    <div className="flex h-full flex-col items-center text-center p-6">
                      <img
                        src={l.logo}
                        alt={l.logoAlt}
                        className="h-20 md:h-24 w-auto object-contain mb-4"
                        loading="lazy"
                      />
                      <h2 className="font-serif text-xl md:text-2xl text-navy font-semibold leading-snug mb-3">
                        {l.company}
                      </h2>

                      <div className="flex justify-center gap-5 mb-3">
                        {l.contacts.map((c) => (
                          <div key={c.name} className="flex flex-col items-center">
                            <img
                              src={c.photo}
                              alt={c.alt}
                              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-border shadow-sm"
                              loading="lazy"
                            />
                            <p className="text-foreground font-semibold text-sm mt-2">{c.name}</p>
                            <p className="text-muted-foreground text-xs">{c.role}</p>
                          </div>
                        ))}
                      </div>

                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                        {l.specialty}
                      </p>

                      <div className="mt-auto w-full space-y-1.5 text-sm">
                        <div className="flex items-center gap-2 justify-center">
                          <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" loading="lazy" />
                          <a
                            href={l.phoneHref}
                            onClick={stopPropagation}
                            className="text-accent hover:text-gold underline-offset-4 hover:underline font-medium"
                          >
                            {l.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <img src={iconEmail3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" loading="lazy" />
                          <a
                            href={`mailto:${l.email}`}
                            onClick={stopPropagation}
                            className="text-accent hover:text-gold underline-offset-4 hover:underline break-all"
                          >
                            {l.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-5 text-foreground text-base md:text-lg leading-relaxed">
            <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-2">What Estate Liquidators Do</h2>
            <p>
              Estate liquidators help families manage, value, and sell the personal property and household contents of a home — most often during a senior transition, after a death, or as part of an estate settlement. Their work helps families move forward without the burden of sorting through decades of accumulated belongings on their own.
            </p>
            <p>
              A professional estate liquidator will typically assess the contents of a home, organize and price items, market the sale, conduct the event, and handle unsold items through donation, consignment, or disposal. Many also offer residential clear out services to leave the property empty and ready for the next step — whether that is listing for sale, transferring to an heir, or preparing for rental.
            </p>
            <p>
              What makes a qualified estate liquidator especially valuable is their knowledge of fair market value for antiques, collectibles, furniture, jewelry, and household goods — combined with the logistical experience to run a well-organized sale that maximizes return for the family.
            </p>
            <p>
              Many estate liquidators hold memberships in professional organizations such as the American Society of Estate Liquidators (ASEL) or carry certifications from the International Society of Appraisers (ISA), which reflect a commitment to ethical standards and professional practice.
            </p>
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

export default EstateLiquidators;
