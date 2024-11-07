// place files you want to import through the `$lib` alias in this folder.
import db from './db'
import bread from './db/schema'

async function show() {
  const breads = await db.select().from(bread);
  return breads
}

async function create(dataBreads: typeof bread.$inferInsert) {
  await db.insert(bread).values(dataBreads);
}

export { show, create }