# Beef House Marseille — Vite + JavaScript

Recréation du site https://beefhouse-marseille.fr/ en JavaScript natif, CSS et Vite. Aucun framework front-end ni service de construction du site d'origine n'est requis.

## Démarrer

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Le dossier `dist/` contient le site prêt à héberger. Pour un hébergement statique, rediriger les routes inconnues vers `index.html` (mode SPA). Les neuf routes secondaires conservent les chemins du site de référence.

## Organisation

- `src/main.js` : composants, navigation, galerie, onglets et formulaire.
- `src/style.css` : styles et adaptation mobile.
- `src/pages.json` : textes et images des dix pages.
- `src/menu.html` : contenu des cinq catégories de la carte.
- `public/images/` : images du site de référence et carte PDF.
- `public/fonts/` : polices locales Playfair Display et DM Sans.

## Fonctionnement

- Menus déroulants accessibles au clavier et menu mobile.
- Carte à onglets, navigation par flèches, Home et End.
- Galerie avec agrandissement, précédent/suivant, fermeture par Échap et retour du focus.
- Réservations vers le service Dish existant, téléphone, réseaux sociaux et Google Maps.
- Formulaire de contact avec validation : il prépare un SMS que le visiteur doit envoyer dans son application. Aucun message n'est envoyé automatiquement. L'envoi par email du site original n'est pas connecté : il nécessite un service d'envoi et une adresse destinataire.

Les images et textes proviennent du site de référence consulté le 21 septembre 2026. Les statistiques et avis sont des contenus statiques repris de cette référence. Leur utilisation conserve les droits de leurs propriétaires respectifs. Les photos et polices sont servies localement ; Google Maps et Dish restent des services externes.

La version reprend l'identité et les contenus du site tout en adaptant certaines sections et interactions ; ce n'est pas une copie pixel par pixel.
