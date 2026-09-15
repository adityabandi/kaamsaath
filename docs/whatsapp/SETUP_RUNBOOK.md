# Jothe / Worker Hub - WhatsApp Business Platform setup runbook
Status: researched and prepared 2026-09-15. Nothing created yet on Meta side (account creation requires accepting Meta Platform Terms - held for owner approval).

## Sources (official unless noted)
- Get started / Cloud API: https://developers.facebook.com/docs/whatsapp/cloud-api/get-started
- Cloud API overview (test resources, rate limits): https://developers.facebook.com/docs/whatsapp/cloud-api/overview/
- Webhooks: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks (fields list captured 2026-09-15)
- Pricing: https://developers.facebook.com/docs/whatsapp/pricing/
- Messaging limits: https://developers.facebook.com/docs/whatsapp/messaging-limits/
- Display name rules: https://en-gb.facebook.com/business/help/338047025165344
- Phone number / migration rules: https://developers.facebook.com/docs/whatsapp/cloud-api/get-started/migrate-existing-whatsapp-number-to-a-business-account/ and /docs/whatsapp/cloud-api/reference/phone-numbers/
- Business accounts limits: https://developers.facebook.com/docs/whatsapp/overview/business-accounts/
- Opt-in policy: https://developers.facebook.com/docs/whatsapp/overview/getting-opt-in
- Embedded signup (deprecation + billing notes): https://developers.facebook.com/docs/whatsapp/embedded-signup
- India INR rate card effective 2025-07-01 (Meta card mirrored by CleverTap, third-party host): https://clevertap.com/wp-content/uploads/2025/06/495701139_1342785016809359_6240599367822568595_n.pdf
- India per-user marketing frequency cap (third-party corroboration): https://www.gupshup.ai/resources/blog/all-you-need-to-know-about-whatsapp-business-api-frequency-capping/

## Decision: Cloud API, not the WhatsApp Business app
Jothe is a platform. It needs programmatic sends, inbound webhooks, template management, and opt-in records. The consumer-style Business app offers none of these. A number cannot run both the Business app and Cloud API unless onboarded through a partner coexistence flow.

## Phase 0 - owner decisions (blocking)
1. Identity: create a managed Meta account under the project identity adi149@mail.instinct.com (recommended; keeps assets project-owned like the Vercel Worker Hub account), or use an existing personal Facebook account. None is currently accessible - developers.facebook.com loads logged-out in the saved browser profile, and no Meta mail exists in any connected mailbox.
2. Phone number: a fresh dedicated number that has never been on WhatsApp (or whose WhatsApp account is knowingly deleted - history lost). Ideally +91 for Bengaluru trust. Must receive SMS or voice OTP. VoIP/virtual numbers are commonly rejected. Never the user's personal number.
3. Legal entity: business verification and final display name ("Jothe") wait for the legal-entity and trademark decisions. Interim display name suggestion: "Worker Hub" (matches the Vercel workspace, extensible, already owner-approved as temporary there).

## Phase 1 - free sandbox (30-60 min once identity approved, no charge, fully reversible)
1. Register as Meta developer + create app (Business type / "Connect with customers through WhatsApp" use case). This step accepts Meta Platform Terms - gated on owner approval.
2. App Dashboard > WhatsApp > API Setup: Meta auto-creates a TEST WABA + TEST business phone number. Relaxed limits, no payment method needed for template sends.
3. Add the owner's own number as the "To" recipient, send the hello_world template, reply once to open the 24h customer service window, then send a free-form message. Save the test phone number ID and WABA ID.
4. Business Settings > System users: create a system user, assign the app, generate a permanent access token with whatsapp_business_messaging + whatsapp_business_management. Store in vault.
5. Webhook: deploy the scaffold (see ARCHITECTURE.md) to the Worker Hub Vercel workspace - needs owner's public-deploy approval; alternative for pure local dev is a tunnel. Configure callback URL + verify token in App Dashboard > WhatsApp > Configuration.
6. Subscribe webhook fields: messages, account_alerts, account_update, business_capability_update, message_template_status_update, message_template_quality_update, template_category_update, phone_number_name_update, user_preferences.
7. Switch app to Live mode - some webhooks do not fire in Dev mode.
8. End-to-end test: template send + reply + status callbacks, only to the owner's number. Deletable afterwards (App Dashboard > WhatsApp > Configuration > Test Account > Delete).

