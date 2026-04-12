import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

const faqs = [
  {
    question: "Where should families start when a home is part of a major life transition?",
    answer: "Start by identifying the type of transition — probate, trust administration, downsizing, or an inherited property situation. Each involves different timelines and requirements. Real Property Planning can help you understand the real estate side and connect you with the right professionals for other aspects of the process.",
  },
  {
    question: "Can Real Property Planning help if we don't know what to do yet?",
    answer: "Absolutely. Many families reach out before they have a clear plan. A confidential conversation with David Stein can help you understand your options, identify next steps, and determine which professionals you may need to involve.",
  },
  {
    question: "What types of professionals are typically involved in an estate or senior transition?",
    answer: "Depending on the situation, you may work with attorneys, CPAs, senior move managers, estate sale companies, financial advisors, care coordinators, and a real estate professional. Real Property Planning helps coordinate the real estate piece alongside these other professionals.",
  },
  {
    question: "Is Real Property Planning a referral service?",
    answer: "No. Real Property Planning is a professional real estate brokerage led by David Stein, a licensed broker and certified appraiser. The resource pages on this site are provided as a helpful starting point — not as paid referrals or endorsements.",
  },
];
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import people3d from "@/assets/real-estate-agent-team-icon-washington.webp";
import iconHome3d from "@/assets/icons/probate-property-home-icon-washington.webp";
import iconDocument3d from "@/assets/icons/probate-document-icon-washington.webp";
import iconBriefcase3d from "@/assets/icons/real-estate-agent-briefcase-icon-washington.webp";
import iconHeartHands3d from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import iconHandshake3d from "@/assets/icons/real-estate-agent-handshake-icon-washington.webp";
import iconBookOpen3d from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";

const SITE_URL = "https://realpropertyplanning.com";

const situations = [
  "Moving a parent into assisted living, memory care, or another senior living community",
  "Selling a home after the death of a family member",
  "Preparing an inherited property for sale",
  "Downsizing after a health or care-related transition",
  "Coordinating legal, financial, and housing-related decisions during estate administration",
];

const resourceCategories = [
  {
    href: "/resources/senior-move-managers",
    title: "Senior Move Managers",
    description:
      "Professionals who coordinate and manage the physical and emotional aspects of relocating seniors.",
    icon: null,
    image: people3d,
  },
  {
    href: "/resources/estate-sale-companies",
    title: "Estate Sale Companies",
    description:
      "Companies that organize, price, and conduct estate sales for personal property and household contents.",
    iconSrc: iconHome3d,
  },
  {
    href: "/resources/probate-estate-attorneys",
    title: "Probate & Estate Attorneys",
    description:
      "Attorneys who guide families and fiduciaries through the probate process and estate administration.",
    iconSrc: iconDocument3d,
  },
  {
    href: "/resources/cpas-financial-advisors",
    title: "CPAs & Financial Advisors",
    description:
      "Tax and financial professionals who assist with estate tax, capital gains, and financial planning related to inherited property.",
    iconSrc: iconBriefcase3d,
  },
  {
    href: "/resources/senior-living-communities",
    title: "Senior Living Communities",
    description:
      "Assisted living, independent living, and memory care communities throughout Washington State.",
    iconSrc: iconHeartHands3d,
  },
  {
    href: "/resources/property-preparation-services",
    title: "Property Preparation Services",
    description:
      "Cleanout, staging, repair, and preparation services to get estate and transition properties market-ready.",
    iconSrc: iconHome3d,
  },
  {
    href: "/resources/moving-relocation-services",
    title: "Moving & Relocation Services",
    description:
      "Moving companies and relocation specialists experienced with estate and senior transitions.",
    icon: null,
    image: people3d,
  },
];

const helpfulGuides = [
  {
    href: "/guides/how-probate-real-estate-works",
    title: "How Probate Real Estate Sales Work in Washington",
    description: "A comprehensive guide to the probate sale process — from legal authority to pricing and closing.",
  },
  {
    href: "/guides/what-executors-should-do",
    title: "What Executors Should Do Before Selling",
    description: "Practical first steps for executors and personal representatives managing inherited property.",
  },
  {
    href: "/guides/appraisal-vs-cma",
    title: "Appraisal vs. CMA",
    description: "Understanding the difference — and why it matters in estate and probate situations.",
  },
  {
    href: "/guides/out-of-state-families",
    title: "Managing a Property Sale From Out of State",
    description: "How remote executors, trustees, and families can manage a Washington property sale.",
  },
  {
    href: "/guides/senior-transition-differences",
    title: "How Senior Sales Differ From Ordinary Sales",
    description: "What families should expect when helping a parent sell a longtime home.",
  },
  {
    href: "/guides/inherited-house-washington",
    title: "What to Do With an Inherited House",
    description: "Options, decision factors, and practical guidance when you inherit property in Washington.",
  },
  {
    href: "/how-to-move-elderly-parents",
    title: "How to Move Elderly Parents",
    description: "A compassionate guide for families planning a senior housing transition in Washington State.",
  },
  {
    href: "/how-the-process-works",
    title: "How the Process Works",
    description: "A step-by-step overview of how David guides clients from initial conversation through closing.",
  },
];

const professionalPages = [
  {
    href: "/for-attorneys",
    title: "For Attorneys",
    description:
      "How Real Property Planning works with attorneys and their clients when real property is part of probate, trust, or estate matters.",
  },
  {
    href: "/for-senior-living-professionals",
    title: "For Senior Living & Transition Professionals",
    description:
      "Real estate guidance for senior living communities, move managers, and professionals supporting families through later-life transitions.",
  },
  {
    href: "/for-cpas",
    title: "For CPAs",
    description:
      "Property guidance for CPAs advising clients through estate or life transitions involving real estate.",
  },
  {
    href: "/for-financial-planners",
    title: "For Financial Planners",
    description:
      "How Real Property Planning works with financial planners whose clients face housing-related decisions.",
  },
];

