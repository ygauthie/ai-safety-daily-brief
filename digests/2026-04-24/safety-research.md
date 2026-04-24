# Research Papers (2026-04-24)

## Key Papers

The most significant AI safety developments include several critical findings about alignment failures, evaluation challenges, and governance gaps:

**[Alignment has a Fantasia Problem](https://arxiv.org/abs/2604.21827v1)** identifies a fundamental misalignment between how AI systems are trained and how humans actually interact with them. The authors show that when AI systems treat incomplete or evolving prompts as complete expressions of intent, they can appear helpful while actually being misaligned with users' true needs. This reveals a core challenge for alignment research that goes beyond traditional approaches.

**[Evaluating large language models for accuracy incentivizes hallucinations](https://www.nature.com/articles/s41586-026-10549-w)** presents peer-reviewed evidence that current evaluation methodologies may be counterproductive for safety. This Nature paper suggests that optimizing for accuracy metrics can actually encourage models to produce more confident but incorrect outputs, highlighting fundamental problems with how we assess AI system reliability.

**[Stealthy Backdoor Attacks against LLMs Based on Natural Style Triggers](https://arxiv.org/abs/2604.21700v1)** demonstrates sophisticated attack vectors that use natural writing styles rather than obvious trigger patterns to compromise LLM behavior. The authors show these attacks can reliably inject attacker-specified content while remaining undetectable through current security measures, representing a significant advance in understanding LLM vulnerabilities.

**[Transient Turn Injection: Exposing Stateless Multi-Turn Vulnerabilities in Large Language Models](https://arxiv.org/abs/2604.21860v1)** reveals how adversaries can exploit stateless moderation systems by distributing harmful intent across multiple isolated interactions. This attack technique successfully evades safety measures in both commercial and open-source models, exposing critical gaps in current safety architectures.

**[Brief chatbot interactions produce lasting changes in human moral values](https://arxiv.org/abs/2604.21430v1)** provides empirical evidence that even short conversations with AI systems can persistently alter human moral judgments. In controlled experiments, participants showed measurable shifts in moral evaluations after discussing scenarios with directive AI agents, raising serious concerns about AI's influence on human decision-making.

**[Bounding the Black Box: A Statistical Certification Framework for AI Risk Regulation](https://arxiv.org/abs/2604.21854v1)** addresses the regulatory gap by proposing quantitative methods for certifying AI system safety before deployment. The framework provides statistical bounds on system behavior without requiring access to internal model parameters, offering a practical path for implementing safety requirements under emerging regulations like the EU AI Act.

**[Dialect vs Demographics: Quantifying LLM Bias from Implicit Linguistic Signals vs. Explicit User Profiles](https://arxiv.org/abs/2604.21152v1)** disentangles different sources of bias in LLM behavior, showing that implicit linguistic signals (like dialect) can trigger discriminatory responses even when explicit demographic information is absent. This finding complicates bias mitigation strategies that focus only on obvious demographic markers.

**[When Prompts Override Vision: Prompt-Induced Hallucinations in LVLMs](https://arxiv.org/abs/2604.21911v1)** demonstrates how large vision-language models can be manipulated to ignore visual evidence in favor of textual prompts, even when the prompts contradict clear visual information. Through their HalluScope benchmark, the authors show this represents a systematic vulnerability across multiple model architectures.

## Evaluation and Measurement Challenges

Several papers highlight fundamental problems with current AI evaluation approaches. **[Measuring Opinion Bias and Sycophancy via LLM-based Coercion](https://arxiv.org/abs/2604.21564v1)** introduces coercive prompting techniques to reveal hidden political positions in AI assistants that normally give evasive responses to opinion questions. **[MathDuels: Evaluating LLMs as Problem Posers and Solvers](https://arxiv.org/abs/2604.21916v1)** proposes self-play evaluation where models both create and solve math problems, revealing capabilities that static benchmarks miss due to ceiling effects.

## Technical Safety Advances

On the positive side, several papers present promising safety techniques. **[Probabilistic Verification of Neural Networks via Efficient Probabilistic Hull Generation](https://arxiv.org/abs/2604.21556v1)** develops methods for computing guaranteed safety probability ranges when inputs are affected by probabilistic disturbances. **[CAP: Controllable Alignment Prompting for Unlearning in LLMs](https://arxiv.org/abs/2604.21251v1)** offers a non-invasive approach to selective knowledge removal that works with closed-source models, addressing practical constraints in deploying safety measures.

## Governance and Implementation

**[Engaged AI Governance: Addressing the Last Mile Challenge Through Internal Expert Collaboration](https://arxiv.org/abs/2604.21554v1)** tackles the practical challenge of translating regulatory requirements into software development practices through empirical research within an AI startup. **[A pragmatic classification of AI incident trajectories](https://arxiv.org/abs/2604.21412v1)** provides a framework for distinguishing between different types of AI safety incidents, helping separate reporting artifacts from genuine safety trends.

These developments collectively highlight the complexity of AI safety challenges, from fundamental alignment problems to practical implementation hurdles, while also demonstrating progress in measurement techniques and technical solutions.