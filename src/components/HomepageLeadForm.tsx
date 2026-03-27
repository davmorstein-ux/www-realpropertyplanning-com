import { useState } from "react";
import { Button } from "@/components/ui/button";

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3.5 text-foreground text-[16px] placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition";

const HomepageLeadForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Build mailto body as fallback (no backend)
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = (formData.get("phone") as string) || "Not provided";
    const address = (formData.get("address") as string) || "Not provided";
    const message = (formData.get("message") as string) || "No message";

    const subject = encodeURIComponent(`New Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProperty Address: ${address}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:david@realpropertyplanning.com?subject=${subject}&body=${body}`;

    // Brief delay then show confirmation
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-foreground font-semibold mb-3">
          Thank You
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
          I'll reach out shortly to learn more about your situation.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg">
      <h3 className="font-serif text-2xl text-foreground font-semibold mb-2">
        Request Guidance
      </h3>
      <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
        If you prefer, you can share a few details here and I'll follow up with you directly.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-[15px] font-medium text-foreground mb-1.5">
            Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-[15px] font-medium text-foreground mb-1.5">
            Email <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className={inputClass}
            placeholder="name@example.com"
          />
        </div>

        <div>
          <label className="block text-[15px] font-medium text-foreground mb-1.5">
            Phone <span className="text-muted-foreground text-sm font-normal">(optional)</span>
          </label>
          <input
            type="tel"
            name="phone"
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-[15px] font-medium text-foreground mb-1.5">
            Property Address <span className="text-muted-foreground text-sm font-normal">(optional)</span>
          </label>
          <input
            type="text"
            name="address"
            className={inputClass}
            placeholder="Street address, city, state"
          />
        </div>

        <div>
          <label className="block text-[15px] font-medium text-foreground mb-1.5">
            Message <span className="text-muted-foreground text-sm font-normal">(optional)</span>
          </label>
          <textarea
            name="message"
            rows={3}
            className={`${inputClass} resize-none`}
            placeholder="Tell us about your situation..."
          />
        </div>

        <Button
          type="submit"
          variant="gold"
          className="w-full py-3.5 h-auto rounded-lg text-base"
          disabled={sending}
        >
          {sending ? "Sending..." : "Request Guidance"}
        </Button>
      </form>

      <p className="text-muted-foreground/60 text-sm text-center mt-4">
        No pressure. Just clear, practical guidance.
      </p>
    </div>
  );
};

export default HomepageLeadForm;
