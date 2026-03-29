import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = (formData.get("phone") as string) || "Not provided";
    const address = (formData.get("address") as string) || "Not provided";
    const message = (formData.get("message") as string) || "No message";

    const sourcePage = formData.get("source_page") as string;
    const foundVia = (formData.get("found_via") as string) || "Not specified";
    const notes = (formData.get("notes") as string) || "";

    const subject = encodeURIComponent(`New Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProperty Address: ${address}\nSource Page: ${sourcePage}\nHow They Found Us: ${foundVia}${notes ? `\nAdditional Notes: ${notes}` : ""}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:david@realpropertyplanning.com?subject=${subject}&body=${body}`;

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
          Thanks — Message Received
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-sm mb-5">
          David will reach out shortly to learn more about your situation.
        </p>
        <p className="text-muted-foreground/70 text-base leading-relaxed max-w-sm mb-5">
          Need to talk sooner?{" "}
          <a href="tel:2069003015" className="text-gold hover:underline font-medium">(206) 900-3015</a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg">
      <h3 className="font-serif text-2xl text-foreground font-semibold mb-2">
        Send a Message
      </h3>
      <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
        Share a few details and David will follow up directly — usually within one business day.
      </p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <input type="hidden" name="source_page" value={typeof window !== "undefined" ? window.location.pathname : ""} />
        <div>
          <label className="block text-[15px] font-medium text-foreground mb-1.5">
            Your Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            className={inputClass}
            placeholder="First and last name"
          />
        </div>

        <div>
          <label className="block text-[15px] font-medium text-foreground mb-1.5">
            Email Address <span className="text-destructive">*</span>
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
            Phone Number <span className="text-muted-foreground text-sm font-normal">(optional — helpful if you'd like a call back)</span>
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
            placeholder="If you have one in mind"
          />
        </div>

        <div>
          <label className="block text-[15px] font-medium text-foreground mb-1.5">
            What's Going On? <span className="text-muted-foreground text-sm font-normal">(optional)</span>
          </label>
          <textarea
            name="message"
            rows={3}
            className={`${inputClass} resize-none`}
            placeholder="A brief summary is fine — e.g., 'My mother passed and we need to sell her house in Bellevue.'"
          />
        </div>

        <div>
          <label className="block text-[15px] font-medium text-foreground mb-1.5">
            How did you find this site? <span className="text-muted-foreground text-sm font-normal">(optional)</span>
          </label>
          <select
            name="found_via"
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>Select one...</option>
            <option value="Google Search">Google Search</option>
            <option value="Referral">Referral from someone I know</option>
            <option value="Zillow">Zillow</option>
            <option value="Attorney / Professional">Attorney or professional referral</option>
            <option value="Direct / Typed URL">Typed the website directly</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-[15px] font-medium text-foreground mb-1.5">
            Anything else? <span className="text-muted-foreground text-sm font-normal">(optional)</span>
          </label>
          <textarea
            name="notes"
            rows={2}
            className={`${inputClass} resize-none`}
            placeholder="Timeline, concerns, questions — anything that would help David understand your situation"
          />
        </div>

        <Button
          type="submit"
          variant="gold"
          className="w-full py-3.5 h-auto rounded-[14px] text-base"
          disabled={sending}
        >
          {sending ? "Sending..." : "Send My Message"}
        </Button>
      </form>

      <p className="text-muted-foreground/60 text-sm text-center mt-4">
        David responds personally.
      </p>
    </div>
  );
};

export default HomepageLeadForm;
