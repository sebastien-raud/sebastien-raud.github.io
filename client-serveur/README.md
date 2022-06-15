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

- Dans la vie : il va envoie une demande.
- Dans l'informatique : il envoie une demande, que l'on nomme **requête**.

## 5 - Client

Et après avoir envoyé une demande / requête ?

- Dans la vie : le client attend une réponse.
- Dans l'informatique : le client attend une **réponse**.

## 6 - Serveur

- Dans la vie : on va considérer que le client envoie sa demande à une personne qui vit dans un immeuble.
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

- Dans la vie : elle passe par le réseau postal.
- Dans l'informatique : elle passe par le réseau Internet.

## 11 - Internet

- Dans la vie : le réseau postal est un ensemble complexe qui comporte de nombreux éléments : postiers, voitures, centres de tri, bureaux de postes...  
  Le but du réseau postal est de transporter une information (un courrier) d'un point à un autre.
- Dans l'informatique : le réseau Internet est un ensemble d'équipements reliés entre eux pour échanger des informations.  
  Il peut y avoir des smartphones, des serveurs, des PC, des routeurs, des concentrateurs...

Internet est un réseau à l'échel mondiale. Le système est similaire sur un réseau interne (entreprise, particulier...)

- Dans la vie : la demande passe par le réseau postal.
- Dans l'informatique : la **requête** passe par le réseau Internet (ou un réseau informatique).

## 12 - Internet

Comment sait-on où envoyer la demande / **requête** ?

- Dans la vie : on a une adresse postale.
- Dans l'informatique : on a une **adresse IP** (*Internet Procotol*).

> :memo: Adresse IP : numéro d'identification unique attribué à un matériel sur un réseau.  
C'est une données numérique. Il existe plusieurs versions, la plus utilisée est IPv4 de la forme 172.16.264.1.  
**Tout matériel sur le réseau possède une adresse IP qui l'identifie.**

## 13 - DNS

Quand on écrit une adresse dans un navigateur, on ne saisie pas une adresse IP.  
On écrit quelque chose comme "http://oclock.io" (**adresse web**).  
Comment se fait le lien entre "oclock.io" et l'adresse IP ?

- Dans la vie : le client, la personne, peut chercher une adresse dans un annuaire.
- Dans l'informatique : le **client** va demander à un annuaire, nommé **DNS**, l'**adresse IP** d'une **adresse web**.

> :memo: DNS : Domain Name System. C'est un service informatique qui traduit les **adresses web** en **adresse IP**.  
Il existe plusieurs annuaires dans le monde (Google, OpenDNS, Cloudflare...)

## 14 - DNS

Comment ça marche le **DNS** ?

- Le **client** envoie une **requête** au **serveur DNS** (annuaire DNS), il demande l'**adresse IP** d'une **adresse web**.

## 15 - DNS

- L'**annuaire DNS** **répond** au **client** en donnant l'**adresse IP**

## 16 - Domaine

Explication d'une **adresse web**. Elle est composée :

- du **protocole** (cf ...)
- d'un **nom de domaine** composé :
  - d'un **domaine de premier niveau** (*TLD*, *Top Level Domain*) qui est "l'extension du domaine" (.com, .org. .io...)
  - d'un **domaine de deuxième niveau** qui est le nom connu

+ notion de **sous-domaine**.

Une adresse web est appellé **URL** (*Uniform Resource Locator*, *repère uniforme de ressource*). L'**URL** permet de localiser une ressource selon une écriture uniforme.

## 17 - Requête

Donc :

- Dans la vie :  le client cherche dans l'annuaire l'adresse postale du destinataire puis envoie sa demande par le réseau postal.
- Dans l'informatique : le **client** **requête** auprès d'un **annuaire DNS** l'**adresse IP** du serveur à partir d'un **nom de domaine** puis envoie sa **requête**, ici une **requête web**, par le **réseau Internet**.

À-t-on suffisament d'éléments pour envoyer la demande ?  
Comment le destinataire réceptionne la demande ?

## 18 - Port

- Dans la vie : le destinataire possède une boîte aux lettres.
- Dans l'informatique : le **serveur** possède des **ports** qui jouent le même rôle que la boîte aux lettres.

## 19 - Port

- Dans la vie : on précise l'adresse du destinataire (son nom, prénom ou numéro de boîte aux lettres).
- Dans l'informatique : on indique que l'on fait du web par le préfixe **http** dans l'**adresse web**.  
  Le **http** indique que l'on utilise le protocole du **web**, le protocole **HTTP**. Par défaut le **protocole HTTP** est lié au **port 80**.  

Le **protocole** indique le **port**, comme on indique un numéro de boîte aux lettres.

## 20 - Port

- Dans la vie : quand le courrier arrive dans la boîte aux lettres, le destinataire peut le récupérer puis le ramener chez lui pour examiner son contenu.
- Dans l'informatique : quand la **requête** arrive sur le **port**, elle est transmise au **service** en charge d'examiner la **requête**.  
  Le **logiciel serveur** reçoit donc la **requête**.

## 21 - Port

- Dans la vie : le destinataire est rentré dans son appartement, il lit le courrier et effectue la tâche liée à la demande (écrire une lettre de réponse, préparer un colis...)
- Dans l'informatique : le **logiciel serveur** analyse la **requête** et effectue la tâche correspondante (chercher une ressource).

## 22 - Réponse

- Dans la vie : le destinataire à traité la demande, il renvoie une réponse.
- Dans l'informatique : le **service** a traité la requête, il retourne une **réponse**.

## 23 - Réponse - port

- Dans la vie : la réponse n'est pas retournée par la même boîte aux lettres (celle du destinataire).  
  La réponse est renvoyée par le réseau postal.
- Dans l'informatique : la **réponse** transite par le même **port** que celui d'arrivée (port 80 pour le web).  
  La **réponse** est renvoyée ensuite par le réseau **Internet**.

## 24 - Requête - protocole IP

Comment sait-on à qui renvoyer la réponse ?

- Dans la vie : l'expéditeur indique son adresse, l'adresse de réponse, sur l'enveloppe.
- Dans l'informatique : le **protocole IP** fonctionne comme une enveloppe : il contient les **adresses IP** de l'émetteur (le **client**) et du  **serveur destinataire**.

> :memo: Un protocole informatique est un ensemble de règles et procédures qui régissent les échanges de données.

## 25 - Message - IP + protocole

- Dans la vie : sur l'enveloppe on indique le destinataire et l'émetteur (pour la réponse).  
  Le courrier est écrit en fonction du destinataire ("Je vous prie d'agréer...").
- Dans l'informatique : le **protocole IP** possède un **en-tête** dont la structure est fixe (fixée par le **protocole**). Cet **en-tête** contient entre autre les **adresses IP** du **client** et du **serveur**. L'**en-tête** est comme l'enveloppe.  
  Â la suite de l'**en-tête** il y a le **message**, comme il y a le courrier dans l'enveloppe.  
  Le **message** est au format défini par le **protocole de communication**, par exemple le **protocole HTTP**.

> :memo: Le **protocole IP** sert à faire transiter les **messages** par le **réseau Internet**.  
> Les **messages** sont structurés selon le **protocole de communication** utilisé :   
>  - **HTTP** pour le web
>  - **FTP** pour le transfert de fichiers
>  - **SMTP** pour l'envoi de mails
>  - ...

L'ensemble **en-tête IP** + **message** est appelé **paquet**. Si le message est trop volumineux (par exemple envoyer une image), il est découpé en plusieurs **paquets**.  
Chaque **paquet** est numéroté afin de reconstruire le **message** dans l'ordre.
