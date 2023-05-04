<?php

class Personne {

    // définition des propriétés
    private $prenom;
    private $nom;
    private $age;
    private $estChanteur;

    // définition d'un constructeur avec un paramètre obligatoire et un optionnel
    public function __construct($paramPrenom, $paramNom = null) {
        $this->prenom = $paramPrenom;
        $this->nom = $paramNom;
    }

    // définition d'une méthode
    public function biographie() {
        $bio = $this->prenom . ' ' . $this->nom . 
                ' est âgé de ' . $this->age . ' ans';

        if ($this->estChanteur) {
            $bio .= ' et c\'est un chanteur';
        }
        return $bio;
    }
}

$renaud = new Personne('Renaud');
$renaud->age = 'Séchan';