import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import HeroBandTitle from "@/components/HeroBandTitle";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  county: string;
  sellType: string;
  priceRange: string;
  timeline: string;
  workingWithBroker: string;
  notes: string;
};

const initial: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  county: "",
  sellType: "",
  priceRange: "",
  timeline: "",
  workingWithBroker: "",
  notes: "",
};

const PRICE_OPTIONS = [
  "Under $500K",
  "$500K–$750K",
  "$750K–$1M",
  "$1M–$1.5M",
  "Over $1.5M",
  "Not sure yet",
];

const TIMELINE_OPTIONS = ["ASAP", "3–6 months", "6–12 months", "Just exploring"];

const SELL_OPTIONS = [
  "Property only",
  "Business only",
  "Property + business",
  "Not sure yet",
];

const labelCls = "block text-[14px] font-semibold text-slate-700 mb-1.5 uppercase tracking-wide";
const inputCls =
  "w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-[16px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1a7a78]/40 focus:border-[#1a7a78]";

const AFHSubmit: React.FC = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, city, county, sellType: listingType, priceRange, timeline, workingWithBroker: hasBroker, notes } = form;
    const formData = {
      access_key: "6ce32857-7083-46b2-aef1-13b7203cba98",
      subject: "New AFH Seller Inquiry — " + county + " County",
      from_name: firstName + " " + lastName,
      email: email,
      phone: phone,
      city: city,
      county: county,
      listingType: listingType,
      priceRange: priceRange,
      timeline: timeline,
      hasBroker: hasBroker,
      notes: notes,
    };
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setSubmitted(true);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      alert("Something went wrong. Please try again or call David directly.");
    }
  };

  return (
    <>
      <SEOHead
        title="Sell Your AFH — Talk With David | Real Property Planning"
        description="Thinking of selling your Adult Family Home in Washington? Start with a conversation with David Stein."
        canonical="https://realpropertyplanning.com/afh-submit"
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-slate-50" style={{ paddingTop: 80 }}>
        <section className="bg-white border-b border-slate-200 py-10 md:py-14">
          <div className="max-w-3xl mx-auto px-6">
            <HeroBandTitle as="h1">Thinking of Selling Your AFH?</HeroBandTitle>
            <p className="text-[18px] md:text-[19px] text-slate-700 mt-4 leading-relaxed">
              Let's start with a conversation. David Stein of eXp Realty will meet with you to understand your goals, walk you through the process, and execute a listing agreement. Fill out the form below and David will follow up within 24 hours. David Stein has been a professional licensed real estate broker for over 20 years helping buyers and sellers throughout Washington State. eXp Realty is the largest cloud-based real estate company in North America.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-10">
          {submitted ? (
            <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-10 text-center">
              <h2 className="text-[24px] md:text-[28px] font-bold text-slate-900">Thank you</h2>
              <p className="text-[17px] text-slate-700 mt-3 leading-relaxed">
                Thank you — David will be in touch within 24 hours to schedule a conversation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls} htmlFor="firstName">First name</label>
                  <input id="firstName" required className={inputCls} value={form.firstName} onChange={(e) => set("firstName", e.target.value)} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="lastName">Last name</label>
                  <input id="lastName" required className={inputCls} value={form.lastName} onChange={(e) => set("lastName", e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls} htmlFor="email">Email address</label>
                  <input id="email" type="email" required className={inputCls} value={form.email} onChange={(e) => set("email", e.target.value)} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="phone">Phone number</label>
                  <input id="phone" type="tel" required className={inputCls} value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls} htmlFor="city">City of the AFH</label>
                  <input id="city" required className={inputCls} value={form.city} onChange={(e) => set("city", e.target.value)} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="county">County of the AFH</label>
                  <input id="county" required className={inputCls} value={form.county} onChange={(e) => set("county", e.target.value)} />
                </div>
              </div>

              <fieldset>
                <legend className={labelCls}>What are you looking to sell?</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                  {SELL_OPTIONS.map((opt) => (
                    <label key={opt} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 cursor-pointer hover:border-[#1a7a78]">
                      <input
                        type="radio"
                        name="sellType"
                        value={opt}
                        checked={form.sellType === opt}
                        onChange={() => set("sellType", opt)}
                        required
                      />
                      <span className="text-[15px] text-slate-800">{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls} htmlFor="priceRange">Approximate asking price in mind?</label>
                  <select id="priceRange" required className={inputCls} value={form.priceRange} onChange={(e) => set("priceRange", e.target.value)}>
                    <option value="" disabled>Select a range</option>
                    {PRICE_OPTIONS.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls} htmlFor="timeline">Ideal timeline</label>
                  <select id="timeline" required className={inputCls} value={form.timeline} onChange={(e) => set("timeline", e.target.value)}>
                    <option value="" disabled>Select a timeline</option>
                    {TIMELINE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <fieldset>
                <legend className={labelCls}>Are you currently working with a real estate broker?</legend>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Yes", "No"].map((opt) => (
                    <label key={opt} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg px-5 py-3 cursor-pointer hover:border-[#1a7a78]">
                      <input
                        type="radio"
                        name="workingWithBroker"
                        value={opt}
                        checked={form.workingWithBroker === opt}
                        onChange={() => set("workingWithBroker", opt)}
                        required
                      />
                      <span className="text-[15px] text-slate-800">{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label className={labelCls} htmlFor="notes">Anything else you'd like David to know? <span className="font-normal text-slate-500 normal-case tracking-normal">(optional)</span></label>
                <textarea
                  id="notes"
                  rows={5}
                  className={inputCls}
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center bg-[#1a7a78] hover:bg-[#155f5d] text-white text-[16px] font-bold px-8 py-4 rounded-lg transition-colors min-h-[52px]"
              >
                Send My Inquiry
              </button>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AFHSubmit;
