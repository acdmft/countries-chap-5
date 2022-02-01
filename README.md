## 01 - App.js

- Créez le state avec les clés suivantes :
    - `name` : string vide
    - `capital` : string vide
    - `flag` : string vide
    - `population` : string vide
    - `region` : string vide

- Affichez chaque state dans le render
- Avec la méthode `componentDidMount()`, faites un `fetch` vers l'url `https://restcountries.eu/rest/v2/name/france`
- Une fois que vous avez reçu la réponse du serveur, mettez à jour le state avec les bonnes données

## 02 - Bouton

- Créez un composant `Button.js` qui recevra les props `children` et `onClick`
- Appelez le bouton dans `App.js` 3 fois en haut du render avec les noms France, Brazil et Croatia
- Toujours dans `App.js`, écrivez la méthode `getCountry` avec le paramètre `country` et qui exécute un `fetch` vers une url qui sera complétée par le paramètre `country`. Comme dans le `componentDidMount`, la méthode met à jour le state avec les données reçues.
- Envoyez cette méthode dans les props `onClick` de vos boutons, avec le bon paramètre !

<aside>
💡 Pour l'url : réutilisez une partie de l'url du `fetch` dans `componentDidMount()` !

</aside>

## 03 - Card

- Créez un composant `Card.js` qui recevra toutes les clés du state de `App.js` en props, et qui les affichera comme dans l'image
- Dans `App.js`, remplacez la partie du render qui appelle le state par le composant `Card`

## 4 - Back is back!

Reprenez votre API du ***Projet Fullstack***, et lancez le serveur.

Maintenant on revient au **front end**! Dans votre projet **countries de react**, modifiez vos requêtes `fetch` pour qu'elle cible notre API qu'on vient de créer à la place de celle qu'on utilisait

## 5 - Style

- Utilisez Bootstrap pour rendre votre page propre, et utilisez du CSS pour ajouter votre touche perso / des animations !

## Bonus

- Remplacez les boutons par une search bar (input texte + bouton) pour rendre le tout plus flexible et moderne !