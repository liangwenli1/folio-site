# folio-site

The Folio marketing site and account pages: landing, sign-up and log-in, email verification, password reset, checkout, account and billing, invoices, team invitations (`/invite/?token=…`, from the invitation email), contact sales, docs and legal pages. English and Chinese (`/en/…`, `/zh/…`); `/` picks one from the browser language.

## Stack

Astro (static output) with small vanilla TypeScript scripts for the account pages. No UI framework. All data comes from folio-server; prices are read from `GET /plans`, so they are defined only on the server.

## Run locally

```sh
npm install
PUBLIC_API_URL=http://localhost:47110 npm run dev    # http://localhost:47120
```

folio-server must allow this origin (`SITE_ORIGINS`, default `http://localhost:47120`). In production, serve the site and the API on the same registrable domain (e.g. `example.com` and `api.example.com`) so the session cookie is sent.

| Variable | Default | Meaning |
|---|---|---|
| `PUBLIC_API_URL` | `http://localhost:47110` | folio-server base URL |
| `PUBLIC_DEV_NOTICE` | unset | `1` shows the "emails go to the local test inbox" hint on verification pages in a production build |
| `SITE_URL` | `http://localhost:47120` | Canonical site URL |

## Scripts

| Script | What it does |
|---|---|
| `npm run build` | Static build into `dist/` |
| `npm run check` | Astro and TypeScript diagnostics |
| `npm run api:types` | Regenerates `src/lib/api-schema.d.ts` from the server's OpenAPI document (`API_URL`, default `http://localhost:47110`) |
| `npm run test:e2e` | Playwright end-to-end tests. Needs a built site, a running folio-server with `DEV_TOOLS=1 MOCK_PAYMENTS=1` on `localhost:47110`, and the Mailpit inbox it sends to (`MAILPIT_URL`, default `http://folio-mailpit:8025`), where the tests read verification codes |

## Layout

- `src/i18n/en.ts`, `src/i18n/zh.ts`: all copy. `zh.ts` is typed against `en.ts`, so a missing key fails the type check.
- `src/pages/[lang]/…`: every page is generated once per language.
- `src/lib/api.ts`: API client; error codes from the server are translated through `errors` in the dictionaries.
- `src/styles/global.css`: design tokens (light and dark) and shared components; `landing.css` and `app.css` for the landing and account pages.
