import abbyPhoto from "@/assets/abby-durr-silver-age-senior-living-advisor.jpg";
import silverAgeLogo from "@/assets/silver-age-senior-living-advisors-logo.png";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-envelope-3d-icon-washington.webp";
import iconMapPin3d from "@/assets/icons/real-estate-location-pin-3d-icon-washington.webp";
import iconGlobe3d from "@/assets/icons/real-estate-website-globe-3d-icon-washington.webp";

const AbbyDurrCard = () => (
  <section className="py-16 lg:py-20 bg-background">
    <div className="container px-6 lg:px-8">
      <div className="max-w-[900px] mx-auto">
        <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm text-center">
          Featured Provider
        </p>
        <h2 className="font-serif text-3xl text-foreground font-semibold mb-8 text-center">
          Abby Durr — Senior Living Advisor
        </h2>

        <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
            <div className="shrink-0">
              <img
                src={abbyPhoto}
                alt="Photo of Abby Durr, Senior Living Advisor at Silver Age Senior Living Advisors"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"
                loading="lazy"
              />
            </div>
            <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
              <div className="sm:self-start sm:ml-[58px]">
                <img
                  src={silverAgeLogo}
                  alt="Silver Age Senior Living Advisors logo"
                  className="h-[64px] w-auto object-contain mx-auto sm:mx-0 block"
                  loading="lazy"
                />
              </div>
              <div className="w-full mt-2 text-center sm:pl-[58px] sm:text-left">
                <p className="text-foreground font-semibold text-lg">Abby Durr</p>
                <p className="text-muted-foreground text-sm mb-3">
                  Senior Living Advisor · Silver Age Senior Living Advisors
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Abby Durr is the Owner and Founder of Silver Age Care Advisors, a Washington-based senior housing and care advisory company assisting families throughout the Greater Seattle region. Since 2008, Abby and her team have guided older adults and their loved ones through decisions surrounding assisted living, memory care, adult family homes, and in-home care with compassion, integrity, and trusted local expertise. Her passion for eldercare was shaped through the personal experience of caring for both her grandfather and grandmother during seasons of significant need, and further developed through years of hands-on experience in various roles in assisted living, memory care, and senior care advocacy. Abby is known for her compassionate, relationship-driven approach, ethical guidance, and commitment to helping families make confident, informed decisions during life's most challenging transitions.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Silver Age Advisors is based in Issaquah, WA and helps individuals and families navigate senior housing and care options throughout the Puget Sound region and Wenatchee. We maintain a database of over 6,500 care homes and communities, carefully vetting each one before adding it to our referral network. We personally accompany families through tours, support them during the move-in and signing process, and continue advocating on their behalf after the transition.
                </p>
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-start gap-2 justify-center sm:justify-start">
                    <img src={iconMapPin3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0 mt-0.5" loading="lazy" />
                    <span className="text-muted-foreground">1567 Highlands Dr NE, Suite 110, Issaquah, WA 98029</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="tel:+14258917569" className="text-accent hover:text-gold underline-offset-4 hover:underline">(425) 891-7569</a>
                    <span className="text-muted-foreground">Main</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="tel:+12066697191" className="text-accent hover:text-gold underline-offset-4 hover:underline">(206) 669-7191</a>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconEmail3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="mailto:info@silveragecare.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">info@silveragecare.com</a>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconEmail3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="mailto:abby@silveragecare.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">abby@silveragecare.com</a>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconGlobe3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="https://www.silveragecare.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">www.silveragecare.com</a>
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

export default AbbyDurrCard;
