import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const SYSTEM_PROMPT = `You are a warm, patient, and friendly guide for Real Property Planning — a free educational resource hub for seniors, families, and professionals in Washington State.

Your role is to help visitors understand their situation and point them to the right information or page on the site. You do NOT represent a company that performs services — Real Property Planning is a hub that connects people to professionals.

Always speak in plain, simple language suitable for elderly visitors. Be warm, calm, and never pushy. If someone describes their situation, identify which part of the site is most relevant and suggest they visit that page.

Key pages on the site:
- Helping an Aging Parent: /helping-an-aging-parent
- Probate & Estate Sales: /probate-estate-sales
- Senior Transitions: /senior-transitions
- Property Valuation: /why-valuation-matters
- Senior Move Managers: /senior-move-managers
- Senior Placement: /senior-placement
- Terminology: /terminology
- Building Your Professional Team: /building-your-trusted-professional-team
- Contact: /contact

Keep responses concise — 2 to 4 sentences maximum. Always end with a helpful next step or page suggestion.`;

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
