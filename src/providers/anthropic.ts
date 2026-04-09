import Anthropic from "@anthropic-ai/sdk";
import type { LlmProvider } from "./types.js";

export class AnthropicProvider implements LlmProvider {
  private client: Anthropic;
  private model: string;

  constructor() {
    this.client = new Anthropic();
    this.model = process.env.LLM_MODEL || "claude-sonnet-4-6";
  }

  async summarize(prompt: string, maxTokens = 4096): Promise<string> {
    const response = await this.client.messages.create({
      model: this.model,
      max_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
    });
    const block = response.content[0];
    if (block.type === "text") return block.text;
    return "";
  }
}
