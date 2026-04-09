# AI Safety Radar

## Architecture
- TypeScript + Node.js 22, pnpm, GitHub Actions + GitHub Pages
- Pipeline: fetch sources in parallel -> LLM summarization -> save markdown -> update manifest
- Single HTML frontend loads manifest.json and fetches markdown files on demand

## Key files
- `src/index.ts` - main daily pipeline entry point
- `src/weekly.ts` - weekly rollup entry point
- `src/prompts.ts` - all LLM prompt templates
- `config.yml` - data source configuration
- `index.html` - web frontend (single-page app)

## Commands
- `pnpm start` - run daily digest
- `pnpm weekly` - run weekly rollup
- `pnpm manifest` - regenerate manifest.json and feed.xml
- `pnpm typecheck` - TypeScript checking

## Conventions
- Source modules export a fetch function returning typed data
- Reports saved to `digests/YYYY-MM-DD/safety-{source}.md`
- English only for now; French i18n prepared via `src/i18n.ts`
