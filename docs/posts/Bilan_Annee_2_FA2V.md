---
title: Bilan de ma 2ème année d'entrepreneuriat
date: 2024-12-09
category:
  - FA2V
tag:
  - Entrepreneuriat
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>
<br><br>
![IMG](/assets/img/pharaon_56.webp "Pharaon Magazine")
<br>

Le premier quadrimestre de l'année 2024 a vu la fin de ma collaboration avec [Better World] : j'ai en effet souhaité explorer d'autres horizons que le *business development*. C'est tout l'intérêt d'avoir construit une activité d'indépendant :wink:

Mon frère m'a alors proposé de refondre l'un des sites Web relatifs à son [activité d'édition], en l'occurence Pharon Magazine. La v1 de ce site avait été lancée en 2011 et avait effectivement besoin d'un "dépoussiérage" : son *look* était clairement dépassé, il n'était pas *responsive* et le développeur qui le maintenait partait en retraite... Les conditions étaient donc réunies pour une refonte en profondeur.

Avant de me lancer dans l'aventure, j'ai pris un mois pour tester les différentes technologies que j'avais en tête et, surtout, monter un *spike* sur la partie la plus importante : le tunnel de vente, la gestion du panier, l'interfaçage avec Stripe. Même si j'avais déjà approché ces éléments avec le site [Botanical], je voulais m'aguerrir et avoir plus de recul pour estimer le temps de travail à fournir. 

Débuté réellement le 9 juin, le coeur du développement du *front* et du *back office* s'est étalé jusqu'à début septembre. Ensuite, une période approfondie de tests et d'ajustements a permis de corriger divers *bugs* mais, somme toute, assez peu.

Le rédacteur en chef a pris la décision de lancer seulement le 1er décembre, afin de bien gérer la **migration des données** : plus de 3.000 utilisateurs, des milliers de commandes et d'articles éditoriaux, etc.

Qu'est-ce que je retiens de ce premier grand retour au code, avec un site éditorial/e-commerce désormais en production ? Je dirais trois choses principales :

- Un véritable plaisir dans l'exercice de la **programmation Web**, avec une expérience développeur (DX) sans cesse améliorée via des outils comme Vite, Netlify-CLI ou encore Chat GPT.
- L'importance de démarrer le développement avec une **conception professionnelle de l'interface** (UX/UI), en général sous Figma : plus elle est précise, plus vous pouvez vous concentrer sur le code.
- La facilité de publier quotidiennement une nouvelle version du site permet au donneur d'ordre de constater l'avancement et de faire des retours **en boucle courte** : plus d'effet tunnel !

Je ne sais pas ce que me réservera professionnellement 2025 mais parfaire mon expérience de développeur et construire d'autres sites Web me plaîrait :blush:

L'ancien site développé sous Drupal était hébergé chez OVH ; le changement de DNS vers Netlify s'est propagé en quelques heures... Et voici le [résultat]. A vous de juger ! Et si l'Égypte vous intéresse, n'hésitez pas et abonnez-vous sans tarder à Pharaon Magazine :smiley:
<br><br>
::: tip Les principaux composants de la stack technique
Vue.js, PrimeVue, Turso, Sengrid, Cloudinary, Stripe, Auth0, Netlify (hébergement)
:::

[> Accueil](/) [> Tous les articles](/articles)

[Better World]: https://www.better-world.io
[activité d'édition]: https://www.neferit.fr/
[Botanical]: https://jazzy-florentine-dc0c2d.netlify.app/
[résultat]: https://www.pharaon-magazine.fr/



