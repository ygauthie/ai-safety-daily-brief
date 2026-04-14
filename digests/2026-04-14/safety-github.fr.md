# Activité GitHub (2026-04-14)

## Discussions clés

Plusieurs discussions critiques liées à la sécurité émergent dans les cadres de recherche et de gouvernance de l'IA :

**Évolution des Guardrails** : Le projet [NVIDIA NeMo Guardrails](https://github.com/NVIDIA-NeMo/Guardrails) subit des changements architecturaux significatifs avec les [efforts de découplage de LangChain](https://github.com/NVIDIA-NeMo/Guardrails/pull/1770) et une nouvelle [demande de fonctionnalité pour l'export d'audit et de conformité](https://github.com/NVIDIA-NeMo/Guardrails/issues/1786) des décisions de guardrails. Cela reflète une demande croissante des entreprises pour la transparence dans les systèmes de sécurité de l'IA.

**Hygiène de sécurité dans les AI Cookbooks** : Le cookbook d'Anthropic a reçu une [analyse de sécurité mettant en évidence des patterns vulnérables](https://github.com/anthropics/claude-cookbooks/issues/531) dans le code d'exemple, incluant des configurations Dockerfile s'exécutant en tant que root et des patterns vulnérables prêts à copier-coller. Bien qu'il ne s'agisse pas de vulnérabilités dans les services d'Anthropic eux-mêmes, cela souligne l'importance des pratiques de codage sécurisé dans les ressources de développement IA.

**Améliorations de l'infrastructure d'évaluation** : Le [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) traite des bugs critiques, notamment les [crashes BigBench multiple-choice](https://github.com/EleutherAI/lm-evaluation-harness/pull/3702) et les problèmes de dépendances. Une [révision majeure 0.5](https://github.com/EleutherAI/lm-evaluation-harness/pull/3703) est en cours, indiquant une évolution significative de l'infrastructure.

## Versions notables

**Open Bias v0.4.0** : Le [projet open-bias a publié la v0.4.0](https://github.com/open-bias/open-bias/releases/tag/v0.4.0) avec des changements disruptifs dans l'architecture de configuration, remplaçant les configs engine/policy/judge par une approche de liste `evaluators` unifiée. Cela suggère une maturation des frameworks d'évaluation de biais.

**Agent Guardrails v0.19.4** : [Agent-guardrails a livré la v0.19.4](https://github.com/logi-cmd/agent-guardrails/releases/tag/v0.19.4) avec des fonctionnalités de visibilité OSS Pro et un guidage de plan de preuve amélioré, indiquant une avancée dans l'outillage de sécurité des agents IA.

**Styxx v2.0.1** : [Fathom Lab a publié styxx v2.0.1](https://github.com/fathom-lab/styxx/releases/tag/v2.0.1), introduisant des "certificats de provenance cognitive" pour la surveillance en temps réel de l'état cognitif des LLM—une approche novatrice de l'observabilité et de la sécurité de l'IA.

**Director AI v3.14.0** : [Director AI a publié la v3.14.0](https://github.com/anulum/director-ai/releases/tag/v3.14.0) présentant un RAG avancé avec 6 stratégies de récupération modulaires et un "Swarm Guardian" pour la sécurité multi-agents, représentant une avancée significative dans les mécanismes de sécurité RAG.

## Outils émergents

**Détection d'hallucinations** : Le [projet µHALO a publié la v0.1.0-dev](https://github.com/XwhyZ-WHYLD/hfr0-muhalo/releases/tag/v0.1.0-dev), implémentant la détection du risque d'hallucination en temps d'exécution via l'analyse de dérive temporelle inter-tokens—une approche potentiellement révolutionnaire pour la détection d'hallucination en temps réel.

**Support d'architecture de modèles** : TransformerLens étend rapidement le support d'architectures avec de nouveaux adaptateurs pour [InternLM2](https://github.com/TransformerLensOrg/TransformerLens/pull/1251), [XGLM](https://github.com/TransformerLensOrg/TransformerLens/pull/1250), [GPTBigCode](https://github.com/TransformerLensOrg/TransformerLens/pull/1248), [Cohere](https://github.com/TransformerLensOrg/TransformerLens/pull/1247), et les [architectures SSM (Mamba)](https://github.com/TransformerLensOrg/TransformerLens/pull/1246), élargissant considérablement les capacités de recherche en interprétabilité.

**Conformité EU AI Act** : Un nouveau [serveur MCP de conformité EU AI Act](https://github.com/CSOAI-ORG/eu-ai-act-compliance-mcp/pull/1) a été déployé, fournissant des orientations structurées pour la conformité réglementaire dans les systèmes IA.

**Framework de détection de sécurité** : Le [projet Detektor](https://github.com/Meisterware/detektor/pull/11) a formalisé son modèle de découverte interne pour la représentation normalisée des problèmes de sécurité, indiquant une maturation des outils de scan de sécurité IA.