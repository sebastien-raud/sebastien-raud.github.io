const allowed = [
    'classList.add',
    'classList.remove',
    'classList.toggle',
    'classList.contains',
    'classList.replace',
    'className',
    'createElement',
    'append',
    'prepend',
    'remove',
    'cloneNode',
    'children',
    'insertAdjacentHTML',
    'replaceChildren'
];

const q = [
    { q: "Quelle méthode ajoute une classe CSS à un élément, sans toucher à ses autres classes ?", a: "classList.add" },
    { q: "Pour lancer une animation CSS définie sur la classe .is-visible, quelle méthode appeler ?", a: "classList.add" },
    { q: "Quelle méthode retire une classe CSS d'un élément ?", a: "classList.remove" },
    { q: "Quelle méthode ajoute la classe si elle est absente, et la retire si elle est présente ?", a: "classList.toggle" },
    { q: "Pour ouvrir et fermer un menu burger avec le même bouton, quelle méthode utiliser ?", a: "classList.toggle" },
    { q: "Quelle méthode indique si un élément a une classe donnée ?", a: "classList.contains" },
    { q: "Quelle méthode remplace une classe CSS par une autre en une seule fois ?", a: "classList.replace" },
    { q: "Quelle propriété contient toutes les classes d'un élément en une seule chaîne, et efface les autres si on l'écrase ?", a: "className" },
    { q: "Quelle méthode de document fabrique un nouvel élément HTML, pas encore placé dans la page ?", a: "createElement" },
    { q: "Quelle méthode place un élément à la fin du contenu d'un autre élément ?", a: "append" },
    { q: "Après createElement, quelle méthode ajoute le nouvel élément à la fin d'une liste ?", a: "append" },
    { q: "Quelle méthode place un élément au début du contenu d'un autre élément ?", a: "prepend" },
    { q: "Quelle méthode, appelée sur un élément, le retire de la page ?", a: "remove" },
    { q: "Quelle méthode crée une copie d'un élément, avec ses enfants si on lui passe true ?", a: "cloneNode" },
    { q: "Quelle propriété donne les éléments enfants directs d'un élément ?", a: "children" },
    { q: "Quelle méthode insère du HTML écrit sous forme de texte, juste avant la fin d'un élément par exemple ?", a: "insertAdjacentHTML" },
    { q: "Quelle méthode, appelée sans argument, vide tout le contenu d'un élément ?", a: "replaceChildren" }
];

export default {
    title: 'classes CSS et éléments',
    q,
    allowed,
    n: 10,
    doc: null
};
