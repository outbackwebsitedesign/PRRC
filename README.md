# PRRC — Paramilitary Response and Rescue Corps

Website and operational portals for **PRRC**, a specialized tactical security,
search & rescue, and disaster-response unit. Tagline: **"Courage in Crisis."**

**React + Vite** frontend, **Express + Prisma + SQLite** backend. This replaces
the original DesignCraft prototype (`*.dc.html` + `support.js` runtime) with a
standard, buildable web app while keeping the design identical. All content
(missions, requests, personnel, reports, courses, lessons, certifications,
schedule, services, jobs, alerts, stats, contact details, field-terminal status)
is stored in the database and served over an API — nothing is hardcoded in the
components.

## Getting started

```bash
npm install            # installs deps and generates the Prisma client
npm run db:push        # create the SQLite database from the schema
npm run db:seed        # seed it with the PRRC content
npm run dev            # start API (:3001) + Vite dev server (:5173) together
```

Then open http://localhost:5173. The Vite dev server proxies `/api/*` to the
Express server.

Other scripts:

```bash
npm run build     # production build to dist/
npm start         # run the API server; it also serves the built dist/ on :3001
npm run db:reset  # wipe + recreate + reseed the database
npm run db:studio # open Prisma Studio to browse/edit data
```

## Backend & database

- **`prisma/schema.prisma`** — the data model: one table per content type
  (Service + ServicePoint, Stat, Value, Job, Sector, ContactInfo, Mission,
  Request, Report, Personnel, Course, Lesson, Certification, ScheduleItem,
  Alert, FieldStatus).
- **`prisma/seed.js`** — seeds every table with the original content.
- **`server/index.js`** — a small Express API exposing read endpoints under
  `/api` (e.g. `/api/missions?scope=field`, `/api/stats?group=home`). In
  production it also serves the built `dist/`.
- **`src/api/client.js`** — the frontend fetch helper + `useApi` hook that every
  page uses to load its data.

SQLite is used for zero-config local development. To move to Postgres, change
the `provider` in `prisma/schema.prisma` to `postgresql` and point
`DATABASE_URL` (in `.env`) at your server — the models and API are unchanged.
The committed `.env` holds only the local SQLite path and API port (no secrets).

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
prisma/
  schema.prisma            Database schema (one model per content type)
  seed.js                  Seeds every table with the PRRC content
server/
  index.js                 Express API (serves /api and, in prod, dist/)
src/
  main.jsx                 App bootstrap (React Router)
  App.jsx                  Route definitions
  api/client.js            fetch helper + useApi hook
  styles/
    global.css             Global styles + token imports
    tokens/                Design tokens (colors, typography, spacing, effects, fonts)
  assets/                  Logo marks
  design-system/           Ported UI components (Button, Badge, Card, Icon, Input,
                           Select, Checkbox, Radio, Switch, Tabs, Toast, Tooltip,
                           Dialog, IconButton, Tag) + index.js barrel
  pages/
    public/                Public site layout + Home/Services/About/Careers/Contact
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
