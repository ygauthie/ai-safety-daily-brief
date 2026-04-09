# ArXiv - AI Safety Papers

# AI Safety Research Digest - April 9, 2026

## Key Papers

### [TraceSafe: A Systematic Assessment of LLM Guardrails on Multi-Step Tool-Calling Trajectories](https://arxiv.org/abs/2604.07223v1)
Introduces TraceSafe-Bench, the first comprehensive benchmark for evaluating safety guardrails during multi-step tool-use trajectories rather than just final outputs. This addresses a critical gap as LLMs evolve into autonomous agents where intermediate execution steps become the primary vulnerability surface.

### [AgentCity: Constitutional Governance for Autonomous Agent Economies via Separation of Power](https://arxiv.org/abs/2604.07007v1)
Proposes a constitutional framework to address the "Logic Monopoly" problem in autonomous agent economies - where collective agent behavior becomes opaque and ungovernable. Introduces separation of powers principles to maintain human oversight in decentralized AI systems.

### [How to sketch a learning algorithm](https://arxiv.org/abs/2604.07328v1)
Presents a novel data deletion scheme for predicting model behavior when specific training data is excluded, with implications for privacy, interpretability, and understanding data influence. Achieves vanishing error in the deep learning regime through efficient precomputation methods.

### [Why teaching resists automation in an AI-inundated era: Human judgment, non-modular work, and the limits of delegation](https://arxiv.org/abs/2604.07285v1)
Argues against the modularity assumptions underlying AI automation of teaching, demonstrating that instructional work requires integrated human judgment that cannot be effectively decomposed into separable AI-delegatable tasks.

### [Designing Safe and Accountable GenAI as a Learning Companion with Women Banned from Formal Education](https://arxiv.org/abs/2604.07253v1)
Examines safety and privacy requirements for GenAI systems supporting women in restrictive, surveilled contexts. Provides critical insights for designing responsible AI systems in vulnerable populations and high-risk environments.

### [Exclusive Unlearning](https://arxiv.org/abs/2604.06154v1)
Proposes a paradigm shift in machine unlearning from targeting specific harmful content to "exclusive unlearning" - broadly forgetting harmful knowledge while preserving beneficial capabilities. Addresses the scalability challenges of comprehensive harm removal in LLMs.

### [A comparative analysis of machine learning models in SHAP analysis](https://arxiv.org/abs/2604.07258v1)
Systematically evaluates how different ML model architectures affect SHAP-based explanations, providing crucial insights for deploying explainable AI in high-stakes applications where understanding prediction rationales is essential for trust and accountability.

## Trends

**Agent Safety and Governance**: Multiple papers address the governance challenges of autonomous AI agents, from constitutional frameworks (AgentCity) to tool-use safety evaluation (TraceSafe). This reflects growing recognition that agent autonomy creates new classes of safety risks.

**Interpretability and Transparency**: Strong focus on making AI systems more interpretable through various approaches - from SHAP analysis to foundation model interpretation (DINO-QPM) to interactive analysis tools (ConceptTracer).

**Human-AI Collaboration**: Several papers explore how to maintain meaningful human agency in AI systems, whether in educational contexts, team collaboration frameworks, or user interface design.

**Privacy-Preserving Methods**: Emerging techniques for handling sensitive data, from structural representations for CSAI research to data deletion methods for privacy protection.

**Robustness and Alignment**: Continued work on making AI systems more robust to distribution shifts, better aligned with human values (personalized reward modeling), and resistant to harmful outputs.

## Significance

**Rating: High**

This collection represents significant advances in critical AI safety areas. The TraceSafe benchmark addresses a fundamental gap in evaluating agent safety, while AgentCity tackles the unprecedented challenge of governing autonomous agent economies. The combination of theoretical frameworks (constitutional AI governance), practical evaluation methods (safety benchmarking), and real-world applications (vulnerable population support) demonstrates the field's maturation toward addressing deployment-ready safety challenges. The emphasis on interpretability and human-AI collaboration suggests the community is moving beyond purely technical solutions toward sociotechnical approaches that preserve human agency while leveraging AI capabilities.