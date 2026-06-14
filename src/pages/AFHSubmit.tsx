import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, ChevronLeft, ChevronRight, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

// Update this email to route submissions elsewhere.
const SUBMISSION_EMAIL = "dave.stein@exprealty.com";

type ListingTypeChoice = "" | "property" | "business" | "both";

interface FormData {
  // Step 1
  listingType: ListingTypeChoice;
  askingPrice: string;
  timeline: string;
  // Step 2
  streetAddress: string;
  city: string;
  county: string;
  zip: string;
  yearBuilt: string;
  squareFeet: string;
  lotSize: string;
  bedrooms: string;
  bathrooms: string;
  licensedCapacity: string;
  dshsStatus: string;
  medicaidCertified: string;
  propertyDescription: string;
  // Step 3
  currentOccupancy: string;
  annualRevenue: string;
  annualNetIncome: string;
  yearsOperation: string;
  payerMix: string;
  staffingIncluded: string;
  reasonForSelling: string;
  financialNotes: string;
  // Step 4
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bestContact: string;
  brokerStatus: string;
  additionalNotes: string;
}

const initial: FormData = {
  listingType: "",
  askingPrice: "",
  timeline: "",
  streetAddress: "", city: "", county: "", zip: "",
  yearBuilt: "", squareFeet: "", lotSize: "",
  bedrooms: "", bathrooms: "",
  licensedCapacity: "", dshsStatus: "", medicaidCertified: "",
  propertyDescription: "",
  currentOccupancy: "", annualRevenue: "", annualNetIncome: "",
  yearsOperation: "", payerMix: "", staffingIncluded: "",
  reasonForSelling: "", financialNotes: "",
  firstName: "", lastName: "", email: "", phone: "",
  bestContact: "", brokerStatus: "", additionalNotes: "",
};

const STEPS = [
  "Listing type",
  "Property details",
  "Business & financials",
  "Contact & notes",
  "Review & submit",
];

const inputClass =
  "w-full px-4 py-3 text-[17px] border border-slate-300 rounded-lg bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1a7a78]/40 focus:border-[#1a7a78]";
const labelClass = "block text-[14px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5";

const Field: React.FC<{ label: string; required?: boolean; children: React.ReactNode; hint?: string }> = ({
  label, required, children, hint,
}) => (
  <div>
    <label className={labelClass}>
      {label}{required && <span className="text-red-600 ml-1">*</span>}
    </label>
    {children}
    {hint && <div className="text-[14px] text-slate-500 mt-1">{hint}</div>}
  </div>
);

const Radio: React.FC<{ name: string; value: string; checked: boolean; onChange: () => void; label: string }> = ({
  name, value, checked, onChange, label,
}) => (
  <label className="inline-flex items-center gap-2 text-[17px] text-slate-700 cursor-pointer">
    <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="accent-[#1a7a78]" />
    {label}
  </label>
);

const SummaryRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between gap-4 py-2 border-b border-slate-100 last:border-b-0">
    <div className="text-[15px] text-slate-500">{label}</div>
    <div className="text-[17px] font-medium text-slate-800 text-right">{value || "—"}</div>
  </div>
);

