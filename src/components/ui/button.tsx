import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* Buttons (Oct 21, 2026, David: "Go" on the cleanest look): flat navy
   #1B3A6B, white text, gently rounded, no gradient, shine or shadow. The
   names "gold" and "navy3d" are kept so the ~60 call sites need no change.
   On a dark band, index.css turns these white with navy text. */
const FLAT_BASE =
  "inline-flex items-center justify-center rounded-[10px] px-6 py-3.5 min-h-[52px] font-bold tracking-[0.01em] no-underline transition-colors duration-150 ease-out " +
  "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1B3A6B]";

export const GOLD_PREMIUM_CLASSES =
  FLAT_BASE + " rpp-btn-navy bg-[#1B3A6B] text-white border border-[#1B3A6B] hover:bg-[#142c52] hover:border-[#142c52]";

export const NAVY_PREMIUM_CLASSES = GOLD_PREMIUM_CLASSES;

/** Secondary: navy outline, navy text. */
export const OUTLINE_CLASSES =
  FLAT_BASE + " rpp-btn-outline bg-white text-[#1B3A6B] border-2 border-[#1B3A6B] hover:bg-[#eef2f8]";

/** Kept for old imports; the flat buttons have no shine. */
export const GoldHighlight = () => null;

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        outline3d: OUTLINE_CLASSES,
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gold: GOLD_PREMIUM_CLASSES,
        navy3d: NAVY_PREMIUM_CLASSES,
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
    const content = children;
    /* Double pulse on click (src/components/PulseNavigator.tsx): full-size
       buttons only; never icon buttons, ghost or text-link variants.
       Pass data-no-pulse to opt one out. */
    const pulses = size !== "icon" && variant !== "link" && variant !== "ghost";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...(pulses ? { "data-pulse": "" } : {})}
        {...props}
      >
        {content}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };