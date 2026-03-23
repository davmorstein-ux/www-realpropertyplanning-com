import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { realEstateAgentSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Phone, Mail, Scale, Heart, Home, FileText, Clock, Shield, 
  CheckCircle, Users, Briefcase, ArrowRight, ChevronRight,
  Star, Award, Building, Handshake, MapPin
} from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import daveHeadshot from "@/assets/dave-headshot.jpg";
import alcaLogo from "@/assets/alca-corporate-partner.png";
import daveHeadshot2 from "@/assets/dave-headshot-2.jpg";
import coupleWritingWill from "@/assets/couple-writing-will.png";
import heroHome from "@/assets/hero-home.jpg";
import AgentCredentialBlock from "@/components/AgentCredentialBlock";
import ServiceNavTiles from "@/components/ServiceNavTiles";

const services = [
  {
    title: "Senior Relocation Home Sales",
    description: "Helping seniors and their families plan and complete the sale of a long‑time home, including timing, preparation, and coordinating trusted local vendors.",
    link: "/senior-transitions"
  },
  {
    title: "Estate & Inherited Property Sales",
    description: "Guiding executors and heirs through pricing, preparation, and sale of inherited homes so the estate can be settled with clarity and minimal stress.",
    link: "/probate-estate-sales"
  },
  {
    title: "Probate Real Estate Sales",
    description: "Working alongside probate attorneys and personal representatives to market and sell property within court and estate timelines.",
    link: "/probate-estate-sales"
  },
  {
    title: "Trust & Fiduciary Property Sales",
    description: "Assisting trustees and fiduciaries with valuation, marketing, and sale of residential real estate while honoring their legal responsibilities.",
    link: "/executors"
  },
  {
    title: "Clean‑Out & Preparation Coordination",
    description: "Coordinating clean‑out, haul‑away, basic repairs, and staging resources so the property is ready for market without the family managing every detail.",
    link: "/how-the-process-works"
  },
  {
    title: "Home Value & Market Analysis",
    description: "Providing clear, data‑driven opinions of value and market conditions for seniors, executors, and attorneys who need to understand their options before selling.",
    link: "/why-valuation-matters"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Review the property, timeline, parties involved, and current circumstances."
  },
  {
    step: "02",
    title: "Property Assessment",
    description: "Evaluate condition, marketability, likely buyer profile, and possible sale approaches."
  },
  {
    step: "03",
    title: "Value & Strategy Guidance",
    description: "Discuss pricing considerations, as-is versus improvement options, timing, and likely next steps."
  },
  {
    step: "04",
    title: "Preparation Coordination",
    description: "Coordinate clean-out, repairs, vendor access, staging, and sale-readiness as needed."
  },
  {
    step: "05",
    title: "Marketing & Sale Execution",
    description: "Launch with a strategic sales plan designed to attract qualified buyers and maximize exposure."
  },
  {
    step: "06",
    title: "Transaction Management",
    description: "Guide the transaction from listing through closing with consistent communication and oversight."
  }
];

const serviceAreas = [
  {
    county: "King County",
    href: "/counties/king",
    cities: "Seattle, Bellevue, Kirkland, Redmond, Renton, Kent, Federal Way & more"
  },
  {
    county: "Snohomish County",
    href: "/counties/snohomish",
    cities: "Everett, Edmonds, Lynnwood, Marysville, Lake Stevens, Mukilteo & more"
  },
  {
    county: "Pierce County",
    href: "/counties/pierce",
    cities: "Tacoma, Puyallup, Lakewood, University Place, Bonney Lake & more"
  },
  {
    county: "Kitsap County",
    href: "/counties/kitsap",
    cities: "Bremerton, Silverdale, Poulsbo, Bainbridge Island, Port Orchard & more"
  }
];

