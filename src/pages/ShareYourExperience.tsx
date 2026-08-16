import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const TURNSTILE_SITE_KEY = "0x4AAAAAAD8Pv43WG0GFRJob";

const CREDIT_OPTIONS = [
  { value: "full-name", label: "My full name" },
  { value: "first-name", label: "First name only" },
  { value: "first-initial", label: "First name and last initial" },
  { value: "city-only", label: "Just my city (no name)" },
  { value: "anonymous", label: "Anonymous" },
] as const;

const ShareYourExperience = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [credit, setCredit] = useState("");
  const [consent, setConsent] = useState(false);
  const [formLoadedAt] = useState(() => Date.now());
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;

    const renderWidget = () => {
      if (!window.turnstile || !turnstileContainerRef.current || turnstileWidgetIdRef.current) return;
      turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      });
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    if (!document.querySelector('script[src*="turnstile"]')) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    const pollInterval = window.setInterval(() => {
      if (cancelled) return;
      if (window.turnstile) {
        window.clearInterval(pollInterval);
        renderWidget();
      }
    }, 150);

    const timeoutId = window.setTimeout(() => window.clearInterval(pollInterval), 20000);

    return () => {
      cancelled = true;
      window.clearInterval(pollInterval);
      window.clearTimeout(timeoutId);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!turnstileToken) {
      toast({
        title: "Verification needed",
        description: "Please complete the verification box, then try again.",
        variant: "destructive",
      });
      return;
    }

    if (!consent) {
      toast({
        title: "Permission needed",
        description: "Please confirm we may publish your words before sending.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const testimonial = (formData.get("testimonial") as string) || "";
    const city = (formData.get("city") as string) || "Not provided";
    const relationship = (formData.get("relationship") as string) || "Not specified";
    const creditLabel = CREDIT_OPTIONS.find((o) => o.value === credit)?.label || "Not specified";

    const message = [
      testimonial,
      "",
      "----------------------------------------",
      "TESTIMONIAL SUBMISSION",
      `Wants to be credited as: ${creditLabel}`,
      `City: ${city}`,
      `Relationship: ${relationship}`,
      "Permission to publish: YES — confirmed via checkbox",
    ].join("\n");

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: "",
      role: "testimonial",
      message,
      source_page: "/share-your-experience",
      company_website: formData.get("rpp_hp_field") as string,
      form_loaded_at: formData.get("form_loaded_at") as string,
      turnstile_token: turnstileToken,
    };

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: payload,
      });

      if (error || data?.error) {
        throw new Error(data?.error || "Failed to send");
      }

      toast({
        title: "Thank you — we received it",
        description:
          "Your words came through. Nothing is published automatically; we'll read it and be in touch before it appears anywhere.",
      });
      form.reset();
      setCredit("");
      setConsent(false);
    } catch (err) {
      console.error(err);
      toast({
        title: "That didn't send",
        description: "Something went wrong on our end. Please try again, or email info@realpropertyplanning.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setTurnstileToken("");
      if (window.turnstile && turnstileWidgetIdRef.current) {
        window.turnstile.reset(turnstileWidgetIdRef.current);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Share Your Experience | Real Property Planning"
        description="Tell us how Real Property Planning helped. Your words may be published on our testimonials page, only with your permission and only as you asked to be credited."
        canonical="https://realpropertyplanning.com/share-your-experience"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com/" },
          { name: "Testimonials", url: "https://realpropertyplanning.com/testimonials" },
          { name: "Share Your Experience", url: "https://realpropertyplanning.com/share-your-experience" },
        ]}
      />
      <Header />

      <main id="main-content">
        <section className="py-12 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <h1
                  style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: "clamp(30px, 4vw, 46px)",
                    fontWeight: 600,
                    color: "#272421",
                    lineHeight: 1.15,
                    margin: "0 0 0.75rem",
                  }}
                >
                  Share your experience
                </h1>
                <p className="text-foreground leading-relaxed">
                  If something here helped you — a guide, a calculator, a conversation, an introduction to the right
                  professional — we'd be glad to hear about it. A few sentences is plenty.
                </p>
              </div>

              <div className="bg-card rounded-lg border border-border p-6 sm:p-8 lg:p-10">
                <div
                  style={{
                    borderLeft: "4px solid #7f1d1d",
                    background: "#faf7f2",
                    borderRadius: 8,
                    padding: "14px 18px",
                    marginBottom: "1.75rem",
                  }}
                >
                  <p className="text-foreground text-[16px] leading-relaxed" style={{ margin: 0 }}>
                    <strong>Nothing is published automatically.</strong> What you write comes to us by email. We read it,
                    and if we'd like to use it, we publish it exactly as you asked to be credited — never more.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="form_loaded_at" value={formLoadedAt} />
                  <div
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
                  >
                    {/* Meaningless field name on purpose — see Contact.tsx for
                        the full reasoning. Short version: this was named
                        "company_website", Chrome autofilled it, and the edge
                        function threw the submission away as a bot. Do not
                        rename it back to anything a browser recognises. */}
                    <label htmlFor="rpp_hp_field">Leave this field blank</label>
                    <input
                      type="text"
                      id="rpp_hp_field"
                      name="rpp_hp_field"
                      tabIndex={-1}
                      autoComplete="off"
                      data-1p-ignore="true"
                      data-lpignore="true"
                      data-form-type="other"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your name</Label>
                      <Input id="name" name="name" required aria-required="true" autoComplete="name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        aria-required="true"
                        autoComplete="email"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City (optional)</Label>
                      <Input id="city" name="city" placeholder="e.g., Everett" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="relationship">Your situation (optional)</Label>
                      <Input id="relationship" name="relationship" placeholder="e.g., Executor, Family member" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="testimonial">In your own words</Label>
                    <Textarea
                      id="testimonial"
                      name="testimonial"
                      rows={7}
                      required
                      aria-required="true"
                      maxLength={2000}
                      placeholder="What were you trying to figure out, and what helped?"
                    />
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      Please don't include addresses, account numbers, or details about others who haven't agreed to be
                      mentioned.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="credit">If we publish this, how should we credit you?</Label>
                    <Select value={credit} onValueChange={setCredit} required>
                      <SelectTrigger id="credit" aria-label="How should we credit you">
                        <SelectValue placeholder="Choose how you'd like to appear" />
                      </SelectTrigger>
                      <SelectContent>
                        {CREDIT_OPTIONS.map((o) => (
                          <SelectItem key={o.value} value={o.value}>
                            {o.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "14px 16px",
                      border: "1px solid #dccdce",
                      borderRadius: 8,
                    }}
                  >
                    <input
                      type="checkbox"
                      id="consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                      aria-required="true"
                      style={{ width: 22, height: 22, flexShrink: 0, marginTop: 2, cursor: "pointer" }}
                    />
                    <label htmlFor="consent" className="text-foreground text-[16px] leading-relaxed cursor-pointer">
                      Real Property Planning may publish my words on its website, credited the way I chose above. I can
                      ask for them to be removed at any time.
                    </label>
                  </div>

                  <div ref={turnstileContainerRef} />

                  <Button
                    type="submit"
                    disabled={isSubmitting || !turnstileToken || !consent}
                    className="w-full text-lg font-bold py-7"
                  >
                    {isSubmitting ? "Sending…" : "Deliver"}
                  </Button>

                  <p className="text-muted-foreground text-[15px] text-center leading-relaxed">
                    Prefer email? Write to{" "}
                    <a href="mailto:info@realpropertyplanning.com">info@realpropertyplanning.com</a>.
                  </p>
                </form>
              </div>

              <p className="text-center mt-8">
                <Link to="/testimonials">Read what others have said →</Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShareYourExperience;
