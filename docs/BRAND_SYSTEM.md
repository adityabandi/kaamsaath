# Jothe working visual system

Jothe is a screened working brand, not legally cleared.

## Creative territories

### 1. The Shared Table - selected
Deep aubergine/ink, warm rice-paper, turmeric/mango, leaf green and stainless-steel highlights. Editorial type, precise food-card grids, hand-drawn ingredient marks and a repeated `jothe-loop` connection motif. Feels contemporary, warm and equal rather than agency/civic-tech. Food is shown through hands, tools, mise-en-place and real kitchens, never anonymous servant imagery.

### 2. Kitchen Ledger
Receipt/order-ticket structure, mono numerals, ruled agreements, steel/blue palette. Strong for clarity and payment, but colder and too operational as the main identity.

### 3. Bengaluru Morning
Airy dawn colors, time-window arcs and neighborhood maps. Warm and local, but risks becoming a premium consumer lifestyle service that sidelines workers.

**Choice:** Shared Table as the core; borrow Ledger precision for pay/agreement and Morning pacing for onboarding.

## Principles

- Two equal sides of one agreement. Never visually shrink the worker side.
- Food craft, not decorative cliché: no generic mandalas, palace motifs, namaste stock photos or costume styling.
- Use real local-language type and cooking detail only after native/editorial review.
- Warm premium does not mean luxury pricing or domestic-servant cues.
- WhatsApp-adjacent, not a WhatsApp clone: familiar message rhythm with Jothe's cards, color and agreement states.

## Tokens

- `aubergine #27172B` - primary ink and trust state
- `rice #F7F1E7` - page ground
- `paper #FFFDF8` - surfaces
- `mango #FFB000` - action and focus
- `chilli #E34A32` - hazards/errors only
- `leaf #176B54` - confirmed/safe
- `steel #C9D1CF` - dividers and utility
- `plum #6F355F` - depth, active states

Large text uses Fraunces; interface text uses Manrope; numerals/ledger facts use IBM Plex Mono. Kannada uses system `Noto Sans Kannada` where available and must be tested for expansion. Avoid ultra-light weights.

## Components

- **Jothe loop:** two interlocking rounded strokes, representing worker and household confirmation.
- **Cook offer tile:** schedule/cuisine/travel/pay first; no photograph required to judge worth.
- **Shared Table Card:** two-column worker/household terms joining at one confirmed center line.
- **Masala chips:** cuisine/task labels, never identity/protected-trait labels.
- **Safety split:** chilli edge + plain action; no alarming animation.
- **UPI ledger:** monospaced line items and dual-confirmation status.

## Motion and performance

Only opacity/transform, <=180ms for controls and <=320ms for page state. Respect `prefers-reduced-motion`; no autoplay video, parallax or confetti. Use CSS/SVG/icon text, no heavy libraries. Core demo works with system fonts if Google Fonts fail. Images, when added after field work, use responsive AVIF/WebP, fixed dimensions and lazy loading.

## Accessibility checks

- target WCAG AA contrast; never convey state by color only
- 44px minimum touch targets for production surfaces
- body text >=16px on worker-facing mobile production flow
- visible focus rings and logical keyboard order
- local-language expansion allowance of 35%; never fixed-height policy copy
- icons always paired with text
- plain-language and audio equivalents for critical terms
- test 320px Android, 200% zoom, reduced motion, low bandwidth and font fallback

No current screenshot proves formal WCAG conformance. Run automated and manual screen-reader/keyboard/native-language testing before pilot.
