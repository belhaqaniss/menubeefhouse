# Publication sur menu.beefhouse-marseille.fr

La version en une seule page, avec les photos et la carte, se construit avec :

```sh
npm run build:subdomain
```

Le contenu de `dist-subdomain/` doit être déposé à la racine web de l’hébergement associé à `menu.beefhouse-marseille.fr`. Les ressources utilisent des chemins à partir de `/`, sans préfixe `/menu/`.

Il faut d’abord disposer d’un hébergement accessible et y configurer ce nom de domaine. L’enregistrement DNS `menu` doit ensuite pointer vers la cible exacte fournie par cet hébergement (adresse IP ou cible CNAME). Activer le certificat HTTPS pour ce sous-domaine et vérifier le site avant de partager son adresse.

Le domaine principal et ses enregistrements existants n’ont pas besoin d’être remplacés. Un enregistrement DNS seul ne contient pas les fichiers du site et ne constitue pas un hébergement.

La version pour le sous-dossier `/menu/` reste disponible via `npm run build:hostinger`.
