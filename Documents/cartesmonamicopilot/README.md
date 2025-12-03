# Cartes — Italie 2 (demo)

Projet Vite + Vue 3 minimal pour afficher des plans multi-étages et regrouper les parkings.

Pré-requis
- Node.js (16+ recommandé)

Installation
```bash
cd /home/gesukri/Documents/cartesmonamicopilot
npm install
```

Variables d'environnement
- Copiez `.env.example` en `.env` et ajoutez votre token Mapbox si vous voulez utiliser un style Mapbox.
	- Exemple `.env`:
		```
		VITE_MAPBOX_TOKEN=pk.your_mapbox_token_here
		```
	- Si `VITE_MAPBOX_TOKEN` est présent, l'application utilise automatiquement le style Mapbox `mapbox://styles/mapbox/light-v11`. Sinon un style public MapLibre est utilisé en fallback.

Lancer en dev
```bash
npm run dev
```

Notes
- Un `map.json` de démonstration multi-étages a été ajouté à la racine du projet. Remplacez-le par votre `map.json` réel si nécessaire (placer à la racine ou dans `public/`).
- L'interface démarre sur une "Page de garde" (onglet). Cliquez sur l'onglet `Italie 2` pour voir la carte.

Fichiers importants
- `src/components/MapView.vue` — logique de chargement de `/map.json`, sélection d'étage, regroupement des parkings.
- `map.json` — demo GeoJSON multi-étages.
