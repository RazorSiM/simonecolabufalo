// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/robots', '@nuxtjs/sitemap', '@vueuse/nuxt', '@unocss/nuxt'],
  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://simonecolabufalo.com',
    name: 'Simone Colabufalo',
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Simone Colabufalo - Engineering Team Lead',
      meta: [
        {
          name: 'description',
          content:
            'Engineering team lead focused on software architecture, product delivery, and building effective teams.',
        },
        { property: 'og:site_name', content: 'Simone Colabufalo' },
        { property: 'og:locale', content: 'en_US' },
      ],
    },
  },

  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },

  nitro: {
    preset: 'static',
    prerender: {
      autoSubfolderIndex: false,
      routes: ['/robots.txt', '/sitemap.xml'],
    },
  },

  compatibilityDate: '2026-09-03',
})
