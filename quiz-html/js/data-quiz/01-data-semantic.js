const allowed = [
    'address',
    'article',
    'aside',
    'footer',
    'header',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'main',
    'nav',
    'section',
    'blockquote',
    'dd',
    'div',
    'dl',
    'dt',
    'figcaption',
    'figure',
    'li',
    'menu',
    'ol',
    'p',
    'pre',
    'ul',
    'a',
    'abbr',
    'cite',
    'code',
    'dfn',
    'em',
    'mark',
    'q',
    'span',
    'strong',
    'sub',
    'sup',
    'audio',
    'img',
    'video',
];

const q = [
    /* Balises de structure */

    {
        q: 'Quelle balise est utilisée pour définir les informations de contact d\'un auteur ou d\'une organisation ?',
        a: 'address'
    },
    {
        q: 'Quelle balise est utilisée pour définir un contenu indépendant et réutilisable, comme un article de blog ou une actualité ?',
        a: 'article'
    },
    {
        q: 'Quelle balise est utilisée pour un contenu qui peut être syndiqué ou réutilisé de manière indépendante ?',
        a: 'article'
    },
    {
        q: 'Quelle balise est utilisée pour définir un contenu indirectement lié au contenu principal ?',
        a: 'aside'
    },
    {
        q: 'Quelle balise est utilisée pour ajouter des informations complémentaires ou des notes qui sont liées au contenu principal, mais qui peuvent être séparées sans nuire à la compréhension globale ?',
        a: 'aside'
    },
    {
        q: 'Quelle balise est utilisée pour définir le pied de page d\'une page ou d\'une section ?',
        a: 'footer'
    },
    {
        q: 'Quelle balise est utilisée pour inclure des informations de bas de page, telles que les mentions légales, les liens de contact ou les informations sur l\'auteur, à la fin d\'une page ou d\'une section ?',
        a: 'footer'
    },
    {
        q: 'Quelle balise est utilisée pour définir l\'en-tête d\'une page ou d\'une section ?',
        a: 'header'
    },
    {
        q: 'Quelle balise est utilisée pour regrouper les éléments d\'introduction d\'une page ou d\'une section, comme le titre principal, le logo ou un menu de navigation principal ?',
        a: 'header'
    },
    {
        q: 'Quelle balise est utilisée pour définir le contenu principal d\'une page ?',
        a: 'main'
    },
    {
        q: 'Quelle balise est utilisée pour indiquer aux moteurs de recherche et aux technologies d\'assistance le contenu principal d\'une page ?',
        a: 'main'
    },
    {
        q: 'Quelle balise est utilisée pour définir la partie principale du contenu d\'une page, qui est directement liée au sujet central et qui doit être unique sur la page ?',
        a: 'main'
    },
    {
        q: 'Quelle balise est utilisée pour définir une section de navigation, comme un menu de navigation ?',
        a: 'nav'
    },
    {
        q: 'Quelle balise est utilisée pour définir une section de navigation, comme un menu de navigation principal ?',
        a: 'nav'
    },
    {
        q: 'Quelle balise est utilisée pour définir une section générique dans un document ?',
        a: 'section'
    },
    {
        q: 'Quelle balise est utilisée pour regrouper plusieurs articles ou sections thématiquement liés dans une page web ?',
        a: 'section'
    },

    /* Balises de texte */

    {
        q: 'Quelle balise est utilisée pour définir une citation étendue d\'une autre source ?',
        a: 'blockquote'
    },
    {
        q: 'Quelle balise est utilisée pour définir la description d\'un terme dans une liste de description ?',
        a: 'dd'
    },
    {
        q: 'Quelle balise est utilisée pour définir une division ou une section générique dans un document ?',
        a: 'div'
    },
    {
        q: 'Quelle balise est utilisée pour définir une liste de descriptions ?',
        a: 'dl'
    },
    {
        q: 'Quelle balise est utilisée pour définir un terme dans une liste de description ?',
        a: 'dt'
    },
    {
        q: 'Quelle balise est utilisée pour définir une légende pour une figure ?',
        a: 'figcaption'
    },
    {
        q: 'Quelle balise est utilisée pour définir un contenu autonome comme une image avec une légende ?',
        a: 'figure'
    },
    {
        q: 'Quelle balise est utilisée pour définir un élément de liste ?',
        a: 'li'
    },
    {
        q: 'Quelle balise est utilisée pour définir une liste de commandes ou de menus ?',
        a: 'menu'
    },
    {
        q: 'Quelle balise est utilisée pour définir une liste ordonnée ?',
        a: 'ol'
    },
    {
        q: 'Quelle balise est utilisée pour définir un paragraphe de texte ?',
        a: 'p'
    },
    {
        q: 'Quelle balise est utilisée pour définir du texte préformaté, comme du code source ?',
        a: 'pre'
    },
    {
        q: 'Quelle balise est utilisée pour définir une liste non ordonnée ?',
        a: 'ul'
    },

    /* Balises de liens et de texte enrichi */

    {
        q: 'Quelle balise est utilisée pour créer un lien hypertexte ?',
        a: 'a'
    },
    {
        q: 'Quelle balise est utilisée pour définir une abréviation ou un acronyme ?',
        a: 'abbr'
    },
    {
        q: 'Quelle balise est utilisée pour citer le titre d\'une œuvre ?',
        a: 'cite'
    },
    {
        q: 'Quelle balise est utilisée pour définir un fragment de code informatique ?',
        a: 'code'
    },
    {
        q: 'Quelle balise est utilisée pour définir un terme défini pour la première fois ?',
        a: 'dfn'
    },
    {
        q: 'Quelle balise est utilisée pour mettre en exergue du texte, en indiquant une emphase ?',
        a: 'em'
    },
    {
        q: 'Quelle balise est utilisée pour mettre en évidence du texte (souvent en surlignage) ?',
        a: 'mark'
    },
    {
        q: 'Quelle balise est utilisée pour définir une citation courte en ligne ?',
        a: 'q'
    },
    {
        q: 'Quelle balise est utilisée pour définir une section de texte sans signification sémantique particulière ?',
        a: 'span'
    },
    {
        q: 'Quelle balise est utilisée pour indiquer l\'importance d\'un texte (souvent mis en gras) ?',
        a: 'strong'
    },
    {
        q: 'Quelle balise est utilisée pour définir un indice (texte en bas de la ligne de base) ?',
        a: 'sub'
    },
    {
        q: 'Quelle balise est utilisée pour définir un exposant (texte au-dessus de la ligne de base) ?',
        a: 'sup'
    },

    /* Balises multimédias */

    {
        q: 'Quelle balise est utilisée pour intégrer un fichier audio dans une page web ?',
        a: 'audio'
    },
    {
        q: 'Quelle balise est utilisée pour intégrer une image dans une page web ?',
        a: 'img'
    },
    {
        q: 'Quelle balise est utilisée pour intégrer une vidéo dans une page web ?',
        a: 'video'
    },

    /* Balises de titres */

    {
        q: 'Quelle balise est utilisée pour définir le titre principal d\'une page ou d\'une section ?',
        a: 'h1'
    },
    {
        q: 'Quelle balise est utilisée pour définir un sous-titre de niveau 2 ?',
        a: 'h2'
    },
    {
        q: 'Quelle balise est utilisée pour définir un sous-titre de niveau 3 ?',
        a: 'h3'
    },
    {
        q: 'Quelle balise est utilisée pour définir un sous-titre de niveau 4 ?',
        a: 'h4'
    },
    {
        q: 'Quelle balise est utilisée pour définir un sous-titre de niveau 5 ?',
        a: 'h5'
    },
    {
        q: 'Quelle balise est utilisée pour définir un sous-titre de niveau 6 ?',
        a: 'h6'
    },

    /* Balises diverses */

    {
        q: 'Quelle balise est utilisée pour définir une section de contenu importante dans une page web ?',
        a: 'section'
    },
    {
        q: 'Quelle balise est utilisée pour définir une liste de descriptions ?',
        a: 'dl'
    },
    {
        q: 'Quelle balise est utilisée pour définir un terme dans une liste de description ?',
        a: 'dt'
    },
    {
        q: 'Quelle balise est utilisée pour définir une description d\'un terme dans une liste de description ?',
        a: 'dd'
    },
    {
        q: 'Quelle balise est utilisée pour définir une légende pour une figure ?',
        a: 'figcaption'
    },
    {
        q: 'Quelle balise est utilisée pour définir un contenu autonome, comme une image avec une légende ?',
        a: 'figure'
    },
    {
        q: 'Quelle balise est utilisée pour définir un élément de liste ?',
        a: 'li'
    },
    {
        q: 'Quelle balise est utilisée pour définir une liste de commandes ou de menus ?',
        a: 'menu'
    },
];

export default {
    title: 'sémantique',
    q,
    allowed,
    n: 10
};