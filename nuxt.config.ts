// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ['~/plugins/api.ts'],
  imports: {
    dirs: ['stores', 'types'],
  },
  ssr: false,
  devtools: { enabled: false },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxtjs/robots'
  ],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  app: {
    baseURL: '/PortfolioWebsiteGPT/',
    buildAssetsDir: 'assets'
  },
})
