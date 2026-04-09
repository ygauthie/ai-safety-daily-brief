export interface LlmProvider {
  summarize(prompt: string, maxTokens?: number): Promise<string>;
}
