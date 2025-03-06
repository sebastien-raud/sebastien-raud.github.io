const code = `
[[<!DOCTYPE html>]]
<html [[lang="fr"]]>
[[<head>]]
    <meta [[charset="UTF-8"]]>
    <title>Recette de Pâte à Crêpes</title>
[[</head>]]
[[<body>]]
    <h1>Recette de Pâte à Crêpes</h1>
    <div class="ingredients">
        <h2>Ingrédients :</h2>
        [[<ul>]]
            <li>250g de farine</li>
            <li>4 œufs</li>
            <li>500ml de lait</li>
            <li>1 pincée de sel</li>
            <li>50g de beurre fondu (facultatif)</li>
        [[</ul>]]
    </div>
    <div class="instructions">
        <h2>Instructions :</h2>
        [[<ol>]]
            <li>Dans un grand bol, mélanger la farine et le sel.</li>
            <li>Faire un puits au centre et y ajouter les œufs.</li>
            <li>Commencer à mélanger en incorporant progressivement le lait pour éviter les grumeaux.</li>
            <li>Ajouter le beurre fondu si désiré et bien mélanger jusqu'à obtenir une pâte lisse.</li>
            <li>Laisser reposer la pâte au réfrigérateur pendant au moins 30 minutes.</li>
            <li>Faire chauffer une poêle légèrement huilée et y verser une louche de pâte.</li>
            <li>Cuire jusqu'à ce que les bords se décollent, puis retourner la crêpe et cuire de l'autre côté.</li>
            <li>Répéter jusqu'à épuisement de la pâte.</li>
        [[</ol>]]
    </div>
    <p>Bon appétit !</p>
</body>
</html>
`;

export default {
    code,
    lang: 'html'
};