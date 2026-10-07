const allowed = [
    'addEventListener',
    'removeEventListener',
    'click',
    'input',
    'change',
    'submit',
    'keydown',
    'mousemove',
    'DOMContentLoaded',
    'animationend',
    'transitionend',
    'preventDefault',
    'target',
    'currentTarget',
    'key',
    'clientX'
];

const q = [
    { q: "Quelle méthode associe une fonction à un événement d'un élément ?", a: "addEventListener" },
    { q: "Pour réagir au clic sur un bouton, quelle méthode faut-il appeler sur ce bouton ?", a: "addEventListener" },
    { q: "Quelle méthode retire un écouteur d'événement ajouté précédemment ?", a: "removeEventListener" },
    { q: "Quel événement se déclenche quand on clique sur un élément ?", a: "click" },
    { q: "Quel événement se déclenche à chaque caractère tapé ou effacé dans un champ texte ?", a: "input" },
    { q: "Quel événement se déclenche quand on coche une case, ou quand on quitte un champ après l'avoir modifié ?", a: "change" },
    { q: "Quel événement se déclenche à l'envoi d'un formulaire, avec un bouton ou la touche Entrée ?", a: "submit" },
    { q: "Quel événement se déclenche quand une touche du clavier est enfoncée ?", a: "keydown" },
    { q: "Quel événement se déclenche quand la souris bouge au-dessus d'un élément ?", a: "mousemove" },
    { q: "Quel événement de document se déclenche quand tout le HTML de la page a été lu ?", a: "DOMContentLoaded" },
    { q: "Quel événement se déclenche à la fin d'une animation CSS (@keyframes) ?", a: "animationend" },
    { q: "Quel événement se déclenche à la fin d'une transition CSS ?", a: "transitionend" },
    { q: "Quelle méthode de l'événement empêche un formulaire de recharger la page à l'envoi ?", a: "preventDefault" },
    { q: "Quelle méthode de l'événement empêche le navigateur de suivre un lien cliqué ?", a: "preventDefault" },
    { q: "Quelle propriété de l'événement désigne l'élément sur lequel on a réellement cliqué, parfois un enfant ?", a: "target" },
    { q: "Quelle propriété de l'événement désigne toujours l'élément qui porte l'écouteur ?", a: "currentTarget" },
    { q: "Quelle propriété d'un événement clavier vaut \"ArrowLeft\" quand on appuie sur la flèche gauche ?", a: "key" },
    { q: "Quelle propriété d'un événement souris donne la position horizontale du pointeur dans la fenêtre ?", a: "clientX" }
];

export default {
    title: 'les événements',
    q,
    allowed,
    n: 10,
    doc: null
};
