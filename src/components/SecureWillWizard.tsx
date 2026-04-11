import { useState, useCallback, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Lock, Upload, Shield, Check, Send, ChevronRight, FileText, X } from "lucide-react";
import proofOfThoughtSeal from "@/assets/icons/proof-of-thought-seal.jpeg";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

interface SecureWillWizardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/* ─── step indicator dots ─── */
const StepDots = ({ current, total }: { current: number; total: number }) => (
  <div className="flex items-center justify-center gap-2 mb-8">
    {Array.from({ length: total }, (_, i) => (
      <div
        key={i}
        className={`h-2.5 rounded-full transition-all duration-300 ${
          i + 1 === current
            ? "w-8 bg-primary"
            : i + 1 < current
            ? "w-2.5 bg-primary/50"
            : "w-2.5 bg-border"
        }`}
      />
    ))}
  </div>
);

/* ─── reusable 3D button ─── */
const WizardButton = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-200 text-lg sm:text-xl px-8 py-4 sm:px-10 sm:py-5";
  const styles = {
    primary: "secure-will-cta text-white",
    secondary:
      "bg-card text-foreground border-2 border-border hover:border-primary/40 shadow-md hover:shadow-lg",
    ghost: "text-muted-foreground hover:text-foreground underline underline-offset-4",
  };
  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};

/* ─── SCREEN 1: Intro ─── */
const IntroScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="flex flex-col items-center text-center px-2">
    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
      <Shield className="w-10 h-10 text-primary" />
    </div>
    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
      Secure Your Will
    </h2>
    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-md mb-2">
      This process takes less than 2 minutes.
    </p>
    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mb-10">
      Your document will be securely stored, time-stamped, and accessible only by you and those you
      trust.
    </p>
    <WizardButton onClick={onNext}>
      Begin Secure Setup <ChevronRight className="w-5 h-5" />
    </WizardButton>
  </div>
);

