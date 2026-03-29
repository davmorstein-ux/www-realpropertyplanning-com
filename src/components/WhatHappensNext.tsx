import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import iconChat3d from "@/assets/icons/icon-chat-3d.png";
import iconArrowRight3d from "@/assets/icons/icon-arrow-right-3d.png";

interface WhatHappensNextProps {
  variant?: "light" | "dark";
}

const steps = [
  {
    iconSrc: iconPhone3d,
    title: "A short conversation",
    text: "David will ask a few questions to understand your situation",
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
    <div className={`rounded-2xl border p-8 sm:p-10 ${
      isDark
        ? "bg-primary-foreground/5 border-primary-foreground/10"
        : "bg-card border-border"
    }`}>
      <h3 className={`font-serif text-2xl font-semibold mb-2 ${
        isDark ? "text-primary-foreground" : "text-foreground"
      }`}>
        What Happens When You Reach Out
      </h3>
      <p className={`text-[15px] mb-7 ${
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
              <p className={`text-[15px] leading-relaxed ${
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
