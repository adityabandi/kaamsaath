import { createHmac, timingSafeEqual } from "node:crypto";

export function verifyChallenge(query, expectedToken) {
  if (!expectedToken) return { status: 503, body: "verification not configured" };
  if (query["hub.mode"] !== "subscribe" || query["hub.verify_token"] !== expectedToken) return { status: 403, body: "verification failed" };
  return { status: 200, body: String(query["hub.challenge"] ?? "") };
}

export function validMetaSignature(rawBody, header, appSecret) {
  if (!appSecret || !header?.startsWith("sha256=")) return false;
  const supplied = Buffer.from(header.slice(7), "hex");
  const expected = createHmac("sha256", appSecret).update(rawBody).digest();
  return supplied.length === expected.length && timingSafeEqual(supplied, expected);
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    const result = verifyChallenge(req.query, process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN);
    return res.status(result.status).send(result.body);
  }
  if (req.method !== "POST") return res.status(405).send("method not allowed");
  const chunks = [];
  for await (const chunk of req) chunks.push(Buffer.from(chunk));
  const raw = Buffer.concat(chunks);
  if (!validMetaSignature(raw, req.headers["x-hub-signature-256"], process.env.WHATSAPP_APP_SECRET)) return res.status(401).send("invalid signature");
  // Safe boundary: acknowledge authentic payload bytes without parsing, storing or sending.
  return res.status(200).json({ received: true, processed: false, outboundMessaging: false });
}
export const config = { api: { bodyParser: false } };
