import { schema } from '@nuxthub/db'
import { defineServerAuth } from '@onmax/nuxt-better-auth/config'

export default defineServerAuth(({ db }) => ({
  emailAndPassword: { enabled: true },
  databaseHooks: {
    session: {
      create: {
        async after(session, _ctx) {
          // Update last sign in time on session create on user table
          const result = await db.select().from(schema.session).limit(1)
          console.log("session query result:", result)
        },
      }
    }
  }
}))
