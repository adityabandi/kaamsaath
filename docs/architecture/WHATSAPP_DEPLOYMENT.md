# WhatsApp deployment boundary

This repo is prepared for, but not connected to, Meta Cloud API.

## Safe prototype behavior

- `GET /api/meta/webhook` (rewritten to `/api/meta-webhook`) implements token challenge verification.
- `POST /api/meta/webhook` (rewritten to `/api/meta-webhook`) verifies `X-Hub-Signature-256` over raw bytes.
- Valid inbound events are acknowledged but not stored or processed.
- Outbound messaging is hard-disabled and the health route reports that state.
- No phone number, WABA, template, Meta app, app secret or verify token is included.

## Production work after explicit decisions

1. Confirm business/legal owner and approved working/final display name.
2. Create/select Meta Business portfolio, WABA and a dedicated number that will not disrupt an existing WhatsApp account.
3. Keep secrets in Vercel/secret manager, never repo or chat.
4. Add durable queue with provider message-ID idempotency and per-conversation ordering.
5. Add consent/suppression, 24-hour service-window, approved-template and quality/limit gates before any send.
6. Add encrypted stores, retention/deletion, human handoff and safety case isolation.
7. Add reviewed template registry for cook offers, agreements, status, payment and reactivation.
8. Run Meta test-number traffic only with synthetic/test recipients before any real participant.
9. Complete privacy, labor, payment, security and incident review.

The Vercel static product may be deployed privately for review before any Meta connection. Public launch, real templates, number migration, outbound messaging and production secrets remain separate approvals.
