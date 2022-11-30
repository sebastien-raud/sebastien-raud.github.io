# Récapitulatif sur la modélisation des données

## Introduction

La modélisation se fait en trois étapes principales :

- MCD : modèle conceptuel de données, c'est l'étape de réflexion générale sur les données ;
- MLD : modèle logique de données, c'est le passage de la réflexion générale à la réflexion sur la mise en œuvre technique ;
- MPD : modèle physique de données, c'est la réalisation de la base de données (donc réalisation physique).

Cette méthode d'analyse et de conception est nommée [Méthode Merise](https://fr.wikipedia.org/wiki/Merise_(informatique)) (mais il y a plein d'autres choses dans la méthode !)

## Modèle conceptuel de données : MCD

Le MCD repose sur les notions d'entités et d'associations entre les entités.  
On cherche à décrire les données, ce dans quoi elles sont regroupées (les entités) et les relations qu'il peut y avoir.

On n'est pas dans un cadre technique : donc les informations techniques (liées par exemple à une base de données) ne sont pas dans le MCD.

<details><summary>Mini-projet exemple</summary>

<hr>

- je veux un logiciel qui permet d'avoir des informations sur la consommation des véhicules d'une famille
- un véhicule est identifié par une marque (ex : Dacia), un modèle (ex : Sandero) et une immatriculation (ex : AA-123-AA)
- l'utilisateur de l'application doit sélectionner un véhicule après avoir le plein
- il doit noter :
  - la date du plein
  - le kilométrage du vehicule
  - le volume du plein
- dans une famille de deux conducteurs avec deux vehicules, on estime que chaque conducteur a sans doute un véhicule habituel, mais qu'il peut utiliser parfois l'autre véhicule. On peut également avoir un conducteur associé a un seul véhicule (pour des questions d'assurance par exemple).
- un conducteur / utilisateur peut n'avoir aucun véhicule (par exemple on enregistre dans l'application un enfant qui va bientôt passer le permis de conduire)
- un véhicule peut n'avoir aucun conducteur (par exemple on enregistre dans l'application un véhicule que l'on a acheté mais pas encore réceptionné)
- on considère qu'un véhicule neuf a un plein avec :
  - 0 kilomètre
  - 0 litres

Je peux identifier les entités :

- conducteur
- véhicule
- relevé du plein

Je peux identifier les données des entités :

```
conducteur
  - prénom
  - nom

véhicule
  - marque
  - modèle
  - immatriculation

relevé
  - date
  - kilométrage
  - volume
```

J'ai également des relations entre les entités : 

- un *conducteur* peut être associé à **0**, **1** ou **plusieurs** *véhicules*
- un *véhicule* peut être associé à **0**, **1** ou **plusieurs** *conducteurs*
- un *véhicule* a eu au moins un *relevé* (indication "on considère qu'un véhicule neuf a un plein avec 0 kilomètre et 0 litre")
- un *plein* a été fait pour au moins **1** *véhicule*
- un *plein* est fait pour **1** et **un seul** *véhicule*

J'ai identifié les entités et les relations et les règles qui lient les relations (règles de gestion).

<hr>

</details>

On peut représenter les entités d'un MCD sous une forme textuelle qui n'indique pas les liens :

```
AUTEUR (prénom, nom)
PAYS (nom)
```

où :

- `AUTEUR` et `PAYS` sont les entités
- `prénom` et `nom` sont les données

On peut également représenter les entités et les liens entre les entités par un schéma :

![schéma 01](img_recap/01.png)

Le schéma indique les **cardinalités** entre les relations.  
Une cardinalité est de la forme *nombre1*, *nombre2* qui indiquent :

- le nombre minimum de relations
- le nombre maximum de relations

Si un nombre de relations est **N**, ça veut dire **une infinité**, **un nombre non déterminé**.

La cardinalité indique les règles de gestion entre les entités.

Une relation se lit dans deux sens, dans ce cas :

- un *auteur* **est né** dans **un** (minimum) ou **un** (maximum) *pays* :  
  ![schéma 02](img_recap/02.png)
- dans un *pays* **est (sont) né(s)**  **zéro** (minumun) ou **plusieurs** (maximum) *auteurs* :  
  ![schéma 03](img_recap/03.png)

<details><summary>Mini-projet exemple</summary>

<hr>

MCD texte :

```
CONDUTEUR: (prénom, nom)
VÉHICULE: (marque, modèle, immatriculation)
RELEVÉ: (date, kilométrage, volume)
```

MCD schéma :

![Schéma 04](img_recap/04.png)

qui peut se lire :

- un *conducteur* **peut conduire** **zéro** ou **plusieurs** *véhicules*
- un *véhicule* **peut être conduit** par **zéro** ou **plusieurs** *conducteurs*
- un *véhicule* **fait le plein** et a **1** ou **plusieurs** *relevés* (on peut faire plusieurs pleins pour un véhicule)
- un *relevé* **est fait par le plein* de **1** ou **1** *véhicule** (il n'y a qu'un plein pour un relevé)

<hr>

</details>

