import { int, mysqlTable, varchar, text } from 'drizzle-orm/mysql-core';

const breadProducts = mysqlTable('bread_products', {
  id: int("id").autoincrement().primaryKey(),
  bread: varchar({ length: 77 }).notNull().unique(),
  price: int().notNull(),
  stock: int().notNull(),
  description: text(),
});

export default breadProducts