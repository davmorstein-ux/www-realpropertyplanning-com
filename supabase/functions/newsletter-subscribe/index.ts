// ---------------------------------------------------------------------------
// REDEPLOY MARKER — 2026-11-19 (single opt-in + signup notice to info@)
// Earlier markers: 2026-10-17, 2026-10-16, 2026-08-15
//
// Edge functions deploy separately from the site: Supabase only redeploys a
// function when the function file itself changes, so this marker is bumped
// whenever behaviour changes.
//
// Nov 19, 2026 — David switched the newsletter from double opt-in to single
// opt-in. Analytics vs MailerLite showed 10 signups Nov 3–18 with only 3
// confirmed; 7 never clicked the confirmation link and so never received
// anything. The privacy policy and every on-page message were changed in the
// same commit to say the address is added on submit. The consent record now
// comes from opted_in_at + optin_ip sent below, plus the source tag.
// ---------------------------------------------------------------------------

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

/* Pinned server-side ON PURPOSE. If the caller supplied the group, anyone
   POSTing to this endpoint could file subscribers into any group in the
   account. The client sends an email and a source tag; nothing else it sends
   decides where the record lands. */
const GROUP_ID = "195718488033068791"; // family-side list (probate, inherited homes, senior moves)

/* Two lists since Oct 16, 2026: family-side readers and AFH buyers/owners/
   investors want different email. The caller may name a list, but only from
   this whitelist, so it still cannot file anyone into an arbitrary group.

   AFH Club group created in MailerLite on Oct 17, 2026. Signups made before
   then landed in the family group with an "afh" source tag, so they can be
   found with a filter on that field. */
const AFH_GROUP_ID = "201626214767527128";
const groupFor = (list: unknown): string =>
  list === "afh" && AFH_GROUP_ID ? AFH_GROUP_ID : GROUP_ID;

/* Every response to a subscribe attempt is this, whatever actually happened:
   new subscriber, already on the list, bounced address, MailerLite outage.
   An endpoint that answers differently for "already subscribed" is an email
   enumeration oracle — POST a list of addresses, watch which come back
   different, and you have learned who reads a site about probate and dementia
   care. Errors go to the logs, never to the caller. */
