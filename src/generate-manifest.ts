import { readdirSync, readFileSync, existsSync, writeFileSync } from "fs";
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

  // Nested structure: digests/YYYY-MM-DD/safety-source.md
  const entries: ManifestEntry[] = [];
  const dateDirs = readdirSync(digestsDir).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d));

  for (const date of dateDirs) {
    const dateDir = join(digestsDir, date);
    const files = readdirSync(dateDir).filter((f) => f.endsWith(".md"));
    if (files.length > 0) {
      entries.push({ date, files: files.sort() });
    }
  }

  entries.sort((a, b) => b.date.localeCompare(a.date));

  // Write manifest.json — store files as date/filename for URL construction
  const manifest = {
    generated: new Date().toISOString(),
    entries: entries.map((e) => ({
      date: e.date,
      files: e.files.map((f) => `${e.date}/${f}`),
    })),
  };
  writeFileSync(join(process.cwd(), "manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(`Manifest: ${entries.length} dates, written to manifest.json`);

  // Write RSS feed with actual digest content
  const feedItems = entries.slice(0, 30).map((e) => {
    const dailyFile = e.files.find((f) => f.includes("daily")) || e.files[0];
    let description = `AI Safety daily digest for ${e.date}`;
    const filePath = join(digestsDir, e.date, dailyFile);
    if (existsSync(filePath)) {
      const content = readFileSync(filePath, "utf-8");
      // Strip markdown heading, truncate, and XML-escape
      const plain = content
        .replace(/^#[^\n]*\n/, "")
        .slice(0, 2000)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      description = plain;
    }
    return `    <item>
      <title>AI Safety Digest - ${e.date}</title>
      <link>https://ygauthie.github.io/ai-safety-radar/#${e.date}/${dailyFile}</link>
      <pubDate>${new Date(e.date).toUTCString()}</pubDate>
      <description>${description}</description>
    </item>`;
  });

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>AI Safety Radar</title>
    <link>https://ygauthie.github.io/ai-safety-radar/</link>
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