const jsonLd = articleSchema({
  headline: "Transition Resources for Families and Professionals",
  description:
    "A curated starting point for families, attorneys, senior living professionals, and others navigating probate, downsizing, inherited property, senior moves, and other major housing transitions.",
  url: "/transition-resources",
  datePublished: "2026-03-16",
  dateModified: "2026-03-16",
  about: [
    "Probate resources",
    "Senior transition resources",
    "Estate property guidance",
    "Downsizing help",
    "Inherited property",
  ],
});

const TransitionResources = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Transition Resources for Families & Professionals | Real Property Planning"
        description="A curated starting point for families and professionals navigating probate, downsizing, inherited property, senior moves, and other major housing transitions throughout Washington State."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema
        items={[
          {
            name: "Transition Resources",
            url: `${SITE_URL}/transition-resources`,
          },
        ]}
      />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 lg:pt-28 lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-widest uppercase mb-4 text-sm">
              Resource Hub
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] text-primary-foreground font-semibold leading-tight mb-6">
              Transition Resources for Families and Professionals
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
              A curated starting point for families, attorneys, senior living
              professionals, and others navigating probate, downsizing, inherited
              property, senior moves, and other major housing transitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#resource-categories">
                <Button variant="gold"
                  size="lg"
 className="hover:-light px-8 h-[52px] text-base rounded-lg w-full sm:w-auto"
                >
                  <img src={iconBookOpen3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain" loading="lazy" />
                  Explore Resources
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline3d"
                  className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold w-full sm:w-auto px-8 h-[52px] text-base rounded-lg"
                >
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                  Contact Real Property Planning
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* When These Resources Become Important */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              When These Resources Become Important
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
              Housing-related transitions rarely happen in isolation. Families
              often need coordinated support from multiple professionals when
              facing situations that involve a home. These are some of the most
              common moments when having the right resources makes a meaningful
              difference.
            </p>
            <ul className="space-y-4">
              {situations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-foreground text-[15px] md:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section
        id="resource-categories"
        className="py-16 lg:py-24 bg-secondary scroll-mt-20"
      >
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              Resource Categories
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-10 max-w-3xl">
              Explore trusted professionals and service providers who assist
              families during probate, estate, and senior transition situations
              throughout Washington State.
            </p>
            <div className="grid gap-4 md:gap-5">
              {resourceCategories.map((cat) => (
                <Link
                  key={cat.href}
                  to={cat.href}
                  className="card-3d group flex items-center justify-between gap-4 px-6 py-5 md:px-8 md:py-6"
                >
                  <div className="flex items-start gap-4">
                    {cat.image ? (
                      <img src={cat.image} alt="" aria-hidden="true" className="w-7 h-7 object-contain mt-1 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110" loading="lazy" />
                    ) : cat.iconSrc ? (
                      <img src={cat.iconSrc} alt="" aria-hidden="true" className="w-7 h-7 object-contain mt-1 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110" loading="lazy" />
                    ) : null}
                    <div>
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                        {cat.title}
                      </h3>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-gold shrink-0 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Guides */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              Helpful Guides
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
              Educational pages and guides designed to help families and
              professionals understand the steps, decisions, and considerations
              involved in housing-related transitions.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {helpfulGuides.map((guide) => (
                <Link
                  key={guide.href}
                  to={guide.href}
                  className="card-3d group p-5"
                >
                  <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                    {guide.title}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {guide.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Professional Referral Partners */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <img src={iconHandshake3d} alt="" aria-hidden="true" className="w-8 h-8 object-contain shrink-0" loading="lazy" />
              <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold">
                For Professional Referral Partners
              </h2>
            </div>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
              Real Property Planning works with attorneys, CPAs, financial
              planners, senior living communities, move managers, and other
              professionals who support families through complex housing
              transitions. The following pages are designed specifically for
              professionals exploring a collaborative relationship.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {professionalPages.map((page) => (
                <Link
                  key={page.href}
                  to={page.href}
                  className="card-3d group p-5"
                >
                  <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                    {page.title}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {page.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Real Property Planning Fits In */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              How Real Property Planning Fits In
            </h2>
            <p className="text-foreground text-base md:text-[17px] leading-relaxed mb-4">
              Many life transitions involve overlapping legal, financial,
              logistical, and housing decisions. Real Property Planning works
              with families and professionals to navigate the real estate side
              when a home is part of that equation — whether through probate,
              estate administration, downsizing, or a senior housing move.
            </p>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed">
              With over 20 years of experience and dual credentials as a
              licensed real estate broker and state-certified residential
              appraiser, David Stein brings the market knowledge, valuation
              insight, and professional sensitivity that these situations
              require. Real Property Planning serves families and professionals
              throughout Washington State.
            </p>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Transition Resources FAQs" />

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-primary-foreground font-semibold mb-4">
              Need help figuring out where to begin?
            </h2>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Real Property Planning is available as a resource when a home is
              part of a major life transition. Whether you are a family member,
              executor, attorney, or transition professional, we welcome the
              opportunity to help.
            </p>
            <Link to="/contact">
              <Button variant="gold"
                size="lg"
 className="hover:-light px-8 h-[52px] text-base rounded-lg"
              >
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                Start the Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default TransitionResources;
