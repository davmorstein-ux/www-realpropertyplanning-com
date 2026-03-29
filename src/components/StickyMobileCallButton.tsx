import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const StickyMobileCallButton = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <a
        href="tel:+12069003015"
        className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-gradient-to-b from-[hsl(42,55%,55%)] to-[hsl(42,60%,42%)] text-primary font-bold text-lg tracking-wide py-4 min-h-[56px] shadow-[0_-1px_0_rgba(0,0,0,0.05),0_4px_16px_rgba(0,0,0,0.15),0_2px_0_hsl(42,60%,35%),inset_0_1px_0_rgba(255,255,255,0.25)] active:translate-y-[1px] active:shadow-[0_1px_0_hsl(42,60%,35%),0_2px_8px_rgba(0,0,0,0.12)] transition-all duration-150"
      >
        <img
          src={iconPhone3d}
          alt=""
          aria-hidden="true"
          className="w-5 h-5 object-contain shrink-0"
        />
        Call (206) 900-3015
      </a>
    </div>
  );
};

export default StickyMobileCallButton;
