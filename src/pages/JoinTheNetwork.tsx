import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { articleSchema } from "@/lib/schema";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-contact-icon-washington.webp";

const jsonLd = articleSchema({
  headline: "Join the Real Property Planning Network",
  description:
    "Real Property Planning features trusted professionals serving seniors, families, and estates throughout Washington State. Free listings for qualifying professionals.",
  url: "/join-the-network",
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
  about: [
    "Professional network",
    "Free listings",
    "Senior services",
    "Estate professionals",
  ],
});

const professionalCategories = [
  "Probate, estate planning, elder law, family law, and real estate attorneys",
  "CPAs and tax professionals advising estates and transitioning seniors",
  "Financial planners working with clients facing housing or estate decisions",
  "Real estate brokers specializing in probate, estate, or senior transition sales",
  "Certified real estate appraisers",
  "Senior move managers",
  "Adult family home operators",
  "Assisted living and memory care placement specialists",
  "Estate liquidators",
  "Mortgage lenders (including reverse mortgage specialists)",
  "Senior care coordinators and aging life care managers",
  "And other professionals whose work touches the lives of seniors and their families",
];

const benefits = [
  {
    heading: "A Featured Profile Page",
    text: "Your photo, your name and title, your business description, and your full contact information — including phone, email, and website — presented professionally to every visitor who lands on your category page.",
  },
  {
    heading: "Exposure to a Targeted Audience",
    text: "Real Property Planning is built specifically for the people who need your services. Families dealing with senior transitions, executors managing estate property, attorneys looking for referral resources — these are the visitors this platform attracts. Your listing puts you directly in front of them.",
  },
  {
    heading: "Professional Cross-Referral Opportunities",
    text: "Real Property Planning is also used by professionals looking for other professionals. A probate attorney searching for a trusted appraiser. An elder law attorney seeking a senior move manager. A CPA looking for a real estate broker who understands estate situations. Being listed here means being findable by the professionals who refer clients in your direction.",
  },
  {
    heading: "A Platform Built for Your Audience",
    text: "Real Property Planning meets WCAG 2.1 AA accessibility standards and is designed with seniors and their families in mind — which means the people most likely to need your services can navigate to you with confidence.",
  },
];

const steps = [
  {
    step: "Step 1 — Reach Out",
    text: "Contact Real Property Planning to express your interest. Share a brief description of your services, your service area, and the clients you typically work with.",
  },
  {
    step: "Step 2 — We Review",
    text: "Real Property Planning is a curated network — not an open directory. Listings are reviewed to ensure they serve the audience this platform exists for. The review process is simple and the bar is professional competence and geographic relevance, not exclusivity.",
  },
  {
    step: "Step 3 — Your Profile Goes Live",
    text: "Once confirmed, your profile is built and published on the appropriate category page — with your photo, business description, and full contact information.",
  },
  {
    step: "Step 4 — Families and Professionals Find You",
    text: "Your listing is live, searchable, and accessible to every visitor who lands on your category page — whether they arrive from a Google search, an attorney referral, or a family member trying to figure out where to start.",
  },
];