> Attention ; une des difficultés de la modélisation, c'est que l'on modélise un projet, une idée, et non pas la réalité !  
> 
> Par exemple dans le cadre d'un jeu vidéo, on peut modéliser le fait que "*la Terre est plate, il n'y a que trois planètes dans le système solaire, le Soleil tourne au tour de la Terre, Vercingétorix a gagné la Guerre des Gaules et aujourd'hui Linux est le système d'exploitation dominant sur les ordinateurs personnels*".  
>  
> Dans le monde réel c'est un peu différent d'après les astronomes, les historiens et les informaticiens. Mais s'il faut modéliser ces idées, c'est faisable !

## Modèle logique de données : MLD

Le MLD représente les données en prennant en compte l'aspect technique qui sera utilisé pour leur gestion, par exemple une base de données.

L'objectif du MDL est de passé à la réflexion sur les données (la conceptualisation, ce n'est pas gros mot, le MCD) à la mise en œuvre (le MPD).

Le MLD est issu des travaux de [E.F. Codd](https://fr.wikipedia.org/wiki/Edgar_Frank_Codd), l'inventeur du modèle relationnel.

### Passer du MCD au MDL : les bases

Pour passer du MCD au MLD, il faut comprendre que l'on va dans les détails techniques.

Par exemple, si on veut utiliser une base de données pour notre application, mettre un identifiant unique pour chaque enregistrement est une bonne idée. Ça sera la **clé primaire** de chaque enregistrement.

Les termes **enregistrements** et **clé primaire** (*Foreign Key*) sont des détails techniques liés aux bases de données :

- ces notions ne sont pas liées au MCD
- ces notions interviennent dans le MLD.

Toutes les données purement techniques arrivent avec le MLD :

- un champ  `created_at` qui va contenir la date de création d'un **enregistrement** : c'est une données purement technique (et pas obligatoire, mais recommandée)
- un champ `updated_at` qui va contenir la date de mise à jour d'un **enregistrement** : c'est une donnée technique.

Dès lors que l'on ne parle plus simplement de donnée (une donnée, c'est un concept) mais d'enregistrement, on est dans le domaine technique. **Concept** / **réflexion** = MCD, **technique** = MLD.

### Du MCD au MLD : définition des champs

Le MCD indique les entités.

Dans le MLD on reprend les entités qui, pour une utilisation en base de données, deviennent des tables.

> MCD entité <=> MDL table

Dans le MCD chaque entité à des données, dans le MLD elles deviennent des champs (ou colonnes, il y a plusieurs termes pour une même chose).

> MCD données d'une entité <=> MLC champs d'une table

Si on reprend les entités du MCD :

```
AUTEUR (prénom, nom)
PAYS (nom)
```

On a les tables et leurs colonnes (dans le MLD) :

```
AUTEUR
  - prenom
  - nom

PAYS
  - nom
```

On peut ajouter des champs techniques :

```
AUTEUR
  - id
  - prenom
  - nom
  - created_at
  - updated_at

PAYS
  - id
  - nom
  - created_at
  - updated_at
```

<details><summary>Mini-projet exemple</summary>

<hr>

```
CONDUTEUR
  - id
  - prénom
  - nom
  - created_at
  - updated_at  

VÉHICULE
  - id
  - marque
  - modèle
  - immatriculation
  - created_at
  - updated_at

RELEVÉ
  - id
  - date
  - kilométrage
  - volume
  - created_at
  - updated_at
```

<hr>

</details>

### Du MCD au MLD : définition des types

Maintenant que l'on connaît nos tables et champs, on peut définir les types que l'on aura en base de données et les spécificités : c'est le **dictionnaire des données**.

Il y a des champs dont les types et spécificités sont tout le temps les mêmes (sauf si on en décide autrement ;o)

- `id` : c'est la clé primaire, type entier, non signé (toujours >=0), unique, auto-incrémenté
- `created_at` : date de création d'un enregistrement, type [`TIMESTAMP`](https://fr.wikipedia.org/wiki/Heure_Unix), par défaut `CURRENT_TIMESTAMP`
- `updated_at` : date de modification d'un enregistrement, type [`TIMESTAMP`](https://fr.wikipedia.org/wiki/Heure_Unix), par défaut `NULL`

Pour le reste, c'est au choix du développeur. Mais il y a des "trucs" / "astuces" :

- quand un champ est un nombre :
  - si c'est un entier :
    - s'il est toujours positif : il aura une spécificité `UNSIGNED`
    - s'il doit contenir un grand nombre de valeurs : type `INT`
    - s'il doit contenir un petit nombre de valeurs : type `SMALLINT`
  - si c'est un nombre décimal (avec virgule) : 
    - si on peut avoir des arrondis : type `FLOAT`
    - si la valeur doit être extacte : type `DECIMAL`
- quand un champ est une chaîne de caractères (texte) :
  - si le texte à toujours le même nombre de caractères (sur tous les enregistrements) : type `CHAR`
  - si le texte à une longueur variable : type `VARCHAR`
  - si le texte est long : type `TEXT` (et dérivés)
