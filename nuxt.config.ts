// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@vueuse/nuxt", "@unocss/nuxt"],
  css: ["@unocss/reset/tailwind.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Simone Colabufalo - Web Designer & Developer",
      meta: [
        {
          name: "description",
          content:
            "Simone Colabufalo - Web Designer & Developer. I build things on the web, like this website",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@Razor_SiM" },
        { name: "twitter:creator", content: "@Razor_SiM" },
        { name: "twitter:title", content: "Simone Colabufalo" },
        {
          name: "twitter:description",
          content:
            "Simone Colabufalo - Web Designer & Developer. I build things on the web, like this website",
        },
        { name: "twitter:url", content: "https://simonecolabufalo.com" },
        { name: "og:title", content: "Simone Colabufalo" },
        {
          name: "og:description",
          content:
            "Simone Colabufalo - Web Designer & Developer. I build things on the web, like this website",
        },
        { name: "og:url", content: "https://simonecolabufalo.com" },
        { name: "og:site_name", content: "Simone Colabufalo" },
        { name: "og:type", content: "website" },
        { name: "og:locale", content: "en_US" },
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
});
