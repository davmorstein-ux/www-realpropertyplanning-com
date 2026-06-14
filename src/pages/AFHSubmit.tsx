import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Check, Home, Briefcase, Building2, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const TEAL = "#1a7a78";
const SLATE = "#2c3e50";
const GRAY_BG = "#f4f6f7";
const GRAY_BORDER = "#dde3e8";
const GRAY_TEXT = "#6b7a87";
const WHITE = "#ffffff";

// Submission recipient. Update this email to route submissions elsewhere.
const SUBMISSION_EMAIL = "dave.stein@exprealty.com";

type ListingType = "property" | "business" | "both";

interface FormState {
  // Step 1: Listing type
  listingType: ListingType | "";

  // Step 2: Location & basics
  addressVisibility: "show" | "city-only";
  streetAddress: string;
  city: string;
  county: string;
  zip: string;
  capacity: string;

  // Step 3: Property details (property / both)
  yearBuilt: string;
  squareFeet: string;
  bedrooms: string;
  bathrooms: string;
  parking: string;
  propertyNotes: string;

  // Step 4: Business details (business / both)
  yearsOperating: string;
  currentOccupancy: string;
  monthlyRevenue: string;
  monthlyNOI: string;
  dshsLicensed: "yes" | "no" | "";
  medicaidCertified: "yes" | "no" | "";
  staffCount: string;
  businessNotes: string;

  // Step 5: Pricing & contact
  askingPrice: string;
  timeline: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  role: string;
  additionalNotes: string;
}

const initialState: FormState = {
  listingType: "",
  addressVisibility: "city-only",
  streetAddress: "",
  city: "",
  county: "",
  zip: "",
  capacity: "",
  yearBuilt: "",
  squareFeet: "",
  bedrooms: "",
  bathrooms: "",
  parking: "",
  propertyNotes: "",
  yearsOperating: "",
  currentOccupancy: "",
  monthlyRevenue: "",
  monthlyNOI: "",
  dshsLicensed: "",
  medicaidCertified: "",
  staffCount: "",
  businessNotes: "",
  askingPrice: "",
  timeline: "",
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  role: "",
  additionalNotes: "",
};

const STEP_TITLES = [
  "Listing type",
  "Location & capacity",
  "Property details",
  "Business details",
  "Pricing & contact",
];

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "11px 14px", fontSize: 14, fontFamily: "inherit",
  border: `1px solid ${GRAY_BORDER}`, borderRadius: 8, backgroundColor: WHITE,
  color: SLATE, boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: 12, fontWeight: 600, color: SLATE,
  letterSpacing: "0.03em", textTransform: "uppercase", marginBottom: 6,
};

const Field: React.FC<{
  label: string; children: React.ReactNode; required?: boolean; helper?: string;
}> = ({ label, children, required, helper }) => (
  <div>
    <label style={labelStyle}>
      {label}{required && <span style={{ color: "#b54", marginLeft: 4 }}>*</span>}
    </label>
    {children}
    {helper && <div style={{ fontSize: 12, color: GRAY_TEXT, marginTop: 4 }}>{helper}</div>}
  </div>
);

const TypeCard: React.FC<{
  active: boolean; icon: React.ReactNode; title: string; desc: string; onClick: () => void;
}> = ({ active, icon, title, desc, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      textAlign: "left", background: active ? "#e6f2f1" : WHITE,
      border: `2px solid ${active ? TEAL : GRAY_BORDER}`, borderRadius: 10,
      padding: "1.1rem 1.15rem", cursor: "pointer", display: "flex",
      flexDirection: "column", gap: 8, fontFamily: "inherit",
      transition: "all 0.15s",
    }}
  >
    <div style={{ color: TEAL }}>{icon}</div>
    <div style={{ fontSize: 15, fontWeight: 700, color: SLATE }}>{title}</div>
    <div style={{ fontSize: 13, color: GRAY_TEXT, lineHeight: 1.5 }}>{desc}</div>
  </button>
);

