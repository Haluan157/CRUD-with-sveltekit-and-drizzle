import { mysqlTable, int, varchar, text, boolean } from "drizzle-orm/mysql-core"

export const breadProducts = mysqlTable("bread_products", {
	id: int().autoincrement().primaryKey(),
	bread: varchar({ length: 77 }).notNull().unique(),
	price: int().notNull(),
	stock: int().notNull(),
	description: text().default('NULL'),
	author: varchar({ length: 255 }).notNull(),
});

export const user = mysqlTable("user", {
	id: int().autoincrement().primaryKey(),
	name: varchar({ length: 30 }).notNull().unique(),
	email: varchar({ length: 255 }).notNull().unique(),
	password: varchar({ length: 255 }).notNull(),
	role: varchar({ length: 5, enum: ["admin", "mod","user"]}).default('user'),
	nd: boolean().default(false)
})