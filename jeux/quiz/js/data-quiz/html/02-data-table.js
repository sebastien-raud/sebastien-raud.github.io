const allowed = [
    'caption',
    'col',
    'colgroup',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'tr',
    // autres éléments pour apporter des propositions
    // de réponses à confusion
    'head',
    'header',
    'body',
    'main',
    'footer',
    'section',
    'ul',
    'ol',
    'li',
    'figure',
    'figcaption'
];

const q = [
    {
        q: 'Quel élément est utilisé pour définir une table en HTML ?',
        a: 'table'
    },
    {
        q: 'Quel élément est utilisé pour regrouper les colonnes dans une table ?',
        a: 'colgroup'
    },
    {
        q: 'Quel élément est utilisé pour définir une cellule d’en-tête dans une table ?',
        a: 'th'
    },
    {
        q: 'Quel élément est utilisé pour définir une ligne dans une table ?',
        a: 'tr'
    },
    {
        q: 'Quel élément est utilisé pour définir une cellule de données dans une table ?',
        a: 'td'
    },
    {
        q: 'Quel élément est utilisé pour définir un groupe de colonnes dans une table ?',
        a: 'colgroup'
    },
    {
        q: 'Quel élément est utilisé pour définir une colonne dans une table ?',
        a: 'col'
    },
    {
        q: 'Quel élément est utilisé pour définir le pied de table ?',
        a: 'tfoot'
    },
    {
        q: 'Quel élément est utilisé pour définir l’en-tête de table ?',
        a: 'thead'
    },
    {
        q: 'Quel élément est utilisé pour définir le corps de table ?',
        a: 'tbody'
    },
    {
        q: 'Quel élément est utilisé pour ajouter une légende à une table ?',
        a: 'caption'
    },
    {
        q: 'Quel élément est utilisé pour regrouper les lignes du corps de la table ?',
        a: 'tbody'
    },
    {
        q: 'Quel élément est utilisé pour regrouper les lignes d’en-tête de la table ?',
        a: 'thead'
    },
    {
        q: 'Quel élément est utilisé pour regrouper les lignes du pied de la table ?',
        a: 'tfoot'
    },
    {
        q: 'Quel élément est utilisé pour définir une cellule d’en-tête dans une ligne de table ?',
        a: 'th'
    },
    {
        q: 'Quel élément est utilisé pour définir une cellule de données dans une ligne de table ?',
        a: 'td'
    },
    {
        q: 'Quel élément est utilisé pour définir une colonne dans un groupe de colonnes ?',
        a: 'col'
    },
    {
        q: 'Quel élément est utilisé pour définir une légende pour une table ?',
        a: 'caption'
    },
    {
        q: 'Quel élément est utilisé pour définir une ligne dans le corps de la table ?',
        a: 'tr'
    },
    {
        q: 'Quel élément est utilisé pour définir une ligne dans l’en-tête de la table ?',
        a: 'tr'
    },
    {
        q: 'Quel élément est utilisé pour définir une ligne dans le pied de la table ?',
        a: 'tr'
    },
    {
        q: 'Quel élément est utilisé pour définir une cellule d’en-tête dans le pied de la table ?',
        a: 'th'
    },
    {
        q: 'Quel élément est utilisé pour définir une cellule de données dans le pied de la table ?',
        a: 'td'
    },
    {
        q: 'Quel élément est utilisé pour définir une cellule d’en-tête dans l’en-tête de la table ?',
        a: 'th'
    },
    {
        q: 'Quel élément est utilisé pour définir une cellule de données dans l’en-tête de la table ?',
        a: 'td'
    },
    {
        q: 'Quel élément est utilisé pour définir une cellule d’en-tête dans le corps de la table ?',
        a: 'th'
    },
    {
        q: 'Quel élément est utilisé pour définir une cellule de données dans le corps de la table ?',
        a: 'td'
    },
    {
        q: 'Quel élément est utilisé pour définir une colonne dans une table ?',
        a: 'col'
    },
    {
        q: 'Quel élément est utilisé pour définir un groupe de colonnes dans une table ?',
        a: 'colgroup'
    },
    {
        q: 'Quel élément est utilisé pour ajouter une légende à une table ?',
        a: 'caption'
    }
];

export default {
    title: 'les tableaux',
    q,
    allowed,
    n: 10,
    doc: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/'
};