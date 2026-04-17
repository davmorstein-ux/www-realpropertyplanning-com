import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { articleSchema } from "@/lib/schema";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import HubAndSpoke from "@/components/HubAndSpoke";
import davidSteinHeadshot from "@/assets/david-stein-president-about-2025-v5.jpg";

const jsonLd = articleSchema({
  headline: "About Real Property Planning",
  description:
    "Real Property Planning is Washington State's professional resource hub for seniors, families, executors, and professionals navigating elder transitions, probate, and estate real estate.",
  url: "/about",
  datePublished: "2026-01-01",
  dateModified: "2026-04-14",
  about: [
    "Professional resource hub",
    "Senior transitions",
    "Probate real estate",
    "Estate administration",
  ],
});

const whatYoullFind = [
  {
    heading: "Professional Resources",
    text: "Attorneys, CPAs, financial planners, senior move managers, adult family home operators, estate liquidators, mortgage lenders, real estate appraisers, and more — all vetted, featured, and organized by specialty so families and professionals can find exactly who they need.",
  },
  {
    heading: "Guidance for Every Role",
    text: "Whether you're an executor managing your first estate, an adult child helping a parent move, a trustee with fiduciary responsibilities, or an attorney looking for a reliable real estate resource — Real Property Planning has guidance written specifically for your situation.",
  },
  {
    heading: "County and Community Resources",
    text: "Real Property Planning serves the full Puget Sound region and Washington State, with location-specific guidance for King County, Snohomish County, Pierce County, Kitsap County, Skagit County, and beyond. Resources are organized by community so families can find professionals and guidance relevant to where they are.",
  },
  {
    heading: "Plain-Language Education",
    text: "Probate terms explained. The difference between a CMA and an appraisal. What an executor should do first. How senior transitions work. What power of attorney means for real estate decisions. The guides and resources on this site are written for real people in real situations — not for lawyers or industry insiders.",
  },
];

const networkProfessionals = [
  "Licensed real estate brokers specializing in probate, estate, and senior transition sales",
  "Washington State Certified Residential Appraisers",
  "Senior move managers",
  "Adult family home operators",
  "Estate liquidators",
  "And more being added regularly",
];

