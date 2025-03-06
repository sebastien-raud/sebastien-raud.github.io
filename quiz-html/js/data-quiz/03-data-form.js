const allowed = [
    'button',
    'datalist',
    'fieldset',
    'form',
    'input',
    'label',
    'legend',
    'meter',
    'optgroup',
    'option',
    'output',
    'progress',
    'select',
    'textarea',
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
        q: 'Quel élément est utilisé pour créer un bouton interactif dans un formulaire ?',
        a: 'button'
      },
      {
        q: 'Quel élément est utilisé pour fournir une liste de valeurs prédéfinies pour un champ de saisie ?',
        a: 'datalist'
      },
      {
        q: 'Quel élément est utilisé pour regrouper des éléments de formulaire ensemble ?',
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
        q: 'Quel élément est utilisé pour définir un formulaire avec des champs de saisie ?',
        a: 'form'
      },
      {
        q: 'Quel élément est utilisé pour créer un champ de saisie de texte ?',
        a: 'input'
      },
      {
        q: 'Quel élément est utilisé pour associer une étiquette à un champ de formulaire ?',
        a: 'label'
      },
      {
        q: 'Quel élément est utilisé pour définir une légende pour un groupe de champs de formulaire ?',
        a: 'legend'
      },
      {
        q: 'Quel élément est utilisé pour afficher une valeur mesurée dans une barre ?',
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
        q: 'Quel élément est utilisé pour afficher le résultat d’une opération dans un formulaire ?',
        a: 'output'
      },
      {
        q: 'Quel élément est utilisé pour montrer la progression d’une tâche ?',
        a: 'progress'
      },
      {
        q: 'Quel élément est utilisé pour créer une liste déroulante avec des options ?',
        a: 'select'
      },
      {
        q: 'Quel élément est utilisé pour créer une zone de texte multiligne ?',
        a: 'textarea'
      },
      {
        q: 'Quel élément est utilisé pour créer un bouton dans un formulaire ?',
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
        q: 'Quel élément est utilisé pour créer un champ de saisie de mot de passe ?',
        a: 'input'
      },
      {
        q: 'Quel élément est utilisé pour créer un champ de saisie de type case à cocher ?',
        a: 'input'
      },
      {
        q: 'Quel élément est utilisé pour créer un champ de saisie de type bouton radio ?',
        a: 'input'
      },
      {
        q: 'Quel élément est utilisé pour créer un champ de saisie de type date ?',
        a: 'input'
      },
      {
        q: 'Quel élément est utilisé pour créer un champ de saisie de type email ?',
        a: 'input'
      },
      {
        q: 'Quel élément est utilisé pour créer un champ de saisie de type numérique ?',
        a: 'input'
      },
      {
        q: 'Quel élément est utilisé pour créer un champ de saisie de type fichier ?',
        a: 'input'
      },
      {
        q: 'Quel élément est utilisé pour créer un champ de saisie de type couleur ?',
        a: 'input'
      },
      {
        q: 'Quel élément est utilisé pour créer un champ de saisie de type téléphone ?',
        a: 'input'
      },
      {
        q: 'Quel élément est utilisé pour créer un champ de saisie de type URL ?',
        a: 'input'
      },
      {
        q: 'Quel élément est utilisé pour créer un champ de saisie de type recherche ?',
        a: 'input'
      },
      {
        q: 'Quel élément est utilisé pour créer un champ de saisie de type mois ?',
        a: 'input'
      },
      {
        q: 'Quel élément est utilisé pour créer un champ de saisie de type semaine ?',
        a: 'input'
      },
      {
        q: 'Quel élément est utilisé pour créer un champ de saisie de type heure ?',
        a: 'input'
      },
      {
        q: 'Quel élément est utilisé pour créer un champ de saisie de type plage de valeurs ?',
        a: 'input'
      }
];

export default {
    title: 'les formulaires',
    q,
    allowed,
    n: 10
};