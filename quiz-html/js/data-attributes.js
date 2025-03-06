const tags = [
    { name: 'accesskey', desc: 'Cet attribut permet de définir un raccourci clavier pour activer un élément ou lui passer le focus.' },
    { name: 'action', 	tags: '<form>', desc: 'L\'URI d\'un programme qui traite les informations envoyées par le formulaire' },
    { name: 'alt', tags: '<img>', desc: 'Un texte alternatif à afficher lorsque l\'élément ne peut pas être affiché.' },
    { name: 'autocapitalize', desc: 'Cet attribut contrôle la façon dont un champ texte est saisi en majuscules de façon automatique.' },
    { name: 'autocomplete', tags: '<form>, <input>, <select>, <textarea>', desc: 'Cet attribut indique que ces contrôles ou que ce formulaire peuvent être remplis automatiquement par le navigateur.' },
    { name: 'autofocus', tags: '<button>, <input>, <select>, <textarea>', desc: 'Cet attribut indique que l\'élément doit recevoir le focus automatiquement une fois que la page est chargée.' },
    { name: 'autoplay', tags: '<audio>, <video>', desc: ' 	Cet attribut indique que l\'élément audio ou vidéo doit être lancé dès que possible. ' },
    { name: 'charset', tags: '<meta>, <script>', desc: 'Cet attribut déclare l\'encodage de caractères utilisé pour la page ou le script.' },
    { name: 'checked', tags: '<command>, <input>', desc: 'Cet attribut indique si l\'élément doit être vérifié au chargement de la page.' },
    { name: 'cite', tags: '<blockquote>, <del>, <ins>, <q>', desc: 'Cet attribut est une URI qui pointe vers la source de la citation ou de la modification.' },
    { name: 'class', desc: 'Cet attribut permet de définir la ou les classes auxquelles appartient un élément afin de le manipuler en script ou de le mettre en forme avec CSS. ' },
    { name: 'cols', tags: '<textarea>', desc: 'Cet attribut définit le nombre de colonnes pour le texte contenu dans un textarea.' },
    { name: 'colspan', tags: '<td>, <th>', desc: 'Cet attribut définit le nombre de colonnes sur lequel une cellule doit s\'étendre. ' },
    { name: 'controls', tags: '<audio>, <video>', desc: 'Cet attribut indique si le navigateur doit afficher les contrôles de lecture du média pour l\'utilisateur. ' },
    { name: 'datetime', tags: '<del>, <ins>, <time>', desc: 'Cet attribut indique la date et l\'heure associées à l\'élément.' },
    { name: 'dir', 	desc: 'Cet attribut définit la direction du texte (gauche à droite ou droite à gauche).' },
    { name: 'disabled', tags: '<button>, <command>, <fieldset>, <input>, <optgroup>, <option>, <select>, <textarea>', desc: 'Cet attribut indique si l\'utilisateur peut interagir avec l\'élément. ' },
    { name: 'for', tags: '<label>, <output>', desc: 'Cet attribut décrit l\'élément auquel se rapporte l\'élément courant.' },
    { name: 'form', tags: '<button>, <fieldset>, <input>, <label>, <meter>, <object>, <output>, <progress>, <select>, <textarea>', desc: 'Cet attribut indique le formulaire auquel l\'élément se rapporte.' },
    { name: 'high', tags: '<meter>', desc: 'Cet attribut indique la borne inférieure de l\'intervalle haut.' },
    { name: 'href', tags: '<a>, <area>, <base>, <link>', desc: 'L\'URL de la ressource liée.' },
    { name: 'hreflang', tags: '<a>, <area>, <link>', desc: 'Cet attribut indique la langue utilisée pour la ressource liée.' },
    { name: 'id', desc: 'Cet attribut permet d\'identifier un élément d\'un document de façon unique. Il est généralement utilisé pour manipuler l\'élément avec des scripts ou pour le mettre en forme avec CSS. ' },
    { name: 'lang', desc: 'Cet attribut définit la langue utilisée dans l\'élément.' },
    { name: 'list', tags: '<input>', desc: 'Cet attribut constitue une liste d\'options prédéfinie qui est suggérée à l\'utilisateur.' },
    { name: 'loop', tags: '<audio>, <bgsound>, <marquee>, <video>', desc: 'Cet attribut indique si le média courant doit recommencer au début une fois que sa lecture est terminée.' },
    { name: 'low', tags: '<meter>', desc: 'Cet attribut indique la borne supérieure de l\'intervalle bas.' },
    { name: 'max', tags: '<input>, <meter>, <progress>', desc: 'Cet attribut indique la valeur maximale autorisée.' },
    { name: 'maxlength', tags: '<input>, <textarea>', desc: 'Cet attribut définit le nombre maximal de caractères autorisé dans l\'élément.' },
    { name: 'minlength', tags: '<input>, <textarea>', desc: 'Cet attribut définit le nombre minimal de caractères qui doivent être saisis dans l\'élément.' },
    { name: 'media', tags: '<a>, <area>, <link>, <source>, <style>', desc: 'Cet attribut est indication à propos du type de média pour la ressource liée.' },
    { name: 'method', tags: '<form>', desc: 'Cet attribut définit la méthode HTTP à utiliser pour l\'envoi des données du formulaire (GET par défaut ou POST)' },
    { name: 'min', tags: '<input>, <meter>', desc: 'Cet attribut indique la valeur minimale autorisée.' },
    { name: 'multiple', tags: '<input>, <select>', desc: 'Cet attribut indique si plusieurs valeurs peuvent être saisies pour des entrées de type email ou file.' },
    { name: 'muted', tags: '<audio>, <video>', desc: 'Cet attribut indique si le son de la vidéo doit être coupé lorsque la page est chargée initialement.' },
    { name: 'name', tags: '<button>, <form>, <fieldset>, <iframe>, <input>, <object>, <output>, <select>, <textarea>, <map>, <meta>, <param>', desc: 'Le nom de l\'élément qui peut être utilisé par le serveur pour identifier le champ d\'un formulaire. ' },
    { name: 'placeholder', tags: '<input>, <textarea>', desc: 'Cet attribut fournit une indication à l\'utilisateur sur ce qu\'il peut saisir dans le champ. ' },
    { name: 'readonly', tags: '<input>, <textarea>', desc: 'Cet attribut indique si l\'élément peut être édité.' },
    { name: 'rel', tags: '<a>, <area>, <link>', desc: 'Cet attribut définit la relation entre l\'objet cible et l\'objet du lien. ' },
    { name: 'required', tags: '<input>, <select>, <textarea>', desc: 'Cet attribut indique si l\'élément doit obligatoirement être renseigné dans le formulaire.' },
    { name: 'reversed', tags: '<ol>', desc: 'Cet attribut indique si la liste doit être affichée dans un ordre décroissant plutôt que dans un ordre croissant.' },
    { name: 'rows', tags: '<textarea>', desc: 'Cet attribut définit le nombre de lignes pour la zone de texte.' },
    { name: 'rowspan', tags: '<td>, <th>', desc: 'Cet attribut définit le nombre de lignes sur lesquelles une cellule doit s\'étendre. ' },
    { name: 'scope', tags: '<th>', desc: 'Définit les cellules sur lesquelles porte la cellule d\'en-tête.' },
    { name: 'selected', tags: '<option>', desc: 'Cet attribut définit la valeur qui sera sélectionnée au chargement de la page. ' },
    { name: 'size', tags: '<input>, <select>', desc: 'Cet attribut définit la largeur de l\'élément en pixels, si l\'attribut type de l\'élément vaut text ou password, cela correspond au nombre de caractères du champ. ' },
    { name: 'src', tags: '<audio>, <embed>, <iframe>, <img>, <input>, <script>, <source>, <track>, <video>', desc: 'Cet attribut indique l\'URL du contenu embarqué.' },
    { name: 'start', tags: '<ol>', desc: 'Cet attribut définit le premier nombre de la liste si celui-ci est différent de 1.' },
    { name: 'step', tags: '<input>', desc: '' },
    { name: 'tabindex', desc: 'Cet attribut permet de modifier l\'ordre dans la navigation à la tabulation. ' },
    { name: 'type', tags: '<button>, <input>, <command>, <embed>, <object>, <script>, <source>, <style>, <menu>', desc: 'Cet attribut définit le type de l\'élément.' },
    { name: 'value', tags: '<button>, <option>, <input>, <li>, <meter>, <progress>, <param>', desc: 'Cet attribut définit la valeur par défaut qui sera affichée dans l\'élément au chargement de la page. ' },
];

export function getAttributes(allowed) {

    if (!allowed) allowed = '*';

    const authorizedTags = [];

    tags.forEach(elt => {
        if (allowed == '*' || allowed.includes(elt.name)) {
            authorizedTags.push(elt);
        }
    });

    return authorizedTags;
}
