import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Phone, Mail, Scale, Heart, Home, FileText, Clock, Shield, 
  CheckCircle, Users, Briefcase, ArrowRight, ChevronRight,
  Star, Award, Building, Handshake
} from "lucide-react";
import daveHeadshot from "@/assets/dave-headshot.jpg";
import coupleWritingWill from "@/assets/couple-writing-will.png";
import logo from "@/assets/logo.png";

const services = [
  {
    icon: Scale,
    title: "Probate Real Estate",
    description: "Guidance for properties involved in probate, estate administration, and inherited real estate matters."
  },
  {
    icon: Building,
    title: "Estate Property Sales",
    description: "Strategic support for preparing, pricing, marketing, and selling real property held by an estate or trust."
  },
  {
    icon: Heart,
    title: "Senior Real Estate Transitions",
    description: "Professional help for downsizing, relocation, assisted living transitions, and family home sales."
  },
  {
    icon: FileText,
    title: "Valuation Insight",
    description: "Broker and state certified appraiser experience to help inform important property decisions."
  },
  {
    icon: Handshake,
    title: "Attorney & Fiduciary Collaboration",
    description: "A reliable real estate resource for attorneys, trustees, fiduciaries, and referral partners."
  },
  {
    icon: Home,
    title: "Property Preparation Coordination",
    description: "Help coordinating clean-out, repairs, staging, hauling, and other pre-sale services."
  }
];