/* ─── SCREEN 2: Profile ─── */
const ProfileScreen = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const [form, setForm] = useState({ first: "", last: "", email: "", phone: "" });
  const valid = form.first.trim() && form.last.trim() && form.email.includes("@");

  const fieldClass =
    "w-full rounded-lg border-2 border-border bg-background px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all";

  return (
    <div className="flex flex-col items-center text-center px-2">
      <div className="w-28 h-28 rounded-full overflow-hidden -mt-4 mb-1">
        <img src={proofOfThoughtSeal} alt="Proof of Thought verified seal" className="w-full h-full object-cover"  loading="lazy"/>
      </div>
      <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-0.5" style={{ color: '#1d7372' }}>
        Create Your Secure Access Profile
      </h2>
      <p className="text-[13px] text-muted-foreground mb-1 max-w-sm wizard-subtitle-tight">
        This allows you to securely retrieve your document in the future.
      </p>
      <div className="w-full max-w-sm space-y-1.5 text-left mb-4">
        <div>
          <label htmlFor="sw-first" className="block text-sm font-semibold text-foreground mb-1">First Name</label>
          <input
            id="sw-first"
            type="text"
            className={fieldClass}
            placeholder="First name"
            value={form.first}
            onChange={(e) => setForm((p) => ({ ...p, first: e.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="sw-last" className="block text-sm font-semibold text-foreground mb-1">Last Name</label>
          <input
            id="sw-last"
            type="text"
            className={fieldClass}
            placeholder="Last name"
            value={form.last}
            onChange={(e) => setForm((p) => ({ ...p, last: e.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="sw-email" className="block text-sm font-semibold text-foreground mb-1">Email</label>
          <input
            id="sw-email"
            type="email"
            className={fieldClass}
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="sw-phone" className="block text-sm font-semibold text-foreground mb-1">
            Phone <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="sw-phone"
            type="tel"
            className={fieldClass}
            placeholder="(555) 555-0000"
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
        <WizardButton variant="secondary" onClick={onBack} className="flex-1 text-sm sm:text-base !px-5 !py-2.5">
          Back
        </WizardButton>
        <WizardButton
          onClick={valid ? onNext : undefined}
          className={`flex-1 text-sm sm:text-base !px-5 !py-2.5 ${!valid ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Continue <ChevronRight className="w-4 h-4" />
        </WizardButton>
      </div>
    </div>
  );
};

/* ─── SCREEN 3: Upload ─── */
const UploadScreen = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f && (f.type === "application/pdf" || f.name.endsWith(".docx"))) setFile(f);
  }, []);

  return (
    <div className="flex flex-col items-center text-center px-2">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
        <Upload className="w-8 h-8 text-primary" />
      </div>
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
        Upload Your Will
      </h2>
      <p className="text-base text-muted-foreground mb-6">
        You can update your document at any time.
      </p>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`w-full max-w-sm border-2 border-dashed rounded-xl p-8 mb-3 transition-all cursor-pointer ${
          dragging
            ? "border-primary bg-primary/5"
            : file
            ? "border-primary/40 bg-primary/5"
            : "border-border hover:border-primary/40"
        }`}
        onClick={() => document.getElementById("will-file-input")?.click()}
      >
        {file ? (
          <div className="flex flex-col items-center gap-2">
            <FileText className="w-10 h-10 text-primary" />
            <span className="text-foreground font-semibold text-base">{file.name}</span>
            <span className="text-sm text-muted-foreground">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <Upload className="w-10 h-10 text-muted-foreground/50" />
            <p className="text-foreground font-semibold text-base">Drag & drop or browse files</p>
            <p className="text-sm text-muted-foreground">Accepted: PDF, DOCX</p>
          </div>
        )}
        <input
          id="will-file-input"
          type="file"
          accept=".pdf,.docx"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) setFile(f);
          }}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mt-5">
        <WizardButton variant="secondary" onClick={onBack} className="flex-1 text-base sm:text-lg">
          Back
        </WizardButton>
        <WizardButton
          onClick={file ? onNext : undefined}
          className={`flex-1 ${!file ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Upload & Secure <Lock className="w-5 h-5" />
        </WizardButton>
      </div>
    </div>
  );
};

/* ─── SCREEN 4: Processing ─── */
const ProcessingScreen = ({ onDone }: { onDone: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1500);
    const t2 = setTimeout(() => setPhase(2), 3200);
    const t3 = setTimeout(() => onDone(), 4500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);

  return (
    <div className="flex flex-col items-center text-center px-2 py-8">
      {/* animated lock */}
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping" />
        <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Lock className="w-12 h-12 text-primary" />
        </div>
      </div>

      <p
        className={`text-xl font-semibold text-foreground transition-opacity duration-500 mb-2 ${
          phase >= 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        Securing your document…
      </p>
      <p
        className={`text-lg text-muted-foreground transition-opacity duration-500 ${
          phase >= 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        Applying permanent time-stamp…
      </p>

      {/* connection lines animation */}
      <div className="mt-8 flex gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-2 h-8 rounded-full bg-primary/40 animate-pulse"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
    </div>
  );
};

/* ─── SCREEN 5: Confirmation ─── */
const ConfirmationScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="flex flex-col items-center text-center px-2">
    <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
      <Check className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
    </div>
    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">
      Your Will Has Been Secured
    </h2>
    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mb-6">
      Your document is now safely stored and authenticated.
    </p>

    {/* Important notice */}
    <div className="w-full max-w-sm rounded-xl border-2 border-accent bg-accent/20 p-5 mb-8">
      <div className="flex items-start gap-3">
        <Shield className="w-6 h-6 text-primary shrink-0 mt-0.5" />
        <p className="text-foreground font-semibold text-base text-left leading-relaxed">
          Your private access key is required to retrieve your document.
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-3 w-full max-w-sm">
      <WizardButton onClick={() => {}}>
        Download My Access Key
      </WizardButton>
      <WizardButton variant="secondary" onClick={() => {}}>
        <Send className="w-5 h-5" /> Email Me Instructions
      </WizardButton>
      <WizardButton variant="ghost" onClick={onNext}>
        Continue
      </WizardButton>
    </div>
  </div>
);

/* ─── SCREEN 6: Share ─── */
const ShareScreen = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center text-center px-2">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
        <Send className="w-8 h-8 text-primary" />
      </div>
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
        Share Access <span className="text-muted-foreground font-normal">(Optional)</span>
      </h2>
      <p className="text-base text-muted-foreground max-w-sm mb-6 leading-relaxed">
        You can provide access instructions to someone you trust.
      </p>

      <div className="w-full max-w-sm text-left mb-6">
        <label htmlFor="sw-trusted-email" className="block text-sm font-semibold text-foreground mb-1">
          Trusted contact email
        </label>
        <input
          id="sw-trusted-email"
          type="email"
          className="w-full rounded-lg border-2 border-border bg-background px-4 py-3.5 text-lg text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          placeholder="contact@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 w-full max-w-sm">
        <WizardButton onClick={() => {}} className={!email.includes("@") ? "opacity-50 cursor-not-allowed" : ""}>
          Send Access Instructions
        </WizardButton>
        <WizardButton variant="ghost" onClick={onClose}>
          Skip for Now
        </WizardButton>
      </div>
    </div>
  );
};

/* ─── MAIN WIZARD ─── */
const SecureWillWizard = ({ open, onOpenChange }: SecureWillWizardProps) => {
  const [step, setStep] = useState<Step>(1);

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => setStep(1), 300);
  };

  const totalSteps = 6;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg w-[95vw] max-h-[90vh] overflow-y-auto p-6 sm:p-10 rounded-2xl border-2 border-border/60 shadow-2xl bg-background [&>button]:hidden">
        {/* Custom close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {step !== 4 && <StepDots current={step} total={totalSteps} />}

        {step === 1 && <IntroScreen onNext={() => setStep(2)} />}
        {step === 2 && <ProfileScreen onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <UploadScreen onNext={() => setStep(4)} onBack={() => setStep(2)} />}
        {step === 4 && <ProcessingScreen onDone={() => setStep(5)} />}
        {step === 5 && <ConfirmationScreen onNext={() => setStep(6)} />}
        {step === 6 && <ShareScreen onClose={handleClose} />}
      </DialogContent>
    </Dialog>
  );
};

export default SecureWillWizard;
