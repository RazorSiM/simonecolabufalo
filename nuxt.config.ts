// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/robots", "@vueuse/nuxt", "@unocss/nuxt"],
  css: ["@unocss/reset/tailwind.css", "~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Simone Colabufalo - Engineering Team Lead",
      meta: [
        {
          name: "description",
          content:
            "Engineering team lead focused on software architecture, product delivery, and building effective teams.",
        },
        { property: "og:site_name", content: "Simone Colabufalo" },
        { property: "og:locale", content: "en_US" },
      ],
    },
  },

  content: {
    markdown: {
      tags: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
      },
    },
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"]
    }
  },

  compatibilityDate: "2024-07-21"
})
