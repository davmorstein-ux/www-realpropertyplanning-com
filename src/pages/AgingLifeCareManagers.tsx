import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToProfessionals from "@/components/BackToProfessionals";
import HeroBandTitle from "@/components/HeroBandTitle";
import ProviderTile from "@/components/ProviderTile";
import { articleSchema } from "@/lib/schema";
import heroImage from "@/assets/building-trusted-professional-team-hero.webp";
import lauraSilversteinPhoto from "@/assets/providers/laura-silverstein-aging-life-care-manager-washington.webp";
import silverSageLogo from "@/assets/providers/silver-sage-consulting-logo.png";
import familyFirstLogo from "@/assets/providers/family-first-at-home-logo.png.asset.json";
import jennipherAmaPhoto from "@/assets/providers/jennipher-ama-family-first-at-home.jpg.asset.json";

const FAMILY_FIRST_BIO = `Family First at Home is a leading Pacific Northwest home care and care management provider helping families navigate caregiving challenges with compassion, clarity, and trusted expertise. Since 1989, Family First has supported older adults, caregivers, and families across Washington State — including Tacoma, Spokane, Renton, Seattle, and the greater Puget Sound region — with personalized home care, care management, licensed counseling, and insurance advocacy. Backed by experienced caregivers, care managers, licensed counselors, and advocates, the team delivers flexible support ranging from a few hours of assistance to 24/7 care, always with a focus on dignity, safety, and peace of mind. Under the leadership of President Jennipher Ama, RN, CMC, Family First continues to expand its mission of making home care more accessible, dependable, and family-centered.`;

const LAURA_BIO = `Laura A. Silverstein, MSW is an Aging Life Care Manager with Silver & Sage Consulting, LLC, based in Washington State. With a background in social work and extensive experience in geriatric care management, Laura helps older adults and their families navigate the complexities of aging with clarity, compassion, and expert guidance. Her services include advocacy, assessment, care management, consultation, crisis intervention, guidance for adults with disabilities, information and referral, and placement support. Laura brings both professional expertise and personal dedication to every client relationship, ensuring that older adults receive the right level of support while maintaining their dignity and independence.`;

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

        <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
              <ProviderTile
                name="Laura A. Silverstein, MSW"
                title="Aging Life Care Manager"
                company="Silver & Sage Consulting, LLC"
                photo={lauraSilversteinPhoto}
                photoAlt="Photo of Laura A. Silverstein, MSW"
                logo={silverSageLogo}
                logoAlt="Silver & Sage Consulting logo"
                phone="(206) 886-6012"
                email="info@silverandsageconsulting.com"
                website="https://www.silverandsageconsulting.com"
                bio={LAURA_BIO}
                specialty="Advocacy, assessment, care management, consultation, crisis intervention, guidance for adults with disabilities, information/referral, and placement"
              />
              <ProviderTile
                name="Jennipher Ama, RN, CMC"
                title="President"
                company="Family First at Home"
                photo={jennipherAmaPhoto.url}
                photoAlt="Photo of Jennipher Ama, RN, CMC, President of Family First at Home"
                logo={familyFirstLogo.url}
                logoAlt="Family First at Home logo"
                phone="(866) 412-3861"
                email="contact@familyfirstathome.com"
                website="https://familyfirstathome.com"
                bio={FAMILY_FIRST_BIO}
                specialty="Home care, care management, licensed counseling, and insurance advocacy across Washington State since 1989."
              />
            </div>
          </div>
        </section>

        <section className="pb-12 md:pb-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
                About Aging Life Care Managers
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                Aging Life Care Managers, sometimes called geriatric care managers, are experienced professionals who
                help older adults and their families make informed decisions during the challenges of aging. They often
                come from backgrounds such as social work, nursing, gerontology, counseling, psychology, or
                rehabilitation, and they bring both clinical insight and practical problem-solving to situations that
                can feel overwhelming.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                Their role is to assess the whole picture, not just one problem. An Aging Life Care Manager evaluates
                health needs, cognition, safety, family dynamics, housing options, available resources, and personal
                preferences, then develops a personalized plan that supports independence, dignity, and quality of life.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                They also serve as a central point of coordination and advocacy. That can include attending medical
                appointments, explaining care options, arranging in-home support, monitoring services, guiding housing
                transitions, helping families during hospitalizations or crises, and connecting clients with trusted
                legal, financial, and community resources.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                What sets an Aging Life Care Manager apart is the combination of expertise, objectivity, and local
                knowledge. Rather than offering one-size-fits-all advice, they provide a holistic, client-centered
                approach tailored to the older adult's wishes, needs, and changing circumstances.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                Many Aging Life Care Managers are members of the Aging Life Care Association, whose members are required
                to meet education, experience, and certification standards, and to follow a Code of Ethics and Standards
                of Practice.
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
};

export default AgingLifeCareManagers;
