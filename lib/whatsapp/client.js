const graphVersion = () => process.env.WHATSAPP_GRAPH_VERSION || "v23.0";

export function outboundEnabled() {
  return process.env.WHATSAPP_OUTBOUND_ENABLED === "true";
}

export async function postWhatsApp(body, { fetchImpl = fetch } = {}) {
  if (!outboundEnabled()) return { ok: false, blocked: true, reason: "outbound messaging disabled" };
  const id = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  if (!id || !token) return { ok: false, blocked: true, reason: "credentials not configured" };
  const response = await fetchImpl(`https://graph.facebook.com/${graphVersion()}/${id}/messages`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ messaging_product: "whatsapp", recipient_type: "individual", ...body })
  });
  const data = await response.json().catch(() => ({}));
  return response.ok ? { ok: true, wamid: data?.messages?.[0]?.id || "" } : { ok: false, error: data };
}
