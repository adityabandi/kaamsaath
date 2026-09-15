# Jothe WhatsApp integration architecture
Target: Jothe repo deployed on Vercel (Worker Hub workspace). Stack assumption: Next.js App Router + TypeScript (standard for Vercel). If the repo differs, the client and webhook logic port directly - they are plain fetch + HMAC.

## Components
1. `app/api/webhooks/whatsapp/route.ts` (scaffold included)
   - GET: Meta verification handshake (hub.mode=subscribe, hub.verify_token, echo hub.challenge).
   - POST: verify X-Hub-Signature-256 with WHATSAPP_APP_SECRET over the RAW body, then process.
   - Always return 200 fast; process async (queue or waitUntil). Meta retries non-200 for up to 7 days -> dedupe by wamid.
2. `lib/whatsapp/client.ts` (scaffold included)
   - sendText / sendTemplate against graph.facebook.com/v23.0/<PHONE_NUMBER_ID>/messages.
   - Handles error 131056 (per-user pair rate limit: 1 msg/6s) with 4^X retry backoff per Meta guidance.
   - System-user permanent token in WHATSAPP_ACCESS_TOKEN (vault/env, never in repo).
3. `lib/whatsapp/windows.ts` (to build)
   - Service-window state machine per user wa_id: window opened by any inbound user message, expires 24h after last inbound.
   - Routing rule: inside window -> free-form or utility template (both free); outside window -> approved template only (paid).
4. `lib/whatsapp/optin.ts` + DB table (see OPTIN.md)
   - Every send checks a valid opt-in record first. Hard gate in code, not convention.
5. `lib/whatsapp/idempotency.ts`
   - Inbound dedupe on wamid; outbound idempotency keys per business event (e.g. agreement id + template name) so retries never double-send a paid template.

## Message flows mapped to the product
- Cook onboarding: cook messages Jothe first (click-to-chat link / wa.me QR on landing + printed cards) -> free service window -> conversational onboarding in their language. Zero Meta cost.
- Match proposal: hirer picks a cook -> cook has opt-in on file -> UTILITY template `match_proposal` with quick-reply buttons INTERESTED / NOT NOW. Cook's reply opens a free window -> details free-form.
- Shared Table Agreement: after both confirm -> UTILITY template `agreement_summary` (cuisine, people, schedule, tasks, trial date, pay, UPI handle). Free if inside window.
- Trial day: UTILITY `trial_reminder` morning-of (free if window open from prior reply).
- Payment: direct UPI between the parties (Jothe never holds money). UTILITY `payment_confirmation_request` -> hirer confirms paid -> free-form log. No Meta Payments API needed.
- Schedule change: either party messages first (free window) -> confirm via template if needed.
- Auth (if login OTP needed later): AUTHENTICATION template, Rs 0.1150 India.

## Env vars
- WHATSAPP_APP_SECRET (app dashboard > settings > basic)
- WHATSAPP_WEBHOOK_VERIFY_TOKEN (random string we choose)
- WHATSAPP_ACCESS_TOKEN (system user permanent token)
- WHATSAPP_PHONE_NUMBER_ID, WHATSAPP_WABA_ID
- WHATSAPP_GRAPH_VERSION=v23.0

## Webhook fields to subscribe
messages (inbound + status), account_alerts, account_update, business_capability_update (limit upgrades), message_template_status_update, message_template_quality_update, template_category_update, phone_number_name_update, user_preferences (marketing opt-out signals). App must be in Live mode for some fields.

## Quality and cost guardrails
- Never send marketing templates in the core loop: India per-user frequency caps + highest price + quality risk.
- Track per-template quality webhooks; auto-pause sending a template whose quality drops (Meta may pause it anyway).
- Cap outbound: max 1 business-initiated template per user per day from product triggers.
- Log every send with category + estimated paise for a monthly cost report.
- Honor STOP/opt-out immediately: mark opt-in revoked, confirm once, never message again outside a user-opened window.

## Security
- Signature verification mandatory before parsing; raw body required (no JSON middleware before HMAC).
- Verify token is a shared secret; callback URL unguessable path optional.
- Store wa_id (phone) and profile name only; address privacy rule from the product spec applies: hirer address shared with cook only after agreement confirmation, inside the chat flow.
- Meta IP allow-list optional; prefer signature + optional mTLS.

## Testing path (no production assets needed)
- Test WABA + test number from App Dashboard; recipient = owner's number only.
- Meta test webhook endpoint or the Vercel preview deployment URL for the scaffold.
- Simulate: template send, inbound reply, status callbacks (sent/delivered/read), STOP flow, 131056 backoff with a mock.
