const allowed = [
    'html',
    'head',
    'title',
    'meta',
    'body',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hr',
    'ul',
    'ol',
    'li',
    'p',
    'a',
    'abbr',
    'br',
    'em',
    'strong'
];

const q = [
    /* Questions Générales */ 
    {
        q: 'Quelle est la balise racine d\'un document HTML ?',
        a: 'html'
    },
    {
        q: 'Quelle balise est utilisée pour définir la langue d\'un document HTML ?',
        a: 'html',
        c: 'avec l\'attribut lang.'
    },
    {
        q: 'Quelle balise contient les métadonnées d\'un document HTML ?',
        a: 'head'
    },
    {
        q: 'Quelle balise définit le titre d\'une page web ?',
        a: 'title'
    },
    {
        q: 'Quelle balise est utilisée pour définir le titre d\'une page web, qui apparaît dans l\'onglet du navigateur ?',
        a: 'title'
    },
    {
        q: 'Où doit-on placer la balise <title> dans un document HTML ?',
        a: 'head'
    },
    {
        q: 'Quelle balise est utilisée pour définir le contenu principal d\'une page web ?',
        a: 'body'
    },
    {
        q: 'Quelle balise contient tout le contenu visible d\'une page web ?',
        a: 'body'
    },
    {
        q: 'Quelle balise est utilisée pour créer un saut de ligne dans un texte ?',
        a: 'br'
    },
    /* Balises de Structure */
    {
        q: 'Quelle balise est utilisée pour définir le titre principal du document ?',
        a: 'h1'
    },
    {
        q: 'Quelle balise est utilisée pour définir le titre principal d\'une page ou d\'une section ?',
        a: 'h1'
    },
    {
        q: 'Quelle balise est utilisée pour définir un titre secondaire du document ?',
        a: 'h2'
    },
    {
        q: 'Quelle balise est utilisée pour définir un titre de section de niveau 3 ?',
        a: 'h3'
    },
    /* Balises de Liste */
    {
        q: 'Quelle balise est utilisée pour créer une liste non ordonnée ?',
        a: 'ul'
    },
    {
        q: 'Quelle balise est utilisée pour créer une liste à puces ?',
        a: 'ul'
    },
    {
        q: 'Quelle balise est utilisée pour créer une liste ordonnée ?',
        a: 'ol'
    },
    {
        q: 'Quelle balise est utilisée pour créer une liste numérotée ?',
        a: 'ol'
    },
    {
        q: 'Quelle balise est utilisée pour définir un élément de liste ?',
        a: 'li'
    },
    /* Balises de Texte */
    {
        q: 'Quelle balise est utilisée pour définir un paragraphe de texte ?',
        a: 'p'
    },
    {
        q: 'Quelle balise est utilisée pour créer un lien hypertexte ?',
        a: 'a'
    },
    {
        q: 'Quelle balise est utilisée pour définir une abréviation ou un acronyme ?',
        a: 'abbr'
    },
    {
        q: 'Quelle balise est utilisée pour insérer une ligne de séparation horizontale ?',
        a: 'hr'
    },
    {
        q: 'Quelle balise est utilisée pour mettre en emphase (attirer l\'attention, mettre en relief) un texte ?',
        a: 'em'
    },
    {
        q: 'Quelle balise est utilisée pour mettre fortement en avant un texte ?',
        a: 'strong'
    },
    /* Balises de Métadonnées */
    {
        q: 'Quelle balise est utilisée pour définir des métadonnées spécifiques à une page web ?',
        a: 'meta'
    },
    {
        q: 'Quelle balise est utilisée pour définir le jeu de caractères d\'une page web ?',
        a: 'meta',
        c: 'La balise utilisée pour définir le jeu de caractères d\'une page web est <meta charset="UTF-8">.'
    },
    {
        q: 'Quelle balise est utilisée pour définir le charset d\'un document HTML ?',
        a: 'meta'
    },
    {
        q: 'Quelle balise est utilisée pour définir l\'auteur d\'une page web ?',
        a: 'meta',
        c: 'La balise utilisée pour définir l\'auteur d\'une page web est <meta name="author" content="Nom de l\'auteur">.'
    },
    {
        q: 'Quelle balise est utilisée pour définir une description d\'une page web ?',
        a: 'meta',
        c: 'La balise utilisée pour définir une description d\'une page web est <meta name="description" content="Description de la page">.'
    },
    {
        q: 'Quelle balise est utilisée pour définir des mots-clés pour une page web ?',
        a: 'meta',
        c: 'La balise utilisée pour définir des mots-clés pour une page web est <meta name="keywords" content="mot-clé1, mot-clé2, mot-clé3">.'
    }
];

export default {
    title: 'bases de HTML',
    q,
    allowed,
    n: 10
};