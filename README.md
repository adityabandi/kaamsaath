# Jothe

> Working brand for testing. Screened, not legally cleared. See [docs/NAMING.md](docs/NAMING.md).

**Home cooking work, clearly agreed.**  
Direct local work, fair pay, and worker dignity - starting on WhatsApp.

> Working name. Before public launch, run trademark, domain, and Hindi/regional-language testing.

## The idea

Jothe is a WhatsApp-first marketplace for short, local informal work in India: an electrician for two hours, a painter for a day, a helper for a shop shift, or a trusted worker for a household repair.

It is not a feed that rewards whoever replies fastest. It is a worker-first matching and job-completion system designed to reduce middlemen cuts, make pay and scope explicit, prevent wage theft, and let workers carry a portable record of reliable work.

## Product principles

1. **No worker commission.** Workers keep the agreed wage. Employers pay a small transparent booking/protection fee after an initial free allowance.
2. **Pay and scope before travel.** Every offer states work, location area, time, hours, wage, materials, travel allowance, and payment method in the worker's language.
3. **Mutual accountability.** Workers rate hirers on payment, safety, respect, and scope changes. Ratings are structured and dispute-aware, not a public popularity contest.
4. **Voice first, text optional.** A user can post or accept work through voice notes and simple numbered replies.
5. **No pay-to-rank.** Matching uses skill, distance, availability, reliability, wage fairness, and repeat preference. Paying does not move a worker up the list.
6. **Safety over growth.** Blocked users stay blocked; high-risk categories and late-night jobs get extra checks; precise addresses are revealed only after acceptance.
7. **Worker-owned reputation.** Workers can download or share a verified work card and references instead of being locked into the platform.

## Who it is for

### Workers
**V1: part-time home cooks in Bengaluru.** The underlying job/agreement architecture can support other categories later, but v1 is deliberately narrow. Product surfaces use specific, respectful terms such as home cook and household cleaner rather than collapsing domestic workers into one label.

### Hirers
Households, small shops, housing societies, offices, contractors, and local businesses that need a person for hours, a day, or a short project.

## WhatsApp experience

### Worker onboarding
The worker messages "Hi" or sends a voice note.

1. Choose language by number or voice.
2. Share first name, locality/pincode, skills, travel radius, preferred hours, and typical wage range.
3. Verify phone. Optional trust steps can be added later. Aadhaar is never required for basic access and is never shown to hirers.
4. Record a short skill introduction by voice; optional references or work photos.
5. Choose notification and privacy settings.

A worker profile must work without a separate app.

### Hirer posts a job
The hirer writes or says: "Need an electrician in Indiranagar tomorrow morning for about two hours. Fan is not working."

The assistant confirms a structured job card:
- category and task
- approximate locality, not exact address yet
- date, arrival window, expected duration
- offered wage and whether travel/materials are extra
- who supplies tools/materials
- payment method: UPI or cash
- indoor/outdoor, stairs, hazards, and gender/safety preference where lawful and appropriate

No job is matched until wage, duration, and scope are present.

### Matching
Jothe sends a job card to a small ranked set of suitable workers. It does not blast everyone nearby.

Workers reply:
- `1` Interested
- `2` Ask a question
- `3` Not available
- or send a voice reply

The hirer gets up to three qualified matches with skill proof, completed jobs, reliability, languages, expected travel, and worker-set price where it differs.

### Job confirmation
Both sides receive the same agreement card. Each confirms before the exact address and direct contact are released. The card can be reopened from WhatsApp at any time.

### Start, changes, and completion
- Worker sends `ARRIVED` or taps a button.
- Either party can log a scope or time change. Both must accept the revised wage.
- At completion, both confirm the amount due.
- Hirer pays the worker directly by UPI or cash in MVP. Jothe records mutual confirmation, not custody of funds.
- If payment is disputed, reminders and support start immediately. A repeat nonpayer is suspended.

## The Fair Job Card

Every accepted job becomes a plain-language, timestamped agreement:

- worker and hirer names as shared
- task and exclusions
- approximate and then exact location
- start window and expected duration
- agreed wage
- overtime unit and rate
- travel allowance
- materials responsibility
- cancellation terms
- payment method and due time
- emergency/support action

The card is sent in the user's chosen language, with an audio summary on request.

## Trust without punishing workers

### Reputation
Separate dimensions prevent one vague star score from controlling livelihoods:
- showed up / hirer was available
- skill or job-description accuracy
- payment on time
- respectful behavior
- safety
- scope stayed as agreed

Low ratings require a reason. Disputed ratings are not used for ranking until reviewed. Missing one job does not permanently bury a worker. New workers receive controlled exposure so incumbents do not own the market.

### Verification ladder
- Level 1: phone verified
- Level 2: two references or repeat hirer
- Level 3: skill proof, work sample, or community partner check
- Level 4: optional identity verification for sensitive categories

Verification badges say exactly what was checked. They never imply a guarantee.

### Safety
- approximate location before acceptance
- masked/platform contact until both accept
- shareable job card and check-in with a trusted contact
- one-tap "leave safely" flow and support escalation
- safety questions for homes, late hours, isolated locations, and hazardous work
- mutual blocks with no rematching
- strict policy against caste, religion, or other unlawful discrimination
- sensitive categories use stronger screening and restricted workflows

## Wage protection

Jothe should make the fair action easier than the exploitative one:

