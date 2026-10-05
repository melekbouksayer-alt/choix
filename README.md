# Gestion Avions — Projet Angular

Projet réalisé à partir des notions des 3 ateliers Angular fournis :
- Atelier 01 : projet Angular, Bootstrap, Navbar, composants, routing, data binding et `@for`.
- Atelier 02 : modèle `Avion`, formulaire avec `FormsModule`/`ngModel`, service et ajout.
- Atelier 03 : suppression avec confirmation, modification, `ActivatedRoute`, `Router` et ID en lecture seule.

## Compatibilité
- Node.js : **22.11.0**
- Angular : **19.2.17**
- Bootstrap : **5.3.3**

Angular 19.2.x accepte Node.js `^22.0.0`, donc Node 22.11.0 est compatible.

## Installation

Dans le dossier du projet :

```bash
npm install
npm start
```

Puis ouvrir : http://localhost:4200

## Routes
- `/avions` : liste
- `/add-avion` : ajout
- `/updateAvion/:id` : modification
- `/` : redirection vers `/avions`

## Remarque
Les données sont stockées dans le tableau du `AvionService`, comme dans les TP. Elles sont donc en mémoire et sont réinitialisées lorsque l'application est relancée.
