# Client-serveur

Description de la relation client-serveur au travers d'une analogie avec la vie courante.

# Diapos
## 1 - Intro
RAS

## 2 - Client
- Dans la vie : le client est une personne
- Dans l'informatique : **le client est un logiciel**
  - navigateur web
  - autre logiciel (exemple ``wget``)

## 3 - Client
- Dans la vie : le client peut habiter dans différents logements :
  - maison
  - appartement
- Dans l'informatique : le client peut être installé sur différentes machines / différents matériels :
  - smartphone
  - ordinateur portable
  - ...

Par extension on appelle "client" le matériel sur lequel est installé le client logiciel.

## 4 - Client
Que fait le client ?

- Dans la vie : il va envoie une demande
- Dans l'informatique : il envoie une demande, que l'on nomme **requête**

## 5 - Client
Et après avoir envoyé une demande / requête ?
- Dans la vie : le client attend une réponse
- Dans l'informatique : le client attend une **réponse**

## 6 - Serveur
- Dans la vie : on va considérer que le client envoie sa demande à une personne qui vit dans un immeuble
- Dans l'informatique : le **client** envoie sa **requête** à un **serveur**.  
  Un **serveur** est un ordinateur, souvent puissant (microprosseur puissant, beaucoup de mémoire vive... pour traiter beacoup de requêtes).  
  Mais on peut faire également des **serveurs** sur de petites machines, pour un usage limité.

## 7 - Serveur
- Dans la vie : l'immeuble est composé d'appartements
- Dans l'informatique : le **serveur** contient des logiciels qui vont délivrer un **service**.  
  Ces logiciels sont des **logiciels serveur**.

## 8 - Ressource
Le client demande quelque chose, mais quoi ?

- Dans la vie : il demande une réponse par lettre, un objet par colis...
- Dans l'informatique : il demande une page web, une image... on appelle cela une **ressource**.  
  Le **client** fait une **requête** pour obtenir en **réponse** une **ressource**.

## 9 - Réseau
Par où passe la demande ou la **requête** ? Comment est-ce qu'elle passe du **client** au **serveur** ?

## 10 - Réseau
- Dans la vie : elle passe par le réseau postal
- Dans l'informatique : elle passe par le réseau Internet

## 11 - Internet
- Dans la vie : le réseau postal est un ensemble complexe qui comporte de nombreux éléments : postiers, voitures, centres de tri, bureaux de postes...  
  Le but du réseau postal est de transporter une information (un courrier) d'un point à un autre.
- Dans l'informatique : le réseau Internet est un ensemble d'équipements reliés entre eux pour échanger des informations.  
  Il peut y avoir des smartphones, des serveurs, des PC, des routeurs, des concentrateurs...

Internet est un réseau à l'échel mondiale. Le système est similaire sur un réseau interne (entreprise, particulier...)

- Dans la vie : la demande passe par le réseau postal
- Dans l'informatique : la **requête** passe par le réseau Internet (ou un réseau informatique)

## 12 - Internet
Comment sait-on où envoyer la demande / **requête** ?

- Dans la vie : on a une adresse postale
- Dans l'informatique : on a une **adresse IP** (*Internet Procotol*)

Adresse IP : numéro d'identification unique attribué à un matériel sur un réseau.  
C'est une données numérique. Il existe plusieurs versions, la plus utilisée est IPv4 de la forme 172.16.264.1

## 13 - DNS
Quand on écrit une adresse dans un navigateur, on ne saisie pas une adresse IP.  
On écrit quelque chose comme "http://oclock.io" (**adresse web**).  
Comment se fait le lien entre "oclock.io" et l'adresse IP ?

- Dans la vie : le client, la personne, peut chercher une adresse dans un annuaire
- Dans l'informatique : le **client** va demander à un annuaire, nommé **DNS**, l'**adresse IP** d'une **adresse web**

DNS : Domain Name System. C'est un service informatique qui traduit les **adresses web** en **adresse IP**.  
Il existe plusieurs annuaires dans le monde (Google, OpenDNS, Cloudflare...)

## 14 - DNS
Comment ça marche le **DNS** ?

- Le **client** envoie une **requête** au **serveur DNS** (annuaire DNS), il demande l'**adresse IP** d'une **adresse web**

## 15 - DNS
- L'**annuaire DNS** **répond** au **client** en donnant l'**adresse IP**

## 16 - Domaine
Explication d'une **adresse web**. Elle est composée :

- du **protocole**
- d'un **nom de domaine** composé :
  - d'un **domaine de premier niveau** (*TLD*, *Top Level Domain*) qui est "l'extension du domaine" (.com, .org. .io...)
  - d'un **domaine de deuxième niveau** qui est le nom connu

+ notion de **sous-domaine**

