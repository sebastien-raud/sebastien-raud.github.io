const allowed = '*';
const q = [
    {
        q: 'Quel attribut universel est utilisé pour définir une combinaison de touches pour activer un élément ?',
        a: 'accesskey'
    },
    {
        q: 'Quel attribut définit l’URL où les données du formulaire doivent être envoyées ?',
        a: 'action'
    },
    {
        q: 'Quel attribut fournit un texte alternatif pour une image <img> ?',
        a: 'alt'
    },
    {
        q: 'Quel attribut contrôle la capitalisation automatique du texte dans un champ de saisie ?',
        a: 'autocapitalize'
    },
    {
        q: 'Quel attribut permet de remplir automatiquement un champ de formulaire ?',
        a: 'autocomplete'
    },
    {
        q: 'Quel attribut permet à un élément de formulaire de recevoir automatiquement le focus lors du chargement de la page ?',
        a: 'autofocus'
    },
    {
        q: 'Quel attribut permet à un fichier audio ou vidéo de démarrer automatiquement ?',
        a: 'autoplay'
    },
    {
        q: 'Quel attribut définit le jeu de caractères utilisé pour la page ?',
        a: 'charset'
    },
    {
        q: 'Quel attribut indique qu’un élément <input> de type checkbox ou radio est sélectionné par défaut ?',
        a: 'checked'
    },
    {
        q: 'Quel attribut spécifie une URL qui explique la modification d’un document ?',
        a: 'cite'
    },
    {
        q: 'Quel attribut définit une ou plusieurs classes CSS pour un élément ?',
        a: 'class'
    },
    {
        q: 'Quel attribut définit le nombre de colonnes dans un élément de tableau ?',
        a: 'cols'
    },
    {
        q: 'Quel attribut définit le nombre de colonnes qu’une cellule doit s’étendre ?',
        a: 'colspan'
    },
    {
        q: 'Quel attribut affiche les contrôles pour un fichier audio ou vidéo ?',
        a: 'controls'
    },
    {
        q: 'Quel attribut spécifie la date et l’heure d’un élément ?',
        a: 'datetime'
    },
    {
        q: 'Quel attribut définit la direction du texte dans un élément ?',
        a: 'dir'
    },
    {
        q: 'Quel attribut désactive un élément de formulaire ?',
        a: 'disabled'
    },
    {
        q: 'Quel attribut est utilisé pour lier un label à un élément de formulaire ?',
        a: 'for'
    },
    {
        q: 'Quel attribut associe un élément de formulaire à un formulaire spécifique ?',
        a: 'form'
    },
    {
        q: 'Quel attribut définit la valeur maximale pour une jauge (<meter>) ?',
        a: 'high'
    },
    {
        q: 'Quel attribut spécifie l’URL d’une page liée ?',
        a: 'href'
    },
    {
        q: 'Quel attribut définit la langue de la page liée ?',
        a: 'hreflang'
    },
    {
        q: 'Quel attribut définit un identifiant unique pour un élément ?',
        a: 'id'
    },
    {
        q: 'Quel attribut définit la langue d’un élément ?',
        a: 'lang'
    },
    {
        q: 'Quel attribut référence une liste de suggestions pour un champ de saisie ?',
        a: 'list'
    },
    {
        q: 'Quel attribut fait qu’un fichier audio ou vidéo recommence à jouer après sa fin ?',
        a: 'loop'
    },
    {
        q: 'Quel attribut définit la valeur minimale pour une jauge (<meter>) ?',
        a: 'low'
    },
    {
        q: 'Quel attribut spécifie la valeur maximale pour un élément de formulaire (ex : <input type="number">) ?',
        a: 'max'
    },
    {
        q: 'Quel attribut définit le nombre maximum de caractères pour un champ de saisie (ex : <texearea>) ?',
        a: 'maxlength'
    },
    {
        q: 'Quel attribut définit le nombre minimum de caractères pour un champ de saisie (ex : <textarea>) ?',
        a: 'minlength'
    },
    {
        q: 'Quel attribut spécifie le type de média pour lequel un lien est optimisé ?',
        a: 'media'
    },
    {
        q: 'Quel attribut définit la méthode HTTP à utiliser lors de l’envoi des données du formulaire ?',
        a: 'method'
    },
    {
        q: 'Quel attribut spécifie la valeur minimale pour un élément de formulaire (ex : <input type="number">) ?',
        a: 'min'
    },
    {
        q: 'Quel attribut permet la sélection de plusieurs valeurs dans une liste (<select>) ?',
        a: 'multiple'
    },
    {
        q: 'Quel attribut désactive le son d’un fichier audio ou vidéo ?',
        a: 'muted'
    },
    {
        q: 'Quel attribut définit le nom d’un élément de formulaire ?',
        a: 'name'
    },
    {
        q: 'Quel attribut fournit une courte indication sur ce qui doit être saisi dans un champ de formulaire ?',
        a: 'placeholder'
    },
    {
        q: 'Quel attribut rend un champ de formulaire non modifiable ?',
        a: 'readonly'
    },
    {
        q: 'Quel attribut spécifie la relation entre la page courante et la page liée ?',
        a: 'rel'
    },
    {
        q: 'Quel attribut indique qu’un champ de formulaire doit être rempli avant l’envoi ?',
        a: 'required'
    },
    {
        q: 'Quel attribut inverse l’ordre des éléments dans une liste ordonnée <ol> ?',
        a: 'reversed'
    },
    {
        q: 'Quel attribut définit le nombre de lignes dans un élément de tableau ?',
        a: 'rows'
    },
    {
        q: 'Quel attribut définit le nombre de lignes qu’une cellule doit s’étendre ?',
        a: 'rowspan'
    },
    {
        q: 'Quel attribut définit la portée d’une cellule d’en-tête dans un tableau ?',
        a: 'scope'
    },
    {
        q: 'Quel attribut indique qu’une option dans une liste déroulante est sélectionnée par défaut ?',
        a: 'selected'
    },
    {
        q: 'Quel attribut définit la taille d’un élément de formulaire (<input> ou <select>) ?',
        a: 'size'
    },
    {
        q: 'Quel attribut spécifie l’URL d’une image ?',
        a: 'src'
    },
    {
        q: 'Quel attribut spécifie l’intervalle entre les valeurs légales dans un élément de formulaire (ex : <input type="number">) ?',
        a: 'step'
    },
    {
        q: 'Quel attribut définit l’ordre de tabulation d’un élément ?',
        a: 'tabindex'
    },
    {
        q: 'Quel attribut définit le type d’un élément de formulaire ?',
        a: 'type'
    },
    {
        q: 'Quel attribut définit la valeur par défaut d’un élément de formulaire ?',
        a: 'value'
    },
    {
        q: 'Quel attribut permet de définir une touche d’accès rapide pour un élément ?',
        a: 'accesskey'
    },
    {
        q: 'Quel attribut est utilisé pour spécifier l’URL de traitement d’un formulaire ?',
        a: 'action'
    },
    {
        q: 'Quel attribut fournit une description textuelle pour les images ?',
        a: 'alt'
    },
    {
        q: 'Quel attribut contrôle la capitalisation automatique dans les champs de texte ?',
        a: 'autocapitalize'
    },
    {
        q: 'Quel attribut permet de compléter automatiquement un champ de formulaire ?',
        a: 'autocomplete'
    },
    {
        q: 'Quel attribut permet à un élément d’obtenir le focus automatiquement ?',
        a: 'autofocus'
    },
    {
        q: 'Quel attribut permet à un fichier multimédia de se lire automatiquement ?',
        a: 'autoplay'
    },
    {
        q: 'Quel attribut définit le jeu de caractères pour un document HTML ?',
        a: 'charset'
    },
    {
        q: 'Quel attribut indique qu’une case à cocher ou un bouton radio est sélectionné ?',
        a: 'checked'
    },
    {
        q: 'Quel attribut spécifie une URL pour une citation ?',
        a: 'cite'
    },
    {
        q: 'Quel attribut est utilisé pour définir des styles CSS pour un élément ?',
        a: 'class'
    },
    {
        q: 'Quel attribut définit le nombre de colonnes dans un tableau ?',
        a: 'cols'
    },
    {
        q: 'Quel attribut permet à une cellule de tableau de s’étendre sur plusieurs colonnes ?',
        a: 'colspan'
    },
    {
        q: 'Quel attribut affiche les commandes de lecture pour un fichier multimédia ?',
        a: 'controls'
    },
    {
        q: 'Quel attribut spécifie la date et l’heure associées à un élément ?',
        a: 'datetime'
    },
    {
        q: 'Quel attribut définit la direction du texte dans un élément ?',
        a: 'dir'
    },
    {
        q: 'Quel attribut désactive un élément de formulaire ?',
        a: 'disabled'
    },
    {
        q: 'Quel attribut associe un label à un élément de formulaire ?',
        a: 'for'
    },
    {
        q: 'Quel attribut lie un élément de formulaire à un formulaire spécifique ?',
        a: 'form'
    },
    {
        q: 'Quel attribut définit la valeur maximale d’une jauge ?',
        a: 'high'
    },
    {
        q: 'Quel attribut spécifie l’URL d’une ressource liée ?',
        a: 'href'
    },
    {
        q: 'Quel attribut définit la langue de la ressource liée ?',
        a: 'hreflang'
    },
    {
        q: 'Quel attribut fournit un identifiant unique à un élément ?',
        a: 'id'
    },
    {
        q: 'Quel attribut définit la langue d’un élément ?',
        a: 'lang'
    },
    {
        q: 'Quel attribut associe un champ de saisie à une liste de suggestions ?',
        a: 'list'
    },
    {
        q: 'Quel attribut fait qu’un fichier multimédia se répète automatiquement ?',
        a: 'loop'
    },
    {
        q: 'Quel attribut définit la valeur minimale d’une jauge ?',
        a: 'low'
    },
    {
        q: 'Quel attribut spécifie la valeur maximale pour un élément de formulaire ?',
        a: 'max'
    },
    {
        q: 'Quel attribut limite le nombre de caractères dans un champ de texte ?',
        a: 'maxlength'
    },
    {
        q: 'Quel attribut spécifie le nombre minimum de caractères pour un champ de texte ?',
        a: 'minlength'
    },
    {
        q: 'Quel attribut spécifie le type de média pour lequel un lien est optimisé ?',
        a: 'media'
    },
    {
        q: 'Quel attribut définit la méthode de soumission d’un formulaire ?',
        a: 'method'
    },
    {
        q: 'Quel attribut spécifie la valeur minimale pour un élément de formulaire ?',
        a: 'min'
    },
    {
        q: 'Quel attribut permet la sélection de plusieurs options dans une liste ?',
        a: 'multiple'
    },
    {
        q: 'Quel attribut désactive le son d’un fichier multimédia ?',
        a: 'muted'
    },
    {
        q: 'Quel attribut fournit un nom à un élément de formulaire ?',
        a: 'name'
    },
    {
        q: 'Quel attribut affiche un texte d’exemple dans un champ de formulaire ?',
        a: 'placeholder'
    },
    {
        q: 'Quel attribut rend un champ de formulaire non modifiable ?',
        a: 'readonly'
    },
    {
        q: 'Quel attribut spécifie la relation entre la page courante et la page liée ?',
        a: 'rel'
    },
    {
        q: 'Quel attribut rend un champ de formulaire obligatoire ?',
        a: 'required'
    },
    {
        q: 'Quel attribut inverse l’ordre des éléments dans une liste ordonnée ?',
        a: 'reversed'
    },
    {
        q: 'Quel attribut définit le nombre de lignes dans un tableau ?',
        a: 'rows'
    },
    {
        q: 'Quel attribut permet à une cellule de tableau de s’étendre sur plusieurs lignes ?',
        a: 'rowspan'
    },
    {
        q: 'Quel attribut définit la portée d’une cellule d’en-tête dans un tableau ?',
        a: 'scope'
    },
    {
        q: 'Quel attribut indique qu’une option est sélectionnée par défaut dans une liste déroulante ?',
        a: 'selected'
    },
    {
        q: 'Quel attribut définit la taille d’un élément de formulaire ?',
        a: 'size'
    },
    {
        q: 'Quel attribut spécifie l’URL d’une ressource multimédia ?',
        a: 'src'
    },
    {
        q: 'Quel attribut définit le point de départ d’une jauge ?',
        a: 'start'
    },
    {
        q: 'Quel attribut spécifie l’intervalle entre les valeurs légales dans un élément de formulaire ?',
        a: 'step'
    },
    {
        q: 'Quel attribut définit l’ordre de tabulation d’un élément ?',
        a: 'tabindex'
    },
    {
        q: 'Quel attribut définit le type d’un élément de formulaire ?',
        a: 'type'
    },
    {
        q: 'Quel attribut définit la valeur par défaut d’un élément de formulaire ?',
        a: 'value'
    },
    {
        q: 'Quel attribut permet de définir une touche d’accès rapide pour un élément ?',
        a: 'accesskey'
    },
    {
        q: 'Quel attribut est utilisé pour spécifier l’URL de traitement d’un formulaire ?',
        a: 'action'
    },
    {
        q: 'Quel attribut fournit une description textuelle pour les images ?',
        a: 'alt'
    },
    {
        q: 'Quel attribut contrôle la capitalisation automatique dans les champs de texte ?',
        a: 'autocapitalize'
    },
    {
        q: 'Quel attribut permet de compléter automatiquement un champ de formulaire ?',
        a: 'autocomplete'
    },
    {
        q: 'Quel attribut permet à un élément d’obtenir le focus automatiquement ?',
        a: 'autofocus'
    },
    {
        q: 'Quel attribut permet à un fichier multimédia de se lire automatiquement ?',
        a: 'autoplay'
    },
    {
        q: 'Quel attribut définit le jeu de caractères pour un document HTML ?',
        a: 'charset'
    },
    {
        q: 'Quel attribut indique qu’une case à cocher ou un bouton radio est sélectionné ?',
        a: 'checked'
    },
    {
        q: 'Quel attribut spécifie une URL pour une citation ?',
        a: 'cite'
    },
    {
        q: 'Quel attribut est utilisé pour définir des styles CSS pour un élément ?',
        a: 'class'
    },
    {
        q: 'Quel attribut définit le nombre de colonnes dans un tableau ?',
        a: 'cols'
    },
    {
        q: 'Quel attribut permet à une cellule de tableau de s’étendre sur plusieurs colonnes ?',
        a: 'colspan'
    },
    {
        q: 'Quel attribut affiche les commandes de lecture pour un fichier multimédia ?',
        a: 'controls'
    },
    {
        q: 'Quel attribut spécifie la date et l’heure associées à un élément ?',
        a: 'datetime'
    },
    {
        q: 'Quel attribut définit la direction du texte dans un élément ?',
        a: 'dir'
    },
    {
        q: 'Quel attribut désactive un élément de formulaire ?',
        a: 'disabled'
    },
    {
        q: 'Quel attribut associe un label à un élément de formulaire ?',
        a: 'for'
    },
    {
        q: 'Quel attribut lie un élément de formulaire à un formulaire spécifique ?',
        a: 'form'
    },
    {
        q: 'Quel attribut définit la valeur maximale d’une jauge ?',
        a: 'high'
    },
    {
        q: 'Quel attribut spécifie l’URL d’une ressource liée ?',
        a: 'href'
    },
    {
        q: 'Quel attribut définit la langue de la ressource liée ?',
        a: 'hreflang'
    },
    {
        q: 'Quel attribut fournit un identifiant unique à un élément ?',
        a: 'id'
    },
    {
        q: 'Quel attribut définit la langue d’un élément ?',
        a: 'lang'
    },
    {
        q: 'Quel attribut associe un champ de saisie à une liste de suggestions ?',
        a: 'list'
    },
    {
        q: 'Quel attribut fait qu’un fichier multimédia se répète automatiquement ?',
        a: 'loop'
    },
    {
        q: 'Quel attribut définit la valeur minimale d’une jauge ?',
        a: 'low'
    },
    {
        q: 'Quel attribut spécifie la valeur maximale pour un élément de formulaire ?',
        a: 'max'
    },
    {
        q: 'Quel attribut limite le nombre de caractères dans un champ de texte ?',
        a: 'maxlength'
    },
    {
        q: 'Quel attribut spécifie le nombre minimum de caractères pour un champ de texte ?',
        a: 'minlength'
    },
    {
        q: 'Quel attribut spécifie le type de média pour lequel un lien est optimisé ?',
        a: 'media'
    },
    {
        q: 'Quel attribut définit la méthode de soumission d’un formulaire ?',
        a: 'method'
    },
    {
        q: 'Quel attribut spécifie la valeur minimale pour un élément de formulaire ?',
        a: 'min'
    },
    {
        q: 'Quel attribut permet la sélection de plusieurs options dans une liste ?',
        a: 'multiple'
    },
    {
        q: 'Quel attribut désactive le son d’un fichier multimédia ?',
        a: 'muted'
    },
    {
        q: 'Quel attribut fournit un nom à un élément de formulaire ?',
        a: 'name'
    },
    {
        q: 'Quel attribut affiche un texte d’exemple dans un champ de formulaire ?',
        a: 'placeholder'
    },
    {
        q: 'Quel attribut rend un champ de formulaire non modifiable ?',
        a: 'readonly'
    },
    {
        q: 'Quel attribut spécifie la relation entre la page courante et la page liée ?',
        a: 'rel'
    },
    {
        q: 'Quel attribut rend un champ de formulaire obligatoire ?',
        a: 'required'
    },
    {
        q: 'Quel attribut inverse l’ordre des éléments dans une liste ordonnée ?',
        a: 'reversed'
    },
    {
        q: 'Quel attribut définit le nombre de lignes dans un tableau ?',
        a: 'rows'
    },
    {
        q: 'Quel attribut permet à une cellule de tableau de s’étendre sur plusieurs lignes ?',
        a: 'rowspan'
    },
    {
        q: 'Quel attribut définit la portée d’une cellule d’en-tête dans un tableau ?',
        a: 'scope'
    },
    {
        q: 'Quel attribut indique qu’une option est sélectionnée par défaut dans une liste déroulante ?',
        a: 'selected'
    },
    {
        q: 'Quel attribut définit la taille d’un élément de formulaire ?',
        a: 'size'
    },
    {
        q: 'Quel attribut spécifie l’URL d’une ressource multimédia ?',
        a: 'src'
    },
    {
        q: 'Quel attribut définit le point de départ d’une jauge ?',
        a: 'start'
    },
    {
        q: 'Quel attribut spécifie l’intervalle entre les valeurs légales dans un élément de formulaire ?',
        a: 'step'
    },
    {
        q: 'Quel attribut définit l’ordre de tabulation d’un élément ?',
        a: 'tabindex'
    },
    {
        q: 'Quel attribut définit le type d’un élément de formulaire ?',
        a: 'type'
    },
    {
        q: 'Quel attribut définit la valeur par défaut d’un élément de formulaire ?',
        a: 'value'
    }
];

export default {
    title: 'les attributs HTML',
    q,
    allowed,
    n: 15
};