import dominikPhoto from "@/assets/dominik-musafia-divorce-attorney-seattle.avif";
import seattleDivorceOptionsLogo from "@/assets/seattle-divorce-options-logo.avif";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-envelope-3d-icon-washington.webp";
import iconMapPin3d from "@/assets/icons/real-estate-location-pin-3d-icon-washington.webp";
import iconGlobe3d from "@/assets/icons/real-estate-website-globe-3d-icon-washington.webp";

const DominikMusafiaCard = () => (
  <section className="py-16 lg:py-20 bg-background">
    <div className="container px-6 lg:px-8">
      <div className="max-w-[900px] mx-auto">
        <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm text-center">
          Featured Provider
        </p>
        <h2 className="font-serif text-3xl text-foreground font-semibold mb-8 text-center">
          Dominik Musafia — Divorce Attorney
        </h2>

        <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
            <div className="shrink-0">
              <img
                src={dominikPhoto}
                alt="Photo of Dominik Musafia, Divorce Attorney at Seattle Divorce Options"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"
                loading="lazy"
              />
            </div>
            <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
              <div className="sm:self-start sm:ml-[58px]">
                <img
                  src={seattleDivorceOptionsLogo}
                  alt="Seattle Divorce Options logo"
                  className="h-[64px] w-auto object-contain mx-auto sm:mx-0 block"
                  loading="lazy"
                />
              </div>
              <div className="w-full mt-2 text-center sm:pl-[58px] sm:text-left">
                <p className="text-foreground font-semibold text-lg">Dominik Musafia</p>
                <p className="text-muted-foreground text-sm mb-3">
                  Divorce Attorney · Seattle Divorce Options
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Dominik Musafia founded Seattle Divorce Options to help his clients tailor an approach to their unique circumstances, focused on an intent to avoid the courthouse. As a former family law litigator, Dominik has seen the devastation that a litigated divorce can inflict on families; he founded Seattle Divorce Options to offer a better alternative. Every situation is different for every client, and every client has unique needs: approaches are tailored to resolve each client's specific situation. Most approaches aim for interest-based solutions and long-term results.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Dominik has enhanced his family law experience by advising and operating small businesses and working with real property issues, both as an attorney and as a real estate managing broker. He is uniquely qualified to handle divorce matters involving complex issues of business and real property. He is also an avid boater and holds a 100-Ton Master's License (Deck Officer, US Merchant Marine).
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  <span className="font-semibold text-foreground">Memberships:</span> KCBA — King County Bar Association · CP — Collaborative Professionals of Washington · IACP — International Academy of Collaborative Professionals · KCCL — King County Collaborative Law
                </p>
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-start gap-2 justify-center sm:justify-start">
                    <img src={iconMapPin3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0 mt-0.5" loading="lazy" />
                    <span className="text-muted-foreground">Arboretum Professional Center, 2910 E. Madison Street, Seattle, WA 98112</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="tel:+12068602431" className="text-accent hover:text-gold underline-offset-4 hover:underline">(206) 860-2431</a>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconEmail3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="mailto:dom@seattledivorceoptions.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">dom@seattledivorceoptions.com</a>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconGlobe3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="https://www.seattledivorceoptions.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">www.seattledivorceoptions.com</a>
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

export default DominikMusafiaCard;
