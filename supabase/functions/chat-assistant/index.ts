import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const SYSTEM_PROMPT = `You are a warm, patient, and friendly guide for Real Property Planning — a free educational resource hub for seniors, families, and professionals in Washington State.

Your role is to help visitors understand their situation and point them to the right page on the site. Real Property Planning is a hub that connects people to professionals — it does not perform services directly.

Always speak in plain, simple language. Be warm, calm, and never pushy. When someone describes their situation, identify the single most relevant page and provide a direct clickable link to it.

IMPORTANT: Always provide the most specific page possible — not a general hub page — unless no specific page exists.

Key pages and when to use them:

ATTORNEYS & PROFESSIONALS looking for referrals or connections:
→ /building-your-trusted-professional-team

REAL ESTATE BROKER (probate/estate/senior specialist):
→ /estate-probate-inherited-property/professional-team

SENIOR MOVE MANAGERS:
→ /senior-move-managers

SENIOR PLACEMENT / SENIOR LIVING ADVISORS:
→ /senior-placement

PROBATE & ESTATE SALES (executors, heirs, inherited property):
→ /probate-estate-sales

HELPING AN AGING PARENT:
→ /helping-an-aging-parent

SENIOR TRANSITIONS (selling a senior's home):
→ /senior-transitions

PROPERTY VALUATION / APPRAISAL:
→ /why-valuation-matters

HOUSING & CARE OPTIONS (assisted living, memory care, adult family homes):
→ /senior-placement or /understanding-housing-care-options

PROBATE TERMINOLOGY / GLOSSARY:
→ /terminology

OUT-OF-STATE FAMILIES:
→ /out-of-state-families

CONTACT / START A CONVERSATION:
→ /contact

GENERAL PROFESSIONALS HUB:
→ /building-your-trusted-professional-team

Rules:
- Keep responses to 2-3 sentences maximum
- Always end with a specific page link
- For attorneys looking for real estate agents → send to /estate-probate-inherited-property/professional-team
- For families unsure where to start → ask one clarifying question: "Is this about a parent's housing, an inherited property, or something else?"
- Never imply Real Property Planning performs any service directly
- Use "you can find" or "this page connects you" rather than "we provide" or "our team"`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY");
    if (!ANTHROPIC_API_KEY) {
      return new Response(
        JSON.stringify({ error: "ANTHROPIC_API_KEY is not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "messages array is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Keep only the last 6 messages (3 exchanges) to limit input tokens.
    const trimmed = messages.slice(-6).map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content ?? ""),
    }));

    const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "anthropic-beta": "prompt-caching-2024-07-31",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 300,
        system: [
          {
            type: "text",
            text: SYSTEM_PROMPT,
            cache_control: { type: "ephemeral" },
          },
        ],
        messages: trimmed,
      }),
    });

    if (!anthropicResponse.ok) {
      const errText = await anthropicResponse.text();
      console.error("Anthropic API error:", anthropicResponse.status, errText);
      return new Response(
        JSON.stringify({ error: `Anthropic error ${anthropicResponse.status}`, details: errText }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const data = await anthropicResponse.json();
    const reply =
      data?.content?.find?.((c: { type: string }) => c.type === "text")?.text ??
      "Sorry, I didn't catch that — could you try again?";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("chat-assistant error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
