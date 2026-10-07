const allowed = [
    'document',
    'querySelector',
    'querySelectorAll',
    'getElementById',
    'textContent',
    'innerHTML',
    'value',
    'dataset',
    'setAttribute',
    'getAttribute',
    'hidden',
    'disabled',
    'style',
    'closest',
    'focus'
];

const q = [
    { q: "Quel objet représente la page HTML chargée, et sert de point de départ pour sélectionner des éléments ?", a: "document" },
    { q: "Quelle méthode renvoie le premier élément qui correspond à un sélecteur CSS ?", a: "querySelector" },
    { q: "Pour sélectionner le premier bouton de la classe .play, quelle méthode utiliser ?", a: "querySelector" },
    { q: "Quelle méthode renvoie tous les éléments qui correspondent à un sélecteur CSS ?", a: "querySelectorAll" },
    { q: "Pour récupérer toutes les cartes .card de la page et les parcourir avec forEach, quelle méthode utiliser ?", a: "querySelectorAll" },
    { q: "Quelle méthode sélectionne un élément à partir de son id, écrit sans le # ?", a: "getElementById" },
    { q: "Quelle propriété change le texte d'un élément, sans interpréter les balises HTML ?", a: "textContent" },
    { q: "Pour afficher un score dans un paragraphe, sans risque d'injecter du HTML, quelle propriété utiliser ?", a: "textContent" },
    { q: "Quelle propriété remplace le contenu d'un élément par du HTML, en interprétant les balises ?", a: "innerHTML" },
    { q: "Quelle propriété contient le texte saisi dans un champ de formulaire ?", a: "value" },
    { q: "Pour lire l'attribut data-color d'un élément, quelle propriété utiliser ?", a: "dataset" },
    { q: "Quelle propriété donne accès à tous les attributs data-* d'un élément ?", a: "dataset" },
    { q: "Quelle méthode donne une valeur à un attribut HTML, par exemple aria-label ?", a: "setAttribute" },
    { q: "Quelle méthode lit la valeur d'un attribut HTML, par exemple href ?", a: "getAttribute" },
    { q: "Quelle propriété, mise à true, cache un élément comme l'attribut HTML du même nom ?", a: "hidden" },
    { q: "Quelle propriété, mise à true, empêche de cliquer sur un bouton ?", a: "disabled" },
    { q: "Quelle propriété modifie directement les styles en ligne d'un élément, par exemple sa couleur ?", a: "style" },
    { q: "Quelle méthode remonte les parents d'un élément jusqu'au premier qui correspond à un sélecteur ?", a: "closest" },
    { q: "Quelle méthode place le curseur dans un champ de formulaire, pour que l'utilisateur puisse taper directement ?", a: "focus" }
];

export default {
    title: 'le DOM',
    q,
    allowed,
    n: 10,
    doc: null
};
