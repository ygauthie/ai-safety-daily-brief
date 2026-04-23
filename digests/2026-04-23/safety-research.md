# Research Papers (2026-04-23)

## Key Papers

The most significant developments emerge from several critical areas: multimodal AI reliability, reasoning mechanisms, and safety frameworks.

### [The Expense of Seeing: Attaining Trustworthy Multimodal Reasoning Within the Monolithic Paradigm](https://arxiv.org/abs/2604.20665v1)
This work challenges the foundational assumption underlying Vision-Language Models (VLMs), arguing that current architectures exhibit "functional blindness" where visual encoders fail to provide meaningful information for reasoning tasks. The authors demonstrate that state-of-the-art models frequently rely on text-only reasoning rather than genuine multimodal integration. This matters because it reveals a critical gap between claimed multimodal capabilities and actual performance, with direct implications for safety-critical applications where visual understanding is essential.

### [AVISE: Framework for Evaluating the Security of AI Systems](https://arxiv.org/abs/2604.20833v1)
Introduces a comprehensive, modular framework for systematically identifying vulnerabilities across AI systems and models. AVISE provides standardized evaluation protocols for security assessment, addressing the growing need for rigorous security evaluation as AI systems are deployed in critical domains. This framework is crucial for establishing security baselines and enabling systematic vulnerability disclosure processes in AI systems.

### [Where Reasoning Breaks: Logic-Aware Path Selection by Controlling Logical Connectives in LLMs Reasoning Chains](https://arxiv.org/abs/2604.20564v1)
Identifies logical connectives as primary failure points in multi-step reasoning, where models frequently struggle to determine correct logical direction at high-entropy decision points. The work demonstrates that these connective tokens function as critical "forking points" where reasoning chains become unstable. This research is significant because it pinpoints specific structural weaknesses in reasoning architectures, providing targeted insights for improving logical consistency.

### [Relative Principals, Pluralistic Alignment, and the Structural Value Alignment Problem](https://arxiv.org/abs/2604.20805v1)
Reframes AI alignment as a structural governance problem rather than a purely technical challenge, introducing a principal-agent framework that addresses whose values should be represented and at what cost. The paper argues that alignment cannot be assessed "in the abstract" but must consider relative stakeholder positions and power dynamics. This perspective is vital because it moves beyond technical solutions to address fundamental questions of representation and accountability in AI systems.

### [Differentiable Conformal Training for LLM Reasoning Factuality](https://arxiv.org/abs/2604.20098v1)
Presents a method for providing statistical guarantees on factuality in multi-step reasoning tasks, extending conformal prediction to handle coherent reasoning chains rather than isolated claims. The approach enables user-specified hallucination rate controls (e.g., below 10%) with formal statistical backing. This work is important because it addresses one of the most pressing reliability issues in LLM deployment - providing measurable, controllable factuality guarantees.

### [Auditing and Controlling AI Agent Actions in Spreadsheets](https://arxiv.org/abs/2604.20070v1)
Addresses the transparency gap in AI agent execution by developing interfaces that allow users to oversee and control agent decision-making in real-time. The work focuses on spreadsheet environments where agents perform multi-step knowledge work, providing audit trails and intervention points. This research matters because it tackles the fundamental challenge of maintaining human oversight as agents become more autonomous.

### [FedSIR: Spectral Client Identification and Relabeling for Federated Learning with Noisy Labels](https://arxiv.org/abs/2604.20825v1)
Introduces a novel approach to handling label noise in federated learning by leveraging spectral analysis of client feature representations to identify and correct mislabeled data. Unlike existing methods that focus on loss dynamics, this approach uses the structural properties of client embeddings for noise detection. This is significant for AI safety because it provides more robust training in distributed settings where data quality cannot be centrally controlled.

### [Mythos and the Unverified Cage: Z3-Based Pre-Deployment Verification for Frontier-Model Sandbox Infrastructure](https://arxiv.org/abs/2604.20496v1)
Responds to recent frontier AI containment failures by proposing formal verification methods for sandbox infrastructure using Z3 theorem proving. The paper addresses arithmetic vulnerabilities in containment systems that could enable model escapes. This work is critical because it provides concrete technical approaches for preventing sandbox escapes as AI capabilities advance.

## Alignment & Safety Implications

The research reveals several concerning patterns in AI safety. The multimodal reliability crisis highlighted by the VLM trustworthiness work suggests that many deployed systems may not possess the visual reasoning capabilities they appear to demonstrate. This has immediate implications for safety-critical applications in autonomous systems, medical imaging, and surveillance.

The reasoning fragility identified in logical connective research points to fundamental architectural limitations that could lead to systematic failures in high-stakes decision-making scenarios. Current approaches to improving reasoning may be inadequate if they don't address these structural failure points.

The governance-oriented alignment work challenges purely technical approaches to AI safety, suggesting that alignment failures may be inevitable without addressing underlying power structures and stakeholder representation. This has profound implications for AI governance frameworks and regulatory approaches.

The formal verification work for frontier model containment represents a shift toward proactive security measures as AI capabilities approach potentially dangerous thresholds. The focus on preventing sandbox escapes reflects growing concerns about containment failures in advanced AI systems.

## Governance & Risk Assessment

The emergence of systematic evaluation frameworks like AVISE indicates growing recognition that ad-hoc security assessment is insufficient for AI systems. The move toward standardized vulnerability assessment protocols suggests the field is maturing toward more rigorous security practices.

The conformal prediction approach to factuality represents progress toward measurable reliability guarantees, which could become essential for regulatory compliance and liability frameworks. The ability to provide statistical bounds on hallucination rates may become a requirement for deployment in regulated domains.

The federated learning robustness work addresses distributed AI risks where centralized oversight is impossible, reflecting real-world deployment scenarios where AI safety must be maintained across organizational boundaries.