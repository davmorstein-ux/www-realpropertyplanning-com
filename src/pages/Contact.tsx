import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { realEstateAgentSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import TrustStrip from "@/components/TrustStrip";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-contact-icon-washington.webp";
import mappin3d from "@/assets/real-estate-service-areas-mappin-washington.webp";
import contactHero from "@/assets/contact-hero-soundview-coffee.webp";
import HeroBandTitle from "@/components/HeroBandTitle";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const roleOptions = ["Family Member", "Elder Individual", "Professional", "Other"];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [role, setRole] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      role,
      message: formData.get("message") as string,
      source_page: formData.get("source_page") as string,
    };

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: payload,
      });

      if (error || data?.error) {
        throw new Error(data?.error || "Failed to send");
      }

      toast({
        title: "Thanks — Message Received",
        description: "We will reach out shortly. Need to talk sooner? Call (206) 900-3015.",
      });
      form.reset();
      setRole("");
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description: "Your message wasn't sent. Please try again, or call (206) 900-3015.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact | Real Property Planning — WA Resource Hub"
        description="Reach Real Property Planning, a free Washington State resource hub for elderly individuals, families, and professionals. Ask a question or join our network."
        jsonLd={realEstateAgentSchema}
      />
      <BreadcrumbSchema items={[{ name: "Contact", url: "/contact" }]} />
      <Header />
      <main id="main-content">
        {/* Hero image + navy band */}
        <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
          <div style={{ lineHeight: 0 }}>
            <img
              src={contactHero}
              alt="Seniors enjoying coffee at a waterfront café in Washington State — Real Property Planning contact"
              className="w-full h-auto block"
              loading="eager"
              sizes="100vw"
              decoding="async"
              width={1983}
              height={583}
            />
            <HeroBandTitle>Get Connected</HeroBandTitle>
          </div>
        </section>

        <TrustStrip />

        {/* Contact Content */}
        <section className="py-16 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div>
                <p className="font-serif text-2xl text-foreground mb-4 leading-snug">
                  Real Property Planning is a free resource hub connecting elderly individuals, their families, and
                  professionals across Washington State.
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
                  Whether you are navigating probate, an inherited property, a senior housing transition, or simply
                  looking for trusted professionals — we are here to help point you in the right direction. Use this
                  page to reach out with questions, suggest a resource, or inquire about joining our professional
                  network.
                </p>

                <div className="space-y-5 mb-8">
                  <div>
                    <p className="mb-1 font-medium text-foreground">Phone</p>
                    <a
                      href="tel:2069003015"
                      className="inline-flex items-center text-muted-foreground transition-colors hover:text-gold"
                    >
                      <img
                        src={iconPhone3d}
                        alt=""
                        aria-hidden="true"
                        className="mr-2 w-5 h-5 shrink-0 object-contain"
                        loading="lazy"
                        sizes="100vw"
                        decoding="async"
                        width={1024}
                        height={1536}
                      />
                      <span>(206) 900-3015</span>
                    </a>
                  </div>

                  <div>
                    <p className="mb-1 font-medium text-foreground">Email</p>
                    <a
                      href="mailto:info@realpropertyplanning.com"
                      className="inline-flex items-center text-muted-foreground transition-colors hover:text-gold"
                    >
                      <img
                        src={iconEmail3d}
                        alt=""
                        aria-hidden="true"
                        className="mr-2 w-5 h-5 shrink-0 object-contain"
                        loading="lazy"
                        sizes="100vw"
                        decoding="async"
                        width={1254}
                        height={1254}
                      />
                      <span>info@realpropertyplanning.com</span>
                    </a>
                  </div>

                  <div>
                    <p className="mb-1 font-medium text-foreground">Service Areas</p>
                    <p className="inline-flex items-center text-muted-foreground">
                      <img
                        src={mappin3d}
                        alt=""
                        aria-hidden="true"
                        className="mr-2 w-5 h-5 shrink-0 object-contain"
                        loading="lazy"
                        sizes="100vw"
                        decoding="async"
                        width={1024}
                        height={1024}
                      />
                      <span>Throughout Washington State, with a strong focus in Western WA &amp; Puget Sound</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-lg border border-border p-6 sm:p-8 lg:p-10">
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-2">Send a Message</h2>
                  <p className="text-muted-foreground mb-6 text-[15px] leading-relaxed">
                    Tell us a little about how we can help.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                      type="hidden"
                      name="source_page"
                      value={typeof window !== "undefined" ? window.location.pathname : ""}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          aria-required="true"
                          autoComplete="name"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          aria-required="true"
                          autoComplete="email"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (optional)</Label>
                        <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">I am a *</Label>
                        <Select value={role} onValueChange={setRole} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select one" />
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

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        aria-required="true"
                        placeholder="Share your question, suggest a resource, or ask about joining our professional network..."
                      />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full text-lg font-bold py-7">
                      {isSubmitting ? "Sending..." : "Send"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
