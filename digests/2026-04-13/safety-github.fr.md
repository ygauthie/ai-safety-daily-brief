# Activité GitHub (2026-04-13)

## Discussions clés

Le [**LM Evaluation Harness**](https://github.com/EleutherAI/lm-evaluation-harness) continue de présenter des développements importants liés à la sécurité. Une discussion particulièrement remarquable soulève des questions fondamentales sur [**si l'évaluation mesure les capacités ou l'adaptation à des données ambiguës**](https://github.com/EleutherAI/lm-evaluation-harness/issues/3698), soulignant que les benchmarks peuvent en partie mesurer comment les modèles s'adaptent à des ensembles de données probabilistes ou sémantiquement ambigus plutôt que de véritables capacités. Cela a des implications significatives pour les méthodologies d'évaluation de sécurité.

Plusieurs corrections techniques abordent des problèmes de fiabilité d'évaluation qui pourraient impacter les évaluations de sécurité :
- [**Bug d'agrégation médiane**](https://github.com/EleutherAI/lm-evaluation-harness/pull/3696) où la fonction retournait des éléments arbitraires au lieu de médianes statistiques
- [**Correction du crash BigBench**](https://github.com/EleutherAI/lm-evaluation-harness/pull/3702) pour les tâches aux formats mixtes
- [**Améliorations de la gestion des séquences d'arrêt**](https://github.com/EleutherAI/lm-evaluation-harness/pull/3700) pour les modèles de raisonnement afin d'éviter la troncature prématurée

Le dépôt **Anthropic Cookbook** montre un accent continu sur les techniques d'évaluation liées à la sécurité avec un nouveau [**notebook d'évaluation de dilution d'instructions**](https://github.com/anthropics/claude-cookbooks/pull/528) qui démontre comment les frameworks de raisonnement peuvent s'effondrer de ~100% à 0-30% de précision lorsqu'ils sont intégrés dans des prompts complexes. Le dépôt a également ajouté des cookbooks pour [**l'investigation autonome de bugs**](https://github.com/anthropics/claude-cookbooks/pull/527) et [**l'enrichissement de threat intelligence**](https://github.com/anthropics/claude-cookbooks/pull/496), présentant des capacités agentiques avancées avec des implications potentielles à double usage.

**NVIDIA NeMo Guardrails** subit des changements architecturaux significatifs pour se découpler des dépendances LangChain à travers un effort de refactorisation en plusieurs parties, incluant des [**systèmes de types agnostiques au framework**](https://github.com/NVIDIA-NeMo/Guardrails/pull/1745) et des [**registres de frameworks**](https://github.com/NVIDIA-NeMo/Guardrails/pull/1759). Cette modularisation pourrait améliorer la flexibilité du framework pour les applications de sécurité.

## Versions notables

[**µHALO v0.1.0-dev**](https://github.com/XwhyZ-WHYLD/hfr0-muhalo/releases/tag/v0.1.0-dev) introduit une approche novatrice de détection d'hallucination à travers l'analyse de dérive de timing inter-token en temps réel. La version inclut l'implémentation HDI (Hallucination Drift Index) avec un échafaudage d'évaluation pour les benchmarks TruthfulQA et HotpotQA, offrant un outil potentiellement précieux pour la surveillance de sécurité en temps réel.

[**ISC-Bench v0.0.4**](https://github.com/wuyoscar/ISC-Bench/releases/tag/v0.0.4) a amélioré sa documentation avec des exemples de guide TVD (Toxic Value Detection) utilisant LlamaGuard et un support multilingue, rendant les benchmarks de sécurité plus accessibles aux chercheurs internationaux.

[**Yuragi v0.4.0**](https://github.com/hinanohart/yuragi/releases/tag/v0.4.0) a été publié, bien que les changements spécifiques liés à la sécurité ne soient pas détaillés dans les informations disponibles.

## Outils émergents

Le projet **Veritas OS** démontre un développement extensif axé sur la sécurité avec plusieurs corrections de durcissement adressant des problèmes potentiels de sécurité et de fiabilité :
- [**Assainissement des scores non-finis**](https://github.com/veritasfuji-japan/veritas_os/pull/1318) pour prévenir les échecs de sérialisation JSON
- [**Gestion des valeurs de risque booléennes**](https://github.com/veritasfuji-japan/veritas_os/pull/1319) dans les exports PROV de trust-log
- [**Durcissement de protection contre la répétition de nonce**](https://github.com/veritasfuji-japan/veritas_os/pull/1317) pour prévenir les contournements de sécurité
- [**Validation de payload SSE**](https://github.com/veritasfuji-japan/veritas_os/pull/1316) avec comportement fail-closed pour les énumérations invalides

Le projet **Guardian Pattern LLM** a reçu des mises à jour de dépendances à travers plusieurs packages, suggérant une maintenance active de ce framework axé sur la sécurité.

**HELM** (Holistic Evaluation of Language Models) a vu d'importantes corrections de bugs incluant des [**problèmes de précédence d'opérateurs**](https://github.com/stanford-crfm/helm/pull/4193) dans les vérifications de métriques de robustesse et des [**corrections de correspondance de motifs**](https://github.com/stanford-crfm/helm/pull/4192) qui pourraient affecter la précision d'évaluation.

L'ajout du **benchmark CRUXEval** au LM Evaluation Harness fournit une [**évaluation bidirectionnelle du raisonnement de code Python**](https://github.com/EleutherAI/lm-evaluation-harness/pull/3699), testant à la fois les capacités de prédiction de sortie et de génération d'entrée—important pour évaluer la sécurité de la génération de code.