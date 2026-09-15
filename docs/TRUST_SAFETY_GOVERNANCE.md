# Jothe trust, safety and governance

## Operating promise

Trust is not a badge or an opaque score. It is a set of enforceable product rules: know the terms before travel, reveal private data only when needed, let either person leave safely, record changes, protect appeals, and give workers a real voice in policy.

This document is a product and operations design, not legal advice. Before a real pilot, Indian counsel must review privacy notices/consent, labor/platform classification and benefits, worker terms, consumer law, intermediary obligations, evidence retention, law-enforcement process, discrimination, minors, payments, insurance, tax, state/local rules, and category-specific licensing. Workers and local organizations must co-design language, safety flows, evidence, response hours, and restoration rules.

## Identity assurance without mandatory Aadhaar

### Assurance ladder
- **L0:** phone possession + device/risk checks; browse and learn only
- **L1:** phone + name + locality + liveness-resistant selfie/photo only where justified; can use ordinary categories with limits
- **L2:** two references, repeat counterparty, trade-node/community verification, work sample, or skill assessment
- **L3:** optional government-ID or regulated identity-provider check for sensitive roles, high values, or repeated risk; display exactly what was checked, never the ID number
- **L4:** category-specific license/certification where law or safety requires it

Aadhaar is not required for general participation. If optional Aadhaar offline verification is ever considered, use only a legally permitted, purpose-limited route reviewed against current UIDAI rules, offer a real alternative, collect the minimum result, and do not store Aadhaar numbers or copies by default. "Verified" must always name the check: phone verified, reference checked, skill sample reviewed, or license current.

Hirers receive assurance too: phone, payment behavior, completed jobs, address stability signals where consented, and organization verification for businesses. Workers can decline first-time, late-night, isolated, or low-assurance hirers without ranking penalty.

## Consent and data minimization

- Plain-language, local-language notices at collection time
- Separate consent/purpose records for job alerts, exact location, trusted-contact sharing, voice transcription, work photos, research, marketing, and optional verification
- No contact-list upload, covert group scraping, or reuse of safety reports for growth
- Approximate locality for discovery; exact address only after mutual agreement
- Separate high-sensitivity vaults for identity evidence, safety cases, exact locations, and ordinary marketplace data
- Role- and purpose-based access, time-bound elevation, no shared support accounts, and field-level audit
- Self-service or assisted access, correction, deletion/withdrawal, and grievance paths as required and feasible
- No model training on conversations, audio, identity evidence, or safety reports without explicit separately reviewed consent

## Mutual reputation without rating abuse

Dimensions for hirers: paid on time, scope accuracy, safe environment, respectful behavior, available on arrival. Dimensions for workers: arrival/reliability, communicated changes, scope/skill accuracy, respectful behavior. Quality disputes are not converted into safety labels.

Controls:
- ratings only after a real agreed job
- no public free-text in MVP; structured dimensions plus private evidence
- minimum cohort before public summaries
- disputed ratings excluded from ranking while reviewed
- detect retaliation after nonpayment/safety reports, reciprocal brigading, repeated pairs and collusion
- never permanently bury a worker for one cancellation or low score
- show reason categories and meaningful appeal
- separate worker exposure correction from reputation
- rating-age decay and restoration after sustained good outcomes

## Wage theft, scope changes and money

The versioned Fair Job Card records wage, time, overtime, travel, materials, payment method, due time, and cancellation terms. Any material change creates a new version and needs both confirmations. "Do extra work first and settle later" is not an accepted state.

Nonpayment flow:
1. confirm amount due separately with both parties
2. preserve job card, changes, arrival/completion, messages, receipts, and consented photos
3. send reminders within approved rules
4. restrict the hirer's new matching based on risk/severity, not merely an allegation
5. human mediation and local support/legal referral where appropriate
6. restore access or progress enforcement with written reasons

Jothe does not promise debt collection, guarantee payment, or hold money in MVP.

## Safety categories

### Prohibited in initial pilot
- sexual services/exploitation, trafficking, weapons, illegal goods or acts
- work for children; accounts/jobs reasonably believed to involve a child
- tasks intended to evade law, surveillance, locks/access without authority, or harm someone
- asbestos, explosives, live high-voltage systems, structural demolition, confined spaces, hazardous chemicals, medical services, gas work, work at unsafe height, or any category requiring licensing/controls the pilot cannot verify
- harassment/discriminatory requests or selection on unlawful/unsafe grounds

