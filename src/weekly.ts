import "dotenv/config";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { today, daysAgo, formatDate } from "./date.js";
import { weeklyRollupPrompt } from "./prompts.js";
import { generateReport, translateReport, saveReport } from "./report.js";
import { loadConfig } from "./config.js";

async function main() {
  const date = today();
  const config = loadConfig();
  const startDate = formatDate(daysAgo(7));
  const dateRange = `${startDate} to ${date}`;

  console.log(`\n=== AI Safety Daily Brief - Weekly Digest (${dateRange}) ===\n`);

  // Collect English daily digests from the past week
  const dailies: string[] = [];
  for (let i = 7; i >= 0; i--) {
    const d = formatDate(daysAgo(i));
    const path = join(process.cwd(), "digests", d, "safety-daily.md");
    if (existsSync(path)) {
      dailies.push(readFileSync(path, "utf-8"));
    }
  }

  if (dailies.length === 0) {
    console.log("No daily digests found - skipping.");
    return;
  }

  console.log(`Found ${dailies.length} daily digests, generating weekly summary...`);
  const weekly = await generateReport(
    weeklyRollupPrompt(dailies.join("\n\n---\n\n"), dateRange),
    8192
  );

  const weeklyContent = `# AI Safety Weekly Digest (${dateRange})\n\n${weekly}`;
  saveReport(date, "safety-weekly.md", weeklyContent);

  // Translate to French if enabled
  if (config.languages.includes("fr")) {
    console.log("Translating weekly digest to French...");
    const translated = await translateReport(weeklyContent);
    saveReport(date, "safety-weekly.fr.md", translated);
  }

  console.log("Weekly digest complete!");
}

main().catch((e) => {
  console.error("Fatal error:", e);
  process.exit(1);
});
