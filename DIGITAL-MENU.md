# Carte digitale Beef House

La page affichée par défaut est désormais uniquement la carte pour les clients à table. `src/digital-menu-data.js` contient les 48 entrées de plats et desserts (dont Wagyu & Sushi Rice présent dans deux catégories comme sur le PDF), les 9 accompagnements et les 9 sauces. Les noms, descriptions et prix proviennent du document bilingue fourni « BEEF HOUSE - STOP TROTTOIR - A2 VERTICAL.pdf ».

Les suppléments sont reproduits tels qu’indiqués sur le document, y compris la mention « Purée truffée (+5 €) » dans la rubrique Accompagnements (+5 €), et « Sauce à la truffe (+4 €) » dans Sauces (+3 €).

## Utilisation

- `npm run dev` : aperçu local.
- `npm run build` : version à publier sur Vercel ou à la racine de `menu.beefhouse-marseille.fr`, dans `dist/`.
- `npm run build:hostinger` : version pour un sous-dossier `/menu/`, dans `dist-hostinger/menu/`.
- `npm run build:subdomain` : même carte à la racine d’un sous-domaine, dans `dist-subdomain/`.

`vercel.json` configure la construction standard et le dossier `dist`. Aucun serveur applicatif ou base de données n’est nécessaire. Sur les environnements Windows restreints, ajouter `-- --configLoader native` à la commande npm si le chargement de la configuration échoue.

## Fonctionnalités

Français et anglais (`?lang=en`), navigation par catégories, recherche sans distinction de casse ni d’accents, prix visibles, lien vers le PDF d’origine et présentation mobile. Aucun compte client ou application à installer. Aucun panier ou système de commande.

Les anciens composants du site de présentation sont conservés dans les sources, mais ne sont plus chargés par `index.html`. Le PDF est disponible uniquement à la demande ; il n’est pas téléchargé lors de l’ouverture de la carte.

## QR code de table

Une fois la publication et le domaine HTTPS vérifiés, générer le QR code vers l’adresse définitive, idéalement `https://menu.beefhouse-marseille.fr/`. Ne pas imprimer de QR code vers une adresse localhost ou un aperçu temporaire. Les changements de carte à la même adresse ne nécessitent pas de réimprimer le QR code.
