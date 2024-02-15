import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FA2V",
  lang: "fr-FR",
  description: "Description des activités de l'entreprise FA2V",

  head: [
    ["script", { async: '',src: "https://www.googletagmanager.com/gtag/js?id=G-74G2EEG8BG" }],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-74G2EEG8BG');",
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      {
        text: "Accueil",
        link: "/",
      },
      {
        text: "Mes expertises",
        link: "/expertises/product_management",
      },
      {
        text: "Blog",
        link: "/articles.md",
      },
      {
        text: "A propos",
        link: "/about.md",
      },
      {
        text: "Contact",
        link: "/contact.md",
      },
    ],

    sidebar: {
      // This sidebar gets displayed when user is
      // under `Mes expertises` directory.
      "/expertises/": [
        {
          text: "Product management",
          items: [
            { text: "Présentation", link: "/expertises/product_management" },
            //{ text: 'Missions', link: '/expertises/missions_product_manager' }
          ],
        },
        {
          text: "Management de transition",
          items: [
            { text: "Présentation", link: "/expertises/management_transition" },
            //{ text: 'Missions', link: '/expertises/missions_manager_transition' }
          ],
        },
        {
          text: "Conseil en transformation digitale",
          items: [
            { text: "Présentation", link: "/expertises/conseil_transformation_digitale" },
            //{ text: 'Missions', link: '/expertises/missions_consultant_transformation_digitale' }
          ],
        },
        {
          text: "Ingénierie logicielle",
          items: [
            { text: "Présentation", link: "/expertises/ingenierie_logicielle" },
            //{ text: 'Missions', link: '/expertises/missions_ingénieur_logiciel' }
          ],
        },
      ],
    },

    socialLinks: [{ icon: "linkedin", link: "https://www.linkedin.com/in/atonic/" }],
    footer: {
      message: `Site généré avec VitePress - Hébergé @Netlify <br> Visitez le <a href="https://www.andretonic.fr">blog personnel</a> d'André Tonic`,
      copyright: `© SAS FA2V 2023 - Présent`,
    },
  },
});
