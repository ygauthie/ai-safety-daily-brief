import { readdirSync, existsSync, statSync, writeFileSync } from "fs";
import { join } from "path";

interface ManifestEntry {
  date: string;
  files: string[];
}

function main() {
  const digestsDir = join(process.cwd(), "digests");
  if (!existsSync(digestsDir)) {
    console.log("No digests directory found.");
    return;
  }

  const entries: ManifestEntry[] = [];

  const dirs = readdirSync(digestsDir)
    .filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d))
    .sort()
    .reverse();

  for (const dir of dirs) {
    const fullPath = join(digestsDir, dir);
    if (!statSync(fullPath).isDirectory()) continue;

    const files = readdirSync(fullPath)
      .filter((f) => f.endsWith(".md"))
      .sort();

    if (files.length > 0) {
      entries.push({ date: dir, files });
    }
  }

  // Write manifest.json
  const manifest = { generated: new Date().toISOString(), entries };
  writeFileSync(join(process.cwd(), "manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(`Manifest: ${entries.length} dates, written to manifest.json`);

  // Write RSS feed
  const feedItems = entries.slice(0, 30).map((e) => {
    const dailyFile = e.files.find((f) => f.includes("daily")) || e.files[0];
    return `    <item>
      <title>AI Safety Digest - ${e.date}</title>
      <link>https://yvan.github.io/ai-safety-radar/#${e.date}/${dailyFile}</link>
      <pubDate>${new Date(e.date).toUTCString()}</pubDate>
      <description>AI Safety daily digest for ${e.date}</description>
    </item>`;
  });

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>AI Safety Radar</title>
    <link>https://yvan.github.io/ai-safety-radar/</link>
    <description>Daily AI safety research, policy, and development digest</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${feedItems.join("\n")}
  </channel>
</rss>`;

  writeFileSync(join(process.cwd(), "feed.xml"), feed);
  console.log("RSS feed written to feed.xml");
}

main();
