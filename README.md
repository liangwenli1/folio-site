# folio-site

The Folio marketing site and account pages: landing, sign-up and log-in, email verification, password reset, checkout, account and billing, invoices, team invitations (`/invite/?token=…`, from the invitation email), contact sales, docs and legal pages. English and Chinese (`/en/…`, `/zh/…`); `/` picks one from the browser language.

## Stack

Astro (static output) with small vanilla TypeScript scripts for the account pages. No UI framework. All data comes from folio-server; prices are read from `GET /plans`, so they are defined only on the server.

## Run locally

```sh
npm install
PUBLIC_API_URL=http://localhost:47110 npm run dev    # http://localhost:47120
```

folio-server must allow this origin (`SITE_ORIGINS`, default `http://localhost:47120`). In production the site and the API share one origin: the Docker image's nginx serves the site and passes `/api/` on to the API (see below).

| Variable | Default | Meaning |
|---|---|---|
| `PUBLIC_API_URL` | `http://localhost:47110` | folio-server base URL |
| `PUBLIC_DEV_NOTICE` | unset | `1` shows the "emails go to the local test inbox" hint on verification pages in a production build |
| `SITE_URL` | `http://localhost:47120` | Canonical site URL |
| `PUBLIC_DESKTOP_REPO` | unset | GitHub repository (`owner/name`) whose latest release has the installers; the download page links to `Folio-Setup-x64.exe` and `Folio-arm64.dmg` there. Unset, the download buttons say "Coming soon" |
| `PUBLIC_DESKTOP_VERSION` | unset | That release's version (e.g. `0.1.0`), shown on the download page; unset, the version line is left out |
| `PUBLIC_DESKTOP_RELEASED` | unset | That release's date (`YYYY-MM-DD`), shown next to the version |

## Scripts

| Script | What it does |
|---|---|
| `npm run build` | Static build into `dist/` |
| `npm run check` | Astro and TypeScript diagnostics |
| `npm run api:types` | Regenerates `src/lib/api-schema.d.ts` from the server's OpenAPI document (`API_URL`, default `http://localhost:47110`) |
| `npm run test:e2e` | Playwright end-to-end tests. Needs a built site, a running folio-server with `MOCK_PAYMENTS=1` on `localhost:47110`, and the Mailpit inbox it sends to (`MAILPIT_URL`, default `http://folio-mailpit:8025`), where the tests read verification codes. With `SITE_URL` and `API_URL` set (e.g. `http://localhost:8080` and `http://localhost:8080/api`), they run against a deployment instead |

## Docker image

`Dockerfile` builds the site (`PUBLIC_API_URL=/api`) and serves it with nginx on port 8080 (`deploy/nginx.conf`), which passes `/api/` on to the API container (`server:47110`, re-resolved through Docker's DNS) with streaming for live updates and uploads up to 100 MB. It is meant to sit behind Cloudflare: the visitor's address is taken from `CF-Connecting-IP` only when the connection comes from one of Cloudflare's ranges, downloaded from cloudflare.com when the image is built (rebuild to pick up changes). Build arguments: `SITE_URL`, `PUBLIC_DESKTOP_REPO`, `PUBLIC_DESKTOP_VERSION`, `PUBLIC_DESKTOP_RELEASED`, and `BUILD_IMAGE` for building behind a TLS-inspecting proxy. How it is deployed is in folio-server's README ("Deploy").

## Layout

- `src/i18n/en.ts`, `src/i18n/zh.ts`: all copy. `zh.ts` is typed against `en.ts`, so a missing key fails the type check.
- `src/pages/[lang]/…`: every page is generated once per language.
- `src/lib/api.ts`: API client; error codes from the server are translated through `errors` in the dictionaries.
- `src/styles/global.css`: design tokens (light and dark) and shared components; `landing.css` and `app.css` for the landing and account pages.
