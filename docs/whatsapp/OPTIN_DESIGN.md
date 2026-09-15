# Jothe opt-in and WhatsApp policy compliance design

## Policy (grounded 2026-09-15, https://developers.facebook.com/docs/whatsapp/overview/getting-opt-in)
- Required before ANY business-initiated message: (a) the person's mobile number, (b) opt-in permission confirming they want messages from THIS business.
- Opt-in must clearly state: that they are opting in to receive communication, and the business name.
- Must comply with local law (India: DPDP Act consent principles apply).
- Valid methods: SMS, website, IVR, in person / paper. Expectation-setting, category-level opt-in, and clear opt-out are recommended.
- Blocks/reports feed the quality rating; sustained low quality -> rate limiting. user_preferences webhook carries marketing opt-out signals.

## Capture points in the Jothe flow
1. Cook onboarding (web form / assisted signup / first WhatsApp contact):
   - Checkbox (never pre-ticked): "I agree to receive WhatsApp messages from <business name> about match proposals, agreements, schedules, and payments at this number. I can stop anytime by replying STOP."
   - Business name shown must match the WABA display name of record ("Worker Hub" interim, "Jothe" after clearance).
2. Hirer onboarding: same pattern for agreement, schedule, and payment messages.
3. In-person / assisted onboarding (likely for cooks): paper or agent-read consent script in Kannada/Hindi, recorded with method=paper, verbal script text stored.
4. Inbound-first contacts: a user messaging Jothe first opens a free service window and replies are allowed, but that is NOT template opt-in. Collect explicit opt-in inside that first conversation before any later business-initiated template.

## Consent record schema (per person)
- wa_id (E.164), display name captured at consent time
- business_name_shown, consent_text_version, language
- method: web_checkbox | sms | paper | verbal_script
- categories: matches | agreements | schedules | payments | feedback
- captured_at, capture_context (form id / script id), evidence_ref (form submission id / document id)
- status: active | revoked, revoked_at, revoke_channel (STOP keyword | web | support)
- source_ip or device info where available

## Opt-out
- Keywords STOP / STOPP / NILISA (Kannada transliteration suggestion - validate with native speakers) in ANY language variant -> immediate revoke, single confirmation message, log.
- Web UI toggle mirrors the same record.
- Revocation blocks all business-initiated templates in code (send gate), not by convention.

## Data minimization
- Store wa_id + consent + conversation state only. Do not export phone lists.
- Address privacy: hirer address is shared with the cook only after mutual agreement confirmation, inside the chat.
- Retention: consent evidence kept while account active + statutory period; message content retention kept minimal (delivery status + template id, not bodies, once delivered).
