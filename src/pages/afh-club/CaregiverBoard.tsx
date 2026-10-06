/**
 * AFH Caregiver Board (Oct 5, 2026). Caregivers looking for work and adult
 * family homes hiring. Version one is owner-approved: posts and contact
 * messages go to the general inbox through send-contact-email, and approved
 * posts are published from src/data/afhCaregiverBoard.ts (read the privacy note
 * there before adding one). The site is a free connection resource only: it is
 * not the employer, does not verify anyone, and never publishes a poster's
 * phone or email.
 *
 * CSS: page-scoped under .cgb. Class names avoid "card", "tile", "btn", "cta"
 * and "source", which index.css restyles; labels get an explicit size because
 * index.css forces every `main label` to 14px.
 */
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import { supabase } from "@/integrations/supabase/client";
import { useTurnstile } from "@/hooks/useTurnstile";
import {
  BOARD_AS_OF, CAREGIVER_POSTS, JOB_POSTS, COUNTIES, POSITIONS, SCHEDULES, EXPERIENCE, CREDENTIALS, YEARS,
  LANGUAGES, NOTE_MAX, POST_LIFE_DAYS, activeOn, expiresOn, type CaregiverPost, type JobPost,
} from "@/data/afhCaregiverBoard";

const PATH = "/afh-club/caregivers";
const CANONICAL = `https://realpropertyplanning.com${PATH}`;
const GREEN = "#0a5648";
const DOH_SEARCH = "https://doh.wa.gov/licenses-permits-and-certificates/provider-credential-or-facility-search";

