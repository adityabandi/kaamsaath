# Cost-aware job-scoping intelligence

## Decision

Use AI as a narrow parser and language layer, not the marketplace brain. Most turns should be buttons, numbered replies, templates, retrieval, validation, and deterministic state transitions. A small structured-output model extracts a job schema and proposes the next missing question. A stronger model runs only when ambiguity, risk, conflict, or low confidence justifies its cost. A human owns dangerous work, disputes, repeated misunderstanding, identity-sensitive content, and any case the system cannot make safe.

This makes cost scale with nuance rather than message count.

## Request path

```text
WhatsApp text / number / button / voice
 -> normalize + language detect
 -> deterministic command router
    -> known command? update state without LLM
    -> reusable category flow? validate fields without LLM
    -> free text/voice? retrieve category card + small model extraction
 -> schema and rule validation
 -> confidence/risk router
    -> accept extraction
    -> ask one bounded clarification
    -> stronger model
    -> human handoff
 -> deterministic response renderer in user's language
```

### Zero-model turns
`1/2/3`, yes/no, language choice, STOP, confirm/change, en route, arrived, paid/not paid, rating dimensions, known menu choices, and accepted form/Flow submissions.

### Small-model turns
First free-text job request, voice transcript cleanup, answers containing several fields, category/subcategory extraction, local-language paraphrase, and a single next-question proposal.

### Strong-model turns
Only when a routing rule fires:
- extraction confidence below threshold after one clarification
- multiple plausible scopes with meaningful price/safety consequences
- electrical/gas/structural/height/chemical/medical or other hazard language
- scope conflict between parties
- dispute, harassment, discrimination, coercion, injury, nonpayment complexity
- mixed-language/voice transcript with critical ambiguous numbers
- user rejects the summary twice

A stronger model still cannot approve the job, reveal an address, change money terms, or close a safety case.

## Job schema

```json
{
  "intent": "hire|work|status|support|opt_out|unknown",
  "language": "bcp47",
  "category": "electrical|plumbing|appliance|painting|other|null",
  "subcategory": "string|null",
  "symptoms": ["string"],
  "requested_work": ["string"],
  "exclusions": ["string"],
  "locality": "string|null",
  "exact_address_present": false,
  "date": "YYYY-MM-DD|null",
  "arrival_start": "ISO datetime|null",
  "arrival_end": "ISO datetime|null",
  "expected_minutes": "integer|null",
  "wage_inr": "integer|null",
  "overtime_inr_per_hour": "integer|null",
  "travel_inr": "integer|null",
  "materials_party": "worker|hirer|at_cost|unknown",
  "tools_party": "worker|hirer|unknown",
  "access": {"floor": "integer|null", "lift": "yes|no|unknown"},
  "hazards": ["string"],
  "questions": ["string"],
  "evidence": [{"field": "json pointer", "quote": "source span"}],
  "field_confidence": {"json pointer": 0.0},
  "overall_confidence": 0.0,
  "needs_human": false,
  "reason_codes": ["enum"]
}
```

The model returns JSON only. It must use `null` rather than invent. Every action-driving value includes a source quote. Deterministic code resolves dates using the user's timezone, validates ranges, rejects impossible combinations, strips exact addresses from worker offers, and compares the wage with configured guidance.

## Prompt contract

**System:** Extract only what the person said or what the referenced accepted agreement already contains. Never infer wage, duration, exact address, safety, identity, certification, or payment. Return the schema exactly. Quote evidence for each non-null critical field. Ask at most one next question: the highest-impact missing or conflicting field. Mark hazards and disputes even when uncertain. Do not negotiate, rank workers, promise availability, or reveal private data.

**Retrieved context:** one versioned category card containing synonyms, typical subcategories, mandatory questions, exclusions, hazard phrases, allowed units, and reviewed message keys for the current language.

**Input:** latest message + bounded conversation state + accepted agreement version. Do not send unrelated history.

## Confidence and routing

Critical fields: intent, category, scope, locality, date/time, duration, wage, overtime, travel/materials, and hazard state.

- `>= 0.90` critical fields, no conflict/hazard: accept extraction.
- `0.72-0.89`: ask one targeted clarification; do not match.
- `< 0.72`: strong model once, then human if still below 0.85.
- Any hazard, dispute, address leak risk, conflicting money, or repeated correction: deterministic escalation regardless of score.

Confidence must be calibrated on held-out local-language data. The numeric defaults are launch hypotheses, not validated performance claims.

## Multilingual and voice