const trustIndicators = [
  "20+ Years of Experience",
  "Professional Real Estate Broker",
  "State Certified Appraiser",
  "Estate, Probate & Trust Guidance",
  "Senior Transition Support",
  "Trusted by Attorneys & Families"
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

const audiences = [
  "Estate planning attorneys",
  "Probate attorneys",
  "Executors",
  "Personal representatives",
  "Estate administrators",
  "Trustees",
  "Fiduciaries",
  "Adult children helping parents transition",
  "Seniors planning a move",
  "Families selling inherited property"
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--muted)) 100%)' }}>
        <div className="container px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-11 items-center">
            <div>
              {/* Logo & Brand */}
              <div className="flex items-center gap-3.5 mb-6">
                <svg width="62" height="62" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Real Property Planning Logo">
                  <rect x="2" y="2" width="64" height="64" rx="16" fill="hsl(var(--navy))"/>
                  <path d="M18 36L34 22L50 36" stroke="hsl(var(--gold))" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 34.5V48H45V34.5" stroke="hsl(var(--primary-foreground))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M30 48V40H38V48" stroke="hsl(var(--gold))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <div className="font-serif text-[30px] font-bold text-foreground leading-none">
                    Real Property Planning
                  </div>
                  <div className="text-xs text-muted-foreground tracking-[2px] uppercase mt-1.5">
                    Estate • Probate • Property Transitions
                  </div>
                </div>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-[54px] text-foreground font-bold leading-[1.08] mb-5">
                Trusted real estate guidance for executors, attorneys, personal representatives, and families
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-[760px] mb-8">
                Led by David Stein, Real Property Planning helps coordinate, prepare, value, market, and sell residential real property during estate, probate, and later-life transitions with professionalism, discretion, and care.
              </p>

              <div className="flex flex-wrap gap-3.5 mb-8">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-foreground hover:bg-foreground/90 text-background font-bold px-6 rounded-xl text-base h-[52px]"
                  >
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link to="/probate-estate-sales">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-border bg-card text-foreground hover:bg-muted font-bold px-6 rounded-xl text-base h-[52px]"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Estate Sales", "Probate Support", "Property Preparation", "Broker Guidance"].map((tag) => (
                  <span 
                    key={tag}
                    className="bg-card border border-border rounded-full px-4 py-2.5 text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Info Card */}
            <div className="hidden lg:block">
              <div className="bg-card border border-border rounded-3xl p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <h2 className="font-serif text-[28px] font-bold text-foreground mb-5">
                  A professional resource during complex property transitions
                </h2>
                <div className="grid gap-3.5">
                  {[
                    "Guidance for executors and personal representatives",
                    "Coordination with attorneys and trusted advisors",
                    "Property valuation, preparation, and sale strategy",
                    "Discreet, compassionate, and experienced representation"
                  ].map((item, i) => (
                    <div key={i} className="px-4 py-3.5 bg-secondary rounded-xl text-muted-foreground text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-ivory border-y border-border py-6">
        <div className="container px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-gold" />
                <span>{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                A Trusted Resource for Sensitive Property Matters
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Real estate tied to estate settlement, probate, trust administration, or late-life housing transitions requires more than a typical home sale approach. These situations often involve legal timelines, multiple stakeholders, property condition questions, personal belongings, deferred maintenance, and emotionally difficult decisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                David Stein helps bring clarity and structure to the real estate side of the process. With over 20 years of experience as a professional real estate broker and state certified appraiser, he provides informed guidance for attorneys, executors, personal representatives, trustees, and families who need a capable, calm, and responsive professional to help coordinate the next steps.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden border border-border shadow-lg">
                <img
                  src={coupleWritingWill}
                  alt="A couple writing a will together, planning their estate"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-muted-foreground text-sm italic mt-4 text-center">
                A will is essential to ensure your assets are distributed according to your wishes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold font-medium tracking-widest uppercase mb-3 text-xs">
              Specialized Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
              Specialized Real Estate Services for Estate and Senior Property Transitions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 bg-card rounded-lg border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
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
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/probate-estate-sales">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-primary-foreground">
                Explore Services
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium tracking-widest uppercase mb-3 text-xs">
                Clients & Partners
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                Who David Stein Works With
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                David Stein serves a select range of clients and referral partners who need experienced real estate guidance during complex property transitions.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {audiences.map((audience, index) => (
                  <div key={index} className="flex items-center gap-3 py-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-foreground text-sm">{audience}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy rounded-lg p-10 lg:p-12">
              <Award className="w-10 h-10 text-gold mb-6" />
              <h3 className="font-serif text-2xl text-primary-foreground font-semibold mb-4">
                Why Professionals and Families Refer David Stein
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6 text-sm">
                Estate-related real estate decisions often require careful judgment, discretion, and the ability to coordinate multiple moving parts. David Stein brings a steady, experienced approach to each matter, helping clients understand their options, evaluate value, decide on preparation strategy, and move toward a successful sale with greater clarity.
              </p>
              <ul className="space-y-3">
                {[
                  "Over 20 years of relevant experience",
                  "Professional real estate broker",
                  "State certified appraiser",
                  "High-trust communication style",
                  "Experienced with complex property transitions",
                  "Practical guidance from consultation through closing"
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-primary-foreground/90 text-sm">
                    <CheckCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold font-medium tracking-widest uppercase mb-3 text-xs">
              The Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold">
              A Clear Process During a Complex Time
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
        </div>
      </section>

      {/* Attorney Feature */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Briefcase className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Real Estate Resource Attorneys and Fiduciaries Can Refer With Confidence
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Attorneys, fiduciaries, and trustees often need a real estate professional who understands the importance of communication, timelines, discretion, and sound judgment. David Stein works collaboratively with professional advisors and their clients to help manage the real estate component of estate and senior property transitions with professionalism and care.
            </p>
            <Link to="/for-attorneys">
              <Button className="bg-gold hover:bg-gold-light text-navy font-semibold">
                For Attorneys & Fiduciaries
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                What types of clients do you work with?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                David Stein works with attorneys, executors, personal representatives, trustees, seniors, adult children, and families handling estate, probate, trust, and transition-related property matters.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                Can a property be sold as-is?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes. In many cases, selling as-is is a practical option. In other cases, selective improvements may help maximize value. David helps clients evaluate both approaches.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                Do you help coordinate clean-out and repairs?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes. David can help coordinate the services needed to prepare a property for sale, including clean-out, repairs, hauling, landscaping, and staging.
              </p>
            </div>
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
              Need Guidance on an Estate, Probate, Trust, or Senior Property Matter?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Start with a confidential conversation. David Stein provides experienced, practical guidance tailored to the property, the circumstances, and the people involved.
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
                  Contact David Stein
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
