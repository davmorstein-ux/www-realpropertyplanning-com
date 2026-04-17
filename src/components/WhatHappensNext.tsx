import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconChat3d from "@/assets/icons/real-estate-consultation-chat-icon-washington.webp";
import iconArrowRight3d from "@/assets/icons/property-guidance-arrow-icon-washington.webp";

interface WhatHappensNextProps {
  variant?: "light" | "dark";
}

const steps = [
  {
    iconSrc: iconPhone3d,
    title: "A short conversation",
    text: "Our team will ask a few questions to understand your situation",
  },
  {
    iconSrc: iconChat3d,
    title: "Straightforward guidance",
    text: "You'll get practical answers based on what works in situations like yours",
  },
  {
    iconSrc: iconArrowRight3d,
    title: "Clear next steps",
    text: "You'll know what needs to happen, in what order, and what can wait",
  },
];

const WhatHappensNext = ({ variant = "light" }: WhatHappensNextProps) => {
  const isDark = variant === "dark";

  return (
    <div className={`rounded-[18px] border-[1.5px] p-8 sm:p-10 ${
      isDark
        ? "bg-gradient-to-b from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.12)] shadow-[0_4px_14px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.1)]"
        : "bg-gradient-to-b from-white via-[hsl(40,25%,97%)] to-[hsl(38,18%,95%)] border-[hsl(42_55%_62%/0.4)] shadow-[0_6px_18px_-4px_rgba(0,0,0,0.10),0_3px_8px_-3px_rgba(0,0,0,0.06),0_1px_0_0_hsl(36_14%_85%),inset_0_1px_0_0_rgba(255,255,255,0.85),inset_0_-1px_2px_0_rgba(0,0,0,0.03)]"
    }`}>
      <h3 className={`font-serif text-2xl font-semibold mb-2 ${
        isDark ? "text-primary-foreground" : "text-foreground"
      }`}>
        What Happens When You Reach Out
      </h3>
      <p className={`text-base mb-7 ${
        isDark ? "text-primary-foreground/60" : "text-muted-foreground"
      }`}>
        Here's what to expect.
      </p>

      <div className="space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
              isDark ? "bg-gold/15 border border-gold/25" : "bg-gold/10 border border-gold/20"
            }`}>
              <img src={step.iconSrc} alt="" aria-hidden="true" className="w-6 h-6 object-contain" loading="lazy" />
            </div>
            <div className="pt-1">
              <p className={`font-semibold text-lg leading-snug mb-1 ${
                isDark ? "text-primary-foreground" : "text-foreground"
              }`}>
                {step.title}
              </p>
              <p className={`text-base leading-relaxed ${
                isDark ? "text-primary-foreground/75" : "text-muted-foreground"
              }`}>
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default WhatHappensNext;
