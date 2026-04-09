import type { LlmProvider } from "./types.js";
import { AnthropicProvider } from "./anthropic.js";
import { OpenRouterProvider } from "./openrouter.js";

export function createProvider(): LlmProvider {
  const provider = process.env.LLM_PROVIDER || "openrouter";

  switch (provider) {
    case "anthropic":
      return new AnthropicProvider();
    case "openrouter":
      return new OpenRouterProvider();
    default:
      throw new Error(`Unknown LLM_PROVIDER: ${provider}. Use "openrouter" or "anthropic".`);
  }
}

export type { LlmProvider } from "./types.js";
