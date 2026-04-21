# Research Papers (2026-04-21)

## Key Papers

### 1. Jailbreaking and Safety Research

[**Different Paths to Harmful Compliance: Behavioral Side Effects and Mechanistic Divergence Across LLM Jailbreaks**](https://arxiv.org/abs/2604.18510v1) by Kabir & Tiganj compares three jailbreaking methods: harmful supervised fine-tuning, harmful RLVR, and refusal-suppressing abliteration. While all achieve high harmful compliance, they produce distinct behavioral profiles and internal failure modes. This research is critical for understanding how different attack vectors create different vulnerabilities in AI safety defenses.

[**LLM Safety From Within: Detecting Harmful Content with Internal Representations**](https://arxiv.org/abs/2604.18519v1) by Jiao et al. presents SIREN, a lightweight guard model that identifies safety neurons via linear probing across internal layers, rather than relying solely on terminal representations. The approach builds harmfulness detectors from LLM internals through adaptive layer weighting. This matters because it offers a more efficient approach to content filtering by leveraging the rich safety-relevant features distributed throughout model architectures.

[**Adversarial Humanities Benchmark: Results on Stylistic Robustness in Frontier Model Safety**](https://arxiv.org/abs/2604.18487v1) by Galisai et al. introduces AHB, which rewrites harmful tasks through humanities-style transformations while preserving intent, extending beyond single jailbreak operators to broader stylistic obfuscation. This benchmark is significant because it tests whether safety refusals survive shifts away from familiar harmful prompt forms, revealing gaps in current safety measures.

### 2. AI Alignment and Training Methods

[**Towards Disentangled Preference Optimization Dynamics Beyond Likelihood Displacement**](https://arxiv.org/abs/2604.18239v1) by Chen et al. presents a unified incentive-score decomposition revealing that diverse preference optimization objectives share identical local update directions, differing only in magnitude scaling. They show that likelihood displacement stems from misaligned incentives rather than fundamental limitations. This work is important because it provides theoretical foundations for improving RLHF by addressing the systematic suppression of chosen responses that occurs in current preference optimization.

[**When Can LLMs Learn to Reason with Weak Supervision?**](https://arxiv.org/abs/2604.18574v1) by Rahman et al. conducts a systematic empirical study across model families and reasoning domains under three weak supervision settings: scarce data, noisy rewards, and self-supervision. This research is essential for understanding the limits of RLVR as high-quality reward signals become increasingly difficult to construct for advanced model capabilities.

### 3. Mechanistic Understanding and Interpretability

[**Reasoning Models Know What's Important, and Encode It in Their Activations**](https://arxiv.org/abs/2604.18307v1) by Nikankin et al. investigates whether model activations contain information about step importance in reasoning chains, finding that activations predict removable steps better than surface-level textual features. This matters because it provides insights into how models internally process reasoning and could inform approaches for improving reasoning efficiency.

[**Latent Phase-Shift Rollback: Inference-Time Error Correction via Residual Stream Monitoring and KV-Cache Steering**](https://arxiv.org/abs/2604.18567v1) by Gupta & Kumar introduces LPSR, which monitors residual streams at critical layers to detect abrupt directional reversals and responds by rolling back KV-cache with steering vectors. This is significant because it addresses the fundamental problem of unrecoverable reasoning errors in language models by providing an online correction mechanism.

### 4. AI Governance and Ethics

[**Moving beyond Principles: Identifying Actionable AI Fairness Practices**](https://arxiv.org/abs/2604.18502v1) by Burtscher & Dolata addresses the principles-to-practice gap in AI fairness governance by developing actionable practices through discourse and thematic analysis. The work provides concrete guidance across the AI lifecycle rather than abstract ethical principles. This research is crucial because it translates high-level fairness concepts into implementable organizational practices.

[**The implicated scientist: on the role of AI researchers in the development of weapons systems**](https://arxiv.org/abs/2604.18380v1) by Volokhova & Hernandez-Garcia examines AI researchers' involvement in weapons development and the AI arms race, analyzing ethical responsibilities and potential consequences. This matters because it addresses the growing concern about AI technology's militarization and the scientific community's role in potentially harmful applications.

### 5. Embodied AI Safety

[**Using large language models for embodied planning introduces systematic safety risks**](https://arxiv.org/abs/2604.18463v1) by Zhang et al. introduces DESPITE, a benchmark with 12,279 tasks spanning physical and normative dangers, finding that even near-perfect planning ability doesn't ensure safety. The best-planning model produces dangerous plans on 28.3% of tasks despite failing on only 0.4% for validity. This research is vital because it reveals that planning competence and safety are fundamentally distinct capabilities in embodied AI systems.

These papers collectively highlight critical challenges in AI safety alignment, from understanding failure modes across different attack vectors to developing principled frameworks for safety evaluation and governance. The emergence of systematic safety risks in planning and the gap between reasoning ability and safety compliance underscore the complexity of building reliably safe AI systems.