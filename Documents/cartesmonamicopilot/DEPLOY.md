Déployer sur Vercel

1. Installer l'outil Vercel (optionnel) :

```bash
npm i -g vercel
```

2. Depuis la racine du projet, lancer :

```bash
vercel
```

3. Ou connecter votre dépôt GitHub sur vercel.com et importer le projet. Vercel détecte automatiquement Vite + Vue.

Notes:
- Assurez-vous que la variable d'environnement `VITE_MAPBOX_TOKEN` est configurée dans le tableau de bord Vercel si vous utilisez Mapbox styles privés.
- Pour éviter les appels externes indésirables, le projet utilise un fond blanc et n'affiche que les calques GeoJSON et overlays.
