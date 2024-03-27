// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/robots",
  ],

  googleFonts: {
    families: {
      Montserrat: [400, 600, 700, 900],
    },
  },

  css: ["~/assets/css/main.css"],
})
