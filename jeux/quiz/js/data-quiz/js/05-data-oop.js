const allowed = [
    '{}',
    'this',
    'Object.keys',
    'delete',
    'in',
    'class',
    'constructor',
    'new',
    'extends',
    'super',
    'static',
    'get',
    'set',
    '#',
    'instanceof',
    'prototype',
    'Object.create',
    '__proto__'
];

const q = [
    { q: "Quelle écriture crée directement un objet, avec des paires propriété : valeur ?", a: "{}" },
    { q: "Dans une méthode, quel mot-clé désigne l'objet sur lequel la méthode est appelée ?", a: "this" },
    { q: "Quelle fonction renvoie le tableau des noms des propriétés d'un objet ?", a: "Object.keys" },
    { q: "Quel opérateur supprime une propriété d'un objet ?", a: "delete" },
    { q: "Quel opérateur indique si une propriété existe dans un objet, par exemple \"name\" ... user ?", a: "in" },
    { q: "Quel mot-clé déclare un modèle pour fabriquer des objets du même type ?", a: "class" },
    { q: "Quelle méthode d'une classe est appelée automatiquement à la création d'un objet ?", a: "constructor" },
    { q: "Dans quelle méthode d'une classe initialise-t-on les propriétés de chaque nouvel objet ?", a: "constructor" },
    { q: "Quel mot-clé crée un objet à partir d'une classe, comme pour THREE.Mesh ou Phaser.Game ?", a: "new" },
    { q: "Quel mot-clé fait hériter une classe d'une autre, comme une scène Phaser qui hérite de Phaser.Scene ?", a: "extends" },
    { q: "Dans le constructeur d'une classe fille, quel mot-clé appelle le constructeur de la classe parente ?", a: "super" },
    { q: "Quel mot-clé déclare une méthode appelée sur la classe elle-même, et non sur ses objets ?", a: "static" },
    { q: "Quel mot-clé déclare une méthode qui se lit comme une propriété, sans parenthèses ?", a: "get" },
    { q: "Quel mot-clé déclare une méthode appelée automatiquement quand on affecte une valeur à une propriété ?", a: "set" },
    { q: "Quel préfixe rend un champ de classe privé, inaccessible en dehors de la classe ?", a: "#" },
    { q: "Quel opérateur vérifie qu'un objet a été créé à partir d'une classe donnée ?", a: "instanceof" },
    { q: "Sur quel mécanisme reposent réellement les classes JavaScript, apparues seulement en 2015 ?", a: "prototype" },
    { q: "Où JavaScript va-t-il chercher une méthode qu'un objet ne possède pas lui-même ?", a: "prototype" },
    { q: "Quelle fonction crée un objet en choisissant directement son prototype, sans classe ?", a: "Object.create" },
    { q: "Quelle propriété, ancienne et déconseillée, donne accès au prototype d'un objet ?", a: "__proto__" }
];

export default {
    title: 'objets et classes',
    q,
    allowed,
    n: 10,
    doc: null
};