const CSS = `
.cgb { background: #faf8f4; }
.cgb .cgb-wrap { max-width: 880px; margin: 0 auto; padding: 0 16px; }
.cgb p, .cgb li { font-family: 'DM Sans', system-ui, sans-serif; font-size: 18px !important; line-height: 1.65 !important; color: #1c1917 !important; }
.cgb h2.cgb-h2 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(24px, 3.2vw, 30px) !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 14px !important; line-height: 1.2 !important; }
.cgb h3.cgb-h3 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: 21px !important; font-weight: 700 !important; color: ${GREEN} !important; margin: 0 0 6px !important; line-height: 1.25 !important; }
.cgb .cgb-sec { padding: 40px 0; }
.cgb .cgb-sec.alt { background: #ffffff; border-top: 1px solid #e3ddd3; border-bottom: 1px solid #e3ddd3; }
.cgb .cgb-steps { margin: 0 0 0 22px !important; padding: 0 !important; }
.cgb .cgb-steps li { list-style: decimal !important; display: list-item !important; margin-bottom: 8px; }
.cgb .cgb-note { background: #f1f6f4; border: 1px solid #c8dcd5; border-left: 5px solid ${GREEN}; border-radius: 10px; padding: 16px 20px; }
.cgb .cgb-note p { margin: 0 !important; }
.cgb .cgb-choose { display: grid; gap: 14px; grid-template-columns: 1fr; margin-top: 8px; }
@media (min-width: 700px) { .cgb .cgb-choose { grid-template-columns: 1fr 1fr; } }
.cgb button.cgb-pick { font-family: 'DM Sans', system-ui, sans-serif; text-align: left; background: #fff; border: 2px solid ${GREEN}; border-radius: 12px; padding: 18px 20px; min-height: 58px; cursor: pointer; color: #14283a; }
.cgb button.cgb-pick[aria-expanded="true"] { background: ${GREEN}; color: #fff; }
.cgb button.cgb-pick strong { display: block; font-size: 20px !important; }
.cgb button.cgb-pick span { display: block; font-size: 16px !important; font-weight: 400; margin-top: 4px; }
.cgb .cgb-form { background: #fff; border: 1px solid #d9d2c6; border-radius: 12px; padding: 22px 20px; margin-top: 18px; display: grid; gap: 18px; }
.cgb .cgb-field { display: grid; gap: 6px; }
.cgb .cgb-q { font-family: 'DM Sans', system-ui, sans-serif; font-size: 17px !important; font-weight: 700; color: #14283a; }
.cgb .cgb-hint { font-size: 15px !important; color: #3f3a35 !important; margin: 0 !important; }
.cgb input.cgb-in, .cgb select.cgb-in, .cgb textarea.cgb-in { font-family: 'DM Sans', system-ui, sans-serif; font-size: 17px !important; padding: 12px 14px; border: 1px solid #9a9183; border-radius: 8px; background: #fff; color: #1c1917; width: 100%; min-height: 48px; box-sizing: border-box; }
.cgb textarea.cgb-in { min-height: 96px; }
.cgb fieldset.cgb-set { border: 0; margin: 0; padding: 0; display: grid; gap: 6px; }
.cgb fieldset.cgb-set legend { padding: 0; margin-bottom: 4px; }
.cgb .cgb-opts { display: flex; flex-wrap: wrap; gap: 8px; }
.cgb label.cgb-opt { font-family: 'DM Sans', system-ui, sans-serif; font-size: 16px !important; font-weight: 500 !important; display: inline-flex; align-items: center; gap: 8px; border: 1px solid #c9c1b4; border-radius: 999px; padding: 8px 14px; min-height: 44px; background: #fff; cursor: pointer; color: #1c1917; }
.cgb label.cgb-opt input { width: 18px; height: 18px; accent-color: ${GREEN}; }
.cgb .cgb-two { display: grid; gap: 18px; grid-template-columns: 1fr; }
@media (min-width: 640px) { .cgb .cgb-two { grid-template-columns: 1fr 1fr; } }
.cgb button.cgb-send { font-family: 'DM Sans', system-ui, sans-serif; background: ${GREEN}; color: #fff; border: 0; border-radius: 10px; padding: 14px 22px; min-height: 54px; font-weight: 700; cursor: pointer; justify-self: start; }
.cgb button.cgb-send:disabled { opacity: 0.55; cursor: not-allowed; }
.cgb .cgb-done { background: #eef7f1; border: 1px solid #b9dcc6; border-radius: 10px; padding: 14px 18px; }
.cgb .cgb-err { background: #fdf0ef; border: 1px solid #e6b8b3; border-radius: 10px; padding: 14px 18px; }
.cgb .cgb-list { display: grid; gap: 14px; margin-top: 8px; }
.cgb .cgb-post { background: #fff; border: 1px solid #d9d2c6; border-radius: 12px; padding: 18px 20px; }
.cgb .cgb-post p { margin: 0 0 6px !important; font-size: 17px !important; }
.cgb .cgb-meta { font-size: 15px !important; color: #3f3a35 !important; }
.cgb button.cgb-contact { font-family: 'DM Sans', system-ui, sans-serif; background: #fff; color: ${GREEN}; border: 2px solid ${GREEN}; border-radius: 10px; padding: 10px 18px; min-height: 48px; font-weight: 700; cursor: pointer; margin-top: 8px; }
.cgb .cgb-empty { background: #fff; border: 1px dashed #b9b1a4; border-radius: 12px; padding: 18px 20px; }
.cgb a.cgb-link { color: ${GREEN} !important; font-weight: 700; text-decoration: underline !important; text-underline-offset: 3px; font-size: inherit !important; }
.cgb .cgb-hp { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; }
`;

/* ---- Small form parts ------------------------------------------------- */

const Q = ({ children, hint }: { children: React.ReactNode; hint?: string }) => (
  <>
    <div className="cgb-q" aria-hidden="true">{children}</div>
    {hint && <p className="cgb-hint">{hint}</p>}
  </>
);

function Text({ name, label, hint, type = "text", required = false, max = 200 }: { name: string; label: string; hint?: string; type?: string; required?: boolean; max?: number }) {
  return (
    <div className="cgb-field">
      <Q hint={hint}>{label}{required ? " *" : ""}</Q>
      <input className="cgb-in" name={name} type={type} aria-label={label} required={required} maxLength={max} />
    </div>
  );
}