### Restricted
Late-night work, isolated sites, occupied-home services, high-value property access, ladders/roofs, power isolation, construction sites, transport of valuables, and care work require category-specific controls or remain off until reviewed.

### Scope drift
A safe-looking job that becomes dangerous is paused. The worker can leave without ranking penalty. The agent must not persuade anyone to continue.

## Severity and response

| Level | Examples | Immediate product action | Proposed human SLA |
|---|---|---|---|
| S0 | active danger, injury, blocked exit, violence | show leave/emergency actions; trusted contact if pre-authorized; freeze contact/match as needed | live acknowledgement <=2 min during pilot hours |
| S1 | threats, harassment, coercion, severe discrimination, serious nonpayment pattern | separate parties, preserve evidence, temporary restrictions | <=15 min during pilot hours |
| S2 | single nonpayment, unsafe condition after exit, identity fraud, retaliatory rating | pause risky actions, case review | <=2 hours during pilot hours |
| S3 | no-show, cancellation, ordinary quality/scope dispute | structured mediation/rematch | same service day |
| S4 | profile, consent, language, usability | normal support | <=1 business day |

These are proposed staffing targets, not published promises. Outside staffed hours, the product must say support is not live and provide reviewed emergency routes. India's ERSS uses 112; the product must not imply that Jothe is emergency services or automatically contact authorities without lawful basis/permission except where counsel identifies a mandatory exception.

## Evidence

Collect the least evidence needed. Prioritize platform-native records: agreement versions, confirmations, timestamps, delivery state, address-release event, scope changes, payment confirmations, ratings and access log. Let people add text, voice, receipt, or photo with a plain purpose/retention notice. Never ask a person to confront danger, secretly record where unlawful, or obtain evidence before leaving safely.

Evidence is visible only to authorized case roles. Preserve original and derived/transcribed versions with provenance. Log every view/export. Legal hold overrides ordinary deletion only through a documented, counsel-approved process.

## Enforcement and restoration

### Actions
Education/warning -> feature friction -> category limit -> temporary matching pause -> account suspension -> permanent removal. Safety separation, blocks, and emergency action can occur immediately without waiting for the full adjudication.

### Principles
- allegation is not automatically guilt
- apply the least restrictive action that manages current risk
- severe/imminent risk allows temporary precautionary restriction
- send a plain-language reason, evidence category, duration, effects, and appeal route unless doing so creates safety/legal risk
- do not reveal reporter identity or sensitive evidence unnecessarily
- comparable cases should receive comparable treatment; audit disparity by role, language, gender where consented, and acquisition channel

### Appeals
WhatsApp text, numbered choices, voice note, callback, or community-assisted appeal. A reviewer not responsible for the original decision handles material suspensions. Targeted review can affirm, reduce, remove, or replace the action. Record reason and notify both sides only to the extent appropriate. Restoration can include probation, lower limits, category restriction, added verification, or full access. False reports require evidence of knowing fabrication or abuse; an unsubstantiated report is not a false report.

## Fraud and collusion

Signals: account farms, referral rings, repeated closed pairs, synthetic jobs, impossible travel, device/phone/UPI reuse, identity reuse, charge/refund patterns, extortion, fake evidence, account takeover. Signals create review, not automatic guilt. Shared family phones/devices and common trade-shop networks are normal in the target market.

No secret risk score should determine livelihood alone. Separate investigation signals from public reputation, expose account-impacting reason categories, and allow appeal.

## Minors

Initial policy: adults only. Do not onboard or match a person reasonably believed to be under 18. Age assurance must minimize data and avoid asking everyone for high-risk identity documents. Any uncertainty or apparent child labor triggers human review, no match, and counsel-approved safeguarding. Indian child/adolescent labor law has category and hazard rules; counsel must define reporting, retention, and referral obligations before launch.

## Law-enforcement and government requests

Centralize requests with a trained legal-response owner. Require valid process, jurisdiction, specificity, authority identity and secure delivery. Disclose the minimum responsive data, preserve a request/disclosure audit, challenge overbroad requests where lawful, and notify the affected user unless legally barred or unsafe. Emergency disclosure and preservation standards require Indian counsel. Never let a field operator or model respond directly.

