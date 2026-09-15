# Jothe WhatsApp template catalog (DRAFT - not submitted)
All category UTILITY unless noted. Utility templates must reference a specific user action/request and carry no promotional content, or Meta reclassifies them as marketing (Rs 0.7846 vs Rs 0.1150 India, plus frequency-cap exposure). English master below; Kannada and Hindi versions are required for the cook side and MUST pass the native-speaker review the naming workstream already made mandatory before submission. Meta allows up to 250 templates per WABA.

Template syntax: {{1}} positional variables, optional footer, optional quick-reply or URL buttons.

## 1. optin_confirmation
Trigger: right after consent capture (any method).
Body: "Thanks {{1}}! You are signed up to get WhatsApp messages from {{2}} about cooking-work matches, agreements, schedules, and payments. Reply STOP anytime to stop these messages."
Vars: {{1}} person name, {{2}} business display name of record.
Buttons: none.

## 2. match_proposal
Trigger: hirer requests introduction to an opted-in cook; no open service window.
Body: "{{1}}, a household in {{2}} would like to talk to you about cooking work: {{3}} cuisine, {{4}} people, {{5}} per month, starting {{6}}. Tap a button to reply - your number stays private until you agree."
Vars: name, area (e.g. HSR Layout), cuisine, household size, pay, start date.
Buttons: quick replies INTERESTED / NOT NOW.
Note: cook reply opens a free 24h window -> rest of negotiation free-form, free.

## 3. agreement_summary
Trigger: both sides confirmed the Shared Table Agreement.
Body: "Your agreement is confirmed, {{1}}. Work: {{2}}. Schedule: {{3}}. Pay: {{4}} per month, paid directly by UPI to {{5}}. Trial day: {{6}}. Tasks included: {{7}}. Reply CHANGE if anything is wrong."
Buttons: quick replies CONFIRMED / CHANGE.

## 4. trial_reminder
Trigger: morning of the paid trial day (send inside an open window when possible = free).
Body: "Good morning {{1}}! Trial cooking day today at {{2}}, expected around {{3}}. Trial pay: {{4}}. Reply here if timing changes."
Buttons: quick replies ON MY WAY / RESCHEDULE.

## 5. payment_reminder
Trigger: agreed pay date passes without hirer confirmation (utility - tied to the existing agreement).
Body: "Hi {{1}}, the monthly pay of {{2}} for {{3}} was due {{4}}. If already paid by UPI, tap PAID so we can close the record."
Buttons: quick replies PAID / NEED TIME.

## 6. schedule_change
Body: "{{1}}, {{2}} asked to change {{3}} from {{4}} to {{5}}. OK for you?"
Buttons: quick replies OK / NOT OK.

## 7. feedback_request (post-trial)
Body: "How was the trial day with {{1}}, {{2}}? Your answer decides the match - tap one:"
Buttons: quick replies GREAT - CONTINUE / NOT A FIT.

## 8. login_otp (category AUTHENTICATION, only if app login needed)
Body: "{{1}} is your verification code for {{2}}." (Meta authentication format is fixed; Rs 0.1150 India.)

## Submission notes
- Create in WhatsApp Manager or API per language; each language is reviewed separately.
- Utility classification is validated by Meta; keep variables specific to the transaction.
- Track message_template_status_update + message_template_quality_update webhooks; pause any template whose quality drops.
- Free-window rule: if the recipient replied within 24h, these sends cost Rs 0 regardless.
