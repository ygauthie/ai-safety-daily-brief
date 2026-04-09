# AI Safety Radar

Automated daily digest of AI safety research, policy, and developments. Inspired by [agents-radar](https://github.com/duanyytop/agents-radar).

## What it does

Runs daily via GitHub Actions to:
1. **Fetch** data from ArXiv, RSS feeds, GitHub repos, Hacker News, and AI org websites
2. **Summarize** using Claude to produce structured safety-focused digests
3. **Publish** to GitHub Pages as a static site with an RSS feed

## Sources

- **ArXiv**: AI safety, alignment, interpretability, governance papers
- **RSS**: Alignment Forum, LessWrong, AI safety newsletters
- **GitHub**: Key safety repos from Anthropic, OpenAI, DeepMind, etc.
- **Websites**: Anthropic, OpenAI, DeepMind blog posts (via sitemap crawling)
- **Hacker News**: AI safety and governance discussions

## Setup

1. Clone and install:
   ```bash
   pnpm install
   ```

2. Copy `.env.example` to `.env` and add your Anthropic API key:
   ```bash
   cp .env.example .env
   ```

3. Run locally:
   ```bash
   pnpm start
   ```

4. For GitHub Actions, add `ANTHROPIC_API_KEY` as a repository secret.

5. Enable GitHub Pages (deploy from branch, root `/`).

## Project Structure

```
src/
  index.ts          # Main daily pipeline
  weekly.ts         # Weekly rollup
  arxiv.ts          # ArXiv paper fetcher
  rss.ts            # RSS feed fetcher
  github.ts         # GitHub activity fetcher
  hn.ts             # Hacker News fetcher
  web.ts            # Website sitemap crawler
  prompts.ts        # LLM prompt templates
  report.ts         # LLM calling + file saving
  generate-manifest.ts  # Manifest + RSS feed generator
  config.ts         # Config loader
  providers/        # LLM provider abstraction
config.yml          # Data source configuration
index.html          # Single-page web frontend
digests/            # Generated digest files (committed by CI)
```

## Configuration

Edit `config.yml` to customize tracked repos, RSS feeds, ArXiv keywords, and websites.

## Languages

English by default. French support is prepared in the i18n system -- add `fr` to `config.yml` languages to enable.