const AFHSubmit: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) => setData((d) => ({ ...d, [k]: v }));

  const skipsProperty = data.listingType === "business";

  const canAdvance = useMemo(() => {
    if (step === 1) return !!data.listingType;
    if (step === 4) return !!data.firstName && !!data.lastName && !!data.email;
    return true;
  }, [step, data]);

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = async () => {
    setSubmitting(true);
    // TODO: Wire EmailJS or server-side delivery here.
    // Netlify form fallback + mailto so a submission reaches the recipient on any host.
    try {
      const fd = new FormData();
      fd.append("form-name", "afh-submit");
      Object.entries(data).forEach(([k, v]) => fd.append(k, String(v)));
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(fd as unknown as Record<string, string>).toString(),
      }).catch(() => null);
    } finally {
      console.log("AFH Submit form data:", data);
      const body = encodeURIComponent(
        Object.entries(data).map(([k, v]) => `${k}: ${v || "—"}`).join("\n"),
      );
      const subject = encodeURIComponent(`AFH Listing Submission — ${data.city || "New"}`);
      // Fire mailto in background so success state still renders.
      const a = document.createElement("a");
      a.href = `mailto:${SUBMISSION_EMAIL}?subject=${subject}&body=${body}`;
      a.click();
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const stepNav = (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
      {step > 1 ? (
        <button
          type="button"
          onClick={back}
          className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#1a7a78] hover:underline"
        >
          <ChevronLeft size={16} /> Back
        </button>
      ) : <span />}
      {step < 5 ? (
        <button
          type="button"
          onClick={next}
          disabled={!canAdvance}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[15px] font-semibold transition-colors ${
            canAdvance ? "bg-[#1a7a78] hover:bg-[#155f5d] text-white" : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          {step === 4 ? "Review" : "Next"} <ChevronRight size={16} />
        </button>
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[15px] font-semibold bg-[#1a7a78] hover:bg-[#155f5d] text-white disabled:opacity-70"
        >
          <Send size={14} /> {submitting ? "Submitting…" : "Submit listing"}
        </button>
      )}
    </div>
  );

  return (
    <>
      <SEOHead
        title="Submit Your AFH Listing | Real Property Planning"
        description="Submit your Adult Family Home listing — property, business, or both. David reviews and publishes approved listings within 48 hours."
        canonical="https://realpropertyplanning.com/afh-submit"
        noIndex
      />
      <Header />

      {/* Hidden Netlify form registration */}
      <form name="afh-submit" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input name="bot-field" />
        {Object.keys(initial).map((k) => <input key={k} name={k} />)}
      </form>

      <main id="main-content" className="min-h-screen bg-slate-50" style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section className="bg-white border-b border-slate-200 py-10 md:py-14">
          <div className="max-w-3xl mx-auto px-6">
            <Link to="/afh-marketplace" className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#1a7a78] hover:underline mb-4">
              <ChevronLeft size={14} /> Back to AFH Marketplace
            </Link>
            <h1 className="text-[28px] md:text-[36px] font-bold text-slate-900 leading-tight tracking-tight">
              Submit your AFH listing
            </h1>
            <p className="text-[17px] md:text-[19px] text-slate-600 mt-3 leading-relaxed">
              Complete the form below. David will review and publish your listing within 48 hours.
            </p>
          </div>
        </section>

        {/* Progress */}
        <section className="bg-white border-b border-slate-200 py-4">
          <div className="max-w-3xl mx-auto px-6 flex flex-wrap items-center gap-3">
            {STEPS.map((label, i) => {
              const n = i + 1;
              const done = n < step;
              const active = n === step;
              return (
                <React.Fragment key={label}>
                  <div className="inline-flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full inline-flex items-center justify-center text-[13px] font-bold ${
                      done || active ? "bg-[#1a7a78] text-white" : "bg-slate-200 text-slate-500"
                    }`}>
                      {done ? <Check size={14} /> : n}
                    </div>
                    <span className={`text-[14px] ${active ? "font-bold text-slate-800" : "text-slate-500"}`}>
                      {label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && <div className="w-4 h-px bg-slate-300" />}
                </React.Fragment>
              );
            })}
          </div>
        </section>

        {/* Form */}
        <section className="max-w-3xl mx-auto px-6 py-10">
          {submitted ? (
            <div className="bg-white border border-slate-200 rounded-xl p-10 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 inline-flex items-center justify-center mb-4">
                <Check size={28} />
              </div>
              <h2 className="text-[24px] font-bold text-slate-900">Listing submitted!</h2>
              <p className="text-[17px] text-slate-600 mt-2 leading-relaxed">
                David will follow up within 48 hours. Check your email for a confirmation.
              </p>
              <button
                onClick={() => navigate("/afh-marketplace")}
                className="mt-6 inline-flex items-center gap-2 bg-[#1a7a78] hover:bg-[#155f5d] text-white text-[15px] font-semibold px-6 py-3 rounded-lg"
              >
                Browse the marketplace
              </button>
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-xl p-7 md:p-9">
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-[22px] font-bold text-slate-900">Listing type</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {([
                      ["property", "Property only", "Real estate, building & land"],
                      ["business", "Business only", "License, operations & goodwill"],
                      ["both", "Property + business", "Complete turnkey package"],
                    ] as const).map(([val, title, desc]) => {
                      const active = data.listingType === val;
                      return (
                        <button
                          key={val}
                          type="button"
                          onClick={() => update("listingType", val)}
                          className={`text-left rounded-xl border-2 p-5 transition-all ${
                            active ? "border-[#1a7a78] bg-[#1a7a78]/5" : "border-slate-200 bg-white hover:border-slate-300"
                          }`}
                        >
                          <div className="text-[17px] font-bold text-slate-900">{title}</div>
                          <div className="text-[15px] text-slate-600 mt-1 leading-relaxed">{desc}</div>
                        </button>
                      );
                    })}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <Field label="Asking price ($)">
                      <input type="number" min={0} className={inputClass} value={data.askingPrice} onChange={(e) => update("askingPrice", e.target.value)} />
                    </Field>
                    <Field label="Preferred timeline">
                      <select className={inputClass} value={data.timeline} onChange={(e) => update("timeline", e.target.value)}>
                        <option value="">Select…</option>
                        <option>ASAP</option>
                        <option>3–6 months</option>
                        <option>6–12 months</option>
                        <option>Flexible</option>
                      </select>
                    </Field>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-5">
                  <h2 className="text-[22px] font-bold text-slate-900">Property details</h2>
                  {skipsProperty ? (
                    <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg text-[17px] text-slate-700">
                      Property details are not required — skip ahead.
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Street address">
                          <input className={inputClass} value={data.streetAddress} onChange={(e) => update("streetAddress", e.target.value)} />
                        </Field>
                        <Field label="City">
                          <input className={inputClass} value={data.city} onChange={(e) => update("city", e.target.value)} />
                        </Field>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="County">
                          <select className={inputClass} value={data.county} onChange={(e) => update("county", e.target.value)}>
                            <option value="">Select…</option>
                            {["King", "Snohomish", "Pierce", "Kitsap", "Thurston", "Clark", "Spokane", "Whatcom", "Other"].map((c) => <option key={c}>{c}</option>)}
                          </select>
                        </Field>
                        <Field label="Zip code">
                          <input className={inputClass} value={data.zip} onChange={(e) => update("zip", e.target.value)} />
                        </Field>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Field label="Year built">
                          <input type="number" className={inputClass} value={data.yearBuilt} onChange={(e) => update("yearBuilt", e.target.value)} />
                        </Field>
                        <Field label="Square footage">
                          <input type="number" className={inputClass} value={data.squareFeet} onChange={(e) => update("squareFeet", e.target.value)} />
                        </Field>
                        <Field label="Lot size (sq ft)">
                          <input type="number" className={inputClass} value={data.lotSize} onChange={(e) => update("lotSize", e.target.value)} />
                        </Field>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Bedrooms">
                          <input type="number" className={inputClass} value={data.bedrooms} onChange={(e) => update("bedrooms", e.target.value)} />
                        </Field>
                        <Field label="Bathrooms">
                          <input className={inputClass} value={data.bathrooms} onChange={(e) => update("bathrooms", e.target.value)} placeholder="e.g. 3.25" />
                        </Field>
                      </div>
                      <Field label="Licensed AFH capacity">
                        <select className={inputClass} value={data.licensedCapacity} onChange={(e) => update("licensedCapacity", e.target.value)}>
                          <option value="">Select…</option>
                          <option>2 beds</option><option>4 beds</option><option>6 beds</option>
                          <option>Not yet licensed</option>
                        </select>
                      </Field>
                      <Field label="Current DSHS license status">
                        <select className={inputClass} value={data.dshsStatus} onChange={(e) => update("dshsStatus", e.target.value)}>
                          <option value="">Select…</option>
                          <option>Active — in good standing</option>
                          <option>Active — with conditions</option>
                          <option>Expired</option>
                          <option>Never licensed</option>
                        </select>
                      </Field>
                      <Field label="Medicaid certified?">
                        <div className="flex flex-wrap gap-5">
                          {["Yes", "No", "Not sure"].map((opt) => (
                            <Radio key={opt} name="medicaid" value={opt}
                              checked={data.medicaidCertified === opt}
                              onChange={() => update("medicaidCertified", opt)}
                              label={opt} />
                          ))}
                        </div>
                      </Field>
                      <Field label="Property description">
                        <textarea rows={4} className={inputClass} value={data.propertyDescription} onChange={(e) => update("propertyDescription", e.target.value)} />
                      </Field>
                    </>
                  )}
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-5">
                  <h2 className="text-[22px] font-bold text-slate-900">Business & financials</h2>
                  {data.listingType === "property" && (
                    <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg text-[17px] text-slate-700">
                      Financial fields are optional but help buyers assess potential.
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Current occupancy (residents)">
                      <input type="number" className={inputClass} value={data.currentOccupancy} onChange={(e) => update("currentOccupancy", e.target.value)} />
                    </Field>
                    <Field label="Years in operation">
                      <input type="number" className={inputClass} value={data.yearsOperation} onChange={(e) => update("yearsOperation", e.target.value)} />
                    </Field>
                    <Field label="Annual gross revenue ($)">
                      <input type="number" className={inputClass} value={data.annualRevenue} onChange={(e) => update("annualRevenue", e.target.value)} />
                    </Field>
                    <Field label="Annual net income ($)">
                      <input type="number" className={inputClass} value={data.annualNetIncome} onChange={(e) => update("annualNetIncome", e.target.value)} />
                    </Field>
                  </div>
                  <Field label="Primary payer mix">
                    <select className={inputClass} value={data.payerMix} onChange={(e) => update("payerMix", e.target.value)}>
                      <option value="">Select…</option>
                      <option>Primarily private pay</option>
                      <option>Primarily Medicaid</option>
                      <option>Mixed</option>
                      <option>VA / other government</option>
                    </select>
                  </Field>
                  <Field label="Staffing included in sale?">
                    <div className="flex flex-wrap gap-5">
                      {["Yes — all staff staying", "Some staff available", "No / buyer arranges own"].map((opt) => (
                        <Radio key={opt} name="staffing" value={opt}
                          checked={data.staffingIncluded === opt}
                          onChange={() => update("staffingIncluded", opt)} label={opt} />
                      ))}
                    </div>
                  </Field>
                  <Field label="Reason for selling">
                    <select className={inputClass} value={data.reasonForSelling} onChange={(e) => update("reasonForSelling", e.target.value)}>
                      <option value="">Select…</option>
                      <option>Retirement</option>
                      <option>Relocating</option>
                      <option>Health reasons</option>
                      <option>Estate / probate sale</option>
                      <option>Portfolio adjustment</option>
                      <option>Prefer not to say</option>
                    </select>
                  </Field>
                  <Field label="Additional financial notes">
                    <textarea rows={4} className={inputClass} value={data.financialNotes} onChange={(e) => update("financialNotes", e.target.value)} />
                  </Field>
                </div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <div className="space-y-5">
                  <h2 className="text-[22px] font-bold text-slate-900">Contact & notes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="First name" required>
                      <input className={inputClass} value={data.firstName} onChange={(e) => update("firstName", e.target.value)} />
                    </Field>
                    <Field label="Last name" required>
                      <input className={inputClass} value={data.lastName} onChange={(e) => update("lastName", e.target.value)} />
                    </Field>
                    <Field label="Email address" required>
                      <input type="email" className={inputClass} value={data.email} onChange={(e) => update("email", e.target.value)} />
                    </Field>
                    <Field label="Phone number">
                      <input type="tel" className={inputClass} value={data.phone} onChange={(e) => update("phone", e.target.value)} />
                    </Field>
                  </div>
                  <Field label="Best way to reach you">
                    <div className="flex flex-wrap gap-5">
                      {["Email", "Phone call", "Text"].map((opt) => (
                        <Radio key={opt} name="bestContact" value={opt}
                          checked={data.bestContact === opt}
                          onChange={() => update("bestContact", opt)} label={opt} />
                      ))}
                    </div>
                  </Field>
                  <Field label="Are you represented by a real estate broker?">
                    <div className="flex flex-wrap gap-5">
                      {["Yes", "No", "Not yet — interested in representation"].map((opt) => (
                        <Radio key={opt} name="broker" value={opt}
                          checked={data.brokerStatus === opt}
                          onChange={() => update("brokerStatus", opt)} label={opt} />
                      ))}
                    </div>
                  </Field>
                  <Field label="Anything else David should know?">
                    <textarea rows={4} className={inputClass} value={data.additionalNotes} onChange={(e) => update("additionalNotes", e.target.value)} />
                  </Field>
                </div>
              )}

              {/* STEP 5 */}
              {step === 5 && (
                <div className="space-y-6">
                  <h2 className="text-[22px] font-bold text-slate-900">Review & submit</h2>
                  <p className="text-[15px] text-slate-600 bg-amber-50 border border-amber-200 rounded-lg p-4">
                    Nothing is published until David reviews and approves your listing.
                  </p>

                  <div className="rounded-xl border border-slate-200 p-5 bg-slate-50">
                    <h3 className="text-[16px] font-bold text-slate-800 mb-2">Listing overview</h3>
                    <SummaryRow label="Listing type" value={data.listingType} />
                    <SummaryRow label="Asking price" value={data.askingPrice ? `$${Number(data.askingPrice).toLocaleString()}` : ""} />
                    <SummaryRow label="Timeline" value={data.timeline} />
                  </div>

                  <div className="rounded-xl border border-slate-200 p-5 bg-slate-50">
                    <h3 className="text-[16px] font-bold text-slate-800 mb-2">Property</h3>
                    <SummaryRow label="Address" value={[data.streetAddress, data.city, data.county, data.zip].filter(Boolean).join(", ")} />
                    <SummaryRow label="Year built / sqft / lot" value={[data.yearBuilt, data.squareFeet, data.lotSize].filter(Boolean).join(" / ")} />
                    <SummaryRow label="Bed / bath" value={[data.bedrooms, data.bathrooms].filter(Boolean).join(" / ")} />
                    <SummaryRow label="Licensed capacity" value={data.licensedCapacity} />
                    <SummaryRow label="DSHS status" value={data.dshsStatus} />
                    <SummaryRow label="Medicaid certified" value={data.medicaidCertified} />
                    <SummaryRow label="Description" value={data.propertyDescription} />
                  </div>

                  <div className="rounded-xl border border-slate-200 p-5 bg-slate-50">
                    <h3 className="text-[16px] font-bold text-slate-800 mb-2">Business & financials</h3>
                    <SummaryRow label="Occupancy" value={data.currentOccupancy} />
                    <SummaryRow label="Annual revenue" value={data.annualRevenue ? `$${Number(data.annualRevenue).toLocaleString()}` : ""} />
                    <SummaryRow label="Annual net income" value={data.annualNetIncome ? `$${Number(data.annualNetIncome).toLocaleString()}` : ""} />
                    <SummaryRow label="Years operating" value={data.yearsOperation} />
                    <SummaryRow label="Payer mix" value={data.payerMix} />
                    <SummaryRow label="Staffing" value={data.staffingIncluded} />
                    <SummaryRow label="Reason for selling" value={data.reasonForSelling} />
                    <SummaryRow label="Notes" value={data.financialNotes} />
                  </div>

                  <div className="rounded-xl border border-slate-200 p-5 bg-slate-50">
                    <h3 className="text-[16px] font-bold text-slate-800 mb-2">Contact</h3>
                    <SummaryRow label="Name" value={`${data.firstName} ${data.lastName}`.trim()} />
                    <SummaryRow label="Email" value={data.email} />
                    <SummaryRow label="Phone" value={data.phone} />
                    <SummaryRow label="Preferred contact" value={data.bestContact} />
                    <SummaryRow label="Broker status" value={data.brokerStatus} />
                    <SummaryRow label="Notes" value={data.additionalNotes} />
                  </div>
                </div>
              )}

              {stepNav}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AFHSubmit;
