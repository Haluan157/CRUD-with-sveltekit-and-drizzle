import { user } from '$lib/db/schema'
import db from './'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcrypt'

async function login(dd: {
    email: string
    password: string
  }) {
  const sl = await db.select().from(user).where(eq(user.email, dd.email)).then(r => r[0])
  
  if (sl) {
    const fact = await bcrypt.compare(dd.password, sl.password)
    if (fact) {
      return { name: sl.name, email: sl.email, role: sl.role }
    } else {
      return "fail"
    }
  } else {
    return "fail"
  }
}

async function register(dat: typeof user.$inferInsert  ) {
  await db.insert(user).values(dat)
}

export { login, register }