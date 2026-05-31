import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import BackToProfessionals from "@/components/BackToProfessionals";
import ProviderBioModal from "@/components/ProviderBioModal";
import abbyPhoto from "@/assets/abby-durr-silver-age-senior-living-advisor.webp";
import silverAgeLogo from "@/assets/silver-age-senior-living-advisors-logo.webp";

const ABBY_BIO = `Silver Age Advisors is based in Issaquah, WA and helps individuals and families navigate senior housing and care options throughout the Puget Sound region and Wenatchee. We are a local team of experienced advisors who lead with compassion, education, and personalized guidance to help families make confident decisions regarding assisted living, memory care, adult family homes, and in-home care. We maintain a database of over 6,500 care homes and communities, carefully vetting each one before adding it to our referral network. We personally accompany families through tours, support them during the move-in and signing process, and continue advocating on their behalf after the transition to ensure providers follow through on their promises and that each move is a long-term success.

Abby Durr is the Owner and Founder of Silver Age Care Advisors. Since 2008, Abby and her team have guided older adults and their loved ones through decisions surrounding assisted living, memory care, adult family homes, and in-home care with compassion, integrity, and trusted local expertise. Her passion for eldercare was shaped through the personal experience of caring for both her grandfather and grandmother during seasons of significant need. Abby is known for her compassionate, relationship-driven approach, ethical guidance, and commitment to helping families make confident, informed decisions during life's most challenging transitions.`;

const SeniorLivingAdvisors = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Senior Living Advisors in Washington State | Real Property Planning"
      description="Featured Senior Living Advisors helping older adults and families evaluate assisted living, memory care, adult family homes, and in-home care across Washington State."
      canonical="https://realpropertyplanning.com/senior-living-advisors"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Senior Living Advisors", url: "https://realpropertyplanning.com/senior-living-advisors" },
      ]}
    />
    <Header />
    <main id="main-content">
      <HeroBandTitle as="h1">Senior Living Advisors</HeroBandTitle>

      {/* Featured advisors */}
      <section className="py-10 md:py-14 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <div className="interior-tile interior-tile--wide tile-white block h-full">
              <div className="tile-white__inner h-full">
                <div className="tile-white__face h-full">
                  <div className="flex h-full flex-col items-center text-center p-6">
                    <img
                      src={silverAgeLogo}
                      alt="Silver Age Senior Living Advisors logo"
                      className="h-[120px] md:h-[144px] w-auto object-contain mb-4"
                      loading="lazy"
                    />

                    {/* Headshot with bio modal */}
                    <div className="flex flex-col items-center mb-3">
                      <ProviderBioModal
                        name="Abby Durr"
                        title="Senior Living Advisor"
                        company="Silver Age Senior Living Advisors"
                        photo={abbyPhoto}
                        alt="Photo of Abby Durr, Senior Living Advisor at Silver Age Senior Living Advisors"
                        logo={silverAgeLogo}
                        logoAlt="Silver Age Senior Living Advisors logo"
                        phone="(425) 891-7569"
                        email="abby@silveragecare.com"
                        website="https://www.silveragecare.com"
                        address="1567 Highlands Dr NE, Suite 110, Issaquah, WA 98029"
                        bio={ABBY_BIO}
                        specialty="Assisted living, memory care, adult family homes, and in-home care throughout the Greater Seattle region and Wenatchee."
                      />
                      <p className="text-foreground font-semibold text-sm mt-2">Abby Durr</p>
                      <p className="text-muted-foreground text-xs">Senior Living Advisor</p>
                    </div>

                    <h2 className="font-serif text-lg md:text-xl text-navy font-semibold leading-snug mb-3">
                      Silver Age Senior Living Advisors
                    </h2>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                      Assisted living, memory care, adult family homes, and in-home care throughout the Greater Seattle
                      region and Wenatchee.
                    </p>

                    <div className="w-full space-y-1.5 text-sm mb-5">
                      <div className="flex items-center gap-2 justify-center">
                        <a
                          href="tel:+14258917569"
                          className="text-accent hover:text-gold underline-offset-4 hover:underline font-medium"
                        >
                          (425) 891-7569
                        </a>
                        <span className="text-muted-foreground">Main</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <a
                          href="tel:+12066697191"
                          className="text-accent hover:text-gold underline-offset-4 hover:underline font-medium"
                        >
                          (206) 669-7191
                        </a>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <a
                          href="mailto:info@silveragecare.com"
                          className="text-accent hover:text-gold underline-offset-4 hover:underline break-all"
                        >
                          info@silveragecare.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <a
                          href="mailto:abby@silveragecare.com"
                          className="text-accent hover:text-gold underline-offset-4 hover:underline break-all"
                        >
                          abby@silveragecare.com
                        </a>
                      </div>
                    </div>

                    <div className="mt-auto w-full pt-2">
                      <a
                        href="https://www.silveragecare.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gold-cta"
                      >
                        Learn More
                        <svg
                          viewBox="0 0 24 24"
                          width="14"
                          height="14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explanatory content */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-6">
              What Senior Living Advisors Do
            </h2>
            <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4">
              <p>
                A Senior Living Advisor is an experienced professional who helps older adults and their families
                evaluate and select the right housing and care option — whether that is assisted living, memory care, an
                adult family home, independent living, or in-home care support. Their guidance is especially valuable
                when families feel overwhelmed by the number of options available and the complexity of making the right
                choice for their loved one.
              </p>
              <p>
                Senior Living Advisors typically have deep knowledge of the local care landscape, including which
                communities and homes have strong reputations, availability, pricing structures, and the specific level
                of care they provide. Many maintain large databases of vetted options and personally accompany families
                on tours, helping them ask the right questions and compare their choices with clarity.
              </p>
              <p>
                Their role does not end at placement. Many Senior Living Advisors continue to advocate for their clients
                after the move-in, checking in to make sure the transition is going smoothly and connecting families
                with additional resources as needs evolve.
              </p>
              <p>
                Working with a Senior Living Advisor is typically provided at no cost to the family, as advisors are
                compensated by the communities and care providers in their network.
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

export default SeniorLivingAdvisors;