const homepageFaqs = [
  {
    question: "Do I need probate before selling an inherited home in Washington?",
    answer: "It depends on how the property is titled and the estate structure. In many cases, probate or letters testamentary are required before a sale can proceed. Real Property Planning helps families and executors understand what's needed and how to move forward efficiently.",
    link: "/faq"
  },
  {
    question: "What is probate real estate?",
    answer: "Probate real estate refers to property that must be sold as part of settling a deceased person's estate. The process involves court oversight, specific timelines, and legal requirements that differ from a standard home sale.",
    link: "/faq"
  },
  {
    question: "Do I need a specialized agent to sell a probate property?",
    answer: "Yes — probate sales involve unique legal and procedural requirements. An agent with probate experience helps avoid costly delays, court complications, and pricing errors.",
    link: "/faq"
  },
  {
    question: "What counties does David Stein serve?",
    answer: "David serves King, Snohomish, Pierce, Skagit, and Kitsap Counties throughout Western Washington.",
    link: "/counties"
  },
  {
    question: "What is the difference between a real estate broker and a certified appraiser?",
    answer: "A broker facilitates the sale of property, while a certified appraiser provides independent valuations. David holds both credentials, giving clients professional pricing insight grounded in appraisal methodology — not just market guesswork.",
    link: "/why-valuation-matters"
  },
  {
    question: "Can you help if the property needs repairs before sale?",
    answer: "Yes. David advises families on whether to sell as-is or invest in targeted improvements, based on a valuation-informed analysis of likely return.",
    link: "/how-the-process-works"
  },
  {
    question: "How do senior transitions work?",
    answer: "David helps families coordinate the sale of a longtime family home when a senior is moving to assisted living, independent living, or a smaller residence — with sensitivity to emotional and logistical complexity.",
    link: "/senior-transitions"
  },
  {
    question: "Do you work with attorneys and fiduciaries?",
    answer: "Yes. David regularly works alongside probate attorneys, estate attorneys, trustees, and professional fiduciaries to ensure the real estate component of estate administration is handled accurately and efficiently.",
    link: "/for-attorneys"
  },
  {
    question: "How is an estate property priced?",
    answer: "David uses his background as a certified residential appraiser to inform pricing — evaluating condition, comparable sales, and market trends to set a defensible and competitive list price.",
    link: "/why-valuation-matters"
  },
];

const howIHelp = [
  { text: "Assess property condition, value, and marketability", icon: Home },
  { text: "Develop a sale strategy tailored to legal and family timelines", icon: Clock },
  { text: "Coordinate cleanout, repairs, staging, and preparation", icon: Building },
  { text: "Provide pricing guidance informed by appraisal-level insight", icon: Scale },
  { text: "Communicate clearly with all parties throughout the process", icon: Users },
  { text: "Manage the sale from listing through closing", icon: Shield },
];

const whoIWorkWith = [
  { group: "Legal Professionals", members: "Estate planning attorneys, probate attorneys, elder law attorneys, fiduciaries" },
  { group: "Estate Representatives", members: "Executors, personal representatives, trustees, estate administrators" },
  { group: "Financial Advisors", members: "CPAs, financial planners, wealth managers" },
  { group: "Families & Individuals", members: "Adult children, heirs, seniors planning a move, families selling inherited property" },
];

