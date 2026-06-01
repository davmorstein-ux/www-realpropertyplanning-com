import ProviderTile from "@/components/ProviderTile";
import tiffanyPhoto from "@/assets/tiffany-lane-financial-planner-new-york-life-seattle.webp";
import nyLifeLogo from "@/assets/new-york-life-logo.webp";

const TIFFANY_BIO = `With a deep personal understanding of how life transitions impact families, I focus on guiding retirees — and their loved ones — through every step of their financial journey. After witnessing my own family navigate the complexities of Alzheimer's and elder care, I've dedicated my career to helping others plan with confidence. I work closely with retirees and their adult children, offering guidance so families can navigate estate planning, downsizing, and legacy protection together. Let's ensure everyone involved is supported, and your next chapter is exactly as you envision.

For over 180 years, New York Life has existed for one purpose: to help families and businesses achieve financial security and peace of mind. That mission has not changed — even as markets fluctuate, technology advances, and the world moves faster than ever. When you need us, we are there.`;

const TiffanyLaneCard = () => (
  <section className="py-10 md:py-14 bg-background">
    <div className="container px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        <ProviderTile
          name="Tiffany Lane"
          title="Financial Professional"
          company="New York Life — Seattle General Office"
          photo={tiffanyPhoto}
          photoAlt="Photo of Tiffany Lane, Financial Planner at New York Life"
          logo={nyLifeLogo}
          logoAlt="New York Life logo"
          phone="(206) 999-2116"
          phone2="(206) 888-4960"
          email="tcford@ft.newyorklife.com"
          website="https://www.newyorklife.com"
          bio={TIFFANY_BIO}
          specialty="Retirement planning, estate planning, downsizing guidance, and legacy protection for retirees and their families throughout the Greater Seattle area."
        />
      </div>
    </div>
  </section>
);

export default TiffanyLaneCard;
