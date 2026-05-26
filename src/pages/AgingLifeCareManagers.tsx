import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import { articleSchema } from "@/lib/schema";
import heroImage from "@/assets/building-trusted-professional-team-hero.png";

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

        <section className="py-12 lg:py-16">
          <div className="mx-auto px-6 lg:px-8 max-w-3xl">
            <p
              className="font-sans"
              style={{ color: "#374151", fontSize: "18px", lineHeight: 1.7 }}
            >
              Aging Life Care Managers (also called Geriatric Care Managers) are specialists who guide seniors and their families through the complexities of aging — including housing transitions, care coordination, and long-term planning. They assess needs, evaluate living options, coordinate medical and social services, and act as an advocate for the senior's wellbeing. They work closely with elder law attorneys, real estate professionals, and family members to ensure every transition is handled with care and expertise. Their professional organization is the Aging Life Care Association (ALCA).
            </p>
          </div>
        </section>

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default AgingLifeCareManagers;
