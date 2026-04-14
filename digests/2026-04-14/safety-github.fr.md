# Activité GitHub (2026-04-14)

## Versions notables

Plusieurs versions importantes ont émergé dans l'écosystème de la sécurité et de l'évaluation de l'IA :

- **[µHALO v0.1.0-dev](https://github.com/XwhyZ-WHYLD/hfr0-muhalo/releases/tag/v0.1.0-dev)** — Une version de recherche initiale pour la détection de risque d'hallucination en temps d'exécution via l'analyse de dérive temporelle inter-token, incluant l'implémentation HDI (Indice de Dérive d'Hallucination) et l'évaluation sur les jeux de données TruthfulQA/HotpotQA.

- **[Styxx v2.0.1](https://github.com/fathom-lab/styxx/releases/tag/v2.0.1)** — Première version publique d'un système de provenance cognitive fournissant un suivi d'état cognitif en temps réel pour les agents LLM, offrant des capacités de proprioception via l'analyse de logprob.

- **[Open Bias v0.4.0](https://github.com/open-bias/open-bias/releases/tag/v0.4.0)** — Changements majeurs dans le framework d'évaluation de biais avec une configuration simplifiée de liste `evaluators` remplaçant plusieurs clés de configuration séparées.

## Discussions clés

### Problèmes de sécurité et de sûreté de l'IA

Un problème critique d'hygiène de sécurité a été soulevé dans le [cookbook d'Anthropic](https://github.com/anthropics/claude-cookbooks/issues/531), identifiant des schémas vulnérables dans le code d'exemple incluant des antipatterns de sécurité prêts à copier-coller et des configurations Docker s'exécutant en tant que root. Bien qu'il ne s'agisse pas de vulnérabilités dans les services d'Anthropic eux-mêmes, ces schémas dans les matériaux éducatifs pourraient propager des pratiques non sécurisées.

Le [projet NeMo Guardrails](https://github.com/NVIDIA-NeMo/Guardrails/issues/1786) a une demande de fonctionnalité ouverte pour l'export optionnel des décisions de protection pour des fins d'audit et de conformité, abordant une lacune clé dans l'infrastructure de gouvernance de l'IA où les décisions d'application de politique doivent être documentées pour la conformité réglementaire.

### Améliorations de l'évaluation et des tests de modèles

[Le harnais d'évaluation d'EleutherAI](https://github.com/EleutherAI/lm-evaluation-harness/pull/3702) a corrigé un crash critique dans les tâches à choix multiples BigBench lors du traitement de jeux de données à format mixte, améliorant la robustesse pour les benchmarks standard de capacité d'IA. De plus, [le support natif de Tensor Parallelism](https://github.com/EleutherAI/lm-evaluation-harness/pull/3692) a été ajouté pour les modèles HuggingFace, accélérant potentiellement les évaluations à grande échelle.

### Expansion de l'architecture des modèles

TransformerLens continue d'étendre le support d'interprétabilité avec de nouveaux adaptateurs d'architecture pour les modèles [InternLM2](https://github.com/TransformerLensOrg/TransformerLens/pull/1251), [XGLM](https://github.com/TransformerLensOrg/TransformerLens/pull/1250), [GPTBigCode](https://github.com/TransformerLensOrg/TransformerLens/pull/1248), et [Cohere](https://github.com/TransformerLensOrg/TransformerLens/pull/1247). Notamment, [le support bêta d'architecture SSM](https://github.com/TransformerLensOrg/TransformerLens/pull/1246) a été ajouté pour les modèles Mamba et Mamba 2, étendant les outils d'interprétabilité mécaniste aux modèles d'espace d'état.

## Outils émergents

### Surveillance d'état cognitif

La [bibliothèque Styxx](https://github.com/fathom-lab/styxx) introduit la classification d'état cognitif en temps réel pour les réponses LLM, catégorisant les sorties en raisonnement, refus, hallucination, et catégories hors-sujet utilisant l'analyse de logprob. Les améliorations récentes incluent [une meilleure gestion d'erreur](https://github.com/fathom-lab/styxx/pull/4) quand les logprobs ne sont pas disponibles.

### Infrastructure d'évaluation améliorée

[L'évaluation de robustesse de HELM](https://github.com/stanford-crfm/helm/pull/4193) a reçu une correction de bug pour les problèmes de précédence d'opérateur qui sautaient incorrectement les vérifications de groupe de métrique de robustesse, améliorant la fiabilité des évaluations de robustesse des modèles.

### Améliorations du flux de travail de développement

Plusieurs dépôts adoptent des pratiques de développement plus sécurisées, avec [OpenAI Evals](https://github.com/openai/evals/pull/1644) épinglant les hooks de pre-commit à des commits immuables plutôt qu'à des tags/branches mutables, réduisant les risques de chaîne d'approvisionnement dans les outils de développement.

Le cookbook d'Anthropic a ajouté un [nouveau guide pour créer des fichiers CLAUDE.md efficaces](https://github.com/anthropics/claude-cookbooks/pull/522), abordant le besoin croissant de documentation standardisée d'agent IA alors que l'adoption de Claude Code augmente.