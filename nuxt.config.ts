// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxthub/core', '@onmax/nuxt-better-auth'],
  hub: {
    db: {
      dialect: 'postgresql',
      casing: 'snake_case',
    },
  },
  nitro: {
    imports: {
      dirs: ['server/utils/**']
    },
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      wrangler: {
        observability: {
          logs: {
            enabled: true,
            invocation_logs: true,
          },
        },
      },
    },
  },
  $production: {
    hub: {
      db: {
        dialect: 'postgresql',
        casing: 'snake_case',
        connection: {
          hyperdriveId: '53ea7174566e477584f3daf4aaca6e36', // replace with your Hyperdrive ID
          url: process.env.DATABASE_URL, // Temp fix until PR https://github.com/nuxt-hub/core/pull/868 is merged
        },
      },
    },
  },

  // Nuxt Better Auth
  auth: {
    redirects: {
      login: '/login',
      guest: '/',
      authenticated: '/app',
      logout: '/login',
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/app/**': { auth: { only: 'user' } },
    '/login': { auth: { only: 'guest' } },
    '/register': { auth: { only: 'guest' } },
  },
})