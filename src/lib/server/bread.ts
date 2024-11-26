import db from './'
import { eq } from 'drizzle-orm'
import { breadProducts } from '$lib/db/schema'

async function showOne() {
  const breads = await db.select({
    id: breadProducts.id,
    bread: breadProducts.bread
  })
  .from(breadProducts)
  .orderBy(breadProducts.id)
  return breads
}

async function create(dataBreads: typeof breadProducts.$inferInsert) {
  await db.insert(breadProducts).values(dataBreads);
}

async function show(slug: number) {
  const bread = await db.select().from(breadProducts).where(eq(breadProducts.id, slug)).then(r => r[0]) // mengubah array menjadi objek,
  return bread
}

export { showOne, create, show }