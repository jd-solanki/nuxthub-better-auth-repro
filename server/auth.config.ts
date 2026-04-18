import { defineServerAuth } from '@onmax/nuxt-better-auth/config'

export default defineServerAuth(({ db }) => ({
  emailAndPassword: {
    enabled: true,
    password: {
      hash: hashPassword,
      verify: verifyPassword,
    },
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
