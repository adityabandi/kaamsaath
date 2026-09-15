# Jothe MVP product specification

## Product promise
A worker can discover, understand, accept, complete, and document a local job through WhatsApp without paying a commission or installing an app.

## MVP states
`draft -> open -> offered -> interested -> matched -> agreed -> en_route -> arrived -> active -> completion_proposed -> completed | disputed | cancelled`

Every transition writes an append-only event with actor, timestamp, channel, prior state, new state, and the agreement version.

## Required job fields
Category, plain-language scope, exclusions, approximate locality, date, arrival window, expected duration, wage, overtime rate, travel amount, materials responsibility, payment method, payment due time, tools, stairs/access, indoor/outdoor, known hazards, and support language.

A job cannot move to `open` until pay, duration, location area, and scope exist.

## Matching objective
Rank for suitability, not willingness to accept less:

1. hard eligibility: skill, service radius, availability, safety restrictions
2. worker preference: hours, travel, wage floor, repeat hirers
3. operational fit: estimated travel, task proof, reliability
4. fairness correction: minimum exposure for qualified new and under-exposed workers

Never use protected traits, pay-to-rank, private dispute reports, or a disputed rating. Record every ranking decision for audit.

## Agreement rules
Both parties see and confirm the same version. Any change to scope, duration, wage, overtime, materials, or location creates a new version and needs both confirmations. Exact address and direct contact appear only after agreement.

## Reputation
Store dimensions rather than a single opaque score. Public summaries require sufficient completed jobs. Written comments remain private for moderation in MVP. No-show and cancellation data are contextualized, not permanent automatic exclusion.

## Support severity
- S0: immediate physical danger - show leave-safely actions and emergency guidance; human escalation
- S1: harassment, discrimination, coercion, blocked exit - suspend matching while reviewed
- S2: nonpayment or unilateral scope change - start reminders, preserve evidence, restrict repeat offender
- S3: quality or ordinary disagreement - structured mediation
- S4: usability or profile help - normal support

## Data minimization
Do not collect Aadhaar for general use. Keep approximate location for discovery and disclose exact job location only after agreement. Keep work photos only with consent. Define retention and deletion windows before any real pilot.

## Demo acceptance criteria
- Responsive at 390px and 1440px
- Worker can navigate offers, jobs, earnings, reputation, and safety
- Interest confirmation repeats wage, place area, and time
- Safety and zero-commission promise remain visible
- No form sends, stores, or implies a live service