function Pick({ name, label, options, required = false }: { name: string; label: string; options: readonly string[]; required?: boolean }) {
  return (
    <div className="cgb-field">
      <Q>{label}{required ? " *" : ""}</Q>
      <select className="cgb-in" name={name} aria-label={label} required={required} defaultValue="">
        <option value="" disabled>Choose one</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Checks({ name, label, options }: { name: string; label: string; options: readonly string[] }) {
  return (
    <fieldset className="cgb-set">
      <legend className="cgb-q">{label}</legend>
      <div className="cgb-opts">
        {options.map((o) => (
          <label key={o} className="cgb-opt">
            <input type="checkbox" name={name} value={o} /> {o}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Note({ name = "note", label }: { name?: string; label: string }) {
  return (
    <div className="cgb-field">
      <Q hint={`Optional, up to ${NOTE_MAX} characters. Please don't include phone numbers, email addresses or anything about your health, age, religion or family.`}>{label}</Q>
      <textarea className="cgb-in" name={name} aria-label={label} maxLength={NOTE_MAX} />
    </div>
  );
}

/* ---- Sending ---------------------------------------------------------- */

type SendState = "idle" | "sending" | "sent" | "error";

/** Turns the form into a plain-text message the owner can read and approve. */
function formToText(fd: FormData, skip: string[]): string {
  const keys = Array.from(new Set(Array.from(fd.keys()))).filter((k) => !skip.includes(k));
  return keys
    .map((k) => {
      const v = fd.getAll(k).map(String).filter(Boolean).join(", ");
      return `${k}: ${v || "(none)"}`;
    })
    .join("\n");
}

function useBoardForm(reason: string, heading: string, extra?: () => string) {
  const ts = useTurnstile();
  const [state, setState] = useState<SendState>("idle");
  const [loadedAt] = useState(() => Date.now());

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ts.token) return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    setState("sending");
    const skip = ["contact_name", "contact_email", "contact_phone", "rpp_hp_field"];
    const message = `[${heading}]\n${extra ? `${extra()}\n` : ""}\n${formToText(fd, skip)}`;
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: fd.get("contact_name"),
          email: fd.get("contact_email"),
          phone: fd.get("contact_phone"),
          role: "",
          reason,
          message,
          source_page: PATH,
          company_website: fd.get("rpp_hp_field"),
          form_loaded_at: String(loadedAt),
          turnstile_token: ts.token,
        },
      });
      if (error || data?.error) throw new Error(data?.error || "send failed");
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    } finally {
      ts.reset();
    }
  };
  return { ts, state, onSubmit };
}

function Private({ who }: { who: string }) {
  return (
    <>
      <p className="cgb-hint" style={{ fontWeight: 700 }}>
        Your contact details ({who}) are never shown on the page. Messages reach you through this site.
      </p>
      <div className="cgb-two">
        <Text name="contact_name" label="Your full name" required />
        <Text name="contact_email" label="Email" type="email" required max={254} />
      </div>
      <Text name="contact_phone" label="Phone" type="tel" max={40} />
    </>
  );
}

function Honeypot() {
  return (
    <div className="cgb-hp" aria-hidden="true">
      <span>Leave this field blank</span>
      <input type="text" name="rpp_hp_field" tabIndex={-1} autoComplete="off" data-1p-ignore data-lpignore="true" data-form-type="other" />
    </div>
  );
}

function SendRow({ ts, state, label }: { ts: ReturnType<typeof useTurnstile>; state: SendState; label: string }) {
  return (
    <>
      <div ref={ts.ref} />
      <button type="submit" className="cgb-send" disabled={!ts.token || state === "sending"}>
        {state === "sending" ? "Sending…" : label}
      </button>
      {state === "sent" && (
        <div className="cgb-done" role="status"><p style={{ margin: 0 }}>Thank you. It was received and will be reviewed, usually within two business days.</p></div>
      )}
      {state === "error" && (
        <div className="cgb-err" role="alert"><p style={{ margin: 0 }}>It didn't send. Please try again, or email info@realpropertyplanning.com.</p></div>
      )}
    </>
  );
}

/* ---- The three forms -------------------------------------------------- */

function CaregiverForm() {
  const f = useBoardForm("caregiver-board-post", "Caregiver board: caregiver looking for work");
  return (
    <form className="cgb-form" onSubmit={f.onSubmit} aria-label="Post that you are looking for AFH work">
      <Honeypot />
      <div className="cgb-two">
        <Text name="display_name" label="Name to show" hint="First name and last initial, for example Maria S." required max={40} />
        <Pick name="county" label="County" options={COUNTIES} required />
      </div>
      <Text name="cities" label="Cities you'll work in" hint="Up to three, for example Lynnwood, Edmonds, Everett." required max={120} />
      <Checks name="positions" label="Position wanted" options={POSITIONS} />
      <Checks name="schedules" label="Schedule" options={SCHEDULES} />
      <Checks name="experience" label="Experience with" options={EXPERIENCE} />
      <Checks name="credentials" label="Credentials you hold" options={CREDENTIALS} />
      <div className="cgb-two">
        <Pick name="years" label="Years of caregiving" options={YEARS} required />
        <Pick name="transportation" label="Your own transportation?" options={["Yes", "No"]} required />
      </div>
      <Checks name="languages" label="Languages" options={LANGUAGES} />
      <div className="cgb-two">
        <Text name="available_from" label="Available from" type="date" required />
        <Text name="credential_number" label="DOH credential number (optional, not shown)" hint="Lets the site confirm your credential on the state lookup." max={40} />
      </div>
      <Note label="A short note about you" />
      <Private who="name, email, phone, credential number" />
      <SendRow ts={f.ts} state={f.state} label="Send my post for review" />
    </form>
  );
}

function JobForm() {
  const f = useBoardForm("afh-job-post", "Caregiver board: AFH hiring");
  return (
    <form className="cgb-form" onSubmit={f.onSubmit} aria-label="Post a job at your adult family home">
      <Honeypot />
      <div className="cgb-two">
        <Text name="home_name" label="Home's name (as licensed by DSHS)" required max={120} />
        <Text name="license_number" label="DSHS license number" hint="Checked against DSHS records before the post appears." required max={12} />
      </div>
      <div className="cgb-two">
        <Text name="city" label="City" required max={60} />
        <Pick name="county" label="County" options={COUNTIES} required />
      </div>
      <Pick name="position" label="Position" options={POSITIONS} required />
      <Checks name="schedules" label="Schedule" options={SCHEDULES} />
      <Checks name="home_specialties" label="Care your home provides" options={EXPERIENCE} />
      <Checks name="credentials_required" label="Credentials required" options={CREDENTIALS} />
      <div className="cgb-two">
        <Text name="pay_min" label="Pay from ($ per hour)" type="number" max={6} />
        <Text name="pay_max" label="Pay to ($ per hour)" type="number" max={6} />
      </div>
      <Text name="start_date" label="Start date" type="date" required />
      <Note label="A short note about the job" />
      <Private who="name, email, phone" />
      <SendRow ts={f.ts} state={f.state} label="Send the job for review" />
    </form>
  );
}

function ContactForm({ postId, about }: { postId: string; about: string }) {
  const f = useBoardForm("caregiver-board-contact", `Caregiver board: message about ${postId}`, () => `Post: ${postId} (${about})`);
  return (
    <form className="cgb-form" onSubmit={f.onSubmit} aria-label={`Contact about ${about}`}>
      <Honeypot />
      <input type="hidden" name="post_id" value={postId} />
      <Pick name="i_am" label="I am" options={["An adult family home owner or manager", "A caregiver", "Other"]} required />
      <div className="cgb-field">
        <Q>Message *</Q>
        <textarea className="cgb-in" name="message_text" aria-label="Message" required maxLength={1000} />
      </div>
      <Private who="name, email, phone" />
      <p className="cgb-hint">Your message is forwarded to the person who posted. They reply to you directly.</p>
      <SendRow ts={f.ts} state={f.state} label="Send message" />
    </form>
  );
}

/* ---- Posts ------------------------------------------------------------ */

const fmt = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
const list = (a: readonly string[]) => (a.length ? a.join(", ") : "Not given");

function PostShell({ id, title, about, children, posted }: { id: string; title: string; about: string; posted: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="cgb-post" aria-labelledby={`${id}-t`}>
      <h3 className="cgb-h3" id={`${id}-t`}>{title}</h3>
      {children}
      <p className="cgb-meta">Posted {fmt(posted)} · Showing until {fmt(expiresOn(posted))}</p>
      <button type="button" className="cgb-contact" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {open ? "Close" : "Contact through the site"}
      </button>
      {open && <ContactForm postId={id} about={about} />}
    </article>
  );
}

const JobView = ({ p }: { p: JobPost }) => (
  <PostShell id={p.id} posted={p.posted} title={`${p.position} · ${p.city}, ${p.county} County`} about={`${p.homeName}, ${p.position}`}>
    <p><strong>{p.homeName}</strong> (DSHS license {p.licenseNumber})</p>
    <p>Schedule: {list(p.schedules)}</p>
    <p>Care provided: {list(p.homeSpecialties)}</p>
    <p>Credentials required: {list(p.credentialsRequired)}</p>
    {p.payMin != null && <p>Pay: ${p.payMin}{p.payMax != null ? `–$${p.payMax}` : "+"} per hour</p>}
    <p>Starts {fmt(p.startDate)}</p>
    {p.note && <p>{p.note}</p>}
  </PostShell>
);

const CaregiverView = ({ p }: { p: CaregiverPost }) => (
  <PostShell id={p.id} posted={p.posted} title={`${p.displayName} · ${p.cities.join(", ")} (${p.county} County)`} about={`${p.displayName}, caregiver`}>
    <p>Looking for: {list(p.positions)} · {list(p.schedules)}</p>
    <p>Experience: {p.years}; {list(p.experience)}</p>
    <p>Credentials (as stated): {list(p.credentials)}</p>
    <p>Languages: {list(p.languages)} · Own transportation: {p.hasTransportation ? "Yes" : "No"}</p>
    <p>Available from {fmt(p.availableFrom)}</p>
    {p.note && <p>{p.note}</p>}
  </PostShell>
);

/* ---- Page ------------------------------------------------------------- */

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AFH Caregiver Board",
  url: CANONICAL,
  description: "A free board for Washington adult family homes hiring caregivers and for caregivers looking for adult family home work.",
  isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
};

