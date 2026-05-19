import seniorIcon from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import probateIcon from "@/assets/icons/probate-property-home-icon-washington.webp";
import propertyIcon from "@/assets/icons/real-estate-property-value-icon-washington.webp";
import careIcon from "@/assets/icons/senior-living-placement-icon-washington.webp";
import proIcon from "@/assets/icons/professional-network-nodes-icon-washington.webp";
import familyIcon from "@/assets/icons/real-estate-people-team-icon-washington.webp";

const items = [
  { icon: seniorIcon, label: "Helping an aging parent" },
  { icon: probateIcon, label: "Settling a loved one's estate" },
  { icon: propertyIcon, label: "Deciding what to do with the house" },
  { icon: careIcon, label: "Finding the right place to live" },
  { icon: proIcon, label: "Trusted people to help" },
  { icon: familyIcon, label: "Bringing the family together" },
];

const HomepageHowWeHelpRow = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="container px-6 lg:px-8">
      <h2
        className="font-serif text-navy text-center mb-12"
        style={{ fontSize: "clamp(20px, 2vw, 24px)", lineHeight: 1.3, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}
      >
        How We Help
      </h2>


      <ul
        className="mx-auto grid max-w-6xl gap-x-6 gap-y-10"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        }}
      >
        {items.map(({ icon, label }) => (
          <li
            key={label}
            className="flex flex-col items-center text-center"
          >
            <img
              src={icon}
              alt=""
              aria-hidden="true"
              loading="lazy"
              style={{
                width: 96,
                height: 96,
                objectFit: "contain",
                marginBottom: 16,
                background: "transparent",
              }}
            />
            <span
              className="font-serif font-semibold text-navy"
              style={{ fontSize: "18px", lineHeight: 1.3 }}
            >
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HomepageHowWeHelpRow;