## Participatory governance

### Worker council
A paid, rotating council from active and recently inactive workers across categories, language, locality and gender representation. It reviews major changes to ranking, fees, verification, safety, suspensions, evidence and worker-facing language. Protect members from ranking retaliation. Publish meeting themes and Jothe's response, with private case details removed.

### Policy changes
1. problem statement and evidence
2. worker/counterparty impact assessment
3. council and specialist review
4. legal/privacy/model-risk review where needed
5. small reversible test
6. language/accessibility testing
7. approval owner and effective date
8. notice and appeal/grace path
9. post-launch audit and rollback trigger

Emergency changes may ship quickly to stop harm but require retrospective review within seven days.

### Transparency report
Quarterly once volumes support privacy-safe reporting: jobs, completion/payment, safety cases by severity, median response/resolution, restrictions by type, appeals and reversals, data requests/disclosures, major incidents, model escalation/error, worker exposure distribution, and material policy changes. Suppress small cells to prevent re-identification. Do not publish vanity "safety" claims.

## Model-risk governance

- inventory each model, purpose, owner, provider, data class, prompt/schema/version and decision boundary
- offline evaluation by language/category/safety slice before release
- no autonomous enforcement, emergency determination, protected-trait inference, identity verification, final dispute resolution, or law-enforcement response
- structured evidence and confidence; deterministic triggers outrank model scores
- shadow test and staged rollout; immutable logs of input references/output/version/route/correction
- worker-accessible explanation and human appeal for model-influenced action
- drift, hallucination, disparity, override, cost and latency monitoring
- rollback/circuit breaker; provider outage cannot silently remove safety controls

## Security, retention and vendor risk

- least privilege, MFA, separate production roles, just-in-time case access, quarterly access review
- encrypt transport and sensitive fields, rotate secrets, signed webhooks, idempotency, tamper-evident audit log
- vendor due diligence: data location/transfer, subprocessors, retention/training, deletion, breach notice, access controls, audit rights, uptime and exit/export
- default draft schedule, subject to DPDP/counsel review: ordinary unsuccessful offers 90 days; completed job agreement/transaction records 3 years if legally justified; raw audio 30 days; identity artifacts only as long as needed and shorter where possible; safety cases severity-based; rejected ID images promptly deleted; audit/security logs per legal/security need
- deletion propagates to derived data/backups on a documented schedule; legal holds are narrow and logged

## Incident response

Detect -> contain -> protect people -> preserve -> classify -> notify responsible owners -> investigate -> communicate -> restore -> review. Separate safety incident, privacy breach, account takeover, model failure, payment fraud and vendor outage runbooks. Current Indian reporting and notification obligations, including CERT-In and DPDP rules/effective dates, require counsel/security review before production.

## Current sources

- Digital Personal Data Protection Act 2023: https://www.meity.gov.in/static/uploads/2024/02/Digital-Personal-Data-Protection-Act-2023.pdf
- Digital Personal Data Protection Rules 2025: https://www.meity.gov.in/dpdp-rules-2025
- UIDAI offline verification regulations: https://uidai.gov.in/en/about-uidai/legal-framework/regulations/12659-aadhaar-authentication-and-offline-verification-regulations,-2021-no-2-of-2021.html
- Code on Social Security 2020: https://www.indiacode.nic.in/handle/123456789/16823
- Occupational Safety, Health and Working Conditions Code 2020: https://www.indiacode.nic.in/handle/123456789/22041
- Child and Adolescent Labour Act: https://indiacode.nic.in/handle/123456789/1848
- Information Technology Act 2000: https://www.indiacode.nic.in/handle/123456789/1999
- CERT-In directions: https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf
- MHA Emergency Response Support System: https://www.mha.gov.in/en/commoncontent/emergency-response-support-system-erss
- National Cyber Crime Reporting Portal: https://cybercrime.gov.in/
- Fairwork India 2024: https://fair.work/wp-content/uploads/sites/17/2024/10/Fairwork_India_Report_2024.pdf

Laws, rules and commencement/effective dates change. Re-check official text and retain Indian counsel before launch or policy claims.