1. Remember the user's chosen language; do not guess from name or location.
2. For voice, use an India-language speech provider or portable adapter. Keep audio out of the LLM when possible: speech-to-text first, then schema extraction.
3. Preserve numbers, units, code-switching, and uncertain spans. Low-confidence wage, date, phone, address, voltage, floor, or quantity is always read back.
4. Render policy/safety content from native-reviewed message keys, not ad-hoc translation.
5. Offer an audio summary for the final Fair Job Card and ask the user to explain critical terms back during onboarding tests.
6. Delete raw audio on the published retention schedule unless it is retained with consent for a live dispute/safety case.

## Caching and retrieval

- Cache category-card retrieval by category + language + version.
- Cache safe, non-personal normalized phrase mappings, never full user messages.
- Deduplicate webhook/message IDs and model calls with input hash + state version.
- Use prompt caching/batch discounts only where the provider's official terms and latency fit.
- Do not reuse a prior user's extraction.
- Keep provider response, schema version, prompt version, latency, token/audio units, confidence, route, correction, and final human outcome for evaluation, with PII minimized.

## Provider portability

Adapters:
- `extractStructured(input, schema, categoryCard)`
- `transcribe(audio, languageHints)`
- `translateMessage(messageKey, variables, locale)`
- `classifySafety(input)` only as a second signal, never the only gate

A provider registry stores current model ID, region, data handling, retention, structured-output support, language evaluation, unit price, timeout, and fallback. No vendor name appears in core domain logic. Prices are configuration with `effective_at`, currency, input/output/audio units, and source URL.

Current official pricing pages used for comparison:
- OpenAI: https://developers.openai.com/api/docs/pricing
- OpenAI transcription model: https://developers.openai.com/api/docs/models/gpt-4o-mini-transcribe
- Google Gemini: https://ai.google.dev/gemini-api/docs/pricing
- Anthropic: https://docs.anthropic.com/en/docs/about-claude/pricing
- Sarvam AI: https://www.sarvam.ai/api-pricing
- AWS Bedrock: https://aws.amazon.com/bedrock/pricing/

Do not hardwire figures from these pages. Re-price with real token/audio distributions before choosing. Evaluate India-language quality and privacy/region terms separately from list price.

## Cost and latency budget

Budget per **completed match**, not per message.

Proposed pilot targets:
- median zero-model turns: at least 70%
- small-model extraction calls: no more than 3 per created job and 1 per worker response path
- strong-model escalation: below 8% of created jobs after calibration
- AI + transcription variable cost: target <= ₹2 per created qualified job and <= ₹5 per completed match
- model cost share: <= 5% of expected hirer fee
- small-model p50 < 1.5s, p95 < 4s; strong model p95 < 10s
- end-to-end WhatsApp reply p95 < 6s for ordinary extraction, excluding provider delivery

These are design budgets, not claims or authorized spend. If the real evaluation cannot meet both quality and cost, narrow categories and rely more on structured questions rather than silently accepting weaker scoping.

## Evaluation

Build a versioned, consented set across English, Hindi, Kannada, and common code-switching in the pilot cell. Include text and noisy voice transcripts.

Minimum before limited pilot:
- 500 de-identified intake examples
- 100 per active category plus cross-category/unknown cases
- at least 25% incomplete, contradictory, or correction turns
- at least 15% hazard/safety/dispute cases, oversampled for recall testing
- wage/date/duration/address exact-match slices
- dialect, code-switching, spelling, voice noise, older phones, and short number replies

Metrics:
- field precision/recall and exact match for critical values
- hallucinated critical-field rate: target zero in the release set
- unsafe false-negative rate, separately reviewed
- correct next question and unnecessary-question rate
- escalation precision/recall
- Fair Job Card correction rate
- cost and latency distribution per qualified job/completed match
- performance gaps by language, voice/text, gender where consented, category, and acquisition channel

A change ships only if it passes regression gates and does not buy aggregate gains by worsening a language or safety slice.

## Failure modes

- **Confident invented detail:** require evidence spans and reject unsupported values.
- **Wrong date from relative phrase:** deterministic timezone parser + readback.
- **₹700 interpreted as materials/total incorrectly:** separate wage/material fields and ask.
- **Code-switched voice loses quantity:** mark uncertain spans and replay/read back numbers.
- **Category template overfits:** allow unknown category and handoff.
- **Agent asks too many questions:** next-missing-field policy asks one high-value question.
- **Cheap model masks nuance:** correction/escalation telemetry, held-out evaluation, strong-model route.
- **Prompt injection in message:** messages are data; fixed schema, no tool/action authority from content.
- **Provider outage/latency:** zero-model commands continue; queue extraction; human fallback; no duplicate offers.
- **Cost spike:** per-job call cap, circuit breaker, model downgrade only within evaluation gates.
- **PII leakage:** bounded context, redaction, field-level encryption, retention, and no cross-user cache.
