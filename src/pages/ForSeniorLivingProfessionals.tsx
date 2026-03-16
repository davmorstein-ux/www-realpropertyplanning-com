import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle, Users } from "lucide-react";

const SITE_URL = "https://realpropertyplanning.com";

const howWeHelp = [
  {
    title: "Home Decisions After a Move to Senior Living",
    description: "Guiding families through what to do with a home after a transition to assisted living, independent living, or memory care — whether the decision is to sell, rent, or hold.",
  },
  {
    title: "Coordinating Home Preparation Before Sale",
    description: "Managing cleanout, repairs, staging, and vendor coordination so the family is not burdened with logistics during an already demanding transition.",
  },
  {
    title: "Downsizing-Related Property Decisions",
    description: "Supporting families who are reducing their housing footprint and need market insight, timing guidance, or a structured sale plan.",
  },
  {
    title: "Inherited Homes and Estate-Related Situations",
    description: "Helping families navigate the sale of a property passed through an estate, trust, or probate process — often alongside other transition professionals.",
  },
  {
    title: "Valuation-Related Guidance",
    description: "Offering pricing insight informed by certified appraisal experience, giving families and professionals a clearer picture of a home's market position.",
  },
  {
    title: "Coordinating With Transition Professionals",
    description: "Working alongside move managers, estate sale companies, cleaners, painters, and other professionals involved in preparing a home and supporting the family.",
  },
];

const whyRefer = [
  "Calm, respectful communication with families during emotionally sensitive transitions",
  "Understanding of the dynamics involved when aging parents, health changes, or care needs drive housing decisions",
  "Real estate and valuation insight from dual credentials — licensed broker and certified appraiser",
  "Ability to coordinate with multiple service providers without creating confusion or added stress",
  "Consistent support for families who feel overwhelmed by the housing side of a major life change",
  "Professional discretion and respect for the relationships transition professionals have with their clients",
];

const processSteps = [
  {
    step: "1",
    title: "Initial Conversation",
    description: "We discuss the family's situation, the property, and any considerations related to the transition timeline.",
  },
  {
    step: "2",
    title: "Home and Situation Review",
    description: "A thorough assessment of the property's condition, market position, preparation needs, and any factors that may affect timing or strategy.",
  },
  {
    step: "3",
    title: "Coordination With Family and Professionals",
    description: "Direct communication with family members, move managers, and other involved professionals — keeping everyone informed without adding complexity.",
  },
  {
    step: "4",
    title: "Preparation Strategy",
    description: "A clear plan for cleanout, repairs, staging, or other steps needed to position the property for the best possible outcome.",
  },
  {
    step: "5",
    title: "Marketing and Sale Process",
    description: "Professional listing, marketing, showing coordination, negotiation, and offer management — handled from start to finish when a sale is appropriate.",
  },
  {
    step: "6",
    title: "Communication Through Closing",
    description: "Milestone updates at key points — listing, offers, inspections, and closing — with availability for questions throughout the process.",
  },
];

const collaborationPartners = [
  "Senior Living Communities",
  "Retirement Communities",
  "Senior Move Managers",
  "Estate Sale Companies",
  "Professional Organizers",
  "Property Preparation Services",
];

const jsonLd = articleSchema({
  headline: "Real Estate Guidance for Senior Living and Transition Professionals",
  description: "Real Property Planning works with senior living communities, move managers, downsizing specialists, and related professionals when a home is part of a major life transition.",
  url: "/for-senior-living-professionals",
  datePublished: "2026-03-16",
  dateModified: "2026-03-16",
  about: ["Senior transitions", "Senior living referrals", "Downsizing real estate", "Senior move coordination"],
});

const ForSeniorLivingProfessionals = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="For Senior Living & Transition Professionals | Real Property Planning"
        description="Real Property Planning works with senior living communities, move managers, downsizing specialists, and estate sale companies when a home is part of a major life transition across Western Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "For Senior Living & Transition Professionals", url: `${SITE_URL}/for-senior-living-professionals` }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 lg:pt-28 lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-widest uppercase mb-4 text-sm">
              For Senior Living &amp; Transition Professionals
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] text-primary-foreground font-semibold leading-tight mb-6">
              Real Estate Guidance for Senior Living and Transition Professionals
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Real Property Planning works with senior living communities, move managers, downsizing specialists, estate sale companies, and related professionals when a home is part of a major life transition. With dual credentials as a licensed broker and certified appraiser, David Stein brings the market knowledge and professional sensitivity these situations require.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold px-8 h-[52px] text-base rounded-lg">
                <Phone className="w-5 h-5 mr-2" />
                Connect About a Client Situation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* How Real Property Planning Helps */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              How Real Property Planning Helps
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-10">
              Senior living and transition professionals involve Real Property Planning when a family's housing situation requires experienced real estate guidance. The following are common situations where coordinated support makes a meaningful difference.
            </p>
            <div className="space-y-5">
              {howWeHelp.map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Professionals Refer */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              Why Professionals Refer
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
              Senior living and transition professionals who work with Real Property Planning continue to refer families because the experience is consistently respectful, organized, and reliable.
            </p>
            <ul className="space-y-4">
              {whyRefer.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground text-[15px] md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What the Process Can Look Like */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              What the Process Can Look Like
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-10">
              Every family's situation is different, but the general workflow follows a clear, professional path designed to keep everyone informed and supported.
            </p>
            <div className="space-y-6">
              {processSteps.map((step) => (
                <div key={step.step} className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-semibold text-sm">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground font-semibold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaborative Network */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-accent shrink-0" />
              <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold">
                Our Collaborative Network
              </h2>
            </div>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
              Real Property Planning values collaboration with professionals who assist families during later-life transitions. We regularly coordinate with the following types of organizations and providers:
            </p>
            <ul className="space-y-3 mb-8">
              {collaborationPartners.map((partner) => (
                <li key={partner} className="flex items-start gap-3 text-foreground text-[15px] md:text-base leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  {partner}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-base leading-relaxed">
              When these professionals work together, families benefit from a more organized, less stressful transition — and each professional can focus on their area of expertise with confidence that the broader picture is being managed.
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              Related Resources
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
              Explore additional pages that may be relevant to the families and situations you work with.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/senior-transitions", label: "Senior Transitions", desc: "How Real Property Planning supports families navigating a move from a longtime home." },
                { href: "/resources", label: "Resource Directory", desc: "Trusted professionals who assist with transitions across Western Washington." },
                { href: "/how-to-move-elderly-parents", label: "Moving Elderly Parents", desc: "A compassionate guide for families planning a senior housing transition." },
                { href: "/services", label: "Our Services", desc: "An overview of how Real Property Planning supports families and professionals." },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group bg-card border border-border rounded-xl p-5 hover:border-gold/40 hover:shadow-md transition-all"
                >
                  <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                    {link.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-primary-foreground font-semibold mb-4">
              Working with a family navigating a housing transition?
            </h2>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Real Property Planning welcomes the opportunity to connect with senior living and transition professionals. Whether you have a specific client situation or simply want to learn how we can work together, we encourage you to reach out.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold w-full sm:w-auto px-8 h-[52px] text-base rounded-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Connect About a Client Situation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold w-full sm:w-auto px-8 h-[52px] text-base rounded-lg">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default ForSeniorLivingProfessionals;
