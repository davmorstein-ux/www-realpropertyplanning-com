import tiffanyPhoto from "@/assets/tiffany-lane-financial-planner-new-york-life-seattle.webp";
import nyLifeLogo from "@/assets/new-york-life-logo.webp";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconMapPin3d from "@/assets/icons/real-estate-location-pin-3d-icon-washington.webp";

const TiffanyLaneCard = () => (
  <section className="py-16 lg:py-20 bg-background">
    <div className="container px-6 lg:px-8">
      <div className="max-w-[900px] mx-auto">
        <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm text-center">
          Featured Financial Provider
        </p>
        <h2 className="font-serif text-3xl text-foreground font-semibold mb-8 text-center">
          Tiffany Lane — Financial Planner
        </h2>

        <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
            <div className="shrink-0">
              <img
                src={tiffanyPhoto}
                alt="Photo of Tiffany Lane, Financial Planner at New York Life — Seattle General Office"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"
                loading="lazy"
              />
            </div>
            <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
              <div className="sm:self-start sm:ml-[58px]">
                <img
                  src={nyLifeLogo}
                  alt="New York Life logo"
                  className="w-[120px] h-auto object-contain mx-auto sm:mx-0 block"
                  loading="lazy"
                />
              </div>
              <div className="w-full mt-2 text-center sm:pl-[58px] sm:text-left">
                <p className="text-foreground font-semibold text-lg">Tiffany Lane</p>
                <p className="text-muted-foreground text-sm mb-3">
                  Financial Planner · New York Life — Seattle General Office
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  With a deep personal understanding of how life transitions impact families, I focus on guiding retirees—and their loved ones—through every step of their financial journey. After witnessing my own family navigate the complexities of Alzheimer's and elder care, I've dedicated my career to helping others plan with confidence. Not only do I assist retirees, but I also work closely with their adult children, offering guidance so families can navigate estate planning, downsizing, and legacy protection together. Let's ensure everyone involved is supported, and your next chapter is exactly as you envision.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  For over 180 years, New York Life has existed for one purpose: to help families and businesses achieve financial security and peace of mind. That mission has not changed — even as markets fluctuate, technology advances, and the world moves faster than ever. What matters most is this: When you need us, we are there.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  <span className="font-semibold text-foreground">License:</span> CA Insurance License #4436381
                </p>
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-start gap-2 justify-center sm:justify-start">
                    <img src={iconMapPin3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0 mt-0.5" loading="lazy" />
                    <span className="text-muted-foreground">10885 NE 4th St. Suite 1400, Bellevue, WA 98004</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="tel:+12069992116" className="text-accent hover:text-gold underline-offset-4 hover:underline">(206) 999-2116</a>
                    <span className="text-muted-foreground">Mobile</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="tel:+14254624800" className="text-accent hover:text-gold underline-offset-4 hover:underline">(425) 462-4800</a>
                    <span className="text-muted-foreground">Office</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="sms:+12068884960" className="text-accent hover:text-gold underline-offset-4 hover:underline">(206) 888-4960</a>
                    <span className="text-muted-foreground">Text</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TiffanyLaneCard;
