---
title: IBM Z XPLORE ou comment se former (ou se reformer) sans douleur à l'univers du Mainframe
date: 2025-12-27
category:
  - Mainframe
tag:
  - Formation
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>


![IMG](/assets/img/IBMZXPLORE.webp "IBM Z XPLORE")
<br>
Créé par IBM dans les années 60, le Mainframe continue à prendre en charge 70% des transactions mondiales en valeur et reste un asset informatique incontournable du secteur financier. Des centaines de milliards de lignes de Cobol délivrent quotidiennement des services-coeur de notre monde économique. Et *Big Blue* met à jour sa plateforme technologique très régulièrement : son dernier-né, le z17, offre une disponibilité imbattable **(99,99999%)**, une scalabilité sans pareil (jusqu'à 208 coeurs, 64 TB de mémoire, 10.000 VMs Linux sur un seul serveur !) et peut faire tourner tant z/OS que Linux avec tout son écosystème adjacent. Pour preuve, une grande banque américaine vient de consolider ses milliers de serveurs Linux **sur seulement quelques serveurs IBM Z** pour des raisons de coût, de réduction de consommation d'énergie et de simplicité d'administration. Bref, vous pouvez rencontrer ces machines ultra-performantes lors de votre carrière et il est judicieux de comprendre leur fonctionnement et leur mode d'intégration dans le monde informatique hybride d'aujourd'hui.

Vous pouvez toujours lire les milliers de page des ouvrages [IBM Redbooks] mais IBM met également à votre disposition une plateforme complète, pédestre et fort ludique qui vous permettra de découvrir en douceur le monde du Mainframe : [IBM Z XPLORE]. Une fois votre login créé, le site vous donne accès à de la documentation, des articles, des événements et à un parcours de formation encadré et progressif autour de deux axes :

- des leçons sous forme de fichiers PDF claires et concises, tant sur des outils historiques du Mainframe (RACF, CICS, JCL, REXX, Z/OS...) que sur des logiciels issus du monde open (USS, Python, Node)
  
- l'accès à un "vrai" Mainframe à distance, avec lequel vous pourrez interagir via les interfaces historiques type **TSO** mais aussi via des extensions VsCode telles que [zowe] ou *Db2 Developer*. Et là, vous ne faites plus la différence entre votre serveur Linux habituel hébergé dans le cloud et un Mainframe !

Des efforts manifestes ont été réalisés par IBM ces dernières années pour rapprocher au maximum le monde du Mainframe du monde *open* et cela se voit ! Le rachat de RedHat finalisé en 2019 n'y est d'ailleurs pas étranger et des projets comme [Open Mainframe] sponsorisé par la Linux Foundation apportent une ouverture que l'on croyait difficilement possible il n'y a encore qu'une quinzaine d'années.

Pour ma part, un récent projet dans le monde de l'Assurance m'a donné l'occasion de replonger dans l'univers du Mainframe, que j'avais croisé dans les années 1990 chez Generali Vie. A l'époque, j'avais mis en place du *rewamping* d'applications 3270 via les logiciels Attachmate :wink: L'enjeu étant de moderniser les applications hébergées sur le Mainframe, il m'a semblé essentiel d'appréhender leur environnement d'exécution, d'avoir un vernis minimal sur les différents outils d'exploitation et de coder en Cobol. 

Ce langage-vétéran vient de fêter ses **65 ans** l'année dernière et connaît des mises à jour de sa norme assez régulièrement (2002, 2014, 2023, pour les 3 dernières). Contrairement à ce que l'on pourrait penser de prime abord, il est tout à fait possible d'écrire du **code modulaire et même orienté objet** en Cobol. Mais il est vrai que la majorité des programmes en activité n'utilise pas les dernières nouveautés du langage, étant donné qu'ils ont été écrits depuis des dizaines d'années. La solution ? Les moderniser grâce à des outils généralement épaulés par l'IA qui permet de leur redonner une vraie jeunesse. IBM, parmi d'autres éditeurs, propose de tels outils ([Watson Code Assistant for Z]).

En conclusion, si vous souhaitez ajouter une expertise Mainframe à votre palette de compétences, tous les outils sont disponibles ! Votre parcours de formation sera d'ailleurs récompensé par des badges Credly que vous pourrez ajouter à votre profil LinkedIn :smile:
<br><br>
![IMG](/assets/img/Credly.webp "IBM Z Xplore Credly")
<br>

[> Accueil](/) [> Tous les articles](/articles)


[IBM Redbooks]: https://www.redbooks.ibm.com/
[IBM Z XPLORE]: https://ibmzxplore.influitive.com/users/sign_in
[zowe]: https://openmainframeproject.org/projects/zowe/
[Open Mainframe]: https://openmainframeproject.org/
[Watson Code Assistant for Z]: https://www.ibm.com/fr-fr/products/watsonx-code-assistant-z

