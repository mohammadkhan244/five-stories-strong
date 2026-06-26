# Five Stories Strong

Landing page for the **Five Stories in Five Weeks** writing cohort by [Modern Myths](https://modernmyths.co).

**Live URL:** https://five-stories-strong.pages.dev *(update once Cloudflare Pages is connected)*

## Stack

- [TanStack Start](https://tanstack.com/start) — SSR React framework
- [Vite](https://vitejs.dev) + [Tailwind CSS v4](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com) / shadcn components
- Deploys to **Cloudflare Pages** via `wrangler`

## Local dev

```bash
bun install
bun run dev
```

## Deploy

This repo is connected to Cloudflare Pages. Every push to `main` triggers a new deployment automatically.

To deploy manually:

```bash
bun run build
npx wrangler pages deploy dist
```
