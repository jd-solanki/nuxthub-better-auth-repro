import { schema } from '@nuxthub/db'
import { defineServerAuth } from '@onmax/nuxt-better-auth/config'
import { hashPassword, verifyPassword } from '~~/server/utils/password'

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
          // Update last sign in time on session create on user table
          const result = await db.select().from(schema.session).limit(1)
          console.log('session query result:', result)
        },
      },
    },
  },
}))
