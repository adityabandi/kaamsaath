# WhatsApp-first conversation product

The user confirmed the agent **connects** the worker. WhatsApp is the primary worker and hirer interface; the separate web console is for support, safety, and operations.

## End-to-end journey

### 1. Hirer starts the conversation
Example: "Need an electrician tomorrow morning in Indiranagar."

The intake agent detects hirer intent and language, then asks only for missing required fields: task/symptoms, approximate locality, date and arrival window, expected duration, offered wage, overtime, travel, tools/materials, access, hazards, and payment method. Voice notes are transcribed, retained only under the media policy, and summarized back for correction.

Before matching, the agent sends a Fair Job Card and asks the hirer to confirm the structured terms. Exact address is stored separately and is not included in worker offers.

### 2. Rank, then contact a small batch
Hard filters: skill, service radius, availability, safety restrictions, blocks, opt-in, and wage floor. Ranking uses travel estimate, stated preferences, task fit, reliability, repeat relationship, and an exposure correction for qualified new or under-exposed workers.

Start with three workers, not a neighborhood blast. Expand only after a short response window. Every offer states why the worker received it and provides `1 Interested`, `2 Ask`, `3 Not available`, `STOP`, plus voice-note support.

### 3. Worker expresses interest
The agent restates wage, duration, area, travel, materials, and risk/access details. "Interested" is not acceptance and creates no commitment. The hirer receives a shortlist, not private worker data beyond the consented profile.

### 4. Both sides agree
The hirer chooses a worker. The agent sends the same versioned Fair Job Card to both people. Each confirms. Only after both confirmations does Jothe release the exact address and direct contact, or keep communication relayed if either user prefers.

### 5. Run the job
Supported updates: en route, arrived, started, scope change, overtime proposal, completed, cancel, running late, cannot reach, safety help, and human support. A scope/pay change creates a new agreement version and needs both confirmations.

### 6. Payment and reputation
At completion, the agent asks the worker what amount is due, asks the hirer to confirm, and records direct UPI/cash payment status. MVP does not hold funds. Nonpayment starts reminders and human review. Each party rates separate dimensions; disputed ratings do not affect matching until reviewed.

## Failure and safety flows

- **Cancellation:** capture actor and reason; explain any previously agreed cancellation amount; rematch without exposing the cancelled party's private data.
- **No-show:** check safety first, then attempt contact; do not auto-punish from one report; preserve evidence for review.
- **Unsafe job:** show leave-safely actions, stop direct contact if requested, notify a trusted contact if the worker set one, and escalate to a human. Emergency guidance must be localized and reviewed before pilot.
- **Harassment/discrimination:** stop matching between the parties, preserve the report, and human-review account restrictions.
- **Agent uncertainty:** say what is missing and transfer the full conversation state to a human without forcing repetition.

## Consent and messaging rules

- Record source, timestamp, language, purpose, and scope of each user's WhatsApp opt-in.
- `STOP`, equivalent local-language phrases, and a human-reviewed voice opt-out suppress non-transactional messages immediately. Confirm the opt-out once.
- A user-initiated message opens the customer-service window described in Meta's current documentation. Within that window, use ordinary service replies. Outside it, business-initiated outreach requires an approved template in the correct category.
- Worker job alerts are opt-in utility notifications. Template approval does not replace user consent.
- Store every outbound intent and template version. Respect message delivery/error webhooks, blocks, quality signals, and account messaging limits.
- Keep marketing/referral messages separate from necessary job operations and separately optional.

## Cost model

Meta's current pricing is message/category/market dependent and changes over time. Do not hardcode an INR rate in product copy or forecasts. The implementation should maintain a dated rate table sourced from Meta's pricing page and report costs by message category, country code, and template. Cost controls: prioritize replies inside the service window, small-batch offers, event-driven status messages, template deduplication, and no engagement spam.

Before any real pilot, re-check the official India rate card, BSP markup if one is used, taxes, free-entry-point rules, and the selected template categories. No Meta account, BSP, number, or paid messaging has been approved yet.

## Architecture

```text
WhatsApp user
  -> Meta Cloud API
  -> signed webhook ingress + idempotency
  -> conversation router
       -> intent/language/voice adapter
       -> deterministic job state machine
       -> policy & consent engine
       -> human handoff queue
  -> job/agreement/reputation services
  -> matching & exposure service
  -> outbound scheduler
       -> service-window check
       -> template registry
       -> consent/suppression check
       -> small-batch limiter
  -> Cloud API
```

### Core stores
- users and role-specific profiles
- consent ledger and suppression list
- conversations, messages, and media-retention state
- jobs and job-state events
- versioned Fair Job Cards and confirmations
- match candidates, ranking features, exposure, and offer batches
- blocks, safety cases, disputes, and human handoffs
- payment confirmations, not payment credentials
- reputation dimensions and review status
- WhatsApp templates, languages, categories, quality, and current approval status

### Inbound webhook requirements
Verify webhook signatures, acknowledge quickly, enqueue work, deduplicate provider message IDs, order events per conversation, handle retries, fetch media through authenticated endpoints, scan files, transcribe only with consent, and redact secrets/identity documents from model context.

### Agent boundary
The model extracts intent and drafts natural-language responses. Deterministic services own eligibility, matching constraints, address disclosure, agreement transitions, opt-out, safety escalation, template-window checks, and money-related state. The agent cannot override them.

## Multilingual design

Remember language separately for each person and allow switching at any time. Generate messages from reviewed semantic keys, not free translation of policy text. Support text, buttons/numbers, and voice. Read back wage, time, scope, and address disclosure terms in the chosen language. Pilot with English plus the two dominant local languages in one launch area; pay native-speaking workers to test comprehension.

## Official current sources
- Cloud API overview: https://developers.facebook.com/docs/whatsapp/cloud-api/
- Message API: https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages
- Webhook payloads: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples/
- Opt-in: https://developers.facebook.com/docs/whatsapp/overview/getting-opt-in/
- Pricing: https://developers.facebook.com/docs/whatsapp/pricing/
- Service messages: https://developers.facebook.com/docs/whatsapp/conversation-types/
- Template guidelines: https://developers.facebook.com/docs/whatsapp/message-templates/guidelines
- Messaging limits: https://developers.facebook.com/docs/whatsapp/messaging-limits/
- Quality signals: https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals/
- Flows: https://developers.facebook.com/docs/whatsapp/flows/gettingstarted/

## V1 cook conversation

The reusable job state remains, but v1 uses a recurring cook card: paid trial -> mutual recurring agreement -> attendance/change/payment cycles. The agent asks cuisine, meal/person count, dietary/allergy handling, prep/chopping/kitchen cleanup boundary, groceries/menu responsibility, equipment, visit window, expected minutes, trial pay, monthly wage/pay date, extras/guests, leave, cameras/pets/presence and access. Cleaning, childcare, errands, events and additional homes are never bundled silently.
