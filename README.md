# Alexandre Perronnet

A minimal personal website built with Astro, TypeScript, and Tailwind CSS. Static HTML, one light theme, self-hosted Schibsted Grotesk, and no analytics or third-party client requests.

## Development

Use Node.js 24 and pnpm 12.5.1, pinned in `.node-version` and `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm prepare
pnpm dev
```

If your global pnpm cannot switch versions, use `npx --yes pnpm@12.5.1` instead of `pnpm`.

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Generate the static site in `dist/` |
| `pnpm preview` | Preview the production build |
| `pnpm check` | Type-check Astro, TypeScript, tests, and JavaScript configuration |
| `pnpm lint` | Check formatting and the default Ultracite rules |
| `pnpm format` | Apply safe formatting and lint fixes |
| `pnpm test` | Run eight focused tests with Node's built-in runner |
| `pnpm verify` | Run lint, type checks, tests, and the production build |

Husky installs through the standard `prepare` command. The hooks run lint-staged before commits and commitlint for Conventional Commit messages. `pnpm-workspace.yaml` only configures dependency build permissions; this is not a monorepo.

## Structure

```text
src/
  components/   Outbound links, footer, current ages, and visitor clock
  config/       Typed content and link destinations
  layouts/      HTML document, fonts, and SEO metadata
  lib/          Pure age, commit, and timezone helpers
  pages/        Homepage, 404, and robots.txt
  styles/       Tailwind theme and shared link styles
public/         Favicons and the static Open Graph image
tests/          Birthday, timezone, and commit-link edge cases
```

Edit `src/config/site.ts` for the biography, links, metadata, birth dates, and clock toggle. The `{age}` and `{blueAge}` placeholders display completed years and refresh in the browser; the build provides a fallback without JavaScript. Résumé links open Reactive Resume, where visitors can download the PDFs. External HTTPS links use `outbound-link.astro` to open a new tab with an accessible notice.

The clock uses the visitor's browser timezone, not their physical location. It refreshes once per minute without geolocation, cookies, storage, or a remote API. Both custom elements clear their timers when disconnected.

Design tokens live in `src/styles/global.css`. All components use kebab-case filenames. Internal imports always use the `#src/*` alias defined once in `package.json`; Astro, TypeScript, and the native Node test runner share that mapping. The page layout owns the common width, spacing, and main landmark, with an optional footer slot. Biome extends the default Ultracite preset without custom lint rules or overrides; the one additional option enables full Astro support, which Biome still marks experimental. A single strict Astro `tsconfig.json` also checks the tooling configurations.

The favicon files and `public/og.png` are static assets. Replace them directly when branding changes; the 1200×630 Open Graph image is not regenerated from the content configuration. There is no image-generation dependency or build script. Metadata includes canonical URLs, Open Graph/X cards, Person structured data, robots directives, and a sitemap.

The tests intentionally cover only date boundaries, daylight saving time, and commit validation. They need no test framework or extra dependency. There are no snapshot tests or browser-test framework to maintain.

## Vercel

A static Astro site needs neither a Vercel adapter nor a `vercel.ts` file. Import the repository and use these project settings:

- **Framework:** Astro; **output directory:** `dist`; **Node.js:** 24.x.
- **Install command:** `HUSKY=0 npx --yes pnpm@12.5.1 install --frozen-lockfile`.
- **Build command:** `npx --yes pnpm@12.5.1 verify`.
- Enable automatic exposure of Vercel system environment variables.
- Set the production domain to `alexperronnet.com`; keep the archive subdomains on their existing projects.

The explicit commands select the pinned package manager and run all checks before deployment. Update them alongside `packageManager` when upgrading pnpm. Hosting uses Vercel's default headers and caching; this repository adds no custom hosting configuration.

No application `.env` file or secrets are needed. Vercel provides `VERCEL_GIT_COMMIT_SHA` for the `Build <hash>` GitHub link and `VERCEL_ENV` to exclude previews from indexing. Local builds display `Build local`. The repository must be public for visitors to follow commit links. Canonical and sitemap URLs always use `site.url`; previews and the 404 page are marked `noindex`.

## Occasional audits

Run Lighthouse against a production preview when design or delivery changes; it is not a project dependency:

```sh
pnpm build
pnpm preview --host 127.0.0.1 --port 4322
npx lighthouse@latest http://127.0.0.1:4322/ --chrome-flags="--headless=new" --view
npx lighthouse@latest http://127.0.0.1:4322/ --preset=desktop --chrome-flags="--headless=new" --view
```

These commands require Chrome. Local scores are lab measurements; repeat the audit against the public URL after deployment.

For an environmental estimate, assess the deployed homepage on [EcoIndex](https://www.ecoindex.fr/). Nothing appears automatically: a dated text link can be added after a real result exists. No environmental score or badge script is currently included.
