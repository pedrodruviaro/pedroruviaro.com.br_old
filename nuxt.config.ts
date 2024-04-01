// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxt/content",
    "nuxt-marquee",
  ],

  googleFonts: {
    families: {
      Montserrat: [400, 600, 700, 900],
    },
  },

  css: ["~/assets/css/main.css"],

  content: {
    highlight: {
      theme: "dracula",
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap: (req) => `https://${req.headers.host}/sitemap.xml`,
  },
})