const OK = () =>
  new Response(JSON.stringify({ success: true }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const NOTIFY_EMAIL = "info@realpropertyplanning.com";

const esc = (v: unknown) =>
  String(v ?? "")
    .slice(0, 300)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

async function notifySignup(address: string, sourceTag: string, isAfh: boolean, isNew: boolean) {
  try {
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      console.error("RESEND_API_KEY is not set; signup notice not sent");
      return;
    }
    const listName = isAfh ? "AFH Club" : "Family (probate, inherited homes, senior moves)";
    const page = sourceTag.split("|").slice(1).join("|") || "unknown";
    const html = `
      <h2>${isNew ? "New newsletter subscriber" : "Newsletter signup from an existing contact"}</h2>
      <p><strong>Email:</strong> ${esc(address)}</p>
      <p><strong>List:</strong> ${esc(listName)}</p>
      <p><strong>Signed up from:</strong> ${esc(page)}</p>
      <p style="color:#555;font-size:13px;">They are on the list now (single opt-in). Manage subscribers in MailerLite.</p>
    `;
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Real Property Planning <contact@realpropertyplanning.com>",
        to: [NOTIFY_EMAIL],
        subject: `${isNew ? "New subscriber" : "Signup (existing contact)"} — ${isAfh ? "AFH Club" : "Family"} newsletter`,
        html,
      }),
    });
    if (!res.ok) console.error("Signup notice failed:", res.status, await res.text());
  } catch (err) {
    console.error("Signup notice error:", err);
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, source, list, company_website, form_loaded_at, turnstile_token } = await req.json();

    /* Honeypot — mirrors send-contact-email. Real visitors never see this
       field; bots that fill every input trip it. Answer OK so the bot cannot
       tell it was caught. */
    if (company_website) {
      console.log("Blocked newsletter signup: honeypot field was filled");
      return OK();
    }

    /* Timing check. Nobody reads a signup box and types an address in under
       three seconds. */
    const loadedAt = Number(form_loaded_at);
    if (loadedAt && Date.now() - loadedAt < 3000) {
      console.log("Blocked newsletter signup: submitted too quickly to be human");
      return OK();
    }

    /* Turnstile is the real defence. This endpoint takes unauthenticated
       requests by design — newsletter signup is for anonymous visitors — so
       without this it would be an open pipe into the mailing list. A genuine
       submission from the site always carries a valid token, so this also
       stops anything that skips the frontend and hits the function directly.
       That was exactly what chat-assistant lacked. */
    const turnstileSecret = Deno.env.get("TURNSTILE_SECRET_KEY");
    if (!turnstileSecret) {
      console.error("TURNSTILE_SECRET_KEY is not set");
      return OK();
    }
    if (!turnstile_token) {
      console.log("Blocked newsletter signup: no Turnstile token");
      return OK();
    }

    const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: turnstileSecret, response: turnstile_token }),
    });
    const verify = await verifyResponse.json();
    if (!verify.success) {
      console.log("Blocked newsletter signup: Turnstile verification failed", verify["error-codes"]);
      return OK();
    }

    /* Deliberately permissive. Strict email regexes reject valid addresses —
       long TLDs, plus-addressing, apostrophes — and the person rejected has no
       way to argue. MailerLite validates properly; Turnstile, the honeypot and
       the timing check above keep bots out. */
    const address = String(email || "").trim();
    if (!address || !address.includes("@") || address.length < 5 || address.length > 254) {
      console.log("Rejected newsletter signup: malformed address");
      return OK();
    }

    const apiKey = Deno.env.get("MAILERLITE_API_KEY");
    if (!apiKey) {
      console.error("MAILERLITE_API_KEY is not set");
      return OK();
    }

    /* Single opt-in (David's decision, Nov 19, 2026): status "active" puts the
       person on the list the moment they submit — no confirmation email. If
       this is ever changed back to "unconfirmed", the privacy policy
       (src/pages/Privacy.tsx) and the "you're subscribed" messages in
       NewsletterSignup.tsx, ResultSignup.tsx, MyPlan.tsx and
       FamilyHomePlanning.tsx must change back with it.

       Consent record: opted_in_at and optin_ip are stored on the MailerLite
       subscriber, so there is still a timestamped record of who asked to be
       added and from where. cf-connecting-ip is set by Cloudflare;
       x-forwarded-for is the fallback.

       The source tag records WHICH form produced the signup (article end,
       footer, homepage), which is the whole reason per-location tracking was
       wanted. It is truncated because it comes from the client. */
    const clientIp = (req.headers.get("cf-connecting-ip") ||
      (req.headers.get("x-forwarded-for") || "").split(",")[0] || "").trim().slice(0, 64);
    const optedInAt = new Date().toISOString().replace("T", " ").slice(0, 19);
    const sourceTag = `${list === "afh" ? "afh" : "family"}|${String(source || "unknown")}`.slice(0, 120);
    const mlResponse = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: address,
        status: "active",
        groups: [groupFor(list)],
        fields: { source: sourceTag },
        opted_in_at: optedInAt,
        ...(clientIp ? { optin_ip: clientIp } : {}),
      }),
    });

    if (!mlResponse.ok) {
      /* Logged, never returned. A 422 here usually means "already a
         subscriber", which is precisely the fact that must not leak. */
      const errText = await mlResponse.text();
      console.error("MailerLite API error:", mlResponse.status, errText);
      return OK();
    }

    console.log("Newsletter signup accepted (single opt-in)");

    /* Notice to info@ for every accepted signup (David asked Nov 19, 2026 —
       MailerLite does not tell him when someone joins). 201 = new subscriber,
       200 = an existing record was updated (e.g. someone who never confirmed
       under the old double opt-in signing up again). A failure here is logged
       only: the person is already on the list, and the caller must get the
       same answer whatever happens. */
    await notifySignup(address, sourceTag, list === "afh", mlResponse.status === 201);
    return OK();
  } catch (err) {
    console.error("newsletter-subscribe failed:", err);
    return OK();
  }
});
