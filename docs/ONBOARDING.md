# WhatsApp-first onboarding

## Goal

Get a first-time worker or hirer to one safe, useful action without making them complete a long form. Ask only what the next step needs, save progress after every answer, explain why sensitive information matters, and let the person answer by text, number, button, or voice. Verification and profile depth grow with risk and use.

Onboarding is complete when the person can correctly understand and act on a sample Fair Job Card. A filled profile is not activation.

## Shared entry

First message receives:

1. language choices in plain script plus "send a voice note"
2. "I am looking for work" / "I need to hire" / "I need help"
3. short purpose and consent: what is stored, what is not required, how to stop/delete, and that this is not an emergency service
4. phone-possession assurance from WhatsApp; no claim that this proves identity

Remember language and accessibility choices, not inferred literacy. A person can type `BACK`, `CHANGE`, `HELP`, `STOP`, or the reviewed local-language equivalent at every step.

## Worker progressive onboarding

### Minimum to see a sample offer
- adult confirmation; uncertainty routes to human review, not document collection by default
- chosen name
- primary trade/category and specific tasks they do
- approximate locality or pincode and travel radius/time
- usual availability
- minimum acceptable wage unit/range for relevant category
- tools and transport capability
- job-alert opt-in and quiet hours

### Before first real match
- phone/name assurance level shown plainly
- payment preference: direct UPI or cash; never collect UPI PIN/OTP
- emergency/support language and whether they want a trusted contact configured
- work constraints and restricted tasks
- one reference, work sample, skill conversation, or community-node check where useful; none is silently treated as a government credential
- privacy choices for profile, work photos and direct contact

### Sample offer comprehension
Send a fictional local offer containing scope, approximate area, time, wage, overtime, travel, materials, tools and hazards/access. Ask:
- what amount will you receive for the planned work?
- what happens if it takes longer?
- when does the exact address appear?

Offer audio playback. Wrong answers trigger a simpler explanation, not rejection. Human help follows repeated misunderstanding.

### Portable reputation
Explain that completed-job dimensions, references and skill evidence form a downloadable work card; declining an offer does not reduce rank; disputed ratings are held during review; the worker controls external sharing.

## Hirer progressive onboarding

### Minimum to create a draft
- adult/authorized-person confirmation
- chosen name; organization name only if relevant
- usual job locality, stored approximately until each job's exact address is confirmed
- intended categories
- contact assurance level
- acknowledgment that wage, duration, overtime, travel and materials must be clear before matching

### Before first real match
- exact location for that job, encrypted and hidden from worker offers
- payment method and agreement to confirm payment status
- safety/access facts: occupied premises, floor/lift, hazards, pets, isolated/late hours, site contact
- acknowledgement: no discrimination/harassment, no hidden scope, no OTP/UPI PIN request, no prohibited work, and workers may leave unsafe work without rating punishment

### First Fair Job Card
The hirer describes one real or sample job. The scoping flow collects missing terms and renders the exact card. The hirer must choose `CONFIRM` or `CHANGE`; passive continuation is not acceptance.

## Shared phones and assisted access

A phone number is an access route, not always one person. At return, ask "Who is using Jothe today?" when a shared-phone flag exists. Use a local profile PIN only if the person can safely manage it; never put sensitive case previews in notifications. Let community-assisted onboarding record the assistant and consent while the worker answers directly. Do not let an ambassador control the worker's payout, phone identity, or job decisions.

## Skips, corrections and return

- Label fields `needed now`, `needed before first match`, or `optional`.
- A skipped optional field never blocks ordinary use or lowers ranking.
- A required missing field explains what it enables and offers voice/human help.
- Returning users resume at the exact safe checkpoint and see what remains.
- `CHANGE` shows a numbered summary; changing a critical field re-runs relevant checks.
- Do not reuse a stale exact address, wage floor, availability, trusted contact, payment preference, or consent without confirmation at the point of use.

## Trust and safety

- no mandatory Aadhaar
- adults-only initial pilot; uncertain/minor signals stop matching and go to safeguarding review
- fraud/device/shared-number signals create review, not secret rejection
- prohibit hazardous and illegal categories during onboarding; do not help rephrase them
- explain mutual ratings and appeal before the first job
- support/emergency UI uses reviewed local-language content; Jothe is not emergency services
- exact address and direct contact stay private until mutual agreement
- work photos and references need their own purpose/visibility choices

