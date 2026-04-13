# GitHub Activity (2026-04-13)

## Key Discussions

The [**LM Evaluation Harness**](https://github.com/EleutherAI/lm-evaluation-harness) continues to see important safety-relevant developments. A particularly noteworthy discussion raises fundamental questions about [**whether evaluation measures capability or adaptation to ambiguous data**](https://github.com/EleutherAI/lm-evaluation-harness/issues/3698), highlighting that benchmarks may partly measure how models adapt to probabilistic or semantically ambiguous datasets rather than true capabilities. This has significant implications for safety assessment methodologies.

Several technical fixes address evaluation reliability issues that could impact safety assessments:
- [**Median aggregation bug**](https://github.com/EleutherAI/lm-evaluation-harness/pull/3696) where the function returned arbitrary elements instead of statistical medians
- [**BigBench crash fix**](https://github.com/EleutherAI/lm-evaluation-harness/pull/3702) for mixed-format tasks
- [**Stop sequence handling**](https://github.com/EleutherAI/lm-evaluation-harness/pull/3700) improvements for reasoning models to prevent premature truncation

The **Anthropic Cookbook** repository shows continued focus on safety-relevant evaluation techniques with a new [**instruction dilution evaluation notebook**](https://github.com/anthropics/claude-cookbooks/pull/528) that demonstrates how reasoning frameworks can collapse from ~100% to 0-30% accuracy when embedded in complex prompts. The repository also added cookbooks for [**autonomous bug investigation**](https://github.com/anthropics/claude-cookbooks/pull/527) and [**threat intelligence enrichment**](https://github.com/anthropics/claude-cookbooks/pull/496), showcasing advanced agentic capabilities with potential dual-use implications.

**NVIDIA NeMo Guardrails** is undergoing significant architectural changes to decouple from LangChain dependencies through a multi-part refactoring effort, including [**framework-agnostic type systems**](https://github.com/NVIDIA-NeMo/Guardrails/pull/1745) and [**framework registries**](https://github.com/NVIDIA-NeMo/Guardrails/pull/1759). This modularization could improve the framework's flexibility for safety applications.

## Notable Releases

[**µHALO v0.1.0-dev**](https://github.com/XwhyZ-WHYLD/hfr0-muhalo/releases/tag/v0.1.0-dev) introduces a novel approach to hallucination detection through runtime inter-token timing drift analysis. The release includes HDI (Hallucination Drift Index) implementation with evaluation scaffolding for TruthfulQA and HotpotQA benchmarks, offering a potentially valuable tool for real-time safety monitoring.

[**ISC-Bench v0.0.4**](https://github.com/wuyoscar/ISC-Bench/releases/tag/v0.0.4) enhanced its documentation with TVD (Toxic Value Detection) walkthrough examples using LlamaGuard and multilingual support, making safety benchmarking more accessible to international researchers.

[**Yuragi v0.4.0**](https://github.com/hinanohart/yuragi/releases/tag/v0.4.0) was released, though specific safety-relevant changes are not detailed in the available information.

## Emerging Tools

The **Veritas OS** project demonstrates extensive safety-focused development with multiple hardening fixes addressing potential security and reliability issues:
- [**Non-finite score sanitization**](https://github.com/veritasfuji-japan/veritas_os/pull/1318) to prevent JSON serialization failures
- [**Boolean risk value handling**](https://github.com/veritasfuji-japan/veritas_os/pull/1319) in trust-log PROV exports
- [**Nonce replay protection hardening**](https://github.com/veritasfuji-japan/veritas_os/pull/1317) to prevent security bypasses
- [**SSE payload validation**](https://github.com/veritasfuji-japan/veritas_os/pull/1316) with fail-closed behavior for invalid enums

The **Guardian Pattern LLM** project received dependency updates across multiple packages, suggesting active maintenance of this safety-focused framework.

**HELM** (Holistic Evaluation of Language Models) saw important bug fixes including [**operator precedence issues**](https://github.com/stanford-crfm/helm/pull/4193) in robustness metric checks and [**pattern matching corrections**](https://github.com/stanford-crfm/helm/pull/4192) that could affect evaluation accuracy.

The **CRUXEval benchmark** addition to LM Evaluation Harness provides [**bidirectional Python code reasoning evaluation**](https://github.com/EleutherAI/lm-evaluation-harness/pull/3699), testing both output prediction and input generation capabilities—important for assessing code generation safety.