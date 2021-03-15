require("dotenv").config();

export default {
  plugins: [{ src: "~/plugins/amplify.js", ssr: false }],
  ssr: false,
  srcDir: "src/",
  env: {
    API_KEY: process.env.API_KEY
  },

  modules: ["@nuxtjs/axios"],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxtjs-refresh",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify", "@nuxtjs/dotenv"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
