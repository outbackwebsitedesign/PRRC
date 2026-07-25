# PRRC — Paramilitary Response and Rescue Corps

Website and operational portals for **PRRC**, a specialized tactical security,
search & rescue, and disaster-response unit. Tagline: **"Courage in Crisis."**

Built with **React + Vite**. This replaces the original DesignCraft prototype
(`*.dc.html` + `support.js` runtime) with a standard, buildable web app while
keeping the design identical. The design tokens and logo assets were carried over
verbatim; every DesignCraft component and screen was ported to real React.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Routes

The four original surfaces are now routes in a single app:

| Route | Surface | Screens |
| --- | --- | --- |
| `/` | Public marketing site | Home, Services, About, Careers, Contact |
| `/portal` | Management (ops) portal | Dashboard, Missions, Reports, Personnel |
| `/training` | Training portal | Catalogue, Course player, Progress, Schedule |
| `/field` | Field app | Missions, Mission detail, Check-in, Alerts |

The public site's pages are real URLs (`/services`, `/about`, …). The three
portals keep their app-style in-page navigation (sidebar / nav rail).

## Structure

```
index.html                 Vite entry
src/
  main.jsx                 App bootstrap (React Router)
  App.jsx                  Route definitions
  styles/
    global.css             Global styles + token imports
    tokens/                Design tokens (colors, typography, spacing, effects, fonts)
  assets/                  Logo marks
  design-system/           Ported UI components (Button, Badge, Card, Icon, Input,
                           Select, Checkbox, Radio, Switch, Tabs, Toast, Tooltip,
                           Dialog, IconButton, Tag) + index.js barrel
  pages/
    public/                Public site layout + Home/Services/About/Careers/Contact + data
    ManagementPortal.jsx
    TrainingPortal.jsx
    FieldApp.jsx
docs/
  design-system.md         Original design-system documentation (brand voice, visual
                           foundations, and font/icon substitution flags)
```

## Design system

Near-black charcoal surfaces, olive/khaki tactical accents, a single
blaze-orange accent, hard-edged corners, and a briefing-room type system
(Black Ops One / Oswald / Barlow / JetBrains Mono, loaded from Google Fonts).

The tokens are plain CSS custom properties in `src/styles/tokens/` and can be
consumed anywhere via `var(--token-name)`. See `docs/design-system.md` for the
full brand documentation. Fonts (Google Fonts) and icons (Heroicons) remain
open-source substitutes pending official brand assets — see the substitution
flags in that doc.
