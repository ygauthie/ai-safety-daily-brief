import type { RssItem } from "./rss.js";
import { daysAgo } from "./date.js";

const API_URL = "https://actually-relevant-api.onrender.com/api/stories";

const AI_SAFETY_KEYWORDS = [
  "ai safety", "ai alignment", "ai governance", "ai risk", "ai regulation",
  "ai ethics", "ai oversight", "alignment", "existential risk", "x-risk",
  "large language model", "llm", "frontier ai", "agi", "superintelligence",
  "interpretability", "jailbreak", "red teaming", "deepfake", "hallucination",
  "openai", "anthropic", "deepmind", "google ai", "ai act", "ai policy",
  "machine learning safety", "beneficial ai",
];

interface Story {
  id: string;
  title: string;
  titleLabel?: string;
  sourceUrl: string;
  sourceTitle?: string;
  datePublished?: string;
  summary?: string;
  relevance?: number;
}

function isAiSafetyRelevant(story: Story): boolean {
  const text = [story.title, story.titleLabel, story.summary]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return AI_SAFETY_KEYWORDS.some((kw) => text.includes(kw));
}

export async function fetchActuallyRelevant(): Promise<RssItem[]> {
  const since = daysAgo(2);
  let res: Response;
  try {
    res = await fetch(`${API_URL}?limit=50`);
  } catch (e) {
    console.error("ActuallyRelevant fetch failed:", e);
    return [];
  }
  if (!res.ok) {
    console.error(`ActuallyRelevant fetch failed: ${res.status}`);
    return [];
  }

  const data = (await res.json()) as { data?: Story[] };
  const stories = data.data ?? [];

  const items: RssItem[] = stories
    .filter((s) => {
      if (!isAiSafetyRelevant(s)) return false;
      if (s.datePublished && new Date(s.datePublished) < since) return false;
      return true;
    })
    .map((s) => ({
      source: "Actually Relevant",
      title: s.title,
      link: s.sourceUrl,
      description: s.summary ?? "",
      pubDate: s.datePublished ?? "",
    }));

  console.log(`  Actually Relevant: ${items.length} AI safety items`);
  return items;
}
