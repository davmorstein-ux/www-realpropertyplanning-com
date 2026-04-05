import { useState } from "react";
import willVaultIcon from "@/assets/icons/icon-will-vault-3d.png";
import GoldCheck3D from "@/components/GoldCheck3D";
import SecureWillWizard from "@/components/SecureWillWizard";

const bullets = [
  "Secure blockchain storage",
  "Permanent time-stamped record",
  "Private access with your digital key",
  "Easy retrieval for loved ones",
  "Prevents lost or outdated documents",
];

const SecureWillSection = () => {
  const [wizardOpen, setWizardOpen] = useState(false);

  return (
    <>
    <section className="py-16 sm:py-24 bg-gradient-to-b from-secondary via-background to-secondary">
      <div className="mx-auto max-w-6xl px-6">
        {/* Desktop: side-by-side | Mobile: stacked image-on-top */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Image – shows first on mobile, right on desktop via order */}
          <div className="w-full lg:w-5/12 flex justify-center lg:order-2">
            <img
              src={willVaultIcon}
              alt="Secure blockchain will vault with permanent time-stamp seal"
              className="w-64 sm:w-72 lg:w-[340px] drop-shadow-2xl will-vault-float"
              loading="lazy"
            />
          </div>

          {/* Text content */}
          <div className="w-full lg:w-7/12 lg:order-1 text-center lg:text-left">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-5">
              Secure Your Will. Protect Your Legacy.
            </h2>

            <p className="text-lg sm:text-xl font-semibold text-foreground/90 leading-relaxed mb-6">
              Upload and securely store your will in the blockchain cloud — ensuring easy, reliable access for you and your loved ones, now and in the future.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              Your last will &amp; testament is one of the most important documents you will ever create. This secure digital storage solution allows you to upload your will to a blockchain-backed system where it is time-stamped, authenticated, and safely preserved.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              Once stored, your document cannot be altered, lost, or misplaced. Access is controlled entirely by a private digital key — ensuring that only you, or those you authorize, can retrieve it when needed.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              This creates a single, reliable source of truth — giving you and your loved ones confidence in knowing exactly where to find your will and that it is the correct, verified version.
            </p>

            {/* Bullets */}
            <ul className="space-y-3 mb-10 inline-block text-left">
              {bullets.map((text) => (
                <li key={text} className="flex items-center gap-3">
                  <GoldCheck3D size={22} className="shrink-0" />
                  <span className="text-foreground text-base sm:text-lg font-medium">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <button
                onClick={() => setWizardOpen(true)}
                className="secure-will-cta inline-flex items-center justify-center px-10 py-5 rounded-xl text-xl sm:text-2xl font-bold text-white transition-all duration-200"
              >
                Secure Your Will Now
              </button>
              <p className="text-sm sm:text-base text-muted-foreground italic max-w-md">
                No pressure. Secure, private, and accessible only to you and those you trust.
              </p>
            </div>
          </div>
        </div>

        {/* Disclosure */}
        <div className="mt-14 pt-8 border-t border-border/50 max-w-3xl mx-auto">
          <p className="text-sm sm:text-[15px] text-muted-foreground/80 leading-relaxed mb-3">
            Real Property Planning provides access to this storage solution as a convenience only and does not create, review, or validate the contents of any uploaded will.
          </p>
          <p className="text-sm sm:text-[15px] text-muted-foreground/80 leading-relaxed">
            Once a document is uploaded, access is controlled exclusively by the holder(s) of the private digital key. Real Property Planning does not have access to, custody of, or the ability to retrieve your documents.
          </p>
        </div>
      </div>
    </section>
    <SecureWillWizard open={wizardOpen} onOpenChange={setWizardOpen} />
    </>
  );
};

export default SecureWillSection;
