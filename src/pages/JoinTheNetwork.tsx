import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { articleSchema } from "@/lib/schema";
import { Search, Handshake, Phone } from "lucide-react";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-contact-icon-washington.webp";

const specialtyOptions = [
  "Elder Law Attorney",
  "Estate Planning Attorney",
  "Probate Attorney",
  "Family Law & Divorce Attorney",
  "Real Estate Attorney",
  "Financial Planner & Advisor",
  "CPA & Tax Professional",
  "Medicare Advisor",
  "Senior Living Advisor & Placement Specialist",
  "Care Manager & Geriatric Care Consultant",
  "Senior Move Manager",
  "Estate Sale Company",
  "Reverse Mortgage Specialist",
  "Mortgage Lender",
  "Mental Health Professional",
  "Mediator & Collaborative Divorce Professional",
  "Other",
];

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3.5 text-foreground text-[17px] placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition";

const jsonLd = articleSchema({
  headline: "Join the Real Property Planning Professional Network",
  description:
    "We connect seniors, families, executors, and attorneys with trusted local professionals. If you serve this community, we want to know you.",
  url: "/join-network",
  datePublished: "2026-04-14",
  dateModified: "2026-05-05",
  about: [
    "Professional network",
    "Referral network",
    "Senior services",
    "Estate professionals",
  ],
});

const professions = [
  "Elder Law Attorneys",
  "Estate Planning Attorneys",
  "Probate Attorneys",
  "Family Law & Divorce Attorneys",
  "Real Estate Attorneys",
  "Financial Planners & Advisors",
  "CPAs & Tax Professionals",
  "Medicare Advisors",
  "Senior Living Advisors & Placement Specialists",
  "Care Managers & Geriatric Care Consultants",
  "Senior Move Managers",
  "Estate Sale Companies",
  "Reverse Mortgage Specialists",
  "Mortgage Lenders",
  "Mental Health Professionals",
  "Mediators & Collaborative Divorce Professionals",
];

const membershipBenefits = [
  {
    icon: Search,
    title: "Visibility",
    text: "Your profile, logo, and contact information featured on the relevant pages of RealPropertyPlanning.com — where families and professionals are already looking for help.",
  },
  {
    icon: Handshake,
    title: "Referrals",
    text: "When a family, executor, or attorney needs a professional in your specialty, we refer them to network members we know and trust.",
  },
  {
    icon: Phone,
    title: "Collaboration",
    text: "We work alongside attorneys, advisors, and care professionals regularly. Network members get a direct line to coordinate on shared clients when appropriate.",
  },
];

const ApplicationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => (fd.get(k) as string) || "Not provided";

    const subject = encodeURIComponent(`Network Application from ${get("name")}`);
    const body = encodeURIComponent(
      [
        `Name: ${get("name")}`,
        `Title / Role: ${get("title")}`,
        `Company / Firm: ${get("company")}`,
        `Phone: ${get("phone")}`,
        `Email: ${get("email")}`,
        `Website: ${get("website") || "Not provided"}`,
        `City / Service Area: ${get("city")}`,
        `Specialty: ${get("specialty")}`,
        `How they heard about us: ${get("referral_source") || "Not specified"}`,
        ``,
        `About their practice:`,
        get("about"),
      ].join("\n")
    );

    window.location.href = `mailto:info@realpropertyplanning.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-foreground font-semibold mb-3">
              Thank You for Applying
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We review every submission personally and will be in touch soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4 text-center">
            Apply to Join the Network
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-center">
            Tell us about your practice. There's no cost and no commitment — just a quick introduction so we can learn how your services fit.
          </p>

          <div className="bg-card border border-border rounded-xl p-7 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="app-name" className="block text-base font-medium text-foreground mb-1.5">
                    Your Name <span className="text-destructive">*</span>
                  </label>
                  <input id="app-name" name="name" required className={inputClass} placeholder="First and last name" />
                </div>
                <div>
                  <label htmlFor="app-title" className="block text-base font-medium text-foreground mb-1.5">
                    Your Title / Role <span className="text-destructive">*</span>
                  </label>
                  <input id="app-title" name="title" required className={inputClass} placeholder="e.g. Managing Attorney" />
                </div>
              </div>

              <div>
                <label htmlFor="app-company" className="block text-base font-medium text-foreground mb-1.5">
                  Company or Firm Name <span className="text-destructive">*</span>
                </label>
                <input id="app-company" name="company" required className={inputClass} placeholder="Your firm or business name" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="app-phone" className="block text-base font-medium text-foreground mb-1.5">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <input id="app-phone" name="phone" type="tel" required className={inputClass} placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label htmlFor="app-email" className="block text-base font-medium text-foreground mb-1.5">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input id="app-email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="app-website" className="block text-base font-medium text-foreground mb-1.5">
                    Website <span className="text-muted-foreground text-base font-normal">(optional)</span>
                  </label>
                  <input id="app-website" name="website" type="url" className={inputClass} placeholder="https://yoursite.com" />
                </div>
                <div>
                  <label htmlFor="app-city" className="block text-base font-medium text-foreground mb-1.5">
                    City / Primary Service Area <span className="text-destructive">*</span>
                  </label>
                  <input id="app-city" name="city" required className={inputClass} placeholder="e.g. Seattle, Bellevue" />
                </div>
              </div>

              <div>
                <label htmlFor="app-specialty" className="block text-base font-medium text-foreground mb-1.5">
                  Professional Specialty <span className="text-destructive">*</span>
                </label>
                <select id="app-specialty" name="specialty" required className={inputClass} defaultValue="">
                  <option value="" disabled>Select your specialty...</option>
                  {specialtyOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="app-referral" className="block text-base font-medium text-foreground mb-1.5">
                  How did you hear about Real Property Planning? <span className="text-muted-foreground text-base font-normal">(optional)</span>
                </label>
                <input id="app-referral" name="referral_source" className={inputClass} placeholder="Google, referral, colleague, etc." />
              </div>

              <div>
                <label htmlFor="app-about" className="block text-base font-medium text-foreground mb-1.5">
                  Tell us about your practice and the clients you serve <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="app-about"
                  name="about"
                  required
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="A brief description about your company and a short bio about yourself."
                />
              </div>

              <Button type="submit" variant="gold" className="w-full py-3.5 h-auto rounded-[14px] text-base" disabled={sending}>
                {sending ? "Sending..." : "Submit My Application"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const JoinTheNetwork = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Join the Network | Real Property Planning Professional Referral Network | Washington State"
        description="We connect seniors, families, executors, and attorneys with trusted local professionals. If you serve this community, join the Real Property Planning referral network."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema
        items={[{ name: "Join the Network", url: "/join-network" }]}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
                Professional Network
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight">
                Join the Real Property Planning Professional Network
              </h1>
              <p className="text-lg text-primary-foreground leading-relaxed mt-4">
                We connect seniors, families, executors, and attorneys with trusted local professionals. If you serve this community, we want to know you.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1 — Who We're Looking For */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                Who We're Looking For
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Real Property Planning works with families and professionals navigating some of life's most complex transitions. We're building a trusted referral network of professionals who share our commitment to honest, client-centered service.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {professions.map((profession) => (
                  <div
                    key={profession}
                    className="bg-card border border-border rounded-lg px-5 py-4 text-foreground font-medium"
                  >
                    {profession}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — What Network Membership Means */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-10 text-center">
                What Network Membership Means
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {membershipBenefits.map((benefit) => (
                  <div key={benefit.title} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                      <benefit.icon size={26} className="text-gold" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Application Form */}
        <ApplicationForm />

        {/* Closing CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
                Ready to Be Found by the Families Who Need You?
              </h2>
              <p className="text-primary-foreground text-lg leading-relaxed mb-8">
                Getting listed on Real Property Planning is free, straightforward, and puts your services in front of a targeted audience that is actively looking for professionals like you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a href="tel:+12069003015">
                  <Button variant="gold" size="lg">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                    (206) 900-3015
                  </Button>
                </a>
                <a href="mailto:info@realpropertyplanning.com">
                  <Button variant="gold" size="lg">
                    <img src={iconEmail3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                    info@realpropertyplanning.com
                  </Button>
                </a>
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

export default JoinTheNetwork;