const AboutPlatform = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Real Property Planning | Washington's Elder, Estate & Probate Resource Hub"
        description="Real Property Planning is Washington State's professional resource hub for seniors, families, executors, and professionals navigating elder transitions, probate, and estate real estate."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "About", url: "/about" }]} />
      <Header />
      <main id="main-content">
        <HubAndSpoke />
        {/* Hero */}
        <section className="bg-primary pt-6 pb-14 md:pt-6 md:pb-[72px] lg:pt-6 lg:pb-24">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
                About
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight">
                About Real Property Planning
              </h1>
              <p className="text-lg text-primary-foreground/70 leading-relaxed mt-4">
                Washington's Professional Resource Hub for Seniors, Families, and the Professionals Who Serve Them
              </p>
            </div>
          </div>
        </section>

        {/* Leadership: David Stein */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <figure className="max-w-xl mx-auto text-center">
              <img
                src={davidSteinHeadshot}
                alt="David Stein, President of Real Property Planning"
                width={320}
                height={400}
                loading="lazy"
                className="w-64 md:w-72 h-auto aspect-[4/5] object-cover mx-auto rounded-2xl"
              />
              <figcaption className="mt-6">
                <div className="font-serif text-3xl text-foreground font-bold">
                  David Stein
                </div>
                <div className="text-muted-foreground mt-1">
                  President of Real Property Planning
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Why I Created Real Property Planning */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-8">
                Why I Created Real Property Planning
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I created Real Property Planning to be a calm, trustworthy, practical resource for the people who need it most — seniors weighing major housing decisions, families helping a parent transition, executors and trustees managing inherited property, and the professionals who quietly hold all of it together.
                </p>
                <p>
                  After years of working alongside families navigating probate, estate sales, and senior moves, I kept seeing the same gap: the attorney, the care coordinator, the move manager, the appraiser, and the real estate broker were each doing good work — but no one was connecting the pieces for the family. People were left to coordinate it themselves, often from another state, often while grieving.
                </p>
                <p>
                  Real Property Planning exists to close that gap. It is a platform — not a personal brand — built to bring clear guidance, vetted professionals, and step-by-step resources into one place, so families can move forward with confidence and professionals can serve their clients more completely.
                </p>
                <p>
                  My role is to lead and grow this platform with the same standards I bring to every client relationship: integrity, patience, and respect for the weight of these decisions.
                </p>
                <p className="text-foreground font-semibold not-italic">
                  — David Stein, President, Real Property Planning
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: What This Is */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-8">
                What This Is
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Real Property Planning is not a single service. It is not a personal website. It is not an advertising platform.
                </p>
                <p>
                  It is a professional ecosystem — built from the ground up to serve one of the most underserved populations in the real estate and senior care world: families navigating the intersection of aging, property, estate administration, and transition.
                </p>
                <p>
                  When an elderly parent needs to move to assisted living, the family doesn't just need a real estate agent. They need a move manager, a care placement specialist, an estate liquidator, and possibly an attorney — all coordinating with each other while the family tries to keep up. When an <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">executor</Link> inherits a home in Washington State, they don't just need someone to list the property. They need a valuation, a cleanout crew, legal guidance, and someone to manage all of it while they grieve and fulfill their fiduciary duties from another state.
                </p>
                <p>
                  Real Property Planning exists because no single platform connected all of those pieces. Until now.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Section 2: Who This Is For */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-10">
                Who This Is For
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Real Property Planning serves three distinct groups — and is built to be genuinely useful to all of them.
              </p>
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-xl p-7">
                  <h3 className="font-serif text-2xl text-foreground font-bold mb-4">
                    Seniors and Their Families
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether a senior is exploring housing options, preparing to downsize, transitioning to assisted living or memory care, or simply trying to understand what resources exist — Real Property Planning provides clear, accessible guidance and connections to trusted professionals throughout Washington State. The site is built to meet WCAG 2.1 AA accessibility standards, because the people who need it most deserve a site they can navigate with confidence.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-7">
                  <h3 className="font-serif text-2xl text-foreground font-bold mb-4">
                    Families Managing Inherited Property or Probate
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Adult children, <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">executors</Link>, personal representatives, trustees, and out-of-state family members navigating the sale of an inherited or estate property in Washington State will find practical, step-by-step guidance here — along with connections to the professionals who can help them through every stage of the process.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-7">
                  <h3 className="font-serif text-2xl text-foreground font-bold mb-4">
                    Professionals Who Serve This Community
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <Link to="/probate-estate-sales" className="text-accent hover:text-gold underline underline-offset-4">Probate</Link> attorneys looking for a trusted appraiser. Elder law attorneys seeking a senior move manager. CPAs whose clients need real estate guidance. Financial planners coordinating a <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">senior transition</Link>. Real Property Planning is a curated professional network where specialists in every relevant discipline can find each other — and be found by the families who need them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why This Exists */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-8">
                Why This Exists
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  The idea for Real Property Planning came from experience — years of working with families navigating probate, estate sales, and senior transitions, and noticing the same problem every time.
                </p>
                <p className="font-semibold text-foreground">
                  Everyone was working in silos.
                </p>
                <p>
                  The attorney was handling legal matters. The real estate agent was focused on the listing. The care coordinator was managing the move. The estate liquidator was dealing with belongings. And the family was trying to coordinate all of them — often from another state, often while grieving, often without any idea where to start or who to call first.
                </p>
                <p>
                  Real Property Planning was built to close that gap. Not by replacing any of these professionals, but by creating a place where they can all be found — and where families can understand the full picture of what they're navigating before they make a single phone call.
                </p>
                <p>
                  The site continues to grow. New professionals are added regularly. New resources and guides are developed in response to the questions families actually ask. And the network of trusted specialists serving Washington's seniors, executors, and families expands with every connection made through this platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: What You'll Find Here */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-12 text-center">
                What You'll Find Here
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {whatYoullFind.map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-7">
                    <h3 className="font-serif text-xl text-foreground font-bold mb-4">
                      {item.heading}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Built for Accessibility */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-8">
                Built for Accessibility
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Real Property Planning meets WCAG 2.1 AA accessibility standards — a deliberate choice that reflects who this platform serves. Seniors navigating major life decisions deserve a website they can read, understand, and use with confidence. So do the family members sitting beside them trying to help.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                Accessibility here is not a compliance checkbox. It is a core design value.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: A Growing Network */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-8">
                A Growing Network
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Real Property Planning currently features trusted professionals across multiple disciplines serving Washington State families, including:
              </p>
              <ul className="space-y-4 mb-8">
                {networkProfessionals.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-lg leading-relaxed">
                If you are a professional serving seniors, families, or estates in Washington State and would like to be considered for the network, Real Property Planning welcomes the conversation.{" "}
                <Link to="/join-the-network" className="text-accent hover:text-gold underline underline-offset-4">
                  Learn more about joining the network →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Professional Memberships */}
        <section className="py-12 lg:py-16 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-serif text-2xl text-foreground font-bold mb-4">
                Professional Memberships &amp; Affiliations
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Real Property Planning is a Corporate Partner of the{" "}
                <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline underline-offset-4">Aging Life Care Association</a> (ALCA), a recognized member of the National Association of Senior Advocates, and a member of the National Association of Estate Planners &amp; Councils — professional affiliations that reflect a commitment to serving this community with integrity.
              </p>
              <AffiliationBadgeGrid />
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* For Families */}
                <div>
                  <h2 className="font-serif text-2xl text-primary-foreground font-semibold mb-4">
                    For Families
                  </h2>
                  <p className="text-primary-foreground/70 text-lg leading-relaxed mb-6">
                    Not sure where to start? Most people aren't. Browse the resources, explore the professional network, or reach out directly — there's no obligation, and the guidance here is free.
                  </p>
                  <Link to="/contact">
                    <Button variant="gold" size="lg">
                      <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                      Get in Touch
                    </Button>
                  </Link>
                </div>
                {/* For Professionals */}
                <div>
                  <h2 className="font-serif text-2xl text-primary-foreground font-semibold mb-4">
                    For Professionals
                  </h2>
                  <p className="text-primary-foreground/70 text-lg leading-relaxed mb-6">
                    Real Property Planning is actively growing its network of featured professionals throughout Washington State. Listings are currently free for qualifying professionals. If you serve seniors, families, or estates — and you want more exposure to the people who need your services — this platform was built with you in mind.
                  </p>
                  <Link to="/join-the-network">
                    <Button variant="gold" size="lg">
                      Join the Network →
                    </Button>
                  </Link>
                </div>
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

export default AboutPlatform;
