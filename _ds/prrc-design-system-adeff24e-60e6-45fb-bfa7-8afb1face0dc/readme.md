# PRRC Design System

Brand and UI system for the **Paramilitary Response and Rescue Corps (PRRC)** — a specialized tactical security, search & rescue, and disaster-response unit.

## Company context

PRRC provides expert tactical solutions for high-risk scenarios: natural disaster response, security in volatile environments, search and rescue, and survival training. The brand voice is that of a professional operator — precise, calm under pressure, no-nonsense. Tagline: **"Courage in Crisis."**

## Sources

- **GitHub repo:** [outbackwebsitedesign/PRRC](https://github.com/outbackwebsitedesign/PRRC) — attached as the primary source, but the repository has no commits/content yet. This design system was built from the company description and a supplied logo only. **Re-run this design system once the repo has real content** — explore it further for the company's actual product screens, copy, and visual identity.
- **Logo:** supplied directly by the user (`assets/logo.png`) — a ribbon/shield mark with the wordmark "Paramilitary Response and Rescue Corps" and tagline "Courage in Crisis."
- No Figma file, codebase, or slide deck was otherwise provided.

## Intentional additions

No component inventory source existed (empty repo, no Figma), so the full standard primitive set was authored from scratch, sized to an ops/field-app context: Button, IconButton, Badge, Tag, Card, Input, Select, Checkbox, Radio, Switch, Tabs, Toast, Tooltip, Dialog, Icon.

## Content fundamentals

- **Tone:** authoritative and terse — briefing-room language, not marketing fluff. Short declarative sentences. Active voice, present tense for capability statements ("PRRC mobilizes...", "Our team is composed of...").
- **Person:** speaks as "we/our" about the org; addresses the reader/client as "you" only in direct-response contexts (portal copy, CTAs). Marketing copy is mostly third-person-neutral about the org ("PRRC is ready to mobilize").
- **Casing:** UI labels, eyebrows, and nav items are UPPERCASE with wide tracking (military stencil/briefing convention). Body copy is sentence case.
- **Vocabulary:** operational/tactical terms throughout — "mobilize," "deploy," "sector," "grid," "personnel," "extraction," "briefing," "standby," "critical." Mission/report IDs use a `PRRC-####` / `REQ-###` format.
- **No emoji, ever.** No exclamation points in UI copy. Numbers and coordinates render in monospace for a data-readout feel.
- **Example (from company description):** "We operate with precision, efficiency, and a focus on safety to assist in high-risk scenarios that require advanced skills and equipment."

## Visual foundations

- **Palette:** near-black charcoal (`--color-ink-900`) app surfaces with olive/khaki as a secondary tactical accent family, and a single warm **blaze-orange** (`--color-orange-500`) as the sole bright accent — used sparingly for primary actions, active/critical status, and focus states. Semantic danger/warning/success/info colors are desaturated so the orange stays the visual "loudest" element on the page.
- **Backgrounds:** flat, no gradients, no photography/illustration in the UI chrome. Dark, matte, utilitarian — like a command console, not a consumer app.
- **Type:** three families. **Black Ops One** (military stencil display) reserved for rare hero moments only. **Oswald** (condensed, uppercase, wide-tracked) for all headings, nav, labels, badges, buttons — the "briefing" voice. **Barlow** for body copy and paragraph text. **JetBrains Mono** for IDs, coordinates, timestamps, and any data readout.
- **Corners:** hard-edged. Radii are minimal (0–6px) — this is gear, not a consumer app; nothing pill-shaped except the Switch track and status-dot badges.
- **Cards/panels:** flat fill (`--surface-card`), 1px hairline border (`--border-subtle`), no drop shadow at rest; shadow appears only on floating/overlay elements (dialogs, toasts).
- **Borders over shadows:** the primary depth cue is a 1px border between ink-800/700/600 surface steps, not elevation shadows. Shadows (`--shadow-sm/md/lg`) are reserved for modals, toasts, and popovers.
- **Spacing:** 4px base grid (4/8/12/16/24/32/48/64/80/96).
- **Motion:** minimal — fast (120–180ms) linear-ish ease-out transitions on hover/press only (background-color, border-color). No bounce, no page-transition choreography. This is a utilitarian ops tool, not a marketing site.
- **Hover/press states:** hover shifts fill one step lighter (orange 500→400) or reveals a panel-tint background on ghost elements; press/active goes one step darker (orange 500→700). No scale/shrink effects.
- **Transparency/blur:** only on the modal scrim (`--surface-overlay`, translucent black, no blur) — blur is not used anywhere else.
- **Iconography:** see below.

## Iconography

No icon font, sprite, or SVG set existed in the source. A small outline icon set derived from **Heroicons** (open MIT-licensed outline style, 1.8px stroke) was hand-selected and bundled as `components/core/Icon.jsx` — this is a **substitution, flagged here**: if PRRC has a preferred tactical/military icon set, swap the path data in `Icon.jsx`. No emoji or unicode glyphs are used as icons anywhere in this system.

## Fonts — substitution flag

No font files were provided. Fonts are loaded from Google Fonts (`tokens/fonts.css`) as the closest open-source match to the "military stencil + condensed sans" direction requested: **Black Ops One**, **Oswald**, **Barlow**, **JetBrains Mono**. **Please share PRRC's official brand fonts if any exist** — these are substitutes, not confirmed brand type.

## Index

- `styles.css` — global stylesheet entry (imports everything below)
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`
- `assets/logo.png` — PRRC ribbon mark + wordmark (user-supplied; only logo asset available)
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand/radii/elevation) shown in the Design System tab
- `components/core/` — Icon, Button, IconButton, Badge, Tag, Card
- `components/forms/` — Input, Select, Checkbox, Radio, Switch
- `components/navigation/` — Tabs
- `components/feedback/` — Toast, Tooltip
- `components/overlay/` — Dialog
- `ui_kits/ops-portal/` — command dashboard, mission requests, reports (desktop ops portal)
- `ui_kits/field-app/` — login, mission list, mission detail, check-in (mobile field app)
- `SKILL.md` — portable skill definition for use in Claude Code
- `github.md` — source-repo sync record

## Caveats — please help iterate

- **The attached GitHub repo (`outbackwebsitedesign/PRRC`) is empty.** Nothing here reflects PRRC's real product, code, or brand system — it's built from the company description and your logo alone. Push real content to that repo (or attach a Figma file) and ask me to sync/rebuild for a system grounded in your actual product.
- Fonts and icons are Google Fonts / Heroicons substitutes, flagged above — send real brand font files and icon set if they exist.
- Colors, spacing, and the entire visual direction here are original design choices (tactical/olive/blaze-orange) based on your answers to my direction questions, not extracted from a source — tell me what to keep, and what to push further.
