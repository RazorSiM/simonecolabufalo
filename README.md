# simonecolabufalo.com

Personal website of Simone Colabufalo. It is built with Nuxt 4, typed Nuxt Content collections, and UnoCSS using the Wind4 preset.

## Requirements

- Node.js 26
- pnpm 12

The repository includes a reproducible devenv environment:

```bash
devenv shell
pnpm install --frozen-lockfile
```

Without Nix, install Node.js 26 and pnpm 12, then run the same pnpm command. Node 26 no longer bundles Corepack; pnpm's supported installer is:

```bash
npx get-pnpm next-12
```

## Commands

| Command           | Purpose                                          |
| ----------------- | ------------------------------------------------ |
| `pnpm dev`        | Start the Nuxt development server                |
| `pnpm generate`   | Generate the static site in `.output/public`     |
| `pnpm preview`    | Preview the latest Nuxt build                    |
| `pnpm typecheck`  | Check Nuxt, Vue, and Content collection types    |
| `pnpm lint`       | Run Oxlint and Vize                              |
| `pnpm fmt:check`  | Check formatting with Oxfmt                      |
| `pnpm cf:preview` | Generate and upload a Cloudflare preview version |
| `pnpm cf:deploy`  | Generate and deploy to Cloudflare Workers        |

## Deployment

The generated site is deployed as an assets-only Cloudflare Worker. Nuxt Content queries run at build time, so no D1 database or runtime Worker code is required.

GitHub Actions checks every pull request, uploads same-repository pull requests to a version preview URL, and deploys pushes to `main`. Configure these repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

The Worker owns both `simonecolabufalo.com` and `www.simonecolabufalo.com` as custom domains.
