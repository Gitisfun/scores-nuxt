// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "nuxt-simple-sitemap", "@nuxtjs/google-adsense", "@nuxtjs/device"],
  sitemap: {
    hostname: "https://kavvv-uitslagen.be",
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  "google-adsense": {
    id: "ca-pub-9928832567373030",
  },
});