- quand un champ contient des données binaires (par exemple une image) : type `BLOB` (mais c'est une mauvaise pratique)

Pour définir les tailles des champs, on peut se documenter, se renseigner, demander conseil.

Par exemple pour un champ `nom` :

- type `VARCHAR` : tous les noms n'ont pas le même nombre de caractères
- longueur : 
  - le client a peut-être déjà une base de données avec une limite => dans ce cas on peut prendre la même limite
  - sinon quel est le nom de famille le plus long ? (recherche "Google" ou autre)

C'est arbitraire... au choix du développeur si on n'a pas de spécification... Mais on peut / DOIT toujours valider un choix avec le client.

```
auteur
  - id : INT
  - prenom : VARCHAR(64)
  - nom : VARCHAR(64)
  - created_at : TIMESTAMP
  - updated_at : TIMESTAMP

pays
  - id : INT
  - nom : VARCHAR(42)
  - created_at : TIMESTAMP
  - updated_at : TIMESTAMP
```

### Du MCD au MLD :  spécificités des champs

Au delà des champs techniques, les spécifications du client et le MCD donnent des indications fortes sur les specificité.

- un champ obligatoire : `NOT NULL`
- un champ optionnel : `NULL`
- une valeur par défaut d'indiquée (par les spécifications ou par le client, dans ce cas il faut le documenter et le faire valider) : `DEFAULT valeur`
- il reste quoi ?

```
auteur
  - id : INT, PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT
  - prenom : VARCHAR(64), NOT NULL // obligatoire !
  - nom : VARCHAR(64), NOT NULL // obligatoire !
  - created_at : TIMESTAMP, NOT NUL, DEFAULT CURRENT_TIMESTAMP  // obligatoire ! valeur par défaut : date actuelle
  - updated_at : TIMESTAMP, NULL

pays
  - id : INT, PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT
  - nom : VARCHAR(42), NOT NULL 
  - created_at : TIMESTAMP, NOT NUL, DEFAULT CURRENT_TIMESTAMP  // obligatoire ! valeur par défaut : date actuelle
  - updated_at : TIMESTAMP, NULL
```

Pour `pays.nom` : [nom de pays le plus long](https://fr.wikipedia.org/wiki/Liste_des_toponymes_les_plus_longs).

### Du MCD au MLD :  les relations

Le MCD décrit les relations entre les entités. Il faut les "transformer" en relations entres tables si on utilise une base de données.

Il y a trois types de relations :

- `une entité ` à `une entité` dans le MCD, donc `un enregistrement d'une table` à `un enregistrement d'autre table` dans le MLD (relation *un à un*)
- `une entité ` à `plusieurs entités` dans le MCD, donc `un enregistrement d'une table` à `plusieurs enregistrements d'autre table` dans le MLD (relation *un à plusieurs*)
- `plusieurs entités` à `plusieurs entités` dans le MCD, donc `plusieurs enregistrements d'une table` à `plusieurs enregistrements d'autre table` dans le MLD (relation *plusieurs à plusieurs*)

Quand une relation à une cardinalité **0,..**, cela se traduit par un champ qui peut être `NULL`.

Fonctionnement des relations en bases de données ([source](https://www.ibm.com/docs/fr/mam-saas/7.6.0.8?topic=structure-database-relationships)) :

| Type de relation | Description |
| ---              | ---         |
| Un à un          | Les deux tables ne peuvent avoir qu'un seul enregistrement de chaque côté de la relation.  Chaque valeur de clé principale est liée à un seul (ou à aucun) enregistrement de la table associée.<br><br>La plupart des relations un à un sont forcées par des règles métier et ne proviennent pas naturellement des données.<br><br>Sans règle de la sorte, vous pouvez normalement associer les deux tables sans interrompre les règles de normalisation. |
| Un à plusieurs   | La table de clé principale ne contient qu'un enregistrement associé à aucun, à un ou à plusieurs enregistrements de la table associée. |
| Plusieurs à plusieurs | Chaque enregistrement des deux tables peut être associé à un nombre indéterminé d'enregistrements (ou à aucun enregistrement) de l'autre table. Ces relations nécessitent une troisième table, appelée table associée ou de liaison, car les systèmes relationnels ne peuvent héberger directement la relation. |

Concrètement :

- dans la relation *auteur* - *pays* :
  - un *auteur* **est né** dans **un et un seul** *pays* :  
  ![schéma 02](img_recap/02.png)  
  - dans un *pays* **sont nés**  **zéro ou plusieurs** *auteurs* :  
  ![schéma 03](img_recap/03.png)  
  - on a une relation de type **un (pays) à plusieurs (auteurs)** (relation "Un à plusieurs"):
    - comme un *auteur* **EST EST NÉ** que dans un *pays* (cardinalité `1,1` dans le schéma), on crée la colonne `pays_id` dans `auteur`, `auteur.payd_id` est une clé étrangère vers `pays.id`
    - comme un *auteur* est obligatoirement **NÉ DANS UN PAYS**, on a la spécificité `NOT NULL`.
  
-