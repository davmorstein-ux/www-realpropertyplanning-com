import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { articleSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";


const professionalCategories = [
  {
    title: "Estate Planning & Probate Attorneys",
    description:
      "Attorneys guide families through probate proceedings, trust administration, and estate settlement. When real property is part of the estate, coordination between legal counsel and a knowledgeable real estate professional helps ensure that property decisions align with the overall legal strategy and timeline.",
  },
  {
    title: "Financial Advisors & CPAs",
    description:
      "Financial professionals advise clients on tax implications, asset distribution, and long-term planning during estate transitions. Their guidance often intersects with real estate decisions, particularly when property sales affect estate value, tax obligations, or retirement planning.",
  },
  {
    title: "Aging Life Care Professionals",
    description:
      "Aging Life Care Professionals assess the needs of older adults and coordinate services across medical, social, and housing domains. When a housing transition becomes necessary, their insight into the client's care needs helps shape the timing and approach to the real estate process.",
  },
  {
    title: "Senior Move Managers",
    description:
      "Senior move managers specialize in organizing, downsizing, and physically managing the relocation of older adults. Their work often runs parallel to the real estate timeline, and close coordination ensures that the home is prepared for sale while the move proceeds smoothly.",
  },
  {
    title: "Estate Sale Professionals",
    description:
      "Estate sale companies manage the sorting, pricing, and sale of personal property within a home. Their work typically precedes the real estate listing process, and scheduling alignment between the estate sale and the property sale helps avoid unnecessary delays.",
  },
  {
    title: "Cleanout & Property Preparation Services",
    description:
      "Cleanout teams and property preparation vendors handle debris removal, deep cleaning, and light repairs that bring a home to market-ready condition. Their role is especially important for estate and inherited properties where years of accumulated belongings need to be addressed before listing.",
  },
  {
    title: "Home Repair & Contractor Services",
    description:
      "Trusted contractors address deferred maintenance, safety concerns, and cosmetic updates that can meaningfully affect a property's marketability and sale price. Experienced guidance on which repairs are worth the investment helps families avoid unnecessary spending.",
  },
  {
    title: "Senior Housing & Transition Specialists",
    description:
      "Placement specialists and senior housing advisors help families evaluate assisted living, memory care, and independent living options. When a home sale is part of the transition plan, coordination between the housing advisor and the real estate professional keeps both timelines on track.",
  },
];

const jsonLd = articleSchema({
  headline: "Professional Network & Trusted Resources",
  description:
    "A collaborative network of professionals helping families navigate estate matters, senior transitions, and real estate decisions throughout Washington State.",
  url: "/professional-network",
  datePublished: "2026-03-16",
  dateModified: "2026-03-16",
  about: [
    "Professional network",
    "Estate transitions",
    "Senior care coordination",
    "Collaborative professionals",
  ],
});

const ProfessionalNetwork = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Professional Network & Trusted Resources | Real Property Planning"
        description="A collaborative network of professionals helping families navigate estate matters, senior transitions, and real estate decisions throughout Washington State."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema
        items={[
          { name: "Professional Network", url: "/professional-network" },
        ]}
      />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 lg:pt-32 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
              Professional Network
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Professional Network & Trusted Resources
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Real Property Planning works collaboratively with a network of
              experienced professionals who help families navigate major life
              transitions, estate matters, senior care decisions, and housing
              changes throughout Washington State.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              A Collaborative Professional Network
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Many of the situations involving real estate transitions for older
              adults, families, and estates require the coordination of several
              professionals. These may include attorneys, Aging Life Care
              professionals, financial advisors, senior move managers, estate
              sale companies, and others who each play an important role in
              helping families move forward with clarity and confidence.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Real Property Planning regularly works alongside professionals who
              specialize in these areas. While each situation is unique, a
              coordinated approach often makes the process smoother and less
              stressful for everyone involved.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Categories */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-12 text-center">
              Professionals Who Support These Transitions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {professionalCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-7"
                >
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Working Together */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Supporting Clients Through Important Transitions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When real estate becomes part of a larger transition — whether that
              involves probate, trust administration, downsizing, or moving into
              a care setting — communication between professionals can make a
              significant difference. Real Property Planning works to ensure that
              the real estate portion of the process aligns smoothly with the
              broader goals of the family and the professionals advising them.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Referral Relationships */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              A Trusted Resource for Professional Referrals
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Attorneys, care managers, financial advisors, and other
              professionals occasionally encounter situations where real estate
              guidance is needed. In those cases, Real Property Planning serves
              as a reliable resource for helping clients understand their
              property options and navigate the sale process in a thoughtful and
              organized way.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Professional Collaboration
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              If you are a professional working with a client who may need
              guidance related to real estate, probate property, inherited homes,
              or senior housing transitions, you are welcome to reach out for a
              conversation.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="gold"
                  size="lg"
 className="hover:-light"
                >
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                  Contact David Stein
                </Button>
              </Link>
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

export default ProfessionalNetwork;
