import { schema } from '@nuxthub/db'

export const sessionHookAfter = async () => {
    // Update last sign in time on session create on user table
    const result = await db.select().from(schema.session).limit(1)
    console.log('[after] session query result:', result)
}