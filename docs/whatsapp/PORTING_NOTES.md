# Porting the TypeScript scaffold to this repo

The incoming scaffold assumed Next.js App Router. Jothe is currently framework-free static HTML/CSS/JS plus Vercel Node functions. The portable parts were implemented without adding a framework or dependency:

| Scaffold intent | Jothe implementation |
|---|---|
| `app/api/webhooks/whatsapp/route.ts` | `api/meta-webhook.js` |
| raw request HMAC | streaming raw `Buffer`, then constant-time SHA-256 comparison |
| GET verify challenge | same handler, `WHATSAPP_WEBHOOK_VERIFY_TOKEN` |
| send client | `lib/whatsapp/client.js`, guarded by `WHATSAPP_OUTBOUND_ENABLED=true` |
| 24-hour service window | pure policy function in `lib/whatsapp/policy.js` |
| explicit opt-in gate | pure policy function in `lib/whatsapp/policy.js` |
| idempotency | pure key derivation in `lib/whatsapp/policy.js`; durable store remains production work |
| async processing | deliberately absent; valid payloads are acknowledged but not parsed/persisted |

This is a safe integration skeleton, not a production messaging service. The client has no product call site and tests prove sends stop while disabled. A production step must add durable queueing, dedupe/consent stores, per-user ordering, observability and reviewed retention before setting the flag.
