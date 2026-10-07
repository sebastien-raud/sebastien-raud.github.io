const allowed = [
    'setTimeout',
    'setInterval',
    'clearTimeout',
    'clearInterval',
    'requestAnimationFrame',
    'cancelAnimationFrame',
    'Date.now',
    'localStorage.setItem',
    'localStorage.getItem',
    'localStorage.removeItem',
    'JSON.stringify',
    'JSON.parse',
    'matchMedia'
];

const q = [
    { q: "Quelle fonction exécute du code une seule fois, après un délai en millisecondes ?", a: "setTimeout" },
    { q: "Pour faire disparaître une notification au bout de 2 secondes, quelle fonction utiliser ?", a: "setTimeout" },
    { q: "Quelle fonction exécute du code de façon répétée, toutes les N millisecondes ?", a: "setInterval" },
    { q: "Pour un compte à rebours qui diminue chaque seconde, quelle fonction utiliser ?", a: "setInterval" },
    { q: "Quelle fonction annule un délai lancé avec setTimeout, avant qu'il ne se déclenche ?", a: "clearTimeout" },
    { q: "Quelle fonction arrête une répétition lancée avec setInterval ?", a: "clearInterval" },
    { q: "Quelle fonction demande au navigateur d'appeler du code juste avant d'afficher la prochaine image ?", a: "requestAnimationFrame" },
    { q: "Pour une boucle de jeu fluide, synchronisée avec l'écran, quelle fonction utiliser ?", a: "requestAnimationFrame" },
    { q: "Quelle fonction annule une demande faite avec requestAnimationFrame ?", a: "cancelAnimationFrame" },
    { q: "Quelle fonction renvoie le nombre de millisecondes écoulées depuis le 1er janvier 1970, pratique pour mesurer une durée ?", a: "Date.now" },
    { q: "Quelle méthode enregistre une valeur dans le navigateur, pour la retrouver après avoir fermé la page ?", a: "localStorage.setItem" },
    { q: "Pour retrouver le meilleur score enregistré lors d'une partie précédente, quelle méthode utiliser ?", a: "localStorage.getItem" },
    { q: "Quelle méthode supprime une valeur enregistrée dans le navigateur ?", a: "localStorage.removeItem" },
    { q: "Avant d'enregistrer un tableau dans le localStorage, quelle fonction le transforme en texte ?", a: "JSON.stringify" },
    { q: "Quelle fonction transforme un texte JSON relu dans le localStorage en tableau ou en objet ?", a: "JSON.parse" },
    { q: "Quelle méthode permet de savoir en JavaScript si l'utilisateur a demandé de réduire les animations ?", a: "matchMedia" }
];

export default {
    title: 'le temps et l\'animation',
    q,
    allowed,
    n: 10,
    doc: null
};