- local wage floor guidance by category and city, shown to both sides
- alerts for offers far below the local range
- no hidden contractor deduction
- automatic overtime calculation from the agreed rate
- change orders for extra work
- nonpayment reminders and hirer suspension
- downloadable job and payment record
- worker support through NGO/trade-union/legal-aid partners for serious disputes

Escrow is not in MVP. Holding money creates regulatory, refund, KYC, and operational obligations. First prove demand with direct UPI/cash and clear records. Add regulated payment protection only through a licensed partner.

## Business model

- **Workers:** free core access, no commission, no charge to apply or receive wages.
- **Households:** a few free posts, then a transparent fixed protection/booking fee, never a percentage deducted from wages.
- **Small businesses:** monthly plan for repeat hiring, attendance records, invoices, and saved worker pools.
- **Societies/partners:** verified local talent pools and admin tools.
- **Optional later services:** insurance or training only as opt-in partner products with plain pricing. Never make them a condition for ranking.

Referral rewards must not become cash-burning spam. Start with non-cash utility: priority matching slots, verification support, or fee credits after both referred users complete a real, undisputed job. Workers never need to recruit to access jobs.

## MVP

### Pilot scope
One 3-5 km Bengaluru cell, two local languages plus English, and one category: part-time recurring home cooks. The pilot uses paid trial shifts leading to versioned monthly arrangements.

### Build
- WhatsApp Business Platform webhook
- conversation and state engine
- multilingual text plus speech-to-text and text-to-speech fallback
- Postgres with geospatial indexing
- matching and fairness service
- admin console for verification, safety, and disputes
- signed job-card renderer
- event ledger and audit trail
- direct UPI deep links, without platform custody

### Success measures
North star: **worker earnings from completed, undisputed jobs**, not messages or job posts.

Guardrails:
- worker take-home as a share of agreed wage
- median effective hourly earnings after travel
- payment on-time rate
- job fill and completion rate
- repeat worker-hirer matches
- cancellation and no-show rates on both sides
- safety reports and median response time
- disputes per 100 jobs and resolution time
- share of jobs below wage guidance
- match exposure by worker cohort, including new workers and women
- worker satisfaction and hirer respect score

## What not to build first

- an open job feed
- worker bidding that drives wages down
- public comments or unmoderated reviews
- cash advances or lending
- mandatory Aadhaar
- platform-held wages without a regulated partner
- a native app before WhatsApp retention is proven
- a nationwide launch before local support works

## 12-week pilot plan

### Weeks 1-2: co-design
Interview workers, hirers, worker collectives, and local support organizations. Pay workers for research time. Test the name and vocabulary in each pilot language.

### Weeks 3-5: concierge prototype
Run the structured job-card and matching flow with humans behind WhatsApp. Validate wage disclosure, worker response, safety checks, and support load before automating.

### Weeks 6-9: closed beta
Automate onboarding, job cards, matching, confirmations, reminders, and reputation. Keep disputes and risky jobs human-reviewed.

### Weeks 10-12: measured pilot
Target a small, geographically dense cohort. Publish worker-impact metrics internally each week. Expand only if pay, safety, and completion guardrails hold.

## Suggested architecture

```text
WhatsApp Cloud API
      |
Webhook gateway (TypeScript/Fastify)
      |
Conversation orchestrator ---- Language/voice adapters
      |
Job + identity + reputation services
      |
Matching service ---- Postgres/PostGIS
      |
Admin & safety console
      |
Audit/event ledger + analytics
```

Recommended starting stack: TypeScript monorepo, Fastify or NestJS, PostgreSQL/PostGIS, Redis-backed queues, React/Next.js admin console, object storage for consented work samples, OpenTelemetry, and an Indian WhatsApp BSP only if direct Meta onboarding is too operationally heavy.

## Repository roadmap

- `docs/product.md` - product flows and edge cases
- `docs/safety.md` - safety model and escalation
- `docs/fairness.md` - ranking rules and worker-impact measures
- `docs/pilot.md` - field-research and launch plan
- `apps/webhook` - WhatsApp webhook service
- `apps/admin` - support/admin console
- `packages/domain` - job, user, agreement, and reputation types
- `packages/matching` - matching and exposure logic
- `packages/localization` - translations and voice prompts

## Naming

**Recommended working name: Jothe**

Why: it means work + together/support, is easy to say, signals partnership instead of extraction, and avoids framing workers as disposable "gigs." Initial web screening found less direct product-name collision than Jothei, KaamSetu, HunarSetu, KaamMitra, and generic Kaam brands.

Backups:
- **HaqSe Kaam** - strongest worker-rights position, but reads more like a campaign than a marketplace.
- **KaamHaqq** - distinctive and mission-led, but spelling and pronunciation vary by region.
- **SaathWork** - easy bilingual construction, but less natural and less rooted.

Do not publicly launch on a name until Indian trademark classes, domains, app stores, social handles, and native-speaker reactions across pilot languages are checked.

## Status

Concept foundation only. No customer launch, worker outreach, paid service, or financial commitment has been approved.

## Additional operating documents

- [WhatsApp-first conversation product](docs/WHATSAPP_PRODUCT.md)
- [Marketplace launch and liquidity plan](docs/GTM.md)
- [MVP product specification](docs/PRODUCT_SPEC.md)
- [Interactive WhatsApp demo](whatsapp-demo/README.md)
- [Interactive worker product demo](prototype/README.md)