const jsonLd = realEstateAgentSchema;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homepageFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const Index = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-faq-jsonld", "true");
    script.textContent = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Senior Relocation & Estate Property Sales | David Stein | Puget Sound"
        description="David Stein, real estate broker serving the Puget Sound region — specializing in senior relocation, estate and inherited property sales, probate real estate, and trust property sales in King, Snohomish, and Pierce counties."
        jsonLd={jsonLd}
      />
      <Header />
      
      {/* Mobile Quick Nav */}
      <div className="md:hidden bg-white border-b border-border px-4 py-3">
        <div className="flex gap-2">
          <Link to="/probate-estate-sales" className="flex-1">
            <Button
              variant="outline"
              className="w-full border-border text-foreground font-semibold text-[14px] h-[44px] rounded-lg hover:bg-muted"
            >
              View Services
            </Button>
          </Link>
          <Link to="/for-attorneys" className="flex-1">
            <Button
              variant="outline"
              className="w-full border-border text-foreground font-semibold text-[14px] h-[44px] rounded-lg hover:bg-muted"
            >
              For Attorneys
            </Button>
          </Link>
          <Link to="/contact" className="flex-1">
            <Button
              className="w-full bg-[hsl(216,65%,34%)] hover:bg-[hsl(216,65%,28%)] text-white font-semibold text-[14px] h-[44px] rounded-lg"
            >
              Contact
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start">
            {/* Left Column */}
            <div className="max-w-2xl">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-foreground font-bold leading-[1.12] mb-4">
                Real Estate Guidance for Life's Most Important Property Transitions
              </h1>

              <p className="text-[17px] text-muted-foreground/90 leading-relaxed mb-6 font-medium">
                Specializing in probate, inherited property, trusts, and senior downsizing across the Puget Sound region and Western Washington.
              </p>

              <p className="text-[16px] text-muted-foreground leading-relaxed mb-4">
                David Stein works with executors, probate attorneys, and families to coordinate valuation, clean‑out, repairs, and sale of homes across King, Snohomish, Pierce, and Kitsap counties.
              </p>

              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Experienced with court timelines, fiduciary obligations, and working with out‑of‑area decision makers. If you are navigating a transition or handling an estate, contact David for a clear, step‑by‑step plan and a no‑pressure consultation.
              </p>

              <div className="bg-card border border-border rounded-xl p-5 mb-8">
                <p className="font-serif text-foreground font-semibold text-base mb-3">Situations We Commonly Help With</p>
                <ul className="space-y-2">
                  {[
                    "Selling a parent's home after they pass",
                    "Selling a home from a trust or estate",
                    "Helping an executor or personal representative manage real property",
                    "Downsizing from a longtime family home into senior living",
                    "Coordinating sale of an inherited property among multiple heirs",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-[15px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-0">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-[hsl(216,65%,34%)] hover:bg-[hsl(216,65%,28%)] text-white font-semibold px-8 rounded-lg text-base h-[52px] w-full sm:w-auto focus-visible:ring-gold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border text-foreground hover:bg-muted font-semibold px-8 rounded-lg text-base h-[52px] w-full sm:w-auto focus-visible:ring-gold"
                  >
                    View Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column – David Stein Headshot */}
            <div className="flex flex-col items-center lg:pt-2">
              <div className="relative">
                <div className="w-64 h-80 sm:w-72 sm:h-[22rem] rounded-2xl overflow-hidden border-4 border-gold/30 shadow-2xl">
                  <img
                    src={daveHeadshot2}
                    alt="David Stein, real estate broker specializing in senior relocation and estate property sales in the Puget Sound region"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-64 h-80 sm:w-72 sm:h-[22rem] rounded-2xl border-2 border-gold/20 -z-10" />
              </div>
              <AgentCredentialBlock />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-6 bg-background border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <p className="text-center text-muted-foreground text-[15px] leading-relaxed">
            <span className="font-serif font-semibold text-foreground">Who We Serve:</span>{" "}
            For attorneys, executors, trustees, seniors, and families managing property during probate, estate settlement, or major life transitions.
          </p>
        </div>
      </section>

      {/* Who We Help — Families & Individuals */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
              Who We Help
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              We work with seniors, adult children, and families who are facing major property decisions during life transitions, probate, or estate settlement. Our goal is to take the pressure off the real estate side, provide clear next steps, and coordinate trusted local resources so you don't have to manage every detail yourself.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Briefcase,
                title: "Attorneys",
                text: "Support for probate attorneys and their clients when real property is involved in estate administration, trust settlement, or senior transitions.",
              },
              {
                icon: FileText,
                title: "Executors & Personal Representatives",
                text: "Practical guidance for those responsible for managing estate property decisions, preparing a home for sale, and navigating next steps with confidence.",
              },
              {
                icon: Shield,
                title: "Trustees & Fiduciaries",
                text: "Professional real estate insight for trust-related property decisions, valuation questions, sale preparation, and coordinated transitions.",
              },
              {
                icon: Heart,
                title: "Seniors & Families",
                text: "Thoughtful support for senior relocation, downsizing, changing care needs, and other significant housing transitions.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl border border-border p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <card.icon className="w-7 h-7 text-gold mb-4" />
                <h3 className="font-serif text-lg text-foreground font-semibold mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted font-semibold px-8 rounded-lg text-base h-[52px]"
              >
                View Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section data-nosnippet className="bg-background border-b border-border py-5">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-x-8 gap-y-3">
            {[
              "Real Estate Broker",
              "State Certified Appraiser",
              "Senior Relocation & Estate Property Focus",
              "Serving the Puget Sound Region",
            ].map((indicator, index) => (
              <div key={index} className="flex items-center gap-2 text-base text-muted-foreground font-medium">
                <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                <span>{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Reach Out */}
      <section className="py-16 lg:py-20 bg-ivory">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
                Why Clients and Referral Partners Choose Real Property Planning
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Dual-credentialed: broker + state certified appraiser",
                  "Trusted by attorneys, executors, trustees, and families",
                  "Specialized in senior relocation, estates, trusts, and probate",
                  "Local expertise across King, Snohomish, and Pierce counties"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3.5 bg-secondary rounded-xl text-foreground text-[15px] font-medium">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-ivory border-y border-border py-6">
        <div className="container px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap md:justify-center gap-x-8 gap-y-3">
            {[
              "Licensed Real Estate Broker — Washington State",
              "State Certified Residential Appraiser",
              "20+ Years of Real Estate & Valuation Experience",
              "King · Snohomish · Pierce Counties",
            ].map((indicator, index) => (
              <div key={index} className="flex items-center gap-2 text-base text-muted-foreground font-medium">
                <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                <span>{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold font-bold tracking-widest uppercase mb-3 text-base">
              What David Stein Does
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
              How We Help With Senior Relocation & Estate Property
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Senior relocation and estate-related property sales require a different approach — one that accounts for legal timelines, family dynamics, deferred maintenance, and careful pricing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {howIHelp.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="text-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Referral Partners */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-bold tracking-widest uppercase mb-3 text-base">
                Clients &amp; Referral Partners
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                A Trusted Resource for Professionals
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We regularly partner with probate and estate attorneys, professional fiduciaries, financial advisors, and trust officers who need a reliable real estate resource in Western Washington and the Puget Sound region. As a real estate broker and certified appraiser, we provide clear opinions of value, market strategy, and on‑the‑ground coordination so you can stay focused on your legal and fiduciary responsibilities.
              </p>
              <div className="space-y-6">
                {whoIWorkWith.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{category.group}</h3>
                    <p className="text-muted-foreground text-[15px]">{category.members}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy rounded-lg p-10 lg:p-12">
              <Award className="w-10 h-10 text-gold mb-6" />
              <h3 className="font-serif text-2xl text-primary-foreground font-semibold mb-4">
                Why Professionals Refer David Stein
              </h3>
              <p className="text-primary-foreground/85 leading-relaxed mb-6 text-[15px]">
                Senior relocation and estate-related real estate demands careful judgment, discretion, and coordination across multiple parties. David's dual credentials and two decades of focused experience make Real Property Planning a natural fit for high-trust referrals.
              </p>
              <ul className="space-y-3">
                {[
                  "Broker + certified appraiser — rare dual perspective",
                  "Calm, steady communication in sensitive situations",
                  "Experienced with multi-party coordination",
                  "Practical guidance from first call through closing",
                  "Trusted by attorneys, CPAs, and financial planners"
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-primary-foreground/90 text-[15px]">
                    <CheckCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link to="/for-attorneys">
                  <Button size="sm" className="bg-gold hover:bg-gold-light text-navy font-semibold">
                    Attorney &amp; Fiduciary Resources <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold font-bold tracking-widest uppercase mb-3 text-base">
              Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
              Senior Relocation & Estate Real Estate Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className="p-8 bg-card rounded-lg border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 h-full">
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Senior & Estate Services Highlight */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-5">
              Senior & Estate Services
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              David Stein works with seniors, families, executors, and attorneys navigating senior relocation, estate and inherited property sales, and probate and trust real estate across the Puget Sound region. From initial consultation through closing, every step is coordinated with care, clarity, and professional discretion.
            </p>
            <Link to="/senior-estate-services">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted font-semibold px-8 rounded-lg text-base h-[52px]"
              >
                Learn More About Senior & Estate Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                Why Senior Relocation & Estate Property Require a Different Approach
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Selling a home tied to a senior relocation, estate, trust, or family transition is fundamentally different from a conventional sale. Legal authority may limit timing. Multiple decision-makers may disagree. The property itself may have years of deferred maintenance.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                David Stein brings both the market knowledge of an experienced broker and the analytical eye of a certified appraiser — helping clients navigate these situations with clarity, realistic expectations, and a workable plan.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/how-the-process-works">
                  <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted">
                    See the Process <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link to="/why-valuation-matters">
                  <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted">
                    Why Valuation Matters <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden border border-border shadow-lg">
                <img
                  src={coupleWritingWill}
                  alt="A couple reviewing estate planning and inherited property documents at their kitchen table"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="container px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold font-bold tracking-widest uppercase mb-3 text-base">
              Service Areas
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
              Serving the Puget Sound Region
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Serving clients throughout Western Washington and the greater Puget Sound region, including King, Snohomish, Pierce, and Kitsap counties.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <Link key={index} to={area.href} className="group">
                <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8 hover:bg-primary-foreground/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-gold" />
                    <h3 className="font-serif text-xl text-primary-foreground font-semibold group-hover:text-gold transition-colors">
                      {area.county}
                    </h3>
                  </div>
                  <p className="text-primary-foreground/70 text-[15px]">
                    {area.cities}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/counties">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold focus-visible:ring-gold">
                View All Service Areas
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold font-bold tracking-widest uppercase mb-3 text-base">
              The Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold">
              A Clear Path Through a Complex Time
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border border-border">
                <span className="text-gold font-serif text-3xl font-semibold">{item.step}</span>
                <h3 className="font-serif text-lg text-foreground font-semibold mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/how-the-process-works">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-primary-foreground">
                Learn More About the Process
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Attorney Feature */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Briefcase className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Referral Resource Attorneys Trust
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Estate planning and probate attorneys need a real estate professional who understands discretion, multi-party communication, and the importance of getting the property side right. David Stein works collaboratively with legal professionals to reduce friction and support their clients through sensitive senior relocation and estate property transitions.
            </p>
            <Link to="/for-attorneys">
              <Button className="bg-gold hover:bg-gold-light text-navy font-semibold">
                Attorney & Fiduciary Resources
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <TestimonialsSection />

      {/* FAQ Preview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-bold tracking-widest uppercase mb-3 text-base">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold">
              Answers to Questions About Estate & Inherited Property
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-5">
            {homepageFaqs.map((faq, index) => (
              <Link key={index} to={faq.link} className="block group">
                <div className="bg-card p-6 rounded-xl border border-border hover:border-gold/30 transition-colors">
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2 group-hover:text-gold transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/faq">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-primary-foreground">
                View All FAQs
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Not Sure Where to Start? */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Many families contact David Stein when they are trying to figure out what to do with a home during a major life transition — such as senior relocation, probate, downsizing, or a move to assisted living.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              These situations often involve legal, financial, and housing decisions, and it can be helpful to speak with someone who understands how the real estate side fits into the bigger picture.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              If you are navigating one of these situations, David is available as a resource.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-[hsl(216,65%,34%)] hover:bg-[hsl(216,65%,28%)] text-white font-semibold px-8 rounded-lg text-base h-[52px] w-full sm:w-auto focus-visible:ring-gold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted font-semibold px-8 rounded-lg text-base h-[52px] w-full sm:w-auto focus-visible:ring-gold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact David Stein
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-8">
              Professional Memberships &amp; Affiliations
            </h2>
            <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer" className="inline-block mb-6">
              <img
                src={alcaLogo}
                alt="Aging Life Care Association Corporate Partner"
                className="h-24 md:h-28 w-auto mx-auto"
                loading="lazy"
              />
            </a>
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
              David Stein and Real Property Planning are proud Corporate Partners of the Aging Life Care Association. Aging Life Care Professionals help older adults and their families navigate complex care, housing, and life transitions. Working alongside these professionals supports a coordinated approach when housing decisions become part of the process.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
              Ready to Discuss a Property Situation?
            </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Start with a confidential conversation. Whether you are an attorney, executor, trustee, family member, or financial professional, David Stein provides clear, experienced guidance tailored to your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-navy hover:bg-navy-light text-primary-foreground font-semibold px-8 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-navy text-navy hover:bg-navy hover:text-primary-foreground w-full sm:w-auto"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send a Message
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

export default Index;
