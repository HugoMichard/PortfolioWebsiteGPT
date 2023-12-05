// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = '/PortfolioWebsiteGPT/'

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
    baseURL: baseURL,
    buildAssetsDir: 'assets',
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: `${baseURL}assets/images/favicon.ico` }]
    }
  }
})
