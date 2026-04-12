# Activité GitHub (2026-04-12)

## Discussions clés

### Problèmes de sécurité et d'évaluation des modèles

**Dilution d'instructions dans l'évaluation des LLM** : Le cookbook d'Anthropic a reçu une [pull request significative](https://github.com/anthropics/claude-cookbooks/pull/528) traitant de la dilution d'instructions - un phénomène où les frameworks de raisonnement atteignent ~100% de précision avec des prompts ciblés mais s'effondrent à 0-30% lorsqu'ils sont intégrés dans des environnements de production complexes. Cela met en évidence des lacunes critiques entre les performances de benchmarks et la sécurité de déploiement en conditions réelles.

**Bugs dans les frameworks d'évaluation des LLM** : Le harness d'évaluation d'EleutherAI a eu deux corrections critiques - un [bug d'agrégation médiane](https://github.com/EleutherAI/lm-evaluation-harness/pull/3696) qui retournait des éléments arbitraires au lieu de véritables médianes statistiques, et une [erreur de calcul de précision](https://github.com/EleutherAI/lm-evaluation-harness/pull/3695) qui fusionnait silencieusement des questions de contextes différents. Ces bugs soulèvent des questions sur la fiabilité des évaluations de modèles existantes.

**Effondrement par répétition de tokens de Gemma 4** : Un [rapport de bug préoccupant](https://github.com/google-deepmind/gemma/issues/622) décrit les deux variantes de Gemma 4 présentant un effondrement par répétition au niveau des tokens lors de générations longues, où les modèles se retrouvent bloqués dans des boucles qui consomment tout le budget de génération. Cela suggère des problèmes de sécurité potentiels avec la fiabilité des modèles lors d'interactions prolongées.

### Recherche en sécurité de l'IA et gouvernance

**Préoccupations méthodologiques d'évaluation** : Une [discussion stimulante](https://github.com/EleutherAI/lm-evaluation-harness/issues/3698) questionne si les évaluations actuelles mesurent une capacité authentique ou simplement l'adaptation à des données d'entraînement ambiguës, soulevant des questions fondamentales sur la façon dont nous évaluons la sécurité et l'alignment des systèmes d'IA.

**Conformité basée sur les preuves** : NeMo Guardrails a reçu une [demande de fonctionnalité](https://github.com/NVIDIA-NeMo/Guardrails/issues/1781) pour des artefacts de preuve portables qui pourraient soutenir la conformité avec des réglementations comme l'AI Act de l'UE, soulignant le besoin croissant de systèmes de sécurité IA auditables.

**Vérification d'état déterministe** : QWED-AI développe une [fonctionnalité AgentStateGuard](https://github.com/QWED-AI/qwed-verification/issues/138) pour la vérification déterministe des transitions d'état d'agent et l'exécution atomique, abordant les lacunes critiques dans la prévisibilité et la sécurité du comportement des agents.

## Outils émergents

### Outils de développement axés sur la sécurité

**Évaluation de la dilution d'instructions** : Anthropic a publié un [notebook complet](https://github.com/anthropics/claude-cookbooks/pull/528) pour évaluer les effets de dilution d'instructions, fournissant aux chercheurs des outils pour évaluer à quel point les instructions de sécurité maintiennent leur efficacité dans des scénarios de déploiement complexes.

**Investigation autonome de bugs** : Un nouveau [cookbook d'agents gérés](https://github.com/anthropics/claude-cookbooks/pull/527) démontre des workflows d'investigation de bugs autonomes de bout en bout, montrant comment les agents IA peuvent être déployés en toute sécurité pour des tâches techniques complexes avec un sandboxing approprié.

**Framework TVD personnalisé ISC-Bench** : Le projet ISC-Bench a ajouté des [matériels tutoriels](https://github.com/wuyoscar/ISC-Bench/pull/81) pour construire des scénarios Task+Validator+Data personnalisés, permettant aux chercheurs de créer des évaluations de sécurité spécifiques à un domaine en utilisant de vrais modèles et datasets.

### Améliorations de frameworks

**Migration Pydantic v2 pour NeMo Guardrails** : Une [migration complète](https://github.com/NVIDIA-NeMo/Guardrails/pull/1783) a mis à jour NeMo Guardrails pour utiliser les modèles de validation Pydantic v2 modernes, éliminant les avertissements de dépréciation et améliorant la maintenabilité du framework.

**Types LLM agnostiques au framework** : NeMo Guardrails développe des [systèmes de types canoniques](https://github.com/NVIDIA-NeMo/Guardrails/pull/1745) pour réduire la dépendance aux frameworks ML spécifiques, rendant les guardrails de sécurité plus portables entre différents environnements de déploiement.

**Systèmes de vérification basés sur PostgreSQL** : Le projet Veritas OS a considérablement étendu son intégration PostgreSQL avec des [tests de contention](https://github.com/veritasfuji-japan/veritas_os/pull/1298), des [métriques d'observabilité](https://github.com/veritasfuji-japan/veritas_os/pull/1299), et une [automatisation de sauvegarde/récupération](https://github.com/veritasfuji-japan/veritas_os/pull/1300), démontrant des approches de niveau entreprise pour la vérification des systèmes IA et les pistes d'audit.

## Versions notables

**cc-safe-setup v30.0.0** : Publication d'[outils de sécurité complets](https://github.com/yurukusa/cc-safe-setup/releases/tag/v30.0.0) incluant 655 hooks de sécurité, 28 outils web, et un nouvel Hook Gap Analyzer pour identifier les configurations de sécurité manquantes.

**ISC-Bench v0.0.4** : Publication d'une [documentation mise à jour](https://github.com/wuyoscar/ISC-Bench/releases/tag/v0.0.4) avec support multilingue, exemples de walkthrough TVD, et matériels FAQ améliorés pour les chercheurs en sécurité travaillant sur des scénarios d'auto-compromission indirecte.