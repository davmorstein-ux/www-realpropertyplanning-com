import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import abbyPhoto from "@/assets/abby-durr-silver-age-senior-living-advisor.webp";
import silverAgeLogo from "@/assets/silver-age-senior-living-advisors-logo.webp";

type Advisor = {
  name: string;
  title: string;
  company: string;
  photo: string;
  photoAlt: string;
  logo: string;
  logoAlt: string;
  specialty: string;
  phones: { label: string; href: string; note?: string }[];
  emails: string[];
  website: string;
};

const advisors: Advisor[] = [
  {
    name: "Abby Durr",
    title: "Senior Living Advisor",
    company: "Silver Age Senior Living Advisors",
    photo: abbyPhoto,
    photoAlt: "Photo of Abby Durr, Senior Living Advisor at Silver Age Senior Living Advisors",
    logo: silverAgeLogo,
    logoAlt: "Silver Age Senior Living Advisors logo",
    specialty:
      "Assisted living, memory care, adult family homes, and in-home care throughout the Greater Seattle region and Wenatchee.",
    phones: [
      { label: "(425) 891-7569", href: "tel:+14258917569", note: "Main" },
      { label: "(206) 669-7191", href: "tel:+12066697191" },
    ],
    emails: ["info@silveragecare.com", "abby@silveragecare.com"],
    website: "https://www.silveragecare.com",
  },
];

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
            {advisors.map((a) => (
              <div
                key={a.company + a.name}
                className="interior-tile interior-tile--wide tile-white block h-full"
              >
                <div className="tile-white__inner h-full">
                  <div className="tile-white__face h-full">
                    <div className="flex h-full flex-col items-center text-center p-6">
                      <img
                        src={a.logo}
                        alt={a.logoAlt}
                        className="h-[120px] md:h-[144px] w-auto object-contain mb-4"
                        loading="lazy"
                      />

                      <div className="flex flex-col items-center mb-3">
                        <img
                          src={a.photo}
                          alt={a.photoAlt}
                          className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full object-cover border-2 border-border shadow-sm"
                          loading="lazy"
                        />
                        <p className="text-foreground font-semibold text-sm mt-2">{a.name}</p>
                        <p className="text-muted-foreground text-xs">{a.title}</p>
                      </div>

                      <h2 className="font-serif text-lg md:text-xl text-navy font-semibold leading-snug mb-3">
                        {a.company}
                      </h2>

                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                        {a.specialty}
                      </p>

                      <div className="w-full space-y-1.5 text-sm mb-5">
                        {a.phones.map((ph) => (
                          <div key={ph.href} className="flex items-center gap-2 justify-center">
                            <a
                              href={ph.href}
                              className="text-accent hover:text-gold underline-offset-4 hover:underline font-medium"
                            >
                              {ph.label}
                            </a>
                            {ph.note && (
                              <span className="text-muted-foreground">{ph.note}</span>
                            )}
                          </div>
                        ))}
                        {a.emails.map((em) => (
                          <div key={em} className="flex items-center gap-2 justify-center">
                            <a
                              href={`mailto:${em}`}
                              className="text-accent hover:text-gold underline-offset-4 hover:underline break-all"
                            >
                              {em}
                            </a>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto w-full pt-2">
                        <a
                          href={a.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Learn more about ${a.company} (opens in a new tab)`}
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
              What Senior Living Advisors Do
            </h2>
            <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4">
              <p>
                A Senior Living Advisor is an experienced professional who helps older adults and their
                families evaluate and select the right housing and care option — whether that is assisted
                living, memory care, an adult family home, independent living, or in-home care support.
                Their guidance is especially valuable when families feel overwhelmed by the number of
                options available and the complexity of making the right choice for their loved one.
              </p>
              <p>
                Senior Living Advisors typically have deep knowledge of the local care landscape, including
                which communities and homes have strong reputations, availability, pricing structures, and
                the specific level of care they provide. Many maintain large databases of vetted options
                and personally accompany families on tours, helping them ask the right questions and
                compare their choices with clarity.
              </p>
              <p>
                Their role does not end at placement. Many Senior Living Advisors continue to advocate for
                their clients after the move-in, checking in to make sure the transition is going smoothly
                and connecting families with additional resources as needs evolve.
              </p>
              <p>
                Working with a Senior Living Advisor is typically provided at no cost to the family, as
                advisors are compensated by the communities and care providers in their network.
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

export default SeniorLivingAdvisors;
