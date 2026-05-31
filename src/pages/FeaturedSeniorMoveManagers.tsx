import Header from "@/components/Header";
import BackToProfessionals from "@/components/BackToProfessionals";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import ProviderBioModal from "@/components/ProviderBioModal";
import { Link } from "react-router-dom";
import ericRovnerPhoto from "@/assets/providers/senior-movers-eric-rovner-washington.webp";
import tinaBarilPhoto from "@/assets/providers/senior-movers-tina-baril-washington.webp";
import meriannRobertsPhoto from "@/assets/meriann-roberts-ginnys-girls-owner.webp";
import ginnysGirlsLogo from "@/assets/ginnys-girls-estate-services-logo-v3.webp";

const GINNYS_BIO = `Ginny's is a family-owned senior move management and estate services company based in Edmonds, Washington, founded to help families in North King and Snohomish counties navigate life transitions with dignity and care. We specialize in senior move management, estate sales, residential clear-outs, and personal property appraisals — providing professional, compassionate support during times of change. Certified by NASMM (National Association of Senior Move Managers) and ISA (International Society of Appraisers), our team offers comprehensive services including space planning, sorting, packing, move oversight, unpacking, resettling, estate liquidation, full-home clear-outs, and personal property valuation. Whether you're downsizing, managing an estate after a move or death, or preparing a home for sale, Ginny's reduces stress and creates a smoother path forward for older adults and their families.`;

interface Mover {
  name: string;
  title: string;
  company: string;
  photo: string;
  alt: string;
  bio?: string;
  phone?: string;
  email?: string;
  website?: string;
  logo?: string;
  specialty?: string;
}

const movers: Mover[] = [
  {
    name: "Eric Rovner",
    title: "Vice President of Marketing",
    company: "HB Move Management · Hansen Bros. Moving",
    photo: ericRovnerPhoto,
    alt: "Photo of Eric Rovner",
  },
  {
    name: "Tina Baril",
    title: "Owner",
    company: "Monarch Transitions · Senior Move Managers",
    photo: tinaBarilPhoto,
    alt: "Photo of Tina Baril",
  },
  {
    name: "Meriann Roberts",
    title: "Owner",
    company: "Ginny's Girls Estate Services",
    photo: meriannRobertsPhoto,
    alt: "Photo of Meriann Roberts",
    bio: GINNYS_BIO,
    phone: "(206) 466-0759",
    email: "info@ginnysestates.com",
    website: "https://www.ginnysestates.com",
    logo: ginnysGirlsLogo,
    specialty:
      "Estate sales, senior move management, residential clear-outs, and ISA-certified personal property appraisals throughout North King and Snohomish Counties.",
  },
];

const FeaturedSeniorMoveManagers = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Featured Senior Move Managers | Real Property Planning"
      description="Featured Washington State senior move managers helping families with downsizing, relocation, and senior transitions."
    />
    <BreadcrumbSchema items={[{ name: "Featured Senior Move Managers", url: "/featured-senior-move-managers" }]} />
    <Header />
    <main id="main-content">
      <section className="bg-primary py-12 md:py-16">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">Senior Move Management</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-5">
              Featured Senior Move Managers
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#e5e7eb" }}>
              Trusted senior move managers supporting Washington families with downsizing, relocation, and compassionate
              transitions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {movers.map((m) => (
              <div key={m.name} className="interior-tile tile-white block h-full">
                <div className="tile-white__inner h-full">
                  <div className="tile-white__face h-full">
                    <div className="flex h-full flex-col items-center text-center p-6">
                      {/* Headshot — clickable if bio exists, otherwise plain */}
                      {m.bio ? (
                        <ProviderBioModal
                          name={m.name}
                          title={m.title}
                          company={m.company}
                          photo={m.photo}
                          alt={m.alt}
                          bio={m.bio}
                          phone={m.phone}
                          email={m.email}
                          website={m.website}
                          logo={m.logo}
                          specialty={m.specialty}
                        />
                      ) : (
                        <img
                          src={m.photo}
                          alt={m.alt}
                          className="w-28 h-28 rounded-full object-cover border-2 border-border shadow-sm mb-4"
                          loading="lazy"
                        />
                      )}

                      <h2 className="font-serif text-xl text-navy font-semibold leading-snug mb-1 mt-3">{m.name}</h2>
                      <p className="text-foreground text-sm mb-1">{m.title}</p>
                      <p className="text-foreground text-sm font-semibold mb-5">{m.company}</p>
                      <Link
                        to="/senior-move-managers"
                        className="gold-cta mt-auto"
                        aria-label={`Learn more about ${m.name}`}
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/senior-move-managers"
              className="inline-flex items-center gap-2 text-navy font-semibold underline-offset-4 hover:underline"
            >
              View full senior move manager resources →
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <BackToProfessionals />
    </main>
    <Footer />
  </div>
);

export default FeaturedSeniorMoveManagers;
