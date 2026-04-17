import { useParams } from "react-router-dom";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServiceBySlug } from "@/lib/service-areas-data";
import NotFound from "@/pages/NotFound";

// Service-specific content that makes each page unique
const serviceContent: Record<string, { introText: string; situations: string[]; benefits: string[] }> = {
  "probate-estate-sales": {
    introText: "Real Property Planning provides experienced guidance for executors, attorneys, and families navigating probate and estate property sales throughout Washington State. Real Property Planning combines over 20 years of experience as a licensed broker and state-certified residential appraiser to help clients approach these complex transactions with clarity, realistic expectations, and structured, evidence-based strategy.",
    situations: [
      "A loved one has passed and the estate includes real property that needs to be sold",
      "An executor or personal representative needs guidance on pricing, preparation, and sale timeline",
      "An attorney needs a real estate partner who understands probate procedures and court requirements",
      "Multiple heirs disagree about the property's value, condition, or whether to sell",
      "The property has significant deferred maintenance or condition issues affecting value",
      "An out-of-state executor needs local coordination for property management and sale",
    ],
    benefits: [
      "Condition-based pricing based on actual condition and local market context",
      "Coordination of cleanout, repairs, and preparation with trusted vendors",
      "Clear communication with attorneys, co-executors, and family members throughout the process",
      "Experience with court-supervised sales and probate procedural requirements",
      "Honest assessment of repair-vs-sell-as-is decisions",
      "Full-service management from initial consultation through closing",
    ],
  },
  "senior-transitions": {
    introText: "Real Property Planning supports seniors and their families through the sale of a longtime home — one of the most significant transitions a family can face. Real Property Planning provides patient, experienced guidance that addresses the practical, financial, and emotional aspects of selling a family home during a senior transition.",
    situations: [
      "A senior parent is moving to assisted living, independent living, or a family member's home",
      "The family home needs significant preparation before it can be listed for sale",
      "Family members live out of state and need local coordination for the sale process",
      "The home has decades of accumulated belongings that need to be sorted and removed",
      "The family needs realistic guidance on the home's value given its current condition",
      "Timeline coordination is needed between the home sale and the senior's new living arrangement",
    ],
    benefits: [
      "Patient, compassionate approach that respects the emotional significance of the family home",
      "Coordination of cleanout, downsizing support, and property preparation",
      "Realistic valuation guidance based on the home's actual condition",
      "Timeline management that coordinates with the senior's transition schedule",
      "Clear communication with all family members, including those managing from a distance",
      "Connections to trusted senior move managers, estate sale companies, and related professionals",
    ],
  },
  "downsizing-services": {
    introText: "Real Property Planning helps homeowners who are ready to simplify their living situation — whether moving to a smaller home, a retirement community, or closer to family. Real Property Planning provides practical guidance on preparing, pricing, and selling your current home while coordinating the timeline with your next chapter.",
    situations: [
      "You're ready to move to a smaller, more manageable home",
      "You're relocating closer to family or to a retirement community",
      "Your home needs updates or repairs before listing, and you're unsure what's worth doing",
      "You have decades of belongings to sort through before selling",
      "You need to coordinate the sale of your current home with purchasing or renting a new one",
      "You want honest guidance about your home's value without sales pressure",
    ],
    benefits: [
      "Practical, no-pressure guidance tailored to your timeline and priorities",
      "Coordination of cleanout, repairs, and preparation vendors",
      "Condition-based pricing that reflects your home's actual condition and market position",
      "Timeline management that accounts for your transition needs",
      "Referral connections if you're moving to another part of Washington or out of state",
      "Experience with the unique considerations of selling a longtime family home",
    ],
  },
  "executor-support": {
    introText: "Real Property Planning provides executors and personal representatives with clear, experienced guidance on managing and selling estate real property. Real Property Planning understands the responsibilities executors face and provides the practical support, communication, and valuation expertise that helps them fulfill their duties with confidence.",
    situations: [
      "You've been named executor and aren't sure where to start with the property",
      "The estate property needs assessment, cleanout, or repairs before it can be sold",
      "You live out of state and need someone local to manage the property and sale process",
      "Multiple beneficiaries have different opinions about what to do with the property",
      "You need a realistic understanding of the property's value for estate settlement",
      "The attorney or court requires documentation and communication throughout the sale",
    ],
    benefits: [
      "Clear roadmap from initial property assessment through sale and closing",
      "Coordination of all preparation work — cleanout, repairs, and staging",
      "Regular communication and documentation suitable for probate proceedings",
      "Condition-based pricing that supports the executor's fiduciary obligations",
      "Experience managing estate sales with multiple heirs and complex family dynamics",
      "Local coordination for executors managing from a distance",
    ],
  },
  "attorney-fiduciary-support": {
    introText: "Real Property Planning serves as a reliable real estate resource for attorneys and fiduciaries who need experienced, communicative support on estate, trust, and probate property matters. Real Property Planning's dual credentials as a licensed broker and certified appraiser provide the valuation perspective and professional communication that legal and fiduciary professionals expect.",
    situations: [
      "You represent an estate that includes real property requiring sale",
      "A trustee client needs guidance on trust-owned property valuation and sale strategy",
      "You need a real estate professional who communicates clearly and documents thoroughly",
      "Your client's property has condition issues that complicate valuation or marketability",
      "You need a broker who understands fiduciary responsibilities and court requirements",
      "You want a long-term referral relationship with a real estate professional you can trust",
    ],
    benefits: [
      "Dual broker and appraiser credentials that provide practical, evidence-based guidance",
      "Professional communication and documentation suitable for legal proceedings",
      "Understanding of fiduciary obligations, probate procedures, and trust administration",
      "Honest assessment and realistic pricing without sales pressure",
      "Consistent availability and responsiveness throughout the engagement",
      "A collaborative approach focused on supporting your client relationship",
    ],
  },
  "valuation-guidance": {
    introText: "Real Property Planning provides evidence-based pricing insight for inherited, estate, and transition-related property decisions where pricing accuracy is critical. As both a licensed Washington real estate broker and a state-certified residential appraiser, Real Property Planning brings a unique combination of market expertise and formal valuation training to every client engagement.",
    situations: [
      "You need to understand a property's realistic value for estate settlement or tax purposes",
      "The property has condition issues that make automated valuations unreliable",
      "Multiple parties disagree about what the property is worth",
      "You're deciding whether repairs and preparation would meaningfully increase sale value",
      "An attorney or fiduciary needs objective valuation perspective for legal proceedings",
      "You want honest market analysis before committing to a listing price",
    ],
    benefits: [
      "Dual perspective combining licensed broker market knowledge and certified appraiser methodology",
      "Assessment that accounts for actual property condition, not just comparable sales",
      "Clear explanation of how condition, location, and market factors affect value",
      "Objective analysis that supports estate settlement and fiduciary decision-making",
      "Guidance on whether repairs or preparation would meaningfully impact sale price",
      "Written analysis and documentation suitable for professional and legal contexts",
    ],
  },
  "preparing-home-for-sale": {
    introText: "Real Property Planning coordinates property preparation — from cleanout and repairs to staging and presentation — so the home is positioned for the best possible outcome. Real Property Planning helps clients make smart decisions about what to fix, what to skip, and how to present the property to attract the right buyers at the right price.",
    situations: [
      "An inherited or estate property needs cleanout and preparation before listing",
      "A longtime family home has accumulated belongings and deferred maintenance",
      "You're unsure which repairs are worth doing and which won't affect sale price",
      "The property needs coordination with multiple vendors for different preparation tasks",
      "You live out of area and can't manage the preparation process in person",
      "You want the home to show well without over-investing in renovations",
    ],
    benefits: [
      "Practical assessment of which improvements will actually affect sale value",
      "Coordination of cleanout, haul-away, repairs, and staging vendors",
      "Honest guidance about repair-vs-sell-as-is decisions based on local market expectations",
      "Management of the full preparation timeline so you don't have to",
      "Experience with estate and inherited properties that require more intensive preparation",
      "Cost-effective preparation strategy focused on return, not renovation",
    ],
  },
  "divorce-related-home-sales": {
    introText: "Real Property Planning assists with the sale of marital property during divorce proceedings, providing the discretion, objectivity, and clear communication that these sensitive situations require. Real Property Planning works with divorcing parties and their attorneys to manage the sale process fairly and efficiently.",
    situations: [
      "A divorce agreement requires the sale of the marital home",
      "Both parties need an objective assessment of the property's value",
      "The sale needs to be coordinated with legal timelines and court requirements",
      "One or both parties have relocated and need someone to manage the sale locally",
      "The property needs preparation before listing but the parties disagree about what to do",
      "An attorney needs a real estate professional who can work diplomatically with both sides",
    ],
    benefits: [
      "Objective, condition-based pricing that both parties can trust",
      "Discrete, professional communication with both parties and their attorneys",
      "Experience managing sales where parties have different priorities and timelines",
      "Clear documentation suitable for legal proceedings and settlement agreements",
      "Coordination of preparation and sale process without requiring parties to collaborate",
      "Certified appraiser credentials that provide credibility for court-related valuations",
    ],
  },
  "trust-estate-property-sales": {
    introText: "Real Property Planning assists trustees and fiduciaries with the valuation, preparation, and sale of trust-owned residential real estate. Real Property Planning understands the specific responsibilities trustees face and provides the documentation, communication, and pricing expertise that trust administration requires.",
    situations: [
      "A trust document requires the sale of real property",
      "A trustee needs realistic valuation guidance for trust accounting purposes",
      "The trust property needs preparation and coordination before it can be listed",
      "Beneficiaries have questions or concerns about the sale process and pricing",
      "The trustee lives outside the area and needs local management of the sale",
      "An attorney advising a trustee needs a reliable real estate resource",
    ],
    benefits: [
      "Understanding of trustee responsibilities and trust administration requirements",
      "Condition-based pricing that supports fiduciary accountability",
      "Professional documentation and communication suitable for trust records",
      "Coordination with trust attorneys, CPAs, and beneficiaries throughout the process",
      "Full-service sale management from property assessment through closing",
      "Experience with trust properties requiring intensive preparation or specialized marketing",
    ],
  },
};

const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const content = serviceSlug ? serviceContent[serviceSlug] : undefined;

  if (!service || !content) return <NotFound />;

  return (
    <ServicePageTemplate
      service={service}
      introText={content.introText}
      situations={content.situations}
      benefits={content.benefits}
    />
  );
};

export default ServicePage;