## Phase 2 - production WABA (needs number + payment decision)
1. Business portfolio: created during onboarding if none exists. Choose its country deliberately - it sets billing currency context. INR billing launched 2026-01-01 for businesses whose Sold-To country is India; a Spain-registered portfolio bills differently (rates are still set by the RECIPIENT's calling code, so Indian recipients are always charged at India rates; only the invoicing currency changes). Tie this to the legal-entity decision.
2. Add the real phone number (API Setup panel or WhatsApp Manager), verify via SMS/voice OTP, set the two-step verification PIN, register the number via the register API endpoint. The number keeps working for normal calls/SMS.
3. Set interim display name "Worker Hub". Display-name review only triggers when scaling; any later change re-triggers review.
4. Attach a payment method to the WABA - REQUIRED before a direct (non-partner) WABA can send production messages. Money decision for the owner.
5. Create and submit the utility templates (see TEMPLATES.md). Approval is per-template; templates get quality scores and can be paused.

## Phase 3 - scale (deferred, owner/legal gated)
- Business verification with legal entity documents -> messaging limit 250 -> 2,000.
- Automatic scaling 2,000 -> 10,000 -> 100,000 -> unlimited, driven by quality + volume (2,000 delivered business-initiated messages in 30 days with high-quality templates).
- Submit "Jothe" as display name only after name clearance.
- Optional: Official Business Account (green check) - requires notable-business press presence; not near-term.

## Hard rules that shape the product (all grounded above)
- Pricing per DELIVERED template message since 2025-07-01 (conversation billing deprecated). India (INR card): marketing Rs 0.7846, utility Rs 0.1150, authentication Rs 0.1150, authentication-international Rs 2.30, service free. Volume tiers cut utility/auth up to ~30%.
- FREE lanes: unlimited service conversations (user messages first, 24h window, free-form replies) since 2024-11-01; utility templates FREE inside an open 24h service window since 2025-07-01; 72h free-entry-point conversations from Click-to-WhatsApp ads / FB Page CTA.
- Business-initiated contact outside the window requires an approved template.
- New portfolios: 250 unique recipients / 24h business-initiated until verification or volume scaling. Portfolio-level limit shared across numbers.
- Opt-in required before messaging: person's number + explicit opt-in naming the business (Nov 2024 policy). SMS/web/IVR/paper all valid. See OPTIN.md.
- India: per-user marketing template frequency caps across brands since Feb 2024 - do not build growth loops on marketing templates to Indian numbers.
- Per-user send pacing: 1 msg / 6s to the same user (bursts of 45 borrow future quota); error 131056 -> retry with 4^X backoff.
- Throughput default 80 msg/s per number; WABA cap 250 templates; 20 WABAs and 2 registered numbers per business portfolio initially.
- Webhooks: payloads up to 3MB; non-200 -> retried with decreasing frequency up to 7 days (dedupe by message id); X-Hub-Signature-256 verification; mTLS optional.
- Embedded Signup v2 deprecated 2026-10-15 (only relevant if Jothe ever onboards other businesses as a partner; direct-developer path uses App Dashboard instead).

## Cost model for the Jothe flow (India rates)
Service-window-first design: cooks and hirers message Jothe first (or reply to one template), opening free 24h windows. Inside the window everything is free, including utility templates. Expected paid events per match: 1 utility template to initiate contact with an opted-in cook (Rs 0.1150) when no window is open. At 1,000 matches/month: ~Rs 115. Marketing templates are not needed for the core loop.
