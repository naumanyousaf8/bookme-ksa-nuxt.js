// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  components: true,

  ssr: false, // GitHub Pages needs client-side rendering

  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/'] // ✅ Ensure homepage is generated!
    }
  },

  app: {
    baseURL: '/bookme-ksa-nuxt.js/', // ✅ Must exactly match your GitHub repo name
    head: {
      title: 'Bookme Saudi Arabia - Book Flights Hotels & Events Online',
      meta: [
        { name: 'description', content: 'Book cheap flights, hotels and events online in Saudi Arabia with Bookme KSA' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
