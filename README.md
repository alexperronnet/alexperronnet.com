# Alexandre Perronnet

Source for [www.alexperronnet.com](https://www.alexperronnet.com), a static personal website built with Astro, TypeScript, and Tailwind CSS. The site serves pre-rendered HTML, self-hosted Schibsted Grotesk, and small browser scripts for ages and local time. Vercel Web Analytics records production page views. There is no application backend.

## Requirements

- Node.js 24.x, specified in `.node-version` and `package.json`.
- pnpm 12.5.1, pinned in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Use `npx --yes pnpm@12.5.1` in place of `pnpm` if the installed package manager cannot select the pinned version. Installation runs the Husky `prepare` lifecycle script to register Git hooks.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Generate the production site in `dist/` |
| `pnpm preview` | Serve the existing production build locally |
| `pnpm check` | Type-check Astro, TypeScript, tests, and JavaScript configuration |
| `pnpm lint` | Check formatting and lint rules with Ultracite/Biome |
| `pnpm format` | Apply safe formatting and lint fixes |
| `pnpm test` | Run the native Node.js test suite |
| `pnpm verify` | Run lint, type checks, tests, and a production build |

The pre-commit hook runs lint-staged. The commit-msg hook validates Conventional Commit messages. Run `pnpm verify` before pushing changes.

## Project structure

```text
src/
  components/   Outbound links, footer, current ages, and visitor clock
  config/       Typed site content, links, and metadata
  layouts/      Shared page structure and document metadata
  lib/          Age, commit hash, and timezone helpers
  pages/        Homepage, custom 404, and robots.txt
  styles/       Tailwind theme and shared styles
public/         Favicons and the static Open Graph image
tests/          Date boundaries, timezone behavior, and commit validation
```

Astro generates static HTML; no Vercel adapter or server runtime is required. Tailwind runs through its Vite plugin. `@astrojs/sitemap` generates the sitemap during the build.

Internal imports use `#src/*`, defined in `package.json`, with explicit file extensions. Components use kebab-case filenames. A single `tsconfig.json` extends Astro's strictest preset and enables JavaScript configuration checks. Biome uses the default Ultracite core preset with experimental Astro parsing enabled. `pnpm-workspace.yaml` configures dependency build permissions; this repository contains one package.

## Content and presentation

Edit `src/config/site.ts` to update the biography, birth dates, social profiles, résumé destinations, archive links, production URL, and carbon report. Design tokens and shared link styles live in `src/styles/global.css`. The page layout owns the content width, spacing, main landmark, and optional footer slot.

- `{age}` and `{blueAge}` are rendered at build time, then refreshed in the browser. With JavaScript disabled, the build-time values remain visible.
- The visitor clock uses the browser's timezone, not geolocation. It refreshes once per minute; both custom elements clear timers when disconnected.
- External HTTPS links use `outbound-link.astro`, which opens a new tab with `noopener noreferrer` and an accessible notice. Résumé links lead to Reactive Resume, where PDFs can be downloaded.
- Favicons and `public/og.png` are static assets. The 1200 × 630 social image must be updated separately when its content changes.

### Carbon report

The footer links to the [Website Carbon report](https://www.websitecarbon.com/website/alexperronnet-com/). Its **A+** rating was assessed on **2026-09-20**. The assessment date is included in the link's accessible label and tooltip.

This is a manually maintained estimate for the tested homepage, not a live measurement or certification. No badge script or API is loaded. After substantial changes to page weight or hosting, test the production URL again and update `carbon.rating`, `carbon.testedOn`, and `carbon.href` in the site configuration. Keep the date and rating above in sync with the result.

## SEO

`site.url` is the single source for the production origin: `https://www.alexperronnet.com`. It supplies canonical URLs, Open Graph URLs, Person structured data, robots.txt, and the sitemap. Metadata also includes a description and Open Graph/X image cards.

The custom 404 has `noindex, nofollow`. When `VERCEL_ENV=preview`, pages also receive `noindex, nofollow` and robots.txt disallows crawling. These directives control indexing; they do not restrict access.

## Web Analytics

The shared layout includes the official `@vercel/analytics/astro` component when `VERCEL_ENV=production`. It records page views on pages using that layout, including the 404 page. Local development, local builds, and preview deployments do not initialize analytics.

Enable Web Analytics in the Vercel project dashboard, then deploy. Vercel provides the tracking script and ingestion endpoints on the site's own origin. No API key, custom event tracking, or additional server integration is required.

After deployment, visit the public site and check the project's Analytics tab. Data can take a short time to appear, and content blockers may prevent collection. The analytics script adds network requests; the dated carbon assessment above reflects the version tested and should be reviewed after changes.

## Deployment

The GitHub repository is connected to the Vercel project `alexperronnet.com`. Pushes to the production branch, `main`, trigger production deployments; other branches can receive preview deployments through the Git integration.

Use these Vercel project settings:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Node.js version | 24.x |
| Output directory | `dist` |
| Install command | `HUSKY=0 npx --yes pnpm@12.5.1 install --frozen-lockfile` |
| Build command | `npx --yes pnpm@12.5.1 verify` |
| Production branch | `main` |

Keep the commands aligned with `packageManager` when upgrading pnpm. Vercel manages HTTPS, static asset delivery, and caching; there is no custom hosting configuration in this repository.

### Domains

- `www.alexperronnet.com` serves the current production deployment.
- `alexperronnet.com` permanently redirects to `https://www.alexperronnet.com`, preserving paths and query parameters. Configure this in Vercel's domain settings.
- `v1.alexperronnet.com` and `v2.alexperronnet.com` remain assigned to their separate archive projects.

### Environment

No application secrets or local `.env` file are required. Enable automatic exposure of Vercel system environment variables:

| Variable | Usage |
| --- | --- |
| `VERCEL_GIT_COMMIT_SHA` | Builds the public GitHub commit link after validating the full SHA; absent locally, where the footer shows `Build local` |
| `VERCEL_ENV` | Excludes preview deployments from indexing and enables analytics only in production |

The GitHub repository must remain public for visitors to follow the Build link.

### Release verification

After pushing, wait for the matching commit's production deployment to reach `Ready`, then check:

1. The Build link matches the deployed commit.
2. The apex domain redirects to `www` and HTTPS is valid.
3. Canonical metadata, `/robots.txt`, and `/sitemap-index.xml` use the `www` origin.
4. `/og.png`, favicons, résumé links, and the carbon report are accessible.
5. An unknown path returns HTTP 404 and the custom error page.

## Performance audits

Lighthouse is an occasional audit tool, not a project dependency. With Chrome installed, run it against production:

```sh
npx lighthouse@latest https://www.alexperronnet.com/ --chrome-flags="--headless=new" --view
npx lighthouse@latest https://www.alexperronnet.com/ --preset=desktop --chrome-flags="--headless=new" --view
```

For local audits, run `pnpm build` and `pnpm preview`, then use the preview URL. Lighthouse scores are lab measurements and vary with the test environment. Keep generated reports in the ignored `artifacts/` directory.
