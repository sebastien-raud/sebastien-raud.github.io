<style>
  .reveal blockquote {
    width: 100%;
  }
  ul > li:has(ul) + li:has(ul) {
    margin-top: 1.5rem;
  }
</style>

# Projet

---

## Qu'est-ce qu'un projet ? 🤔

---

### Quelques définitions

> Dessein, intention qu’on a de réaliser quelque entreprise, et qui prend en compte les moyens utiles à sa mise en œuvre ; ce que l’on se propose d’accomplir.  
> — Académie française

--

> Un projet est un ensemble unique de processus, constitués d’activités coordonnées et maîtrisées, ayant des dates de début et de fin, et entreprises pour atteindre les objectifs du projet. La réalisation des objectifs du projet requiert la fourniture de livrables conformes à des exigences spécifiques.  
> — [ISO 10006](https://fr.wikipedia.org/wiki/ISO_10006)

--

> Un projet est une « entreprise temporaire initiée dans le but de fournir un produit, un service ou un résultat unique ».  
> — [PMI](https://fr.wikipedia.org/wiki/Project_Management_Institute)

--

> Un projet est « une organisation temporaire, créée en vue de livrer un ou plusieurs produits du projet conformément à un cas d’affaire convenu ».  
> — [PRINCE2](https://fr.wikipedia.org/wiki/PRINCE2)

--

### Définition simple

Un projet est un ensemble d’activités coordonnées visant à atteindre un **objectif unique**, dans un **temps défini**, avec des **ressources limitées**.

--

### Éléments caractéristiques

- un objectif / un but 🎯
- une date de début 📅
- une date de fin 🗓️
- une organisation 👫
- des livrables 📝
- un budget 💰
- un résultat unique 📦

--

### Pourquoi fait-on des projets ?

- répondre à un besoin
- améliorer le service
- remplacer un matériel obsolète
- renforcer la sécurité
- passer à l’échelle

--

### Ce qu’un projet n’est pas ☠️

- une urgence (remettre un service en marche)
- une tâche répétitive (gestion des comptes utilisateurs)
- une idée floue (on pourrait changer nos serveurs)
- juste “installer un logiciel” (sur un poste, monter une VM isolée)
- un problème à résoudre (le serveur DHCP tombe souvent)

---

### Différence projet / activité courante

| Activité                | Projet              |
| ----------------------- | ------------------- |
| Répétitive              | Unique              |
| Sans début/fin précisés | Temps défini        |
| Procédures établies     | Démarche spécifique |
| Objectif stable         | Objectif unique     |

---

## Projets IT

Quels sont les grandes familles de projets en informatique et leurs enjeux ?

--

### Projets d’infrastructure

- Installation de serveurs
- Virtualisation (Hyper-V / VMware)
- Installation réseau (switch, VLAN, Wi-Fi)
- Déploiement d’un SAN ou NAS
- ...

**Enjeux :** performance, disponibilité, sécurité

--

### Projets de migration

- Migration OS (Debian 9 vers Debian 12)
- Migration réseau (nouvelle architecture VLAN)
- Migration vers le Cloud (O365, GSuite)
- Migration d’infrastructure (changement de serveur)
- Migration d’applications (Apache vers Nginx)
- ...

**Enjeux :** compatibilité, rollback, continuité de service

--

### Projets de cybersécurité

- Déploiement firewall / segmentation réseau
- Mise en place MFA
- Audit de sécurité
- Gestion des vulnérabilités
- ...

**Enjeux :** réduction du risque, conformité ANSSI / ISO

--

### Projets applicatifs

- Déploiement d’une application métier
- Mise en place d’outils collaboratifs
- Installation d’un ERP
- ...

**Enjeux :** intégration, performance, support

--

### Projets d’optimisation / transformation

- Supervision (Centreon, Zabbix)
- Automatisation (scripts, Ansible)
- Refonte infrastructure vieillissante
- ...

**Enjeux :** réduction du coût, modernisation, résilience

--

### Contraintes d’un projet IT

- techniques (interopérabilité, versions)
- humaines (utilisateurs, prestataires)
- financières
- de sécurité
- d’exploitation

---

## Exemples de gros projets

- 2012-2013 : datacenter de Facebook construit en 13 mois (Luleå, Suède)
  - conception, construction, migration de services
  - automatisation extrême
  - coordination très forte entre travaux, réseaux, électricité, cooling, plateformes applicatives
- 2008-2016 : [migration](https://about.netflix.com/fr/news/completing-the-netflix-cloud-migration) de Netflix vers AWS
  - migration progressive de toute l’infrastructure vers AWS
  - haute disponibilité, tolérance aux pannes, [chaos engineering](https://fr.wikipedia.org/wiki/Ing%C3%A9nierie_du_chaos)
  - projet très complexe mené avec une approche incrémentale

---

## Conclusion

- Un **projet** est une démarche *temporaire*, *unique* et *organisée*  
- Les projets IT couvrent plusieurs familles :
  - Infrastructure
  - Migration
  - Cybersécurité
  - Applicatifs
  - Optimisation / transformation

--

- Vous serez souvent **acteurs opérationnels** dans ces projets  
- Comprendre les types de projets permet de :
  - mieux estimer le travail à réaliser  
  - anticiper les contraintes  
  - identifier les risques  
  - communiquer efficacement
