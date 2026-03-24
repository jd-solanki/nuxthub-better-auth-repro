// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxthub/core'],
  hub: {
    db: {
      dialect: 'postgresql',
      casing: 'snake_case',
    },
  },
  // $production: {
  //   hub: {
  //     kv: { // Recommended for auth session storage
  //       driver: 'cloudflare-kv-binding',
  //       namespaceId: '253e9d877c534e4ea2ebf613edb6b5d1',
  //     },
  //     db: {
  //       dialect: 'postgresql',
  //       casing: 'snake_case',
  //       connection: {
  //         hyperdriveId: '<id>',
  //       },
  //     },
  //   },
  // },
})