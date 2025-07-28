// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  components: true,

  ssr: false, // ✅ Client-side rendering only (important for GitHub Pages)

  nitro: {
    preset: 'static' // ✅ Generate static files for GitHub Pages
  },

  app: {
    baseURL: '/bookme-ksa-nuxt.js/', // ✅ EXACT repo name
    head: {
      title: 'Bookme Saudi Arabia - Book Flights Hotels & Events Online',
      meta: [
        { name: 'description', content: 'Book cheap flights, hotels and events online in Saudi Arabia with Bookme KSA' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
