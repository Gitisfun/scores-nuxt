// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "nuxt-simple-sitemap", "@nuxtjs/google-adsense", "@nuxtjs/device"],
  sitemap: {
    hostname: "https://kavvv-uitslagen.be",

    urls: async () => {
      const urls = [
        //'https://scraper-scores-antwerpen.herokuapp.com/api/clubs',
        "https://scraper-scores.herokuapp.com/api/clubs",
        //"https://scraper-scores.herokuapp.com/api/clubs",
      ];

      try {
        const requests = urls.map((url) => fetch(url));
        const responses = await Promise.all(requests);

        const responseData = await Promise.all(responses.map((response) => response.json()));

        // @ts-ignore
        return responseData[0].map((club) => ({
          loc: `/blog/${club.slug}`,
          changefreq: "weekly",
          priority: 0.8,
        }));
        // Do something with the response data
      } catch (error) {
        // Handle any errors that occurred during the requests
        return [];
      }
      //return [...responseData[0], ...responseData[1].map((club) => ({
    },
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
