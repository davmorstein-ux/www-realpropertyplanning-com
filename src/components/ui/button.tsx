import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const GOLD_PREMIUM_CLASSES =
  "relative overflow-hidden inline-flex items-center justify-center rounded-[14px] px-6 py-3.5 min-h-[52px] font-bold tracking-[0.02em] text-white no-underline transition-all duration-200 ease-out " +
  "bg-gradient-to-b from-[#d4af37] to-[#b88a1d] border border-[rgba(120,84,10,0.45)] " +
  "shadow-[0_3px_0_rgba(122,85,10,0.85),0_10px_22px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(90,60,5,0.18)] " +
  "hover:-translate-y-[2px] hover:brightness-[1.03] hover:shadow-[0_5px_0_rgba(122,85,10,0.85),0_14px_26px_rgba(0,0,0,0.20),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(90,60,5,0.18)] " +
  "active:translate-y-[1px] active:shadow-[0_2px_0_rgba(122,85,10,0.85),0_6px_14px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.20)] " +
  "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[rgba(46,82,161,0.35)]";

export const GoldHighlight = () => (
  <span className="pointer-events-none absolute left-[8%] top-0 h-[48%] w-[84%] rounded-full bg-gradient-to-b from-white/30 to-white/0" />
);

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gold: GOLD_PREMIUM_CLASSES,
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const isGold = variant === "gold";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {isGold && <GoldHighlight />}
        {isGold ? <span className="relative z-10 inline-flex items-center gap-2">{children}</span> : children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };