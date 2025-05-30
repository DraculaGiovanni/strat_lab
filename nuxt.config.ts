// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    [
      '@nuxt/ui',
      {
        colors: {
          'stratlab-green': '#2E5E2D',
          'stratlab-yellow': '#FDBF3C'
        }
      }
    ],
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts'
  ],

  css: ['~/assets/css/main.css'],

  fonts: {
    families:[
    {
      name: 'Montserrat', provider: 'google', weights: [500]
    }
  ]
},
future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27'
})