const JoinTheNetwork = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Join the Real Property Planning Network | Free Professional Listings | Washington State"
        description="Real Property Planning features trusted professionals serving seniors, families, and estates throughout Washington State. Free listings for qualifying professionals — apply today."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema
        items={[{ name: "Join the Network", url: "/join-the-network" }]}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
                Join the Network
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight">
                Join the Real Property Planning Network
              </h1>
              <p className="text-lg text-primary-foreground/70 leading-relaxed mt-4">
                Free exposure for professionals who serve seniors, families, and estates in Washington State.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Who This Is For */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                Who This Is For
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Real Property Planning is a growing professional resource hub serving families navigating <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">senior transitions</Link>, <Link to="/probate-estate-sales" className="text-accent hover:text-gold underline underline-offset-4">probate</Link>, inherited property, and estate administration throughout Washington State.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The families and professionals who visit this site are actively looking for specialists like you.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The Real Property Planning network currently includes — or has space for — professionals in the following areas:
              </p>
              <ul className="space-y-3">
                {professionalCategories.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-lg leading-relaxed mt-8">
                If your work serves this community — and you serve families in Washington State — there is likely a place for you here.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: What You Get */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-10 text-center">
                What You Get
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-7">
                    <h3 className="font-serif text-lg text-foreground font-semibold mb-3">
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

        {/* Section 3: What It Costs */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                What It Costs
              </h2>
              <p className="text-2xl font-semibold text-gold mb-4">
                Currently free for qualifying professionals.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Real Property Planning is actively building its network and is not currently charging for professional listings. The goal right now is simple: connect the right professionals with the families and colleagues who need them.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As the platform grows and the value of a featured listing becomes clear, there may be an opportunity for enhanced or premium listing options in the future. But getting listed today costs nothing.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: How It Works */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-10 text-center">
                How It Works
              </h2>
              <div className="space-y-8">
                {steps.map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/20 text-gold font-bold text-lg shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                        {item.step}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Geographic Coverage */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                Geographic Coverage
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Real Property Planning currently focuses on the Puget Sound region and Washington State, with particular depth in:
              </p>
              <p className="text-foreground font-semibold text-lg mb-6">
                <Link to="/king-county" className="text-accent hover:text-gold underline underline-offset-4">King County</Link> · <Link to="/snohomish-county" className="text-accent hover:text-gold underline underline-offset-4">Snohomish County</Link> · <Link to="/pierce-county" className="text-accent hover:text-gold underline underline-offset-4">Pierce County</Link> · <Link to="/kitsap-county" className="text-accent hover:text-gold underline underline-offset-4">Kitsap County</Link> · <Link to="/counties/skagit" className="text-accent hover:text-gold underline underline-offset-4">Skagit County</Link>
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Professionals serving any of these areas — or Washington State more broadly — are welcome to apply. As the network grows, geographic coverage will expand.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Already Part of the Network */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-8 text-center">
                Already Part of the Network
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
                Real Property Planning currently features professionals including:
              </p>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-7">
                  <p className="font-semibold text-foreground">Eric Rovner</p>
                  <p className="text-muted-foreground">
                    Vice President of Marketing, <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">HB Move Management</Link> · Hansen Bros. Moving &amp; Storage
                  </p>
                  <p className="text-sm text-muted-foreground/70 mt-1">Senior Move Management</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-7">
                  <p className="font-semibold text-foreground">Maria Corbu</p>
                  <p className="text-muted-foreground">
                    Owner, Victoria 1 Adult Family Home
                  </p>
                  <p className="text-sm text-muted-foreground/70 mt-1">Memory Care · Seattle</p>
                </div>
                <p className="text-muted-foreground text-center italic">
                  And more being added regularly
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
                Ready to Be Found by the Families Who Need You?
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
                Getting listed on Real Property Planning is free, straightforward, and puts your services in front of a targeted audience that is actively looking for professionals like you.
              </p>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
                Reach out to start the conversation. There's no commitment required — just a brief discussion about your services and how Real Property Planning can help connect you with the right clients and colleagues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a href="tel:+12069003015">
                  <Button variant="gold" size="lg">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                    (206) 900-3015
                  </Button>
                </a>
                <a href="mailto:david@realpropertyplanning.com">
                  <Button variant="gold" size="lg">
                    <img src={iconEmail3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                    david@realpropertyplanning.com
                  </Button>
                </a>
              </div>
              <p className="text-primary-foreground/50 text-base">
                Or use the{" "}
                <Link to="/contact" className="text-gold hover:text-gold/80 underline underline-offset-4">
                  contact form
                </Link>{" "}
                to introduce yourself and your services.
              </p>
            </div>
          </div>
        </section>

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default JoinTheNetwork;
