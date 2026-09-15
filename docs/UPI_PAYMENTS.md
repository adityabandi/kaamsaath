# Direct UPI payments - non-custodial MVP

## Boundary

The hirer pays the worker directly through their chosen UPI app. Jothe records agreed and claimed state; it does not receive, hold, route, split, settle, refund or guarantee funds. It is not an escrow, wallet or automatic fee splitter.

Payment/legal counsel must review whether the exact UI, QR/intent generation, records, fees and operational role create payment-aggregator, technology-provider, consumer, tax or other obligations before launch.

## State

`not_due -> due -> initiated -> payer_claimed -> recipient_confirmed | recipient_disputed -> partially_confirmed -> resolved`

A screenshot, UTR/reference, success screen or payer claim is evidence only. Settlement is `recipient_confirmed` only when the worker confirms receipt or an authorized regulated integration supplies reliable status under reviewed terms.

## Flow

1. Final due amount comes only from the latest mutually confirmed job/change card: base, overtime, materials, travel and other approved lines.
2. After agreement, worker chooses a UPI payment address/QR and confirms the displayed beneficiary name. Keep history/version; never silently substitute it from a message or image.
3. At payment, show worker chosen name, partially masked UPI ID, amount, job ID and line items. Hirer must verify the beneficiary shown by their UPI app before approving.
4. A UPI intent/deeplink or platform-rendered QR contains only the verified version and exact current amount. Do not make Jothe the payee.
5. Payer returns and marks paid; may add UTR/reference or screenshot with a purpose/retention notice.
6. Worker independently selects received in full, partial amount, not received or wrong amount. Never preselect.
7. Mismatch opens reconciliation and pauses rating retaliation, not automatic guilt.

## UPI intent

Use an official, implementation-reviewed UPI intent format and encode values safely. Common parameters include payee address/name, amount, currency and transaction note/reference, but do not treat a constructed URI as proof the app paid it. Exact scheme/API requirements, merchant fields, signing/QR rules and allowed usage must be rechecked with NPCI, partner/payment counsel and target apps before production. Do not invent a universal deep link in user messages.

## Changes, partials and refunds

Overtime/material/guest-meal/extra-work changes require a new bilateral version before being added. A payer can pay partial; record amount claimed and amount recipient confirms, leaving balance due. Refunds happen directly between parties and have the same dual-confirmation states. Jothe does not debit or reverse either account and does not promise recovery.

Wrong-recipient payment: tell the payer to contact their UPI app/bank using official dispute/support routes; preserve the intended payee version and evidence; do not tell the worker to reimburse money they did not receive. Failed/pending app states remain unresolved until the recipient confirms or official status is obtained.

## Abuse controls

- QR/UPI version locked after mutual match; change requires worker re-assurance and payer warning
- beneficiary-name readback; exact amount and job ID shown
- detect QR image substitution, UPI changes near payment, multiple worker accounts sharing payees, social-engineering phrases and account takeover
- never ask for UPI PIN, OTP, screen share, remote-access app or collect request approval
- warn that entering a UPI PIN authorizes money leaving the account, not receiving money
- shared-phone mode hides payment previews and asks who is using the profile
- screenshot OCR is untrusted; redact unrelated balances/transactions and delete on schedule
- UTR/reference is sensitive and access-limited

## Official sources

- NPCI UPI safety: https://www.npci.org.in/what-we-do/upi/upi-safety-shield
- NPCI fraud awareness: https://www.npci.org.in/fraud-awareness
- NPCI UPI dispute resolution: https://www.npci.org.in/what-we-do/upi/upi-dispute-issue-resolution
- NPCI UPI roles/responsibilities: https://www.npci.org.in/product/upi/roles-responsibilities
- NPCI circulars/API usage: https://www.npci.org.in/what-we-do/upi/circular
- RBI customer protection / unauthorized transactions: https://www.rbi.org.in/commonperson/English/Scripts/SMSLimitedliability.aspx
- National cybercrime portal: https://cybercrime.gov.in/

Recheck official requirements and target app behavior at implementation. No real UPI ID, QR, UTR or credential belongs in demo/test data.
