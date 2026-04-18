import { defineServerAuth } from '@onmax/nuxt-better-auth/config'

export default defineServerAuth(({ db }) => ({
  emailAndPassword: {
    enabled: true,
  },
  databaseHooks: {
    session: {
      create: {
        async after() {
          await sessionHookAfter()
        },
      },
    },
  },
}))
