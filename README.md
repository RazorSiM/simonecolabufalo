# One of my personal websites

Look at the [Content documentation](https://content-v2.nuxtjs.org/) to learn more.

## Setup

Enter the reproducible development environment:

```bash
devenv shell
pnpm install --frozen-lockfile
```

Devenv provides Node.js 22 and uses Corepack to select the pnpm version pinned in
`package.json`. It also provides `agent-browser` and Chromium for browser
automation from OpenCode; no separate browser download is required.

```bash
agent-browser open http://localhost:3000
agent-browser snapshot -i
agent-browser close
```

Without Nix, install Node.js 22, enable Corepack, and install the dependencies:

```bash
corepack enable
pnpm install --frozen-lockfile
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

Alternatively, start the configured devenv process directly:

```bash
devenv up
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.
