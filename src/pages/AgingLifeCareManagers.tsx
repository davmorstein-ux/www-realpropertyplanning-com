import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import BackToProfessionals from "@/components/BackToProfessionals";
import ProviderTile from "@/components/ProviderTile";
import lauraPhoto from "@/assets/providers/laura-silverstein-aging-life-care-manager-washington.webp";
import silverSageLogo from "@/assets/providers/silver-sage-consulting-logo.webp";
import jennipherPhoto from "@/assets/providers/jennipher-ama-family-first-at-home.webp.asset.json";
import familyFirstLogo from "@/assets/providers/family-first-at-home-logo.webp.asset.json";
import nicolePhoto from "@/assets/providers/nicole-aging-wisdom.webp.asset.json";
import agingWisdomLogo from "@/assets/providers/aging-wisdom-logo.webp.asset.json";

const LAURA_BIO = `Silver & Sage Consulting, LLC is led by Laura A. Silverstein, MSW — an experienced Aging Life Care Manager who guides older adults, adults with disabilities, and their families through complex life transitions. Laura provides advocacy, comprehensive assessments, ongoing care management, consultation, and crisis intervention, and helps families navigate placement decisions with clarity and compassion. Her work centers on helping clients live as safely and independently as possible while giving families the information, referrals, and support they need to make confident decisions.`;

const FAMILY_FIRST_BIO = `Family First at Home provides personalized care management and in-home support for older adults and families navigating the realities of aging. Their team works closely with clients to assess needs, coordinate services, and advocate for the right level of care — whether that means support at home, help during a medical transition, or guidance toward the right next setting. Family First combines clinical expertise with a deeply personal approach, helping families stay connected and informed through every stage of the journey.`;

const AGING_WISDOM_BIO = `Planning for the future and adapting to unexpected health or memory changes gives you and your family a lot to think about. Services are confusing, fragmented, and expensive. Without expert guidance, it's easy to become overwhelmed. We are Aging Life Care™ professionals and Creative Engagement specialists. Since 2003, Aging Wisdom has been helping clients navigate options for living, caring, and aging well. Our team of Aging Life Care Experts brings an unparalleled depth and breadth of knowledge and experience. Our role is often described as coach, educator, stress reducer, navigator, and even life saver.

Nicole Amico Kane, MSW, LICSW, CMC, serves as Director of Care Management. Nicole and our team are passionate about helping you navigate the journey of aging with clarity, making sense of and anticipating changes, and finding the support, resources, and solutions you need. We provide you with tailored information, tools, and expert guidance to make the best decisions.

As Aging Life Care professionals, our work is guided by Standards of Practice and Code of Ethics. We are a non-commission-based model.

Specialties: Care management, consultation, creative engagement, proactive planning, assessment, advocacy, housing and long-term care options, health & disability, and crisis intervention.`;

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

      {/* Featured providers */}
      <section className="py-10 md:py-14 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 items-stretch">
            <ProviderTile
              name="Laura A. Silverstein, MSW"
              title="Aging Life Care Manager"
              company="Silver & Sage Consulting, LLC"
              photo={lauraPhoto}
              photoAlt="Photo of Laura A. Silverstein, MSW — Aging Life Care Manager at Silver & Sage Consulting"
              logo={silverSageLogo}
              logoAlt="Silver & Sage Consulting logo"
              phone="(206) 327-0344"
              email="laura@silverandsageconsulting.com"
              website="https://www.silverandsageconsulting.com"
              bio={LAURA_BIO}
              specialty="Advocacy, assessment, care management, consultation, crisis intervention, guidance for adults with disabilities, information/referral, and placement."
            />

            <ProviderTile
              name="Jennipher Ama"
              title="President, RN, CMC"
              company="Family First at Home"
              photo={jennipherPhoto.url}
              photoAlt="Photo of Jennipher Ama, President of Family First at Home"
              logo={familyFirstLogo.url}
              logoAlt="Family First at Home logo"
              phone="(866) 412-3861"
              email="intake@familyfirstathome.com"
              website="https://www.familyfirstathome.com"
              bio={FAMILY_FIRST_BIO}
              specialty="Personalized care management and in-home support for older adults and families across Washington."
            />

            <ProviderTile
              name="Nicole Amico Kane, MSW, LICSW, CMC"
              title="Director of Care Management, Certified Care Manager"
              company="Aging Wisdom"
              photo={nicolePhoto.url}
              photoAlt="Photo of Nicole Amico Kane, MSW, LICSW, CMC — Director of Care Management at Aging Wisdom"
              logo={agingWisdomLogo.url}
              logoAlt="Aging Wisdom logo"
              phone="(206) 456-5155"
              email="inquiries@agingwisdom.com"
              website="https://agingwisdom.com"
              bio={AGING_WISDOM_BIO}
              specialty="Care management, consultation, creative engagement, proactive planning, assessment, advocacy, housing and long-term care options, health & disability, and crisis intervention."
            />
          </div>
        </div>
      </section>

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
