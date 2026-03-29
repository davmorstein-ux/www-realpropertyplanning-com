import { Phone, MessageCircle, ArrowRight } from "lucide-react";

interface WhatHappensNextProps {
  variant?: "light" | "dark";
}

const steps = [
  {
    icon: Phone,
    text: "We'll have a short conversation about your situation",
  },
  {
    icon: MessageCircle,
    text: "You can ask questions and get clear direction",
  },
  {
    icon: ArrowRight,
    text: "We'll outline practical next steps based on your needs",
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
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
              isDark ? "bg-gold/15 border border-gold/25" : "bg-gold/10 border border-gold/20"
            }`}>
              <step.icon className="w-4.5 h-4.5 text-gold" />
            </div>
            <p className={`text-lg leading-relaxed pt-1.5 ${
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
        There's no pressure — just a helpful starting point.
      </p>
    </div>
  );
};

export default WhatHappensNext;
