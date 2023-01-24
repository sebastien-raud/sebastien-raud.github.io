se baser sur héritage :
- classe abstraite personne (vide)
- + classses etudiant et employe (héritent de personne, vides)

- ajout méthode abstraite infos() dans personne 
- => doit être déclarée dans etudiant et employe
- ajout attribut $nom, $prenom dans personne + get / set
- ajout $notes dans etudiant
- ajout $salaire dans employe
- => faire les méthodes infos() dans etudiant et employe