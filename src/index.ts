import "dotenv/config";
import { today } from "./date.js";
import { fetchArxiv } from "./arxiv.js";
import { fetchRssFeeds } from "./rss.js";
import { fetchGithub } from "./github.js";
import { fetchHackerNews } from "./hn.js";
import { fetchWebsites } from "./web.js";
import { fetchAisi } from "./aisi.js";
import { fetchJournals } from "./journals.js";
import {
  researchPrompt,
  analysisPolicyPrompt,
  communityToolsPrompt,
  dailyRollupPrompt,
} from "./prompts.js";
import { generateReport, translateReport, saveReport } from "./report.js";
import { loadConfig } from "./config.js";

async function main() {
  const date = today();
  const config = loadConfig();
  console.log(`\n=== AI Safety Daily Brief - ${date} ===\n`);

  // Phase 1: Fetch all data in parallel
  console.log("Fetching data from all sources...");
  const [arxivData, rssData, githubData, hnData, webData, aisiData, journalData] = await Promise.all([
    fetchArxiv().catch((e) => {
      console.error("ArXiv fetch failed:", e);
      return [];
    }),
    fetchRssFeeds().catch((e) => {
      console.error("RSS fetch failed:", e);
      return [];
    }),
    fetchGithub().catch((e) => {
      console.error("GitHub fetch failed:", e);
      return [];
    }),
    fetchHackerNews().catch((e) => {
      console.error("HN fetch failed:", e);
      return [];
    }),
    fetchWebsites().catch((e) => {
      console.error("Web fetch failed:", e);
      return [];
    }),
    fetchAisi().catch((e) => {
      console.error("AISI fetch failed:", e);
      return [];
    }),
    fetchJournals().catch((e) => {
      console.error("Journals fetch failed:", e);
      return [];
    }),
  ]);

  // Merge data into 3 groups
  const researchData = [...arxivData.map((d) => ({ ...d, _source: "arxiv" })), ...journalData.map((d) => ({ ...d, _source: "journal" }))];
  const analysisPolicyData = [...rssData, ...webData, ...aisiData.map((d) => ({ source: d.institute, title: d.title, link: d.url, description: d.excerpt, pubDate: "", _source: "aisi" }))];
  const communityToolsData = [...hnData.map((d) => ({ ...d, _source: "hn" })), ...githubData.map((d) => ({ ...d, _source: "github" }))];

  console.log(
    `Fetched: ${arxivData.length} papers, ${journalData.length} journal articles, ` +
      `${rssData.length + webData.length} blog/org articles, ${aisiData.length} AISI items, ` +
      `${hnData.length} HN stories, ${githubData.length} GitHub items`
  );

  // Phase 2: Generate English reports (3 sections in parallel)
  console.log("\nGenerating English reports...");
  const sections: string[] = [];

  const reports = await Promise.all([
    researchData.length > 0
      ? generateReport(researchPrompt(JSON.stringify(researchData, null, 2), date))
      : Promise.resolve(""),
    analysisPolicyData.length > 0
      ? generateReport(analysisPolicyPrompt(JSON.stringify(analysisPolicyData, null, 2), date))
      : Promise.resolve(""),
    communityToolsData.length > 0
      ? generateReport(communityToolsPrompt(JSON.stringify(communityToolsData, null, 2), date))
      : Promise.resolve(""),
  ]);

  const [researchReport, analysisPolicyReport, communityToolsReport] = reports;

  // Collect English files for translation
  const enFiles: Array<{ filename: string; content: string }> = [];

  if (researchReport) {
    const content = `# Research Papers (${date})\n\n${researchReport}`;
    saveReport(date, "safety-research.md", content);
    enFiles.push({ filename: "safety-research.md", content });
    sections.push(`## Research Papers [Tier 1-2]\n\n${researchReport}`);
  }
  if (analysisPolicyReport) {
    const content = `# Analysis & Policy (${date})\n\n${analysisPolicyReport}`;
    saveReport(date, "safety-analysis.md", content);
    enFiles.push({ filename: "safety-analysis.md", content });
    sections.push(`## Analysis & Policy [Tier 1-2]\n\n${analysisPolicyReport}`);
  }
  if (communityToolsReport) {
    const content = `# Community & Tools (${date})\n\n${communityToolsReport}`;
    saveReport(date, "safety-community.md", content);
    enFiles.push({ filename: "safety-community.md", content });
    sections.push(`## Community & Tools [Tier 3]\n\n${communityToolsReport}`);
  }

  // Phase 3: Generate daily rollup
  if (sections.length > 0) {
    console.log("Generating daily executive summary...");
    const rollup = await generateReport(
      dailyRollupPrompt(sections.join("\n\n---\n\n"), date),
      6144
    );
    const dailyContent = `# Daily Brief (${date})\n\n${rollup}`;
    saveReport(date, "safety-daily.md", dailyContent);
    enFiles.push({ filename: "safety-daily.md", content: dailyContent });
  } else {
    console.log("No data fetched - skipping report generation.");
  }

  // Phase 4: Translate to French if enabled
  if (config.languages.includes("fr") && enFiles.length > 0) {
    console.log("\nTranslating reports to French...");
    await Promise.all(
      enFiles.map(async ({ filename, content }) => {
        const translated = await translateReport(content);
        const frFilename = filename.replace(".md", ".fr.md");
        saveReport(date, frFilename, translated);
      })
    );
  }

  console.log("\nDone!");
}

main().catch((e) => {
  console.error("Fatal error:", e);
  process.exit(1);
});
