# PRRC — Paramilitary Response and Rescue Corps

Brand and full-site prototype for **PRRC**, a specialized tactical security,
search & rescue, and disaster-response unit. Tagline: **"Courage in Crisis."**

These are [DesignCraft](https://claude.ai) prototype pages (`*.dc.html`) built on a
shared design system. Each page is a self-contained React-driven prototype that
renders via `support.js` and the bundled tokens/components under `_ds/`.

## Pages

| File | Description | Screens |
| --- | --- | --- |
| `Public Site.dc.html` | Marketing site | Home, Services, About, Careers, Contact |
| `Management Portal.dc.html` | Desktop ops portal | Dashboard, Missions, Personnel, Reports |
| `Training Portal.dc.html` | Training LMS | Catalog, Course Player, Progress, Schedule |
| `Field App.dc.html` | Mobile field app | Missions, Mission Detail, Check-In, Alerts |

## Design system

The shared design system lives in
`_ds/prrc-design-system-adeff24e-60e6-45fb-bfa7-8afb1face0dc/`:

- `tokens/` — colors, typography, spacing, effects, and fonts (CSS custom properties)
- `styles.css` — global stylesheet entry
- `_ds_bundle.js` — bundled UI components (Button, Badge, Card, Input, Select,
  Checkbox, Radio, Switch, Tabs, Toast, Tooltip, Dialog, Icon, …)
- `_ds_manifest.json` — component + token manifest
- `assets/` — PRRC logo marks
- `readme.md` — full design-system documentation, brand voice, and substitution flags

**Visual direction:** near-black charcoal surfaces, olive/khaki tactical accents, a
single blaze-orange accent, hard-edged corners, and a briefing-room type system
(Black Ops One / Oswald / Barlow / JetBrains Mono).

## Viewing locally

The pages reference the design system with relative paths, so serve the repo root
over HTTP rather than opening files directly:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/Public%20Site.dc.html
```

## Notes

Fonts (Google Fonts) and icons (Heroicons) are open-source substitutes; see the
design-system `readme.md` for substitution flags. The system was generated from the
company description and the supplied logo — see that readme for iteration guidance.
