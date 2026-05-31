import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import BackToProfessionals from "@/components/BackToProfessionals";
import ProviderBioModal from "@/components/ProviderBioModal";
import meriannPhoto from "@/assets/meriann-roberts-ginnys-girls-owner.webp";
import abigailPhoto from "@/assets/abigail-mckee-ginnys-girls-manager.webp";
import ginnysGirlsLogo from "@/assets/ginnys-girls-estate-services-logo-v3.webp";

const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

const GINNYS_BIO = `Ginny's is a family-owned senior move management and estate services company based in Edmonds, Washington, founded to help families in North King and Snohomish counties navigate life transitions with dignity and care. We specialize in senior move management, estate sales, residential clear-outs, and personal property appraisals — providing professional, compassionate support during times of change. Certified by NASMM (National Association of Senior Move Managers) and ISA (International Society of Appraisers), our team offers comprehensive services including space planning, sorting, packing, move oversight, unpacking, resettling, estate liquidation, full-home clear-outs, and personal property valuation. Whether you're downsizing, managing an estate after a move or death, or preparing a home for sale, Ginny's reduces stress and creates a smoother path forward for older adults and their families.`;

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

      <section className="py-8 md:py-12 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Ginny's Girls tile */}
            <a
              href="https://www.ginnysestates.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ginny's Girls Estate Services — Visit website"
              className="interior-tile interior-tile--wide tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <div className="tile-white__inner h-full">
                <div className="tile-white__face h-full">
                  <div className="flex h-full flex-col items-center text-center p-6">
                    <img
                      src={ginnysGirlsLogo}
                      alt="Ginny's Girls Estate Services logo"
                      className="h-20 md:h-24 w-auto object-contain mb-4"
                      loading="lazy"
                    />
                    <h2 className="font-serif text-xl md:text-2xl text-navy font-semibold leading-snug mb-3">
                      Ginny's Girls Estate Services
                    </h2>

                    {/* Headshots with bio modals */}
                    <div className="flex justify-center gap-5 mb-3" onClick={stopPropagation}>
                      <div className="flex flex-col items-center">
                        <ProviderBioModal
                          name="Meriann Roberts"
                          title="Owner"
                          company="Ginny's Girls Estate Services"
                          photo={meriannPhoto}
                          alt="Meriann Roberts — Owner of Ginny's Girls Estate Services"
                          logo={ginnysGirlsLogo}
                          logoAlt="Ginny's Girls Estate Services logo"
                          phone="(206) 466-0759"
                          email="info@ginnysestates.com"
                          website="https://www.ginnysestates.com"
                          bio={GINNYS_BIO}
                          specialty="Estate sales, senior move management, residential clear-outs, and ISA-certified personal property appraisals throughout North King and Snohomish Counties."
                        />
                        <p className="text-foreground font-semibold text-sm mt-2">Meriann Roberts</p>
                        <p className="text-muted-foreground text-xs">Owner</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <ProviderBioModal
                          name="Abigail McKee"
                          title="Manager"
                          company="Ginny's Girls Estate Services"
                          photo={abigailPhoto}
                          alt="Abigail McKee — Manager at Ginny's Girls Estate Services"
                          logo={ginnysGirlsLogo}
                          logoAlt="Ginny's Girls Estate Services logo"
                          phone="(206) 466-0759"
                          email="info@ginnysestates.com"
                          website="https://www.ginnysestates.com"
                          bio={GINNYS_BIO}
                          specialty="Estate sales, senior move management, residential clear-outs, and ISA-certified personal property appraisals throughout North King and Snohomish Counties."
                        />
                        <p className="text-foreground font-semibold text-sm mt-2">Abigail McKee</p>
                        <p className="text-muted-foreground text-xs">Manager</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                      Estate sales, senior move management, residential clear outs, and personal property appraisals
                      throughout North King and Snohomish Counties.
                    </p>

                    <div className="mt-auto w-full space-y-1.5 text-sm">
                      <div className="flex items-center gap-2 justify-center">
                        <a
                          href="tel:+12064660759"
                          onClick={stopPropagation}
                          className="text-accent hover:text-gold underline-offset-4 hover:underline font-medium"
                        >
                          (206) 466-0759
                        </a>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <a
                          href="mailto:info@ginnysestates.com"
                          onClick={stopPropagation}
                          className="text-accent hover:text-gold underline-offset-4 hover:underline break-all"
                        >
                          info@ginnysestates.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-5 text-foreground text-base md:text-lg leading-relaxed">
            <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-2">What Estate Liquidators Do</h2>
            <p>
              Estate liquidators help families manage, value, and sell the personal property and household contents of a
              home — most often during a senior transition, after a death, or as part of an estate settlement. Their
              work helps families move forward without the burden of sorting through decades of accumulated belongings
              on their own.
            </p>
            <p>
              A professional estate liquidator will typically assess the contents of a home, organize and price items,
              market the sale, conduct the event, and handle unsold items through donation, consignment, or disposal.
              Many also offer residential clear out services to leave the property empty and ready for the next step —
              whether that is listing for sale, transferring to an heir, or preparing for rental.
            </p>
            <p>
              What makes a qualified estate liquidator especially valuable is their knowledge of fair market value for
              antiques, collectibles, furniture, jewelry, and household goods — combined with the logistical experience
              to run a well-organized sale that maximizes return for the family.
            </p>
            <p>
              Many estate liquidators hold memberships in professional organizations such as the American Society of
              Estate Liquidators (ASEL) or carry certifications from the International Society of Appraisers (ISA),
              which reflect a commitment to ethical standards and professional practice.
            </p>
          </div>
        </div>
      </section>

      <BackToProfessionals />
      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default EstateLiquidators;
