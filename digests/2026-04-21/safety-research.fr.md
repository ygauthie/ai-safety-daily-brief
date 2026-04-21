# Articles de recherche (2026-04-21)

## Articles clés

### 1. Jailbreaking et recherche sur la sécurité

[**Different Paths to Harmful Compliance: Behavioral Side Effects and Mechanistic Divergence Across LLM Jailbreaks**](https://arxiv.org/abs/2604.18510v1) par Kabir & Tiganj compare trois méthodes de jailbreaking : le fine-tuning supervisé nocif, le RLVR nocif, et l'abliteration suppresseuse de refus. Bien que toutes atteignent une compliance nocive élevée, elles produisent des profils comportementaux distincts et des modes de défaillance internes différents. Cette recherche est cruciale pour comprendre comment différents vecteurs d'attaque créent différentes vulnérabilités dans les défenses de sécurité de l'IA.

[**LLM Safety From Within: Detecting Harmful Content with Internal Representations**](https://arxiv.org/abs/2604.18519v1) par Jiao et al. présente SIREN, un modèle de garde léger qui identifie les neurones de sécurité via linear probing à travers les couches internes, plutôt que de s'appuyer uniquement sur les représentations terminales. L'approche construit des détecteurs de nocivité à partir des composants internes du LLM grâce à une pondération adaptive des couches. Ceci importe car cela offre une approche plus efficace du filtrage de contenu en exploitant les riches caractéristiques pertinentes à la sécurité distribuées à travers les architectures de modèles.

[**Adversarial Humanities Benchmark: Results on Stylistic Robustness in Frontier Model Safety**](https://arxiv.org/abs/2604.18487v1) par Galisai et al. introduit AHB, qui reformule les tâches nocives par des transformations de style humanités tout en préservant l'intention, s'étendant au-delà des opérateurs de jailbreak simples vers une obfuscation stylistique plus large. Ce benchmark est significatif car il teste si les refus de sécurité survivent aux changements s'éloignant des formes familières de prompts nocifs, révélant des lacunes dans les mesures de sécurité actuelles.

### 2. Alignment de l'IA et méthodes d'entraînement

[**Towards Disentangled Preference Optimization Dynamics Beyond Likelihood Displacement**](https://arxiv.org/abs/2604.18239v1) par Chen et al. présente une décomposition unifiée incentive-score révélant que divers objectifs d'optimisation de préférence partagent des directions de mise à jour locales identiques, ne différant que par la mise à l'échelle de magnitude. Ils montrent que le déplacement de vraisemblance provient d'incitations mal alignées plutôt que de limitations fondamentales. Ce travail est important car il fournit des fondations théoriques pour améliorer le RLHF en s'attaquant à la suppression systématique des réponses choisies qui survient dans l'optimisation de préférence actuelle.

[**When Can LLMs Learn to Reason with Weak Supervision?**](https://arxiv.org/abs/2604.18574v1) par Rahman et al. mène une étude empirique systématique à travers les familles de modèles et domaines de raisonnement sous trois paramètres de supervision faible : données rares, récompenses bruitées, et auto-supervision. Cette recherche est essentielle pour comprendre les limites du RLVR alors que les signaux de récompense de haute qualité deviennent de plus en plus difficiles à construire pour les capacités avancées de modèles.

### 3. Compréhension mécanistique et interprétabilité

[**Reasoning Models Know What's Important, and Encode It in Their Activations**](https://arxiv.org/abs/2604.18307v1) par Nikankin et al. examine si les activations de modèles contiennent des informations sur l'importance des étapes dans les chaînes de raisonnement, trouvant que les activations prédisent les étapes supprimables mieux que les caractéristiques textuelles de surface. Ceci importe car cela fournit des insights sur la façon dont les modèles traitent intérieurement le raisonnement et pourrait informer les approches pour améliorer l'efficacité du raisonnement.

[**Latent Phase-Shift Rollback: Inference-Time Error Correction via Residual Stream Monitoring and KV-Cache Steering**](https://arxiv.org/abs/2604.18567v1) par Gupta & Kumar introduit LPSR, qui surveille les flux résiduels à des couches critiques pour détecter des inversions directionnelles abruptes et répond en restaurant le KV-cache avec des vecteurs de direction. Ceci est significatif car cela s'attaque au problème fondamental des erreurs de raisonnement irrécupérables dans les modèles de langage en fournissant un mécanisme de correction en ligne.

### 4. Gouvernance et éthique de l'IA

[**Moving beyond Principles: Identifying Actionable AI Fairness Practices**](https://arxiv.org/abs/2604.18502v1) par Burtscher & Dolata s'attaque à l'écart principes-pratique dans la gouvernance d'équité de l'IA en développant des pratiques actionnables par analyse du discours et thématique. Le travail fournit des conseils concrets à travers le cycle de vie de l'IA plutôt que des principes éthiques abstraits. Cette recherche est cruciale car elle traduit les concepts d'équité de haut niveau en pratiques organisationnelles implémentables.

[**The implicated scientist: on the role of AI researchers in the development of weapons systems**](https://arxiv.org/abs/2604.18380v1) par Volokhova & Hernandez-Garcia examine l'implication des chercheurs en IA dans le développement d'armements et la course aux armements IA, analysant les responsabilités éthiques et les conséquences potentielles. Ceci importe car cela s'attaque à la préoccupation croissante concernant la militarisation de la technologie IA et le rôle de la communauté scientifique dans des applications potentiellement nocives.

### 5. Sécurité de l'IA incarnée

[**Using large language models for embodied planning introduces systematic safety risks**](https://arxiv.org/abs/2604.18463v1) par Zhang et al. introduit DESPITE, un benchmark avec 12 279 tâches couvrant les dangers physiques et normatifs, trouvant que même une capacité de planification quasi-parfaite n'assure pas la sécurité. Le modèle avec la meilleure planification produit des plans dangereux sur 28,3% des tâches malgré un échec sur seulement 0,4% pour la validité. Cette recherche est vitale car elle révèle que la compétence de planification et la sécurité sont des capacités fondamentalement distinctes dans les systèmes d'IA incarnée.

Ces articles soulignent collectivement des défis critiques dans l'alignment de sécurité de l'IA, de la compréhension des modes de défaillance à travers différents vecteurs d'attaque au développement de cadres principiels pour l'évaluation et la gouvernance de la sécurité. L'émergence de risques de sécurité systématiques dans la planification et l'écart entre capacité de raisonnement et compliance de sécurité soulignent la complexité de construire des systèmes d'IA sûrs de manière fiable.