## Opt-out, deletion and re-entry

`STOP` pauses alerts and confirms once. Account deletion/export is available by text, numbered menu, voice or human help. Explain records that may be retained for legal, safety, fraud or transaction reasons after counsel review. Re-entry restores only appropriate profile state; prior blocks, unresolved safety restrictions and consent are not silently reset.

## State model

```text
new
 -> language_selected
 -> role_selected
 -> notice_accepted | help_requested | opted_out
 -> minimum_profile_in_progress
 -> minimum_profile_complete
 -> sample_card_in_progress
 -> comprehension_passed | explanation_needed | human_help
 -> first_action_ready
 -> first_match_ready (after assurance/risk-specific fields)
```

Worker and hirer profiles use separate state even on a shared number. Every transition records version, channel, language, response type, latency, skip/correction, human assist, and consent reference. Do not store raw model reasoning.

## Instrumentation

### Funnel
- first message -> language -> role -> notice -> minimum profile -> sample card -> comprehension -> first qualified action -> first agreement -> first completed job
- median/p90 turns and time at each step
- drop-off, skip, correction, HELP, STOP and human-assist rates
- voice vs text/button completion
- return-within-7-days and resume completion

### Quality and equity
- critical-field correction rate
- sample-card comprehension on first/second explanation
- false shared-phone/fraud/minor flags and human reversals
- first-offer response and first-job completion
- wage-floor changes after explanation
- performance by language, voice/text, category, acquisition node and relevant consented demographic slices
- complaints that the flow felt coercive, confusing, document-heavy or unsafe

Never optimize completion by hiding privacy, pay, safety, appeal or opt-out information.

## Experiments

| Hypothesis | Test | Primary outcome | Guardrail |
|---|---|---|---|
| Role before notice reduces confusion | role-first vs combined role/purpose card | notice comprehension + completion | opt-out and trust complaint |
| Voice lowers language friction | voice invitation vs text only | minimum-profile completion | correction and human-help rate |
| One category first is easier | single primary trade vs multi-select upfront | sample-card completion | later profile accuracy |
| Travel time is clearer than radius | minutes vs km | matching correction rate | effective worker earnings |
| Wage examples improve understanding | local unit examples vs blank question | valid wage entry | anchoring too low/high |
| Sample job activates better | sample card vs explanation only | first real-offer response | mistaken belief sample is real |
| Hirer conduct card prevents failures | short acknowledgment vs long policy | first-job dispute | comprehension, not checkbox speed |

Test with native speakers and workers paid for research time before live rollout.

## Activation definitions

- **Worker minimum profile:** required basics recorded, alerts consented, not yet activated.
- **Worker activated:** correctly handles a sample offer and responds to one qualified real offer.
- **Hirer minimum profile:** identity/contact basics and conduct acknowledgment, not yet activated.
- **Hirer activated:** confirms one complete Fair Job Card; marketplace activation requires a completed, paid, undisputed job.

Registrations and WhatsApp starts are not marketplace activation.

## Low literacy and accessibility

Never label a person as low literacy. Offer voice at every substantive step, short sentences, one question per turn, audio playback, icons with text rather than icons alone, explain-back for critical terms, and human callback. Avoid dense policy links as the only notice. Accessibility preferences must not be used in ranking.

## V1 cook profile addendum

For part-time home cooks, progressively collect cuisine/tasks, veg/non-veg handling preference, allergies confidence, visit windows, areas/travel, people/meal capacity, prep/chopping/cleanup boundaries, menu/grocery responsibility, tools/transport, weekly leave and paid-trial expectations. Do not ask caste/religion. Household onboarding must disclose cameras, pets, who is present, kitchen equipment, gas/electrical issues, keys/access, dietary/allergy needs and whether tasks include anything beyond cooking.

## Minor and safeguarding stop

The initial pilot is adults only. A person who states or appears to be a minor is not matched, and ambiguous age signals go to a trained human safeguarding review rather than broad identity-document collection. The agent does not investigate the child, expose them to a hirer, or help reframe prohibited child work.
