import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Heart } from "lucide-react";

const SeniorMoveManagersLearnMore = () => (
  <>
    <SEOHead
      title="Senior Move Manager Guide — What They Do & Why It Matters | Real Property Planning"
      description="Detailed guide about Senior Move Managers — what they do, how they differ from movers, and why families hire them for later-life transitions in Washington State."
    />
    <BreadcrumbSchema items={[
      { name: "Senior Move Managers", url: "/senior-move-managers" },
      { name: "Learn More", url: "/senior-move-managers/learn-more" },
    ]} />
    <Header />
    <main id="main-content">
      <section className="bg-primary pt-3 md:pt-4 pb-10 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">In-Depth Guide</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-4">Understanding Senior Move Managers</h1>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              What they do, how they differ from traditional movers, and why families hire them.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">What Is a Senior Move Manager?</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              A Senior Move Manager helps older adults and their families with the emotional and practical sides of moving, downsizing, and home transitions. Unlike a traditional moving company, a Senior Move Manager plans and manages the entire process from start to finish.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Sorting and decluttering", "Downsizing assistance", "Packing and unpacking coordination", "Move planning and scheduling", "Space planning for the new home", "Coordinating movers and service providers", "Donation, consignment, estate sale coordination", "Helping the new home feel settled"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-dark mt-0.5 shrink-0" />
                  <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">How They Differ From Traditional Movers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Traditional Moving Company</h3>
                <ul className="space-y-2 text-muted-foreground text-[15px] leading-relaxed">
                  <li>• Primarily transports belongings</li>
                  <li>• Focuses on the physical move itself</li>
                  <li>• Limited involvement before or after</li>
                  <li>• Does not assist with sorting or organizing</li>
                </ul>
              </div>
              <div className="bg-background border border-gold/30 rounded-xl p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Senior Move Manager</h3>
                <ul className="space-y-2 text-muted-foreground text-[15px] leading-relaxed">
                  <li>• Plans and manages the full transition</li>
                  <li>• Helps with sorting, downsizing, and emotional decisions</li>
                  <li>• Coordinates movers, donations, and estate sales</li>
                  <li>• Especially helpful with decades of possessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">Who This Can Help</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Seniors preparing to downsize", "Adult children helping aging parents", "Out-of-state families coordinating from a distance", "Executors, trustees, and attorneys managing estate transitions", "Families preparing for a move to senior living"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">Why Families Hire Senior Move Managers</h2>
            <div className="space-y-4">
              {[
                { label: "Reduced stress", desc: "Someone experienced manages the details." },
                { label: "Better organization", desc: "A clear plan keeps the transition on track." },
                { label: "Help making difficult decisions", desc: "Guidance on what to keep, donate, sell, or let go." },
                { label: "Smoother transition", desc: "Fewer surprises on move day." },
                { label: "Support for overwhelmed seniors", desc: "Patient, hands-on assistance." },
                { label: "Practical help for distant families", desc: "Valuable when family lives far away." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-gold-dark mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground text-[15px]">{item.label}:</span>{" "}
                    <span className="text-muted-foreground text-[15px] leading-relaxed">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">Professional Standards</h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Many Senior Move Managers belong to NASMM, the National Association of Senior & Specialty Move Managers. NASMM members follow a code of ethics designed to protect older adults and their families during transitions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/senior-move-managers" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
              ← Back to Senior Move Managers
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default SeniorMoveManagersLearnMore;
