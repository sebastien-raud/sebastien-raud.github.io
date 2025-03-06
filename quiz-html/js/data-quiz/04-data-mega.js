const allowed = '*';

const q = [
  {
    q: 'Quel élément est utilisé pour définir la structure de base d’un document HTML ?',
    a: 'html'
  },
  {
    q: 'Quel élément contient les métadonnées d’un document HTML ?',
    a: 'head'
  },
  {
    q: 'Quel élément définit le titre d’un document HTML ?',
    a: 'title'
  },
  {
    q: 'Quel élément est utilisé pour définir des métadonnées sur la page ?',
    a: 'meta'
  },
  {
    q: 'Quel élément contient le contenu visible d’un document HTML ?',
    a: 'body'
  },
  {
    q: 'Quel élément est utilisé pour définir le titre principal d’une page ?',
    a: 'h1'
  },
  {
    q: 'Quel élément est utilisé pour définir un sous-titre de niveau 2 ?',
    a: 'h2'
  },
  {
    q: 'Quel élément est utilisé pour définir un sous-titre de niveau 3 ?',
    a: 'h3'
  },
  {
    q: 'Quel élément est utilisé pour définir un sous-titre de niveau 4 ?',
    a: 'h4'
  },
  {
    q: 'Quel élément est utilisé pour définir un sous-titre de niveau 5 ?',
    a: 'h5'
  },
  {
    q: 'Quel élément est utilisé pour définir un sous-titre de niveau 6 ?',
    a: 'h6'
  },
  {
    q: 'Quel élément est utilisé pour insérer une ligne horizontale ?',
    a: 'hr'
  },
  {
    q: 'Quel élément est utilisé pour créer une liste non ordonnée ?',
    a: 'ul'
  },
  {
    q: 'Quel élément est utilisé pour créer une liste ordonnée ?',
    a: 'ol'
  },
  {
    q: 'Quel élément définit un élément de liste ?',
    a: 'li'
  },
  {
    q: 'Quel élément est utilisé pour définir un paragraphe ?',
    a: 'p'
  },
  {
    q: 'Quel élément est utilisé pour créer un lien hypertexte ?',
    a: 'a'
  },
  {
    q: 'Quel élément est utilisé pour définir une abréviation ou un acronyme ?',
    a: 'abbr'
  },
  {
    q: 'Quel élément est utilisé pour insérer une ligne de césure ?',
    a: 'br'
  },
  {
    q: 'Quel élément est utilisé pour mettre en italique du texte ?',
    a: 'em'
  },
  {
    q: 'Quel élément est utilisé pour mettre du texte en gras ?',
    a: 'strong'
  },
  {
    q: 'Quel élément est utilisé pour définir des informations de contact ?',
    a: 'address'
  },
  {
    q: 'Quel élément est utilisé pour définir un contenu indépendant ?',
    a: 'article'
  },
  {
    q: 'Quel élément est utilisé pour définir un contenu tangentiellement lié ?',
    a: 'aside'
  },
  {
    q: 'Quel élément est utilisé pour définir le pied de page d’un document ou d’une section ?',
    a: 'footer'
  },
  {
    q: 'Quel élément est utilisé pour définir l’en-tête d’un document ou d’une section ?',
    a: 'header'
  },
  {
    q: 'Quel élément est utilisé pour définir le contenu principal d’un document ?',
    a: 'main'
  },
  {
    q: 'Quel élément est utilisé pour définir une section de navigation ?',
    a: 'nav'
  },
  {
    q: 'Quel élément est utilisé pour définir une section dans un document ?',
    a: 'section'
  },
  {
    q: 'Quel élément est utilisé pour définir une citation étendue ?',
    a: 'blockquote'
  },
  {
    q: 'Quel élément est utilisé pour définir la définition d’un terme dans une liste de description ?',
    a: 'dd'
  },
  {
    q: 'Quel élément est utilisé pour définir une division ou une section générique ?',
    a: 'div'
  },
  {
    q: 'Quel élément est utilisé pour définir une liste de description ?',
    a: 'dl'
  },
  {
    q: 'Quel élément est utilisé pour définir un terme dans une liste de description ?',
    a: 'dt'
  },
  {
    q: 'Quel élément est utilisé pour définir une légende pour une figure ?',
    a: 'figcaption'
  },
  {
    q: 'Quel élément est utilisé pour définir un contenu auto-contenu, comme une image ou un diagramme ?',
    a: 'figure'
  },
  {
    q: 'Quel élément est utilisé pour définir un menu de commandes ou de liens ?',
    a: 'menu'
  },
  {
    q: 'Quel élément est utilisé pour définir du texte préformaté ?',
    a: 'pre'
  },
  {
    q: 'Quel élément est utilisé pour définir une citation en ligne ?',
    a: 'q'
  },
  {
    q: 'Quel élément est utilisé pour définir une partie d’un texte qui doit être marquée ou mise en évidence ?',
    a: 'mark'
  },
  {
    q: 'Quel élément est utilisé pour définir une partie d’un texte avec une signification alternative ?',
    a: 'span'
  },
  {
    q: 'Quel élément est utilisé pour définir un texte en indice ?',
    a: 'sub'
  },
  {
    q: 'Quel élément est utilisé pour définir un texte en exposant ?',
    a: 'sup'
  },
  {
    q: 'Quel élément est utilisé pour insérer une image ?',
    a: 'img'
  },
  {
    q: 'Quel élément est utilisé pour insérer un fichier audio ?',
    a: 'audio'
  },
  {
    q: 'Quel élément est utilisé pour insérer une vidéo ?',
    a: 'video'
  },
  {
    q: 'Quel élément est utilisé pour définir une légende pour une table ?',
    a: 'caption'
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
    q: 'Quel élément est utilisé pour définir le corps d’une table ?',
    a: 'tbody'
  },
  {
    q: 'Quel élément est utilisé pour définir une cellule dans une table ?',
    a: 'td'
  },
  {
    q: 'Quel élément est utilisé pour définir le pied d’une table ?',
    a: 'tfoot'
  },
  {
    q: 'Quel élément est utilisé pour définir une cellule d’en-tête dans une table ?',
    a: 'th'
  },
  {
    q: 'Quel élément est utilisé pour définir l’en-tête d’une table ?',
    a: 'thead'
  },
  {
    q: 'Quel élément est utilisé pour définir une ligne dans une table ?',
    a: 'tr'
  },
  {
    q: 'Quel élément est utilisé pour créer un bouton cliquable dans un formulaire ?',
    a: 'button'
  },
  {
    q: 'Quel élément est utilisé pour fournir des suggestions pour un champ de saisie ?',
    a: 'datalist'
  },
  {
    q: 'Quel élément est utilisé pour regrouper des éléments de formulaire sous une légende ?',
    a: 'fieldset'
  },
  {
    q: 'Quel élément est utilisé pour définir un formulaire HTML ?',
    a: 'form'
  },
  {
    q: 'Quel élément est utilisé pour créer des champs de saisie dans un formulaire ?',
    a: 'input'
  },
  {
    q: 'Quel élément est utilisé pour définir une étiquette pour un champ de formulaire ?',
    a: 'label'
  },
  {
    q: 'Quel élément est utilisé pour définir une légende pour un groupe de champs de formulaire ?',
    a: 'legend'
  },
  {
    q: 'Quel élément est utilisé pour afficher une valeur fractionnaire dans une barre ?',
    a: 'meter'
  },
  {
    q: 'Quel élément est utilisé pour regrouper des options dans une liste déroulante ?',
    a: 'optgroup'
  },
  {
    q: 'Quel élément est utilisé pour définir une option dans une liste déroulante ?',
    a: 'option'
  },
  {
    q: 'Quel élément est utilisé pour afficher le résultat d’un calcul dans un formulaire ?',
    a: 'output'
  },
  {
    q: 'Quel élément est utilisé pour représenter l’état d’avancement d’une tâche ?',
    a: 'progress'
  },
  {
    q: 'Quel élément est utilisé pour créer une liste déroulante dans un formulaire ?',
    a: 'select'
  },
  {
    q: 'Quel élément est utilisé pour créer une zone de texte multiligne dans un formulaire ?',
    a: 'textarea'
  },
  {
    q: 'Quel élément est utilisé pour définir la base URL pour tous les liens relatifs dans un document ?',
    a: 'base'
  },
  {
    q: 'Quel élément est utilisé pour lier un document à une feuille de style externe ?',
    a: 'link'
  },
  {
    q: 'Quel élément est utilisé pour définir des styles CSS internes ?',
    a: 'style'
  }
];


export default {
    title: 'le maxi best-of',
    q,
    allowed,
    n: 25
};