const CaregiverBoard = () => {
  const [openForm, setOpenForm] = useState<"" | "caregiver" | "job">("");
  /* First render uses the date the posts were last edited, so the static HTML
     and the browser agree; then switch to today's date. */
  const [today, setToday] = useState(BOARD_AS_OF);
  useEffect(() => setToday(new Date().toISOString().slice(0, 10)), []);
  const jobs = useMemo(() => activeOn(JOB_POSTS, today), [today]);
  const caregivers = useMemo(() => activeOn(CAREGIVER_POSTS, today), [today]);

  return (
    <div className="cgb">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SEOHead
        title="AFH Caregiver Board: Jobs and Caregivers in Washington | AFH Club"
        description="A free board for Washington adult family homes hiring caregivers, and for caregivers looking for adult family home work. Posts are reviewed, contact details stay private, and every post expires after 30 days."
        canonical={CANONICAL}
        schemaJson={schema}
      />
      <BreadcrumbSchema
        items={[
          { name: "AFH Club", url: "/afh-club" },
          { name: "Caregiver Board", url: PATH },
        ]}
      />
      <Header />
      <main id="main-content">
        <HeroBandTitle as="h1">AFH Caregiver Board</HeroBandTitle>

        <section className="cgb-sec">
          <div className="cgb-wrap">
            <p>
              A free place for Washington adult family homes looking for caregivers, and for caregivers looking for
              adult family home work. No one pays to post or to reply.
            </p>
            <h2 className="cgb-h2" style={{ marginTop: 18 }}>How it works</h2>
            <ol className="cgb-steps">
              <li>Send a post with the form below. Homes include their DSHS license number, which is checked before the post appears.</li>
              <li>Each post is reviewed, usually within two business days, and shows for {POST_LIFE_DAYS} days.</li>
              <li>Phone numbers and email addresses are never shown. To reply to a post, use its contact button; the message is forwarded and the poster replies to you directly.</li>
            </ol>
            <div className="cgb-note" style={{ marginTop: 18 }}>
              <p>
                This board is a connection resource only. Real Property Planning and AFH Club are not the employer, a
                staffing agency or a recruiter, and do not verify anyone&apos;s identity, credentials, references or
                background. Each home is responsible for every hiring requirement, including the DSHS background
                check and credential checks.
              </p>
            </div>

            <h2 className="cgb-h2" style={{ marginTop: 32 }}>Post on the board</h2>
            <div className="cgb-choose">
              <button type="button" className="cgb-pick" aria-expanded={openForm === "caregiver"} onClick={() => setOpenForm(openForm === "caregiver" ? "" : "caregiver")}>
                <strong>I&apos;m looking for AFH work</strong>
                <span>Caregivers, resident managers and nurses</span>
              </button>
              <button type="button" className="cgb-pick" aria-expanded={openForm === "job"} onClick={() => setOpenForm(openForm === "job" ? "" : "job")}>
                <strong>My adult family home is hiring</strong>
                <span>For licensed Washington adult family homes</span>
              </button>
            </div>
            {openForm === "caregiver" && <CaregiverForm />}
            {openForm === "job" && <JobForm />}
          </div>
        </section>

        <section className="cgb-sec alt" aria-labelledby="cgb-jobs">
          <div className="cgb-wrap">
            <h2 className="cgb-h2" id="cgb-jobs">Adult family homes hiring</h2>
            {jobs.length === 0 ? (
              <div className="cgb-empty"><p style={{ margin: 0 }}>No jobs are posted right now. If your home is hiring, use &ldquo;My adult family home is hiring&rdquo; above.</p></div>
            ) : (
              <div className="cgb-list">{jobs.map((p) => <JobView key={p.id} p={p} />)}</div>
            )}
          </div>
        </section>

        <section className="cgb-sec" aria-labelledby="cgb-caregivers">
          <div className="cgb-wrap">
            <h2 className="cgb-h2" id="cgb-caregivers">Caregivers looking for work</h2>
            {caregivers.length === 0 ? (
              <div className="cgb-empty"><p style={{ margin: 0 }}>No caregivers are posted right now. If you&apos;re looking for adult family home work, use &ldquo;I&apos;m looking for AFH work&rdquo; above.</p></div>
            ) : (
              <div className="cgb-list">{caregivers.map((p) => <CaregiverView key={p.id} p={p} />)}</div>
            )}
          </div>
        </section>

        <section className="cgb-sec alt">
          <div className="cgb-wrap">
            <h2 className="cgb-h2">Before you hire</h2>
            <ul style={{ margin: "0 0 0 22px", padding: 0 }}>
              <li style={{ listStyle: "disc" }}>
                Look up any caregiver credential (Home Care Aide, Nursing Assistant, LPN, RN) on the state&apos;s{" "}
                <a className="cgb-link" href={DOH_SEARCH} target="_blank" rel="noopener noreferrer">Department of Health provider credential search</a>.
              </li>
              <li style={{ listStyle: "disc" }}>Complete the DSHS background check and every other hiring step your license requires before a caregiver works with residents.</li>
              <li style={{ listStyle: "disc" }}>
                Questions about staffing rules?{" "}
                <Link className="cgb-link" to="/afh-club/washington-adult-family-home-guide/running">Running a licensed adult family home</Link>.
              </li>
            </ul>
          </div>
        </section>
        <BackToAFHClub />
      </main>
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default CaregiverBoard;
