# Activité GitHub (12 avril 2026)

## Discussions clés

### Méthodologie d'évaluation et fiabilité

La communauté de la sécurité de l'IA est aux prises avec des questions fondamentales sur l'intégrité de l'évaluation. Une discussion stimulante dans [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness/issues/3698) demande si les benchmarks mesurent de véritables capacités ou simplement « l'adaptation à des données ambiguës ». Cela se rattache à plusieurs bugs critiques traités dans les frameworks d'évaluation :

- Le framework HELM avait des [bugs de correspondance de motifs regex](https://github.com/stanford-crfm/helm/pull/4192) qui renvoyaient des résultats incorrects lors du traitement des sorties de modèles
- LM Evaluation Harness a découvert que leur [fonction d'agrégation médiane](https://github.com/EleutherAI/lm-evaluation-harness/pull/3696) renvoyait des éléments arbitraires au lieu de véritables médianes
- Une [erreur de regroupement dans l'évaluation MultiRC](https://github.com/EleutherAI/lm-evaluation-harness/pull/3695) fusionnait silencieusement des questions de contextes différents

Ces problèmes techniques soulignent comment les bugs d'évaluation peuvent systématiquement biaiser notre compréhension des capacités des modèles—une préoccupation critique pour la sécurité de l'IA où l'évaluation précise des capacités guide les décisions de gestion des risques.

### Problèmes de sécurité et de robustesse des modèles

Les modèles Gemma 4 de Google DeepMind connaissent un [effondrement inquiétant de répétition de tokens lors de la génération longue](https://github.com/google-deepmind/gemma/issues/622), affectant à la fois les variantes dense 31B et mixture-of-experts 26B. Cela représente un échec de robustesse significatif qui pourrait impacter la sécurité du déploiement, particulièrement dans les applications nécessitant une génération longue fiable.

Les cookbooks d'Anthropic révèlent un [bug de faux positif dans la notation basée sur LLM](https://github.com/anthropics/claude-cookbooks/issues/497), démontrant comment les systèmes d'évaluation automatisés peuvent échouer de manières subtiles qui pourraient masquer de véritables problèmes de sécurité ou créer une fausse confiance dans les performances du modèle.

## Outils émergents

### Suivi d'instructions et ingénierie de prompts

Anthropic a publié un [notebook d'évaluation de dilution d'instructions](https://github.com/anthropics/claude-cookbooks/pull/528) complet qui démontre comment les frameworks de raisonnement atteignant une précision quasi-parfaite dans des prompts ciblés peuvent s'effondrer à 0-30% lorsqu'intégrés dans des environnements de production complexes. Cela traite un écart critique entre l'évaluation en laboratoire et les scénarios de déploiement réels.

### Frameworks d'agents autonomes

Plusieurs nouveaux cookbooks d'agents autonomes ont émergé d'Anthropic :

- Un [investigateur autonome de bugs](https://github.com/anthropics/claude-cookbooks/pull/527) qui effectue un triage de bout en bout dans des bacs à sable cloud
- Un [agent d'enrichissement de renseignements sur les menaces](https://github.com/anthropics/claude-cookbooks/pull/496) pour les applications de cybersécurité
- Une [documentation des primitives FastMCP](https://github.com/anthropics/claude-cookbooks/pull/510) pour construire des agents avancés utilisant des outils

Ceux-ci représentent des capacités autonomes de plus en plus sophistiquées qui méritent une attention particulière en matière de sécurité, notamment la capacité de l'investigateur de bugs à exécuter du code arbitraire dans des environnements bac à sable.

### Améliorations de l'infrastructure d'évaluation

Le lm-evaluation-harness a ajouté le support pour [l'évaluation TyDiQA Gold Passage](https://github.com/EleutherAI/lm-evaluation-harness/pull/3677) dans 11 langues, améliorant l'évaluation des capacités multilingues. De plus, le [support de modalité vidéo](https://github.com/EleutherAI/lm-evaluation-harness/pull/3049) a été ajouté, élargissant l'évaluation au-delà des scénarios textuels uniquement.

Le projet Aider a intégré les [modèles API Kyma](https://github.com/Aider-AI/aider/pull/5019), fournissant l'accès à des modèles open-source via un point de terminaison unifié compatible OpenAI, réduisant potentiellement les barrières à la recherche en sécurité avec diverses architectures de modèles.

## Versions notables

Aucune version majeure n'a été identifiée durant cette période, bien que les corrections de bugs des frameworks d'évaluation représentent d'importantes améliorations de stabilité pour l'infrastructure de recherche en sécurité dont de nombreux praticiens dépendent pour une évaluation fiable des capacités.