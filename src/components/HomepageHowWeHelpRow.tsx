import seniorIcon from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import probateIcon from "@/assets/icons/probate-property-home-icon-washington.webp";
import propertyIcon from "@/assets/icons/real-estate-property-value-icon-washington.webp";
import careIcon from "@/assets/icons/senior-living-placement-icon-washington.webp";
import proIcon from "@/assets/icons/professional-network-nodes-icon-washington.webp";
import familyIcon from "@/assets/icons/real-estate-people-team-icon-washington.webp";

const items = [
  { icon: seniorIcon, label: "Senior transitions" },
  { icon: probateIcon, label: "Estate & probate guidance" },
  { icon: propertyIcon, label: "Property decisions" },
  { icon: careIcon, label: "Care & housing resources" },
  { icon: proIcon, label: "Trusted professionals" },
  { icon: familyIcon, label: "Family coordination" },
];

const HomepageHowWeHelpRow = () => (
  <section className="bg-background py-14 md:py-20">
    <div className="container px-6 lg:px-8">
      <h2
        className="font-serif font-semibold text-navy text-center mb-12"
        style={{ fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.2 }}
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
