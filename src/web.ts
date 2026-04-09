import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";
import { loadConfig } from "./config.js";

export interface WebArticle {
  source: string;
  title: string;
  url: string;
  excerpt: string;
}

interface WebState {
  [source: string]: string[];
}

const STATE_FILE = join(process.cwd(), "digests", "web-state.json");

function loadState(): WebState {
  if (existsSync(STATE_FILE)) {
    return JSON.parse(readFileSync(STATE_FILE, "utf-8"));
  }
  return {};
}

function saveState(state: WebState): void {
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

export async function fetchWebsites(): Promise<WebArticle[]> {
  const config = loadConfig();
  const state = loadState();
  const articles: WebArticle[] = [];

  for (const site of config.websites) {
    try {
      const knownUrls = new Set(state[site.name] || []);
      const sitemapUrls = await fetchSitemap(site.sitemap, site.include_patterns);

      const newUrls = sitemapUrls.filter((u) => !knownUrls.has(u));
      console.log(`[web] ${site.name}: ${newUrls.length} new URLs found`);

      for (const url of newUrls.slice(0, 10)) {
        try {
          const article = await fetchArticleContent(url, site.name);
          if (article) articles.push(article);
          await new Promise((r) => setTimeout(r, 300));
        } catch {
          console.error(`[web] Failed to fetch ${url}`);
        }
      }

      // Update state with all known URLs
      state[site.name] = [...new Set([...Array.from(knownUrls), ...sitemapUrls])];
    } catch (e) {
      console.error(`[web] Sitemap error for ${site.name}:`, e);
    }
  }

  saveState(state);
  return articles;
}

async function fetchSitemap(url: string, includePatterns: string[]): Promise<string[]> {
  const res = await fetch(url, {
    headers: { "User-Agent": "AI-Safety-Radar/1.0" },
  });
  if (!res.ok) return [];
  const xml = await res.text();

  const urls: string[] = [];
  const locMatches = xml.matchAll(/<loc>(.*?)<\/loc>/g);
  for (const m of locMatches) {
    const loc = m[1].trim();
    // Check if URL matches any include pattern
    if (includePatterns.some((p) => loc.includes(p))) {
      urls.push(loc);
    }
    // Also check for nested sitemaps
    if (loc.endsWith(".xml")) {
      try {
        const nested = await fetchSitemap(loc, includePatterns);
        urls.push(...nested);
      } catch {
        // Skip nested sitemap errors
      }
    }
  }

  return urls;
}

async function fetchArticleContent(url: string, source: string): Promise<WebArticle | null> {
  const res = await fetch(url, {
    headers: { "User-Agent": "AI-Safety-Radar/1.0" },
  });
  if (!res.ok) return null;
  const html = await res.text();

  // Extract title
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/s);
  const title = titleMatch ? titleMatch[1].replace(/\s+/g, " ").trim() : url;

  // Extract main content text
  const mainMatch = html.match(/<(?:main|article)[^>]*>(.*?)<\/(?:main|article)>/s);
  const contentHtml = mainMatch ? mainMatch[1] : "";
  const excerpt = contentHtml
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 500);

  if (!excerpt || excerpt.length < 50) return null;

  return { source, title, url, excerpt };
}
