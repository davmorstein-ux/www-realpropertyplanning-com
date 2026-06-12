import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import BackToProfessionals from "@/components/BackToProfessionals";
import FeaturedProviderPlaceholder from "@/components/FeaturedProviderPlaceholder";

const AgingLifeCareManagers = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Aging Life Care Managers in Washington State | Real Property Planning"
      description="Find certified aging life care managers and geriatric care professionals serving Washington State — helping families coordinate care, navigate transitions, and support older adults."
      canonical="https://realpropertyplanning.com/aging-life-care-managers"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Aging Life Care Managers", url: "https://realpropertyplanning.com/aging-life-care-managers" },
      ]}
    />
    <Header />
    <main id="main-content">
      <HeroBandTitle as="h1">Aging Life Care Managers</HeroBandTitle>

      <FeaturedProviderPlaceholder
        heading="Featured Aging Life Care Manager — Coming Soon"
        altLabel="featured aging life care manager"
      />

      {/* Explanatory content */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-6">
              What Aging Life Care Managers Do
            </h2>
            <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4">
              <p>
                An Aging Life Care Manager — also known as a geriatric care manager — is a trained
                professional who helps older adults and their families navigate the complex challenges of
                aging. They assess physical, emotional, and environmental needs; coordinate medical care;
                and serve as a trusted advocate during major life transitions.
              </p>
              <p>
                These professionals often come from backgrounds in nursing, social work, or counseling,
                and many hold certifications through the Aging Life Care Association (ALCA). Their role
                is especially valuable when families live far apart, when a health crisis changes care
                needs suddenly, or when multiple professionals — attorneys, real estate agents, financial
                advisors — are involved and someone needs to keep the older adult's wellbeing at the center
                of every decision.
              </p>
              <p>
                Services typically include in-home assessments, care plan development, medication
                management oversight, coordination with doctors and specialists, facility placement
                guidance, and ongoing monitoring. When a housing transition is involved, an Aging Life
                Care Manager can help families evaluate whether aging in place, assisted living, memory
                care, or an adult family home is the right fit — and then ensure the move itself is
                managed with compassion and attention to detail.
              </p>
              <p>
                Real Property Planning works alongside Aging Life Care Managers to help families
                address the real estate side of major transitions. Whether the goal is selling a longtime
                home to fund care, navigating a probate sale after a loss, or finding the right senior
                housing solution, having a care manager involved helps the family stay focused on what
                matters most.
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

export default AgingLifeCareManagers;
