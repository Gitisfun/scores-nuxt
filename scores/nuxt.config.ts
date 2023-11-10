// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "nuxt-simple-sitemap", "@nuxtjs/google-adsense", "@nuxtjs/device", "nuxt-gtag"],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  gtag: {
    id: "G-NTLK8VMS5V",
    config: {
      page_title: 'KAVVV Uitslagen'
    }
  },
  sitemap: {
    hostname: "https://kavvv-uitslagen.be",
    urls: async () => [
      {
        url: "/club/Bobo-A",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Bobo-B",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/CP-Leeuw",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Cristal-Boys-A",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Cristal-Boys-B",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Cristal-Boys-C",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Davidskornuiten",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Dynamo-Wijndaal",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Eendracht-Vilvoorde",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-'t-Kasteeltje",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Borneo",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Cafeboontjes-A",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Cafeboontjes-B",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Cite",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Congo",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-De-Leeuwerik",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Depot",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Dogs-United",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-In-Onzen-Tijd",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Le-But",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Nederboelare",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Ons-Huis",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Patron",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Petit-St-Guidon",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Pichichi",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Pote-Age-Jette",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Safira",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Stroppen",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FC-Tref",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/FCS-Lembeek-2016",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Flora-Likert",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Flora-Likert-2",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Hangover-96",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Hoke",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Jungle-Boys",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/K.-SP.-Tange-A",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/K.sp.Tange-B",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Kv-SKO-Vollezele-A",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Kv-SKO-Vollezele-B",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Lokomotiv-Centrum-A",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Lokomotiv-Centrum-B",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Nickyspurters",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Nissan-Essenbeek-A",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Nissan-Essenbeek-B",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Peutie-1801",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/RC-Lamme-Guiche",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/SC-Duvelshoek",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Siccard-Boys",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Sila-United",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Simca-Boys",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Sparta-den-Bos-A",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Sparta-den-Bos-B",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Sporting-Affligem",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Sporting-Boys",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Sporting-Corner-9N",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Sporting-Oppem",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Staffteam",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Stinne-Boys",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/SV-Tijl",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/V.O.K.-Jezus-Eik-A",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/V.O.K.-Jezus-Eik-B",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/V.O.K.-Jezus-Eik-C",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VC-'t-Vraagteken",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VC-Bleuken-Langevelde",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Vc-Houtem-City",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VC-Visie",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-'t-Gareel-A",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-'t-Gareel-B",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-Bouwvrienden",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-Buizingen",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-De-Sjoeters-A",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-De-Sjoeters-B",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-De-Sjoeters-YB",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-De-Vissers",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-De-Vissers-Youth",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-De-Zwaanzers",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-Dilbeek",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-Eeksken",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-Hondzocht",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-Klein-Leeuw",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-Noorderlicht",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-Opel-Boys",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-Polder",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-Vaillant",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/VK-Young-Boys",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/Week-Sport",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/club/ZSV-Overijse",
        changefreq: "weekly",
        priority: 0.8,
      },
    ],
  },
  "google-adsense": {
    id: "ca-pub-9928832567373030",
  },
});
