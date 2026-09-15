# WhatsApp handoff index

These artifacts reconcile the WhatsApp Business research handoff with Jothe's actual architecture: a static multi-page prototype on Vercel plus Node serverless functions, not Next.js.

- `SETUP_RUNBOOK.md` - phased external setup; every Meta, phone, terms, billing and public-deploy step remains gated.
- `ARCHITECTURE_HANDOFF.md` - original Next.js-oriented architecture proposal retained as design input.
- `TEMPLATE_CATALOG_DRAFT.md` - draft only; no templates or translations have been submitted or represented as native-reviewed.
- `OPTIN_DESIGN.md` - consent record, capture and revocation design.
- `PORTING_NOTES.md` - implemented runtime shape and deliberate stubs.
- `../architecture/WHATSAPP_DEPLOYMENT.md` - safe deployment boundary.

Current code does not contact Meta. Outbound messaging is disabled even if credentials are present.
