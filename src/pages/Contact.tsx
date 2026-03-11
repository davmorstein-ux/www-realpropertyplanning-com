import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
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
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import expRealtyLogo from "@/assets/exp-realty-logo.png";
import { useToast } from "@/hooks/use-toast";

const roleOptions = [
  "Attorney",
  "Executor",
  "Personal Representative",
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
      title: "Message Sent",
      description: "Thank you for your inquiry. David Stein will be in touch shortly.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Real Property Planning | Probate Real Estate Guidance"
        description="Contact Real Property Planning for help with probate real estate, inherited property, estate sales, valuation-related questions, and senior transitions in Western Washington."
      />
      <BreadcrumbSchema items={[{ name: "Contact", url: "/contact" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Get in Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Contact David Stein
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              If you are dealing with probate property, inherited real estate, a trust-owned home, a senior transition, or an estate-related sale decision, David welcomes your call or message.
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
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Phone</p>
                    <a href="tel:2069003015" className="text-muted-foreground hover:text-gold transition-colors">
                      (206) 900-3015
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <a href="mailto:david@realpropertyplanning.com" className="text-muted-foreground hover:text-gold transition-colors">
                      david@realpropertyplanning.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Service Areas</p>
                    <p className="text-muted-foreground">
                      King, Snohomish, Pierce & Kitsap Counties
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Consultations are welcomed for attorneys, executors, fiduciaries, and families navigating property decisions.
              </p>

              {/* Brokerage Info */}
              <div className="pt-8 border-t border-border">
                <div className="flex flex-col items-center md:items-start mb-5">
                  <img src={expRealtyLogo} alt="eXp Realty" className="w-[95px] md:w-[120px] h-auto" />
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">David Stein</p>
                  <p>Licensed Real Estate Broker, Washington State</p>
                  <p className="font-medium text-foreground">eXp Realty</p>
                  <p>Mailing Address: PO Box 1462, Woodinville, WA 98072</p>
                  <p>Office Address: 1455 NW Leary Way, Seattle, WA 98107</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg border border-border p-6 sm:p-8 lg:p-10">
                <p className="text-muted-foreground mb-6">
                  Tell us a little about the property or situation, and David will follow up.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" required placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
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
                      <Input id="address" name="address" placeholder="123 Main St, City, State" />
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
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Please share any additional details about your situation..."
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    <p className="text-muted-foreground text-sm mt-4">
                      All inquiries are handled with professionalism and discretion.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default Contact;
