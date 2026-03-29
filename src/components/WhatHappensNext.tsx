import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import iconChat3d from "@/assets/icons/icon-chat-3d.png";
import iconArrowRight3d from "@/assets/icons/icon-arrow-right-3d.png";

interface WhatHappensNextProps {
  variant?: "light" | "dark";
}

const steps = [
  {
    iconSrc: iconPhone3d,
    text: "A short conversation about what's going on — no preparation needed",
  },
  {
    iconSrc: iconChat3d,
    text: "You can ask anything. David will give you straight, practical answers",
  },
  {
    iconSrc: iconArrowRight3d,
    text: "Together, you'll map out clear next steps based on your specific situation",
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
      <h3 className={`font-serif text-2xl font-semibold mb-6 ${
        isDark ? "text-primary-foreground" : "text-foreground"
      }`}>
        What Happens Next
      </h3>

      <div className="space-y-5">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
              isDark ? "bg-gold/15 border border-gold/25" : "bg-gold/10 border border-gold/20"
            }`}>
              <img src={step.iconSrc} alt="" aria-hidden="true" className="w-6 h-6 object-contain" loading="lazy" />
            </div>
            <p className={`text-lg leading-relaxed pt-2 ${
              isDark ? "text-primary-foreground/85" : "text-foreground"
            }`}>
              {step.text}
            </p>
          </div>
        ))}
      </div>

      <p className={`text-[15px] mt-6 ${
        isDark ? "text-primary-foreground/50" : "text-muted-foreground"
      }`}>
        No sales pitch, no obligation — just an honest conversation to help you figure out where things stand.
      </p>
    </div>
  );
};

export default WhatHappensNext;
