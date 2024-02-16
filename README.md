#### Ce site (www.fa2v.fr) s'appuie sur vitepress
#### Le thème par défaut est utilisé, avec une légère personnalisation (couleur lien, bouton) -> .vitepress/theme/index.js

#### Derniers travaux :
15/01/2023 : initialisation (https://vitepress.dev/)
15/02/2024 : mise à jour technique (suppression de yarn, passage à npm, suppression de vitepress-blog-util)

---

Dépendances :
- npm add -D vitepress
- npm i sass
- npm i sharp (package utilisé dans le script webp.js pour transformer en masse les images png/jpg en webp)

---
Pour créer son repo GIT, utiliser l'interface de GitHub puis en local :
- git init
- git add -A
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/smartduck66/fa2v.git
- git push -u origin main

Pour développer et tester en local :
- npm run docs:dev
- http://localhost:5173 lance le vite dev server (on bénéficie immédiatement du HMR, Hot Module Reload)

Pour mettre à jour les modules NPM (npm uninstall 'module' pour la désinstallation) :
- npm install npm@latest -g (dernière version NPM)
- npm -g upgrade typescript (update typescript)
- npx npm-check-updates -u (vérification des modules à migrer)
- npm install (migration)
- npm list vue (check dernière version de vue, par exemple)

Pour construire le site statique (->dist) qui sera publié sur Netlify :
- npm run docs:build pour un preview en local
- git add -A
- git commit -m "new fonctions"
- git push
- Netlify le publie automatiquement en production sur https://splendid-chaja-18242c.netlify.app/
- Plugins sitemap/submit sitemap installés sous netlify pour générer automatiquement, à chaque build, sitemap.xml (puis diffuser automatiquement à Google & yandex)

Caractères accentués avec le pavé numérique :

    À : «Alt» + 0192
    Ç : «Alt» + 0199
    É : «Alt» + 0201
    È : «Alt» + 0200
    Ù : «Alt» + 0217

Nouvelle extension IDE VSCODE installée : Volar
Pour formater un document rapidement via l'extension prettier, la commande de touches ALT + F est configurée