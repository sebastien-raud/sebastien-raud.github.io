const tags = [
    {
        cat: 'Racine principale',
        desc: '',
        elts: [
            {
                name: 'html',
                desc: 'Représente la racine d\'un document HTML. Tout autre élément du document doit être un descendant de cet élément.',
            }
        ]
    },
    {
        cat: 'Métadonnées du document',
        desc: 'Les métadonnées contiennent des informations à propos de la page. Elles comprennent des informations des données qui aident les programmes (moteur de recherche, navigateurs, etc.) à utiliser et à rendre la page.',
        elts: [
            { name: 'base', desc: 'L\'élément <base> définit l\'URL de base à utiliser pour recomposer toutes les URL relatives contenues dans un document. Il ne peut y avoir qu\'un seul élément <base> au sein d\'un document.' },
            { name: 'head', desc: 'Fournit des informations générales (métadonnées) sur le document, incluant son titre et des liens ou des définitions vers des scripts et feuilles de style.' },
            { name: 'link', desc: 'Définit la relation entre le document courant et une ressource externe. Cet élément peut être utilisé pour définir un lien vers une feuille de style, vers les icônes utilisées en barre de titre ou comme icône d\'application sur les appareils mobiles.' },
            { name: 'meta', desc: 'Représente toute information de métadonnées qui ne peut pas être représentée par un des éléments (<base>, <link>, <script>, <style> ou <title>).' },
            { name: 'style', desc: 'Contient des informations de mise en forme pour un document ou une partie d\'un document. Par défaut, les instructions de mise en forme écrites dans cet élément sont écrites en CSS.' },
            { name: 'title', desc: 'L\'élément <title> définit le titre du document (qui est affiché dans la barre de titre du navigateur ou dans l\'onglet de la page). Cet élément ne peut contenir que du texte, les balises qu\'il contiendrait seraient ignorées.' },
        ]
    },
    {
        cat: 'Racine de sectionnement',
        desc: 'Organiser le contenu d\'une page en différentes sections permet d\'avoir une structure logique au sein d\'un document. Grâce à ces éléments, on peut créer un plan pour la page, ajouter des titres pour identifier les sections et également gérer un en-tête et un bas de page.',
        elts: [
            {name: 'body' , desc: 'Représente le contenu principal du document HTML. Il ne peut y avoir qu\'un élément <body> par document.'}
        ]
    },
    {
        cat: 'Sectionnement du contenu',
        desc: '',
        elts: [
            { name: 'address', desc: 'Indique des informations de contact pour une personne, un groupe de personnes ou une organisation.' },
            { name: 'article', desc: 'L\'élément <article> représente une composition autonome dans un document, une page, une application ou un site, destinée à être distribuée ou réutilisée de manière indépendante. Exemples : un message de forum, un article de magazine, de journal ou de blog, une fiche produit...' },
            { name: 'aside', desc: 'L\'élément <aside> (en français, « aparté ») représente une partie d\'un document dont le contenu n\'a qu\'un rapport indirect avec le contenu principal du document. Les apartés sont fréquemment présents sous la forme d\'encadrés ou de boîtes de légende.' },
            { name: 'footer', desc: 'Représente le pied de page de la section ou de la racine de sectionnement la plus proche. Un élément <footer> contient habituellement des informations sur l\'autrice ou l\'auteur de la section, les données relatives au droit d\'auteur (copyright) ou les liens vers d\'autres documents en relation.' },
            { name: 'header', desc: 'L\'élément HTML <header> représente du contenu introductif, généralement un groupe de contenu introductif ou de contenu aidant à la navigation. Il peut contenir des éléments de titre, mais aussi d\'autres éléments tels qu\'un logo, un formulaire de recherche, le nom d\'auteur, etc.' },
            { name: 'h1', desc: 'Les éléments <h1> à <h6> représentent six niveaux de titres dans un document, <h1> est le plus important et <h6> est le moins important.' },
            { name: 'h2', desc: 'Les éléments <h1> à <h6> représentent six niveaux de titres dans un document, <h1> est le plus important et <h6> est le moins important.' },
            { name: 'h3', desc: 'Les éléments <h1> à <h6> représentent six niveaux de titres dans un document, <h1> est le plus important et <h6> est le moins important.' },
            { name: 'h4', desc: 'Les éléments <h1> à <h6> représentent six niveaux de titres dans un document, <h1> est le plus important et <h6> est le moins important.' },
            { name: 'h5', desc: 'Les éléments <h1> à <h6> représentent six niveaux de titres dans un document, <h1> est le plus important et <h6> est le moins important.' },
            { name: 'h6', desc: 'Les éléments <h1> à <h6> représentent six niveaux de titres dans un document, <h1> est le plus important et <h6> est le moins important.' },
            { name: 'hgroup', desc: 'Représente un titre groupé avec du contenu secondaire tel qu\'un sous-titre, un titre alternatif ou un slogan.' },
            { name: 'main', desc: 'Représente le contenu majoritaire du corps du document. Le contenu principal de la zone est constitué de contenu directement en relation, ou qui étend le sujet principal du document ou de la fonctionnalité principale d\'une application.' },
            { name: 'nav', desc: 'Représente une section d\'une page ayant des liens vers d\'autres pages ou des fragments de cette page. Autrement dit, c\'est une section destinée à la navigation dans un document (avec des menus, des tables des matières, des index, etc.).' },
            { name: 'section', desc: 'Représente une section générique d\'un document, par exemple un groupe de contenu thématique. Une section devrait généralement commencer avec un titre.' },
        ]
    },
    {
        cat: 'Contenu textuel',
        desc: 'Le contenu HTML textuel permet d\'organiser des blocs ou des sections de contenu entre la balise ouvrante <body> et la balise fermante </body>.',
        elts: [
            { name: 'blockquote', desc: 'Indique que le texte contenu dans l\'élément est une citation longue. Le texte est généralement affiché avec une indentation. Une URL indiquant la source de la citation peut être donnée grâce à l\'attribut cite tandis qu\'un texte représentant la source peut être donné via l\'élément <cite>.' },
            { name: 'dd', desc: 'Fournit la description, la définition ou la valeur du terme précédent (<dt>) dans une liste de description (<dl>).' },
            { name: 'div', desc: 'Un conteneur générique du contenu du flux. Il n\'a aucun effet sur le contenu ou la mise en page tant qu\'il n\'est pas mis en forme d\'une manière quelconque à l\'aide de CSS.' },
            { name: 'dl', desc: 'Représente une liste de descriptions sous la forme d\'une liste de paires associant des termes (fournis par des éléments <dt>) et leurs descriptions ou définitions (fournies par des éléments <dd>). On utilisera par exemple cet élément pour implémenter un glossaire ou pour afficher des métadonnées organisées comme liste de clés/valeurs.' },
            { name: 'dt', desc: 'Identifie un terme dans une liste de définitions ou de descriptions. Cet élément n\'apparaît qu\'en tant qu\'élément enfant d\'un élément <dl> et est généralement suivi d\'un élément <dd>. Plusieurs éléments <dt> qui se suivent indiqueront qu\'ils partagent la définition/description fournie par le prochain élément <dd>.' },
            { name: 'figcaption', desc: 'Représente une légende décrivant le reste du contenu de son élément parent <figure>.' },
            { name: 'figure', desc: 'Représente un contenu autonome, éventuellement accompagné d\'une légende facultative, qui est spécifiée à l\'aide de l\'élément <figcaption>. La figure, sa légende et son contenu sont référencés comme une seule unité.' },
            { name: 'hr', desc: 'Représente un changement thématique entre des éléments de paragraphe (par exemple, un changement de décor dans un récit, un changement de sujet au sein d\'une section).' },
            { name: 'li', desc: 'Représente un élément dans une liste. Il doit être contenu dans un élément parent : une liste ordonnée (<ol>), une liste non ordonnée (<ul>) ou un menu (<menu>). Les éléments de liste sont habituellement affichés en utilisant des puces ou, dans les listes ordonnées, un compteur croissant à gauche, tel qu\'un nombre ou une lettre.' },
            { name: 'menu', desc: 'L\'élément HTML <menu> est une alternative sémantique à <ul>, mais est traité par les navigateurs, et en termes d\'accessibilité comme un élément <ul>. Il représente une liste d\'éléments non-ordonnée (chaque élément de la liste étant représenté par un élément <li>).' },
            { name: 'ol', desc: 'Représente une liste ordonnée. Les éléments d\'une telle liste sont généralement affichés avec un indicateur ordinal pouvant prendre la forme de nombres, de lettres, de chiffres romains ou de points.' },
            { name: 'p', desc: 'Représente un paragraphe de texte. Les paragraphes sont généralement représentés comme des blocs et séparés par un espace vertical, leur première ligne est également parfois indentée. Les paragraphes sont des éléments blocs.' },
            { name: 'pre', desc: 'L\'élément HTML <pre> représente du texte préformaté, généralement écrit avec une police à chasse fixe. Le texte est affiché tel quel, les espaces utilisés dans le document HTML seront retranscrits.' },
            { name: 'ul', desc: 'Représente une liste d\'éléments sans ordre particulier. Il est souvent représenté par une liste à puces.' },
            
        ]
    },
    {
        cat: 'Sémantique du texte en ligne',
        desc: 'Les éléments pour le texte en ligne peuvent être utilisés pour définir la signification, la structure ou la mise en forme d\'un terme, d\'une ligne ou d\'un fragment de texte.',
        elts: [
            { name: 'a', desc: 'Avec son attribut href, il crée un lien hypertexte vers des pages web, des fichiers, des adresses e-mail, des emplacements se trouvant dans la même page, ou tout ce qu\'une URL peut adresser. Le contenu de chaque élément <a> doit indiquer la destination du lien. Si l\'attribut href est présent, appuyer sur la touche entrée en se concentrant sur l\'élément <a> l\'activera.' },
            { name: 'abbr', desc: 'Représente une abréviation ou un acronyme ; l\'attribut facultatif title peut fournir une explication ou une description de l\'abréviation. S\'il est présent, title doit contenir cette description complète et rien d\'autre.' },
            { name: 'b', desc: 'Permet d\'attirer l\'attention du lecteur sur un contenu qui n\'a pas, pour autant, d\'importance significative. Anciennement utilisé pour mettre le texte en gras. Cet élément ne doit pas être utilisé pour mettre en forme des éléments, c\'est la propriété CSS font-weight qu\'il faut utiliser. Si l\'élément est d\'une importance particulière, on utilisera l\'élément HTML <strong>.' },
            { name: 'bdi', desc: 'L\'élément <bdi> (ou élément d\'isolation de texte bidirectionnel) isole une portée (span) de texte pouvant être formatée dans une direction différente de celle du texte qui l\'entoure. Cela permet, par exemple, de présenter correctement une citation en arabe (écrit de droite à gauche) au sein d\'un texte écrit en français (écrit de gauche à droite).' },
            { name: 'bdo', desc: 'Utilisé afin d\'outrepasser la direction du texte. Cela permet d\'imposer une direction donnée à un texte. L\'orientation du texte est inversée mais pas celle des caractères.' },
            { name: 'br', desc: 'Crée un saut de ligne (un retour chariot) dans le texte. Il s\'avère utile lorsque les sauts de ligne ont une importance (par exemple lorsqu\'on écrit une adresse ou un poème).' },
            { name: 'cite', desc: 'L\'élément <cite> contient le titre d\'une œuvre telle qu\'un livre, une chanson, un film, une sculpture… Cet élément doit inclure le titre de l\'œuvre. Cette référence peut-être abrégée en accord avec les conventions d\'usages pour l\'ajout des métadonnées de citations.' },
            { name: 'code', desc: 'Représente un court fragment de code machine. Par défaut, l\'agent utilisateur utilise une police à chasse fixe (monospace) afin d\'afficher le texte contenu dans cet élément.' },
            { name: 'data', desc: 'Relie un contenu à une version de ce contenu interprétable par un ordinateur. Si le contenu possède une composante temporelle, l\'élément <time> doit être utilisé.' },
            { name: 'dfn', desc: 'Utilisé pour indiquer le terme défini dans le contexte d\'une expression ou d\'une phrase de définition. L\'élément <p>, le couple <dt>/<dd> ou l\'élément <section> qui est le plus proche ancêtre de <dfn> est considéré comme la définition du terme.' },
            { name: 'em', desc: 'L\'élément HTML <em> (pour emphase) est utilisé afin de marquer un texte sur lequel on veut insister. Les éléments <em> peuvent être imbriqués, chaque degré d\'imbrication indiquant un degré d\'insistance plus élevé.' },
            { name: 'i', desc: 'Représente un morceau de texte qui se différencie du texte principal. Cela peut par exemple être le cas pour des termes techniques, des phrases dans une langue étrangère ou encore l\'expression des pensées d\'un personnage. Le contenu de cet élément est généralement affiché en italique.' },
            { name: 'kbd', desc: 'Représente une plage de texte en ligne indiquant la saisie de texte par l\'utilisateur à partir d\'un clavier, d\'une saisie vocale ou de tout autre dispositif de saisie de texte. Par convention, l\'agent utilisateur rend par défaut le contenu d\'un élément <kbd> en utilisant sa police monospace, bien que cela ne soit pas requis par le standard HTML.' },
            { name: 'mark', desc: 'Représente un texte marqué ou surligné à cause de sa pertinence dans le contexte. Il peut par exemple être utilisé afin d\'indiquer les correspondances d\'un mot-clé recherché au sein d\'un document.' },
            { name: 'q', desc: 'Indique que le texte qu\'il contient est une citation en incise. La plupart des navigateurs modernes entourent le texte de cet élément avec des marques de citation. Cet élément est destiné aux citations courtes qui ne nécessitent pas de sauts de paragraphe. Pour les plus grandes citations, on utilisera l\'élément <blockquote>.' },
            { name: 'rp', desc: 'Utilisé pour fournir ce qui fera office de parenthèse aux navigateurs qui ne prennent pas en charge les annotations Ruby.' },
            { name: 'rt', desc: 'Indique la composante texte d\'une annotation Ruby, il est notamment utilisé pour la prononciation, la traduction ou la translittération des caractères d\'Asie orientale. Cet élément est toujours contenu dans un élément <ruby>.' },
            { name: 'ruby', desc: 'Représente une annotation ruby. Les annotations Ruby servent à afficher la prononciation des caractères d\'Asie orientale.' },
            { name: 's', desc: 'Permet d\'afficher du texte qui est barré, car il n\'est plus pertinent ou, car il est obsolète. <s> ne doit pas être employé pour indiquer des éditions dans un document (on utilisera alors <del> et <ins>).' },
            { name: 'samp', desc: 'L\'élément HTML <samp> est un élément qui permet de représenter un résultat produit par un programme informatique en incise dans du texte. Il est généralement affiché avec la police à chasse fixe du navigateur (par exemple en Courier ou en Lucida Console).' },
            { name: 'small', desc: 'Permet de représenter des commentaires ou des textes à écrire en petits caractères (des termes d\'un contrat, des mentions relatives au droit d\'auteur, etc.) quelle que soit la présentation.' },
            { name: 'span', desc: 'Un conteneur générique en ligne (inline) pour les contenus phrasés. Il ne représente rien de particulier. Il peut être utilisé pour grouper des éléments afin de les mettre en forme ou parce qu\'ils partagent certaines valeurs d\'attribut comme lang. Il doit uniquement être utilisé lorsqu\'aucun autre élément sémantique n\'est approprié.' },
            { name: 'strong', desc: 'Indique que le texte a une importance particulière ou un certain sérieux voire un caractère urgent. Cela se traduit généralement par un affichage en gras.' },
            { name: 'sub', desc: 'Utilisé, pour des raisons typographiques, afin d\'afficher du texte en indice (sous la ligne de base et généralement plus petit) par rapport au bloc de texte environnant.' },
            { name: 'sup', desc: 'Utilisé, pour des raisons typographiques, afin d\'afficher du texte en exposant (plus haut et généralement plus petit) par rapport au bloc de texte environnant.' },
            { name: 'time', desc: 'Représente une période donnée. Cet élément permet d\'utiliser l\'attribut datetime afin de traduire la date ou l\'instant dans un format informatique (permettant aux moteurs de recherche d\'exploiter ces données ou de créer des rappels).' },
            { name: 'u', desc: 'Affiche un fragment de texte qui est annoté avec des éléments non textuels. Par défaut, le contenu de l\'élément est souligné. Cela pourra par exemple être le cas pour marquer un texte comme étant un nom propre chinois, ou pour marquer un texte qui a été mal orthographié.' },
            { name: 'var', desc: 'Représente une variable dans une expression mathématique ou un texte lié à la programmation. Son contenu est généralement représenté avec une version italique de la police environnante utilisée, toutefois, ce comportement peut dépendre du navigateur utilisé.' },
            { name: 'wbr', desc: 'Représente un emplacement où casser la ligne si nécessaire. Le navigateur pourra alors utiliser cet emplacement pour effectuer un saut de ligne si le texte est trop long et qu\'en temps normal, une règle empêche le saut de ligne.' },
        ]
    },
    {
        cat: 'Images et médias',
        desc: '',
        elts: [
            { name: 'area', desc: 'Définit une zone particulière d\'une image et peut lui associer un lien hypertexte. Cet élément n\'est utilisé qu\'au sein d\'un élément <map>.' },
            { name: 'audio', desc: 'Utilisé afin d\'intégrer un contenu sonore dans un document. Il peut contenir une ou plusieurs sources audio représentées avec l\'attribut src ou l\'élément <source> : le navigateur choisira celle qui convient le mieux. Il peut également être la destination de médias diffusés en continu, en utilisant un MediaStream.' },
            { name: 'img', desc: 'L\'élément HTML <img> permet d\'intégrer une image dans un document.' },
            { name: 'map', desc: 'Utilisé avec des éléments <area> afin de définir une image cliquable divisée en régions.' },
            { name: 'track', desc: 'Utilisé comme élément fils d\'un élément <audio> ou <video> et permet de fournir une piste texte pour le média (par exemple afin de gérer automatiquement les sous-titres). Les pistes texte utilisées avec cet élément sont formatées selon le format WebVTT (ce sont des fichiers .vtt) (WebVTT pour Web Video Text Tracks).' },
            { name: 'video', desc: 'Intègre un contenu vidéo dans un document.' },
        ]
    },
    {
        cat: 'Contenu tabulaire',
        desc: '',
        elts: [
            { name: 'caption', desc: 'L\'élément <caption> définit la légende (ou le titre) d\'un tableau.' },
            { name: 'col', desc: 'Définit une colonne appartenant à un tableau et est utilisé afin de définir la sémantique commune à toutes ses cellules. On trouve généralement cet élément au sein d\'un élément <colgroup>.' },
            { name: 'colgroup', desc: 'Définit un groupe de colonnes au sein d\'un tableau.' },
            { name: 'table', desc: 'Représente un tableau de données, c\'est-à-dire des informations exprimées sur un tableau en deux dimensions.' },
            { name: 'tbody', desc: 'L\'élément HTML <tbody> permet de regrouper un ou plusieurs éléments <tr> afin de former le corps d\'un tableau HTML (<table>).' },
            { name: 'td', desc: 'L\'élément HTML <td> définit une cellule d\'un tableau qui contient des données. Cet élément fait partie du modèle de tableau.' },
            { name: 'tfoot', desc: 'L\'élément HTML <tfoot> permet de définir un ensemble de lignes qui résument les colonnes d\'un tableau.' },
            { name: 'th', desc: 'Définit une cellule d\'un tableau comme une cellule d\'en-tête pour un groupe de cellule. La nature de ce groupe est définie grâce aux attributs scope et headers.' },
            { name: 'thead', desc: 'L\'élément HTML <thead> définit un ensemble de lignes qui définit l\'en-tête des colonnes d\'un tableau.' },
            { name: 'tr', desc: 'Définit une ligne de cellules dans un tableau. Une ligne peut être constituée d\'éléments <td> (les données des cellules) et <th> (les cellules d\'en-têtes).' }
        ]
    },
    {
        cat: 'Formulaires',
        desc: '',
        elts: [
            { name: 'button', desc: 'L\'élément <button> représente un bouton cliquable, utilisé pour soumettre des formulaires ou n\'importe où dans un document pour une fonctionnalité de bouton accessible et standard.' },
            { name: 'datalist', desc: 'Contient un ensemble d\'éléments <option> qui représentent les valeurs possibles pour d\'autres contrôles.' },
            { name: 'fieldset', desc: 'Utilisé afin de regrouper plusieurs contrôles interactifs ainsi que des étiquettes (<label>) dans un formulaire HTML.' },
            { name: 'form', desc: 'Représente un formulaire, c\'est-à-dire une section d\'un document qui contient des contrôles interactifs permettant à un utilisateur de fournir des informations.' },
            { name: 'input', desc: 'L\'élément HTML <input> est utilisé pour créer un contrôle interactif dans un formulaire web qui permet à l\'utilisatrice ou l\'utilisateur de saisir des données. Les saisies possibles et le comportement de l\'élément <input> dépendent de la valeur indiquée dans son attribut type.' },
            { name: 'label', desc: 'Représente une légende pour un objet d\'une interface utilisateur. Il peut être associé à un contrôle en utilisant l\'attribut for ou en plaçant l\'élément du contrôle à l\'intérieur de l\'élément <label>. Un tel contrôle est appelé contrôle étiqueté par l\'élément <label>.' },
            { name: 'legend', desc: 'Représente une légende pour le contenu de son élément parent <fieldset>.' },
            { name: 'meter', desc: 'Représente une valeur scalaire dans un intervalle donné ou une valeur fractionnaire.' },
            { name: 'optgroup', desc: 'Utilisé dans un formulaire, il permet de créer un groupe d\'options parmi lesquelles on peut choisir dans un élément <select>.' },
            { name: 'option', desc: 'Utilisé dans un formulaire, il permet de représenter un contrôle au sein d\'un élément <select>, <optgroup> ou <datalist>. Cet élément peut donc représenter des éléments d\'un menu dans un document HTML.' },
            { name: 'output', desc: 'Représente un conteneur dans lequel un site ou une application peut injecter le résultat d\'un calcul ou d\'une action utilisateur.' },
            { name: 'progress', desc: 'Indique l\'état de complétion \'une tâche et est généralement représenté par une barre de progression.' },
            { name: 'select', desc: 'Représente un contrôle qui fournit une liste d\'options parmi lesquelles l\'utilisateur pourra choisir.' },
            { name: 'textarea', desc: 'Représente un contrôle qui permet d\'éditer du texte sur plusieurs lignes.' },
        ]
    }
];

/* @todo : tableaux et formulaires */

export function getTags(allowed) {

    if (!allowed) allowed = '*';

    const authorizedTags = [];

    tags.forEach(catTags => {
        catTags.elts.forEach(elt => {
            if (allowed == '*' || allowed.includes(elt.name)) {
                elt.cat = catTags.cat;
                authorizedTags.push(elt);
            }
        });
    });

    return authorizedTags;
}
