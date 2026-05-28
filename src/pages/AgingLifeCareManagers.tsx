import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToProfessionalsButton from "@/components/BackToProfessionalsButton";
import HeroBandTitle from "@/components/HeroBandTitle";
import ProviderContact from "@/components/ProviderContact";
import { articleSchema } from "@/lib/schema";
import heroImage from "@/assets/building-trusted-professional-team-hero.webp";
import lauraSilversteinPhoto from "@/assets/providers/laura-silverstein-aging-life-care-manager-washington.webp";
import silverSageLogo from "@/assets/providers/silver-sage-consulting-logo.png";

interface Provider {
  name: string;
  title: string;
  company: string;
  photo?: string;
  alt?: string;
  href: string;
  specialty: string;
  phone?: string;
  email?: string;
  logo?: string;
  logoAlt?: string;
}


const providers: Provider[] = [
  {
    name: "Laura A. Silverstein, MSW",
    title: "Aging Life Care Manager",
    company: "Silver & Sage Consulting, LLC",
    photo: lauraSilversteinPhoto,
    alt: "Photo of Laura A. Silverstein, MSW",
    href: "https://www.silverandsageconsulting.com",
    phone: "(206) 886-6012",
    email: "info@silverandsageconsulting.com",
    specialty:
      "Advocacy, assessment, care management, consultation, crisis intervention, guidance for adults with disabilities, information/referral, and placement",
    logo: silverSageLogo,
    logoAlt: "Silver & Sage Consulting logo",
  },
];

const jsonLd = articleSchema({
  headline: "Aging Life Care Managers",
  description:
    "Aging Life Care Managers (Geriatric Care Managers) guide seniors and families through housing, care, and long-term planning decisions.",
  url: "/aging-life-care-managers",
  datePublished: "2026-05-26",
  dateModified: "2026-05-26",
  about: ["Aging Life Care", "Geriatric Care Management", "Senior transitions"],
});

const AgingLifeCareManagers = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Aging Life Care Managers | Real Property Planning"
        description="Aging Life Care Managers guide seniors and families through housing, care, and long-term planning decisions across Washington State."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema
        items={[
          { name: "Building Your Trusted Professional Team", url: "/building-your-trusted-professional-team" },
          { name: "Aging Life Care Managers", url: "/aging-life-care-managers" },
        ]}
      />
      <Header />
      <main id="main-content">
        <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
          <div style={{ lineHeight: 0 }}>
            <img
              src={heroImage}
              alt="Aging Life Care Managers Washington State"
              className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover block"
              loading="eager"
            />
            <HeroBandTitle as="div">Aging Life Care Managers</HeroBandTitle>
          </div>
        </section>

        <h1 className="sr-only">Aging Life Care Managers</h1>

        {/* Provider tiles — immediately below hero band */}
        <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
              {providers.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name}, ${p.title} at ${p.company} — Learn more`}
                  className="interior-tile interior-tile--wide tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  <div className="tile-white__inner h-full">
                    <div className="tile-white__face h-full">
                      <div className="flex h-full flex-col items-center text-center p-6">
                        {p.photo ? (
                          <img
                            src={p.photo}
                            alt={p.alt}
                            className="w-28 h-28 rounded-full object-cover border-2 border-border shadow-sm mb-4"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-28 h-28 rounded-full bg-navy border-2 border-border shadow-sm mb-4 flex items-center justify-center">
                            <span className="font-serif text-2xl text-white font-bold">LS</span>
                          </div>
                        )}
                        <h3 className="font-serif text-xl text-navy font-semibold leading-snug mb-1">
                          {p.name}
                        </h3>
                        <p className="text-foreground text-sm mb-1">{p.title}</p>
                        <p className="text-foreground text-sm font-semibold mb-3">{p.company}</p>
                        <ProviderContact phone={p.phone} email={p.email} />
                        {p.logo && (
                          <img
                            src={p.logo}
                            alt={p.logoAlt || `${p.company} logo`}
                            className="h-24 w-auto max-w-[360px] object-contain mb-4"
                            loading="lazy"
                          />
                        )}
                        <p className="text-muted-foreground text-sm italic mb-5">{p.specialty}</p>

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
                About Aging Life Care Managers
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                Aging Life Care Managers, sometimes called geriatric care managers, are experienced professionals who help older adults and their families make informed decisions during the challenges of aging. They often come from backgrounds such as social work, nursing, gerontology, counseling, psychology, or rehabilitation, and they bring both clinical insight and practical problem-solving to situations that can feel overwhelming.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                Their role is to assess the whole picture, not just one problem. An Aging Life Care Manager evaluates health needs, cognition, safety, family dynamics, housing options, available resources, and personal preferences, then develops a personalized plan that supports independence, dignity, and quality of life.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                They also serve as a central point of coordination and advocacy. That can include attending medical appointments, explaining care options, arranging in-home support, monitoring services, guiding housing transitions, helping families during hospitalizations or crises, and connecting clients with trusted legal, financial, and community resources.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                What sets an Aging Life Care Manager apart is the combination of expertise, objectivity, and local knowledge. Rather than offering one-size-fits-all advice, they provide a holistic, client-centered approach tailored to the older adult's wishes, needs, and changing circumstances, while also giving families clear guidance and peace of mind, especially when loved ones live at a distance.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                Many Aging Life Care Managers are members of the Aging Life Care Association, whose members are required to meet education, experience, and, for advanced-level membership, certification standards, and to follow a Code of Ethics and Standards of Practice. ALCA states that advanced professional members typically hold a bachelor's, master's, or doctoral degree in a related field, relevant supervised experience, and an approved certification.
              </p>
            </div>
          </div>
        </section>

        <BackToProfessionalsButton />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default AgingLifeCareManagers;