const AFHSubmit: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const includesProperty = form.listingType === "property" || form.listingType === "both";
  const includesBusiness = form.listingType === "business" || form.listingType === "both";

  // Visible steps depend on listing type
  const visibleSteps: number[] = [1, 2];
  if (includesProperty) visibleSteps.push(3);
  if (includesBusiness) visibleSteps.push(4);
  visibleSteps.push(5);

  const currentIndex = visibleSteps.indexOf(step);
  const totalVisible = visibleSteps.length;
  const isLast = currentIndex === totalVisible - 1;

  const next = () => {
    const nextStep = visibleSteps[currentIndex + 1];
    if (nextStep) setStep(nextStep);
  };
  const prev = () => {
    const prevStep = visibleSteps[currentIndex - 1];
    if (prevStep) setStep(prevStep);
  };

  const canAdvance = (): boolean => {
    if (step === 1) return !!form.listingType;
    if (step === 2) return !!form.city && !!form.county && !!form.capacity;
    if (step === 5) return !!form.contactName && !!form.contactEmail && !!form.askingPrice;
    return true;
  };

  const buildEmailBody = (): string => {
    const lines: string[] = [
      "AFH Listing Submission",
      "======================",
      "",
      `Listing type: ${form.listingType}`,
      "",
      "-- Location --",
      `Address visibility: ${form.addressVisibility}`,
      `Street: ${form.streetAddress || "(withheld)"}`,
      `City: ${form.city}`,
      `County: ${form.county}`,
      `Zip: ${form.zip}`,
      `Licensed capacity: ${form.capacity}`,
      "",
    ];
    if (includesProperty) {
      lines.push(
        "-- Property --",
        `Year built: ${form.yearBuilt}`,
        `Square feet: ${form.squareFeet}`,
        `Bedrooms: ${form.bedrooms}`,
        `Bathrooms: ${form.bathrooms}`,
        `Parking: ${form.parking}`,
        `Notes: ${form.propertyNotes}`,
        "",
      );
    }
    if (includesBusiness) {
      lines.push(
        "-- Business --",
        `Years operating: ${form.yearsOperating}`,
        `Current occupancy: ${form.currentOccupancy}`,
        `Monthly revenue: ${form.monthlyRevenue}`,
        `Monthly NOI: ${form.monthlyNOI}`,
        `DSHS licensed: ${form.dshsLicensed}`,
        `Medicaid certified: ${form.medicaidCertified}`,
        `Staff count: ${form.staffCount}`,
        `Notes: ${form.businessNotes}`,
        "",
      );
    }
    lines.push(
      "-- Pricing & Contact --",
      `Asking price: ${form.askingPrice}`,
      `Timeline: ${form.timeline}`,
      `Contact: ${form.contactName}`,
      `Email: ${form.contactEmail}`,
      `Phone: ${form.contactPhone}`,
      `Role: ${form.role}`,
      `Notes: ${form.additionalNotes}`,
    );
    return lines.join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canAdvance()) return;
    setSubmitting(true);

    // Submit to Netlify Forms (form is statically pre-registered via the hidden
    // form in index.html / public/__forms.html or via auto-detection on build).
    try {
      const data = new FormData();
      data.append("form-name", "afh-submit");
      Object.entries(form).forEach(([k, v]) => data.append(k, String(v)));
      data.append("recipient", SUBMISSION_EMAIL);
      data.append("summary", buildEmailBody());

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      }).catch(() => null);
    } finally {
      // Always also open a mailto fallback so a submission reaches the
      // recipient regardless of hosting/form backend availability.
      const subject = encodeURIComponent(
        `AFH Listing Submission — ${form.city || "New"} (${form.listingType})`,
      );
      const body = encodeURIComponent(buildEmailBody());
      window.location.href = `mailto:${SUBMISSION_EMAIL}?subject=${subject}&body=${body}`;
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: GRAY_BG, fontFamily: "Inter, system-ui, sans-serif" }}>
      <SEOHead
        title="Submit an AFH Listing | Real Property Planning"
        description="List your Adult Family Home property, business, or both. A 5-step seller submission form for the AFH Marketplace."
        canonical="https://realpropertyplanning.com/afh-submit"
        noIndex
      />
      <Header />

      {/* Hidden Netlify form registration — picked up by build-time form detection.
          Safe no-op on non-Netlify hosts. */}
      <form name="afh-submit" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input name="bot-field" />
        {Object.keys(initialState).map((k) => (
          <input key={k} name={k} />
        ))}
        <input name="recipient" />
        <textarea name="summary" />
      </form>

      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* HEADER */}
        <div style={{ backgroundColor: WHITE, borderBottom: `1px solid ${GRAY_BORDER}`, padding: "2.25rem 1.5rem" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <Link to="/afh-marketplace" style={{ display: "inline-flex", alignItems: "center", gap: 4, color: TEAL, fontSize: 13, fontWeight: 600, textDecoration: "none", marginBottom: "1rem" }}>
              <ChevronLeft size={14} /> Back to AFH Marketplace
            </Link>
            <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 700, color: SLATE, margin: "0 0 0.5rem", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Submit an AFH Listing
            </h1>
            <p style={{ fontSize: 15, color: GRAY_TEXT, lineHeight: 1.7, margin: 0 }}>
              List your Adult Family Home property, business, or both. We'll review and follow up within 1–2 business days.
            </p>
          </div>
        </div>

        {/* STEP INDICATOR */}
        <div style={{ backgroundColor: WHITE, borderBottom: `1px solid ${GRAY_BORDER}`, padding: "1rem 1.5rem" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
            {visibleSteps.map((s, i) => {
              const active = s === step;
              const done = visibleSteps.indexOf(step) > i;
              return (
                <React.Fragment key={s}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <div style={{
                      width: 26, height: 26, borderRadius: "50%",
                      backgroundColor: done ? TEAL : active ? TEAL : "#e8edf0",
                      color: done || active ? WHITE : GRAY_TEXT,
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 700,
                    }}>
                      {done ? <Check size={13} /> : i + 1}
                    </div>
                    <span style={{ fontSize: 12, fontWeight: active ? 700 : 500, color: active ? SLATE : GRAY_TEXT }}>
                      {STEP_TITLES[s - 1]}
                    </span>
                  </div>
                  {i < visibleSteps.length - 1 && (
                    <div style={{ width: 16, height: 1, backgroundColor: GRAY_BORDER }} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* FORM */}
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1.5rem 3rem" }}>
          {submitted ? (
            <div style={{ padding: "2.5rem", textAlign: "center", backgroundColor: WHITE, borderRadius: 10, border: `1px solid ${GRAY_BORDER}` }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: "#e6f2f1", color: TEAL, display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                <Check size={28} />
              </div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: SLATE, margin: "0 0 0.5rem" }}>Submission received</h2>
              <p style={{ fontSize: 15, color: GRAY_TEXT, lineHeight: 1.7, margin: "0 0 1.5rem" }}>
                Thank you. Your listing details have been sent. We'll follow up within 1–2 business days.
              </p>
              <button onClick={() => navigate("/afh-marketplace")} style={{
                backgroundColor: TEAL, color: WHITE, fontSize: 14, fontWeight: 600,
                padding: "11px 22px", borderRadius: 8, border: "none", cursor: "pointer",
              }}>
                Browse the marketplace
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ backgroundColor: WHITE, borderRadius: 10, border: `1px solid ${GRAY_BORDER}`, padding: "2rem 1.75rem" }}
            >
              {/* STEP 1 — TYPE */}
              {step === 1 && (
                <div>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: SLATE, margin: "0 0 0.4rem" }}>What are you listing?</h2>
                  <p style={{ fontSize: 14, color: GRAY_TEXT, margin: "0 0 1.25rem" }}>This determines which details we'll ask for next.</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.85rem" }}>
                    <TypeCard
                      active={form.listingType === "property"}
                      icon={<Home size={22} />}
                      title="Property only"
                      desc="The real estate, no operating business or license."
                      onClick={() => update("listingType", "property")}
                    />
                    <TypeCard
                      active={form.listingType === "business"}
                      icon={<Briefcase size={22} />}
                      title="Business only"
                      desc="Operating AFH business, license, and residents — buyer leases the building."
                      onClick={() => update("listingType", "business")}
                    />
                    <TypeCard
                      active={form.listingType === "both"}
                      icon={<Building2 size={22} />}
                      title="Property + business"
                      desc="Turnkey — real estate, license, residents, and operations together."
                      onClick={() => update("listingType", "both")}
                    />
                  </div>
                </div>
              )}

              {/* STEP 2 — LOCATION */}
              {step === 2 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: SLATE, margin: "0 0 0.4rem" }}>Location & capacity</h2>
                  <Field label="How should the address appear publicly?">
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {(["city-only", "show"] as const).map((v) => (
                        <label key={v} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, color: SLATE, cursor: "pointer" }}>
                          <input type="radio" checked={form.addressVisibility === v} onChange={() => update("addressVisibility", v)} />
                          {v === "city-only" ? "City only (recommended)" : "Show full address"}
                        </label>
                      ))}
                    </div>
                  </Field>
                  <Field label="Street address" helper="Required for our records. Shown publicly only if you chose above.">
                    <input style={inputStyle} value={form.streetAddress} onChange={(e) => update("streetAddress", e.target.value)} />
                  </Field>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.85rem" }}>
                    <Field label="City" required>
                      <input style={inputStyle} value={form.city} onChange={(e) => update("city", e.target.value)} required />
                    </Field>
                    <Field label="County" required>
                      <select style={inputStyle} value={form.county} onChange={(e) => update("county", e.target.value)} required>
                        <option value="">Select…</option>
                        {["King", "Snohomish", "Pierce", "Kitsap", "Thurston", "Other"].map((c) => <option key={c}>{c}</option>)}
                      </select>
                    </Field>
                    <Field label="Zip">
                      <input style={inputStyle} value={form.zip} onChange={(e) => update("zip", e.target.value)} />
                    </Field>
                    <Field label="Licensed capacity (beds)" required>
                      <input type="number" min={1} style={inputStyle} value={form.capacity} onChange={(e) => update("capacity", e.target.value)} required />
                    </Field>
                  </div>
                </div>
              )}

              {/* STEP 3 — PROPERTY DETAILS */}
              {step === 3 && includesProperty && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: SLATE, margin: "0 0 0.4rem" }}>Property details</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.85rem" }}>
                    <Field label="Year built">
                      <input type="number" style={inputStyle} value={form.yearBuilt} onChange={(e) => update("yearBuilt", e.target.value)} />
                    </Field>
                    <Field label="Square feet">
                      <input type="number" style={inputStyle} value={form.squareFeet} onChange={(e) => update("squareFeet", e.target.value)} />
                    </Field>
                    <Field label="Bedrooms">
                      <input type="number" style={inputStyle} value={form.bedrooms} onChange={(e) => update("bedrooms", e.target.value)} />
                    </Field>
                    <Field label="Bathrooms">
                      <input type="text" style={inputStyle} value={form.bathrooms} onChange={(e) => update("bathrooms", e.target.value)} placeholder="e.g. 3.25" />
                    </Field>
                    <Field label="Parking">
                      <input style={inputStyle} value={form.parking} onChange={(e) => update("parking", e.target.value)} placeholder="2-car garage, etc." />
                    </Field>
                  </div>
                  <Field label="Property notes" helper="Recent renovations, ADA modifications, sprinklers, generator, etc.">
                    <textarea style={{ ...inputStyle, minHeight: 100, resize: "vertical" }} value={form.propertyNotes} onChange={(e) => update("propertyNotes", e.target.value)} />
                  </Field>
                </div>
              )}

              {/* STEP 4 — BUSINESS DETAILS */}
              {step === 4 && includesBusiness && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: SLATE, margin: "0 0 0.4rem" }}>Business details</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.85rem" }}>
                    <Field label="Years operating">
                      <input type="number" style={inputStyle} value={form.yearsOperating} onChange={(e) => update("yearsOperating", e.target.value)} />
                    </Field>
                    <Field label="Current occupancy">
                      <input style={inputStyle} value={form.currentOccupancy} onChange={(e) => update("currentOccupancy", e.target.value)} placeholder="e.g. 6 of 6" />
                    </Field>
                    <Field label="Monthly revenue ($)">
                      <input type="number" style={inputStyle} value={form.monthlyRevenue} onChange={(e) => update("monthlyRevenue", e.target.value)} />
                    </Field>
                    <Field label="Monthly NOI ($)">
                      <input type="number" style={inputStyle} value={form.monthlyNOI} onChange={(e) => update("monthlyNOI", e.target.value)} />
                    </Field>
                    <Field label="Staff count (FTE)">
                      <input type="number" style={inputStyle} value={form.staffCount} onChange={(e) => update("staffCount", e.target.value)} />
                    </Field>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.85rem" }}>
                    <Field label="DSHS licensed?">
                      <select style={inputStyle} value={form.dshsLicensed} onChange={(e) => update("dshsLicensed", e.target.value as FormState["dshsLicensed"])}>
                        <option value="">Select…</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </Field>
                    <Field label="Medicaid certified?">
                      <select style={inputStyle} value={form.medicaidCertified} onChange={(e) => update("medicaidCertified", e.target.value as FormState["medicaidCertified"])}>
                        <option value="">Select…</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="Business notes" helper="Specialties, resident mix, contracts, reputation highlights.">
                    <textarea style={{ ...inputStyle, minHeight: 100, resize: "vertical" }} value={form.businessNotes} onChange={(e) => update("businessNotes", e.target.value)} />
                  </Field>
                </div>
              )}

              {/* STEP 5 — PRICING & CONTACT */}
              {step === 5 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: SLATE, margin: "0 0 0.4rem" }}>Pricing & contact</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.85rem" }}>
                    <Field label="Asking price ($)" required>
                      <input type="number" style={inputStyle} value={form.askingPrice} onChange={(e) => update("askingPrice", e.target.value)} required />
                    </Field>
                    <Field label="Timeline to sell">
                      <select style={inputStyle} value={form.timeline} onChange={(e) => update("timeline", e.target.value)}>
                        <option value="">Select…</option>
                        <option>Immediately</option>
                        <option>Within 3 months</option>
                        <option>3–6 months</option>
                        <option>Exploring / no rush</option>
                      </select>
                    </Field>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.85rem" }}>
                    <Field label="Your name" required>
                      <input style={inputStyle} value={form.contactName} onChange={(e) => update("contactName", e.target.value)} required />
                    </Field>
                    <Field label="Email" required>
                      <input type="email" style={inputStyle} value={form.contactEmail} onChange={(e) => update("contactEmail", e.target.value)} required />
                    </Field>
                    <Field label="Phone">
                      <input type="tel" style={inputStyle} value={form.contactPhone} onChange={(e) => update("contactPhone", e.target.value)} />
                    </Field>
                    <Field label="Your role">
                      <select style={inputStyle} value={form.role} onChange={(e) => update("role", e.target.value)}>
                        <option value="">Select…</option>
                        <option>Owner / operator</option>
                        <option>Owner (not operator)</option>
                        <option>Broker / agent</option>
                        <option>Family member</option>
                        <option>Other</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="Anything else?">
                    <textarea style={{ ...inputStyle, minHeight: 100, resize: "vertical" }} value={form.additionalNotes} onChange={(e) => update("additionalNotes", e.target.value)} />
                  </Field>
                </div>
              )}

              {/* NAV */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2rem", paddingTop: "1.25rem", borderTop: `1px solid ${GRAY_BORDER}` }}>
                <button
                  type="button"
                  onClick={prev}
                  disabled={currentIndex === 0}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    background: "transparent", border: "none", color: currentIndex === 0 ? "#bbb" : TEAL,
                    fontSize: 14, fontWeight: 600, cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                    fontFamily: "inherit", padding: "8px 4px",
                  }}
                >
                  <ChevronLeft size={16} /> Back
                </button>

                {!isLast ? (
                  <button
                    type="button"
                    onClick={next}
                    disabled={!canAdvance()}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: canAdvance() ? TEAL : "#a8c5c4",
                      color: WHITE, fontSize: 14, fontWeight: 600, padding: "11px 22px",
                      borderRadius: 8, border: "none", cursor: canAdvance() ? "pointer" : "not-allowed",
                      fontFamily: "inherit",
                    }}
                  >
                    Continue <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!canAdvance() || submitting}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: TEAL,
                      color: WHITE, fontSize: 14, fontWeight: 600, padding: "11px 22px",
                      borderRadius: 8, border: "none", cursor: submitting ? "wait" : "pointer",
                      fontFamily: "inherit", opacity: submitting ? 0.7 : 1,
                    }}
                  >
                    <Send size={14} /> {submitting ? "Sending…" : "Submit listing"}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AFHSubmit;
