import meriannPhoto from "@/assets/meriann-roberts-ginnys-girls-owner.webp";
import abigailPhoto from "@/assets/abigail-mckee-ginnys-girls-manager.webp";
import ginnysGirlsLogo from "@/assets/ginnys-girls-estate-services-logo.png";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-envelope-3d-icon-washington.webp";
import iconMapPin3d from "@/assets/icons/real-estate-location-pin-3d-icon-washington.webp";
import iconGlobe3d from "@/assets/icons/real-estate-website-globe-3d-icon-washington.webp";

const GinnysGirlsCard = () => (
  <section className="py-16 lg:py-20 bg-background">
    <div className="container px-6 lg:px-8">
      <div className="max-w-[900px] mx-auto">
        <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm text-center">
          Featured Provider
        </p>
        <h2 className="font-serif text-3xl text-foreground font-semibold mb-8 text-center">
          Ginny's Girls Estate Services
        </h2>

        <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
            <div className="shrink-0 flex gap-2">
              <div className="flex flex-col items-center">
                <img
                  src={meriannPhoto}
                  alt="Photo of Meriann Roberts, Owner of Ginny's Girls Estate Services"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-border shadow-sm"
                  loading="lazy"
                />
                <p className="text-foreground font-semibold text-xs mt-1.5 text-center">Meriann Roberts</p>
                <p className="text-muted-foreground text-[11px] text-center">Owner</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={abigailPhoto}
                  alt="Photo of Abigail McKee, Manager at Ginny's Girls Estate Services"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-border shadow-sm"
                  loading="lazy"
                />
                <p className="text-foreground font-semibold text-xs mt-1.5 text-center">Abigail McKee</p>
                <p className="text-muted-foreground text-[11px] text-center">Manager</p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
              <div className="sm:self-start sm:ml-[58px]">
                <img
                  src={ginnysGirlsLogo}
                  alt="Ginny's Girls Estate Services logo"
                  className="h-[320px] w-auto object-contain mx-auto sm:mx-0 block"
                  loading="lazy"
                />
              </div>
              <div className="w-full mt-2 text-center sm:pl-[58px] sm:text-left">
                <p className="text-foreground font-semibold text-lg">Meriann Roberts &middot; Abigail McKee</p>
                <p className="text-muted-foreground text-sm mb-3">
                  Owner &middot; Manager · Ginny's Girls Estate Services
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Ginny's is a family owned and operated company, based in Edmonds, WA providing senior move management, estate sales, residential clear outs and personal property appraisals. We work throughout North King and Snohomish counties serving families in transition, offering:
                </p>
                <ul className="text-muted-foreground text-sm leading-relaxed mb-3 list-disc pl-5 space-y-2 text-left">
                  <li><span className="font-semibold text-foreground">Comprehensive senior move management services.</span> Certified by NASMM (National Association of Senior Move Managers), our team can provide space planning, sorting, packing, oversight of the move, unpacking and resettling.</li>
                  <li><span className="font-semibold text-foreground">In house estate sales in unoccupied homes.</span> Ginny's takes care of the belongings left behind after a move or death, maximizing the value for the client.</li>
                  <li><span className="font-semibold text-foreground">Residential clear outs.</span> When the family is ready, our fantastic clear out team will remove items from the home, taking them to donation, discard or recycle, leaving the home empty and ready for the next step.</li>
                  <li><span className="font-semibold text-foreground">Personal property appraisals.</span> Having earned certification from ISA (International Society of Appraisers), we are able to provide or facilitate valuation of the client's items.</li>
                </ul>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  We work with the utmost professionalism and compassion to take the burden off the client and provide solutions during times of change.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  <span className="font-semibold text-foreground">Memberships:</span> NASMM — National Association of Senior Move Managers · ASEL — American Society of Estate Liquidators
                </p>
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-start gap-2 justify-center sm:justify-start">
                    <img src={iconMapPin3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0 mt-0.5" loading="lazy" />
                    <span className="text-muted-foreground">Edmonds, WA — Serving North King and Snohomish Counties</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="tel:+12064660759" className="text-accent hover:text-gold underline-offset-4 hover:underline">(206) 466-0759</a>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconEmail3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="mailto:info@ginnysestates.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">info@ginnysestates.com</a>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <img src={iconGlobe3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    <a href="https://www.ginnysestates.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">www.ginnysestates.com</a>
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

export default GinnysGirlsCard;
