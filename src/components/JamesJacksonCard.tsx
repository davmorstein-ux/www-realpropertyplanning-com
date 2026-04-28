import jamesJacksonPhoto from "@/assets/james-jackson-estate-planning-attorney-seattle.jpg";
import ketterSheppardLogo from "@/assets/ketter-sheppard-law-firm-logo.webp";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-envelope-3d-icon-washington.webp";
import iconMapPin3d from "@/assets/icons/real-estate-location-pin-3d-icon-washington.webp";

const JamesJacksonCard = () => (
  <section className="py-16 lg:py-20 bg-background">
    <div className="container px-6 lg:px-8">
      <div className="max-w-[900px] mx-auto">
        <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm text-center">
          Featured Provider
        </p>
        <h2 className="font-serif text-3xl text-foreground font-semibold mb-8 text-center">
          James Jackson — Trust &amp; Probate Attorney
        </h2>

        <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
            <div className="shrink-0">
              <img
                src={jamesJacksonPhoto}
                alt="Photo of James Jackson, Estate Planning Attorney at Ketter Sheppard"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"
                loading="lazy"
              />
            </div>
            <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
              <div className="sm:self-start sm:ml-[58px]">
                <img
                  src={ketterSheppardLogo}
                  alt="Ketter Sheppard law firm logo"
                  className="h-[64px] w-auto object-contain mx-auto sm:mx-0 block"
                  loading="lazy"
                />
              </div>
              <div className="w-full mt-2 text-center sm:pl-[58px] sm:text-left">
                <p className="text-foreground font-semibold text-lg">James Jackson</p>
                <p className="text-muted-foreground text-sm mb-3">
                  Trust Attorney · Probate Attorney · Ketter, Sheppard &amp; Jackson, LLP
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Ketter, Sheppard &amp; Jackson, LLP is a Seattle-based firm with roots going back to 1984, when David Ketter and Ken Sheppard founded the firm as one of the first tenants of Wells Fargo Center in downtown Seattle. The firm has built a long-standing reputation in tax, trust and estates, business law, and civil litigation.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Jim's practice includes trust and estate planning and administration, guardianship, related real estate matters, and civil litigation. Jim practiced in New York with Horenstein, Josepher &amp; Gewanter, P.C., and served as Senior Attorney for the New York State Division of Housing and Community Renewal. He holds a J.D. from Touro College Jacob D. Fuchsberg Law Center and an LLM in Taxation from the University of Washington School of Law, and is admitted to practice in Washington and New York.
                </p>
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-start gap-2 justify-center sm:justify-start">
                    <img src={iconMapPin3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0 mt-0.5" loading="lazy" />
                    <span className="text-muted-foreground">Wells Fargo Center, Seattle, WA</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="tel:+12063822600" className="text-accent hover:text-gold underline-offset-4 hover:underline">(206) 382-2600</a>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconEmail3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="mailto:jjackson@sksp.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">jjackson@sksp.com</a>
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

export default JamesJacksonCard;
