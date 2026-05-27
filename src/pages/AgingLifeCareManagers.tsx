import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import { articleSchema } from "@/lib/schema";
import heroImage from "@/assets/building-trusted-professional-team-hero.webp";

interface Provider {
  name: string;
  title: string;
  company: string;
  photo?: string;
  alt?: string;
  href: string;
  specialty: string;
}

const providers: Provider[] = [
  {
    name: "Laura A. Silverstein, MSW",
    title: "Aging Life Care Manager",
    company: "Silver & Sage Consulting, LLC",
    href: "https://www.silverandsageconsulting.com",
    specialty:
      "Advocacy, assessment, care management, consultation, crisis intervention, guidance for adults with disabilities, information/referral, and placement",
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

        {/* Featured Aging Life Care Managers */}
        <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
                Experienced Aging Life Care Managers providing expert guidance and advocacy to help older adults and their families navigate care decisions with confidence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
                {providers.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name}, ${p.title} at ${p.company} — Learn more`}
                    className="interior-tile tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
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
                          <h2 className="font-serif text-xl text-navy font-semibold leading-snug mb-1">
                            {p.name}
                          </h2>
                          <p className="text-foreground text-sm mb-1">{p.title}</p>
                          <p className="text-foreground text-sm font-semibold mb-2">{p.company}</p>
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
          </div>
        </section>

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default AgingLifeCareManagers;
