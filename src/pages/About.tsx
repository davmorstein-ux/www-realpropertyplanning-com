import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { realEstateAgentSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoldCheck3D from "@/components/GoldCheck3D";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


import daveHeadshot from "@/assets/david-stein-real-estate-agent-seattle.webp";


/* Mirrors the homepage funnel tiles (tileMeta in RPPHomeV3.tsx) minus the
   photography. Colours and destinations are copied from there deliberately —
   if the homepage tiles change, change these to match.

   ACCESSIBILITY: white on the orange (#D97706) measures 3.19:1. That passes
   WCAG AA only under the LARGE-text threshold (3:1), not the normal-text one
   (4.5:1). The labels must therefore stay bold at text-xl or larger. Do not
   reduce the label size without darkening the orange.

   Labels are hardcoded English; the homepage equivalents run through i18next,
   so these need translation keys before the non-English locales are correct. */
const nextSteps = [
  { label: "I Want to Plan Ahead", href: "/planning-before-a-crisis", bgColor: "#D97706" },
  { label: "I'm Helping an Aging Parent", href: "/helping-an-aging-parent", bgColor: "#246044" },
  { label: "I'm Handling an Estate", href: "/estate-probate-inherited-property", bgColor: "#25597e" },
  { label: "I Need a Professional", href: "/building-your-trusted-professional-team", bgColor: "#5d2f74" },
];

const About = () => {
  const reducedMotion = useReducedMotion();


  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Real Property Planning | Senior Transitions & Estate Hub"
        description="Washington State's resource hub for senior transitions, probate, and estate real estate — coordinating brokers, appraisers, and trusted professionals."
        schemaJson={realEstateAgentSchema}
      />
      <BreadcrumbSchema items={[{ name: "About", url: "/about" }]} />
      <Header />
      <main id="main-content">
        {/* About Real Property Planning — now the first thing on the page.
            The decorative hero image was removed, so this heading is promoted
            from h2 to the page's real h1 (it was previously an sr-only h1
            inside the hero). Every page still needs exactly one h1. */}
        <section className="pt-10 pb-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-8 leading-tight">
                About Real Property Planning
              </h1>
              <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
                <p>
                  An independent educational hub for seniors, families, and the professionals who serve them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Site Exists */}
        <section className="py-12 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Why This Site Exists</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Some of life's most consequential decisions happen during its hardest moments — when a parent passes away, when a family home needs to be sold, when a loved one can no longer live independently. These transitions involve real estate, legal paperwork, financial decisions, and family dynamics all at once. Most people have never faced any of it before.
                </p>
                <p>
                  Real Property Planning was built to help.
                </p>
                <p>
                  This site is an independent educational hub focused on probate, estate real estate, inherited property, senior housing transitions, and the many topics that intersect with them. It exists to give seniors, families, executors, and trustees plain-language guidance — and to help them understand what kinds of professionals can help, and when.
                </p>
                <p>
                  Real Property Planning does not provide services. It does not represent any professional or company featured on this site. It exists for one purpose: to make an overwhelming process feel a little more manageable for the people going through it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Who It's For</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>This resource was built for:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>Seniors thinking ahead about housing, estate planning, and what comes next</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>Adult children and family members helping aging parents navigate major transitions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>Executors and trustees managing real property as part of an estate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>Professionals — attorneys, CPAs, financial planners, and care managers — looking for reliable educational resources to share with the families they serve</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Find Here */}
        <section className="py-12 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">What You'll Find Here</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>Plain-language education on probate, estate transitions, and senior housing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>Guidance on what types of professionals can help and when to involve them</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>A directory of independent professionals in relevant fields</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>Resources to help you ask better questions and make more informed decisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About the Founder */}
        <section className="py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">About the Founder</h2>

              {/* Headshot floats so the biography text wraps around it, sitting
                  directly beneath the heading. It is a sibling of (not inside)
                  the prose block: a float preceding a block-level container
                  still shortens that container's line boxes, which is what
                  produces the inset-and-wrap effect. */}
              <div className="float-left mr-6 mb-4 w-[150px] sm:w-[180px]">
                <div className="rounded-2xl overflow-hidden border-2 border-gold/20 shadow-md">
                  <img
                    src={daveHeadshot}
                    alt="David Stein licensed real estate broker and certified appraiser Kirkland Washington"
                    className="w-full h-auto object-cover object-top"
                    loading="lazy" sizes="(max-width: 640px) 150px, 180px" decoding="async" width={720} height={940} />
                </div>
                <p className="mt-3 font-serif text-xl text-foreground font-bold leading-tight text-center">
                  David Stein
                </p>
                <p className="text-muted-foreground text-sm mt-1 text-center">Founder, Real Property Planning</p>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Real Property Planning was founded by David Stein, a Washington State Licensed Real Estate Broker and Washington State Certified Residential Appraiser with over 20 years of experience in both disciplines.
                </p>
                <p>
                  David spent years working alongside families through probate sales, estate appraisals, and senior housing transitions — and kept seeing the same pattern. People weren't short on options. They were short on clarity. Executors didn't know which step came first. Adult children didn't know who to trust. Families were navigating attorneys, appraisers, real estate agents, and care professionals all separately, with no one connecting the dots.
                </p>
                <p>
                  Real Property Planning is his answer to that problem — a resource designed to fill the gap he kept encountering, and to give anyone touched by estate property, probate, or senior transitions a place to find honest guidance without feeling overwhelmed.
                </p>
                <p>
                  David's background spans construction and contracting, residential appraisal, real estate brokerage, and e-commerce — a combination that shaped both his analytical approach to property and his instinct for building systems that connect people with what they need.
                </p>
                <p>
                  He founded this site because he believes the families going through these transitions deserve better than confusion. That belief is what drives every page on it.
                </p>
                <p>
                  David Stein's real estate brokerage and appraisal services are offered separately through his own practice — not through Real Property Planning.
                </p>
              </div>
              {/* Clears the floated headshot. Without this, a short viewport can
                  let the following section wrap up alongside the image. */}
              <div className="clear-both" />
            </div>
          </div>
        </section>

        {/* Contact — this section exists because Contact was removed from the
            top navigation. It is the only place in the header-level structure
            where contact details now live, so do not delete it without first
            restoring the nav link. Details match the footer exactly. */}
        <section className="py-12 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Contact</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Questions about the site, a correction, or a professional who would like to be considered for the directory — all reach the same place.
                </p>
              </div>

              <div className="mt-8 bg-card border border-border rounded-xl px-7 py-7">
                <dl className="space-y-5">
                  <div>
                    <dt className="text-foreground font-semibold text-lg mb-1">Phone</dt>
                    <dd>
                      <a href="tel:2069003015" className="text-accent text-xl font-semibold underline underline-offset-4">
                        (206) 900-3015
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-foreground font-semibold text-lg mb-1">Email</dt>
                    <dd>
                      
                        <a href="mailto:info@realpropertyplanning.com"
                        className="text-accent text-xl font-semibold underline underline-offset-4 break-words"
                      >
                        info@realpropertyplanning.com
                      </a>
                    </dd>
                  </div>
                </dl>

               <style>{`
                  .rpp-contact-btn.rpp-contact-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 52px;
                    padding: 0.85rem 1.75rem;
                    border-radius: 8px;
                    font-family: 'DM Sans', system-ui, sans-serif;
                    font-size: 18px !important;
                    font-weight: 700;
                    text-decoration: none !important;
                    text-transform: none !important;
                    line-height: 1.2;
                    transition: background-color 0.15s ease, color 0.15s ease;
                  }
                  .rpp-contact-btn--solid.rpp-contact-btn--solid {
                    background: #1B3A6B;
                    color: #ffffff !important;
                    border: 2px solid #1B3A6B;
                  }
                  .rpp-contact-btn--solid.rpp-contact-btn--solid:hover {
                    background: #142d54;
                    border-color: #142d54;
                  }
                  .rpp-contact-btn--outline.rpp-contact-btn--outline {
                    background: #ffffff;
                    color: #1B3A6B !important;
                    border: 2px solid #1B3A6B;
                  }
                  .rpp-contact-btn--outline.rpp-contact-btn--outline:hover {
                    background: #1B3A6B;
                    color: #ffffff !important;
                  }
                  .rpp-contact-btn.rpp-contact-btn:focus-visible {
                    outline: 3px solid #1B3A6B;
                    outline-offset: 3px;
                  }
                `}</style>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a href="tel:2069003015" className="rpp-contact-btn rpp-contact-btn rpp-contact-btn--solid rpp-contact-btn--solid bg-transparent w-full sm:w-auto">
                    Call (206) 900-3015
                  </a>
                  <Link to="/contact" className="rpp-contact-btn rpp-contact-btn rpp-contact-btn--outline rpp-contact-btn--outline bg-transparent w-full sm:w-auto">
                    Send a Message
                  </Link>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mt-6">
                Real Property Planning is an educational hub and does not provide brokerage, appraisal, legal, or tax
                services. Messages about those services are handled by David Stein personally through his own practice.
              </p>
            </div>
          </div>
        </section>

        {/* A Note on Independence */}
        <section className="py-12 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">A Note on Independence</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  The professionals and companies referenced on this site are entirely independent. They are not employees, partners, members, or affiliates of Real Property Planning. Their inclusion on this site is not an endorsement or guarantee of their services. Always verify the credentials and suitability of any professional before engaging them.
                </p>
                <p>
                  Nothing on this site constitutes legal, financial, real estate, or any other professional advice. Always consult a qualified, licensed professional for guidance specific to your situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Here Is What You Do Next */}
        <section className="py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* index.css carries global !important rules on links (underline)
                  and font sizes that silently defeat Tailwind classes and inline
                  styles. Doubled class selectors raise specificity enough to win.
                  The bg-transparent token in the className below is also load-
                  bearing: it satisfies main a:not([class*="bg-"]), which would
                  otherwise repaint the label text. */}
              <style>{`
                .rpp-next-step.rpp-next-step {
                  text-decoration: none !important;
                }
                .rpp-next-step.rpp-next-step span {
                  color: #ffffff !important;
                }
                .rpp-next-step.rpp-next-step .rpp-next-step-label {
                  font-size: 1.25rem !important;
                  line-height: 1.375 !important;
                }
              `}</style>
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">
                Here Is What You Do Next
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {nextSteps.map((step) => (
                  <Link
                    key={step.href}
                    to={step.href}
                    className="rpp-next-step bg-transparent group flex items-center justify-between gap-3 rounded-xl px-6 py-6 no-underline transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    style={{ backgroundColor: step.bgColor }}
                  >
                    <span className="rpp-next-step-label text-white font-bold text-xl leading-snug">
                      {step.label}
                    </span>
                    <span aria-hidden="true" className="text-white text-2xl shrink-0">
                      &#8250;
                    </span>
                  </Link>
                ))}
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

export default About;
