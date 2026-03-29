import { Link } from "react-router-dom";
import { ClipboardList, Home, Heart, Scale, MapPin, HelpCircle } from "lucide-react";

const options = [
  {
    icon: ClipboardList,
    label: "I'm an executor or personal representative",
    description: "You've been named in a will or appointed by the court — and now there's a property to deal with",
    href: "/executors",
  },
  {
    icon: Home,
    label: "I'm dealing with an inherited property",
    description: "You're not sure whether to sell, keep, or fix it up — and you need straight answers",
    href: "/guides/inherited-house-washington",
  },
  {
    icon: Heart,
    label: "I'm helping a senior transition",
    description: "A parent or loved one is leaving a home they've been in for years — and the logistics feel overwhelming",
    href: "/senior-transitions",
  },
  {
    icon: Scale,
    label: "I'm an attorney or fiduciary",
    description: "You need someone who understands the real estate side and can handle it without creating more work for you",
    href: "/for-attorneys",
  },
  {
    icon: MapPin,
    label: "I'm managing this from out of state",
    description: "You need a reliable local contact who can handle things on the ground in Washington",
    href: "/guides/out-of-state-families",
  },
];

const GuidedEntryPanel = () => {
  return (
    <section id="guided-entry" className="py-14 lg:py-20 bg-warm-bg">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 border border-gold/20 mb-5">
              <HelpCircle className="w-7 h-7 text-gold" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
              Let's Point You in the Right Direction
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
              You don't need to have everything figured out — most people don't when they first reach out. Just pick the option that sounds closest to your situation.
            </p>
          </div>

          <div className="space-y-3">
            {options.map((opt, i) => (
              <Link
                key={i}
                to={opt.href}
                className="group flex items-center gap-4 bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-gold/40 hover:shadow-md transition-all min-h-[72px]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 border border-gold/20 group-hover:bg-gold/15 transition-colors">
                  <opt.icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-[17px] leading-snug group-hover:text-gold transition-colors">
                    {opt.label}
                  </p>
                  <p className="text-muted-foreground text-[15px] mt-0.5 leading-relaxed">
                    {opt.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-8">
            Still not sure? <Link to="/contact" className="text-accent hover:text-gold underline underline-offset-4 transition-colors">Just reach out</Link> — a short conversation is often the best place to start.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuidedEntryPanel;
