import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const TO_EMAIL = "info@realpropertyplanning.com";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, role, message, source_page, company_website, form_loaded_at, turnstile_token } =
      await req.json();

    // Honeypot: real visitors never see or fill this field. Bots that
    // auto-fill every input on the form will trip it.
    if (company_website) {
      console.log("Blocked contact form submission: honeypot field was filled");
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Timing check: a real visitor needs at least a few seconds to read
    // the form and type a message. Submissions faster than that are
    // almost always scripted.
    const loadedAt = Number(form_loaded_at);
    if (loadedAt && Date.now() - loadedAt < 3000) {
      console.log("Blocked contact form submission: submitted too quickly to be human");
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Cloudflare Turnstile verification — the primary bot defense. A
    // request with no token, or an invalid one, is rejected outright.
    // Any real submission from the actual site will always have a valid
    // token, so this also catches bots that skip the frontend entirely
    // and hit this endpoint directly.
    const turnstileSecret = Deno.env.get("TURNSTILE_SECRET_KEY");
    if (!turnstileSecret) {
      console.error("TURNSTILE_SECRET_KEY is not set");
      return new Response(JSON.stringify({ error: "Server is not configured yet." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!turnstile_token) {
      return new Response(JSON.stringify({ error: "Verification required. Please try again." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: turnstileSecret, response: turnstile_token }),
    });
    const verifyResult = await verifyResponse.json();

    if (!verifyResult.success) {
      console.log("Blocked contact form submission: Turnstile verification failed", verifyResult["error-codes"]);
      return new Response(JSON.stringify({ error: "Verification failed. Please refresh the page and try again." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Please fill in your name, email, and message." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return new Response(JSON.stringify({ error: "Server is not configured yet." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>I am a:</strong> ${role || "Not specified"}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, "<br>")}</p>
      <hr>
      <p style="color:#888;font-size:12px;">Submitted from: ${source_page || "realpropertyplanning.com/contact"}</p>
    `;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Real Property Planning <onboarding@resend.dev>",
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New Contact Form Message from ${name}`,
        html,
      }),
    });

    if (!emailResponse.ok) {
      const errText = await emailResponse.text();
      console.error("Resend API error:", errText);
      return new Response(JSON.stringify({ error: "Message could not be sent. Please try again." }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-contact-email error:", err);
    return new Response(JSON.stringify({ error: "Something went wrong. Please try again." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
