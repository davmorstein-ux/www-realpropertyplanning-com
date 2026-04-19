import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { realEstateAgentSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import TrustStrip from "@/components/TrustStrip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

import iconEmail3d from "@/assets/icons/real-estate-email-contact-icon-washington.webp";
import mappin3d from "@/assets/real-estate-service-areas-mappin-washington.webp";
import { useState } from "react";
import expRealtyLogo from "@/assets/exp-realty-real-estate-logo-washington.webp";
import { useToast } from "@/hooks/use-toast";

const roleOptions = [
  "Individual",
  "Personal Representative",
  "Attorney",
  "Tax Attorney",
  "Financial Planner",
  "CPA",
  "Power of Attorney",
  "Executor",
  "Trustee",
  "Fiduciary",
  "Family Member",
  "Senior Homeowner",
  "Adult Child Assisting Parent",
  "Other",
];

const situationOptions = [
  "Probate Property",
  "Estate Property Sale",
  "Trust Property",
  "Inherited Home",
  "Senior Downsizing",
  "Assisted Living Transition",
  "Property Valuation Guidance",
  "Property Preparation",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thanks — Message Received",
      description: "Our team will reach out shortly. Need to talk sooner? Call (206) 900-3015.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Real Property Planning | Probate & Estate Real Estate in Washington State"
        description="Ready to talk through your situation? Reach out to Real Property Planning for calm, knowledgeable guidance on probate, inherited property, or senior housing transitions. Call (206) 900-3015."
        jsonLd={realEstateAgentSchema}
      />
      <BreadcrumbSchema items={[{ name: "Contact", url: "/contact" }]} />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Get in Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Whether you're an executor, an attorney, or a family member navigating a property situation — a short conversation can bring real clarity.
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Contact Content */}
      <section className="py-16 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <div className="space-y-5 mb-8">
                <div>
                  <p className="mb-1 font-medium text-foreground">Phone</p>
                  <a href="tel:2069003015" className="inline-flex items-center text-muted-foreground transition-colors hover:text-gold">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="mr-2 w-5 h-5 shrink-0 object-contain"  loading="lazy"/>
                    <span>(206) 900-3015</span>
                  </a>
                </div>

                <div>
                  <p className="mb-1 font-medium text-foreground">Email</p>
                  <a href="mailto:info@realpropertyplanning.com" className="inline-flex items-center text-muted-foreground transition-colors hover:text-gold">
                    <img src={iconEmail3d} alt="" aria-hidden="true" className="mr-2 w-5 h-5 shrink-0 object-contain"  loading="lazy"/>
                    <span>info@realpropertyplanning.com</span>
                  </a>
                </div>

                <div>
                  <p className="mb-1 font-medium text-foreground">Service Areas</p>
                  <p className="inline-flex items-center text-muted-foreground">
                    <img src={mappin3d} alt="" aria-hidden="true" className="mr-2 w-5 h-5 shrink-0 object-contain"  loading="lazy"/>
                    <span>Throughout Washington State, with a strong focus in Western WA &amp; Puget Sound</span>
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-[15px] leading-relaxed mb-4">
                Real Property Planning works with attorneys, executors, fiduciaries, and families across Washington State.
              </p>
              <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
                Through David Stein's eXp Realty network, Real Property Planning can connect you with a trusted broker anywhere in the country.
              </p>

              {/* Brokerage Info */}
              <div className="pt-8 border-t border-border">
                <div className="flex flex-col items-center md:items-start mb-5">
                  <img src={expRealtyLogo} alt="eXp Realty — license held under eXp Realty (real estate license disclosure)" className="w-[95px] md:w-[120px] h-auto" loading="lazy" />
                </div>
                <div className="space-y-2 text-[15px] text-muted-foreground">
                  <p className="font-medium text-foreground">Real Property Planning</p>
                  <p>Washington State Licensed Real Estate Broker — License held under eXp Realty</p>
                  <p>Mailing Address: PO Box 1462, Woodinville, WA 98072</p>
                  <p>Office Address: 1455 NW Leary Way, Seattle, WA 98107</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg border border-border p-6 sm:p-8 lg:p-10">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Send a Message
                </h2>
                <p className="text-muted-foreground mb-6 text-[15px] leading-relaxed">
                  A brief description of your situation is a great place to start.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="source_page" value={typeof window !== "undefined" ? window.location.pathname : ""} />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" required aria-required="true" autoComplete="name" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required aria-required="true" autoComplete="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role *</Label>
                      <Select name="role" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          {roleOptions.map((role) => (
                            <SelectItem key={role} value={role.toLowerCase().replace(/\s+/g, "-")}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="address">Property Address</Label>
                      <Input id="address" name="address" autoComplete="street-address" placeholder="123 Main St, City, State" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="zip">Zip Code</Label>
                      <Input id="zip" name="zip" autoComplete="postal-code" placeholder="98101" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="situation">Type of Situation *</Label>
                      <Select name="situation" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select situation type" />
                        </SelectTrigger>
                        <SelectContent>
                          {situationOptions.map((situation) => (
                            <SelectItem key={situation} value={situation.toLowerCase().replace(/\s+/g, "-")}>
                              {situation}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="found_via">How did you find this site?</Label>
                    <Select name="found_via">
                      <SelectTrigger>
                        <SelectValue placeholder="Select one (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Google Search">Google Search</SelectItem>
                        <SelectItem value="Referral">Referral</SelectItem>
                        <SelectItem value="Zillow">Zillow</SelectItem>
                        <SelectItem value="Attorney / Professional">Attorney / Professional</SelectItem>
                        <SelectItem value="Direct / Typed URL">Direct / Typed URL</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Please share any additional details about your situation..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Anything you'd like me to know?</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      rows={2}
                      placeholder="Situation, timing, questions..."
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      variant="navy3d"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send My Message"}
                    </Button>
                    <div role="status" aria-live="polite">
                      <p className="text-muted-foreground/70 text-[15px] mt-4">
                        We respond personally to every inquiry.
                      </p>
                    </div>
                  </div>
                </form>
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

export default Contact;
