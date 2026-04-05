import { Link } from "react-router-dom";
import iconClipboard3d from "@/assets/icons/icon-clipboard-3d.png";
import iconHome3d from "@/assets/icons/icon-home-3d.png";
import iconHeartHands3d from "@/assets/icons/icon-heart-hands-3d.png";
import iconScale3d from "@/assets/icons/icon-scale-3d.png";
import iconMappin3d from "@/assets/icons/icon-mappin-3d.png";
import iconHelp3d from "@/assets/icons/icon-help-3d.png";

const options = [
  {
    iconSrc: iconClipboard3d,
    label: "I'm an executor or personal representative",
    description: "You've been named in a will or appointed by the court — and now there's a property to deal with",
    href: "/executors",
  },
  {
    iconSrc: iconHome3d,
    label: "I'm dealing with an inherited property",
    description: "You're not sure whether to sell, keep, or fix it up — and you need straight answers",
    href: "/guides/inherited-house-washington",
  },
  {
    iconSrc: iconHeartHands3d,
    label: "I'm helping a senior transition",
    description: "A parent or loved one is leaving a home they've been in for years — and the logistics feel overwhelming",
    href: "/senior-transitions",
  },
  {
    iconSrc: iconScale3d,
    label: "I'm an attorney or fiduciary",
    description: "You need someone who understands the real estate side and can handle it without creating more work for you",
    href: "/for-attorneys",
  },
  {
    iconSrc: iconMappin3d,
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border border-gold/20 mb-5">
              <img src={iconHelp3d} alt="" aria-hidden="true" className="w-10 h-10 object-contain" loading="lazy" />
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
                className="card-3d group flex items-center gap-4 p-5 sm:p-6 min-h-[72px]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/10 border border-gold/20 group-hover:bg-gold/15 transition-colors">
                  <img src={opt.iconSrc} alt="" aria-hidden="true" className="h-8 w-8 object-contain" loading="lazy" />
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
