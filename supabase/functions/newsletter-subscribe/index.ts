import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

/* Pinned server-side ON PURPOSE. If the caller supplied the group, anyone
   POSTing to this endpoint could file subscribers into any group in the
   account. The client sends an email and a source tag; nothing else it sends
   decides where the record lands. */
const GROUP_ID = "195718488033068791";

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

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, source, company_website, form_loaded_at, turnstile_token } = await req.json();

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
       way to argue. MailerLite validates properly, and double opt-in catches
       anything that slips through. */
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

    /* status: "unconfirmed" is what triggers MailerLite's confirmation email.
       DO NOT change this to "active" — it would add people to the list without
       consent, break the double opt-in the privacy policy promises in writing,
       and destroy the timestamped consent record that matters for a licensed
       broker mailing consumers.

       The source tag records WHICH form produced the signup (article end,
       footer, homepage), which is the whole reason per-location tracking was
       wanted. It is truncated because it comes from the client. */
    const mlResponse = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: address,
        status: "unconfirmed",
        groups: [GROUP_ID],
        fields: { source: String(source || "unknown").slice(0, 120) },
      }),
    });

    if (!mlResponse.ok) {
      /* Logged, never returned. A 422 here usually means "already a
         subscriber", which is precisely the fact that must not leak. */
      const errText = await mlResponse.text();
      console.error("MailerLite API error:", mlResponse.status, errText);
      return OK();
    }

    console.log("Newsletter signup accepted; confirmation email pending");
    return OK();
  } catch (err) {
    console.error("newsletter-subscribe failed:", err);
    return OK();
  }
});
