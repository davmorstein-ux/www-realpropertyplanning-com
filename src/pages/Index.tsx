import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Phone, Mail, Scale, Heart, Home, FileText, Clock, Shield, 
  CheckCircle, Users, Briefcase, ArrowRight, ChevronRight,
  Star, Award, Building, Handshake, MapPin
} from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import daveHeadshot from "@/assets/dave-headshot.jpg";
import daveHeadshot2 from "@/assets/dave-headshot-2.jpg";
import coupleWritingWill from "@/assets/couple-writing-will.png";
import logo from "@/assets/logo.png";
import expRealtyLogo2 from "@/assets/exp-realty-logo-2.png";

const services = [
  {
    icon: Scale,
    title: "Probate & Estate Sales",
    description: "Strategic guidance for properties in probate, active estate administration, and court-supervised sales.",
    link: "/probate-estate-sales"
  },
  {
    icon: Users,
    title: "For Executors & Trustees",
    description: "Step-by-step property support for executors, personal representatives, and trustees managing estate real estate.",
    link: "/executors"
  },
  {
    icon: Handshake,
    title: "For Attorneys & Fiduciaries",
    description: "A dependable referral resource for estate planning, probate, and elder law professionals.",
    link: "/for-attorneys"
  },
  {
    icon: FileText,
    title: "Why Valuation Matters",
    description: "How broker and certified appraiser expertise prevents costly pricing mistakes in estate property.",
    link: "/why-valuation-matters"
  },
  {
    icon: Heart,
    title: "Senior Transitions",
    description: "Compassionate support for downsizing, assisted living moves, and family home sales during life changes.",
    link: "/senior-transitions"
  },
  {
    icon: Clock,
    title: "How the Process Works",
    description: "A transparent, six-step process from initial consultation through closing day.",
    link: "/how-the-process-works"
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
    question: "Can a trustee sell a house without court involvement?",
    answer: "In most cases, a trustee can sell trust-owned real estate without going through probate court, as long as the trust document grants that authority. Real Property Planning works with trustees and their attorneys to coordinate the real estate side of these transactions.",
    link: "/faq"
  },
  {
    question: "How do I determine the right price for estate property?",
    answer: "Pricing estate property requires understanding condition, market dynamics, and buyer expectations. David Stein's dual brokerage and certified appraisal background helps clients avoid the costly mistakes of overpricing or underpricing inherited and estate-held homes.",
    link: "/why-valuation-matters"
  },
  {
    question: "What if the home needs repairs or cleanout before sale?",
    answer: "Many estate and inherited properties need cleanout, repairs, or preparation before going to market. Real Property Planning helps coordinate vendors, assess what improvements are worth making, and develop a practical plan to get the property sale-ready.",
    link: "/how-the-process-works"
  }
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Real Property Planning",
  "url": "https://realpropertyplanning.com",
  "logo": "https://realpropertyplanning.com/logo.png",
  "description": "Real Property Planning provides experienced real estate guidance for probate property, inherited homes, estate sales, trust-owned real estate, and senior transitions throughout Western Washington.",
  "areaServed": [
    "King County WA",
    "Snohomish County WA",
    "Pierce County WA",
    "Kitsap County WA"
  ],
  "founder": {
    "@type": "Person",
    "name": "David Stein",
    "jobTitle": "Real Estate Broker and State Certified Residential Appraiser"
  },
  "serviceType": [
    "Probate real estate services",
    "Inherited property sales",
    "Trust-owned home sales",
    "Estate property guidance",
    "Senior housing transitions"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "WA",
    "addressCountry": "US"
  }
};

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
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Probate Real Estate & Inherited Property Sales | Real Property Planning"
        description="Selling a home tied to probate, a trust, or an inheritance? David Stein is a Washington broker and certified appraiser who guides executors, attorneys, and families through estate property sales across King, Snohomish, Pierce & Kitsap Counties."
        jsonLd={jsonLd}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--muted)) 100%)' }}>
         <div className="container px-6 lg:px-8 pt-20">
            <div>
              {/* Logo & Headshot */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-8">
                <img src={logo} alt="Real Property Planning Logo" className="h-[280px] sm:h-[400px] md:h-[512px] lg:h-[640px] w-auto" />
                <div className="flex flex-col items-center">
                  <img src={daveHeadshot2} alt="David Stein — Licensed Real Estate Broker and State Certified Appraiser in Washington" className="h-[180px] sm:h-[220px] md:h-[256px] lg:h-[320px] w-auto rounded-2xl object-cover shadow-lg" />
                  <div className="mt-3 flex flex-col items-center">
                    <div className="flex items-center gap-3">
                      <p className="font-serif text-lg font-semibold text-foreground">David Stein</p>
                      <img src={expRealtyLogo2} alt="eXp Realty" className="h-6 md:h-7 w-auto" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">License #113972</p>
                  </div>
                </div>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-foreground font-bold leading-[1.08] mb-5 text-center">
                Experienced Real Estate Guidance for Probate, Inherited Property & Life Transitions
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-[760px] mx-auto mb-4 text-center">
                Selling a home tied to probate, an inheritance, a trust, or a major life change is rarely straightforward. Legal timelines, family dynamics, deferred maintenance, and pricing uncertainty all complicate the process. David Stein provides the clarity and structure that these situations demand.
              </p>

              <p className="text-base text-muted-foreground/80 leading-relaxed max-w-[680px] mx-auto mb-8 text-center">
                As one of the few professionals in Western Washington who holds both a real estate broker license and a state certified residential appraiser credential, David combines market strategy with analytical precision — helping clients avoid costly pricing mistakes and move forward with confidence.
              </p>

              {/* Top CTA */}
              <div className="bg-card border border-border rounded-2xl p-6 max-w-[620px] mx-auto mb-8">
                <p className="text-foreground font-serif text-lg font-semibold mb-4 text-center">
                  Dealing with a property tied to probate, inheritance, a trust, or a family transition?
                </p>
                <div className="flex flex-wrap justify-center gap-3.5">
                  <Link to="/contact">
                    <Button 
                      size="lg" 
                      className="bg-foreground hover:bg-foreground/90 text-background font-bold px-6 rounded-xl text-base h-[52px]"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Schedule a Consultation
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-border bg-card text-foreground hover:bg-muted font-bold px-6 rounded-xl text-base h-[52px]"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send a Message
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {["Probate Property", "Inherited Homes", "Trust Real Estate", "Estate Sales", "Senior Transitions"].map((tag) => (
                  <span 
                    key={tag}
                    className="bg-card border border-border rounded-full px-4 py-2.5 text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Why Clients Reach Out */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-card border border-border rounded-3xl p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-2 text-xs">
                  Why Clients and Referral Partners Choose Real Property Planning
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Dual-credentialed: broker + state certified appraiser",
                    "Trusted by attorneys, executors, trustees, and families",
                    "Specialized in probate, estates, trusts, and senior transitions",
                    "Local expertise across four Western Washington counties"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-3 bg-secondary rounded-xl text-muted-foreground text-sm">
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
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              "Licensed Real Estate Broker — Washington State",
              "State Certified Residential Appraiser",
              "20+ Years of Real Estate & Valuation Experience",
              "King · Snohomish · Pierce · Kitsap Counties",
            ].map((indicator, index) => (
              <div key={index} className="flex items-center gap-2 text-base text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-gold" />
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
              What Real Property Planning Does
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
              How David Stein Helps With Complex Property Decisions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Estate-related property sales require a different approach — one that accounts for legal timelines, family dynamics, deferred maintenance, and careful pricing.
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

      {/* Who I Work With */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-bold tracking-widest uppercase mb-3 text-base">
                Clients & Referral Partners
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                Who I Work With
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Real Property Planning serves professionals and families across Western Washington who need experienced real estate guidance during estate settlement, inheritance, trust administration, or a significant housing change.
              </p>
              <div className="space-y-6">
                {whoIWorkWith.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{category.group}</h3>
                    <p className="text-muted-foreground text-sm">{category.members}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy rounded-lg p-10 lg:p-12">
              <Award className="w-10 h-10 text-gold mb-6" />
              <h3 className="font-serif text-2xl text-primary-foreground font-semibold mb-4">
                Why Professionals Refer David Stein
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6 text-sm">
                Estate-related real estate demands careful judgment, discretion, and coordination across multiple parties. David's dual credentials and two decades of focused experience make him a natural fit for high-trust referrals.
              </p>
              <ul className="space-y-3">
                {[
                  "Broker + certified appraiser — rare dual perspective",
                  "Calm, steady communication in sensitive situations",
                  "Experienced with multi-party coordination",
                  "Practical guidance from first call through closing",
                  "Trusted by attorneys, CPAs, and financial planners"
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-primary-foreground/90 text-sm">
                    <CheckCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link to="/for-attorneys">
                  <Button size="sm" className="bg-gold hover:bg-gold-light text-navy font-semibold">
                    Attorney & Fiduciary Resources <ArrowRight className="w-4 h-4 ml-2" />
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
              Resources & Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
              Explore How Real Property Planning Can Help
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className="p-8 bg-card rounded-lg border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                    <service.icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                Why Estate Property Requires a Different Approach
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Selling a home tied to an estate, trust, or family transition is fundamentally different from a conventional sale. Legal authority may limit timing. Multiple decision-makers may disagree. The property itself may have years of deferred maintenance.
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
                  alt="A couple reviewing estate planning documents together"
                  className="w-full h-auto object-cover"
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
              Serving Four Western Washington Counties
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Local market knowledge for probate, estate, trust, and transition-related property sales.
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
                  <p className="text-primary-foreground/60 text-sm">
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
                <p className="text-muted-foreground text-sm leading-relaxed">
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
              Estate planning and probate attorneys need a real estate professional who understands discretion, multi-party communication, and the importance of getting the property side right. David works collaboratively with legal professionals to reduce friction and support their clients through sensitive property transitions.
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
              Answers to Questions About Probate & Inherited Property
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-5">
            {homepageFaqs.map((faq, index) => (
              <Link key={index} to={faq.link} className="block group">
                <div className="bg-card p-6 rounded-xl border border-border hover:border-gold/30 transition-colors">
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2 group-hover:text-gold transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
                  Speak With David Stein
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
