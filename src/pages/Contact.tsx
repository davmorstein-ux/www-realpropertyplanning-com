import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { realEstateAgentSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-contact-icon-washington.webp";
import mappin3d from "@/assets/real-estate-service-areas-mappin-washington.webp";
import HeroBandTitle from "@/components/HeroBandTitle";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";

// Value sent to the backend is always this fixed English slug,
// regardless of display language, so the email function's expectations
// never change based on which language a visitor filled the form in.
// The display label is looked up via translation at render time.
const ROLE_VALUES = ["family-member", "elder-individual", "professional", "other"] as const;

const TURNSTILE_SITE_KEY = "0x4AAAAAAD8Pv43WG0GFRJob";

// Window.turnstile is declared once in src/types/turnstile.d.ts.

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [role, setRole] = useState("");
  const [formLoadedAt] = useState(() => Date.now());
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | undefined>(undefined);

  // Lazy-load the Turnstile script only on this page, then render the widget
  // once it's ready. Uses polling rather than relying solely on the
  // script's "load" event — that event fires exactly once, ever, so if
  // a visitor had already loaded /contact earlier in the same browsing
  // session, the script tag (and its one-time "load" event) already
  // exists, and a fresh listener attached on a later visit would never
  // fire — silently leaving the widget unrendered and the form stuck.
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

    // Poll for window.turnstile becoming available — reliable regardless
    // of whether the script was just added or already existed from an
    // earlier visit.
    const pollInterval = window.setInterval(() => {
      if (cancelled) return;
      if (window.turnstile) {
        window.clearInterval(pollInterval);
        renderWidget();
      }
    }, 150);

    // Safety net: stop polling after 20s so a genuinely blocked/failed
    // script load doesn't poll forever.
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
        title: t("contactPage.toasts.verificationTitle"),
        description: t("contactPage.toasts.verificationDescription"),
        variant: "destructive",
      });
      return;
    }

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
      /* Still sent under the key the edge function checks; only the DOM
         field name changed. Renaming this key too would need a function
         redeploy, which deploys separately from the site. */
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
        title: t("contactPage.toasts.successTitle"),
        description: t("contactPage.toasts.successDescription"),
      });
      form.reset();
      setRole("");
    } catch (err) {
      console.error(err);
      toast({
        title: t("contactPage.toasts.errorTitle"),
        description: t("contactPage.toasts.errorDescription"),
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
        title={t("contactPage.seo.title")}
        description={t("contactPage.seo.description")}
        jsonLd={realEstateAgentSchema}
      />
      <BreadcrumbSchema items={[{ name: "Contact", url: "/contact" }]} />
      <Header />
      <main id="main-content">
        <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
          <div style={{ lineHeight: 0 }}>
<HeroBandTitle as="h1">{t("contactPage.heroTitle")}</HeroBandTitle>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div>
                <p className="font-serif text-2xl text-foreground mb-4 leading-snug">
                  {t("contactPage.intro.paragraph1")}
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
                  {t("contactPage.intro.paragraph2")}
                </p>

                <div className="space-y-5 mb-8">
                  <div>
                    <p className="mb-1 font-medium text-foreground">{t("contactPage.contactInfo.phoneLabel")}</p>
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
                    <p className="mb-1 font-medium text-foreground">{t("contactPage.contactInfo.emailLabel")}</p>
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
                    <p className="mb-1 font-medium text-foreground">{t("contactPage.contactInfo.serviceAreasLabel")}</p>
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
                      <span>{t("contactPage.contactInfo.serviceAreasText")}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-lg border border-border p-6 sm:p-8 lg:p-10">
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-2">{t("contactPage.form.heading")}</h2>
                  <p className="text-muted-foreground mb-6 text-[15px] leading-relaxed">
                    {t("contactPage.form.subtitle")}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                      type="hidden"
                      name="source_page"
                      value={typeof window !== "undefined" ? window.location.pathname : ""}
                    />
                    <input type="hidden" name="form_loaded_at" value={formLoadedAt} />
                    {/* Honeypot — invisible to real visitors, bots that auto-fill every field trip it */}
                    <div
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
                    >
                      {/* Field name is deliberately meaningless. It used to be
                          "company_website" with a "Company Website" label, and
                          that is exactly why real submissions were being thrown
                          away: Chrome matches autofill on field-name heuristics,
                          treats "company" as a known field type, and has ignored
                          autocomplete="off" for autofill purposes for years.
                          Password managers behave the same way. So the trap was
                          catching people, not bots — every contact submission for
                          twelve days was silently discarded as spam.

                          A bot filling every input still trips this. A human's
                          autofill has nothing to match on. Do not rename it back
                          to anything containing company, website, url, address,
                          phone, name or email. The data-* attributes below are
                          the opt-outs 1Password, LastPass and Dashlane honour. */}
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
                        <Label htmlFor="name">{t("contactPage.form.nameLabel")}</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          aria-required="true"
                          autoComplete="name"
                          placeholder={t("contactPage.form.namePlaceholder")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("contactPage.form.emailLabel")}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          aria-required="true"
                          autoComplete="email"
                          placeholder={t("contactPage.form.emailPlaceholder")}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("contactPage.form.phoneLabel")}</Label>
                        <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder={t("contactPage.form.phonePlaceholder")} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">{t("contactPage.form.roleLabel")}</Label>
                        <Select value={role} onValueChange={setRole} required>
                          <SelectTrigger id="role" aria-label={t("contactPage.form.roleLabel")}>
                            <SelectValue placeholder={t("contactPage.form.roleSelectPlaceholder")} />
                          </SelectTrigger>
                          <SelectContent>
                            {ROLE_VALUES.map((value) => (
                              <SelectItem key={value} value={value}>
                                {t(`contactPage.roleOptions.${value}`)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("contactPage.form.messageLabel")}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        aria-required="true"
                        placeholder={t("contactPage.form.messagePlaceholder")}
                      />
                    </div>

                    <div ref={turnstileContainerRef} />

                    <p className="text-sm text-muted-foreground text-center">
                      {t("contactPage.form.privacyNote")}
                    </p>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !turnstileToken}
                      className="w-full text-lg font-bold py-7"
                    >
                      {isSubmitting ? t("contactPage.form.sendingButton") : t("contactPage.form.sendButton")}
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
