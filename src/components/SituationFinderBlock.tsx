import { Link } from "react-router-dom";
import iconClipboard3d from "@/assets/icons/icon-clipboard-3d.png";
import iconHome3d from "@/assets/icons/icon-home-3d.png";
import iconScale3d from "@/assets/icons/icon-scale-3d.png";
import iconHeartHands3d from "@/assets/icons/icon-heart-hands-3d.png";
import iconMappin3d from "@/assets/icons/icon-mappin-3d.png";
import iconPeople3d from "@/assets/icons/icon-people-3d.png";

const situations = [
  {
    iconSrc: iconClipboard3d,
    label: "I'm an executor or personal representative",
    description: "Named in a will or appointed by the court to handle property",
    link: "/executors",
  },
  {
    iconSrc: iconHome3d,
    label: "I inherited a home and need guidance",
    description: "Figuring out what to do with a property left to you or your family",
    link: "/guides/inherited-house-washington",
  },
  {
    iconSrc: iconScale3d,
    label: "I'm an attorney with a client who has real property",
    description: "Probate, estate planning, elder law, or family law matter involving real estate",
    link: "/for-attorneys",
  },
  {
    iconSrc: iconHeartHands3d,
    label: "We're helping a parent transition out of their home",
    description: "Senior move to assisted living, memory care, or smaller housing",
    link: "/senior-transitions",
  },
  {
    iconSrc: iconMappin3d,
    label: "I'm managing a Washington property from out of state",
    description: "Need a local point of contact who can coordinate everything",
    link: "/guides/out-of-state-families",
  },
  {
    iconSrc: iconPeople3d,
    label: "Our family is deciding whether to sell or keep an inherited property",
    description: "Need objective valuation insight and a clear picture of options",
    link: "/guides/inherited-house-washington",
  },
];

const SituationFinderBlock = () => (
  <section className="py-16 lg:py-20 bg-secondary">
    <div className="container px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">
            Find Your Situation
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
            Which of These Sounds Like You?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            People come to this site from very different starting points. Pick the one that's closest to your situation — it'll take you to the most relevant information.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {situations.map((s, i) => (
            <Link
              key={i}
              to={s.link}
              className="card-3d group block"
            >
              <div className="flex items-start gap-3 p-5">
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center">
                  <img src={s.iconSrc} alt="" aria-hidden="true" className="h-7 w-7 object-contain" loading="lazy" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-base leading-snug group-hover:text-gold transition-colors">
                    {s.label}
                  </p>
                  <p className="text-muted-foreground text-base mt-1.5 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SituationFinderBlock;
