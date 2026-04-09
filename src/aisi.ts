import { loadConfig } from "./config.js";
import { daysAgo, formatDate } from "./date.js";

export interface AisiItem {
  institute: string;
  title: string;
  url: string;
  excerpt: string;
}

export async function fetchAisi(): Promise<AisiItem[]> {
  const config = loadConfig();
  const cutoff = formatDate(daysAgo(2));
  const items: AisiItem[] = [];

  for (const site of config.aisi_websites) {
    try {
      // Try RSS feed first if available
      if (site.rss) {
        const rssItems = await fetchRss(site.rss, site.name, site.keywords, cutoff);
        items.push(...rssItems);
      }

      // Also scrape the main page for recent content
      const pageItems = await scrapePage(site.url, site.name);
      items.push(...pageItems);
    } catch (e) {
      console.error(`[aisi] Error fetching ${site.name}:`, e);
    }
  }

  // Deduplicate by URL
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}

async function fetchRss(
  rssUrl: string,
  institute: string,
  keywords: string[] | undefined,
  cutoff: string
): Promise<AisiItem[]> {
  const items: AisiItem[] = [];
  try {
    const res = await fetch(rssUrl, {
      headers: { "User-Agent": "AI-Safety-Radar/1.0" },
    });
    if (!res.ok) return [];
    const xml = await res.text();

    // Parse items from RSS
    const itemBlocks = xml.split(/<item[\s>]/);
    for (const block of itemBlocks.slice(1, 21)) {
      const title = block.match(/<title[^>]*>(.*?)<\/title>/s)?.[1]?.replace(/<!\[CDATA\[(.*?)\]\]>/, "$1").trim() || "";
      const link = block.match(/<link[^>]*>(.*?)<\/link>/s)?.[1]?.trim() || "";
      const desc = block.match(/<description[^>]*>(.*?)<\/description>/s)?.[1]?.replace(/<!\[CDATA\[(.*?)\]\]>/, "$1").replace(/<[^>]+>/g, "").trim() || "";
      const pubDate = block.match(/<pubDate[^>]*>(.*?)<\/pubDate>/s)?.[1]?.trim();

      if (!title || !link) continue;

      // Date filter
      if (pubDate) {
        const d = new Date(pubDate);
        if (!isNaN(d.getTime()) && formatDate(d) < cutoff) continue;
      }

      // Keyword filter if specified
      if (keywords && keywords.length > 0) {
        const text = `${title} ${desc}`.toLowerCase();
        if (!keywords.some((kw) => text.includes(kw.toLowerCase()))) continue;
      }

      items.push({ institute, title, url: link, excerpt: desc.slice(0, 500) });
    }
  } catch (e) {
    console.error(`[aisi] RSS error for ${institute}:`, e);
  }
  return items;
}

async function scrapePage(url: string, institute: string): Promise<AisiItem[]> {
  const items: AisiItem[] = [];
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "AI-Safety-Radar/1.0" },
    });
    if (!res.ok) return [];
    const html = await res.text();

    // Extract links that look like news/blog/research posts
    const linkPattern = /<a\s[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gs;
    const baseUrl = new URL(url);
    const seen = new Set<string>();

    for (const match of html.matchAll(linkPattern)) {
      let href = match[1];
      const text = match[2].replace(/<[^>]+>/g, "").trim();

      if (!text || text.length < 15 || text.length > 300) continue;

      // Resolve relative URLs
      if (href.startsWith("/")) href = `${baseUrl.origin}${href}`;
      if (!href.startsWith("http")) continue;
      if (seen.has(href)) continue;
      seen.add(href);

      // Filter for news/research/blog/publication patterns
      const lowerHref = href.toLowerCase();
      const newsPatterns = ["/news", "/blog", "/post", "/research", "/publication", "/update", "/press", "/announce", "/report"];
      if (!newsPatterns.some((p) => lowerHref.includes(p))) continue;

      items.push({ institute, title: text, url: href, excerpt: "" });
    }
  } catch (e) {
    console.error(`[aisi] Scrape error for ${institute}:`, e);
  }
  return items.slice(0, 10);
}
